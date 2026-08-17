const root=document.documentElement, button=document.getElementById('theme');
const saved=localStorage.getItem('theme');
if(saved) root.dataset.theme=saved;
function update(){button.textContent=root.dataset.theme==='dark'?'☀':'☾'}
button.onclick=()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('theme',root.dataset.theme);update()};
update();
