var e={save:(e,t)=>{try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}};console.log(e);const t=document.querySelector(".contact-form");!function(){const o=e.load("formKey");if(!o)return;const r=JSON.parse(o);console.log(r),Object.entries(r).forEach((([e,o])=>{t.elements[e].value=o}))}(),t.addEventListener("input",(function(t){const{name:o,value:r}=t.target;let n=e.load("formKey");n=n||{},n[o]=r,e.save("formKey",n)}));
//# sourceMappingURL=form.84c3a15f.js.map
