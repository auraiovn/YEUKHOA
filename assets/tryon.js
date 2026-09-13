(function(){
  const state={stream:null,pose:null,raf:null,product:null,overlayImg:null,photo:null,photoMode:false,adjust:{scale:100,x:0,y:0},smooth:null,loadingPose:false};
  const $=id=>document.getElementById(id);
  function stageSize(){const canvas=$('tryonCanvas');const rect=canvas.parentElement.getBoundingClientRect();const dpr=Math.min(window.devicePixelRatio||1,2);canvas.width=Math.max(1,Math.round(rect.width*dpr));canvas.height=Math.max(1,Math.round(rect.height*dpr));return {w:canvas.width,h:canvas.height,dpr}}
  function setState(text){const el=$('tryonState');if(el)el.textContent=text}
  function prepare(product){state.product=product;state.photo=null;state.photoMode=false;state.smooth=null;state.adjust={scale:100,x:0,y:0};['fitScale','fitX','fitY'].forEach((id,i)=>{const el=$(id);if(el)el.value=i===0?100:0});loadOverlay(product);clearCanvas();const empty=$('cameraEmpty');if(empty)empty.hidden=false;setState('STEP INTO VIEW')}
  function loadOverlay(product){state.overlayImg=new Image();state.overlayImg.crossOrigin='anonymous';state.overlayImg.src=product?.overlay||product?.image||''}
  function updateAdjustments(v){state.adjust=v;if(state.photoMode)drawPhotoFrame()}
  function clearCanvas(){const c=$('tryonCanvas');if(!c)return;stageSize();c.getContext('2d').clearRect(0,0,c.width,c.height)}
  async function ensurePose(){
    if(state.pose)return state.pose;if(state.loadingPose)return null;state.loadingPose=true;setState('LOADING BODY TRACKING');
    try{
      if(!window.Pose){await new Promise((resolve,reject)=>{const s=document.createElement('script');s.src='https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.5/pose.js';s.onload=resolve;s.onerror=reject;document.head.appendChild(s)})}
      if(!window.Pose)throw new Error('Pose library unavailable');
      state.pose=new Pose({locateFile:file=>`https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.5/${file}`});
      state.pose.setOptions({modelComplexity:1,smoothLandmarks:true,enableSegmentation:false,minDetectionConfidence:.55,minTrackingConfidence:.55});
      state.pose.onResults(onResults);state.loadingPose=false;return state.pose;
    }catch(err){state.loadingPose=false;setState('CAMERA READY: USE PHOTO IF NEEDED');console.warn(err);return null}
  }
  async function startCamera(product){
    if(product)prepare(product);stopCamera();
    if(!navigator.mediaDevices?.getUserMedia){setState('CAMERA NOT AVAILABLE: UPLOAD A PHOTO');return}
    try{
      setState('ALLOW CAMERA ACCESS');
      state.stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user',width:{ideal:1280},height:{ideal:960}},audio:false});
      const video=$('tryonVideo');video.srcObject=state.stream;await video.play();video.style.opacity='0';const empty=$('cameraEmpty');if(empty)empty.hidden=true;state.photoMode=false;setState('STEP INTO VIEW');await ensurePose();loop();
    }catch(err){console.warn(err);setState('CAMERA BLOCKED: UPLOAD A PHOTO')}
  }
  function stopCamera(){
    if(state.raf)cancelAnimationFrame(state.raf);state.raf=null;
    if(state.stream){state.stream.getTracks().forEach(t=>t.stop());state.stream=null}
    const video=$('tryonVideo');if(video){video.pause();video.srcObject=null}
  }
  async function loop(){
    if(!state.stream)return;const video=$('tryonVideo');
    try{if(state.pose&&video.readyState>=2)await state.pose.send({image:video});else drawVideoOnly()}catch(err){drawVideoOnly()}
    state.raf=requestAnimationFrame(loop)
  }
  function drawVideoOnly(){
    const canvas=$('tryonCanvas');const {w,h}=stageSize();const ctx=canvas.getContext('2d');const video=$('tryonVideo');ctx.clearRect(0,0,w,h);drawCover(ctx,video,w,h,true)
  }
  function onResults(results){
    const canvas=$('tryonCanvas');const {w,h}=stageSize();const ctx=canvas.getContext('2d');ctx.clearRect(0,0,w,h);drawCover(ctx,results.image,w,h,true);
    const lm=results.poseLandmarks;if(!lm){setState('STEP INTO VIEW');state.smooth=null;return}
    const lS=lm[11],rS=lm[12],lH=lm[23],rH=lm[24];
    const ok=[lS,rS,lH,rH].every(p=>p&&((p.visibility??1)>.48));if(!ok){setState('KEEP YOUR UPPER BODY VISIBLE');return}
    // mirrored x because front camera image is mirrored on canvas
    const tform=coverTransform(results.image,w,h);const map=p=>({x:w-(tform.dx+p.x*tform.sw*tform.scale),y:tform.dy+p.y*tform.sh*tform.scale});const pts={ls:map(lS),rs:map(rS),lh:map(lH),rh:map(rH)};
    const shoulder=Math.hypot(pts.rs.x-pts.ls.x,pts.rs.y-pts.ls.y);const hip=Math.hypot(pts.rh.x-pts.lh.x,pts.rh.y-pts.lh.y);const torso=Math.hypot((pts.lh.x+pts.rh.x)/2-(pts.ls.x+pts.rs.x)/2,(pts.lh.y+pts.rh.y)/2-(pts.ls.y+pts.rs.y)/2);
    if(shoulder<w*.12){setState('MOVE CLOSER');return}if(shoulder>w*.62){setState('MOVE BACK SLIGHTLY');return}
    const centerX=(pts.ls.x+pts.rs.x+pts.lh.x+pts.rh.x)/4;const shoulderY=(pts.ls.y+pts.rs.y)/2;const angle=Math.atan2(pts.rs.y-pts.ls.y,pts.rs.x-pts.ls.x);
    const target={x:centerX,y:shoulderY+torso*.47,w:Math.max(shoulder*2.08,hip*1.72),h:torso*2.25,angle};
    state.smooth=smooth(state.smooth,target,.22);drawGarment(ctx,state.smooth,w,h);setState('LOOK DETECTED')
  }
  function smooth(prev,next,a){if(!prev)return next;const lerp=(x,y)=>x+(y-x)*a;return {x:lerp(prev.x,next.x),y:lerp(prev.y,next.y),w:lerp(prev.w,next.w),h:lerp(prev.h,next.h),angle:lerp(prev.angle,next.angle)}}
  function drawGarment(ctx,t,w,h){
    const img=state.overlayImg;if(!img?.complete||!img.naturalWidth)return;const s=(state.adjust.scale||100)/100;const dx=(state.adjust.x||0)/100*w*.22;const dy=(state.adjust.y||0)/100*h*.22;const drawW=t.w*s;const ratio=img.naturalHeight/img.naturalWidth;let drawH=drawW*ratio;const maxH=t.h*1.52;if(drawH>maxH){drawH=maxH}
    ctx.save();ctx.translate(t.x+dx,t.y+dy);ctx.rotate(t.angle);ctx.globalAlpha=.91;ctx.drawImage(img,-drawW/2,-drawH*.22,drawW,drawH);ctx.restore()
  }
  function coverTransform(source,w,h){const sw=source.videoWidth||source.naturalWidth||source.width||1;const sh=source.videoHeight||source.naturalHeight||source.height||1;const scale=Math.max(w/sw,h/sh);const dw=sw*scale,dh=sh*scale;return {sw,sh,scale,dw,dh,dx:(w-dw)/2,dy:(h-dh)/2}}
  function drawCover(ctx,source,w,h,mirror){
    const t=coverTransform(source,w,h);ctx.save();if(mirror){ctx.translate(w,0);ctx.scale(-1,1);ctx.drawImage(source,t.dx,t.dy,t.dw,t.dh)}else ctx.drawImage(source,t.dx,t.dy,t.dw,t.dh);ctx.restore()
  }
  function loadPhoto(file,product){
    if(product)prepare(product);stopCamera();const reader=new FileReader();reader.onload=()=>{const img=new Image();img.onload=()=>{state.photo=img;state.photoMode=true;const empty=$('cameraEmpty');if(empty)empty.hidden=true;setState('PHOTO READY: ADJUST FIT');drawPhotoFrame()};img.src=reader.result};reader.readAsDataURL(file)
  }
  function drawPhotoFrame(){
    const canvas=$('tryonCanvas');const {w,h}=stageSize();const ctx=canvas.getContext('2d');ctx.clearRect(0,0,w,h);if(!state.photo)return;drawCover(ctx,state.photo,w,h,false);const defaultT={x:w/2,y:h*.28,w:w*.42,h:h*.55,angle:0};drawGarment(ctx,defaultT,w,h)
  }
  window.addEventListener('resize',()=>{if(state.photoMode)drawPhotoFrame()});
  window.AURATryOn={prepare,startCamera,stopCamera,loadPhoto,updateAdjustments};
})();
