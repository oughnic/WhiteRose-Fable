(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Ho="182",hc=0,la=1,uc=2,Vr=1,dc=2,or=3,ti=0,qt=1,Bn=2,kn=0,zi=1,ca=2,ha=3,ua=4,fc=5,di=100,pc=101,mc=102,gc=103,_c=104,xc=200,vc=201,Mc=202,Sc=203,Hs=204,Vs=205,bc=206,Ec=207,yc=208,Tc=209,wc=210,Ac=211,Rc=212,Cc=213,Pc=214,Ws=0,Xs=1,$s=2,Gi=3,Ys=4,qs=5,Zs=6,Ks=7,is=0,Ic=1,Lc=2,yn=0,yl=1,Tl=2,wl=3,Al=4,Rl=5,Cl=6,Pl=7,Il=300,gi=301,Hi=302,js=303,Js=304,rs=306,fr=1e3,zn=1001,Qs=1002,Ot=1003,Dc=1004,Sr=1005,At=1006,ls=1007,pi=1008,en=1009,Ll=1010,Dl=1011,pr=1012,Vo=1013,An=1014,Mn=1015,Vn=1016,Wo=1017,Xo=1018,mr=1020,Ul=35902,Nl=35899,Fl=1021,Ol=1022,pn=1023,Wn=1026,mi=1027,Bl=1028,$o=1029,Vi=1030,Yo=1031,qo=1033,Wr=33776,Xr=33777,$r=33778,Yr=33779,eo=35840,to=35841,no=35842,io=35843,ro=36196,so=37492,oo=37496,ao=37488,lo=37489,co=37490,ho=37491,uo=37808,fo=37809,po=37810,mo=37811,go=37812,_o=37813,xo=37814,vo=37815,Mo=37816,So=37817,bo=37818,Eo=37819,yo=37820,To=37821,wo=36492,Ao=36494,Ro=36495,Co=36283,Po=36284,Io=36285,Lo=36286,Uc=3200,Zo=0,Nc=1,Jn="",St="srgb",Wi="srgb-linear",Zr="linear",ft="srgb",Mi=7680,da=519,Fc=512,Oc=513,Bc=514,Ko=515,zc=516,kc=517,jo=518,Gc=519,fa=35044,pa="300 es",Sn=2e3,Kr=2001;function zl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hc(){const i=jr("canvas");return i.style.display="block",i}const ma={};function ga(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ze(...i){const e="THREE."+i.shift();console.warn(e,...i)}function at(...i){const e="THREE."+i.shift();console.error(e,...i)}function gr(...i){const e=i.join(" ");e in ma||(ma[e]=!0,Ze(...i))}function Vc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cs=Math.PI/180,Do=180/Math.PI;function xr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function st(i,e,t){return Math.max(e,Math.min(t,i))}function Wc(i,e){return(i%e+e)%e}function hs(i,e,t){return(1-t)*i+t*e}function Ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],p=s[o+1],x=s[o+2],v=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=v;return}if(h!==v||l!==f||c!==p||u!==x){let m=l*f+c*p+u*x+h*v;m<0&&(f=-f,p=-p,x=-x,v=-v,m=-m);let d=1-a;if(m<.9995){const E=Math.acos(m),T=Math.sin(E);d=Math.sin(d*E)/T,a=Math.sin(a*E)/T,l=l*d+f*a,c=c*d+p*a,u=u*d+x*a,h=h*d+v*a}else{l=l*d+f*a,c=c*d+p*a,u=u*d+x*a,h=h*d+v*a;const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],p=s[o+2],x=s[o+3];return e[t]=a*x+u*h+l*p-c*f,e[t+1]=l*x+u*f+c*h-a*p,e[t+2]=c*x+u*p+a*f-l*h,e[t+3]=u*x-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*x,this._y=c*p*h-f*u*x,this._z=c*u*x+f*p*h,this._w=c*u*h-f*p*x;break;case"YXZ":this._x=f*u*h+c*p*x,this._y=c*p*h-f*u*x,this._z=c*u*x-f*p*h,this._w=c*u*h+f*p*x;break;case"ZXY":this._x=f*u*h-c*p*x,this._y=c*p*h+f*u*x,this._z=c*u*x+f*p*h,this._w=c*u*h-f*p*x;break;case"ZYX":this._x=f*u*h-c*p*x,this._y=c*p*h+f*u*x,this._z=c*u*x-f*p*h,this._w=c*u*h+f*p*x;break;case"YZX":this._x=f*u*h+c*p*x,this._y=c*p*h+f*u*x,this._z=c*u*x-f*p*h,this._w=c*u*h-f*p*x;break;case"XZY":this._x=f*u*h-c*p*x,this._y=c*p*h-f*u*x,this._z=c*u*x+f*p*h,this._w=c*u*h+f*p*x;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_a.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_a.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return us.copy(this).projectOnVector(e),this.sub(us)}reflect(e){return this.sub(us.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const us=new F,_a=new xi;class Je{constructor(e,t,n,r,s,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],x=n[8],v=r[0],m=r[3],d=r[6],E=r[1],T=r[4],w=r[7],A=r[2],b=r[5],P=r[8];return s[0]=o*v+a*E+l*A,s[3]=o*m+a*T+l*b,s[6]=o*d+a*w+l*P,s[1]=c*v+u*E+h*A,s[4]=c*m+u*T+h*b,s[7]=c*d+u*w+h*P,s[2]=f*v+p*E+x*A,s[5]=f*m+p*T+x*b,s[8]=f*d+p*w+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,x=t*h+n*f+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=h*v,e[1]=(r*c-u*n)*v,e[2]=(a*n-r*o)*v,e[3]=f*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ds.makeScale(e,t)),this}rotate(e){return this.premultiply(ds.makeRotation(-e)),this}translate(e,t){return this.premultiply(ds.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ds=new Je,xa=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),va=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xc(){const i={enabled:!0,workingColorSpace:Wi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ft&&(r.r=Gn(r.r),r.g=Gn(r.g),r.b=Gn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(r.r=ki(r.r),r.g=ki(r.g),r.b=ki(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Jn?Zr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return gr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return gr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wi]:{primaries:e,whitePoint:n,transfer:Zr,toXYZ:xa,fromXYZ:va,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:xa,fromXYZ:va,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),i}const lt=Xc();function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Si;class $c{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Si===void 0&&(Si=jr("canvas")),Si.width=e.width,Si.height=e.height;const r=Si.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Gn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yc=0;class Jo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=xr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(fs(r[o].image)):s.push(fs(r[o]))}else s=fs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function fs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$c.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}let qc=0;const ps=new F;class Bt extends _i{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=zn,r=zn,s=At,o=pi,a=pn,l=en,c=Bt.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=xr(),this.name="",this.source=new Jo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ps).x}get height(){return this.source.getSize(ps).y}get depth(){return this.source.getSize(ps).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Il)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fr:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case Qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fr:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case Qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Il;Bt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,n=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],x=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,w=(p+1)/2,A=(d+1)/2,b=(u+f)/4,P=(h+v)/4,B=(x+m)/4;return T>w&&T>A?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=b/n,s=P/n):w>A?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=b/r,s=B/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=P/s,r=B/s),this.set(n,r,s,t),this}let E=Math.sqrt((m-x)*(m-x)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-x)/E,this.y=(h-v)/E,this.z=(f-u)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zc extends _i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Bt(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Jo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends Zc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class kl extends Bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kc extends Bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bt{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(s,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(e.matrixWorld),this.union(br)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qi),Er.subVectors(this.max,Qi),bi.subVectors(e.a,Qi),Ei.subVectors(e.b,Qi),yi.subVectors(e.c,Qi),$n.subVectors(Ei,bi),Yn.subVectors(yi,Ei),ii.subVectors(bi,yi);let t=[0,-$n.z,$n.y,0,-Yn.z,Yn.y,0,-ii.z,ii.y,$n.z,0,-$n.x,Yn.z,0,-Yn.x,ii.z,0,-ii.x,-$n.y,$n.x,0,-Yn.y,Yn.x,0,-ii.y,ii.x,0];return!ms(t,bi,Ei,yi,Er)||(t=[1,0,0,0,1,0,0,0,1],!ms(t,bi,Ei,yi,Er))?!1:(yr.crossVectors($n,Yn),t=[yr.x,yr.y,yr.z],ms(t,bi,Ei,yi,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const In=[new F,new F,new F,new F,new F,new F,new F,new F],cn=new F,br=new bt,bi=new F,Ei=new F,yi=new F,$n=new F,Yn=new F,ii=new F,Qi=new F,Er=new F,yr=new F,ri=new F;function ms(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ri.fromArray(i,s);const a=r.x*Math.abs(ri.x)+r.y*Math.abs(ri.y)+r.z*Math.abs(ri.z),l=e.dot(ri),c=t.dot(ri),u=n.dot(ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const jc=new bt,er=new F,gs=new F;class Qo{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):jc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;er.subVectors(e,this.center);const t=er.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(er,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(er.copy(e.center).add(gs)),this.expandByPoint(er.copy(e.center).sub(gs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ln=new F,_s=new F,Tr=new F,qn=new F,xs=new F,wr=new F,vs=new F;class Gl{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){_s.copy(e).add(t).multiplyScalar(.5),Tr.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(_s);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Tr),a=qn.dot(this.direction),l=-qn.dot(Tr),c=qn.lengthSq(),u=Math.abs(1-o*o);let h,f,p,x;if(u>0)if(h=o*l-a,f=o*a-l,x=s*u,h>=0)if(f>=-x)if(f<=x){const v=1/u;h*=v,f*=v,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(_s).addScaledVector(Tr,f),p}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const n=Ln.dot(this.direction),r=Ln.dot(Ln)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,n,r,s){xs.subVectors(t,e),wr.subVectors(n,e),vs.crossVectors(xs,wr);let o=this.direction.dot(vs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,e);const l=a*this.direction.dot(wr.crossVectors(qn,wr));if(l<0)return null;const c=a*this.direction.dot(xs.cross(qn));if(c<0||l+c>o)return null;const u=-a*qn.dot(vs);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,r,s,o,a,l,c,u,h,f,p,x,v,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,f,p,x,v,m)}set(e,t,n,r,s,o,a,l,c,u,h,f,p,x,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=x,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Ti.setFromMatrixColumn(e,0).length(),s=1/Ti.setFromMatrixColumn(e,1).length(),o=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,x=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+x*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=x+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,x=c*u,v=c*h;t[0]=f+v*a,t[4]=x*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-x,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,x=c*u,v=c*h;t[0]=f-v*a,t[4]=-o*h,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,x=a*u,v=a*h;t[0]=l*u,t[4]=x*c-p,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=p*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,x=a*l,v=a*c;t[0]=l*u,t[4]=v-f*h,t[8]=x*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+x,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,p=o*c,x=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=o*u,t[9]=p*h-x,t[2]=x*h-p,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jc,e,Qc)}lookAt(e,t,n){const r=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Zn.crossVectors(n,jt),Zn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Zn.crossVectors(n,jt)),Zn.normalize(),Ar.crossVectors(jt,Zn),r[0]=Zn.x,r[4]=Ar.x,r[8]=jt.x,r[1]=Zn.y,r[5]=Ar.y,r[9]=jt.y,r[2]=Zn.z,r[6]=Ar.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],x=n[2],v=n[6],m=n[10],d=n[14],E=n[3],T=n[7],w=n[11],A=n[15],b=r[0],P=r[4],B=r[8],g=r[12],S=r[1],I=r[5],C=r[9],O=r[13],Y=r[2],X=r[6],W=r[10],V=r[14],ie=r[3],k=r[7],H=r[11],ae=r[15];return s[0]=o*b+a*S+l*Y+c*ie,s[4]=o*P+a*I+l*X+c*k,s[8]=o*B+a*C+l*W+c*H,s[12]=o*g+a*O+l*V+c*ae,s[1]=u*b+h*S+f*Y+p*ie,s[5]=u*P+h*I+f*X+p*k,s[9]=u*B+h*C+f*W+p*H,s[13]=u*g+h*O+f*V+p*ae,s[2]=x*b+v*S+m*Y+d*ie,s[6]=x*P+v*I+m*X+d*k,s[10]=x*B+v*C+m*W+d*H,s[14]=x*g+v*O+m*V+d*ae,s[3]=E*b+T*S+w*Y+A*ie,s[7]=E*P+T*I+w*X+A*k,s[11]=E*B+T*C+w*W+A*H,s[15]=E*g+T*O+w*V+A*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],x=e[3],v=e[7],m=e[11],d=e[15],E=l*p-c*f,T=a*p-c*h,w=a*f-l*h,A=o*p-c*u,b=o*f-l*u,P=o*h-a*u;return t*(v*E-m*T+d*w)-n*(x*E-m*A+d*b)+r*(x*T-v*A+d*P)-s*(x*w-v*b+m*P)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],x=e[12],v=e[13],m=e[14],d=e[15],E=h*m*c-v*f*c+v*l*p-a*m*p-h*l*d+a*f*d,T=x*f*c-u*m*c-x*l*p+o*m*p+u*l*d-o*f*d,w=u*v*c-x*h*c+x*a*p-o*v*p-u*a*d+o*h*d,A=x*h*l-u*v*l-x*a*f+o*v*f+u*a*m-o*h*m,b=t*E+n*T+r*w+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/b;return e[0]=E*P,e[1]=(v*f*s-h*m*s-v*r*p+n*m*p+h*r*d-n*f*d)*P,e[2]=(a*m*s-v*l*s+v*r*c-n*m*c-a*r*d+n*l*d)*P,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*p-n*l*p)*P,e[4]=T*P,e[5]=(u*m*s-x*f*s+x*r*p-t*m*p-u*r*d+t*f*d)*P,e[6]=(x*l*s-o*m*s-x*r*c+t*m*c+o*r*d-t*l*d)*P,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*P,e[8]=w*P,e[9]=(x*h*s-u*v*s-x*n*p+t*v*p+u*n*d-t*h*d)*P,e[10]=(o*v*s-x*a*s+x*n*c-t*v*c-o*n*d+t*a*d)*P,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*p-t*a*p)*P,e[12]=A*P,e[13]=(u*v*r-x*h*r+x*n*f-t*v*f-u*n*m+t*h*m)*P,e[14]=(x*a*r-o*v*r-x*n*l+t*v*l+o*n*m-t*a*m)*P,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,x=s*h,v=o*u,m=o*h,d=a*h,E=l*c,T=l*u,w=l*h,A=n.x,b=n.y,P=n.z;return r[0]=(1-(v+d))*A,r[1]=(p+w)*A,r[2]=(x-T)*A,r[3]=0,r[4]=(p-w)*b,r[5]=(1-(f+d))*b,r[6]=(m+E)*b,r[7]=0,r[8]=(x+T)*P,r[9]=(m-E)*P,r[10]=(1-(f+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=Ti.set(r[0],r[1],r[2]).length();const o=Ti.set(r[4],r[5],r[6]).length(),a=Ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),hn.copy(this);const c=1/s,u=1/o,h=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=h,hn.elements[9]*=h,hn.elements[10]*=h,t.setFromRotationMatrix(hn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Sn,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r);let x,v;if(l)x=s/(o-s),v=o*s/(o-s);else if(a===Sn)x=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Kr)x=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Sn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r);let x,v;if(l)x=1/(o-s),v=o/(o-s);else if(a===Sn)x=-2/(o-s),v=-(o+s)/(o-s);else if(a===Kr)x=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ti=new F,hn=new vt,Jc=new F(0,0,0),Qc=new F(1,1,1),Zn=new F,Ar=new F,jt=new F,Ma=new vt,Sa=new xi;class on{constructor(e=0,t=0,n=0,r=on.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ma.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ma,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sa.setFromEuler(this),this.setFromQuaternion(Sa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class ea{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eh=0;const ba=new F,wi=new xi,Dn=new vt,Rr=new F,tr=new F,th=new F,nh=new xi,Ea=new F(1,0,0),ya=new F(0,1,0),Ta=new F(0,0,1),wa={type:"added"},ih={type:"removed"},Ai={type:"childadded",child:null},Ms={type:"childremoved",child:null};class Nt extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new F,t=new on,n=new xi,r=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Je}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(Ea,e)}rotateY(e){return this.rotateOnAxis(ya,e)}rotateZ(e){return this.rotateOnAxis(Ta,e)}translateOnAxis(e,t){return ba.copy(e).applyQuaternion(this.quaternion),this.position.add(ba.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ea,e)}translateY(e){return this.translateOnAxis(ya,e)}translateZ(e){return this.translateOnAxis(Ta,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rr.copy(e):Rr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(tr,Rr,this.up):Dn.lookAt(Rr,tr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),wi.setFromRotationMatrix(Dn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wa),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ih),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wa),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,th),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,nh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new F(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new F,Un=new F,Ss=new F,Nn=new F,Ri=new F,Ci=new F,Aa=new F,bs=new F,Es=new F,ys=new F,Ts=new Tt,ws=new Tt,As=new Tt;class fn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),un.subVectors(e,t),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){un.subVectors(r,t),Un.subVectors(n,t),Ss.subVectors(e,t);const o=un.dot(un),a=un.dot(Un),l=un.dot(Ss),c=Un.dot(Un),u=Un.dot(Ss),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,x=(o*u-a*l)*f;return s.set(1-p-x,x,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Ts.setScalar(0),ws.setScalar(0),As.setScalar(0),Ts.fromBufferAttribute(e,t),ws.fromBufferAttribute(e,n),As.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ts,s.x),o.addScaledVector(ws,s.y),o.addScaledVector(As,s.z),o}static isFrontFacing(e,t,n,r){return un.subVectors(n,t),Un.subVectors(e,t),un.cross(Un).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),un.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return fn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Ri.subVectors(r,n),Ci.subVectors(s,n),bs.subVectors(e,n);const l=Ri.dot(bs),c=Ci.dot(bs);if(l<=0&&c<=0)return t.copy(n);Es.subVectors(e,r);const u=Ri.dot(Es),h=Ci.dot(Es);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ri,o);ys.subVectors(e,s);const p=Ri.dot(ys),x=Ci.dot(ys);if(x>=0&&p<=x)return t.copy(s);const v=p*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(Ci,a);const m=u*x-p*h;if(m<=0&&h-u>=0&&p-x>=0)return Aa.subVectors(s,r),a=(h-u)/(h-u+(p-x)),t.copy(r).addScaledVector(Aa,a);const d=1/(m+v+f);return o=v*d,a=f*d,t.copy(n).addScaledVector(Ri,o).addScaledVector(Ci,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Rs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=lt.workingColorSpace){if(e=Wc(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Rs(o,s,e+1/3),this.g=Rs(o,s,e),this.b=Rs(o,s,e-1/3)}return lt.colorSpaceToWorking(this,r),this}setStyle(e,t=St){function n(s){s!==void 0&&parseFloat(s)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const n=Hl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return lt.workingToColorSpace(Gt.copy(this),e),Math.round(st(Gt.r*255,0,255))*65536+Math.round(st(Gt.g*255,0,255))*256+Math.round(st(Gt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Gt.copy(this),t);const n=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=St){lt.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,r=Gt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Kn),this.setHSL(Kn.h+e,Kn.s+t,Kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(Cr);const n=hs(Kn.h,Cr.h,t),r=hs(Kn.s,Cr.s,t),s=hs(Kn.l,Cr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Ke;Ke.NAMES=Hl;let rh=0;class Yi extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=xr(),this.name="",this.type="Material",this.blending=zi,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hs,this.blendDst=Vs,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=da,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hs&&(n.blendSrc=this.blendSrc),this.blendDst!==Vs&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==da&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mn extends Yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new F,Pr=new ct;let sh=0;class sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fa,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pr.fromBufferAttribute(this,t),Pr.applyMatrix3(e),this.setXY(t,Pr.x,Pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fa&&(e.usage=this.usage),e}}class Vl extends sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wl extends sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Hn extends sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let oh=0;const nn=new vt,Cs=new Nt,Pi=new F,Jt=new bt,nr=new bt,Dt=new F;class Cn extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zl(e)?Wl:Vl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return Cs.lookAt(e),Cs.updateMatrix(),this.applyMatrix4(Cs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Hn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(Jt.min,nr.min),Jt.expandByPoint(Dt),Dt.addVectors(Jt.max,nr.max),Jt.expandByPoint(Dt)):(Jt.expandByPoint(nr.min),Jt.expandByPoint(nr.max))}Jt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dt.fromBufferAttribute(a,c),l&&(Pi.fromBufferAttribute(e,c),Dt.add(Pi)),r=Math.max(r,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<n.count;B++)a[B]=new F,l[B]=new F;const c=new F,u=new F,h=new F,f=new ct,p=new ct,x=new ct,v=new F,m=new F;function d(B,g,S){c.fromBufferAttribute(n,B),u.fromBufferAttribute(n,g),h.fromBufferAttribute(n,S),f.fromBufferAttribute(s,B),p.fromBufferAttribute(s,g),x.fromBufferAttribute(s,S),u.sub(c),h.sub(c),p.sub(f),x.sub(f);const I=1/(p.x*x.y-x.x*p.y);isFinite(I)&&(v.copy(u).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(I),a[B].add(v),a[g].add(v),a[S].add(v),l[B].add(m),l[g].add(m),l[S].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let B=0,g=E.length;B<g;++B){const S=E[B],I=S.start,C=S.count;for(let O=I,Y=I+C;O<Y;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const T=new F,w=new F,A=new F,b=new F;function P(B){A.fromBufferAttribute(r,B),b.copy(A);const g=a[B];T.copy(g),T.sub(A.multiplyScalar(A.dot(g))).normalize(),w.crossVectors(b,g);const I=w.dot(l[B])<0?-1:1;o.setXYZW(B,T.x,T.y,T.z,I)}for(let B=0,g=E.length;B<g;++B){const S=E[B],I=S.start,C=S.count;for(let O=I,Y=I+C;O<Y;O+=3)P(e.getX(O+0)),P(e.getX(O+1)),P(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,x=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)f[x++]=c[p++]}return new sn(f,u,h)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ra=new vt,si=new Gl,Ir=new Qo,Ca=new F,Lr=new F,Dr=new F,Ur=new F,Ps=new F,Nr=new F,Pa=new F,Fr=new F;class Ft extends Nt{constructor(e=new Cn,t=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Nr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Ps.fromBufferAttribute(h,e),o?Nr.addScaledVector(Ps,u):Nr.addScaledVector(Ps.sub(t),u))}t.add(Nr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(s),si.copy(e.ray).recast(e.near),!(Ir.containsPoint(si.origin)===!1&&(si.intersectSphere(Ir,Ca)===null||si.origin.distanceToSquared(Ca)>(e.far-e.near)**2))&&(Ra.copy(s).invert(),si.copy(e.ray).applyMatrix4(Ra),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){const m=f[x],d=o[m.materialIndex],E=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=E,A=T;w<A;w+=3){const b=a.getX(w),P=a.getX(w+1),B=a.getX(w+2);r=Or(this,d,e,n,c,u,h,b,P,B),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=x,d=v;m<d;m+=3){const E=a.getX(m),T=a.getX(m+1),w=a.getX(m+2);r=Or(this,o,e,n,c,u,h,E,T,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){const m=f[x],d=o[m.materialIndex],E=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=E,A=T;w<A;w+=3){const b=w,P=w+1,B=w+2;r=Or(this,d,e,n,c,u,h,b,P,B),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=x,d=v;m<d;m+=3){const E=m,T=m+1,w=m+2;r=Or(this,o,e,n,c,u,h,E,T,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ah(i,e,t,n,r,s,o,a){let l;if(e.side===qt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===ti,a),l===null)return null;Fr.copy(a),Fr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Fr);return c<t.near||c>t.far?null:{distance:c,point:Fr.clone(),object:i}}function Or(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Lr),i.getVertexPosition(l,Dr),i.getVertexPosition(c,Ur);const u=ah(i,e,t,n,Lr,Dr,Ur,Pa);if(u){const h=new F;fn.getBarycoord(Pa,Lr,Dr,Ur,h),r&&(u.uv=fn.getInterpolatedAttribute(r,a,l,c,h,new ct)),s&&(u.uv1=fn.getInterpolatedAttribute(s,a,l,c,h,new ct)),o&&(u.normal=fn.getInterpolatedAttribute(o,a,l,c,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new F,materialIndex:0};fn.getNormal(Lr,Dr,Ur,f.normal),u.face=f,u.barycoord=h}return u}class Xn extends Cn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,r,o,2),x("x","z","y",1,-1,e,n,-t,r,o,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Hn(c,3)),this.setAttribute("normal",new Hn(u,3)),this.setAttribute("uv",new Hn(h,2));function x(v,m,d,E,T,w,A,b,P,B,g){const S=w/P,I=A/B,C=w/2,O=A/2,Y=b/2,X=P+1,W=B+1;let V=0,ie=0;const k=new F;for(let H=0;H<W;H++){const ae=H*I-O;for(let G=0;G<X;G++){const ee=G*S-C;k[v]=ee*E,k[m]=ae*T,k[d]=Y,c.push(k.x,k.y,k.z),k[v]=0,k[m]=0,k[d]=b>0?1:-1,u.push(k.x,k.y,k.z),h.push(G/P),h.push(1-H/B),V+=1}}for(let H=0;H<B;H++)for(let ae=0;ae<P;ae++){const G=f+ae+X*H,ee=f+ae+X*(H+1),pe=f+(ae+1)+X*(H+1),ve=f+(ae+1)+X*H;l.push(G,ee,ve),l.push(ee,pe,ve),ie+=6}a.addGroup(p,ie,g),p+=ie,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Vt(i){const e={};for(let t=0;t<i.length;t++){const n=Xi(i[t]);for(const r in n)e[r]=n[r]}return e}function lh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const ch={clone:Xi,merge:Vt};var hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hh,this.fragmentShader=uh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=lh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $l extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new F,Ia=new ct,La=new ct;class rn extends $l{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Do*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,Ia,La),t.subVectors(La,Ia)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ii=-90,Li=1;class dh extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn(Ii,Li,e,t);r.layers=this.layers,this.add(r);const s=new rn(Ii,Li,e,t);s.layers=this.layers,this.add(s);const o=new rn(Ii,Li,e,t);o.layers=this.layers,this.add(o);const a=new rn(Ii,Li,e,t);a.layers=this.layers,this.add(a);const l=new rn(Ii,Li,e,t);l.layers=this.layers,this.add(l);const c=new rn(Ii,Li,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Yl extends Bt{constructor(e=[],t=gi,n,r,s,o,a,l,c,u){super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ql extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Yl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xn(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:kn});s.uniforms.tEquirect.value=t;const o=new Ft(r,s),a=t.minFilter;return t.minFilter===pi&&(t.minFilter=At),new dh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class bn extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fh={type:"move"};class Is{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fh)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Jr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ke(e),this.near=t,this.far=n}clone(){return new Jr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Zl extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ph extends Bt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Ot,u=Ot,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ls=new F,mh=new F,gh=new Je;class hi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ls.subVectors(n,t).cross(mh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ls),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gh.getNormalMatrix(e),r=this.coplanarPoint(Ls).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new Qo,_h=new ct(.5,.5),Br=new F;class ta{constructor(e=new hi,t=new hi,n=new hi,r=new hi,s=new hi,o=new hi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],p=s[7],x=s[8],v=s[9],m=s[10],d=s[11],E=s[12],T=s[13],w=s[14],A=s[15];if(r[0].setComponents(c-o,p-u,d-x,A-E).normalize(),r[1].setComponents(c+o,p+u,d+x,A+E).normalize(),r[2].setComponents(c+a,p+h,d+v,A+T).normalize(),r[3].setComponents(c-a,p-h,d-v,A-T).normalize(),n)r[4].setComponents(l,f,m,w).normalize(),r[5].setComponents(c-l,p-f,d-m,A-w).normalize();else if(r[4].setComponents(c-l,p-f,d-m,A-w).normalize(),t===Sn)r[5].setComponents(c+l,p+f,d+m,A+w).normalize();else if(t===Kr)r[5].setComponents(l,f,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){oi.center.set(0,0,0);const t=_h.distanceTo(e.center);return oi.radius=.7071067811865476+t,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Br.x=r.normal.x>0?e.max.x:e.min.x,Br.y=r.normal.y>0?e.max.y:e.min.y,Br.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Br)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xh extends Bt{constructor(e,t,n,r,s=At,o=At,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function h(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Pn extends Bt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _r extends Bt{constructor(e,t,n=An,r,s,o,a=Ot,l=Ot,c,u=Wn,h=1){if(u!==Wn&&u!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class vh extends _r{constructor(e,t=An,n=gi,r,s,o=Ot,a=Ot,l,c=Wn){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Kl extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qi extends Cn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,p=[],x=[],v=[],m=[];for(let d=0;d<u;d++){const E=d*f-o;for(let T=0;T<c;T++){const w=T*h-s;x.push(w,-E,0),v.push(0,0,1),m.push(T/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){const T=E+c*d,w=E+c*(d+1),A=E+1+c*(d+1),b=E+1+c*d;p.push(T,w,b),p.push(w,A,b)}this.setIndex(p),this.setAttribute("position",new Hn(x,3)),this.setAttribute("normal",new Hn(v,3)),this.setAttribute("uv",new Hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Mh extends Rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Sh extends Yi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ke(16777215),this.specular=new Ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ct extends Yi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bh extends Yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Eh extends Yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class na extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class yh extends na{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ds=new vt,Da=new F,Ua=new F;class Th{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ta,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Da.setFromMatrixPosition(e.matrixWorld),t.position.copy(Da),Ua.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ua),t.updateMatrixWorld(),Ds.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ds,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ds)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ia extends $l{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wh extends Th{constructor(){super(new ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ah extends na{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new wh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Rh extends na{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ch extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ph{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Na=new vt;class Ih{constructor(e,t,n=0,r=1/0){this.ray=new Gl(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):at("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Na.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Na),this}intersectObject(e,t=!0,n=[]){return Uo(e,this,n,t),n.sort(Fa),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Uo(e[r],this,n,t);return n.sort(Fa),n}}function Fa(i,e){return i.distance-e.distance}function Uo(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Uo(s[o],e,t,!0)}}class Lh extends _i{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ze("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Oa(i,e,t,n){const r=Dh(n);switch(t){case Fl:return i*e;case Bl:return i*e/r.components*r.byteLength;case $o:return i*e/r.components*r.byteLength;case Vi:return i*e*2/r.components*r.byteLength;case Yo:return i*e*2/r.components*r.byteLength;case Ol:return i*e*3/r.components*r.byteLength;case pn:return i*e*4/r.components*r.byteLength;case qo:return i*e*4/r.components*r.byteLength;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $r:case Yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case to:case io:return Math.max(i,16)*Math.max(e,8)/4;case eo:case no:return Math.max(i,8)*Math.max(e,8)/2;case ro:case so:case ao:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oo:case co:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case po:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case mo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case go:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _o:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case vo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case So:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case To:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wo:case Ao:case Ro:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Co:case Po:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Io:case Lo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dh(i){switch(i){case en:case Ll:return{byteLength:1,components:1};case pr:case Dl:case Vn:return{byteLength:2,components:1};case Wo:case Xo:return{byteLength:2,components:4};case An:case Vo:case Mn:return{byteLength:4,components:1};case Ul:case Nl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ho}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ho);function jl(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Uh(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<h.length;p++){const x=h[f],v=h[p];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,x=h.length;p<x;p++){const v=h[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Nh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Oh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$h=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ru=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,su=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ou=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,au=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uu="gl_FragColor = linearToOutputTexel( gl_FragColor );",du=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_u=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Su=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Eu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Au=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ru=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Du=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Uu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ou=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ku=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$u=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ku=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ju=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ju=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,id=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ad=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ld=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ud=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,md=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,_d=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Md=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ed=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Td=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ad=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Dd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ud=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Od=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,of=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,af=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,df=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ff=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:Nh,alphahash_pars_fragment:Fh,alphamap_fragment:Oh,alphamap_pars_fragment:Bh,alphatest_fragment:zh,alphatest_pars_fragment:kh,aomap_fragment:Gh,aomap_pars_fragment:Hh,batching_pars_vertex:Vh,batching_vertex:Wh,begin_vertex:Xh,beginnormal_vertex:$h,bsdfs:Yh,iridescence_fragment:qh,bumpmap_pars_fragment:Zh,clipping_planes_fragment:Kh,clipping_planes_pars_fragment:jh,clipping_planes_pars_vertex:Jh,clipping_planes_vertex:Qh,color_fragment:eu,color_pars_fragment:tu,color_pars_vertex:nu,color_vertex:iu,common:ru,cube_uv_reflection_fragment:su,defaultnormal_vertex:ou,displacementmap_pars_vertex:au,displacementmap_vertex:lu,emissivemap_fragment:cu,emissivemap_pars_fragment:hu,colorspace_fragment:uu,colorspace_pars_fragment:du,envmap_fragment:fu,envmap_common_pars_fragment:pu,envmap_pars_fragment:mu,envmap_pars_vertex:gu,envmap_physical_pars_fragment:Au,envmap_vertex:_u,fog_vertex:xu,fog_pars_vertex:vu,fog_fragment:Mu,fog_pars_fragment:Su,gradientmap_pars_fragment:bu,lightmap_pars_fragment:Eu,lights_lambert_fragment:yu,lights_lambert_pars_fragment:Tu,lights_pars_begin:wu,lights_toon_fragment:Ru,lights_toon_pars_fragment:Cu,lights_phong_fragment:Pu,lights_phong_pars_fragment:Iu,lights_physical_fragment:Lu,lights_physical_pars_fragment:Du,lights_fragment_begin:Uu,lights_fragment_maps:Nu,lights_fragment_end:Fu,logdepthbuf_fragment:Ou,logdepthbuf_pars_fragment:Bu,logdepthbuf_pars_vertex:zu,logdepthbuf_vertex:ku,map_fragment:Gu,map_pars_fragment:Hu,map_particle_fragment:Vu,map_particle_pars_fragment:Wu,metalnessmap_fragment:Xu,metalnessmap_pars_fragment:$u,morphinstance_vertex:Yu,morphcolor_vertex:qu,morphnormal_vertex:Zu,morphtarget_pars_vertex:Ku,morphtarget_vertex:ju,normal_fragment_begin:Ju,normal_fragment_maps:Qu,normal_pars_fragment:ed,normal_pars_vertex:td,normal_vertex:nd,normalmap_pars_fragment:id,clearcoat_normal_fragment_begin:rd,clearcoat_normal_fragment_maps:sd,clearcoat_pars_fragment:od,iridescence_pars_fragment:ad,opaque_fragment:ld,packing:cd,premultiplied_alpha_fragment:hd,project_vertex:ud,dithering_fragment:dd,dithering_pars_fragment:fd,roughnessmap_fragment:pd,roughnessmap_pars_fragment:md,shadowmap_pars_fragment:gd,shadowmap_pars_vertex:_d,shadowmap_vertex:xd,shadowmask_pars_fragment:vd,skinbase_vertex:Md,skinning_pars_vertex:Sd,skinning_vertex:bd,skinnormal_vertex:Ed,specularmap_fragment:yd,specularmap_pars_fragment:Td,tonemapping_fragment:wd,tonemapping_pars_fragment:Ad,transmission_fragment:Rd,transmission_pars_fragment:Cd,uv_pars_fragment:Pd,uv_pars_vertex:Id,uv_vertex:Ld,worldpos_vertex:Dd,background_vert:Ud,background_frag:Nd,backgroundCube_vert:Fd,backgroundCube_frag:Od,cube_vert:Bd,cube_frag:zd,depth_vert:kd,depth_frag:Gd,distance_vert:Hd,distance_frag:Vd,equirect_vert:Wd,equirect_frag:Xd,linedashed_vert:$d,linedashed_frag:Yd,meshbasic_vert:qd,meshbasic_frag:Zd,meshlambert_vert:Kd,meshlambert_frag:jd,meshmatcap_vert:Jd,meshmatcap_frag:Qd,meshnormal_vert:ef,meshnormal_frag:tf,meshphong_vert:nf,meshphong_frag:rf,meshphysical_vert:sf,meshphysical_frag:of,meshtoon_vert:af,meshtoon_frag:lf,points_vert:cf,points_frag:hf,shadow_vert:uf,shadow_frag:df,sprite_vert:ff,sprite_frag:pf},Ae={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},vn={basic:{uniforms:Vt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Vt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Vt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Vt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Vt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Vt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Vt([Ae.points,Ae.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Vt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Vt([Ae.common,Ae.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Vt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Vt([Ae.sprite,Ae.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Vt([Ae.common,Ae.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Vt([Ae.lights,Ae.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};vn.physical={uniforms:Vt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const zr={r:0,b:0,g:0},ai=new on,mf=new vt;function gf(i,e,t,n,r,s,o){const a=new Ke(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function x(T){let w=T.isScene===!0?T.background:null;return w&&w.isTexture&&(w=(T.backgroundBlurriness>0?t:e).get(w)),w}function v(T){let w=!1;const A=x(T);A===null?d(a,l):A&&A.isColor&&(d(A,1),w=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,w){const A=x(w);A&&(A.isCubeTexture||A.mapping===rs)?(u===void 0&&(u=new Ft(new Xn(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Xi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,P,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ai.copy(w.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mf.makeRotationFromEuler(ai)),u.material.toneMapped=lt.getTransfer(A.colorSpace)!==ft,(h!==A||f!==A.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,p=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Ft(new qi(2,2),new Rn({name:"BackgroundMaterial",uniforms:Xi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=lt.getTransfer(A.colorSpace)!==ft,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,p=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,w){T.getRGB(zr,Xl(i)),n.buffers.color.setClear(zr.r,zr.g,zr.b,w,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,w=1){a.set(T),l=w,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(a,l)},render:v,addToRenderList:m,dispose:E}}function _f(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(S,I,C,O,Y){let X=!1;const W=h(O,C,I);s!==W&&(s=W,c(s.object)),X=p(S,O,C,Y),X&&x(S,O,C,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,w(S,I,C,O),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,I,C){const O=C.wireframe===!0;let Y=n[S.id];Y===void 0&&(Y={},n[S.id]=Y);let X=Y[I.id];X===void 0&&(X={},Y[I.id]=X);let W=X[O];return W===void 0&&(W=f(l()),X[O]=W),W}function f(S){const I=[],C=[],O=[];for(let Y=0;Y<t;Y++)I[Y]=0,C[Y]=0,O[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:C,attributeDivisors:O,object:S,attributes:{},index:null}}function p(S,I,C,O){const Y=s.attributes,X=I.attributes;let W=0;const V=C.getAttributes();for(const ie in V)if(V[ie].location>=0){const H=Y[ie];let ae=X[ie];if(ae===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),H===void 0||H.attribute!==ae||ae&&H.data!==ae.data)return!0;W++}return s.attributesNum!==W||s.index!==O}function x(S,I,C,O){const Y={},X=I.attributes;let W=0;const V=C.getAttributes();for(const ie in V)if(V[ie].location>=0){let H=X[ie];H===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(H=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(H=S.instanceColor));const ae={};ae.attribute=H,H&&H.data&&(ae.data=H.data),Y[ie]=ae,W++}s.attributes=Y,s.attributesNum=W,s.index=O}function v(){const S=s.newAttributes;for(let I=0,C=S.length;I<C;I++)S[I]=0}function m(S){d(S,0)}function d(S,I){const C=s.newAttributes,O=s.enabledAttributes,Y=s.attributeDivisors;C[S]=1,O[S]===0&&(i.enableVertexAttribArray(S),O[S]=1),Y[S]!==I&&(i.vertexAttribDivisor(S,I),Y[S]=I)}function E(){const S=s.newAttributes,I=s.enabledAttributes;for(let C=0,O=I.length;C<O;C++)I[C]!==S[C]&&(i.disableVertexAttribArray(C),I[C]=0)}function T(S,I,C,O,Y,X,W){W===!0?i.vertexAttribIPointer(S,I,C,Y,X):i.vertexAttribPointer(S,I,C,O,Y,X)}function w(S,I,C,O){v();const Y=O.attributes,X=C.getAttributes(),W=I.defaultAttributeValues;for(const V in X){const ie=X[V];if(ie.location>=0){let k=Y[V];if(k===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(k=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(k=S.instanceColor)),k!==void 0){const H=k.normalized,ae=k.itemSize,G=e.get(k);if(G===void 0)continue;const ee=G.buffer,pe=G.type,ve=G.bytesPerElement,q=pe===i.INT||pe===i.UNSIGNED_INT||k.gpuType===Vo;if(k.isInterleavedBufferAttribute){const J=k.data,re=J.stride,fe=k.offset;if(J.isInstancedInterleavedBuffer){for(let me=0;me<ie.locationSize;me++)d(ie.location+me,J.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let me=0;me<ie.locationSize;me++)m(ie.location+me);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let me=0;me<ie.locationSize;me++)T(ie.location+me,ae/ie.locationSize,pe,H,re*ve,(fe+ae/ie.locationSize*me)*ve,q)}else{if(k.isInstancedBufferAttribute){for(let J=0;J<ie.locationSize;J++)d(ie.location+J,k.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let J=0;J<ie.locationSize;J++)m(ie.location+J);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let J=0;J<ie.locationSize;J++)T(ie.location+J,ae/ie.locationSize,pe,H,ae*ve,ae/ie.locationSize*J*ve,q)}}else if(W!==void 0){const H=W[V];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(ie.location,H);break;case 3:i.vertexAttrib3fv(ie.location,H);break;case 4:i.vertexAttrib4fv(ie.location,H);break;default:i.vertexAttrib1fv(ie.location,H)}}}}E()}function A(){B();for(const S in n){const I=n[S];for(const C in I){const O=I[C];for(const Y in O)u(O[Y].object),delete O[Y];delete I[C]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const C in I){const O=I[C];for(const Y in O)u(O[Y].object),delete O[Y];delete I[C]}delete n[S.id]}function P(S){for(const I in n){const C=n[I];if(C[S.id]===void 0)continue;const O=C[S.id];for(const Y in O)u(O[Y].object),delete O[Y];delete C[S.id]}}function B(){g(),o=!0,s!==r&&(s=r,c(s.object))}function g(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:B,resetDefaultState:g,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function xf(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],u[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let x=0;for(let v=0;v<h;v++)x+=u[v]*f[v];t.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vf(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==pn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const B=P===Vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==en&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Mn&&!B)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:w,maxSamples:A,samples:b}}function Mf(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new hi,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const x=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const E=s?0:n,T=E*4;let w=d.clippingState||null;l.value=w,w=u(x,f,T,p);for(let A=0;A!==T;++A)w[A]=t[A];d.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,x){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,x!==!0||m===null){const d=p+v*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,w=p;T!==v;++T,w+=4)o.copy(h[T]).applyMatrix4(E,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Sf(i){let e=new WeakMap;function t(o,a){return a===js?o.mapping=gi:a===Js&&(o.mapping=Hi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===js||a===Js)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ql(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Qn=4,Ba=[.125,.215,.35,.446,.526,.582],fi=20,bf=256,ir=new ia,za=new Ke;let Us=null,Ns=0,Fs=0,Os=!1;const Ef=new F;class ka{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=Ef}=s;Us=this._renderer.getRenderTarget(),Ns=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel(),Os=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Va(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ha(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Us,Ns,Fs),this._renderer.xr.enabled=Os,e.scissorTest=!1,Di(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gi||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Us=this._renderer.getRenderTarget(),Ns=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel(),Os=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:At,minFilter:At,generateMipmaps:!1,type:Vn,format:pn,colorSpace:Wi,depthBuffer:!1},r=Ga(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ga(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=yf(s)),this._blurMaterial=wf(s,e,t),this._ggxMaterial=Tf(s,e,t)}return r}_compileMaterial(e){const t=new Ft(new Cn,e);this._renderer.compile(t,ir)}_sceneToCubeUV(e,t,n,r,s){const l=new rn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(za),h.toneMapping=yn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ft(new Xn,new mn({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let d=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,d=!0):(m.color.copy(za),d=!0);for(let T=0;T<6;T++){const w=T%3;w===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):w===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const A=this._cubeSize;Di(r,w*A,T>2?A:0,A,A),h.setRenderTarget(r),d&&h.render(v,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===gi||e.mapping===Hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Va()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ha());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Di(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ir)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,p=h*f,{_lodMax:x}=this,v=this._sizeLods[n],m=3*v*(n>x-Qn?n-x+Qn:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,Di(s,m,d,3*v,2*v),r.setRenderTarget(s),r.render(a,ir),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-n,Di(e,m,d,3*v,2*v),r.setRenderTarget(e),r.render(a,ir)}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&at("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*fi-1),v=s/x,m=isFinite(s)?1+Math.floor(u*v):fi;m>fi&&Ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);const d=[];let E=0;for(let P=0;P<fi;++P){const B=P/v,g=Math.exp(-B*B/2);d.push(g),P===0?E+=g:P<m&&(E+=2*g)}for(let P=0;P<d.length;P++)d[P]=d[P]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=x,f.mipInt.value=T-n;const w=this._sizeLods[r],A=3*w*(r>T-Qn?r-T+Qn:0),b=4*(this._cubeSize-w);Di(t,A,b,3*w,2*w),l.setRenderTarget(t),l.render(h,ir)}}function yf(i){const e=[],t=[],n=[];let r=i;const s=i-Qn+1+Ba.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Qn?l=Ba[o-i+Qn-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,x=6,v=3,m=2,d=1,E=new Float32Array(v*x*p),T=new Float32Array(m*x*p),w=new Float32Array(d*x*p);for(let b=0;b<p;b++){const P=b%3*2/3-1,B=b>2?0:-1,g=[P,B,0,P+2/3,B,0,P+2/3,B+1,0,P,B,0,P+2/3,B+1,0,P,B+1,0];E.set(g,v*x*b),T.set(f,m*x*b);const S=[b,b,b,b,b,b];w.set(S,d*x*b)}const A=new Cn;A.setAttribute("position",new sn(E,v)),A.setAttribute("uv",new sn(T,m)),A.setAttribute("faceIndex",new sn(w,d)),n.push(new Ft(A,null)),r>Qn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ga(i,e,t){const n=new Tn(i,e,t);return n.texture.mapping=rs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Di(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Tf(i,e,t){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ss(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function wf(i,e,t){const n=new Float32Array(fi),r=new F(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ss(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Ha(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ss(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Va(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ss(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function ss(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Af(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===js||l===Js,u=l===gi||l===Hi;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ka(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new ka(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Rf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&gr("WebGLRenderer: "+n+" extension not supported."),r}}}function Cf(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,x=h.attributes.position;let v=0;if(p!==null){const E=p.array;v=p.version;for(let T=0,w=E.length;T<w;T+=3){const A=E[T+0],b=E[T+1],P=E[T+2];f.push(A,b,b,P,P,A)}}else if(x!==void 0){const E=x.array;v=x.version;for(let T=0,w=E.length/3-1;T<w;T+=3){const A=T+0,b=T+1,P=T+2;f.push(A,b,b,P,P,A)}}else return;const m=new(zl(f)?Wl:Vl)(f,1);m.version=v;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Pf(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*o),t.update(p,n,1)}function c(f,p,x){x!==0&&(i.drawElementsInstanced(n,p,s,f*o,x),t.update(p,n,x))}function u(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,x);let m=0;for(let d=0;d<x;d++)m+=p[d];t.update(m,n,1)}function h(f,p,x,v){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,v,0,x);let d=0;for(let E=0;E<x;E++)d+=p[E]*v[E];t.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function If(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:at("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Lf(i,e,t){const n=new WeakMap,r=new Tt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let S=function(){B.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const x=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let w=0;x===!0&&(w=1),v===!0&&(w=2),m===!0&&(w=3);let A=a.attributes.position.count*w,b=1;A>e.maxTextureSize&&(b=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const P=new Float32Array(A*b*4*h),B=new kl(P,A,b,h);B.type=Mn,B.needsUpdate=!0;const g=w*4;for(let I=0;I<h;I++){const C=d[I],O=E[I],Y=T[I],X=A*b*4*I;for(let W=0;W<C.count;W++){const V=W*g;x===!0&&(r.fromBufferAttribute(C,W),P[X+V+0]=r.x,P[X+V+1]=r.y,P[X+V+2]=r.z,P[X+V+3]=0),v===!0&&(r.fromBufferAttribute(O,W),P[X+V+4]=r.x,P[X+V+5]=r.y,P[X+V+6]=r.z,P[X+V+7]=0),m===!0&&(r.fromBufferAttribute(Y,W),P[X+V+8]=r.x,P[X+V+9]=r.y,P[X+V+10]=r.z,P[X+V+11]=Y.itemSize===4?r.w:1)}}f={count:h,texture:B,size:new ct(A,b)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const v=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Df(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Uf={[yl]:"LINEAR_TONE_MAPPING",[Tl]:"REINHARD_TONE_MAPPING",[wl]:"CINEON_TONE_MAPPING",[Al]:"ACES_FILMIC_TONE_MAPPING",[Cl]:"AGX_TONE_MAPPING",[Pl]:"NEUTRAL_TONE_MAPPING",[Rl]:"CUSTOM_TONE_MAPPING"};function Nf(i,e,t,n,r){const s=new Tn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),o=new Tn(e,t,{type:Vn,depthBuffer:!1,stencilBuffer:!1}),a=new Cn;a.setAttribute("position",new Hn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Hn([0,2,0,0,2,0],2));const l=new Mh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ft(a,l),u=new ia(-1,1,1,-1,0,1);let h=null,f=null,p=!1,x,v=null,m=[],d=!1;this.setSize=function(E,T){s.setSize(E,T),o.setSize(E,T);for(let w=0;w<m.length;w++){const A=m[w];A.setSize&&A.setSize(E,T)}},this.setEffects=function(E){m=E,d=m.length>0&&m[0].isRenderPass===!0;const T=s.width,w=s.height;for(let A=0;A<m.length;A++){const b=m[A];b.setSize&&b.setSize(T,w)}},this.begin=function(E,T){if(p||E.toneMapping===yn&&m.length===0)return!1;if(v=T,T!==null){const w=T.width,A=T.height;(s.width!==w||s.height!==A)&&this.setSize(w,A)}return d===!1&&E.setRenderTarget(s),x=E.toneMapping,E.toneMapping=yn,!0},this.hasRenderPass=function(){return d},this.end=function(E,T){E.toneMapping=x,p=!0;let w=s,A=o;for(let b=0;b<m.length;b++){const P=m[b];if(P.enabled!==!1&&(P.render(E,A,w,T),P.needsSwap!==!1)){const B=w;w=A,A=B}}if(h!==E.outputColorSpace||f!==E.toneMapping){h=E.outputColorSpace,f=E.toneMapping,l.defines={},lt.getTransfer(h)===ft&&(l.defines.SRGB_TRANSFER="");const b=Uf[f];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,E.setRenderTarget(v),E.render(c,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Jl=new Bt,No=new _r(1,1),Ql=new kl,ec=new Kc,tc=new Yl,Wa=[],Xa=[],$a=new Float32Array(16),Ya=new Float32Array(9),qa=new Float32Array(4);function Zi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Wa[r];if(s===void 0&&(s=new Float32Array(r),Wa[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function os(i,e){let t=Xa[e];t===void 0&&(t=new Int32Array(e),Xa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ff(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function Bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function zf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function kf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;qa.set(n),i.uniformMatrix2fv(this.addr,!1,qa),It(t,n)}}function Gf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;Ya.set(n),i.uniformMatrix3fv(this.addr,!1,Ya),It(t,n)}}function Hf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;$a.set(n),i.uniformMatrix4fv(this.addr,!1,$a),It(t,n)}}function Vf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function Xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function $f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function Yf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function Zf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function Kf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function jf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(No.compareFunction=t.isReversedDepthBuffer()?jo:Ko,s=No):s=Jl,t.setTexture2D(e||s,r)}function Jf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ec,r)}function Qf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||tc,r)}function ep(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ql,r)}function tp(i){switch(i){case 5126:return Ff;case 35664:return Of;case 35665:return Bf;case 35666:return zf;case 35674:return kf;case 35675:return Gf;case 35676:return Hf;case 5124:case 35670:return Vf;case 35667:case 35671:return Wf;case 35668:case 35672:return Xf;case 35669:case 35673:return $f;case 5125:return Yf;case 36294:return qf;case 36295:return Zf;case 36296:return Kf;case 35678:case 36198:case 36298:case 36306:case 35682:return jf;case 35679:case 36299:case 36307:return Jf;case 35680:case 36300:case 36308:case 36293:return Qf;case 36289:case 36303:case 36311:case 36292:return ep}}function np(i,e){i.uniform1fv(this.addr,e)}function ip(i,e){const t=Zi(e,this.size,2);i.uniform2fv(this.addr,t)}function rp(i,e){const t=Zi(e,this.size,3);i.uniform3fv(this.addr,t)}function sp(i,e){const t=Zi(e,this.size,4);i.uniform4fv(this.addr,t)}function op(i,e){const t=Zi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ap(i,e){const t=Zi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lp(i,e){const t=Zi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cp(i,e){i.uniform1iv(this.addr,e)}function hp(i,e){i.uniform2iv(this.addr,e)}function up(i,e){i.uniform3iv(this.addr,e)}function dp(i,e){i.uniform4iv(this.addr,e)}function fp(i,e){i.uniform1uiv(this.addr,e)}function pp(i,e){i.uniform2uiv(this.addr,e)}function mp(i,e){i.uniform3uiv(this.addr,e)}function gp(i,e){i.uniform4uiv(this.addr,e)}function _p(i,e,t){const n=this.cache,r=e.length,s=os(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=No:o=Jl;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function xp(i,e,t){const n=this.cache,r=e.length,s=os(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ec,s[o])}function vp(i,e,t){const n=this.cache,r=e.length,s=os(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||tc,s[o])}function Mp(i,e,t){const n=this.cache,r=e.length,s=os(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ql,s[o])}function Sp(i){switch(i){case 5126:return np;case 35664:return ip;case 35665:return rp;case 35666:return sp;case 35674:return op;case 35675:return ap;case 35676:return lp;case 5124:case 35670:return cp;case 35667:case 35671:return hp;case 35668:case 35672:return up;case 35669:case 35673:return dp;case 5125:return fp;case 36294:return pp;case 36295:return mp;case 36296:return gp;case 35678:case 36198:case 36298:case 36306:case 35682:return _p;case 35679:case 36299:case 36307:return xp;case 35680:case 36300:case 36308:case 36293:return vp;case 36289:case 36303:case 36311:case 36292:return Mp}}class bp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tp(t.type)}}class Ep{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sp(t.type)}}class yp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Bs=/(\w+)(\])?(\[|\.)?/g;function Za(i,e){i.seq.push(e),i.map[e.id]=e}function Tp(i,e,t){const n=i.name,r=n.length;for(Bs.lastIndex=0;;){const s=Bs.exec(n),o=Bs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Za(t,c===void 0?new bp(a,i,e):new Ep(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new yp(a),Za(t,h)),t=h}}}class qr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Tp(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Ka(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const wp=37297;let Ap=0;function Rp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ja=new Je;function Cp(i){lt._getMatrix(ja,lt.workingColorSpace,i);const e=`mat3( ${ja.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case Zr:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ja(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Rp(i.getShaderSource(e),a)}else return s}function Pp(i,e){const t=Cp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Ip={[yl]:"Linear",[Tl]:"Reinhard",[wl]:"Cineon",[Al]:"ACESFilmic",[Cl]:"AgX",[Pl]:"Neutral",[Rl]:"Custom"};function Lp(i,e){const t=Ip[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const kr=new F;function Dp(){lt.getLuminanceCoefficients(kr);const i=kr.x.toFixed(4),e=kr.y.toFixed(4),t=kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Up(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function Np(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ar(i){return i!==""}function Qa(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function el(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Op=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(i){return i.replace(Op,zp)}const Bp=new Map;function zp(i,e){let t=Qe[e];if(t===void 0){const n=Bp.get(e);if(n!==void 0)t=Qe[n],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Fo(t)}const kp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tl(i){return i.replace(kp,Gp)}function Gp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Hp={[Vr]:"SHADOWMAP_TYPE_PCF",[or]:"SHADOWMAP_TYPE_VSM"};function Vp(i){return Hp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Wp={[gi]:"ENVMAP_TYPE_CUBE",[Hi]:"ENVMAP_TYPE_CUBE",[rs]:"ENVMAP_TYPE_CUBE_UV"};function Xp(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Wp[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const $p={[Hi]:"ENVMAP_MODE_REFRACTION"};function Yp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$p[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const qp={[is]:"ENVMAP_BLENDING_MULTIPLY",[Ic]:"ENVMAP_BLENDING_MIX",[Lc]:"ENVMAP_BLENDING_ADD"};function Zp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":qp[i.combine]||"ENVMAP_BLENDING_NONE"}function Kp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function jp(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Vp(t),c=Xp(t),u=Yp(t),h=Zp(t),f=Kp(t),p=Up(t),x=Np(s),v=r.createProgram();let m,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ar).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ar).join(`
`),d.length>0&&(d+=`
`)):(m=[nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),d=[nl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==yn?Lp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Pp("linearToOutputTexel",t.outputColorSpace),Dp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ar).join(`
`)),o=Fo(o),o=Qa(o,t),o=el(o,t),a=Fo(a),a=Qa(a,t),a=el(a,t),o=tl(o),a=tl(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===pa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=E+m+o,w=E+d+a,A=Ka(r,r.VERTEX_SHADER,T),b=Ka(r,r.FRAGMENT_SHADER,w);r.attachShader(v,A),r.attachShader(v,b),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(I){if(i.debug.checkShaderErrors){const C=r.getProgramInfoLog(v)||"",O=r.getShaderInfoLog(A)||"",Y=r.getShaderInfoLog(b)||"",X=C.trim(),W=O.trim(),V=Y.trim();let ie=!0,k=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,A,b);else{const H=Ja(r,A,"vertex"),ae=Ja(r,b,"fragment");at("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+H+`
`+ae)}else X!==""?Ze("WebGLProgram: Program Info Log:",X):(W===""||V==="")&&(k=!1);k&&(I.diagnostics={runnable:ie,programLog:X,vertexShader:{log:W,prefix:m},fragmentShader:{log:V,prefix:d}})}r.deleteShader(A),r.deleteShader(b),B=new qr(r,v),g=Fp(r,v)}let B;this.getUniforms=function(){return B===void 0&&P(this),B};let g;this.getAttributes=function(){return g===void 0&&P(this),g};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,wp)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ap++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=b,this}let Jp=0;class Qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new em(e),t.set(e,n)),n}}class em{constructor(e){this.id=Jp++,this.code=e,this.usedTimes=0}}function tm(i,e,t,n,r,s,o){const a=new ea,l=new Qp,c=new Set,u=[],h=new Map,f=r.logarithmicDepthBuffer;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(g){return c.add(g),g===0?"uv":`uv${g}`}function m(g,S,I,C,O){const Y=C.fog,X=O.geometry,W=g.isMeshStandardMaterial?C.environment:null,V=(g.isMeshStandardMaterial?t:e).get(g.envMap||W),ie=V&&V.mapping===rs?V.image.height:null,k=x[g.type];g.precision!==null&&(p=r.getMaxPrecision(g.precision),p!==g.precision&&Ze("WebGLProgram.getParameters:",g.precision,"not supported, using",p,"instead."));const H=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ae=H!==void 0?H.length:0;let G=0;X.morphAttributes.position!==void 0&&(G=1),X.morphAttributes.normal!==void 0&&(G=2),X.morphAttributes.color!==void 0&&(G=3);let ee,pe,ve,q;if(k){const rt=vn[k];ee=rt.vertexShader,pe=rt.fragmentShader}else ee=g.vertexShader,pe=g.fragmentShader,l.update(g),ve=l.getVertexShaderID(g),q=l.getFragmentShaderID(g);const J=i.getRenderTarget(),re=i.state.buffers.depth.getReversed(),fe=O.isInstancedMesh===!0,me=O.isBatchedMesh===!0,Le=!!g.map,nt=!!g.matcap,Ge=!!V,it=!!g.aoMap,se=!!g.lightMap,xe=!!g.bumpMap,Te=!!g.normalMap,L=!!g.displacementMap,et=!!g.emissiveMap,qe=!!g.metalnessMap,ot=!!g.roughnessMap,Ce=g.anisotropy>0,y=g.clearcoat>0,_=g.dispersion>0,N=g.iridescence>0,ne=g.sheen>0,oe=g.transmission>0,te=Ce&&!!g.anisotropyMap,Oe=y&&!!g.clearcoatMap,be=y&&!!g.clearcoatNormalMap,Fe=y&&!!g.clearcoatRoughnessMap,He=N&&!!g.iridescenceMap,ue=N&&!!g.iridescenceThicknessMap,Ee=ne&&!!g.sheenColorMap,Ie=ne&&!!g.sheenRoughnessMap,Ue=!!g.specularMap,Se=!!g.specularColorMap,je=!!g.specularIntensityMap,U=oe&&!!g.transmissionMap,we=oe&&!!g.thicknessMap,ge=!!g.gradientMap,Pe=!!g.alphaMap,de=g.alphaTest>0,le=!!g.alphaHash,Me=!!g.extensions;let $e=yn;g.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&($e=i.toneMapping);const pt={shaderID:k,shaderType:g.type,shaderName:g.name,vertexShader:ee,fragmentShader:pe,defines:g.defines,customVertexShaderID:ve,customFragmentShaderID:q,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:p,batching:me,batchingColor:me&&O._colorsTexture!==null,instancing:fe,instancingColor:fe&&O.instanceColor!==null,instancingMorph:fe&&O.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Wi,alphaToCoverage:!!g.alphaToCoverage,map:Le,matcap:nt,envMap:Ge,envMapMode:Ge&&V.mapping,envMapCubeUVHeight:ie,aoMap:it,lightMap:se,bumpMap:xe,normalMap:Te,displacementMap:L,emissiveMap:et,normalMapObjectSpace:Te&&g.normalMapType===Nc,normalMapTangentSpace:Te&&g.normalMapType===Zo,metalnessMap:qe,roughnessMap:ot,anisotropy:Ce,anisotropyMap:te,clearcoat:y,clearcoatMap:Oe,clearcoatNormalMap:be,clearcoatRoughnessMap:Fe,dispersion:_,iridescence:N,iridescenceMap:He,iridescenceThicknessMap:ue,sheen:ne,sheenColorMap:Ee,sheenRoughnessMap:Ie,specularMap:Ue,specularColorMap:Se,specularIntensityMap:je,transmission:oe,transmissionMap:U,thicknessMap:we,gradientMap:ge,opaque:g.transparent===!1&&g.blending===zi&&g.alphaToCoverage===!1,alphaMap:Pe,alphaTest:de,alphaHash:le,combine:g.combine,mapUv:Le&&v(g.map.channel),aoMapUv:it&&v(g.aoMap.channel),lightMapUv:se&&v(g.lightMap.channel),bumpMapUv:xe&&v(g.bumpMap.channel),normalMapUv:Te&&v(g.normalMap.channel),displacementMapUv:L&&v(g.displacementMap.channel),emissiveMapUv:et&&v(g.emissiveMap.channel),metalnessMapUv:qe&&v(g.metalnessMap.channel),roughnessMapUv:ot&&v(g.roughnessMap.channel),anisotropyMapUv:te&&v(g.anisotropyMap.channel),clearcoatMapUv:Oe&&v(g.clearcoatMap.channel),clearcoatNormalMapUv:be&&v(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&v(g.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&v(g.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&v(g.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&v(g.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&v(g.sheenRoughnessMap.channel),specularMapUv:Ue&&v(g.specularMap.channel),specularColorMapUv:Se&&v(g.specularColorMap.channel),specularIntensityMapUv:je&&v(g.specularIntensityMap.channel),transmissionMapUv:U&&v(g.transmissionMap.channel),thicknessMapUv:we&&v(g.thicknessMap.channel),alphaMapUv:Pe&&v(g.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Te||Ce),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(Le||Pe),fog:!!Y,useFog:g.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:g.flatShading===!0&&g.wireframe===!1,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:re,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:G,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,decodeVideoTexture:Le&&g.map.isVideoTexture===!0&&lt.getTransfer(g.map.colorSpace)===ft,decodeVideoTextureEmissive:et&&g.emissiveMap.isVideoTexture===!0&&lt.getTransfer(g.emissiveMap.colorSpace)===ft,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Bn,flipSided:g.side===qt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Me&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&g.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function d(g){const S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(const I in g.defines)S.push(I),S.push(g.defines[I]);return g.isRawShaderMaterial===!1&&(E(S,g),T(S,g),S.push(i.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function E(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapCubeUVHeight),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.morphAttributeCount),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function T(g,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),g.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),g.push(a.mask)}function w(g){const S=x[g.type];let I;if(S){const C=vn[S];I=ch.clone(C.uniforms)}else I=g.uniforms;return I}function A(g,S){let I=h.get(S);return I!==void 0?++I.usedTimes:(I=new jp(i,S,g,s),u.push(I),h.set(S,I)),I}function b(g){if(--g.usedTimes===0){const S=u.indexOf(g);u[S]=u[u.length-1],u.pop(),h.delete(g.cacheKey),g.destroy()}}function P(g){l.remove(g)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:w,acquireProgram:A,releaseProgram:b,releaseShaderCache:P,programs:u,dispose:B}}function nm(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function im(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function il(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function rl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,p,x,v,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:x,renderOrder:h.renderOrder,z:v,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=x,d.renderOrder=h.renderOrder,d.z=v,d.group=m),e++,d}function a(h,f,p,x,v,m){const d=o(h,f,p,x,v,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,x,v,m){const d=o(h,f,p,x,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||im),n.length>1&&n.sort(f||il),r.length>1&&r.sort(f||il)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function rm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new rl,i.set(n,[o])):r>=s.length?(o=new rl,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function sm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ke};break;case"SpotLight":t={position:new F,direction:new F,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function om(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let am=0;function lm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function cm(i){const e=new sm,t=om(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const r=new F,s=new vt,o=new vt;function a(c){let u=0,h=0,f=0;for(let g=0;g<9;g++)n.probe[g].set(0,0,0);let p=0,x=0,v=0,m=0,d=0,E=0,T=0,w=0,A=0,b=0,P=0;c.sort(lm);for(let g=0,S=c.length;g<S;g++){const I=c[g],C=I.color,O=I.intensity,Y=I.distance;let X=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Vi?X=I.shadow.map.texture:X=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=C.r*O,h+=C.g*O,f+=C.b*O;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],O);P++}else if(I.isDirectionalLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const V=I.shadow,ie=t.get(I);ie.shadowIntensity=V.intensity,ie.shadowBias=V.bias,ie.shadowNormalBias=V.normalBias,ie.shadowRadius=V.radius,ie.shadowMapSize=V.mapSize,n.directionalShadow[p]=ie,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=I.shadow.matrix,E++}n.directional[p]=W,p++}else if(I.isSpotLight){const W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(C).multiplyScalar(O),W.distance=Y,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[v]=W;const V=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,V.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[v]=V.matrix,I.castShadow){const ie=t.get(I);ie.shadowIntensity=V.intensity,ie.shadowBias=V.bias,ie.shadowNormalBias=V.normalBias,ie.shadowRadius=V.radius,ie.shadowMapSize=V.mapSize,n.spotShadow[v]=ie,n.spotShadowMap[v]=X,w++}v++}else if(I.isRectAreaLight){const W=e.get(I);W.color.copy(C).multiplyScalar(O),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=W,m++}else if(I.isPointLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const V=I.shadow,ie=t.get(I);ie.shadowIntensity=V.intensity,ie.shadowBias=V.bias,ie.shadowNormalBias=V.normalBias,ie.shadowRadius=V.radius,ie.shadowMapSize=V.mapSize,ie.shadowCameraNear=V.camera.near,ie.shadowCameraFar=V.camera.far,n.pointShadow[x]=ie,n.pointShadowMap[x]=X,n.pointShadowMatrix[x]=I.shadow.matrix,T++}n.point[x]=W,x++}else if(I.isHemisphereLight){const W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(O),W.groundColor.copy(I.groundColor).multiplyScalar(O),n.hemi[d]=W,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const B=n.hash;(B.directionalLength!==p||B.pointLength!==x||B.spotLength!==v||B.rectAreaLength!==m||B.hemiLength!==d||B.numDirectionalShadows!==E||B.numPointShadows!==T||B.numSpotShadows!==w||B.numSpotMaps!==A||B.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=x,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=w+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=P,B.directionalLength=p,B.pointLength=x,B.spotLength=v,B.rectAreaLength=m,B.hemiLength=d,B.numDirectionalShadows=E,B.numPointShadows=T,B.numSpotShadows=w,B.numSpotMaps=A,B.numLightProbes=P,n.version=am++)}function l(c,u){let h=0,f=0,p=0,x=0,v=0;const m=u.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const T=c[d];if(T.isDirectionalLight){const w=n.directional[h];w.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),h++}else if(T.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const w=n.rectArea[x];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(T.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const w=n.hemi[v];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function sl(i){const e=new cm(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function hm(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new sl(i),e.set(r,[a])):s>=o.length?(a=new sl(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const um=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,fm=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],pm=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],ol=new vt,rr=new F,zs=new F;function mm(i,e,t){let n=new ta;const r=new ct,s=new ct,o=new Tt,a=new bh,l=new Eh,c={},u=t.maxTextureSize,h={[ti]:qt,[qt]:ti,[Bn]:Bn},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:um,fragmentShader:dm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new Cn;x.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ft(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vr;let d=this.type;this.render=function(b,P,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;b.type===dc&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),b.type=Vr);const g=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),C=i.state;C.setBlending(kn),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const O=d!==this.type;O&&P.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(X=>X.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,X=b.length;Y<X;Y++){const W=b[Y],V=W.shadow;if(V===void 0){Ze("WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ie=V.getFrameExtents();if(r.multiply(ie),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,V.mapSize.y=s.y)),V.map===null||O===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===or){if(W.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Tn(r.x,r.y,{format:Vi,type:Vn,minFilter:At,magFilter:At,generateMipmaps:!1}),V.map.texture.name=W.name+".shadowMap",V.map.depthTexture=new _r(r.x,r.y,Mn),V.map.depthTexture.name=W.name+".shadowMapDepth",V.map.depthTexture.format=Wn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ot,V.map.depthTexture.magFilter=Ot}else{W.isPointLight?(V.map=new ql(r.x),V.map.depthTexture=new vh(r.x,An)):(V.map=new Tn(r.x,r.y),V.map.depthTexture=new _r(r.x,r.y,An)),V.map.depthTexture.name=W.name+".shadowMap",V.map.depthTexture.format=Wn;const H=i.state.buffers.depth.getReversed();this.type===Vr?(V.map.depthTexture.compareFunction=H?jo:Ko,V.map.depthTexture.minFilter=At,V.map.depthTexture.magFilter=At):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ot,V.map.depthTexture.magFilter=Ot)}V.camera.updateProjectionMatrix()}const k=V.map.isWebGLCubeRenderTarget?6:1;for(let H=0;H<k;H++){if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,H),i.clear();else{H===0&&(i.setRenderTarget(V.map),i.clear());const ae=V.getViewport(H);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),C.viewport(o)}if(W.isPointLight){const ae=V.camera,G=V.matrix,ee=W.distance||ae.far;ee!==ae.far&&(ae.far=ee,ae.updateProjectionMatrix()),rr.setFromMatrixPosition(W.matrixWorld),ae.position.copy(rr),zs.copy(ae.position),zs.add(fm[H]),ae.up.copy(pm[H]),ae.lookAt(zs),ae.updateMatrixWorld(),G.makeTranslation(-rr.x,-rr.y,-rr.z),ol.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),V._frustum.setFromProjectionMatrix(ol,ae.coordinateSystem,ae.reversedDepth)}else V.updateMatrices(W);n=V.getFrustum(),w(P,B,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===or&&E(V,B),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(g,S,I)};function E(b,P){const B=e.update(v);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Tn(r.x,r.y,{format:Vi,type:Vn})),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(P,null,B,f,v,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(P,null,B,p,v,null)}function T(b,P,B,g){let S=null;const I=B.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)S=I;else if(S=B.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const C=S.uuid,O=P.uuid;let Y=c[C];Y===void 0&&(Y={},c[C]=Y);let X=Y[O];X===void 0&&(X=S.clone(),Y[O]=X,P.addEventListener("dispose",A)),S=X}if(S.visible=P.visible,S.wireframe=P.wireframe,g===or?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:h[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,B.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const C=i.properties.get(S);C.light=B}return S}function w(b,P,B,g,S){if(b.visible===!1)return;if(b.layers.test(P.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===or)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld);const O=e.update(b),Y=b.material;if(Array.isArray(Y)){const X=O.groups;for(let W=0,V=X.length;W<V;W++){const ie=X[W],k=Y[ie.materialIndex];if(k&&k.visible){const H=T(b,k,g,S);b.onBeforeShadow(i,b,P,B,O,H,ie),i.renderBufferDirect(B,null,O,H,b,ie),b.onAfterShadow(i,b,P,B,O,H,ie)}}}else if(Y.visible){const X=T(b,Y,g,S);b.onBeforeShadow(i,b,P,B,O,X,null),i.renderBufferDirect(B,null,O,X,b,null),b.onAfterShadow(i,b,P,B,O,X,null)}}const C=b.children;for(let O=0,Y=C.length;O<Y;O++)w(C[O],P,B,g,S)}function A(b){b.target.removeEventListener("dispose",A);for(const B in c){const g=c[B],S=b.target.uuid;S in g&&(g[S].dispose(),delete g[S])}}}const gm={[Ws]:Xs,[$s]:Zs,[Ys]:Ks,[Gi]:qs,[Xs]:Ws,[Zs]:$s,[Ks]:Ys,[qs]:Gi};function _m(i,e){function t(){let U=!1;const we=new Tt;let ge=null;const Pe=new Tt(0,0,0,0);return{setMask:function(de){ge!==de&&!U&&(i.colorMask(de,de,de,de),ge=de)},setLocked:function(de){U=de},setClear:function(de,le,Me,$e,pt){pt===!0&&(de*=$e,le*=$e,Me*=$e),we.set(de,le,Me,$e),Pe.equals(we)===!1&&(i.clearColor(de,le,Me,$e),Pe.copy(we))},reset:function(){U=!1,ge=null,Pe.set(-1,0,0,0)}}}function n(){let U=!1,we=!1,ge=null,Pe=null,de=null;return{setReversed:function(le){if(we!==le){const Me=e.get("EXT_clip_control");le?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),we=le;const $e=de;de=null,this.setClear($e)}},getReversed:function(){return we},setTest:function(le){le?J(i.DEPTH_TEST):re(i.DEPTH_TEST)},setMask:function(le){ge!==le&&!U&&(i.depthMask(le),ge=le)},setFunc:function(le){if(we&&(le=gm[le]),Pe!==le){switch(le){case Ws:i.depthFunc(i.NEVER);break;case Xs:i.depthFunc(i.ALWAYS);break;case $s:i.depthFunc(i.LESS);break;case Gi:i.depthFunc(i.LEQUAL);break;case Ys:i.depthFunc(i.EQUAL);break;case qs:i.depthFunc(i.GEQUAL);break;case Zs:i.depthFunc(i.GREATER);break;case Ks:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=le}},setLocked:function(le){U=le},setClear:function(le){de!==le&&(we&&(le=1-le),i.clearDepth(le),de=le)},reset:function(){U=!1,ge=null,Pe=null,de=null,we=!1}}}function r(){let U=!1,we=null,ge=null,Pe=null,de=null,le=null,Me=null,$e=null,pt=null;return{setTest:function(rt){U||(rt?J(i.STENCIL_TEST):re(i.STENCIL_TEST))},setMask:function(rt){we!==rt&&!U&&(i.stencilMask(rt),we=rt)},setFunc:function(rt,zt,an){(ge!==rt||Pe!==zt||de!==an)&&(i.stencilFunc(rt,zt,an),ge=rt,Pe=zt,de=an)},setOp:function(rt,zt,an){(le!==rt||Me!==zt||$e!==an)&&(i.stencilOp(rt,zt,an),le=rt,Me=zt,$e=an)},setLocked:function(rt){U=rt},setClear:function(rt){pt!==rt&&(i.clearStencil(rt),pt=rt)},reset:function(){U=!1,we=null,ge=null,Pe=null,de=null,le=null,Me=null,$e=null,pt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],x=null,v=!1,m=null,d=null,E=null,T=null,w=null,A=null,b=null,P=new Ke(0,0,0),B=0,g=!1,S=null,I=null,C=null,O=null,Y=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,V=0;const ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ie)[1]),W=V>=1):ie.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),W=V>=2);let k=null,H={};const ae=i.getParameter(i.SCISSOR_BOX),G=i.getParameter(i.VIEWPORT),ee=new Tt().fromArray(ae),pe=new Tt().fromArray(G);function ve(U,we,ge,Pe){const de=new Uint8Array(4),le=i.createTexture();i.bindTexture(U,le),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Me=0;Me<ge;Me++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(we+Me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return le}const q={};q[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(Gi),xe(!1),Te(la),J(i.CULL_FACE),it(kn);function J(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function re(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function fe(U,we){return h[U]!==we?(i.bindFramebuffer(U,we),h[U]=we,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=we),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=we),!0):!1}function me(U,we){let ge=p,Pe=!1;if(U){ge=f.get(we),ge===void 0&&(ge=[],f.set(we,ge));const de=U.textures;if(ge.length!==de.length||ge[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Me=de.length;le<Me;le++)ge[le]=i.COLOR_ATTACHMENT0+le;ge.length=de.length,Pe=!0}}else ge[0]!==i.BACK&&(ge[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(ge)}function Le(U){return x!==U?(i.useProgram(U),x=U,!0):!1}const nt={[di]:i.FUNC_ADD,[pc]:i.FUNC_SUBTRACT,[mc]:i.FUNC_REVERSE_SUBTRACT};nt[gc]=i.MIN,nt[_c]=i.MAX;const Ge={[xc]:i.ZERO,[vc]:i.ONE,[Mc]:i.SRC_COLOR,[Hs]:i.SRC_ALPHA,[wc]:i.SRC_ALPHA_SATURATE,[yc]:i.DST_COLOR,[bc]:i.DST_ALPHA,[Sc]:i.ONE_MINUS_SRC_COLOR,[Vs]:i.ONE_MINUS_SRC_ALPHA,[Tc]:i.ONE_MINUS_DST_COLOR,[Ec]:i.ONE_MINUS_DST_ALPHA,[Ac]:i.CONSTANT_COLOR,[Rc]:i.ONE_MINUS_CONSTANT_COLOR,[Cc]:i.CONSTANT_ALPHA,[Pc]:i.ONE_MINUS_CONSTANT_ALPHA};function it(U,we,ge,Pe,de,le,Me,$e,pt,rt){if(U===kn){v===!0&&(re(i.BLEND),v=!1);return}if(v===!1&&(J(i.BLEND),v=!0),U!==fc){if(U!==m||rt!==g){if((d!==di||w!==di)&&(i.blendEquation(i.FUNC_ADD),d=di,w=di),rt)switch(U){case zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ca:i.blendFunc(i.ONE,i.ONE);break;case ha:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ua:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:at("WebGLState: Invalid blending: ",U);break}else switch(U){case zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ca:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ha:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ua:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",U);break}E=null,T=null,A=null,b=null,P.set(0,0,0),B=0,m=U,g=rt}return}de=de||we,le=le||ge,Me=Me||Pe,(we!==d||de!==w)&&(i.blendEquationSeparate(nt[we],nt[de]),d=we,w=de),(ge!==E||Pe!==T||le!==A||Me!==b)&&(i.blendFuncSeparate(Ge[ge],Ge[Pe],Ge[le],Ge[Me]),E=ge,T=Pe,A=le,b=Me),($e.equals(P)===!1||pt!==B)&&(i.blendColor($e.r,$e.g,$e.b,pt),P.copy($e),B=pt),m=U,g=!1}function se(U,we){U.side===Bn?re(i.CULL_FACE):J(i.CULL_FACE);let ge=U.side===qt;we&&(ge=!ge),xe(ge),U.blending===zi&&U.transparent===!1?it(kn):it(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Pe=U.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),et(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):re(i.SAMPLE_ALPHA_TO_COVERAGE)}function xe(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function Te(U){U!==hc?(J(i.CULL_FACE),U!==I&&(U===la?i.cullFace(i.BACK):U===uc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):re(i.CULL_FACE),I=U}function L(U){U!==C&&(W&&i.lineWidth(U),C=U)}function et(U,we,ge){U?(J(i.POLYGON_OFFSET_FILL),(O!==we||Y!==ge)&&(i.polygonOffset(we,ge),O=we,Y=ge)):re(i.POLYGON_OFFSET_FILL)}function qe(U){U?J(i.SCISSOR_TEST):re(i.SCISSOR_TEST)}function ot(U){U===void 0&&(U=i.TEXTURE0+X-1),k!==U&&(i.activeTexture(U),k=U)}function Ce(U,we,ge){ge===void 0&&(k===null?ge=i.TEXTURE0+X-1:ge=k);let Pe=H[ge];Pe===void 0&&(Pe={type:void 0,texture:void 0},H[ge]=Pe),(Pe.type!==U||Pe.texture!==we)&&(k!==ge&&(i.activeTexture(ge),k=ge),i.bindTexture(U,we||q[U]),Pe.type=U,Pe.texture=we)}function y(){const U=H[k];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(U){at("WebGLState:",U)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(U){at("WebGLState:",U)}}function ne(){try{i.texSubImage2D(...arguments)}catch(U){at("WebGLState:",U)}}function oe(){try{i.texSubImage3D(...arguments)}catch(U){at("WebGLState:",U)}}function te(){try{i.compressedTexSubImage2D(...arguments)}catch(U){at("WebGLState:",U)}}function Oe(){try{i.compressedTexSubImage3D(...arguments)}catch(U){at("WebGLState:",U)}}function be(){try{i.texStorage2D(...arguments)}catch(U){at("WebGLState:",U)}}function Fe(){try{i.texStorage3D(...arguments)}catch(U){at("WebGLState:",U)}}function He(){try{i.texImage2D(...arguments)}catch(U){at("WebGLState:",U)}}function ue(){try{i.texImage3D(...arguments)}catch(U){at("WebGLState:",U)}}function Ee(U){ee.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ee.copy(U))}function Ie(U){pe.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),pe.copy(U))}function Ue(U,we){let ge=c.get(we);ge===void 0&&(ge=new WeakMap,c.set(we,ge));let Pe=ge.get(U);Pe===void 0&&(Pe=i.getUniformBlockIndex(we,U.name),ge.set(U,Pe))}function Se(U,we){const Pe=c.get(we).get(U);l.get(we)!==Pe&&(i.uniformBlockBinding(we,Pe,U.__bindingPointIndex),l.set(we,Pe))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},k=null,H={},h={},f=new WeakMap,p=[],x=null,v=!1,m=null,d=null,E=null,T=null,w=null,A=null,b=null,P=new Ke(0,0,0),B=0,g=!1,S=null,I=null,C=null,O=null,Y=null,ee.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:re,bindFramebuffer:fe,drawBuffers:me,useProgram:Le,setBlending:it,setMaterial:se,setFlipSided:xe,setCullFace:Te,setLineWidth:L,setPolygonOffset:et,setScissorTest:qe,activeTexture:ot,bindTexture:Ce,unbindTexture:y,compressedTexImage2D:_,compressedTexImage3D:N,texImage2D:He,texImage3D:ue,updateUBOMapping:Ue,uniformBlockBinding:Se,texStorage2D:be,texStorage3D:Fe,texSubImage2D:ne,texSubImage3D:oe,compressedTexSubImage2D:te,compressedTexSubImage3D:Oe,scissor:Ee,viewport:Ie,reset:je}}function xm(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(y,_){return p?new OffscreenCanvas(y,_):jr("canvas")}function v(y,_,N){let ne=1;const oe=Ce(y);if((oe.width>N||oe.height>N)&&(ne=N/Math.max(oe.width,oe.height)),ne<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const te=Math.floor(ne*oe.width),Oe=Math.floor(ne*oe.height);h===void 0&&(h=x(te,Oe));const be=_?x(te,Oe):h;return be.width=te,be.height=Oe,be.getContext("2d").drawImage(y,0,0,te,Oe),Ze("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+te+"x"+Oe+")."),be}else return"data"in y&&Ze("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),y;return y}function m(y){return y.generateMipmaps}function d(y){i.generateMipmap(y)}function E(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(y,_,N,ne,oe=!1){if(y!==null){if(i[y]!==void 0)return i[y];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let te=_;if(_===i.RED&&(N===i.FLOAT&&(te=i.R32F),N===i.HALF_FLOAT&&(te=i.R16F),N===i.UNSIGNED_BYTE&&(te=i.R8)),_===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(te=i.R8UI),N===i.UNSIGNED_SHORT&&(te=i.R16UI),N===i.UNSIGNED_INT&&(te=i.R32UI),N===i.BYTE&&(te=i.R8I),N===i.SHORT&&(te=i.R16I),N===i.INT&&(te=i.R32I)),_===i.RG&&(N===i.FLOAT&&(te=i.RG32F),N===i.HALF_FLOAT&&(te=i.RG16F),N===i.UNSIGNED_BYTE&&(te=i.RG8)),_===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(te=i.RG8UI),N===i.UNSIGNED_SHORT&&(te=i.RG16UI),N===i.UNSIGNED_INT&&(te=i.RG32UI),N===i.BYTE&&(te=i.RG8I),N===i.SHORT&&(te=i.RG16I),N===i.INT&&(te=i.RG32I)),_===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(te=i.RGB8UI),N===i.UNSIGNED_SHORT&&(te=i.RGB16UI),N===i.UNSIGNED_INT&&(te=i.RGB32UI),N===i.BYTE&&(te=i.RGB8I),N===i.SHORT&&(te=i.RGB16I),N===i.INT&&(te=i.RGB32I)),_===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),N===i.UNSIGNED_INT&&(te=i.RGBA32UI),N===i.BYTE&&(te=i.RGBA8I),N===i.SHORT&&(te=i.RGBA16I),N===i.INT&&(te=i.RGBA32I)),_===i.RGB&&(N===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),_===i.RGBA){const Oe=oe?Zr:lt.getTransfer(ne);N===i.FLOAT&&(te=i.RGBA32F),N===i.HALF_FLOAT&&(te=i.RGBA16F),N===i.UNSIGNED_BYTE&&(te=Oe===ft?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function w(y,_){let N;return y?_===null||_===An||_===mr?N=i.DEPTH24_STENCIL8:_===Mn?N=i.DEPTH32F_STENCIL8:_===pr&&(N=i.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===An||_===mr?N=i.DEPTH_COMPONENT24:_===Mn?N=i.DEPTH_COMPONENT32F:_===pr&&(N=i.DEPTH_COMPONENT16),N}function A(y,_){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Ot&&y.minFilter!==At?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function b(y){const _=y.target;_.removeEventListener("dispose",b),B(_),_.isVideoTexture&&u.delete(_)}function P(y){const _=y.target;_.removeEventListener("dispose",P),S(_)}function B(y){const _=n.get(y);if(_.__webglInit===void 0)return;const N=y.source,ne=f.get(N);if(ne){const oe=ne[_.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&g(y),Object.keys(ne).length===0&&f.delete(N)}n.remove(y)}function g(y){const _=n.get(y);i.deleteTexture(_.__webglTexture);const N=y.source,ne=f.get(N);delete ne[_.__cacheKey],o.memory.textures--}function S(y){const _=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(_.__webglFramebuffer[ne]))for(let oe=0;oe<_.__webglFramebuffer[ne].length;oe++)i.deleteFramebuffer(_.__webglFramebuffer[ne][oe]);else i.deleteFramebuffer(_.__webglFramebuffer[ne]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[ne])}else{if(Array.isArray(_.__webglFramebuffer))for(let ne=0;ne<_.__webglFramebuffer.length;ne++)i.deleteFramebuffer(_.__webglFramebuffer[ne]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let ne=0;ne<_.__webglColorRenderbuffer.length;ne++)_.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[ne]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=y.textures;for(let ne=0,oe=N.length;ne<oe;ne++){const te=n.get(N[ne]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(N[ne])}n.remove(y)}let I=0;function C(){I=0}function O(){const y=I;return y>=r.maxTextures&&Ze("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),I+=1,y}function Y(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function X(y,_){const N=n.get(y);if(y.isVideoTexture&&qe(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&N.__version!==y.version){const ne=y.image;if(ne===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{q(N,y,_);return}}else y.isExternalTexture&&(N.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+_)}function W(y,_){const N=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){q(N,y,_);return}else y.isExternalTexture&&(N.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+_)}function V(y,_){const N=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){q(N,y,_);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+_)}function ie(y,_){const N=n.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&N.__version!==y.version){J(N,y,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+_)}const k={[fr]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[Qs]:i.MIRRORED_REPEAT},H={[Ot]:i.NEAREST,[Dc]:i.NEAREST_MIPMAP_NEAREST,[Sr]:i.NEAREST_MIPMAP_LINEAR,[At]:i.LINEAR,[ls]:i.LINEAR_MIPMAP_NEAREST,[pi]:i.LINEAR_MIPMAP_LINEAR},ae={[Fc]:i.NEVER,[Gc]:i.ALWAYS,[Oc]:i.LESS,[Ko]:i.LEQUAL,[Bc]:i.EQUAL,[jo]:i.GEQUAL,[zc]:i.GREATER,[kc]:i.NOTEQUAL};function G(y,_){if(_.type===Mn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===At||_.magFilter===ls||_.magFilter===Sr||_.magFilter===pi||_.minFilter===At||_.minFilter===ls||_.minFilter===Sr||_.minFilter===pi)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,k[_.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,k[_.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,k[_.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,H[_.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,H[_.minFilter]),_.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,ae[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ot||_.minFilter!==Sr&&_.minFilter!==pi||_.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ee(y,_){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",b));const ne=_.source;let oe=f.get(ne);oe===void 0&&(oe={},f.set(ne,oe));const te=Y(_);if(te!==y.__cacheKey){oe[te]===void 0&&(oe[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),oe[te].usedTimes++;const Oe=oe[y.__cacheKey];Oe!==void 0&&(oe[y.__cacheKey].usedTimes--,Oe.usedTimes===0&&g(_)),y.__cacheKey=te,y.__webglTexture=oe[te].texture}return N}function pe(y,_,N){return Math.floor(Math.floor(y/N)/_)}function ve(y,_,N,ne){const te=y.updateRanges;if(te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,N,ne,_.data);else{te.sort((ue,Ee)=>ue.start-Ee.start);let Oe=0;for(let ue=1;ue<te.length;ue++){const Ee=te[Oe],Ie=te[ue],Ue=Ee.start+Ee.count,Se=pe(Ie.start,_.width,4),je=pe(Ee.start,_.width,4);Ie.start<=Ue+1&&Se===je&&pe(Ie.start+Ie.count-1,_.width,4)===Se?Ee.count=Math.max(Ee.count,Ie.start+Ie.count-Ee.start):(++Oe,te[Oe]=Ie)}te.length=Oe+1;const be=i.getParameter(i.UNPACK_ROW_LENGTH),Fe=i.getParameter(i.UNPACK_SKIP_PIXELS),He=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ue=0,Ee=te.length;ue<Ee;ue++){const Ie=te[ue],Ue=Math.floor(Ie.start/4),Se=Math.ceil(Ie.count/4),je=Ue%_.width,U=Math.floor(Ue/_.width),we=Se,ge=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,je),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,je,U,we,ge,N,ne,_.data)}y.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,be),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),i.pixelStorei(i.UNPACK_SKIP_ROWS,He)}}function q(y,_,N){let ne=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ne=i.TEXTURE_3D);const oe=ee(y,_),te=_.source;t.bindTexture(ne,y.__webglTexture,i.TEXTURE0+N);const Oe=n.get(te);if(te.version!==Oe.__version||oe===!0){t.activeTexture(i.TEXTURE0+N);const be=lt.getPrimaries(lt.workingColorSpace),Fe=_.colorSpace===Jn?null:lt.getPrimaries(_.colorSpace),He=_.colorSpace===Jn||be===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ue=v(_.image,!1,r.maxTextureSize);ue=ot(_,ue);const Ee=s.convert(_.format,_.colorSpace),Ie=s.convert(_.type);let Ue=T(_.internalFormat,Ee,Ie,_.colorSpace,_.isVideoTexture);G(ne,_);let Se;const je=_.mipmaps,U=_.isVideoTexture!==!0,we=Oe.__version===void 0||oe===!0,ge=te.dataReady,Pe=A(_,ue);if(_.isDepthTexture)Ue=w(_.format===mi,_.type),we&&(U?t.texStorage2D(i.TEXTURE_2D,1,Ue,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Ue,ue.width,ue.height,0,Ee,Ie,null));else if(_.isDataTexture)if(je.length>0){U&&we&&t.texStorage2D(i.TEXTURE_2D,Pe,Ue,je[0].width,je[0].height);for(let de=0,le=je.length;de<le;de++)Se=je[de],U?ge&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Se.width,Se.height,Ee,Ie,Se.data):t.texImage2D(i.TEXTURE_2D,de,Ue,Se.width,Se.height,0,Ee,Ie,Se.data);_.generateMipmaps=!1}else U?(we&&t.texStorage2D(i.TEXTURE_2D,Pe,Ue,ue.width,ue.height),ge&&ve(_,ue,Ee,Ie)):t.texImage2D(i.TEXTURE_2D,0,Ue,ue.width,ue.height,0,Ee,Ie,ue.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Ue,je[0].width,je[0].height,ue.depth);for(let de=0,le=je.length;de<le;de++)if(Se=je[de],_.format!==pn)if(Ee!==null)if(U){if(ge)if(_.layerUpdates.size>0){const Me=Oa(Se.width,Se.height,_.format,_.type);for(const $e of _.layerUpdates){const pt=Se.data.subarray($e*Me/Se.data.BYTES_PER_ELEMENT,($e+1)*Me/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,$e,Se.width,Se.height,1,Ee,pt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Se.width,Se.height,ue.depth,Ee,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,Ue,Se.width,Se.height,ue.depth,0,Se.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Se.width,Se.height,ue.depth,Ee,Ie,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,Ue,Se.width,Se.height,ue.depth,0,Ee,Ie,Se.data)}else{U&&we&&t.texStorage2D(i.TEXTURE_2D,Pe,Ue,je[0].width,je[0].height);for(let de=0,le=je.length;de<le;de++)Se=je[de],_.format!==pn?Ee!==null?U?ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,Se.width,Se.height,Ee,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,de,Ue,Se.width,Se.height,0,Se.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ge&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Se.width,Se.height,Ee,Ie,Se.data):t.texImage2D(i.TEXTURE_2D,de,Ue,Se.width,Se.height,0,Ee,Ie,Se.data)}else if(_.isDataArrayTexture)if(U){if(we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Ue,ue.width,ue.height,ue.depth),ge)if(_.layerUpdates.size>0){const de=Oa(ue.width,ue.height,_.format,_.type);for(const le of _.layerUpdates){const Me=ue.data.subarray(le*de/ue.data.BYTES_PER_ELEMENT,(le+1)*de/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,ue.width,ue.height,1,Ee,Ie,Me)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ee,Ie,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,ue.width,ue.height,ue.depth,0,Ee,Ie,ue.data);else if(_.isData3DTexture)U?(we&&t.texStorage3D(i.TEXTURE_3D,Pe,Ue,ue.width,ue.height,ue.depth),ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ee,Ie,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,ue.width,ue.height,ue.depth,0,Ee,Ie,ue.data);else if(_.isFramebufferTexture){if(we)if(U)t.texStorage2D(i.TEXTURE_2D,Pe,Ue,ue.width,ue.height);else{let de=ue.width,le=ue.height;for(let Me=0;Me<Pe;Me++)t.texImage2D(i.TEXTURE_2D,Me,Ue,de,le,0,Ee,Ie,null),de>>=1,le>>=1}}else if(je.length>0){if(U&&we){const de=Ce(je[0]);t.texStorage2D(i.TEXTURE_2D,Pe,Ue,de.width,de.height)}for(let de=0,le=je.length;de<le;de++)Se=je[de],U?ge&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Ee,Ie,Se):t.texImage2D(i.TEXTURE_2D,de,Ue,Ee,Ie,Se);_.generateMipmaps=!1}else if(U){if(we){const de=Ce(ue);t.texStorage2D(i.TEXTURE_2D,Pe,Ue,de.width,de.height)}ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Ie,ue)}else t.texImage2D(i.TEXTURE_2D,0,Ue,Ee,Ie,ue);m(_)&&d(ne),Oe.__version=te.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function J(y,_,N){if(_.image.length!==6)return;const ne=ee(y,_),oe=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+N);const te=n.get(oe);if(oe.version!==te.__version||ne===!0){t.activeTexture(i.TEXTURE0+N);const Oe=lt.getPrimaries(lt.workingColorSpace),be=_.colorSpace===Jn?null:lt.getPrimaries(_.colorSpace),Fe=_.colorSpace===Jn||Oe===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const He=_.isCompressedTexture||_.image[0].isCompressedTexture,ue=_.image[0]&&_.image[0].isDataTexture,Ee=[];for(let le=0;le<6;le++)!He&&!ue?Ee[le]=v(_.image[le],!0,r.maxCubemapSize):Ee[le]=ue?_.image[le].image:_.image[le],Ee[le]=ot(_,Ee[le]);const Ie=Ee[0],Ue=s.convert(_.format,_.colorSpace),Se=s.convert(_.type),je=T(_.internalFormat,Ue,Se,_.colorSpace),U=_.isVideoTexture!==!0,we=te.__version===void 0||ne===!0,ge=oe.dataReady;let Pe=A(_,Ie);G(i.TEXTURE_CUBE_MAP,_);let de;if(He){U&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,je,Ie.width,Ie.height);for(let le=0;le<6;le++){de=Ee[le].mipmaps;for(let Me=0;Me<de.length;Me++){const $e=de[Me];_.format!==pn?Ue!==null?U?ge&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,0,0,$e.width,$e.height,Ue,$e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,je,$e.width,$e.height,0,$e.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,0,0,$e.width,$e.height,Ue,Se,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,je,$e.width,$e.height,0,Ue,Se,$e.data)}}}else{if(de=_.mipmaps,U&&we){de.length>0&&Pe++;const le=Ce(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,je,le.width,le.height)}for(let le=0;le<6;le++)if(ue){U?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ee[le].width,Ee[le].height,Ue,Se,Ee[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,je,Ee[le].width,Ee[le].height,0,Ue,Se,Ee[le].data);for(let Me=0;Me<de.length;Me++){const pt=de[Me].image[le].image;U?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,0,0,pt.width,pt.height,Ue,Se,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,je,pt.width,pt.height,0,Ue,Se,pt.data)}}else{U?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ue,Se,Ee[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,je,Ue,Se,Ee[le]);for(let Me=0;Me<de.length;Me++){const $e=de[Me];U?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,0,0,Ue,Se,$e.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,je,Ue,Se,$e.image[le])}}}m(_)&&d(i.TEXTURE_CUBE_MAP),te.__version=oe.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function re(y,_,N,ne,oe,te){const Oe=s.convert(N.format,N.colorSpace),be=s.convert(N.type),Fe=T(N.internalFormat,Oe,be,N.colorSpace),He=n.get(_),ue=n.get(N);if(ue.__renderTarget=_,!He.__hasExternalTextures){const Ee=Math.max(1,_.width>>te),Ie=Math.max(1,_.height>>te);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,te,Fe,Ee,Ie,_.depth,0,Oe,be,null):t.texImage2D(oe,te,Fe,Ee,Ie,0,Oe,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),et(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,oe,ue.__webglTexture,0,L(_)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,oe,ue.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(y,_,N){if(i.bindRenderbuffer(i.RENDERBUFFER,y),_.depthBuffer){const ne=_.depthTexture,oe=ne&&ne.isDepthTexture?ne.type:null,te=w(_.stencilBuffer,oe),Oe=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;et(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(_),te,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(_),te,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,te,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Oe,i.RENDERBUFFER,y)}else{const ne=_.textures;for(let oe=0;oe<ne.length;oe++){const te=ne[oe],Oe=s.convert(te.format,te.colorSpace),be=s.convert(te.type),Fe=T(te.internalFormat,Oe,be,te.colorSpace);et(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(_),Fe,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(_),Fe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Fe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(y,_,N){const ne=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=n.get(_.depthTexture);if(oe.__renderTarget=_,(!oe.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ne){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,_.depthTexture.addEventListener("dispose",b)),oe.__webglTexture===void 0){oe.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),G(i.TEXTURE_CUBE_MAP,_.depthTexture);const He=s.convert(_.depthTexture.format),ue=s.convert(_.depthTexture.type);let Ee;_.depthTexture.format===Wn?Ee=i.DEPTH_COMPONENT24:_.depthTexture.format===mi&&(Ee=i.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Ee,_.width,_.height,0,He,ue,null)}}else X(_.depthTexture,0);const te=oe.__webglTexture,Oe=L(_),be=ne?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,Fe=_.depthTexture.format===mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Wn)et(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Fe,be,te,0,Oe):i.framebufferTexture2D(i.FRAMEBUFFER,Fe,be,te,0);else if(_.depthTexture.format===mi)et(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Fe,be,te,0,Oe):i.framebufferTexture2D(i.FRAMEBUFFER,Fe,be,te,0);else throw new Error("Unknown depthTexture format")}function Le(y){const _=n.get(y),N=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const ne=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ne){const oe=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ne.removeEventListener("dispose",oe)};ne.addEventListener("dispose",oe),_.__depthDisposeCallback=oe}_.__boundDepthTexture=ne}if(y.depthTexture&&!_.__autoAllocateDepthBuffer)if(N)for(let ne=0;ne<6;ne++)me(_.__webglFramebuffer[ne],y,ne);else{const ne=y.texture.mipmaps;ne&&ne.length>0?me(_.__webglFramebuffer[0],y,0):me(_.__webglFramebuffer,y,0)}else if(N){_.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[ne]),_.__webglDepthbuffer[ne]===void 0)_.__webglDepthbuffer[ne]=i.createRenderbuffer(),fe(_.__webglDepthbuffer[ne],y,!1);else{const oe=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=_.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,te)}}else{const ne=y.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),fe(_.__webglDepthbuffer,y,!1);else{const oe=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(y,_,N){const ne=n.get(y);_!==void 0&&re(ne.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Le(y)}function Ge(y){const _=y.texture,N=n.get(y),ne=n.get(_);y.addEventListener("dispose",P);const oe=y.textures,te=y.isWebGLCubeRenderTarget===!0,Oe=oe.length>1;if(Oe||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=_.version,o.memory.textures++),te){N.__webglFramebuffer=[];for(let be=0;be<6;be++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[be]=[];for(let Fe=0;Fe<_.mipmaps.length;Fe++)N.__webglFramebuffer[be][Fe]=i.createFramebuffer()}else N.__webglFramebuffer[be]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let be=0;be<_.mipmaps.length;be++)N.__webglFramebuffer[be]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Oe)for(let be=0,Fe=oe.length;be<Fe;be++){const He=n.get(oe[be]);He.__webglTexture===void 0&&(He.__webglTexture=i.createTexture(),o.memory.textures++)}if(y.samples>0&&et(y)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let be=0;be<oe.length;be++){const Fe=oe[be];N.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[be]);const He=s.convert(Fe.format,Fe.colorSpace),ue=s.convert(Fe.type),Ee=T(Fe.internalFormat,He,ue,Fe.colorSpace,y.isXRRenderTarget===!0),Ie=L(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Ee,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,N.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),fe(N.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),G(i.TEXTURE_CUBE_MAP,_);for(let be=0;be<6;be++)if(_.mipmaps&&_.mipmaps.length>0)for(let Fe=0;Fe<_.mipmaps.length;Fe++)re(N.__webglFramebuffer[be][Fe],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe);else re(N.__webglFramebuffer[be],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);m(_)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let be=0,Fe=oe.length;be<Fe;be++){const He=oe[be],ue=n.get(He);let Ee=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(Ee=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,ue.__webglTexture),G(Ee,He),re(N.__webglFramebuffer,y,He,i.COLOR_ATTACHMENT0+be,Ee,0),m(He)&&d(Ee)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(be=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,ne.__webglTexture),G(be,_),_.mipmaps&&_.mipmaps.length>0)for(let Fe=0;Fe<_.mipmaps.length;Fe++)re(N.__webglFramebuffer[Fe],y,_,i.COLOR_ATTACHMENT0,be,Fe);else re(N.__webglFramebuffer,y,_,i.COLOR_ATTACHMENT0,be,0);m(_)&&d(be),t.unbindTexture()}y.depthBuffer&&Le(y)}function it(y){const _=y.textures;for(let N=0,ne=_.length;N<ne;N++){const oe=_[N];if(m(oe)){const te=E(y),Oe=n.get(oe).__webglTexture;t.bindTexture(te,Oe),d(te),t.unbindTexture()}}}const se=[],xe=[];function Te(y){if(y.samples>0){if(et(y)===!1){const _=y.textures,N=y.width,ne=y.height;let oe=i.COLOR_BUFFER_BIT;const te=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Oe=n.get(y),be=_.length>1;if(be)for(let He=0;He<_.length;He++)t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const Fe=y.texture.mipmaps;Fe&&Fe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let He=0;He<_.length;He++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[He]);const ue=n.get(_[He]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,N,ne,0,0,N,ne,oe,i.NEAREST),l===!0&&(se.length=0,xe.length=0,se.push(i.COLOR_ATTACHMENT0+He),y.depthBuffer&&y.resolveDepthBuffer===!1&&(se.push(te),xe.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let He=0;He<_.length;He++){t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[He]);const ue=n.get(_[He]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function L(y){return Math.min(r.maxSamples,y.samples)}function et(y){const _=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function qe(y){const _=o.render.frame;u.get(y)!==_&&(u.set(y,_),y.update())}function ot(y,_){const N=y.colorSpace,ne=y.format,oe=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||N!==Wi&&N!==Jn&&(lt.getTransfer(N)===ft?(ne!==pn||oe!==en)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",N)),_}function Ce(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=C,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=V,this.setTextureCube=ie,this.rebindTextures=nt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=re,this.useMultisampledRTT=et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function vm(i,e){function t(n,r=Jn){let s;const o=lt.getTransfer(r);if(n===en)return i.UNSIGNED_BYTE;if(n===Wo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ul)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ll)return i.BYTE;if(n===Dl)return i.SHORT;if(n===pr)return i.UNSIGNED_SHORT;if(n===Vo)return i.INT;if(n===An)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Vn)return i.HALF_FLOAT;if(n===Fl)return i.ALPHA;if(n===Ol)return i.RGB;if(n===pn)return i.RGBA;if(n===Wn)return i.DEPTH_COMPONENT;if(n===mi)return i.DEPTH_STENCIL;if(n===Bl)return i.RED;if(n===$o)return i.RED_INTEGER;if(n===Vi)return i.RG;if(n===Yo)return i.RG_INTEGER;if(n===qo)return i.RGBA_INTEGER;if(n===Wr||n===Xr||n===$r||n===Yr)if(o===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Wr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Wr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$r)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eo||n===to||n===no||n===io)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===eo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===to)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===no)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===io)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ro||n===so||n===oo||n===ao||n===lo||n===co||n===ho)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ro||n===so)return o===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===oo)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ao)return s.COMPRESSED_R11_EAC;if(n===lo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===co)return s.COMPRESSED_RG11_EAC;if(n===ho)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===vo||n===Mo||n===So||n===bo||n===Eo||n===yo||n===To)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===uo)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fo)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===po)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mo)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===go)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_o)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xo)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vo)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mo)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===So)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bo)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Eo)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yo)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===To)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wo||n===Ao||n===Ro)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===wo)return o===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ao)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ro)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Co||n===Po||n===Io||n===Lo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Co)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Po)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Io)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Mm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Kl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Rn({vertexShader:Mm,fragmentShader:Sm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ft(new qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Em extends _i{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,x=null;const v=typeof XRWebGLBinding<"u",m=new bm,d={},E=t.getContextAttributes();let T=null,w=null;const A=[],b=[],P=new ct;let B=null;const g=new rn;g.viewport=new Tt;const S=new rn;S.viewport=new Tt;const I=[g,S],C=new Ch;let O=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=A[q];return J===void 0&&(J=new Is,A[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=A[q];return J===void 0&&(J=new Is,A[q]=J),J.getGripSpace()},this.getHand=function(q){let J=A[q];return J===void 0&&(J=new Is,A[q]=J),J.getHandSpace()};function X(q){const J=b.indexOf(q.inputSource);if(J===-1)return;const re=A[J];re!==void 0&&(re.update(q.inputSource,q.frame,c||o),re.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",V);for(let q=0;q<A.length;q++){const J=b[q];J!==null&&(b[q]=null,A[q].disconnect(J))}O=null,Y=null,m.reset();for(const q in d)delete d[q];e.setRenderTarget(T),p=null,f=null,h=null,r=null,w=null,ve.stop(),n.isPresenting=!1,e.setPixelRatio(B),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",W),r.addEventListener("inputsourceschange",V),E.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,fe=null,me=null;E.depth&&(me=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=E.stencil?mi:Wn,fe=E.stencil?mr:An);const Le={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Le),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Tn(f.textureWidth,f.textureHeight,{format:pn,type:en,depthTexture:new _r(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const re={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Tn(p.framebufferWidth,p.framebufferHeight,{format:pn,type:en,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ve.setContext(r),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(q){for(let J=0;J<q.removed.length;J++){const re=q.removed[J],fe=b.indexOf(re);fe>=0&&(b[fe]=null,A[fe].disconnect(re))}for(let J=0;J<q.added.length;J++){const re=q.added[J];let fe=b.indexOf(re);if(fe===-1){for(let Le=0;Le<A.length;Le++)if(Le>=b.length){b.push(re),fe=Le;break}else if(b[Le]===null){b[Le]=re,fe=Le;break}if(fe===-1)break}const me=A[fe];me&&me.connect(re)}}const ie=new F,k=new F;function H(q,J,re){ie.setFromMatrixPosition(J.matrixWorld),k.setFromMatrixPosition(re.matrixWorld);const fe=ie.distanceTo(k),me=J.projectionMatrix.elements,Le=re.projectionMatrix.elements,nt=me[14]/(me[10]-1),Ge=me[14]/(me[10]+1),it=(me[9]+1)/me[5],se=(me[9]-1)/me[5],xe=(me[8]-1)/me[0],Te=(Le[8]+1)/Le[0],L=nt*xe,et=nt*Te,qe=fe/(-xe+Te),ot=qe*-xe;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ot),q.translateZ(qe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),me[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Ce=nt+qe,y=Ge+qe,_=L-ot,N=et+(fe-ot),ne=it*Ge/y*Ce,oe=se*Ge/y*Ce;q.projectionMatrix.makePerspective(_,N,ne,oe,Ce,y),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ae(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let J=q.near,re=q.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(re=m.depthFar)),C.near=S.near=g.near=J,C.far=S.far=g.far=re,(O!==C.near||Y!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),O=C.near,Y=C.far),C.layers.mask=q.layers.mask|6,g.layers.mask=C.layers.mask&3,S.layers.mask=C.layers.mask&5;const fe=q.parent,me=C.cameras;ae(C,fe);for(let Le=0;Le<me.length;Le++)ae(me[Le],fe);me.length===2?H(C,g,S):C.projectionMatrix.copy(g.projectionMatrix),G(q,C,fe)};function G(q,J,re){re===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(re.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Do*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(C)},this.getCameraTexture=function(q){return d[q]};let ee=null;function pe(q,J){if(u=J.getViewerPose(c||o),x=J,u!==null){const re=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let fe=!1;re.length!==C.cameras.length&&(C.cameras.length=0,fe=!0);for(let Ge=0;Ge<re.length;Ge++){const it=re[Ge];let se=null;if(p!==null)se=p.getViewport(it);else{const Te=h.getViewSubImage(f,it);se=Te.viewport,Ge===0&&(e.setRenderTargetTextures(w,Te.colorTexture,Te.depthStencilTexture),e.setRenderTarget(w))}let xe=I[Ge];xe===void 0&&(xe=new rn,xe.layers.enable(Ge),xe.viewport=new Tt,I[Ge]=xe),xe.matrix.fromArray(it.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(it.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(se.x,se.y,se.width,se.height),Ge===0&&(C.matrix.copy(xe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),fe===!0&&C.cameras.push(xe)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const Ge=h.getDepthInformation(re[0]);Ge&&Ge.isValid&&Ge.texture&&m.init(Ge,r.renderState)}if(me&&me.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let Ge=0;Ge<re.length;Ge++){const it=re[Ge].camera;if(it){let se=d[it];se||(se=new Kl,d[it]=se);const xe=h.getCameraImage(it);se.sourceTexture=xe}}}}for(let re=0;re<A.length;re++){const fe=b[re],me=A[re];fe!==null&&me!==void 0&&me.update(fe,J,c||o)}ee&&ee(q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),x=null}const ve=new jl;ve.setAnimationLoop(pe),this.setAnimationLoop=function(q){ee=q},this.dispose=function(){}}}const li=new on,ym=new vt;function Tm(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Xl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,E,T,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,w)):d.isMeshMatcapMaterial?(s(m,d),x(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===qt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===qt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=e.get(d),T=E.envMap,w=E.envMapRotation;T&&(m.envMap.value=T,li.copy(w),li.x*=-1,li.y*=-1,li.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),m.envMapRotation.value.setFromMatrix4(ym.makeRotationFromEuler(li)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=T*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===qt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const E=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function wm(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){const w=T.program;n.uniformBlockBinding(E,w)}function c(E,T){let w=r[E.id];w===void 0&&(x(E),w=u(E),r[E.id]=w,E.addEventListener("dispose",m));const A=T.program;n.updateUBOMapping(E,A);const b=e.render.frame;s[E.id]!==b&&(f(E),s[E.id]=b)}function u(E){const T=h();E.__bindingPointIndex=T;const w=i.createBuffer(),A=E.__size,b=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,w),w}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const T=r[E.id],w=E.uniforms,A=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let b=0,P=w.length;b<P;b++){const B=Array.isArray(w[b])?w[b]:[w[b]];for(let g=0,S=B.length;g<S;g++){const I=B[g];if(p(I,b,g,A)===!0){const C=I.__offset,O=Array.isArray(I.value)?I.value:[I.value];let Y=0;for(let X=0;X<O.length;X++){const W=O[X],V=v(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,C+Y,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,Y),Y+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,T,w,A){const b=E.value,P=T+"_"+w;if(A[P]===void 0)return typeof b=="number"||typeof b=="boolean"?A[P]=b:A[P]=b.clone(),!0;{const B=A[P];if(typeof b=="number"||typeof b=="boolean"){if(B!==b)return A[P]=b,!0}else if(B.equals(b)===!1)return B.copy(b),!0}return!1}function x(E){const T=E.uniforms;let w=0;const A=16;for(let P=0,B=T.length;P<B;P++){const g=Array.isArray(T[P])?T[P]:[T[P]];for(let S=0,I=g.length;S<I;S++){const C=g[S],O=Array.isArray(C.value)?C.value:[C.value];for(let Y=0,X=O.length;Y<X;Y++){const W=O[Y],V=v(W),ie=w%A,k=ie%V.boundary,H=ie+k;w+=k,H!==0&&A-H<V.storage&&(w+=A-H),C.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=w,w+=V.storage}}}const b=w%A;return b>0&&(w+=A-b),E.__size=w,E.__cache={},this}function v(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ze("WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){const T=E.target;T.removeEventListener("dispose",m);const w=o.indexOf(T.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function d(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}const Am=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let gn=null;function Rm(){return gn===null&&(gn=new ph(Am,16,16,Vi,Vn),gn.name="DFG_LUT",gn.minFilter=At,gn.magFilter=At,gn.wrapS=zn,gn.wrapT=zn,gn.generateMipmaps=!1,gn.needsUpdate=!0),gn}class Cm{constructor(e={}){const{canvas:t=Hc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=en}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;const v=p,m=new Set([qo,Yo,$o]),d=new Set([en,An,pr,mr,Wo,Xo]),E=new Uint32Array(4),T=new Int32Array(4);let w=null,A=null;const b=[],P=[];let B=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const g=this;let S=!1;this._outputColorSpace=St;let I=0,C=0,O=null,Y=-1,X=null;const W=new Tt,V=new Tt;let ie=null;const k=new Ke(0);let H=0,ae=t.width,G=t.height,ee=1,pe=null,ve=null;const q=new Tt(0,0,ae,G),J=new Tt(0,0,ae,G);let re=!1;const fe=new ta;let me=!1,Le=!1;const nt=new vt,Ge=new F,it=new Tt,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function Te(){return O===null?ee:1}let L=n;function et(M,z){return t.getContext(M,z)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ho}`),t.addEventListener("webglcontextlost",$e,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",rt,!1),L===null){const z="webgl2";if(L=et(z,M),L===null)throw et(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw at("WebGLRenderer: "+M.message),M}let qe,ot,Ce,y,_,N,ne,oe,te,Oe,be,Fe,He,ue,Ee,Ie,Ue,Se,je,U,we,ge,Pe,de;function le(){qe=new Rf(L),qe.init(),ge=new vm(L,qe),ot=new vf(L,qe,e,ge),Ce=new _m(L,qe),ot.reversedDepthBuffer&&f&&Ce.buffers.depth.setReversed(!0),y=new If(L),_=new nm,N=new xm(L,qe,Ce,_,ot,ge,y),ne=new Sf(g),oe=new Af(g),te=new Uh(L),Pe=new _f(L,te),Oe=new Cf(L,te,y,Pe),be=new Df(L,Oe,te,y),je=new Lf(L,ot,N),Ie=new Mf(_),Fe=new tm(g,ne,oe,qe,ot,Pe,Ie),He=new Tm(g,_),ue=new rm,Ee=new hm(qe),Se=new gf(g,ne,oe,Ce,be,x,l),Ue=new mm(g,be,ot),de=new wm(L,y,ot,Ce),U=new xf(L,qe,y),we=new Pf(L,qe,y),y.programs=Fe.programs,g.capabilities=ot,g.extensions=qe,g.properties=_,g.renderLists=ue,g.shadowMap=Ue,g.state=Ce,g.info=y}le(),v!==en&&(B=new Nf(v,t.width,t.height,r,s));const Me=new Em(g,L);this.xr=Me,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=qe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=qe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(M){M!==void 0&&(ee=M,this.setSize(ae,G,!1))},this.getSize=function(M){return M.set(ae,G)},this.setSize=function(M,z,Q=!0){if(Me.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=M,G=z,t.width=Math.floor(M*ee),t.height=Math.floor(z*ee),Q===!0&&(t.style.width=M+"px",t.style.height=z+"px"),B!==null&&B.setSize(t.width,t.height),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set(ae*ee,G*ee).floor()},this.setDrawingBufferSize=function(M,z,Q){ae=M,G=z,ee=Q,t.width=Math.floor(M*Q),t.height=Math.floor(z*Q),this.setViewport(0,0,M,z)},this.setEffects=function(M){if(v===en){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let z=0;z<M.length;z++)if(M[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(W)},this.getViewport=function(M){return M.copy(q)},this.setViewport=function(M,z,Q,K){M.isVector4?q.set(M.x,M.y,M.z,M.w):q.set(M,z,Q,K),Ce.viewport(W.copy(q).multiplyScalar(ee).round())},this.getScissor=function(M){return M.copy(J)},this.setScissor=function(M,z,Q,K){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,z,Q,K),Ce.scissor(V.copy(J).multiplyScalar(ee).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(M){Ce.setScissorTest(re=M)},this.setOpaqueSort=function(M){pe=M},this.setTransparentSort=function(M){ve=M},this.getClearColor=function(M){return M.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(M=!0,z=!0,Q=!0){let K=0;if(M){let $=!1;if(O!==null){const ye=O.texture.format;$=m.has(ye)}if($){const ye=O.texture.type,De=d.has(ye),Re=Se.getClearColor(),Ne=Se.getClearAlpha(),ze=Re.r,Ye=Re.g,We=Re.b;De?(E[0]=ze,E[1]=Ye,E[2]=We,E[3]=Ne,L.clearBufferuiv(L.COLOR,0,E)):(T[0]=ze,T[1]=Ye,T[2]=We,T[3]=Ne,L.clearBufferiv(L.COLOR,0,T))}else K|=L.COLOR_BUFFER_BIT}z&&(K|=L.DEPTH_BUFFER_BIT),Q&&(K|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$e,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",rt,!1),Se.dispose(),ue.dispose(),Ee.dispose(),_.dispose(),ne.dispose(),oe.dispose(),be.dispose(),Pe.dispose(),de.dispose(),Fe.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",he),Me.removeEventListener("sessionend",ke),Ve.stop()};function $e(M){M.preventDefault(),ga("WebGLRenderer: Context Lost."),S=!0}function pt(){ga("WebGLRenderer: Context Restored."),S=!1;const M=y.autoReset,z=Ue.enabled,Q=Ue.autoUpdate,K=Ue.needsUpdate,$=Ue.type;le(),y.autoReset=M,Ue.enabled=z,Ue.autoUpdate=Q,Ue.needsUpdate=K,Ue.type=$}function rt(M){at("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function zt(M){const z=M.target;z.removeEventListener("dispose",zt),an(z)}function an(M){R(M),_.remove(M)}function R(M){const z=_.get(M).programs;z!==void 0&&(z.forEach(function(Q){Fe.releaseProgram(Q)}),M.isShaderMaterial&&Fe.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,Q,K,$,ye){z===null&&(z=se);const De=$.isMesh&&$.matrixWorld.determinant()<0,Re=rc(M,z,Q,K,$);Ce.setMaterial(K,De);let Ne=Q.index,ze=1;if(K.wireframe===!0){if(Ne=Oe.getWireframeAttribute(Q),Ne===void 0)return;ze=2}const Ye=Q.drawRange,We=Q.attributes.position;let tt=Ye.start*ze,mt=(Ye.start+Ye.count)*ze;ye!==null&&(tt=Math.max(tt,ye.start*ze),mt=Math.min(mt,(ye.start+ye.count)*ze)),Ne!==null?(tt=Math.max(tt,0),mt=Math.min(mt,Ne.count)):We!=null&&(tt=Math.max(tt,0),mt=Math.min(mt,We.count));const Et=mt-tt;if(Et<0||Et===1/0)return;Pe.setup($,K,Re,Q,Ne);let yt,_t=U;if(Ne!==null&&(yt=te.get(Ne),_t=we,_t.setIndex(yt)),$.isMesh)K.wireframe===!0?(Ce.setLineWidth(K.wireframeLinewidth*Te()),_t.setMode(L.LINES)):_t.setMode(L.TRIANGLES);else if($.isLine){let Xe=K.linewidth;Xe===void 0&&(Xe=1),Ce.setLineWidth(Xe*Te()),$.isLineSegments?_t.setMode(L.LINES):$.isLineLoop?_t.setMode(L.LINE_LOOP):_t.setMode(L.LINE_STRIP)}else $.isPoints?_t.setMode(L.POINTS):$.isSprite&&_t.setMode(L.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)gr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))_t.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Xe=$._multiDrawStarts,dt=$._multiDrawCounts,ut=$._multiDrawCount,Zt=Ne?te.get(Ne).bytesPerElement:1,vi=_.get(K).currentProgram.getUniforms();for(let Kt=0;Kt<ut;Kt++)vi.setValue(L,"_gl_DrawID",Kt),_t.render(Xe[Kt]/Zt,dt[Kt])}else if($.isInstancedMesh)_t.renderInstances(tt,Et,$.count);else if(Q.isInstancedBufferGeometry){const Xe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,dt=Math.min(Q.instanceCount,Xe);_t.renderInstances(tt,Et,dt)}else _t.render(tt,Et)};function Z(M,z,Q){M.transparent===!0&&M.side===Bn&&M.forceSinglePass===!1?(M.side=qt,M.needsUpdate=!0,Wt(M,z,Q),M.side=ti,M.needsUpdate=!0,Wt(M,z,Q),M.side=Bn):Wt(M,z,Q)}this.compile=function(M,z,Q=null){Q===null&&(Q=M),A=Ee.get(Q),A.init(z),P.push(A),Q.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(A.pushLight($),$.castShadow&&A.pushShadow($))}),M!==Q&&M.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(A.pushLight($),$.castShadow&&A.pushShadow($))}),A.setupLights();const K=new Set;return M.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const ye=$.material;if(ye)if(Array.isArray(ye))for(let De=0;De<ye.length;De++){const Re=ye[De];Z(Re,Q,$),K.add(Re)}else Z(ye,Q,$),K.add(ye)}),A=P.pop(),K},this.compileAsync=function(M,z,Q=null){const K=this.compile(M,z,Q);return new Promise($=>{function ye(){if(K.forEach(function(De){_.get(De).currentProgram.isReady()&&K.delete(De)}),K.size===0){$(M);return}setTimeout(ye,10)}qe.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let j=null;function _e(M){j&&j(M)}function he(){Ve.stop()}function ke(){Ve.start()}const Ve=new jl;Ve.setAnimationLoop(_e),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(M){j=M,Me.setAnimationLoop(M),M===null?Ve.stop():Ve.start()},Me.addEventListener("sessionstart",he),Me.addEventListener("sessionend",ke),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const Q=Me.enabled===!0&&Me.isPresenting===!0,K=B!==null&&(O===null||Q)&&B.begin(g,O);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(z),z=Me.getCamera()),M.isScene===!0&&M.onBeforeRender(g,M,z,O),A=Ee.get(M,P.length),A.init(z),P.push(A),nt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),fe.setFromProjectionMatrix(nt,Sn,z.reversedDepth),Le=this.localClippingEnabled,me=Ie.init(this.clippingPlanes,Le),w=ue.get(M,b.length),w.init(),b.push(w),Me.enabled===!0&&Me.isPresenting===!0){const De=g.xr.getDepthSensingMesh();De!==null&&Mt(De,z,-1/0,g.sortObjects)}Mt(M,z,0,g.sortObjects),w.finish(),g.sortObjects===!0&&w.sort(pe,ve),xe=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,xe&&Se.addToRenderList(w,M),this.info.render.frame++,me===!0&&Ie.beginShadows();const $=A.state.shadowsArray;if(Ue.render($,M,z),me===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K&&B.hasRenderPass())===!1){const De=w.opaque,Re=w.transmissive;if(A.setupLights(),z.isArrayCamera){const Ne=z.cameras;if(Re.length>0)for(let ze=0,Ye=Ne.length;ze<Ye;ze++){const We=Ne[ze];ln(De,Re,M,We)}xe&&Se.render(M);for(let ze=0,Ye=Ne.length;ze<Ye;ze++){const We=Ne[ze];Lt(w,M,We,We.viewport)}}else Re.length>0&&ln(De,Re,M,z),xe&&Se.render(M),Lt(w,M,z)}O!==null&&C===0&&(N.updateMultisampleRenderTarget(O),N.updateRenderTargetMipmap(O)),K&&B.end(g),M.isScene===!0&&M.onAfterRender(g,M,z),Pe.resetDefaultState(),Y=-1,X=null,P.pop(),P.length>0?(A=P[P.length-1],me===!0&&Ie.setGlobalState(g.clippingPlanes,A.state.camera)):A=null,b.pop(),b.length>0?w=b[b.length-1]:w=null};function Mt(M,z,Q,K){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)Q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||fe.intersectsSprite(M)){K&&it.setFromMatrixPosition(M.matrixWorld).applyMatrix4(nt);const De=be.update(M),Re=M.material;Re.visible&&w.push(M,De,Re,Q,it.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||fe.intersectsObject(M))){const De=be.update(M),Re=M.material;if(K&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),it.copy(M.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),it.copy(De.boundingSphere.center)),it.applyMatrix4(M.matrixWorld).applyMatrix4(nt)),Array.isArray(Re)){const Ne=De.groups;for(let ze=0,Ye=Ne.length;ze<Ye;ze++){const We=Ne[ze],tt=Re[We.materialIndex];tt&&tt.visible&&w.push(M,De,tt,Q,it.z,We)}}else Re.visible&&w.push(M,De,Re,Q,it.z,null)}}const ye=M.children;for(let De=0,Re=ye.length;De<Re;De++)Mt(ye[De],z,Q,K)}function Lt(M,z,Q,K){const{opaque:$,transmissive:ye,transparent:De}=M;A.setupLightsView(Q),me===!0&&Ie.setGlobalState(g.clippingPlanes,Q),K&&Ce.viewport(W.copy(K)),$.length>0&&Be($,z,Q),ye.length>0&&Be(ye,z,Q),De.length>0&&Be(De,z,Q),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function ln(M,z,Q,K){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[K.id]===void 0){const tt=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[K.id]=new Tn(1,1,{generateMipmaps:!0,type:tt?Vn:en,minFilter:pi,samples:ot.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const ye=A.state.transmissionRenderTarget[K.id],De=K.viewport||W;ye.setSize(De.z*g.transmissionResolutionScale,De.w*g.transmissionResolutionScale);const Re=g.getRenderTarget(),Ne=g.getActiveCubeFace(),ze=g.getActiveMipmapLevel();g.setRenderTarget(ye),g.getClearColor(k),H=g.getClearAlpha(),H<1&&g.setClearColor(16777215,.5),g.clear(),xe&&Se.render(Q);const Ye=g.toneMapping;g.toneMapping=yn;const We=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),A.setupLightsView(K),me===!0&&Ie.setGlobalState(g.clippingPlanes,K),Be(M,Q,K),N.updateMultisampleRenderTarget(ye),N.updateRenderTargetMipmap(ye),qe.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let mt=0,Et=z.length;mt<Et;mt++){const yt=z[mt],{object:_t,geometry:Xe,material:dt,group:ut}=yt;if(dt.side===Bn&&_t.layers.test(K.layers)){const Zt=dt.side;dt.side=qt,dt.needsUpdate=!0,ht(_t,Q,K,Xe,dt,ut),dt.side=Zt,dt.needsUpdate=!0,tt=!0}}tt===!0&&(N.updateMultisampleRenderTarget(ye),N.updateRenderTargetMipmap(ye))}g.setRenderTarget(Re,Ne,ze),g.setClearColor(k,H),We!==void 0&&(K.viewport=We),g.toneMapping=Ye}function Be(M,z,Q){const K=z.isScene===!0?z.overrideMaterial:null;for(let $=0,ye=M.length;$<ye;$++){const De=M[$],{object:Re,geometry:Ne,group:ze}=De;let Ye=De.material;Ye.allowOverride===!0&&K!==null&&(Ye=K),Re.layers.test(Q.layers)&&ht(Re,z,Q,Ne,Ye,ze)}}function ht(M,z,Q,K,$,ye){M.onBeforeRender(g,z,Q,K,$,ye),M.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),$.onBeforeRender(g,z,Q,K,M,ye),$.transparent===!0&&$.side===Bn&&$.forceSinglePass===!1?($.side=qt,$.needsUpdate=!0,g.renderBufferDirect(Q,z,K,$,M,ye),$.side=ti,$.needsUpdate=!0,g.renderBufferDirect(Q,z,K,$,M,ye),$.side=Bn):g.renderBufferDirect(Q,z,K,$,M,ye),M.onAfterRender(g,z,Q,K,$,ye)}function Wt(M,z,Q){z.isScene!==!0&&(z=se);const K=_.get(M),$=A.state.lights,ye=A.state.shadowsArray,De=$.state.version,Re=Fe.getParameters(M,$.state,ye,z,Q),Ne=Fe.getProgramCacheKey(Re);let ze=K.programs;K.environment=M.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(M.isMeshStandardMaterial?oe:ne).get(M.envMap||K.environment),K.envMapRotation=K.environment!==null&&M.envMap===null?z.environmentRotation:M.envMapRotation,ze===void 0&&(M.addEventListener("dispose",zt),ze=new Map,K.programs=ze);let Ye=ze.get(Ne);if(Ye!==void 0){if(K.currentProgram===Ye&&K.lightsStateVersion===De)return aa(M,Re),Ye}else Re.uniforms=Fe.getUniforms(M),M.onBeforeCompile(Re,g),Ye=Fe.acquireProgram(Re,Ne),ze.set(Ne,Ye),K.uniforms=Re.uniforms;const We=K.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(We.clippingPlanes=Ie.uniform),aa(M,Re),K.needsLights=oc(M),K.lightsStateVersion=De,K.needsLights&&(We.ambientLightColor.value=$.state.ambient,We.lightProbe.value=$.state.probe,We.directionalLights.value=$.state.directional,We.directionalLightShadows.value=$.state.directionalShadow,We.spotLights.value=$.state.spot,We.spotLightShadows.value=$.state.spotShadow,We.rectAreaLights.value=$.state.rectArea,We.ltc_1.value=$.state.rectAreaLTC1,We.ltc_2.value=$.state.rectAreaLTC2,We.pointLights.value=$.state.point,We.pointLightShadows.value=$.state.pointShadow,We.hemisphereLights.value=$.state.hemi,We.directionalShadowMap.value=$.state.directionalShadowMap,We.directionalShadowMatrix.value=$.state.directionalShadowMatrix,We.spotShadowMap.value=$.state.spotShadowMap,We.spotLightMatrix.value=$.state.spotLightMatrix,We.spotLightMap.value=$.state.spotLightMap,We.pointShadowMap.value=$.state.pointShadowMap,We.pointShadowMatrix.value=$.state.pointShadowMatrix),K.currentProgram=Ye,K.uniformsList=null,Ye}function oa(M){if(M.uniformsList===null){const z=M.currentProgram.getUniforms();M.uniformsList=qr.seqWithValue(z.seq,M.uniforms)}return M.uniformsList}function aa(M,z){const Q=_.get(M);Q.outputColorSpace=z.outputColorSpace,Q.batching=z.batching,Q.batchingColor=z.batchingColor,Q.instancing=z.instancing,Q.instancingColor=z.instancingColor,Q.instancingMorph=z.instancingMorph,Q.skinning=z.skinning,Q.morphTargets=z.morphTargets,Q.morphNormals=z.morphNormals,Q.morphColors=z.morphColors,Q.morphTargetsCount=z.morphTargetsCount,Q.numClippingPlanes=z.numClippingPlanes,Q.numIntersection=z.numClipIntersection,Q.vertexAlphas=z.vertexAlphas,Q.vertexTangents=z.vertexTangents,Q.toneMapping=z.toneMapping}function rc(M,z,Q,K,$){z.isScene!==!0&&(z=se),N.resetTextureUnits();const ye=z.fog,De=K.isMeshStandardMaterial?z.environment:null,Re=O===null?g.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Wi,Ne=(K.isMeshStandardMaterial?oe:ne).get(K.envMap||De),ze=K.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ye=!!Q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),We=!!Q.morphAttributes.position,tt=!!Q.morphAttributes.normal,mt=!!Q.morphAttributes.color;let Et=yn;K.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Et=g.toneMapping);const yt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,_t=yt!==void 0?yt.length:0,Xe=_.get(K),dt=A.state.lights;if(me===!0&&(Le===!0||M!==X)){const Ht=M===X&&K.id===Y;Ie.setState(K,M,Ht)}let ut=!1;K.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==dt.state.version||Xe.outputColorSpace!==Re||$.isBatchedMesh&&Xe.batching===!1||!$.isBatchedMesh&&Xe.batching===!0||$.isBatchedMesh&&Xe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Xe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Xe.instancing===!1||!$.isInstancedMesh&&Xe.instancing===!0||$.isSkinnedMesh&&Xe.skinning===!1||!$.isSkinnedMesh&&Xe.skinning===!0||$.isInstancedMesh&&Xe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Xe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Xe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Xe.instancingMorph===!1&&$.morphTexture!==null||Xe.envMap!==Ne||K.fog===!0&&Xe.fog!==ye||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ie.numPlanes||Xe.numIntersection!==Ie.numIntersection)||Xe.vertexAlphas!==ze||Xe.vertexTangents!==Ye||Xe.morphTargets!==We||Xe.morphNormals!==tt||Xe.morphColors!==mt||Xe.toneMapping!==Et||Xe.morphTargetsCount!==_t)&&(ut=!0):(ut=!0,Xe.__version=K.version);let Zt=Xe.currentProgram;ut===!0&&(Zt=Wt(K,z,$));let vi=!1,Kt=!1,ji=!1;const xt=Zt.getUniforms(),Xt=Xe.uniforms;if(Ce.useProgram(Zt.program)&&(vi=!0,Kt=!0,ji=!0),K.id!==Y&&(Y=K.id,Kt=!0),vi||X!==M){Ce.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),xt.setValue(L,"projectionMatrix",M.projectionMatrix),xt.setValue(L,"viewMatrix",M.matrixWorldInverse);const $t=xt.map.cameraPosition;$t!==void 0&&$t.setValue(L,Ge.setFromMatrixPosition(M.matrixWorld)),ot.logarithmicDepthBuffer&&xt.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&xt.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),X!==M&&(X=M,Kt=!0,ji=!0)}if(Xe.needsLights&&(dt.state.directionalShadowMap.length>0&&xt.setValue(L,"directionalShadowMap",dt.state.directionalShadowMap,N),dt.state.spotShadowMap.length>0&&xt.setValue(L,"spotShadowMap",dt.state.spotShadowMap,N),dt.state.pointShadowMap.length>0&&xt.setValue(L,"pointShadowMap",dt.state.pointShadowMap,N)),$.isSkinnedMesh){xt.setOptional(L,$,"bindMatrix"),xt.setOptional(L,$,"bindMatrixInverse");const Ht=$.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),xt.setValue(L,"boneTexture",Ht.boneTexture,N))}$.isBatchedMesh&&(xt.setOptional(L,$,"batchingTexture"),xt.setValue(L,"batchingTexture",$._matricesTexture,N),xt.setOptional(L,$,"batchingIdTexture"),xt.setValue(L,"batchingIdTexture",$._indirectTexture,N),xt.setOptional(L,$,"batchingColorTexture"),$._colorsTexture!==null&&xt.setValue(L,"batchingColorTexture",$._colorsTexture,N));const tn=Q.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&je.update($,Q,Zt),(Kt||Xe.receiveShadow!==$.receiveShadow)&&(Xe.receiveShadow=$.receiveShadow,xt.setValue(L,"receiveShadow",$.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Xt.envMap.value=Ne,Xt.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(Xt.envMapIntensity.value=z.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=Rm()),Kt&&(xt.setValue(L,"toneMappingExposure",g.toneMappingExposure),Xe.needsLights&&sc(Xt,ji),ye&&K.fog===!0&&He.refreshFogUniforms(Xt,ye),He.refreshMaterialUniforms(Xt,K,ee,G,A.state.transmissionRenderTarget[M.id]),qr.upload(L,oa(Xe),Xt,N)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(qr.upload(L,oa(Xe),Xt,N),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&xt.setValue(L,"center",$.center),xt.setValue(L,"modelViewMatrix",$.modelViewMatrix),xt.setValue(L,"normalMatrix",$.normalMatrix),xt.setValue(L,"modelMatrix",$.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ht=K.uniformsGroups;for(let $t=0,as=Ht.length;$t<as;$t++){const ni=Ht[$t];de.update(ni,Zt),de.bind(ni,Zt)}}return Zt}function sc(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function oc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(M,z,Q){const K=_.get(M);K.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),_.get(M.texture).__webglTexture=z,_.get(M.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Q,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,z){const Q=_.get(M);Q.__webglFramebuffer=z,Q.__useDefaultFramebuffer=z===void 0};const ac=L.createFramebuffer();this.setRenderTarget=function(M,z=0,Q=0){O=M,I=z,C=Q;let K=null,$=!1,ye=!1;if(M){const Re=_.get(M);if(Re.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(L.FRAMEBUFFER,Re.__webglFramebuffer),W.copy(M.viewport),V.copy(M.scissor),ie=M.scissorTest,Ce.viewport(W),Ce.scissor(V),Ce.setScissorTest(ie),Y=-1;return}else if(Re.__webglFramebuffer===void 0)N.setupRenderTarget(M);else if(Re.__hasExternalTextures)N.rebindTextures(M,_.get(M.texture).__webglTexture,_.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ye=M.depthTexture;if(Re.__boundDepthTexture!==Ye){if(Ye!==null&&_.has(Ye)&&(M.width!==Ye.image.width||M.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(M)}}const Ne=M.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ye=!0);const ze=_.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ze[z])?K=ze[z][Q]:K=ze[z],$=!0):M.samples>0&&N.useMultisampledRTT(M)===!1?K=_.get(M).__webglMultisampledFramebuffer:Array.isArray(ze)?K=ze[Q]:K=ze,W.copy(M.viewport),V.copy(M.scissor),ie=M.scissorTest}else W.copy(q).multiplyScalar(ee).floor(),V.copy(J).multiplyScalar(ee).floor(),ie=re;if(Q!==0&&(K=ac),Ce.bindFramebuffer(L.FRAMEBUFFER,K)&&Ce.drawBuffers(M,K),Ce.viewport(W),Ce.scissor(V),Ce.setScissorTest(ie),$){const Re=_.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,Re.__webglTexture,Q)}else if(ye){const Re=z;for(let Ne=0;Ne<M.textures.length;Ne++){const ze=_.get(M.textures[Ne]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ne,ze.__webglTexture,Q,Re)}}else if(M!==null&&Q!==0){const Re=_.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Re.__webglTexture,Q)}Y=-1},this.readRenderTargetPixels=function(M,z,Q,K,$,ye,De,Re=0){if(!(M&&M.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne){Ce.bindFramebuffer(L.FRAMEBUFFER,Ne);try{const ze=M.textures[Re],Ye=ze.format,We=ze.type;if(!ot.textureFormatReadable(Ye)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(We)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-K&&Q>=0&&Q<=M.height-$&&(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Re),L.readPixels(z,Q,K,$,ge.convert(Ye),ge.convert(We),ye))}finally{const ze=O!==null?_.get(O).__webglFramebuffer:null;Ce.bindFramebuffer(L.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(M,z,Q,K,$,ye,De,Re=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne)if(z>=0&&z<=M.width-K&&Q>=0&&Q<=M.height-$){Ce.bindFramebuffer(L.FRAMEBUFFER,Ne);const ze=M.textures[Re],Ye=ze.format,We=ze.type;if(!ot.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,tt),L.bufferData(L.PIXEL_PACK_BUFFER,ye.byteLength,L.STREAM_READ),M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Re),L.readPixels(z,Q,K,$,ge.convert(Ye),ge.convert(We),0);const mt=O!==null?_.get(O).__webglFramebuffer:null;Ce.bindFramebuffer(L.FRAMEBUFFER,mt);const Et=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Vc(L,Et,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,tt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ye),L.deleteBuffer(tt),L.deleteSync(Et),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,z=null,Q=0){const K=Math.pow(2,-Q),$=Math.floor(M.image.width*K),ye=Math.floor(M.image.height*K),De=z!==null?z.x:0,Re=z!==null?z.y:0;N.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,Q,0,0,De,Re,$,ye),Ce.unbindTexture()};const lc=L.createFramebuffer(),cc=L.createFramebuffer();this.copyTextureToTexture=function(M,z,Q=null,K=null,$=0,ye=null){ye===null&&($!==0?(gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=$,$=0):ye=0);let De,Re,Ne,ze,Ye,We,tt,mt,Et;const yt=M.isCompressedTexture?M.mipmaps[ye]:M.image;if(Q!==null)De=Q.max.x-Q.min.x,Re=Q.max.y-Q.min.y,Ne=Q.isBox3?Q.max.z-Q.min.z:1,ze=Q.min.x,Ye=Q.min.y,We=Q.isBox3?Q.min.z:0;else{const tn=Math.pow(2,-$);De=Math.floor(yt.width*tn),Re=Math.floor(yt.height*tn),M.isDataArrayTexture?Ne=yt.depth:M.isData3DTexture?Ne=Math.floor(yt.depth*tn):Ne=1,ze=0,Ye=0,We=0}K!==null?(tt=K.x,mt=K.y,Et=K.z):(tt=0,mt=0,Et=0);const _t=ge.convert(z.format),Xe=ge.convert(z.type);let dt;z.isData3DTexture?(N.setTexture3D(z,0),dt=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(N.setTexture2DArray(z,0),dt=L.TEXTURE_2D_ARRAY):(N.setTexture2D(z,0),dt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const ut=L.getParameter(L.UNPACK_ROW_LENGTH),Zt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),vi=L.getParameter(L.UNPACK_SKIP_PIXELS),Kt=L.getParameter(L.UNPACK_SKIP_ROWS),ji=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,yt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ze),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ye),L.pixelStorei(L.UNPACK_SKIP_IMAGES,We);const xt=M.isDataArrayTexture||M.isData3DTexture,Xt=z.isDataArrayTexture||z.isData3DTexture;if(M.isDepthTexture){const tn=_.get(M),Ht=_.get(z),$t=_.get(tn.__renderTarget),as=_.get(Ht.__renderTarget);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,$t.__webglFramebuffer),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,as.__webglFramebuffer);for(let ni=0;ni<Ne;ni++)xt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_.get(M).__webglTexture,$,We+ni),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_.get(z).__webglTexture,ye,Et+ni)),L.blitFramebuffer(ze,Ye,De,Re,tt,mt,De,Re,L.DEPTH_BUFFER_BIT,L.NEAREST);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if($!==0||M.isRenderTargetTexture||_.has(M)){const tn=_.get(M),Ht=_.get(z);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,lc),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,cc);for(let $t=0;$t<Ne;$t++)xt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,tn.__webglTexture,$,We+$t):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,tn.__webglTexture,$),Xt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ht.__webglTexture,ye,Et+$t):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ht.__webglTexture,ye),$!==0?L.blitFramebuffer(ze,Ye,De,Re,tt,mt,De,Re,L.COLOR_BUFFER_BIT,L.NEAREST):Xt?L.copyTexSubImage3D(dt,ye,tt,mt,Et+$t,ze,Ye,De,Re):L.copyTexSubImage2D(dt,ye,tt,mt,ze,Ye,De,Re);Ce.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Xt?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(dt,ye,tt,mt,Et,De,Re,Ne,_t,Xe,yt.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(dt,ye,tt,mt,Et,De,Re,Ne,_t,yt.data):L.texSubImage3D(dt,ye,tt,mt,Et,De,Re,Ne,_t,Xe,yt):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ye,tt,mt,De,Re,_t,Xe,yt.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ye,tt,mt,yt.width,yt.height,_t,yt.data):L.texSubImage2D(L.TEXTURE_2D,ye,tt,mt,De,Re,_t,Xe,yt);L.pixelStorei(L.UNPACK_ROW_LENGTH,ut),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Zt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,vi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Kt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ji),ye===0&&z.generateMipmaps&&L.generateMipmap(dt),Ce.unbindTexture()},this.initRenderTarget=function(M){_.get(M).__webglFramebuffer===void 0&&N.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?N.setTextureCube(M,0):M.isData3DTexture?N.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?N.setTexture2DArray(M,0):N.setTexture2D(M,0),Ce.unbindTexture()},this.resetState=function(){I=0,C=0,O=null,Ce.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const Ki="#005eb8";function xn(i,e,t){const n=e.split(/\s+/),r=[];let s="";for(const o of n){const a=s?`${s} ${o}`:o;i.measureText(a).width>t&&s?(r.push(s),s=o):s=a}return s&&r.push(s),r}function lr(i,e,t){if(i.measureText(e).width<=t)return e;let n=e;for(;n.length>1&&i.measureText(`${n}…`).width>t;)n=n.slice(0,-1);return`${n}…`}function gt(i){const e=document.createElement("canvas");e.width=i.widthPx,e.height=i.heightPx;const t=e.getContext("2d"),n=Math.round(i.widthPx*.05),r=i.align??"left",s=r==="center"?i.widthPx/2:n;t.fillStyle=i.background??Ki,t.fillRect(0,0,e.width,e.height),t.fillStyle=i.color??"#ffffff",t.textAlign=r,t.textBaseline="top";let o=n,a=i.titleSize??Math.round(i.heightPx*.28),l=i.subtitleSize??Math.round(a*.55);if(!i.body){const u=l/a;for(let h=0;h<24&&a>18;h++){t.font=`bold ${a}px Arial`;let f=xn(t,i.title,i.widthPx-n*2).length*a*1.15;if(i.subtitle&&(t.font=`${l}px Arial`,f+=xn(t,i.subtitle,i.widthPx-n*2).length*l*1.2),f<=i.heightPx-n*1.6)break;a=Math.round(a*.93),l=Math.max(14,Math.round(a*u))}}t.font=`bold ${a}px Arial`;for(const u of xn(t,i.title,i.widthPx-n*2))t.fillText(u,s,o),o+=a*1.15;if(i.subtitle){t.font=`${l}px Arial`,t.globalAlpha=.85;for(const u of xn(t,i.subtitle,i.widthPx-n*2))t.fillText(u,s,o),o+=l*1.2;t.globalAlpha=1}if(i.body){o+=n*.5;let u=i.bodySize??Math.round(a*.45);if(i.fitBody){const h=i.footer?Math.round(a*.32)*2.6+n:n,f=i.heightPx-o-h;for(;u>16&&(t.font=`${u}px Arial`,!(xn(t,i.body,i.widthPx-n*2).length*u*1.3<=f));)u-=2}t.font=`${u}px Arial`;for(const h of xn(t,i.body,i.widthPx-n*2))t.fillText(h,s,o),o+=u*1.3}if(i.footer){const u=Math.round((i.titleSize??i.heightPx*.28)*.32);t.font=`${u}px Arial`,t.globalAlpha=.72;let h=i.heightPx-n;const f=xn(t,i.footer,i.widthPx-n*2).reverse();for(const p of f)h-=u*1.25,t.fillText(p,s,h);t.globalAlpha=1}const c=new Pn(e);return c.anisotropy=4,c.colorSpace=St,c}const al="#009639";function Pm(i,e,t){const n=document.createElement("canvas");n.width=620,n.height=810;const r=n.getContext("2d");r.fillStyle="#fbfbf8",r.fillRect(0,0,620,810),r.fillStyle=e,r.fillRect(0,0,620,92),r.fillStyle="#ffffff",r.font="bold 46px Arial",r.textBaseline="middle",r.fillText(i,30,48),r.textBaseline="top",r.fillStyle="#20262b";let s=34;for(;s>16&&(r.font=`${s}px Arial`,!(xn(r,t,560).length*s*1.35<=655));)s-=2;r.font=`${s}px Arial`;let o=130;for(const l of xn(r,t,560))if(r.fillText(l,30,o),o+=s*1.35,o>770)break;const a=new Pn(n);return a.anisotropy=4,a.colorSpace=St,a}function Im(i){const e=document.createElement("canvas");e.width=620,e.height=290;const t=e.getContext("2d");t.fillStyle="#e9e3d0",t.fillRect(0,0,620,290),t.strokeStyle="#8b8672",t.lineWidth=6,t.strokeRect(8,8,604,274),t.fillStyle="#6c6753",t.font="26px Arial",t.fillText("formerly signposted as",28,34),t.fillStyle="#3a382f";let n=88;for(const s of i.slice(0,3)){t.font="bold 44px Arial",t.fillText(s,28,n);const o=t.measureText(s).width;t.strokeStyle="#7d2a2a",t.lineWidth=5,t.beginPath(),t.moveTo(24,n+2),t.lineTo(32+o,n-6),t.stroke(),n+=64}const r=new Pn(e);return r.colorSpace=St,r}function nc(i){const e=document.createElement("canvas"),t=640,n=460;e.width=t,e.height=n;const r=e.getContext("2d");let s=i%2147483646+1;const o=()=>(s=s*16807%2147483647)/2147483647,a=[["#e8e3d4","#41668c","#c4a35a","#7a4b3a","#5d7a76"],["#ece7dc","#6c8c5f","#c96f4a","#3d4a52","#c4b57a"],["#e6e2d8","#8a5a74","#5a7d8a","#c9a35a","#4a5747"]],l=a[i%a.length];r.fillStyle=l[0],r.fillRect(0,0,t,n);const c=5+Math.floor(o()*5);for(let h=0;h<c;h++)if(r.fillStyle=l[1+Math.floor(o()*(l.length-1))],r.globalAlpha=.75+o()*.25,o()<.45)r.beginPath(),r.arc(o()*t,o()*n,40+o()*100,0,Math.PI*(.7+o()*1.3)),r.lineWidth=14+o()*30,r.strokeStyle=r.fillStyle,r.stroke();else{const f=40+o()*150;r.fillRect(o()*(t-f),o()*(n-100),f,50+o()*160)}r.globalAlpha=1;const u=new Pn(e);return u.colorSpace=St,u}function Qr(i,e){const t=document.createElement("canvas");t.width=512,t.height=150;const n=t.getContext("2d");n.fillStyle="#f5f4ef",n.fillRect(0,0,512,150),n.fillStyle="#20262b",n.font="bold 34px Arial",n.fillText(lr(n,i,470),22,26),n.font="24px Arial",n.globalAlpha=.75;let r=78;for(const o of xn(n,e,470).slice(0,2))n.fillText(o,22,r),r+=32;n.globalAlpha=1;const s=new Pn(t);return s.colorSpace=St,s}function ic(i){const e=Math.round(i.widthPx*.035),t=Math.round(i.heightPx*.075);let n=e+t*1.25;i.subtitle&&(n+=t*.8),n+=e*.4;const r=n;n+=e*.6;const s=i.columns??1,o=(i.widthPx-e*2-e*(s-1))/s,a=i.rowSize??Math.round(t*.62),l=a*1.55,c=Math.max(1,Math.floor((i.heightPx-n-e)/l));return{pad:e,titleSize:t,top:n,ruleY:r,columns:s,colWidth:o,rowSize:a,rowH:l,rowsPerCol:c}}function Oo(i,e){const t=ic(i),n=[];for(let r=0;r<e;r++){const s=Math.floor(r/t.rowsPerCol);if(s>=t.columns){n.push(null);continue}const o=t.pad+s*(t.colWidth+t.pad),a=t.top+r%t.rowsPerCol*t.rowH;n.push([o/i.widthPx,1-(a+t.rowH)/i.heightPx,(o+t.colWidth)/i.widthPx,1-a/i.heightPx])}return n}function ur(i){const e=document.createElement("canvas");e.width=i.widthPx,e.height=i.heightPx;const t=e.getContext("2d"),n=ic(i),r=n.pad;t.fillStyle=i.background??Ki,t.fillRect(0,0,e.width,e.height),t.textBaseline="top",t.textAlign="left";const s=n.titleSize;t.fillStyle="#ffffff",t.font=`bold ${s}px Arial`,t.fillText(lr(t,i.title,i.widthPx-r*2),r,r),i.subtitle&&(t.font=`${Math.round(s*.55)}px Arial`,t.globalAlpha=.85,t.fillText(lr(t,i.subtitle,i.widthPx-r*2),r,r+s*1.25),t.globalAlpha=1),t.strokeStyle="rgba(255,255,255,0.5)",t.lineWidth=Math.max(2,i.heightPx*.004),t.beginPath(),t.moveTo(r,n.ruleY),t.lineTo(i.widthPx-r,n.ruleY),t.stroke();const o=n.top,a=n.columns,l=n.colWidth,c=n.rowSize,u=n.rowH,h=n.rowsPerCol;i.rows.forEach((p,x)=>{const v=Math.floor(x/h);if(v>=a)return;const m=r+v*(l+r),d=o+x%h*u;let E=m;p.chip&&(t.fillStyle=p.chip,t.fillRect(m,d+c*.1,c*.8,c*.8),E+=c*1.2),t.fillStyle="#ffffff",t.font=`${p.strong?"bold ":""}${c}px Arial`;const T=lr(t,p.text,l-(E-m));if(t.fillText(T,E,d),p.sub){const w=t.measureText(T).width;t.font=`${Math.round(c*.78)}px Arial`,t.globalAlpha=.75,t.fillText(lr(t,`  ${p.sub}`,l-(E-m)-w),E+w,d+c*.15),t.globalAlpha=1}});const f=new Pn(e);return f.anisotropy=4,f.colorSpace=St,f}function Bo(i,e=1.36){const t=document.createElement("canvas");t.width=1088,t.height=Math.round(1088/e);const n=t.getContext("2d");n.fillStyle="#3b4046",n.fillRect(0,0,t.width,t.height);const r=new Pn(t);r.colorSpace=St,r.anisotropy=4,r.generateMipmaps=!1,r.minFilter=At;const s=new Image;return s.onload=()=>{const o=Math.max(t.width/s.naturalWidth,t.height/s.naturalHeight),a=s.naturalWidth*o,l=s.naturalHeight*o;n.drawImage(s,(t.width-a)/2,(t.height-l)/2,a,l),r.needsUpdate=!0},s.src=i,r}class Lm{entries=[];placeholder=new mn({color:new Ke(Ki)});register(e,t,n){e.material=this.placeholder,this.entries.push({pos:t.clone(),mesh:e,make:n,ready:!1})}update(e,t=55,n=120,r=8){const s=[];for(const o of this.entries){const a=o.pos.distanceTo(e);if(o.mesh.visible=a<n,!o.ready&&a<t)s.push({e:o,d:a});else if(o.ready&&a>n){const l=o.mesh.material;l.map?.dispose(),l.dispose(),o.mesh.material=this.placeholder,o.ready=!1}}s.sort((o,a)=>o.d-a.d);for(const{e:o}of s.slice(0,r))o.mesh.material=new mn({map:o.make()}),o.ready=!0}get count(){return this.entries.length}get readyCount(){return this.entries.filter(e=>e.ready).length}}function Dm(i,e,t,n,r,s="sign"){const o=new Ft(new qi(e,t),new mn);return o.name=s,i.register(o,n,r),o}const Um={event:"#41b6e6","mental-object":"#78be20",state:"#ed8b00",stative:"#ed8b00",process:"#ae2573","time-interval":"#8a1538",role:"#00a499","physical-object":"#ffb81c",resources:"#7c2855",reference:"#005eb8"},ei=i=>Um[i]??"#425563";function $i(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new Cn;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const h=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let x=0;x<p.count;++x)h.push(p.getX(x)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(const u in s){const h=ll(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const p=[];for(let v=0;v<o[u].length;++v)p.push(o[u][v][f]);const x=ll(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(x)}}return l}function ll(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),a=new sn(o,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let f=0,p=u.count;f<p;f++)for(let x=0;x<t;x++){const v=u.getComponent(f,x);a.setComponent(f+h,x,v)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function Nm(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d");e.fillStyle="#89928b",e.fillRect(0,0,256,256);let t=42;const n=()=>(t=t*16807%2147483647)/2147483647,r=["#9aa39b","#78817a","#a7ada3","#6e766f","#93856f"];for(let o=0;o<1400;o++){e.fillStyle=r[Math.floor(n()*r.length)],e.globalAlpha=.35+n()*.4;const a=1+n()*2.6;e.fillRect(n()*256,n()*256,a,a)}e.globalAlpha=1;const s=new Pn(i);return s.wrapS=s.wrapT=fr,s.colorSpace=St,s.anisotropy=4,s}function Fm(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d");e.fillStyle="#f5f6f3",e.fillRect(0,0,256,256);let t=7;const n=()=>(t=t*16807%2147483647)/2147483647;e.fillStyle="#e8eae4";for(let s=0;s<600;s++)e.globalAlpha=.35+n()*.3,e.fillRect(n()*256,n()*256,1.6,1.6);e.globalAlpha=1,e.strokeStyle="#cfd3cb",e.lineWidth=3;for(const s of[0,128,256])e.beginPath(),e.moveTo(s,0),e.lineTo(s,256),e.moveTo(0,s),e.lineTo(256,s),e.stroke();const r=new Pn(i);return r.wrapS=r.wrapT=fr,r.repeat.set(1/1.2,1/1.2),r.colorSpace=St,r.anisotropy=4,r}const ce={floor:new Sh({map:Nm(),shininess:60,specular:new Ke(3026478)}),wall:new Ct({color:14541782}),endWall:new Ct({color:12175549}),ceiling:new Ct({map:Fm()}),door:new Ct({color:9083520}),liftDoor:new Ct({color:12042182}),stair:new Ct({color:12174013}),stairDark:new Ct({color:3817799}),rail:new Ct({color:8358806}),oak:new Ct({color:9071173}),glass:new Ct({color:3095104}),steel:new Ct({color:12831182}),led:new mn({color:16251391}),chair:new Ct({color:5140074}),daylight:new mn({color:14214894})};function Om(i,e,t,n){const r=i.attributes.uv,s=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let o=0;o<6;o++){const[a,l]=s[o];for(let c=0;c<4;c++){const u=o*4+c;r.setXY(u,r.getX(u)*a,r.getY(u)*l)}}r.needsUpdate=!0}function sr(i,e){if(!i.length)return null;const t=i.map(s=>{const o=new Xn(s.w,s.h,s.d);return s.rx&&o.rotateX(s.rx),o.translate(s.x,s.y,s.z),o}),n=$i(t);t.forEach(s=>s.dispose());const r=new Ft(n,e);return r.matrixAutoUpdate=!1,r}const cr={skirtH:.152,railH:.152,railCentre:.95},zo=new Ct({vertexColors:!0}),cl=["#c98d64","#8d5a3c","#e3b498","#6b4a30","#d9a37e"],hl=["#2e2620","#5b4632","#8c8c8c","#d9d3c5","#141414"];function ra(i){const e=i();if(e<.25)return{top:"#f2f3ef",legs:"#f2f3ef",cap:"#ffffff"};if(e<.31)return{top:"#20375c",legs:"#20375c",cap:"#ffffff"};if(e<.43)return{top:"#eeefe9",legs:"#565b62"};if(e<.55)return{top:"#68727d",legs:"#4c5257"};const t=["#7a8f6a","#c0a052","#7c5866","#5f7484","#96694f"],n=["#55504a","#3f464d","#6a5d4f","#44403a"];return{top:t[Math.floor(i()*t.length)],legs:n[Math.floor(i()*n.length)]}}function vr(i){let e=i%2147483646+1;for(let t=0;t<3;t++)e=e*16807%2147483647;return()=>(e=e*16807%2147483647)/2147483647}function Ut(i,e,t,n,r,s,o){const a=new Xn(i,e,t);a.translate(n,r,s);const l=new Ke(o),c=a.attributes.position.count,u=new Float32Array(c*3);for(let h=0;h<c;h++)u[h*3]=l.r,u[h*3+1]=l.g,u[h*3+2]=l.b;return a.setAttribute("color",new sn(u,3)),a}function sa(i,e,t,n){const r=cl[Math.floor(i()*cl.length)],s=e.cap??hl[Math.floor(i()*hl.length)],o=[Ut(.2,.22,.2,0,t,n,r),Ut(.21,.08,.21,0,t+.15,n-.01,s)];return e.cap&&o.push(Ut(.24,.03,.24,0,t+.2,n-.01,e.cap)),o}function Bm(i){const e=vr(i),t=ra(e),n=[Ut(.09,.44,.11,-.09,.22,.17,t.legs),Ut(.09,.44,.11,.09,.22,.17,t.legs),Ut(.1,.13,.4,-.09,.5,.03,t.legs),Ut(.1,.13,.4,.09,.5,.03,t.legs),Ut(.32,.52,.2,0,.82,-.08,t.top),Ut(.08,.4,.1,-.21,.86,-.05,t.top),Ut(.08,.4,.1,.21,.86,-.05,t.top),...sa(e,t,1.2,-.06)],r=$i(n);return n.forEach(s=>s.dispose()),r}function zm(i){const e=vr(i),t=ra(e),n=[Ut(.1,.78,.12,-.09,.39,0,t.legs),Ut(.1,.78,.12,.09,.39,0,t.legs),Ut(.32,.52,.2,0,1.04,0,t.top),Ut(.08,.52,.1,-.21,1,0,t.top),Ut(.08,.52,.1,.21,1,0,t.top),...sa(e,t,1.42,0)],r=$i(n);return n.forEach(s=>s.dispose()),r}class km{constructor(e,t,n){this.a=e,this.b=t;const r=vr(n),s=ra(r);this.len=e.distanceTo(t),this.speed=1+r()*.5,this.s=r()*this.len,this.dir=r()<.5?1:-1;const o=(h,f,p)=>{const x=new Ft(h,zo);return x.position.set(f,p,0),this.group.add(x),x},a=()=>Ut(.1,.78,.12,0,-.39,0,s.legs),l=()=>Ut(.08,.52,.1,0,-.26,0,s.top);this.legL=o(a(),-.09,.78),this.legR=o(a(),.09,.78),this.armL=o(l(),-.21,1.28),this.armR=o(l(),.21,1.28);const c=[Ut(.32,.52,.2,0,1.04,0,s.top),...sa(r,s,1.42,0)],u=$i(c);c.forEach(h=>h.dispose()),this.group.add(new Ft(u,zo)),this.place()}a;b;group=new bn;legL;legR;armL;armR;s;dir=1;pause=0;phase=0;len;speed;place(){const e=this.s/this.len;this.group.position.lerpVectors(this.a,this.b,e);const t=(this.b.x-this.a.x)*this.dir,n=(this.b.z-this.a.z)*this.dir;this.group.rotation.y=Math.atan2(t,n)}update(e){if(this.pause>0){this.pause-=e;for(const n of[this.legL,this.legR,this.armL,this.armR])n.rotation.x*=Math.max(0,1-e*6);return}this.s+=this.speed*e*this.dir,(this.s<=0||this.s>=this.len)&&(this.s=Math.max(0,Math.min(this.len,this.s)),this.dir*=-1,this.pause=1.2+this.phase%1.3),this.phase+=this.speed*e*3.4;const t=Math.sin(this.phase)*.5;this.legL.rotation.x=t,this.legR.rotation.x=-t,this.armL.rotation.x=-t*.6,this.armR.rotation.x=t*.6,this.place(),this.group.position.y+=Math.abs(Math.sin(this.phase))*.025}}class Gm{constructor(e,t,n){this.zc=n;const r=new Xn(.05,2.06,.5),s=ce.liftDoor;this.leafA=new Ft(r,s),this.leafB=new Ft(r.clone(),s),this.leafA.position.set(t,1.03,n-.25),this.leafB.position.set(t,1.03,n+.25),e.add(this.leafA,this.leafB)}zc;leafA;leafB;openT=0;target=0;update(e){this.openT+=(this.target-this.openT)*Math.min(1,e*5);const t=this.openT*.48;this.leafA.position.z=this.zc-.25-t,this.leafB.position.z=this.zc+.25+t}get openness(){return this.openT}}const ul=i=>i.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""),D={CORRIDOR_W:3,ROOM_H:3,STOREY:4,DOOR_W:1.2,DOOR_H:2.1,DOOR_SPACING:2,ENTRY:2.2,END_ZONE:2.6,NOTICE_SPACING:1.25,LOBBY_W:7,LOBBY_D:7,LANDING_Z0:7,LANDING_Z1:10,STREET_Z0:7,STREET_Z1:11,STREET_H:4,STRIP:8.2,STAIR_SLOT:3.6,WING_GAP:12,PIT_X0:-3.5,PIT_X1:-.7,PIT_Z0:1.2,PIT_Z1:5.5},Hm=(i,e,t=0,n=0)=>{const r=Math.max(t,n)*D.NOTICE_SPACING;return D.ENTRY+Math.max(i,e,1)*D.DOOR_SPACING+(r?r+.4:0)+D.END_ZONE};function Vm(i){const e=new Map(i.classes.map(k=>[k.id,k])),t={};for(const k of i.classes)t[k.id]=[];for(const k of i.classes)k.supers.length&&t[k.supers[0]]?.push(k.id);for(const k of i.classes){const H=new Set(t[k.id]);t[k.id]=k.subs.filter(ae=>H.has(ae))}const n=new Map;function r(k){if(n.has(k))return n.get(k);const H=t[k],ae=H.filter(q=>t[q].length),G=[];let ee=ae.reduce((q,J)=>q+o(J),0),pe=0;for(const q of H)t[q].length||(pe<ee?(G.push(q),pe+=o(q)):(ae.push(q),ee+=o(q)));const ve={south:ae,north:G,southSum:ee,northSum:pe};return n.set(k,ve),ve}const s=new Map;function o(k){if(s.has(k))return s.get(k);const H=t[k];let ae=D.STRIP;if(H.length){const{southSum:G,northSum:ee}=r(k);ae=Math.max(D.STRIP,D.STAIR_SLOT+Math.max(G,ee))}return s.set(k,ae),ae}const a={},l={};function c(k,H,ae,G=!1){const ee=e.get(k),pe=t[k],ve=pe.length?H+.2-D.PIT_X0:H+D.STRIP/2;if(a[k]={x:ve,level:ae,y:-4*ae,flip:G,corridorLen:Hm(ee.out.length,ee.in.length,ee.notes.length,ee.examples.length)},pe.length){const{south:q,north:J,southSum:re,northSum:fe}=r(k);let me=H+D.STAIR_SLOT;for(const Ge of q)c(Ge,me,ae+1,!1),me+=o(Ge);let Le=H+D.STAIR_SLOT;for(const Ge of J)c(Ge,Le,ae+1,!0),Le+=o(Ge);const nt=new Set(pe);l[k]={parentId:k,level:ae+1,y:-4*(ae+1),x0:H+.2,x1:H+D.STAIR_SLOT+Math.max(re,fe,5),stairX:ve+(D.PIT_X0+D.PIT_X1)/2,homeChildIds:pe,southIds:q,northIds:J,portalChildIds:ee.subs.filter(Ge=>!nt.has(Ge))}}}const u=k=>k.rootIds.reduce((H,ae)=>H+o(ae),0),h=i.wings.filter(k=>k.zone!=="gallery"),f=h.reduce((k,H)=>k+u(H),0);let p=0;const x=new Map;for(const k of h){const H=p<f/2;x.set(k.key,H?"south":"north"),H&&(p+=u(k))}const v=[],m={south:6,north:6};for(const k of h){const H=x.get(k.key),ae=m[H];for(const G of k.rootIds)c(G,m[H],0),m[H]+=o(G);v.push({key:k.key,x0:ae,x1:m[H],rootIds:k.rootIds,street:H}),m[H]+=D.WING_GAP}const d=Math.max(m.south,m.north)-D.WING_GAP+6,E=30.5,T=-30,w=i.wings.filter(k=>k.zone==="gallery"),A=w.reduce((k,H)=>k+u(H)+D.WING_GAP,0);let b=T-A;const P=b;for(const k of w){const H=b;for(const ae of k.rootIds)c(ae,b,0),b+=o(ae);v.push({key:k.key,x0:H,x1:b,rootIds:k.rootIds,street:"gallery"}),b+=D.WING_GAP}const B=new Set(w.map(k=>k.key));for(const k of v){if(k.street!=="north")continue;const H=k.x0+k.x1;for(const G of i.classes){if(G.wing!==k.key)continue;const ee=a[G.id];ee.x=H-ee.x,ee.flip=!ee.flip,ee.mirror=!0}const ae=new Set(i.classes.filter(G=>G.wing===k.key).map(G=>G.id));for(const G of Object.values(l))ae.has(G.parentId)&&([G.x0,G.x1]=[H-G.x1,H-G.x0],G.stairX=H-G.stairX,G.mirror=!0)}const g=[],S=[];for(const k of i.classes){const H=a[k.id];!H.mirror&&H.flip&&g.push(H),H.mirror&&!H.flip&&S.push(H)}let I=28;const C=2,O=D.CORRIDOR_W/2+.3,Y=D.LOBBY_W/2+.15,X=(k,H,ae,G)=>Math.abs(k.x-H.x)<ae+G;for(const k of g)for(const H of S)k.level===H.level&&(X(k,H,O,O)&&(I=Math.max(I,12+k.corridorLen+H.corridorLen+C)),X(k,H,O,Y)&&(I=Math.max(I,12+k.corridorLen+C)),X(k,H,Y,O)&&(I=Math.max(I,12+H.corridorLen+C)));I=Math.ceil(I);const W=D.STREET_Z1+I+D.STREET_Z0+4;for(const k of i.classes){const H=a[k.id];H.mirror=!!H.mirror,H.oz=H.mirror?H.flip?W:W-17:H.flip?17:0,B.has(k.wing)&&(H.oz+=E)}const V=new Map(i.classes.map(k=>[k.id,k.wing]));for(const k of Object.values(l))k.dz=B.has(V.get(k.parentId))?E:0;const ie=[];for(const k of i.classes)for(const H of k.supers.slice(1))ie.push({childId:k.id,parentId:H});return{areas:a,landings:l,homeChildren:t,nonPrimaryUp:ie,wings:v,street:{x0:0,x1:d},loop:{C:I,K:W,xEnd:d,south:{z0:D.STREET_Z0,z1:D.STREET_Z1},north:{z0:D.STREET_Z1+I,z1:D.STREET_Z1+I+4},connectors:{west:[.2,3.8],east:[d-3.8,d-.2]},gallery:{x0:P-2,x1:-25.6,z0:D.STREET_Z0+E,z1:D.STREET_Z1+E,dz:E,entrance:[-28.4,-25.9]}}}}const dn="__atrium",dl=new mn({color:16767}),Wm=(i,e)=>i===null&&e===null?"":`${i??0}..${e===-1?"*":e??"*"}`,fl=(i,e)=>{if(i===null&&e===null)return"";const t=e===null||String(e)==="-1"?"*":String(e);return`${i??0}..${t}`},es=(i,e,t,n)=>`${[fl(n.oppMin,n.oppMax),i].filter(Boolean).join(" ")} — ${e} → ${[fl(n.min,n.max),t].filter(Boolean).join(" ")}`;class Mr{constructor(e,t,n,r=!1){this.group=e,this.origin=t,this.signs=n,this.f=r?-1:1,e.rotation.y=r?Math.PI:0}group;origin;signs;colliders=[];walkables=[];trims=[];plates=[];glass=[];leds=[];seats=[];f;local(e,t,n){return new F(this.origin.x+this.f*e,this.origin.y+t,this.origin.z+this.f*n)}batches=new Map;box(e,t,n,r,s,o,a,l={solid:!0}){const c={w:e,h:t,d:n,x:s,y:o,z:a,worldUV:l.vinyl||l.worldUV},u=this.batches.get(r);u?u.push(c):this.batches.set(r,[c]);const h=this.origin.x+this.f*s,f=this.origin.z+this.f*a,p=new bt(new F(h-e/2,this.origin.y+o-t/2,f-n/2),new F(h+e/2,this.origin.y+o+t/2,f+n/2));if(l.solid&&this.colliders.push(p),l.walkable&&this.walkables.push(p),l.trim)for(const x of l.trim)this.trimFace(x,e,t,n,s,o,a)}trimFace(e,t,n,r,s,o,a){const l=o-n/2,c=.05,u=e.startsWith("x")?{w:c,d:Math.max(.3,r-.1)}:{w:Math.max(.3,t-.1),d:c},h=c/2+.005,f=e==="x+"?s+t/2+h:e==="x-"?s-t/2-h:s,p=e==="z+"?a+r/2+h:e==="z-"?a-r/2-h:a;this.trims.push({...u,h:cr.skirtH,x:f,y:l+cr.skirtH/2,z:p},{...u,h:cr.railH,x:f,y:l+cr.railCentre,z:p})}led(e,t,n,r=.6,s=.6){this.leds.push({w:r,h:.035,d:s,x:e,y:n,z:t})}oakSpec(e){this.trims.push(e)}steelSpec(e){this.plates.push(e)}chairSpots=[];peopleGeos=[];sit(e,t,n,r,s){const o=Bm(s);r===-1&&o.rotateY(Math.PI),o.translate(e,t,n),this.peopleGeos.push(o)}stand(e,t,n,r,s){const o=zm(s);o.rotateY(r),o.translate(e,t,n),this.peopleGeos.push(o)}chair(e,t,n,r=1){this.chairSpots.push({x:e,y:t,z:n,face:r});const s=t+.45;this.seats.push({w:.44,h:.06,d:.4,x:e,y:s,z:n}),this.seats.push({w:.44,h:.48,d:.05,x:e,y:s+.36,z:n-r*.19});for(const[o,a]of[[-.18,-.16],[.18,-.16],[-.18,.16],[.18,.16]])this.plates.push({w:.035,h:.44,d:.035,x:e+o,y:t+.22,z:n+a});this.colliders.push(new bt().setFromPoints([this.local(e-.26,t,n-.26),this.local(e+.26,t+.95,n+.26)]))}doorFurniture(e,t,n,r){const o=e.startsWith("x"),a=o?{w:.02,d:.28}:{w:.28,d:.02},l=o?{w:.02,d:D.DOOR_W-.25}:{w:D.DOOR_W-.25,d:.02},c=o?{w:.02,d:.1}:{w:.1,d:.02},u=.06,h=e==="x+"?t+u:e==="x-"?t-u:t,f=e==="z+"?r+u:e==="z-"?r-u:r,p=.42;this.glass.push({...a,h:.42,x:h,y:n+1.5,z:f}),this.plates.push({...l,h:.25,x:h,y:n+.13,z:f}),this.plates.push({...c,h:.3,x:o?h:t+p,y:n+1.05,z:o?r+p:f})}populate(e,t){if(e!=="off"){const n=e==="full"?.4:.2,r=vr(t);for(const s of this.chairSpots)r()<n&&this.sit(s.x,s.y+.03,s.z,s.face,Math.floor(r()*99991))}if(this.peopleGeos.length){const n=$i(this.peopleGeos);this.peopleGeos.forEach(s=>s.dispose());const r=new Ft(n,zo);r.matrixAutoUpdate=!1,this.group.add(r),this.peopleGeos=[]}}finalize(){for(const[e,t]of this.batches){const n=t.map(o=>{const a=new Xn(o.w,o.h,o.d);return o.worldUV&&Om(a,o.w,o.h,o.d),a.translate(o.x,o.y,o.z),a}),r=$i(n);n.forEach(o=>o.dispose());const s=new Ft(r,e);s.matrixAutoUpdate=!1,this.group.add(s)}this.batches.clear();for(const e of[sr(this.trims,ce.oak),sr(this.plates,ce.steel),sr(this.glass,ce.glass),sr(this.leds,ce.led),sr(this.seats,ce.chair)])e&&this.group.add(e)}sign(e,t,n,r,s,o,a,l){const c=Dm(this.signs,e,t,this.local(n,r,s),a,l);return c.position.set(n,r,s),c.rotation.y=o,c.matrixAutoUpdate=!1,c.updateMatrix(),this.group.add(c),c}}function Xm(i,e,t){const{byId:n,layout:r}=e,s=new bn;s.name=`area:${i.label}`,s.position.copy(t);const o=r.areas[i.id].flip,a=o?Math.PI:0,l=new Mr(s,t,e.signs,o),c=[],u=ei(i.wing),h=r.areas[i.id].corridorLen,f=D.CORRIDOR_W,p=D.ROOM_H,x=D.LOBBY_W,v=D.LOBBY_D,m=r.landings[i.id],d=i.supers.length===0,E=-h/2;l.box(f,.1,h,ce.floor,0,-.05,E,{walkable:!0,vinyl:!0}),l.box(f,.1,h,ce.ceiling,0,p+.05,E,{worldUV:!0}),l.box(.15,p,h,ce.wall,f/2+.075,p/2,E,{solid:!0,trim:["x-"]}),l.box(.15,p,h,ce.wall,-f/2-.075,p/2,E,{solid:!0,trim:["x+"]}),l.box(f+.3,p,.15,ce.endWall,0,p/2,-h-.075,{solid:!0,trim:["z+"]});for(let se=0;se<Math.floor(h/3);se++)l.led(0,-(se+.6)*3,p-.02,.35,1.3);m?(l.box(x/2-D.PIT_X1,.1,v,ce.floor,(D.PIT_X1+x/2)/2,-.05,v/2,{walkable:!0,vinyl:!0}),l.box(D.PIT_X1-D.PIT_X0,.1,D.PIT_Z0,ce.floor,(D.PIT_X0+D.PIT_X1)/2,-.05,D.PIT_Z0/2,{walkable:!0,vinyl:!0}),l.box(D.PIT_X1-D.PIT_X0,.1,v-D.PIT_Z1,ce.floor,(D.PIT_X0+D.PIT_X1)/2,-.05,(D.PIT_Z1+v)/2,{walkable:!0,vinyl:!0})):l.box(x,.1,v,ce.floor,0,-.05,v/2,{walkable:!0,vinyl:!0}),l.box(x,.1,v,ce.ceiling,0,p+.05,v/2,{worldUV:!0}),l.box(.15,p,v,ce.wall,x/2+.075,p/2,v/2,{solid:!0,trim:["x-"]}),l.box(.15,p,v,ce.wall,-x/2-.075,p/2,v/2,{solid:!0,trim:["x+"]});const T=(x-f)/2;l.box(T,p,.15,ce.wall,f/2+T/2,p/2,-.075,{solid:!0,trim:["z+","z-"]}),l.box(T,p,.15,ce.wall,-2.5,p/2,-.075,{solid:!0,trim:["z+","z-"]}),l.box(2,p,.15,ce.wall,-2.5,p/2,v+.075,{solid:!0,trim:["z-","z+"]}),l.box(2,p,.15,ce.wall,2.5,p/2,v+.075,{solid:!0,trim:["z-","z+"]}),l.box(3,p-D.DOOR_H-.3,.15,ce.wall,0,(p+D.DOOR_H+.3)/2,v+.075,{});for(const se of[-1.8,1.8])for(const xe of[2,5])l.led(se,xe,p-.02);const w=d?D.STREET_H:D.ROOM_H,A=d?2.7:2.4,b=d?0:.4;l.box(.006,.44,1.6,dl,b,A,v+1.35,{});for(const se of[1,-1])l.sign(1.6,.44,b+se*.0035,A,v+1.35,se*Math.PI/2,()=>gt({widthPx:800,heightPx:220,title:i.label,subtitle:i.roomNumber?`Room ${i.roomNumber}`:`${i.wing} wing`,titleSize:62}),`hang:${i.label}:${se}`);for(const se of[b-.6,b+.6])l.steelSpec({w:.03,h:w-A-.22,d:.03,x:se,y:(w+A+.22)/2,z:v+1.35});const P=new mn({color:new Ke(u)});l.box(.18,.012,v+h,P,0,.012,(v-h)/2,{}),l.sign(2.6,.7,0,p-.5,.08,0,()=>gt({widthPx:1024,heightPx:276,title:i.label,subtitle:[i.roomNumber?`Room ${i.roomNumber}`:null,`${i.wing} wing · ${i.floor?`level −${i.floor}`:"ground"}`].filter(Boolean).join(" · "),titleSize:96}),`name:${i.label}`);const B=i.supers.map(se=>n.get(se)?.label??"?");l.sign(2.9,.62,0,D.DOOR_H+.55,v-.09,Math.PI,()=>gt({widthPx:1152,heightPx:246,title:d?"⌂ Hospital Street":`Stairs ↑ ${B[0]}`,subtitle:d?"reception · all wings":`landing · stairs at the west end${B.length>1?` · also: ${B.slice(1).join(", ")}`:""}`,titleSize:74}),`back:${i.label}`),l.sign(1.9,1.5,2.5,1.62,.01,0,()=>gt({widthPx:1024,heightPx:810,title:i.label,subtitle:[i.plural?`plural: ${i.plural}`:null,i.alsoKnownAs.length?`also: ${i.alsoKnownAs.join("; ")}`:null,i.roomNumber?`Room ${i.roomNumber}`:null].filter(Boolean).join(" · "),body:i.description??"Definition pending.",footer:i.source?`Source: ${i.source}`:void 0,fitBody:!0,titleSize:88,align:"left"}),`poster:${i.label}`),e.illustrations?.has(ul(i.label))&&(l.oakSpec({w:1.3,h:1.38,d:.05,x:-2.5,y:1.62,z:-.02}),l.sign(1.2,1.28,-2.5,1.62,.01,0,()=>Bo(`art/illustrations/${ul(i.label)}.jpg`,1.2/1.28),`illu:${i.label}`));const g=i.self.length;i.deprecated.length&&l.sign(.9,.42,-1.44,1.9,-1.4,Math.PI/2,()=>Im(i.deprecated),`old:${i.label}`);const S=Math.max(i.out.length,i.in.length,1)*D.DOOR_SPACING,I=-(D.ENTRY+S+.2),C=(se,xe)=>{const Te=se.match(/(\d+)/);return Te?`${xe} ${Te[1]}`:xe};let O=0;const Y=(se,xe,Te,L,et)=>{const qe=se==="right"?1:-1,ot=I-(xe+.5)*D.NOTICE_SPACING;l.oakSpec({w:.05,h:1.34,d:1.06,x:qe*(f/2-.035),y:1.55,z:ot}),l.sign(.94,1.22,qe*(f/2-.075),1.55,ot,qe>0?-Math.PI/2:Math.PI/2,()=>Pm(Te,L,et),`notice:${i.label}:${Te}`),O++};i.notes.forEach((se,xe)=>Y("left",xe,C(se.key,"Note"),Ki,se.text)),i.examples.forEach((se,xe)=>Y("right",xe,C(se.key,"Example"),al,se.text));const X=i.notes.length-i.examples.length,W=Math.min(Math.abs(X),2);for(let se=0;se<W;se++){const xe=X>0?1:-1,Te=(X>0?i.examples.length:i.notes.length)+se,L=I-(Te+.5)*D.NOTICE_SPACING,et=(i.id.charCodeAt(0)+i.id.charCodeAt(3)*31+se*7>>>0)%997,qe=e.art.length?e.art[et%e.art.length]:null;l.oakSpec({w:.05,h:1.02,d:1.36,x:xe*(f/2-.035),y:1.68,z:L}),l.sign(1.28,.94,xe*(f/2-.075),1.68,L,xe>0?-Math.PI/2:Math.PI/2,()=>qe?Bo(`art/${qe.file}`):nc(et),`print:${i.label}:${se}`),l.sign(.44,.13,xe*(f/2-.075),1.05,L,xe>0?-Math.PI/2:Math.PI/2,()=>qe?Qr(qe.title,`${qe.artist} · ${qe.licence} · Wikimedia Commons`):Qr("Untitled study","Procedural print — placeholder"),`placard:${i.label}:${se}`)}l.chair(2.35,0,.42,1),l.chair(2.95,0,.42,1),l.chair(-2.35,0,.42,1),l.chair(-2.95,0,.42,1);const V=se=>-(D.ENTRY+(se+.5)*D.DOOR_SPACING),ie=(se,xe,Te,L,et,qe,ot,Ce)=>{const y=se==="right"?1:-1,_=y*(f/2),N=V(xe);l.box(.08,D.DOOR_H,D.DOOR_W,ce.door,_-y*.05,D.DOOR_H/2,N,{}),l.doorFurniture(y>0?"x-":"x+",_-y*.05,0,N);const ne=y*.75;l.box(1.3,.56,.006,dl,ne,2.42,N,{});for(const oe of[1,-1])l.sign(1.3,.56,ne,2.42,N+oe*.0035,oe>0?0:Math.PI,()=>gt({widthPx:760,heightPx:328,title:ot,subtitle:Ce,titleSize:50}),`doorsign:${et}:${oe}`);for(const oe of[ne-.45,ne+.45])l.steelSpec({w:.03,h:p-2.69,d:.03,x:oe,y:(p+2.69)/2,z:N});c.push({kind:Te,areaId:i.id,elementId:L,label:et,targetIds:[qe],triggerPos:l.local(_-y*.45,0,N),radius:.75,halfX:.4,halfZ:.55,auto:!0,exitPos:l.local(_-y*1.35,0,N),exitYaw:(y>0?Math.PI/2:-Math.PI/2)+a})};i.out.forEach((se,xe)=>{const Te=n.get(se.targetId)?.label??"?";ie("right",xe,"door-out",se.elementId,se.label,se.targetId,Te,es(i.label,se.label,Te,se))}),i.in.forEach((se,xe)=>{const Te=n.get(se.sourceId)?.label??"?";ie("left",xe,"door-in",se.elementId,se.label,se.sourceId,Te,es(Te,se.label,i.label,se))});const k=se=>e.art.length?e.art[se%e.art.length]:null,H=se=>(i.id.charCodeAt(1)*17+i.id.charCodeAt(5)*5+se*31>>>0)%997,ae=Math.max(i.out.length,i.in.length,1),G=(se,xe)=>{const Te=se==="right"?1:-1;for(let L=xe;L<ae;L+=2){const et=H(L*2+(Te>0?1:0));wn(l,k(et),et,Te*(f/2-.075),1.68,V(L),Te>0?-Math.PI/2:Math.PI/2,`${i.label}:${se}:${L}`)}};i.out.length<ae&&G("right",i.out.length),i.in.length<ae&&G("left",i.in.length);{const se=H(99);wn(l,k(se),se,f/2-.075,1.68,-1.15,-Math.PI/2,`${i.label}:entry`)}if(i.self.forEach((se,xe)=>{const Te=f/2-.8-xe*(D.DOOR_W+.2);l.box(D.DOOR_W,D.DOOR_H,.08,ce.door,Te,D.DOOR_H/2,-h+.06,{}),l.doorFurniture("z+",Te,0,-h+.06),l.sign(1.3,.4,Te,D.DOOR_H+.4,-h+.07,0,()=>gt({widthPx:768,heightPx:236,title:`${se.label} ${Wm(se.min,se.max)}`,subtitle:`→ ${i.label}`,titleSize:56}),`selfsign:${se.label}`),c.push({kind:"door-self",areaId:i.id,elementId:se.elementId,label:se.label,targetIds:[i.id],triggerPos:l.local(Te,0,-h+.5),radius:.7,halfX:.55,halfZ:.45,auto:!0})}),!g){for(const se of[-1,1]){const xe=se*.44;l.box(.85,D.DOOR_H,.08,ce.door,xe,D.DOOR_H/2,-h+.06,{}),l.steelSpec({w:.7,h:.05,d:.05,x:xe,y:1.05,z:-h+.13}),l.steelSpec({w:.7,h:.22,d:.02,x:xe,y:.13,z:-h+.11})}l.steelSpec({w:.04,h:D.DOOR_H,d:.03,x:0,y:D.DOOR_H/2,z:-h+.11}),l.sign(1.1,.34,0,D.DOOR_H+.35,-h+.07,0,()=>gt({widthPx:640,heightPx:198,title:"FIRE EXIT",subtitle:"emergency use only",background:al,titleSize:78,align:"center"}),`fire:${i.label}`),c.push({kind:"fire-exit",areaId:i.id,label:i.label,targetIds:[],triggerPos:l.local(0,0,-h+.8),radius:1.1,halfX:1,halfZ:.75,auto:!1,prompt:"E — push the bar (emergency use only)"})}const ee=i.supers.length>0||i.subs.length>0;let pe,ve,q;const J=[],re=[];{const se=ko(i,n),xe=se.length?Math.max(...se.map(Te=>Te.level)):0;for(let Te=xe;Te>=1;Te--)for(const L of se.filter(et=>et.level===Te)){const et=n.get(L.id);J.push({text:`▲${Te} ${et?.label??"?"}`,chip:ei(et?.wing??"")}),re.push(L.id)}J.push({text:`● ${i.label}`,strong:!0,chip:u}),re.push(null);for(const Te of i.subs){const L=n.get(Te);J.push({text:`▼1 ${L?.label??"?"}`,chip:ei(L?.wing??"")}),re.push(Te)}J.push({text:"⌂ Reception"}),re.push(dn)}const fe={widthPx:850,heightPx:750,title:ee?"Lift":"Exit",subtitle:i.label,rows:J,rowSize:J.length>10?30:38,columns:J.length>10?2:1},me=(()=>{const se=Oo(fe,J.length);return J.flatMap((xe,Te)=>se[Te]&&re[Te]?[{rect:se[Te],id:re[Te],label:xe.text.replace(/^[▲▼●⌂]\S* ?/u,"")}]:[])})();let Le;ee&&(l.box(.08,2.4,5.15-4.85,ce.liftDoor,2+.04,2.4/2,(4.85+5.15)/2),l.box(.08,2.4,6.45-6.15,ce.liftDoor,2+.04,2.4/2,(6.15+6.45)/2),l.box(.08,2.4-D.DOOR_H,1,ce.liftDoor,2+.04,(2.4+D.DOOR_H)/2,5.65,{}),l.box(3.42-2,2.4,.08,ce.liftDoor,2.71,2.4/2,4.85+.04),l.box(3.42-2,2.4,.08,ce.liftDoor,2.71,2.4/2,6.45-.04),l.box(3.42-2,.06,6.45-4.85,ce.liftDoor,2.71,2.4+.03,5.65,{}),l.led(2.71,5.65,2.4-.02,.5,.5),q={doors:new Gm(s,2+.1,5.65),doorwayPos:l.local(2+.05,0,5.65)},l.steelSpec({w:.06,h:2.12,d:.09,x:2-.01,y:1.06,z:5.12}),l.steelSpec({w:.06,h:2.12,d:.09,x:2-.01,y:1.06,z:6.18}),l.steelSpec({w:.06,h:.09,d:1.15,x:2-.01,y:2.14,z:5.65}),l.steelSpec({w:.16,h:.02,d:1.05,x:2+.02,y:.012,z:5.65}),l.steelSpec({w:.03,h:.26,d:.16,x:2-.015,y:1.12,z:4.99}),l.sign(.1,.2,2-.035,1.12,4.99,-Math.PI/2,()=>gt({widthPx:64,heightPx:128,title:"▲",subtitle:"▼",titleSize:40,align:"center"}),`liftcall:${i.label}`),l.sign(.72,.24,2-.015,2.27,5.65,-Math.PI/2,()=>gt({widthPx:384,heightPx:128,title:"LIFT",subtitle:i.floor?`level −${i.floor}`:"ground",titleSize:56,align:"center"}),`liftind:${i.label}`),l.steelSpec({w:1.24,h:.05,d:.04,x:2.71+.04,y:.92,z:4.85+.13}),l.steelSpec({w:1.24,h:.05,d:.04,x:2.71+.04,y:.92,z:6.45-.13}),l.steelSpec({w:.04,h:.05,d:1.44,x:3.42-.13,y:.92,z:5.65}),l.sign(.42,.15,2.71+.35,2.02,4.85+.09,0,()=>gt({widthPx:336,heightPx:120,title:"MAX 8 PERSONS · 610 kg",titleSize:30,align:"center",background:"#e8e9e4",color:"#3a4046"}),`liftload:${i.label}`),l.sign(.4,.14,2.71-.2,1.78,6.45-.09,Math.PI,()=>gt({widthPx:320,heightPx:112,title:"NO SMOKING",titleSize:40,align:"center",background:"#f4f4f1",color:"#b3261e"}),`liftsmoke:${i.label}`),Le=l.sign(.95,1.05,2.71-.08,1.3,4.85+.09,0,()=>ur(fe),`liftcab:${i.label}`),pe=l.local(2.71,0,5.65),ve=Math.PI/2+a,c.push({kind:"lift",areaId:i.id,label:"Lift",targetIds:[],triggerPos:pe.clone(),radius:.75,auto:!1,prompt:"E — Lift: select destination"}));const nt=l.sign(1.7,1.5,x/2-.09,1.7,3.1,-Math.PI/2,()=>ur(fe),`liftboard:${i.label}`);let Ge;if(ee&&(Ge=[{kind:"lift",mesh:nt,cells:me}],Le&&Ge.push({kind:"lift",mesh:Le,cells:me})),i.supers.slice(1).forEach((se,xe)=>{const Te=n.get(se),L=6.35-xe*1.15;l.box(.1,D.DOOR_H,1,ce.door,-3.5+.06,D.DOOR_H/2,L,{}),l.doorFurniture("x+",-3.5+.06,0,L),l.sign(1.35,.42,-3.5+.1,D.DOOR_H+.4,L,Math.PI/2,()=>gt({widthPx:768,heightPx:240,title:`Stairs ↑ ${Te?.label??"?"}`,subtitle:`${Te?.wing??"?"} wing`,titleSize:56}),`upportal:${Te?.label}`),c.push({kind:"stair-up",areaId:i.id,label:`Stairs ↑ ${Te?.label??"?"}`,targetIds:[se],triggerPos:l.local(-3.5+.5,0,L),radius:.7,halfX:.45,halfZ:.55,auto:!0})}),m?$m(i,l,c,e):i.subs.length&&i.subs.forEach((se,xe)=>{const Te=n.get(se),L=4.6-xe*1.15;l.box(.1,D.DOOR_H,1,ce.door,-3.5+.06,D.DOOR_H/2,L,{}),l.doorFurniture("x+",-3.5+.06,0,L),l.sign(1.35,.42,-3.5+.1,D.DOOR_H+.4,L,Math.PI/2,()=>gt({widthPx:768,heightPx:240,title:`↓ ${Te?.label??"?"}`,subtitle:`homed in ${Te?.wing??"?"} wing`,titleSize:56}),`downportal:${Te?.label}`),c.push({kind:"stair-down",areaId:i.id,label:`Stairs ↓ ${Te?.label??"?"}`,targetIds:[se],triggerPos:l.local(-3.5+.5,0,L),radius:.7,halfX:.45,halfZ:.55,auto:!0})}),i.subs.length){const se=i.subs.map(xe=>n.get(xe)?.label??"?");l.sign(1.9,.85,-3.5+.09,2.45,3.3,Math.PI/2,()=>ur({widthPx:900,heightPx:400,title:"Stairs ↓",rows:se.map(xe=>({text:xe})),rowSize:se.length>6?34:44,columns:se.length>8?2:1}),`stairsdown:${i.label}`)}const it=[new bt().setFromPoints([l.local(-x/2-.3,-.5,-.2),l.local(x/2+.3,2.5,v+.2)]),new bt().setFromPoints([l.local(-f/2-.4,-.5,-h-.5),l.local(f/2+.4,2.5,0)])];if(m){const se=o?-1:1;it.push(new bt().setFromPoints([l.local(D.PIT_X0-.2,-4-.5,D.PIT_Z0-.2),l.local(D.PIT_X1+.2,2.5,v+.2)]),new bt().setFromPoints([new F(m.x0-.3,t.y-D.STOREY-.5,t.z+se*5.4),new F(m.x1+.3,t.y-D.STOREY+2.5,t.z+se*(D.LANDING_Z1+.3))]))}return l.populate(e.people,i.id.charCodeAt(0)*131+i.id.charCodeAt(4)*17+i.id.charCodeAt(8)>>>0),l.finalize(),{id:i.id,wc:i,label:i.label,group:s,colliders:l.colliders,walkables:l.walkables,interactables:c,spawnPos:l.local(0,0,4.6),spawnYaw:a,liftPos:pe,liftYaw:ve,lift:q,boards:Ge,notices:O,boxes:it}}function $m(i,e,t,n){const{byId:r,layout:s}=n,o=s.landings[i.id],a=e.origin,l=D.STOREY,c=D.PIT_X1-D.PIT_X0,u=c/2-.1,h=D.PIT_X0+u/2,f=D.PIT_X1-u/2,p=.8,x=D.PIT_Z1-D.PIT_Z0-p,v=12,m=x/v;for(let G=0;G<v;G++){const ee=-((G+1)*(l/2))/v;e.box(u,.09,m+.02,ce.oak,h,ee-.045,D.PIT_Z1-(G+.5)*m,{walkable:!0})}e.box(c,.1,p,ce.oak,(D.PIT_X0+D.PIT_X1)/2,-l/2-.05,D.PIT_Z0+p/2,{walkable:!0});for(let G=0;G<v;G++){const ee=-l/2-(G+1)*(l/2)/v;e.box(u,.09,m+.02,ce.oak,f,ee-.045,D.PIT_Z0+p+(G+.5)*m,{walkable:!0})}e.box(c,.1,D.LOBBY_D-D.PIT_Z1+.1,ce.floor,(D.PIT_X0+D.PIT_X1)/2,-l-.05,(D.PIT_Z1+D.LOBBY_D)/2,{walkable:!0,vinyl:!0}),e.box(c+.2,.1,D.PIT_Z1-D.PIT_Z0+.1,ce.floor,(D.PIT_X0+D.PIT_X1)/2,-l-.05,(D.PIT_Z0+D.PIT_Z1)/2,{walkable:!0,vinyl:!0});{const G=Math.atan2(l/2,D.PIT_Z1-D.PIT_Z0-p),ee=Math.hypot(D.PIT_Z1-D.PIT_Z0-p,l/2)+.1,pe=(D.PIT_Z0+p+D.PIT_Z1)/2;e.oakSpec({w:u+.05,h:.06,d:ee,x:h,y:-l/4-.22,z:pe,rx:-G}),e.oakSpec({w:u+.05,h:.06,d:ee,x:f,y:-3*l/4-.22,z:pe,rx:G});const ve=(D.PIT_X0+D.PIT_X1)/2;e.oakSpec({w:.24,h:.34,d:ee,x:ve,y:-l/4-.12,z:pe,rx:-G}),e.oakSpec({w:.24,h:.34,d:ee,x:ve,y:-3*l/4-.12,z:pe,rx:G})}const d=l+D.ROOM_H;e.box(.1,d,D.LOBBY_D-D.PIT_Z0,ce.wall,D.PIT_X0-.05,-l+d/2-D.ROOM_H,(D.PIT_Z0+D.LOBBY_D)/2),e.box(.1,l,D.PIT_Z1-D.PIT_Z0,ce.wall,D.PIT_X1+.05,-l/2,(D.PIT_Z0+D.PIT_Z1)/2),e.box(.1,l,D.LOBBY_D-D.PIT_Z1,ce.wall,D.PIT_X1+.05,-l/2,(D.PIT_Z1+D.LOBBY_D)/2),e.box(c+.2,l,.1,ce.wall,(D.PIT_X0+D.PIT_X1)/2,-l/2,D.PIT_Z0-.05);const E=cr.railCentre,T=(G,ee,pe,ve,q)=>{const J=Math.abs(pe-G)>Math.abs(ve-ee),re=J?pe-G:ve-ee;e.oakSpec({w:J?re:.06,h:.06,d:J?.06:re,x:(G+pe)/2,y:q+E,z:(ee+ve)/2});for(let fe=.15;fe<re;fe+=.3)e.oakSpec({w:.035,h:E-.03,d:.035,x:J?G+fe:G,y:q+(E-.03)/2,z:J?ee:ee+fe});e.colliders.push(new bt().setFromPoints([e.local(Math.min(G,pe)-.05,q,Math.min(ee,ve)-.05),e.local(Math.max(G,pe)+.05,q+E+.05,Math.max(ee,ve)+.05)]))};T(D.PIT_X1+.04,D.PIT_Z0,D.PIT_X1+.04,D.PIT_Z1,0),T(D.PIT_X0,D.PIT_Z0-.04,D.PIT_X1,D.PIT_Z0-.04,0),T(D.PIT_X1-u-.2,D.PIT_Z1+.04,D.PIT_X1,D.PIT_Z1+.04,0);const w=(G,ee,pe)=>{e.oakSpec({w:.09,h:E+.17,d:.09,x:G,y:pe+(E+.17)/2,z:ee}),e.oakSpec({w:.13,h:.035,d:.13,x:G,y:pe+E+.17,z:ee})};w(D.PIT_X1+.04,D.PIT_Z0-.04,0),w(D.PIT_X1+.04,D.PIT_Z1+.04,0),w(D.PIT_X1-u-.2,D.PIT_Z1+.04,0);{const G=(D.PIT_X0+D.PIT_X1)/2,ee=Math.atan2(l/2,x),pe=Math.hypot(x,l/2)+.15,ve=D.PIT_Z1,q=D.PIT_Z0+p,J=(ve+q)/2,re=Le=>E-l/2*((ve-Le)/x),fe=(Le,nt,Ge)=>e.oakSpec({w:.07,h:.07,d:pe,x:Le,y:nt,z:J,rx:Ge});fe(G,E-l/4,-ee),fe(G,E-3*l/4,ee),fe(D.PIT_X0+.08,E-l/4,-ee),fe(D.PIT_X1-.08,E-3*l/4,ee),w(G,ve+.04,0),w(G,q-.06,-l/2),w(G,ve+.06,-l);const me=Le=>E-l+l/2*((ve-Le)/x);for(let Le=q+.15;Le<ve;Le+=.3)for(const nt of[re(Le),me(Le)])e.oakSpec({w:.035,h:E-.06,d:.035,x:G,y:nt-.03-(E-.06)/2,z:Le});e.colliders.push(new bt().setFromPoints([e.local(G-.06,-l,D.PIT_Z0+.8),e.local(G+.06,1,D.PIT_Z1)]))}const A=s.areas[i.id].flip?-1:1,b=G=>A*(G-a.x),P=-l,[B,g]=[b(o.x0),b(o.x1)].sort((G,ee)=>G-ee),S=g-B,I=(B+g)/2,C=(D.LANDING_Z0+D.LANDING_Z1)/2;e.box(S,.1,3,ce.floor,I,P-.05,C,{walkable:!0,vinyl:!0}),e.box(S,.1,3,ce.ceiling,I,P+D.ROOM_H+.05,C,{worldUV:!0}),e.box(.15,D.ROOM_H,3.3,ce.wall,B-.075,P+D.ROOM_H/2,C,{solid:!0,trim:["x+"]}),e.box(.15,D.ROOM_H,3.3,ce.wall,g+.075,P+D.ROOM_H/2,C,{solid:!0,trim:["x-"]});for(let G=0;G<Math.floor(S/3.5);G++)e.led(B+(G+.5)*3.5,C,P+D.ROOM_H-.02,.35,1.3);const O=G=>{const ee=b(s.areas[G].x);return[ee-D.LOBBY_W/2,ee+D.LOBBY_W/2]},Y=(G,ee,pe)=>{const ve=[],q=[...pe].sort((re,fe)=>re[0]-fe[0]);let J=B;for(const[re,fe]of q)re>J&&(e.box(re-J,D.ROOM_H,.15,ce.wall,(J+re)/2,P+D.ROOM_H/2,G,{solid:!0,trim:[ee]}),ve.push([J,re])),J=Math.max(J,fe);return g>J&&(e.box(g-J,D.ROOM_H,.15,ce.wall,(J+g)/2,P+D.ROOM_H/2,G,{solid:!0,trim:[ee]}),ve.push([J,g])),ve},X=o.northIds.map(O),W=Y(D.LANDING_Z0-.075,"z+",[[D.PIT_X0,D.PIT_X1],...o.southIds.map(O)]);Y(D.LANDING_Z1+.075,"z-",X);for(const[G,ee]of W)if(!(ee-G<4.5))for(let pe=G+2.3;pe<=ee-2.3;pe+=6.5){const ve=(Math.round(pe*13)+i.id.charCodeAt(2)>>>0)%997;wn(e,n.art.length?n.art[ve%n.art.length]:null,ve,pe,P+1.7,D.LANDING_Z0+.01,0,`${i.label}:land:${Math.round(pe)}`)}e.sign(2.4,.6,(D.PIT_X0+D.PIT_X1)/2,P+D.DOOR_H+.5,D.LANDING_Z1-.09,Math.PI,()=>gt({widthPx:1024,heightPx:256,title:`Stairs ↑ ${i.label}`,subtitle:`${i.wing} wing · ${i.floor?`level −${i.floor}`:"ground"}`,titleSize:72}),`landingup:${i.label}`);const V=[];let ie=0;const k=G=>X.every(([ee,pe])=>G+.8<=ee||G-.8>=pe)&&V.every(ee=>Math.abs(G-ee)>=1.9),H=G=>()=>gt({widthPx:768,heightPx:230,title:`↓ ${G?.label??"?"}`,subtitle:`homed in ${G?.wing??"?"} wing`,titleSize:58});o.portalChildIds.forEach(G=>{const ee=r.get(G);let pe=D.PIT_X1+1.6;for(;pe<=g-.9&&!k(pe);)pe+=.1;if(pe<=g-.9)V.push(pe),e.box(D.DOOR_W,D.DOOR_H,.08,ce.door,pe,P+D.DOOR_H/2,D.LANDING_Z1-.05,{}),e.doorFurniture("z-",pe,P,D.LANDING_Z1-.05),e.sign(1.5,.45,pe,P+D.DOOR_H+.45,D.LANDING_Z1-.09,Math.PI,H(ee),`downportal:${ee?.label}`),t.push({kind:"stair-down",areaId:i.id,label:`Stairs ↓ ${ee?.label??"?"}`,targetIds:[G],triggerPos:e.local(pe,-l,D.LANDING_Z1-.5),radius:.7,halfX:.55,halfZ:.45,auto:!0});else{const ve=8.7-ie*1.6;ie++,e.box(.08,D.DOOR_H,D.DOOR_W,ce.door,g-.05,P+D.DOOR_H/2,ve,{}),e.doorFurniture("x-",g-.05,P,ve),e.sign(1.5,.45,g-.09,P+D.DOOR_H+.45,ve,-Math.PI/2,H(ee),`downportal:${ee?.label}`),t.push({kind:"stair-down",areaId:i.id,label:`Stairs ↓ ${ee?.label??"?"}`,targetIds:[G],triggerPos:e.local(g-.5,-l,ve),radius:.7,halfX:.45,halfZ:.55,auto:!0})}});const ae=V.length?Math.max(...V)+1:D.PIT_X1+1;for(let G=0;G<3;G++){const ee=g-.8-G*.6;if(ee<ae+.8||ie)break;X.some(([pe,ve])=>ee>pe-.45&&ee<ve+.45)||e.chair(ee,P,D.LANDING_Z1-.45,-1)}}function wn(i,e,t,n,r,s,o,a){const l=Math.sin(o),c=Math.cos(o),u=Math.abs(l)>.5;i.oakSpec({w:u?.05:1.42,h:1.08,d:u?1.42:.05,x:n-l*.031,y:r,z:s-c*.031}),i.sign(1.28,.94,n,r,s,o,()=>e?Bo(`art/${e.file}`):nc(t),`pic:${a}`),i.sign(.44,.13,n,r-.62,s,o,()=>e?Qr(e.title,`${e.artist} · ${e.licence} · Wikimedia Commons`):Qr("Untitled study","Procedural print — placeholder"),`picplacard:${a}`)}function ko(i,e){const t=new Map;let n=[i.id],r=0;for(;n.length;){r++;const s=[];for(const o of n)for(const a of e.get(o)?.supers??[])t.has(a)||(t.set(a,r),s.push(a));n=s}return[...t].map(([s,o])=>({id:s,level:o}))}const Qt="__theatre";function Ym(i,e,t){const n=new bn;n.name="area:theatre";const r=new Mr(n,new F(0,0,0),i),s=-24,o=-4,a=20,l=33.5,c=(s+o)/2,u=(a+l)/2,h=4.5,f=5,p=1.7,x=.35,v=-f*x,m=v+.4,d=ce.wall.clone(),E=ce.ceiling.clone(),T=ce.floor.clone(),w=ce.led.clone(),A=new Ct({color:2830648}),b=new Ct({color:9264970}),P=new Ct({color:6715727}),B=new Ct({color:13623528,transparent:!0,opacity:.3}),g=[d,E,T,A].map(G=>({m:G,base:G.color.clone()})),S=G=>{for(const ee of g)ee.m.color.copy(ee.base).multiplyScalar(G?1:.3);w.color.set(G?16251391:4212047)},I=-15;r.box(3,.1,5,ce.floor,I,-.05,17.5,{walkable:!0,vinyl:!0}),r.box(3,.1,5,ce.ceiling,I,3.05,17.5,{worldUV:!0});for(const[G,ee]of[[I-1.575,"x+"],[I+1.575,"x-"]]){r.box(.15,1,5,ce.wall,G,.5,17.5,{solid:!0,trim:[ee]}),r.box(.08,1.7,5,B,G,1.85,17.5,{solid:!0}),r.box(.15,.3,5,ce.wall,G,2.85,17.5,{});for(const pe of[16.2,17.5,18.8])r.steelSpec({w:.18,h:1.7,d:.07,x:G,y:1.85,z:pe})}for(const G of[16.4,18.6])r.led(I,G,2.98);r.sign(2.6,.62,I,2.55,a-.09,Math.PI,()=>gt({widthPx:1152,heightPx:260,title:"Postgraduate Medical Centre",subtitle:"lecture theatre · seminars & presentations",titleSize:74}),"theatre-door");const C=h+2.4,O=h-C/2,Y=19.4,X=21;r.box(.15,C,Y-a,d,s-.075,O,(a+Y)/2,{solid:!0}),r.box(.15,C,l-X,d,s-.075,O,(X+l)/2,{solid:!0}),r.box(.15,h-2.3,X-Y,d,s-.075,(h+2.3)/2,(Y+X)/2,{}),r.box(.15,2.4,X-Y,d,s-.075,-1.2,(Y+X)/2,{solid:!0}),r.sign(1.9,.5,s+.09,2.55,(Y+X)/2,Math.PI/2,()=>gt({widthPx:960,heightPx:250,title:"← Reference Gallery",subtitle:"clause 3.1 definitions · resources annex",titleSize:64}),"to-gallery"),r.box(.15,C,l-a,d,o+.075,O,u,{solid:!0}),r.box(o-s+.3,C,.15,d,c,O,l+.075,{solid:!0}),r.box(-16-s,h+.2,.15,d,(s+-16)/2,h/2-.1,a-.075,{solid:!0}),r.box(o- -14,h+.2,.15,d,(-14+o)/2,h/2-.1,a-.075,{solid:!0}),r.box(2,h-2.3,.15,d,I,(h+2.3)/2,a-.075,{}),r.box(o-s,.1,l-a,E,c,h+.05,u,{worldUV:!0});for(const G of[s+.11,o-.11])r.box(.06,.8,l-a-3,ce.daylight,G,3.7,u,{});r.box(o-s,.1,2,T,c,-.05,a+1,{walkable:!0,vinyl:!0});for(let G=0;G<f;G++){const ee=-x*(G+1),pe=a+2+p*G;r.box(o-s,.1,p,T,c,ee-.05,pe+p/2,{walkable:!0,vinyl:!0}),r.box(o-s,x,.06,A,c,ee+x/2,pe+.03,{})}const W=a+2+p*f;r.box(o-s,.1,1,T,c,v-.05,W+.5,{walkable:!0,vinyl:!0}),r.box(17,.5,1.85,ce.oak,c,m-.25,W+1+.925,{walkable:!0});for(let G=0;G<f;G++){const ee=-x*(G+1),pe=a+2+p*G+.9;for(let ve=-22.8;ve<=-16.45;ve+=.62)r.chair(ve,ee,pe,1);for(let ve=-13.55;ve<=-5.2;ve+=.62)r.chair(ve,ee,pe,1)}const V=l-.075;r.box(6.7,4.1,.06,A,c,.85,V-.035,{});const ie=new mn({color:16777215}),k=new Ft(new qi(6,3.375),ie);k.position.set(c,.84,V-.075),k.rotation.y=Math.PI,k.matrixAutoUpdate=!1,k.updateMatrix(),n.add(k),r.sign(5,.7,c,3.35,V-.08,Math.PI,()=>gt({widthPx:1600,heightPx:224,title:"Postgraduate Medical Centre",subtitle:"slides: ← → · PageUp/PageDown (clickers work) · or tap the screen",titleSize:76}),"proscenium"),r.box(.42,1.05,.42,ce.oak,-17.5,m+.525,W+1.7,{solid:!0}),r.oakSpec({w:.62,h:.05,d:.5,x:-17.5,y:m+1.08,z:W+1.7}),r.steelSpec({w:.05,h:.3,d:.05,x:-17.28,y:m+1.25,z:W+1.62}),r.sign(1.7,.5,I,2.65,a+.085,0,()=>gt({widthPx:900,heightPx:240,title:"→ Reception",subtitle:"B returns to your last stop",titleSize:66}),"theatre-exit");const H=G=>e.length?e[G%e.length]:null;wn(r,H(5),5,-19.5,1.7,a+.085,0,"theatre:r1"),wn(r,H(11),11,-10.5,1.7,a+.085,0,"theatre:r2");for(const G of[-20,c,-8])for(const ee of[21.5,24.5,27.5,30.5])r.box(.6,.035,1.3,w,G,h-.02,ee,{});r.box(.12,7,Y-(a-.15),b,s-.21,1,(a-.15+Y)/2,{}),r.box(.12,7,l+.15-X,b,s-.21,1,(X+l+.15)/2,{}),r.box(.12,2.2,X-Y,b,s-.21,3.4,(Y+X)/2,{}),r.box(.12,2.5,X-Y,b,s-.21,-1.25,(Y+X)/2,{}),r.box(.12,7,l-a+.3,b,o+.21,1,u,{}),r.box(o-s+.7,7,.12,b,c,1,l+.21,{}),r.box(-16.6-(s-.35),7,.12,b,(s-.35+-16.6)/2,1,a-.21,{}),r.box(o+.35- -13.4,7,.12,b,(-13.4+o+.35)/2,1,a-.21,{}),r.box(3.2,1.3,.12,b,I,3.85,a-.21,{}),r.box(o-s+.9,.18,l-a+.9,b,c,h+.24,u,{});const ae=(G,ee,pe,ve)=>r.box(ee-G,.06,ve-pe,P,(G+ee)/2,-.09,(pe+ve)/2,{});return ae(-30,s-.35,15.2,38),ae(o+.35,2,15.2,38),ae(s-.35,-16.7,15.2,a-.3),ae(-13.3,o+.35,15.2,a-.3),ae(s-.35,o+.35,l+.35,38),t!=="off"&&r.stand(-17.5,m,W+2.15,Math.PI,4271),r.populate(t,6101),r.finalize(),S(!0),{id:Qt,wc:null,label:"Postgraduate Medical Centre",group:n,colliders:r.colliders,walkables:r.walkables,interactables:[],boards:[{kind:"screen",mesh:k,cells:[{rect:[0,0,.35,1],id:"prev",label:"previous slide"},{rect:[.35,0,1,1],id:"next",label:"next slide"}]}],spawnPos:new F(I,0,a+1.2),spawnYaw:Math.PI,boxes:[new bt(new F(s-.3,-2.5,a-.3),new F(o+.3,h+.3,l+.3)),new bt(new F(I-1.7,-.5,15),new F(I+1.7,3.2,a))],screen:k,setHouseLights:S,lecternPos:new F(-16.6,m,W+1.9),lecternYaw:0,viewPos:new F(c,v,28.9)}}function qm(i,e,t,n){const r=new bn;r.name="area:atrium";const s=new Mr(r,new F(0,0,0),e),o=-26,a=0,l=3,c=15,u=D.STREET_H,h=(o+a)/2,f=(l+c)/2;s.box(a-o,.1,c-l,ce.floor,h,-.05,f,{walkable:!0,vinyl:!0}),s.box(a-o,.1,c-l,ce.ceiling,h,u+.05,f,{worldUV:!0}),s.box(a-o+.3,1,.15,ce.wall,h,.5,l-.075,{solid:!0,trim:["z+"]}),s.box(a-o+.3,1.7,.08,ce.daylight,h,1.85,l-.075,{solid:!0}),s.box(a-o+.3,u-2.7,.15,ce.wall,h,(u+2.7)/2,l-.075,{});for(let b=o+2;b<a-.5;b+=2)s.steelSpec({w:.07,h:1.7,d:.18,x:b,y:1.85,z:l-.075});s.box(-16-o+.3,u,.15,ce.wall,(o-.15+-16)/2,u/2,c+.075,{solid:!0,trim:["z-"]}),s.box(a- -14+.3,u,.15,ce.wall,(-14+a+.15)/2,u/2,c+.075,{solid:!0,trim:["z-"]}),s.box(2,u-2.3,.15,ce.wall,-15,(u+2.3)/2,c+.075,{}),s.box(.15,u,c-l,ce.wall,o-.075,u/2,f,{solid:!0,trim:["x+"]}),s.box(.15,u,D.STREET_Z0-l,ce.wall,a+.075,u/2,(l+D.STREET_Z0)/2,{solid:!0,trim:["x-"]}),s.box(.15,u,c-D.STREET_Z1,ce.wall,a+.075,u/2,(D.STREET_Z1+c)/2,{solid:!0,trim:["x-"]});for(let b=o+3;b<a-1;b+=4.5)for(const P of[5.2,9,12.8])s.led(b,P,u-.02);s.box(1.1,1.1,5.2,ce.oak,o+4.5,.55,f),s.box(4.2,.46,.55,ce.oak,-10,.23,4.4),s.box(4.2,.5,.09,ce.oak,-10,.7,4.4-.24);for(let b=0;b<5;b++)s.chair(-5.8+b*.62,0,14.35,-1);for(let b=0;b<3;b++)s.chair(-17.9+b*.62,0,14.35,-1);const p=b=>t.length?t[b%t.length]:null;wn(s,p(3),3,o+.09,1.8,4.6,Math.PI/2,"atrium:w1"),wn(s,p(9),9,o+.09,1.8,13.4,Math.PI/2,"atrium:w2"),wn(s,p(6),6,-3.4,1.8,c-.09,Math.PI,"atrium:n1"),s.sign(7,1.5,o+.09,2.6,f,Math.PI/2,()=>gt({widthPx:1792,heightPx:384,title:"White Rose General Hospital",subtitle:`home of the ContSys model · ${i.meta.label} · ${i.classes.length} concepts · welcome — walk the model`,titleSize:150,align:"center"}),"title"),s.sign(3.2,.7,a-.09,D.ROOM_H+.55,(D.STREET_Z0+D.STREET_Z1)/2,-Math.PI/2,()=>gt({widthPx:1280,heightPx:280,title:"Hospital Street →",subtitle:"all wings · concepts A–Z on the directory",titleSize:88}),"to-street"),s.sign(2.6,.6,-15,2.62,c-.09,Math.PI,()=>gt({widthPx:1152,heightPx:252,title:"Postgraduate Medical Centre →",subtitle:"lecture theatre · seminars & presentations",titleSize:70}),"to-theatre");const x=[...i.wings.map(b=>({text:b.annex?b.label:`${b.label} wing`,sub:`${b.classCount} concepts${b.zone==="gallery"?" · at the Postgraduate Medical Centre":""}`,chip:ei(b.key)})),{text:"Postgraduate Medical Centre",sub:"lecture theatre · Reference Gallery",chip:"#005eb8"}],v={widthPx:1024,heightPx:724,title:"Hospital directory",subtitle:"wings west to east — tap one to visit its entrance",rows:x,rowSize:x.length>8?32:40},m=s.sign(3.4,2.4,-20,1.9,c-.09,Math.PI,()=>ur(v),"directory-wings"),d=Oo(v,x.length),E={widthPx:2048,heightPx:1152,title:"Concepts A–Z",subtitle:"tap a concept to go there · or press M anywhere for the porter",rows:i.classes.map(b=>({text:b.label,sub:b.roomNumber??void 0,chip:ei(b.wing)})),rowSize:14,columns:5},T=s.sign(6.4,3.6,-9,1.9,c-.09,Math.PI,()=>ur(E),"directory-az"),w=Oo(E,i.classes.length),A=[{kind:"directory",mesh:m,cells:[...i.wings.flatMap((b,P)=>d[P]?[{rect:d[P],id:b.rootIds[0],label:b.annex?b.label:`${b.label} wing`}]:[]),...d[i.wings.length]?[{rect:d[i.wings.length],id:Qt,label:"Postgraduate Medical Centre"}]:[]]},{kind:"directory",mesh:T,cells:i.classes.flatMap((b,P)=>w[P]?[{rect:w[P],id:b.id,label:b.label}]:[])}];return n!=="off"&&(s.stand(o+3.7,0,f,Math.PI/2,137),s.sit(-9.4,.02,4.55,1,553),s.sit(-10.6,.02,4.55,1,887)),s.populate(n,9001),s.finalize(),{id:dn,wc:null,label:"Reception",group:r,colliders:s.colliders,walkables:s.walkables,interactables:[],boards:A,spawnPos:new F(-14,0,f),spawnYaw:-Math.PI/2,boxes:[new bt(new F(o-.3,-.5,l-.3),new F(a+.1,2.5,c+.3))]}}const Go="__street";function Zm(i,e,t,n,r){const s=new bn;s.name="area:street";const o=new Mr(s,new F(0,0,0),t),a=e.loop,l=0,c=a.xEnd,u=c-l,h=(l+c)/2,f=D.STREET_H,p=a.south.z1,x=a.north.z0,v=[a.connectors.west,a.connectors.east],m=new Map(i.classes.map(g=>[g.id,g])),d=new Map(i.wings.map(g=>[g.key,g])),E=new Ct({color:13623528,transparent:!0,opacity:.3}),T=new Ct({color:6715727}),w=g=>{const S=g==="south"?a.south:a.north,I=S.z0,C=S.z1,O=(I+C)/2,Y=g==="south"?I-.075:C+.075,X=g==="south"?C+.075:I-.075,W=g==="south"?"z+":"z-",V=g==="south"?"z-":"z+",ie=g==="south"?0:Math.PI;o.box(u,.1,C-I,ce.floor,h,-.05,O,{walkable:!0,vinyl:!0}),o.box(u,.1,C-I,ce.ceiling,h,f+.05,O,{worldUV:!0});for(let re=l+2;re<c-1;re+=4)o.led(re,I+1.3,f-.02,.35,1.3),o.led(re,C-1.3,f-.02,.35,1.3);const k=[];let H=l;for(const[re,fe]of v)re>H&&k.push([H,re]),H=Math.max(H,fe);c>H&&k.push([H,c]);for(const[re,fe]of k){const me=(re+fe)/2,Le=fe-re;o.box(Le,1,.15,ce.wall,me,.5,X,{solid:!0,trim:[V]}),o.box(Le,1.7,.08,E,me,1.85,X,{solid:!0}),o.box(Le,f-2.7,.15,ce.wall,me,(f+2.7)/2,X,{});for(let nt=re+2;nt<fe-.5;nt+=2)o.steelSpec({w:.07,h:1.7,d:.18,x:nt,y:1.85,z:X})}for(const[re,fe]of v){const me=(re+fe)/2;o.box(fe-re,f-3,.15,ce.wall,me,(f+3)/2,X,{}),o.sign(2.7,.6,me,2.62,X+(g==="south"?-.08:.08),g==="south"?Math.PI:0,()=>gt({widthPx:1152,heightPx:252,title:`Cloister → ${g==="south"?"north":"south"} side`,subtitle:"across the courtyard · shorter way round",titleSize:68}),`cloister:${g}:${Math.round(me)}`)}const ae=[];for(const re of e.wings)if(re.street===g)for(const fe of re.rootIds)ae.push({x:e.areas[fe].x,id:fe,wingKey:re.key});ae.sort((re,fe)=>re.x-fe.x);const G=g==="south"?I+.46:C-.46,ee=g==="south"?1:-1,pe=g==="south"?I+.075:C-.075,ve=(re,fe)=>{const me=fe-re,Le=(re+fe)/2;if(me>=12&&(o.chair(Le-.35,0,G,ee),o.chair(Le+.35,0,G,ee)),me>=9)for(const nt of[Le-3.2,Le+3.2]){const Ge=(Math.round(nt*7)>>>0)%997,it=n.length?n[Ge%n.length]:null;wn(o,it,Ge,nt,1.78,pe,ie,`street:${g}:${Math.round(nt)}`)}};let q=l;for(const re of ae){const fe=re.x-D.LOBBY_W/2,me=re.x+D.LOBBY_W/2;fe>q&&(o.box(fe-q,f,.15,ce.wall,(q+fe)/2,f/2,Y,{solid:!0,trim:[W]}),ve(q,fe)),o.box(D.LOBBY_W,f-D.ROOM_H,.15,ce.wall,re.x,(f+D.ROOM_H)/2,Y,{}),q=me}c>q&&(o.box(c-q,f,.15,ce.wall,(q+c)/2,f/2,Y,{solid:!0,trim:[W]}),ve(q,c));const J=g==="south"?I+.02:C-.02;ae.forEach(re=>{const fe=m.get(re.id),me=d.get(re.wingKey);o.sign(3.2,.7,re.x,D.ROOM_H+.45,J,ie,()=>gt({widthPx:1280,heightPx:280,title:me?.annex?fe?.label??"?":`${me?.label??"?"} wing`,subtitle:me?.annex?`${me.label} · ${fe?.roomNumber?`Room ${fe.roomNumber}`:""}`:`${me?.classCount??"?"} concepts · enter for ${fe?.label??"?"}`,titleSize:86}),`street:${fe?.label}`)}),o.box(.15,f,C-I+.3,ce.wall,c+.075,f/2,O,{solid:!0,trim:["x-"]}),g==="north"&&o.box(.15,f,C-I+.3,ce.wall,l-.075,f/2,O,{solid:!0,trim:["x+"]}),o.sign(3.4,.8,l+.4,2.7,O,-Math.PI/2,()=>gt({widthPx:1280,heightPx:300,title:"Hospital Street",subtitle:`${g} side · wings this way →`,titleSize:96}),`street-name:${g}`)};w("south"),w("north");const[A]=a.connectors.west,b=e.wings.filter(g=>g.street==="south").length;let P=0,B=0;for(const g of e.wings){if(g.street==="gallery")continue;const S=new mn({color:new Ke(ei(g.key))}),I=e.areas[g.rootIds[0]].x;if(g.street==="south"){const C=a.south.z0+.4+P*.24;P++,o.box(I-l,.012,.16,S,(l+I)/2,.012,C,{}),o.box(.16,.012,C-a.south.z0,S,I,.012,(a.south.z0+C)/2,{})}else{const C=A+.55+B*.62,O=a.south.z0+.4+(b+B)*.24,Y=a.north.z1-.4-B*.24;B++,o.box(C-l,.012,.16,S,(l+C)/2,.012,O,{}),o.box(.16,.012,Y-O,S,C,.012,(O+Y)/2,{}),o.box(I-C,.012,.16,S,(C+I)/2,.012,Y,{}),o.box(.16,.012,a.north.z1-Y,S,I,.012,(Y+a.north.z1)/2,{})}}for(const[g,S]of v){const I=(g+S)/2,C=x-p,O=(p+x)/2;o.box(S-g,.1,C,ce.floor,I,-.05,O,{walkable:!0,vinyl:!0}),o.box(S-g,.1,C,ce.ceiling,I,f+.05,O,{worldUV:!0});for(const Y of[g-.075,S+.075]){o.box(.15,1,C,ce.wall,Y,.5,O,{solid:!0,trim:[Y<I?"x+":"x-"]}),o.box(.08,1.7,C,E,Y,1.85,O,{solid:!0}),o.box(.15,f-2.7,C,ce.wall,Y,(f+2.7)/2,O,{});for(let X=p+2;X<x-.5;X+=2)o.steelSpec({w:.18,h:1.7,d:.07,x:Y,y:1.85,z:X})}for(let Y=p+2;Y<x-1;Y+=4)o.led(I,Y,f-.02,.35,1.3)}return o.box(c-2,.06,x-p-.4,T,(2+c)/2,-.09,(p+x)/2,{}),x-.2>38&&o.box(32,.06,x-.2-38,T,-14,-.09,(38+x-.2)/2,{}),o.populate(r,4211),o.finalize(),{id:Go,wc:null,label:"Hospital Street",group:s,colliders:o.colliders,walkables:o.walkables,interactables:[],spawnPos:new F(l+3,0,(a.south.z0+a.south.z1)/2),spawnYaw:-Math.PI/2,boxes:[new bt(new F(l-.3,-.5,a.south.z0-.2),new F(c+.3,2.5,a.south.z1+.3)),new bt(new F(l-.3,-.5,a.north.z0-.3),new F(c+.3,2.5,a.north.z1+.2)),...v.map(([g,S])=>new bt(new F(g-.2,-.5,p),new F(S+.2,2.5,x)))]}}const hr="__gallery";function Km(i,e,t,n,r){const s=new bn;s.name="area:gallery";const o=new Mr(s,new F(0,0,0),t),a=e.loop.gallery,l=a.x0,c=a.x1,u=(l+c)/2,h=a.z0,f=a.z1,p=(h+f)/2,x=D.STREET_H,[v,m]=a.entrance,d=new Map(i.classes.map(g=>[g.id,g])),E=new Map(i.wings.map(g=>[g.key,g]));o.box(c-l,.1,f-h,ce.floor,u,-.05,p,{walkable:!0,vinyl:!0}),o.box(c-l,.1,f-h,ce.ceiling,u,x+.05,p,{worldUV:!0});for(let g=l+2;g<c-1;g+=4)o.led(g,h+1.3,x-.02,.35,1.3),o.led(g,f-1.3,x-.02,.35,1.3);o.box(c-l,1,.15,ce.wall,u,.5,f+.075,{solid:!0,trim:["z-"]}),o.box(c-l,1.7,.08,ce.daylight,u,1.85,f+.075,{solid:!0}),o.box(c-l,x-2.7,.15,ce.wall,u,(x+2.7)/2,f+.075,{});for(let g=l+2;g<c-.5;g+=2)o.steelSpec({w:.07,h:1.7,d:.18,x:g,y:1.85,z:f+.075});o.box(.15,x,f-h+.3,ce.wall,l-.075,x/2,p,{solid:!0,trim:["x+"]}),o.box(.15,x,f-h+.3,ce.wall,c+.075,x/2,p,{solid:!0,trim:["x-"]});const T=[],w=[];for(const g of e.wings)if(g.street==="gallery")for(const S of g.rootIds)w.push({x:e.areas[S].x,id:S,wingKey:g.key}),T.push([e.areas[S].x-D.LOBBY_W/2,e.areas[S].x+D.LOBBY_W/2]);T.push([v,m]),T.sort((g,S)=>g[0]-S[0]);let A=l;for(const[g,S]of T){if(g>A){const I=g-A;if(o.box(I,x,.15,ce.wall,(A+g)/2,x/2,h-.075,{solid:!0,trim:["z+"]}),I>=9){const C=(A+g)/2;o.chair(C-.35,0,h+.46,1),o.chair(C+.35,0,h+.46,1);const O=(Math.round(C*7)>>>0)%997;wn(o,n.length?n[O%n.length]:null,O,C-3.2,1.78,h+.075,0,`gallery:${Math.round(C)}`)}}A=Math.max(A,S)}c>A&&o.box(c-A,x,.15,ce.wall,(A+c)/2,x/2,h-.075,{solid:!0,trim:["z+"]});for(const g of w)o.box(D.LOBBY_W,x-D.ROOM_H,.15,ce.wall,g.x,(x+D.ROOM_H)/2,h-.075,{});o.box(m-v,x-3,.15,ce.wall,(v+m)/2,(x+3)/2,h-.075,{}),w.forEach(g=>{const S=d.get(g.id),I=E.get(g.wingKey);o.sign(3.2,.7,g.x,D.ROOM_H+.45,h+.02,0,()=>gt({widthPx:1280,heightPx:280,title:I?.label??"?",subtitle:`${I?.classCount??"?"} concepts · enter for ${S?.label??"?"}`,titleSize:86}),`gallery:${S?.label}`)}),o.sign(3.4,.8,c-.4,2.7,p,Math.PI/2,()=>gt({widthPx:1280,heightPx:300,title:"Reference Gallery",subtitle:"clause 3.1 definitions · resources annex",titleSize:92}),"gallery-name");const b=21.2;o.box(m-v,.1,h-b,ce.floor,(v+m)/2,-.05,(b+h)/2,{walkable:!0,vinyl:!0}),o.box(m-v,.1,h-b,ce.ceiling,(v+m)/2,3.05,(b+h)/2,{worldUV:!0});for(const g of[v-.075,m+.075])o.box(.15,3,h-b,ce.wall,g,1.5,(b+h)/2,{solid:!0,trim:[g<(v+m)/2?"x+":"x-"]});for(let g=b+2;g<h-1;g+=4)o.led((v+m)/2,g,2.98);const P=19.2,B=21.2;return o.box(-24-v,.1,B-P,ce.floor,(v+-24)/2,-.05,(P+B)/2,{walkable:!0,vinyl:!0}),o.box(-24-v,.1,B-P,ce.ceiling,(v+-24)/2,3.05,(P+B)/2,{worldUV:!0}),o.box(-24-v+.15,3,.15,ce.wall,(v+-24)/2-.05,1.5,P-.075,{solid:!0,trim:["z+"]}),o.box(-24-m,3,.15,ce.wall,(m+-24)/2,1.5,B+.075,{solid:!0,trim:["z-"]}),o.box(.15,3,B-P+.3,ce.wall,v-.075,1.5,(P+B)/2,{solid:!0,trim:["x+"]}),o.led((v-24)/2,(P+B)/2,2.98),o.sign(1.9,.5,(v+m)/2,2.55,b+.09,0,()=>gt({widthPx:960,heightPx:250,title:"↑ Reference Gallery",subtitle:"clause 3.1 definitions · resources annex",titleSize:64}),"gallery-way"),o.populate(r,7877),o.finalize(),{id:hr,wc:null,label:"Reference Gallery",group:s,colliders:o.colliders,walkables:o.walkables,interactables:[],spawnPos:new F(c-2,0,p),spawnYaw:Math.PI/2,boxes:[new bt(new F(l-.3,-.5,h-.2),new F(c+.3,2.5,f+.3)),new bt(new F(v-.3,-.5,b),new F(m+.3,2.5,h)),new bt(new F(v-.3,-.5,P-.2),new F(-23.8,2.5,B+.2))]}}const En=1920,Bi=1080;function jm(i,e,t,n){i.fillStyle=Ki,i.fillRect(0,0,En,Bi),i.fillStyle="#ffffff",i.textAlign="center",i.font="bold 118px Arial",i.fillText(e,En/2,470),i.font="54px Arial",i.globalAlpha=.92,i.fillText(t,En/2,580),i.font="34px Arial",i.globalAlpha=.7,i.fillText(n,En/2,990),i.globalAlpha=1}function pl(i,e,t){i.fillStyle="#f4f6f7",i.fillRect(0,0,En,Bi),i.fillStyle=Ki,i.fillRect(0,0,En,190),i.fillStyle="#ffffff",i.textAlign="left",i.font="bold 78px Arial",i.fillText(e,110,128),i.fillStyle="#16212a",i.font="46px Arial",t.forEach((n,r)=>i.fillText(n,110,330+r*105))}function Jm(){return[{kind:"builtin",draw:i=>jm(i,"Postgraduate Medical Centre","Lecture Theatre · White Rose General Hospital","a walkable model of the continuity-of-care concept system")},{kind:"builtin",draw:i=>pl(i,"Bring your own slides",["1.  Export your deck as PNG or JPG images (1920 × 1080 works best).","2.  Copy them into the site’s  slides/  folder.","3.  List them in order in  slides/manifest.json :",'         ["01.png", "02.png", "03.png"]',"4.  Video clips (.mp4, .webm) can be listed too — they play here.","5.  Redeploy. This screen then presents your deck."])},{kind:"builtin",draw:i=>pl(i,"Presenting & filming",["← →  or  PageUp / PageDown change slides — presenter clickers work.","Tap or click the screen: right side = next, left side = back.","H  hides the whole interface for a clean recording.","L  dims the house lights.","Add  ?start=theatre  to the address to begin at the lectern.","B  returns to your last stop when you’re done."])}]}class Qm{entries=[];index=0;cache=new Map;video=null;videoTex=null;mat;constructor(e){this.mat=e.material}get count(){return this.entries.length}get label(){return`Slide ${this.index+1} / ${this.entries.length}`}async load(){try{const e=await fetch("slides/manifest.json");if(e.ok){const t=await e.json(),n=Array.isArray(t)?t:t?.slides??[];this.entries=n.map(r=>({kind:/\.(mp4|webm|mov)$/i.test(r)?"video":"image",src:`slides/${r}`}))}}catch{}this.entries.length||(this.entries=Jm()),this.show(0)}next(){this.show(Math.min(this.index+1,this.entries.length-1))}prev(){this.show(Math.max(this.index-1,0))}redraw(){this.show(this.index)}show(e){if(!this.entries.length)return;this.index=e;const t=this.entries[e];t.kind==="video"?this.mat.map=this.playVideo(t.src):(this.video?.pause(),this.mat.map=this.texture(e),this.entries[e+1]?.kind==="image"&&this.texture(e+1),this.entries[e-1]?.kind==="image"&&this.texture(e-1)),this.mat.needsUpdate=!0}texture(e){const t=this.cache.get(e);if(t)return t;const n=document.createElement("canvas");n.width=En,n.height=Bi;const r=n.getContext("2d");r.fillStyle="#0d1114",r.fillRect(0,0,En,Bi);const s=new Pn(n);s.colorSpace=St,s.generateMipmaps=!1,s.minFilter=At;const o=this.entries[e];if(o.kind==="builtin")o.draw(r),s.needsUpdate=!0;else if(o.kind==="image"){const a=new Image;a.onload=()=>{const l=Math.min(En/a.width,Bi/a.height),c=a.width*l,u=a.height*l;r.drawImage(a,(En-c)/2,(Bi-u)/2,c,u),s.needsUpdate=!0},a.src=o.src}return this.cache.set(e,s),s}playVideo(e){this.video||(this.video=document.createElement("video"),this.video.playsInline=!0,this.videoTex=new xh(this.video),this.videoTex.colorSpace=St,this.videoTex.generateMipmaps=!1,this.videoTex.minFilter=At);const t=this.video;return t.src.endsWith(e)||(t.src=e),t.currentTime=0,t.muted=!1,t.play().catch(()=>{t.muted=!0,t.play().catch(()=>{})}),this.videoTex}}const ml=new F,e0=new xi,gl=new F;class t0 extends Nt{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const _n=new vt,n0=new vt;class i0{constructor(e={}){const t=this;let n,r,s,o;const a={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);const u=document.createElement("div");u.style.transformStyle="preserve-3d",c.appendChild(u),this.getSize=function(){return{width:n,height:r}},this.render=function(m,d){const E=d.projectionMatrix.elements[5]*o;d.view&&d.view.enabled?(c.style.transform=`translate( ${-d.view.offsetX*(n/d.view.width)}px, ${-d.view.offsetY*(r/d.view.height)}px )`,c.style.transform+=`scale( ${d.view.fullWidth/d.view.width}, ${d.view.fullHeight/d.view.height} )`):c.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),d.parent===null&&d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld();let T,w;d.isOrthographicCamera&&(T=-(d.right+d.left)/2,w=(d.top+d.bottom)/2);const A=d.view&&d.view.enabled?d.view.height/d.view.fullHeight:1,b=d.isOrthographicCamera?`scale( ${A} )scale(`+E+")translate("+h(T)+"px,"+h(w)+"px)"+f(d.matrixWorldInverse):`scale( ${A} )translateZ(`+E+"px)"+f(d.matrixWorldInverse),B=(d.isPerspectiveCamera?"perspective("+E+"px) ":"")+b+"translate("+s+"px,"+o+"px)";a.camera.style!==B&&(u.style.transform=B,a.camera.style=B),v(m,m,d)},this.setSize=function(m,d){n=m,r=d,s=n/2,o=r/2,l.style.width=m+"px",l.style.height=d+"px",c.style.width=m+"px",c.style.height=d+"px",u.style.width=m+"px",u.style.height=d+"px"};function h(m){return Math.abs(m)<1e-10?0:m}function f(m){const d=m.elements;return"matrix3d("+h(d[0])+","+h(-d[1])+","+h(d[2])+","+h(d[3])+","+h(d[4])+","+h(-d[5])+","+h(d[6])+","+h(d[7])+","+h(d[8])+","+h(-d[9])+","+h(d[10])+","+h(d[11])+","+h(d[12])+","+h(-d[13])+","+h(d[14])+","+h(d[15])+")"}function p(m){const d=m.elements;return"translate(-50%,-50%)"+("matrix3d("+h(d[0])+","+h(d[1])+","+h(d[2])+","+h(d[3])+","+h(-d[4])+","+h(-d[5])+","+h(-d[6])+","+h(-d[7])+","+h(d[8])+","+h(d[9])+","+h(d[10])+","+h(d[11])+","+h(d[12])+","+h(d[13])+","+h(d[14])+","+h(d[15])+")")}function x(m){m.isCSS3DObject&&(m.element.style.display="none");for(let d=0,E=m.children.length;d<E;d++)x(m.children[d])}function v(m,d,E,T){if(m.visible===!1){x(m);return}if(m.isCSS3DObject){const w=m.layers.test(E.layers)===!0,A=m.element;if(A.style.display=w===!0?"":"none",w===!0){m.onBeforeRender(t,d,E);let b;m.isCSS3DSprite?(_n.copy(E.matrixWorldInverse),_n.transpose(),m.rotation2D!==0&&_n.multiply(n0.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(ml,e0,gl),_n.setPosition(ml),_n.scale(gl),_n.elements[3]=0,_n.elements[7]=0,_n.elements[11]=0,_n.elements[15]=1,b=p(_n)):b=p(m.matrixWorld);const P=a.objects.get(m);if(P===void 0||P.style!==b){A.style.transform=b;const B={style:b};a.objects.set(m,B)}A.parentNode!==u&&u.appendChild(A),m.onAfterRender(t,d,E)}}for(let w=0,A=m.children.length;w<A;w++)v(m.children[w],d,E)}}}const r0="https://contsys.org";function ts(i){return i.trim().toLowerCase().replace(/\s+/g,"_")}function _l(i){return`${r0}/concept/${encodeURIComponent(ts(i))}`}function Gr(i){return i.trim().toLowerCase().replace(/[_-]+/g," ").replace(/\s+/g," ")}const ks=1280,xl=720;function s0(){return location.pathname.startsWith("/hospital/")||location.hostname.endsWith("contsys.org")?"":"https://contsys.org"}class o0{cssScene=new Zl;cssRenderer=new i0;iframe;object;screen;placed=!1;panelPos=new F;panelNormal=new F;savedMap=null;savedColor=new Ke(16777215);mounted=!1;_visible=!1;lastSlug="care_plan";constructor(e,t){this.screen=t;const n=this.cssRenderer.domElement;n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.pointerEvents="none",n.style.display="none",e.appendChild(n),this.iframe=document.createElement("iframe"),this.iframe.style.width=`${ks}px`,this.iframe.style.height=`${xl}px`,this.iframe.style.border="0",this.iframe.style.background="#fff",this.iframe.style.backfaceVisibility="hidden",this.iframe.style.pointerEvents="auto",this.iframe.title="ContSys reference — live concept page",this.object=new t0(this.iframe);const r=6/ks;this.object.scale.set(r,r,r),this.cssScene.add(this.object),this.resize()}place(){this.screen.getWorldPosition(this.panelPos);const e=this.screen.getWorldQuaternion(new xi);this.panelNormal.set(0,0,1).applyQuaternion(e),this.panelPos.addScaledVector(this.panelNormal,.01),this.object.position.copy(this.panelPos),this.object.quaternion.copy(e),this.placed=!0}get visible(){return this._visible}get slug(){return this.lastSlug}show(e){const t=ts(e??this.lastSlug);this.lastSlug=t;const n=`${s0()}/concept/${encodeURIComponent(t)}?embed=1`;if(this.iframe.getAttribute("src")!==n&&this.iframe.setAttribute("src",n),!this._visible){const r=this.screen.material;this.savedMap=r.map,this.savedColor.copy(r.color),r.map=null,r.color.setHex(658704),r.needsUpdate=!0,this._visible=!0}}hide(){if(!this._visible)return;const e=this.screen.material;e.map=this.savedMap,e.color.copy(this.savedColor),e.needsUpdate=!0,this._visible=!1}update(e,t){this.placed||this.place();const n=this._visible&&t&&e.position.clone().sub(this.panelPos).dot(this.panelNormal)>0;n!==this.mounted&&(this.cssRenderer.domElement.style.display=n?"":"none",this.mounted=n),this.mounted&&this.cssRenderer.render(this.cssScene,e)}resize(){this.cssRenderer.setSize(innerWidth,innerHeight)}scrollBy(e){try{const t=this.iframe.contentWindow;return!t||!this.iframe.contentDocument?!1:(t.scrollBy({top:e,behavior:"smooth"}),!0)}catch{return!1}}clickAt(e,t){try{const n=this.iframe.contentDocument;if(!n)return!1;const r=e*ks,s=(1-t)*xl,o=n.elementFromPoint(r,s);return o?(o.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,clientX:r,clientY:s,view:n.defaultView})),!0):!1}catch{return!1}}}const Ui=new on(0,0,0,"YXZ"),Ni=new F,a0={type:"change"},l0={type:"lock"},c0={type:"unlock"},vl=.002,Ml=Math.PI/2;class h0 extends Lh{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=u0.bind(this),this._onPointerlockChange=d0.bind(this),this._onPointerlockError=f0.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;Ni.setFromMatrixColumn(t.matrix,0),Ni.crossVectors(t.up,Ni),t.position.addScaledVector(Ni,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;Ni.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(Ni,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function u0(i){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;Ui.setFromQuaternion(e.quaternion),Ui.y-=i.movementX*vl*this.pointerSpeed,Ui.x-=i.movementY*vl*this.pointerSpeed,Ui.x=Math.max(Ml-this.maxPolarAngle,Math.min(Ml-this.minPolarAngle,Ui.x)),e.quaternion.setFromEuler(Ui),this.dispatchEvent(a0)}function d0(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(l0),this.isLocked=!0):(this.dispatchEvent(c0),this.isLocked=!1)}function f0(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const ci=1.7,Hr=.3,p0=4.2,m0=8.5,g0=.5,_0=7;class x0{camera;controls;keys=new Set;colliders=[];walkables=[];touch={f:0,s:0};constructor(e){this.camera=new rn(70,innerWidth/innerHeight,.05,160),this.camera.position.set(0,ci,0),this.camera.rotation.order="YXZ",this.controls=new h0(this.camera,e),addEventListener("keydown",t=>this.keys.add(t.code)),addEventListener("keyup",t=>this.keys.delete(t.code)),addEventListener("blur",()=>this.keys.clear())}setTouchMove(e,t){this.touch.f=e,this.touch.s=t}enableDragLook(e){let t=!1,n=0,r=0;e.addEventListener("pointerdown",s=>{this.controls.isLocked||(t=!0,n=s.clientX,r=s.clientY,e.setPointerCapture(s.pointerId))}),e.addEventListener("pointermove",s=>{if(!t||this.controls.isLocked)return;const o=this.camera.rotation;o.y-=(s.clientX-n)*.0042,o.x=Math.max(-1.45,Math.min(1.45,o.x-(s.clientY-r)*.0042)),n=s.clientX,r=s.clientY});for(const s of["pointerup","pointercancel"])e.addEventListener(s,()=>t=!1)}dash(e=12){const t=this.camera.rotation.y,n=-Math.sin(t),r=-Math.cos(t),s=this.camera.position;let o=0;for(let a=0;a<Math.ceil(e/.4);a++){const l=this.feetY,c=s.x+n*.4,u=s.z+r*.4;if(this.collides(c,u,l))break;const h=this.groundAt(c,u,l);if(h===-1/0)break;s.x=c,s.z=u,s.y=h+ci,o+=.4}return o}setColliders(e){this.colliders=e}setWalkables(e){this.walkables=e}get position(){return this.camera.position}get feetY(){return this.camera.position.y-ci}get floorPosition(){return new F(this.camera.position.x,this.feetY,this.camera.position.z)}teleport(e,t){this.camera.position.set(e.x,(e.y??0)+ci,e.z),this.camera.rotation.set(0,t,0)}groundAt(e,t,n){let r=-1/0;for(const s of this.walkables){if(e<s.min.x-.05||e>s.max.x+.05||t<s.min.z-.05||t>s.max.z+.05)continue;const o=s.max.y;o<=n+g0&&o>r&&(r=o)}return r}collides(e,t,n){const r=new bt(new F(e-Hr,n+.25,t-Hr),new F(e+Hr,n+1.75,t+Hr));return this.colliders.some(s=>s.intersectsBox(r))}snapGround(){const e=this.camera.position,t=this.groundAt(e.x,e.z,this.feetY+.01);t>-1/0&&(e.y=t+ci)}update(e){const t=this.camera.position,n=this.feetY,r=Number(this.keys.has("KeyW"))-Number(this.keys.has("KeyS"))+this.touch.f,s=Number(this.keys.has("KeyD"))-Number(this.keys.has("KeyA"))+this.touch.s;if(r||s){const a=Math.min(1,Math.hypot(r,s)),c=(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||a>.92?m0:p0)*a,u=this.camera.rotation.y,h=-Math.sin(u)*r+Math.cos(u)*s,f=-Math.cos(u)*r-Math.sin(u)*s,p=Math.hypot(h,f)||1,x=h/p*c*e,v=f/p*c*e;this.collides(t.x+x,t.z,n)||(t.x+=x),this.collides(t.x,t.z+v,n)||(t.z+=v)}const o=this.groundAt(t.x,t.z,n);o>-1/0&&(o>=n?t.y=o+ci:t.y=Math.max(o,n-_0*e)+ci)}}let On=null,ns=!1;const Fn=()=>ns;function v0(){return On||(On=document.createElement("div"),On.id="menu-root",document.body.appendChild(On),On)}function M0(){!On||!ns||(ns=!1,On.replaceChildren(),On.style.display="none")}function Sl(i,e,t,n){const r=v0();r.replaceChildren(),r.style.display="flex",ns=!0;const s=document.createElement("div");s.className="menu-panel";const o=document.createElement("div");o.className="menu-head",o.innerHTML='<div class="menu-title"></div><div class="menu-sub"></div>',o.querySelector(".menu-title").textContent=i,o.querySelector(".menu-sub").textContent=e,s.appendChild(o);let a=null;n.searchable&&(a=document.createElement("input"),a.className="menu-filter",a.placeholder="Type to search…",s.appendChild(a));const l=document.createElement("div");l.className="menu-list",s.appendChild(l);const c=document.createElement("div");c.className="menu-foot",c.textContent="↑↓ choose · Enter go · Esc close",s.appendChild(c),r.appendChild(s);let u=[],h=0;const f=m=>{removeEventListener("keydown",v,!0),M0(),m!==null?n.onPick(m):n.onClose?.()},p=()=>{const m=a?.value.trim().toLowerCase()??"";u=t.filter(d=>!m||`${d.label} ${d.sub??""}`.toLowerCase().includes(m)),h=Math.min(h,Math.max(0,u.length-1)),l.replaceChildren(...u.map((d,E)=>{const T=document.createElement("div");T.className="menu-item"+(d.value===null?" info":"")+(d.strong?" strong":"")+(E===h&&d.value!==null?" active":""),d.chip&&(T.style.borderLeftColor=d.chip);const w=document.createElement("span");if(w.textContent=d.label,T.appendChild(w),d.sub){const A=document.createElement("span");A.className="menu-item-sub",A.textContent=d.sub,T.appendChild(A)}return d.value!==null&&(T.addEventListener("click",()=>f(d.value)),T.addEventListener("mousemove",()=>{h!==E&&(h=E,p())})),T})),l.querySelector(".active")?.scrollIntoView({block:"nearest"})},x=m=>{if(!u.length)return;let d=h;for(let E=0;E<u.length&&(d=(d+m+u.length)%u.length,u[d].value===null);E++);h=d,p()},v=m=>{if(m.code==="Escape")m.preventDefault(),m.stopPropagation(),f(null);else if(m.code==="ArrowDown")m.preventDefault(),x(1);else if(m.code==="ArrowUp")m.preventDefault(),x(-1);else if(m.code==="Enter"){m.preventDefault();const d=u[h];d&&d.value!==null&&f(d.value)}else a&&requestAnimationFrame(p)};addEventListener("keydown",v,!0),a?.addEventListener("input",()=>{h=0,p()}),p(),h=Math.max(0,u.findIndex(m=>m.value!==null)),p(),a?.focus()}const S0=700,bl=document.getElementById("app"),ui=document.getElementById("start"),dr=document.getElementById("fade"),Gs=document.getElementById("toast"),Fi=document.getElementById("prompt"),b0=document.getElementById("area-sign"),E0=document.querySelector("#area-sign .label"),y0=document.querySelector("#area-sign .room");let El=0;function wt(i){Gs.textContent=i,Gs.style.opacity="1",clearTimeout(El),El=window.setTimeout(()=>Gs.style.opacity="0",2200)}function Oi(){dr.style.opacity="1",setTimeout(()=>dr.style.opacity="0",160)}async function T0(){const i=await fetch("world.json").then(R=>{if(!R.ok)throw new Error(`world.json ${R.status} — run \`npm run world\` first`);return R.json()}),e=new Map(i.classes.map(R=>[R.id,R])),t=new Map(i.classes.map(R=>[R.label,R])),n=new Map(i.wings.map(R=>[R.key,R.annex?R.label:`${R.label} wing`])),r=Vm(i),s=await fetch("art/manifest.json").then(R=>R.ok?R.json():[]).catch(()=>[]),o=await fetch("art/illustrations/manifest.json").then(R=>R.ok?R.json():null).then(R=>R?new Set(R.map(Z=>Z.slug)):null).catch(()=>null),a=navigator.maxTouchPoints>0&&Math.min(screen.width,screen.height)<=500,l=new URLSearchParams(location.search).get("people"),c=l==="off"||l==="low"||l==="full"?l:a?"low":"full",u=matchMedia("(prefers-reduced-motion: reduce)").matches,h=new Zl;h.background=new Ke(6055792),h.fog=a?new Jr(6055792,42,120):new Jr(6055792,55,150),h.add(new yh(16777215,12172994,1)),h.add(new Rh(16777215,.38));const f=new Ah(16777215,.4);f.position.set(3,8,2),h.add(f);let p;try{p=new Cm({antialias:!a})}catch{throw new Error("3D graphics (WebGL) could not start in this browser. On iPhone/iPad, Lockdown Mode blocks WebGL — allow this site under Settings → Privacy & Security → Lockdown Mode → Configure Web Browsing, or try another device.")}p.setSize(innerWidth,innerHeight),p.setPixelRatio(Math.min(devicePixelRatio,a?1.5:2)),p.domElement.style.touchAction="none",p.domElement.style.userSelect="none",bl.appendChild(p.domElement);const x=new Lm,v=new Map,m={byId:e,signs:x,layout:r,art:s,illustrations:o,people:c},d=qm(i,x,s,c);v.set(d.id,d);const E=Zm(i,r,x,s,c);v.set(E.id,E);const T=Ym(x,s,c);v.set(T.id,T);const w=Km(i,r,x,s,c);v.set(w.id,w);const A=new Qm(T.screen);A.load();const b=new o0(bl,T.screen);for(const R of i.classes){const Z=r.areas[R.id],j=Xm(R,m,new F(Z.x,Z.y,Z.oz));v.set(j.id,j)}for(const R of v.values())h.add(R.group);const P=[...v.values()].flatMap(R=>R.colliders),B=[...v.values()].flatMap(R=>R.walkables),g=[...v.values()].flatMap(R=>R.interactables),S=new Map;for(const R of g)if(R.elementId){const Z=S.get(R.elementId)??[];Z.push(R),S.set(R.elementId,Z)}function I(R){if(R.kind!=="door-self")return S.get(R.elementId)?.find(Z=>Z!==R)}const C=new x0(p.domElement);C.setColliders(P),C.setWalkables(B),C.teleport(d.spawnPos,d.spawnYaw),h.add(C.camera),a&&(C.camera.far=130,C.camera.updateProjectionMatrix());const O=[];if(c!=="off"&&!u){const R=vr(20260703),Z=(_e,he,ke)=>{const Ve=new km(he,ke,1+Math.floor(R()*99991));h.add(Ve.group),O.push({w:Ve,owner:_e})},j=c==="full"?7:3;for(let _e=0;_e<j;_e++){const he=4+(r.street.x1-70)*_e/Math.max(1,j-1),ke=_e%2?r.loop.north.z0+2:9;Z(E,new F(he,0,ke),new F(Math.min(he+55,r.street.x1-4),0,ke))}if(c==="full"){let _e=0;for(const[ke,Ve]of Object.entries(r.landings)){if(Ve.x1-Ve.x0<18||_e>=12)continue;const Mt=v.get(ke);if(!Mt)continue;const Lt=Ve.mirror?r.loop.K-8.5:8.5+(Ve.dz??0);Z(Mt,new F(Ve.x0+1.2,Ve.y,Lt),new F(Ve.x1-1.2,Ve.y,Lt)),_e++}let he=0;for(const ke of i.classes){const Ve=r.areas[ke.id];if(Ve.corridorLen<24||he>=8)continue;const Mt=v.get(ke.id);if(!Mt)continue;const Lt=Ve.oz+(Ve.flip?.8:-.8),ln=Ve.oz+(Ve.flip?Ve.corridorLen-2:-(Ve.corridorLen-2));Z(Mt,new F(Ve.x,Ve.y,Lt),new F(Ve.x,Ve.y,ln)),he++}}}const Y=a?140:175;function X(){const R=C.position,Z=C.floorPosition.y;for(const j of v.values()){let _e=1/0;for(const ke of j.boxes)_e=Math.min(_e,ke.distanceToPoint(R));const he=j.wc?r.areas[j.wc.id].y:0;j.group.visible=_e<Y&&(Math.abs(he-Z)<D.STOREY/2||_e<30)}}X();let W=d;function V(R){W=R;const Z=R.wc;E0.textContent=R.label,y0.textContent=Z?[Z.roomNumber?`Room ${Z.roomNumber}`:null,`${n.get(Z.wing)??Z.wing} · ${Z.floor?`level −${Z.floor}`:"ground"}`].filter(Boolean).join(" · "):i.meta.label,b0.style.borderLeft=`8px solid ${Z?ei(Z.wing):"#ffffff"}`}V(d),new URLSearchParams(location.search).get("start")==="theatre"&&(C.teleport(T.lecternPos,T.lecternYaw),V(T)),new URLSearchParams(location.search).get("present")==="1"&&document.body.classList.add("filming");{const R=new URLSearchParams(location.search).get("concept"),Z=R?Gr(R):void 0;if(Z){const j=i.classes.find(he=>Gr(he.label)===Z),_e=j&&v.get(j.id);_e?(C.teleport(_e.spawnPos,_e.spawnYaw),V(_e),X()):wt(`No concept called “${Z}” — press M for the porter`)}}{const R=new URLSearchParams(location.search).get("screen");if(R){const Z=i.classes.find(j=>Gr(j.label)===Gr(R));if(b.show(Z?Z.label:R),W.id===Qt){const j=T.screen.getWorldPosition(new F),_e=T.viewPos;C.teleport(_e,Math.atan2(-(j.x-_e.x),-(j.z-_e.z)))}}}let ie=!1;function k(R){const Z=W.lift;Z&&(ie||(Z.doors.target=C.floorPosition.distanceTo(Z.doorwayPos)<2.1?1:0),Z.doors.update(R))}let H=null;const ae=()=>{if(!H)try{H=new AudioContext}catch{}};addEventListener("pointerdown",ae,{once:!0}),addEventListener("keydown",ae,{once:!0});function G(){if(!H)return;const R=H.currentTime+.05;for(const[Z,j]of[[1318.5,0],[1046.5,.14]]){const _e=H.createOscillator(),he=H.createGain();_e.type="sine",_e.frequency.value=Z,he.gain.setValueAtTime(1e-4,R+j),he.gain.linearRampToValueAtTime(.045,R+j+.015),he.gain.exponentialRampToValueAtTime(1e-4,R+j+.55),_e.connect(he).connect(H.destination),_e.start(R+j),_e.stop(R+j+.6)}}const ee=R=>(R.max.x-R.min.x)*(R.max.y-R.min.y)*(R.max.z-R.min.z);function pe(R){let Z,j=1/0;for(const _e of v.values())for(const he of _e.boxes)he.containsPoint(R)&&ee(he)<j&&(Z=_e,j=ee(he));return Z}const ve=navigator.maxTouchPoints>0||"ontouchstart"in window||matchMedia("(pointer: coarse)").matches,q=matchMedia("(pointer: coarse)").matches;if(ve){document.body.classList.add("touch");const R=ui.querySelector(".badge"),Z=ui.querySelector("p");R&&(R.textContent=q?"Tap to enter":"Click or tap to enter"),Z&&(Z.textContent="Left pad or WASD to walk · drag to look · ⏩ jumps ahead · ℹ reads · ⌖ porter · double-click captures the mouse")}ui.addEventListener("pointerup",R=>{ve||R.pointerType==="touch"?ui.style.display="none":C.controls.lock()}),p.domElement.addEventListener("dblclick",()=>C.controls.lock()),C.controls.addEventListener("lock",()=>ui.style.display="none"),C.controls.addEventListener("unlock",()=>{if(!(Fn()||Ce)){if(b.visible&&W.id===Qt){wt("Reading — click links, scroll the page · double-click the room to walk again");return}ui.style.display="flex"}});let J=0;const re=[];function fe(){const R=C.floorPosition;re.push({x:R.x,y:R.y,z:R.z,yaw:C.camera.rotation.y,areaId:W.id}),re.length>60&&re.shift()}function me(){if(Fn()||Ce||ie)return;const R=re.pop();if(!R){wt("No earlier stop to go back to");return}const Z=v.get(R.areaId);C.teleport({x:R.x,y:R.y,z:R.z},R.yaw),Z&&V(Z),ue=He(C.floorPosition),X(),Oi(),wt(`Back → ${Z?.label??"previous stop"}`),J=performance.now()}function Le(R,Z){const j=v.get(R);j&&(fe(),C.teleport(j.spawnPos,j.spawnYaw),V(j),ue=He(C.floorPosition),X(),Oi(),Z&&wt(Z),J=performance.now())}function nt(R,Z){R?.lift?(ie=!0,R.lift.doors.target=0,setTimeout(()=>{ie=!1,C.floorPosition.distanceTo(R.lift.doorwayPos)<1.7?Ge(Z):wt("The lift left without you")},650)):Ge(Z)}function Ge(R){const Z=v.get(R);Z&&(Z.liftPos?(fe(),C.teleport(Z.liftPos,Z.liftYaw??0),V(Z),ue=He(C.floorPosition),X(),Oi(),wt(`Lift → ${Z.label}`),J=performance.now(),G()):Le(R,`Lift → ${Z.label}`))}function it(R){const Z=R.targetIds[0],j=v.get(Z);if(j){if(fe(),R.kind==="door-self")C.teleport(j.spawnPos,j.spawnYaw),wt(`${R.label} — back where you started (a pig's ear)`);else{const _e=I(R);_e?.exitPos?C.teleport(_e.exitPos,_e.exitYaw??0):C.teleport(j.spawnPos,j.spawnYaw),wt(`${R.label} → ${j.label}`)}V(j),ue=He(C.floorPosition),X(),Oi(),J=performance.now()}}const se=(R,Z="")=>{const j=e.get(R);return{label:`${Z}${j?.label??R}`,sub:j?[j.roomNumber,`${n.get(j.wing)??j.wing} · ${j.floor?`level −${j.floor}`:"ground"}`].filter(Boolean).join(" · "):void 0,chip:j?ei(j.wing):void 0,value:R}};function xe(R){const Z=e.get(R.areaId),j=C.controls.isLocked;j&&C.controls.unlock();const _e=ke=>{j&&C.controls.lock(),ke?.()},he=[];if(Z){const ke=ko(Z,e).sort((Ve,Mt)=>Mt.level-Ve.level);he.push(...ke.map(Ve=>se(Ve.id,`▲${Ve.level}  `))),he.push({label:`●  ${Z.label}`,sub:"you are here",strong:!0,value:null}),he.push(...Z.subs.map(Ve=>se(Ve,"▼1  ")))}he.push({label:"⌂  Reception",sub:"ground floor",value:dn}),Sl("Lift",Z?.label??"",he,{onPick:ke=>_e(()=>nt(v.get(R.areaId),ke)),onClose:()=>_e()})}function Te(){const R=C.controls.isLocked;R&&C.controls.unlock();const Z=[...i.classes].sort((j,_e)=>j.label.localeCompare(_e.label)).map(j=>se(j.id));Z.unshift({label:"⌂  Reception",sub:"the atrium",value:dn},{label:"▤  Postgraduate Medical Centre",sub:"lecture theatre",value:Qt}),Sl("Porter service","where would you like to go?",Z,{searchable:!0,onPick:j=>{R&&C.controls.lock(),Le(j,`Porter → ${v.get(j)?.label}`)},onClose:()=>{R&&C.controls.lock()}})}const L=document.getElementById("reader"),et=L.querySelector("h2"),qe=L.querySelector("header .meta"),ot=L.querySelector(".reader-body");let Ce=!1,y=!1;const _=R=>R.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function N(){Ce=!1,L.style.display="none",y&&C.controls.lock()}function ne(){const R=W.wc;et.textContent=W.label,qe.textContent=R?[R.roomNumber?`Room ${R.roomNumber}`:null,`${n.get(R.wing)??R.wing}`,R.floor?`level −${R.floor}`:"ground"].filter(Boolean).join(" · "):i.meta.label;let Z="";if(!R)Z=W.id===dn?`<p>Reception for White Rose General Hospital, home of the ContSys model — a walkable model of ${_(i.meta.label)}. The hospital street runs east; every wing's entrance opens off it. The Postgraduate Medical Centre (lecture theatre) is through the north door. Press M (or ⌖) for the porter.</p>`:W.id===hr?"<p>The Reference Gallery, west of the Postgraduate Medical Centre: the clause 3.1 definitional concepts (the Reference collection) and the Resources annex open off its south side, exactly as wings open off the hospital street.</p>":W.id===Qt?`<p>The Postgraduate Medical Centre: a raked lecture theatre for seminars and video presentations.</p>
               <h3>Presenting</h3>
               <ul><li>Slides advance with ← / → or PageUp / PageDown — presenter clickers work.</li>
               <li>Tap or click the screen: right side next, left side back.</li>
               <li><strong>H</strong> hides the whole interface for a clean recording; <strong>L</strong> dims the house lights.</li>
               <li>Add <code>?start=theatre</code> to the address to begin at the lectern, and
               <code>&amp;present=1</code> to start with the interface already hidden.</li></ul>
               <h3>Your own deck</h3>
               <p>Export slides as PNG/JPG (1920×1080), copy them into <code>slides/</code>, and list them in <code>slides/manifest.json</code> — video clips (.mp4) can be listed too.</p>`:"<p>The hospital street: a racetrack loop of two parallel streets joined by glazed cloisters across the courtyard — take whichever way round is shorter. Wing entrances open off the outside of each street; the courtyard holds the lawn and the Postgraduate Medical Centre.</p>";else{Z+=`<p>${_(R.description??"Definition pending.")}</p>`;const j=[];R.plural&&j.push(`<strong>Plural:</strong> ${_(R.plural)}`),R.alsoKnownAs.length&&j.push(`<strong>Also known as:</strong> ${_(R.alsoKnownAs.join("; "))}`),R.deprecated.length&&j.push(`<strong>Deprecated terms:</strong> ${_(R.deprecated.join("; "))}`),R.termClause&&j.push(`<strong>Clause:</strong> ${_(R.termClause)}`),R.source&&j.push(`<span class="small"><strong>Source:</strong> ${_(R.source)}</span>`),j.length&&(Z+=`<p>${j.join("<br>")}</p>`),R.notes.length&&(Z+=`<h3>Notes</h3><ol>${R.notes.map(he=>`<li>${_(he.text)}</li>`).join("")}</ol>`),R.examples.length&&(Z+=`<h3>Examples</h3><ol>${R.examples.map(he=>`<li>${_(he.text)}</li>`).join("")}</ol>`);const _e=he=>_(e.get(he)?.label??"?");(R.out.length||R.self.length)&&(Z+=`<h3>Outbound associations (doors on the right wall)</h3><ul>${[...R.out.map(he=>`<li>${_(es(R.label,he.label,e.get(he.targetId)?.label??"?",he))}</li>`),...R.self.map(he=>`<li>${_(he.label)} → ${_(R.label)} (end wall)</li>`)].join("")}</ul>`),R.in.length&&(Z+=`<h3>Inbound associations (doors on the left wall)</h3><ul>${R.in.map(he=>`<li>${_(es(e.get(he.sourceId)?.label??"?",he.label,R.label,he))}</li>`).join("")}</ul>`),R.supers.length&&(Z+=`<h3>Generalisations (stairs up)</h3><ul>${R.supers.map(he=>`<li>${_e(he)}</li>`).join("")}</ul>`),R.subs.length&&(Z+=`<h3>Specialisations (stairs down)</h3><ul>${R.subs.map(he=>`<li>${_e(he)}</li>`).join("")}</ul>`),Z+=`<p><a href="${_l(R.label)}" target="_blank" rel="noopener">Full definition — contsys.org/concept/${_(ts(R.label))}</a></p>`}ot.innerHTML=Z,y=C.controls.isLocked,y&&C.controls.unlock(),L.style.display="flex",Ce=!0}L.addEventListener("click",R=>{R.target===L&&N()});let oe=null;function te(){Fn()||Ce||(oe?.kind==="lift"?xe(oe):oe?.kind==="fire-exit"&&Fe(oe.label))}function Oe(){if(!H)return;const R=H.currentTime+.03;for(let Z=0;Z<6;Z++){const j=H.createOscillator(),_e=H.createGain();j.type="square",j.frequency.value=Z%2?622:830;const he=R+Z*.19;_e.gain.setValueAtTime(1e-4,he),_e.gain.linearRampToValueAtTime(.045,he+.02),_e.gain.exponentialRampToValueAtTime(1e-4,he+.18),j.connect(_e).connect(H.destination),j.start(he),j.stop(he+.19)}}let be=!1;function Fe(R){if(be)return;be=!0,Oe(),wt("This is not a drill — proceed calmly to the assembly point"),setTimeout(()=>{dr.style.background="#00703c",dr.style.transition="opacity 0.7s",dr.style.opacity="1"},650);const Z=location.pathname.startsWith("/hospital/")?`/concept/${encodeURIComponent(ts(R))}`:_l(R);setTimeout(()=>{location.href=Z},1700)}function He(R){const Z=new Set;for(const j of W.interactables){if(Math.abs(j.triggerPos.y-R.y)>2)continue;const _e=Math.abs(R.x-j.triggerPos.x),he=Math.abs(R.z-j.triggerPos.z);j.halfX!==void 0?_e<=j.halfX&&he<=(j.halfZ??j.halfX)&&Z.add(j):_e*_e+he*he<=j.radius*j.radius&&Z.add(j)}return Z}let ue=new Set;function Ee(){if(ie){oe=null,Fi.style.opacity="0";return}const R=performance.now(),Z=He(C.floorPosition);let j=null;for(const he of Z){if(!he.auto){j=he;continue}if(!ue.has(he)&&!(R-J<S0)){he.kind==="stair-up"||he.kind==="stair-down"?Le(he.targetIds[0],`${he.label} (portal)`):it(he);return}}ue=Z,oe=j;const _e=j?j.prompt??`E — ${j.label}`:"";Fi.textContent=ve?_e.replace(/^E — /,"Tap here — "):_e,Fi.style.opacity=j?"1":"0"}const Ie=new Ih,Ue=new ct;function Se(R,Z){const j=W.boards;if(!j?.length)return null;C.camera.updateMatrixWorld(),Ue.set(R,Z),Ie.setFromCamera(Ue,C.camera);for(const _e of j){_e.mesh.updateWorldMatrix(!0,!1);const he=Ie.intersectObject(_e.mesh,!1)[0];if(!(!he?.uv||he.distance>(_e.kind==="screen"?16:4.2)))for(const ke of _e.cells){const[Ve,Mt,Lt,ln]=ke.rect;if(he.uv.x>=Ve&&he.uv.x<=Lt&&he.uv.y>=Mt&&he.uv.y<=ln)return{...ke,kind:_e.kind}}}return null}function je(R,Z){return C.camera.updateMatrixWorld(),Ue.set(R,Z),Ie.setFromCamera(Ue,C.camera),Ie.intersectObject(T.screen,!1)[0]?.uv??null}function U(R,Z){if(ie||Fn()||Ce||performance.now()-J<400)return!1;const j=Se(R,Z);if(!j)return!1;if(j.kind==="screen"){if(b.visible){const _e=je(R,Z);return _e&&b.clickAt(_e.x,_e.y)||wt("Esc frees the mouse for the page — C returns to slides"),!0}j.id==="next"?A.next():A.prev(),wt(A.label)}else if(j.kind==="lift"){const _e=W;_e.liftPos&&C.floorPosition.distanceTo(_e.liftPos)<1.2?nt(_e,j.id):Ge(j.id)}else Le(j.id,`→ ${v.get(j.id)?.label??j.label}`);return!0}p.domElement.addEventListener("click",()=>{C.controls.isLocked&&U(0,0)});let we=0,ge=0,Pe=0;p.domElement.addEventListener("pointerdown",R=>{we=R.clientX,ge=R.clientY,Pe=performance.now()}),p.domElement.addEventListener("pointerup",R=>{C.controls.isLocked||Math.hypot(R.clientX-we,R.clientY-ge)>8||performance.now()-Pe>600||U(R.clientX/innerWidth*2-1,-(R.clientY/innerHeight)*2+1)}),addEventListener("keydown",R=>{if(Ce){(R.code==="Escape"||R.code==="KeyR")&&N();return}if(!Fn()&&(R.code==="KeyE"&&te(),R.code==="KeyR"&&ne(),R.code==="KeyM"&&Te(),R.code==="KeyB"&&me(),R.code==="KeyF"&&C.dash(12)>.3&&Oi(),R.code==="KeyH"&&(document.body.classList.toggle("filming")||wt("Interface restored")),W.id===Qt)){if(b.visible){const Z=R.code==="PageDown"||R.code==="ArrowRight"?480:R.code==="PageUp"||R.code==="ArrowLeft"?-480:R.code==="ArrowDown"?160:R.code==="ArrowUp"?-160:0;Z!==0&&(R.preventDefault(),b.scrollBy(Z)||wt("Esc frees the mouse to scroll the page"))}else(R.code==="ArrowRight"||R.code==="PageDown")&&(R.preventDefault(),A.next(),wt(A.label)),(R.code==="ArrowLeft"||R.code==="PageUp")&&(R.preventDefault(),A.prev(),wt(A.label));R.code==="KeyL"&&(de=!de,T.setHouseLights(de),wt(de?"House lights up":"House lights dimmed — L restores")),R.code==="KeyC"&&(b.visible?(b.hide(),A.redraw(),wt("Slides restored")):(b.show(),wt(`Live: ${b.slug} — C returns to slides`)))}});let de=!0;if(addEventListener("wheel",R=>{b.visible&&W.id===Qt&&C.controls.isLocked&&b.scrollBy(R.deltaY)},{passive:!0}),Fi.addEventListener("click",te),C.enableDragLook(p.domElement),ve){const R=document.getElementById("joy"),Z=document.getElementById("joy-knob");let j=null;const _e=()=>{j=null,Z.style.transform="",C.setTouchMove(0,0)},he=ke=>{const Ve=R.getBoundingClientRect();let Mt=ke.clientX-(Ve.left+Ve.width/2),Lt=ke.clientY-(Ve.top+Ve.height/2);if(!Number.isFinite(Mt)||!Number.isFinite(Lt))return;const ln=Math.hypot(Mt,Lt),Be=44;ln>Be&&(Mt*=Be/ln,Lt*=Be/ln),Z.style.transform=`translate(${Mt}px, ${Lt}px)`,C.setTouchMove(-Lt/Be,Mt/Be)};R.addEventListener("pointerdown",ke=>{ke.preventDefault(),j=ke.pointerId,he(ke);try{R.setPointerCapture(ke.pointerId)}catch{}}),R.addEventListener("pointermove",ke=>{ke.pointerId===j&&(ke.preventDefault(),he(ke))}),R.addEventListener("pointerup",_e),R.addEventListener("pointercancel",_e),document.getElementById("btn-read").addEventListener("click",()=>Ce?N():ne()),document.getElementById("btn-porter").addEventListener("click",()=>{!Fn()&&!Ce&&Te()}),document.getElementById("btn-dash").addEventListener("click",()=>{!Fn()&&!Ce&&C.dash(12)>.3&&Oi()}),document.getElementById("btn-back").addEventListener("click",me)}const le=new Ph;let Me=0;const $e={logic:0,render:0},pt=performance.now();let rt=12,zt=0;p.setAnimationLoop(()=>{const R=performance.now(),Z=Math.min(le.getDelta(),.05);Fn()||C.update(Z),k(Z);for(const he of O){const ke=he.owner.group.visible;he.w.group.visible=ke,ke&&he.w.update(Z)}const j=pe(C.floorPosition);if(j&&j!==W&&V(j),Ee(),C.controls.isLocked&&!ie&&!Fn()){const he=Se(0,0);he&&(Fi.textContent=he.kind==="screen"?b.visible?"Click — follow the link under the crosshair · scroll to read · C slides":`Click — ${he.label}`:`Click — ${he.kind==="lift"?"lift to":"go to"} ${he.label}`,Fi.style.opacity="1")}if(Me+=Z,Me>.4&&(Me=0,x.update(C.position,a?40:55,a?100:120,a?5:8),X(),performance.now()-pt>12e3&&O.length)){if(zt===0&&rt>26){zt=1;for(let he=O.length-1;he>=0;he-=2)h.remove(O[he].w.group),O.splice(he,1);wt("Trimmed ward activity to keep things smooth")}else if(zt===1&&rt>30){zt=2;for(const he of O)h.remove(he.w.group);O.length=0,wt("Paused ward activity for performance")}}const _e=performance.now();p.render(h,C.camera),b.update(C.camera,W.id===Qt),$e.logic=_e-R,$e.render=performance.now()-_e,rt=rt*.96+($e.logic+$e.render)*.04}),addEventListener("resize",()=>{C.camera.aspect=innerWidth/innerHeight,C.camera.updateProjectionMatrix(),p.setSize(innerWidth,innerHeight),b.resize()});function an(){const R={areas:i.classes.length+4,doorOut:i.classes.reduce((Be,ht)=>Be+ht.out.length,0),doorIn:i.classes.reduce((Be,ht)=>Be+ht.in.length,0),doorSelf:i.classes.reduce((Be,ht)=>Be+ht.self.length,0),notices:i.classes.reduce((Be,ht)=>Be+ht.notes.length+ht.examples.length,0),stairUpPortals:i.classes.reduce((Be,ht)=>Be+Math.max(0,ht.supers.length-1),0),stairDownPortals:i.classes.reduce((Be,ht)=>Be+(ht.subs.length-(r.homeChildren[ht.id]?.length??0)),0),lifts:i.classes.filter(Be=>Be.supers.length||Be.subs.length).length,realStairwells:Object.keys(r.landings).length},Z=Be=>g.filter(ht=>ht.kind===Be).length,j={areas:v.size,doorOut:Z("door-out"),doorIn:Z("door-in"),doorSelf:Z("door-self"),notices:[...v.values()].reduce((Be,ht)=>Be+(ht.notices??0),0),stairUpPortals:Z("stair-up"),stairDownPortals:Z("stair-down"),lifts:Z("lift"),realStairwells:Object.keys(r.landings).length},_e=g.filter(Be=>(Be.kind==="door-out"||Be.kind==="door-in")&&!I(Be)),he=new Map,ke=(Be,ht)=>{he.has(Be)||he.set(Be,new Set),he.get(Be).add(ht)};ke(dn,Go),ke(dn,Qt),ke(Qt,dn),ke(Qt,hr),ke(hr,Qt);for(const Be of r.wings){const ht=Be.street==="gallery"?hr:Go;for(const Wt of Be.rootIds)ke(ht,Wt),ke(Wt,ht)}for(const[Be,ht]of Object.entries(r.homeChildren))for(const Wt of ht)ke(Be,Wt),ke(Wt,Be);for(const Be of g){for(const ht of Be.targetIds)ke(Be.areaId,ht);if(Be.kind==="lift"){const ht=e.get(Be.areaId);for(const Wt of ko(ht,e))ke(Be.areaId,Wt.id);for(const Wt of ht.subs)ke(Be.areaId,Wt);ke(Be.areaId,dn)}}const Ve=new Set([dn]),Mt=[dn];for(;Mt.length;)for(const Be of he.get(Mt.pop())??[])Ve.has(Be)||(Ve.add(Be),Mt.push(Be));const Lt=[...v.keys()].filter(Be=>!Ve.has(Be)).map(Be=>v.get(Be).label);return{pass:j.areas===R.areas&&j.doorOut===R.doorOut&&j.doorIn===R.doorIn&&j.doorSelf===R.doorSelf&&j.notices===R.notices&&j.stairUpPortals===R.stairUpPortals&&j.stairDownPortals===R.stairDownPortals&&j.lifts===R.lifts&&_e.length===0&&Lt.length===0,expect:R,built:j,unpaired:_e.length,unreachable:Lt,signs:x.count}}window.__hospital={world:i,layout:r,player:C,areas:v,interactables:g,audit:an,openSearch:Te,perf:()=>({...$e,avg:+rt.toFixed(1),drawCalls:p.info.render.calls,triangles:p.info.render.triangles}),people:()=>({tier:c,walkers:O.length,demoteStage:zt}),tickPeople(R=.1,Z=1){for(let j=0;j<Z;j++)for(const _e of O)_e.w.update(R)},tickDoors(R=.1,Z=1){for(let j=0;j<Z;j++)k(R);return W.lift?+W.lift.doors.openness.toFixed(2):null},bench(R=30){const Z=performance.now();for(let j=0;j<R;j++)p.render(h,C.camera);return{msPerFrame:+((performance.now()-Z)/R).toFixed(2),drawCalls:p.info.render.calls,triangles:p.info.render.triangles}},currentArea:()=>W.label,pick:(R,Z)=>Se(R,Z),tapPick:(R,Z)=>U(R,Z),slides:()=>({label:A.label,total:A.count}),nextSlide:()=>(A.next(),A.label),prevSlide:()=>(A.prev(),A.label),houseLights:R=>T.setHouseLights(R),goto(R){const Z=R==="Reception"?d:R==="Hospital Street"?E:R==="Postgraduate Medical Centre"?T:t.get(R)&&v.get(t.get(R).id)||null;return Z?(Le(Z.id),Z.label):`unknown area: ${R}`},walk(R){const Z=Math.ceil(Math.abs(R)/.1);for(let _e=0;_e<Z;_e++){const he=C.camera.rotation.y,ke=C.camera.position;ke.x+=-Math.sin(he)*.1*Math.sign(R),ke.z+=-Math.cos(he)*.1*Math.sign(R),C.snapGround();const Ve=pe(C.floorPosition);Ve&&Ve!==W&&V(Ve),Ee()}const j=C.camera.position;return{x:+j.x.toFixed(2),y:+(j.y-1.7).toFixed(2),z:+j.z.toFixed(2),area:W.label}}},console.info(`[hospital] built ${v.size} areas, ${g.length} interactables, ${x.count} signs, loop ${Math.round(r.street.x1)}m × 2 + ${r.loop.C}m courtyard`)}T0().catch(i=>{console.error(i);const e=document.createElement("p");e.style.cssText="color:#fff;padding:24px;font-family:Arial",e.textContent=String(i),ui.replaceChildren(e)});
