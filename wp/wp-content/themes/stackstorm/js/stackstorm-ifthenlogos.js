window.ks=function(){function z(a){return"undefined"!==typeof a}function v(a,b){return a&&0==a.indexOf(b)}function N(a){if(!isFinite(a))throw"non-finite value";}function O(a){if(14>=a)return 16;(a=X[a])||(a=0);return a}function D(a){return 0<=a?Math.pow(a,1/3):-Math.pow(-a,1/3)}function Y(a,b,c,d){if(0==a)return 0==b?b=-d/c:(a=Math.sqrt(c*c-4*b*d),d=(-c+a)/(2*b),0<=d&&1>=d?b=d:(d=(-c-a)/(2*b),b=0<=d&&1>=d?d:0)),b;var e=c/a-b*b/(a*a)/3;c=b*b*b/(a*a*a)/13.5-b*c/(a*a)/3+d/a;var l=c*c/4+e*e*e/27;b=-b/(3*a);if(0>=l){if(0==e&&0==c)return-D(d/a);a=Math.sqrt(c*c/4-l);d=Math.acos(-c/2/a);c=Math.cos(d/3);d=Math.sqrt(3)*Math.sin(d/3);a=D(a);e=2*a*c+b;if(0<=e&&1>=e)return e;e=-a*(c+d)+b;if(0<=e&&1>=e)return e;e=a*(d-c)+b;if(0<=e&&1>=e)return e}else{a=D(-c/2+Math.sqrt(l));c=D(-c/2-Math.sqrt(l));d=a+c+b;if(0<=d&&1>=d)return d;d=-(a+c)/2+b;if(0<=d&&1>=d)return d}return 0}function Z(a,b){if(48==a&&"number"===typeof b)return"#"+("000000"+b.toString(16)).substr(-6);if(64==a)return b=b.map(function(a){return a+
"px"}),b.join(",");if(96==a){a="";for(var c=b.length,d=0;d<c;d+=2)a+=b[d],a+=b[d+1].join(",");return a}if(80==a){if(0==b[0])return"none";a="";c=b.length;for(d=0;d<c;)a+=R[b[d]],1==b[d]?a+="("+b[d+1]+") ":5==b[d]?(a+="("+b[d+1]+"px "+b[d+2]+"px "+b[d+3]+"px rgba("+(b[d+4]>>>24)+","+(b[d+4]>>16&255)+","+(b[d+4]>>8&255)+","+(b[d+4]&255)/255+")) ",d+=3):a=2==b[d]?a+("("+b[d+1]+"px) "):7==b[d]?a+("("+b[d+1]+"deg) "):a+("("+(0>b[d+1]?0:b[d+1])+") "),d+=2;return a}return 32==a?b+"px":b}function w(a){return 0>=a?0:255<=a?255:a}function aa(a,b,c,d){if(16==a||32==a)return(c-b)*d+b;if(0==a)return.5>d?b:c;if(48==a){if("number"===typeof b&&"number"===typeof c){var e=1-d;return w(e*(b>>16)+d*(c>>16))<<16|w(e*(b>>8&255)+d*(c>>8&255))<<8|w(e*(b&255)+d*(c&255))}return.5>d?b:c}if(64==a){0==b.length&&(b=[0]);0==c.length&&(c=[0]);var l=b.length;b.length!=c.length&&(l=b.length*c.length);var h=[];for(a=0;a<l;++a){var f=b[a%b.length];var g=(c[a%c.length]-f)*d+f;0>g&&(g=0);h.push(g)}return h}if(96==a){if(b.length!=c.length)return.5>d?b:c;l=b.length;h=[];for(a=0;a<l;a+=2){if(b[a]!==c[a])return.5>d?b:c;h[a]=b[a];h[a+1]=[];for(f=0;f<b[a+1].length;++f)h[a+1].push((c[a+1][f]-b[a+1][f])*d+b[a+1][f])}return h}if(80==a){l=b.length;if(l!=c.length)return.5>d?b:c;h=[];for(a=0;a<l;){if(b[a]!=c[a]||1==b[a])return.5>d?b:c;h[a]=b[a];h[a+1]=(c[a+1]-b[a+1])*d+b[a+1];if(5==b[a]){h[a+2]=(c[a+2]-b[a+2])*d+b[a+2];h[a+3]=(c[a+3]-b[a+3])*d+b[a+3];e=1-d;var k=b[a+4],q=c[a+4];g=e*(k>>>24)+d*(q>>>24);var n=e*(k>>16&255)+d*(q>>16&255);f=e*(k>>8&255)+
d*(q>>8&255);h[a+4]=(w(n)<<16|w(f)<<8|w(e*(k&255)+d*(q&255)))+16777216*(w(g)|0);a+=3}a+=2}return h}return 0}function S(a,b){a:{var c=a+b[2];var d=b[4].length;for(var e=0;e<d;++e)if(c<b[4][e]){c=e;break a}c=d-1}d=b[2];e=b[4][c-1]-d;a=(a-e)/(b[4][c]-d-e);if(b[6]&&b[6].length>c-1)if(d=b[6][c-1],1==d[0])if(0>=a)a=0;else if(1<=a)a=1;else{e=d[1];var l=d[3];a=Y(3*e-3*l+1,-6*e+3*l,3*e,-a);a=3*a*(1-a)*(1-a)*d[2]+3*a*a*(1-a)*d[4]+a*a*a}else 2==d[0]?(d=d[1],a=Math.ceil(a*d)/d):3==d[0]&&(d=d[1],a=Math.floor(a*d)/d);return aa(b[1]&240,b[5][c-1],b[5][c],a)}function P(){A=(new Date).getTime()}function J(a){for(var b=!1,c=0;c<x.length;++c)x[c].F(a)&&(b=!0);a&&x.forEach(function(a){a.l&&(a.l=!1,a.onfinish&&(a.onfinish(),b=!0))});return b}function T(){P();J(!0)?(K=!0,L(T)):K=!1}function Q(){K||(K=!0,L(T))}function U(a,b){var c=[];a.split(b).forEach(function(a){c.push(parseFloat(a))});return c}function t(a){-1==a.indexOf(",")&&(a=a.replace(" ",","));return U(a,",")}function V(a){a._ks||(a._ks={H:M},++M);if(!a._ks.transform){for(var b=a._ks.transform=[],c=0;14>=c;++c)b[c]=0;b[10]=1;b[11]=1;if(c=a.getAttribute("transform")){for(c=c.trim().split(") ");0<a._ks.w;)c.shift(),--a._ks.w;a=c.shift();v(a,"translate(")&&(a=t(a.substring(10)),b[1]=a[0],b[2]=z(a[1])?a[1]:0,a=c.shift());v(a,"rotate(")&&(a=t(a.substring(7)),b[6]=a[0],a=c.shift());v(a,"skewX(")&&(a=t(a.substring(6)),b[7]=a[0],a=c.shift());v(a,"skewY(")&&(a=t(a.substring(6)),b[8]=a[0],a=c.shift());v(a,"scale(")&&(a=t(a.substring(6)),b[10]=a[0],b[11]=z(a[1])?a[1]:0,a=c.shift());v(a,"translate(")&&(a=t(a.substring(10)),b[13]=a[0],b[14]=z(a[1])?a[1]:0)}}}function W(a){this.C=a;this.v=[];this.o=[];this.g=0;this.i=this.a=this.b=null;this.f=this.A=this.l=this.h=!1}function G(a,b,c){b=a[b];void 0===b&&(b=a[c]);return b}function ba(a){return Array.isArray(a)?a:v(a,"cubic-bezier(")?(a=a.substring(13,a.length-1).split(","),[1,parseFloat(a[0]),parseFloat(a[1]),parseFloat(a[2]),parseFloat(a[3])]):v(a,"steps(")?(a=a.substring(6,a.length-1).split(","),[a[1]&&"start"==a[1].trim()?2:3,parseFloat(a[0])]):[0]}function ca(a){a=a.trim();return v(a,"#")?(parseInt(a.substring(1),16)<<8)+255:v(a,"rgba(")?(a=a.substring(5,a.length-1),a=a.split(","),(parseInt(a[0],10)<<24)+(parseInt(a[1],10)<<16)+(parseInt(a[2],10)<<8)+255*parseFloat(a[3])<<0):a}var da=" translate translate    rotate skewX skewY  scale scale  translate translate".split(" "),R="none url blur brightness contrast drop-shadow grayscale hue-rotate invert opacity saturate sepia".split(" "),L=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null;L||(L=function(a){window.setTimeout(a,16)});var M=0,X={d:97,fill:48,fillOpacity:16,filter:80,height:33,opacity:16,stroke:48,strokeDasharray:64,strokeDashoffset:32,strokeOpacity:16,strokeWidth:32,transform:1,width:33},K=!1,A=(new Date).getTime(),x=[];W.prototype={j:function(a){var b=!1;if(null!==this.b){var c=this.c();null!==c&&c>=this.g?(b=!0,a?this.a=c:this.a=this.i?Math.max(this.i,this.g):this.g):null!==c&&(a&&null!==this.a&&(this.b=A-this.a/1),this.a=null)}this.i=this.c();return b},F:function(a){a&&(this.h&&(this.h=!1,null===this.b&&(null!==this.a?(this.b=A-this.a/1,this.a=null):this.b=A)),null===this.a&&null!==this.b&&this.j(!1)&&(this.l=!0));a=this.c();if(null===a)return!1;for(var b=this.v,c=this.o,d=0;d<b.length;++d){for(var e=b[d],l=!1,h=0;h<c[d].length;++h){var f=c[d][h],g=f[0];if(null!==g){var k=f[2];var q=f[4].length,n=f[4][q-1]-k;k=0==n?f[5][q-1]:a<=k?f[5][0]:a>=k+f[3]?0==f[3]%n?f[5][q-1]:S(f[3]%n,f):S((a-k)%n,f);0==g?(e._ks.mpath=f[8],e._ks.transform[g]=k,l=!0):14>=g?(e._ks.transform[g]=k,l=!0):(k=Z(f[1]&240,k),f[1]&1?e.setAttribute(g,k):e.style[g]=k)}}if(l){V(e);l=e._ks.transform;h="";if(f=e._ks.mpath)k=l[0],0>k&&(k=0),100<k&&(k=100),k=k*f[2]/100,g=f[1].getPointAtLength(k),h="translate("+g.x+","+g.y+") ",f[0]&&(.5>k?(k=g,g=f[1].getPointAtLength(.5)):k=f[1].getPointAtLength(k-.5),h+="rotate("+180*Math.atan2(g.y-k.y,g.x-k.x)/Math.PI+") ");for(f=1;f<l.length;++f)g=l[f],g!=(10==f||11==f?1:0)&&(h+=" "+da[f]+"(",h=2>=f?h+(1==f?g+",0":"0,"+g):13<=f?h+(13==f?g+",0":"0,"+g):10<=f?h+(10==f?g+",1":"1,"+g):h+g,h+=")");e.setAttribute("transform",h)}}return"running"==this.B()},s:function(){if(!this.A){this.A=!0;for(var a=this.v,b=this.o,c=0;c<a.length;++c)for(var d=a[c],e=!1,l=0;l<b[c].length;++l){var h=b[c][l][0];14>=h?d._ks.G||(V(d),d._ks.G=d._ks.transform.slice()):(d._ks.m||(d._ks.m={}),z(d._ks.m[h])||(e||(e=getComputedStyle(d)),d._ks.m[h]=O(h)&1?d.getAttribute(h):e[h]))}}},play:function(a){z(a)&&this.u(a,!0);if(!this.f)return this;a=this.c();if(null===a||0>a||a>=this.g)this.a=0;if(null===this.a)return this;this.b=null;this.h=!0;this.s();Q();return this},pause:function(a){z(a)&&this.u(a,!0);if(!this.f||"paused"==this.B())return this;z(a)||P();a=this.c();null===a&&(this.a=0);null!==this.b&&null===this.a&&(this.a=a);this.b=null;this.h=!1;this.j(!1);this.s();J(!1);return this},c:function(){return null!==this.a?this.a:null===this.b?null:1*(A-this.b)},u:function(a,b){N(a);b&&P();null!==a&&(this.s(),null!==this.a||null===this.b?(this.a=a,J(!1)):this.b=A-a/1,this.f||(this.b=null),this.i=null,this.j(!0),Q())},I:function(){return this.c()},time:function(a){return z(a)?(this.f&&this.u(a,!0),this):this.I()},startTime:function(a){if(z(a)){N(a);if(!this.f)return this;this.i=this.c();this.b=a;null!==a?this.a=null:this.a=this.i;this.h=!1;this.j(!0);J(!1);Q();return this}return this.D?this.D[0].startTime:this.b},B:function(){var a=this.c();return this.h?"running":null===a?"idle":null===this.b?"paused":a>=this.g?"finished":"running"}};return{setmptr:function(a){for(var b in a){var c=document.getElementById(b);c._ks||(c._ks={});c._ks.w=a[b]}},animate:function(){if(0<x.length)throw"data already set";var a={};if(1==arguments.length%2){a=arguments[arguments.length-1];var b={};for(c in a)b[c]=a[c];a=b}var c=new W(a);a=arguments;for(var d=b=0;d<a.length-1;d+=2){var e=a[d];var l=e instanceof Element?e:document.getElementById(e.substring(1));if(!l)throw"invalid target: "+e;e=l;l=a[d+1];e._ks||(e._ks={H:M},++M);for(var h=[],f=0;f<l.length;++f){var g=l[f],k=G(g,"p","property");14>=k||-1==k.indexOf("-")||(k=null);var q=O(k);q||(q=0);var n=G(g,"t","times");if(!n||2>n.length)throw"not enough times";n=n.slice();if(!isFinite(n[0])||0>n[0])throw"bad time: "+n[0];for(var y=1;y<n.length;++y)if(!isFinite(n[y])||0>n[y]||n[y]<n[y-1])throw"bad time: "+n[y];y=n[0];var w=n[n.length-1]-y,A=g.iterations||0;1>A&&(A=1);w*=A;b<w+y&&(b=w+y);var t=G(g,"v","values");if(!t||t.length!=n.length)throw"values don't match times";t=t.slice();for(var B=k,m=t,H=O(B)&240,p=0;p<m.length;++p)if(96==H){for(var F=m[p].substring(6,m[p].length-2).match(/[A-DF-Za-df-z][-+0-9eE., ]*/ig),I=[],r=0;r<F.length;++r){I.push(F[r][0]);for(var u=1<F[r].trim().length?F[r].substring(1).split(","):[],E=0;E<u.length;++E)u[E]=parseFloat(u[E]);I.push(u)}m[p]=I}else if(48==H)v(m[p],"#")?m[p]=parseInt(m[p].substring(1),16):v(m[p],"url(")||"none"==m[p]||(console.warn("unsupported color: "+m[p]),m[p]=0);else if(80==H){F=m;I=p;r=m[p];if("none"==r)r=[0];else{u=[];for(var C=r.indexOf("(");0<C;)if(E=R.indexOf(r.substring(0,C)),0<=E){u.push(E);var D=r.indexOf(") ");0>D&&(D=r.length-1);C=r.substring(C+1,D).split(" ");5==E?(u.push(parseFloat(C[0])),u.push(parseFloat(C[1])),u.push(parseFloat(C[2])),u.push(ca(C[3]))):1==E?u.push(C[0]):u.push(parseFloat(C[0]));r=r.substring(D+1).trim();C=r.indexOf("(")}else break;r=u}F[I]=r}else 64==H?"none"!=m[p]?/^[0-9 .]*$/.test(m[p])?m[p]=U(m[p]," "):(console.warn("unsupported value: "+m[p]),m[p]=[0]):m[p]=[0]:32==H?(N(m[p]),m[p]=parseFloat(m[p])):0===B&&(m[p]=parseFloat(m[p]));B=G(g,"e","easing");m=n.length;for(B||(B=[]);B.length<m;)B.push([1,0,0,.58,1]);for(m=0;m<B.length;++m)B[m]=ba(B[m]);q=[k,q,y,w,n,t,B,A];n=G(g,"m","motionPath");z(n)&&0===k&&(q[8]=[],q[8][0]=g.motionRotate,g=document.createElementNS("http://www.w3.org/2000/svg","path"),n||(n="M0,0"),g.setAttribute("d",n),q[8][1]=g,q[8][2]=g.getTotalLength());h.push(q)}0<h.length&&(c.v.push(e),c.o.push(h))}c.g=b;!1===c.f&&(x.push(c),c.f=!0,!1!==c.C.autoplay&&c.play());return c},_priv_list:function(){return x.slice()},play:function(){return x[0]?x[0].play():this},pause:function(){return x[0]?x[0].pause():this},time:function(a){return x[0]?x[0].time(a):z(a)?this:null}}}();document.ks=ks;(function(ks){ks.setmptr({'text-left':1,'text-right':1,'logos-left':1,'logos-right':1});ks.animate("#text-left",[{p:0,t:[0,2500,2900,3000,5500,5900,6000,8500,8900,9000,11500,11900,12000,14500,14900,15000,17500,17900,18000,20500,20900,21000,23500,23900,24000,26500,27000],v:['0%','0%','10.327448%','11.838782%','11.838782%','22.418119%','24.181342%','24.181342%','34.256901%','35.516345%','35.516345%','45.591981%','46.851426%','46.851426%','56.675096%','57.682652%','57.682652%','67.254433%','68.0101%','68.0101%','78.085659%','79.345104%','79.345104%','89.672552%','91.183886%','91.183886%','100%'],e:[[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]],iterations:Infinity,m:"M156,21.0013L156,21.0013L156,-19.9987L156,-13.9987L156,-13.9987L156,-55.9987L156,-48.9987L156,-48.9987L156,-88.9987L156,-83.9987L156,-83.9987L156,-123.999L156,-118.999L156,-118.999L156,-157.999L156,-153.999L156,-153.999L156,-191.999L156,-188.999L156,-188.999L156,-228.999L156,-223.999L156,-223.999L156,-264.999L156,-258.999L156,-258.999L156,-293.999"}],"#text-right",[{p:0,t:[0,2500,2900,3000,5500,5900,6000,8500,8900,9000,11500,11900,12000,14500,14900,15000,17500,17900,18000,20500,20900,21000,23500,23900,24000,26500,26900,27000],v:['0%','0%','10.389602%','11.688302%','11.688302%','21.818165%','22.857125%','22.857125%','32.727247%','33.506467%','33.506467%','43.636329%','44.675289%','44.675289%','54.805151%','55.844112%','55.844112%','66.233793%','67.532493%','67.532493%','77.662355%','78.701316%','78.701316%','88.571438%','89.350658%','89.350658%','99.22078%','100%'],e:[[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]],iterations:Infinity,m:"M428.667,-293.999L428.667,-293.999L428.667,-253.999L428.667,-258.999L428.667,-258.999L428.667,-219.999L428.667,-223.999L428.667,-223.999L428.667,-185.999L428.667,-188.999L428.667,-188.999L428.667,-149.999L428.667,-153.999L428.667,-153.999L428.667,-114.999L428.667,-118.999L428.667,-118.999L428.667,-78.9987L428.667,-83.9987L428.667,-83.9987L428.667,-44.9987L428.667,-48.9987L428.667,-48.9987L428.667,-10.9987L428.667,-13.9987L428.667,-13.9987L428.667,24.0013L428.667,21.0013"}],"#logos-right",[{p:0,t:[0,2500,2900,3000,5500,5900,6000,8500,8900,9000,11500,11900,12000,14500,14900,15000,17500,17900,18000,20500,20900,21000,23500,23900,24000,26500,26900,27000],v:['0%','0%','10.75141%','11.329444%','11.329444%','22.890138%','24.046207%','24.046207%','36.647399%','37.456647%','37.456647%','46.473988%','47.514451%','47.514451%','57.572254%','58.49711%','58.49711%','69.017341%','70.289017%','70.289017%','78.728324%','79.421965%','79.421965%','88.901734%','89.364162%','89.364162%','99.421965%','100%'],e:[[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]],iterations:Infinity,m:"M650.178,133.933L650.178,133.933L650.178,40.9333L650.178,45.9333L650.178,45.9333L650.178,-54.0667L650.178,-44.0667L650.178,-44.0667L650.178,-153.067L650.178,-146.067L650.178,-146.067L650.178,-224.067L650.178,-215.067L650.178,-215.067L650.178,-302.067L650.178,-294.067L650.178,-294.067L650.178,-385.067L650.178,-374.067L650.178,-374.067L650.178,-447.067L650.178,-441.067L650.178,-441.067L650.178,-523.067L650.178,-519.067L650.178,-519.067L650.178,-606.067L650.178,-601.067"}],"#logos-left",[{p:0,t:[0,2500,2900,3000,5500,5900,6000,8500,8900,9000,11500,11900,12000,14500,14900,15000,17500,17900,18000,20500,20900,21000,23500,23900,24000,26500,26900,27000],v:['0%','0%','12.300073%','12.841431%','12.841431%','23.803926%','24.480623%','24.480623%','35.172441%','35.849138%','35.849138%','45.187519%','45.728877%','45.728877%','56.556034%','57.097392%','57.097392%','66.706493%','67.38319%','67.38319%','78.075008%','78.751705%','78.751705%','88.360807%','89.308183%','89.308183%','99.323303%','100%'],e:[[0],[1,0,0,1,1],[1,0.42,0,0.58,1],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]],iterations:Infinity,m:"M86.7,-170.567L86.7,-170.567C86.7,-144.9,86.7,-63.9,86.7,-89.5667L86.7,-93.5667L86.7,-93.5667L86.7,-12.5667L86.7,-17.5667L86.7,-17.5667L86.7,61.4333L86.7,56.4333L86.7,56.4333L86.7,125.433L86.7,121.433L86.7,121.433L86.7,201.433L86.7,197.433L86.7,197.433L86.7,268.433L86.7,263.433L86.7,263.433L86.7,342.433L86.7,337.433L86.7,337.433L86.7,408.433L86.7,401.433L86.7,401.433L86.7,475.433L86.7,470.433"}],{autoplay:document.location.search.substr(1).split('&').indexOf('autoplay=false')<0})})(ks);