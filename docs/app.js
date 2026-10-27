'use strict';
function initNavigation(){
 const toggle=document.getElementById('menu-toggle');const nav=document.getElementById('primary-nav');
 const close=()=>{toggle.setAttribute('aria-expanded','false');nav.classList.remove('is-open');};
 toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
 nav.addEventListener('click',event=>{if(event.target.closest('a'))close();});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){close();toggle.focus();}});
 document.addEventListener('click',event=>{if(!event.target.closest('.site-header'))close();});
 matchMedia('(min-width:801px)').addEventListener('change',event=>{if(event.matches)close();});
}
function initGallery(){
 const dialog=document.getElementById('work-dialog');const image=document.getElementById('dialog-image');const caption=document.getElementById('dialog-caption');const closeButton=dialog.querySelector('.dialog-close');let trigger=null;
 document.querySelectorAll('[data-gallery]').forEach(button=>button.addEventListener('click',()=>{
  trigger=button;image.src=button.dataset.gallery;image.alt=button.querySelector('img').alt;caption.textContent=button.dataset.caption;dialog.showModal();document.body.classList.add('dialog-open');closeButton.focus();
 }));
 closeButton.addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();});
 dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');trigger?.focus({preventScroll:true});});
}
initNavigation();initGallery();
