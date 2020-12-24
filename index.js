function s(k,v){$("<div id="+v['id']+"> </div>").appendTo( "#root" ).attr("style","width:398px; height:122px; position:absolute");var x = $('#'+v['id']);
x[0].style.left = v['l']+'px';x[0].style.top = v['t']+'px';x[0].style.background = 'url('+v['u']+') no-repeat';x[0].style.animation= v['a'] + v['s'] +' ease-in-out infinite ';}
url='https://raw.githubusercontent.com/DeathBarmaglot/parket/main/index.json'
window.onload=function(){fetch(url).then((response) => {return response.json();}).then((ar) => {for (const [k,v] of Object.entries(ar)){s(k,v);}})}