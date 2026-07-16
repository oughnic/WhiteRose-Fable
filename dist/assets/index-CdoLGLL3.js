(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Uo="182",ec=0,ia=1,tc=2,Or=1,nc=2,Qi=3,Zn=0,Vt=1,Ln=2,Un=0,Li=1,ra=2,sa=3,oa=4,ic=5,oi=100,rc=101,sc=102,oc=103,ac=104,lc=200,cc=201,uc=202,hc=203,Us=204,Ns=205,fc=206,dc=207,pc=208,mc=209,gc=210,_c=211,xc=212,vc=213,Mc=214,Fs=0,Os=1,Bs=2,Ui=3,zs=4,ks=5,Gs=6,Hs=7,Kr=0,Sc=1,bc=2,_n=0,ml=1,gl=2,_l=3,xl=4,vl=5,Ml=6,Sl=7,bl=300,ui=301,Ni=302,Vs=303,Ws=304,jr=306,sr=1e3,Dn=1001,Xs=1002,Lt=1003,Ec=1004,gr=1005,Et=1006,ts=1007,li=1008,Zt=1009,El=1010,yl=1011,or=1012,No=1013,Mn=1014,dn=1015,On=1016,Fo=1017,Oo=1018,ar=1020,Tl=35902,wl=35899,Al=1021,Rl=1022,ln=1023,Bn=1026,ci=1027,Cl=1028,Bo=1029,Fi=1030,zo=1031,ko=1033,Br=33776,zr=33777,kr=33778,Gr=33779,Ys=35840,$s=35841,qs=35842,Zs=35843,Ks=36196,js=37492,Js=37496,Qs=37488,eo=37489,to=37490,no=37491,io=37808,ro=37809,so=37810,oo=37811,ao=37812,lo=37813,co=37814,uo=37815,ho=37816,fo=37817,po=37818,mo=37819,go=37820,_o=37821,xo=36492,vo=36494,Mo=36495,So=36283,bo=36284,Eo=36285,yo=36286,yc=3200,Go=0,Tc=1,Yn="",_t="srgb",Oi="srgb-linear",Vr="linear",ht="srgb",di=7680,aa=519,wc=512,Ac=513,Rc=514,Ho=515,Cc=516,Pc=517,Vo=518,Ic=519,la=35044,ca="300 es",pn=2e3,Wr=2001;function Pl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lc(){const i=Xr("canvas");return i.style.display="block",i}const ua={};function ha(...i){const e="THREE."+i.shift();console.log(e,...i)}function qe(...i){const e="THREE."+i.shift();console.warn(e,...i)}function ot(...i){const e="THREE."+i.shift();console.error(e,...i)}function lr(...i){const e=i.join(" ");e in ua||(ua[e]=!0,qe(...i))}function Dc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ns=Math.PI/180,To=180/Math.PI;function ur(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function st(i,e,t){return Math.max(e,Math.min(t,i))}function Uc(i,e){return(i%e+e)%e}function is(i,e,t){return(1-t)*i+t*e}function Xi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],p=s[o+1],x=s[o+2],v=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=v;return}if(h!==v||l!==f||c!==p||u!==x){let m=l*f+c*p+u*x+h*v;m<0&&(f=-f,p=-p,x=-x,v=-v,m=-m);let d=1-a;if(m<.9995){const y=Math.acos(m),A=Math.sin(y);d=Math.sin(d*y)/A,a=Math.sin(a*y)/A,l=l*d+f*a,c=c*d+p*a,u=u*d+x*a,h=h*d+v*a}else{l=l*d+f*a,c=c*d+p*a,u=u*d+x*a,h=h*d+v*a;const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],p=s[o+2],x=s[o+3];return e[t]=a*x+u*h+l*p-c*f,e[t+1]=l*x+u*f+c*h-a*p,e[t+2]=c*x+u*p+a*f-l*h,e[t+3]=u*x-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*x,this._y=c*p*h-f*u*x,this._z=c*u*x+f*p*h,this._w=c*u*h-f*p*x;break;case"YXZ":this._x=f*u*h+c*p*x,this._y=c*p*h-f*u*x,this._z=c*u*x-f*p*h,this._w=c*u*h+f*p*x;break;case"ZXY":this._x=f*u*h-c*p*x,this._y=c*p*h+f*u*x,this._z=c*u*x+f*p*h,this._w=c*u*h-f*p*x;break;case"ZYX":this._x=f*u*h-c*p*x,this._y=c*p*h+f*u*x,this._z=c*u*x-f*p*h,this._w=c*u*h+f*p*x;break;case"YZX":this._x=f*u*h+c*p*x,this._y=c*p*h+f*u*x,this._z=c*u*x-f*p*h,this._w=c*u*h-f*p*x;break;case"XZY":this._x=f*u*h-c*p*x,this._y=c*p*h-f*u*x,this._z=c*u*x+f*p*h,this._w=c*u*h+f*p*x;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rs.copy(this).projectOnVector(e),this.sub(rs)}reflect(e){return this.sub(rs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rs=new F,fa=new hr;class Je{constructor(e,t,n,r,s,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],x=n[8],v=r[0],m=r[3],d=r[6],y=r[1],A=r[4],R=r[7],C=r[2],T=r[5],P=r[8];return s[0]=o*v+a*y+l*C,s[3]=o*m+a*A+l*T,s[6]=o*d+a*R+l*P,s[1]=c*v+u*y+h*C,s[4]=c*m+u*A+h*T,s[7]=c*d+u*R+h*P,s[2]=f*v+p*y+x*C,s[5]=f*m+p*A+x*T,s[8]=f*d+p*R+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,x=t*h+n*f+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=h*v,e[1]=(r*c-u*n)*v,e[2]=(a*n-r*o)*v,e[3]=f*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ss.makeScale(e,t)),this}rotate(e){return this.premultiply(ss.makeRotation(-e)),this}translate(e,t){return this.premultiply(ss.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ss=new Je,da=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pa=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nc(){const i={enabled:!0,workingColorSpace:Oi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ht&&(r.r=Nn(r.r),r.g=Nn(r.g),r.b=Nn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(r.r=Di(r.r),r.g=Di(r.g),r.b=Di(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yn?Vr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return lr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return lr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Oi]:{primaries:e,whitePoint:n,transfer:Vr,toXYZ:da,fromXYZ:pa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:da,fromXYZ:pa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),i}const at=Nc();function Nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let pi;class Fc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{pi===void 0&&(pi=Xr("canvas")),pi.width=e.width,pi.height=e.height;const r=pi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=pi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Nn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Nn(t[n]/255)*255):t[n]=Nn(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Oc=0;class Wo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=ur(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(os(r[o].image)):s.push(os(r[o]))}else s=os(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function os(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let Bc=0;const as=new F;class Dt extends hi{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=Dn,r=Dn,s=Et,o=li,a=ln,l=Zt,c=Dt.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=ur(),this.name="",this.source=new Wo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(as).x}get height(){return this.source.getSize(as).y}get depth(){return this.source.getSize(as).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sr:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case Xs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sr:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case Xs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=bl;Dt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],x=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,R=(p+1)/2,C=(d+1)/2,T=(u+f)/4,P=(h+v)/4,O=(x+m)/4;return A>R&&A>C?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=T/n,s=P/n):R>C?R<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),n=T/r,s=O/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=P/s,r=O/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-x)*(m-x)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-x)/y,this.y=(h-v)/y,this.z=(f-u)/y,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zc extends hi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Dt(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Wo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xn extends zc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Il extends Dt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kc extends Dt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xt{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,nn):nn.fromBufferAttribute(s,o),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(e.matrixWorld),this.union(_r)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yi),xr.subVectors(this.max,Yi),mi.subVectors(e.a,Yi),gi.subVectors(e.b,Yi),_i.subVectors(e.c,Yi),kn.subVectors(gi,mi),Gn.subVectors(_i,gi),jn.subVectors(mi,_i);let t=[0,-kn.z,kn.y,0,-Gn.z,Gn.y,0,-jn.z,jn.y,kn.z,0,-kn.x,Gn.z,0,-Gn.x,jn.z,0,-jn.x,-kn.y,kn.x,0,-Gn.y,Gn.x,0,-jn.y,jn.x,0];return!ls(t,mi,gi,_i,xr)||(t=[1,0,0,0,1,0,0,0,1],!ls(t,mi,gi,_i,xr))?!1:(vr.crossVectors(kn,Gn),t=[vr.x,vr.y,vr.z],ls(t,mi,gi,_i,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yn=[new F,new F,new F,new F,new F,new F,new F,new F],nn=new F,_r=new xt,mi=new F,gi=new F,_i=new F,kn=new F,Gn=new F,jn=new F,Yi=new F,xr=new F,vr=new F,Jn=new F;function ls(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Jn.fromArray(i,s);const a=r.x*Math.abs(Jn.x)+r.y*Math.abs(Jn.y)+r.z*Math.abs(Jn.z),l=e.dot(Jn),c=t.dot(Jn),u=n.dot(Jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Gc=new xt,$i=new F,cs=new F;class Xo{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$i.subVectors(e,this.center);const t=$i.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector($i,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($i.copy(e.center).add(cs)),this.expandByPoint($i.copy(e.center).sub(cs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Tn=new F,us=new F,Mr=new F,Hn=new F,hs=new F,Sr=new F,fs=new F;class Ll{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){us.copy(e).add(t).multiplyScalar(.5),Mr.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(us);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Mr),a=Hn.dot(this.direction),l=-Hn.dot(Mr),c=Hn.lengthSq(),u=Math.abs(1-o*o);let h,f,p,x;if(u>0)if(h=o*l-a,f=o*a-l,x=s*u,h>=0)if(f>=-x)if(f<=x){const v=1/u;h*=v,f*=v,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(us).addScaledVector(Mr,f),p}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const n=Tn.dot(this.direction),r=Tn.dot(Tn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,n,r,s){hs.subVectors(t,e),Sr.subVectors(n,e),fs.crossVectors(hs,Sr);let o=this.direction.dot(fs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hn.subVectors(this.origin,e);const l=a*this.direction.dot(Sr.crossVectors(Hn,Sr));if(l<0)return null;const c=a*this.direction.dot(hs.cross(Hn));if(c<0||l+c>o)return null;const u=-a*Hn.dot(fs);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,r,s,o,a,l,c,u,h,f,p,x,v,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,f,p,x,v,m)}set(e,t,n,r,s,o,a,l,c,u,h,f,p,x,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=x,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/xi.setFromMatrixColumn(e,0).length(),s=1/xi.setFromMatrixColumn(e,1).length(),o=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,x=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+x*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=x+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,x=c*u,v=c*h;t[0]=f+v*a,t[4]=x*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-x,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,x=c*u,v=c*h;t[0]=f-v*a,t[4]=-o*h,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,x=a*u,v=a*h;t[0]=l*u,t[4]=x*c-p,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=p*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,x=a*l,v=a*c;t[0]=l*u,t[4]=v-f*h,t[8]=x*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+x,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,p=o*c,x=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=o*u,t[9]=p*h-x,t[2]=x*h-p,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hc,e,Vc)}lookAt(e,t,n){const r=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Vn.crossVectors(n,$t),Vn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Vn.crossVectors(n,$t)),Vn.normalize(),br.crossVectors($t,Vn),r[0]=Vn.x,r[4]=br.x,r[8]=$t.x,r[1]=Vn.y,r[5]=br.y,r[9]=$t.y,r[2]=Vn.z,r[6]=br.z,r[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],x=n[2],v=n[6],m=n[10],d=n[14],y=n[3],A=n[7],R=n[11],C=n[15],T=r[0],P=r[4],O=r[8],g=r[12],S=r[1],b=r[5],D=r[9],k=r[13],W=r[2],H=r[6],K=r[10],V=r[14],re=r[3],B=r[7],$=r[11],oe=r[15];return s[0]=o*T+a*S+l*W+c*re,s[4]=o*P+a*b+l*H+c*B,s[8]=o*O+a*D+l*K+c*$,s[12]=o*g+a*k+l*V+c*oe,s[1]=u*T+h*S+f*W+p*re,s[5]=u*P+h*b+f*H+p*B,s[9]=u*O+h*D+f*K+p*$,s[13]=u*g+h*k+f*V+p*oe,s[2]=x*T+v*S+m*W+d*re,s[6]=x*P+v*b+m*H+d*B,s[10]=x*O+v*D+m*K+d*$,s[14]=x*g+v*k+m*V+d*oe,s[3]=y*T+A*S+R*W+C*re,s[7]=y*P+A*b+R*H+C*B,s[11]=y*O+A*D+R*K+C*$,s[15]=y*g+A*k+R*V+C*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],x=e[3],v=e[7],m=e[11],d=e[15],y=l*p-c*f,A=a*p-c*h,R=a*f-l*h,C=o*p-c*u,T=o*f-l*u,P=o*h-a*u;return t*(v*y-m*A+d*R)-n*(x*y-m*C+d*T)+r*(x*A-v*C+d*P)-s*(x*R-v*T+m*P)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],x=e[12],v=e[13],m=e[14],d=e[15],y=h*m*c-v*f*c+v*l*p-a*m*p-h*l*d+a*f*d,A=x*f*c-u*m*c-x*l*p+o*m*p+u*l*d-o*f*d,R=u*v*c-x*h*c+x*a*p-o*v*p-u*a*d+o*h*d,C=x*h*l-u*v*l-x*a*f+o*v*f+u*a*m-o*h*m,T=t*y+n*A+r*R+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return e[0]=y*P,e[1]=(v*f*s-h*m*s-v*r*p+n*m*p+h*r*d-n*f*d)*P,e[2]=(a*m*s-v*l*s+v*r*c-n*m*c-a*r*d+n*l*d)*P,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*p-n*l*p)*P,e[4]=A*P,e[5]=(u*m*s-x*f*s+x*r*p-t*m*p-u*r*d+t*f*d)*P,e[6]=(x*l*s-o*m*s-x*r*c+t*m*c+o*r*d-t*l*d)*P,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*P,e[8]=R*P,e[9]=(x*h*s-u*v*s-x*n*p+t*v*p+u*n*d-t*h*d)*P,e[10]=(o*v*s-x*a*s+x*n*c-t*v*c-o*n*d+t*a*d)*P,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*p-t*a*p)*P,e[12]=C*P,e[13]=(u*v*r-x*h*r+x*n*f-t*v*f-u*n*m+t*h*m)*P,e[14]=(x*a*r-o*v*r-x*n*l+t*v*l+o*n*m-t*a*m)*P,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,x=s*h,v=o*u,m=o*h,d=a*h,y=l*c,A=l*u,R=l*h,C=n.x,T=n.y,P=n.z;return r[0]=(1-(v+d))*C,r[1]=(p+R)*C,r[2]=(x-A)*C,r[3]=0,r[4]=(p-R)*T,r[5]=(1-(f+d))*T,r[6]=(m+y)*T,r[7]=0,r[8]=(x+A)*P,r[9]=(m-y)*P,r[10]=(1-(f+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=xi.set(r[0],r[1],r[2]).length();const o=xi.set(r[4],r[5],r[6]).length(),a=xi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),rn.copy(this);const c=1/s,u=1/o,h=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,t.setFromRotationMatrix(rn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=pn,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r);let x,v;if(l)x=s/(o-s),v=o*s/(o-s);else if(a===pn)x=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Wr)x=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=pn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r);let x,v;if(l)x=1/(o-s),v=o/(o-s);else if(a===pn)x=-2/(o-s),v=-(o+s)/(o-s);else if(a===Wr)x=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xi=new F,rn=new vt,Hc=new F(0,0,0),Vc=new F(1,1,1),Vn=new F,br=new F,$t=new F,ma=new vt,ga=new hr;class en{constructor(e=0,t=0,n=0,r=en.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ma.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ma,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ga.setFromEuler(this),this.setFromQuaternion(ga,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class Yo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wc=0;const _a=new F,vi=new hr,wn=new vt,Er=new F,qi=new F,Xc=new F,Yc=new hr,xa=new F(1,0,0),va=new F(0,1,0),Ma=new F(0,0,1),Sa={type:"added"},$c={type:"removed"},Mi={type:"childadded",child:null},ds={type:"childremoved",child:null};class Ut extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new F,t=new en,n=new hr,r=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Je}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(xa,e)}rotateY(e){return this.rotateOnAxis(va,e)}rotateZ(e){return this.rotateOnAxis(Ma,e)}translateOnAxis(e,t){return _a.copy(e).applyQuaternion(this.quaternion),this.position.add(_a.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xa,e)}translateY(e){return this.translateOnAxis(va,e)}translateZ(e){return this.translateOnAxis(Ma,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Er.copy(e):Er.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(qi,Er,this.up):wn.lookAt(Er,qi,this.up),this.quaternion.setFromRotationMatrix(wn),r&&(wn.extractRotation(r.matrixWorld),vi.setFromRotationMatrix(wn),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sa),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($c),ds.child=e,this.dispatchEvent(ds),ds.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sa),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,Xc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,Yc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new F(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new F,An=new F,ps=new F,Rn=new F,Si=new F,bi=new F,ba=new F,ms=new F,gs=new F,_s=new F,xs=new bt,vs=new bt,Ms=new bt;class an{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),sn.subVectors(e,t),r.cross(sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){sn.subVectors(r,t),An.subVectors(n,t),ps.subVectors(e,t);const o=sn.dot(sn),a=sn.dot(An),l=sn.dot(ps),c=An.dot(An),u=An.dot(ps),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,x=(o*u-a*l)*f;return s.set(1-p-x,x,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(a,Rn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return xs.setScalar(0),vs.setScalar(0),Ms.setScalar(0),xs.fromBufferAttribute(e,t),vs.fromBufferAttribute(e,n),Ms.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(xs,s.x),o.addScaledVector(vs,s.y),o.addScaledVector(Ms,s.z),o}static isFrontFacing(e,t,n,r){return sn.subVectors(n,t),An.subVectors(e,t),sn.cross(An).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),sn.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return an.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Si.subVectors(r,n),bi.subVectors(s,n),ms.subVectors(e,n);const l=Si.dot(ms),c=bi.dot(ms);if(l<=0&&c<=0)return t.copy(n);gs.subVectors(e,r);const u=Si.dot(gs),h=bi.dot(gs);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Si,o);_s.subVectors(e,s);const p=Si.dot(_s),x=bi.dot(_s);if(x>=0&&p<=x)return t.copy(s);const v=p*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(bi,a);const m=u*x-p*h;if(m<=0&&h-u>=0&&p-x>=0)return ba.subVectors(s,r),a=(h-u)/(h-u+(p-x)),t.copy(r).addScaledVector(ba,a);const d=1/(m+v+f);return o=v*d,a=f*d,t.copy(n).addScaledVector(Si,o).addScaledVector(bi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},yr={h:0,s:0,l:0};function Ss(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=at.workingColorSpace){if(e=Uc(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ss(o,s,e+1/3),this.g=Ss(o,s,e),this.b=Ss(o,s,e-1/3)}return at.colorSpaceToWorking(this,r),this}setStyle(e,t=_t){function n(s){s!==void 0&&parseFloat(s)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const n=Dl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nn(e.r),this.g=Nn(e.g),this.b=Nn(e.b),this}copyLinearToSRGB(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return at.workingToColorSpace(Ft.copy(this),e),Math.round(st(Ft.r*255,0,255))*65536+Math.round(st(Ft.g*255,0,255))*256+Math.round(st(Ft.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Ft.copy(this),t);const n=Ft.r,r=Ft.g,s=Ft.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=_t){at.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,r=Ft.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(yr);const n=is(Wn.h,yr.h,t),r=is(Wn.s,yr.s,t),s=is(Wn.l,yr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new je;je.NAMES=Dl;let qc=0;class ki extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=Li,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Us,this.blendDst=Ns,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=aa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Us&&(n.blendSrc=this.blendSrc),this.blendDst!==Ns&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==aa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cn extends ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new F,Tr=new lt;let Zc=0;class Qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=la,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix3(e),this.setXY(t,Tr.x,Tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==la&&(e.usage=this.usage),e}}class Ul extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nl extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Fn extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Kc=0;const jt=new vt,bs=new Ut,Ei=new F,qt=new xt,Zi=new xt,Rt=new F;class bn extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pl(e)?Nl:Ul)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return bs.lookAt(e),bs.updateMatrix(),this.applyMatrix4(bs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Fn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Zi.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(qt.min,Zi.min),qt.expandByPoint(Rt),Rt.addVectors(qt.max,Zi.max),qt.expandByPoint(Rt)):(qt.expandByPoint(Zi.min),qt.expandByPoint(Zi.max))}qt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Rt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rt.fromBufferAttribute(a,c),l&&(Ei.fromBufferAttribute(e,c),Rt.add(Ei)),r=Math.max(r,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new F,l[O]=new F;const c=new F,u=new F,h=new F,f=new lt,p=new lt,x=new lt,v=new F,m=new F;function d(O,g,S){c.fromBufferAttribute(n,O),u.fromBufferAttribute(n,g),h.fromBufferAttribute(n,S),f.fromBufferAttribute(s,O),p.fromBufferAttribute(s,g),x.fromBufferAttribute(s,S),u.sub(c),h.sub(c),p.sub(f),x.sub(f);const b=1/(p.x*x.y-x.x*p.y);isFinite(b)&&(v.copy(u).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(b),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(b),a[O].add(v),a[g].add(v),a[S].add(v),l[O].add(m),l[g].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let O=0,g=y.length;O<g;++O){const S=y[O],b=S.start,D=S.count;for(let k=b,W=b+D;k<W;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const A=new F,R=new F,C=new F,T=new F;function P(O){C.fromBufferAttribute(r,O),T.copy(C);const g=a[O];A.copy(g),A.sub(C.multiplyScalar(C.dot(g))).normalize(),R.crossVectors(T,g);const b=R.dot(l[O])<0?-1:1;o.setXYZW(O,A.x,A.y,A.z,b)}for(let O=0,g=y.length;O<g;++O){const S=y[O],b=S.start,D=S.count;for(let k=b,W=b+D;k<W;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,x=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)f[x++]=c[p++]}return new Qt(f,u,h)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ea=new vt,Qn=new Ll,wr=new Xo,ya=new F,Ar=new F,Rr=new F,Cr=new F,Es=new F,Pr=new F,Ta=new F,Ir=new F;class Pt extends Ut{constructor(e=new bn,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Pr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Es.fromBufferAttribute(h,e),o?Pr.addScaledVector(Es,u):Pr.addScaledVector(Es.sub(t),u))}t.add(Pr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(s),Qn.copy(e.ray).recast(e.near),!(wr.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(wr,ya)===null||Qn.origin.distanceToSquared(ya)>(e.far-e.near)**2))&&(Ea.copy(s).invert(),Qn.copy(e.ray).applyMatrix4(Ea),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){const m=f[x],d=o[m.materialIndex],y=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let R=y,C=A;R<C;R+=3){const T=a.getX(R),P=a.getX(R+1),O=a.getX(R+2);r=Lr(this,d,e,n,c,u,h,T,P,O),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=x,d=v;m<d;m+=3){const y=a.getX(m),A=a.getX(m+1),R=a.getX(m+2);r=Lr(this,o,e,n,c,u,h,y,A,R),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){const m=f[x],d=o[m.materialIndex],y=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let R=y,C=A;R<C;R+=3){const T=R,P=R+1,O=R+2;r=Lr(this,d,e,n,c,u,h,T,P,O),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=x,d=v;m<d;m+=3){const y=m,A=m+1,R=m+2;r=Lr(this,o,e,n,c,u,h,y,A,R),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function jc(i,e,t,n,r,s,o,a){let l;if(e.side===Vt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Zn,a),l===null)return null;Ir.copy(a),Ir.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ir);return c<t.near||c>t.far?null:{distance:c,point:Ir.clone(),object:i}}function Lr(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Ar),i.getVertexPosition(l,Rr),i.getVertexPosition(c,Cr);const u=jc(i,e,t,n,Ar,Rr,Cr,Ta);if(u){const h=new F;an.getBarycoord(Ta,Ar,Rr,Cr,h),r&&(u.uv=an.getInterpolatedAttribute(r,a,l,c,h,new lt)),s&&(u.uv1=an.getInterpolatedAttribute(s,a,l,c,h,new lt)),o&&(u.normal=an.getInterpolatedAttribute(o,a,l,c,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new F,materialIndex:0};an.getNormal(Ar,Rr,Cr,f.normal),u.face=f,u.barycoord=h}return u}class zn extends bn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,r,o,2),x("x","z","y",1,-1,e,n,-t,r,o,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Fn(c,3)),this.setAttribute("normal",new Fn(u,3)),this.setAttribute("uv",new Fn(h,2));function x(v,m,d,y,A,R,C,T,P,O,g){const S=R/P,b=C/O,D=R/2,k=C/2,W=T/2,H=P+1,K=O+1;let V=0,re=0;const B=new F;for(let $=0;$<K;$++){const oe=$*b-k;for(let G=0;G<H;G++){const ee=G*S-D;B[v]=ee*y,B[m]=oe*A,B[d]=W,c.push(B.x,B.y,B.z),B[v]=0,B[m]=0,B[d]=T>0?1:-1,u.push(B.x,B.y,B.z),h.push(G/P),h.push(1-$/O),V+=1}}for(let $=0;$<O;$++)for(let oe=0;oe<P;oe++){const G=f+oe+H*$,ee=f+oe+H*($+1),ge=f+(oe+1)+H*($+1),Ee=f+(oe+1)+H*$;l.push(G,ee,Ee),l.push(ee,ge,Ee),re+=6}a.addGroup(p,re,g),p+=re,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function zt(i){const e={};for(let t=0;t<i.length;t++){const n=Bi(i[t]);for(const r in n)e[r]=n[r]}return e}function Jc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const Qc={clone:Bi,merge:zt};var eu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eu,this.fragmentShader=tu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=Jc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ol extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new F,wa=new lt,Aa=new lt;class Jt extends Ol{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=To*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return To*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,wa,Aa),t.subVectors(Aa,wa)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ns*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yi=-90,Ti=1;class nu extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(yi,Ti,e,t);r.layers=this.layers,this.add(r);const s=new Jt(yi,Ti,e,t);s.layers=this.layers,this.add(s);const o=new Jt(yi,Ti,e,t);o.layers=this.layers,this.add(o);const a=new Jt(yi,Ti,e,t);a.layers=this.layers,this.add(a);const l=new Jt(yi,Ti,e,t);l.layers=this.layers,this.add(l);const c=new Jt(yi,Ti,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===pn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Bl extends Dt{constructor(e=[],t=ui,n,r,s,o,a,l,c,u){super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zl extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Bl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zn(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Un});s.uniforms.tEquirect.value=t;const o=new Pt(r,s),a=t.minFilter;return t.minFilter===li&&(t.minFilter=Et),new nu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class mn extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iu={type:"move"};class ys{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iu)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Yr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=n}clone(){return new Yr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ru extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class su extends Dt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Lt,u=Lt,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ts=new F,ou=new F,au=new Je;class ri{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ts.subVectors(n,t).cross(ou.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ts),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||au.getNormalMatrix(e),r=this.coplanarPoint(Ts).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new Xo,lu=new lt(.5,.5),Dr=new F;class $o{constructor(e=new ri,t=new ri,n=new ri,r=new ri,s=new ri,o=new ri){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pn,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],p=s[7],x=s[8],v=s[9],m=s[10],d=s[11],y=s[12],A=s[13],R=s[14],C=s[15];if(r[0].setComponents(c-o,p-u,d-x,C-y).normalize(),r[1].setComponents(c+o,p+u,d+x,C+y).normalize(),r[2].setComponents(c+a,p+h,d+v,C+A).normalize(),r[3].setComponents(c-a,p-h,d-v,C-A).normalize(),n)r[4].setComponents(l,f,m,R).normalize(),r[5].setComponents(c-l,p-f,d-m,C-R).normalize();else if(r[4].setComponents(c-l,p-f,d-m,C-R).normalize(),t===pn)r[5].setComponents(c+l,p+f,d+m,C+R).normalize();else if(t===Wr)r[5].setComponents(l,f,m,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){ei.center.set(0,0,0);const t=lu.distanceTo(e.center);return ei.radius=.7071067811865476+t,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Dr.x=r.normal.x>0?e.max.x:e.min.x,Dr.y=r.normal.y>0?e.max.y:e.min.y,Dr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cu extends Dt{constructor(e,t,n,r,s=Et,o=Et,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function h(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class En extends Dt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cr extends Dt{constructor(e,t,n=Mn,r,s,o,a=Lt,l=Lt,c,u=Bn,h=1){if(u!==Bn&&u!==ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class uu extends cr{constructor(e,t=Mn,n=ui,r,s,o=Lt,a=Lt,l,c=Bn){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class kl extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Gi extends bn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,p=[],x=[],v=[],m=[];for(let d=0;d<u;d++){const y=d*f-o;for(let A=0;A<c;A++){const R=A*h-s;x.push(R,-y,0),v.push(0,0,1),m.push(A/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const A=y+c*d,R=y+c*(d+1),C=y+1+c*(d+1),T=y+1+c*d;p.push(A,R,T),p.push(R,C,T)}this.setIndex(p),this.setAttribute("position",new Fn(x,3)),this.setAttribute("normal",new Fn(v,3)),this.setAttribute("uv",new Fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.width,e.height,e.widthSegments,e.heightSegments)}}class hu extends Sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fu extends ki{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new je(16777215),this.specular=new je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Go,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tt extends ki{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Go,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class du extends ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pu extends ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qo extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class mu extends qo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ws=new vt,Ra=new F,Ca=new F;class gu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $o,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ra.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ra),Ca.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ca),t.updateMatrixWorld(),ws.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ws,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ws)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zo extends Ol{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _u extends gu{constructor(){super(new Zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xu extends qo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new _u}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class vu extends qo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mu extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Su{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Pa=new vt;class bu{constructor(e,t,n=0,r=1/0){this.ray=new Ll(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pa.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pa),this}intersectObject(e,t=!0,n=[]){return wo(e,this,n,t),n.sort(Ia),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)wo(e[r],this,n,t);return n.sort(Ia),n}}function Ia(i,e){return i.distance-e.distance}function wo(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)wo(s[o],e,t,!0)}}class Eu extends hi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){qe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function La(i,e,t,n){const r=yu(n);switch(t){case Al:return i*e;case Cl:return i*e/r.components*r.byteLength;case Bo:return i*e/r.components*r.byteLength;case Fi:return i*e*2/r.components*r.byteLength;case zo:return i*e*2/r.components*r.byteLength;case Rl:return i*e*3/r.components*r.byteLength;case ln:return i*e*4/r.components*r.byteLength;case ko:return i*e*4/r.components*r.byteLength;case Br:case zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kr:case Gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $s:case Zs:return Math.max(i,16)*Math.max(e,8)/4;case Ys:case qs:return Math.max(i,8)*Math.max(e,8)/2;case Ks:case js:case Qs:case eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Js:case to:case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ro:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case so:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case oo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ao:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case lo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case co:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case uo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ho:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case po:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case mo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case go:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _o:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xo:case vo:case Mo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case So:case bo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Eo:case yo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yu(i){switch(i){case Zt:case El:return{byteLength:1,components:1};case or:case yl:case On:return{byteLength:2,components:1};case Fo:case Oo:return{byteLength:2,components:4};case Mn:case No:case dn:return{byteLength:4,components:1};case Tl:case wl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uo}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uo);function Gl(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Tu(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<h.length;p++){const x=h[f],v=h[p];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,x=h.length;p<x;p++){const v=h[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var wu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Au=`#ifdef USE_ALPHAHASH
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
#endif`,Ru=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lu=`#ifdef USE_AOMAP
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
#endif`,Du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uu=`#ifdef USE_BATCHING
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
#endif`,Nu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ou=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zu=`#ifdef USE_IRIDESCENCE
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
#endif`,ku=`#ifdef USE_BUMPMAP
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
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zu=`#define PI 3.141592653589793
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
} // validated`,Ku=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ju=`vec3 transformedNormal = objectNormal;
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
#endif`,Ju=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,th=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ih=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rh=`#ifdef USE_ENVMAP
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
#endif`,sh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,oh=`#ifdef USE_ENVMAP
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
#endif`,ah=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lh=`#ifdef USE_ENVMAP
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
#endif`,ch=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dh=`#ifdef USE_GRADIENTMAP
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
}`,ph=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_h=`uniform bool receiveShadow;
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
#endif`,xh=`#ifdef USE_ENVMAP
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
#endif`,vh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eh=`PhysicalMaterial material;
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
#endif`,yh=`uniform sampler2D dfgLUT;
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
}`,Th=`
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
#endif`,wh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ah=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ch=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ph=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ih=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nh=`#if defined( USE_POINTS_UV )
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
#endif`,Fh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Oh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gh=`#ifdef USE_MORPHTARGETS
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
#endif`,Hh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$h=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qh=`#ifdef USE_NORMALMAP
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
#endif`,Zh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ef=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,of=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,af=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hf=`float getShadowMask() {
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
}`,ff=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,df=`#ifdef USE_SKINNING
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
#endif`,pf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mf=`#ifdef USE_SKINNING
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
#endif`,gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_f=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mf=`#ifdef USE_TRANSMISSION
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
#endif`,Sf=`#ifdef USE_TRANSMISSION
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
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Af=`uniform sampler2D t2D;
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
}`,Rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,If=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`#include <common>
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
}`,Df=`#if DEPTH_PACKING == 3200
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
}`,Uf=`#define DISTANCE
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
}`,Nf=`#define DISTANCE
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
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Of=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`uniform float scale;
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
}`,zf=`uniform vec3 diffuse;
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
}`,kf=`#include <common>
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
}`,Gf=`uniform vec3 diffuse;
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
}`,Hf=`#define LAMBERT
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
}`,Vf=`#define LAMBERT
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
}`,Wf=`#define MATCAP
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
}`,Xf=`#define MATCAP
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
}`,Yf=`#define NORMAL
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
}`,$f=`#define NORMAL
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
}`,qf=`#define PHONG
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
}`,Zf=`#define PHONG
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
}`,Kf=`#define STANDARD
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
}`,jf=`#define STANDARD
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
}`,Jf=`#define TOON
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
}`,Qf=`#define TOON
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
}`,ed=`uniform float size;
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
}`,td=`uniform vec3 diffuse;
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
}`,nd=`#include <common>
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
}`,id=`uniform vec3 color;
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
}`,rd=`uniform float rotation;
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
}`,sd=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:wu,alphahash_pars_fragment:Au,alphamap_fragment:Ru,alphamap_pars_fragment:Cu,alphatest_fragment:Pu,alphatest_pars_fragment:Iu,aomap_fragment:Lu,aomap_pars_fragment:Du,batching_pars_vertex:Uu,batching_vertex:Nu,begin_vertex:Fu,beginnormal_vertex:Ou,bsdfs:Bu,iridescence_fragment:zu,bumpmap_pars_fragment:ku,clipping_planes_fragment:Gu,clipping_planes_pars_fragment:Hu,clipping_planes_pars_vertex:Vu,clipping_planes_vertex:Wu,color_fragment:Xu,color_pars_fragment:Yu,color_pars_vertex:$u,color_vertex:qu,common:Zu,cube_uv_reflection_fragment:Ku,defaultnormal_vertex:ju,displacementmap_pars_vertex:Ju,displacementmap_vertex:Qu,emissivemap_fragment:eh,emissivemap_pars_fragment:th,colorspace_fragment:nh,colorspace_pars_fragment:ih,envmap_fragment:rh,envmap_common_pars_fragment:sh,envmap_pars_fragment:oh,envmap_pars_vertex:ah,envmap_physical_pars_fragment:xh,envmap_vertex:lh,fog_vertex:ch,fog_pars_vertex:uh,fog_fragment:hh,fog_pars_fragment:fh,gradientmap_pars_fragment:dh,lightmap_pars_fragment:ph,lights_lambert_fragment:mh,lights_lambert_pars_fragment:gh,lights_pars_begin:_h,lights_toon_fragment:vh,lights_toon_pars_fragment:Mh,lights_phong_fragment:Sh,lights_phong_pars_fragment:bh,lights_physical_fragment:Eh,lights_physical_pars_fragment:yh,lights_fragment_begin:Th,lights_fragment_maps:wh,lights_fragment_end:Ah,logdepthbuf_fragment:Rh,logdepthbuf_pars_fragment:Ch,logdepthbuf_pars_vertex:Ph,logdepthbuf_vertex:Ih,map_fragment:Lh,map_pars_fragment:Dh,map_particle_fragment:Uh,map_particle_pars_fragment:Nh,metalnessmap_fragment:Fh,metalnessmap_pars_fragment:Oh,morphinstance_vertex:Bh,morphcolor_vertex:zh,morphnormal_vertex:kh,morphtarget_pars_vertex:Gh,morphtarget_vertex:Hh,normal_fragment_begin:Vh,normal_fragment_maps:Wh,normal_pars_fragment:Xh,normal_pars_vertex:Yh,normal_vertex:$h,normalmap_pars_fragment:qh,clearcoat_normal_fragment_begin:Zh,clearcoat_normal_fragment_maps:Kh,clearcoat_pars_fragment:jh,iridescence_pars_fragment:Jh,opaque_fragment:Qh,packing:ef,premultiplied_alpha_fragment:tf,project_vertex:nf,dithering_fragment:rf,dithering_pars_fragment:sf,roughnessmap_fragment:of,roughnessmap_pars_fragment:af,shadowmap_pars_fragment:lf,shadowmap_pars_vertex:cf,shadowmap_vertex:uf,shadowmask_pars_fragment:hf,skinbase_vertex:ff,skinning_pars_vertex:df,skinning_vertex:pf,skinnormal_vertex:mf,specularmap_fragment:gf,specularmap_pars_fragment:_f,tonemapping_fragment:xf,tonemapping_pars_fragment:vf,transmission_fragment:Mf,transmission_pars_fragment:Sf,uv_pars_fragment:bf,uv_pars_vertex:Ef,uv_vertex:yf,worldpos_vertex:Tf,background_vert:wf,background_frag:Af,backgroundCube_vert:Rf,backgroundCube_frag:Cf,cube_vert:Pf,cube_frag:If,depth_vert:Lf,depth_frag:Df,distance_vert:Uf,distance_frag:Nf,equirect_vert:Ff,equirect_frag:Of,linedashed_vert:Bf,linedashed_frag:zf,meshbasic_vert:kf,meshbasic_frag:Gf,meshlambert_vert:Hf,meshlambert_frag:Vf,meshmatcap_vert:Wf,meshmatcap_frag:Xf,meshnormal_vert:Yf,meshnormal_frag:$f,meshphong_vert:qf,meshphong_frag:Zf,meshphysical_vert:Kf,meshphysical_frag:jf,meshtoon_vert:Jf,meshtoon_frag:Qf,points_vert:ed,points_frag:td,shadow_vert:nd,shadow_frag:id,sprite_vert:rd,sprite_frag:sd},Ae={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},fn={basic:{uniforms:zt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:zt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:zt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:zt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:zt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new je(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:zt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:zt([Ae.points,Ae.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:zt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:zt([Ae.common,Ae.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:zt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:zt([Ae.sprite,Ae.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:zt([Ae.common,Ae.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:zt([Ae.lights,Ae.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};fn.physical={uniforms:zt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Ur={r:0,b:0,g:0},ti=new en,od=new vt;function ad(i,e,t,n,r,s,o){const a=new je(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function x(A){let R=A.isScene===!0?A.background:null;return R&&R.isTexture&&(R=(A.backgroundBlurriness>0?t:e).get(R)),R}function v(A){let R=!1;const C=x(A);C===null?d(a,l):C&&C.isColor&&(d(C,1),R=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||R)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(A,R){const C=x(R);C&&(C.isCubeTexture||C.mapping===jr)?(u===void 0&&(u=new Pt(new zn(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Bi(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ti.copy(R.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(od.makeRotationFromEuler(ti)),u.material.toneMapped=at.getTransfer(C.colorSpace)!==ht,(h!==C||f!==C.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=C,f=C.version,p=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Pt(new Gi(2,2),new Sn({name:"BackgroundMaterial",uniforms:Bi(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=at.getTransfer(C.colorSpace)!==ht,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||f!==C.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=C,f=C.version,p=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,R){A.getRGB(Ur,Fl(i)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,R,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,R=1){a.set(A),l=R,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(a,l)},render:v,addToRenderList:m,dispose:y}}function ld(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(S,b,D,k,W){let H=!1;const K=h(k,D,b);s!==K&&(s=K,c(s.object)),H=p(S,k,D,W),H&&x(S,k,D,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,R(S,b,D,k),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,b,D){const k=D.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let H=W[b.id];H===void 0&&(H={},W[b.id]=H);let K=H[k];return K===void 0&&(K=f(l()),H[k]=K),K}function f(S){const b=[],D=[],k=[];for(let W=0;W<t;W++)b[W]=0,D[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:D,attributeDivisors:k,object:S,attributes:{},index:null}}function p(S,b,D,k){const W=s.attributes,H=b.attributes;let K=0;const V=D.getAttributes();for(const re in V)if(V[re].location>=0){const $=W[re];let oe=H[re];if(oe===void 0&&(re==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),re==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),$===void 0||$.attribute!==oe||oe&&$.data!==oe.data)return!0;K++}return s.attributesNum!==K||s.index!==k}function x(S,b,D,k){const W={},H=b.attributes;let K=0;const V=D.getAttributes();for(const re in V)if(V[re].location>=0){let $=H[re];$===void 0&&(re==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),re==="instanceColor"&&S.instanceColor&&($=S.instanceColor));const oe={};oe.attribute=$,$&&$.data&&(oe.data=$.data),W[re]=oe,K++}s.attributes=W,s.attributesNum=K,s.index=k}function v(){const S=s.newAttributes;for(let b=0,D=S.length;b<D;b++)S[b]=0}function m(S){d(S,0)}function d(S,b){const D=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;D[S]=1,k[S]===0&&(i.enableVertexAttribArray(S),k[S]=1),W[S]!==b&&(i.vertexAttribDivisor(S,b),W[S]=b)}function y(){const S=s.newAttributes,b=s.enabledAttributes;for(let D=0,k=b.length;D<k;D++)b[D]!==S[D]&&(i.disableVertexAttribArray(D),b[D]=0)}function A(S,b,D,k,W,H,K){K===!0?i.vertexAttribIPointer(S,b,D,W,H):i.vertexAttribPointer(S,b,D,k,W,H)}function R(S,b,D,k){v();const W=k.attributes,H=D.getAttributes(),K=b.defaultAttributeValues;for(const V in H){const re=H[V];if(re.location>=0){let B=W[V];if(B===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(B=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(B=S.instanceColor)),B!==void 0){const $=B.normalized,oe=B.itemSize,G=e.get(B);if(G===void 0)continue;const ee=G.buffer,ge=G.type,Ee=G.bytesPerElement,q=ge===i.INT||ge===i.UNSIGNED_INT||B.gpuType===No;if(B.isInterleavedBufferAttribute){const Q=B.data,ie=Q.stride,pe=B.offset;if(Q.isInstancedInterleavedBuffer){for(let de=0;de<re.locationSize;de++)d(re.location+de,Q.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let de=0;de<re.locationSize;de++)m(re.location+de);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let de=0;de<re.locationSize;de++)A(re.location+de,oe/re.locationSize,ge,$,ie*Ee,(pe+oe/re.locationSize*de)*Ee,q)}else{if(B.isInstancedBufferAttribute){for(let Q=0;Q<re.locationSize;Q++)d(re.location+Q,B.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let Q=0;Q<re.locationSize;Q++)m(re.location+Q);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Q=0;Q<re.locationSize;Q++)A(re.location+Q,oe/re.locationSize,ge,$,oe*Ee,oe/re.locationSize*Q*Ee,q)}}else if(K!==void 0){const $=K[V];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(re.location,$);break;case 3:i.vertexAttrib3fv(re.location,$);break;case 4:i.vertexAttrib4fv(re.location,$);break;default:i.vertexAttrib1fv(re.location,$)}}}}y()}function C(){O();for(const S in n){const b=n[S];for(const D in b){const k=b[D];for(const W in k)u(k[W].object),delete k[W];delete b[D]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const b=n[S.id];for(const D in b){const k=b[D];for(const W in k)u(k[W].object),delete k[W];delete b[D]}delete n[S.id]}function P(S){for(const b in n){const D=n[b];if(D[S.id]===void 0)continue;const k=D[S.id];for(const W in k)u(k[W].object),delete k[W];delete D[S.id]}}function O(){g(),o=!0,s!==r&&(s=r,c(s.object))}function g(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:g,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function cd(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],u[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let x=0;for(let v=0;v<h;v++)x+=u[v]*f[v];t.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ud(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==ln&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const O=P===On&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Zt&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==dn&&!O)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:A,maxFragmentUniforms:R,maxSamples:C,samples:T}}function hd(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new ri,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const x=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const y=s?0:n,A=y*4;let R=d.clippingState||null;l.value=R,R=u(x,f,A,p);for(let C=0;C!==A;++C)R[C]=t[C];d.clippingState=R,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,x){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,x!==!0||m===null){const d=p+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,R=p;A!==v;++A,R+=4)o.copy(h[A]).applyMatrix4(y,a),o.normal.toArray(m,R),m[R+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function fd(i){let e=new WeakMap;function t(o,a){return a===Vs?o.mapping=ui:a===Ws&&(o.mapping=Ni),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vs||a===Ws)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zl(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const $n=4,Da=[.125,.215,.35,.446,.526,.582],ai=20,dd=256,Ki=new Zo,Ua=new je;let As=null,Rs=0,Cs=0,Ps=!1;const pd=new F;class Na{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=pd}=s;As=this._renderer.getRenderTarget(),Rs=this._renderer.getActiveCubeFace(),Cs=this._renderer.getActiveMipmapLevel(),Ps=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(As,Rs,Cs),this._renderer.xr.enabled=Ps,e.scissorTest=!1,wi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ui||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),As=this._renderer.getRenderTarget(),Rs=this._renderer.getActiveCubeFace(),Cs=this._renderer.getActiveMipmapLevel(),Ps=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:On,format:ln,colorSpace:Oi,depthBuffer:!1},r=Fa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fa(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=md(s)),this._blurMaterial=_d(s,e,t),this._ggxMaterial=gd(s,e,t)}return r}_compileMaterial(e){const t=new Pt(new bn,e);this._renderer.compile(t,Ki)}_sceneToCubeUV(e,t,n,r,s){const l=new Jt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Ua),h.toneMapping=_n,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new zn,new cn({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let d=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,d=!0):(m.color.copy(Ua),d=!0);for(let A=0;A<6;A++){const R=A%3;R===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):R===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));const C=this._cubeSize;wi(r,R*C,A>2?C:0,C,C),h.setRenderTarget(r),d&&h.render(v,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ui||e.mapping===Ni;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oa());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ki)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,p=h*f,{_lodMax:x}=this,v=this._sizeLods[n],m=3*v*(n>x-$n?n-x+$n:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,wi(s,m,d,3*v,2*v),r.setRenderTarget(s),r.render(a,Ki),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-n,wi(e,m,d,3*v,2*v),r.setRenderTarget(e),r.render(a,Ki)}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ot("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ai-1),v=s/x,m=isFinite(s)?1+Math.floor(u*v):ai;m>ai&&qe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ai}`);const d=[];let y=0;for(let P=0;P<ai;++P){const O=P/v,g=Math.exp(-O*O/2);d.push(g),P===0?y+=g:P<m&&(y+=2*g)}for(let P=0;P<d.length;P++)d[P]=d[P]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:A}=this;f.dTheta.value=x,f.mipInt.value=A-n;const R=this._sizeLods[r],C=3*R*(r>A-$n?r-A+$n:0),T=4*(this._cubeSize-R);wi(t,C,T,3*R,2*R),l.setRenderTarget(t),l.render(h,Ki)}}function md(i){const e=[],t=[],n=[];let r=i;const s=i-$n+1+Da.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-$n?l=Da[o-i+$n-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,x=6,v=3,m=2,d=1,y=new Float32Array(v*x*p),A=new Float32Array(m*x*p),R=new Float32Array(d*x*p);for(let T=0;T<p;T++){const P=T%3*2/3-1,O=T>2?0:-1,g=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];y.set(g,v*x*T),A.set(f,m*x*T);const S=[T,T,T,T,T,T];R.set(S,d*x*T)}const C=new bn;C.setAttribute("position",new Qt(y,v)),C.setAttribute("uv",new Qt(A,m)),C.setAttribute("faceIndex",new Qt(R,d)),n.push(new Pt(C,null)),r>$n&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Fa(i,e,t){const n=new xn(i,e,t);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function gd(i,e,t){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:dd,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jr(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function _d(i,e,t){const n=new Float32Array(ai),r=new F(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jr(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Oa(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jr(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Ba(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Jr(){return`

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
	`}function xd(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vs||l===Ws,u=l===ui||l===Ni;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Na(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Na(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function vd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&lr("WebGLRenderer: "+n+" extension not supported."),r}}}function Md(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,x=h.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let A=0,R=y.length;A<R;A+=3){const C=y[A+0],T=y[A+1],P=y[A+2];f.push(C,T,T,P,P,C)}}else if(x!==void 0){const y=x.array;v=x.version;for(let A=0,R=y.length/3-1;A<R;A+=3){const C=A+0,T=A+1,P=A+2;f.push(C,T,T,P,P,C)}}else return;const m=new(Pl(f)?Nl:Ul)(f,1);m.version=v;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Sd(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*o),t.update(p,n,1)}function c(f,p,x){x!==0&&(i.drawElementsInstanced(n,p,s,f*o,x),t.update(p,n,x))}function u(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,x);let m=0;for(let d=0;d<x;d++)m+=p[d];t.update(m,n,1)}function h(f,p,x,v){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,v,0,x);let d=0;for(let y=0;y<x;y++)d+=p[y]*v[y];t.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function bd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:ot("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Ed(i,e,t){const n=new WeakMap,r=new bt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let S=function(){O.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const x=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let R=0;x===!0&&(R=1),v===!0&&(R=2),m===!0&&(R=3);let C=a.attributes.position.count*R,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const P=new Float32Array(C*T*4*h),O=new Il(P,C,T,h);O.type=dn,O.needsUpdate=!0;const g=R*4;for(let b=0;b<h;b++){const D=d[b],k=y[b],W=A[b],H=C*T*4*b;for(let K=0;K<D.count;K++){const V=K*g;x===!0&&(r.fromBufferAttribute(D,K),P[H+V+0]=r.x,P[H+V+1]=r.y,P[H+V+2]=r.z,P[H+V+3]=0),v===!0&&(r.fromBufferAttribute(k,K),P[H+V+4]=r.x,P[H+V+5]=r.y,P[H+V+6]=r.z,P[H+V+7]=0),m===!0&&(r.fromBufferAttribute(W,K),P[H+V+8]=r.x,P[H+V+9]=r.y,P[H+V+10]=r.z,P[H+V+11]=W.itemSize===4?r.w:1)}}f={count:h,texture:O,size:new lt(C,T)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const v=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function yd(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Td={[ml]:"LINEAR_TONE_MAPPING",[gl]:"REINHARD_TONE_MAPPING",[_l]:"CINEON_TONE_MAPPING",[xl]:"ACES_FILMIC_TONE_MAPPING",[Ml]:"AGX_TONE_MAPPING",[Sl]:"NEUTRAL_TONE_MAPPING",[vl]:"CUSTOM_TONE_MAPPING"};function wd(i,e,t,n,r){const s=new xn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),o=new xn(e,t,{type:On,depthBuffer:!1,stencilBuffer:!1}),a=new bn;a.setAttribute("position",new Fn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Fn([0,2,0,0,2,0],2));const l=new hu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Pt(a,l),u=new Zo(-1,1,1,-1,0,1);let h=null,f=null,p=!1,x,v=null,m=[],d=!1;this.setSize=function(y,A){s.setSize(y,A),o.setSize(y,A);for(let R=0;R<m.length;R++){const C=m[R];C.setSize&&C.setSize(y,A)}},this.setEffects=function(y){m=y,d=m.length>0&&m[0].isRenderPass===!0;const A=s.width,R=s.height;for(let C=0;C<m.length;C++){const T=m[C];T.setSize&&T.setSize(A,R)}},this.begin=function(y,A){if(p||y.toneMapping===_n&&m.length===0)return!1;if(v=A,A!==null){const R=A.width,C=A.height;(s.width!==R||s.height!==C)&&this.setSize(R,C)}return d===!1&&y.setRenderTarget(s),x=y.toneMapping,y.toneMapping=_n,!0},this.hasRenderPass=function(){return d},this.end=function(y,A){y.toneMapping=x,p=!0;let R=s,C=o;for(let T=0;T<m.length;T++){const P=m[T];if(P.enabled!==!1&&(P.render(y,C,R,A),P.needsSwap!==!1)){const O=R;R=C,C=O}}if(h!==y.outputColorSpace||f!==y.toneMapping){h=y.outputColorSpace,f=y.toneMapping,l.defines={},at.getTransfer(h)===ht&&(l.defines.SRGB_TRANSFER="");const T=Td[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=R.texture,y.setRenderTarget(v),y.render(c,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Hl=new Dt,Ao=new cr(1,1),Vl=new Il,Wl=new kc,Xl=new Bl,za=[],ka=[],Ga=new Float32Array(16),Ha=new Float32Array(9),Va=new Float32Array(4);function Hi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=za[r];if(s===void 0&&(s=new Float32Array(r),za[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qr(i,e){let t=ka[e];t===void 0&&(t=new Int32Array(e),ka[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ad(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Rd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function Cd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function Pd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function Id(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;Va.set(n),i.uniformMatrix2fv(this.addr,!1,Va),At(t,n)}}function Ld(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;Ha.set(n),i.uniformMatrix3fv(this.addr,!1,Ha),At(t,n)}}function Dd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;Ga.set(n),i.uniformMatrix4fv(this.addr,!1,Ga),At(t,n)}}function Ud(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Nd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function Fd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function Od(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function Bd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function Gd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function Hd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ao.compareFunction=t.isReversedDepthBuffer()?Vo:Ho,s=Ao):s=Hl,t.setTexture2D(e||s,r)}function Vd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Wl,r)}function Wd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Xl,r)}function Xd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Vl,r)}function Yd(i){switch(i){case 5126:return Ad;case 35664:return Rd;case 35665:return Cd;case 35666:return Pd;case 35674:return Id;case 35675:return Ld;case 35676:return Dd;case 5124:case 35670:return Ud;case 35667:case 35671:return Nd;case 35668:case 35672:return Fd;case 35669:case 35673:return Od;case 5125:return Bd;case 36294:return zd;case 36295:return kd;case 36296:return Gd;case 35678:case 36198:case 36298:case 36306:case 35682:return Hd;case 35679:case 36299:case 36307:return Vd;case 35680:case 36300:case 36308:case 36293:return Wd;case 36289:case 36303:case 36311:case 36292:return Xd}}function $d(i,e){i.uniform1fv(this.addr,e)}function qd(i,e){const t=Hi(e,this.size,2);i.uniform2fv(this.addr,t)}function Zd(i,e){const t=Hi(e,this.size,3);i.uniform3fv(this.addr,t)}function Kd(i,e){const t=Hi(e,this.size,4);i.uniform4fv(this.addr,t)}function jd(i,e){const t=Hi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Jd(i,e){const t=Hi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Qd(i,e){const t=Hi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ep(i,e){i.uniform1iv(this.addr,e)}function tp(i,e){i.uniform2iv(this.addr,e)}function np(i,e){i.uniform3iv(this.addr,e)}function ip(i,e){i.uniform4iv(this.addr,e)}function rp(i,e){i.uniform1uiv(this.addr,e)}function sp(i,e){i.uniform2uiv(this.addr,e)}function op(i,e){i.uniform3uiv(this.addr,e)}function ap(i,e){i.uniform4uiv(this.addr,e)}function lp(i,e,t){const n=this.cache,r=e.length,s=Qr(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ao:o=Hl;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function cp(i,e,t){const n=this.cache,r=e.length,s=Qr(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Wl,s[o])}function up(i,e,t){const n=this.cache,r=e.length,s=Qr(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Xl,s[o])}function hp(i,e,t){const n=this.cache,r=e.length,s=Qr(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Vl,s[o])}function fp(i){switch(i){case 5126:return $d;case 35664:return qd;case 35665:return Zd;case 35666:return Kd;case 35674:return jd;case 35675:return Jd;case 35676:return Qd;case 5124:case 35670:return ep;case 35667:case 35671:return tp;case 35668:case 35672:return np;case 35669:case 35673:return ip;case 5125:return rp;case 36294:return sp;case 36295:return op;case 36296:return ap;case 35678:case 36198:case 36298:case 36306:case 35682:return lp;case 35679:case 36299:case 36307:return cp;case 35680:case 36300:case 36308:case 36293:return up;case 36289:case 36303:case 36311:case 36292:return hp}}class dp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yd(t.type)}}class pp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fp(t.type)}}class mp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Is=/(\w+)(\])?(\[|\.)?/g;function Wa(i,e){i.seq.push(e),i.map[e.id]=e}function gp(i,e,t){const n=i.name,r=n.length;for(Is.lastIndex=0;;){const s=Is.exec(n),o=Is.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Wa(t,c===void 0?new dp(a,i,e):new pp(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new mp(a),Wa(t,h)),t=h}}}class Hr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);gp(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Xa(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const _p=37297;let xp=0;function vp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Ya=new Je;function Mp(i){at._getMatrix(Ya,at.workingColorSpace,i);const e=`mat3( ${Ya.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case Vr:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $a(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+vp(i.getShaderSource(e),a)}else return s}function Sp(i,e){const t=Mp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const bp={[ml]:"Linear",[gl]:"Reinhard",[_l]:"Cineon",[xl]:"ACESFilmic",[Ml]:"AgX",[Sl]:"Neutral",[vl]:"Custom"};function Ep(i,e){const t=bp[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nr=new F;function yp(){at.getLuminanceCoefficients(Nr);const i=Nr.x.toFixed(4),e=Nr.y.toFixed(4),t=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function wp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ap(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function er(i){return i!==""}function qa(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Za(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ro(i){return i.replace(Rp,Pp)}const Cp=new Map;function Pp(i,e){let t=Qe[e];if(t===void 0){const n=Cp.get(e);if(n!==void 0)t=Qe[n],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ro(t)}const Ip=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ka(i){return i.replace(Ip,Lp)}function Lp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ja(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const Dp={[Or]:"SHADOWMAP_TYPE_PCF",[Qi]:"SHADOWMAP_TYPE_VSM"};function Up(i){return Dp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Np={[ui]:"ENVMAP_TYPE_CUBE",[Ni]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE_UV"};function Fp(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Np[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Op={[Ni]:"ENVMAP_MODE_REFRACTION"};function Bp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Op[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const zp={[Kr]:"ENVMAP_BLENDING_MULTIPLY",[Sc]:"ENVMAP_BLENDING_MIX",[bc]:"ENVMAP_BLENDING_ADD"};function kp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":zp[i.combine]||"ENVMAP_BLENDING_NONE"}function Gp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Hp(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Up(t),c=Fp(t),u=Bp(t),h=kp(t),f=Gp(t),p=Tp(t),x=wp(s),v=r.createProgram();let m,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(er).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(er).join(`
`),d.length>0&&(d+=`
`)):(m=[ja(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),d=[ja(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Qe.tonemapping_pars_fragment:"",t.toneMapping!==_n?Ep("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Sp("linearToOutputTexel",t.outputColorSpace),yp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),o=Ro(o),o=qa(o,t),o=Za(o,t),a=Ro(a),a=qa(a,t),a=Za(a,t),o=Ka(o),a=Ka(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=y+m+o,R=y+d+a,C=Xa(r,r.VERTEX_SHADER,A),T=Xa(r,r.FRAGMENT_SHADER,R);r.attachShader(v,C),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(b){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(v)||"",k=r.getShaderInfoLog(C)||"",W=r.getShaderInfoLog(T)||"",H=D.trim(),K=k.trim(),V=W.trim();let re=!0,B=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,C,T);else{const $=$a(r,C,"vertex"),oe=$a(r,T,"fragment");ot("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+H+`
`+$+`
`+oe)}else H!==""?qe("WebGLProgram: Program Info Log:",H):(K===""||V==="")&&(B=!1);B&&(b.diagnostics={runnable:re,programLog:H,vertexShader:{log:K,prefix:m},fragmentShader:{log:V,prefix:d}})}r.deleteShader(C),r.deleteShader(T),O=new Hr(r,v),g=Ap(r,v)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let g;this.getAttributes=function(){return g===void 0&&P(this),g};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,_p)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let Vp=0;class Wp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xp(e),t.set(e,n)),n}}class Xp{constructor(e){this.id=Vp++,this.code=e,this.usedTimes=0}}function Yp(i,e,t,n,r,s,o){const a=new Yo,l=new Wp,c=new Set,u=[],h=new Map,f=r.logarithmicDepthBuffer;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(g){return c.add(g),g===0?"uv":`uv${g}`}function m(g,S,b,D,k){const W=D.fog,H=k.geometry,K=g.isMeshStandardMaterial?D.environment:null,V=(g.isMeshStandardMaterial?t:e).get(g.envMap||K),re=V&&V.mapping===jr?V.image.height:null,B=x[g.type];g.precision!==null&&(p=r.getMaxPrecision(g.precision),p!==g.precision&&qe("WebGLProgram.getParameters:",g.precision,"not supported, using",p,"instead."));const $=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,oe=$!==void 0?$.length:0;let G=0;H.morphAttributes.position!==void 0&&(G=1),H.morphAttributes.normal!==void 0&&(G=2),H.morphAttributes.color!==void 0&&(G=3);let ee,ge,Ee,q;if(B){const Y=fn[B];ee=Y.vertexShader,ge=Y.fragmentShader}else ee=g.vertexShader,ge=g.fragmentShader,l.update(g),Ee=l.getVertexShaderID(g),q=l.getFragmentShaderID(g);const Q=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),pe=k.isInstancedMesh===!0,de=k.isBatchedMesh===!0,Ue=!!g.map,tt=!!g.matcap,Ge=!!V,nt=!!g.aoMap,se=!!g.lightMap,_e=!!g.bumpMap,ye=!!g.normalMap,I=!!g.displacementMap,et=!!g.emissiveMap,$e=!!g.metalnessMap,Ke=!!g.roughnessMap,Ie=g.anisotropy>0,E=g.clearcoat>0,_=g.dispersion>0,U=g.iridescence>0,ne=g.sheen>0,ae=g.transmission>0,te=Ie&&!!g.anisotropyMap,Le=E&&!!g.clearcoatMap,ve=E&&!!g.clearcoatNormalMap,Ne=E&&!!g.clearcoatRoughnessMap,We=U&&!!g.iridescenceMap,he=U&&!!g.iridescenceThicknessMap,Me=ne&&!!g.sheenColorMap,De=ne&&!!g.sheenRoughnessMap,Oe=!!g.specularMap,Se=!!g.specularColorMap,Ze=!!g.specularIntensityMap,N=ae&&!!g.transmissionMap,Te=ae&&!!g.thicknessMap,me=!!g.gradientMap,Ce=!!g.alphaMap,ue=g.alphaTest>0,le=!!g.alphaHash,be=!!g.extensions;let w=_n;g.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(w=i.toneMapping);const Z={shaderID:B,shaderType:g.type,shaderName:g.name,vertexShader:ee,fragmentShader:ge,defines:g.defines,customVertexShaderID:Ee,customFragmentShaderID:q,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:p,batching:de,batchingColor:de&&k._colorsTexture!==null,instancing:pe,instancingColor:pe&&k.instanceColor!==null,instancingMorph:pe&&k.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Oi,alphaToCoverage:!!g.alphaToCoverage,map:Ue,matcap:tt,envMap:Ge,envMapMode:Ge&&V.mapping,envMapCubeUVHeight:re,aoMap:nt,lightMap:se,bumpMap:_e,normalMap:ye,displacementMap:I,emissiveMap:et,normalMapObjectSpace:ye&&g.normalMapType===Tc,normalMapTangentSpace:ye&&g.normalMapType===Go,metalnessMap:$e,roughnessMap:Ke,anisotropy:Ie,anisotropyMap:te,clearcoat:E,clearcoatMap:Le,clearcoatNormalMap:ve,clearcoatRoughnessMap:Ne,dispersion:_,iridescence:U,iridescenceMap:We,iridescenceThicknessMap:he,sheen:ne,sheenColorMap:Me,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:Se,specularIntensityMap:Ze,transmission:ae,transmissionMap:N,thicknessMap:Te,gradientMap:me,opaque:g.transparent===!1&&g.blending===Li&&g.alphaToCoverage===!1,alphaMap:Ce,alphaTest:ue,alphaHash:le,combine:g.combine,mapUv:Ue&&v(g.map.channel),aoMapUv:nt&&v(g.aoMap.channel),lightMapUv:se&&v(g.lightMap.channel),bumpMapUv:_e&&v(g.bumpMap.channel),normalMapUv:ye&&v(g.normalMap.channel),displacementMapUv:I&&v(g.displacementMap.channel),emissiveMapUv:et&&v(g.emissiveMap.channel),metalnessMapUv:$e&&v(g.metalnessMap.channel),roughnessMapUv:Ke&&v(g.roughnessMap.channel),anisotropyMapUv:te&&v(g.anisotropyMap.channel),clearcoatMapUv:Le&&v(g.clearcoatMap.channel),clearcoatNormalMapUv:ve&&v(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&v(g.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&v(g.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(g.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&v(g.sheenColorMap.channel),sheenRoughnessMapUv:De&&v(g.sheenRoughnessMap.channel),specularMapUv:Oe&&v(g.specularMap.channel),specularColorMapUv:Se&&v(g.specularColorMap.channel),specularIntensityMapUv:Ze&&v(g.specularIntensityMap.channel),transmissionMapUv:N&&v(g.transmissionMap.channel),thicknessMapUv:Te&&v(g.thicknessMap.channel),alphaMapUv:Ce&&v(g.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ye||Ie),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!H.attributes.uv&&(Ue||Ce),fog:!!W,useFog:g.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:g.flatShading===!0&&g.wireframe===!1,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ie,skinning:k.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:G,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:w,decodeVideoTexture:Ue&&g.map.isVideoTexture===!0&&at.getTransfer(g.map.colorSpace)===ht,decodeVideoTextureEmissive:et&&g.emissiveMap.isVideoTexture===!0&&at.getTransfer(g.emissiveMap.colorSpace)===ht,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ln,flipSided:g.side===Vt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:be&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&g.extensions.multiDraw===!0||de)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Z.vertexUv1s=c.has(1),Z.vertexUv2s=c.has(2),Z.vertexUv3s=c.has(3),c.clear(),Z}function d(g){const S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(const b in g.defines)S.push(b),S.push(g.defines[b]);return g.isRawShaderMaterial===!1&&(y(S,g),A(S,g),S.push(i.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function y(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapCubeUVHeight),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.morphAttributeCount),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function A(g,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),g.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),g.push(a.mask)}function R(g){const S=x[g.type];let b;if(S){const D=fn[S];b=Qc.clone(D.uniforms)}else b=g.uniforms;return b}function C(g,S){let b=h.get(S);return b!==void 0?++b.usedTimes:(b=new Hp(i,S,g,s),u.push(b),h.set(S,b)),b}function T(g){if(--g.usedTimes===0){const S=u.indexOf(g);u[S]=u[u.length-1],u.pop(),h.delete(g.cacheKey),g.destroy()}}function P(g){l.remove(g)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:R,acquireProgram:C,releaseProgram:T,releaseShaderCache:P,programs:u,dispose:O}}function $p(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function qp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ja(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Qa(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,p,x,v,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:x,renderOrder:h.renderOrder,z:v,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=x,d.renderOrder=h.renderOrder,d.z=v,d.group=m),e++,d}function a(h,f,p,x,v,m){const d=o(h,f,p,x,v,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,x,v,m){const d=o(h,f,p,x,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||qp),n.length>1&&n.sort(f||Ja),r.length>1&&r.sort(f||Ja)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Zp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Qa,i.set(n,[o])):r>=s.length?(o=new Qa,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Kp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new je};break;case"SpotLight":t={position:new F,direction:new F,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function jp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Jp=0;function Qp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function em(i){const e=new Kp,t=jp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const r=new F,s=new vt,o=new vt;function a(c){let u=0,h=0,f=0;for(let g=0;g<9;g++)n.probe[g].set(0,0,0);let p=0,x=0,v=0,m=0,d=0,y=0,A=0,R=0,C=0,T=0,P=0;c.sort(Qp);for(let g=0,S=c.length;g<S;g++){const b=c[g],D=b.color,k=b.intensity,W=b.distance;let H=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===Fi?H=b.shadow.map.texture:H=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)u+=D.r*k,h+=D.g*k,f+=D.b*k;else if(b.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(b.sh.coefficients[K],k);P++}else if(b.isDirectionalLight){const K=e.get(b);if(K.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const V=b.shadow,re=t.get(b);re.shadowIntensity=V.intensity,re.shadowBias=V.bias,re.shadowNormalBias=V.normalBias,re.shadowRadius=V.radius,re.shadowMapSize=V.mapSize,n.directionalShadow[p]=re,n.directionalShadowMap[p]=H,n.directionalShadowMatrix[p]=b.shadow.matrix,y++}n.directional[p]=K,p++}else if(b.isSpotLight){const K=e.get(b);K.position.setFromMatrixPosition(b.matrixWorld),K.color.copy(D).multiplyScalar(k),K.distance=W,K.coneCos=Math.cos(b.angle),K.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),K.decay=b.decay,n.spot[v]=K;const V=b.shadow;if(b.map&&(n.spotLightMap[C]=b.map,C++,V.updateMatrices(b),b.castShadow&&T++),n.spotLightMatrix[v]=V.matrix,b.castShadow){const re=t.get(b);re.shadowIntensity=V.intensity,re.shadowBias=V.bias,re.shadowNormalBias=V.normalBias,re.shadowRadius=V.radius,re.shadowMapSize=V.mapSize,n.spotShadow[v]=re,n.spotShadowMap[v]=H,R++}v++}else if(b.isRectAreaLight){const K=e.get(b);K.color.copy(D).multiplyScalar(k),K.halfWidth.set(b.width*.5,0,0),K.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=K,m++}else if(b.isPointLight){const K=e.get(b);if(K.color.copy(b.color).multiplyScalar(b.intensity),K.distance=b.distance,K.decay=b.decay,b.castShadow){const V=b.shadow,re=t.get(b);re.shadowIntensity=V.intensity,re.shadowBias=V.bias,re.shadowNormalBias=V.normalBias,re.shadowRadius=V.radius,re.shadowMapSize=V.mapSize,re.shadowCameraNear=V.camera.near,re.shadowCameraFar=V.camera.far,n.pointShadow[x]=re,n.pointShadowMap[x]=H,n.pointShadowMatrix[x]=b.shadow.matrix,A++}n.point[x]=K,x++}else if(b.isHemisphereLight){const K=e.get(b);K.skyColor.copy(b.color).multiplyScalar(k),K.groundColor.copy(b.groundColor).multiplyScalar(k),n.hemi[d]=K,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const O=n.hash;(O.directionalLength!==p||O.pointLength!==x||O.spotLength!==v||O.rectAreaLength!==m||O.hemiLength!==d||O.numDirectionalShadows!==y||O.numPointShadows!==A||O.numSpotShadows!==R||O.numSpotMaps!==C||O.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=x,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=R+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,O.directionalLength=p,O.pointLength=x,O.spotLength=v,O.rectAreaLength=m,O.hemiLength=d,O.numDirectionalShadows=y,O.numPointShadows=A,O.numSpotShadows=R,O.numSpotMaps=C,O.numLightProbes=P,n.version=Jp++)}function l(c,u){let h=0,f=0,p=0,x=0,v=0;const m=u.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){const A=c[d];if(A.isDirectionalLight){const R=n.directional[h];R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),h++}else if(A.isSpotLight){const R=n.spot[p];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),p++}else if(A.isRectAreaLight){const R=n.rectArea[x];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(m),o.identity(),s.copy(A.matrixWorld),s.premultiply(m),o.extractRotation(s),R.halfWidth.set(A.width*.5,0,0),R.halfHeight.set(0,A.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),x++}else if(A.isPointLight){const R=n.point[f];R.position.setFromMatrixPosition(A.matrixWorld),R.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){const R=n.hemi[v];R.direction.setFromMatrixPosition(A.matrixWorld),R.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function el(i){const e=new em(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function tm(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new el(i),e.set(r,[a])):s>=o.length?(a=new el(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const nm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,im=`uniform sampler2D shadow_pass;
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
}`,rm=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],sm=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],tl=new vt,ji=new F,Ls=new F;function om(i,e,t){let n=new $o;const r=new lt,s=new lt,o=new bt,a=new du,l=new pu,c={},u=t.maxTextureSize,h={[Zn]:Vt,[Vt]:Zn,[Ln]:Ln},f=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:nm,fragmentShader:im}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new bn;x.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Pt(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Or;let d=this.type;this.render=function(T,P,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;T.type===nc&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),T.type=Or);const g=i.getRenderTarget(),S=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Un),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const k=d!==this.type;k&&P.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(H=>H.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,H=T.length;W<H;W++){const K=T[W],V=K.shadow;if(V===void 0){qe("WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const re=V.getFrameExtents();if(r.multiply(re),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,V.mapSize.y=s.y)),V.map===null||k===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Qi){if(K.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new xn(r.x,r.y,{format:Fi,type:On,minFilter:Et,magFilter:Et,generateMipmaps:!1}),V.map.texture.name=K.name+".shadowMap",V.map.depthTexture=new cr(r.x,r.y,dn),V.map.depthTexture.name=K.name+".shadowMapDepth",V.map.depthTexture.format=Bn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Lt,V.map.depthTexture.magFilter=Lt}else{K.isPointLight?(V.map=new zl(r.x),V.map.depthTexture=new uu(r.x,Mn)):(V.map=new xn(r.x,r.y),V.map.depthTexture=new cr(r.x,r.y,Mn)),V.map.depthTexture.name=K.name+".shadowMap",V.map.depthTexture.format=Bn;const $=i.state.buffers.depth.getReversed();this.type===Or?(V.map.depthTexture.compareFunction=$?Vo:Ho,V.map.depthTexture.minFilter=Et,V.map.depthTexture.magFilter=Et):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Lt,V.map.depthTexture.magFilter=Lt)}V.camera.updateProjectionMatrix()}const B=V.map.isWebGLCubeRenderTarget?6:1;for(let $=0;$<B;$++){if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,$),i.clear();else{$===0&&(i.setRenderTarget(V.map),i.clear());const oe=V.getViewport($);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),D.viewport(o)}if(K.isPointLight){const oe=V.camera,G=V.matrix,ee=K.distance||oe.far;ee!==oe.far&&(oe.far=ee,oe.updateProjectionMatrix()),ji.setFromMatrixPosition(K.matrixWorld),oe.position.copy(ji),Ls.copy(oe.position),Ls.add(rm[$]),oe.up.copy(sm[$]),oe.lookAt(Ls),oe.updateMatrixWorld(),G.makeTranslation(-ji.x,-ji.y,-ji.z),tl.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),V._frustum.setFromProjectionMatrix(tl,oe.coordinateSystem,oe.reversedDepth)}else V.updateMatrices(K);n=V.getFrustum(),R(P,O,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===Qi&&y(V,O),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(g,S,b)};function y(T,P){const O=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new xn(r.x,r.y,{format:Fi,type:On})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,O,f,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,O,p,v,null)}function A(T,P,O,g){let S=null;const b=O.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)S=b;else if(S=O.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const D=S.uuid,k=P.uuid;let W=c[D];W===void 0&&(W={},c[D]=W);let H=W[k];H===void 0&&(H=S.clone(),W[k]=H,P.addEventListener("dispose",C)),S=H}if(S.visible=P.visible,S.wireframe=P.wireframe,g===Qi?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:h[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,O.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const D=i.properties.get(S);D.light=O}return S}function R(T,P,O,g,S){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Qi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld);const k=e.update(T),W=T.material;if(Array.isArray(W)){const H=k.groups;for(let K=0,V=H.length;K<V;K++){const re=H[K],B=W[re.materialIndex];if(B&&B.visible){const $=A(T,B,g,S);T.onBeforeShadow(i,T,P,O,k,$,re),i.renderBufferDirect(O,null,k,$,T,re),T.onAfterShadow(i,T,P,O,k,$,re)}}}else if(W.visible){const H=A(T,W,g,S);T.onBeforeShadow(i,T,P,O,k,H,null),i.renderBufferDirect(O,null,k,H,T,null),T.onAfterShadow(i,T,P,O,k,H,null)}}const D=T.children;for(let k=0,W=D.length;k<W;k++)R(D[k],P,O,g,S)}function C(T){T.target.removeEventListener("dispose",C);for(const O in c){const g=c[O],S=T.target.uuid;S in g&&(g[S].dispose(),delete g[S])}}}const am={[Fs]:Os,[Bs]:Gs,[zs]:Hs,[Ui]:ks,[Os]:Fs,[Gs]:Bs,[Hs]:zs,[ks]:Ui};function lm(i,e){function t(){let N=!1;const Te=new bt;let me=null;const Ce=new bt(0,0,0,0);return{setMask:function(ue){me!==ue&&!N&&(i.colorMask(ue,ue,ue,ue),me=ue)},setLocked:function(ue){N=ue},setClear:function(ue,le,be,w,Z){Z===!0&&(ue*=w,le*=w,be*=w),Te.set(ue,le,be,w),Ce.equals(Te)===!1&&(i.clearColor(ue,le,be,w),Ce.copy(Te))},reset:function(){N=!1,me=null,Ce.set(-1,0,0,0)}}}function n(){let N=!1,Te=!1,me=null,Ce=null,ue=null;return{setReversed:function(le){if(Te!==le){const be=e.get("EXT_clip_control");le?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),Te=le;const w=ue;ue=null,this.setClear(w)}},getReversed:function(){return Te},setTest:function(le){le?Q(i.DEPTH_TEST):ie(i.DEPTH_TEST)},setMask:function(le){me!==le&&!N&&(i.depthMask(le),me=le)},setFunc:function(le){if(Te&&(le=am[le]),Ce!==le){switch(le){case Fs:i.depthFunc(i.NEVER);break;case Os:i.depthFunc(i.ALWAYS);break;case Bs:i.depthFunc(i.LESS);break;case Ui:i.depthFunc(i.LEQUAL);break;case zs:i.depthFunc(i.EQUAL);break;case ks:i.depthFunc(i.GEQUAL);break;case Gs:i.depthFunc(i.GREATER);break;case Hs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ce=le}},setLocked:function(le){N=le},setClear:function(le){ue!==le&&(Te&&(le=1-le),i.clearDepth(le),ue=le)},reset:function(){N=!1,me=null,Ce=null,ue=null,Te=!1}}}function r(){let N=!1,Te=null,me=null,Ce=null,ue=null,le=null,be=null,w=null,Z=null;return{setTest:function(Y){N||(Y?Q(i.STENCIL_TEST):ie(i.STENCIL_TEST))},setMask:function(Y){Te!==Y&&!N&&(i.stencilMask(Y),Te=Y)},setFunc:function(Y,xe,fe){(me!==Y||Ce!==xe||ue!==fe)&&(i.stencilFunc(Y,xe,fe),me=Y,Ce=xe,ue=fe)},setOp:function(Y,xe,fe){(le!==Y||be!==xe||w!==fe)&&(i.stencilOp(Y,xe,fe),le=Y,be=xe,w=fe)},setLocked:function(Y){N=Y},setClear:function(Y){Z!==Y&&(i.clearStencil(Y),Z=Y)},reset:function(){N=!1,Te=null,me=null,Ce=null,ue=null,le=null,be=null,w=null,Z=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],x=null,v=!1,m=null,d=null,y=null,A=null,R=null,C=null,T=null,P=new je(0,0,0),O=0,g=!1,S=null,b=null,D=null,k=null,W=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,V=0;const re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(re)[1]),K=V>=1):re.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),K=V>=2);let B=null,$={};const oe=i.getParameter(i.SCISSOR_BOX),G=i.getParameter(i.VIEWPORT),ee=new bt().fromArray(oe),ge=new bt().fromArray(G);function Ee(N,Te,me,Ce){const ue=new Uint8Array(4),le=i.createTexture();i.bindTexture(N,le),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<me;be++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(Te+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return le}const q={};q[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(Ui),_e(!1),ye(ia),Q(i.CULL_FACE),nt(Un);function Q(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function ie(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function pe(N,Te){return h[N]!==Te?(i.bindFramebuffer(N,Te),h[N]=Te,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Te),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function de(N,Te){let me=p,Ce=!1;if(N){me=f.get(Te),me===void 0&&(me=[],f.set(Te,me));const ue=N.textures;if(me.length!==ue.length||me[0]!==i.COLOR_ATTACHMENT0){for(let le=0,be=ue.length;le<be;le++)me[le]=i.COLOR_ATTACHMENT0+le;me.length=ue.length,Ce=!0}}else me[0]!==i.BACK&&(me[0]=i.BACK,Ce=!0);Ce&&i.drawBuffers(me)}function Ue(N){return x!==N?(i.useProgram(N),x=N,!0):!1}const tt={[oi]:i.FUNC_ADD,[rc]:i.FUNC_SUBTRACT,[sc]:i.FUNC_REVERSE_SUBTRACT};tt[oc]=i.MIN,tt[ac]=i.MAX;const Ge={[lc]:i.ZERO,[cc]:i.ONE,[uc]:i.SRC_COLOR,[Us]:i.SRC_ALPHA,[gc]:i.SRC_ALPHA_SATURATE,[pc]:i.DST_COLOR,[fc]:i.DST_ALPHA,[hc]:i.ONE_MINUS_SRC_COLOR,[Ns]:i.ONE_MINUS_SRC_ALPHA,[mc]:i.ONE_MINUS_DST_COLOR,[dc]:i.ONE_MINUS_DST_ALPHA,[_c]:i.CONSTANT_COLOR,[xc]:i.ONE_MINUS_CONSTANT_COLOR,[vc]:i.CONSTANT_ALPHA,[Mc]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(N,Te,me,Ce,ue,le,be,w,Z,Y){if(N===Un){v===!0&&(ie(i.BLEND),v=!1);return}if(v===!1&&(Q(i.BLEND),v=!0),N!==ic){if(N!==m||Y!==g){if((d!==oi||R!==oi)&&(i.blendEquation(i.FUNC_ADD),d=oi,R=oi),Y)switch(N){case Li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ra:i.blendFunc(i.ONE,i.ONE);break;case sa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ot("WebGLState: Invalid blending: ",N);break}else switch(N){case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ra:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sa:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oa:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",N);break}y=null,A=null,C=null,T=null,P.set(0,0,0),O=0,m=N,g=Y}return}ue=ue||Te,le=le||me,be=be||Ce,(Te!==d||ue!==R)&&(i.blendEquationSeparate(tt[Te],tt[ue]),d=Te,R=ue),(me!==y||Ce!==A||le!==C||be!==T)&&(i.blendFuncSeparate(Ge[me],Ge[Ce],Ge[le],Ge[be]),y=me,A=Ce,C=le,T=be),(w.equals(P)===!1||Z!==O)&&(i.blendColor(w.r,w.g,w.b,Z),P.copy(w),O=Z),m=N,g=!1}function se(N,Te){N.side===Ln?ie(i.CULL_FACE):Q(i.CULL_FACE);let me=N.side===Vt;Te&&(me=!me),_e(me),N.blending===Li&&N.transparent===!1?nt(Un):nt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const Ce=N.stencilWrite;a.setTest(Ce),Ce&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),et(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function _e(N){S!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),S=N)}function ye(N){N!==ec?(Q(i.CULL_FACE),N!==b&&(N===ia?i.cullFace(i.BACK):N===tc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ie(i.CULL_FACE),b=N}function I(N){N!==D&&(K&&i.lineWidth(N),D=N)}function et(N,Te,me){N?(Q(i.POLYGON_OFFSET_FILL),(k!==Te||W!==me)&&(i.polygonOffset(Te,me),k=Te,W=me)):ie(i.POLYGON_OFFSET_FILL)}function $e(N){N?Q(i.SCISSOR_TEST):ie(i.SCISSOR_TEST)}function Ke(N){N===void 0&&(N=i.TEXTURE0+H-1),B!==N&&(i.activeTexture(N),B=N)}function Ie(N,Te,me){me===void 0&&(B===null?me=i.TEXTURE0+H-1:me=B);let Ce=$[me];Ce===void 0&&(Ce={type:void 0,texture:void 0},$[me]=Ce),(Ce.type!==N||Ce.texture!==Te)&&(B!==me&&(i.activeTexture(me),B=me),i.bindTexture(N,Te||q[N]),Ce.type=N,Ce.texture=Te)}function E(){const N=$[B];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(N){ot("WebGLState:",N)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(N){ot("WebGLState:",N)}}function ne(){try{i.texSubImage2D(...arguments)}catch(N){ot("WebGLState:",N)}}function ae(){try{i.texSubImage3D(...arguments)}catch(N){ot("WebGLState:",N)}}function te(){try{i.compressedTexSubImage2D(...arguments)}catch(N){ot("WebGLState:",N)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(N){ot("WebGLState:",N)}}function ve(){try{i.texStorage2D(...arguments)}catch(N){ot("WebGLState:",N)}}function Ne(){try{i.texStorage3D(...arguments)}catch(N){ot("WebGLState:",N)}}function We(){try{i.texImage2D(...arguments)}catch(N){ot("WebGLState:",N)}}function he(){try{i.texImage3D(...arguments)}catch(N){ot("WebGLState:",N)}}function Me(N){ee.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ee.copy(N))}function De(N){ge.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ge.copy(N))}function Oe(N,Te){let me=c.get(Te);me===void 0&&(me=new WeakMap,c.set(Te,me));let Ce=me.get(N);Ce===void 0&&(Ce=i.getUniformBlockIndex(Te,N.name),me.set(N,Ce))}function Se(N,Te){const Ce=c.get(Te).get(N);l.get(Te)!==Ce&&(i.uniformBlockBinding(Te,Ce,N.__bindingPointIndex),l.set(Te,Ce))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},B=null,$={},h={},f=new WeakMap,p=[],x=null,v=!1,m=null,d=null,y=null,A=null,R=null,C=null,T=null,P=new je(0,0,0),O=0,g=!1,S=null,b=null,D=null,k=null,W=null,ee.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:ie,bindFramebuffer:pe,drawBuffers:de,useProgram:Ue,setBlending:nt,setMaterial:se,setFlipSided:_e,setCullFace:ye,setLineWidth:I,setPolygonOffset:et,setScissorTest:$e,activeTexture:Ke,bindTexture:Ie,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:U,texImage2D:We,texImage3D:he,updateUBOMapping:Oe,uniformBlockBinding:Se,texStorage2D:ve,texStorage3D:Ne,texSubImage2D:ne,texSubImage3D:ae,compressedTexSubImage2D:te,compressedTexSubImage3D:Le,scissor:Me,viewport:De,reset:Ze}}function cm(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,_){return p?new OffscreenCanvas(E,_):Xr("canvas")}function v(E,_,U){let ne=1;const ae=Ie(E);if((ae.width>U||ae.height>U)&&(ne=U/Math.max(ae.width,ae.height)),ne<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const te=Math.floor(ne*ae.width),Le=Math.floor(ne*ae.height);h===void 0&&(h=x(te,Le));const ve=_?x(te,Le):h;return ve.width=te,ve.height=Le,ve.getContext("2d").drawImage(E,0,0,te,Le),qe("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+te+"x"+Le+")."),ve}else return"data"in E&&qe("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),E;return E}function m(E){return E.generateMipmaps}function d(E){i.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(E,_,U,ne,ae=!1){if(E!==null){if(i[E]!==void 0)return i[E];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let te=_;if(_===i.RED&&(U===i.FLOAT&&(te=i.R32F),U===i.HALF_FLOAT&&(te=i.R16F),U===i.UNSIGNED_BYTE&&(te=i.R8)),_===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(te=i.R8UI),U===i.UNSIGNED_SHORT&&(te=i.R16UI),U===i.UNSIGNED_INT&&(te=i.R32UI),U===i.BYTE&&(te=i.R8I),U===i.SHORT&&(te=i.R16I),U===i.INT&&(te=i.R32I)),_===i.RG&&(U===i.FLOAT&&(te=i.RG32F),U===i.HALF_FLOAT&&(te=i.RG16F),U===i.UNSIGNED_BYTE&&(te=i.RG8)),_===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(te=i.RG8UI),U===i.UNSIGNED_SHORT&&(te=i.RG16UI),U===i.UNSIGNED_INT&&(te=i.RG32UI),U===i.BYTE&&(te=i.RG8I),U===i.SHORT&&(te=i.RG16I),U===i.INT&&(te=i.RG32I)),_===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(te=i.RGB8UI),U===i.UNSIGNED_SHORT&&(te=i.RGB16UI),U===i.UNSIGNED_INT&&(te=i.RGB32UI),U===i.BYTE&&(te=i.RGB8I),U===i.SHORT&&(te=i.RGB16I),U===i.INT&&(te=i.RGB32I)),_===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),U===i.UNSIGNED_INT&&(te=i.RGBA32UI),U===i.BYTE&&(te=i.RGBA8I),U===i.SHORT&&(te=i.RGBA16I),U===i.INT&&(te=i.RGBA32I)),_===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),_===i.RGBA){const Le=ae?Vr:at.getTransfer(ne);U===i.FLOAT&&(te=i.RGBA32F),U===i.HALF_FLOAT&&(te=i.RGBA16F),U===i.UNSIGNED_BYTE&&(te=Le===ht?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function R(E,_){let U;return E?_===null||_===Mn||_===ar?U=i.DEPTH24_STENCIL8:_===dn?U=i.DEPTH32F_STENCIL8:_===or&&(U=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Mn||_===ar?U=i.DEPTH_COMPONENT24:_===dn?U=i.DEPTH_COMPONENT32F:_===or&&(U=i.DEPTH_COMPONENT16),U}function C(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Lt&&E.minFilter!==Et?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function T(E){const _=E.target;_.removeEventListener("dispose",T),O(_),_.isVideoTexture&&u.delete(_)}function P(E){const _=E.target;_.removeEventListener("dispose",P),S(_)}function O(E){const _=n.get(E);if(_.__webglInit===void 0)return;const U=E.source,ne=f.get(U);if(ne){const ae=ne[_.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&g(E),Object.keys(ne).length===0&&f.delete(U)}n.remove(E)}function g(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const U=E.source,ne=f.get(U);delete ne[_.__cacheKey],o.memory.textures--}function S(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(_.__webglFramebuffer[ne]))for(let ae=0;ae<_.__webglFramebuffer[ne].length;ae++)i.deleteFramebuffer(_.__webglFramebuffer[ne][ae]);else i.deleteFramebuffer(_.__webglFramebuffer[ne]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[ne])}else{if(Array.isArray(_.__webglFramebuffer))for(let ne=0;ne<_.__webglFramebuffer.length;ne++)i.deleteFramebuffer(_.__webglFramebuffer[ne]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let ne=0;ne<_.__webglColorRenderbuffer.length;ne++)_.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[ne]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const U=E.textures;for(let ne=0,ae=U.length;ne<ae;ne++){const te=n.get(U[ne]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(U[ne])}n.remove(E)}let b=0;function D(){b=0}function k(){const E=b;return E>=r.maxTextures&&qe("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),b+=1,E}function W(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function H(E,_){const U=n.get(E);if(E.isVideoTexture&&$e(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){const ne=E.image;if(ne===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{q(U,E,_);return}}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+_)}function K(E,_){const U=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){q(U,E,_);return}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+_)}function V(E,_){const U=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){q(U,E,_);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+_)}function re(E,_){const U=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&U.__version!==E.version){Q(U,E,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+_)}const B={[sr]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[Xs]:i.MIRRORED_REPEAT},$={[Lt]:i.NEAREST,[Ec]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[Et]:i.LINEAR,[ts]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},oe={[wc]:i.NEVER,[Ic]:i.ALWAYS,[Ac]:i.LESS,[Ho]:i.LEQUAL,[Rc]:i.EQUAL,[Vo]:i.GEQUAL,[Cc]:i.GREATER,[Pc]:i.NOTEQUAL};function G(E,_){if(_.type===dn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Et||_.magFilter===ts||_.magFilter===gr||_.magFilter===li||_.minFilter===Et||_.minFilter===ts||_.minFilter===gr||_.minFilter===li)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,B[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,B[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,B[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,$[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,$[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,oe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Lt||_.minFilter!==gr&&_.minFilter!==li||_.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ee(E,_){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",T));const ne=_.source;let ae=f.get(ne);ae===void 0&&(ae={},f.set(ne,ae));const te=W(_);if(te!==E.__cacheKey){ae[te]===void 0&&(ae[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ae[te].usedTimes++;const Le=ae[E.__cacheKey];Le!==void 0&&(ae[E.__cacheKey].usedTimes--,Le.usedTimes===0&&g(_)),E.__cacheKey=te,E.__webglTexture=ae[te].texture}return U}function ge(E,_,U){return Math.floor(Math.floor(E/U)/_)}function Ee(E,_,U,ne){const te=E.updateRanges;if(te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,U,ne,_.data);else{te.sort((he,Me)=>he.start-Me.start);let Le=0;for(let he=1;he<te.length;he++){const Me=te[Le],De=te[he],Oe=Me.start+Me.count,Se=ge(De.start,_.width,4),Ze=ge(Me.start,_.width,4);De.start<=Oe+1&&Se===Ze&&ge(De.start+De.count-1,_.width,4)===Se?Me.count=Math.max(Me.count,De.start+De.count-Me.start):(++Le,te[Le]=De)}te.length=Le+1;const ve=i.getParameter(i.UNPACK_ROW_LENGTH),Ne=i.getParameter(i.UNPACK_SKIP_PIXELS),We=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let he=0,Me=te.length;he<Me;he++){const De=te[he],Oe=Math.floor(De.start/4),Se=Math.ceil(De.count/4),Ze=Oe%_.width,N=Math.floor(Oe/_.width),Te=Se,me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,Ze,N,Te,me,U,ne,_.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ve),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,We)}}function q(E,_,U){let ne=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ne=i.TEXTURE_3D);const ae=ee(E,_),te=_.source;t.bindTexture(ne,E.__webglTexture,i.TEXTURE0+U);const Le=n.get(te);if(te.version!==Le.__version||ae===!0){t.activeTexture(i.TEXTURE0+U);const ve=at.getPrimaries(at.workingColorSpace),Ne=_.colorSpace===Yn?null:at.getPrimaries(_.colorSpace),We=_.colorSpace===Yn||ve===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let he=v(_.image,!1,r.maxTextureSize);he=Ke(_,he);const Me=s.convert(_.format,_.colorSpace),De=s.convert(_.type);let Oe=A(_.internalFormat,Me,De,_.colorSpace,_.isVideoTexture);G(ne,_);let Se;const Ze=_.mipmaps,N=_.isVideoTexture!==!0,Te=Le.__version===void 0||ae===!0,me=te.dataReady,Ce=C(_,he);if(_.isDepthTexture)Oe=R(_.format===ci,_.type),Te&&(N?t.texStorage2D(i.TEXTURE_2D,1,Oe,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,Oe,he.width,he.height,0,Me,De,null));else if(_.isDataTexture)if(Ze.length>0){N&&Te&&t.texStorage2D(i.TEXTURE_2D,Ce,Oe,Ze[0].width,Ze[0].height);for(let ue=0,le=Ze.length;ue<le;ue++)Se=Ze[ue],N?me&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Se.width,Se.height,Me,De,Se.data):t.texImage2D(i.TEXTURE_2D,ue,Oe,Se.width,Se.height,0,Me,De,Se.data);_.generateMipmaps=!1}else N?(Te&&t.texStorage2D(i.TEXTURE_2D,Ce,Oe,he.width,he.height),me&&Ee(_,he,Me,De)):t.texImage2D(i.TEXTURE_2D,0,Oe,he.width,he.height,0,Me,De,he.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){N&&Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Oe,Ze[0].width,Ze[0].height,he.depth);for(let ue=0,le=Ze.length;ue<le;ue++)if(Se=Ze[ue],_.format!==ln)if(Me!==null)if(N){if(me)if(_.layerUpdates.size>0){const be=La(Se.width,Se.height,_.format,_.type);for(const w of _.layerUpdates){const Z=Se.data.subarray(w*be/Se.data.BYTES_PER_ELEMENT,(w+1)*be/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,w,Se.width,Se.height,1,Me,Z)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Se.width,Se.height,he.depth,Me,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,Oe,Se.width,Se.height,he.depth,0,Se.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Se.width,Se.height,he.depth,Me,De,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,Oe,Se.width,Se.height,he.depth,0,Me,De,Se.data)}else{N&&Te&&t.texStorage2D(i.TEXTURE_2D,Ce,Oe,Ze[0].width,Ze[0].height);for(let ue=0,le=Ze.length;ue<le;ue++)Se=Ze[ue],_.format!==ln?Me!==null?N?me&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,Oe,Se.width,Se.height,0,Se.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?me&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Se.width,Se.height,Me,De,Se.data):t.texImage2D(i.TEXTURE_2D,ue,Oe,Se.width,Se.height,0,Me,De,Se.data)}else if(_.isDataArrayTexture)if(N){if(Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Oe,he.width,he.height,he.depth),me)if(_.layerUpdates.size>0){const ue=La(he.width,he.height,_.format,_.type);for(const le of _.layerUpdates){const be=he.data.subarray(le*ue/he.data.BYTES_PER_ELEMENT,(le+1)*ue/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,he.width,he.height,1,Me,De,be)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Me,De,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,he.width,he.height,he.depth,0,Me,De,he.data);else if(_.isData3DTexture)N?(Te&&t.texStorage3D(i.TEXTURE_3D,Ce,Oe,he.width,he.height,he.depth),me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Me,De,he.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,he.width,he.height,he.depth,0,Me,De,he.data);else if(_.isFramebufferTexture){if(Te)if(N)t.texStorage2D(i.TEXTURE_2D,Ce,Oe,he.width,he.height);else{let ue=he.width,le=he.height;for(let be=0;be<Ce;be++)t.texImage2D(i.TEXTURE_2D,be,Oe,ue,le,0,Me,De,null),ue>>=1,le>>=1}}else if(Ze.length>0){if(N&&Te){const ue=Ie(Ze[0]);t.texStorage2D(i.TEXTURE_2D,Ce,Oe,ue.width,ue.height)}for(let ue=0,le=Ze.length;ue<le;ue++)Se=Ze[ue],N?me&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Me,De,Se):t.texImage2D(i.TEXTURE_2D,ue,Oe,Me,De,Se);_.generateMipmaps=!1}else if(N){if(Te){const ue=Ie(he);t.texStorage2D(i.TEXTURE_2D,Ce,Oe,ue.width,ue.height)}me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,De,he)}else t.texImage2D(i.TEXTURE_2D,0,Oe,Me,De,he);m(_)&&d(ne),Le.__version=te.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Q(E,_,U){if(_.image.length!==6)return;const ne=ee(E,_),ae=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+U);const te=n.get(ae);if(ae.version!==te.__version||ne===!0){t.activeTexture(i.TEXTURE0+U);const Le=at.getPrimaries(at.workingColorSpace),ve=_.colorSpace===Yn?null:at.getPrimaries(_.colorSpace),Ne=_.colorSpace===Yn||Le===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const We=_.isCompressedTexture||_.image[0].isCompressedTexture,he=_.image[0]&&_.image[0].isDataTexture,Me=[];for(let le=0;le<6;le++)!We&&!he?Me[le]=v(_.image[le],!0,r.maxCubemapSize):Me[le]=he?_.image[le].image:_.image[le],Me[le]=Ke(_,Me[le]);const De=Me[0],Oe=s.convert(_.format,_.colorSpace),Se=s.convert(_.type),Ze=A(_.internalFormat,Oe,Se,_.colorSpace),N=_.isVideoTexture!==!0,Te=te.__version===void 0||ne===!0,me=ae.dataReady;let Ce=C(_,De);G(i.TEXTURE_CUBE_MAP,_);let ue;if(We){N&&Te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Ze,De.width,De.height);for(let le=0;le<6;le++){ue=Me[le].mipmaps;for(let be=0;be<ue.length;be++){const w=ue[be];_.format!==ln?Oe!==null?N?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,0,0,w.width,w.height,Oe,w.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,Ze,w.width,w.height,0,w.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,0,0,w.width,w.height,Oe,Se,w.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,Ze,w.width,w.height,0,Oe,Se,w.data)}}}else{if(ue=_.mipmaps,N&&Te){ue.length>0&&Ce++;const le=Ie(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Ze,le.width,le.height)}for(let le=0;le<6;le++)if(he){N?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Me[le].width,Me[le].height,Oe,Se,Me[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ze,Me[le].width,Me[le].height,0,Oe,Se,Me[le].data);for(let be=0;be<ue.length;be++){const Z=ue[be].image[le].image;N?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,0,0,Z.width,Z.height,Oe,Se,Z.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,Ze,Z.width,Z.height,0,Oe,Se,Z.data)}}else{N?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Oe,Se,Me[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ze,Oe,Se,Me[le]);for(let be=0;be<ue.length;be++){const w=ue[be];N?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,0,0,Oe,Se,w.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,Ze,Oe,Se,w.image[le])}}}m(_)&&d(i.TEXTURE_CUBE_MAP),te.__version=ae.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ie(E,_,U,ne,ae,te){const Le=s.convert(U.format,U.colorSpace),ve=s.convert(U.type),Ne=A(U.internalFormat,Le,ve,U.colorSpace),We=n.get(_),he=n.get(U);if(he.__renderTarget=_,!We.__hasExternalTextures){const Me=Math.max(1,_.width>>te),De=Math.max(1,_.height>>te);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,te,Ne,Me,De,_.depth,0,Le,ve,null):t.texImage2D(ae,te,Ne,Me,De,0,Le,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),et(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ae,he.__webglTexture,0,I(_)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,ae,he.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(E,_,U){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){const ne=_.depthTexture,ae=ne&&ne.isDepthTexture?ne.type:null,te=R(_.stencilBuffer,ae),Le=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;et(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(_),te,_.width,_.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(_),te,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,te,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,E)}else{const ne=_.textures;for(let ae=0;ae<ne.length;ae++){const te=ne[ae],Le=s.convert(te.format,te.colorSpace),ve=s.convert(te.type),Ne=A(te.internalFormat,Le,ve,te.colorSpace);et(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(_),Ne,_.width,_.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(_),Ne,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(E,_,U){const ne=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=n.get(_.depthTexture);if(ae.__renderTarget=_,(!ae.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ne){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,_.depthTexture.addEventListener("dispose",T)),ae.__webglTexture===void 0){ae.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),G(i.TEXTURE_CUBE_MAP,_.depthTexture);const We=s.convert(_.depthTexture.format),he=s.convert(_.depthTexture.type);let Me;_.depthTexture.format===Bn?Me=i.DEPTH_COMPONENT24:_.depthTexture.format===ci&&(Me=i.DEPTH24_STENCIL8);for(let De=0;De<6;De++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Me,_.width,_.height,0,We,he,null)}}else H(_.depthTexture,0);const te=ae.__webglTexture,Le=I(_),ve=ne?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,Ne=_.depthTexture.format===ci?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Bn)et(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ne,ve,te,0,Le):i.framebufferTexture2D(i.FRAMEBUFFER,Ne,ve,te,0);else if(_.depthTexture.format===ci)et(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ne,ve,te,0,Le):i.framebufferTexture2D(i.FRAMEBUFFER,Ne,ve,te,0);else throw new Error("Unknown depthTexture format")}function Ue(E){const _=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const ne=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ne){const ae=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ne.removeEventListener("dispose",ae)};ne.addEventListener("dispose",ae),_.__depthDisposeCallback=ae}_.__boundDepthTexture=ne}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(U)for(let ne=0;ne<6;ne++)de(_.__webglFramebuffer[ne],E,ne);else{const ne=E.texture.mipmaps;ne&&ne.length>0?de(_.__webglFramebuffer[0],E,0):de(_.__webglFramebuffer,E,0)}else if(U){_.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[ne]),_.__webglDepthbuffer[ne]===void 0)_.__webglDepthbuffer[ne]=i.createRenderbuffer(),pe(_.__webglDepthbuffer[ne],E,!1);else{const ae=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=_.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,te)}}else{const ne=E.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),pe(_.__webglDepthbuffer,E,!1);else{const ae=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(E,_,U){const ne=n.get(E);_!==void 0&&ie(ne.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Ue(E)}function Ge(E){const _=E.texture,U=n.get(E),ne=n.get(_);E.addEventListener("dispose",P);const ae=E.textures,te=E.isWebGLCubeRenderTarget===!0,Le=ae.length>1;if(Le||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=_.version,o.memory.textures++),te){U.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[ve]=[];for(let Ne=0;Ne<_.mipmaps.length;Ne++)U.__webglFramebuffer[ve][Ne]=i.createFramebuffer()}else U.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let ve=0;ve<_.mipmaps.length;ve++)U.__webglFramebuffer[ve]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(Le)for(let ve=0,Ne=ae.length;ve<Ne;ve++){const We=n.get(ae[ve]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&et(E)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ve=0;ve<ae.length;ve++){const Ne=ae[ve];U.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ve]);const We=s.convert(Ne.format,Ne.colorSpace),he=s.convert(Ne.type),Me=A(Ne.internalFormat,We,he,Ne.colorSpace,E.isXRRenderTarget===!0),De=I(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,Me,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,U.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),G(i.TEXTURE_CUBE_MAP,_);for(let ve=0;ve<6;ve++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ne=0;Ne<_.mipmaps.length;Ne++)ie(U.__webglFramebuffer[ve][Ne],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ne);else ie(U.__webglFramebuffer[ve],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(_)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let ve=0,Ne=ae.length;ve<Ne;ve++){const We=ae[ve],he=n.get(We);let Me=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Me=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,he.__webglTexture),G(Me,We),ie(U.__webglFramebuffer,E,We,i.COLOR_ATTACHMENT0+ve,Me,0),m(We)&&d(Me)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ve=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,ne.__webglTexture),G(ve,_),_.mipmaps&&_.mipmaps.length>0)for(let Ne=0;Ne<_.mipmaps.length;Ne++)ie(U.__webglFramebuffer[Ne],E,_,i.COLOR_ATTACHMENT0,ve,Ne);else ie(U.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,ve,0);m(_)&&d(ve),t.unbindTexture()}E.depthBuffer&&Ue(E)}function nt(E){const _=E.textures;for(let U=0,ne=_.length;U<ne;U++){const ae=_[U];if(m(ae)){const te=y(E),Le=n.get(ae).__webglTexture;t.bindTexture(te,Le),d(te),t.unbindTexture()}}}const se=[],_e=[];function ye(E){if(E.samples>0){if(et(E)===!1){const _=E.textures,U=E.width,ne=E.height;let ae=i.COLOR_BUFFER_BIT;const te=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(E),ve=_.length>1;if(ve)for(let We=0;We<_.length;We++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Ne=E.texture.mipmaps;Ne&&Ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let We=0;We<_.length;We++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[We]);const he=n.get(_[We]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,U,ne,0,0,U,ne,ae,i.NEAREST),l===!0&&(se.length=0,_e.length=0,se.push(i.COLOR_ATTACHMENT0+We),E.depthBuffer&&E.resolveDepthBuffer===!1&&(se.push(te),_e.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_e)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let We=0;We<_.length;We++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.RENDERBUFFER,Le.__webglColorRenderbuffer[We]);const he=n.get(_[We]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.TEXTURE_2D,he,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function I(E){return Math.min(r.maxSamples,E.samples)}function et(E){const _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function $e(E){const _=o.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function Ke(E,_){const U=E.colorSpace,ne=E.format,ae=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==Oi&&U!==Yn&&(at.getTransfer(U)===ht?(ne!==ln||ae!==Zt)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",U)),_}function Ie(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=D,this.setTexture2D=H,this.setTexture2DArray=K,this.setTexture3D=V,this.setTextureCube=re,this.rebindTextures=tt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function um(i,e){function t(n,r=Yn){let s;const o=at.getTransfer(r);if(n===Zt)return i.UNSIGNED_BYTE;if(n===Fo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===El)return i.BYTE;if(n===yl)return i.SHORT;if(n===or)return i.UNSIGNED_SHORT;if(n===No)return i.INT;if(n===Mn)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===On)return i.HALF_FLOAT;if(n===Al)return i.ALPHA;if(n===Rl)return i.RGB;if(n===ln)return i.RGBA;if(n===Bn)return i.DEPTH_COMPONENT;if(n===ci)return i.DEPTH_STENCIL;if(n===Cl)return i.RED;if(n===Bo)return i.RED_INTEGER;if(n===Fi)return i.RG;if(n===zo)return i.RG_INTEGER;if(n===ko)return i.RGBA_INTEGER;if(n===Br||n===zr||n===kr||n===Gr)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Br)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Br)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ys||n===$s||n===qs||n===Zs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ys)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$s)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ks||n===js||n===Js||n===Qs||n===eo||n===to||n===no)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ks||n===js)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Js)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Qs)return s.COMPRESSED_R11_EAC;if(n===eo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===to)return s.COMPRESSED_RG11_EAC;if(n===no)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===io||n===ro||n===so||n===oo||n===ao||n===lo||n===co||n===uo||n===ho||n===fo||n===po||n===mo||n===go||n===_o)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===io)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ro)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===so)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ao)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===co)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ho)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===po)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mo)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===go)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_o)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xo||n===vo||n===Mo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===xo)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===So||n===bo||n===Eo||n===yo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===So)return s.COMPRESSED_RED_RGTC1_EXT;if(n===bo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const hm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fm=`
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

}`;class dm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new kl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Sn({vertexShader:hm,fragmentShader:fm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new Gi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pm extends hi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,x=null;const v=typeof XRWebGLBinding<"u",m=new dm,d={},y=t.getContextAttributes();let A=null,R=null;const C=[],T=[],P=new lt;let O=null;const g=new Jt;g.viewport=new bt;const S=new Jt;S.viewport=new bt;const b=[g,S],D=new Mu;let k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=C[q];return Q===void 0&&(Q=new ys,C[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=C[q];return Q===void 0&&(Q=new ys,C[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=C[q];return Q===void 0&&(Q=new ys,C[q]=Q),Q.getHandSpace()};function H(q){const Q=T.indexOf(q.inputSource);if(Q===-1)return;const ie=C[Q];ie!==void 0&&(ie.update(q.inputSource,q.frame,c||o),ie.dispatchEvent({type:q.type,data:q.inputSource}))}function K(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",V);for(let q=0;q<C.length;q++){const Q=T[q];Q!==null&&(T[q]=null,C[q].disconnect(Q))}k=null,W=null,m.reset();for(const q in d)delete d[q];e.setRenderTarget(A),p=null,f=null,h=null,r=null,R=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",K),r.addEventListener("inputsourceschange",V),y.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,pe=null,de=null;y.depth&&(de=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=y.stencil?ci:Bn,pe=y.stencil?ar:Mn);const Ue={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),R=new xn(f.textureWidth,f.textureHeight,{format:ln,type:Zt,depthTexture:new cr(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ie={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),R=new xn(p.framebufferWidth,p.framebufferHeight,{format:ln,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ee.setContext(r),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(q){for(let Q=0;Q<q.removed.length;Q++){const ie=q.removed[Q],pe=T.indexOf(ie);pe>=0&&(T[pe]=null,C[pe].disconnect(ie))}for(let Q=0;Q<q.added.length;Q++){const ie=q.added[Q];let pe=T.indexOf(ie);if(pe===-1){for(let Ue=0;Ue<C.length;Ue++)if(Ue>=T.length){T.push(ie),pe=Ue;break}else if(T[Ue]===null){T[Ue]=ie,pe=Ue;break}if(pe===-1)break}const de=C[pe];de&&de.connect(ie)}}const re=new F,B=new F;function $(q,Q,ie){re.setFromMatrixPosition(Q.matrixWorld),B.setFromMatrixPosition(ie.matrixWorld);const pe=re.distanceTo(B),de=Q.projectionMatrix.elements,Ue=ie.projectionMatrix.elements,tt=de[14]/(de[10]-1),Ge=de[14]/(de[10]+1),nt=(de[9]+1)/de[5],se=(de[9]-1)/de[5],_e=(de[8]-1)/de[0],ye=(Ue[8]+1)/Ue[0],I=tt*_e,et=tt*ye,$e=pe/(-_e+ye),Ke=$e*-_e;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ke),q.translateZ($e),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),de[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Ie=tt+$e,E=Ge+$e,_=I-Ke,U=et+(pe-Ke),ne=nt*Ge/E*Ie,ae=se*Ge/E*Ie;q.projectionMatrix.makePerspective(_,U,ne,ae,Ie,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function oe(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let Q=q.near,ie=q.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),D.near=S.near=g.near=Q,D.far=S.far=g.far=ie,(k!==D.near||W!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),k=D.near,W=D.far),D.layers.mask=q.layers.mask|6,g.layers.mask=D.layers.mask&3,S.layers.mask=D.layers.mask&5;const pe=q.parent,de=D.cameras;oe(D,pe);for(let Ue=0;Ue<de.length;Ue++)oe(de[Ue],pe);de.length===2?$(D,g,S):D.projectionMatrix.copy(g.projectionMatrix),G(q,D,pe)};function G(q,Q,ie){ie===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(ie.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=To*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(q){return d[q]};let ee=null;function ge(q,Q){if(u=Q.getViewerPose(c||o),x=Q,u!==null){const ie=u.views;p!==null&&(e.setRenderTargetFramebuffer(R,p.framebuffer),e.setRenderTarget(R));let pe=!1;ie.length!==D.cameras.length&&(D.cameras.length=0,pe=!0);for(let Ge=0;Ge<ie.length;Ge++){const nt=ie[Ge];let se=null;if(p!==null)se=p.getViewport(nt);else{const ye=h.getViewSubImage(f,nt);se=ye.viewport,Ge===0&&(e.setRenderTargetTextures(R,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(R))}let _e=b[Ge];_e===void 0&&(_e=new Jt,_e.layers.enable(Ge),_e.viewport=new bt,b[Ge]=_e),_e.matrix.fromArray(nt.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(nt.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(se.x,se.y,se.width,se.height),Ge===0&&(D.matrix.copy(_e.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),pe===!0&&D.cameras.push(_e)}const de=r.enabledFeatures;if(de&&de.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const Ge=h.getDepthInformation(ie[0]);Ge&&Ge.isValid&&Ge.texture&&m.init(Ge,r.renderState)}if(de&&de.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let Ge=0;Ge<ie.length;Ge++){const nt=ie[Ge].camera;if(nt){let se=d[nt];se||(se=new kl,d[nt]=se);const _e=h.getCameraImage(nt);se.sourceTexture=_e}}}}for(let ie=0;ie<C.length;ie++){const pe=T[ie],de=C[ie];pe!==null&&de!==void 0&&de.update(pe,Q,c||o)}ee&&ee(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),x=null}const Ee=new Gl;Ee.setAnimationLoop(ge),this.setAnimationLoop=function(q){ee=q},this.dispose=function(){}}}const ni=new en,mm=new vt;function gm(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Fl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,y,A,R){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,R)):d.isMeshMatcapMaterial?(s(m,d),x(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,y,A):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Vt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Vt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=e.get(d),A=y.envMap,R=y.envMapRotation;A&&(m.envMap.value=A,ni.copy(R),ni.x*=-1,ni.y*=-1,ni.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),m.envMapRotation.value.setFromMatrix4(mm.makeRotationFromEuler(ni)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=A*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Vt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function _m(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,A){const R=A.program;n.uniformBlockBinding(y,R)}function c(y,A){let R=r[y.id];R===void 0&&(x(y),R=u(y),r[y.id]=R,y.addEventListener("dispose",m));const C=A.program;n.updateUBOMapping(y,C);const T=e.render.frame;s[y.id]!==T&&(f(y),s[y.id]=T)}function u(y){const A=h();y.__bindingPointIndex=A;const R=i.createBuffer(),C=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,R),R}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const A=r[y.id],R=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let T=0,P=R.length;T<P;T++){const O=Array.isArray(R[T])?R[T]:[R[T]];for(let g=0,S=O.length;g<S;g++){const b=O[g];if(p(b,T,g,C)===!0){const D=b.__offset,k=Array.isArray(b.value)?b.value:[b.value];let W=0;for(let H=0;H<k.length;H++){const K=k[H],V=v(K);typeof K=="number"||typeof K=="boolean"?(b.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,D+W,b.__data)):K.isMatrix3?(b.__data[0]=K.elements[0],b.__data[1]=K.elements[1],b.__data[2]=K.elements[2],b.__data[3]=0,b.__data[4]=K.elements[3],b.__data[5]=K.elements[4],b.__data[6]=K.elements[5],b.__data[7]=0,b.__data[8]=K.elements[6],b.__data[9]=K.elements[7],b.__data[10]=K.elements[8],b.__data[11]=0):(K.toArray(b.__data,W),W+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,A,R,C){const T=y.value,P=A+"_"+R;if(C[P]===void 0)return typeof T=="number"||typeof T=="boolean"?C[P]=T:C[P]=T.clone(),!0;{const O=C[P];if(typeof T=="number"||typeof T=="boolean"){if(O!==T)return C[P]=T,!0}else if(O.equals(T)===!1)return O.copy(T),!0}return!1}function x(y){const A=y.uniforms;let R=0;const C=16;for(let P=0,O=A.length;P<O;P++){const g=Array.isArray(A[P])?A[P]:[A[P]];for(let S=0,b=g.length;S<b;S++){const D=g[S],k=Array.isArray(D.value)?D.value:[D.value];for(let W=0,H=k.length;W<H;W++){const K=k[W],V=v(K),re=R%C,B=re%V.boundary,$=re+B;R+=B,$!==0&&C-$<V.storage&&(R+=C-$),D.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=R,R+=V.storage}}}const T=R%C;return T>0&&(R+=C-T),y.__size=R,y.__cache={},this}function v(y){const A={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(A.boundary=4,A.storage=4):y.isVector2?(A.boundary=8,A.storage=8):y.isVector3||y.isColor?(A.boundary=16,A.storage=12):y.isVector4?(A.boundary=16,A.storage=16):y.isMatrix3?(A.boundary=48,A.storage=48):y.isMatrix4?(A.boundary=64,A.storage=64):y.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",y),A}function m(y){const A=y.target;A.removeEventListener("dispose",m);const R=o.indexOf(A.__bindingPointIndex);o.splice(R,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}const xm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let un=null;function vm(){return un===null&&(un=new su(xm,16,16,Fi,On),un.name="DFG_LUT",un.minFilter=Et,un.magFilter=Et,un.wrapS=Dn,un.wrapT=Dn,un.generateMipmaps=!1,un.needsUpdate=!0),un}class Mm{constructor(e={}){const{canvas:t=Lc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Zt}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;const v=p,m=new Set([ko,zo,Bo]),d=new Set([Zt,Mn,or,ar,Fo,Oo]),y=new Uint32Array(4),A=new Int32Array(4);let R=null,C=null;const T=[],P=[];let O=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const g=this;let S=!1;this._outputColorSpace=_t;let b=0,D=0,k=null,W=-1,H=null;const K=new bt,V=new bt;let re=null;const B=new je(0);let $=0,oe=t.width,G=t.height,ee=1,ge=null,Ee=null;const q=new bt(0,0,oe,G),Q=new bt(0,0,oe,G);let ie=!1;const pe=new $o;let de=!1,Ue=!1;const tt=new vt,Ge=new F,nt=new bt,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function ye(){return k===null?ee:1}let I=n;function et(M,z){return t.getContext(M,z)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uo}`),t.addEventListener("webglcontextlost",w,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",Y,!1),I===null){const z="webgl2";if(I=et(z,M),I===null)throw et(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw ot("WebGLRenderer: "+M.message),M}let $e,Ke,Ie,E,_,U,ne,ae,te,Le,ve,Ne,We,he,Me,De,Oe,Se,Ze,N,Te,me,Ce,ue;function le(){$e=new vd(I),$e.init(),me=new um(I,$e),Ke=new ud(I,$e,e,me),Ie=new lm(I,$e),Ke.reversedDepthBuffer&&f&&Ie.buffers.depth.setReversed(!0),E=new bd(I),_=new $p,U=new cm(I,$e,Ie,_,Ke,me,E),ne=new fd(g),ae=new xd(g),te=new Tu(I),Ce=new ld(I,te),Le=new Md(I,te,E,Ce),ve=new yd(I,Le,te,E),Ze=new Ed(I,Ke,U),De=new hd(_),Ne=new Yp(g,ne,ae,$e,Ke,Ce,De),We=new gm(g,_),he=new Zp,Me=new tm($e),Se=new ad(g,ne,ae,Ie,ve,x,l),Oe=new om(g,ve,Ke),ue=new _m(I,E,Ke,Ie),N=new cd(I,$e,E),Te=new Sd(I,$e,E),E.programs=Ne.programs,g.capabilities=Ke,g.extensions=$e,g.properties=_,g.renderLists=he,g.shadowMap=Oe,g.state=Ie,g.info=E}le(),v!==Zt&&(O=new wd(v,t.width,t.height,r,s));const be=new pm(g,I);this.xr=be,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=$e.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=$e.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(M){M!==void 0&&(ee=M,this.setSize(oe,G,!1))},this.getSize=function(M){return M.set(oe,G)},this.setSize=function(M,z,J=!0){if(be.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=M,G=z,t.width=Math.floor(M*ee),t.height=Math.floor(z*ee),J===!0&&(t.style.width=M+"px",t.style.height=z+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set(oe*ee,G*ee).floor()},this.setDrawingBufferSize=function(M,z,J){oe=M,G=z,ee=J,t.width=Math.floor(M*J),t.height=Math.floor(z*J),this.setViewport(0,0,M,z)},this.setEffects=function(M){if(v===Zt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let z=0;z<M.length;z++)if(M[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(K)},this.getViewport=function(M){return M.copy(q)},this.setViewport=function(M,z,J,j){M.isVector4?q.set(M.x,M.y,M.z,M.w):q.set(M,z,J,j),Ie.viewport(K.copy(q).multiplyScalar(ee).round())},this.getScissor=function(M){return M.copy(Q)},this.setScissor=function(M,z,J,j){M.isVector4?Q.set(M.x,M.y,M.z,M.w):Q.set(M,z,J,j),Ie.scissor(V.copy(Q).multiplyScalar(ee).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(M){Ie.setScissorTest(ie=M)},this.setOpaqueSort=function(M){ge=M},this.setTransparentSort=function(M){Ee=M},this.getClearColor=function(M){return M.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(M=!0,z=!0,J=!0){let j=0;if(M){let X=!1;if(k!==null){const we=k.texture.format;X=m.has(we)}if(X){const we=k.texture.type,Pe=d.has(we),Re=Se.getClearColor(),Fe=Se.getClearAlpha(),ze=Re.r,Ye=Re.g,He=Re.b;Pe?(y[0]=ze,y[1]=Ye,y[2]=He,y[3]=Fe,I.clearBufferuiv(I.COLOR,0,y)):(A[0]=ze,A[1]=Ye,A[2]=He,A[3]=Fe,I.clearBufferiv(I.COLOR,0,A))}else j|=I.COLOR_BUFFER_BIT}z&&(j|=I.DEPTH_BUFFER_BIT),J&&(j|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",w,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",Y,!1),Se.dispose(),he.dispose(),Me.dispose(),_.dispose(),ne.dispose(),ae.dispose(),ve.dispose(),Ce.dispose(),ue.dispose(),Ne.dispose(),be.dispose(),be.removeEventListener("sessionstart",tn),be.removeEventListener("sessionend",Be),rt.stop()};function w(M){M.preventDefault(),ha("WebGLRenderer: Context Lost."),S=!0}function Z(){ha("WebGLRenderer: Context Restored."),S=!1;const M=E.autoReset,z=Oe.enabled,J=Oe.autoUpdate,j=Oe.needsUpdate,X=Oe.type;le(),E.autoReset=M,Oe.enabled=z,Oe.autoUpdate=J,Oe.needsUpdate=j,Oe.type=X}function Y(M){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function xe(M){const z=M.target;z.removeEventListener("dispose",xe),fe(z)}function fe(M){ke(M),_.remove(M)}function ke(M){const z=_.get(M).programs;z!==void 0&&(z.forEach(function(J){Ne.releaseProgram(J)}),M.isShaderMaterial&&Ne.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,J,j,X,we){z===null&&(z=se);const Pe=X.isMesh&&X.matrixWorld.determinant()<0,Re=ql(M,z,J,j,X);Ie.setMaterial(j,Pe);let Fe=J.index,ze=1;if(j.wireframe===!0){if(Fe=Le.getWireframeAttribute(J),Fe===void 0)return;ze=2}const Ye=J.drawRange,He=J.attributes.position;let it=Ye.start*ze,ft=(Ye.start+Ye.count)*ze;we!==null&&(it=Math.max(it,we.start*ze),ft=Math.min(ft,(we.start+we.count)*ze)),Fe!==null?(it=Math.max(it,0),ft=Math.min(ft,Fe.count)):He!=null&&(it=Math.max(it,0),ft=Math.min(ft,He.count));const Mt=ft-it;if(Mt<0||Mt===1/0)return;Ce.setup(X,j,Re,J,Fe);let St,pt=N;if(Fe!==null&&(St=te.get(Fe),pt=Te,pt.setIndex(St)),X.isMesh)j.wireframe===!0?(Ie.setLineWidth(j.wireframeLinewidth*ye()),pt.setMode(I.LINES)):pt.setMode(I.TRIANGLES);else if(X.isLine){let Ve=j.linewidth;Ve===void 0&&(Ve=1),Ie.setLineWidth(Ve*ye()),X.isLineSegments?pt.setMode(I.LINES):X.isLineLoop?pt.setMode(I.LINE_LOOP):pt.setMode(I.LINE_STRIP)}else X.isPoints?pt.setMode(I.POINTS):X.isSprite&&pt.setMode(I.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)lr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))pt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ve=X._multiDrawStarts,ut=X._multiDrawCounts,ct=X._multiDrawCount,Xt=Fe?te.get(Fe).bytesPerElement:1,fi=_.get(j).currentProgram.getUniforms();for(let Yt=0;Yt<ct;Yt++)fi.setValue(I,"_gl_DrawID",Yt),pt.render(Ve[Yt]/Xt,ut[Yt])}else if(X.isInstancedMesh)pt.renderInstances(it,Mt,X.count);else if(J.isInstancedBufferGeometry){const Ve=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ut=Math.min(J.instanceCount,Ve);pt.renderInstances(it,Mt,ut)}else pt.render(it,Mt)};function Xe(M,z,J){M.transparent===!0&&M.side===Ln&&M.forceSinglePass===!1?(M.side=Vt,M.needsUpdate=!0,mr(M,z,J),M.side=Zn,M.needsUpdate=!0,mr(M,z,J),M.side=Ln):mr(M,z,J)}this.compile=function(M,z,J=null){J===null&&(J=M),C=Me.get(J),C.init(z),P.push(C),J.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(C.pushLight(X),X.castShadow&&C.pushShadow(X))}),M!==J&&M.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(C.pushLight(X),X.castShadow&&C.pushShadow(X))}),C.setupLights();const j=new Set;return M.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const we=X.material;if(we)if(Array.isArray(we))for(let Pe=0;Pe<we.length;Pe++){const Re=we[Pe];Xe(Re,J,X),j.add(Re)}else Xe(we,J,X),j.add(we)}),C=P.pop(),j},this.compileAsync=function(M,z,J=null){const j=this.compile(M,z,J);return new Promise(X=>{function we(){if(j.forEach(function(Pe){_.get(Pe).currentProgram.isReady()&&j.delete(Pe)}),j.size===0){X(M);return}setTimeout(we,10)}$e.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let gt=null;function It(M){gt&&gt(M)}function tn(){rt.stop()}function Be(){rt.start()}const rt=new Gl;rt.setAnimationLoop(It),typeof self<"u"&&rt.setContext(self),this.setAnimationLoop=function(M){gt=M,be.setAnimationLoop(M),M===null?rt.stop():rt.start()},be.addEventListener("sessionstart",tn),be.addEventListener("sessionend",Be),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const J=be.enabled===!0&&be.isPresenting===!0,j=O!==null&&(k===null||J)&&O.begin(g,k);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(z),z=be.getCamera()),M.isScene===!0&&M.onBeforeRender(g,M,z,k),C=Me.get(M,P.length),C.init(z),P.push(C),tt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),pe.setFromProjectionMatrix(tt,pn,z.reversedDepth),Ue=this.localClippingEnabled,de=De.init(this.clippingPlanes,Ue),R=he.get(M,T.length),R.init(),T.push(R),be.enabled===!0&&be.isPresenting===!0){const Pe=g.xr.getDepthSensingMesh();Pe!==null&&Wt(Pe,z,-1/0,g.sortObjects)}Wt(M,z,0,g.sortObjects),R.finish(),g.sortObjects===!0&&R.sort(ge,Ee),_e=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,_e&&Se.addToRenderList(R,M),this.info.render.frame++,de===!0&&De.beginShadows();const X=C.state.shadowsArray;if(Oe.render(X,M,z),de===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j&&O.hasRenderPass())===!1){const Pe=R.opaque,Re=R.transmissive;if(C.setupLights(),z.isArrayCamera){const Fe=z.cameras;if(Re.length>0)for(let ze=0,Ye=Fe.length;ze<Ye;ze++){const He=Fe[ze];Qo(Pe,Re,M,He)}_e&&Se.render(M);for(let ze=0,Ye=Fe.length;ze<Ye;ze++){const He=Fe[ze];Jo(R,M,He,He.viewport)}}else Re.length>0&&Qo(Pe,Re,M,z),_e&&Se.render(M),Jo(R,M,z)}k!==null&&D===0&&(U.updateMultisampleRenderTarget(k),U.updateRenderTargetMipmap(k)),j&&O.end(g),M.isScene===!0&&M.onAfterRender(g,M,z),Ce.resetDefaultState(),W=-1,H=null,P.pop(),P.length>0?(C=P[P.length-1],de===!0&&De.setGlobalState(g.clippingPlanes,C.state.camera)):C=null,T.pop(),T.length>0?R=T[T.length-1]:R=null};function Wt(M,z,J,j){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)J=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLight)C.pushLight(M),M.castShadow&&C.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||pe.intersectsSprite(M)){j&&nt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(tt);const Pe=ve.update(M),Re=M.material;Re.visible&&R.push(M,Pe,Re,J,nt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||pe.intersectsObject(M))){const Pe=ve.update(M),Re=M.material;if(j&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),nt.copy(M.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),nt.copy(Pe.boundingSphere.center)),nt.applyMatrix4(M.matrixWorld).applyMatrix4(tt)),Array.isArray(Re)){const Fe=Pe.groups;for(let ze=0,Ye=Fe.length;ze<Ye;ze++){const He=Fe[ze],it=Re[He.materialIndex];it&&it.visible&&R.push(M,Pe,it,J,nt.z,He)}}else Re.visible&&R.push(M,Pe,Re,J,nt.z,null)}}const we=M.children;for(let Pe=0,Re=we.length;Pe<Re;Pe++)Wt(we[Pe],z,J,j)}function Jo(M,z,J,j){const{opaque:X,transmissive:we,transparent:Pe}=M;C.setupLightsView(J),de===!0&&De.setGlobalState(g.clippingPlanes,J),j&&Ie.viewport(K.copy(j)),X.length>0&&pr(X,z,J),we.length>0&&pr(we,z,J),Pe.length>0&&pr(Pe,z,J),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Qo(M,z,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[j.id]===void 0){const it=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[j.id]=new xn(1,1,{generateMipmaps:!0,type:it?On:Zt,minFilter:li,samples:Ke.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace})}const we=C.state.transmissionRenderTarget[j.id],Pe=j.viewport||K;we.setSize(Pe.z*g.transmissionResolutionScale,Pe.w*g.transmissionResolutionScale);const Re=g.getRenderTarget(),Fe=g.getActiveCubeFace(),ze=g.getActiveMipmapLevel();g.setRenderTarget(we),g.getClearColor(B),$=g.getClearAlpha(),$<1&&g.setClearColor(16777215,.5),g.clear(),_e&&Se.render(J);const Ye=g.toneMapping;g.toneMapping=_n;const He=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),C.setupLightsView(j),de===!0&&De.setGlobalState(g.clippingPlanes,j),pr(M,J,j),U.updateMultisampleRenderTarget(we),U.updateRenderTargetMipmap(we),$e.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let ft=0,Mt=z.length;ft<Mt;ft++){const St=z[ft],{object:pt,geometry:Ve,material:ut,group:ct}=St;if(ut.side===Ln&&pt.layers.test(j.layers)){const Xt=ut.side;ut.side=Vt,ut.needsUpdate=!0,ea(pt,J,j,Ve,ut,ct),ut.side=Xt,ut.needsUpdate=!0,it=!0}}it===!0&&(U.updateMultisampleRenderTarget(we),U.updateRenderTargetMipmap(we))}g.setRenderTarget(Re,Fe,ze),g.setClearColor(B,$),He!==void 0&&(j.viewport=He),g.toneMapping=Ye}function pr(M,z,J){const j=z.isScene===!0?z.overrideMaterial:null;for(let X=0,we=M.length;X<we;X++){const Pe=M[X],{object:Re,geometry:Fe,group:ze}=Pe;let Ye=Pe.material;Ye.allowOverride===!0&&j!==null&&(Ye=j),Re.layers.test(J.layers)&&ea(Re,z,J,Fe,Ye,ze)}}function ea(M,z,J,j,X,we){M.onBeforeRender(g,z,J,j,X,we),M.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),X.onBeforeRender(g,z,J,j,M,we),X.transparent===!0&&X.side===Ln&&X.forceSinglePass===!1?(X.side=Vt,X.needsUpdate=!0,g.renderBufferDirect(J,z,j,X,M,we),X.side=Zn,X.needsUpdate=!0,g.renderBufferDirect(J,z,j,X,M,we),X.side=Ln):g.renderBufferDirect(J,z,j,X,M,we),M.onAfterRender(g,z,J,j,X,we)}function mr(M,z,J){z.isScene!==!0&&(z=se);const j=_.get(M),X=C.state.lights,we=C.state.shadowsArray,Pe=X.state.version,Re=Ne.getParameters(M,X.state,we,z,J),Fe=Ne.getProgramCacheKey(Re);let ze=j.programs;j.environment=M.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(M.isMeshStandardMaterial?ae:ne).get(M.envMap||j.environment),j.envMapRotation=j.environment!==null&&M.envMap===null?z.environmentRotation:M.envMapRotation,ze===void 0&&(M.addEventListener("dispose",xe),ze=new Map,j.programs=ze);let Ye=ze.get(Fe);if(Ye!==void 0){if(j.currentProgram===Ye&&j.lightsStateVersion===Pe)return na(M,Re),Ye}else Re.uniforms=Ne.getUniforms(M),M.onBeforeCompile(Re,g),Ye=Ne.acquireProgram(Re,Fe),ze.set(Fe,Ye),j.uniforms=Re.uniforms;const He=j.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(He.clippingPlanes=De.uniform),na(M,Re),j.needsLights=Kl(M),j.lightsStateVersion=Pe,j.needsLights&&(He.ambientLightColor.value=X.state.ambient,He.lightProbe.value=X.state.probe,He.directionalLights.value=X.state.directional,He.directionalLightShadows.value=X.state.directionalShadow,He.spotLights.value=X.state.spot,He.spotLightShadows.value=X.state.spotShadow,He.rectAreaLights.value=X.state.rectArea,He.ltc_1.value=X.state.rectAreaLTC1,He.ltc_2.value=X.state.rectAreaLTC2,He.pointLights.value=X.state.point,He.pointLightShadows.value=X.state.pointShadow,He.hemisphereLights.value=X.state.hemi,He.directionalShadowMap.value=X.state.directionalShadowMap,He.directionalShadowMatrix.value=X.state.directionalShadowMatrix,He.spotShadowMap.value=X.state.spotShadowMap,He.spotLightMatrix.value=X.state.spotLightMatrix,He.spotLightMap.value=X.state.spotLightMap,He.pointShadowMap.value=X.state.pointShadowMap,He.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=Ye,j.uniformsList=null,Ye}function ta(M){if(M.uniformsList===null){const z=M.currentProgram.getUniforms();M.uniformsList=Hr.seqWithValue(z.seq,M.uniforms)}return M.uniformsList}function na(M,z){const J=_.get(M);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function ql(M,z,J,j,X){z.isScene!==!0&&(z=se),U.resetTextureUnits();const we=z.fog,Pe=j.isMeshStandardMaterial?z.environment:null,Re=k===null?g.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Oi,Fe=(j.isMeshStandardMaterial?ae:ne).get(j.envMap||Pe),ze=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ye=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),He=!!J.morphAttributes.position,it=!!J.morphAttributes.normal,ft=!!J.morphAttributes.color;let Mt=_n;j.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Mt=g.toneMapping);const St=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,pt=St!==void 0?St.length:0,Ve=_.get(j),ut=C.state.lights;if(de===!0&&(Ue===!0||M!==H)){const Ot=M===H&&j.id===W;De.setState(j,M,Ot)}let ct=!1;j.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==ut.state.version||Ve.outputColorSpace!==Re||X.isBatchedMesh&&Ve.batching===!1||!X.isBatchedMesh&&Ve.batching===!0||X.isBatchedMesh&&Ve.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ve.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ve.instancing===!1||!X.isInstancedMesh&&Ve.instancing===!0||X.isSkinnedMesh&&Ve.skinning===!1||!X.isSkinnedMesh&&Ve.skinning===!0||X.isInstancedMesh&&Ve.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ve.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ve.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ve.instancingMorph===!1&&X.morphTexture!==null||Ve.envMap!==Fe||j.fog===!0&&Ve.fog!==we||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==De.numPlanes||Ve.numIntersection!==De.numIntersection)||Ve.vertexAlphas!==ze||Ve.vertexTangents!==Ye||Ve.morphTargets!==He||Ve.morphNormals!==it||Ve.morphColors!==ft||Ve.toneMapping!==Mt||Ve.morphTargetsCount!==pt)&&(ct=!0):(ct=!0,Ve.__version=j.version);let Xt=Ve.currentProgram;ct===!0&&(Xt=mr(j,z,X));let fi=!1,Yt=!1,Wi=!1;const mt=Xt.getUniforms(),kt=Ve.uniforms;if(Ie.useProgram(Xt.program)&&(fi=!0,Yt=!0,Wi=!0),j.id!==W&&(W=j.id,Yt=!0),fi||H!==M){Ie.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),mt.setValue(I,"projectionMatrix",M.projectionMatrix),mt.setValue(I,"viewMatrix",M.matrixWorldInverse);const Gt=mt.map.cameraPosition;Gt!==void 0&&Gt.setValue(I,Ge.setFromMatrixPosition(M.matrixWorld)),Ke.logarithmicDepthBuffer&&mt.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&mt.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),H!==M&&(H=M,Yt=!0,Wi=!0)}if(Ve.needsLights&&(ut.state.directionalShadowMap.length>0&&mt.setValue(I,"directionalShadowMap",ut.state.directionalShadowMap,U),ut.state.spotShadowMap.length>0&&mt.setValue(I,"spotShadowMap",ut.state.spotShadowMap,U),ut.state.pointShadowMap.length>0&&mt.setValue(I,"pointShadowMap",ut.state.pointShadowMap,U)),X.isSkinnedMesh){mt.setOptional(I,X,"bindMatrix"),mt.setOptional(I,X,"bindMatrixInverse");const Ot=X.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),mt.setValue(I,"boneTexture",Ot.boneTexture,U))}X.isBatchedMesh&&(mt.setOptional(I,X,"batchingTexture"),mt.setValue(I,"batchingTexture",X._matricesTexture,U),mt.setOptional(I,X,"batchingIdTexture"),mt.setValue(I,"batchingIdTexture",X._indirectTexture,U),mt.setOptional(I,X,"batchingColorTexture"),X._colorsTexture!==null&&mt.setValue(I,"batchingColorTexture",X._colorsTexture,U));const Kt=J.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&Ze.update(X,J,Xt),(Yt||Ve.receiveShadow!==X.receiveShadow)&&(Ve.receiveShadow=X.receiveShadow,mt.setValue(I,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(kt.envMap.value=Fe,kt.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&z.environment!==null&&(kt.envMapIntensity.value=z.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=vm()),Yt&&(mt.setValue(I,"toneMappingExposure",g.toneMappingExposure),Ve.needsLights&&Zl(kt,Wi),we&&j.fog===!0&&We.refreshFogUniforms(kt,we),We.refreshMaterialUniforms(kt,j,ee,G,C.state.transmissionRenderTarget[M.id]),Hr.upload(I,ta(Ve),kt,U)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Hr.upload(I,ta(Ve),kt,U),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&mt.setValue(I,"center",X.center),mt.setValue(I,"modelViewMatrix",X.modelViewMatrix),mt.setValue(I,"normalMatrix",X.normalMatrix),mt.setValue(I,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ot=j.uniformsGroups;for(let Gt=0,es=Ot.length;Gt<es;Gt++){const Kn=Ot[Gt];ue.update(Kn,Xt),ue.bind(Kn,Xt)}}return Xt}function Zl(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function Kl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(M,z,J){const j=_.get(M);j.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),_.get(M.texture).__webglTexture=z,_.get(M.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:J,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,z){const J=_.get(M);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0};const jl=I.createFramebuffer();this.setRenderTarget=function(M,z=0,J=0){k=M,b=z,D=J;let j=null,X=!1,we=!1;if(M){const Re=_.get(M);if(Re.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(I.FRAMEBUFFER,Re.__webglFramebuffer),K.copy(M.viewport),V.copy(M.scissor),re=M.scissorTest,Ie.viewport(K),Ie.scissor(V),Ie.setScissorTest(re),W=-1;return}else if(Re.__webglFramebuffer===void 0)U.setupRenderTarget(M);else if(Re.__hasExternalTextures)U.rebindTextures(M,_.get(M.texture).__webglTexture,_.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ye=M.depthTexture;if(Re.__boundDepthTexture!==Ye){if(Ye!==null&&_.has(Ye)&&(M.width!==Ye.image.width||M.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(M)}}const Fe=M.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(we=!0);const ze=_.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ze[z])?j=ze[z][J]:j=ze[z],X=!0):M.samples>0&&U.useMultisampledRTT(M)===!1?j=_.get(M).__webglMultisampledFramebuffer:Array.isArray(ze)?j=ze[J]:j=ze,K.copy(M.viewport),V.copy(M.scissor),re=M.scissorTest}else K.copy(q).multiplyScalar(ee).floor(),V.copy(Q).multiplyScalar(ee).floor(),re=ie;if(J!==0&&(j=jl),Ie.bindFramebuffer(I.FRAMEBUFFER,j)&&Ie.drawBuffers(M,j),Ie.viewport(K),Ie.scissor(V),Ie.setScissorTest(re),X){const Re=_.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,Re.__webglTexture,J)}else if(we){const Re=z;for(let Fe=0;Fe<M.textures.length;Fe++){const ze=_.get(M.textures[Fe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Fe,ze.__webglTexture,J,Re)}}else if(M!==null&&J!==0){const Re=_.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Re.__webglTexture,J)}W=-1},this.readRenderTargetPixels=function(M,z,J,j,X,we,Pe,Re=0){if(!(M&&M.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){Ie.bindFramebuffer(I.FRAMEBUFFER,Fe);try{const ze=M.textures[Re],Ye=ze.format,He=ze.type;if(!Ke.textureFormatReadable(Ye)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(He)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-j&&J>=0&&J<=M.height-X&&(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Re),I.readPixels(z,J,j,X,me.convert(Ye),me.convert(He),we))}finally{const ze=k!==null?_.get(k).__webglFramebuffer:null;Ie.bindFramebuffer(I.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(M,z,J,j,X,we,Pe,Re=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe)if(z>=0&&z<=M.width-j&&J>=0&&J<=M.height-X){Ie.bindFramebuffer(I.FRAMEBUFFER,Fe);const ze=M.textures[Re],Ye=ze.format,He=ze.type;if(!Ke.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,it),I.bufferData(I.PIXEL_PACK_BUFFER,we.byteLength,I.STREAM_READ),M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Re),I.readPixels(z,J,j,X,me.convert(Ye),me.convert(He),0);const ft=k!==null?_.get(k).__webglFramebuffer:null;Ie.bindFramebuffer(I.FRAMEBUFFER,ft);const Mt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Dc(I,Mt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,it),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,we),I.deleteBuffer(it),I.deleteSync(Mt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,z=null,J=0){const j=Math.pow(2,-J),X=Math.floor(M.image.width*j),we=Math.floor(M.image.height*j),Pe=z!==null?z.x:0,Re=z!==null?z.y:0;U.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,J,0,0,Pe,Re,X,we),Ie.unbindTexture()};const Jl=I.createFramebuffer(),Ql=I.createFramebuffer();this.copyTextureToTexture=function(M,z,J=null,j=null,X=0,we=null){we===null&&(X!==0?(lr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=X,X=0):we=0);let Pe,Re,Fe,ze,Ye,He,it,ft,Mt;const St=M.isCompressedTexture?M.mipmaps[we]:M.image;if(J!==null)Pe=J.max.x-J.min.x,Re=J.max.y-J.min.y,Fe=J.isBox3?J.max.z-J.min.z:1,ze=J.min.x,Ye=J.min.y,He=J.isBox3?J.min.z:0;else{const Kt=Math.pow(2,-X);Pe=Math.floor(St.width*Kt),Re=Math.floor(St.height*Kt),M.isDataArrayTexture?Fe=St.depth:M.isData3DTexture?Fe=Math.floor(St.depth*Kt):Fe=1,ze=0,Ye=0,He=0}j!==null?(it=j.x,ft=j.y,Mt=j.z):(it=0,ft=0,Mt=0);const pt=me.convert(z.format),Ve=me.convert(z.type);let ut;z.isData3DTexture?(U.setTexture3D(z,0),ut=I.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(U.setTexture2DArray(z,0),ut=I.TEXTURE_2D_ARRAY):(U.setTexture2D(z,0),ut=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const ct=I.getParameter(I.UNPACK_ROW_LENGTH),Xt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),fi=I.getParameter(I.UNPACK_SKIP_PIXELS),Yt=I.getParameter(I.UNPACK_SKIP_ROWS),Wi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,St.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ze),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ye),I.pixelStorei(I.UNPACK_SKIP_IMAGES,He);const mt=M.isDataArrayTexture||M.isData3DTexture,kt=z.isDataArrayTexture||z.isData3DTexture;if(M.isDepthTexture){const Kt=_.get(M),Ot=_.get(z),Gt=_.get(Kt.__renderTarget),es=_.get(Ot.__renderTarget);Ie.bindFramebuffer(I.READ_FRAMEBUFFER,Gt.__webglFramebuffer),Ie.bindFramebuffer(I.DRAW_FRAMEBUFFER,es.__webglFramebuffer);for(let Kn=0;Kn<Fe;Kn++)mt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_.get(M).__webglTexture,X,He+Kn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_.get(z).__webglTexture,we,Mt+Kn)),I.blitFramebuffer(ze,Ye,Pe,Re,it,ft,Pe,Re,I.DEPTH_BUFFER_BIT,I.NEAREST);Ie.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(X!==0||M.isRenderTargetTexture||_.has(M)){const Kt=_.get(M),Ot=_.get(z);Ie.bindFramebuffer(I.READ_FRAMEBUFFER,Jl),Ie.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ql);for(let Gt=0;Gt<Fe;Gt++)mt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Kt.__webglTexture,X,He+Gt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Kt.__webglTexture,X),kt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ot.__webglTexture,we,Mt+Gt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ot.__webglTexture,we),X!==0?I.blitFramebuffer(ze,Ye,Pe,Re,it,ft,Pe,Re,I.COLOR_BUFFER_BIT,I.NEAREST):kt?I.copyTexSubImage3D(ut,we,it,ft,Mt+Gt,ze,Ye,Pe,Re):I.copyTexSubImage2D(ut,we,it,ft,ze,Ye,Pe,Re);Ie.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else kt?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(ut,we,it,ft,Mt,Pe,Re,Fe,pt,Ve,St.data):z.isCompressedArrayTexture?I.compressedTexSubImage3D(ut,we,it,ft,Mt,Pe,Re,Fe,pt,St.data):I.texSubImage3D(ut,we,it,ft,Mt,Pe,Re,Fe,pt,Ve,St):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,we,it,ft,Pe,Re,pt,Ve,St.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,we,it,ft,St.width,St.height,pt,St.data):I.texSubImage2D(I.TEXTURE_2D,we,it,ft,Pe,Re,pt,Ve,St);I.pixelStorei(I.UNPACK_ROW_LENGTH,ct),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Xt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,fi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Yt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Wi),we===0&&z.generateMipmaps&&I.generateMipmap(ut),Ie.unbindTexture()},this.initRenderTarget=function(M){_.get(M).__webglFramebuffer===void 0&&U.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?U.setTextureCube(M,0):M.isData3DTexture?U.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?U.setTexture2DArray(M,0):U.setTexture2D(M,0),Ie.unbindTexture()},this.resetState=function(){b=0,D=0,k=null,Ie.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}const Vi="#005eb8";function hn(i,e,t){const n=e.split(/\s+/),r=[];let s="";for(const o of n){const a=s?`${s} ${o}`:o;i.measureText(a).width>t&&s?(r.push(s),s=o):s=a}return s&&r.push(s),r}function tr(i,e,t){if(i.measureText(e).width<=t)return e;let n=e;for(;n.length>1&&i.measureText(`${n}…`).width>t;)n=n.slice(0,-1);return`${n}…`}function dt(i){const e=document.createElement("canvas");e.width=i.widthPx,e.height=i.heightPx;const t=e.getContext("2d"),n=Math.round(i.widthPx*.05),r=i.align??"left",s=r==="center"?i.widthPx/2:n;t.fillStyle=i.background??Vi,t.fillRect(0,0,e.width,e.height),t.fillStyle=i.color??"#ffffff",t.textAlign=r,t.textBaseline="top";let o=n,a=i.titleSize??Math.round(i.heightPx*.28),l=i.subtitleSize??Math.round(a*.55);if(!i.body){const u=l/a;for(let h=0;h<24&&a>18;h++){t.font=`bold ${a}px Arial`;let f=hn(t,i.title,i.widthPx-n*2).length*a*1.15;if(i.subtitle&&(t.font=`${l}px Arial`,f+=hn(t,i.subtitle,i.widthPx-n*2).length*l*1.2),f<=i.heightPx-n*1.6)break;a=Math.round(a*.93),l=Math.max(14,Math.round(a*u))}}t.font=`bold ${a}px Arial`;for(const u of hn(t,i.title,i.widthPx-n*2))t.fillText(u,s,o),o+=a*1.15;if(i.subtitle){t.font=`${l}px Arial`,t.globalAlpha=.85;for(const u of hn(t,i.subtitle,i.widthPx-n*2))t.fillText(u,s,o),o+=l*1.2;t.globalAlpha=1}if(i.body){o+=n*.5;let u=i.bodySize??Math.round(a*.45);if(i.fitBody){const h=i.footer?Math.round(a*.32)*2.6+n:n,f=i.heightPx-o-h;for(;u>16&&(t.font=`${u}px Arial`,!(hn(t,i.body,i.widthPx-n*2).length*u*1.3<=f));)u-=2}t.font=`${u}px Arial`;for(const h of hn(t,i.body,i.widthPx-n*2))t.fillText(h,s,o),o+=u*1.3}if(i.footer){const u=Math.round((i.titleSize??i.heightPx*.28)*.32);t.font=`${u}px Arial`,t.globalAlpha=.72;let h=i.heightPx-n;const f=hn(t,i.footer,i.widthPx-n*2).reverse();for(const p of f)h-=u*1.25,t.fillText(p,s,h);t.globalAlpha=1}const c=new En(e);return c.anisotropy=4,c.colorSpace=_t,c}const nl="#009639";function Sm(i,e,t){const n=document.createElement("canvas");n.width=620,n.height=810;const r=n.getContext("2d");r.fillStyle="#fbfbf8",r.fillRect(0,0,620,810),r.fillStyle=e,r.fillRect(0,0,620,92),r.fillStyle="#ffffff",r.font="bold 46px Arial",r.textBaseline="middle",r.fillText(i,30,48),r.textBaseline="top",r.fillStyle="#20262b";let s=34;for(;s>16&&(r.font=`${s}px Arial`,!(hn(r,t,560).length*s*1.35<=655));)s-=2;r.font=`${s}px Arial`;let o=130;for(const l of hn(r,t,560))if(r.fillText(l,30,o),o+=s*1.35,o>770)break;const a=new En(n);return a.anisotropy=4,a.colorSpace=_t,a}function bm(i){const e=document.createElement("canvas");e.width=620,e.height=290;const t=e.getContext("2d");t.fillStyle="#e9e3d0",t.fillRect(0,0,620,290),t.strokeStyle="#8b8672",t.lineWidth=6,t.strokeRect(8,8,604,274),t.fillStyle="#6c6753",t.font="26px Arial",t.fillText("formerly signposted as",28,34),t.fillStyle="#3a382f";let n=88;for(const s of i.slice(0,3)){t.font="bold 44px Arial",t.fillText(s,28,n);const o=t.measureText(s).width;t.strokeStyle="#7d2a2a",t.lineWidth=5,t.beginPath(),t.moveTo(24,n+2),t.lineTo(32+o,n-6),t.stroke(),n+=64}const r=new En(e);return r.colorSpace=_t,r}function Yl(i){const e=document.createElement("canvas"),t=640,n=460;e.width=t,e.height=n;const r=e.getContext("2d");let s=i%2147483646+1;const o=()=>(s=s*16807%2147483647)/2147483647,a=[["#e8e3d4","#41668c","#c4a35a","#7a4b3a","#5d7a76"],["#ece7dc","#6c8c5f","#c96f4a","#3d4a52","#c4b57a"],["#e6e2d8","#8a5a74","#5a7d8a","#c9a35a","#4a5747"]],l=a[i%a.length];r.fillStyle=l[0],r.fillRect(0,0,t,n);const c=5+Math.floor(o()*5);for(let h=0;h<c;h++)if(r.fillStyle=l[1+Math.floor(o()*(l.length-1))],r.globalAlpha=.75+o()*.25,o()<.45)r.beginPath(),r.arc(o()*t,o()*n,40+o()*100,0,Math.PI*(.7+o()*1.3)),r.lineWidth=14+o()*30,r.strokeStyle=r.fillStyle,r.stroke();else{const f=40+o()*150;r.fillRect(o()*(t-f),o()*(n-100),f,50+o()*160)}r.globalAlpha=1;const u=new En(e);return u.colorSpace=_t,u}function $r(i,e){const t=document.createElement("canvas");t.width=512,t.height=150;const n=t.getContext("2d");n.fillStyle="#f5f4ef",n.fillRect(0,0,512,150),n.fillStyle="#20262b",n.font="bold 34px Arial",n.fillText(tr(n,i,470),22,26),n.font="24px Arial",n.globalAlpha=.75;let r=78;for(const o of hn(n,e,470).slice(0,2))n.fillText(o,22,r),r+=32;n.globalAlpha=1;const s=new En(t);return s.colorSpace=_t,s}function $l(i){const e=Math.round(i.widthPx*.035),t=Math.round(i.heightPx*.075);let n=e+t*1.25;i.subtitle&&(n+=t*.8),n+=e*.4;const r=n;n+=e*.6;const s=i.columns??1,o=(i.widthPx-e*2-e*(s-1))/s,a=i.rowSize??Math.round(t*.62),l=a*1.55,c=Math.max(1,Math.floor((i.heightPx-n-e)/l));return{pad:e,titleSize:t,top:n,ruleY:r,columns:s,colWidth:o,rowSize:a,rowH:l,rowsPerCol:c}}function Co(i,e){const t=$l(i),n=[];for(let r=0;r<e;r++){const s=Math.floor(r/t.rowsPerCol);if(s>=t.columns){n.push(null);continue}const o=t.pad+s*(t.colWidth+t.pad),a=t.top+r%t.rowsPerCol*t.rowH;n.push([o/i.widthPx,1-(a+t.rowH)/i.heightPx,(o+t.colWidth)/i.widthPx,1-a/i.heightPx])}return n}function rr(i){const e=document.createElement("canvas");e.width=i.widthPx,e.height=i.heightPx;const t=e.getContext("2d"),n=$l(i),r=n.pad;t.fillStyle=i.background??Vi,t.fillRect(0,0,e.width,e.height),t.textBaseline="top",t.textAlign="left";const s=n.titleSize;t.fillStyle="#ffffff",t.font=`bold ${s}px Arial`,t.fillText(tr(t,i.title,i.widthPx-r*2),r,r),i.subtitle&&(t.font=`${Math.round(s*.55)}px Arial`,t.globalAlpha=.85,t.fillText(tr(t,i.subtitle,i.widthPx-r*2),r,r+s*1.25),t.globalAlpha=1),t.strokeStyle="rgba(255,255,255,0.5)",t.lineWidth=Math.max(2,i.heightPx*.004),t.beginPath(),t.moveTo(r,n.ruleY),t.lineTo(i.widthPx-r,n.ruleY),t.stroke();const o=n.top,a=n.columns,l=n.colWidth,c=n.rowSize,u=n.rowH,h=n.rowsPerCol;i.rows.forEach((p,x)=>{const v=Math.floor(x/h);if(v>=a)return;const m=r+v*(l+r),d=o+x%h*u;let y=m;p.chip&&(t.fillStyle=p.chip,t.fillRect(m,d+c*.1,c*.8,c*.8),y+=c*1.2),t.fillStyle="#ffffff",t.font=`${p.strong?"bold ":""}${c}px Arial`;const A=tr(t,p.text,l-(y-m));if(t.fillText(A,y,d),p.sub){const R=t.measureText(A).width;t.font=`${Math.round(c*.78)}px Arial`,t.globalAlpha=.75,t.fillText(tr(t,`  ${p.sub}`,l-(y-m)-R),y+R,d+c*.15),t.globalAlpha=1}});const f=new En(e);return f.anisotropy=4,f.colorSpace=_t,f}function Po(i,e=1.36){const t=document.createElement("canvas");t.width=1088,t.height=Math.round(1088/e);const n=t.getContext("2d");n.fillStyle="#3b4046",n.fillRect(0,0,t.width,t.height);const r=new En(t);r.colorSpace=_t,r.anisotropy=4,r.generateMipmaps=!1,r.minFilter=Et;const s=new Image;return s.onload=()=>{const o=Math.max(t.width/s.naturalWidth,t.height/s.naturalHeight),a=s.naturalWidth*o,l=s.naturalHeight*o;n.drawImage(s,(t.width-a)/2,(t.height-l)/2,a,l),r.needsUpdate=!0},s.src=i,r}class Em{entries=[];placeholder=new cn({color:new je(Vi)});register(e,t,n){e.material=this.placeholder,this.entries.push({pos:t.clone(),mesh:e,make:n,ready:!1})}update(e,t=55,n=120,r=8){const s=[];for(const o of this.entries){const a=o.pos.distanceTo(e);if(o.mesh.visible=a<n,!o.ready&&a<t)s.push({e:o,d:a});else if(o.ready&&a>n){const l=o.mesh.material;l.map?.dispose(),l.dispose(),o.mesh.material=this.placeholder,o.ready=!1}}s.sort((o,a)=>o.d-a.d);for(const{e:o}of s.slice(0,r))o.mesh.material=new cn({map:o.make()}),o.ready=!0}get count(){return this.entries.length}get readyCount(){return this.entries.filter(e=>e.ready).length}}function ym(i,e,t,n,r,s="sign"){const o=new Pt(new Gi(e,t),new cn);return o.name=s,i.register(o,n,r),o}const Tm={event:"#41b6e6","mental-object":"#78be20",state:"#ed8b00",stative:"#ed8b00",process:"#ae2573","time-interval":"#8a1538",role:"#00a499","physical-object":"#ffb81c",resources:"#7c2855",reference:"#005eb8"},qn=i=>Tm[i]??"#425563";function zi(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new bn;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const h=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let x=0;x<p.count;++x)h.push(p.getX(x)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(const u in s){const h=il(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const p=[];for(let v=0;v<o[u].length;++v)p.push(o[u][v][f]);const x=il(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(x)}}return l}function il(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),a=new Qt(o,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let f=0,p=u.count;f<p;f++)for(let x=0;x<t;x++){const v=u.getComponent(f,x);a.setComponent(f+h,x,v)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function wm(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d");e.fillStyle="#89928b",e.fillRect(0,0,256,256);let t=42;const n=()=>(t=t*16807%2147483647)/2147483647,r=["#9aa39b","#78817a","#a7ada3","#6e766f","#93856f"];for(let o=0;o<1400;o++){e.fillStyle=r[Math.floor(n()*r.length)],e.globalAlpha=.35+n()*.4;const a=1+n()*2.6;e.fillRect(n()*256,n()*256,a,a)}e.globalAlpha=1;const s=new En(i);return s.wrapS=s.wrapT=sr,s.colorSpace=_t,s.anisotropy=4,s}function Am(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d");e.fillStyle="#f5f6f3",e.fillRect(0,0,256,256);let t=7;const n=()=>(t=t*16807%2147483647)/2147483647;e.fillStyle="#e8eae4";for(let s=0;s<600;s++)e.globalAlpha=.35+n()*.3,e.fillRect(n()*256,n()*256,1.6,1.6);e.globalAlpha=1,e.strokeStyle="#cfd3cb",e.lineWidth=3;for(const s of[0,128,256])e.beginPath(),e.moveTo(s,0),e.lineTo(s,256),e.moveTo(0,s),e.lineTo(256,s),e.stroke();const r=new En(i);return r.wrapS=r.wrapT=sr,r.repeat.set(1/1.2,1/1.2),r.colorSpace=_t,r.anisotropy=4,r}const ce={floor:new fu({map:wm(),shininess:60,specular:new je(3026478)}),wall:new Tt({color:14541782}),endWall:new Tt({color:12175549}),ceiling:new Tt({map:Am()}),door:new Tt({color:9083520}),liftDoor:new Tt({color:12042182}),stair:new Tt({color:12174013}),stairDark:new Tt({color:3817799}),rail:new Tt({color:8358806}),oak:new Tt({color:9071173}),glass:new Tt({color:3095104}),steel:new Tt({color:12831182}),led:new cn({color:16251391}),chair:new Tt({color:5140074}),daylight:new cn({color:14214894})};function Rm(i,e,t,n){const r=i.attributes.uv,s=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let o=0;o<6;o++){const[a,l]=s[o];for(let c=0;c<4;c++){const u=o*4+c;r.setXY(u,r.getX(u)*a,r.getY(u)*l)}}r.needsUpdate=!0}function Ji(i,e){if(!i.length)return null;const t=i.map(s=>{const o=new zn(s.w,s.h,s.d);return s.rx&&o.rotateX(s.rx),o.translate(s.x,s.y,s.z),o}),n=zi(t);t.forEach(s=>s.dispose());const r=new Pt(n,e);return r.matrixAutoUpdate=!1,r}const nr={skirtH:.152,railH:.152,railCentre:.95},Io=new Tt({vertexColors:!0}),rl=["#c98d64","#8d5a3c","#e3b498","#6b4a30","#d9a37e"],sl=["#2e2620","#5b4632","#8c8c8c","#d9d3c5","#141414"];function Ko(i){const e=i();if(e<.25)return{top:"#f2f3ef",legs:"#f2f3ef",cap:"#ffffff"};if(e<.31)return{top:"#20375c",legs:"#20375c",cap:"#ffffff"};if(e<.43)return{top:"#eeefe9",legs:"#565b62"};if(e<.55)return{top:"#68727d",legs:"#4c5257"};const t=["#7a8f6a","#c0a052","#7c5866","#5f7484","#96694f"],n=["#55504a","#3f464d","#6a5d4f","#44403a"];return{top:t[Math.floor(i()*t.length)],legs:n[Math.floor(i()*n.length)]}}function fr(i){let e=i%2147483646+1;for(let t=0;t<3;t++)e=e*16807%2147483647;return()=>(e=e*16807%2147483647)/2147483647}function Ct(i,e,t,n,r,s,o){const a=new zn(i,e,t);a.translate(n,r,s);const l=new je(o),c=a.attributes.position.count,u=new Float32Array(c*3);for(let h=0;h<c;h++)u[h*3]=l.r,u[h*3+1]=l.g,u[h*3+2]=l.b;return a.setAttribute("color",new Qt(u,3)),a}function jo(i,e,t,n){const r=rl[Math.floor(i()*rl.length)],s=e.cap??sl[Math.floor(i()*sl.length)],o=[Ct(.2,.22,.2,0,t,n,r),Ct(.21,.08,.21,0,t+.15,n-.01,s)];return e.cap&&o.push(Ct(.24,.03,.24,0,t+.2,n-.01,e.cap)),o}function Cm(i){const e=fr(i),t=Ko(e),n=[Ct(.09,.44,.11,-.09,.22,.17,t.legs),Ct(.09,.44,.11,.09,.22,.17,t.legs),Ct(.1,.13,.4,-.09,.5,.03,t.legs),Ct(.1,.13,.4,.09,.5,.03,t.legs),Ct(.32,.52,.2,0,.82,-.08,t.top),Ct(.08,.4,.1,-.21,.86,-.05,t.top),Ct(.08,.4,.1,.21,.86,-.05,t.top),...jo(e,t,1.2,-.06)],r=zi(n);return n.forEach(s=>s.dispose()),r}function Pm(i){const e=fr(i),t=Ko(e),n=[Ct(.1,.78,.12,-.09,.39,0,t.legs),Ct(.1,.78,.12,.09,.39,0,t.legs),Ct(.32,.52,.2,0,1.04,0,t.top),Ct(.08,.52,.1,-.21,1,0,t.top),Ct(.08,.52,.1,.21,1,0,t.top),...jo(e,t,1.42,0)],r=zi(n);return n.forEach(s=>s.dispose()),r}class Im{constructor(e,t,n){this.a=e,this.b=t;const r=fr(n),s=Ko(r);this.len=e.distanceTo(t),this.speed=1+r()*.5,this.s=r()*this.len,this.dir=r()<.5?1:-1;const o=(h,f,p)=>{const x=new Pt(h,Io);return x.position.set(f,p,0),this.group.add(x),x},a=()=>Ct(.1,.78,.12,0,-.39,0,s.legs),l=()=>Ct(.08,.52,.1,0,-.26,0,s.top);this.legL=o(a(),-.09,.78),this.legR=o(a(),.09,.78),this.armL=o(l(),-.21,1.28),this.armR=o(l(),.21,1.28);const c=[Ct(.32,.52,.2,0,1.04,0,s.top),...jo(r,s,1.42,0)],u=zi(c);c.forEach(h=>h.dispose()),this.group.add(new Pt(u,Io)),this.place()}a;b;group=new mn;legL;legR;armL;armR;s;dir=1;pause=0;phase=0;len;speed;place(){const e=this.s/this.len;this.group.position.lerpVectors(this.a,this.b,e);const t=(this.b.x-this.a.x)*this.dir,n=(this.b.z-this.a.z)*this.dir;this.group.rotation.y=Math.atan2(t,n)}update(e){if(this.pause>0){this.pause-=e;for(const n of[this.legL,this.legR,this.armL,this.armR])n.rotation.x*=Math.max(0,1-e*6);return}this.s+=this.speed*e*this.dir,(this.s<=0||this.s>=this.len)&&(this.s=Math.max(0,Math.min(this.len,this.s)),this.dir*=-1,this.pause=1.2+this.phase%1.3),this.phase+=this.speed*e*3.4;const t=Math.sin(this.phase)*.5;this.legL.rotation.x=t,this.legR.rotation.x=-t,this.armL.rotation.x=-t*.6,this.armR.rotation.x=t*.6,this.place(),this.group.position.y+=Math.abs(Math.sin(this.phase))*.025}}class Lm{constructor(e,t,n){this.zc=n;const r=new zn(.05,2.06,.5),s=ce.liftDoor;this.leafA=new Pt(r,s),this.leafB=new Pt(r.clone(),s),this.leafA.position.set(t,1.03,n-.25),this.leafB.position.set(t,1.03,n+.25),e.add(this.leafA,this.leafB)}zc;leafA;leafB;openT=0;target=0;update(e){this.openT+=(this.target-this.openT)*Math.min(1,e*5);const t=this.openT*.48;this.leafA.position.z=this.zc-.25-t,this.leafB.position.z=this.zc+.25+t}get openness(){return this.openT}}const ol=i=>i.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""),L={CORRIDOR_W:3,ROOM_H:3,STOREY:4,DOOR_W:1.2,DOOR_H:2.1,DOOR_SPACING:2,ENTRY:2.2,END_ZONE:2.6,NOTICE_SPACING:1.25,LOBBY_W:7,LOBBY_D:7,LANDING_Z0:7,LANDING_Z1:10,STREET_Z0:7,STREET_Z1:11,STREET_H:4,STRIP:8.2,STAIR_SLOT:3.6,WING_GAP:12,PIT_X0:-3.5,PIT_X1:-.7,PIT_Z0:1.2,PIT_Z1:5.5},Dm=(i,e,t=0,n=0)=>{const r=Math.max(t,n)*L.NOTICE_SPACING;return L.ENTRY+Math.max(i,e,1)*L.DOOR_SPACING+(r?r+.4:0)+L.END_ZONE};function Um(i){const e=new Map(i.classes.map(B=>[B.id,B])),t={};for(const B of i.classes)t[B.id]=[];for(const B of i.classes)B.supers.length&&t[B.supers[0]]?.push(B.id);for(const B of i.classes){const $=new Set(t[B.id]);t[B.id]=B.subs.filter(oe=>$.has(oe))}const n=new Map;function r(B){if(n.has(B))return n.get(B);const $=t[B],oe=$.filter(q=>t[q].length),G=[];let ee=oe.reduce((q,Q)=>q+o(Q),0),ge=0;for(const q of $)t[q].length||(ge<ee?(G.push(q),ge+=o(q)):(oe.push(q),ee+=o(q)));const Ee={south:oe,north:G,southSum:ee,northSum:ge};return n.set(B,Ee),Ee}const s=new Map;function o(B){if(s.has(B))return s.get(B);const $=t[B];let oe=L.STRIP;if($.length){const{southSum:G,northSum:ee}=r(B);oe=Math.max(L.STRIP,L.STAIR_SLOT+Math.max(G,ee))}return s.set(B,oe),oe}const a={},l={};function c(B,$,oe,G=!1){const ee=e.get(B),ge=t[B],Ee=ge.length?$+.2-L.PIT_X0:$+L.STRIP/2;if(a[B]={x:Ee,level:oe,y:-4*oe,flip:G,corridorLen:Dm(ee.out.length,ee.in.length,ee.notes.length,ee.examples.length)},ge.length){const{south:q,north:Q,southSum:ie,northSum:pe}=r(B);let de=$+L.STAIR_SLOT;for(const Ge of q)c(Ge,de,oe+1,!1),de+=o(Ge);let Ue=$+L.STAIR_SLOT;for(const Ge of Q)c(Ge,Ue,oe+1,!0),Ue+=o(Ge);const tt=new Set(ge);l[B]={parentId:B,level:oe+1,y:-4*(oe+1),x0:$+.2,x1:$+L.STAIR_SLOT+Math.max(ie,pe,5),stairX:Ee+(L.PIT_X0+L.PIT_X1)/2,homeChildIds:ge,southIds:q,northIds:Q,portalChildIds:ee.subs.filter(Ge=>!tt.has(Ge))}}}const u=B=>B.rootIds.reduce(($,oe)=>$+o(oe),0),h=i.wings.filter(B=>B.zone!=="gallery"),f=h.reduce((B,$)=>B+u($),0);let p=0;const x=new Map;for(const B of h){const $=p<f/2;x.set(B.key,$?"south":"north"),$&&(p+=u(B))}const v=[],m={south:6,north:6};for(const B of h){const $=x.get(B.key),oe=m[$];for(const G of B.rootIds)c(G,m[$],0),m[$]+=o(G);v.push({key:B.key,x0:oe,x1:m[$],rootIds:B.rootIds,street:$}),m[$]+=L.WING_GAP}const d=Math.max(m.south,m.north)-L.WING_GAP+6,y=30.5,A=-30,R=i.wings.filter(B=>B.zone==="gallery"),C=R.reduce((B,$)=>B+u($)+L.WING_GAP,0);let T=A-C;const P=T;for(const B of R){const $=T;for(const oe of B.rootIds)c(oe,T,0),T+=o(oe);v.push({key:B.key,x0:$,x1:T,rootIds:B.rootIds,street:"gallery"}),T+=L.WING_GAP}const O=new Set(R.map(B=>B.key));for(const B of v){if(B.street!=="north")continue;const $=B.x0+B.x1;for(const G of i.classes){if(G.wing!==B.key)continue;const ee=a[G.id];ee.x=$-ee.x,ee.flip=!ee.flip,ee.mirror=!0}const oe=new Set(i.classes.filter(G=>G.wing===B.key).map(G=>G.id));for(const G of Object.values(l))oe.has(G.parentId)&&([G.x0,G.x1]=[$-G.x1,$-G.x0],G.stairX=$-G.stairX,G.mirror=!0)}const g=[],S=[];for(const B of i.classes){const $=a[B.id];!$.mirror&&$.flip&&g.push($),$.mirror&&!$.flip&&S.push($)}let b=28;const D=2,k=L.CORRIDOR_W/2+.3,W=L.LOBBY_W/2+.15,H=(B,$,oe,G)=>Math.abs(B.x-$.x)<oe+G;for(const B of g)for(const $ of S)B.level===$.level&&(H(B,$,k,k)&&(b=Math.max(b,12+B.corridorLen+$.corridorLen+D)),H(B,$,k,W)&&(b=Math.max(b,12+B.corridorLen+D)),H(B,$,W,k)&&(b=Math.max(b,12+$.corridorLen+D)));b=Math.ceil(b);const K=L.STREET_Z1+b+L.STREET_Z0+4;for(const B of i.classes){const $=a[B.id];$.mirror=!!$.mirror,$.oz=$.mirror?$.flip?K:K-17:$.flip?17:0,O.has(B.wing)&&($.oz+=y)}const V=new Map(i.classes.map(B=>[B.id,B.wing]));for(const B of Object.values(l))B.dz=O.has(V.get(B.parentId))?y:0;const re=[];for(const B of i.classes)for(const $ of B.supers.slice(1))re.push({childId:B.id,parentId:$});return{areas:a,landings:l,homeChildren:t,nonPrimaryUp:re,wings:v,street:{x0:0,x1:d},loop:{C:b,K,xEnd:d,south:{z0:L.STREET_Z0,z1:L.STREET_Z1},north:{z0:L.STREET_Z1+b,z1:L.STREET_Z1+b+4},connectors:{west:[.2,3.8],east:[d-3.8,d-.2]},gallery:{x0:P-2,x1:-25.6,z0:L.STREET_Z0+y,z1:L.STREET_Z1+y,dz:y,entrance:[-28.4,-25.9]}}}}const on="__atrium",al=new cn({color:16767}),Nm=(i,e)=>i===null&&e===null?"":`${i??0}..${e===-1?"*":e??"*"}`,ll=(i,e)=>{if(i===null&&e===null)return"";const t=e===null||String(e)==="-1"?"*":String(e);return`${i??0}..${t}`},qr=(i,e,t,n)=>`${[ll(n.oppMin,n.oppMax),i].filter(Boolean).join(" ")} — ${e} → ${[ll(n.min,n.max),t].filter(Boolean).join(" ")}`;class dr{constructor(e,t,n,r=!1){this.group=e,this.origin=t,this.signs=n,this.f=r?-1:1,e.rotation.y=r?Math.PI:0}group;origin;signs;colliders=[];walkables=[];trims=[];plates=[];glass=[];leds=[];seats=[];f;local(e,t,n){return new F(this.origin.x+this.f*e,this.origin.y+t,this.origin.z+this.f*n)}batches=new Map;box(e,t,n,r,s,o,a,l={solid:!0}){const c={w:e,h:t,d:n,x:s,y:o,z:a,worldUV:l.vinyl||l.worldUV},u=this.batches.get(r);u?u.push(c):this.batches.set(r,[c]);const h=this.origin.x+this.f*s,f=this.origin.z+this.f*a,p=new xt(new F(h-e/2,this.origin.y+o-t/2,f-n/2),new F(h+e/2,this.origin.y+o+t/2,f+n/2));if(l.solid&&this.colliders.push(p),l.walkable&&this.walkables.push(p),l.trim)for(const x of l.trim)this.trimFace(x,e,t,n,s,o,a)}trimFace(e,t,n,r,s,o,a){const l=o-n/2,c=.05,u=e.startsWith("x")?{w:c,d:Math.max(.3,r-.1)}:{w:Math.max(.3,t-.1),d:c},h=c/2+.005,f=e==="x+"?s+t/2+h:e==="x-"?s-t/2-h:s,p=e==="z+"?a+r/2+h:e==="z-"?a-r/2-h:a;this.trims.push({...u,h:nr.skirtH,x:f,y:l+nr.skirtH/2,z:p},{...u,h:nr.railH,x:f,y:l+nr.railCentre,z:p})}led(e,t,n,r=.6,s=.6){this.leds.push({w:r,h:.035,d:s,x:e,y:n,z:t})}oakSpec(e){this.trims.push(e)}steelSpec(e){this.plates.push(e)}chairSpots=[];peopleGeos=[];sit(e,t,n,r,s){const o=Cm(s);r===-1&&o.rotateY(Math.PI),o.translate(e,t,n),this.peopleGeos.push(o)}stand(e,t,n,r,s){const o=Pm(s);o.rotateY(r),o.translate(e,t,n),this.peopleGeos.push(o)}chair(e,t,n,r=1){this.chairSpots.push({x:e,y:t,z:n,face:r});const s=t+.45;this.seats.push({w:.44,h:.06,d:.4,x:e,y:s,z:n}),this.seats.push({w:.44,h:.48,d:.05,x:e,y:s+.36,z:n-r*.19});for(const[o,a]of[[-.18,-.16],[.18,-.16],[-.18,.16],[.18,.16]])this.plates.push({w:.035,h:.44,d:.035,x:e+o,y:t+.22,z:n+a});this.colliders.push(new xt().setFromPoints([this.local(e-.26,t,n-.26),this.local(e+.26,t+.95,n+.26)]))}doorFurniture(e,t,n,r){const o=e.startsWith("x"),a=o?{w:.02,d:.28}:{w:.28,d:.02},l=o?{w:.02,d:L.DOOR_W-.25}:{w:L.DOOR_W-.25,d:.02},c=o?{w:.02,d:.1}:{w:.1,d:.02},u=.06,h=e==="x+"?t+u:e==="x-"?t-u:t,f=e==="z+"?r+u:e==="z-"?r-u:r,p=.42;this.glass.push({...a,h:.42,x:h,y:n+1.5,z:f}),this.plates.push({...l,h:.25,x:h,y:n+.13,z:f}),this.plates.push({...c,h:.3,x:o?h:t+p,y:n+1.05,z:o?r+p:f})}populate(e,t){if(e!=="off"){const n=e==="full"?.4:.2,r=fr(t);for(const s of this.chairSpots)r()<n&&this.sit(s.x,s.y+.03,s.z,s.face,Math.floor(r()*99991))}if(this.peopleGeos.length){const n=zi(this.peopleGeos);this.peopleGeos.forEach(s=>s.dispose());const r=new Pt(n,Io);r.matrixAutoUpdate=!1,this.group.add(r),this.peopleGeos=[]}}finalize(){for(const[e,t]of this.batches){const n=t.map(o=>{const a=new zn(o.w,o.h,o.d);return o.worldUV&&Rm(a,o.w,o.h,o.d),a.translate(o.x,o.y,o.z),a}),r=zi(n);n.forEach(o=>o.dispose());const s=new Pt(r,e);s.matrixAutoUpdate=!1,this.group.add(s)}this.batches.clear();for(const e of[Ji(this.trims,ce.oak),Ji(this.plates,ce.steel),Ji(this.glass,ce.glass),Ji(this.leds,ce.led),Ji(this.seats,ce.chair)])e&&this.group.add(e)}sign(e,t,n,r,s,o,a,l){const c=ym(this.signs,e,t,this.local(n,r,s),a,l);return c.position.set(n,r,s),c.rotation.y=o,c.matrixAutoUpdate=!1,c.updateMatrix(),this.group.add(c),c}}function Fm(i,e,t){const{byId:n,layout:r}=e,s=new mn;s.name=`area:${i.label}`,s.position.copy(t);const o=r.areas[i.id].flip,a=o?Math.PI:0,l=new dr(s,t,e.signs,o),c=[],u=qn(i.wing),h=r.areas[i.id].corridorLen,f=L.CORRIDOR_W,p=L.ROOM_H,x=L.LOBBY_W,v=L.LOBBY_D,m=r.landings[i.id],d=i.supers.length===0,y=-h/2;l.box(f,.1,h,ce.floor,0,-.05,y,{walkable:!0,vinyl:!0}),l.box(f,.1,h,ce.ceiling,0,p+.05,y,{worldUV:!0}),l.box(.15,p,h,ce.wall,f/2+.075,p/2,y,{solid:!0,trim:["x-"]}),l.box(.15,p,h,ce.wall,-f/2-.075,p/2,y,{solid:!0,trim:["x+"]}),l.box(f+.3,p,.15,ce.endWall,0,p/2,-h-.075,{solid:!0,trim:["z+"]});for(let se=0;se<Math.floor(h/3);se++)l.led(0,-(se+.6)*3,p-.02,.35,1.3);m?(l.box(x/2-L.PIT_X1,.1,v,ce.floor,(L.PIT_X1+x/2)/2,-.05,v/2,{walkable:!0,vinyl:!0}),l.box(L.PIT_X1-L.PIT_X0,.1,L.PIT_Z0,ce.floor,(L.PIT_X0+L.PIT_X1)/2,-.05,L.PIT_Z0/2,{walkable:!0,vinyl:!0}),l.box(L.PIT_X1-L.PIT_X0,.1,v-L.PIT_Z1,ce.floor,(L.PIT_X0+L.PIT_X1)/2,-.05,(L.PIT_Z1+v)/2,{walkable:!0,vinyl:!0})):l.box(x,.1,v,ce.floor,0,-.05,v/2,{walkable:!0,vinyl:!0}),l.box(x,.1,v,ce.ceiling,0,p+.05,v/2,{worldUV:!0}),l.box(.15,p,v,ce.wall,x/2+.075,p/2,v/2,{solid:!0,trim:["x-"]}),l.box(.15,p,v,ce.wall,-x/2-.075,p/2,v/2,{solid:!0,trim:["x+"]});const A=(x-f)/2;l.box(A,p,.15,ce.wall,f/2+A/2,p/2,-.075,{solid:!0,trim:["z+","z-"]}),l.box(A,p,.15,ce.wall,-2.5,p/2,-.075,{solid:!0,trim:["z+","z-"]}),l.box(2,p,.15,ce.wall,-2.5,p/2,v+.075,{solid:!0,trim:["z-","z+"]}),l.box(2,p,.15,ce.wall,2.5,p/2,v+.075,{solid:!0,trim:["z-","z+"]}),l.box(3,p-L.DOOR_H-.3,.15,ce.wall,0,(p+L.DOOR_H+.3)/2,v+.075,{});for(const se of[-1.8,1.8])for(const _e of[2,5])l.led(se,_e,p-.02);const R=d?L.STREET_H:L.ROOM_H,C=d?2.7:2.4,T=d?0:.4;l.box(.006,.44,1.6,al,T,C,v+1.35,{});for(const se of[1,-1])l.sign(1.6,.44,T+se*.0035,C,v+1.35,se*Math.PI/2,()=>dt({widthPx:800,heightPx:220,title:i.label,subtitle:i.roomNumber?`Room ${i.roomNumber}`:`${i.wing} wing`,titleSize:62}),`hang:${i.label}:${se}`);for(const se of[T-.6,T+.6])l.steelSpec({w:.03,h:R-C-.22,d:.03,x:se,y:(R+C+.22)/2,z:v+1.35});const P=new cn({color:new je(u)});l.box(.18,.012,v+h,P,0,.012,(v-h)/2,{}),l.sign(2.6,.7,0,p-.5,.08,0,()=>dt({widthPx:1024,heightPx:276,title:i.label,subtitle:[i.roomNumber?`Room ${i.roomNumber}`:null,`${i.wing} wing · ${i.floor?`level −${i.floor}`:"ground"}`].filter(Boolean).join(" · "),titleSize:96}),`name:${i.label}`);const O=i.supers.map(se=>n.get(se)?.label??"?");l.sign(2.9,.62,0,L.DOOR_H+.55,v-.09,Math.PI,()=>dt({widthPx:1152,heightPx:246,title:d?"⌂ Hospital Street":`Stairs ↑ ${O[0]}`,subtitle:d?"reception · all wings":`landing · stairs at the west end${O.length>1?` · also: ${O.slice(1).join(", ")}`:""}`,titleSize:74}),`back:${i.label}`),l.sign(1.9,1.5,2.5,1.62,.01,0,()=>dt({widthPx:1024,heightPx:810,title:i.label,subtitle:[i.plural?`plural: ${i.plural}`:null,i.alsoKnownAs.length?`also: ${i.alsoKnownAs.join("; ")}`:null,i.roomNumber?`Room ${i.roomNumber}`:null].filter(Boolean).join(" · "),body:i.description??"Definition pending.",footer:i.source?`Source: ${i.source}`:void 0,fitBody:!0,titleSize:88,align:"left"}),`poster:${i.label}`),e.illustrations?.has(ol(i.label))&&(l.oakSpec({w:1.3,h:1.38,d:.05,x:-2.5,y:1.62,z:-.02}),l.sign(1.2,1.28,-2.5,1.62,.01,0,()=>Po(`art/illustrations/${ol(i.label)}.jpg`,1.2/1.28),`illu:${i.label}`));const g=i.self.length;i.deprecated.length&&l.sign(.9,.42,-1.44,1.9,-1.4,Math.PI/2,()=>bm(i.deprecated),`old:${i.label}`);const S=Math.max(i.out.length,i.in.length,1)*L.DOOR_SPACING,b=-(L.ENTRY+S+.2),D=(se,_e)=>{const ye=se.match(/(\d+)/);return ye?`${_e} ${ye[1]}`:_e};let k=0;const W=(se,_e,ye,I,et)=>{const $e=se==="right"?1:-1,Ke=b-(_e+.5)*L.NOTICE_SPACING;l.oakSpec({w:.05,h:1.34,d:1.06,x:$e*(f/2-.035),y:1.55,z:Ke}),l.sign(.94,1.22,$e*(f/2-.075),1.55,Ke,$e>0?-Math.PI/2:Math.PI/2,()=>Sm(ye,I,et),`notice:${i.label}:${ye}`),k++};i.notes.forEach((se,_e)=>W("left",_e,D(se.key,"Note"),Vi,se.text)),i.examples.forEach((se,_e)=>W("right",_e,D(se.key,"Example"),nl,se.text));const H=i.notes.length-i.examples.length,K=Math.min(Math.abs(H),2);for(let se=0;se<K;se++){const _e=H>0?1:-1,ye=(H>0?i.examples.length:i.notes.length)+se,I=b-(ye+.5)*L.NOTICE_SPACING,et=(i.id.charCodeAt(0)+i.id.charCodeAt(3)*31+se*7>>>0)%997,$e=e.art.length?e.art[et%e.art.length]:null;l.oakSpec({w:.05,h:1.02,d:1.36,x:_e*(f/2-.035),y:1.68,z:I}),l.sign(1.28,.94,_e*(f/2-.075),1.68,I,_e>0?-Math.PI/2:Math.PI/2,()=>$e?Po(`art/${$e.file}`):Yl(et),`print:${i.label}:${se}`),l.sign(.44,.13,_e*(f/2-.075),1.05,I,_e>0?-Math.PI/2:Math.PI/2,()=>$e?$r($e.title,`${$e.artist} · ${$e.licence} · Wikimedia Commons`):$r("Untitled study","Procedural print — placeholder"),`placard:${i.label}:${se}`)}l.chair(2.35,0,.42,1),l.chair(2.95,0,.42,1),l.chair(-2.35,0,.42,1),l.chair(-2.95,0,.42,1);const V=se=>-(L.ENTRY+(se+.5)*L.DOOR_SPACING),re=(se,_e,ye,I,et,$e,Ke,Ie)=>{const E=se==="right"?1:-1,_=E*(f/2),U=V(_e);l.box(.08,L.DOOR_H,L.DOOR_W,ce.door,_-E*.05,L.DOOR_H/2,U,{}),l.doorFurniture(E>0?"x-":"x+",_-E*.05,0,U);const ne=E*.75;l.box(1.3,.56,.006,al,ne,2.42,U,{});for(const ae of[1,-1])l.sign(1.3,.56,ne,2.42,U+ae*.0035,ae>0?0:Math.PI,()=>dt({widthPx:760,heightPx:328,title:Ke,subtitle:Ie,titleSize:50}),`doorsign:${et}:${ae}`);for(const ae of[ne-.45,ne+.45])l.steelSpec({w:.03,h:p-2.69,d:.03,x:ae,y:(p+2.69)/2,z:U});c.push({kind:ye,areaId:i.id,elementId:I,label:et,targetIds:[$e],triggerPos:l.local(_-E*.45,0,U),radius:.75,halfX:.4,halfZ:.55,auto:!0,exitPos:l.local(_-E*1.35,0,U),exitYaw:(E>0?Math.PI/2:-Math.PI/2)+a})};i.out.forEach((se,_e)=>{const ye=n.get(se.targetId)?.label??"?";re("right",_e,"door-out",se.elementId,se.label,se.targetId,ye,qr(i.label,se.label,ye,se))}),i.in.forEach((se,_e)=>{const ye=n.get(se.sourceId)?.label??"?";re("left",_e,"door-in",se.elementId,se.label,se.sourceId,ye,qr(ye,se.label,i.label,se))});const B=se=>e.art.length?e.art[se%e.art.length]:null,$=se=>(i.id.charCodeAt(1)*17+i.id.charCodeAt(5)*5+se*31>>>0)%997,oe=Math.max(i.out.length,i.in.length,1),G=(se,_e)=>{const ye=se==="right"?1:-1;for(let I=_e;I<oe;I+=2){const et=$(I*2+(ye>0?1:0));vn(l,B(et),et,ye*(f/2-.075),1.68,V(I),ye>0?-Math.PI/2:Math.PI/2,`${i.label}:${se}:${I}`)}};i.out.length<oe&&G("right",i.out.length),i.in.length<oe&&G("left",i.in.length);{const se=$(99);vn(l,B(se),se,f/2-.075,1.68,-1.15,-Math.PI/2,`${i.label}:entry`)}if(i.self.forEach((se,_e)=>{const ye=f/2-.8-_e*(L.DOOR_W+.2);l.box(L.DOOR_W,L.DOOR_H,.08,ce.door,ye,L.DOOR_H/2,-h+.06,{}),l.doorFurniture("z+",ye,0,-h+.06),l.sign(1.3,.4,ye,L.DOOR_H+.4,-h+.07,0,()=>dt({widthPx:768,heightPx:236,title:`${se.label} ${Nm(se.min,se.max)}`,subtitle:`→ ${i.label}`,titleSize:56}),`selfsign:${se.label}`),c.push({kind:"door-self",areaId:i.id,elementId:se.elementId,label:se.label,targetIds:[i.id],triggerPos:l.local(ye,0,-h+.5),radius:.7,halfX:.55,halfZ:.45,auto:!0})}),!g){for(const se of[-1,1]){const _e=se*.44;l.box(.85,L.DOOR_H,.08,ce.door,_e,L.DOOR_H/2,-h+.06,{}),l.steelSpec({w:.7,h:.05,d:.05,x:_e,y:1.05,z:-h+.13}),l.steelSpec({w:.7,h:.22,d:.02,x:_e,y:.13,z:-h+.11})}l.steelSpec({w:.04,h:L.DOOR_H,d:.03,x:0,y:L.DOOR_H/2,z:-h+.11}),l.sign(1.1,.34,0,L.DOOR_H+.35,-h+.07,0,()=>dt({widthPx:640,heightPx:198,title:"FIRE EXIT",subtitle:"emergency use only",background:nl,titleSize:78,align:"center"}),`fire:${i.label}`)}const ee=i.supers.length>0||i.subs.length>0;let ge,Ee,q;const Q=[],ie=[];{const se=Lo(i,n),_e=se.length?Math.max(...se.map(ye=>ye.level)):0;for(let ye=_e;ye>=1;ye--)for(const I of se.filter(et=>et.level===ye)){const et=n.get(I.id);Q.push({text:`▲${ye} ${et?.label??"?"}`,chip:qn(et?.wing??"")}),ie.push(I.id)}Q.push({text:`● ${i.label}`,strong:!0,chip:u}),ie.push(null);for(const ye of i.subs){const I=n.get(ye);Q.push({text:`▼1 ${I?.label??"?"}`,chip:qn(I?.wing??"")}),ie.push(ye)}Q.push({text:"⌂ Reception"}),ie.push(on)}const pe={widthPx:850,heightPx:750,title:ee?"Lift":"Exit",subtitle:i.label,rows:Q,rowSize:Q.length>10?30:38,columns:Q.length>10?2:1},de=(()=>{const se=Co(pe,Q.length);return Q.flatMap((_e,ye)=>se[ye]&&ie[ye]?[{rect:se[ye],id:ie[ye],label:_e.text.replace(/^[▲▼●⌂]\S* ?/u,"")}]:[])})();let Ue;ee&&(l.box(.08,2.4,5.15-4.85,ce.liftDoor,2+.04,2.4/2,(4.85+5.15)/2),l.box(.08,2.4,6.45-6.15,ce.liftDoor,2+.04,2.4/2,(6.15+6.45)/2),l.box(.08,2.4-L.DOOR_H,1,ce.liftDoor,2+.04,(2.4+L.DOOR_H)/2,5.65,{}),l.box(3.42-2,2.4,.08,ce.liftDoor,2.71,2.4/2,4.85+.04),l.box(3.42-2,2.4,.08,ce.liftDoor,2.71,2.4/2,6.45-.04),l.box(3.42-2,.06,6.45-4.85,ce.liftDoor,2.71,2.4+.03,5.65,{}),l.led(2.71,5.65,2.4-.02,.5,.5),q={doors:new Lm(s,2+.1,5.65),doorwayPos:l.local(2+.05,0,5.65)},l.steelSpec({w:.06,h:2.12,d:.09,x:2-.01,y:1.06,z:5.12}),l.steelSpec({w:.06,h:2.12,d:.09,x:2-.01,y:1.06,z:6.18}),l.steelSpec({w:.06,h:.09,d:1.15,x:2-.01,y:2.14,z:5.65}),l.steelSpec({w:.16,h:.02,d:1.05,x:2+.02,y:.012,z:5.65}),l.steelSpec({w:.03,h:.26,d:.16,x:2-.015,y:1.12,z:4.99}),l.sign(.1,.2,2-.035,1.12,4.99,-Math.PI/2,()=>dt({widthPx:64,heightPx:128,title:"▲",subtitle:"▼",titleSize:40,align:"center"}),`liftcall:${i.label}`),l.sign(.72,.24,2-.015,2.27,5.65,-Math.PI/2,()=>dt({widthPx:384,heightPx:128,title:"LIFT",subtitle:i.floor?`level −${i.floor}`:"ground",titleSize:56,align:"center"}),`liftind:${i.label}`),l.steelSpec({w:1.24,h:.05,d:.04,x:2.71+.04,y:.92,z:4.85+.13}),l.steelSpec({w:1.24,h:.05,d:.04,x:2.71+.04,y:.92,z:6.45-.13}),l.steelSpec({w:.04,h:.05,d:1.44,x:3.42-.13,y:.92,z:5.65}),l.sign(.42,.15,2.71+.35,2.02,4.85+.09,0,()=>dt({widthPx:336,heightPx:120,title:"MAX 8 PERSONS · 610 kg",titleSize:30,align:"center",background:"#e8e9e4",color:"#3a4046"}),`liftload:${i.label}`),l.sign(.4,.14,2.71-.2,1.78,6.45-.09,Math.PI,()=>dt({widthPx:320,heightPx:112,title:"NO SMOKING",titleSize:40,align:"center",background:"#f4f4f1",color:"#b3261e"}),`liftsmoke:${i.label}`),Ue=l.sign(.95,1.05,2.71-.08,1.3,4.85+.09,0,()=>rr(pe),`liftcab:${i.label}`),ge=l.local(2.71,0,5.65),Ee=Math.PI/2+a,c.push({kind:"lift",areaId:i.id,label:"Lift",targetIds:[],triggerPos:ge.clone(),radius:.75,auto:!1,prompt:"E — Lift: select destination"}));const tt=l.sign(1.7,1.5,x/2-.09,1.7,3.1,-Math.PI/2,()=>rr(pe),`liftboard:${i.label}`);let Ge;if(ee&&(Ge=[{kind:"lift",mesh:tt,cells:de}],Ue&&Ge.push({kind:"lift",mesh:Ue,cells:de})),i.supers.slice(1).forEach((se,_e)=>{const ye=n.get(se),I=6.35-_e*1.15;l.box(.1,L.DOOR_H,1,ce.door,-3.5+.06,L.DOOR_H/2,I,{}),l.doorFurniture("x+",-3.5+.06,0,I),l.sign(1.35,.42,-3.5+.1,L.DOOR_H+.4,I,Math.PI/2,()=>dt({widthPx:768,heightPx:240,title:`Stairs ↑ ${ye?.label??"?"}`,subtitle:`${ye?.wing??"?"} wing`,titleSize:56}),`upportal:${ye?.label}`),c.push({kind:"stair-up",areaId:i.id,label:`Stairs ↑ ${ye?.label??"?"}`,targetIds:[se],triggerPos:l.local(-3.5+.5,0,I),radius:.7,halfX:.45,halfZ:.55,auto:!0})}),m?Om(i,l,c,e):i.subs.length&&i.subs.forEach((se,_e)=>{const ye=n.get(se),I=4.6-_e*1.15;l.box(.1,L.DOOR_H,1,ce.door,-3.5+.06,L.DOOR_H/2,I,{}),l.doorFurniture("x+",-3.5+.06,0,I),l.sign(1.35,.42,-3.5+.1,L.DOOR_H+.4,I,Math.PI/2,()=>dt({widthPx:768,heightPx:240,title:`↓ ${ye?.label??"?"}`,subtitle:`homed in ${ye?.wing??"?"} wing`,titleSize:56}),`downportal:${ye?.label}`),c.push({kind:"stair-down",areaId:i.id,label:`Stairs ↓ ${ye?.label??"?"}`,targetIds:[se],triggerPos:l.local(-3.5+.5,0,I),radius:.7,halfX:.45,halfZ:.55,auto:!0})}),i.subs.length){const se=i.subs.map(_e=>n.get(_e)?.label??"?");l.sign(1.9,.85,-3.5+.09,2.45,3.3,Math.PI/2,()=>rr({widthPx:900,heightPx:400,title:"Stairs ↓",rows:se.map(_e=>({text:_e})),rowSize:se.length>6?34:44,columns:se.length>8?2:1}),`stairsdown:${i.label}`)}const nt=[new xt().setFromPoints([l.local(-x/2-.3,-.5,-.2),l.local(x/2+.3,2.5,v+.2)]),new xt().setFromPoints([l.local(-f/2-.4,-.5,-h-.5),l.local(f/2+.4,2.5,0)])];if(m){const se=o?-1:1;nt.push(new xt().setFromPoints([l.local(L.PIT_X0-.2,-4-.5,L.PIT_Z0-.2),l.local(L.PIT_X1+.2,2.5,v+.2)]),new xt().setFromPoints([new F(m.x0-.3,t.y-L.STOREY-.5,t.z+se*5.4),new F(m.x1+.3,t.y-L.STOREY+2.5,t.z+se*(L.LANDING_Z1+.3))]))}return l.populate(e.people,i.id.charCodeAt(0)*131+i.id.charCodeAt(4)*17+i.id.charCodeAt(8)>>>0),l.finalize(),{id:i.id,wc:i,label:i.label,group:s,colliders:l.colliders,walkables:l.walkables,interactables:c,spawnPos:l.local(0,0,4.6),spawnYaw:a,liftPos:ge,liftYaw:Ee,lift:q,boards:Ge,notices:k,boxes:nt}}function Om(i,e,t,n){const{byId:r,layout:s}=n,o=s.landings[i.id],a=e.origin,l=L.STOREY,c=L.PIT_X1-L.PIT_X0,u=c/2-.1,h=L.PIT_X0+u/2,f=L.PIT_X1-u/2,p=.8,x=L.PIT_Z1-L.PIT_Z0-p,v=12,m=x/v;for(let G=0;G<v;G++){const ee=-((G+1)*(l/2))/v;e.box(u,.09,m+.02,ce.oak,h,ee-.045,L.PIT_Z1-(G+.5)*m,{walkable:!0})}e.box(c,.1,p,ce.oak,(L.PIT_X0+L.PIT_X1)/2,-l/2-.05,L.PIT_Z0+p/2,{walkable:!0});for(let G=0;G<v;G++){const ee=-l/2-(G+1)*(l/2)/v;e.box(u,.09,m+.02,ce.oak,f,ee-.045,L.PIT_Z0+p+(G+.5)*m,{walkable:!0})}e.box(c,.1,L.LOBBY_D-L.PIT_Z1+.1,ce.floor,(L.PIT_X0+L.PIT_X1)/2,-l-.05,(L.PIT_Z1+L.LOBBY_D)/2,{walkable:!0,vinyl:!0}),e.box(c+.2,.1,L.PIT_Z1-L.PIT_Z0+.1,ce.floor,(L.PIT_X0+L.PIT_X1)/2,-l-.05,(L.PIT_Z0+L.PIT_Z1)/2,{walkable:!0,vinyl:!0});{const G=Math.atan2(l/2,L.PIT_Z1-L.PIT_Z0-p),ee=Math.hypot(L.PIT_Z1-L.PIT_Z0-p,l/2)+.1,ge=(L.PIT_Z0+p+L.PIT_Z1)/2;e.oakSpec({w:u+.05,h:.06,d:ee,x:h,y:-l/4-.22,z:ge,rx:-G}),e.oakSpec({w:u+.05,h:.06,d:ee,x:f,y:-3*l/4-.22,z:ge,rx:G});const Ee=(L.PIT_X0+L.PIT_X1)/2;e.oakSpec({w:.24,h:.34,d:ee,x:Ee,y:-l/4-.12,z:ge,rx:-G}),e.oakSpec({w:.24,h:.34,d:ee,x:Ee,y:-3*l/4-.12,z:ge,rx:G})}const d=l+L.ROOM_H;e.box(.1,d,L.LOBBY_D-L.PIT_Z0,ce.wall,L.PIT_X0-.05,-l+d/2-L.ROOM_H,(L.PIT_Z0+L.LOBBY_D)/2),e.box(.1,l,L.PIT_Z1-L.PIT_Z0,ce.wall,L.PIT_X1+.05,-l/2,(L.PIT_Z0+L.PIT_Z1)/2),e.box(.1,l,L.LOBBY_D-L.PIT_Z1,ce.wall,L.PIT_X1+.05,-l/2,(L.PIT_Z1+L.LOBBY_D)/2),e.box(c+.2,l,.1,ce.wall,(L.PIT_X0+L.PIT_X1)/2,-l/2,L.PIT_Z0-.05);const y=nr.railCentre,A=(G,ee,ge,Ee,q)=>{const Q=Math.abs(ge-G)>Math.abs(Ee-ee),ie=Q?ge-G:Ee-ee;e.oakSpec({w:Q?ie:.06,h:.06,d:Q?.06:ie,x:(G+ge)/2,y:q+y,z:(ee+Ee)/2});for(let pe=.15;pe<ie;pe+=.3)e.oakSpec({w:.035,h:y-.03,d:.035,x:Q?G+pe:G,y:q+(y-.03)/2,z:Q?ee:ee+pe});e.colliders.push(new xt().setFromPoints([e.local(Math.min(G,ge)-.05,q,Math.min(ee,Ee)-.05),e.local(Math.max(G,ge)+.05,q+y+.05,Math.max(ee,Ee)+.05)]))};A(L.PIT_X1+.04,L.PIT_Z0,L.PIT_X1+.04,L.PIT_Z1,0),A(L.PIT_X0,L.PIT_Z0-.04,L.PIT_X1,L.PIT_Z0-.04,0),A(L.PIT_X1-u-.2,L.PIT_Z1+.04,L.PIT_X1,L.PIT_Z1+.04,0);const R=(G,ee,ge)=>{e.oakSpec({w:.09,h:y+.17,d:.09,x:G,y:ge+(y+.17)/2,z:ee}),e.oakSpec({w:.13,h:.035,d:.13,x:G,y:ge+y+.17,z:ee})};R(L.PIT_X1+.04,L.PIT_Z0-.04,0),R(L.PIT_X1+.04,L.PIT_Z1+.04,0),R(L.PIT_X1-u-.2,L.PIT_Z1+.04,0);{const G=(L.PIT_X0+L.PIT_X1)/2,ee=Math.atan2(l/2,x),ge=Math.hypot(x,l/2)+.15,Ee=L.PIT_Z1,q=L.PIT_Z0+p,Q=(Ee+q)/2,ie=Ue=>y-l/2*((Ee-Ue)/x),pe=(Ue,tt,Ge)=>e.oakSpec({w:.07,h:.07,d:ge,x:Ue,y:tt,z:Q,rx:Ge});pe(G,y-l/4,-ee),pe(G,y-3*l/4,ee),pe(L.PIT_X0+.08,y-l/4,-ee),pe(L.PIT_X1-.08,y-3*l/4,ee),R(G,Ee+.04,0),R(G,q-.06,-l/2),R(G,Ee+.06,-l);const de=Ue=>y-l+l/2*((Ee-Ue)/x);for(let Ue=q+.15;Ue<Ee;Ue+=.3)for(const tt of[ie(Ue),de(Ue)])e.oakSpec({w:.035,h:y-.06,d:.035,x:G,y:tt-.03-(y-.06)/2,z:Ue});e.colliders.push(new xt().setFromPoints([e.local(G-.06,-l,L.PIT_Z0+.8),e.local(G+.06,1,L.PIT_Z1)]))}const C=s.areas[i.id].flip?-1:1,T=G=>C*(G-a.x),P=-l,[O,g]=[T(o.x0),T(o.x1)].sort((G,ee)=>G-ee),S=g-O,b=(O+g)/2,D=(L.LANDING_Z0+L.LANDING_Z1)/2;e.box(S,.1,3,ce.floor,b,P-.05,D,{walkable:!0,vinyl:!0}),e.box(S,.1,3,ce.ceiling,b,P+L.ROOM_H+.05,D,{worldUV:!0}),e.box(.15,L.ROOM_H,3.3,ce.wall,O-.075,P+L.ROOM_H/2,D,{solid:!0,trim:["x+"]}),e.box(.15,L.ROOM_H,3.3,ce.wall,g+.075,P+L.ROOM_H/2,D,{solid:!0,trim:["x-"]});for(let G=0;G<Math.floor(S/3.5);G++)e.led(O+(G+.5)*3.5,D,P+L.ROOM_H-.02,.35,1.3);const k=G=>{const ee=T(s.areas[G].x);return[ee-L.LOBBY_W/2,ee+L.LOBBY_W/2]},W=(G,ee,ge)=>{const Ee=[],q=[...ge].sort((ie,pe)=>ie[0]-pe[0]);let Q=O;for(const[ie,pe]of q)ie>Q&&(e.box(ie-Q,L.ROOM_H,.15,ce.wall,(Q+ie)/2,P+L.ROOM_H/2,G,{solid:!0,trim:[ee]}),Ee.push([Q,ie])),Q=Math.max(Q,pe);return g>Q&&(e.box(g-Q,L.ROOM_H,.15,ce.wall,(Q+g)/2,P+L.ROOM_H/2,G,{solid:!0,trim:[ee]}),Ee.push([Q,g])),Ee},H=o.northIds.map(k),K=W(L.LANDING_Z0-.075,"z+",[[L.PIT_X0,L.PIT_X1],...o.southIds.map(k)]);W(L.LANDING_Z1+.075,"z-",H);for(const[G,ee]of K)if(!(ee-G<4.5))for(let ge=G+2.3;ge<=ee-2.3;ge+=6.5){const Ee=(Math.round(ge*13)+i.id.charCodeAt(2)>>>0)%997;vn(e,n.art.length?n.art[Ee%n.art.length]:null,Ee,ge,P+1.7,L.LANDING_Z0+.01,0,`${i.label}:land:${Math.round(ge)}`)}e.sign(2.4,.6,(L.PIT_X0+L.PIT_X1)/2,P+L.DOOR_H+.5,L.LANDING_Z1-.09,Math.PI,()=>dt({widthPx:1024,heightPx:256,title:`Stairs ↑ ${i.label}`,subtitle:`${i.wing} wing · ${i.floor?`level −${i.floor}`:"ground"}`,titleSize:72}),`landingup:${i.label}`);const V=[];let re=0;const B=G=>H.every(([ee,ge])=>G+.8<=ee||G-.8>=ge)&&V.every(ee=>Math.abs(G-ee)>=1.9),$=G=>()=>dt({widthPx:768,heightPx:230,title:`↓ ${G?.label??"?"}`,subtitle:`homed in ${G?.wing??"?"} wing`,titleSize:58});o.portalChildIds.forEach(G=>{const ee=r.get(G);let ge=L.PIT_X1+1.6;for(;ge<=g-.9&&!B(ge);)ge+=.1;if(ge<=g-.9)V.push(ge),e.box(.08,L.DOOR_H,L.DOOR_W,ce.door,ge,P+L.DOOR_H/2,L.LANDING_Z1-.05,{}),e.doorFurniture("z-",ge,P,L.LANDING_Z1-.05),e.sign(1.5,.45,ge,P+L.DOOR_H+.45,L.LANDING_Z1-.09,Math.PI,$(ee),`downportal:${ee?.label}`),t.push({kind:"stair-down",areaId:i.id,label:`Stairs ↓ ${ee?.label??"?"}`,targetIds:[G],triggerPos:e.local(ge,-l,L.LANDING_Z1-.5),radius:.7,halfX:.55,halfZ:.45,auto:!0});else{const Ee=8.7-re*1.6;re++,e.box(.08,L.DOOR_H,L.DOOR_W,ce.door,g-.05,P+L.DOOR_H/2,Ee,{}),e.doorFurniture("x-",g-.05,P,Ee),e.sign(1.5,.45,g-.09,P+L.DOOR_H+.45,Ee,-Math.PI/2,$(ee),`downportal:${ee?.label}`),t.push({kind:"stair-down",areaId:i.id,label:`Stairs ↓ ${ee?.label??"?"}`,targetIds:[G],triggerPos:e.local(g-.5,-l,Ee),radius:.7,halfX:.45,halfZ:.55,auto:!0})}});const oe=V.length?Math.max(...V)+1:L.PIT_X1+1;for(let G=0;G<3;G++){const ee=g-.8-G*.6;if(ee<oe+.8||re)break;H.some(([ge,Ee])=>ee>ge-.45&&ee<Ee+.45)||e.chair(ee,P,L.LANDING_Z1-.45,-1)}}function vn(i,e,t,n,r,s,o,a){const l=Math.sin(o),c=Math.cos(o),u=Math.abs(l)>.5;i.oakSpec({w:u?.05:1.42,h:1.08,d:u?1.42:.05,x:n-l*.031,y:r,z:s-c*.031}),i.sign(1.28,.94,n,r,s,o,()=>e?Po(`art/${e.file}`):Yl(t),`pic:${a}`),i.sign(.44,.13,n,r-.62,s,o,()=>e?$r(e.title,`${e.artist} · ${e.licence} · Wikimedia Commons`):$r("Untitled study","Procedural print — placeholder"),`picplacard:${a}`)}function Lo(i,e){const t=new Map;let n=[i.id],r=0;for(;n.length;){r++;const s=[];for(const o of n)for(const a of e.get(o)?.supers??[])t.has(a)||(t.set(a,r),s.push(a));n=s}return[...t].map(([s,o])=>({id:s,level:o}))}const Pn="__theatre";function Bm(i,e,t){const n=new mn;n.name="area:theatre";const r=new dr(n,new F(0,0,0),i),s=-24,o=-4,a=20,l=33.5,c=(s+o)/2,u=(a+l)/2,h=4.5,f=5,p=1.7,x=.35,v=-f*x,m=v+.4,d=ce.wall.clone(),y=ce.ceiling.clone(),A=ce.floor.clone(),R=ce.led.clone(),C=new Tt({color:2830648}),T=new Tt({color:9264970}),P=new Tt({color:6715727}),O=new Tt({color:13623528,transparent:!0,opacity:.3}),g=[d,y,A,C].map(G=>({m:G,base:G.color.clone()})),S=G=>{for(const ee of g)ee.m.color.copy(ee.base).multiplyScalar(G?1:.3);R.color.set(G?16251391:4212047)},b=-15;r.box(3,.1,5,ce.floor,b,-.05,17.5,{walkable:!0,vinyl:!0}),r.box(3,.1,5,ce.ceiling,b,3.05,17.5,{worldUV:!0});for(const[G,ee]of[[b-1.575,"x+"],[b+1.575,"x-"]]){r.box(.15,1,5,ce.wall,G,.5,17.5,{solid:!0,trim:[ee]}),r.box(.08,1.7,5,O,G,1.85,17.5,{solid:!0}),r.box(.15,.3,5,ce.wall,G,2.85,17.5,{});for(const ge of[16.2,17.5,18.8])r.steelSpec({w:.18,h:1.7,d:.07,x:G,y:1.85,z:ge})}for(const G of[16.4,18.6])r.led(b,G,2.98);r.sign(2.6,.62,b,2.55,a-.09,Math.PI,()=>dt({widthPx:1152,heightPx:260,title:"Postgraduate Medical Centre",subtitle:"lecture theatre · seminars & presentations",titleSize:74}),"theatre-door");const D=h+2.4,k=h-D/2,W=19.4,H=21;r.box(.15,D,W-a,d,s-.075,k,(a+W)/2,{solid:!0}),r.box(.15,D,l-H,d,s-.075,k,(H+l)/2,{solid:!0}),r.box(.15,h-2.3,H-W,d,s-.075,(h+2.3)/2,(W+H)/2,{}),r.box(.15,2.4,H-W,d,s-.075,-1.2,(W+H)/2,{solid:!0}),r.sign(1.9,.5,s+.09,2.55,(W+H)/2,Math.PI/2,()=>dt({widthPx:960,heightPx:250,title:"← Reference Gallery",subtitle:"clause 3.1 definitions · resources annex",titleSize:64}),"to-gallery"),r.box(.15,D,l-a,d,o+.075,k,u,{solid:!0}),r.box(o-s+.3,D,.15,d,c,k,l+.075,{solid:!0}),r.box(-16-s,h+.2,.15,d,(s+-16)/2,h/2-.1,a-.075,{solid:!0}),r.box(o- -14,h+.2,.15,d,(-14+o)/2,h/2-.1,a-.075,{solid:!0}),r.box(2,h-2.3,.15,d,b,(h+2.3)/2,a-.075,{}),r.box(o-s,.1,l-a,y,c,h+.05,u,{worldUV:!0});for(const G of[s+.11,o-.11])r.box(.06,.8,l-a-3,ce.daylight,G,3.7,u,{});r.box(o-s,.1,2,A,c,-.05,a+1,{walkable:!0,vinyl:!0});for(let G=0;G<f;G++){const ee=-x*(G+1),ge=a+2+p*G;r.box(o-s,.1,p,A,c,ee-.05,ge+p/2,{walkable:!0,vinyl:!0}),r.box(o-s,x,.06,C,c,ee+x/2,ge+.03,{})}const K=a+2+p*f;r.box(o-s,.1,1,A,c,v-.05,K+.5,{walkable:!0,vinyl:!0}),r.box(17,.5,1.85,ce.oak,c,m-.25,K+1+.925,{walkable:!0});for(let G=0;G<f;G++){const ee=-x*(G+1),ge=a+2+p*G+.9;for(let Ee=-22.8;Ee<=-16.45;Ee+=.62)r.chair(Ee,ee,ge,1);for(let Ee=-13.55;Ee<=-5.2;Ee+=.62)r.chair(Ee,ee,ge,1)}const V=l-.075;r.box(6.7,4.1,.06,C,c,.85,V-.035,{});const re=new cn({color:16777215}),B=new Pt(new Gi(6,3.375),re);B.position.set(c,.84,V-.075),B.rotation.y=Math.PI,B.matrixAutoUpdate=!1,B.updateMatrix(),n.add(B),r.sign(5,.7,c,3.35,V-.08,Math.PI,()=>dt({widthPx:1600,heightPx:224,title:"Postgraduate Medical Centre",subtitle:"slides: ← → · PageUp/PageDown (clickers work) · or tap the screen",titleSize:76}),"proscenium"),r.box(.42,1.05,.42,ce.oak,-17.5,m+.525,K+1.7,{solid:!0}),r.oakSpec({w:.62,h:.05,d:.5,x:-17.5,y:m+1.08,z:K+1.7}),r.steelSpec({w:.05,h:.3,d:.05,x:-17.28,y:m+1.25,z:K+1.62}),r.sign(1.7,.5,b,2.65,a+.085,0,()=>dt({widthPx:900,heightPx:240,title:"→ Reception",subtitle:"B returns to your last stop",titleSize:66}),"theatre-exit");const $=G=>e.length?e[G%e.length]:null;vn(r,$(5),5,-19.5,1.7,a+.085,0,"theatre:r1"),vn(r,$(11),11,-10.5,1.7,a+.085,0,"theatre:r2");for(const G of[-20,c,-8])for(const ee of[21.5,24.5,27.5,30.5])r.box(.6,.035,1.3,R,G,h-.02,ee,{});r.box(.12,7,W-(a-.15),T,s-.21,1,(a-.15+W)/2,{}),r.box(.12,7,l+.15-H,T,s-.21,1,(H+l+.15)/2,{}),r.box(.12,2.2,H-W,T,s-.21,3.4,(W+H)/2,{}),r.box(.12,2.5,H-W,T,s-.21,-1.25,(W+H)/2,{}),r.box(.12,7,l-a+.3,T,o+.21,1,u,{}),r.box(o-s+.7,7,.12,T,c,1,l+.21,{}),r.box(-16.6-(s-.35),7,.12,T,(s-.35+-16.6)/2,1,a-.21,{}),r.box(o+.35- -13.4,7,.12,T,(-13.4+o+.35)/2,1,a-.21,{}),r.box(3.2,1.3,.12,T,b,3.85,a-.21,{}),r.box(o-s+.9,.18,l-a+.9,T,c,h+.24,u,{});const oe=(G,ee,ge,Ee)=>r.box(ee-G,.06,Ee-ge,P,(G+ee)/2,-.09,(ge+Ee)/2,{});return oe(-30,s-.35,15.2,38),oe(o+.35,2,15.2,38),oe(s-.35,-16.7,15.2,a-.3),oe(-13.3,o+.35,15.2,a-.3),oe(s-.35,o+.35,l+.35,38),t!=="off"&&r.stand(-17.5,m,K+2.15,Math.PI,4271),r.populate(t,6101),r.finalize(),S(!0),{id:Pn,wc:null,label:"Postgraduate Medical Centre",group:n,colliders:r.colliders,walkables:r.walkables,interactables:[],boards:[{kind:"screen",mesh:B,cells:[{rect:[0,0,.35,1],id:"prev",label:"previous slide"},{rect:[.35,0,1,1],id:"next",label:"next slide"}]}],spawnPos:new F(b,0,a+1.2),spawnYaw:Math.PI,boxes:[new xt(new F(s-.3,-2.5,a-.3),new F(o+.3,h+.3,l+.3)),new xt(new F(b-1.7,-.5,15),new F(b+1.7,3.2,a))],screen:B,setHouseLights:S,lecternPos:new F(-16.6,m,K+1.9),lecternYaw:0}}function zm(i,e,t,n){const r=new mn;r.name="area:atrium";const s=new dr(r,new F(0,0,0),e),o=-26,a=0,l=3,c=15,u=L.STREET_H,h=(o+a)/2,f=(l+c)/2;s.box(a-o,.1,c-l,ce.floor,h,-.05,f,{walkable:!0,vinyl:!0}),s.box(a-o,.1,c-l,ce.ceiling,h,u+.05,f,{worldUV:!0}),s.box(a-o+.3,1,.15,ce.wall,h,.5,l-.075,{solid:!0,trim:["z+"]}),s.box(a-o+.3,1.7,.08,ce.daylight,h,1.85,l-.075,{solid:!0}),s.box(a-o+.3,u-2.7,.15,ce.wall,h,(u+2.7)/2,l-.075,{});for(let T=o+2;T<a-.5;T+=2)s.steelSpec({w:.07,h:1.7,d:.18,x:T,y:1.85,z:l-.075});s.box(-16-o+.3,u,.15,ce.wall,(o-.15+-16)/2,u/2,c+.075,{solid:!0,trim:["z-"]}),s.box(a- -14+.3,u,.15,ce.wall,(-14+a+.15)/2,u/2,c+.075,{solid:!0,trim:["z-"]}),s.box(2,u-2.3,.15,ce.wall,-15,(u+2.3)/2,c+.075,{}),s.box(.15,u,c-l,ce.wall,o-.075,u/2,f,{solid:!0,trim:["x+"]}),s.box(.15,u,L.STREET_Z0-l,ce.wall,a+.075,u/2,(l+L.STREET_Z0)/2,{solid:!0,trim:["x-"]}),s.box(.15,u,c-L.STREET_Z1,ce.wall,a+.075,u/2,(L.STREET_Z1+c)/2,{solid:!0,trim:["x-"]});for(let T=o+3;T<a-1;T+=4.5)for(const P of[5.2,9,12.8])s.led(T,P,u-.02);s.box(1.1,1.1,5.2,ce.oak,o+4.5,.55,f),s.box(4.2,.46,.55,ce.oak,-10,.23,4.4),s.box(4.2,.5,.09,ce.oak,-10,.7,4.4-.24);for(let T=0;T<5;T++)s.chair(-5.8+T*.62,0,14.35,-1);for(let T=0;T<3;T++)s.chair(-17.9+T*.62,0,14.35,-1);const p=T=>t.length?t[T%t.length]:null;vn(s,p(3),3,o+.09,1.8,4.6,Math.PI/2,"atrium:w1"),vn(s,p(9),9,o+.09,1.8,13.4,Math.PI/2,"atrium:w2"),vn(s,p(6),6,-3.4,1.8,c-.09,Math.PI,"atrium:n1"),s.sign(7,1.5,o+.09,2.6,f,Math.PI/2,()=>dt({widthPx:1792,heightPx:384,title:"ContSys Hospital",subtitle:`${i.meta.label} · ${i.classes.length} concepts · welcome — walk the model`,titleSize:150,align:"center"}),"title"),s.sign(3.2,.7,a-.09,L.ROOM_H+.55,(L.STREET_Z0+L.STREET_Z1)/2,-Math.PI/2,()=>dt({widthPx:1280,heightPx:280,title:"Hospital Street →",subtitle:"all wings · concepts A–Z on the directory",titleSize:88}),"to-street"),s.sign(2.6,.6,-15,2.62,c-.09,Math.PI,()=>dt({widthPx:1152,heightPx:252,title:"Postgraduate Medical Centre →",subtitle:"lecture theatre · seminars & presentations",titleSize:70}),"to-theatre");const x=[...i.wings.map(T=>({text:T.annex?T.label:`${T.label} wing`,sub:`${T.classCount} concepts${T.zone==="gallery"?" · at the Postgraduate Medical Centre":""}`,chip:qn(T.key)})),{text:"Postgraduate Medical Centre",sub:"lecture theatre · Reference Gallery",chip:"#005eb8"}],v={widthPx:1024,heightPx:724,title:"Hospital directory",subtitle:"wings west to east — tap one to visit its entrance",rows:x,rowSize:x.length>8?32:40},m=s.sign(3.4,2.4,-20,1.9,c-.09,Math.PI,()=>rr(v),"directory-wings"),d=Co(v,x.length),y={widthPx:2048,heightPx:1152,title:"Concepts A–Z",subtitle:"tap a concept to go there · or press M anywhere for the porter",rows:i.classes.map(T=>({text:T.label,sub:T.roomNumber??void 0,chip:qn(T.wing)})),rowSize:14,columns:5},A=s.sign(6.4,3.6,-9,1.9,c-.09,Math.PI,()=>rr(y),"directory-az"),R=Co(y,i.classes.length),C=[{kind:"directory",mesh:m,cells:[...i.wings.flatMap((T,P)=>d[P]?[{rect:d[P],id:T.rootIds[0],label:T.annex?T.label:`${T.label} wing`}]:[]),...d[i.wings.length]?[{rect:d[i.wings.length],id:Pn,label:"Postgraduate Medical Centre"}]:[]]},{kind:"directory",mesh:A,cells:i.classes.flatMap((T,P)=>R[P]?[{rect:R[P],id:T.id,label:T.label}]:[])}];return n!=="off"&&(s.stand(o+3.7,0,f,Math.PI/2,137),s.sit(-9.4,.02,4.55,1,553),s.sit(-10.6,.02,4.55,1,887)),s.populate(n,9001),s.finalize(),{id:on,wc:null,label:"Reception",group:r,colliders:s.colliders,walkables:s.walkables,interactables:[],boards:C,spawnPos:new F(-14,0,f),spawnYaw:-Math.PI/2,boxes:[new xt(new F(o-.3,-.5,l-.3),new F(a+.1,2.5,c+.3))]}}const Do="__street";function km(i,e,t,n,r){const s=new mn;s.name="area:street";const o=new dr(s,new F(0,0,0),t),a=e.loop,l=0,c=a.xEnd,u=c-l,h=(l+c)/2,f=L.STREET_H,p=a.south.z1,x=a.north.z0,v=[a.connectors.west,a.connectors.east],m=new Map(i.classes.map(g=>[g.id,g])),d=new Map(i.wings.map(g=>[g.key,g])),y=new Tt({color:13623528,transparent:!0,opacity:.3}),A=new Tt({color:6715727}),R=g=>{const S=g==="south"?a.south:a.north,b=S.z0,D=S.z1,k=(b+D)/2,W=g==="south"?b-.075:D+.075,H=g==="south"?D+.075:b-.075,K=g==="south"?"z+":"z-",V=g==="south"?"z-":"z+",re=g==="south"?0:Math.PI;o.box(u,.1,D-b,ce.floor,h,-.05,k,{walkable:!0,vinyl:!0}),o.box(u,.1,D-b,ce.ceiling,h,f+.05,k,{worldUV:!0});for(let ie=l+2;ie<c-1;ie+=4)o.led(ie,b+1.3,f-.02,.35,1.3),o.led(ie,D-1.3,f-.02,.35,1.3);const B=[];let $=l;for(const[ie,pe]of v)ie>$&&B.push([$,ie]),$=Math.max($,pe);c>$&&B.push([$,c]);for(const[ie,pe]of B){const de=(ie+pe)/2,Ue=pe-ie;o.box(Ue,1,.15,ce.wall,de,.5,H,{solid:!0,trim:[V]}),o.box(Ue,1.7,.08,y,de,1.85,H,{solid:!0}),o.box(Ue,f-2.7,.15,ce.wall,de,(f+2.7)/2,H,{});for(let tt=ie+2;tt<pe-.5;tt+=2)o.steelSpec({w:.07,h:1.7,d:.18,x:tt,y:1.85,z:H})}for(const[ie,pe]of v){const de=(ie+pe)/2;o.box(pe-ie,f-3,.15,ce.wall,de,(f+3)/2,H,{}),o.sign(2.7,.6,de,2.62,H+(g==="south"?-.08:.08),g==="south"?Math.PI:0,()=>dt({widthPx:1152,heightPx:252,title:`Cloister → ${g==="south"?"north":"south"} side`,subtitle:"across the courtyard · shorter way round",titleSize:68}),`cloister:${g}:${Math.round(de)}`)}const oe=[];for(const ie of e.wings)if(ie.street===g)for(const pe of ie.rootIds)oe.push({x:e.areas[pe].x,id:pe,wingKey:ie.key});oe.sort((ie,pe)=>ie.x-pe.x);const G=g==="south"?b+.46:D-.46,ee=g==="south"?1:-1,ge=g==="south"?b+.075:D-.075,Ee=(ie,pe)=>{const de=pe-ie,Ue=(ie+pe)/2;if(de>=12&&(o.chair(Ue-.35,0,G,ee),o.chair(Ue+.35,0,G,ee)),de>=9)for(const tt of[Ue-3.2,Ue+3.2]){const Ge=(Math.round(tt*7)>>>0)%997,nt=n.length?n[Ge%n.length]:null;vn(o,nt,Ge,tt,1.78,ge,re,`street:${g}:${Math.round(tt)}`)}};let q=l;for(const ie of oe){const pe=ie.x-L.LOBBY_W/2,de=ie.x+L.LOBBY_W/2;pe>q&&(o.box(pe-q,f,.15,ce.wall,(q+pe)/2,f/2,W,{solid:!0,trim:[K]}),Ee(q,pe)),o.box(L.LOBBY_W,f-L.ROOM_H,.15,ce.wall,ie.x,(f+L.ROOM_H)/2,W,{}),q=de}c>q&&(o.box(c-q,f,.15,ce.wall,(q+c)/2,f/2,W,{solid:!0,trim:[K]}),Ee(q,c));const Q=g==="south"?b+.02:D-.02;oe.forEach(ie=>{const pe=m.get(ie.id),de=d.get(ie.wingKey);o.sign(3.2,.7,ie.x,L.ROOM_H+.45,Q,re,()=>dt({widthPx:1280,heightPx:280,title:de?.annex?pe?.label??"?":`${de?.label??"?"} wing`,subtitle:de?.annex?`${de.label} · ${pe?.roomNumber?`Room ${pe.roomNumber}`:""}`:`${de?.classCount??"?"} concepts · enter for ${pe?.label??"?"}`,titleSize:86}),`street:${pe?.label}`)}),o.box(.15,f,D-b+.3,ce.wall,c+.075,f/2,k,{solid:!0,trim:["x-"]}),g==="north"&&o.box(.15,f,D-b+.3,ce.wall,l-.075,f/2,k,{solid:!0,trim:["x+"]}),o.sign(3.4,.8,l+.4,2.7,k,-Math.PI/2,()=>dt({widthPx:1280,heightPx:300,title:"Hospital Street",subtitle:`${g} side · wings this way →`,titleSize:96}),`street-name:${g}`)};R("south"),R("north");const[C]=a.connectors.west,T=e.wings.filter(g=>g.street==="south").length;let P=0,O=0;for(const g of e.wings){if(g.street==="gallery")continue;const S=new cn({color:new je(qn(g.key))}),b=e.areas[g.rootIds[0]].x;if(g.street==="south"){const D=a.south.z0+.4+P*.24;P++,o.box(b-l,.012,.16,S,(l+b)/2,.012,D,{}),o.box(.16,.012,D-a.south.z0,S,b,.012,(a.south.z0+D)/2,{})}else{const D=C+.55+O*.62,k=a.south.z0+.4+(T+O)*.24,W=a.north.z1-.4-O*.24;O++,o.box(D-l,.012,.16,S,(l+D)/2,.012,k,{}),o.box(.16,.012,W-k,S,D,.012,(k+W)/2,{}),o.box(b-D,.012,.16,S,(D+b)/2,.012,W,{}),o.box(.16,.012,a.north.z1-W,S,b,.012,(W+a.north.z1)/2,{})}}for(const[g,S]of v){const b=(g+S)/2,D=x-p,k=(p+x)/2;o.box(S-g,.1,D,ce.floor,b,-.05,k,{walkable:!0,vinyl:!0}),o.box(S-g,.1,D,ce.ceiling,b,f+.05,k,{worldUV:!0});for(const W of[g-.075,S+.075]){o.box(.15,1,D,ce.wall,W,.5,k,{solid:!0,trim:[W<b?"x+":"x-"]}),o.box(.08,1.7,D,y,W,1.85,k,{solid:!0}),o.box(.15,f-2.7,D,ce.wall,W,(f+2.7)/2,k,{});for(let H=p+2;H<x-.5;H+=2)o.steelSpec({w:.18,h:1.7,d:.07,x:W,y:1.85,z:H})}for(let W=p+2;W<x-1;W+=4)o.led(b,W,f-.02,.35,1.3)}return o.box(c-2,.06,x-p-.4,A,(2+c)/2,-.09,(p+x)/2,{}),x-.2>38&&o.box(32,.06,x-.2-38,A,-14,-.09,(38+x-.2)/2,{}),o.populate(r,4211),o.finalize(),{id:Do,wc:null,label:"Hospital Street",group:s,colliders:o.colliders,walkables:o.walkables,interactables:[],spawnPos:new F(l+3,0,(a.south.z0+a.south.z1)/2),spawnYaw:-Math.PI/2,boxes:[new xt(new F(l-.3,-.5,a.south.z0-.2),new F(c+.3,2.5,a.south.z1+.3)),new xt(new F(l-.3,-.5,a.north.z0-.3),new F(c+.3,2.5,a.north.z1+.2)),...v.map(([g,S])=>new xt(new F(g-.2,-.5,p),new F(S+.2,2.5,x)))]}}const ir="__gallery";function Gm(i,e,t,n,r){const s=new mn;s.name="area:gallery";const o=new dr(s,new F(0,0,0),t),a=e.loop.gallery,l=a.x0,c=a.x1,u=(l+c)/2,h=a.z0,f=a.z1,p=(h+f)/2,x=L.STREET_H,[v,m]=a.entrance,d=new Map(i.classes.map(g=>[g.id,g])),y=new Map(i.wings.map(g=>[g.key,g]));o.box(c-l,.1,f-h,ce.floor,u,-.05,p,{walkable:!0,vinyl:!0}),o.box(c-l,.1,f-h,ce.ceiling,u,x+.05,p,{worldUV:!0});for(let g=l+2;g<c-1;g+=4)o.led(g,h+1.3,x-.02,.35,1.3),o.led(g,f-1.3,x-.02,.35,1.3);o.box(c-l,1,.15,ce.wall,u,.5,f+.075,{solid:!0,trim:["z-"]}),o.box(c-l,1.7,.08,ce.daylight,u,1.85,f+.075,{solid:!0}),o.box(c-l,x-2.7,.15,ce.wall,u,(x+2.7)/2,f+.075,{});for(let g=l+2;g<c-.5;g+=2)o.steelSpec({w:.07,h:1.7,d:.18,x:g,y:1.85,z:f+.075});o.box(.15,x,f-h+.3,ce.wall,l-.075,x/2,p,{solid:!0,trim:["x+"]}),o.box(.15,x,f-h+.3,ce.wall,c+.075,x/2,p,{solid:!0,trim:["x-"]});const A=[],R=[];for(const g of e.wings)if(g.street==="gallery")for(const S of g.rootIds)R.push({x:e.areas[S].x,id:S,wingKey:g.key}),A.push([e.areas[S].x-L.LOBBY_W/2,e.areas[S].x+L.LOBBY_W/2]);A.push([v,m]),A.sort((g,S)=>g[0]-S[0]);let C=l;for(const[g,S]of A){if(g>C){const b=g-C;if(o.box(b,x,.15,ce.wall,(C+g)/2,x/2,h-.075,{solid:!0,trim:["z+"]}),b>=9){const D=(C+g)/2;o.chair(D-.35,0,h+.46,1),o.chair(D+.35,0,h+.46,1);const k=(Math.round(D*7)>>>0)%997;vn(o,n.length?n[k%n.length]:null,k,D-3.2,1.78,h+.075,0,`gallery:${Math.round(D)}`)}}C=Math.max(C,S)}c>C&&o.box(c-C,x,.15,ce.wall,(C+c)/2,x/2,h-.075,{solid:!0,trim:["z+"]});for(const g of R)o.box(L.LOBBY_W,x-L.ROOM_H,.15,ce.wall,g.x,(x+L.ROOM_H)/2,h-.075,{});o.box(m-v,x-3,.15,ce.wall,(v+m)/2,(x+3)/2,h-.075,{}),R.forEach(g=>{const S=d.get(g.id),b=y.get(g.wingKey);o.sign(3.2,.7,g.x,L.ROOM_H+.45,h+.02,0,()=>dt({widthPx:1280,heightPx:280,title:b?.label??"?",subtitle:`${b?.classCount??"?"} concepts · enter for ${S?.label??"?"}`,titleSize:86}),`gallery:${S?.label}`)}),o.sign(3.4,.8,c-.4,2.7,p,Math.PI/2,()=>dt({widthPx:1280,heightPx:300,title:"Reference Gallery",subtitle:"clause 3.1 definitions · resources annex",titleSize:92}),"gallery-name");const T=21.2;o.box(m-v,.1,h-T,ce.floor,(v+m)/2,-.05,(T+h)/2,{walkable:!0,vinyl:!0}),o.box(m-v,.1,h-T,ce.ceiling,(v+m)/2,3.05,(T+h)/2,{worldUV:!0});for(const g of[v-.075,m+.075])o.box(.15,3,h-T,ce.wall,g,1.5,(T+h)/2,{solid:!0,trim:[g<(v+m)/2?"x+":"x-"]});for(let g=T+2;g<h-1;g+=4)o.led((v+m)/2,g,2.98);const P=19.2,O=21.2;return o.box(-24-v,.1,O-P,ce.floor,(v+-24)/2,-.05,(P+O)/2,{walkable:!0,vinyl:!0}),o.box(-24-v,.1,O-P,ce.ceiling,(v+-24)/2,3.05,(P+O)/2,{worldUV:!0}),o.box(-24-v+.15,3,.15,ce.wall,(v+-24)/2-.05,1.5,P-.075,{solid:!0,trim:["z+"]}),o.box(-24-m,3,.15,ce.wall,(m+-24)/2,1.5,O+.075,{solid:!0,trim:["z-"]}),o.box(.15,3,O-P+.3,ce.wall,v-.075,1.5,(P+O)/2,{solid:!0,trim:["x+"]}),o.led((v-24)/2,(P+O)/2,2.98),o.sign(1.9,.5,(v+m)/2,2.55,T+.09,0,()=>dt({widthPx:960,heightPx:250,title:"↑ Reference Gallery",subtitle:"clause 3.1 definitions · resources annex",titleSize:64}),"gallery-way"),o.populate(r,7877),o.finalize(),{id:ir,wc:null,label:"Reference Gallery",group:s,colliders:o.colliders,walkables:o.walkables,interactables:[],spawnPos:new F(c-2,0,p),spawnYaw:Math.PI/2,boxes:[new xt(new F(l-.3,-.5,h-.2),new F(c+.3,2.5,f+.3)),new xt(new F(v-.3,-.5,T),new F(m+.3,2.5,h)),new xt(new F(v-.3,-.5,P-.2),new F(-23.8,2.5,O+.2))]}}const gn=1920,Ii=1080;function Hm(i,e,t,n){i.fillStyle=Vi,i.fillRect(0,0,gn,Ii),i.fillStyle="#ffffff",i.textAlign="center",i.font="bold 118px Arial",i.fillText(e,gn/2,470),i.font="54px Arial",i.globalAlpha=.92,i.fillText(t,gn/2,580),i.font="34px Arial",i.globalAlpha=.7,i.fillText(n,gn/2,990),i.globalAlpha=1}function cl(i,e,t){i.fillStyle="#f4f6f7",i.fillRect(0,0,gn,Ii),i.fillStyle=Vi,i.fillRect(0,0,gn,190),i.fillStyle="#ffffff",i.textAlign="left",i.font="bold 78px Arial",i.fillText(e,110,128),i.fillStyle="#16212a",i.font="46px Arial",t.forEach((n,r)=>i.fillText(n,110,330+r*105))}function Vm(){return[{kind:"builtin",draw:i=>Hm(i,"Postgraduate Medical Centre","Lecture Theatre · ContSys Hospital","a walkable model of the continuity-of-care concept system")},{kind:"builtin",draw:i=>cl(i,"Bring your own slides",["1.  Export your deck as PNG or JPG images (1920 × 1080 works best).","2.  Copy them into the site’s  slides/  folder.","3.  List them in order in  slides/manifest.json :",'         ["01.png", "02.png", "03.png"]',"4.  Video clips (.mp4, .webm) can be listed too — they play here.","5.  Redeploy. This screen then presents your deck."])},{kind:"builtin",draw:i=>cl(i,"Presenting & filming",["← →  or  PageUp / PageDown change slides — presenter clickers work.","Tap or click the screen: right side = next, left side = back.","H  hides the whole interface for a clean recording.","L  dims the house lights.","Add  ?start=theatre  to the address to begin at the lectern.","B  returns to your last stop when you’re done."])}]}class Wm{entries=[];index=0;cache=new Map;video=null;videoTex=null;mat;constructor(e){this.mat=e.material}get count(){return this.entries.length}get label(){return`Slide ${this.index+1} / ${this.entries.length}`}async load(){try{const e=await fetch("slides/manifest.json");if(e.ok){const t=await e.json(),n=Array.isArray(t)?t:t?.slides??[];this.entries=n.map(r=>({kind:/\.(mp4|webm|mov)$/i.test(r)?"video":"image",src:`slides/${r}`}))}}catch{}this.entries.length||(this.entries=Vm()),this.show(0)}next(){this.show(Math.min(this.index+1,this.entries.length-1))}prev(){this.show(Math.max(this.index-1,0))}show(e){if(!this.entries.length)return;this.index=e;const t=this.entries[e];t.kind==="video"?this.mat.map=this.playVideo(t.src):(this.video?.pause(),this.mat.map=this.texture(e),this.entries[e+1]?.kind==="image"&&this.texture(e+1),this.entries[e-1]?.kind==="image"&&this.texture(e-1)),this.mat.needsUpdate=!0}texture(e){const t=this.cache.get(e);if(t)return t;const n=document.createElement("canvas");n.width=gn,n.height=Ii;const r=n.getContext("2d");r.fillStyle="#0d1114",r.fillRect(0,0,gn,Ii);const s=new En(n);s.colorSpace=_t,s.generateMipmaps=!1,s.minFilter=Et;const o=this.entries[e];if(o.kind==="builtin")o.draw(r),s.needsUpdate=!0;else if(o.kind==="image"){const a=new Image;a.onload=()=>{const l=Math.min(gn/a.width,Ii/a.height),c=a.width*l,u=a.height*l;r.drawImage(a,(gn-c)/2,(Ii-u)/2,c,u),s.needsUpdate=!0},a.src=o.src}return this.cache.set(e,s),s}playVideo(e){this.video||(this.video=document.createElement("video"),this.video.playsInline=!0,this.videoTex=new cu(this.video),this.videoTex.colorSpace=_t,this.videoTex.generateMipmaps=!1,this.videoTex.minFilter=Et);const t=this.video;return t.src.endsWith(e)||(t.src=e),t.currentTime=0,t.muted=!1,t.play().catch(()=>{t.muted=!0,t.play().catch(()=>{})}),this.videoTex}}const Ai=new en(0,0,0,"YXZ"),Ri=new F,Xm={type:"change"},Ym={type:"lock"},$m={type:"unlock"},ul=.002,hl=Math.PI/2;class qm extends Eu{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Zm.bind(this),this._onPointerlockChange=Km.bind(this),this._onPointerlockError=jm.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;Ri.setFromMatrixColumn(t.matrix,0),Ri.crossVectors(t.up,Ri),t.position.addScaledVector(Ri,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;Ri.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(Ri,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Zm(i){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;Ai.setFromQuaternion(e.quaternion),Ai.y-=i.movementX*ul*this.pointerSpeed,Ai.x-=i.movementY*ul*this.pointerSpeed,Ai.x=Math.max(hl-this.maxPolarAngle,Math.min(hl-this.minPolarAngle,Ai.x)),e.quaternion.setFromEuler(Ai),this.dispatchEvent(Xm)}function Km(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Ym),this.isLocked=!0):(this.dispatchEvent($m),this.isLocked=!1)}function jm(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const ii=1.7,Fr=.3,Jm=4.2,Qm=8.5,e0=.5,t0=7;class n0{camera;controls;keys=new Set;colliders=[];walkables=[];touch={f:0,s:0};constructor(e){this.camera=new Jt(70,innerWidth/innerHeight,.05,160),this.camera.position.set(0,ii,0),this.camera.rotation.order="YXZ",this.controls=new qm(this.camera,e),addEventListener("keydown",t=>this.keys.add(t.code)),addEventListener("keyup",t=>this.keys.delete(t.code)),addEventListener("blur",()=>this.keys.clear())}setTouchMove(e,t){this.touch.f=e,this.touch.s=t}enableDragLook(e){let t=!1,n=0,r=0;e.addEventListener("pointerdown",s=>{this.controls.isLocked||(t=!0,n=s.clientX,r=s.clientY,e.setPointerCapture(s.pointerId))}),e.addEventListener("pointermove",s=>{if(!t||this.controls.isLocked)return;const o=this.camera.rotation;o.y-=(s.clientX-n)*.0042,o.x=Math.max(-1.45,Math.min(1.45,o.x-(s.clientY-r)*.0042)),n=s.clientX,r=s.clientY});for(const s of["pointerup","pointercancel"])e.addEventListener(s,()=>t=!1)}dash(e=12){const t=this.camera.rotation.y,n=-Math.sin(t),r=-Math.cos(t),s=this.camera.position;let o=0;for(let a=0;a<Math.ceil(e/.4);a++){const l=this.feetY,c=s.x+n*.4,u=s.z+r*.4;if(this.collides(c,u,l))break;const h=this.groundAt(c,u,l);if(h===-1/0)break;s.x=c,s.z=u,s.y=h+ii,o+=.4}return o}setColliders(e){this.colliders=e}setWalkables(e){this.walkables=e}get position(){return this.camera.position}get feetY(){return this.camera.position.y-ii}get floorPosition(){return new F(this.camera.position.x,this.feetY,this.camera.position.z)}teleport(e,t){this.camera.position.set(e.x,(e.y??0)+ii,e.z),this.camera.rotation.set(0,t,0)}groundAt(e,t,n){let r=-1/0;for(const s of this.walkables){if(e<s.min.x-.05||e>s.max.x+.05||t<s.min.z-.05||t>s.max.z+.05)continue;const o=s.max.y;o<=n+e0&&o>r&&(r=o)}return r}collides(e,t,n){const r=new xt(new F(e-Fr,n+.25,t-Fr),new F(e+Fr,n+1.75,t+Fr));return this.colliders.some(s=>s.intersectsBox(r))}snapGround(){const e=this.camera.position,t=this.groundAt(e.x,e.z,this.feetY+.01);t>-1/0&&(e.y=t+ii)}update(e){const t=this.camera.position,n=this.feetY,r=Number(this.keys.has("KeyW"))-Number(this.keys.has("KeyS"))+this.touch.f,s=Number(this.keys.has("KeyD"))-Number(this.keys.has("KeyA"))+this.touch.s;if(r||s){const a=Math.min(1,Math.hypot(r,s)),c=(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||a>.92?Qm:Jm)*a,u=this.camera.rotation.y,h=-Math.sin(u)*r+Math.cos(u)*s,f=-Math.cos(u)*r-Math.sin(u)*s,p=Math.hypot(h,f)||1,x=h/p*c*e,v=f/p*c*e;this.collides(t.x+x,t.z,n)||(t.x+=x),this.collides(t.x,t.z+v,n)||(t.z+=v)}const o=this.groundAt(t.x,t.z,n);o>-1/0&&(o>=n?t.y=o+ii:t.y=Math.max(o,n-t0*e)+ii)}}let In=null,Zr=!1;const Cn=()=>Zr;function i0(){return In||(In=document.createElement("div"),In.id="menu-root",document.body.appendChild(In),In)}function r0(){!In||!Zr||(Zr=!1,In.replaceChildren(),In.style.display="none")}function fl(i,e,t,n){const r=i0();r.replaceChildren(),r.style.display="flex",Zr=!0;const s=document.createElement("div");s.className="menu-panel";const o=document.createElement("div");o.className="menu-head",o.innerHTML='<div class="menu-title"></div><div class="menu-sub"></div>',o.querySelector(".menu-title").textContent=i,o.querySelector(".menu-sub").textContent=e,s.appendChild(o);let a=null;n.searchable&&(a=document.createElement("input"),a.className="menu-filter",a.placeholder="Type to search…",s.appendChild(a));const l=document.createElement("div");l.className="menu-list",s.appendChild(l);const c=document.createElement("div");c.className="menu-foot",c.textContent="↑↓ choose · Enter go · Esc close",s.appendChild(c),r.appendChild(s);let u=[],h=0;const f=m=>{removeEventListener("keydown",v,!0),r0(),m!==null?n.onPick(m):n.onClose?.()},p=()=>{const m=a?.value.trim().toLowerCase()??"";u=t.filter(d=>!m||`${d.label} ${d.sub??""}`.toLowerCase().includes(m)),h=Math.min(h,Math.max(0,u.length-1)),l.replaceChildren(...u.map((d,y)=>{const A=document.createElement("div");A.className="menu-item"+(d.value===null?" info":"")+(d.strong?" strong":"")+(y===h&&d.value!==null?" active":""),d.chip&&(A.style.borderLeftColor=d.chip);const R=document.createElement("span");if(R.textContent=d.label,A.appendChild(R),d.sub){const C=document.createElement("span");C.className="menu-item-sub",C.textContent=d.sub,A.appendChild(C)}return d.value!==null&&(A.addEventListener("click",()=>f(d.value)),A.addEventListener("mousemove",()=>{h!==y&&(h=y,p())})),A})),l.querySelector(".active")?.scrollIntoView({block:"nearest"})},x=m=>{if(!u.length)return;let d=h;for(let y=0;y<u.length&&(d=(d+m+u.length)%u.length,u[d].value===null);y++);h=d,p()},v=m=>{if(m.code==="Escape")m.preventDefault(),m.stopPropagation(),f(null);else if(m.code==="ArrowDown")m.preventDefault(),x(1);else if(m.code==="ArrowUp")m.preventDefault(),x(-1);else if(m.code==="Enter"){m.preventDefault();const d=u[h];d&&d.value!==null&&f(d.value)}else a&&requestAnimationFrame(p)};addEventListener("keydown",v,!0),a?.addEventListener("input",()=>{h=0,p()}),p(),h=Math.max(0,u.findIndex(m=>m.value!==null)),p(),a?.focus()}const s0=700,o0=document.getElementById("app"),si=document.getElementById("start"),dl=document.getElementById("fade"),Ds=document.getElementById("toast"),Ci=document.getElementById("prompt"),a0=document.getElementById("area-sign"),l0=document.querySelector("#area-sign .label"),c0=document.querySelector("#area-sign .room");let pl=0;function Bt(i){Ds.textContent=i,Ds.style.opacity="1",clearTimeout(pl),pl=window.setTimeout(()=>Ds.style.opacity="0",2200)}function Pi(){dl.style.opacity="1",setTimeout(()=>dl.style.opacity="0",160)}async function u0(){const i=await fetch("world.json").then(w=>{if(!w.ok)throw new Error(`world.json ${w.status} — run \`npm run world\` first`);return w.json()}),e=new Map(i.classes.map(w=>[w.id,w])),t=new Map(i.classes.map(w=>[w.label,w])),n=new Map(i.wings.map(w=>[w.key,w.annex?w.label:`${w.label} wing`])),r=Um(i),s=await fetch("art/manifest.json").then(w=>w.ok?w.json():[]).catch(()=>[]),o=await fetch("art/illustrations/manifest.json").then(w=>w.ok?w.json():null).then(w=>w?new Set(w.map(Z=>Z.slug)):null).catch(()=>null),a=navigator.maxTouchPoints>0&&Math.min(screen.width,screen.height)<=500,l=new URLSearchParams(location.search).get("people"),c=l==="off"||l==="low"||l==="full"?l:a?"low":"full",u=matchMedia("(prefers-reduced-motion: reduce)").matches,h=new ru;h.background=new je(6055792),h.fog=a?new Yr(6055792,42,120):new Yr(6055792,55,150),h.add(new mu(16777215,12172994,1)),h.add(new vu(16777215,.38));const f=new xu(16777215,.4);f.position.set(3,8,2),h.add(f);let p;try{p=new Mm({antialias:!a})}catch{throw new Error("3D graphics (WebGL) could not start in this browser. On iPhone/iPad, Lockdown Mode blocks WebGL — allow this site under Settings → Privacy & Security → Lockdown Mode → Configure Web Browsing, or try another device.")}p.setSize(innerWidth,innerHeight),p.setPixelRatio(Math.min(devicePixelRatio,a?1.5:2)),p.domElement.style.touchAction="none",p.domElement.style.userSelect="none",o0.appendChild(p.domElement);const x=new Em,v=new Map,m={byId:e,signs:x,layout:r,art:s,illustrations:o,people:c},d=zm(i,x,s,c);v.set(d.id,d);const y=km(i,r,x,s,c);v.set(y.id,y);const A=Bm(x,s,c);v.set(A.id,A);const R=Gm(i,r,x,s,c);v.set(R.id,R);const C=new Wm(A.screen);C.load();for(const w of i.classes){const Z=r.areas[w.id],Y=Fm(w,m,new F(Z.x,Z.y,Z.oz));v.set(Y.id,Y)}for(const w of v.values())h.add(w.group);const T=[...v.values()].flatMap(w=>w.colliders),P=[...v.values()].flatMap(w=>w.walkables),O=[...v.values()].flatMap(w=>w.interactables),g=new Map;for(const w of O)if(w.elementId){const Z=g.get(w.elementId)??[];Z.push(w),g.set(w.elementId,Z)}function S(w){if(w.kind!=="door-self")return g.get(w.elementId)?.find(Z=>Z!==w)}const b=new n0(p.domElement);b.setColliders(T),b.setWalkables(P),b.teleport(d.spawnPos,d.spawnYaw),h.add(b.camera),a&&(b.camera.far=130,b.camera.updateProjectionMatrix());const D=[];if(c!=="off"&&!u){const w=fr(20260703),Z=(xe,fe,ke)=>{const Xe=new Im(fe,ke,1+Math.floor(w()*99991));h.add(Xe.group),D.push({w:Xe,owner:xe})},Y=c==="full"?7:3;for(let xe=0;xe<Y;xe++){const fe=4+(r.street.x1-70)*xe/Math.max(1,Y-1),ke=xe%2?r.loop.north.z0+2:9;Z(y,new F(fe,0,ke),new F(Math.min(fe+55,r.street.x1-4),0,ke))}if(c==="full"){let xe=0;for(const[ke,Xe]of Object.entries(r.landings)){if(Xe.x1-Xe.x0<18||xe>=12)continue;const gt=v.get(ke);if(!gt)continue;const It=Xe.mirror?r.loop.K-8.5:8.5+(Xe.dz??0);Z(gt,new F(Xe.x0+1.2,Xe.y,It),new F(Xe.x1-1.2,Xe.y,It)),xe++}let fe=0;for(const ke of i.classes){const Xe=r.areas[ke.id];if(Xe.corridorLen<24||fe>=8)continue;const gt=v.get(ke.id);if(!gt)continue;const It=Xe.oz+(Xe.flip?.8:-.8),tn=Xe.oz+(Xe.flip?Xe.corridorLen-2:-(Xe.corridorLen-2));Z(gt,new F(Xe.x,Xe.y,It),new F(Xe.x,Xe.y,tn)),fe++}}}const k=a?140:175;function W(){const w=b.position,Z=b.floorPosition.y;for(const Y of v.values()){let xe=1/0;for(const ke of Y.boxes)xe=Math.min(xe,ke.distanceToPoint(w));const fe=Y.wc?r.areas[Y.wc.id].y:0;Y.group.visible=xe<k&&(Math.abs(fe-Z)<L.STOREY/2||xe<30)}}W();let H=d;function K(w){H=w;const Z=w.wc;l0.textContent=w.label,c0.textContent=Z?[Z.roomNumber?`Room ${Z.roomNumber}`:null,`${n.get(Z.wing)??Z.wing} · ${Z.floor?`level −${Z.floor}`:"ground"}`].filter(Boolean).join(" · "):i.meta.label,a0.style.borderLeft=`8px solid ${Z?qn(Z.wing):"#ffffff"}`}K(d),new URLSearchParams(location.search).get("start")==="theatre"&&(b.teleport(A.lecternPos,A.lecternYaw),K(A));{const w=new URLSearchParams(location.search).get("concept")?.trim().toLowerCase();if(w){const Z=i.classes.find(xe=>xe.label.toLowerCase()===w),Y=Z&&v.get(Z.id);Y?(b.teleport(Y.spawnPos,Y.spawnYaw),K(Y),W()):Bt(`No concept called “${w}” — press M for the porter`)}}let V=!1;function re(w){const Z=H.lift;Z&&(V||(Z.doors.target=b.floorPosition.distanceTo(Z.doorwayPos)<2.1?1:0),Z.doors.update(w))}let B=null;const $=()=>{if(!B)try{B=new AudioContext}catch{}};addEventListener("pointerdown",$,{once:!0}),addEventListener("keydown",$,{once:!0});function oe(){if(!B)return;const w=B.currentTime+.05;for(const[Z,Y]of[[1318.5,0],[1046.5,.14]]){const xe=B.createOscillator(),fe=B.createGain();xe.type="sine",xe.frequency.value=Z,fe.gain.setValueAtTime(1e-4,w+Y),fe.gain.linearRampToValueAtTime(.045,w+Y+.015),fe.gain.exponentialRampToValueAtTime(1e-4,w+Y+.55),xe.connect(fe).connect(B.destination),xe.start(w+Y),xe.stop(w+Y+.6)}}const G=w=>(w.max.x-w.min.x)*(w.max.y-w.min.y)*(w.max.z-w.min.z);function ee(w){let Z,Y=1/0;for(const xe of v.values())for(const fe of xe.boxes)fe.containsPoint(w)&&G(fe)<Y&&(Z=xe,Y=G(fe));return Z}const ge=navigator.maxTouchPoints>0||"ontouchstart"in window||matchMedia("(pointer: coarse)").matches,Ee=matchMedia("(pointer: coarse)").matches;if(ge){document.body.classList.add("touch");const w=si.querySelector(".badge"),Z=si.querySelector("p");w&&(w.textContent=Ee?"Tap to enter":"Click or tap to enter"),Z&&(Z.textContent="Left pad or WASD to walk · drag to look · ⏩ jumps ahead · ℹ reads · ⌖ porter · double-click captures the mouse")}si.addEventListener("pointerup",w=>{ge||w.pointerType==="touch"?si.style.display="none":b.controls.lock()}),p.domElement.addEventListener("dblclick",()=>b.controls.lock()),b.controls.addEventListener("lock",()=>si.style.display="none"),b.controls.addEventListener("unlock",()=>{!Cn()&&!Ke&&(si.style.display="flex")});let q=0;const Q=[];function ie(){const w=b.floorPosition;Q.push({x:w.x,y:w.y,z:w.z,yaw:b.camera.rotation.y,areaId:H.id}),Q.length>60&&Q.shift()}function pe(){if(Cn()||Ke||V)return;const w=Q.pop();if(!w){Bt("No earlier stop to go back to");return}const Z=v.get(w.areaId);b.teleport({x:w.x,y:w.y,z:w.z},w.yaw),Z&&K(Z),Le=te(b.floorPosition),W(),Pi(),Bt(`Back → ${Z?.label??"previous stop"}`),q=performance.now()}function de(w,Z){const Y=v.get(w);Y&&(ie(),b.teleport(Y.spawnPos,Y.spawnYaw),K(Y),Le=te(b.floorPosition),W(),Pi(),Z&&Bt(Z),q=performance.now())}function Ue(w,Z){w?.lift?(V=!0,w.lift.doors.target=0,setTimeout(()=>{V=!1,b.floorPosition.distanceTo(w.lift.doorwayPos)<1.7?tt(Z):Bt("The lift left without you")},650)):tt(Z)}function tt(w){const Z=v.get(w);Z&&(Z.liftPos?(ie(),b.teleport(Z.liftPos,Z.liftYaw??0),K(Z),Le=te(b.floorPosition),W(),Pi(),Bt(`Lift → ${Z.label}`),q=performance.now(),oe()):de(w,`Lift → ${Z.label}`))}function Ge(w){const Z=w.targetIds[0],Y=v.get(Z);if(Y){if(ie(),w.kind==="door-self")b.teleport(Y.spawnPos,Y.spawnYaw),Bt(`${w.label} — back where you started (a pig's ear)`);else{const xe=S(w);xe?.exitPos?b.teleport(xe.exitPos,xe.exitYaw??0):b.teleport(Y.spawnPos,Y.spawnYaw),Bt(`${w.label} → ${Y.label}`)}K(Y),Le=te(b.floorPosition),W(),Pi(),q=performance.now()}}const nt=(w,Z="")=>{const Y=e.get(w);return{label:`${Z}${Y?.label??w}`,sub:Y?[Y.roomNumber,`${n.get(Y.wing)??Y.wing} · ${Y.floor?`level −${Y.floor}`:"ground"}`].filter(Boolean).join(" · "):void 0,chip:Y?qn(Y.wing):void 0,value:w}};function se(w){const Z=e.get(w.areaId),Y=b.controls.isLocked;Y&&b.controls.unlock();const xe=ke=>{Y&&b.controls.lock(),ke?.()},fe=[];if(Z){const ke=Lo(Z,e).sort((Xe,gt)=>gt.level-Xe.level);fe.push(...ke.map(Xe=>nt(Xe.id,`▲${Xe.level}  `))),fe.push({label:`●  ${Z.label}`,sub:"you are here",strong:!0,value:null}),fe.push(...Z.subs.map(Xe=>nt(Xe,"▼1  ")))}fe.push({label:"⌂  Reception",sub:"ground floor",value:on}),fl("Lift",Z?.label??"",fe,{onPick:ke=>xe(()=>Ue(v.get(w.areaId),ke)),onClose:()=>xe()})}function _e(){const w=b.controls.isLocked;w&&b.controls.unlock();const Z=[...i.classes].sort((Y,xe)=>Y.label.localeCompare(xe.label)).map(Y=>nt(Y.id));Z.unshift({label:"⌂  Reception",sub:"the atrium",value:on},{label:"▤  Postgraduate Medical Centre",sub:"lecture theatre",value:Pn}),fl("Porter service","where would you like to go?",Z,{searchable:!0,onPick:Y=>{w&&b.controls.lock(),de(Y,`Porter → ${v.get(Y)?.label}`)},onClose:()=>{w&&b.controls.lock()}})}const ye=document.getElementById("reader"),I=ye.querySelector("h2"),et=ye.querySelector("header .meta"),$e=ye.querySelector(".reader-body");let Ke=!1,Ie=!1;const E=w=>w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function _(){Ke=!1,ye.style.display="none",Ie&&b.controls.lock()}function U(){const w=H.wc;I.textContent=H.label,et.textContent=w?[w.roomNumber?`Room ${w.roomNumber}`:null,`${n.get(w.wing)??w.wing}`,w.floor?`level −${w.floor}`:"ground"].filter(Boolean).join(" · "):i.meta.label;let Z="";if(!w)Z=H.id===on?`<p>Reception for the ContSys Hospital — a walkable model of ${E(i.meta.label)}. The hospital street runs east; every wing's entrance opens off it. The Postgraduate Medical Centre (lecture theatre) is through the north door. Press M (or ⌖) for the porter.</p>`:H.id===ir?"<p>The Reference Gallery, west of the Postgraduate Medical Centre: the clause 3.1 definitional concepts (the Reference collection) and the Resources annex open off its south side, exactly as wings open off the hospital street.</p>":H.id===Pn?`<p>The Postgraduate Medical Centre: a raked lecture theatre for seminars and video presentations.</p>
               <h3>Presenting</h3>
               <ul><li>Slides advance with ← / → or PageUp / PageDown — presenter clickers work.</li>
               <li>Tap or click the screen: right side next, left side back.</li>
               <li><strong>H</strong> hides the whole interface for a clean recording; <strong>L</strong> dims the house lights.</li>
               <li>Add <code>?start=theatre</code> to the address to begin at the lectern.</li></ul>
               <h3>Your own deck</h3>
               <p>Export slides as PNG/JPG (1920×1080), copy them into <code>slides/</code>, and list them in <code>slides/manifest.json</code> — video clips (.mp4) can be listed too.</p>`:"<p>The hospital street: a racetrack loop of two parallel streets joined by glazed cloisters across the courtyard — take whichever way round is shorter. Wing entrances open off the outside of each street; the courtyard holds the lawn and the Postgraduate Medical Centre.</p>";else{Z+=`<p>${E(w.description??"Definition pending.")}</p>`;const Y=[];w.plural&&Y.push(`<strong>Plural:</strong> ${E(w.plural)}`),w.alsoKnownAs.length&&Y.push(`<strong>Also known as:</strong> ${E(w.alsoKnownAs.join("; "))}`),w.deprecated.length&&Y.push(`<strong>Deprecated terms:</strong> ${E(w.deprecated.join("; "))}`),w.termClause&&Y.push(`<strong>Clause:</strong> ${E(w.termClause)}`),w.source&&Y.push(`<span class="small"><strong>Source:</strong> ${E(w.source)}</span>`),Y.length&&(Z+=`<p>${Y.join("<br>")}</p>`),w.notes.length&&(Z+=`<h3>Notes</h3><ol>${w.notes.map(fe=>`<li>${E(fe.text)}</li>`).join("")}</ol>`),w.examples.length&&(Z+=`<h3>Examples</h3><ol>${w.examples.map(fe=>`<li>${E(fe.text)}</li>`).join("")}</ol>`);const xe=fe=>E(e.get(fe)?.label??"?");(w.out.length||w.self.length)&&(Z+=`<h3>Outbound associations (doors on the right wall)</h3><ul>${[...w.out.map(fe=>`<li>${E(qr(w.label,fe.label,e.get(fe.targetId)?.label??"?",fe))}</li>`),...w.self.map(fe=>`<li>${E(fe.label)} → ${E(w.label)} (end wall)</li>`)].join("")}</ul>`),w.in.length&&(Z+=`<h3>Inbound associations (doors on the left wall)</h3><ul>${w.in.map(fe=>`<li>${E(qr(e.get(fe.sourceId)?.label??"?",fe.label,w.label,fe))}</li>`).join("")}</ul>`),w.supers.length&&(Z+=`<h3>Generalisations (stairs up)</h3><ul>${w.supers.map(fe=>`<li>${xe(fe)}</li>`).join("")}</ul>`),w.subs.length&&(Z+=`<h3>Specialisations (stairs down)</h3><ul>${w.subs.map(fe=>`<li>${xe(fe)}</li>`).join("")}</ul>`)}$e.innerHTML=Z,Ie=b.controls.isLocked,Ie&&b.controls.unlock(),ye.style.display="flex",Ke=!0}ye.addEventListener("click",w=>{w.target===ye&&_()});let ne=null;function ae(){Cn()||Ke||ne?.kind==="lift"&&se(ne)}function te(w){const Z=new Set;for(const Y of H.interactables){if(Math.abs(Y.triggerPos.y-w.y)>2)continue;const xe=Math.abs(w.x-Y.triggerPos.x),fe=Math.abs(w.z-Y.triggerPos.z);Y.halfX!==void 0?xe<=Y.halfX&&fe<=(Y.halfZ??Y.halfX)&&Z.add(Y):xe*xe+fe*fe<=Y.radius*Y.radius&&Z.add(Y)}return Z}let Le=new Set;function ve(){if(V){ne=null,Ci.style.opacity="0";return}const w=performance.now(),Z=te(b.floorPosition);let Y=null;for(const xe of Z){if(!xe.auto){Y=xe;continue}if(!Le.has(xe)&&!(w-q<s0)){xe.kind==="stair-up"||xe.kind==="stair-down"?de(xe.targetIds[0],`${xe.label} (portal)`):Ge(xe);return}}Le=Z,ne=Y,Ci.textContent=Y?Y.prompt??`E — ${Y.label}`:"",Ci.style.opacity=Y?"1":"0"}const Ne=new bu,We=new lt;function he(w,Z){const Y=H.boards;if(!Y?.length)return null;b.camera.updateMatrixWorld(),We.set(w,Z),Ne.setFromCamera(We,b.camera);for(const xe of Y){xe.mesh.updateWorldMatrix(!0,!1);const fe=Ne.intersectObject(xe.mesh,!1)[0];if(!(!fe?.uv||fe.distance>(xe.kind==="screen"?16:4.2)))for(const ke of xe.cells){const[Xe,gt,It,tn]=ke.rect;if(fe.uv.x>=Xe&&fe.uv.x<=It&&fe.uv.y>=gt&&fe.uv.y<=tn)return{...ke,kind:xe.kind}}}return null}function Me(w,Z){if(V||Cn()||Ke||performance.now()-q<400)return!1;const Y=he(w,Z);if(!Y)return!1;if(Y.kind==="screen")Y.id==="next"?C.next():C.prev(),Bt(C.label);else if(Y.kind==="lift"){const xe=H;xe.liftPos&&b.floorPosition.distanceTo(xe.liftPos)<1.2?Ue(xe,Y.id):tt(Y.id)}else de(Y.id,`→ ${v.get(Y.id)?.label??Y.label}`);return!0}p.domElement.addEventListener("click",()=>{b.controls.isLocked&&Me(0,0)});let De=0,Oe=0,Se=0;p.domElement.addEventListener("pointerdown",w=>{De=w.clientX,Oe=w.clientY,Se=performance.now()}),p.domElement.addEventListener("pointerup",w=>{b.controls.isLocked||Math.hypot(w.clientX-De,w.clientY-Oe)>8||performance.now()-Se>600||Me(w.clientX/innerWidth*2-1,-(w.clientY/innerHeight)*2+1)}),addEventListener("keydown",w=>{if(Ke){(w.code==="Escape"||w.code==="KeyR")&&_();return}Cn()||(w.code==="KeyE"&&ae(),w.code==="KeyR"&&U(),w.code==="KeyM"&&_e(),w.code==="KeyB"&&pe(),w.code==="KeyF"&&b.dash(12)>.3&&Pi(),w.code==="KeyH"&&(document.body.classList.toggle("filming")||Bt("Interface restored")),H.id===Pn&&((w.code==="ArrowRight"||w.code==="PageDown")&&(w.preventDefault(),C.next(),Bt(C.label)),(w.code==="ArrowLeft"||w.code==="PageUp")&&(w.preventDefault(),C.prev(),Bt(C.label)),w.code==="KeyL"&&(Ze=!Ze,A.setHouseLights(Ze),Bt(Ze?"House lights up":"House lights dimmed — L restores"))))});let Ze=!0;if(Ci.addEventListener("click",ae),b.enableDragLook(p.domElement),ge){const w=document.getElementById("joy"),Z=document.getElementById("joy-knob");let Y=null;const xe=()=>{Y=null,Z.style.transform="",b.setTouchMove(0,0)},fe=ke=>{const Xe=w.getBoundingClientRect();let gt=ke.clientX-(Xe.left+Xe.width/2),It=ke.clientY-(Xe.top+Xe.height/2);if(!Number.isFinite(gt)||!Number.isFinite(It))return;const tn=Math.hypot(gt,It),Be=44;tn>Be&&(gt*=Be/tn,It*=Be/tn),Z.style.transform=`translate(${gt}px, ${It}px)`,b.setTouchMove(-It/Be,gt/Be)};w.addEventListener("pointerdown",ke=>{ke.preventDefault(),Y=ke.pointerId,fe(ke);try{w.setPointerCapture(ke.pointerId)}catch{}}),w.addEventListener("pointermove",ke=>{ke.pointerId===Y&&(ke.preventDefault(),fe(ke))}),w.addEventListener("pointerup",xe),w.addEventListener("pointercancel",xe),document.getElementById("btn-read").addEventListener("click",()=>Ke?_():U()),document.getElementById("btn-porter").addEventListener("click",()=>{!Cn()&&!Ke&&_e()}),document.getElementById("btn-dash").addEventListener("click",()=>{!Cn()&&!Ke&&b.dash(12)>.3&&Pi()}),document.getElementById("btn-back").addEventListener("click",pe)}const N=new Su;let Te=0;const me={logic:0,render:0},Ce=performance.now();let ue=12,le=0;p.setAnimationLoop(()=>{const w=performance.now(),Z=Math.min(N.getDelta(),.05);Cn()||b.update(Z),re(Z);for(const fe of D){const ke=fe.owner.group.visible;fe.w.group.visible=ke,ke&&fe.w.update(Z)}const Y=ee(b.floorPosition);if(Y&&Y!==H&&K(Y),ve(),b.controls.isLocked&&!V&&!Cn()){const fe=he(0,0);fe&&(Ci.textContent=fe.kind==="screen"?`Click — ${fe.label}`:`Click — ${fe.kind==="lift"?"lift to":"go to"} ${fe.label}`,Ci.style.opacity="1")}if(Te+=Z,Te>.4&&(Te=0,x.update(b.position,a?40:55,a?100:120,a?5:8),W(),performance.now()-Ce>12e3&&D.length)){if(le===0&&ue>26){le=1;for(let fe=D.length-1;fe>=0;fe-=2)h.remove(D[fe].w.group),D.splice(fe,1);Bt("Trimmed ward activity to keep things smooth")}else if(le===1&&ue>30){le=2;for(const fe of D)h.remove(fe.w.group);D.length=0,Bt("Paused ward activity for performance")}}const xe=performance.now();p.render(h,b.camera),me.logic=xe-w,me.render=performance.now()-xe,ue=ue*.96+(me.logic+me.render)*.04}),addEventListener("resize",()=>{b.camera.aspect=innerWidth/innerHeight,b.camera.updateProjectionMatrix(),p.setSize(innerWidth,innerHeight)});function be(){const w={areas:i.classes.length+4,doorOut:i.classes.reduce((Be,rt)=>Be+rt.out.length,0),doorIn:i.classes.reduce((Be,rt)=>Be+rt.in.length,0),doorSelf:i.classes.reduce((Be,rt)=>Be+rt.self.length,0),notices:i.classes.reduce((Be,rt)=>Be+rt.notes.length+rt.examples.length,0),stairUpPortals:i.classes.reduce((Be,rt)=>Be+Math.max(0,rt.supers.length-1),0),stairDownPortals:i.classes.reduce((Be,rt)=>Be+(rt.subs.length-(r.homeChildren[rt.id]?.length??0)),0),lifts:i.classes.filter(Be=>Be.supers.length||Be.subs.length).length,realStairwells:Object.keys(r.landings).length},Z=Be=>O.filter(rt=>rt.kind===Be).length,Y={areas:v.size,doorOut:Z("door-out"),doorIn:Z("door-in"),doorSelf:Z("door-self"),notices:[...v.values()].reduce((Be,rt)=>Be+(rt.notices??0),0),stairUpPortals:Z("stair-up"),stairDownPortals:Z("stair-down"),lifts:Z("lift"),realStairwells:Object.keys(r.landings).length},xe=O.filter(Be=>(Be.kind==="door-out"||Be.kind==="door-in")&&!S(Be)),fe=new Map,ke=(Be,rt)=>{fe.has(Be)||fe.set(Be,new Set),fe.get(Be).add(rt)};ke(on,Do),ke(on,Pn),ke(Pn,on),ke(Pn,ir),ke(ir,Pn);for(const Be of r.wings){const rt=Be.street==="gallery"?ir:Do;for(const Wt of Be.rootIds)ke(rt,Wt),ke(Wt,rt)}for(const[Be,rt]of Object.entries(r.homeChildren))for(const Wt of rt)ke(Be,Wt),ke(Wt,Be);for(const Be of O){for(const rt of Be.targetIds)ke(Be.areaId,rt);if(Be.kind==="lift"){const rt=e.get(Be.areaId);for(const Wt of Lo(rt,e))ke(Be.areaId,Wt.id);for(const Wt of rt.subs)ke(Be.areaId,Wt);ke(Be.areaId,on)}}const Xe=new Set([on]),gt=[on];for(;gt.length;)for(const Be of fe.get(gt.pop())??[])Xe.has(Be)||(Xe.add(Be),gt.push(Be));const It=[...v.keys()].filter(Be=>!Xe.has(Be)).map(Be=>v.get(Be).label);return{pass:Y.areas===w.areas&&Y.doorOut===w.doorOut&&Y.doorIn===w.doorIn&&Y.doorSelf===w.doorSelf&&Y.notices===w.notices&&Y.stairUpPortals===w.stairUpPortals&&Y.stairDownPortals===w.stairDownPortals&&Y.lifts===w.lifts&&xe.length===0&&It.length===0,expect:w,built:Y,unpaired:xe.length,unreachable:It,signs:x.count}}window.__hospital={world:i,layout:r,player:b,areas:v,interactables:O,audit:be,openSearch:_e,perf:()=>({...me,avg:+ue.toFixed(1),drawCalls:p.info.render.calls,triangles:p.info.render.triangles}),people:()=>({tier:c,walkers:D.length,demoteStage:le}),tickPeople(w=.1,Z=1){for(let Y=0;Y<Z;Y++)for(const xe of D)xe.w.update(w)},tickDoors(w=.1,Z=1){for(let Y=0;Y<Z;Y++)re(w);return H.lift?+H.lift.doors.openness.toFixed(2):null},bench(w=30){const Z=performance.now();for(let Y=0;Y<w;Y++)p.render(h,b.camera);return{msPerFrame:+((performance.now()-Z)/w).toFixed(2),drawCalls:p.info.render.calls,triangles:p.info.render.triangles}},currentArea:()=>H.label,pick:(w,Z)=>he(w,Z),tapPick:(w,Z)=>Me(w,Z),slides:()=>({label:C.label,total:C.count}),nextSlide:()=>(C.next(),C.label),prevSlide:()=>(C.prev(),C.label),houseLights:w=>A.setHouseLights(w),goto(w){const Z=w==="Reception"?d:w==="Hospital Street"?y:w==="Postgraduate Medical Centre"?A:t.get(w)&&v.get(t.get(w).id)||null;return Z?(de(Z.id),Z.label):`unknown area: ${w}`},walk(w){const Z=Math.ceil(Math.abs(w)/.1);for(let xe=0;xe<Z;xe++){const fe=b.camera.rotation.y,ke=b.camera.position;ke.x+=-Math.sin(fe)*.1*Math.sign(w),ke.z+=-Math.cos(fe)*.1*Math.sign(w),b.snapGround();const Xe=ee(b.floorPosition);Xe&&Xe!==H&&K(Xe),ve()}const Y=b.camera.position;return{x:+Y.x.toFixed(2),y:+(Y.y-1.7).toFixed(2),z:+Y.z.toFixed(2),area:H.label}}},console.info(`[hospital] built ${v.size} areas, ${O.length} interactables, ${x.count} signs, loop ${Math.round(r.street.x1)}m × 2 + ${r.loop.C}m courtyard`)}u0().catch(i=>{console.error(i);const e=document.createElement("p");e.style.cssText="color:#fff;padding:24px;font-family:Arial",e.textContent=String(i),si.replaceChildren(e)});
