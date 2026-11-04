(function(){
var r=document.documentElement,b=document.getElementById('theme');

// Remember the chosen theme
try{var t=localStorage.getItem('theme');if(t)r.setAttribute('data-theme',t)}catch(e){}
b.addEventListener('click',function(){
var dark=r.getAttribute('data-theme')==='dark'||(!r.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme: dark)').matches);
var n=dark?'light':'dark';r.setAttribute('data-theme',n);
try{localStorage.setItem('theme',n)}catch(e){}
});

// Contact form: opens the visitor's email app with the details filled in
var cf=document.getElementById('cform');
if(cf){cf.addEventListener('submit',function(e){e.preventDefault();
var to='your.email@example.com'; // <-- put your email here
var n=document.getElementById('f-name').value,m=document.getElementById('f-email').value,s=document.getElementById('f-subject').value,t=document.getElementById('f-msg').value;
var body='Name: '+n+'\nEmail: '+m+'\n\n'+t;
window.location.href='mailto:'+to+'?subject='+encodeURIComponent(s)+'&body='+encodeURIComponent(body);
});}

// Highlight the current section in the nav
var links=[].slice.call(document.querySelectorAll('#nav a'));
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-40% 0px -55% 0px'});
document.querySelectorAll('section[id]').forEach(function(s){io.observe(s)});
})();