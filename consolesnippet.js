const d = window.chapterData;
const box = document.querySelector('#story-content') || document.querySelector('.story');
box.innerHTML = '';
box.classList.remove('selling-chapter','locked-chapter-blur-bg');
document.querySelectorAll('.purchase-locked,.locked-chapter-blur-bg .blur-overlay,.locked-chapter-content').forEach(e=>e.remove());
d.body.images.forEach(img=>{
  const i=document.createElement('img');
  i.src=img.url;i.style.cssText='display:block;width:100%;max-width:800px;margin:0 auto;';
  box.appendChild(i);
});
if(d.body.footnote){const f=document.createElement('div');f.innerHTML=d.body.footnote;f.style.cssText='padding:16px;font-size:16px;line-height:1.7;';box.appendChild(f);}
