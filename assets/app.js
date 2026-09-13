const AURA_PRODUCTS = [
  {
    id:'sand-layering-blazer',
    name:'Sand Layering Blazer Set',
    price:1290000,
    category:'Tailoring',
    type:'blazer',
    audience:'Unisex',
    image:'assets/product-sand-blazer.webp',
    overlay:'assets/try-men-sand-blazer-alpha.png',
    detail1:'assets/campaign-hero.webp',
    detail2:'assets/campaign-feedback.webp',
    live:true,
    badge:'Live Try On',
    stock:18,
    colors:[['Sand','#d3c3ac'],['Cream','#f4f0df'],['Ink','#232323']],
    sizes:['XS','S','M','L','XL'],
    short:'Soft tailoring with a relaxed shoulder and an easy full length trouser.',
    material:'68% recycled polyester, 28% viscose, 4% elastane.',
    fit:'Relaxed through the shoulder and leg. Choose your usual size for the intended line.',
    care:'Cold gentle wash. Hang dry. Steam on low heat.',
    why:'A simple coordinated set that makes getting dressed faster while still looking considered.'
  },
  {
    id:'stone-open-collar-set',
    name:'Stone Open Collar Set',
    price:1090000,
    category:'Knitwear',
    type:'knitwear',
    audience:'Men',
    image:'assets/product-stone-knit.webp',
    overlay:'assets/try-men-stone-knit-alpha.png',
    detail1:'assets/editorial-men-reference.webp',
    detail2:'assets/campaign-blue-accessories.webp',
    live:true,
    badge:'Live Try On',
    stock:11,
    colors:[['Stone','#cbc7bd'],['Cream','#eae3d4'],['Charcoal','#3c3c3b']],
    sizes:['S','M','L','XL'],
    short:'An open collar knit and straight trouser set for polished everyday dressing.',
    material:'58% cotton, 38% recycled polyester, 4% elastane.',
    fit:'Relaxed fit. The knit sits cleanly through the shoulder with room through the body.',
    care:'Gentle machine wash. Reshape while damp. Lay flat to dry.',
    why:'The open collar frames the face while the straight trouser keeps the silhouette calm.'
  },
  {
    id:'ivory-taupe-set',
    name:'Ivory Sculpt Shirt Set',
    price:990000,
    category:'Separates',
    type:'separates',
    audience:'Women',
    image:'assets/product-ivory-set.webp',
    overlay:'assets/try-women-ivory-taupe-alpha.png',
    detail1:'assets/editorial-women-reference.webp',
    detail2:'assets/campaign-accessories.webp',
    live:true,
    badge:'Live Try On',
    stock:22,
    colors:[['Ivory','#f3efe4'],['Taupe','#a99b91'],['Blush','#e7a0a2']],
    sizes:['XS','S','M','L'],
    short:'A crisp ivory top with fluid taupe trousers for an easy clean silhouette.',
    material:'Shirt: 100% cotton. Trouser: 64% viscose, 32% recycled nylon, 4% elastane.',
    fit:'Fitted through the shirt waist with relaxed trousers. Choose your usual size.',
    care:'Cold wash with similar colours. Air dry. Warm iron if needed.',
    why:'The contrast between a crisp top and soft trouser gives the outfit structure without stiffness.'
  },
  {
    id:'coral-tailored-set',
    name:'Coral Tailored Set',
    price:1390000,
    category:'Tailoring',
    type:'blazer',
    audience:'Women',
    image:'assets/product-coral-blazer.webp',
    overlay:'assets/try-coral-blazer-alpha.png',
    detail1:'assets/campaign-hero.webp',
    detail2:'assets/campaign-feedback.webp',
    live:true,
    badge:'New',
    stock:9,
    colors:[['Coral','#f26f3c'],['Pink','#d1295d'],['Cream','#f4f2da']],
    sizes:['XS','S','M','L'],
    short:'A vivid tailored set designed to turn one strong colour into an easy outfit.',
    material:'70% recycled polyester, 26% viscose, 4% elastane.',
    fit:'Relaxed blazer with a clean straight trouser. Size down for a sharper line.',
    care:'Dry clean recommended. Steam lightly between wears.',
    why:'The colour carries the look, so the tailoring can stay simple and wearable.'
  },
  {
    id:'cobalt-knit-set',
    name:'Cobalt Knit Set',
    price:1190000,
    category:'Knitwear',
    type:'knitwear',
    audience:'Unisex',
    image:'assets/product-cobalt-knit.webp',
    overlay:'assets/try-cobalt-knit-alpha.png',
    detail1:'assets/campaign-blue-accessories.webp',
    detail2:'assets/campaign-shoes.webp',
    live:true,
    badge:'Limited',
    stock:7,
    colors:[['Cobalt','#155d9c'],['Ink','#171717']],
    sizes:['S','M','L','XL'],
    short:'A saturated blue knit set with the same relaxed proportions as our neutral edit.',
    material:'58% cotton, 38% recycled polyester, 4% elastane.',
    fit:'Relaxed through the shoulder, waist and leg. Choose your regular size.',
    care:'Gentle wash. Dry flat away from direct sunlight.',
    why:'Cobalt adds impact without changing the easy shape that makes the set useful.'
  },
  {
    id:'cobalt-strap-heel',
    name:'Cobalt Strap Heel',
    price:690000,
    category:'Shoes',
    type:'shoes',
    audience:'Women',
    image:'assets/campaign-shoes.webp',
    detail1:'assets/campaign-shoes.webp',
    detail2:'assets/campaign-blue-accessories.webp',
    live:false,
    badge:'Editor Pick',
    stock:15,
    colors:[['Cobalt','#155d9c']],
    sizes:['36','37','38','39','40'],
    short:'A glossy cobalt heel with a broad block base and slim front straps.',
    material:'Synthetic upper, cushioned footbed, rubber outsole.',
    fit:'True to size. If you are between sizes, choose the larger size.',
    care:'Wipe clean with a soft dry cloth. Store away from heat.',
    why:'The sculptural heel adds colour while the simple straps keep the overall look sharp.'
  },
  {
    id:'poppy-mini-bag',
    name:'Poppy Mini Bag',
    price:590000,
    category:'Accessories',
    type:'accessories',
    audience:'Unisex',
    image:'assets/campaign-bags.webp',
    detail1:'assets/campaign-bags.webp',
    detail2:'assets/campaign-accessories.webp',
    live:false,
    badge:'Bestseller',
    stock:24,
    colors:[['Pink','#e86892'],['Orange','#f8620d']],
    sizes:['ONE'],
    short:'A compact quilted bag with enough room for the essentials and a strong colour story.',
    material:'Recycled synthetic shell and lining with polished metal hardware.',
    fit:'One size. Adjustable strap can be worn on the shoulder or cross body.',
    care:'Wipe clean with a damp soft cloth. Store filled to keep its shape.',
    why:'A small bag can carry the colour in a neutral outfit without making the look feel busy.'
  },
  {
    id:'orange-frame-sunglasses',
    name:'Orange Frame Sunglasses',
    price:390000,
    category:'Accessories',
    type:'accessories',
    audience:'Unisex',
    image:'assets/campaign-accessories.webp',
    detail1:'assets/campaign-accessories.webp',
    detail2:'assets/campaign-bags.webp',
    live:false,
    badge:'New',
    stock:31,
    colors:[['Orange','#f8620d']],
    sizes:['ONE'],
    short:'A bold orange frame with a compact shape that works as a clear finishing detail.',
    material:'Acetate effect frame with UV400 category 3 lenses.',
    fit:'Medium fit. Frame width 142 mm.',
    care:'Store in the supplied hard case. Clean with the microfibre cloth.',
    why:'The warm orange frame echoes AURA colour without requiring a full bright outfit.'
  }
];

const formatVND = value => new Intl.NumberFormat('vi-VN',{style:'currency',currency:'VND',maximumFractionDigits:0}).format(value);
const byId = id => document.getElementById(id);

function productURL(id){return `product.html?product=${encodeURIComponent(id)}`}
function getProduct(id){return AURA_PRODUCTS.find(p=>p.id===id) || AURA_PRODUCTS[0]}
function getCart(){try{return JSON.parse(localStorage.getItem('auraCart')||'[]')}catch(e){return []}}
function setCart(cart){localStorage.setItem('auraCart',JSON.stringify(cart));updateCartBadges()}
function cartCount(){return getCart().reduce((sum,i)=>sum+i.qty,0)}
function updateCartBadges(){document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=cartCount())}
function toast(message){
  let el=byId('auraToast');
  if(!el){el=document.createElement('div');el.id='auraToast';el.className='toast';document.body.appendChild(el)}
  el.textContent=message;el.classList.add('show');clearTimeout(window.__auraToast);window.__auraToast=setTimeout(()=>el.classList.remove('show'),2600)
}

function addToCart(productId,qty=1,size='M',color='Default'){
  const cart=getCart();
  const key=`${productId}:${size}:${color}`;
  const existing=cart.find(i=>i.key===key);
  if(existing) existing.qty+=qty; else cart.push({key,productId,qty,size,color});
  setCart(cart);toast('Added to your AURA bag')
}

function productCard(product){
  const swatches=product.colors.slice(0,3).map(c=>`<span class="swatch" style="background:${c[1]}" title="${c[0]}"></span>`).join('');
  return `<article class="product-card" data-product-card data-type="${product.type}" data-audience="${product.audience.toLowerCase()}">
    <a href="${productURL(product.id)}" aria-label="View ${product.name}">
      <div class="product-media"><img src="${product.image}" alt="${product.name}" loading="lazy"><span class="product-badge">${product.badge}</span></div>
      <div class="product-copy"><h3>${product.name}</h3><div class="product-meta"><span>${product.category}</span><span>${formatVND(product.price)}</span></div><div class="swatches">${swatches}</div></div>
    </a>
    ${product.live?`<button class="product-try" type="button" data-tryon="${product.id}">TRY IT LIVE</button>`:''}
  </article>`
}

function renderProductGrid(targetId,items=AURA_PRODUCTS){
  const root=byId(targetId);if(!root)return;root.innerHTML=items.map(productCard).join('')
}

function initHeader(){
  updateCartBadges();
  const menu=byId('mobileMenu');
  const menuBtn=byId('menuButton');
  const menuClose=byId('menuClose');
  const close=()=>{menu?.classList.remove('open');document.body.classList.remove('lock');menuBtn?.setAttribute('aria-expanded','false')};
  menuBtn?.addEventListener('click',()=>{menu?.classList.add('open');document.body.classList.add('lock');menuBtn.setAttribute('aria-expanded','true')});
  menuClose?.addEventListener('click',close);menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));

  const search=byId('searchPanel');
  byId('searchButton')?.addEventListener('click',()=>{search?.classList.add('open');document.body.classList.add('lock');setTimeout(()=>byId('searchInput')?.focus(),80)});
  byId('searchClose')?.addEventListener('click',()=>{search?.classList.remove('open');document.body.classList.remove('lock')});
  search?.addEventListener('click',e=>{if(e.target===search){search.classList.remove('open');document.body.classList.remove('lock')}});
  const input=byId('searchInput');
  input?.addEventListener('input',()=>renderSearch(input.value));
  renderSearch('');
}

function renderSearch(query){
  const root=byId('searchResults');if(!root)return;
  const q=(query||'').trim().toLowerCase();
  const items=(q?AURA_PRODUCTS.filter(p=>`${p.name} ${p.category} ${p.short}`.toLowerCase().includes(q)):AURA_PRODUCTS.slice(0,4)).slice(0,6);
  root.innerHTML=items.map(p=>`<a class="search-result" href="${productURL(p.id)}"><img src="${p.image}" alt=""><span><strong>${p.name}</strong><small>${p.category}</small></span><span>${formatVND(p.price)}</span></a>`).join('') || '<p>No products found. Try another search.</p>'
}

function initHome(){
  renderProductGrid('featuredProducts',AURA_PRODUCTS.slice(0,4));
}

function initCategories(){
  renderProductGrid('categoryProducts');
  const form=byId('filters');
  const sort=byId('sortProducts');
  const apply=()=>{
    const types=[...form?.querySelectorAll('input[name="type"]:checked')||[]].map(i=>i.value);
    const audience=[...form?.querySelectorAll('input[name="audience"]:checked')||[]].map(i=>i.value);
    let items=AURA_PRODUCTS.filter(p=>(!types.length||types.includes(p.type))&&(!audience.length||audience.includes(p.audience.toLowerCase())));
    if(sort?.value==='price-low')items.sort((a,b)=>a.price-b.price);
    if(sort?.value==='price-high')items.sort((a,b)=>b.price-a.price);
    if(sort?.value==='new')items.sort((a,b)=>(b.badge==='New')-(a.badge==='New'));
    renderProductGrid('categoryProducts',items);byId('resultCount').textContent=`${items.length} products`;
  };
  form?.addEventListener('change',apply);sort?.addEventListener('change',apply);
  byId('clearFilters')?.addEventListener('click',()=>{form?.reset();apply()});
  byId('filterMobile')?.addEventListener('click',()=>{form?.classList.add('open');document.body.classList.add('lock')});
  byId('filterClose')?.addEventListener('click',()=>{form?.classList.remove('open');document.body.classList.remove('lock')});
}

function initProduct(){
  const root=byId('productPage');if(!root)return;
  const id=new URLSearchParams(location.search).get('product')||'sand-layering-blazer';
  const p=getProduct(id);
  document.title=`${p.name}: AURA`;
  const set=(id,val)=>{const el=byId(id);if(el)el.textContent=val};
  set('productName',p.name);set('productPrice',formatVND(p.price));set('productCategory',p.category);set('productShort',p.short);set('productStock',`${p.stock} pieces in stock`);set('productFit',p.fit);set('productMaterial',p.material);set('productCare',p.care);set('productWhy',p.why);
  const main=byId('productMainImage');if(main){main.src=p.image;main.alt=p.name}
  const d1=byId('productDetail1');if(d1){d1.src=p.detail1;d1.alt=`${p.name} styled editorial view`}
  const d2=byId('productDetail2');if(d2){d2.src=p.detail2;d2.alt=`${p.name} colour and styling detail`}
  const sizes=byId('productSizes');if(sizes){sizes.innerHTML=p.sizes.map((s,i)=>`<button class="size-button ${i===0?'selected':''}" type="button" data-size="${s}">${s}</button>`).join('');sizes.addEventListener('click',e=>{const b=e.target.closest('[data-size]');if(!b)return;sizes.querySelectorAll('button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected')})}
  const colors=byId('productColors');if(colors){colors.innerHTML=p.colors.map((c,i)=>`<button class="colour-button ${i===0?'selected':''}" type="button" data-color="${c[0]}" aria-label="${c[0]}"><span class="swatch" style="background:${c[1]}"></span>${c[0]}</button>`).join('');colors.addEventListener('click',e=>{const b=e.target.closest('[data-color]');if(!b)return;colors.querySelectorAll('button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected')})}
  const add=byId('addProduct');add?.addEventListener('click',()=>{const size=sizes?.querySelector('.selected')?.dataset.size||p.sizes[0];const color=colors?.querySelector('.selected')?.dataset.color||p.colors[0][0];addToCart(p.id,1,size,color)});
  const tryBtn=byId('productTry');if(tryBtn){if(p.live){tryBtn.hidden=false;tryBtn.dataset.tryon=p.id}else tryBtn.hidden=true}
  const related=AURA_PRODUCTS.filter(x=>x.id!==p.id).slice(0,4);renderProductGrid('relatedProducts',related);
}

function initAccordions(){
  document.querySelectorAll('.accordion > button').forEach(btn=>btn.addEventListener('click',()=>{const item=btn.closest('.accordion');const open=item.classList.toggle('open');btn.setAttribute('aria-expanded',open?'true':'false')}));
  document.querySelectorAll('.faq-question').forEach(btn=>btn.addEventListener('click',()=>{const item=btn.closest('.faq-item');const open=item.classList.toggle('open');btn.setAttribute('aria-expanded',open?'true':'false')}));
}

function initForms(){
  document.querySelectorAll('[data-newsletter]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const input=form.querySelector('input[type="email"]');if(input?.value){toast('Thanks. You are on the AURA list.');form.reset()}}));
  const contact=byId('contactForm');contact?.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(contact);const subject=encodeURIComponent(`AURA contact: ${data.get('topic')||'Question'}`);const body=encodeURIComponent(`Name: ${data.get('name')||''}\nEmail: ${data.get('email')||''}\nTopic: ${data.get('topic')||''}\n\n${data.get('message')||''}`);const status=byId('contactStatus');if(status)status.textContent='Your email app will open with the message ready to send.';window.location.href=`mailto:hello@aura.io.vn?subject=${subject}&body=${body}`});
}

function initCart(){
  const root=byId('cartItems');if(!root)return;
  const render=()=>{
    const cart=getCart();
    if(!cart.length){root.innerHTML='<div class="card" style="padding:32px"><h2>Your bag is empty</h2><p>Choose a piece that feels like you, then come back here.</p><a class="btn btn-pink" href="categories.html">SHOP PRODUCTS</a></div>';renderSummary();return}
    root.innerHTML=cart.map(item=>{const p=getProduct(item.productId);return `<article class="cart-item" data-key="${item.key}"><img src="${p.image}" alt="${p.name}"><div><h3>${p.name}</h3><p>Size: ${item.size}</p><p>Colour: ${item.color}</p><div class="qty"><button type="button" data-qty="-1" aria-label="Decrease quantity">&#8722;</button><span>${item.qty}</span><button type="button" data-qty="1" aria-label="Increase quantity">+</button></div><button class="text-link" type="button" data-remove style="border:0;background:transparent;padding:8px 0">Remove</button></div><div><strong>${formatVND(p.price*item.qty)}</strong></div></article>`}).join('');
    root.querySelectorAll('[data-key]').forEach(row=>{row.addEventListener('click',e=>{const key=row.dataset.key;const cart=getCart();const idx=cart.findIndex(i=>i.key===key);if(idx<0)return;if(e.target.closest('[data-qty]')){cart[idx].qty+=Number(e.target.closest('[data-qty]').dataset.qty);if(cart[idx].qty<=0)cart.splice(idx,1);setCart(cart);render()}if(e.target.closest('[data-remove]')){cart.splice(idx,1);setCart(cart);render()}})});renderSummary();
  };
  render();
}

function renderSummary(){
  const cart=getCart();const subtotal=cart.reduce((sum,item)=>sum+getProduct(item.productId).price*item.qty,0);const shipping=subtotal>=399000||subtotal===0?0:49000;const total=subtotal+shipping;
  document.querySelectorAll('[data-subtotal]').forEach(el=>el.textContent=formatVND(subtotal));document.querySelectorAll('[data-shipping]').forEach(el=>el.textContent=shipping?formatVND(shipping):'Free');document.querySelectorAll('[data-total]').forEach(el=>el.textContent=formatVND(total));
}

function initCheckout(){
  if(!byId('checkoutForm'))return;
  renderSummary();
  const cart=getCart();const root=byId('checkoutItems');root.innerHTML=cart.length?cart.map(item=>{const p=getProduct(item.productId);return `<div class="summary-row"><span>${p.name} x ${item.qty}</span><strong>${formatVND(p.price*item.qty)}</strong></div>`}).join(''):'<p>Your bag is empty.</p>';
  byId('checkoutForm').addEventListener('submit',e=>{e.preventDefault();if(!cart.length){toast('Add a product before checkout');return}localStorage.removeItem('auraCart');location.href='confirmation.html'});
}

function initTryOn(){
  const modal=byId('tryonModal');if(!modal)return;
  let product=null;
  document.addEventListener('click',e=>{const btn=e.target.closest('[data-tryon]');if(!btn)return;e.preventDefault();product=getProduct(btn.dataset.tryon);openTryOn(product)});
  byId('tryonClose')?.addEventListener('click',closeTryOn);
  modal.addEventListener('click',e=>{if(e.target===modal)closeTryOn()});
  byId('tryonAdjust')?.addEventListener('click',()=>byId('adjustBox')?.classList.toggle('open'));
  byId('cameraStart')?.addEventListener('click',()=>window.AURATryOn?.startCamera(product));
  byId('cameraStop')?.addEventListener('click',()=>window.AURATryOn?.stopCamera());
  byId('photoUpload')?.addEventListener('change',e=>{const file=e.target.files?.[0];if(file)window.AURATryOn?.loadPhoto(file,product)});
  ['fitScale','fitX','fitY'].forEach(id=>byId(id)?.addEventListener('input',()=>window.AURATryOn?.updateAdjustments({scale:Number(byId('fitScale').value),x:Number(byId('fitX').value),y:Number(byId('fitY').value)})));
  function openTryOn(p){modal.classList.add('open');document.body.classList.add('lock');byId('tryonProductName').textContent=p.name;byId('tryonState').textContent='STEP INTO VIEW';window.AURATryOn?.prepare(p)}
  function closeTryOn(){modal.classList.remove('open');document.body.classList.remove('lock');window.AURATryOn?.stopCamera()}
}

function initFilterDrawer(){}

function init(){
  initHeader();initHome();initCategories();initProduct();initAccordions();initForms();initCart();initCheckout();initTryOn();initFilterDrawer();
}

function initAssetFallbacks(){
  const fallback='assets/image-fallback.svg';
  const apply=img=>{
    if(!img || img.dataset.auraFallbackBound==='1') return;
    img.dataset.auraFallbackBound='1';
    img.addEventListener('error',()=>{
      if(img.dataset.auraFallbackApplied==='1') return;
      img.dataset.auraFallbackApplied='1';
      img.removeAttribute('srcset');
      img.src=fallback;
      img.alt=img.alt || 'AURA visual';
    });
  };
  document.querySelectorAll('img').forEach(apply);
  const observer=new MutationObserver(records=>records.forEach(record=>record.addedNodes.forEach(node=>{
    if(node.nodeType!==1) return;
    if(node.tagName==='IMG') apply(node);
    node.querySelectorAll?.('img').forEach(apply);
  })));
  observer.observe(document.documentElement,{childList:true,subtree:true});
}

document.addEventListener('DOMContentLoaded',init);

document.addEventListener('DOMContentLoaded',initAssetFallbacks);
