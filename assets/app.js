(function(){
  var root=document.documentElement;
  var themes=['auto','light','dark'];
  var fonts=['m','s','l'];
  function cycle(key,list,storage){
    var cur=root.getAttribute(key)||list[0];
    var next=list[(list.indexOf(cur)+1)%list.length];
    if(next===list[0]) root.removeAttribute(key); else root.setAttribute(key,next);
    try{localStorage.setItem(storage,next)}catch(e){}
  }
  var tb=document.getElementById('theme-btn');
  var fb=document.getElementById('font-btn');
  if(tb) tb.addEventListener('click',function(){cycle('data-theme',themes,'novel-theme')});
  if(fb) fb.addEventListener('click',function(){cycle('data-font',fonts,'novel-font')});
})();
