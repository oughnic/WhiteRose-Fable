(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const $o="182",fc=0,ha=1,pc=2,qr=1,mc=2,cr=3,ii=0,Zt=1,zn=2,Gn=0,Hi=1,da=2,fa=3,pa=4,gc=5,pi=100,_c=101,xc=102,vc=103,Mc=104,Sc=200,bc=201,yc=202,Ec=203,Ys=204,qs=205,Tc=206,wc=207,Ac=208,Rc=209,Cc=210,Pc=211,Ic=212,Lc=213,Dc=214,Zs=0,Ks=1,js=2,Wi=3,Js=4,Qs=5,eo=6,to=7,ls=0,Uc=1,Nc=2,Tn=0,Cl=1,Pl=2,Il=3,Ll=4,Dl=5,Ul=6,Nl=7,Fl=300,xi=301,Xi=302,no=303,io=304,cs=306,xr=1e3,kn=1001,ro=1002,Bt=1003,Fc=1004,wr=1005,At=1006,ms=1007,gi=1008,en=1009,Ol=1010,Bl=1011,vr=1012,Yo=1013,Rn=1014,Sn=1015,Wn=1016,qo=1017,Zo=1018,Mr=1020,zl=35902,kl=35899,Gl=1021,Hl=1022,mn=1023,Xn=1026,_i=1027,Vl=1028,Ko=1029,$i=1030,jo=1031,Jo=1033,Zr=33776,Kr=33777,jr=33778,Jr=33779,so=35840,oo=35841,ao=35842,lo=35843,co=36196,uo=37492,ho=37496,fo=37488,po=37489,mo=37490,go=37491,_o=37808,xo=37809,vo=37810,Mo=37811,So=37812,bo=37813,yo=37814,Eo=37815,To=37816,wo=37817,Ao=37818,Ro=37819,Co=37820,Po=37821,Io=36492,Lo=36494,Do=36495,Uo=36283,No=36284,Fo=36285,Oo=36286,Oc=3200,Qo=0,Bc=1,ei="",Mt="srgb",Yi="srgb-linear",es="linear",pt="srgb",bi=7680,ma=519,zc=512,kc=513,Gc=514,ea=515,Hc=516,Vc=517,ta=518,Wc=519,ga=35044,_a="300 es",bn=2e3,ts=2001;function Wl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xc(){const i=ns("canvas");return i.style.display="block",i}const xa={};function va(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ze(...i){const e="THREE."+i.shift();console.warn(e,...i)}function ot(...i){const e="THREE."+i.shift();console.error(e,...i)}function Sr(...i){const e=i.join(" ");e in xa||(xa[e]=!0,Ze(...i))}function $c(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ma=1234567;const pr=Math.PI/180,br=180/Math.PI;function Ki(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function rt(i,e,t){return Math.max(e,Math.min(t,i))}function na(i,e){return(i%e+e)%e}function Yc(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function qc(i,e,t){return i!==e?(t-i)/(e-i):0}function mr(i,e,t){return(1-t)*i+t*e}function Zc(i,e,t,n){return mr(i,e,1-Math.exp(-t*n))}function Kc(i,e=1){return e-Math.abs(na(i,e*2)-e)}function jc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Jc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Qc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function eu(i,e){return i+Math.random()*(e-i)}function tu(i){return i*(.5-Math.random())}function nu(i){i!==void 0&&(Ma=i);let e=Ma+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function iu(i){return i*pr}function ru(i){return i*br}function su(i){return(i&i-1)===0&&i!==0}function ou(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function au(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function lu(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),f=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*h,a*c);break;default:Ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Sa={DEG2RAD:pr,RAD2DEG:br,generateUUID:Ki,clamp:rt,euclideanModulo:na,mapLinear:Yc,inverseLerp:qc,lerp:mr,damp:Zc,pingpong:Kc,smoothstep:jc,smootherstep:Jc,randInt:Qc,randFloat:eu,randFloatSpread:tu,seededRandom:nu,degToRad:iu,radToDeg:ru,isPowerOfTwo:su,ceilPowerOfTwo:ou,floorPowerOfTwo:au,setQuaternionFromProperEuler:lu,normalize:Wt,denormalize:ki};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=s[o+0],m=s[o+1],g=s[o+2],v=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a>=1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==m||h!==g){let p=l*f+c*m+h*g+u*v;p<0&&(f=-f,m=-m,g=-g,v=-v,p=-p);let d=1-a;if(p<.9995){const y=Math.acos(p),A=Math.sin(y);d=Math.sin(d*y)/A,a=Math.sin(a*y)/A,l=l*d+f*a,c=c*d+m*a,h=h*d+g*a,u=u*d+v*a}else{l=l*d+f*a,c=c*d+m*a,h=h*d+g*a,u=u*d+v*a;const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*m-c*f,e[t+1]=l*g+h*f+c*u-a*m,e[t+2]=c*g+h*m+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),f=l(n/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ba.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ba.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gs.copy(this).projectOnVector(e),this.sub(gs)}reflect(e){return this.sub(gs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gs=new N,ba=new Mi;class Qe{constructor(e,t,n,r,s,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],v=r[0],p=r[3],d=r[6],y=r[1],A=r[4],E=r[7],C=r[2],b=r[5],R=r[8];return s[0]=o*v+a*y+l*C,s[3]=o*p+a*A+l*b,s[6]=o*d+a*E+l*R,s[1]=c*v+h*y+u*C,s[4]=c*p+h*A+u*b,s[7]=c*d+h*E+u*R,s[2]=f*v+m*y+g*C,s[5]=f*p+m*A+g*b,s[8]=f*d+m*E+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*s,m=c*s-o*l,g=t*u+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(r*c-h*n)*v,e[2]=(a*n-r*o)*v,e[3]=f*v,e[4]=(h*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_s.makeScale(e,t)),this}rotate(e){return this.premultiply(_s.makeRotation(-e)),this}translate(e,t){return this.premultiply(_s.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _s=new Qe,ya=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ea=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cu(){const i={enabled:!0,workingColorSpace:Yi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===pt&&(r.r=Hn(r.r),r.g=Hn(r.g),r.b=Hn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(r.r=Vi(r.r),r.g=Vi(r.g),r.b=Vi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ei?es:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Yi]:{primaries:e,whitePoint:n,transfer:es,toXYZ:ya,fromXYZ:Ea,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:ya,fromXYZ:Ea,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),i}const at=cu();function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let yi;class uu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yi===void 0&&(yi=ns("canvas")),yi.width=e.width,yi.height=e.height;const r=yi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ns("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hn(t[n]/255)*255):t[n]=Hn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hu=0;class ia{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(xs(r[o].image)):s.push(xs(r[o]))}else s=xs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function xs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}let du=0;const vs=new N;class zt extends vi{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=kn,r=kn,s=At,o=gi,a=mn,l=en,c=zt.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Ki(),this.name="",this.source=new ia(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vs).x}get height(){return this.source.getSize(vs).y}get depth(){return this.source.getSize(vs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xr:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xr:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Fl;zt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,n=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,E=(m+1)/2,C=(d+1)/2,b=(h+f)/4,R=(u+v)/4,z=(g+p)/4;return A>E&&A>C?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=b/n,s=R/n):E>C?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=b/r,s=z/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=R/s,r=z/s),this.set(n,r,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fu extends vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new zt(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ia(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends fu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xl extends zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pu extends zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class St{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(s,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ar.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(e.matrixWorld),this.union(Ar)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),Rr.subVectors(this.max,nr),Ei.subVectors(e.a,nr),Ti.subVectors(e.b,nr),wi.subVectors(e.c,nr),qn.subVectors(Ti,Ei),Zn.subVectors(wi,Ti),si.subVectors(Ei,wi);let t=[0,-qn.z,qn.y,0,-Zn.z,Zn.y,0,-si.z,si.y,qn.z,0,-qn.x,Zn.z,0,-Zn.x,si.z,0,-si.x,-qn.y,qn.x,0,-Zn.y,Zn.x,0,-si.y,si.x,0];return!Ms(t,Ei,Ti,wi,Rr)||(t=[1,0,0,0,1,0,0,0,1],!Ms(t,Ei,Ti,wi,Rr))?!1:(Cr.crossVectors(qn,Zn),t=[Cr.x,Cr.y,Cr.z],Ms(t,Ei,Ti,wi,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Dn=[new N,new N,new N,new N,new N,new N,new N,new N],cn=new N,Ar=new St,Ei=new N,Ti=new N,wi=new N,qn=new N,Zn=new N,si=new N,nr=new N,Rr=new N,Cr=new N,oi=new N;function Ms(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){oi.fromArray(i,s);const a=r.x*Math.abs(oi.x)+r.y*Math.abs(oi.y)+r.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const mu=new St,ir=new N,Ss=new N;class ra{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);const t=ir.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ir,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ss.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(Ss)),this.expandByPoint(ir.copy(e.center).sub(Ss))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Un=new N,bs=new N,Pr=new N,Kn=new N,ys=new N,Ir=new N,Es=new N;class $l{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){bs.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(bs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Pr),a=Kn.dot(this.direction),l=-Kn.dot(Pr),c=Kn.lengthSq(),h=Math.abs(1-o*o);let u,f,m,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(bs).addScaledVector(Pr,f),m}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),r=Un.dot(Un)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,r,s){ys.subVectors(t,e),Ir.subVectors(n,e),Es.crossVectors(ys,Ir);let o=this.direction.dot(Es),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,e);const l=a*this.direction.dot(Ir.crossVectors(Kn,Ir));if(l<0)return null;const c=a*this.direction.dot(ys.cross(Kn));if(c<0||l+c>o)return null;const h=-a*Kn.dot(Es);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,r,s,o,a,l,c,h,u,f,m,g,v,p){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,u,f,m,g,v,p)}set(e,t,n,r,s,o,a,l,c,h,u,f,m,g,v,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Ai.setFromMatrixColumn(e,0).length(),s=1/Ai.setFromMatrixColumn(e,1).length(),o=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*h,m=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*u,g=c*h,v=c*u;t[0]=f+v*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*u,g=c*h,v=c*u;t[0]=f-v*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gu,e,_u)}lookAt(e,t,n){const r=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),jn.crossVectors(n,Jt),jn.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),jn.crossVectors(n,Jt)),jn.normalize(),Lr.crossVectors(Jt,jn),r[0]=jn.x,r[4]=Lr.x,r[8]=Jt.x,r[1]=jn.y,r[5]=Lr.y,r[9]=Jt.y,r[2]=jn.z,r[6]=Lr.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],v=n[6],p=n[10],d=n[14],y=n[3],A=n[7],E=n[11],C=n[15],b=r[0],R=r[4],z=r[8],x=r[12],S=r[1],P=r[5],O=r[9],I=r[13],V=r[2],$=r[6],Z=r[10],B=r[14],ie=r[3],H=r[7],X=r[11],re=r[15];return s[0]=o*b+a*S+l*V+c*ie,s[4]=o*R+a*P+l*$+c*H,s[8]=o*z+a*O+l*Z+c*X,s[12]=o*x+a*I+l*B+c*re,s[1]=h*b+u*S+f*V+m*ie,s[5]=h*R+u*P+f*$+m*H,s[9]=h*z+u*O+f*Z+m*X,s[13]=h*x+u*I+f*B+m*re,s[2]=g*b+v*S+p*V+d*ie,s[6]=g*R+v*P+p*$+d*H,s[10]=g*z+v*O+p*Z+d*X,s[14]=g*x+v*I+p*B+d*re,s[3]=y*b+A*S+E*V+C*ie,s[7]=y*R+A*P+E*$+C*H,s[11]=y*z+A*O+E*Z+C*X,s[15]=y*x+A*I+E*B+C*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],g=e[3],v=e[7],p=e[11],d=e[15],y=l*m-c*f,A=a*m-c*u,E=a*f-l*u,C=o*m-c*h,b=o*f-l*h,R=o*u-a*h;return t*(v*y-p*A+d*E)-n*(g*y-p*C+d*b)+r*(g*A-v*C+d*R)-s*(g*E-v*b+p*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],g=e[12],v=e[13],p=e[14],d=e[15],y=u*p*c-v*f*c+v*l*m-a*p*m-u*l*d+a*f*d,A=g*f*c-h*p*c-g*l*m+o*p*m+h*l*d-o*f*d,E=h*v*c-g*u*c+g*a*m-o*v*m-h*a*d+o*u*d,C=g*u*l-h*v*l-g*a*f+o*v*f+h*a*p-o*u*p,b=t*y+n*A+r*E+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=y*R,e[1]=(v*f*s-u*p*s-v*r*m+n*p*m+u*r*d-n*f*d)*R,e[2]=(a*p*s-v*l*s+v*r*c-n*p*c-a*r*d+n*l*d)*R,e[3]=(u*l*s-a*f*s-u*r*c+n*f*c+a*r*m-n*l*m)*R,e[4]=A*R,e[5]=(h*p*s-g*f*s+g*r*m-t*p*m-h*r*d+t*f*d)*R,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*d-t*l*d)*R,e[7]=(o*f*s-h*l*s+h*r*c-t*f*c-o*r*m+t*l*m)*R,e[8]=E*R,e[9]=(g*u*s-h*v*s-g*n*m+t*v*m+h*n*d-t*u*d)*R,e[10]=(o*v*s-g*a*s+g*n*c-t*v*c-o*n*d+t*a*d)*R,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*m-t*a*m)*R,e[12]=C*R,e[13]=(h*v*r-g*u*r+g*n*f-t*v*f-h*n*p+t*u*p)*R,e[14]=(g*a*r-o*v*r-g*n*l+t*v*l+o*n*p-t*a*p)*R,e[15]=(o*u*r-h*a*r+h*n*l-t*u*l-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,f=s*c,m=s*h,g=s*u,v=o*h,p=o*u,d=a*u,y=l*c,A=l*h,E=l*u,C=n.x,b=n.y,R=n.z;return r[0]=(1-(v+d))*C,r[1]=(m+E)*C,r[2]=(g-A)*C,r[3]=0,r[4]=(m-E)*b,r[5]=(1-(f+d))*b,r[6]=(p+y)*b,r[7]=0,r[8]=(g+A)*R,r[9]=(p-y)*R,r[10]=(1-(f+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=Ai.set(r[0],r[1],r[2]).length();const o=Ai.set(r[4],r[5],r[6]).length(),a=Ai.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),un.copy(this);const c=1/s,h=1/o,u=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,t.setFromRotationMatrix(un),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=bn,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),m=(n+r)/(n-r);let g,v;if(l)g=s/(o-s),v=o*s/(o-s);else if(a===bn)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ts)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=bn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-r),f=-(t+e)/(t-e),m=-(n+r)/(n-r);let g,v;if(l)g=1/(o-s),v=o/(o-s);else if(a===bn)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===ts)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ai=new N,un=new vt,gu=new N(0,0,0),_u=new N(1,1,1),jn=new N,Lr=new N,Jt=new N,Ta=new vt,wa=new Mi;class on{constructor(e=0,t=0,n=0,r=on.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ta.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ta,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wa.setFromEuler(this),this.setFromQuaternion(wa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class sa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xu=0;const Aa=new N,Ri=new Mi,Nn=new vt,Dr=new N,rr=new N,vu=new N,Mu=new Mi,Ra=new N(1,0,0),Ca=new N(0,1,0),Pa=new N(0,0,1),Ia={type:"added"},Su={type:"removed"},Ci={type:"childadded",child:null},Ts={type:"childremoved",child:null};class Nt extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new N,t=new on,n=new Mi,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Qe}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(Ra,e)}rotateY(e){return this.rotateOnAxis(Ca,e)}rotateZ(e){return this.rotateOnAxis(Pa,e)}translateOnAxis(e,t){return Aa.copy(e).applyQuaternion(this.quaternion),this.position.add(Aa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ra,e)}translateY(e){return this.translateOnAxis(Ca,e)}translateZ(e){return this.translateOnAxis(Pa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dr.copy(e):Dr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(rr,Dr,this.up):Nn.lookAt(Dr,rr,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),Ri.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ia),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Su),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ia),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,vu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Mu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new N(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new N,Fn=new N,ws=new N,On=new N,Pi=new N,Ii=new N,La=new N,As=new N,Rs=new N,Cs=new N,Ps=new Tt,Is=new Tt,Ls=new Tt;class pn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),hn.subVectors(e,t),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){hn.subVectors(r,t),Fn.subVectors(n,t),ws.subVectors(e,t);const o=hn.dot(hn),a=hn.dot(Fn),l=hn.dot(ws),c=Fn.dot(Fn),h=Fn.dot(ws),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Ps.setScalar(0),Is.setScalar(0),Ls.setScalar(0),Ps.fromBufferAttribute(e,t),Is.fromBufferAttribute(e,n),Ls.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ps,s.x),o.addScaledVector(Is,s.y),o.addScaledVector(Ls,s.z),o}static isFrontFacing(e,t,n,r){return hn.subVectors(n,t),Fn.subVectors(e,t),hn.cross(Fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),hn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return pn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Pi.subVectors(r,n),Ii.subVectors(s,n),As.subVectors(e,n);const l=Pi.dot(As),c=Ii.dot(As);if(l<=0&&c<=0)return t.copy(n);Rs.subVectors(e,r);const h=Pi.dot(Rs),u=Ii.dot(Rs);if(h>=0&&u<=h)return t.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Pi,o);Cs.subVectors(e,s);const m=Pi.dot(Cs),g=Ii.dot(Cs);if(g>=0&&m<=g)return t.copy(s);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ii,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return La.subVectors(s,r),a=(u-h)/(u-h+(m-g)),t.copy(r).addScaledVector(La,a);const d=1/(p+v+f);return o=v*d,a=f*d,t.copy(n).addScaledVector(Pi,o).addScaledVector(Ii,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function Ds(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=at.workingColorSpace){if(e=na(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ds(o,s,e+1/3),this.g=Ds(o,s,e),this.b=Ds(o,s,e-1/3)}return at.colorSpaceToWorking(this,r),this}setStyle(e,t=Mt){function n(s){s!==void 0&&parseFloat(s)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const n=Yl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return at.workingToColorSpace(Gt.copy(this),e),Math.round(rt(Gt.r*255,0,255))*65536+Math.round(rt(Gt.g*255,0,255))*256+Math.round(rt(Gt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Gt.copy(this),t);const n=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Mt){at.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,r=Gt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(Ur);const n=mr(Jn.h,Ur.h,t),r=mr(Jn.s,Ur.s,t),s=mr(Jn.l,Ur.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new je;je.NAMES=Yl;let bu=0;class ji extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=Hi,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ys,this.blendDst=qs,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ma,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ys&&(n.blendSrc=this.blendSrc),this.blendDst!==qs&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ma&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gn extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=ls,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new N,Nr=new lt;let yu=0;class sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ga,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),r=Wt(r,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ga&&(e.usage=this.usage),e}}class ql extends sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zl extends sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vn extends sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Eu=0;const nn=new vt,Us=new Nt,Li=new N,Qt=new St,sr=new St,Dt=new N;class Pn extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wl(e)?Zl:ql)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return Us.lookAt(e),Us.updateMatrix(),this.applyMatrix4(Us.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new St);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ra);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(Qt.min,sr.min),Qt.expandByPoint(Dt),Dt.addVectors(Qt.max,sr.max),Qt.expandByPoint(Dt)):(Qt.expandByPoint(sr.min),Qt.expandByPoint(sr.max))}Qt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Dt.fromBufferAttribute(a,c),l&&(Li.fromBufferAttribute(e,c),Dt.add(Li)),r=Math.max(r,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<n.count;z++)a[z]=new N,l[z]=new N;const c=new N,h=new N,u=new N,f=new lt,m=new lt,g=new lt,v=new N,p=new N;function d(z,x,S){c.fromBufferAttribute(n,z),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,S),f.fromBufferAttribute(s,z),m.fromBufferAttribute(s,x),g.fromBufferAttribute(s,S),h.sub(c),u.sub(c),m.sub(f),g.sub(f);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(P),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(P),a[z].add(v),a[x].add(v),a[S].add(v),l[z].add(p),l[x].add(p),l[S].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let z=0,x=y.length;z<x;++z){const S=y[z],P=S.start,O=S.count;for(let I=P,V=P+O;I<V;I+=3)d(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const A=new N,E=new N,C=new N,b=new N;function R(z){C.fromBufferAttribute(r,z),b.copy(C);const x=a[z];A.copy(x),A.sub(C.multiplyScalar(C.dot(x))).normalize(),E.crossVectors(b,x);const P=E.dot(l[z])<0?-1:1;o.setXYZW(z,A.x,A.y,A.z,P)}for(let z=0,x=y.length;z<x;++z){const S=y[z],P=S.start,O=S.count;for(let I=P,V=P+O;I<V;I+=3)R(e.getX(I+0)),R(e.getX(I+1)),R(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new sn(f,h,u)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Da=new vt,ai=new $l,Fr=new ra,Ua=new N,Or=new N,Br=new N,zr=new N,Ns=new N,kr=new N,Na=new N,Gr=new N;class Ft extends Nt{constructor(e=new Pn,t=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){kr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Ns.fromBufferAttribute(u,e),o?kr.addScaledVector(Ns,h):kr.addScaledVector(Ns.sub(t),h))}t.add(kr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(s),ai.copy(e.ray).recast(e.near),!(Fr.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Fr,Ua)===null||ai.origin.distanceToSquared(Ua)>(e.far-e.near)**2))&&(Da.copy(s).invert(),ai.copy(e.ray).applyMatrix4(Da),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],d=o[p.materialIndex],y=Math.max(p.start,m.start),A=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=y,C=A;E<C;E+=3){const b=a.getX(E),R=a.getX(E+1),z=a.getX(E+2);r=Hr(this,d,e,n,c,h,u,b,R,z),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const y=a.getX(p),A=a.getX(p+1),E=a.getX(p+2);r=Hr(this,o,e,n,c,h,u,y,A,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],d=o[p.materialIndex],y=Math.max(p.start,m.start),A=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=y,C=A;E<C;E+=3){const b=E,R=E+1,z=E+2;r=Hr(this,d,e,n,c,h,u,b,R,z),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const y=p,A=p+1,E=p+2;r=Hr(this,o,e,n,c,h,u,y,A,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Tu(i,e,t,n,r,s,o,a){let l;if(e.side===Zt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===ii,a),l===null)return null;Gr.copy(a),Gr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Gr);return c<t.near||c>t.far?null:{distance:c,point:Gr.clone(),object:i}}function Hr(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Or),i.getVertexPosition(l,Br),i.getVertexPosition(c,zr);const h=Tu(i,e,t,n,Or,Br,zr,Na);if(h){const u=new N;pn.getBarycoord(Na,Or,Br,zr,u),r&&(h.uv=pn.getInterpolatedAttribute(r,a,l,c,u,new lt)),s&&(h.uv1=pn.getInterpolatedAttribute(s,a,l,c,u,new lt)),o&&(h.normal=pn.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new N,materialIndex:0};pn.getNormal(Or,Br,zr,f.normal),h.face=f,h.barycoord=u}return h}class $n extends Pn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Vn(c,3)),this.setAttribute("normal",new Vn(h,3)),this.setAttribute("uv",new Vn(u,2));function g(v,p,d,y,A,E,C,b,R,z,x){const S=E/R,P=C/z,O=E/2,I=C/2,V=b/2,$=R+1,Z=z+1;let B=0,ie=0;const H=new N;for(let X=0;X<Z;X++){const re=X*P-I;for(let k=0;k<$;k++){const K=k*S-O;H[v]=K*y,H[p]=re*A,H[d]=V,c.push(H.x,H.y,H.z),H[v]=0,H[p]=0,H[d]=b>0?1:-1,h.push(H.x,H.y,H.z),u.push(k/R),u.push(1-X/z),B+=1}}for(let X=0;X<z;X++)for(let re=0;re<R;re++){const k=f+re+$*X,K=f+re+$*(X+1),me=f+(re+1)+$*(X+1),ye=f+(re+1)+$*X;l.push(k,K,ye),l.push(K,me,ye),ie+=6}a.addGroup(m,ie,x),m+=ie,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Xt(i){const e={};for(let t=0;t<i.length;t++){const n=qi(i[t]);for(const r in n)e[r]=n[r]}return e}function wu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const Au={clone:qi,merge:Xt};var Ru=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ru,this.fragmentShader=Cu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qi(e.uniforms),this.uniformsGroups=wu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jl extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new N,Fa=new lt,Oa=new lt;class rn extends jl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return br*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,Fa,Oa),t.subVectors(Oa,Fa)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Di=-90,Ui=1;class Pu extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn(Di,Ui,e,t);r.layers=this.layers,this.add(r);const s=new rn(Di,Ui,e,t);s.layers=this.layers,this.add(s);const o=new rn(Di,Ui,e,t);o.layers=this.layers,this.add(o);const a=new rn(Di,Ui,e,t);a.layers=this.layers,this.add(a);const l=new rn(Di,Ui,e,t);l.layers=this.layers,this.add(l);const c=new rn(Di,Ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jl extends zt{constructor(e=[],t=xi,n,r,s,o,a,l,c,h){super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ql extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Jl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $n(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Gn});s.uniforms.tEquirect.value=t;const o=new Ft(r,s),a=t.minFilter;return t.minFilter===gi&&(t.minFilter=At),new Pu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class yn extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iu={type:"move"};class Fs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Iu)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class is{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=n}clone(){return new is(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ec extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Lu extends zt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Bt,h=Bt,u,f){super(null,o,a,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Os=new N,Du=new N,Uu=new Qe;class di{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Os.subVectors(n,t).cross(Du.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Os),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Uu.getNormalMatrix(e),r=this.coplanarPoint(Os).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new ra,Nu=new lt(.5,.5),Vr=new N;class oa{constructor(e=new di,t=new di,n=new di,r=new di,s=new di,o=new di){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],m=s[7],g=s[8],v=s[9],p=s[10],d=s[11],y=s[12],A=s[13],E=s[14],C=s[15];if(r[0].setComponents(c-o,m-h,d-g,C-y).normalize(),r[1].setComponents(c+o,m+h,d+g,C+y).normalize(),r[2].setComponents(c+a,m+u,d+v,C+A).normalize(),r[3].setComponents(c-a,m-u,d-v,C-A).normalize(),n)r[4].setComponents(l,f,p,E).normalize(),r[5].setComponents(c-l,m-f,d-p,C-E).normalize();else if(r[4].setComponents(c-l,m-f,d-p,C-E).normalize(),t===bn)r[5].setComponents(c+l,m+f,d+p,C+E).normalize();else if(t===ts)r[5].setComponents(l,f,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){li.center.set(0,0,0);const t=Nu.distanceTo(e.center);return li.radius=.7071067811865476+t,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Vr.x=r.normal.x>0?e.max.x:e.min.x,Vr.y=r.normal.y>0?e.max.y:e.min.y,Vr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fu extends zt{constructor(e,t,n,r,s=At,o=At,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class In extends zt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yr extends zt{constructor(e,t,n=Rn,r,s,o,a=Bt,l=Bt,c,h=Xn,u=1){if(h!==Xn&&h!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ia(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ou extends yr{constructor(e,t=Rn,n=xi,r,s,o=Bt,a=Bt,l,c=Xn){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,r,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tc extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ji extends Pn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=e/a,f=t/l,m=[],g=[],v=[],p=[];for(let d=0;d<h;d++){const y=d*f-o;for(let A=0;A<c;A++){const E=A*u-s;g.push(E,-y,0),v.push(0,0,1),p.push(A/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const A=y+c*d,E=y+c*(d+1),C=y+1+c*(d+1),b=y+1+c*d;m.push(A,E,b),m.push(E,C,b)}this.setIndex(m),this.setAttribute("position",new Vn(g,3)),this.setAttribute("normal",new Vn(v,3)),this.setAttribute("uv",new Vn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bu extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zu extends ji{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new je(16777215),this.specular=new je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qo,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=ls,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pt extends ji{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qo,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=ls,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ku extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gu extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class aa extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Hu extends aa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Bs=new vt,Ba=new N,za=new N;class Vu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oa,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ba.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ba),za.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(za),t.updateMatrixWorld(),Bs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bs,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class la extends jl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Wu extends Vu{constructor(){super(new la(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xu extends aa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Wu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class $u extends aa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yu extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class qu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const ka=new vt;class Zu{constructor(e,t,n=0,r=1/0){this.ray=new $l(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new sa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ka.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ka),this}intersectObject(e,t=!0,n=[]){return Bo(e,this,n,t),n.sort(Ga),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Bo(e[r],this,n,t);return n.sort(Ga),n}}function Ga(i,e){return i.distance-e.distance}function Bo(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Bo(s[o],e,t,!0)}}class Ku extends vi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ze("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ha(i,e,t,n){const r=ju(n);switch(t){case Gl:return i*e;case Vl:return i*e/r.components*r.byteLength;case Ko:return i*e/r.components*r.byteLength;case $i:return i*e*2/r.components*r.byteLength;case jo:return i*e*2/r.components*r.byteLength;case Hl:return i*e*3/r.components*r.byteLength;case mn:return i*e*4/r.components*r.byteLength;case Jo:return i*e*4/r.components*r.byteLength;case Zr:case Kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jr:case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oo:case lo:return Math.max(i,16)*Math.max(e,8)/4;case so:case ao:return Math.max(i,8)*Math.max(e,8)/2;case co:case uo:case fo:case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ho:case mo:case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case vo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case So:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case yo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case To:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case wo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Co:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Po:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Io:case Lo:case Do:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Uo:case No:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Fo:case Oo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ju(i){switch(i){case en:case Ol:return{byteLength:1,components:1};case vr:case Bl:case Wn:return{byteLength:2,components:1};case qo:case Zo:return{byteLength:2,components:4};case Rn:case Yo:case Sn:return{byteLength:4,components:1};case zl:case kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$o}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$o);function nc(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ju(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){const g=u[f],v=u[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let m=0,g=u.length;m<g;m++){const v=u[m];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Qu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eh=`#ifdef USE_ALPHAHASH
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
#endif`,th=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ih=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sh=`#ifdef USE_AOMAP
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
#endif`,oh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ah=`#ifdef USE_BATCHING
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
#endif`,lh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ch=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dh=`#ifdef USE_IRIDESCENCE
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
#endif`,fh=`#ifdef USE_BUMPMAP
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
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bh=`#define PI 3.141592653589793
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
} // validated`,yh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Eh=`vec3 transformedNormal = objectNormal;
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
#endif`,Th=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ah=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ch="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ph=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ih=`#ifdef USE_ENVMAP
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
#endif`,Lh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dh=`#ifdef USE_ENVMAP
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
#endif`,Uh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
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
#endif`,Fh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kh=`#ifdef USE_GRADIENTMAP
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
}`,Gh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wh=`uniform bool receiveShadow;
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
#endif`,Xh=`#ifdef USE_ENVMAP
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
#endif`,$h=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kh=`PhysicalMaterial material;
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
#endif`,jh=`uniform sampler2D dfgLUT;
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
}`,Jh=`
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
#endif`,Qh=`#if defined( RE_IndirectDiffuse )
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
#endif`,ed=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,td=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,id=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,od=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ld=`#if defined( USE_POINTS_UV )
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
#endif`,cd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ud=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pd=`#ifdef USE_MORPHTARGETS
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
#endif`,md=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_d=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Md=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sd=`#ifdef USE_NORMALMAP
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
#endif`,bd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ed=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Td=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ad=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Id=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ld=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Od=`float getShadowMask() {
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
}`,Bd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zd=`#ifdef USE_SKINNING
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
#endif`,kd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gd=`#ifdef USE_SKINNING
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
#endif`,Hd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$d=`#ifdef USE_TRANSMISSION
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
#endif`,Yd=`#ifdef USE_TRANSMISSION
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
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qd=`uniform sampler2D t2D;
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
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sf=`#include <common>
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
}`,of=`#if DEPTH_PACKING == 3200
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
}`,af=`#define DISTANCE
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
}`,lf=`#define DISTANCE
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
}`,cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`uniform float scale;
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
}`,df=`uniform vec3 diffuse;
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
}`,ff=`#include <common>
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
}`,pf=`uniform vec3 diffuse;
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
}`,mf=`#define LAMBERT
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
}`,gf=`#define LAMBERT
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
}`,_f=`#define MATCAP
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
}`,xf=`#define MATCAP
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
}`,vf=`#define NORMAL
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
}`,Mf=`#define NORMAL
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
}`,Sf=`#define PHONG
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
}`,bf=`#define PHONG
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
}`,yf=`#define STANDARD
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
}`,Ef=`#define STANDARD
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
}`,Tf=`#define TOON
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
}`,wf=`#define TOON
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
}`,Af=`uniform float size;
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
}`,Rf=`uniform vec3 diffuse;
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
}`,Cf=`#include <common>
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
}`,Pf=`uniform vec3 color;
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
}`,If=`uniform float rotation;
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
}`,Lf=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Qu,alphahash_pars_fragment:eh,alphamap_fragment:th,alphamap_pars_fragment:nh,alphatest_fragment:ih,alphatest_pars_fragment:rh,aomap_fragment:sh,aomap_pars_fragment:oh,batching_pars_vertex:ah,batching_vertex:lh,begin_vertex:ch,beginnormal_vertex:uh,bsdfs:hh,iridescence_fragment:dh,bumpmap_pars_fragment:fh,clipping_planes_fragment:ph,clipping_planes_pars_fragment:mh,clipping_planes_pars_vertex:gh,clipping_planes_vertex:_h,color_fragment:xh,color_pars_fragment:vh,color_pars_vertex:Mh,color_vertex:Sh,common:bh,cube_uv_reflection_fragment:yh,defaultnormal_vertex:Eh,displacementmap_pars_vertex:Th,displacementmap_vertex:wh,emissivemap_fragment:Ah,emissivemap_pars_fragment:Rh,colorspace_fragment:Ch,colorspace_pars_fragment:Ph,envmap_fragment:Ih,envmap_common_pars_fragment:Lh,envmap_pars_fragment:Dh,envmap_pars_vertex:Uh,envmap_physical_pars_fragment:Xh,envmap_vertex:Nh,fog_vertex:Fh,fog_pars_vertex:Oh,fog_fragment:Bh,fog_pars_fragment:zh,gradientmap_pars_fragment:kh,lightmap_pars_fragment:Gh,lights_lambert_fragment:Hh,lights_lambert_pars_fragment:Vh,lights_pars_begin:Wh,lights_toon_fragment:$h,lights_toon_pars_fragment:Yh,lights_phong_fragment:qh,lights_phong_pars_fragment:Zh,lights_physical_fragment:Kh,lights_physical_pars_fragment:jh,lights_fragment_begin:Jh,lights_fragment_maps:Qh,lights_fragment_end:ed,logdepthbuf_fragment:td,logdepthbuf_pars_fragment:nd,logdepthbuf_pars_vertex:id,logdepthbuf_vertex:rd,map_fragment:sd,map_pars_fragment:od,map_particle_fragment:ad,map_particle_pars_fragment:ld,metalnessmap_fragment:cd,metalnessmap_pars_fragment:ud,morphinstance_vertex:hd,morphcolor_vertex:dd,morphnormal_vertex:fd,morphtarget_pars_vertex:pd,morphtarget_vertex:md,normal_fragment_begin:gd,normal_fragment_maps:_d,normal_pars_fragment:xd,normal_pars_vertex:vd,normal_vertex:Md,normalmap_pars_fragment:Sd,clearcoat_normal_fragment_begin:bd,clearcoat_normal_fragment_maps:yd,clearcoat_pars_fragment:Ed,iridescence_pars_fragment:Td,opaque_fragment:wd,packing:Ad,premultiplied_alpha_fragment:Rd,project_vertex:Cd,dithering_fragment:Pd,dithering_pars_fragment:Id,roughnessmap_fragment:Ld,roughnessmap_pars_fragment:Dd,shadowmap_pars_fragment:Ud,shadowmap_pars_vertex:Nd,shadowmap_vertex:Fd,shadowmask_pars_fragment:Od,skinbase_vertex:Bd,skinning_pars_vertex:zd,skinning_vertex:kd,skinnormal_vertex:Gd,specularmap_fragment:Hd,specularmap_pars_fragment:Vd,tonemapping_fragment:Wd,tonemapping_pars_fragment:Xd,transmission_fragment:$d,transmission_pars_fragment:Yd,uv_pars_fragment:qd,uv_pars_vertex:Zd,uv_vertex:Kd,worldpos_vertex:jd,background_vert:Jd,background_frag:Qd,backgroundCube_vert:ef,backgroundCube_frag:tf,cube_vert:nf,cube_frag:rf,depth_vert:sf,depth_frag:of,distance_vert:af,distance_frag:lf,equirect_vert:cf,equirect_frag:uf,linedashed_vert:hf,linedashed_frag:df,meshbasic_vert:ff,meshbasic_frag:pf,meshlambert_vert:mf,meshlambert_frag:gf,meshmatcap_vert:_f,meshmatcap_frag:xf,meshnormal_vert:vf,meshnormal_frag:Mf,meshphong_vert:Sf,meshphong_frag:bf,meshphysical_vert:yf,meshphysical_frag:Ef,meshtoon_vert:Tf,meshtoon_frag:wf,points_vert:Af,points_frag:Rf,shadow_vert:Cf,shadow_frag:Pf,sprite_vert:If,sprite_frag:Lf},we={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Mn={basic:{uniforms:Xt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Xt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new je(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Xt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Xt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Xt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new je(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Xt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Xt([we.points,we.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Xt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Xt([we.common,we.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Xt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Xt([we.sprite,we.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Xt([we.common,we.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Xt([we.lights,we.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Mn.physical={uniforms:Xt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Wr={r:0,b:0,g:0},ci=new on,Df=new vt;function Uf(i,e,t,n,r,s,o){const a=new je(0);let l=s===!0?0:1,c,h,u=null,f=0,m=null;function g(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?t:e).get(E)),E}function v(A){let E=!1;const C=g(A);C===null?d(a,l):C&&C.isColor&&(d(C,1),E=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(A,E){const C=g(E);C&&(C.isCubeTexture||C.mapping===cs)?(h===void 0&&(h=new Ft(new $n(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:qi(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,R,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ci.copy(E.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Df.makeRotationFromEuler(ci)),h.material.toneMapped=at.getTransfer(C.colorSpace)!==pt,(u!==C||f!==C.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=C,f=C.version,m=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Ft(new Ji(2,2),new Cn({name:"BackgroundMaterial",uniforms:qi(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=at.getTransfer(C.colorSpace)!==pt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||f!==C.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=C,f=C.version,m=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,E){A.getRGB(Wr,Kl(i)),n.buffers.color.setClear(Wr.r,Wr.g,Wr.b,E,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,E=1){a.set(A),l=E,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(a,l)},render:v,addToRenderList:p,dispose:y}}function Nf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(S,P,O,I,V){let $=!1;const Z=u(I,O,P);s!==Z&&(s=Z,c(s.object)),$=m(S,I,O,V),$&&g(S,I,O,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,E(S,P,O,I),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,P,O){const I=O.wireframe===!0;let V=n[S.id];V===void 0&&(V={},n[S.id]=V);let $=V[P.id];$===void 0&&($={},V[P.id]=$);let Z=$[I];return Z===void 0&&(Z=f(l()),$[I]=Z),Z}function f(S){const P=[],O=[],I=[];for(let V=0;V<t;V++)P[V]=0,O[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:I,object:S,attributes:{},index:null}}function m(S,P,O,I){const V=s.attributes,$=P.attributes;let Z=0;const B=O.getAttributes();for(const ie in B)if(B[ie].location>=0){const X=V[ie];let re=$[ie];if(re===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),X===void 0||X.attribute!==re||re&&X.data!==re.data)return!0;Z++}return s.attributesNum!==Z||s.index!==I}function g(S,P,O,I){const V={},$=P.attributes;let Z=0;const B=O.getAttributes();for(const ie in B)if(B[ie].location>=0){let X=$[ie];X===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(X=S.instanceColor));const re={};re.attribute=X,X&&X.data&&(re.data=X.data),V[ie]=re,Z++}s.attributes=V,s.attributesNum=Z,s.index=I}function v(){const S=s.newAttributes;for(let P=0,O=S.length;P<O;P++)S[P]=0}function p(S){d(S,0)}function d(S,P){const O=s.newAttributes,I=s.enabledAttributes,V=s.attributeDivisors;O[S]=1,I[S]===0&&(i.enableVertexAttribArray(S),I[S]=1),V[S]!==P&&(i.vertexAttribDivisor(S,P),V[S]=P)}function y(){const S=s.newAttributes,P=s.enabledAttributes;for(let O=0,I=P.length;O<I;O++)P[O]!==S[O]&&(i.disableVertexAttribArray(O),P[O]=0)}function A(S,P,O,I,V,$,Z){Z===!0?i.vertexAttribIPointer(S,P,O,V,$):i.vertexAttribPointer(S,P,O,I,V,$)}function E(S,P,O,I){v();const V=I.attributes,$=O.getAttributes(),Z=P.defaultAttributeValues;for(const B in $){const ie=$[B];if(ie.location>=0){let H=V[B];if(H===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(H=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(H=S.instanceColor)),H!==void 0){const X=H.normalized,re=H.itemSize,k=e.get(H);if(k===void 0)continue;const K=k.buffer,me=k.type,ye=k.bytesPerElement,Y=me===i.INT||me===i.UNSIGNED_INT||H.gpuType===Yo;if(H.isInterleavedBufferAttribute){const te=H.data,oe=te.stride,he=H.offset;if(te.isInstancedInterleavedBuffer){for(let pe=0;pe<ie.locationSize;pe++)d(ie.location+pe,te.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let pe=0;pe<ie.locationSize;pe++)p(ie.location+pe);i.bindBuffer(i.ARRAY_BUFFER,K);for(let pe=0;pe<ie.locationSize;pe++)A(ie.location+pe,re/ie.locationSize,me,X,oe*ye,(he+re/ie.locationSize*pe)*ye,Y)}else{if(H.isInstancedBufferAttribute){for(let te=0;te<ie.locationSize;te++)d(ie.location+te,H.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let te=0;te<ie.locationSize;te++)p(ie.location+te);i.bindBuffer(i.ARRAY_BUFFER,K);for(let te=0;te<ie.locationSize;te++)A(ie.location+te,re/ie.locationSize,me,X,re*ye,re/ie.locationSize*te*ye,Y)}}else if(Z!==void 0){const X=Z[B];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(ie.location,X);break;case 3:i.vertexAttrib3fv(ie.location,X);break;case 4:i.vertexAttrib4fv(ie.location,X);break;default:i.vertexAttrib1fv(ie.location,X)}}}}y()}function C(){z();for(const S in n){const P=n[S];for(const O in P){const I=P[O];for(const V in I)h(I[V].object),delete I[V];delete P[O]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const O in P){const I=P[O];for(const V in I)h(I[V].object),delete I[V];delete P[O]}delete n[S.id]}function R(S){for(const P in n){const O=n[P];if(O[S.id]===void 0)continue;const I=O[S.id];for(const V in I)h(I[V].object),delete I[V];delete O[S.id]}}function z(){x(),o=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:z,resetDefaultState:x,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function Ff(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];t.update(m,n,1)}function l(c,h,u,f){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Of(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==mn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const z=R===Wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==en&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Sn&&!z)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:y,maxVaryings:A,maxFragmentUniforms:E,maxSamples:C,samples:b}}function Bf(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new di,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||r;return r=f,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!r||g===null||g.length===0||s&&!p)s?h(null):c();else{const y=s?0:n,A=y*4;let E=d.clippingState||null;l.value=E,E=h(g,f,A,m);for(let C=0;C!==A;++C)E[C]=t[C];d.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const d=m+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let A=0,E=m;A!==v;++A,E+=4)o.copy(u[A]).applyMatrix4(y,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function zf(i){let e=new WeakMap;function t(o,a){return a===no?o.mapping=xi:a===io&&(o.mapping=Xi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===no||a===io)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ql(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const ti=4,Va=[.125,.215,.35,.446,.526,.582],mi=20,kf=256,or=new la,Wa=new je;let zs=null,ks=0,Gs=0,Hs=!1;const Gf=new N;class Xa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=Gf}=s;zs=this._renderer.getRenderTarget(),ks=this._renderer.getActiveCubeFace(),Gs=this._renderer.getActiveMipmapLevel(),Hs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ya(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zs,ks,Gs),this._renderer.xr.enabled=Hs,e.scissorTest=!1,Ni(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===Xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zs=this._renderer.getRenderTarget(),ks=this._renderer.getActiveCubeFace(),Gs=this._renderer.getActiveMipmapLevel(),Hs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:At,minFilter:At,generateMipmaps:!1,type:Wn,format:mn,colorSpace:Yi,depthBuffer:!1},r=$a(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$a(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Hf(s)),this._blurMaterial=Wf(s,e,t),this._ggxMaterial=Vf(s,e,t)}return r}_compileMaterial(e){const t=new Ft(new Pn,e);this._renderer.compile(t,or)}_sceneToCubeUV(e,t,n,r,s){const l=new rn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,m=u.toneMapping;u.getClearColor(Wa),u.toneMapping=Tn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ft(new $n,new gn({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,p=v.material;let d=!1;const y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,d=!0):(p.color.copy(Wa),d=!0);for(let A=0;A<6;A++){const E=A%3;E===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[A],s.y,s.z)):E===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[A]));const C=this._cubeSize;Ni(r,E*C,A>2?C:0,C,C),u.setRenderTarget(r),d&&u.render(v,l),u.render(e,l)}u.toneMapping=m,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===xi||e.mapping===Xi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ya());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ni(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,or)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,m=u*f,{_lodMax:g}=this,v=this._sizeLods[n],p=3*v*(n>g-ti?n-g+ti:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=g-t,Ni(s,p,d,3*v,2*v),r.setRenderTarget(s),r.render(a,or),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Ni(e,p,d,3*v,2*v),r.setRenderTarget(e),r.render(a,or)}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ot("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[r];u.material=c;const f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*mi-1),v=s/g,p=isFinite(s)?1+Math.floor(h*v):mi;p>mi&&Ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${mi}`);const d=[];let y=0;for(let R=0;R<mi;++R){const z=R/v,x=Math.exp(-z*z/2);d.push(x),R===0?y+=x:R<p&&(y+=2*x)}for(let R=0;R<d.length;R++)d[R]=d[R]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:A}=this;f.dTheta.value=g,f.mipInt.value=A-n;const E=this._sizeLods[r],C=3*E*(r>A-ti?r-A+ti:0),b=4*(this._cubeSize-E);Ni(t,C,b,3*E,2*E),l.setRenderTarget(t),l.render(u,or)}}function Hf(i){const e=[],t=[],n=[];let r=i;const s=i-ti+1+Va.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-ti?l=Va[o-i+ti-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,v=3,p=2,d=1,y=new Float32Array(v*g*m),A=new Float32Array(p*g*m),E=new Float32Array(d*g*m);for(let b=0;b<m;b++){const R=b%3*2/3-1,z=b>2?0:-1,x=[R,z,0,R+2/3,z,0,R+2/3,z+1,0,R,z,0,R+2/3,z+1,0,R,z+1,0];y.set(x,v*g*b),A.set(f,p*g*b);const S=[b,b,b,b,b,b];E.set(S,d*g*b)}const C=new Pn;C.setAttribute("position",new sn(y,v)),C.setAttribute("uv",new sn(A,p)),C.setAttribute("faceIndex",new sn(E,d)),n.push(new Ft(C,null)),r>ti&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function $a(i,e,t){const n=new wn(i,e,t);return n.texture.mapping=cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ni(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Vf(i,e,t){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:us(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Wf(i,e,t){const n=new Float32Array(mi),r=new N(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:us(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Ya(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:us(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function qa(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:us(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function us(){return`

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
	`}function Xf(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===no||l===io,h=l===xi||l===Xi;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Xa(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return c&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new Xa(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $f(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Sr("WebGLRenderer: "+n+" extension not supported."),r}}}function Yf(i,e,t,n){const r={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function c(u){const f=[],m=u.index,g=u.attributes.position;let v=0;if(m!==null){const y=m.array;v=m.version;for(let A=0,E=y.length;A<E;A+=3){const C=y[A+0],b=y[A+1],R=y[A+2];f.push(C,b,b,R,R,C)}}else if(g!==void 0){const y=g.array;v=g.version;for(let A=0,E=y.length/3-1;A<E;A+=3){const C=A+0,b=A+1,R=A+2;f.push(C,b,b,R,R,C)}}else return;const p=new(Wl(f)?Zl:ql)(f,1);p.version=v;const d=s.get(u);d&&e.remove(d),s.set(u,p)}function h(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function qf(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,m){i.drawElements(n,m,s,f*o),t.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,f*o,g),t.update(m,n,g))}function h(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];t.update(p,n,1)}function u(f,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/o,m[d],v[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,v,0,g);let d=0;for(let y=0;y<g;y++)d+=m[y]*v[y];t.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Zf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:ot("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Kf(i,e,t){const n=new WeakMap,r=new Tt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let S=function(){z.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var m=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),p===!0&&(E=3);let C=a.attributes.position.count*E,b=1;C>e.maxTextureSize&&(b=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*b*4*u),z=new Xl(R,C,b,u);z.type=Sn,z.needsUpdate=!0;const x=E*4;for(let P=0;P<u;P++){const O=d[P],I=y[P],V=A[P],$=C*b*4*P;for(let Z=0;Z<O.count;Z++){const B=Z*x;g===!0&&(r.fromBufferAttribute(O,Z),R[$+B+0]=r.x,R[$+B+1]=r.y,R[$+B+2]=r.z,R[$+B+3]=0),v===!0&&(r.fromBufferAttribute(I,Z),R[$+B+4]=r.x,R[$+B+5]=r.y,R[$+B+6]=r.z,R[$+B+7]=0),p===!0&&(r.fromBufferAttribute(V,Z),R[$+B+8]=r.x,R[$+B+9]=r.y,R[$+B+10]=r.z,R[$+B+11]=V.itemSize===4?r.w:1)}}f={count:u,texture:z,size:new lt(C,b)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function jf(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Jf={[Cl]:"LINEAR_TONE_MAPPING",[Pl]:"REINHARD_TONE_MAPPING",[Il]:"CINEON_TONE_MAPPING",[Ll]:"ACES_FILMIC_TONE_MAPPING",[Ul]:"AGX_TONE_MAPPING",[Nl]:"NEUTRAL_TONE_MAPPING",[Dl]:"CUSTOM_TONE_MAPPING"};function Qf(i,e,t,n,r){const s=new wn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),o=new wn(e,t,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),a=new Pn;a.setAttribute("position",new Vn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Vn([0,2,0,0,2,0],2));const l=new Bu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ft(a,l),h=new la(-1,1,1,-1,0,1);let u=null,f=null,m=!1,g,v=null,p=[],d=!1;this.setSize=function(y,A){s.setSize(y,A),o.setSize(y,A);for(let E=0;E<p.length;E++){const C=p[E];C.setSize&&C.setSize(y,A)}},this.setEffects=function(y){p=y,d=p.length>0&&p[0].isRenderPass===!0;const A=s.width,E=s.height;for(let C=0;C<p.length;C++){const b=p[C];b.setSize&&b.setSize(A,E)}},this.begin=function(y,A){if(m||y.toneMapping===Tn&&p.length===0)return!1;if(v=A,A!==null){const E=A.width,C=A.height;(s.width!==E||s.height!==C)&&this.setSize(E,C)}return d===!1&&y.setRenderTarget(s),g=y.toneMapping,y.toneMapping=Tn,!0},this.hasRenderPass=function(){return d},this.end=function(y,A){y.toneMapping=g,m=!0;let E=s,C=o;for(let b=0;b<p.length;b++){const R=p[b];if(R.enabled!==!1&&(R.render(y,C,E,A),R.needsSwap!==!1)){const z=E;E=C,C=z}}if(u!==y.outputColorSpace||f!==y.toneMapping){u=y.outputColorSpace,f=y.toneMapping,l.defines={},at.getTransfer(u)===pt&&(l.defines.SRGB_TRANSFER="");const b=Jf[f];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(v),y.render(c,h),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const ic=new zt,zo=new yr(1,1),rc=new Xl,sc=new pu,oc=new Jl,Za=[],Ka=[],ja=new Float32Array(16),Ja=new Float32Array(9),Qa=new Float32Array(4);function Qi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Za[r];if(s===void 0&&(s=new Float32Array(r),Za[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function hs(i,e){let t=Ka[e];t===void 0&&(t=new Int32Array(e),Ka[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ep(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function rp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;Qa.set(n),i.uniformMatrix2fv(this.addr,!1,Qa),Lt(t,n)}}function sp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;Ja.set(n),i.uniformMatrix3fv(this.addr,!1,Ja),Lt(t,n)}}function op(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;ja.set(n),i.uniformMatrix4fv(this.addr,!1,ja),Lt(t,n)}}function ap(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function hp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function mp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(zo.compareFunction=t.isReversedDepthBuffer()?ta:ea,s=zo):s=ic,t.setTexture2D(e||s,r)}function gp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||sc,r)}function _p(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||oc,r)}function xp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||rc,r)}function vp(i){switch(i){case 5126:return ep;case 35664:return tp;case 35665:return np;case 35666:return ip;case 35674:return rp;case 35675:return sp;case 35676:return op;case 5124:case 35670:return ap;case 35667:case 35671:return lp;case 35668:case 35672:return cp;case 35669:case 35673:return up;case 5125:return hp;case 36294:return dp;case 36295:return fp;case 36296:return pp;case 35678:case 36198:case 36298:case 36306:case 35682:return mp;case 35679:case 36299:case 36307:return gp;case 35680:case 36300:case 36308:case 36293:return _p;case 36289:case 36303:case 36311:case 36292:return xp}}function Mp(i,e){i.uniform1fv(this.addr,e)}function Sp(i,e){const t=Qi(e,this.size,2);i.uniform2fv(this.addr,t)}function bp(i,e){const t=Qi(e,this.size,3);i.uniform3fv(this.addr,t)}function yp(i,e){const t=Qi(e,this.size,4);i.uniform4fv(this.addr,t)}function Ep(i,e){const t=Qi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Tp(i,e){const t=Qi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wp(i,e){const t=Qi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ap(i,e){i.uniform1iv(this.addr,e)}function Rp(i,e){i.uniform2iv(this.addr,e)}function Cp(i,e){i.uniform3iv(this.addr,e)}function Pp(i,e){i.uniform4iv(this.addr,e)}function Ip(i,e){i.uniform1uiv(this.addr,e)}function Lp(i,e){i.uniform2uiv(this.addr,e)}function Dp(i,e){i.uniform3uiv(this.addr,e)}function Up(i,e){i.uniform4uiv(this.addr,e)}function Np(i,e,t){const n=this.cache,r=e.length,s=hs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=zo:o=ic;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function Fp(i,e,t){const n=this.cache,r=e.length,s=hs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||sc,s[o])}function Op(i,e,t){const n=this.cache,r=e.length,s=hs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||oc,s[o])}function Bp(i,e,t){const n=this.cache,r=e.length,s=hs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||rc,s[o])}function zp(i){switch(i){case 5126:return Mp;case 35664:return Sp;case 35665:return bp;case 35666:return yp;case 35674:return Ep;case 35675:return Tp;case 35676:return wp;case 5124:case 35670:return Ap;case 35667:case 35671:return Rp;case 35668:case 35672:return Cp;case 35669:case 35673:return Pp;case 5125:return Ip;case 36294:return Lp;case 36295:return Dp;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Op;case 36289:case 36303:case 36311:case 36292:return Bp}}class kp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vp(t.type)}}class Gp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zp(t.type)}}class Hp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Vs=/(\w+)(\])?(\[|\.)?/g;function el(i,e){i.seq.push(e),i.map[e.id]=e}function Vp(i,e,t){const n=i.name,r=n.length;for(Vs.lastIndex=0;;){const s=Vs.exec(n),o=Vs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){el(t,c===void 0?new kp(a,i,e):new Gp(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Hp(a),el(t,u)),t=u}}}class Qr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Vp(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function tl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Wp=37297;let Xp=0;function $p(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const nl=new Qe;function Yp(i){at._getMatrix(nl,at.workingColorSpace,i);const e=`mat3( ${nl.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case es:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function il(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+$p(i.getShaderSource(e),a)}else return s}function qp(i,e){const t=Yp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Zp={[Cl]:"Linear",[Pl]:"Reinhard",[Il]:"Cineon",[Ll]:"ACESFilmic",[Ul]:"AgX",[Nl]:"Neutral",[Dl]:"Custom"};function Kp(i,e){const t=Zp[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xr=new N;function jp(){at.getLuminanceCoefficients(Xr);const i=Xr.x.toFixed(4),e=Xr.y.toFixed(4),t=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function Qp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function em(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ur(i){return i!==""}function rl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ko(i){return i.replace(tm,im)}const nm=new Map;function im(i,e){let t=et[e];if(t===void 0){const n=nm.get(e);if(n!==void 0)t=et[n],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ko(t)}const rm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(i){return i.replace(rm,sm)}function sm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function al(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const om={[qr]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function am(i){return om[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lm={[xi]:"ENVMAP_TYPE_CUBE",[Xi]:"ENVMAP_TYPE_CUBE",[cs]:"ENVMAP_TYPE_CUBE_UV"};function cm(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":lm[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const um={[Xi]:"ENVMAP_MODE_REFRACTION"};function hm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":um[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dm={[ls]:"ENVMAP_BLENDING_MULTIPLY",[Uc]:"ENVMAP_BLENDING_MIX",[Nc]:"ENVMAP_BLENDING_ADD"};function fm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":dm[i.combine]||"ENVMAP_BLENDING_NONE"}function pm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function mm(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=am(t),c=cm(t),h=hm(t),u=fm(t),f=pm(t),m=Jp(t),g=Qp(s),v=r.createProgram();let p,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ur).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ur).join(`
`),d.length>0&&(d+=`
`)):(p=[al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),d=[al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?et.tonemapping_pars_fragment:"",t.toneMapping!==Tn?Kp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,qp("linearToOutputTexel",t.outputColorSpace),jp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),o=ko(o),o=rl(o,t),o=sl(o,t),a=ko(a),a=rl(a,t),a=sl(a,t),o=ol(o),a=ol(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===_a?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=y+p+o,E=y+d+a,C=tl(r,r.VERTEX_SHADER,A),b=tl(r,r.FRAGMENT_SHADER,E);r.attachShader(v,C),r.attachShader(v,b),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(P){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(v)||"",I=r.getShaderInfoLog(C)||"",V=r.getShaderInfoLog(b)||"",$=O.trim(),Z=I.trim(),B=V.trim();let ie=!0,H=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,C,b);else{const X=il(r,C,"vertex"),re=il(r,b,"fragment");ot("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+$+`
`+X+`
`+re)}else $!==""?Ze("WebGLProgram: Program Info Log:",$):(Z===""||B==="")&&(H=!1);H&&(P.diagnostics={runnable:ie,programLog:$,vertexShader:{log:Z,prefix:p},fragmentShader:{log:B,prefix:d}})}r.deleteShader(C),r.deleteShader(b),z=new Qr(r,v),x=em(r,v)}let z;this.getUniforms=function(){return z===void 0&&R(this),z};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,Wp)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=b,this}let gm=0;class _m{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xm(e),t.set(e,n)),n}}class xm{constructor(e){this.id=gm++,this.code=e,this.usedTimes=0}}function vm(i,e,t,n,r,s,o){const a=new sa,l=new _m,c=new Set,h=[],u=new Map,f=r.logarithmicDepthBuffer;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,S,P,O,I){const V=O.fog,$=I.geometry,Z=x.isMeshStandardMaterial?O.environment:null,B=(x.isMeshStandardMaterial?t:e).get(x.envMap||Z),ie=B&&B.mapping===cs?B.image.height:null,H=g[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&Ze("WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const X=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,re=X!==void 0?X.length:0;let k=0;$.morphAttributes.position!==void 0&&(k=1),$.morphAttributes.normal!==void 0&&(k=2),$.morphAttributes.color!==void 0&&(k=3);let K,me,ye,Y;if(H){const ht=Mn[H];K=ht.vertexShader,me=ht.fragmentShader}else K=x.vertexShader,me=x.fragmentShader,l.update(x),ye=l.getVertexShaderID(x),Y=l.getFragmentShaderID(x);const te=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),he=I.isInstancedMesh===!0,pe=I.isBatchedMesh===!0,De=!!x.map,nt=!!x.matcap,Ge=!!B,it=!!x.aoMap,se=!!x.lightMap,xe=!!x.bumpMap,Te=!!x.normalMap,L=!!x.displacementMap,Je=!!x.emissiveMap,He=!!x.metalnessMap,st=!!x.roughnessMap,Ue=x.anisotropy>0,T=x.clearcoat>0,_=x.dispersion>0,F=x.iridescence>0,Q=x.sheen>0,ae=x.transmission>0,ne=Ue&&!!x.anisotropyMap,Le=T&&!!x.clearcoatMap,be=T&&!!x.clearcoatNormalMap,Fe=T&&!!x.clearcoatRoughnessMap,Xe=F&&!!x.iridescenceMap,fe=F&&!!x.iridescenceThicknessMap,Me=Q&&!!x.sheenColorMap,Pe=Q&&!!x.sheenRoughnessMap,Oe=!!x.specularMap,Se=!!x.specularColorMap,Ke=!!x.specularIntensityMap,U=ae&&!!x.transmissionMap,Ae=ae&&!!x.thicknessMap,ge=!!x.gradientMap,Ce=!!x.alphaMap,de=x.alphaTest>0,le=!!x.alphaHash,ve=!!x.extensions;let qe=Tn;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(qe=i.toneMapping);const ut={shaderID:H,shaderType:x.type,shaderName:x.name,vertexShader:K,fragmentShader:me,defines:x.defines,customVertexShaderID:ye,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:pe,batchingColor:pe&&I._colorsTexture!==null,instancing:he,instancingColor:he&&I.instanceColor!==null,instancingMorph:he&&I.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Yi,alphaToCoverage:!!x.alphaToCoverage,map:De,matcap:nt,envMap:Ge,envMapMode:Ge&&B.mapping,envMapCubeUVHeight:ie,aoMap:it,lightMap:se,bumpMap:xe,normalMap:Te,displacementMap:L,emissiveMap:Je,normalMapObjectSpace:Te&&x.normalMapType===Bc,normalMapTangentSpace:Te&&x.normalMapType===Qo,metalnessMap:He,roughnessMap:st,anisotropy:Ue,anisotropyMap:ne,clearcoat:T,clearcoatMap:Le,clearcoatNormalMap:be,clearcoatRoughnessMap:Fe,dispersion:_,iridescence:F,iridescenceMap:Xe,iridescenceThicknessMap:fe,sheen:Q,sheenColorMap:Me,sheenRoughnessMap:Pe,specularMap:Oe,specularColorMap:Se,specularIntensityMap:Ke,transmission:ae,transmissionMap:U,thicknessMap:Ae,gradientMap:ge,opaque:x.transparent===!1&&x.blending===Hi&&x.alphaToCoverage===!1,alphaMap:Ce,alphaTest:de,alphaHash:le,combine:x.combine,mapUv:De&&v(x.map.channel),aoMapUv:it&&v(x.aoMap.channel),lightMapUv:se&&v(x.lightMap.channel),bumpMapUv:xe&&v(x.bumpMap.channel),normalMapUv:Te&&v(x.normalMap.channel),displacementMapUv:L&&v(x.displacementMap.channel),emissiveMapUv:Je&&v(x.emissiveMap.channel),metalnessMapUv:He&&v(x.metalnessMap.channel),roughnessMapUv:st&&v(x.roughnessMap.channel),anisotropyMapUv:ne&&v(x.anisotropyMap.channel),clearcoatMapUv:Le&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:be&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&v(x.sheenRoughnessMap.channel),specularMapUv:Oe&&v(x.specularMap.channel),specularColorMapUv:Se&&v(x.specularColorMap.channel),specularIntensityMapUv:Ke&&v(x.specularIntensityMap.channel),transmissionMapUv:U&&v(x.transmissionMap.channel),thicknessMapUv:Ae&&v(x.thicknessMap.channel),alphaMapUv:Ce&&v(x.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Te||Ue),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!$.attributes.uv&&(De||Ce),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:oe,skinning:I.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:k,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,decodeVideoTexture:De&&x.map.isVideoTexture===!0&&at.getTransfer(x.map.colorSpace)===pt,decodeVideoTextureEmissive:Je&&x.emissiveMap.isVideoTexture===!0&&at.getTransfer(x.emissiveMap.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===zn,flipSided:x.side===Zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ve&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&x.extensions.multiDraw===!0||pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function d(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(y(S,x),A(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function y(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function A(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),x.push(a.mask)}function E(x){const S=g[x.type];let P;if(S){const O=Mn[S];P=Au.clone(O.uniforms)}else P=x.uniforms;return P}function C(x,S){let P=u.get(S);return P!==void 0?++P.usedTimes:(P=new mm(i,S,x,s),h.push(P),u.set(S,P)),P}function b(x){if(--x.usedTimes===0){const S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),u.delete(x.cacheKey),x.destroy()}}function R(x){l.remove(x)}function z(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:C,releaseProgram:b,releaseShaderCache:R,programs:h,dispose:z}}function Mm(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Sm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ll(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,f,m,g,v,p){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=p),e++,d}function a(u,f,m,g,v,p){const d=o(u,f,m,g,v,p);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(u,f,m,g,v,p){const d=o(u,f,m,g,v,p);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||Sm),n.length>1&&n.sort(f||ll),r.length>1&&r.sort(f||ll)}function h(){for(let u=e,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function bm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new cl,i.set(n,[o])):r>=s.length?(o=new cl,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ym(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new je};break;case"SpotLight":t={position:new N,direction:new N,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Em(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Tm=0;function wm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Am(i){const e=new ym,t=Em(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const r=new N,s=new vt,o=new vt;function a(c){let h=0,u=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let m=0,g=0,v=0,p=0,d=0,y=0,A=0,E=0,C=0,b=0,R=0;c.sort(wm);for(let x=0,S=c.length;x<S;x++){const P=c[x],O=P.color,I=P.intensity,V=P.distance;let $=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===$i?$=P.shadow.map.texture:$=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=O.r*I,u+=O.g*I,f+=O.b*I;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(P.sh.coefficients[Z],I);R++}else if(P.isDirectionalLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,ie=t.get(P);ie.shadowIntensity=B.intensity,ie.shadowBias=B.bias,ie.shadowNormalBias=B.normalBias,ie.shadowRadius=B.radius,ie.shadowMapSize=B.mapSize,n.directionalShadow[m]=ie,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=P.shadow.matrix,y++}n.directional[m]=Z,m++}else if(P.isSpotLight){const Z=e.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(O).multiplyScalar(I),Z.distance=V,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,n.spot[v]=Z;const B=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,B.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[v]=B.matrix,P.castShadow){const ie=t.get(P);ie.shadowIntensity=B.intensity,ie.shadowBias=B.bias,ie.shadowNormalBias=B.normalBias,ie.shadowRadius=B.radius,ie.shadowMapSize=B.mapSize,n.spotShadow[v]=ie,n.spotShadowMap[v]=$,E++}v++}else if(P.isRectAreaLight){const Z=e.get(P);Z.color.copy(O).multiplyScalar(I),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=Z,p++}else if(P.isPointLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const B=P.shadow,ie=t.get(P);ie.shadowIntensity=B.intensity,ie.shadowBias=B.bias,ie.shadowNormalBias=B.normalBias,ie.shadowRadius=B.radius,ie.shadowMapSize=B.mapSize,ie.shadowCameraNear=B.camera.near,ie.shadowCameraFar=B.camera.far,n.pointShadow[g]=ie,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=P.shadow.matrix,A++}n.point[g]=Z,g++}else if(P.isHemisphereLight){const Z=e.get(P);Z.skyColor.copy(P.color).multiplyScalar(I),Z.groundColor.copy(P.groundColor).multiplyScalar(I),n.hemi[d]=Z,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const z=n.hash;(z.directionalLength!==m||z.pointLength!==g||z.spotLength!==v||z.rectAreaLength!==p||z.hemiLength!==d||z.numDirectionalShadows!==y||z.numPointShadows!==A||z.numSpotShadows!==E||z.numSpotMaps!==C||z.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=E+C-b,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,z.directionalLength=m,z.pointLength=g,z.spotLength=v,z.rectAreaLength=p,z.hemiLength=d,z.numDirectionalShadows=y,z.numPointShadows=A,z.numSpotShadows=E,z.numSpotMaps=C,z.numLightProbes=R,n.version=Tm++)}function l(c,h){let u=0,f=0,m=0,g=0,v=0;const p=h.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){const A=c[d];if(A.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),u++}else if(A.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(A.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(A.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(A.width*.5,0,0),E.halfHeight.set(0,A.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(p),f++}else if(A.isHemisphereLight){const E=n.hemi[v];E.direction.setFromMatrixPosition(A.matrixWorld),E.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function ul(i){const e=new Am(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Rm(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ul(i),e.set(r,[a])):s>=o.length?(a=new ul(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Cm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pm=`uniform sampler2D shadow_pass;
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
}`,Im=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Lm=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],hl=new vt,ar=new N,Ws=new N;function Dm(i,e,t){let n=new oa;const r=new lt,s=new lt,o=new Tt,a=new ku,l=new Gu,c={},h=t.maxTextureSize,u={[ii]:Zt,[Zt]:ii,[zn]:zn},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Cm,fragmentShader:Pm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Pn;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ft(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qr;let d=this.type;this.render=function(b,R,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;b.type===mc&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),b.type=qr);const x=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Gn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const I=d!==this.type;I&&R.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach($=>$.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,$=b.length;V<$;V++){const Z=b[V],B=Z.shadow;if(B===void 0){Ze("WebGLShadowMap:",Z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const ie=B.getFrameExtents();if(r.multiply(ie),s.copy(B.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ie.x),r.x=s.x*ie.x,B.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ie.y),r.y=s.y*ie.y,B.mapSize.y=s.y)),B.map===null||I===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===cr){if(Z.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new wn(r.x,r.y,{format:$i,type:Wn,minFilter:At,magFilter:At,generateMipmaps:!1}),B.map.texture.name=Z.name+".shadowMap",B.map.depthTexture=new yr(r.x,r.y,Sn),B.map.depthTexture.name=Z.name+".shadowMapDepth",B.map.depthTexture.format=Xn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Bt,B.map.depthTexture.magFilter=Bt}else{Z.isPointLight?(B.map=new Ql(r.x),B.map.depthTexture=new Ou(r.x,Rn)):(B.map=new wn(r.x,r.y),B.map.depthTexture=new yr(r.x,r.y,Rn)),B.map.depthTexture.name=Z.name+".shadowMap",B.map.depthTexture.format=Xn;const X=i.state.buffers.depth.getReversed();this.type===qr?(B.map.depthTexture.compareFunction=X?ta:ea,B.map.depthTexture.minFilter=At,B.map.depthTexture.magFilter=At):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Bt,B.map.depthTexture.magFilter=Bt)}B.camera.updateProjectionMatrix()}const H=B.map.isWebGLCubeRenderTarget?6:1;for(let X=0;X<H;X++){if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,X),i.clear();else{X===0&&(i.setRenderTarget(B.map),i.clear());const re=B.getViewport(X);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),O.viewport(o)}if(Z.isPointLight){const re=B.camera,k=B.matrix,K=Z.distance||re.far;K!==re.far&&(re.far=K,re.updateProjectionMatrix()),ar.setFromMatrixPosition(Z.matrixWorld),re.position.copy(ar),Ws.copy(re.position),Ws.add(Im[X]),re.up.copy(Lm[X]),re.lookAt(Ws),re.updateMatrixWorld(),k.makeTranslation(-ar.x,-ar.y,-ar.z),hl.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),B._frustum.setFromProjectionMatrix(hl,re.coordinateSystem,re.reversedDepth)}else B.updateMatrices(Z);n=B.getFrustum(),E(R,z,B.camera,Z,this.type)}B.isPointLightShadow!==!0&&this.type===cr&&y(B,z),B.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(x,S,P)};function y(b,R){const z=e.update(v);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new wn(r.x,r.y,{format:$i,type:Wn})),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,z,f,v,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,z,m,v,null)}function A(b,R,z,x){let S=null;const P=z.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)S=P;else if(S=z.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=S.uuid,I=R.uuid;let V=c[O];V===void 0&&(V={},c[O]=V);let $=V[I];$===void 0&&($=S.clone(),V[I]=$,R.addEventListener("dispose",C)),S=$}if(S.visible=R.visible,S.wireframe=R.wireframe,x===cr?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,z.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=i.properties.get(S);O.light=z}return S}function E(b,R,z,x,S){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===cr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld);const I=e.update(b),V=b.material;if(Array.isArray(V)){const $=I.groups;for(let Z=0,B=$.length;Z<B;Z++){const ie=$[Z],H=V[ie.materialIndex];if(H&&H.visible){const X=A(b,H,x,S);b.onBeforeShadow(i,b,R,z,I,X,ie),i.renderBufferDirect(z,null,I,X,b,ie),b.onAfterShadow(i,b,R,z,I,X,ie)}}}else if(V.visible){const $=A(b,V,x,S);b.onBeforeShadow(i,b,R,z,I,$,null),i.renderBufferDirect(z,null,I,$,b,null),b.onAfterShadow(i,b,R,z,I,$,null)}}const O=b.children;for(let I=0,V=O.length;I<V;I++)E(O[I],R,z,x,S)}function C(b){b.target.removeEventListener("dispose",C);for(const z in c){const x=c[z],S=b.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}const Um={[Zs]:Ks,[js]:eo,[Js]:to,[Wi]:Qs,[Ks]:Zs,[eo]:js,[to]:Js,[Qs]:Wi};function Nm(i,e){function t(){let U=!1;const Ae=new Tt;let ge=null;const Ce=new Tt(0,0,0,0);return{setMask:function(de){ge!==de&&!U&&(i.colorMask(de,de,de,de),ge=de)},setLocked:function(de){U=de},setClear:function(de,le,ve,qe,ut){ut===!0&&(de*=qe,le*=qe,ve*=qe),Ae.set(de,le,ve,qe),Ce.equals(Ae)===!1&&(i.clearColor(de,le,ve,qe),Ce.copy(Ae))},reset:function(){U=!1,ge=null,Ce.set(-1,0,0,0)}}}function n(){let U=!1,Ae=!1,ge=null,Ce=null,de=null;return{setReversed:function(le){if(Ae!==le){const ve=e.get("EXT_clip_control");le?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),Ae=le;const qe=de;de=null,this.setClear(qe)}},getReversed:function(){return Ae},setTest:function(le){le?te(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(le){ge!==le&&!U&&(i.depthMask(le),ge=le)},setFunc:function(le){if(Ae&&(le=Um[le]),Ce!==le){switch(le){case Zs:i.depthFunc(i.NEVER);break;case Ks:i.depthFunc(i.ALWAYS);break;case js:i.depthFunc(i.LESS);break;case Wi:i.depthFunc(i.LEQUAL);break;case Js:i.depthFunc(i.EQUAL);break;case Qs:i.depthFunc(i.GEQUAL);break;case eo:i.depthFunc(i.GREATER);break;case to:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ce=le}},setLocked:function(le){U=le},setClear:function(le){de!==le&&(Ae&&(le=1-le),i.clearDepth(le),de=le)},reset:function(){U=!1,ge=null,Ce=null,de=null,Ae=!1}}}function r(){let U=!1,Ae=null,ge=null,Ce=null,de=null,le=null,ve=null,qe=null,ut=null;return{setTest:function(ht){U||(ht?te(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(ht){Ae!==ht&&!U&&(i.stencilMask(ht),Ae=ht)},setFunc:function(ht,$t,Ht){(ge!==ht||Ce!==$t||de!==Ht)&&(i.stencilFunc(ht,$t,Ht),ge=ht,Ce=$t,de=Ht)},setOp:function(ht,$t,Ht){(le!==ht||ve!==$t||qe!==Ht)&&(i.stencilOp(ht,$t,Ht),le=ht,ve=$t,qe=Ht)},setLocked:function(ht){U=ht},setClear:function(ht){ut!==ht&&(i.clearStencil(ht),ut=ht)},reset:function(){U=!1,Ae=null,ge=null,Ce=null,de=null,le=null,ve=null,qe=null,ut=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,m=[],g=null,v=!1,p=null,d=null,y=null,A=null,E=null,C=null,b=null,R=new je(0,0,0),z=0,x=!1,S=null,P=null,O=null,I=null,V=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,B=0;const ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(ie)[1]),Z=B>=1):ie.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),Z=B>=2);let H=null,X={};const re=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),K=new Tt().fromArray(re),me=new Tt().fromArray(k);function ye(U,Ae,ge,Ce){const de=new Uint8Array(4),le=i.createTexture();i.bindTexture(U,le),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<ge;ve++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(Ae+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return le}const Y={};Y[i.TEXTURE_2D]=ye(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(i.DEPTH_TEST),o.setFunc(Wi),xe(!1),Te(ha),te(i.CULL_FACE),it(Gn);function te(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function oe(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function he(U,Ae){return u[U]!==Ae?(i.bindFramebuffer(U,Ae),u[U]=Ae,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ae),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function pe(U,Ae){let ge=m,Ce=!1;if(U){ge=f.get(Ae),ge===void 0&&(ge=[],f.set(Ae,ge));const de=U.textures;if(ge.length!==de.length||ge[0]!==i.COLOR_ATTACHMENT0){for(let le=0,ve=de.length;le<ve;le++)ge[le]=i.COLOR_ATTACHMENT0+le;ge.length=de.length,Ce=!0}}else ge[0]!==i.BACK&&(ge[0]=i.BACK,Ce=!0);Ce&&i.drawBuffers(ge)}function De(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const nt={[pi]:i.FUNC_ADD,[_c]:i.FUNC_SUBTRACT,[xc]:i.FUNC_REVERSE_SUBTRACT};nt[vc]=i.MIN,nt[Mc]=i.MAX;const Ge={[Sc]:i.ZERO,[bc]:i.ONE,[yc]:i.SRC_COLOR,[Ys]:i.SRC_ALPHA,[Cc]:i.SRC_ALPHA_SATURATE,[Ac]:i.DST_COLOR,[Tc]:i.DST_ALPHA,[Ec]:i.ONE_MINUS_SRC_COLOR,[qs]:i.ONE_MINUS_SRC_ALPHA,[Rc]:i.ONE_MINUS_DST_COLOR,[wc]:i.ONE_MINUS_DST_ALPHA,[Pc]:i.CONSTANT_COLOR,[Ic]:i.ONE_MINUS_CONSTANT_COLOR,[Lc]:i.CONSTANT_ALPHA,[Dc]:i.ONE_MINUS_CONSTANT_ALPHA};function it(U,Ae,ge,Ce,de,le,ve,qe,ut,ht){if(U===Gn){v===!0&&(oe(i.BLEND),v=!1);return}if(v===!1&&(te(i.BLEND),v=!0),U!==gc){if(U!==p||ht!==x){if((d!==pi||E!==pi)&&(i.blendEquation(i.FUNC_ADD),d=pi,E=pi),ht)switch(U){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case da:i.blendFunc(i.ONE,i.ONE);break;case fa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ot("WebGLState: Invalid blending: ",U);break}else switch(U){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case da:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case fa:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pa:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",U);break}y=null,A=null,C=null,b=null,R.set(0,0,0),z=0,p=U,x=ht}return}de=de||Ae,le=le||ge,ve=ve||Ce,(Ae!==d||de!==E)&&(i.blendEquationSeparate(nt[Ae],nt[de]),d=Ae,E=de),(ge!==y||Ce!==A||le!==C||ve!==b)&&(i.blendFuncSeparate(Ge[ge],Ge[Ce],Ge[le],Ge[ve]),y=ge,A=Ce,C=le,b=ve),(qe.equals(R)===!1||ut!==z)&&(i.blendColor(qe.r,qe.g,qe.b,ut),R.copy(qe),z=ut),p=U,x=!1}function se(U,Ae){U.side===zn?oe(i.CULL_FACE):te(i.CULL_FACE);let ge=U.side===Zt;Ae&&(ge=!ge),xe(ge),U.blending===Hi&&U.transparent===!1?it(Gn):it(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Ce=U.stencilWrite;a.setTest(Ce),Ce&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Je(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function xe(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function Te(U){U!==fc?(te(i.CULL_FACE),U!==P&&(U===ha?i.cullFace(i.BACK):U===pc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),P=U}function L(U){U!==O&&(Z&&i.lineWidth(U),O=U)}function Je(U,Ae,ge){U?(te(i.POLYGON_OFFSET_FILL),(I!==Ae||V!==ge)&&(i.polygonOffset(Ae,ge),I=Ae,V=ge)):oe(i.POLYGON_OFFSET_FILL)}function He(U){U?te(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function st(U){U===void 0&&(U=i.TEXTURE0+$-1),H!==U&&(i.activeTexture(U),H=U)}function Ue(U,Ae,ge){ge===void 0&&(H===null?ge=i.TEXTURE0+$-1:ge=H);let Ce=X[ge];Ce===void 0&&(Ce={type:void 0,texture:void 0},X[ge]=Ce),(Ce.type!==U||Ce.texture!==Ae)&&(H!==ge&&(i.activeTexture(ge),H=ge),i.bindTexture(U,Ae||Y[U]),Ce.type=U,Ce.texture=Ae)}function T(){const U=X[H];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(U){ot("WebGLState:",U)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(U){ot("WebGLState:",U)}}function Q(){try{i.texSubImage2D(...arguments)}catch(U){ot("WebGLState:",U)}}function ae(){try{i.texSubImage3D(...arguments)}catch(U){ot("WebGLState:",U)}}function ne(){try{i.compressedTexSubImage2D(...arguments)}catch(U){ot("WebGLState:",U)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(U){ot("WebGLState:",U)}}function be(){try{i.texStorage2D(...arguments)}catch(U){ot("WebGLState:",U)}}function Fe(){try{i.texStorage3D(...arguments)}catch(U){ot("WebGLState:",U)}}function Xe(){try{i.texImage2D(...arguments)}catch(U){ot("WebGLState:",U)}}function fe(){try{i.texImage3D(...arguments)}catch(U){ot("WebGLState:",U)}}function Me(U){K.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),K.copy(U))}function Pe(U){me.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),me.copy(U))}function Oe(U,Ae){let ge=c.get(Ae);ge===void 0&&(ge=new WeakMap,c.set(Ae,ge));let Ce=ge.get(U);Ce===void 0&&(Ce=i.getUniformBlockIndex(Ae,U.name),ge.set(U,Ce))}function Se(U,Ae){const Ce=c.get(Ae).get(U);l.get(Ae)!==Ce&&(i.uniformBlockBinding(Ae,Ce,U.__bindingPointIndex),l.set(Ae,Ce))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},H=null,X={},u={},f=new WeakMap,m=[],g=null,v=!1,p=null,d=null,y=null,A=null,E=null,C=null,b=null,R=new je(0,0,0),z=0,x=!1,S=null,P=null,O=null,I=null,V=null,K.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:oe,bindFramebuffer:he,drawBuffers:pe,useProgram:De,setBlending:it,setMaterial:se,setFlipSided:xe,setCullFace:Te,setLineWidth:L,setPolygonOffset:Je,setScissorTest:He,activeTexture:st,bindTexture:Ue,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:Xe,texImage3D:fe,updateUBOMapping:Oe,uniformBlockBinding:Se,texStorage2D:be,texStorage3D:Fe,texSubImage2D:Q,texSubImage3D:ae,compressedTexSubImage2D:ne,compressedTexSubImage3D:Le,scissor:Me,viewport:Pe,reset:Ke}}function Fm(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return m?new OffscreenCanvas(T,_):ns("canvas")}function v(T,_,F){let Q=1;const ae=Ue(T);if((ae.width>F||ae.height>F)&&(Q=F/Math.max(ae.width,ae.height)),Q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ne=Math.floor(Q*ae.width),Le=Math.floor(Q*ae.height);u===void 0&&(u=g(ne,Le));const be=_?g(ne,Le):u;return be.width=ne,be.height=Le,be.getContext("2d").drawImage(T,0,0,ne,Le),Ze("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ne+"x"+Le+")."),be}else return"data"in T&&Ze("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),T;return T}function p(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(T,_,F,Q,ae=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ne=_;if(_===i.RED&&(F===i.FLOAT&&(ne=i.R32F),F===i.HALF_FLOAT&&(ne=i.R16F),F===i.UNSIGNED_BYTE&&(ne=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(ne=i.R8UI),F===i.UNSIGNED_SHORT&&(ne=i.R16UI),F===i.UNSIGNED_INT&&(ne=i.R32UI),F===i.BYTE&&(ne=i.R8I),F===i.SHORT&&(ne=i.R16I),F===i.INT&&(ne=i.R32I)),_===i.RG&&(F===i.FLOAT&&(ne=i.RG32F),F===i.HALF_FLOAT&&(ne=i.RG16F),F===i.UNSIGNED_BYTE&&(ne=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(ne=i.RG8UI),F===i.UNSIGNED_SHORT&&(ne=i.RG16UI),F===i.UNSIGNED_INT&&(ne=i.RG32UI),F===i.BYTE&&(ne=i.RG8I),F===i.SHORT&&(ne=i.RG16I),F===i.INT&&(ne=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),F===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),F===i.UNSIGNED_INT&&(ne=i.RGB32UI),F===i.BYTE&&(ne=i.RGB8I),F===i.SHORT&&(ne=i.RGB16I),F===i.INT&&(ne=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),F===i.UNSIGNED_INT&&(ne=i.RGBA32UI),F===i.BYTE&&(ne=i.RGBA8I),F===i.SHORT&&(ne=i.RGBA16I),F===i.INT&&(ne=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),_===i.RGBA){const Le=ae?es:at.getTransfer(Q);F===i.FLOAT&&(ne=i.RGBA32F),F===i.HALF_FLOAT&&(ne=i.RGBA16F),F===i.UNSIGNED_BYTE&&(ne=Le===pt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function E(T,_){let F;return T?_===null||_===Rn||_===Mr?F=i.DEPTH24_STENCIL8:_===Sn?F=i.DEPTH32F_STENCIL8:_===vr&&(F=i.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Rn||_===Mr?F=i.DEPTH_COMPONENT24:_===Sn?F=i.DEPTH_COMPONENT32F:_===vr&&(F=i.DEPTH_COMPONENT16),F}function C(T,_){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Bt&&T.minFilter!==At?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function b(T){const _=T.target;_.removeEventListener("dispose",b),z(_),_.isVideoTexture&&h.delete(_)}function R(T){const _=T.target;_.removeEventListener("dispose",R),S(_)}function z(T){const _=n.get(T);if(_.__webglInit===void 0)return;const F=T.source,Q=f.get(F);if(Q){const ae=Q[_.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&x(T),Object.keys(Q).length===0&&f.delete(F)}n.remove(T)}function x(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const F=T.source,Q=f.get(F);delete Q[_.__cacheKey],o.memory.textures--}function S(T){const _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let ae=0;ae<_.__webglFramebuffer[Q].length;ae++)i.deleteFramebuffer(_.__webglFramebuffer[Q][ae]);else i.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[Q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=T.textures;for(let Q=0,ae=F.length;Q<ae;Q++){const ne=n.get(F[Q]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(F[Q])}n.remove(T)}let P=0;function O(){P=0}function I(){const T=P;return T>=r.maxTextures&&Ze("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),P+=1,T}function V(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function $(T,_){const F=n.get(T);if(T.isVideoTexture&&He(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const Q=T.image;if(Q===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,T,_);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function Z(T,_){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Y(F,T,_);return}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function B(T,_){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Y(F,T,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function ie(T,_){const F=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&F.__version!==T.version){te(F,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const H={[xr]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[ro]:i.MIRRORED_REPEAT},X={[Bt]:i.NEAREST,[Fc]:i.NEAREST_MIPMAP_NEAREST,[wr]:i.NEAREST_MIPMAP_LINEAR,[At]:i.LINEAR,[ms]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},re={[zc]:i.NEVER,[Wc]:i.ALWAYS,[kc]:i.LESS,[ea]:i.LEQUAL,[Gc]:i.EQUAL,[ta]:i.GEQUAL,[Hc]:i.GREATER,[Vc]:i.NOTEQUAL};function k(T,_){if(_.type===Sn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===At||_.magFilter===ms||_.magFilter===wr||_.magFilter===gi||_.minFilter===At||_.minFilter===ms||_.minFilter===wr||_.minFilter===gi)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,H[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,H[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,H[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,X[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,X[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,re[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Bt||_.minFilter!==wr&&_.minFilter!==gi||_.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function K(T,_){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",b));const Q=_.source;let ae=f.get(Q);ae===void 0&&(ae={},f.set(Q,ae));const ne=V(_);if(ne!==T.__cacheKey){ae[ne]===void 0&&(ae[ne]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ae[ne].usedTimes++;const Le=ae[T.__cacheKey];Le!==void 0&&(ae[T.__cacheKey].usedTimes--,Le.usedTimes===0&&x(_)),T.__cacheKey=ne,T.__webglTexture=ae[ne].texture}return F}function me(T,_,F){return Math.floor(Math.floor(T/F)/_)}function ye(T,_,F,Q){const ne=T.updateRanges;if(ne.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,Q,_.data);else{ne.sort((fe,Me)=>fe.start-Me.start);let Le=0;for(let fe=1;fe<ne.length;fe++){const Me=ne[Le],Pe=ne[fe],Oe=Me.start+Me.count,Se=me(Pe.start,_.width,4),Ke=me(Me.start,_.width,4);Pe.start<=Oe+1&&Se===Ke&&me(Pe.start+Pe.count-1,_.width,4)===Se?Me.count=Math.max(Me.count,Pe.start+Pe.count-Me.start):(++Le,ne[Le]=Pe)}ne.length=Le+1;const be=i.getParameter(i.UNPACK_ROW_LENGTH),Fe=i.getParameter(i.UNPACK_SKIP_PIXELS),Xe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let fe=0,Me=ne.length;fe<Me;fe++){const Pe=ne[fe],Oe=Math.floor(Pe.start/4),Se=Math.ceil(Pe.count/4),Ke=Oe%_.width,U=Math.floor(Oe/_.width),Ae=Se,ge=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ke),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Ke,U,Ae,ge,F,Q,_.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,be),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Xe)}}function Y(T,_,F){let Q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=i.TEXTURE_3D);const ae=K(T,_),ne=_.source;t.bindTexture(Q,T.__webglTexture,i.TEXTURE0+F);const Le=n.get(ne);if(ne.version!==Le.__version||ae===!0){t.activeTexture(i.TEXTURE0+F);const be=at.getPrimaries(at.workingColorSpace),Fe=_.colorSpace===ei?null:at.getPrimaries(_.colorSpace),Xe=_.colorSpace===ei||be===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let fe=v(_.image,!1,r.maxTextureSize);fe=st(_,fe);const Me=s.convert(_.format,_.colorSpace),Pe=s.convert(_.type);let Oe=A(_.internalFormat,Me,Pe,_.colorSpace,_.isVideoTexture);k(Q,_);let Se;const Ke=_.mipmaps,U=_.isVideoTexture!==!0,Ae=Le.__version===void 0||ae===!0,ge=ne.dataReady,Ce=C(_,fe);if(_.isDepthTexture)Oe=E(_.format===_i,_.type),Ae&&(U?t.texStorage2D(i.TEXTURE_2D,1,Oe,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Oe,fe.width,fe.height,0,Me,Pe,null));else if(_.isDataTexture)if(Ke.length>0){U&&Ae&&t.texStorage2D(i.TEXTURE_2D,Ce,Oe,Ke[0].width,Ke[0].height);for(let de=0,le=Ke.length;de<le;de++)Se=Ke[de],U?ge&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Se.width,Se.height,Me,Pe,Se.data):t.texImage2D(i.TEXTURE_2D,de,Oe,Se.width,Se.height,0,Me,Pe,Se.data);_.generateMipmaps=!1}else U?(Ae&&t.texStorage2D(i.TEXTURE_2D,Ce,Oe,fe.width,fe.height),ge&&ye(_,fe,Me,Pe)):t.texImage2D(i.TEXTURE_2D,0,Oe,fe.width,fe.height,0,Me,Pe,fe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Oe,Ke[0].width,Ke[0].height,fe.depth);for(let de=0,le=Ke.length;de<le;de++)if(Se=Ke[de],_.format!==mn)if(Me!==null)if(U){if(ge)if(_.layerUpdates.size>0){const ve=Ha(Se.width,Se.height,_.format,_.type);for(const qe of _.layerUpdates){const ut=Se.data.subarray(qe*ve/Se.data.BYTES_PER_ELEMENT,(qe+1)*ve/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,qe,Se.width,Se.height,1,Me,ut)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Se.width,Se.height,fe.depth,Me,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,Oe,Se.width,Se.height,fe.depth,0,Se.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Se.width,Se.height,fe.depth,Me,Pe,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,Oe,Se.width,Se.height,fe.depth,0,Me,Pe,Se.data)}else{U&&Ae&&t.texStorage2D(i.TEXTURE_2D,Ce,Oe,Ke[0].width,Ke[0].height);for(let de=0,le=Ke.length;de<le;de++)Se=Ke[de],_.format!==mn?Me!==null?U?ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,de,Oe,Se.width,Se.height,0,Se.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ge&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Se.width,Se.height,Me,Pe,Se.data):t.texImage2D(i.TEXTURE_2D,de,Oe,Se.width,Se.height,0,Me,Pe,Se.data)}else if(_.isDataArrayTexture)if(U){if(Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Oe,fe.width,fe.height,fe.depth),ge)if(_.layerUpdates.size>0){const de=Ha(fe.width,fe.height,_.format,_.type);for(const le of _.layerUpdates){const ve=fe.data.subarray(le*de/fe.data.BYTES_PER_ELEMENT,(le+1)*de/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,fe.width,fe.height,1,Me,Pe,ve)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Me,Pe,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,fe.width,fe.height,fe.depth,0,Me,Pe,fe.data);else if(_.isData3DTexture)U?(Ae&&t.texStorage3D(i.TEXTURE_3D,Ce,Oe,fe.width,fe.height,fe.depth),ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Me,Pe,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,fe.width,fe.height,fe.depth,0,Me,Pe,fe.data);else if(_.isFramebufferTexture){if(Ae)if(U)t.texStorage2D(i.TEXTURE_2D,Ce,Oe,fe.width,fe.height);else{let de=fe.width,le=fe.height;for(let ve=0;ve<Ce;ve++)t.texImage2D(i.TEXTURE_2D,ve,Oe,de,le,0,Me,Pe,null),de>>=1,le>>=1}}else if(Ke.length>0){if(U&&Ae){const de=Ue(Ke[0]);t.texStorage2D(i.TEXTURE_2D,Ce,Oe,de.width,de.height)}for(let de=0,le=Ke.length;de<le;de++)Se=Ke[de],U?ge&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Me,Pe,Se):t.texImage2D(i.TEXTURE_2D,de,Oe,Me,Pe,Se);_.generateMipmaps=!1}else if(U){if(Ae){const de=Ue(fe);t.texStorage2D(i.TEXTURE_2D,Ce,Oe,de.width,de.height)}ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,Pe,fe)}else t.texImage2D(i.TEXTURE_2D,0,Oe,Me,Pe,fe);p(_)&&d(Q),Le.__version=ne.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function te(T,_,F){if(_.image.length!==6)return;const Q=K(T,_),ae=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const ne=n.get(ae);if(ae.version!==ne.__version||Q===!0){t.activeTexture(i.TEXTURE0+F);const Le=at.getPrimaries(at.workingColorSpace),be=_.colorSpace===ei?null:at.getPrimaries(_.colorSpace),Fe=_.colorSpace===ei||Le===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const Xe=_.isCompressedTexture||_.image[0].isCompressedTexture,fe=_.image[0]&&_.image[0].isDataTexture,Me=[];for(let le=0;le<6;le++)!Xe&&!fe?Me[le]=v(_.image[le],!0,r.maxCubemapSize):Me[le]=fe?_.image[le].image:_.image[le],Me[le]=st(_,Me[le]);const Pe=Me[0],Oe=s.convert(_.format,_.colorSpace),Se=s.convert(_.type),Ke=A(_.internalFormat,Oe,Se,_.colorSpace),U=_.isVideoTexture!==!0,Ae=ne.__version===void 0||Q===!0,ge=ae.dataReady;let Ce=C(_,Pe);k(i.TEXTURE_CUBE_MAP,_);let de;if(Xe){U&&Ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Ke,Pe.width,Pe.height);for(let le=0;le<6;le++){de=Me[le].mipmaps;for(let ve=0;ve<de.length;ve++){const qe=de[ve];_.format!==mn?Oe!==null?U?ge&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve,0,0,qe.width,qe.height,Oe,qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve,Ke,qe.width,qe.height,0,qe.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve,0,0,qe.width,qe.height,Oe,Se,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve,Ke,qe.width,qe.height,0,Oe,Se,qe.data)}}}else{if(de=_.mipmaps,U&&Ae){de.length>0&&Ce++;const le=Ue(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Ke,le.width,le.height)}for(let le=0;le<6;le++)if(fe){U?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Me[le].width,Me[le].height,Oe,Se,Me[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ke,Me[le].width,Me[le].height,0,Oe,Se,Me[le].data);for(let ve=0;ve<de.length;ve++){const ut=de[ve].image[le].image;U?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve+1,0,0,ut.width,ut.height,Oe,Se,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve+1,Ke,ut.width,ut.height,0,Oe,Se,ut.data)}}else{U?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Oe,Se,Me[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ke,Oe,Se,Me[le]);for(let ve=0;ve<de.length;ve++){const qe=de[ve];U?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve+1,0,0,Oe,Se,qe.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve+1,Ke,Oe,Se,qe.image[le])}}}p(_)&&d(i.TEXTURE_CUBE_MAP),ne.__version=ae.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function oe(T,_,F,Q,ae,ne){const Le=s.convert(F.format,F.colorSpace),be=s.convert(F.type),Fe=A(F.internalFormat,Le,be,F.colorSpace),Xe=n.get(_),fe=n.get(F);if(fe.__renderTarget=_,!Xe.__hasExternalTextures){const Me=Math.max(1,_.width>>ne),Pe=Math.max(1,_.height>>ne);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,ne,Fe,Me,Pe,_.depth,0,Le,be,null):t.texImage2D(ae,ne,Fe,Me,Pe,0,Le,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Je(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ae,fe.__webglTexture,0,L(_)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ae,fe.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(T,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){const Q=_.depthTexture,ae=Q&&Q.isDepthTexture?Q.type:null,ne=E(_.stencilBuffer,ae),Le=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Je(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(_),ne,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(_),ne,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ne,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,T)}else{const Q=_.textures;for(let ae=0;ae<Q.length;ae++){const ne=Q[ae],Le=s.convert(ne.format,ne.colorSpace),be=s.convert(ne.type),Fe=A(ne.internalFormat,Le,be,ne.colorSpace);Je(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(_),Fe,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(_),Fe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Fe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(T,_,F){const Q=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=n.get(_.depthTexture);if(ae.__renderTarget=_,(!ae.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Q){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,_.depthTexture.addEventListener("dispose",b)),ae.__webglTexture===void 0){ae.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),k(i.TEXTURE_CUBE_MAP,_.depthTexture);const Xe=s.convert(_.depthTexture.format),fe=s.convert(_.depthTexture.type);let Me;_.depthTexture.format===Xn?Me=i.DEPTH_COMPONENT24:_.depthTexture.format===_i&&(Me=i.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Me,_.width,_.height,0,Xe,fe,null)}}else $(_.depthTexture,0);const ne=ae.__webglTexture,Le=L(_),be=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,Fe=_.depthTexture.format===_i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Xn)Je(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Fe,be,ne,0,Le):i.framebufferTexture2D(i.FRAMEBUFFER,Fe,be,ne,0);else if(_.depthTexture.format===_i)Je(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Fe,be,ne,0,Le):i.framebufferTexture2D(i.FRAMEBUFFER,Fe,be,ne,0);else throw new Error("Unknown depthTexture format")}function De(T){const _=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const Q=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Q){const ae=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Q.removeEventListener("dispose",ae)};Q.addEventListener("dispose",ae),_.__depthDisposeCallback=ae}_.__boundDepthTexture=Q}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let Q=0;Q<6;Q++)pe(_.__webglFramebuffer[Q],T,Q);else{const Q=T.texture.mipmaps;Q&&Q.length>0?pe(_.__webglFramebuffer[0],T,0):pe(_.__webglFramebuffer,T,0)}else if(F){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]===void 0)_.__webglDepthbuffer[Q]=i.createRenderbuffer(),he(_.__webglDepthbuffer[Q],T,!1);else{const ae=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=_.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ne)}}else{const Q=T.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),he(_.__webglDepthbuffer,T,!1);else{const ae=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ne)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(T,_,F){const Q=n.get(T);_!==void 0&&oe(Q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&De(T)}function Ge(T){const _=T.texture,F=n.get(T),Q=n.get(_);T.addEventListener("dispose",R);const ae=T.textures,ne=T.isWebGLCubeRenderTarget===!0,Le=ae.length>1;if(Le||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=_.version,o.memory.textures++),ne){F.__webglFramebuffer=[];for(let be=0;be<6;be++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[be]=[];for(let Fe=0;Fe<_.mipmaps.length;Fe++)F.__webglFramebuffer[be][Fe]=i.createFramebuffer()}else F.__webglFramebuffer[be]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let be=0;be<_.mipmaps.length;be++)F.__webglFramebuffer[be]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Le)for(let be=0,Fe=ae.length;be<Fe;be++){const Xe=n.get(ae[be]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Je(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let be=0;be<ae.length;be++){const Fe=ae[be];F.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[be]);const Xe=s.convert(Fe.format,Fe.colorSpace),fe=s.convert(Fe.type),Me=A(Fe.internalFormat,Xe,fe,Fe.colorSpace,T.isXRRenderTarget===!0),Pe=L(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,Me,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,F.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),he(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),k(i.TEXTURE_CUBE_MAP,_);for(let be=0;be<6;be++)if(_.mipmaps&&_.mipmaps.length>0)for(let Fe=0;Fe<_.mipmaps.length;Fe++)oe(F.__webglFramebuffer[be][Fe],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe);else oe(F.__webglFramebuffer[be],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);p(_)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let be=0,Fe=ae.length;be<Fe;be++){const Xe=ae[be],fe=n.get(Xe);let Me=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Me=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,fe.__webglTexture),k(Me,Xe),oe(F.__webglFramebuffer,T,Xe,i.COLOR_ATTACHMENT0+be,Me,0),p(Xe)&&d(Me)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(be=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,Q.__webglTexture),k(be,_),_.mipmaps&&_.mipmaps.length>0)for(let Fe=0;Fe<_.mipmaps.length;Fe++)oe(F.__webglFramebuffer[Fe],T,_,i.COLOR_ATTACHMENT0,be,Fe);else oe(F.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,be,0);p(_)&&d(be),t.unbindTexture()}T.depthBuffer&&De(T)}function it(T){const _=T.textures;for(let F=0,Q=_.length;F<Q;F++){const ae=_[F];if(p(ae)){const ne=y(T),Le=n.get(ae).__webglTexture;t.bindTexture(ne,Le),d(ne),t.unbindTexture()}}}const se=[],xe=[];function Te(T){if(T.samples>0){if(Je(T)===!1){const _=T.textures,F=T.width,Q=T.height;let ae=i.COLOR_BUFFER_BIT;const ne=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(T),be=_.length>1;if(be)for(let Xe=0;Xe<_.length;Xe++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Fe=T.texture.mipmaps;Fe&&Fe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Xe=0;Xe<_.length;Xe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Xe]);const fe=n.get(_[Xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,F,Q,0,0,F,Q,ae,i.NEAREST),l===!0&&(se.length=0,xe.length=0,se.push(i.COLOR_ATTACHMENT0+Xe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(se.push(ne),xe.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,xe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Xe=0;Xe<_.length;Xe++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Xe]);const fe=n.get(_[Xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function L(T){return Math.min(r.maxSamples,T.samples)}function Je(T){const _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function He(T){const _=o.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function st(T,_){const F=T.colorSpace,Q=T.format,ae=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Yi&&F!==ei&&(at.getTransfer(F)===pt?(Q!==mn||ae!==en)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",F)),_}function Ue(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=O,this.setTexture2D=$,this.setTexture2DArray=Z,this.setTexture3D=B,this.setTextureCube=ie,this.rebindTextures=nt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Om(i,e){function t(n,r=ei){let s;const o=at.getTransfer(r);if(n===en)return i.UNSIGNED_BYTE;if(n===qo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ol)return i.BYTE;if(n===Bl)return i.SHORT;if(n===vr)return i.UNSIGNED_SHORT;if(n===Yo)return i.INT;if(n===Rn)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===Wn)return i.HALF_FLOAT;if(n===Gl)return i.ALPHA;if(n===Hl)return i.RGB;if(n===mn)return i.RGBA;if(n===Xn)return i.DEPTH_COMPONENT;if(n===_i)return i.DEPTH_STENCIL;if(n===Vl)return i.RED;if(n===Ko)return i.RED_INTEGER;if(n===$i)return i.RG;if(n===jo)return i.RG_INTEGER;if(n===Jo)return i.RGBA_INTEGER;if(n===Zr||n===Kr||n===jr||n===Jr)if(o===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Zr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Zr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===so||n===oo||n===ao||n===lo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===so)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ao)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===co||n===uo||n===ho||n===fo||n===po||n===mo||n===go)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===co||n===uo)return o===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ho)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===fo)return s.COMPRESSED_R11_EAC;if(n===po)return s.COMPRESSED_SIGNED_R11_EAC;if(n===mo)return s.COMPRESSED_RG11_EAC;if(n===go)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_o||n===xo||n===vo||n===Mo||n===So||n===bo||n===yo||n===Eo||n===To||n===wo||n===Ao||n===Ro||n===Co||n===Po)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===_o)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xo)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vo)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mo)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===So)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bo)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yo)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Eo)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===To)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wo)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ao)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ro)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Co)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Po)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Io||n===Lo||n===Do)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Io)return o===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Do)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uo||n===No||n===Fo||n===Oo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Uo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===No)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Bm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zm=`
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

}`;class km{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new tc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Cn({vertexShader:Bm,fragmentShader:zm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ft(new Ji(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gm extends vi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null;const v=typeof XRWebGLBinding<"u",p=new km,d={},y=t.getContextAttributes();let A=null,E=null;const C=[],b=[],R=new lt;let z=null;const x=new rn;x.viewport=new Tt;const S=new rn;S.viewport=new Tt;const P=[x,S],O=new Yu;let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=C[Y];return te===void 0&&(te=new Fs,C[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=C[Y];return te===void 0&&(te=new Fs,C[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=C[Y];return te===void 0&&(te=new Fs,C[Y]=te),te.getHandSpace()};function $(Y){const te=b.indexOf(Y.inputSource);if(te===-1)return;const oe=C[te];oe!==void 0&&(oe.update(Y.inputSource,Y.frame,c||o),oe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function Z(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",B);for(let Y=0;Y<C.length;Y++){const te=b[Y];te!==null&&(b[Y]=null,C[Y].disconnect(te))}I=null,V=null,p.reset();for(const Y in d)delete d[Y];e.setRenderTarget(A),m=null,f=null,u=null,r=null,E=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(z),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",B),y.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,he=null,pe=null;y.depth&&(pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=y.stencil?_i:Xn,he=y.stencil?Mr:Rn);const De={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new wn(f.textureWidth,f.textureHeight,{format:mn,type:en,depthTexture:new yr(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const oe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new wn(m.framebufferWidth,m.framebufferHeight,{format:mn,type:en,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ye.setContext(r),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function B(Y){for(let te=0;te<Y.removed.length;te++){const oe=Y.removed[te],he=b.indexOf(oe);he>=0&&(b[he]=null,C[he].disconnect(oe))}for(let te=0;te<Y.added.length;te++){const oe=Y.added[te];let he=b.indexOf(oe);if(he===-1){for(let De=0;De<C.length;De++)if(De>=b.length){b.push(oe),he=De;break}else if(b[De]===null){b[De]=oe,he=De;break}if(he===-1)break}const pe=C[he];pe&&pe.connect(oe)}}const ie=new N,H=new N;function X(Y,te,oe){ie.setFromMatrixPosition(te.matrixWorld),H.setFromMatrixPosition(oe.matrixWorld);const he=ie.distanceTo(H),pe=te.projectionMatrix.elements,De=oe.projectionMatrix.elements,nt=pe[14]/(pe[10]-1),Ge=pe[14]/(pe[10]+1),it=(pe[9]+1)/pe[5],se=(pe[9]-1)/pe[5],xe=(pe[8]-1)/pe[0],Te=(De[8]+1)/De[0],L=nt*xe,Je=nt*Te,He=he/(-xe+Te),st=He*-xe;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(st),Y.translateZ(He),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),pe[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Ue=nt+He,T=Ge+He,_=L-st,F=Je+(he-st),Q=it*Ge/T*Ue,ae=se*Ge/T*Ue;Y.projectionMatrix.makePerspective(_,F,Q,ae,Ue,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function re(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let te=Y.near,oe=Y.far;p.texture!==null&&(p.depthNear>0&&(te=p.depthNear),p.depthFar>0&&(oe=p.depthFar)),O.near=S.near=x.near=te,O.far=S.far=x.far=oe,(I!==O.near||V!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),I=O.near,V=O.far),O.layers.mask=Y.layers.mask|6,x.layers.mask=O.layers.mask&3,S.layers.mask=O.layers.mask&5;const he=Y.parent,pe=O.cameras;re(O,he);for(let De=0;De<pe.length;De++)re(pe[De],he);pe.length===2?X(O,x,S):O.projectionMatrix.copy(x.projectionMatrix),k(Y,O,he)};function k(Y,te,oe){oe===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(oe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=br*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(Y){return d[Y]};let K=null;function me(Y,te){if(h=te.getViewerPose(c||o),g=te,h!==null){const oe=h.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let he=!1;oe.length!==O.cameras.length&&(O.cameras.length=0,he=!0);for(let Ge=0;Ge<oe.length;Ge++){const it=oe[Ge];let se=null;if(m!==null)se=m.getViewport(it);else{const Te=u.getViewSubImage(f,it);se=Te.viewport,Ge===0&&(e.setRenderTargetTextures(E,Te.colorTexture,Te.depthStencilTexture),e.setRenderTarget(E))}let xe=P[Ge];xe===void 0&&(xe=new rn,xe.layers.enable(Ge),xe.viewport=new Tt,P[Ge]=xe),xe.matrix.fromArray(it.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(it.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(se.x,se.y,se.width,se.height),Ge===0&&(O.matrix.copy(xe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),he===!0&&O.cameras.push(xe)}const pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const Ge=u.getDepthInformation(oe[0]);Ge&&Ge.isValid&&Ge.texture&&p.init(Ge,r.renderState)}if(pe&&pe.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let Ge=0;Ge<oe.length;Ge++){const it=oe[Ge].camera;if(it){let se=d[it];se||(se=new tc,d[it]=se);const xe=u.getCameraImage(it);se.sourceTexture=xe}}}}for(let oe=0;oe<C.length;oe++){const he=b[oe],pe=C[oe];he!==null&&pe!==void 0&&pe.update(he,te,c||o)}K&&K(Y,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const ye=new nc;ye.setAnimationLoop(me),this.setAnimationLoop=function(Y){K=Y},this.dispose=function(){}}}const ui=new on,Hm=new vt;function Vm(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Kl(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,y,A,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),v(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,y,A):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Zt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Zt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const y=e.get(d),A=y.envMap,E=y.envMapRotation;A&&(p.envMap.value=A,ui.copy(E),ui.x*=-1,ui.y*=-1,ui.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),p.envMapRotation.value.setFromMatrix4(Hm.makeRotationFromEuler(ui)),p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,y,A){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=A*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Zt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const y=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Wm(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,A){const E=A.program;n.uniformBlockBinding(y,E)}function c(y,A){let E=r[y.id];E===void 0&&(g(y),E=h(y),r[y.id]=E,y.addEventListener("dispose",p));const C=A.program;n.updateUBOMapping(y,C);const b=e.render.frame;s[y.id]!==b&&(f(y),s[y.id]=b)}function h(y){const A=u();y.__bindingPointIndex=A;const E=i.createBuffer(),C=y.__size,b=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,E),E}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const A=r[y.id],E=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let b=0,R=E.length;b<R;b++){const z=Array.isArray(E[b])?E[b]:[E[b]];for(let x=0,S=z.length;x<S;x++){const P=z[x];if(m(P,b,x,C)===!0){const O=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let $=0;$<I.length;$++){const Z=I[$],B=v(Z);typeof Z=="number"||typeof Z=="boolean"?(P.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,O+V,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=0,P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=0,P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=0):(Z.toArray(P.__data,V),V+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,A,E,C){const b=y.value,R=A+"_"+E;if(C[R]===void 0)return typeof b=="number"||typeof b=="boolean"?C[R]=b:C[R]=b.clone(),!0;{const z=C[R];if(typeof b=="number"||typeof b=="boolean"){if(z!==b)return C[R]=b,!0}else if(z.equals(b)===!1)return z.copy(b),!0}return!1}function g(y){const A=y.uniforms;let E=0;const C=16;for(let R=0,z=A.length;R<z;R++){const x=Array.isArray(A[R])?A[R]:[A[R]];for(let S=0,P=x.length;S<P;S++){const O=x[S],I=Array.isArray(O.value)?O.value:[O.value];for(let V=0,$=I.length;V<$;V++){const Z=I[V],B=v(Z),ie=E%C,H=ie%B.boundary,X=ie+H;E+=H,X!==0&&C-X<B.storage&&(E+=C-X),O.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=B.storage}}}const b=E%C;return b>0&&(E+=C-b),y.__size=E,y.__cache={},this}function v(y){const A={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(A.boundary=4,A.storage=4):y.isVector2?(A.boundary=8,A.storage=8):y.isVector3||y.isColor?(A.boundary=16,A.storage=12):y.isVector4?(A.boundary=16,A.storage=16):y.isMatrix3?(A.boundary=48,A.storage=48):y.isMatrix4?(A.boundary=64,A.storage=64):y.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ze("WebGLRenderer: Unsupported uniform value type.",y),A}function p(y){const A=y.target;A.removeEventListener("dispose",p);const E=o.indexOf(A.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}const Xm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _n=null;function $m(){return _n===null&&(_n=new Lu(Xm,16,16,$i,Wn),_n.name="DFG_LUT",_n.minFilter=At,_n.magFilter=At,_n.wrapS=kn,_n.wrapT=kn,_n.generateMipmaps=!1,_n.needsUpdate=!0),_n}class Ym{constructor(e={}){const{canvas:t=Xc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:m=en}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const v=m,p=new Set([Jo,jo,Ko]),d=new Set([en,Rn,vr,Mr,qo,Zo]),y=new Uint32Array(4),A=new Int32Array(4);let E=null,C=null;const b=[],R=[];let z=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let S=!1;this._outputColorSpace=Mt;let P=0,O=0,I=null,V=-1,$=null;const Z=new Tt,B=new Tt;let ie=null;const H=new je(0);let X=0,re=t.width,k=t.height,K=1,me=null,ye=null;const Y=new Tt(0,0,re,k),te=new Tt(0,0,re,k);let oe=!1;const he=new oa;let pe=!1,De=!1;const nt=new vt,Ge=new N,it=new Tt,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function Te(){return I===null?K:1}let L=n;function Je(M,G){return t.getContext(M,G)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$o}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",ht,!1),L===null){const G="webgl2";if(L=Je(G,M),L===null)throw Je(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw ot("WebGLRenderer: "+M.message),M}let He,st,Ue,T,_,F,Q,ae,ne,Le,be,Fe,Xe,fe,Me,Pe,Oe,Se,Ke,U,Ae,ge,Ce,de;function le(){He=new $f(L),He.init(),ge=new Om(L,He),st=new Of(L,He,e,ge),Ue=new Nm(L,He),st.reversedDepthBuffer&&f&&Ue.buffers.depth.setReversed(!0),T=new Zf(L),_=new Mm,F=new Fm(L,He,Ue,_,st,ge,T),Q=new zf(x),ae=new Xf(x),ne=new Ju(L),Ce=new Nf(L,ne),Le=new Yf(L,ne,T,Ce),be=new jf(L,Le,ne,T),Ke=new Kf(L,st,F),Pe=new Bf(_),Fe=new vm(x,Q,ae,He,st,Ce,Pe),Xe=new Vm(x,_),fe=new bm,Me=new Rm(He),Se=new Uf(x,Q,ae,Ue,be,g,l),Oe=new Dm(x,be,st),de=new Wm(L,T,st,Ue),U=new Ff(L,He,T),Ae=new qf(L,He,T),T.programs=Fe.programs,x.capabilities=st,x.extensions=He,x.properties=_,x.renderLists=fe,x.shadowMap=Oe,x.state=Ue,x.info=T}le(),v!==en&&(z=new Qf(v,t.width,t.height,r,s));const ve=new Gm(x,L);this.xr=ve,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=He.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=He.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(M){M!==void 0&&(K=M,this.setSize(re,k,!1))},this.getSize=function(M){return M.set(re,k)},this.setSize=function(M,G,ee=!0){if(ve.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}re=M,k=G,t.width=Math.floor(M*K),t.height=Math.floor(G*K),ee===!0&&(t.style.width=M+"px",t.style.height=G+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,M,G)},this.getDrawingBufferSize=function(M){return M.set(re*K,k*K).floor()},this.setDrawingBufferSize=function(M,G,ee){re=M,k=G,K=ee,t.width=Math.floor(M*ee),t.height=Math.floor(G*ee),this.setViewport(0,0,M,G)},this.setEffects=function(M){if(v===en){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let G=0;G<M.length;G++)if(M[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Z)},this.getViewport=function(M){return M.copy(Y)},this.setViewport=function(M,G,ee,J){M.isVector4?Y.set(M.x,M.y,M.z,M.w):Y.set(M,G,ee,J),Ue.viewport(Z.copy(Y).multiplyScalar(K).round())},this.getScissor=function(M){return M.copy(te)},this.setScissor=function(M,G,ee,J){M.isVector4?te.set(M.x,M.y,M.z,M.w):te.set(M,G,ee,J),Ue.scissor(B.copy(te).multiplyScalar(K).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(M){Ue.setScissorTest(oe=M)},this.setOpaqueSort=function(M){me=M},this.setTransparentSort=function(M){ye=M},this.getClearColor=function(M){return M.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(M=!0,G=!0,ee=!0){let J=0;if(M){let W=!1;if(I!==null){const Ee=I.texture.format;W=p.has(Ee)}if(W){const Ee=I.texture.type,Ie=d.has(Ee),Re=Se.getClearColor(),Ne=Se.getClearAlpha(),ke=Re.r,Ye=Re.g,Ve=Re.b;Ie?(y[0]=ke,y[1]=Ye,y[2]=Ve,y[3]=Ne,L.clearBufferuiv(L.COLOR,0,y)):(A[0]=ke,A[1]=Ye,A[2]=Ve,A[3]=Ne,L.clearBufferiv(L.COLOR,0,A))}else J|=L.COLOR_BUFFER_BIT}G&&(J|=L.DEPTH_BUFFER_BIT),ee&&(J|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",ht,!1),Se.dispose(),fe.dispose(),Me.dispose(),_.dispose(),Q.dispose(),ae.dispose(),be.dispose(),Ce.dispose(),de.dispose(),Fe.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",w),ve.removeEventListener("sessionend",q),j.stop()};function qe(M){M.preventDefault(),va("WebGLRenderer: Context Lost."),S=!0}function ut(){va("WebGLRenderer: Context Restored."),S=!1;const M=T.autoReset,G=Oe.enabled,ee=Oe.autoUpdate,J=Oe.needsUpdate,W=Oe.type;le(),T.autoReset=M,Oe.enabled=G,Oe.autoUpdate=ee,Oe.needsUpdate=J,Oe.type=W}function ht(M){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function $t(M){const G=M.target;G.removeEventListener("dispose",$t),Ht(G)}function Ht(M){ds(M),_.remove(M)}function ds(M){const G=_.get(M).programs;G!==void 0&&(G.forEach(function(ee){Fe.releaseProgram(ee)}),M.isShaderMaterial&&Fe.releaseShaderCache(M))}this.renderBufferDirect=function(M,G,ee,J,W,Ee){G===null&&(G=se);const Ie=W.isMesh&&W.matrixWorld.determinant()<0,Re=dt(M,G,ee,J,W);Ue.setMaterial(J,Ie);let Ne=ee.index,ke=1;if(J.wireframe===!0){if(Ne=Le.getWireframeAttribute(ee),Ne===void 0)return;ke=2}const Ye=ee.drawRange,Ve=ee.attributes.position;let tt=Ye.start*ke,mt=(Ye.start+Ye.count)*ke;Ee!==null&&(tt=Math.max(tt,Ee.start*ke),mt=Math.min(mt,(Ee.start+Ee.count)*ke)),Ne!==null?(tt=Math.max(tt,0),mt=Math.min(mt,Ne.count)):Ve!=null&&(tt=Math.max(tt,0),mt=Math.min(mt,Ve.count));const yt=mt-tt;if(yt<0||yt===1/0)return;Ce.setup(W,J,Re,ee,Ne);let Et,_t=U;if(Ne!==null&&(Et=ne.get(Ne),_t=Ae,_t.setIndex(Et)),W.isMesh)J.wireframe===!0?(Ue.setLineWidth(J.wireframeLinewidth*Te()),_t.setMode(L.LINES)):_t.setMode(L.TRIANGLES);else if(W.isLine){let We=J.linewidth;We===void 0&&(We=1),Ue.setLineWidth(We*Te()),W.isLineSegments?_t.setMode(L.LINES):W.isLineLoop?_t.setMode(L.LINE_LOOP):_t.setMode(L.LINE_STRIP)}else W.isPoints?_t.setMode(L.POINTS):W.isSprite&&_t.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Sr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))_t.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const We=W._multiDrawStarts,ft=W._multiDrawCounts,ct=W._multiDrawCount,Kt=Ne?ne.get(Ne).bytesPerElement:1,Si=_.get(J).currentProgram.getUniforms();for(let jt=0;jt<ct;jt++)Si.setValue(L,"_gl_DrawID",jt),_t.render(We[jt]/Kt,ft[jt])}else if(W.isInstancedMesh)_t.renderInstances(tt,yt,W.count);else if(ee.isInstancedBufferGeometry){const We=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,ft=Math.min(ee.instanceCount,We);_t.renderInstances(tt,yt,ft)}else _t.render(tt,yt)};function Yn(M,G,ee){M.transparent===!0&&M.side===zn&&M.forceSinglePass===!1?(M.side=Zt,M.needsUpdate=!0,Rt(M,G,ee),M.side=ii,M.needsUpdate=!0,Rt(M,G,ee),M.side=zn):Rt(M,G,ee)}this.compile=function(M,G,ee=null){ee===null&&(ee=M),C=Me.get(ee),C.init(G),R.push(C),ee.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(C.pushLight(W),W.castShadow&&C.pushShadow(W))}),M!==ee&&M.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(C.pushLight(W),W.castShadow&&C.pushShadow(W))}),C.setupLights();const J=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Ee=W.material;if(Ee)if(Array.isArray(Ee))for(let Ie=0;Ie<Ee.length;Ie++){const Re=Ee[Ie];Yn(Re,ee,W),J.add(Re)}else Yn(Ee,ee,W),J.add(Ee)}),C=R.pop(),J},this.compileAsync=function(M,G,ee=null){const J=this.compile(M,G,ee);return new Promise(W=>{function Ee(){if(J.forEach(function(Ie){_.get(Ie).currentProgram.isReady()&&J.delete(Ie)}),J.size===0){W(M);return}setTimeout(Ee,10)}He.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Ln=null;function fs(M){Ln&&Ln(M)}function w(){j.stop()}function q(){j.start()}const j=new nc;j.setAnimationLoop(fs),typeof self<"u"&&j.setContext(self),this.setAnimationLoop=function(M){Ln=M,ve.setAnimationLoop(M),M===null?j.stop():j.start()},ve.addEventListener("sessionstart",w),ve.addEventListener("sessionend",q),this.render=function(M,G){if(G!==void 0&&G.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const ee=ve.enabled===!0&&ve.isPresenting===!0,J=z!==null&&(I===null||ee)&&z.begin(x,I);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(G),G=ve.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,G,I),C=Me.get(M,R.length),C.init(G),R.push(C),nt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),he.setFromProjectionMatrix(nt,bn,G.reversedDepth),De=this.localClippingEnabled,pe=Pe.init(this.clippingPlanes,De),E=fe.get(M,b.length),E.init(),b.push(E),ve.enabled===!0&&ve.isPresenting===!0){const Ie=x.xr.getDepthSensingMesh();Ie!==null&&_e(Ie,G,-1/0,x.sortObjects)}_e(M,G,0,x.sortObjects),E.finish(),x.sortObjects===!0&&E.sort(me,ye),xe=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,xe&&Se.addToRenderList(E,M),this.info.render.frame++,pe===!0&&Pe.beginShadows();const W=C.state.shadowsArray;if(Oe.render(W,M,G),pe===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&z.hasRenderPass())===!1){const Ie=E.opaque,Re=E.transmissive;if(C.setupLights(),G.isArrayCamera){const Ne=G.cameras;if(Re.length>0)for(let ke=0,Ye=Ne.length;ke<Ye;ke++){const Ve=Ne[ke];Be(Ie,Re,M,Ve)}xe&&Se.render(M);for(let ke=0,Ye=Ne.length;ke<Ye;ke++){const Ve=Ne[ke];ue(E,M,Ve,Ve.viewport)}}else Re.length>0&&Be(Ie,Re,M,G),xe&&Se.render(M),ue(E,M,G)}I!==null&&O===0&&(F.updateMultisampleRenderTarget(I),F.updateRenderTargetMipmap(I)),J&&z.end(x),M.isScene===!0&&M.onAfterRender(x,M,G),Ce.resetDefaultState(),V=-1,$=null,R.pop(),R.length>0?(C=R[R.length-1],pe===!0&&Pe.setGlobalState(x.clippingPlanes,C.state.camera)):C=null,b.pop(),b.length>0?E=b[b.length-1]:E=null};function _e(M,G,ee,J){if(M.visible===!1)return;if(M.layers.test(G.layers)){if(M.isGroup)ee=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(G);else if(M.isLight)C.pushLight(M),M.castShadow&&C.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||he.intersectsSprite(M)){J&&it.setFromMatrixPosition(M.matrixWorld).applyMatrix4(nt);const Ie=be.update(M),Re=M.material;Re.visible&&E.push(M,Ie,Re,ee,it.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||he.intersectsObject(M))){const Ie=be.update(M),Re=M.material;if(J&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),it.copy(M.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),it.copy(Ie.boundingSphere.center)),it.applyMatrix4(M.matrixWorld).applyMatrix4(nt)),Array.isArray(Re)){const Ne=Ie.groups;for(let ke=0,Ye=Ne.length;ke<Ye;ke++){const Ve=Ne[ke],tt=Re[Ve.materialIndex];tt&&tt.visible&&E.push(M,Ie,tt,ee,it.z,Ve)}}else Re.visible&&E.push(M,Ie,Re,ee,it.z,null)}}const Ee=M.children;for(let Ie=0,Re=Ee.length;Ie<Re;Ie++)_e(Ee[Ie],G,ee,J)}function ue(M,G,ee,J){const{opaque:W,transmissive:Ee,transparent:Ie}=M;C.setupLightsView(ee),pe===!0&&Pe.setGlobalState(x.clippingPlanes,ee),J&&Ue.viewport(Z.copy(J)),W.length>0&&$e(W,G,ee),Ee.length>0&&$e(Ee,G,ee),Ie.length>0&&$e(Ie,G,ee),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Be(M,G,ee,J){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[J.id]===void 0){const tt=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[J.id]=new wn(1,1,{generateMipmaps:!0,type:tt?Wn:en,minFilter:gi,samples:st.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace})}const Ee=C.state.transmissionRenderTarget[J.id],Ie=J.viewport||Z;Ee.setSize(Ie.z*x.transmissionResolutionScale,Ie.w*x.transmissionResolutionScale);const Re=x.getRenderTarget(),Ne=x.getActiveCubeFace(),ke=x.getActiveMipmapLevel();x.setRenderTarget(Ee),x.getClearColor(H),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),xe&&Se.render(ee);const Ye=x.toneMapping;x.toneMapping=Tn;const Ve=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),C.setupLightsView(J),pe===!0&&Pe.setGlobalState(x.clippingPlanes,J),$e(M,ee,J),F.updateMultisampleRenderTarget(Ee),F.updateRenderTargetMipmap(Ee),He.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let mt=0,yt=G.length;mt<yt;mt++){const Et=G[mt],{object:_t,geometry:We,material:ft,group:ct}=Et;if(ft.side===zn&&_t.layers.test(J.layers)){const Kt=ft.side;ft.side=Zt,ft.needsUpdate=!0,bt(_t,ee,J,We,ft,ct),ft.side=Kt,ft.needsUpdate=!0,tt=!0}}tt===!0&&(F.updateMultisampleRenderTarget(Ee),F.updateRenderTargetMipmap(Ee))}x.setRenderTarget(Re,Ne,ke),x.setClearColor(H,X),Ve!==void 0&&(J.viewport=Ve),x.toneMapping=Ye}function $e(M,G,ee){const J=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Ee=M.length;W<Ee;W++){const Ie=M[W],{object:Re,geometry:Ne,group:ke}=Ie;let Ye=Ie.material;Ye.allowOverride===!0&&J!==null&&(Ye=J),Re.layers.test(ee.layers)&&bt(Re,G,ee,Ne,Ye,ke)}}function bt(M,G,ee,J,W,Ee){M.onBeforeRender(x,G,ee,J,W,Ee),M.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(x,G,ee,J,M,Ee),W.transparent===!0&&W.side===zn&&W.forceSinglePass===!1?(W.side=Zt,W.needsUpdate=!0,x.renderBufferDirect(ee,G,J,W,M,Ee),W.side=ii,W.needsUpdate=!0,x.renderBufferDirect(ee,G,J,W,M,Ee),W.side=zn):x.renderBufferDirect(ee,G,J,W,M,Ee),M.onAfterRender(x,G,ee,J,W,Ee)}function Rt(M,G,ee){G.isScene!==!0&&(G=se);const J=_.get(M),W=C.state.lights,Ee=C.state.shadowsArray,Ie=W.state.version,Re=Fe.getParameters(M,W.state,Ee,G,ee),Ne=Fe.getProgramCacheKey(Re);let ke=J.programs;J.environment=M.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(M.isMeshStandardMaterial?ae:Q).get(M.envMap||J.environment),J.envMapRotation=J.environment!==null&&M.envMap===null?G.environmentRotation:M.envMapRotation,ke===void 0&&(M.addEventListener("dispose",$t),ke=new Map,J.programs=ke);let Ye=ke.get(Ne);if(Ye!==void 0){if(J.currentProgram===Ye&&J.lightsStateVersion===Ie)return ze(M,Re),Ye}else Re.uniforms=Fe.getUniforms(M),M.onBeforeCompile(Re,x),Ye=Fe.acquireProgram(Re,Ne),ke.set(Ne,Ye),J.uniforms=Re.uniforms;const Ve=J.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ve.clippingPlanes=Pe.uniform),ze(M,Re),J.needsLights=cc(M),J.lightsStateVersion=Ie,J.needsLights&&(Ve.ambientLightColor.value=W.state.ambient,Ve.lightProbe.value=W.state.probe,Ve.directionalLights.value=W.state.directional,Ve.directionalLightShadows.value=W.state.directionalShadow,Ve.spotLights.value=W.state.spot,Ve.spotLightShadows.value=W.state.spotShadow,Ve.rectAreaLights.value=W.state.rectArea,Ve.ltc_1.value=W.state.rectAreaLTC1,Ve.ltc_2.value=W.state.rectAreaLTC2,Ve.pointLights.value=W.state.point,Ve.pointLightShadows.value=W.state.pointShadow,Ve.hemisphereLights.value=W.state.hemi,Ve.directionalShadowMap.value=W.state.directionalShadowMap,Ve.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ve.spotShadowMap.value=W.state.spotShadowMap,Ve.spotLightMatrix.value=W.state.spotLightMatrix,Ve.spotLightMap.value=W.state.spotLightMap,Ve.pointShadowMap.value=W.state.pointShadowMap,Ve.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=Ye,J.uniformsList=null,Ye}function an(M){if(M.uniformsList===null){const G=M.currentProgram.getUniforms();M.uniformsList=Qr.seqWithValue(G.seq,M.uniforms)}return M.uniformsList}function ze(M,G){const ee=_.get(M);ee.outputColorSpace=G.outputColorSpace,ee.batching=G.batching,ee.batchingColor=G.batchingColor,ee.instancing=G.instancing,ee.instancingColor=G.instancingColor,ee.instancingMorph=G.instancingMorph,ee.skinning=G.skinning,ee.morphTargets=G.morphTargets,ee.morphNormals=G.morphNormals,ee.morphColors=G.morphColors,ee.morphTargetsCount=G.morphTargetsCount,ee.numClippingPlanes=G.numClippingPlanes,ee.numIntersection=G.numClipIntersection,ee.vertexAlphas=G.vertexAlphas,ee.vertexTangents=G.vertexTangents,ee.toneMapping=G.toneMapping}function dt(M,G,ee,J,W){G.isScene!==!0&&(G=se),F.resetTextureUnits();const Ee=G.fog,Ie=J.isMeshStandardMaterial?G.environment:null,Re=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Yi,Ne=(J.isMeshStandardMaterial?ae:Q).get(J.envMap||Ie),ke=J.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ye=!!ee.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ve=!!ee.morphAttributes.position,tt=!!ee.morphAttributes.normal,mt=!!ee.morphAttributes.color;let yt=Tn;J.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(yt=x.toneMapping);const Et=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,_t=Et!==void 0?Et.length:0,We=_.get(J),ft=C.state.lights;if(pe===!0&&(De===!0||M!==$)){const Vt=M===$&&J.id===V;Pe.setState(J,M,Vt)}let ct=!1;J.version===We.__version?(We.needsLights&&We.lightsStateVersion!==ft.state.version||We.outputColorSpace!==Re||W.isBatchedMesh&&We.batching===!1||!W.isBatchedMesh&&We.batching===!0||W.isBatchedMesh&&We.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&We.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&We.instancing===!1||!W.isInstancedMesh&&We.instancing===!0||W.isSkinnedMesh&&We.skinning===!1||!W.isSkinnedMesh&&We.skinning===!0||W.isInstancedMesh&&We.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&We.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&We.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&We.instancingMorph===!1&&W.morphTexture!==null||We.envMap!==Ne||J.fog===!0&&We.fog!==Ee||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Pe.numPlanes||We.numIntersection!==Pe.numIntersection)||We.vertexAlphas!==ke||We.vertexTangents!==Ye||We.morphTargets!==Ve||We.morphNormals!==tt||We.morphColors!==mt||We.toneMapping!==yt||We.morphTargetsCount!==_t)&&(ct=!0):(ct=!0,We.__version=J.version);let Kt=We.currentProgram;ct===!0&&(Kt=Rt(J,G,W));let Si=!1,jt=!1,tr=!1;const xt=Kt.getUniforms(),Yt=We.uniforms;if(Ue.useProgram(Kt.program)&&(Si=!0,jt=!0,tr=!0),J.id!==V&&(V=J.id,jt=!0),Si||$!==M){Ue.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),xt.setValue(L,"projectionMatrix",M.projectionMatrix),xt.setValue(L,"viewMatrix",M.matrixWorldInverse);const qt=xt.map.cameraPosition;qt!==void 0&&qt.setValue(L,Ge.setFromMatrixPosition(M.matrixWorld)),st.logarithmicDepthBuffer&&xt.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&xt.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),$!==M&&($=M,jt=!0,tr=!0)}if(We.needsLights&&(ft.state.directionalShadowMap.length>0&&xt.setValue(L,"directionalShadowMap",ft.state.directionalShadowMap,F),ft.state.spotShadowMap.length>0&&xt.setValue(L,"spotShadowMap",ft.state.spotShadowMap,F),ft.state.pointShadowMap.length>0&&xt.setValue(L,"pointShadowMap",ft.state.pointShadowMap,F)),W.isSkinnedMesh){xt.setOptional(L,W,"bindMatrix"),xt.setOptional(L,W,"bindMatrixInverse");const Vt=W.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),xt.setValue(L,"boneTexture",Vt.boneTexture,F))}W.isBatchedMesh&&(xt.setOptional(L,W,"batchingTexture"),xt.setValue(L,"batchingTexture",W._matricesTexture,F),xt.setOptional(L,W,"batchingIdTexture"),xt.setValue(L,"batchingIdTexture",W._indirectTexture,F),xt.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&xt.setValue(L,"batchingColorTexture",W._colorsTexture,F));const tn=ee.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&Ke.update(W,ee,Kt),(jt||We.receiveShadow!==W.receiveShadow)&&(We.receiveShadow=W.receiveShadow,xt.setValue(L,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Yt.envMap.value=Ne,Yt.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&G.environment!==null&&(Yt.envMapIntensity.value=G.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=$m()),jt&&(xt.setValue(L,"toneMappingExposure",x.toneMappingExposure),We.needsLights&&ln(Yt,tr),Ee&&J.fog===!0&&Xe.refreshFogUniforms(Yt,Ee),Xe.refreshMaterialUniforms(Yt,J,K,k,C.state.transmissionRenderTarget[M.id]),Qr.upload(L,an(We),Yt,F)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Qr.upload(L,an(We),Yt,F),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&xt.setValue(L,"center",W.center),xt.setValue(L,"modelViewMatrix",W.modelViewMatrix),xt.setValue(L,"normalMatrix",W.normalMatrix),xt.setValue(L,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Vt=J.uniformsGroups;for(let qt=0,ps=Vt.length;qt<ps;qt++){const ri=Vt[qt];de.update(ri,Kt),de.bind(ri,Kt)}}return Kt}function ln(M,G){M.ambientLightColor.needsUpdate=G,M.lightProbe.needsUpdate=G,M.directionalLights.needsUpdate=G,M.directionalLightShadows.needsUpdate=G,M.pointLights.needsUpdate=G,M.pointLightShadows.needsUpdate=G,M.spotLights.needsUpdate=G,M.spotLightShadows.needsUpdate=G,M.rectAreaLights.needsUpdate=G,M.hemisphereLights.needsUpdate=G}function cc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,G,ee){const J=_.get(M);J.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),_.get(M.texture).__webglTexture=G,_.get(M.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ee,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,G){const ee=_.get(M);ee.__webglFramebuffer=G,ee.__useDefaultFramebuffer=G===void 0};const uc=L.createFramebuffer();this.setRenderTarget=function(M,G=0,ee=0){I=M,P=G,O=ee;let J=null,W=!1,Ee=!1;if(M){const Re=_.get(M);if(Re.__useDefaultFramebuffer!==void 0){Ue.bindFramebuffer(L.FRAMEBUFFER,Re.__webglFramebuffer),Z.copy(M.viewport),B.copy(M.scissor),ie=M.scissorTest,Ue.viewport(Z),Ue.scissor(B),Ue.setScissorTest(ie),V=-1;return}else if(Re.__webglFramebuffer===void 0)F.setupRenderTarget(M);else if(Re.__hasExternalTextures)F.rebindTextures(M,_.get(M.texture).__webglTexture,_.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ye=M.depthTexture;if(Re.__boundDepthTexture!==Ye){if(Ye!==null&&_.has(Ye)&&(M.width!==Ye.image.width||M.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(M)}}const Ne=M.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Ee=!0);const ke=_.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ke[G])?J=ke[G][ee]:J=ke[G],W=!0):M.samples>0&&F.useMultisampledRTT(M)===!1?J=_.get(M).__webglMultisampledFramebuffer:Array.isArray(ke)?J=ke[ee]:J=ke,Z.copy(M.viewport),B.copy(M.scissor),ie=M.scissorTest}else Z.copy(Y).multiplyScalar(K).floor(),B.copy(te).multiplyScalar(K).floor(),ie=oe;if(ee!==0&&(J=uc),Ue.bindFramebuffer(L.FRAMEBUFFER,J)&&Ue.drawBuffers(M,J),Ue.viewport(Z),Ue.scissor(B),Ue.setScissorTest(ie),W){const Re=_.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+G,Re.__webglTexture,ee)}else if(Ee){const Re=G;for(let Ne=0;Ne<M.textures.length;Ne++){const ke=_.get(M.textures[Ne]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ne,ke.__webglTexture,ee,Re)}}else if(M!==null&&ee!==0){const Re=_.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Re.__webglTexture,ee)}V=-1},this.readRenderTargetPixels=function(M,G,ee,J,W,Ee,Ie,Re=0){if(!(M&&M.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne){Ue.bindFramebuffer(L.FRAMEBUFFER,Ne);try{const ke=M.textures[Re],Ye=ke.format,Ve=ke.type;if(!st.textureFormatReadable(Ye)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Ve)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=M.width-J&&ee>=0&&ee<=M.height-W&&(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Re),L.readPixels(G,ee,J,W,ge.convert(Ye),ge.convert(Ve),Ee))}finally{const ke=I!==null?_.get(I).__webglFramebuffer:null;Ue.bindFramebuffer(L.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(M,G,ee,J,W,Ee,Ie,Re=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne)if(G>=0&&G<=M.width-J&&ee>=0&&ee<=M.height-W){Ue.bindFramebuffer(L.FRAMEBUFFER,Ne);const ke=M.textures[Re],Ye=ke.format,Ve=ke.type;if(!st.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,tt),L.bufferData(L.PIXEL_PACK_BUFFER,Ee.byteLength,L.STREAM_READ),M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Re),L.readPixels(G,ee,J,W,ge.convert(Ye),ge.convert(Ve),0);const mt=I!==null?_.get(I).__webglFramebuffer:null;Ue.bindFramebuffer(L.FRAMEBUFFER,mt);const yt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await $c(L,yt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,tt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ee),L.deleteBuffer(tt),L.deleteSync(yt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,G=null,ee=0){const J=Math.pow(2,-ee),W=Math.floor(M.image.width*J),Ee=Math.floor(M.image.height*J),Ie=G!==null?G.x:0,Re=G!==null?G.y:0;F.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,ee,0,0,Ie,Re,W,Ee),Ue.unbindTexture()};const hc=L.createFramebuffer(),dc=L.createFramebuffer();this.copyTextureToTexture=function(M,G,ee=null,J=null,W=0,Ee=null){Ee===null&&(W!==0?(Sr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=W,W=0):Ee=0);let Ie,Re,Ne,ke,Ye,Ve,tt,mt,yt;const Et=M.isCompressedTexture?M.mipmaps[Ee]:M.image;if(ee!==null)Ie=ee.max.x-ee.min.x,Re=ee.max.y-ee.min.y,Ne=ee.isBox3?ee.max.z-ee.min.z:1,ke=ee.min.x,Ye=ee.min.y,Ve=ee.isBox3?ee.min.z:0;else{const tn=Math.pow(2,-W);Ie=Math.floor(Et.width*tn),Re=Math.floor(Et.height*tn),M.isDataArrayTexture?Ne=Et.depth:M.isData3DTexture?Ne=Math.floor(Et.depth*tn):Ne=1,ke=0,Ye=0,Ve=0}J!==null?(tt=J.x,mt=J.y,yt=J.z):(tt=0,mt=0,yt=0);const _t=ge.convert(G.format),We=ge.convert(G.type);let ft;G.isData3DTexture?(F.setTexture3D(G,0),ft=L.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(F.setTexture2DArray(G,0),ft=L.TEXTURE_2D_ARRAY):(F.setTexture2D(G,0),ft=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,G.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,G.unpackAlignment);const ct=L.getParameter(L.UNPACK_ROW_LENGTH),Kt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Si=L.getParameter(L.UNPACK_SKIP_PIXELS),jt=L.getParameter(L.UNPACK_SKIP_ROWS),tr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Et.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Et.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ke),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ye),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ve);const xt=M.isDataArrayTexture||M.isData3DTexture,Yt=G.isDataArrayTexture||G.isData3DTexture;if(M.isDepthTexture){const tn=_.get(M),Vt=_.get(G),qt=_.get(tn.__renderTarget),ps=_.get(Vt.__renderTarget);Ue.bindFramebuffer(L.READ_FRAMEBUFFER,qt.__webglFramebuffer),Ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,ps.__webglFramebuffer);for(let ri=0;ri<Ne;ri++)xt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_.get(M).__webglTexture,W,Ve+ri),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_.get(G).__webglTexture,Ee,yt+ri)),L.blitFramebuffer(ke,Ye,Ie,Re,tt,mt,Ie,Re,L.DEPTH_BUFFER_BIT,L.NEAREST);Ue.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||_.has(M)){const tn=_.get(M),Vt=_.get(G);Ue.bindFramebuffer(L.READ_FRAMEBUFFER,hc),Ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,dc);for(let qt=0;qt<Ne;qt++)xt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,tn.__webglTexture,W,Ve+qt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,tn.__webglTexture,W),Yt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Vt.__webglTexture,Ee,yt+qt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Vt.__webglTexture,Ee),W!==0?L.blitFramebuffer(ke,Ye,Ie,Re,tt,mt,Ie,Re,L.COLOR_BUFFER_BIT,L.NEAREST):Yt?L.copyTexSubImage3D(ft,Ee,tt,mt,yt+qt,ke,Ye,Ie,Re):L.copyTexSubImage2D(ft,Ee,tt,mt,ke,Ye,Ie,Re);Ue.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Yt?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(ft,Ee,tt,mt,yt,Ie,Re,Ne,_t,We,Et.data):G.isCompressedArrayTexture?L.compressedTexSubImage3D(ft,Ee,tt,mt,yt,Ie,Re,Ne,_t,Et.data):L.texSubImage3D(ft,Ee,tt,mt,yt,Ie,Re,Ne,_t,We,Et):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Ee,tt,mt,Ie,Re,_t,We,Et.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Ee,tt,mt,Et.width,Et.height,_t,Et.data):L.texSubImage2D(L.TEXTURE_2D,Ee,tt,mt,Ie,Re,_t,We,Et);L.pixelStorei(L.UNPACK_ROW_LENGTH,ct),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Kt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Si),L.pixelStorei(L.UNPACK_SKIP_ROWS,jt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,tr),Ee===0&&G.generateMipmaps&&L.generateMipmap(ft),Ue.unbindTexture()},this.initRenderTarget=function(M){_.get(M).__webglFramebuffer===void 0&&F.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?F.setTextureCube(M,0):M.isData3DTexture?F.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?F.setTexture2DArray(M,0):F.setTexture2D(M,0),Ue.unbindTexture()},this.resetState=function(){P=0,O=0,I=null,Ue.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}const er="#005eb8";function vn(i,e,t){const n=e.split(/\s+/),r=[];let s="";for(const o of n){const a=s?`${s} ${o}`:o;i.measureText(a).width>t&&s?(r.push(s),s=o):s=a}return s&&r.push(s),r}function hr(i,e,t){if(i.measureText(e).width<=t)return e;let n=e;for(;n.length>1&&i.measureText(`${n}…`).width>t;)n=n.slice(0,-1);return`${n}…`}function gt(i){const e=document.createElement("canvas");e.width=i.widthPx,e.height=i.heightPx;const t=e.getContext("2d"),n=Math.round(i.widthPx*.05),r=i.align??"left",s=r==="center"?i.widthPx/2:n;t.fillStyle=i.background??er,t.fillRect(0,0,e.width,e.height),t.fillStyle=i.color??"#ffffff",t.textAlign=r,t.textBaseline="top";let o=n,a=i.titleSize??Math.round(i.heightPx*.28),l=i.subtitleSize??Math.round(a*.55);if(!i.body){const h=l/a;for(let u=0;u<24&&a>18;u++){t.font=`bold ${a}px Arial`;let f=vn(t,i.title,i.widthPx-n*2).length*a*1.15;if(i.subtitle&&(t.font=`${l}px Arial`,f+=vn(t,i.subtitle,i.widthPx-n*2).length*l*1.2),f<=i.heightPx-n*1.6)break;a=Math.round(a*.93),l=Math.max(14,Math.round(a*h))}}t.font=`bold ${a}px Arial`;for(const h of vn(t,i.title,i.widthPx-n*2))t.fillText(h,s,o),o+=a*1.15;if(i.subtitle){t.font=`${l}px Arial`,t.globalAlpha=.85;for(const h of vn(t,i.subtitle,i.widthPx-n*2))t.fillText(h,s,o),o+=l*1.2;t.globalAlpha=1}if(i.body){o+=n*.5;let h=i.bodySize??Math.round(a*.45);if(i.fitBody){const u=i.footer?Math.round(a*.32)*2.6+n:n,f=i.heightPx-o-u;for(;h>16&&(t.font=`${h}px Arial`,!(vn(t,i.body,i.widthPx-n*2).length*h*1.3<=f));)h-=2}t.font=`${h}px Arial`;for(const u of vn(t,i.body,i.widthPx-n*2))t.fillText(u,s,o),o+=h*1.3}if(i.footer){const h=Math.round((i.titleSize??i.heightPx*.28)*.32);t.font=`${h}px Arial`,t.globalAlpha=.72;let u=i.heightPx-n;const f=vn(t,i.footer,i.widthPx-n*2).reverse();for(const m of f)u-=h*1.25,t.fillText(m,s,u);t.globalAlpha=1}const c=new In(e);return c.anisotropy=4,c.colorSpace=Mt,c}const dl="#009639";function qm(i,e,t){const n=document.createElement("canvas");n.width=620,n.height=810;const r=n.getContext("2d");r.fillStyle="#fbfbf8",r.fillRect(0,0,620,810),r.fillStyle=e,r.fillRect(0,0,620,92),r.fillStyle="#ffffff",r.font="bold 46px Arial",r.textBaseline="middle",r.fillText(i,30,48),r.textBaseline="top",r.fillStyle="#20262b";let s=34;for(;s>16&&(r.font=`${s}px Arial`,!(vn(r,t,560).length*s*1.35<=655));)s-=2;r.font=`${s}px Arial`;let o=130;for(const l of vn(r,t,560))if(r.fillText(l,30,o),o+=s*1.35,o>770)break;const a=new In(n);return a.anisotropy=4,a.colorSpace=Mt,a}function Zm(i){const e=document.createElement("canvas");e.width=620,e.height=290;const t=e.getContext("2d");t.fillStyle="#e9e3d0",t.fillRect(0,0,620,290),t.strokeStyle="#8b8672",t.lineWidth=6,t.strokeRect(8,8,604,274),t.fillStyle="#6c6753",t.font="26px Arial",t.fillText("formerly signposted as",28,34),t.fillStyle="#3a382f";let n=88;for(const s of i.slice(0,3)){t.font="bold 44px Arial",t.fillText(s,28,n);const o=t.measureText(s).width;t.strokeStyle="#7d2a2a",t.lineWidth=5,t.beginPath(),t.moveTo(24,n+2),t.lineTo(32+o,n-6),t.stroke(),n+=64}const r=new In(e);return r.colorSpace=Mt,r}function ac(i){const e=document.createElement("canvas"),t=640,n=460;e.width=t,e.height=n;const r=e.getContext("2d");let s=i%2147483646+1;const o=()=>(s=s*16807%2147483647)/2147483647,a=[["#e8e3d4","#41668c","#c4a35a","#7a4b3a","#5d7a76"],["#ece7dc","#6c8c5f","#c96f4a","#3d4a52","#c4b57a"],["#e6e2d8","#8a5a74","#5a7d8a","#c9a35a","#4a5747"]],l=a[i%a.length];r.fillStyle=l[0],r.fillRect(0,0,t,n);const c=5+Math.floor(o()*5);for(let u=0;u<c;u++)if(r.fillStyle=l[1+Math.floor(o()*(l.length-1))],r.globalAlpha=.75+o()*.25,o()<.45)r.beginPath(),r.arc(o()*t,o()*n,40+o()*100,0,Math.PI*(.7+o()*1.3)),r.lineWidth=14+o()*30,r.strokeStyle=r.fillStyle,r.stroke();else{const f=40+o()*150;r.fillRect(o()*(t-f),o()*(n-100),f,50+o()*160)}r.globalAlpha=1;const h=new In(e);return h.colorSpace=Mt,h}function rs(i,e){const t=document.createElement("canvas");t.width=512,t.height=150;const n=t.getContext("2d");n.fillStyle="#f5f4ef",n.fillRect(0,0,512,150),n.fillStyle="#20262b",n.font="bold 34px Arial",n.fillText(hr(n,i,470),22,26),n.font="24px Arial",n.globalAlpha=.75;let r=78;for(const o of vn(n,e,470).slice(0,2))n.fillText(o,22,r),r+=32;n.globalAlpha=1;const s=new In(t);return s.colorSpace=Mt,s}function lc(i){const e=Math.round(i.widthPx*.035),t=Math.round(i.heightPx*.075);let n=e+t*1.25;i.subtitle&&(n+=t*.8),n+=e*.4;const r=n;n+=e*.6;const s=i.columns??1,o=(i.widthPx-e*2-e*(s-1))/s,a=i.rowSize??Math.round(t*.62),l=a*1.55,c=Math.max(1,Math.floor((i.heightPx-n-e)/l));return{pad:e,titleSize:t,top:n,ruleY:r,columns:s,colWidth:o,rowSize:a,rowH:l,rowsPerCol:c}}function Go(i,e){const t=lc(i),n=[];for(let r=0;r<e;r++){const s=Math.floor(r/t.rowsPerCol);if(s>=t.columns){n.push(null);continue}const o=t.pad+s*(t.colWidth+t.pad),a=t.top+r%t.rowsPerCol*t.rowH;n.push([o/i.widthPx,1-(a+t.rowH)/i.heightPx,(o+t.colWidth)/i.widthPx,1-a/i.heightPx])}return n}function gr(i){const e=document.createElement("canvas");e.width=i.widthPx,e.height=i.heightPx;const t=e.getContext("2d"),n=lc(i),r=n.pad;t.fillStyle=i.background??er,t.fillRect(0,0,e.width,e.height),t.textBaseline="top",t.textAlign="left";const s=n.titleSize;t.fillStyle="#ffffff",t.font=`bold ${s}px Arial`,t.fillText(hr(t,i.title,i.widthPx-r*2),r,r),i.subtitle&&(t.font=`${Math.round(s*.55)}px Arial`,t.globalAlpha=.85,t.fillText(hr(t,i.subtitle,i.widthPx-r*2),r,r+s*1.25),t.globalAlpha=1),t.strokeStyle="rgba(255,255,255,0.5)",t.lineWidth=Math.max(2,i.heightPx*.004),t.beginPath(),t.moveTo(r,n.ruleY),t.lineTo(i.widthPx-r,n.ruleY),t.stroke();const o=n.top,a=n.columns,l=n.colWidth,c=n.rowSize,h=n.rowH,u=n.rowsPerCol;i.rows.forEach((m,g)=>{const v=Math.floor(g/u);if(v>=a)return;const p=r+v*(l+r),d=o+g%u*h;let y=p;m.chip&&(t.fillStyle=m.chip,t.fillRect(p,d+c*.1,c*.8,c*.8),y+=c*1.2),t.fillStyle="#ffffff",t.font=`${m.strong?"bold ":""}${c}px Arial`;const A=hr(t,m.text,l-(y-p));if(t.fillText(A,y,d),m.sub){const E=t.measureText(A).width;t.font=`${Math.round(c*.78)}px Arial`,t.globalAlpha=.75,t.fillText(hr(t,`  ${m.sub}`,l-(y-p)-E),y+E,d+c*.15),t.globalAlpha=1}});const f=new In(e);return f.anisotropy=4,f.colorSpace=Mt,f}function Ho(i,e=1.36){const t=document.createElement("canvas");t.width=1088,t.height=Math.round(1088/e);const n=t.getContext("2d");n.fillStyle="#3b4046",n.fillRect(0,0,t.width,t.height);const r=new In(t);r.colorSpace=Mt,r.anisotropy=4,r.generateMipmaps=!1,r.minFilter=At;const s=new Image;return s.onload=()=>{const o=Math.max(t.width/s.naturalWidth,t.height/s.naturalHeight),a=s.naturalWidth*o,l=s.naturalHeight*o;n.drawImage(s,(t.width-a)/2,(t.height-l)/2,a,l),r.needsUpdate=!0},s.src=i,r}class Km{entries=[];placeholder=new gn({color:new je(er)});register(e,t,n){e.material=this.placeholder,this.entries.push({pos:t.clone(),mesh:e,make:n,ready:!1})}update(e,t=55,n=120,r=8){const s=[];for(const o of this.entries){const a=o.pos.distanceTo(e);if(o.mesh.visible=a<n,!o.ready&&a<t)s.push({e:o,d:a});else if(o.ready&&a>n){const l=o.mesh.material;l.map?.dispose(),l.dispose(),o.mesh.material=this.placeholder,o.ready=!1}}s.sort((o,a)=>o.d-a.d);for(const{e:o}of s.slice(0,r))o.mesh.material=new gn({map:o.make()}),o.ready=!0}get count(){return this.entries.length}get readyCount(){return this.entries.filter(e=>e.ready).length}}function jm(i,e,t,n,r,s="sign"){const o=new Ft(new Ji(e,t),new gn);return o.name=s,i.register(o,n,r),o}const Jm={event:"#41b6e6","mental-object":"#78be20",state:"#ed8b00",stative:"#ed8b00",process:"#ae2573","time-interval":"#8a1538",role:"#00a499","physical-object":"#ffb81c",resources:"#7c2855",reference:"#005eb8"},ni=i=>Jm[i]??"#425563";function Zi(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new Pn;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in u.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(u.attributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in u.morphAttributes){if(!r.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(u.morphAttributes[m])}if(e){let m;if(t)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(t){let h=0;const u=[];for(let f=0;f<i.length;++f){const m=i[f].index;for(let g=0;g<m.count;++g)u.push(m.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in s){const u=fl(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const m=[];for(let v=0;v<o[h].length;++v)m.push(o[h][v][f]);const g=fl(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function fl(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const o=new e(s),a=new sn(o,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let f=0,m=h.count;f<m;f++)for(let g=0;g<t;g++){const v=h.getComponent(f,g);a.setComponent(f+u,g,v)}}else o.set(h.array,l);l+=h.count*t}return r!==void 0&&(a.gpuType=r),a}function Qm(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d");e.fillStyle="#89928b",e.fillRect(0,0,256,256);let t=42;const n=()=>(t=t*16807%2147483647)/2147483647,r=["#9aa39b","#78817a","#a7ada3","#6e766f","#93856f"];for(let o=0;o<1400;o++){e.fillStyle=r[Math.floor(n()*r.length)],e.globalAlpha=.35+n()*.4;const a=1+n()*2.6;e.fillRect(n()*256,n()*256,a,a)}e.globalAlpha=1;const s=new In(i);return s.wrapS=s.wrapT=xr,s.colorSpace=Mt,s.anisotropy=4,s}function e0(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d");e.fillStyle="#f5f6f3",e.fillRect(0,0,256,256);let t=7;const n=()=>(t=t*16807%2147483647)/2147483647;e.fillStyle="#e8eae4";for(let s=0;s<600;s++)e.globalAlpha=.35+n()*.3,e.fillRect(n()*256,n()*256,1.6,1.6);e.globalAlpha=1,e.strokeStyle="#cfd3cb",e.lineWidth=3;for(const s of[0,128,256])e.beginPath(),e.moveTo(s,0),e.lineTo(s,256),e.moveTo(0,s),e.lineTo(256,s),e.stroke();const r=new In(i);return r.wrapS=r.wrapT=xr,r.repeat.set(1/1.2,1/1.2),r.colorSpace=Mt,r.anisotropy=4,r}const ce={floor:new zu({map:Qm(),shininess:60,specular:new je(3026478)}),wall:new Pt({color:14541782}),endWall:new Pt({color:12175549}),ceiling:new Pt({map:e0()}),door:new Pt({color:9083520}),liftDoor:new Pt({color:12042182}),stair:new Pt({color:12174013}),stairDark:new Pt({color:3817799}),rail:new Pt({color:8358806}),oak:new Pt({color:9071173}),glass:new Pt({color:3095104}),steel:new Pt({color:12831182}),led:new gn({color:16251391}),chair:new Pt({color:5140074}),daylight:new gn({color:14214894})};function t0(i,e,t,n){const r=i.attributes.uv,s=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let o=0;o<6;o++){const[a,l]=s[o];for(let c=0;c<4;c++){const h=o*4+c;r.setXY(h,r.getX(h)*a,r.getY(h)*l)}}r.needsUpdate=!0}function lr(i,e){if(!i.length)return null;const t=i.map(s=>{const o=new $n(s.w,s.h,s.d);return s.rx&&o.rotateX(s.rx),o.translate(s.x,s.y,s.z),o}),n=Zi(t);t.forEach(s=>s.dispose());const r=new Ft(n,e);return r.matrixAutoUpdate=!1,r}const dr={skirtH:.152,railH:.152,railCentre:.95},Vo=new Pt({vertexColors:!0}),pl=["#c98d64","#8d5a3c","#e3b498","#6b4a30","#d9a37e"],ml=["#2e2620","#5b4632","#8c8c8c","#d9d3c5","#141414"];function ca(i){const e=i();if(e<.25)return{top:"#f2f3ef",legs:"#f2f3ef",cap:"#ffffff"};if(e<.31)return{top:"#20375c",legs:"#20375c",cap:"#ffffff"};if(e<.43)return{top:"#eeefe9",legs:"#565b62"};if(e<.55)return{top:"#68727d",legs:"#4c5257"};const t=["#7a8f6a","#c0a052","#7c5866","#5f7484","#96694f"],n=["#55504a","#3f464d","#6a5d4f","#44403a"];return{top:t[Math.floor(i()*t.length)],legs:n[Math.floor(i()*n.length)]}}function Er(i){let e=i%2147483646+1;for(let t=0;t<3;t++)e=e*16807%2147483647;return()=>(e=e*16807%2147483647)/2147483647}function Ut(i,e,t,n,r,s,o){const a=new $n(i,e,t);a.translate(n,r,s);const l=new je(o),c=a.attributes.position.count,h=new Float32Array(c*3);for(let u=0;u<c;u++)h[u*3]=l.r,h[u*3+1]=l.g,h[u*3+2]=l.b;return a.setAttribute("color",new sn(h,3)),a}function ua(i,e,t,n){const r=pl[Math.floor(i()*pl.length)],s=e.cap??ml[Math.floor(i()*ml.length)],o=[Ut(.2,.22,.2,0,t,n,r),Ut(.21,.08,.21,0,t+.15,n-.01,s)];return e.cap&&o.push(Ut(.24,.03,.24,0,t+.2,n-.01,e.cap)),o}function n0(i){const e=Er(i),t=ca(e),n=[Ut(.09,.44,.11,-.09,.22,.17,t.legs),Ut(.09,.44,.11,.09,.22,.17,t.legs),Ut(.1,.13,.4,-.09,.5,.03,t.legs),Ut(.1,.13,.4,.09,.5,.03,t.legs),Ut(.32,.52,.2,0,.82,-.08,t.top),Ut(.08,.4,.1,-.21,.86,-.05,t.top),Ut(.08,.4,.1,.21,.86,-.05,t.top),...ua(e,t,1.2,-.06)],r=Zi(n);return n.forEach(s=>s.dispose()),r}function i0(i){const e=Er(i),t=ca(e),n=[Ut(.1,.78,.12,-.09,.39,0,t.legs),Ut(.1,.78,.12,.09,.39,0,t.legs),Ut(.32,.52,.2,0,1.04,0,t.top),Ut(.08,.52,.1,-.21,1,0,t.top),Ut(.08,.52,.1,.21,1,0,t.top),...ua(e,t,1.42,0)],r=Zi(n);return n.forEach(s=>s.dispose()),r}class r0{constructor(e,t,n){this.a=e,this.b=t;const r=Er(n),s=ca(r);this.len=e.distanceTo(t),this.speed=1+r()*.5,this.s=r()*this.len,this.dir=r()<.5?1:-1;const o=(u,f,m)=>{const g=new Ft(u,Vo);return g.position.set(f,m,0),this.group.add(g),g},a=()=>Ut(.1,.78,.12,0,-.39,0,s.legs),l=()=>Ut(.08,.52,.1,0,-.26,0,s.top);this.legL=o(a(),-.09,.78),this.legR=o(a(),.09,.78),this.armL=o(l(),-.21,1.28),this.armR=o(l(),.21,1.28);const c=[Ut(.32,.52,.2,0,1.04,0,s.top),...ua(r,s,1.42,0)],h=Zi(c);c.forEach(u=>u.dispose()),this.group.add(new Ft(h,Vo)),this.place()}a;b;group=new yn;legL;legR;armL;armR;s;dir=1;pause=0;phase=0;len;speed;place(){const e=this.s/this.len;this.group.position.lerpVectors(this.a,this.b,e);const t=(this.b.x-this.a.x)*this.dir,n=(this.b.z-this.a.z)*this.dir;this.group.rotation.y=Math.atan2(t,n)}update(e){if(this.pause>0){this.pause-=e;for(const n of[this.legL,this.legR,this.armL,this.armR])n.rotation.x*=Math.max(0,1-e*6);return}this.s+=this.speed*e*this.dir,(this.s<=0||this.s>=this.len)&&(this.s=Math.max(0,Math.min(this.len,this.s)),this.dir*=-1,this.pause=1.2+this.phase%1.3),this.phase+=this.speed*e*3.4;const t=Math.sin(this.phase)*.5;this.legL.rotation.x=t,this.legR.rotation.x=-t,this.armL.rotation.x=-t*.6,this.armR.rotation.x=t*.6,this.place(),this.group.position.y+=Math.abs(Math.sin(this.phase))*.025}}class s0{constructor(e,t,n){this.zc=n;const r=new $n(.05,2.06,.5),s=ce.liftDoor;this.leafA=new Ft(r,s),this.leafB=new Ft(r.clone(),s),this.leafA.position.set(t,1.03,n-.25),this.leafB.position.set(t,1.03,n+.25),e.add(this.leafA,this.leafB)}zc;leafA;leafB;openT=0;target=0;update(e){this.openT+=(this.target-this.openT)*Math.min(1,e*5);const t=this.openT*.48;this.leafA.position.z=this.zc-.25-t,this.leafB.position.z=this.zc+.25+t}get openness(){return this.openT}}const gl=i=>i.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""),D={CORRIDOR_W:3,ROOM_H:3,STOREY:4,DOOR_W:1.2,DOOR_H:2.1,DOOR_SPACING:2,ENTRY:2.2,END_ZONE:2.6,NOTICE_SPACING:1.25,LOBBY_W:7,LOBBY_D:7,LANDING_Z0:7,LANDING_Z1:10,STREET_Z0:7,STREET_Z1:11,STREET_H:4,STRIP:8.2,STAIR_SLOT:3.6,WING_GAP:12,PIT_X0:-3.5,PIT_X1:-.7,PIT_Z0:1.2,PIT_Z1:5.5},o0=(i,e,t=0,n=0)=>{const r=Math.max(t,n)*D.NOTICE_SPACING;return D.ENTRY+Math.max(i,e,1)*D.DOOR_SPACING+(r?r+.4:0)+D.END_ZONE};function a0(i){const e=new Map(i.classes.map(H=>[H.id,H])),t={};for(const H of i.classes)t[H.id]=[];for(const H of i.classes)H.supers.length&&t[H.supers[0]]?.push(H.id);for(const H of i.classes){const X=new Set(t[H.id]);t[H.id]=H.subs.filter(re=>X.has(re))}const n=new Map;function r(H){if(n.has(H))return n.get(H);const X=t[H],re=X.filter(Y=>t[Y].length),k=[];let K=re.reduce((Y,te)=>Y+o(te),0),me=0;for(const Y of X)t[Y].length||(me<K?(k.push(Y),me+=o(Y)):(re.push(Y),K+=o(Y)));const ye={south:re,north:k,southSum:K,northSum:me};return n.set(H,ye),ye}const s=new Map;function o(H){if(s.has(H))return s.get(H);const X=t[H];let re=D.STRIP;if(X.length){const{southSum:k,northSum:K}=r(H);re=Math.max(D.STRIP,D.STAIR_SLOT+Math.max(k,K))}return s.set(H,re),re}const a={},l={};function c(H,X,re,k=!1){const K=e.get(H),me=t[H],ye=me.length?X+.2-D.PIT_X0:X+D.STRIP/2;if(a[H]={x:ye,level:re,y:-4*re,flip:k,corridorLen:o0(K.out.length,K.in.length,K.notes.length,K.examples.length)},me.length){const{south:Y,north:te,southSum:oe,northSum:he}=r(H);let pe=X+D.STAIR_SLOT;for(const Ge of Y)c(Ge,pe,re+1,!1),pe+=o(Ge);let De=X+D.STAIR_SLOT;for(const Ge of te)c(Ge,De,re+1,!0),De+=o(Ge);const nt=new Set(me);l[H]={parentId:H,level:re+1,y:-4*(re+1),x0:X+.2,x1:X+D.STAIR_SLOT+Math.max(oe,he,5),stairX:ye+(D.PIT_X0+D.PIT_X1)/2,homeChildIds:me,southIds:Y,northIds:te,portalChildIds:K.subs.filter(Ge=>!nt.has(Ge))}}}const h=H=>H.rootIds.reduce((X,re)=>X+o(re),0),u=i.wings.filter(H=>H.zone!=="gallery"),f=u.reduce((H,X)=>H+h(X),0);let m=0;const g=new Map;for(const H of u){const X=m<f/2;g.set(H.key,X?"south":"north"),X&&(m+=h(H))}const v=[],p={south:6,north:6};for(const H of u){const X=g.get(H.key),re=p[X];for(const k of H.rootIds)c(k,p[X],0),p[X]+=o(k);v.push({key:H.key,x0:re,x1:p[X],rootIds:H.rootIds,street:X}),p[X]+=D.WING_GAP}const d=Math.max(p.south,p.north)-D.WING_GAP+6,y=30.5,A=-30,E=i.wings.filter(H=>H.zone==="gallery"),C=E.reduce((H,X)=>H+h(X)+D.WING_GAP,0);let b=A-C;const R=b;for(const H of E){const X=b;for(const re of H.rootIds)c(re,b,0),b+=o(re);v.push({key:H.key,x0:X,x1:b,rootIds:H.rootIds,street:"gallery"}),b+=D.WING_GAP}const z=new Set(E.map(H=>H.key));for(const H of v){if(H.street!=="north")continue;const X=H.x0+H.x1;for(const k of i.classes){if(k.wing!==H.key)continue;const K=a[k.id];K.x=X-K.x,K.flip=!K.flip,K.mirror=!0}const re=new Set(i.classes.filter(k=>k.wing===H.key).map(k=>k.id));for(const k of Object.values(l))re.has(k.parentId)&&([k.x0,k.x1]=[X-k.x1,X-k.x0],k.stairX=X-k.stairX,k.mirror=!0)}const x=[],S=[];for(const H of i.classes){const X=a[H.id];!X.mirror&&X.flip&&x.push(X),X.mirror&&!X.flip&&S.push(X)}let P=28;const O=2,I=D.CORRIDOR_W/2+.3,V=D.LOBBY_W/2+.15,$=(H,X,re,k)=>Math.abs(H.x-X.x)<re+k;for(const H of x)for(const X of S)H.level===X.level&&($(H,X,I,I)&&(P=Math.max(P,12+H.corridorLen+X.corridorLen+O)),$(H,X,I,V)&&(P=Math.max(P,12+H.corridorLen+O)),$(H,X,V,I)&&(P=Math.max(P,12+X.corridorLen+O)));P=Math.ceil(P);const Z=D.STREET_Z1+P+D.STREET_Z0+4;for(const H of i.classes){const X=a[H.id];X.mirror=!!X.mirror,X.oz=X.mirror?X.flip?Z:Z-17:X.flip?17:0,z.has(H.wing)&&(X.oz+=y)}const B=new Map(i.classes.map(H=>[H.id,H.wing]));for(const H of Object.values(l))H.dz=z.has(B.get(H.parentId))?y:0;const ie=[];for(const H of i.classes)for(const X of H.supers.slice(1))ie.push({childId:H.id,parentId:X});return{areas:a,landings:l,homeChildren:t,nonPrimaryUp:ie,wings:v,street:{x0:0,x1:d},loop:{C:P,K:Z,xEnd:d,south:{z0:D.STREET_Z0,z1:D.STREET_Z1},north:{z0:D.STREET_Z1+P,z1:D.STREET_Z1+P+4},connectors:{west:[.2,3.8],east:[d-3.8,d-.2]},gallery:{x0:R-2,x1:-25.6,z0:D.STREET_Z0+y,z1:D.STREET_Z1+y,dz:y,entrance:[-28.4,-25.9]}}}}const fn="__atrium",_l=new gn({color:16767}),l0=(i,e)=>i===null&&e===null?"":`${i??0}..${e===-1?"*":e??"*"}`,xl=(i,e)=>{if(i===null&&e===null)return"";const t=e===null||String(e)==="-1"?"*":String(e);return`${i??0}..${t}`},ss=(i,e,t,n)=>`${[xl(n.oppMin,n.oppMax),i].filter(Boolean).join(" ")} — ${e} → ${[xl(n.min,n.max),t].filter(Boolean).join(" ")}`;class Tr{constructor(e,t,n,r=!1){this.group=e,this.origin=t,this.signs=n,this.f=r?-1:1,e.rotation.y=r?Math.PI:0}group;origin;signs;colliders=[];walkables=[];trims=[];plates=[];glass=[];leds=[];seats=[];f;local(e,t,n){return new N(this.origin.x+this.f*e,this.origin.y+t,this.origin.z+this.f*n)}batches=new Map;box(e,t,n,r,s,o,a,l={solid:!0}){const c={w:e,h:t,d:n,x:s,y:o,z:a,worldUV:l.vinyl||l.worldUV},h=this.batches.get(r);h?h.push(c):this.batches.set(r,[c]);const u=this.origin.x+this.f*s,f=this.origin.z+this.f*a,m=new St(new N(u-e/2,this.origin.y+o-t/2,f-n/2),new N(u+e/2,this.origin.y+o+t/2,f+n/2));if(l.solid&&this.colliders.push(m),l.walkable&&this.walkables.push(m),l.trim)for(const g of l.trim)this.trimFace(g,e,t,n,s,o,a)}trimFace(e,t,n,r,s,o,a){const l=o-n/2,c=.05,h=e.startsWith("x")?{w:c,d:Math.max(.3,r-.1)}:{w:Math.max(.3,t-.1),d:c},u=c/2+.005,f=e==="x+"?s+t/2+u:e==="x-"?s-t/2-u:s,m=e==="z+"?a+r/2+u:e==="z-"?a-r/2-u:a;this.trims.push({...h,h:dr.skirtH,x:f,y:l+dr.skirtH/2,z:m},{...h,h:dr.railH,x:f,y:l+dr.railCentre,z:m})}led(e,t,n,r=.6,s=.6){this.leds.push({w:r,h:.035,d:s,x:e,y:n,z:t})}oakSpec(e){this.trims.push(e)}steelSpec(e){this.plates.push(e)}chairSpots=[];peopleGeos=[];sit(e,t,n,r,s){const o=n0(s);r===-1&&o.rotateY(Math.PI),o.translate(e,t,n),this.peopleGeos.push(o)}stand(e,t,n,r,s){const o=i0(s);o.rotateY(r),o.translate(e,t,n),this.peopleGeos.push(o)}chair(e,t,n,r=1){this.chairSpots.push({x:e,y:t,z:n,face:r});const s=t+.45;this.seats.push({w:.44,h:.06,d:.4,x:e,y:s,z:n}),this.seats.push({w:.44,h:.48,d:.05,x:e,y:s+.36,z:n-r*.19});for(const[o,a]of[[-.18,-.16],[.18,-.16],[-.18,.16],[.18,.16]])this.plates.push({w:.035,h:.44,d:.035,x:e+o,y:t+.22,z:n+a});this.colliders.push(new St().setFromPoints([this.local(e-.26,t,n-.26),this.local(e+.26,t+.95,n+.26)]))}doorFurniture(e,t,n,r){const o=e.startsWith("x"),a=o?{w:.02,d:.28}:{w:.28,d:.02},l=o?{w:.02,d:D.DOOR_W-.25}:{w:D.DOOR_W-.25,d:.02},c=o?{w:.02,d:.1}:{w:.1,d:.02},h=.06,u=e==="x+"?t+h:e==="x-"?t-h:t,f=e==="z+"?r+h:e==="z-"?r-h:r,m=.42;this.glass.push({...a,h:.42,x:u,y:n+1.5,z:f}),this.plates.push({...l,h:.25,x:u,y:n+.13,z:f}),this.plates.push({...c,h:.3,x:o?u:t+m,y:n+1.05,z:o?r+m:f})}populate(e,t){if(e!=="off"){const n=e==="full"?.4:.2,r=Er(t);for(const s of this.chairSpots)r()<n&&this.sit(s.x,s.y+.03,s.z,s.face,Math.floor(r()*99991))}if(this.peopleGeos.length){const n=Zi(this.peopleGeos);this.peopleGeos.forEach(s=>s.dispose());const r=new Ft(n,Vo);r.matrixAutoUpdate=!1,this.group.add(r),this.peopleGeos=[]}}finalize(){for(const[e,t]of this.batches){const n=t.map(o=>{const a=new $n(o.w,o.h,o.d);return o.worldUV&&t0(a,o.w,o.h,o.d),a.translate(o.x,o.y,o.z),a}),r=Zi(n);n.forEach(o=>o.dispose());const s=new Ft(r,e);s.matrixAutoUpdate=!1,this.group.add(s)}this.batches.clear();for(const e of[lr(this.trims,ce.oak),lr(this.plates,ce.steel),lr(this.glass,ce.glass),lr(this.leds,ce.led),lr(this.seats,ce.chair)])e&&this.group.add(e)}sign(e,t,n,r,s,o,a,l){const c=jm(this.signs,e,t,this.local(n,r,s),a,l);return c.position.set(n,r,s),c.rotation.y=o,c.matrixAutoUpdate=!1,c.updateMatrix(),this.group.add(c),c}}function c0(i,e,t){const{byId:n,layout:r}=e,s=new yn;s.name=`area:${i.label}`,s.position.copy(t);const o=r.areas[i.id].flip,a=o?Math.PI:0,l=new Tr(s,t,e.signs,o),c=[],h=ni(i.wing),u=r.areas[i.id].corridorLen,f=D.CORRIDOR_W,m=D.ROOM_H,g=D.LOBBY_W,v=D.LOBBY_D,p=r.landings[i.id],d=i.supers.length===0,y=-u/2;l.box(f,.1,u,ce.floor,0,-.05,y,{walkable:!0,vinyl:!0}),l.box(f,.1,u,ce.ceiling,0,m+.05,y,{worldUV:!0}),l.box(.15,m,u,ce.wall,f/2+.075,m/2,y,{solid:!0,trim:["x-"]}),l.box(.15,m,u,ce.wall,-f/2-.075,m/2,y,{solid:!0,trim:["x+"]}),l.box(f+.3,m,.15,ce.endWall,0,m/2,-u-.075,{solid:!0,trim:["z+"]});for(let se=0;se<Math.floor(u/3);se++)l.led(0,-(se+.6)*3,m-.02,.35,1.3);p?(l.box(g/2-D.PIT_X1,.1,v,ce.floor,(D.PIT_X1+g/2)/2,-.05,v/2,{walkable:!0,vinyl:!0}),l.box(D.PIT_X1-D.PIT_X0,.1,D.PIT_Z0,ce.floor,(D.PIT_X0+D.PIT_X1)/2,-.05,D.PIT_Z0/2,{walkable:!0,vinyl:!0}),l.box(D.PIT_X1-D.PIT_X0,.1,v-D.PIT_Z1,ce.floor,(D.PIT_X0+D.PIT_X1)/2,-.05,(D.PIT_Z1+v)/2,{walkable:!0,vinyl:!0})):l.box(g,.1,v,ce.floor,0,-.05,v/2,{walkable:!0,vinyl:!0}),l.box(g,.1,v,ce.ceiling,0,m+.05,v/2,{worldUV:!0}),l.box(.15,m,v,ce.wall,g/2+.075,m/2,v/2,{solid:!0,trim:["x-"]}),l.box(.15,m,v,ce.wall,-g/2-.075,m/2,v/2,{solid:!0,trim:["x+"]});const A=(g-f)/2;l.box(A,m,.15,ce.wall,f/2+A/2,m/2,-.075,{solid:!0,trim:["z+","z-"]}),l.box(A,m,.15,ce.wall,-2.5,m/2,-.075,{solid:!0,trim:["z+","z-"]}),l.box(2,m,.15,ce.wall,-2.5,m/2,v+.075,{solid:!0,trim:["z-","z+"]}),l.box(2,m,.15,ce.wall,2.5,m/2,v+.075,{solid:!0,trim:["z-","z+"]}),l.box(3,m-D.DOOR_H-.3,.15,ce.wall,0,(m+D.DOOR_H+.3)/2,v+.075,{});for(const se of[-1.8,1.8])for(const xe of[2,5])l.led(se,xe,m-.02);const E=d?D.STREET_H:D.ROOM_H,C=d?2.7:2.4,b=d?0:.4;l.box(.006,.44,1.6,_l,b,C,v+1.35,{});for(const se of[1,-1])l.sign(1.6,.44,b+se*.0035,C,v+1.35,se*Math.PI/2,()=>gt({widthPx:800,heightPx:220,title:i.label,subtitle:i.roomNumber?`Room ${i.roomNumber}`:`${i.wing} wing`,titleSize:62}),`hang:${i.label}:${se}`);for(const se of[b-.6,b+.6])l.steelSpec({w:.03,h:E-C-.22,d:.03,x:se,y:(E+C+.22)/2,z:v+1.35});const R=new gn({color:new je(h)});l.box(.18,.012,v+u,R,0,.012,(v-u)/2,{}),l.sign(2.6,.7,0,m-.5,.08,0,()=>gt({widthPx:1024,heightPx:276,title:i.label,subtitle:[i.roomNumber?`Room ${i.roomNumber}`:null,`${i.wing} wing · ${i.floor?`level −${i.floor}`:"ground"}`].filter(Boolean).join(" · "),titleSize:96}),`name:${i.label}`);const z=i.supers.map(se=>n.get(se)?.label??"?");l.sign(2.9,.62,0,D.DOOR_H+.55,v-.09,Math.PI,()=>gt({widthPx:1152,heightPx:246,title:d?"⌂ Hospital Street":`Stairs ↑ ${z[0]}`,subtitle:d?"reception · all wings":`landing · stairs at the west end${z.length>1?` · also: ${z.slice(1).join(", ")}`:""}`,titleSize:74}),`back:${i.label}`),l.sign(1.9,1.5,2.5,1.62,.01,0,()=>gt({widthPx:1024,heightPx:810,title:i.label,subtitle:[i.plural?`plural: ${i.plural}`:null,i.alsoKnownAs.length?`also: ${i.alsoKnownAs.join("; ")}`:null,i.roomNumber?`Room ${i.roomNumber}`:null].filter(Boolean).join(" · "),body:i.description??"Definition pending.",footer:i.source?`Source: ${i.source}`:void 0,fitBody:!0,titleSize:88,align:"left"}),`poster:${i.label}`),e.illustrations?.has(gl(i.label))&&(l.oakSpec({w:1.3,h:1.38,d:.05,x:-2.5,y:1.62,z:-.02}),l.sign(1.2,1.28,-2.5,1.62,.01,0,()=>Ho(`art/illustrations/${gl(i.label)}.jpg`,1.2/1.28),`illu:${i.label}`));const x=i.self.length;i.deprecated.length&&l.sign(.9,.42,-1.44,1.9,-1.4,Math.PI/2,()=>Zm(i.deprecated),`old:${i.label}`);const S=Math.max(i.out.length,i.in.length,1)*D.DOOR_SPACING,P=-(D.ENTRY+S+.2),O=(se,xe)=>{const Te=se.match(/(\d+)/);return Te?`${xe} ${Te[1]}`:xe};let I=0;const V=(se,xe,Te,L,Je)=>{const He=se==="right"?1:-1,st=P-(xe+.5)*D.NOTICE_SPACING;l.oakSpec({w:.05,h:1.34,d:1.06,x:He*(f/2-.035),y:1.55,z:st}),l.sign(.94,1.22,He*(f/2-.075),1.55,st,He>0?-Math.PI/2:Math.PI/2,()=>qm(Te,L,Je),`notice:${i.label}:${Te}`),I++};i.notes.forEach((se,xe)=>V("left",xe,O(se.key,"Note"),er,se.text)),i.examples.forEach((se,xe)=>V("right",xe,O(se.key,"Example"),dl,se.text));const $=i.notes.length-i.examples.length,Z=Math.min(Math.abs($),2);for(let se=0;se<Z;se++){const xe=$>0?1:-1,Te=($>0?i.examples.length:i.notes.length)+se,L=P-(Te+.5)*D.NOTICE_SPACING,Je=(i.id.charCodeAt(0)+i.id.charCodeAt(3)*31+se*7>>>0)%997,He=e.art.length?e.art[Je%e.art.length]:null;l.oakSpec({w:.05,h:1.02,d:1.36,x:xe*(f/2-.035),y:1.68,z:L}),l.sign(1.28,.94,xe*(f/2-.075),1.68,L,xe>0?-Math.PI/2:Math.PI/2,()=>He?Ho(`art/${He.file}`):ac(Je),`print:${i.label}:${se}`),l.sign(.44,.13,xe*(f/2-.075),1.05,L,xe>0?-Math.PI/2:Math.PI/2,()=>He?rs(He.title,`${He.artist} · ${He.licence} · Wikimedia Commons`):rs("Untitled study","Procedural print — placeholder"),`placard:${i.label}:${se}`)}l.chair(2.35,0,.42,1),l.chair(2.95,0,.42,1),l.chair(-2.35,0,.42,1),l.chair(-2.95,0,.42,1);const B=se=>-(D.ENTRY+(se+.5)*D.DOOR_SPACING),ie=(se,xe,Te,L,Je,He,st,Ue)=>{const T=se==="right"?1:-1,_=T*(f/2),F=B(xe);l.box(.08,D.DOOR_H,D.DOOR_W,ce.door,_-T*.05,D.DOOR_H/2,F,{}),l.doorFurniture(T>0?"x-":"x+",_-T*.05,0,F);const Q=T*.75;l.box(1.3,.56,.006,_l,Q,2.42,F,{});for(const ae of[1,-1])l.sign(1.3,.56,Q,2.42,F+ae*.0035,ae>0?0:Math.PI,()=>gt({widthPx:760,heightPx:328,title:st,subtitle:Ue,titleSize:50}),`doorsign:${Je}:${ae}`);for(const ae of[Q-.45,Q+.45])l.steelSpec({w:.03,h:m-2.69,d:.03,x:ae,y:(m+2.69)/2,z:F});c.push({kind:Te,areaId:i.id,elementId:L,label:Je,targetIds:[He],triggerPos:l.local(_-T*.45,0,F),radius:.75,halfX:.4,halfZ:.55,auto:!0,exitPos:l.local(_-T*1.35,0,F),exitYaw:(T>0?Math.PI/2:-Math.PI/2)+a})};i.out.forEach((se,xe)=>{const Te=n.get(se.targetId)?.label??"?";ie("right",xe,"door-out",se.elementId,se.label,se.targetId,Te,ss(i.label,se.label,Te,se))}),i.in.forEach((se,xe)=>{const Te=n.get(se.sourceId)?.label??"?";ie("left",xe,"door-in",se.elementId,se.label,se.sourceId,Te,ss(Te,se.label,i.label,se))});const H=se=>e.art.length?e.art[se%e.art.length]:null,X=se=>(i.id.charCodeAt(1)*17+i.id.charCodeAt(5)*5+se*31>>>0)%997,re=Math.max(i.out.length,i.in.length,1),k=(se,xe)=>{const Te=se==="right"?1:-1;for(let L=xe;L<re;L+=2){const Je=X(L*2+(Te>0?1:0));An(l,H(Je),Je,Te*(f/2-.075),1.68,B(L),Te>0?-Math.PI/2:Math.PI/2,`${i.label}:${se}:${L}`)}};i.out.length<re&&k("right",i.out.length),i.in.length<re&&k("left",i.in.length);{const se=X(99);An(l,H(se),se,f/2-.075,1.68,-1.15,-Math.PI/2,`${i.label}:entry`)}if(i.self.forEach((se,xe)=>{const Te=f/2-.8-xe*(D.DOOR_W+.2);l.box(D.DOOR_W,D.DOOR_H,.08,ce.door,Te,D.DOOR_H/2,-u+.06,{}),l.doorFurniture("z+",Te,0,-u+.06),l.sign(1.3,.4,Te,D.DOOR_H+.4,-u+.07,0,()=>gt({widthPx:768,heightPx:236,title:`${se.label} ${l0(se.min,se.max)}`,subtitle:`→ ${i.label}`,titleSize:56}),`selfsign:${se.label}`),c.push({kind:"door-self",areaId:i.id,elementId:se.elementId,label:se.label,targetIds:[i.id],triggerPos:l.local(Te,0,-u+.5),radius:.7,halfX:.55,halfZ:.45,auto:!0})}),!x){for(const se of[-1,1]){const xe=se*.44;l.box(.85,D.DOOR_H,.08,ce.door,xe,D.DOOR_H/2,-u+.06,{}),l.steelSpec({w:.7,h:.05,d:.05,x:xe,y:1.05,z:-u+.13}),l.steelSpec({w:.7,h:.22,d:.02,x:xe,y:.13,z:-u+.11})}l.steelSpec({w:.04,h:D.DOOR_H,d:.03,x:0,y:D.DOOR_H/2,z:-u+.11}),l.sign(1.1,.34,0,D.DOOR_H+.35,-u+.07,0,()=>gt({widthPx:640,heightPx:198,title:"FIRE EXIT",subtitle:"emergency use only",background:dl,titleSize:78,align:"center"}),`fire:${i.label}`),c.push({kind:"fire-exit",areaId:i.id,label:i.label,targetIds:[],triggerPos:l.local(0,0,-u+.8),radius:1.1,halfX:1,halfZ:.75,auto:!1,prompt:"E — push the bar (emergency use only)"})}const K=i.supers.length>0||i.subs.length>0;let me,ye,Y;const te=[],oe=[];{const se=Wo(i,n),xe=se.length?Math.max(...se.map(Te=>Te.level)):0;for(let Te=xe;Te>=1;Te--)for(const L of se.filter(Je=>Je.level===Te)){const Je=n.get(L.id);te.push({text:`▲${Te} ${Je?.label??"?"}`,chip:ni(Je?.wing??"")}),oe.push(L.id)}te.push({text:`● ${i.label}`,strong:!0,chip:h}),oe.push(null);for(const Te of i.subs){const L=n.get(Te);te.push({text:`▼1 ${L?.label??"?"}`,chip:ni(L?.wing??"")}),oe.push(Te)}te.push({text:"⌂ Reception"}),oe.push(fn)}const he={widthPx:850,heightPx:750,title:K?"Lift":"Exit",subtitle:i.label,rows:te,rowSize:te.length>10?30:38,columns:te.length>10?2:1},pe=(()=>{const se=Go(he,te.length);return te.flatMap((xe,Te)=>se[Te]&&oe[Te]?[{rect:se[Te],id:oe[Te],label:xe.text.replace(/^[▲▼●⌂]\S* ?/u,"")}]:[])})();let De;K&&(l.box(.08,2.4,5.15-4.85,ce.liftDoor,2+.04,2.4/2,(4.85+5.15)/2),l.box(.08,2.4,6.45-6.15,ce.liftDoor,2+.04,2.4/2,(6.15+6.45)/2),l.box(.08,2.4-D.DOOR_H,1,ce.liftDoor,2+.04,(2.4+D.DOOR_H)/2,5.65,{}),l.box(3.42-2,2.4,.08,ce.liftDoor,2.71,2.4/2,4.85+.04),l.box(3.42-2,2.4,.08,ce.liftDoor,2.71,2.4/2,6.45-.04),l.box(3.42-2,.06,6.45-4.85,ce.liftDoor,2.71,2.4+.03,5.65,{}),l.led(2.71,5.65,2.4-.02,.5,.5),Y={doors:new s0(s,2+.1,5.65),doorwayPos:l.local(2+.05,0,5.65)},l.steelSpec({w:.06,h:2.12,d:.09,x:2-.01,y:1.06,z:5.12}),l.steelSpec({w:.06,h:2.12,d:.09,x:2-.01,y:1.06,z:6.18}),l.steelSpec({w:.06,h:.09,d:1.15,x:2-.01,y:2.14,z:5.65}),l.steelSpec({w:.16,h:.02,d:1.05,x:2+.02,y:.012,z:5.65}),l.steelSpec({w:.03,h:.26,d:.16,x:2-.015,y:1.12,z:4.99}),l.sign(.1,.2,2-.035,1.12,4.99,-Math.PI/2,()=>gt({widthPx:64,heightPx:128,title:"▲",subtitle:"▼",titleSize:40,align:"center"}),`liftcall:${i.label}`),l.sign(.72,.24,2-.015,2.27,5.65,-Math.PI/2,()=>gt({widthPx:384,heightPx:128,title:"LIFT",subtitle:i.floor?`level −${i.floor}`:"ground",titleSize:56,align:"center"}),`liftind:${i.label}`),l.steelSpec({w:1.24,h:.05,d:.04,x:2.71+.04,y:.92,z:4.85+.13}),l.steelSpec({w:1.24,h:.05,d:.04,x:2.71+.04,y:.92,z:6.45-.13}),l.steelSpec({w:.04,h:.05,d:1.44,x:3.42-.13,y:.92,z:5.65}),l.sign(.42,.15,2.71+.35,2.02,4.85+.09,0,()=>gt({widthPx:336,heightPx:120,title:"MAX 8 PERSONS · 610 kg",titleSize:30,align:"center",background:"#e8e9e4",color:"#3a4046"}),`liftload:${i.label}`),l.sign(.4,.14,2.71-.2,1.78,6.45-.09,Math.PI,()=>gt({widthPx:320,heightPx:112,title:"NO SMOKING",titleSize:40,align:"center",background:"#f4f4f1",color:"#b3261e"}),`liftsmoke:${i.label}`),De=l.sign(.95,1.05,2.71-.08,1.3,4.85+.09,0,()=>gr(he),`liftcab:${i.label}`),me=l.local(2.71,0,5.65),ye=Math.PI/2+a,c.push({kind:"lift",areaId:i.id,label:"Lift",targetIds:[],triggerPos:me.clone(),radius:.75,auto:!1,prompt:"E — Lift: select destination"}));const nt=l.sign(1.7,1.5,g/2-.09,1.7,3.1,-Math.PI/2,()=>gr(he),`liftboard:${i.label}`);let Ge;if(K&&(Ge=[{kind:"lift",mesh:nt,cells:pe}],De&&Ge.push({kind:"lift",mesh:De,cells:pe})),i.supers.slice(1).forEach((se,xe)=>{const Te=n.get(se),L=6.35-xe*1.15;l.box(.1,D.DOOR_H,1,ce.door,-3.5+.06,D.DOOR_H/2,L,{}),l.doorFurniture("x+",-3.5+.06,0,L),l.sign(1.35,.42,-3.5+.1,D.DOOR_H+.4,L,Math.PI/2,()=>gt({widthPx:768,heightPx:240,title:`Stairs ↑ ${Te?.label??"?"}`,subtitle:`${Te?.wing??"?"} wing`,titleSize:56}),`upportal:${Te?.label}`),c.push({kind:"stair-up",areaId:i.id,label:`Stairs ↑ ${Te?.label??"?"}`,targetIds:[se],triggerPos:l.local(-3.5+.5,0,L),radius:.7,halfX:.45,halfZ:.55,auto:!0})}),p?u0(i,l,c,e):i.subs.length&&i.subs.forEach((se,xe)=>{const Te=n.get(se),L=4.6-xe*1.15;l.box(.1,D.DOOR_H,1,ce.door,-3.5+.06,D.DOOR_H/2,L,{}),l.doorFurniture("x+",-3.5+.06,0,L),l.sign(1.35,.42,-3.5+.1,D.DOOR_H+.4,L,Math.PI/2,()=>gt({widthPx:768,heightPx:240,title:`↓ ${Te?.label??"?"}`,subtitle:`homed in ${Te?.wing??"?"} wing`,titleSize:56}),`downportal:${Te?.label}`),c.push({kind:"stair-down",areaId:i.id,label:`Stairs ↓ ${Te?.label??"?"}`,targetIds:[se],triggerPos:l.local(-3.5+.5,0,L),radius:.7,halfX:.45,halfZ:.55,auto:!0})}),i.subs.length){const se=i.subs.map(xe=>n.get(xe)?.label??"?");l.sign(1.9,.85,-3.5+.09,2.45,3.3,Math.PI/2,()=>gr({widthPx:900,heightPx:400,title:"Stairs ↓",rows:se.map(xe=>({text:xe})),rowSize:se.length>6?34:44,columns:se.length>8?2:1}),`stairsdown:${i.label}`)}const it=[new St().setFromPoints([l.local(-g/2-.3,-.5,-.2),l.local(g/2+.3,2.5,v+.2)]),new St().setFromPoints([l.local(-f/2-.4,-.5,-u-.5),l.local(f/2+.4,2.5,0)])];if(p){const se=o?-1:1;it.push(new St().setFromPoints([l.local(D.PIT_X0-.2,-4-.5,D.PIT_Z0-.2),l.local(D.PIT_X1+.2,2.5,v+.2)]),new St().setFromPoints([new N(p.x0-.3,t.y-D.STOREY-.5,t.z+se*5.4),new N(p.x1+.3,t.y-D.STOREY+2.5,t.z+se*(D.LANDING_Z1+.3))]))}return l.populate(e.people,i.id.charCodeAt(0)*131+i.id.charCodeAt(4)*17+i.id.charCodeAt(8)>>>0),l.finalize(),{id:i.id,wc:i,label:i.label,group:s,colliders:l.colliders,walkables:l.walkables,interactables:c,spawnPos:l.local(0,0,4.6),spawnYaw:a,liftPos:me,liftYaw:ye,lift:Y,boards:Ge,notices:I,boxes:it}}function u0(i,e,t,n){const{byId:r,layout:s}=n,o=s.landings[i.id],a=e.origin,l=D.STOREY,c=D.PIT_X1-D.PIT_X0,h=c/2-.1,u=D.PIT_X0+h/2,f=D.PIT_X1-h/2,m=.8,g=D.PIT_Z1-D.PIT_Z0-m,v=12,p=g/v;for(let k=0;k<v;k++){const K=-((k+1)*(l/2))/v;e.box(h,.09,p+.02,ce.oak,u,K-.045,D.PIT_Z1-(k+.5)*p,{walkable:!0})}e.box(c,.1,m,ce.oak,(D.PIT_X0+D.PIT_X1)/2,-l/2-.05,D.PIT_Z0+m/2,{walkable:!0});for(let k=0;k<v;k++){const K=-l/2-(k+1)*(l/2)/v;e.box(h,.09,p+.02,ce.oak,f,K-.045,D.PIT_Z0+m+(k+.5)*p,{walkable:!0})}e.box(c,.1,D.LOBBY_D-D.PIT_Z1+.1,ce.floor,(D.PIT_X0+D.PIT_X1)/2,-l-.05,(D.PIT_Z1+D.LOBBY_D)/2,{walkable:!0,vinyl:!0}),e.box(c+.2,.1,D.PIT_Z1-D.PIT_Z0+.1,ce.floor,(D.PIT_X0+D.PIT_X1)/2,-l-.05,(D.PIT_Z0+D.PIT_Z1)/2,{walkable:!0,vinyl:!0});{const k=Math.atan2(l/2,D.PIT_Z1-D.PIT_Z0-m),K=Math.hypot(D.PIT_Z1-D.PIT_Z0-m,l/2)+.1,me=(D.PIT_Z0+m+D.PIT_Z1)/2;e.oakSpec({w:h+.05,h:.06,d:K,x:u,y:-l/4-.22,z:me,rx:-k}),e.oakSpec({w:h+.05,h:.06,d:K,x:f,y:-3*l/4-.22,z:me,rx:k});const ye=(D.PIT_X0+D.PIT_X1)/2;e.oakSpec({w:.24,h:.34,d:K,x:ye,y:-l/4-.12,z:me,rx:-k}),e.oakSpec({w:.24,h:.34,d:K,x:ye,y:-3*l/4-.12,z:me,rx:k})}const d=l+D.ROOM_H;e.box(.1,d,D.LOBBY_D-D.PIT_Z0,ce.wall,D.PIT_X0-.05,-l+d/2-D.ROOM_H,(D.PIT_Z0+D.LOBBY_D)/2),e.box(.1,l,D.PIT_Z1-D.PIT_Z0,ce.wall,D.PIT_X1+.05,-l/2,(D.PIT_Z0+D.PIT_Z1)/2),e.box(.1,l,D.LOBBY_D-D.PIT_Z1,ce.wall,D.PIT_X1+.05,-l/2,(D.PIT_Z1+D.LOBBY_D)/2),e.box(c+.2,l,.1,ce.wall,(D.PIT_X0+D.PIT_X1)/2,-l/2,D.PIT_Z0-.05);const y=dr.railCentre,A=(k,K,me,ye,Y)=>{const te=Math.abs(me-k)>Math.abs(ye-K),oe=te?me-k:ye-K;e.oakSpec({w:te?oe:.06,h:.06,d:te?.06:oe,x:(k+me)/2,y:Y+y,z:(K+ye)/2});for(let he=.15;he<oe;he+=.3)e.oakSpec({w:.035,h:y-.03,d:.035,x:te?k+he:k,y:Y+(y-.03)/2,z:te?K:K+he});e.colliders.push(new St().setFromPoints([e.local(Math.min(k,me)-.05,Y,Math.min(K,ye)-.05),e.local(Math.max(k,me)+.05,Y+y+.05,Math.max(K,ye)+.05)]))};A(D.PIT_X1+.04,D.PIT_Z0,D.PIT_X1+.04,D.PIT_Z1,0),A(D.PIT_X0,D.PIT_Z0-.04,D.PIT_X1,D.PIT_Z0-.04,0),A(D.PIT_X1-h-.2,D.PIT_Z1+.04,D.PIT_X1,D.PIT_Z1+.04,0);const E=(k,K,me)=>{e.oakSpec({w:.09,h:y+.17,d:.09,x:k,y:me+(y+.17)/2,z:K}),e.oakSpec({w:.13,h:.035,d:.13,x:k,y:me+y+.17,z:K})};E(D.PIT_X1+.04,D.PIT_Z0-.04,0),E(D.PIT_X1+.04,D.PIT_Z1+.04,0),E(D.PIT_X1-h-.2,D.PIT_Z1+.04,0);{const k=(D.PIT_X0+D.PIT_X1)/2,K=Math.atan2(l/2,g),me=Math.hypot(g,l/2)+.15,ye=D.PIT_Z1,Y=D.PIT_Z0+m,te=(ye+Y)/2,oe=De=>y-l/2*((ye-De)/g),he=(De,nt,Ge)=>e.oakSpec({w:.07,h:.07,d:me,x:De,y:nt,z:te,rx:Ge});he(k,y-l/4,-K),he(k,y-3*l/4,K),he(D.PIT_X0+.08,y-l/4,-K),he(D.PIT_X1-.08,y-3*l/4,K),E(k,ye+.04,0),E(k,Y-.06,-l/2),E(k,ye+.06,-l);const pe=De=>y-l+l/2*((ye-De)/g);for(let De=Y+.15;De<ye;De+=.3)for(const nt of[oe(De),pe(De)])e.oakSpec({w:.035,h:y-.06,d:.035,x:k,y:nt-.03-(y-.06)/2,z:De});e.colliders.push(new St().setFromPoints([e.local(k-.06,-l,D.PIT_Z0+.8),e.local(k+.06,1,D.PIT_Z1)]))}const C=s.areas[i.id].flip?-1:1,b=k=>C*(k-a.x),R=-l,[z,x]=[b(o.x0),b(o.x1)].sort((k,K)=>k-K),S=x-z,P=(z+x)/2,O=(D.LANDING_Z0+D.LANDING_Z1)/2;e.box(S,.1,3,ce.floor,P,R-.05,O,{walkable:!0,vinyl:!0}),e.box(S,.1,3,ce.ceiling,P,R+D.ROOM_H+.05,O,{worldUV:!0}),e.box(.15,D.ROOM_H,3.3,ce.wall,z-.075,R+D.ROOM_H/2,O,{solid:!0,trim:["x+"]}),e.box(.15,D.ROOM_H,3.3,ce.wall,x+.075,R+D.ROOM_H/2,O,{solid:!0,trim:["x-"]});for(let k=0;k<Math.floor(S/3.5);k++)e.led(z+(k+.5)*3.5,O,R+D.ROOM_H-.02,.35,1.3);const I=k=>{const K=b(s.areas[k].x);return[K-D.LOBBY_W/2,K+D.LOBBY_W/2]},V=(k,K,me)=>{const ye=[],Y=[...me].sort((oe,he)=>oe[0]-he[0]);let te=z;for(const[oe,he]of Y)oe>te&&(e.box(oe-te,D.ROOM_H,.15,ce.wall,(te+oe)/2,R+D.ROOM_H/2,k,{solid:!0,trim:[K]}),ye.push([te,oe])),te=Math.max(te,he);return x>te&&(e.box(x-te,D.ROOM_H,.15,ce.wall,(te+x)/2,R+D.ROOM_H/2,k,{solid:!0,trim:[K]}),ye.push([te,x])),ye},$=o.northIds.map(I),Z=V(D.LANDING_Z0-.075,"z+",[[D.PIT_X0,D.PIT_X1],...o.southIds.map(I)]);V(D.LANDING_Z1+.075,"z-",$);for(const[k,K]of Z)if(!(K-k<4.5))for(let me=k+2.3;me<=K-2.3;me+=6.5){const ye=(Math.round(me*13)+i.id.charCodeAt(2)>>>0)%997;An(e,n.art.length?n.art[ye%n.art.length]:null,ye,me,R+1.7,D.LANDING_Z0+.01,0,`${i.label}:land:${Math.round(me)}`)}e.sign(2.4,.6,(D.PIT_X0+D.PIT_X1)/2,R+D.DOOR_H+.5,D.LANDING_Z1-.09,Math.PI,()=>gt({widthPx:1024,heightPx:256,title:`Stairs ↑ ${i.label}`,subtitle:`${i.wing} wing · ${i.floor?`level −${i.floor}`:"ground"}`,titleSize:72}),`landingup:${i.label}`);const B=[];let ie=0;const H=k=>$.every(([K,me])=>k+.8<=K||k-.8>=me)&&B.every(K=>Math.abs(k-K)>=1.9),X=k=>()=>gt({widthPx:768,heightPx:230,title:`↓ ${k?.label??"?"}`,subtitle:`homed in ${k?.wing??"?"} wing`,titleSize:58});o.portalChildIds.forEach(k=>{const K=r.get(k);let me=D.PIT_X1+1.6;for(;me<=x-.9&&!H(me);)me+=.1;if(me<=x-.9)B.push(me),e.box(D.DOOR_W,D.DOOR_H,.08,ce.door,me,R+D.DOOR_H/2,D.LANDING_Z1-.05,{}),e.doorFurniture("z-",me,R,D.LANDING_Z1-.05),e.sign(1.5,.45,me,R+D.DOOR_H+.45,D.LANDING_Z1-.09,Math.PI,X(K),`downportal:${K?.label}`),t.push({kind:"stair-down",areaId:i.id,label:`Stairs ↓ ${K?.label??"?"}`,targetIds:[k],triggerPos:e.local(me,-l,D.LANDING_Z1-.5),radius:.7,halfX:.55,halfZ:.45,auto:!0});else{const ye=8.7-ie*1.6;ie++,e.box(.08,D.DOOR_H,D.DOOR_W,ce.door,x-.05,R+D.DOOR_H/2,ye,{}),e.doorFurniture("x-",x-.05,R,ye),e.sign(1.5,.45,x-.09,R+D.DOOR_H+.45,ye,-Math.PI/2,X(K),`downportal:${K?.label}`),t.push({kind:"stair-down",areaId:i.id,label:`Stairs ↓ ${K?.label??"?"}`,targetIds:[k],triggerPos:e.local(x-.5,-l,ye),radius:.7,halfX:.45,halfZ:.55,auto:!0})}});const re=B.length?Math.max(...B)+1:D.PIT_X1+1;for(let k=0;k<3;k++){const K=x-.8-k*.6;if(K<re+.8||ie)break;$.some(([me,ye])=>K>me-.45&&K<ye+.45)||e.chair(K,R,D.LANDING_Z1-.45,-1)}}function An(i,e,t,n,r,s,o,a){const l=Math.sin(o),c=Math.cos(o),h=Math.abs(l)>.5;i.oakSpec({w:h?.05:1.42,h:1.08,d:h?1.42:.05,x:n-l*.031,y:r,z:s-c*.031}),i.sign(1.28,.94,n,r,s,o,()=>e?Ho(`art/${e.file}`):ac(t),`pic:${a}`),i.sign(.44,.13,n,r-.62,s,o,()=>e?rs(e.title,`${e.artist} · ${e.licence} · Wikimedia Commons`):rs("Untitled study","Procedural print — placeholder"),`picplacard:${a}`)}function Wo(i,e){const t=new Map;let n=[i.id],r=0;for(;n.length;){r++;const s=[];for(const o of n)for(const a of e.get(o)?.supers??[])t.has(a)||(t.set(a,r),s.push(a));n=s}return[...t].map(([s,o])=>({id:s,level:o}))}const Ot="__theatre";function h0(i,e,t){const n=new yn;n.name="area:theatre";const r=new Tr(n,new N(0,0,0),i),s=-24,o=-4,a=20,l=33.5,c=(s+o)/2,h=(a+l)/2,u=4.5,f=5,m=1.7,g=.35,v=-f*g,p=v+.4,d=ce.wall.clone(),y=ce.ceiling.clone(),A=ce.floor.clone(),E=ce.led.clone(),C=new Pt({color:2830648}),b=new Pt({color:9264970}),R=new Pt({color:6715727}),z=new Pt({color:13623528,transparent:!0,opacity:.3}),x=[d,y,A,C].map(k=>({m:k,base:k.color.clone()})),S=k=>{for(const K of x)K.m.color.copy(K.base).multiplyScalar(k?1:.3);E.color.set(k?16251391:4212047)},P=-15;r.box(3,.1,5,ce.floor,P,-.05,17.5,{walkable:!0,vinyl:!0}),r.box(3,.1,5,ce.ceiling,P,3.05,17.5,{worldUV:!0});for(const[k,K]of[[P-1.575,"x+"],[P+1.575,"x-"]]){r.box(.15,1,5,ce.wall,k,.5,17.5,{solid:!0,trim:[K]}),r.box(.08,1.7,5,z,k,1.85,17.5,{solid:!0}),r.box(.15,.3,5,ce.wall,k,2.85,17.5,{});for(const me of[16.2,17.5,18.8])r.steelSpec({w:.18,h:1.7,d:.07,x:k,y:1.85,z:me})}for(const k of[16.4,18.6])r.led(P,k,2.98);r.sign(2.6,.62,P,2.55,a-.09,Math.PI,()=>gt({widthPx:1152,heightPx:260,title:"Postgraduate Medical Centre",subtitle:"lecture theatre · seminars & presentations",titleSize:74}),"theatre-door");const O=u+2.4,I=u-O/2,V=19.4,$=21;r.box(.15,O,V-a,d,s-.075,I,(a+V)/2,{solid:!0}),r.box(.15,O,l-$,d,s-.075,I,($+l)/2,{solid:!0}),r.box(.15,u-2.3,$-V,d,s-.075,(u+2.3)/2,(V+$)/2,{}),r.box(.15,2.4,$-V,d,s-.075,-1.2,(V+$)/2,{solid:!0}),r.sign(1.9,.5,s+.09,2.55,(V+$)/2,Math.PI/2,()=>gt({widthPx:960,heightPx:250,title:"← Reference Gallery",subtitle:"clause 3.1 definitions · resources annex",titleSize:64}),"to-gallery"),r.box(.15,O,l-a,d,o+.075,I,h,{solid:!0}),r.box(o-s+.3,O,.15,d,c,I,l+.075,{solid:!0}),r.box(-16-s,u+.2,.15,d,(s+-16)/2,u/2-.1,a-.075,{solid:!0}),r.box(o- -14,u+.2,.15,d,(-14+o)/2,u/2-.1,a-.075,{solid:!0}),r.box(2,u-2.3,.15,d,P,(u+2.3)/2,a-.075,{}),r.box(o-s,.1,l-a,y,c,u+.05,h,{worldUV:!0});for(const k of[s+.11,o-.11])r.box(.06,.8,l-a-3,ce.daylight,k,3.7,h,{});r.box(o-s,.1,2,A,c,-.05,a+1,{walkable:!0,vinyl:!0});for(let k=0;k<f;k++){const K=-g*(k+1),me=a+2+m*k;r.box(o-s,.1,m,A,c,K-.05,me+m/2,{walkable:!0,vinyl:!0}),r.box(o-s,g,.06,C,c,K+g/2,me+.03,{})}const Z=a+2+m*f;r.box(o-s,.1,1,A,c,v-.05,Z+.5,{walkable:!0,vinyl:!0}),r.box(17,.5,1.85,ce.oak,c,p-.25,Z+1+.925,{walkable:!0});for(let k=0;k<f;k++){const K=-g*(k+1),me=a+2+m*k+.9;for(let ye=-22.8;ye<=-16.45;ye+=.62)r.chair(ye,K,me,1);for(let ye=-13.55;ye<=-5.2;ye+=.62)r.chair(ye,K,me,1)}const B=l-.075;r.box(6.7,4.1,.06,C,c,.85,B-.035,{});const ie=new gn({color:16777215}),H=new Ft(new Ji(6,3.375),ie);H.position.set(c,.84,B-.075),H.rotation.y=Math.PI,H.matrixAutoUpdate=!1,H.updateMatrix(),n.add(H),r.sign(5,.7,c,3.35,B-.08,Math.PI,()=>gt({widthPx:1600,heightPx:224,title:"Postgraduate Medical Centre",subtitle:"slides: ← → · PageUp/PageDown (clickers work) · or tap the screen",titleSize:76}),"proscenium"),r.box(.42,1.05,.42,ce.oak,-17.5,p+.525,Z+1.7,{solid:!0}),r.oakSpec({w:.62,h:.05,d:.5,x:-17.5,y:p+1.08,z:Z+1.7}),r.steelSpec({w:.05,h:.3,d:.05,x:-17.28,y:p+1.25,z:Z+1.62}),r.sign(1.7,.5,P,2.65,a+.085,0,()=>gt({widthPx:900,heightPx:240,title:"→ Reception",subtitle:"B returns to your last stop",titleSize:66}),"theatre-exit");const X=k=>e.length?e[k%e.length]:null;An(r,X(5),5,-19.5,1.7,a+.085,0,"theatre:r1"),An(r,X(11),11,-10.5,1.7,a+.085,0,"theatre:r2");for(const k of[-20,c,-8])for(const K of[21.5,24.5,27.5,30.5])r.box(.6,.035,1.3,E,k,u-.02,K,{});r.box(.12,7,V-(a-.15),b,s-.21,1,(a-.15+V)/2,{}),r.box(.12,7,l+.15-$,b,s-.21,1,($+l+.15)/2,{}),r.box(.12,2.2,$-V,b,s-.21,3.4,(V+$)/2,{}),r.box(.12,2.5,$-V,b,s-.21,-1.25,(V+$)/2,{}),r.box(.12,7,l-a+.3,b,o+.21,1,h,{}),r.box(o-s+.7,7,.12,b,c,1,l+.21,{}),r.box(-16.6-(s-.35),7,.12,b,(s-.35+-16.6)/2,1,a-.21,{}),r.box(o+.35- -13.4,7,.12,b,(-13.4+o+.35)/2,1,a-.21,{}),r.box(3.2,1.3,.12,b,P,3.85,a-.21,{}),r.box(o-s+.9,.18,l-a+.9,b,c,u+.24,h,{});const re=(k,K,me,ye)=>r.box(K-k,.06,ye-me,R,(k+K)/2,-.09,(me+ye)/2,{});return re(-30,s-.35,15.2,38),re(o+.35,2,15.2,38),re(s-.35,-16.7,15.2,a-.3),re(-13.3,o+.35,15.2,a-.3),re(s-.35,o+.35,l+.35,38),t!=="off"&&r.stand(-17.5,p,Z+2.15,Math.PI,4271),r.populate(t,6101),r.finalize(),S(!0),{id:Ot,wc:null,label:"Postgraduate Medical Centre",group:n,colliders:r.colliders,walkables:r.walkables,interactables:[],boards:[{kind:"screen",mesh:H,cells:[{rect:[0,0,.35,1],id:"prev",label:"previous slide"},{rect:[.35,0,1,1],id:"next",label:"next slide"}]}],spawnPos:new N(P,0,a+1.2),spawnYaw:Math.PI,boxes:[new St(new N(s-.3,-2.5,a-.3),new N(o+.3,u+.3,l+.3)),new St(new N(P-1.7,-.5,15),new N(P+1.7,3.2,a))],screen:H,setHouseLights:S,lecternPos:new N(-16.6,p,Z+1.9),lecternYaw:0,viewPos:new N(c,v,28.9),aisleY:k=>k<a+2?0:k>=Z?v:-g*(Math.floor((k-(a+2))/m)+1)}}function d0(i,e,t,n){const r=new yn;r.name="area:atrium";const s=new Tr(r,new N(0,0,0),e),o=-26,a=0,l=3,c=15,h=D.STREET_H,u=(o+a)/2,f=(l+c)/2;s.box(a-o,.1,c-l,ce.floor,u,-.05,f,{walkable:!0,vinyl:!0}),s.box(a-o,.1,c-l,ce.ceiling,u,h+.05,f,{worldUV:!0}),s.box(a-o+.3,1,.15,ce.wall,u,.5,l-.075,{solid:!0,trim:["z+"]}),s.box(a-o+.3,1.7,.08,ce.daylight,u,1.85,l-.075,{solid:!0}),s.box(a-o+.3,h-2.7,.15,ce.wall,u,(h+2.7)/2,l-.075,{});for(let b=o+2;b<a-.5;b+=2)s.steelSpec({w:.07,h:1.7,d:.18,x:b,y:1.85,z:l-.075});s.box(-16-o+.3,h,.15,ce.wall,(o-.15+-16)/2,h/2,c+.075,{solid:!0,trim:["z-"]}),s.box(a- -14+.3,h,.15,ce.wall,(-14+a+.15)/2,h/2,c+.075,{solid:!0,trim:["z-"]}),s.box(2,h-2.3,.15,ce.wall,-15,(h+2.3)/2,c+.075,{}),s.box(.15,h,c-l,ce.wall,o-.075,h/2,f,{solid:!0,trim:["x+"]}),s.box(.15,h,D.STREET_Z0-l,ce.wall,a+.075,h/2,(l+D.STREET_Z0)/2,{solid:!0,trim:["x-"]}),s.box(.15,h,c-D.STREET_Z1,ce.wall,a+.075,h/2,(D.STREET_Z1+c)/2,{solid:!0,trim:["x-"]});for(let b=o+3;b<a-1;b+=4.5)for(const R of[5.2,9,12.8])s.led(b,R,h-.02);s.box(1.1,1.1,5.2,ce.oak,o+4.5,.55,f),s.box(4.2,.46,.55,ce.oak,-10,.23,4.4),s.box(4.2,.5,.09,ce.oak,-10,.7,4.4-.24);for(let b=0;b<5;b++)s.chair(-5.8+b*.62,0,14.35,-1);for(let b=0;b<3;b++)s.chair(-17.9+b*.62,0,14.35,-1);const m=b=>t.length?t[b%t.length]:null;An(s,m(3),3,o+.09,1.8,4.6,Math.PI/2,"atrium:w1"),An(s,m(9),9,o+.09,1.8,13.4,Math.PI/2,"atrium:w2"),An(s,m(6),6,-3.4,1.8,c-.09,Math.PI,"atrium:n1"),s.sign(7,1.5,o+.09,2.6,f,Math.PI/2,()=>gt({widthPx:1792,heightPx:384,title:"White Rose General Hospital",subtitle:`home of the ContSys model · ${i.meta.label} · ${i.classes.length} concepts · welcome — walk the model`,titleSize:150,align:"center"}),"title"),s.sign(3.2,.7,a-.09,D.ROOM_H+.55,(D.STREET_Z0+D.STREET_Z1)/2,-Math.PI/2,()=>gt({widthPx:1280,heightPx:280,title:"Hospital Street →",subtitle:"all wings · concepts A–Z on the directory",titleSize:88}),"to-street"),s.sign(2.6,.6,-15,2.62,c-.09,Math.PI,()=>gt({widthPx:1152,heightPx:252,title:"Postgraduate Medical Centre →",subtitle:"lecture theatre · seminars & presentations",titleSize:70}),"to-theatre");const g=[...i.wings.map(b=>({text:b.annex?b.label:`${b.label} wing`,sub:`${b.classCount} concepts${b.zone==="gallery"?" · at the Postgraduate Medical Centre":""}`,chip:ni(b.key)})),{text:"Postgraduate Medical Centre",sub:"lecture theatre · Reference Gallery",chip:"#005eb8"}],v={widthPx:1024,heightPx:724,title:"Hospital directory",subtitle:"wings west to east — tap one to visit its entrance",rows:g,rowSize:g.length>8?32:40},p=s.sign(3.4,2.4,-20,1.9,c-.09,Math.PI,()=>gr(v),"directory-wings"),d=Go(v,g.length),y={widthPx:2048,heightPx:1152,title:"Concepts A–Z",subtitle:"tap a concept to go there · or press M anywhere for the porter",rows:i.classes.map(b=>({text:b.label,sub:b.roomNumber??void 0,chip:ni(b.wing)})),rowSize:14,columns:5},A=s.sign(6.4,3.6,-9,1.9,c-.09,Math.PI,()=>gr(y),"directory-az"),E=Go(y,i.classes.length),C=[{kind:"directory",mesh:p,cells:[...i.wings.flatMap((b,R)=>d[R]?[{rect:d[R],id:b.rootIds[0],label:b.annex?b.label:`${b.label} wing`}]:[]),...d[i.wings.length]?[{rect:d[i.wings.length],id:Ot,label:"Postgraduate Medical Centre"}]:[]]},{kind:"directory",mesh:A,cells:i.classes.flatMap((b,R)=>E[R]?[{rect:E[R],id:b.id,label:b.label}]:[])}];return n!=="off"&&(s.stand(o+3.7,0,f,Math.PI/2,137),s.sit(-9.4,.02,4.55,1,553),s.sit(-10.6,.02,4.55,1,887)),s.populate(n,9001),s.finalize(),{id:fn,wc:null,label:"Reception",group:r,colliders:s.colliders,walkables:s.walkables,interactables:[],boards:C,spawnPos:new N(-14,0,f),spawnYaw:-Math.PI/2,boxes:[new St(new N(o-.3,-.5,l-.3),new N(a+.1,2.5,c+.3))]}}const Xo="__street";function f0(i,e,t,n,r){const s=new yn;s.name="area:street";const o=new Tr(s,new N(0,0,0),t),a=e.loop,l=0,c=a.xEnd,h=c-l,u=(l+c)/2,f=D.STREET_H,m=a.south.z1,g=a.north.z0,v=[a.connectors.west,a.connectors.east],p=new Map(i.classes.map(x=>[x.id,x])),d=new Map(i.wings.map(x=>[x.key,x])),y=new Pt({color:13623528,transparent:!0,opacity:.3}),A=new Pt({color:6715727}),E=x=>{const S=x==="south"?a.south:a.north,P=S.z0,O=S.z1,I=(P+O)/2,V=x==="south"?P-.075:O+.075,$=x==="south"?O+.075:P-.075,Z=x==="south"?"z+":"z-",B=x==="south"?"z-":"z+",ie=x==="south"?0:Math.PI;o.box(h,.1,O-P,ce.floor,u,-.05,I,{walkable:!0,vinyl:!0}),o.box(h,.1,O-P,ce.ceiling,u,f+.05,I,{worldUV:!0});for(let oe=l+2;oe<c-1;oe+=4)o.led(oe,P+1.3,f-.02,.35,1.3),o.led(oe,O-1.3,f-.02,.35,1.3);const H=[];let X=l;for(const[oe,he]of v)oe>X&&H.push([X,oe]),X=Math.max(X,he);c>X&&H.push([X,c]);for(const[oe,he]of H){const pe=(oe+he)/2,De=he-oe;o.box(De,1,.15,ce.wall,pe,.5,$,{solid:!0,trim:[B]}),o.box(De,1.7,.08,y,pe,1.85,$,{solid:!0}),o.box(De,f-2.7,.15,ce.wall,pe,(f+2.7)/2,$,{});for(let nt=oe+2;nt<he-.5;nt+=2)o.steelSpec({w:.07,h:1.7,d:.18,x:nt,y:1.85,z:$})}for(const[oe,he]of v){const pe=(oe+he)/2;o.box(he-oe,f-3,.15,ce.wall,pe,(f+3)/2,$,{}),o.sign(2.7,.6,pe,2.62,$+(x==="south"?-.08:.08),x==="south"?Math.PI:0,()=>gt({widthPx:1152,heightPx:252,title:`Cloister → ${x==="south"?"north":"south"} side`,subtitle:"across the courtyard · shorter way round",titleSize:68}),`cloister:${x}:${Math.round(pe)}`)}const re=[];for(const oe of e.wings)if(oe.street===x)for(const he of oe.rootIds)re.push({x:e.areas[he].x,id:he,wingKey:oe.key});re.sort((oe,he)=>oe.x-he.x);const k=x==="south"?P+.46:O-.46,K=x==="south"?1:-1,me=x==="south"?P+.075:O-.075,ye=(oe,he)=>{const pe=he-oe,De=(oe+he)/2;if(pe>=12&&(o.chair(De-.35,0,k,K),o.chair(De+.35,0,k,K)),pe>=9)for(const nt of[De-3.2,De+3.2]){const Ge=(Math.round(nt*7)>>>0)%997,it=n.length?n[Ge%n.length]:null;An(o,it,Ge,nt,1.78,me,ie,`street:${x}:${Math.round(nt)}`)}};let Y=l;for(const oe of re){const he=oe.x-D.LOBBY_W/2,pe=oe.x+D.LOBBY_W/2;he>Y&&(o.box(he-Y,f,.15,ce.wall,(Y+he)/2,f/2,V,{solid:!0,trim:[Z]}),ye(Y,he)),o.box(D.LOBBY_W,f-D.ROOM_H,.15,ce.wall,oe.x,(f+D.ROOM_H)/2,V,{}),Y=pe}c>Y&&(o.box(c-Y,f,.15,ce.wall,(Y+c)/2,f/2,V,{solid:!0,trim:[Z]}),ye(Y,c));const te=x==="south"?P+.02:O-.02;re.forEach(oe=>{const he=p.get(oe.id),pe=d.get(oe.wingKey);o.sign(3.2,.7,oe.x,D.ROOM_H+.45,te,ie,()=>gt({widthPx:1280,heightPx:280,title:pe?.annex?he?.label??"?":`${pe?.label??"?"} wing`,subtitle:pe?.annex?`${pe.label} · ${he?.roomNumber?`Room ${he.roomNumber}`:""}`:`${pe?.classCount??"?"} concepts · enter for ${he?.label??"?"}`,titleSize:86}),`street:${he?.label}`)}),o.box(.15,f,O-P+.3,ce.wall,c+.075,f/2,I,{solid:!0,trim:["x-"]}),x==="north"&&o.box(.15,f,O-P+.3,ce.wall,l-.075,f/2,I,{solid:!0,trim:["x+"]}),o.sign(3.4,.8,l+.4,2.7,I,-Math.PI/2,()=>gt({widthPx:1280,heightPx:300,title:"Hospital Street",subtitle:`${x} side · wings this way →`,titleSize:96}),`street-name:${x}`)};E("south"),E("north");const[C]=a.connectors.west,b=e.wings.filter(x=>x.street==="south").length;let R=0,z=0;for(const x of e.wings){if(x.street==="gallery")continue;const S=new gn({color:new je(ni(x.key))}),P=e.areas[x.rootIds[0]].x;if(x.street==="south"){const O=a.south.z0+.4+R*.24;R++,o.box(P-l,.012,.16,S,(l+P)/2,.012,O,{}),o.box(.16,.012,O-a.south.z0,S,P,.012,(a.south.z0+O)/2,{})}else{const O=C+.55+z*.62,I=a.south.z0+.4+(b+z)*.24,V=a.north.z1-.4-z*.24;z++,o.box(O-l,.012,.16,S,(l+O)/2,.012,I,{}),o.box(.16,.012,V-I,S,O,.012,(I+V)/2,{}),o.box(P-O,.012,.16,S,(O+P)/2,.012,V,{}),o.box(.16,.012,a.north.z1-V,S,P,.012,(V+a.north.z1)/2,{})}}for(const[x,S]of v){const P=(x+S)/2,O=g-m,I=(m+g)/2;o.box(S-x,.1,O,ce.floor,P,-.05,I,{walkable:!0,vinyl:!0}),o.box(S-x,.1,O,ce.ceiling,P,f+.05,I,{worldUV:!0});for(const V of[x-.075,S+.075]){o.box(.15,1,O,ce.wall,V,.5,I,{solid:!0,trim:[V<P?"x+":"x-"]}),o.box(.08,1.7,O,y,V,1.85,I,{solid:!0}),o.box(.15,f-2.7,O,ce.wall,V,(f+2.7)/2,I,{});for(let $=m+2;$<g-.5;$+=2)o.steelSpec({w:.18,h:1.7,d:.07,x:V,y:1.85,z:$})}for(let V=m+2;V<g-1;V+=4)o.led(P,V,f-.02,.35,1.3)}return o.box(c-2,.06,g-m-.4,A,(2+c)/2,-.09,(m+g)/2,{}),g-.2>38&&o.box(32,.06,g-.2-38,A,-14,-.09,(38+g-.2)/2,{}),o.populate(r,4211),o.finalize(),{id:Xo,wc:null,label:"Hospital Street",group:s,colliders:o.colliders,walkables:o.walkables,interactables:[],spawnPos:new N(l+3,0,(a.south.z0+a.south.z1)/2),spawnYaw:-Math.PI/2,boxes:[new St(new N(l-.3,-.5,a.south.z0-.2),new N(c+.3,2.5,a.south.z1+.3)),new St(new N(l-.3,-.5,a.north.z0-.3),new N(c+.3,2.5,a.north.z1+.2)),...v.map(([x,S])=>new St(new N(x-.2,-.5,m),new N(S+.2,2.5,g)))]}}const fr="__gallery";function p0(i,e,t,n,r){const s=new yn;s.name="area:gallery";const o=new Tr(s,new N(0,0,0),t),a=e.loop.gallery,l=a.x0,c=a.x1,h=(l+c)/2,u=a.z0,f=a.z1,m=(u+f)/2,g=D.STREET_H,[v,p]=a.entrance,d=new Map(i.classes.map(x=>[x.id,x])),y=new Map(i.wings.map(x=>[x.key,x]));o.box(c-l,.1,f-u,ce.floor,h,-.05,m,{walkable:!0,vinyl:!0}),o.box(c-l,.1,f-u,ce.ceiling,h,g+.05,m,{worldUV:!0});for(let x=l+2;x<c-1;x+=4)o.led(x,u+1.3,g-.02,.35,1.3),o.led(x,f-1.3,g-.02,.35,1.3);o.box(c-l,1,.15,ce.wall,h,.5,f+.075,{solid:!0,trim:["z-"]}),o.box(c-l,1.7,.08,ce.daylight,h,1.85,f+.075,{solid:!0}),o.box(c-l,g-2.7,.15,ce.wall,h,(g+2.7)/2,f+.075,{});for(let x=l+2;x<c-.5;x+=2)o.steelSpec({w:.07,h:1.7,d:.18,x,y:1.85,z:f+.075});o.box(.15,g,f-u+.3,ce.wall,l-.075,g/2,m,{solid:!0,trim:["x+"]}),o.box(.15,g,f-u+.3,ce.wall,c+.075,g/2,m,{solid:!0,trim:["x-"]});const A=[],E=[];for(const x of e.wings)if(x.street==="gallery")for(const S of x.rootIds)E.push({x:e.areas[S].x,id:S,wingKey:x.key}),A.push([e.areas[S].x-D.LOBBY_W/2,e.areas[S].x+D.LOBBY_W/2]);A.push([v,p]),A.sort((x,S)=>x[0]-S[0]);let C=l;for(const[x,S]of A){if(x>C){const P=x-C;if(o.box(P,g,.15,ce.wall,(C+x)/2,g/2,u-.075,{solid:!0,trim:["z+"]}),P>=9){const O=(C+x)/2;o.chair(O-.35,0,u+.46,1),o.chair(O+.35,0,u+.46,1);const I=(Math.round(O*7)>>>0)%997;An(o,n.length?n[I%n.length]:null,I,O-3.2,1.78,u+.075,0,`gallery:${Math.round(O)}`)}}C=Math.max(C,S)}c>C&&o.box(c-C,g,.15,ce.wall,(C+c)/2,g/2,u-.075,{solid:!0,trim:["z+"]});for(const x of E)o.box(D.LOBBY_W,g-D.ROOM_H,.15,ce.wall,x.x,(g+D.ROOM_H)/2,u-.075,{});o.box(p-v,g-3,.15,ce.wall,(v+p)/2,(g+3)/2,u-.075,{}),E.forEach(x=>{const S=d.get(x.id),P=y.get(x.wingKey);o.sign(3.2,.7,x.x,D.ROOM_H+.45,u+.02,0,()=>gt({widthPx:1280,heightPx:280,title:P?.label??"?",subtitle:`${P?.classCount??"?"} concepts · enter for ${S?.label??"?"}`,titleSize:86}),`gallery:${S?.label}`)}),o.sign(3.4,.8,c-.4,2.7,m,Math.PI/2,()=>gt({widthPx:1280,heightPx:300,title:"Reference Gallery",subtitle:"clause 3.1 definitions · resources annex",titleSize:92}),"gallery-name");const b=21.2;o.box(p-v,.1,u-b,ce.floor,(v+p)/2,-.05,(b+u)/2,{walkable:!0,vinyl:!0}),o.box(p-v,.1,u-b,ce.ceiling,(v+p)/2,3.05,(b+u)/2,{worldUV:!0});for(const x of[v-.075,p+.075])o.box(.15,3,u-b,ce.wall,x,1.5,(b+u)/2,{solid:!0,trim:[x<(v+p)/2?"x+":"x-"]});for(let x=b+2;x<u-1;x+=4)o.led((v+p)/2,x,2.98);const R=19.2,z=21.2;return o.box(-24-v,.1,z-R,ce.floor,(v+-24)/2,-.05,(R+z)/2,{walkable:!0,vinyl:!0}),o.box(-24-v,.1,z-R,ce.ceiling,(v+-24)/2,3.05,(R+z)/2,{worldUV:!0}),o.box(-24-v+.15,3,.15,ce.wall,(v+-24)/2-.05,1.5,R-.075,{solid:!0,trim:["z+"]}),o.box(-24-p,3,.15,ce.wall,(p+-24)/2,1.5,z+.075,{solid:!0,trim:["z-"]}),o.box(.15,3,z-R+.3,ce.wall,v-.075,1.5,(R+z)/2,{solid:!0,trim:["x+"]}),o.led((v-24)/2,(R+z)/2,2.98),o.sign(1.9,.5,(v+p)/2,2.55,b+.09,0,()=>gt({widthPx:960,heightPx:250,title:"↑ Reference Gallery",subtitle:"clause 3.1 definitions · resources annex",titleSize:64}),"gallery-way"),o.populate(r,7877),o.finalize(),{id:fr,wc:null,label:"Reference Gallery",group:s,colliders:o.colliders,walkables:o.walkables,interactables:[],spawnPos:new N(c-2,0,m),spawnYaw:Math.PI/2,boxes:[new St(new N(l-.3,-.5,u-.2),new N(c+.3,2.5,f+.3)),new St(new N(v-.3,-.5,b),new N(p+.3,2.5,u)),new St(new N(v-.3,-.5,R-.2),new N(-23.8,2.5,z+.2))]}}const En=1920,Gi=1080;function m0(i,e,t,n){i.fillStyle=er,i.fillRect(0,0,En,Gi),i.fillStyle="#ffffff",i.textAlign="center",i.font="bold 118px Arial",i.fillText(e,En/2,470),i.font="54px Arial",i.globalAlpha=.92,i.fillText(t,En/2,580),i.font="34px Arial",i.globalAlpha=.7,i.fillText(n,En/2,990),i.globalAlpha=1}function vl(i,e,t){i.fillStyle="#f4f6f7",i.fillRect(0,0,En,Gi),i.fillStyle=er,i.fillRect(0,0,En,190),i.fillStyle="#ffffff",i.textAlign="left",i.font="bold 78px Arial",i.fillText(e,110,128),i.fillStyle="#16212a",i.font="46px Arial",t.forEach((n,r)=>i.fillText(n,110,330+r*105))}function g0(){return[{kind:"builtin",draw:i=>m0(i,"Postgraduate Medical Centre","Lecture Theatre · White Rose General Hospital","a walkable model of the continuity-of-care concept system")},{kind:"builtin",draw:i=>vl(i,"Bring your own slides",["1.  Export your deck as PNG or JPG images (1920 × 1080 works best).","2.  Copy them into the site’s  slides/  folder.","3.  List them in order in  slides/manifest.json :",'         ["01.png", "02.png", "03.png"]',"4.  Video clips (.mp4, .webm) can be listed too — they play here.","5.  Redeploy. This screen then presents your deck."])},{kind:"builtin",draw:i=>vl(i,"Presenting & filming",["← →  or  PageUp / PageDown change slides — presenter clickers work.","Tap or click the screen: right side = next, left side = back.","H  hides the whole interface for a clean recording.","L  dims the house lights.","Add  ?start=theatre  to the address to begin at the lectern.","B  returns to your last stop when you’re done."])}]}class _0{entries=[];index=0;cache=new Map;video=null;videoTex=null;mat;constructor(e){this.mat=e.material}get count(){return this.entries.length}get label(){return`Slide ${this.index+1} / ${this.entries.length}`}async load(){try{const e=await fetch("slides/manifest.json");if(e.ok){const t=await e.json(),n=Array.isArray(t)?t:t?.slides??[];this.entries=n.map(r=>({kind:/\.(mp4|webm|mov)$/i.test(r)?"video":"image",src:`slides/${r}`}))}}catch{}this.entries.length||(this.entries=g0()),this.show(0)}next(){this.show(Math.min(this.index+1,this.entries.length-1))}prev(){this.show(Math.max(this.index-1,0))}redraw(){this.show(this.index)}show(e){if(!this.entries.length)return;this.index=e;const t=this.entries[e];t.kind==="video"?this.mat.map=this.playVideo(t.src):(this.video?.pause(),this.mat.map=this.texture(e),this.entries[e+1]?.kind==="image"&&this.texture(e+1),this.entries[e-1]?.kind==="image"&&this.texture(e-1)),this.mat.needsUpdate=!0}texture(e){const t=this.cache.get(e);if(t)return t;const n=document.createElement("canvas");n.width=En,n.height=Gi;const r=n.getContext("2d");r.fillStyle="#0d1114",r.fillRect(0,0,En,Gi);const s=new In(n);s.colorSpace=Mt,s.generateMipmaps=!1,s.minFilter=At;const o=this.entries[e];if(o.kind==="builtin")o.draw(r),s.needsUpdate=!0;else if(o.kind==="image"){const a=new Image;a.onload=()=>{const l=Math.min(En/a.width,Gi/a.height),c=a.width*l,h=a.height*l;r.drawImage(a,(En-c)/2,(Gi-h)/2,c,h),s.needsUpdate=!0},a.src=o.src}return this.cache.set(e,s),s}playVideo(e){this.video||(this.video=document.createElement("video"),this.video.playsInline=!0,this.videoTex=new Fu(this.video),this.videoTex.colorSpace=Mt,this.videoTex.generateMipmaps=!1,this.videoTex.minFilter=At);const t=this.video;return t.src.endsWith(e)||(t.src=e),t.currentTime=0,t.muted=!1,t.play().catch(()=>{t.muted=!0,t.play().catch(()=>{})}),this.videoTex}}const Ml=new N,x0=new Mi,Sl=new N;class v0 extends Nt{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const xn=new vt,M0=new vt;class S0{constructor(e={}){const t=this;let n,r,s,o;const a={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);const h=document.createElement("div");h.style.transformStyle="preserve-3d",c.appendChild(h),this.getSize=function(){return{width:n,height:r}},this.render=function(p,d){const y=d.projectionMatrix.elements[5]*o;d.view&&d.view.enabled?(c.style.transform=`translate( ${-d.view.offsetX*(n/d.view.width)}px, ${-d.view.offsetY*(r/d.view.height)}px )`,c.style.transform+=`scale( ${d.view.fullWidth/d.view.width}, ${d.view.fullHeight/d.view.height} )`):c.style.transform="",p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),d.parent===null&&d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld();let A,E;d.isOrthographicCamera&&(A=-(d.right+d.left)/2,E=(d.top+d.bottom)/2);const C=d.view&&d.view.enabled?d.view.height/d.view.fullHeight:1,b=d.isOrthographicCamera?`scale( ${C} )scale(`+y+")translate("+u(A)+"px,"+u(E)+"px)"+f(d.matrixWorldInverse):`scale( ${C} )translateZ(`+y+"px)"+f(d.matrixWorldInverse),z=(d.isPerspectiveCamera?"perspective("+y+"px) ":"")+b+"translate("+s+"px,"+o+"px)";a.camera.style!==z&&(h.style.transform=z,a.camera.style=z),v(p,p,d)},this.setSize=function(p,d){n=p,r=d,s=n/2,o=r/2,l.style.width=p+"px",l.style.height=d+"px",c.style.width=p+"px",c.style.height=d+"px",h.style.width=p+"px",h.style.height=d+"px"};function u(p){return Math.abs(p)<1e-10?0:p}function f(p){const d=p.elements;return"matrix3d("+u(d[0])+","+u(-d[1])+","+u(d[2])+","+u(d[3])+","+u(d[4])+","+u(-d[5])+","+u(d[6])+","+u(d[7])+","+u(d[8])+","+u(-d[9])+","+u(d[10])+","+u(d[11])+","+u(d[12])+","+u(-d[13])+","+u(d[14])+","+u(d[15])+")"}function m(p){const d=p.elements;return"translate(-50%,-50%)"+("matrix3d("+u(d[0])+","+u(d[1])+","+u(d[2])+","+u(d[3])+","+u(-d[4])+","+u(-d[5])+","+u(-d[6])+","+u(-d[7])+","+u(d[8])+","+u(d[9])+","+u(d[10])+","+u(d[11])+","+u(d[12])+","+u(d[13])+","+u(d[14])+","+u(d[15])+")")}function g(p){p.isCSS3DObject&&(p.element.style.display="none");for(let d=0,y=p.children.length;d<y;d++)g(p.children[d])}function v(p,d,y,A){if(p.visible===!1){g(p);return}if(p.isCSS3DObject){const E=p.layers.test(y.layers)===!0,C=p.element;if(C.style.display=E===!0?"":"none",E===!0){p.onBeforeRender(t,d,y);let b;p.isCSS3DSprite?(xn.copy(y.matrixWorldInverse),xn.transpose(),p.rotation2D!==0&&xn.multiply(M0.makeRotationZ(p.rotation2D)),p.matrixWorld.decompose(Ml,x0,Sl),xn.setPosition(Ml),xn.scale(Sl),xn.elements[3]=0,xn.elements[7]=0,xn.elements[11]=0,xn.elements[15]=1,b=m(xn)):b=m(p.matrixWorld);const R=a.objects.get(p);if(R===void 0||R.style!==b){C.style.transform=b;const z={style:b};a.objects.set(p,z)}C.parentNode!==h&&h.appendChild(C),p.onAfterRender(t,d,y)}}for(let E=0,C=p.children.length;E<C;E++)v(p.children[E],d,y)}}}const b0="https://contsys.org";function os(i){return i.trim().toLowerCase().replace(/\s+/g,"_")}function bl(i){return`${b0}/concept/${encodeURIComponent(os(i))}`}function $r(i){return i.trim().toLowerCase().replace(/[_-]+/g," ").replace(/\s+/g," ")}const Xs=1280,yl=720;function y0(){return location.pathname.startsWith("/hospital/")||location.hostname.endsWith("contsys.org")?"":"https://contsys.org"}class E0{cssScene=new ec;cssRenderer=new S0;iframe;object;screen;placed=!1;panelPos=new N;panelNormal=new N;savedMap=null;savedColor=new je(16777215);mounted=!1;_visible=!1;lastSlug="care_plan";constructor(e,t){this.screen=t;const n=this.cssRenderer.domElement;n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.pointerEvents="none",n.style.display="none",e.appendChild(n),this.iframe=document.createElement("iframe"),this.iframe.style.width=`${Xs}px`,this.iframe.style.height=`${yl}px`,this.iframe.style.border="0",this.iframe.style.background="#fff",this.iframe.style.backfaceVisibility="hidden",this.iframe.style.pointerEvents="auto",this.iframe.title="ContSys reference — live concept page",this.object=new v0(this.iframe);const r=6/Xs;this.object.scale.set(r,r,r),this.cssScene.add(this.object),this.resize()}place(){this.screen.getWorldPosition(this.panelPos);const e=this.screen.getWorldQuaternion(new Mi);this.panelNormal.set(0,0,1).applyQuaternion(e),this.panelPos.addScaledVector(this.panelNormal,.01),this.object.position.copy(this.panelPos),this.object.quaternion.copy(e),this.placed=!0}get visible(){return this._visible}get slug(){return this.lastSlug}show(e){const t=os(e??this.lastSlug);this.lastSlug=t;const n=`${y0()}/concept/${encodeURIComponent(t)}?embed=1`;if(this.iframe.getAttribute("src")!==n&&this.iframe.setAttribute("src",n),!this._visible){const r=this.screen.material;this.savedMap=r.map,this.savedColor.copy(r.color),r.map=null,r.color.setHex(658704),r.needsUpdate=!0,this._visible=!0}}hide(){if(!this._visible)return;const e=this.screen.material;e.map=this.savedMap,e.color.copy(this.savedColor),e.needsUpdate=!0,this._visible=!1}update(e,t){this.placed||this.place();const n=this._visible&&t&&e.position.clone().sub(this.panelPos).dot(this.panelNormal)>0;n!==this.mounted&&(this.cssRenderer.domElement.style.display=n?"":"none",this.mounted=n),this.mounted&&this.cssRenderer.render(this.cssScene,e)}resize(){this.cssRenderer.setSize(innerWidth,innerHeight)}scrollBy(e){try{const t=this.iframe.contentWindow;return!t||!this.iframe.contentDocument?!1:(t.scrollBy({top:e,behavior:"smooth"}),!0)}catch{return!1}}clickAt(e,t){try{const n=this.iframe.contentDocument;if(!n)return!1;const r=e*Xs,s=(1-t)*yl,o=n.elementFromPoint(r,s);return o?(o.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,clientX:r,clientY:s,view:n.defaultView})),!0):!1}catch{return!1}}}const Fi=new on(0,0,0,"YXZ"),Oi=new N,T0={type:"change"},w0={type:"lock"},A0={type:"unlock"},El=.002,Tl=Math.PI/2;class R0 extends Ku{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=C0.bind(this),this._onPointerlockChange=P0.bind(this),this._onPointerlockError=I0.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;Oi.setFromMatrixColumn(t.matrix,0),Oi.crossVectors(t.up,Oi),t.position.addScaledVector(Oi,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;Oi.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(Oi,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function C0(i){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;Fi.setFromQuaternion(e.quaternion),Fi.y-=i.movementX*El*this.pointerSpeed,Fi.x-=i.movementY*El*this.pointerSpeed,Fi.x=Math.max(Tl-this.maxPolarAngle,Math.min(Tl-this.minPolarAngle,Fi.x)),e.quaternion.setFromEuler(Fi),this.dispatchEvent(T0)}function P0(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(w0),this.isLocked=!0):(this.dispatchEvent(A0),this.isLocked=!1)}function I0(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const hi=1.7,Yr=.3,L0=4.2,D0=8.5,U0=.5,N0=7;class F0{camera;controls;keys=new Set;colliders=[];walkables=[];touch={f:0,s:0};constructor(e){this.camera=new rn(70,innerWidth/innerHeight,.05,160),this.camera.position.set(0,hi,0),this.camera.rotation.order="YXZ",this.controls=new R0(this.camera,e),addEventListener("keydown",t=>this.keys.add(t.code)),addEventListener("keyup",t=>this.keys.delete(t.code)),addEventListener("blur",()=>this.keys.clear())}setTouchMove(e,t){this.touch.f=e,this.touch.s=t}enableDragLook(e){const t=new Map;let n=0,r=1;const s=o=>{this.camera.zoom=Math.min(4,Math.max(1,o)),this.camera.updateProjectionMatrix()};e.addEventListener("pointerdown",o=>{if(!this.controls.isLocked){t.set(o.pointerId,{x:o.clientX,y:o.clientY});try{e.setPointerCapture(o.pointerId)}catch{}if(t.size===2){const[a,l]=[...t.values()];n=Math.hypot(a.x-l.x,a.y-l.y),r=this.camera.zoom}}}),e.addEventListener("pointermove",o=>{if(this.controls.isLocked)return;const a=t.get(o.pointerId);if(!a)return;if(t.size>=2){a.x=o.clientX,a.y=o.clientY;const[h,u]=[...t.values()],f=Math.hypot(h.x-u.x,h.y-u.y);n>0&&s(r*(f/n));return}const l=this.camera.rotation,c=.0042/this.camera.zoom;l.y-=(o.clientX-a.x)*c,l.x=Math.max(-1.45,Math.min(1.45,l.x-(o.clientY-a.y)*c)),a.x=o.clientX,a.y=o.clientY});for(const o of["pointerup","pointercancel"])e.addEventListener(o,a=>{t.delete(a.pointerId),t.size<2&&this.camera.zoom<1.06&&s(1)})}dash(e=12){const t=this.camera.rotation.y,n=-Math.sin(t),r=-Math.cos(t),s=this.camera.position;let o=0;for(let a=0;a<Math.ceil(e/.4);a++){const l=this.feetY,c=s.x+n*.4,h=s.z+r*.4;if(this.collides(c,h,l))break;const u=this.groundAt(c,h,l);if(u===-1/0)break;s.x=c,s.z=h,s.y=u+hi,o+=.4}return o}setColliders(e){this.colliders=e}setWalkables(e){this.walkables=e}get position(){return this.camera.position}get feetY(){return this.camera.position.y-hi}get floorPosition(){return new N(this.camera.position.x,this.feetY,this.camera.position.z)}teleport(e,t){this.camera.position.set(e.x,(e.y??0)+hi,e.z),this.camera.rotation.set(0,t,0),this.camera.zoom!==1&&(this.camera.zoom=1,this.camera.updateProjectionMatrix())}groundAt(e,t,n){let r=-1/0;for(const s of this.walkables){if(e<s.min.x-.05||e>s.max.x+.05||t<s.min.z-.05||t>s.max.z+.05)continue;const o=s.max.y;o<=n+U0&&o>r&&(r=o)}return r}collides(e,t,n){const r=new St(new N(e-Yr,n+.25,t-Yr),new N(e+Yr,n+1.75,t+Yr));return this.colliders.some(s=>s.intersectsBox(r))}snapGround(){const e=this.camera.position,t=this.groundAt(e.x,e.z,this.feetY+.01);t>-1/0&&(e.y=t+hi)}update(e){const t=this.camera.position,n=this.feetY,r=Number(this.keys.has("KeyW"))-Number(this.keys.has("KeyS"))+this.touch.f,s=Number(this.keys.has("KeyD"))-Number(this.keys.has("KeyA"))+this.touch.s;if(r||s){const a=Math.min(1,Math.hypot(r,s)),c=(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||a>.92?D0:L0)*a,h=this.camera.rotation.y,u=-Math.sin(h)*r+Math.cos(h)*s,f=-Math.cos(h)*r-Math.sin(h)*s,m=Math.hypot(u,f)||1,g=u/m*c*e,v=f/m*c*e;this.collides(t.x+g,t.z,n)||(t.x+=g),this.collides(t.x,t.z+v,n)||(t.z+=v)}const o=this.groundAt(t.x,t.z,n);o>-1/0&&(o>=n?t.y=o+hi:t.y=Math.max(o,n-N0*e)+hi)}}let Bn=null,as=!1;const dn=()=>as;function O0(){return Bn||(Bn=document.createElement("div"),Bn.id="menu-root",document.body.appendChild(Bn),Bn)}function B0(){!Bn||!as||(as=!1,Bn.replaceChildren(),Bn.style.display="none")}function wl(i,e,t,n){const r=O0();r.replaceChildren(),r.style.display="flex",as=!0;const s=document.createElement("div");s.className="menu-panel";const o=document.createElement("div");o.className="menu-head",o.innerHTML='<div class="menu-title"></div><div class="menu-sub"></div>',o.querySelector(".menu-title").textContent=i,o.querySelector(".menu-sub").textContent=e,s.appendChild(o);let a=null;n.searchable&&(a=document.createElement("input"),a.className="menu-filter",a.placeholder="Type to search…",s.appendChild(a));const l=document.createElement("div");l.className="menu-list",s.appendChild(l);const c=document.createElement("div");c.className="menu-foot",c.textContent="↑↓ choose · Enter go · Esc close",s.appendChild(c),r.appendChild(s);let h=[],u=0;const f=p=>{removeEventListener("keydown",v,!0),B0(),p!==null?n.onPick(p):n.onClose?.()},m=()=>{const p=a?.value.trim().toLowerCase()??"";h=t.filter(d=>!p||`${d.label} ${d.sub??""}`.toLowerCase().includes(p)),u=Math.min(u,Math.max(0,h.length-1)),l.replaceChildren(...h.map((d,y)=>{const A=document.createElement("div");A.className="menu-item"+(d.value===null?" info":"")+(d.strong?" strong":"")+(y===u&&d.value!==null?" active":""),d.chip&&(A.style.borderLeftColor=d.chip);const E=document.createElement("span");if(E.textContent=d.label,A.appendChild(E),d.sub){const C=document.createElement("span");C.className="menu-item-sub",C.textContent=d.sub,A.appendChild(C)}return d.value!==null&&(A.addEventListener("click",()=>f(d.value)),A.addEventListener("mousemove",()=>{u!==y&&(u=y,m())})),A})),l.querySelector(".active")?.scrollIntoView({block:"nearest"})},g=p=>{if(!h.length)return;let d=u;for(let y=0;y<h.length&&(d=(d+p+h.length)%h.length,h[d].value===null);y++);u=d,m()},v=p=>{if(p.code==="Escape")p.preventDefault(),p.stopPropagation(),f(null);else if(p.code==="ArrowDown")p.preventDefault(),g(1);else if(p.code==="ArrowUp")p.preventDefault(),g(-1);else if(p.code==="Enter"){p.preventDefault();const d=h[u];d&&d.value!==null&&f(d.value)}else a&&requestAnimationFrame(m)};addEventListener("keydown",v,!0),a?.addEventListener("input",()=>{u=0,m()}),m(),u=Math.max(0,h.findIndex(p=>p.value!==null)),m(),a?.focus()}const z0=700,Al=document.getElementById("app"),fi=document.getElementById("start"),_r=document.getElementById("fade"),$s=document.getElementById("toast"),Bi=document.getElementById("prompt"),k0=document.getElementById("area-sign"),G0=document.querySelector("#area-sign .label"),H0=document.querySelector("#area-sign .room");let Rl=0;function wt(i){$s.textContent=i,$s.style.opacity="1",clearTimeout(Rl),Rl=window.setTimeout(()=>$s.style.opacity="0",2200)}function zi(){_r.style.opacity="1",setTimeout(()=>_r.style.opacity="0",160)}async function V0(){const i=await fetch("world.json").then(w=>{if(!w.ok)throw new Error(`world.json ${w.status} — run \`npm run world\` first`);return w.json()}),e=new Map(i.classes.map(w=>[w.id,w])),t=new Map(i.classes.map(w=>[w.label,w])),n=new Map(i.wings.map(w=>[w.key,w.annex?w.label:`${w.label} wing`])),r=a0(i),s=await fetch("art/manifest.json").then(w=>w.ok?w.json():[]).catch(()=>[]),o=await fetch("art/illustrations/manifest.json").then(w=>w.ok?w.json():null).then(w=>w?new Set(w.map(q=>q.slug)):null).catch(()=>null),a=navigator.maxTouchPoints>0&&Math.min(screen.width,screen.height)<=500,l=navigator.maxTouchPoints>0||"ontouchstart"in window||matchMedia("(pointer: coarse)").matches,c=new URLSearchParams(location.search).get("people"),h=c==="off"||c==="low"||c==="full"?c:a?"low":"full",u=matchMedia("(prefers-reduced-motion: reduce)").matches,f=new ec;f.background=new je(6055792),f.fog=a?new is(6055792,42,120):new is(6055792,55,150),f.add(new Hu(16777215,12172994,1)),f.add(new $u(16777215,.38));const m=new Xu(16777215,.4);m.position.set(3,8,2),f.add(m);let g;try{g=new Ym({antialias:!a})}catch{throw new Error("3D graphics (WebGL) could not start in this browser. On iPhone/iPad, Lockdown Mode blocks WebGL — allow this site under Settings → Privacy & Security → Lockdown Mode → Configure Web Browsing, or try another device.")}g.setSize(innerWidth,innerHeight),g.setPixelRatio(Math.min(devicePixelRatio,a?1.5:2)),g.domElement.style.touchAction="none",g.domElement.style.userSelect="none",Al.appendChild(g.domElement);const v=new Km,p=new Map,d={byId:e,signs:v,layout:r,art:s,illustrations:o,people:h},y=d0(i,v,s,h);p.set(y.id,y);const A=f0(i,r,v,s,h);p.set(A.id,A);const E=h0(v,s,h);p.set(E.id,E);const C=p0(i,r,v,s,h);p.set(C.id,C);const b=new _0(E.screen);b.load();const R=new E0(Al,E.screen);for(const w of i.classes){const q=r.areas[w.id],j=c0(w,d,new N(q.x,q.y,q.oz));p.set(j.id,j)}for(const w of p.values())f.add(w.group);const z=[...p.values()].flatMap(w=>w.colliders),x=[...p.values()].flatMap(w=>w.walkables),S=[...p.values()].flatMap(w=>w.interactables),P=new Map;for(const w of S)if(w.elementId){const q=P.get(w.elementId)??[];q.push(w),P.set(w.elementId,q)}function O(w){if(w.kind!=="door-self")return P.get(w.elementId)?.find(q=>q!==w)}const I=new F0(g.domElement);I.setColliders(z),I.setWalkables(x),I.teleport(y.spawnPos,y.spawnYaw),f.add(I.camera),a&&(I.camera.far=130,I.camera.updateProjectionMatrix());const V=[];if(h!=="off"&&!u){const w=Er(20260703),q=(_e,ue,Be)=>{const $e=new r0(ue,Be,1+Math.floor(w()*99991));f.add($e.group),V.push({w:$e,owner:_e})},j=h==="full"?7:3;for(let _e=0;_e<j;_e++){const ue=4+(r.street.x1-70)*_e/Math.max(1,j-1),Be=_e%2?r.loop.north.z0+2:9;q(A,new N(ue,0,Be),new N(Math.min(ue+55,r.street.x1-4),0,Be))}if(h==="full"){let _e=0;for(const[Be,$e]of Object.entries(r.landings)){if($e.x1-$e.x0<18||_e>=12)continue;const bt=p.get(Be);if(!bt)continue;const Rt=$e.mirror?r.loop.K-8.5:8.5+($e.dz??0);q(bt,new N($e.x0+1.2,$e.y,Rt),new N($e.x1-1.2,$e.y,Rt)),_e++}let ue=0;for(const Be of i.classes){const $e=r.areas[Be.id];if($e.corridorLen<24||ue>=8)continue;const bt=p.get(Be.id);if(!bt)continue;const Rt=$e.oz+($e.flip?.8:-.8),an=$e.oz+($e.flip?$e.corridorLen-2:-($e.corridorLen-2));q(bt,new N($e.x,$e.y,Rt),new N($e.x,$e.y,an)),ue++}}}const $=a?140:175;function Z(){const w=I.position,q=I.floorPosition.y;for(const j of p.values()){let _e=1/0;for(const Be of j.boxes)_e=Math.min(_e,Be.distanceToPoint(w));const ue=j.wc?r.areas[j.wc.id].y:0;j.group.visible=_e<$&&(Math.abs(ue-q)<D.STOREY/2||_e<30)}}Z();let B=y;function ie(w){B=w,document.body.classList.toggle("theatre",w.id===Ot);const q=w.wc;G0.textContent=w.label,H0.textContent=q?[q.roomNumber?`Room ${q.roomNumber}`:null,`${n.get(q.wing)??q.wing} · ${q.floor?`level −${q.floor}`:"ground"}`].filter(Boolean).join(" · "):i.meta.label,k0.style.borderLeft=`8px solid ${q?ni(q.wing):"#ffffff"}`}ie(y),new URLSearchParams(location.search).get("start")==="theatre"&&(I.teleport(E.lecternPos,E.lecternYaw),ie(E)),new URLSearchParams(location.search).get("present")==="1"&&document.body.classList.add("filming");{const w=new URLSearchParams(location.search).get("concept"),q=w?$r(w):void 0;if(q){const j=i.classes.find(ue=>$r(ue.label)===q),_e=j&&p.get(j.id);_e?(I.teleport(_e.spawnPos,_e.spawnYaw),ie(_e),Z()):wt(`No concept called “${q}” — ${l?"⌖ calls the porter":"press M for the porter"}`)}}let H=null;function X(){const w=E.screen.getWorldPosition(new N),q=I.camera,j=2*Math.atan(Math.tan(Sa.degToRad(q.fov)/2)*q.aspect),_e=3/Math.tan(Math.min(.46*j,1.4)),ue=Sa.clamp(_e,w.z-E.viewPos.z,w.z-E.spawnPos.z),Be=new N(w.x,E.aisleY(w.z-ue),w.z-ue);I.teleport(Be,Math.atan2(-(w.x-Be.x),-(w.z-Be.z))),H=Be}{const w=new URLSearchParams(location.search).get("screen");if(w){const q=i.classes.find(j=>$r(j.label)===$r(w));R.show(q?q.label:w),B.id===Ot&&X()}}let re=!1;function k(w){const q=B.lift;q&&(re||(q.doors.target=I.floorPosition.distanceTo(q.doorwayPos)<2.1?1:0),q.doors.update(w))}let K=null;const me=()=>{if(!K)try{K=new AudioContext}catch{}};addEventListener("pointerdown",me,{once:!0}),addEventListener("keydown",me,{once:!0});function ye(){if(!K)return;const w=K.currentTime+.05;for(const[q,j]of[[1318.5,0],[1046.5,.14]]){const _e=K.createOscillator(),ue=K.createGain();_e.type="sine",_e.frequency.value=q,ue.gain.setValueAtTime(1e-4,w+j),ue.gain.linearRampToValueAtTime(.045,w+j+.015),ue.gain.exponentialRampToValueAtTime(1e-4,w+j+.55),_e.connect(ue).connect(K.destination),_e.start(w+j),_e.stop(w+j+.6)}}const Y=w=>(w.max.x-w.min.x)*(w.max.y-w.min.y)*(w.max.z-w.min.z);function te(w){let q,j=1/0;for(const _e of p.values())for(const ue of _e.boxes)ue.containsPoint(w)&&Y(ue)<j&&(q=_e,j=Y(ue));return q}const oe=matchMedia("(pointer: coarse)").matches;if(l){document.body.classList.add("touch");const w=fi.querySelector(".badge"),q=fi.querySelector("p");w&&(w.textContent=oe?"Tap to enter":"Click or tap to enter"),q&&(q.textContent="Left pad or WASD to walk · drag to look · ⏩ jumps ahead · ℹ reads · ⌖ porter · double-click captures the mouse")}fi.addEventListener("pointerup",w=>{l||w.pointerType==="touch"?fi.style.display="none":I.controls.lock()}),g.domElement.addEventListener("dblclick",()=>I.controls.lock()),I.controls.addEventListener("lock",()=>fi.style.display="none"),I.controls.addEventListener("unlock",()=>{if(!(dn()||_)){if(R.visible&&B.id===Ot){wt("Reading — click links, scroll the page · double-click the room to walk again");return}fi.style.display="flex"}});let he=0;const pe=[];function De(){const w=I.floorPosition;pe.push({x:w.x,y:w.y,z:w.z,yaw:I.camera.rotation.y,areaId:B.id}),pe.length>60&&pe.shift()}function nt(){if(dn()||_||re)return;const w=pe.pop();if(!w){wt("No earlier stop to go back to");return}const q=p.get(w.areaId);I.teleport({x:w.x,y:w.y,z:w.z},w.yaw),q&&ie(q),Pe=Me(I.floorPosition),Z(),zi(),wt(`Back → ${q?.label??"previous stop"}`),he=performance.now()}function Ge(w,q){const j=p.get(w);j&&(De(),I.teleport(j.spawnPos,j.spawnYaw),ie(j),Pe=Me(I.floorPosition),Z(),zi(),q&&wt(q),he=performance.now())}function it(w,q){w?.lift?(re=!0,w.lift.doors.target=0,setTimeout(()=>{re=!1,I.floorPosition.distanceTo(w.lift.doorwayPos)<1.7?se(q):wt("The lift left without you")},650)):se(q)}function se(w){const q=p.get(w);q&&(q.liftPos?(De(),I.teleport(q.liftPos,q.liftYaw??0),ie(q),Pe=Me(I.floorPosition),Z(),zi(),wt(`Lift → ${q.label}`),he=performance.now(),ye()):Ge(w,`Lift → ${q.label}`))}function xe(w){const q=w.targetIds[0],j=p.get(q);if(j){if(De(),w.kind==="door-self")I.teleport(j.spawnPos,j.spawnYaw),wt(`${w.label} — back where you started (a pig's ear)`);else{const _e=O(w);_e?.exitPos?I.teleport(_e.exitPos,_e.exitYaw??0):I.teleport(j.spawnPos,j.spawnYaw),wt(`${w.label} → ${j.label}`)}ie(j),Pe=Me(I.floorPosition),Z(),zi(),he=performance.now()}}const Te=(w,q="")=>{const j=e.get(w);return{label:`${q}${j?.label??w}`,sub:j?[j.roomNumber,`${n.get(j.wing)??j.wing} · ${j.floor?`level −${j.floor}`:"ground"}`].filter(Boolean).join(" · "):void 0,chip:j?ni(j.wing):void 0,value:w}};function L(w){const q=e.get(w.areaId),j=I.controls.isLocked;j&&I.controls.unlock();const _e=Be=>{j&&I.controls.lock(),Be?.()},ue=[];if(q){const Be=Wo(q,e).sort(($e,bt)=>bt.level-$e.level);ue.push(...Be.map($e=>Te($e.id,`▲${$e.level}  `))),ue.push({label:`●  ${q.label}`,sub:"you are here",strong:!0,value:null}),ue.push(...q.subs.map($e=>Te($e,"▼1  ")))}ue.push({label:"⌂  Reception",sub:"ground floor",value:fn}),wl("Lift",q?.label??"",ue,{onPick:Be=>_e(()=>it(p.get(w.areaId),Be)),onClose:()=>_e()})}function Je(){const w=I.controls.isLocked;w&&I.controls.unlock();const q=[...i.classes].sort((j,_e)=>j.label.localeCompare(_e.label)).map(j=>Te(j.id));q.unshift({label:"⌂  Reception",sub:"the atrium",value:fn},{label:"▤  Postgraduate Medical Centre",sub:"lecture theatre",value:Ot}),wl("Porter service","where would you like to go?",q,{searchable:!0,onPick:j=>{w&&I.controls.lock(),Ge(j,`Porter → ${p.get(j)?.label}`)},onClose:()=>{w&&I.controls.lock()}})}const He=document.getElementById("reader"),st=He.querySelector("h2"),Ue=He.querySelector("header .meta"),T=He.querySelector(".reader-body");let _=!1,F=!1;const Q=w=>w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function ae(){_=!1,He.style.display="none",F&&I.controls.lock()}function ne(){const w=B.wc;st.textContent=B.label,Ue.textContent=w?[w.roomNumber?`Room ${w.roomNumber}`:null,`${n.get(w.wing)??w.wing}`,w.floor?`level −${w.floor}`:"ground"].filter(Boolean).join(" · "):i.meta.label;let q="";if(!w)q=B.id===fn?`<p>Reception for White Rose General Hospital, home of the ContSys model — a walkable model of ${Q(i.meta.label)}. The hospital street runs east; every wing's entrance opens off it. The Postgraduate Medical Centre (lecture theatre) is through the north door. Press M (or ⌖) for the porter.</p>`:B.id===fr?"<p>The Reference Gallery, west of the Postgraduate Medical Centre: the clause 3.1 definitional concepts (the Reference collection) and the Resources annex open off its south side, exactly as wings open off the hospital street.</p>":B.id===Ot?`<p>The Postgraduate Medical Centre: a raked lecture theatre for seminars and video presentations.</p>
               <h3>Presenting</h3>
               <ul><li>Slides advance with ← / → or PageUp / PageDown — presenter clickers work.</li>
               <li>Tap or click the screen: right side next, left side back.</li>
               <li><strong>H</strong> hides the whole interface for a clean recording; <strong>L</strong> dims the house lights.</li>
               <li>Add <code>?start=theatre</code> to the address to begin at the lectern, and
               <code>&amp;present=1</code> to start with the interface already hidden.</li></ul>
               <h3>Your own deck</h3>
               <p>Export slides as PNG/JPG (1920×1080), copy them into <code>slides/</code>, and list them in <code>slides/manifest.json</code> — video clips (.mp4) can be listed too.</p>`:"<p>The hospital street: a racetrack loop of two parallel streets joined by glazed cloisters across the courtyard — take whichever way round is shorter. Wing entrances open off the outside of each street; the courtyard holds the lawn and the Postgraduate Medical Centre.</p>";else{q+=`<p>${Q(w.description??"Definition pending.")}</p>`;const j=[];w.plural&&j.push(`<strong>Plural:</strong> ${Q(w.plural)}`),w.alsoKnownAs.length&&j.push(`<strong>Also known as:</strong> ${Q(w.alsoKnownAs.join("; "))}`),w.deprecated.length&&j.push(`<strong>Deprecated terms:</strong> ${Q(w.deprecated.join("; "))}`),w.termClause&&j.push(`<strong>Clause:</strong> ${Q(w.termClause)}`),w.source&&j.push(`<span class="small"><strong>Source:</strong> ${Q(w.source)}</span>`),j.length&&(q+=`<p>${j.join("<br>")}</p>`),w.notes.length&&(q+=`<h3>Notes</h3><ol>${w.notes.map(ue=>`<li>${Q(ue.text)}</li>`).join("")}</ol>`),w.examples.length&&(q+=`<h3>Examples</h3><ol>${w.examples.map(ue=>`<li>${Q(ue.text)}</li>`).join("")}</ol>`);const _e=ue=>Q(e.get(ue)?.label??"?");(w.out.length||w.self.length)&&(q+=`<h3>Outbound associations (doors on the right wall)</h3><ul>${[...w.out.map(ue=>`<li>${Q(ss(w.label,ue.label,e.get(ue.targetId)?.label??"?",ue))}</li>`),...w.self.map(ue=>`<li>${Q(ue.label)} → ${Q(w.label)} (end wall)</li>`)].join("")}</ul>`),w.in.length&&(q+=`<h3>Inbound associations (doors on the left wall)</h3><ul>${w.in.map(ue=>`<li>${Q(ss(e.get(ue.sourceId)?.label??"?",ue.label,w.label,ue))}</li>`).join("")}</ul>`),w.supers.length&&(q+=`<h3>Generalisations (stairs up)</h3><ul>${w.supers.map(ue=>`<li>${_e(ue)}</li>`).join("")}</ul>`),w.subs.length&&(q+=`<h3>Specialisations (stairs down)</h3><ul>${w.subs.map(ue=>`<li>${_e(ue)}</li>`).join("")}</ul>`),q+=`<p><a href="${bl(w.label)}" target="_blank" rel="noopener">Full definition — contsys.org/concept/${Q(os(w.label))}</a></p>`}T.innerHTML=q,F=I.controls.isLocked,F&&I.controls.unlock(),He.style.display="flex",_=!0}He.addEventListener("click",w=>{w.target===He&&ae()});let Le=null;function be(){dn()||_||(Le?.kind==="lift"?L(Le):Le?.kind==="fire-exit"&&fe(Le.label))}function Fe(){if(!K)return;const w=K.currentTime+.03;for(let q=0;q<6;q++){const j=K.createOscillator(),_e=K.createGain();j.type="square",j.frequency.value=q%2?622:830;const ue=w+q*.19;_e.gain.setValueAtTime(1e-4,ue),_e.gain.linearRampToValueAtTime(.045,ue+.02),_e.gain.exponentialRampToValueAtTime(1e-4,ue+.18),j.connect(_e).connect(K.destination),j.start(ue),j.stop(ue+.19)}}let Xe=!1;function fe(w){if(Xe)return;Xe=!0,Fe(),wt("This is not a drill — proceed calmly to the assembly point"),setTimeout(()=>{_r.style.background="#00703c",_r.style.transition="opacity 0.7s",_r.style.opacity="1"},650);const q=location.pathname.startsWith("/hospital/")?`/concept/${encodeURIComponent(os(w))}`:bl(w);setTimeout(()=>{location.href=q},1700)}function Me(w){const q=new Set;for(const j of B.interactables){if(Math.abs(j.triggerPos.y-w.y)>2)continue;const _e=Math.abs(w.x-j.triggerPos.x),ue=Math.abs(w.z-j.triggerPos.z);j.halfX!==void 0?_e<=j.halfX&&ue<=(j.halfZ??j.halfX)&&q.add(j):_e*_e+ue*ue<=j.radius*j.radius&&q.add(j)}return q}let Pe=new Set;function Oe(){if(re){Le=null,Bi.style.opacity="0";return}const w=performance.now(),q=Me(I.floorPosition);let j=null;for(const ue of q){if(!ue.auto){j=ue;continue}if(!Pe.has(ue)&&!(w-he<z0)){ue.kind==="stair-up"||ue.kind==="stair-down"?Ge(ue.targetIds[0],`${ue.label} (portal)`):xe(ue);return}}Pe=q,Le=j;const _e=j?j.prompt??`E — ${j.label}`:"";Bi.textContent=l?_e.replace(/^E — /,"Tap here — "):_e,Bi.style.opacity=j?"1":"0"}const Se=new Zu,Ke=new lt;function U(w,q){const j=B.boards;if(!j?.length)return null;I.camera.updateMatrixWorld(),Ke.set(w,q),Se.setFromCamera(Ke,I.camera);for(const _e of j){_e.mesh.updateWorldMatrix(!0,!1);const ue=Se.intersectObject(_e.mesh,!1)[0];if(!(!ue?.uv||ue.distance>(_e.kind==="screen"?16:4.2)))for(const Be of _e.cells){const[$e,bt,Rt,an]=Be.rect;if(ue.uv.x>=$e&&ue.uv.x<=Rt&&ue.uv.y>=bt&&ue.uv.y<=an)return{...Be,kind:_e.kind}}}return null}function Ae(w,q){return I.camera.updateMatrixWorld(),Ke.set(w,q),Se.setFromCamera(Ke,I.camera),Se.intersectObject(E.screen,!1)[0]?.uv??null}function ge(w,q){if(re||dn()||_||performance.now()-he<400)return!1;const j=U(w,q);if(!j)return!1;if(j.kind==="screen"){if(R.visible){const _e=Ae(w,q);return _e&&R.clickAt(_e.x,_e.y)||wt("Esc frees the mouse for the page — C returns to slides"),!0}j.id==="next"?b.next():b.prev(),wt(b.label)}else if(j.kind==="lift"){const _e=B;_e.liftPos&&I.floorPosition.distanceTo(_e.liftPos)<1.2?it(_e,j.id):se(j.id)}else Ge(j.id,`→ ${p.get(j.id)?.label??j.label}`);return!0}g.domElement.addEventListener("click",()=>{I.controls.isLocked&&ge(0,0)});let Ce=0,de=0,le=0;g.domElement.addEventListener("pointerdown",w=>{Ce=w.clientX,de=w.clientY,le=performance.now()}),g.domElement.addEventListener("pointerup",w=>{I.controls.isLocked||Math.hypot(w.clientX-Ce,w.clientY-de)>8||performance.now()-le>600||ge(w.clientX/innerWidth*2-1,-(w.clientY/innerHeight)*2+1)});function ve(w){B.id!==Ot||dn()||_||(R.visible?R.scrollBy(w*480)||wt(l?"This copy of the page is sealed — drag on the page itself":"Esc frees the mouse to scroll the page"):(w===1?b.next():b.prev(),wt(b.label)))}function qe(){B.id!==Ot||dn()||_||(R.visible?(R.hide(),b.redraw(),wt("Slides restored")):(R.show(),wt(`Live: ${R.slug} — ${l?"⇄ returns to slides":"C returns to slides"}`)))}addEventListener("keydown",w=>{if(_){(w.code==="Escape"||w.code==="KeyR")&&ae();return}if(!dn()&&(w.code==="KeyE"&&be(),w.code==="KeyR"&&ne(),w.code==="KeyM"&&Je(),w.code==="KeyB"&&nt(),w.code==="KeyF"&&I.dash(12)>.3&&zi(),w.code==="KeyH"&&(document.body.classList.toggle("filming")||wt("Interface restored")),B.id===Ot)){if(R.visible){const q=w.code==="PageDown"||w.code==="ArrowRight"?480:w.code==="PageUp"||w.code==="ArrowLeft"?-480:w.code==="ArrowDown"?160:w.code==="ArrowUp"?-160:0;q!==0&&(w.preventDefault(),R.scrollBy(q)||wt("Esc frees the mouse to scroll the page"))}else(w.code==="ArrowRight"||w.code==="PageDown")&&(w.preventDefault(),ve(1)),(w.code==="ArrowLeft"||w.code==="PageUp")&&(w.preventDefault(),ve(-1));w.code==="KeyL"&&(ut=!ut,E.setHouseLights(ut),wt(ut?"House lights up":"House lights dimmed — L restores")),w.code==="KeyC"&&qe()}});let ut=!0;if(addEventListener("wheel",w=>{R.visible&&B.id===Ot&&I.controls.isLocked&&R.scrollBy(w.deltaY)},{passive:!0}),Bi.addEventListener("click",be),I.enableDragLook(g.domElement),l){const w=document.getElementById("joy"),q=document.getElementById("joy-knob");let j=null;const _e=()=>{j=null,q.style.transform="",I.setTouchMove(0,0)},ue=Be=>{const $e=w.getBoundingClientRect();let bt=Be.clientX-($e.left+$e.width/2),Rt=Be.clientY-($e.top+$e.height/2);if(!Number.isFinite(bt)||!Number.isFinite(Rt))return;const an=Math.hypot(bt,Rt),ze=44;an>ze&&(bt*=ze/an,Rt*=ze/an),q.style.transform=`translate(${bt}px, ${Rt}px)`,I.setTouchMove(-Rt/ze,bt/ze)};w.addEventListener("pointerdown",Be=>{Be.preventDefault(),j=Be.pointerId,ue(Be);try{w.setPointerCapture(Be.pointerId)}catch{}}),w.addEventListener("pointermove",Be=>{Be.pointerId===j&&(Be.preventDefault(),ue(Be))}),w.addEventListener("pointerup",_e),w.addEventListener("pointercancel",_e),document.getElementById("btn-read").addEventListener("click",()=>_?ae():ne()),document.getElementById("btn-porter").addEventListener("click",()=>{!dn()&&!_&&Je()}),document.getElementById("btn-dash").addEventListener("click",()=>{!dn()&&!_&&I.dash(12)>.3&&zi()}),document.getElementById("btn-back").addEventListener("click",nt),document.getElementById("btn-swap").addEventListener("click",qe),document.getElementById("btn-page-up").addEventListener("click",()=>ve(-1)),document.getElementById("btn-page-down").addEventListener("click",()=>ve(1))}const ht=new qu;let $t=0;const Ht={logic:0,render:0},ds=performance.now();let Yn=12,Ln=0;g.setAnimationLoop(()=>{const w=performance.now(),q=Math.min(ht.getDelta(),.05);dn()||I.update(q),k(q);for(const ue of V){const Be=ue.owner.group.visible;ue.w.group.visible=Be,Be&&ue.w.update(q)}const j=te(I.floorPosition);if(j&&j!==B&&ie(j),Oe(),I.controls.isLocked&&!re&&!dn()){const ue=U(0,0);ue&&(Bi.textContent=ue.kind==="screen"?R.visible?"Click — follow the link under the crosshair · scroll to read · C slides":`Click — ${ue.label}`:`Click — ${ue.kind==="lift"?"lift to":"go to"} ${ue.label}`,Bi.style.opacity="1")}if($t+=q,$t>.4&&($t=0,v.update(I.position,a?40:55,a?100:120,a?5:8),Z(),performance.now()-ds>12e3&&V.length)){if(Ln===0&&Yn>26){Ln=1;for(let ue=V.length-1;ue>=0;ue-=2)f.remove(V[ue].w.group),V.splice(ue,1);wt("Trimmed ward activity to keep things smooth")}else if(Ln===1&&Yn>30){Ln=2;for(const ue of V)f.remove(ue.w.group);V.length=0,wt("Paused ward activity for performance")}}const _e=performance.now();g.render(f,I.camera),R.update(I.camera,B.id===Ot),Ht.logic=_e-w,Ht.render=performance.now()-_e,Yn=Yn*.96+(Ht.logic+Ht.render)*.04}),addEventListener("resize",()=>{I.camera.aspect=innerWidth/innerHeight,I.camera.updateProjectionMatrix(),g.setSize(innerWidth,innerHeight),R.resize(),H&&R.visible&&B.id===Ot&&I.floorPosition.distanceTo(H)<.6&&X()});function fs(){const w={areas:i.classes.length+4,doorOut:i.classes.reduce((ze,dt)=>ze+dt.out.length,0),doorIn:i.classes.reduce((ze,dt)=>ze+dt.in.length,0),doorSelf:i.classes.reduce((ze,dt)=>ze+dt.self.length,0),notices:i.classes.reduce((ze,dt)=>ze+dt.notes.length+dt.examples.length,0),stairUpPortals:i.classes.reduce((ze,dt)=>ze+Math.max(0,dt.supers.length-1),0),stairDownPortals:i.classes.reduce((ze,dt)=>ze+(dt.subs.length-(r.homeChildren[dt.id]?.length??0)),0),lifts:i.classes.filter(ze=>ze.supers.length||ze.subs.length).length,realStairwells:Object.keys(r.landings).length},q=ze=>S.filter(dt=>dt.kind===ze).length,j={areas:p.size,doorOut:q("door-out"),doorIn:q("door-in"),doorSelf:q("door-self"),notices:[...p.values()].reduce((ze,dt)=>ze+(dt.notices??0),0),stairUpPortals:q("stair-up"),stairDownPortals:q("stair-down"),lifts:q("lift"),realStairwells:Object.keys(r.landings).length},_e=S.filter(ze=>(ze.kind==="door-out"||ze.kind==="door-in")&&!O(ze)),ue=new Map,Be=(ze,dt)=>{ue.has(ze)||ue.set(ze,new Set),ue.get(ze).add(dt)};Be(fn,Xo),Be(fn,Ot),Be(Ot,fn),Be(Ot,fr),Be(fr,Ot);for(const ze of r.wings){const dt=ze.street==="gallery"?fr:Xo;for(const ln of ze.rootIds)Be(dt,ln),Be(ln,dt)}for(const[ze,dt]of Object.entries(r.homeChildren))for(const ln of dt)Be(ze,ln),Be(ln,ze);for(const ze of S){for(const dt of ze.targetIds)Be(ze.areaId,dt);if(ze.kind==="lift"){const dt=e.get(ze.areaId);for(const ln of Wo(dt,e))Be(ze.areaId,ln.id);for(const ln of dt.subs)Be(ze.areaId,ln);Be(ze.areaId,fn)}}const $e=new Set([fn]),bt=[fn];for(;bt.length;)for(const ze of ue.get(bt.pop())??[])$e.has(ze)||($e.add(ze),bt.push(ze));const Rt=[...p.keys()].filter(ze=>!$e.has(ze)).map(ze=>p.get(ze).label);return{pass:j.areas===w.areas&&j.doorOut===w.doorOut&&j.doorIn===w.doorIn&&j.doorSelf===w.doorSelf&&j.notices===w.notices&&j.stairUpPortals===w.stairUpPortals&&j.stairDownPortals===w.stairDownPortals&&j.lifts===w.lifts&&_e.length===0&&Rt.length===0,expect:w,built:j,unpaired:_e.length,unreachable:Rt,signs:v.count}}window.__hospital={world:i,layout:r,player:I,areas:p,interactables:S,audit:fs,openSearch:Je,perf:()=>({...Ht,avg:+Yn.toFixed(1),drawCalls:g.info.render.calls,triangles:g.info.render.triangles}),people:()=>({tier:h,walkers:V.length,demoteStage:Ln}),tickPeople(w=.1,q=1){for(let j=0;j<q;j++)for(const _e of V)_e.w.update(w)},tickDoors(w=.1,q=1){for(let j=0;j<q;j++)k(w);return B.lift?+B.lift.doors.openness.toFixed(2):null},bench(w=30){const q=performance.now();for(let j=0;j<w;j++)g.render(f,I.camera);return{msPerFrame:+((performance.now()-q)/w).toFixed(2),drawCalls:g.info.render.calls,triangles:g.info.render.triangles}},currentArea:()=>B.label,pick:(w,q)=>U(w,q),tapPick:(w,q)=>ge(w,q),slides:()=>({label:b.label,total:b.count}),nextSlide:()=>(b.next(),b.label),prevSlide:()=>(b.prev(),b.label),houseLights:w=>E.setHouseLights(w),goto(w){const q=w==="Reception"?y:w==="Hospital Street"?A:w==="Postgraduate Medical Centre"?E:t.get(w)&&p.get(t.get(w).id)||null;return q?(Ge(q.id),q.label):`unknown area: ${w}`},walk(w){const q=Math.ceil(Math.abs(w)/.1);for(let _e=0;_e<q;_e++){const ue=I.camera.rotation.y,Be=I.camera.position;Be.x+=-Math.sin(ue)*.1*Math.sign(w),Be.z+=-Math.cos(ue)*.1*Math.sign(w),I.snapGround();const $e=te(I.floorPosition);$e&&$e!==B&&ie($e),Oe()}const j=I.camera.position;return{x:+j.x.toFixed(2),y:+(j.y-1.7).toFixed(2),z:+j.z.toFixed(2),area:B.label}}},console.info(`[hospital] built ${p.size} areas, ${S.length} interactables, ${v.count} signs, loop ${Math.round(r.street.x1)}m × 2 + ${r.loop.C}m courtyard`)}V0().catch(i=>{console.error(i);const e=document.createElement("p");e.style.cssText="color:#fff;padding:24px;font-family:Arial",e.textContent=String(i),fi.replaceChildren(e)});
