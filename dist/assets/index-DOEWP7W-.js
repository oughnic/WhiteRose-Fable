(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Ia="182",jl=0,eo=1,Jl=2,Ur=1,Ql=2,Ji=3,Yn=0,Vt=1,wn=2,Pn=0,Ii=1,to=2,no=3,io=4,ec=5,ii=100,tc=101,nc=102,ic=103,rc=104,sc=200,ac=201,oc=202,lc=203,Ds=204,Us=205,cc=206,uc=207,hc=208,fc=209,dc=210,pc=211,mc=212,gc=213,_c=214,Ns=0,Fs=1,Os=2,Di=3,Bs=4,zs=5,ks=6,Hs=7,$r=0,xc=1,vc=2,dn=0,fl=1,dl=2,pl=3,ml=4,gl=5,_l=6,xl=7,vl=300,ci=301,Ui=302,Gs=303,Vs=304,qr=306,nr=1e3,Rn=1001,Ws=1002,It=1003,Mc=1004,fr=1005,St=1006,es=1007,oi=1008,qt=1009,Ml=1010,Sl=1011,ir=1012,La=1013,mn=1014,un=1015,Un=1016,Da=1017,Ua=1018,rr=1020,bl=35902,El=35899,yl=1021,Tl=1022,an=1023,Nn=1026,li=1027,Al=1028,Na=1029,Ni=1030,Fa=1031,Oa=1033,Nr=33776,Fr=33777,Or=33778,Br=33779,Xs=35840,Ys=35841,$s=35842,qs=35843,Zs=36196,Ks=37492,js=37496,Js=37488,Qs=37489,ea=37490,ta=37491,na=37808,ia=37809,ra=37810,sa=37811,aa=37812,oa=37813,la=37814,ca=37815,ua=37816,ha=37817,fa=37818,da=37819,pa=37820,ma=37821,ga=36492,_a=36494,xa=36495,va=36283,Ma=36284,Sa=36285,ba=36286,Sc=3200,Ba=0,bc=1,Vn="",mt="srgb",Fi="srgb-linear",Hr="linear",ct="srgb",fi=7680,ro=519,Ec=512,yc=513,Tc=514,za=515,Ac=516,wc=517,ka=518,Rc=519,so=35044,ao="300 es",hn=2e3,Gr=2001;function wl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cc(){const i=Vr("canvas");return i.style.display="block",i}const oo={};function lo(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ye(...i){const e="THREE."+i.shift();console.warn(e,...i)}function nt(...i){const e="THREE."+i.shift();console.error(e,...i)}function sr(...i){const e=i.join(" ");e in oo||(oo[e]=!0,Ye(...i))}function Pc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ts=Math.PI/180,Ea=180/Math.PI;function or(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function Ic(i,e){return(i%e+e)%e}function ns(i,e,t){return(1-t)*i+t*e}function Wi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[a+0],p=s[a+1],x=s[a+2],v=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=v;return}if(h!==v||l!==f||c!==p||u!==x){let m=l*f+c*p+u*x+h*v;m<0&&(f=-f,p=-p,x=-x,v=-v,m=-m);let d=1-o;if(m<.9995){const C=Math.acos(m),R=Math.sin(C);d=Math.sin(d*C)/R,o=Math.sin(o*C)/R,l=l*d+f*o,c=c*d+p*o,u=u*d+x*o,h=h*d+v*o}else{l=l*d+f*o,c=c*d+p*o,u=u*d+x*o,h=h*d+v*o;const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],f=s[a+1],p=s[a+2],x=s[a+3];return e[t]=o*x+u*h+l*p-c*f,e[t+1]=l*x+u*f+c*h-o*p,e[t+2]=c*x+u*p+o*f-l*h,e[t+3]=u*x-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),f=l(n/2),p=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*p*x,this._y=c*p*h-f*u*x,this._z=c*u*x+f*p*h,this._w=c*u*h-f*p*x;break;case"YXZ":this._x=f*u*h+c*p*x,this._y=c*p*h-f*u*x,this._z=c*u*x-f*p*h,this._w=c*u*h+f*p*x;break;case"ZXY":this._x=f*u*h-c*p*x,this._y=c*p*h+f*u*x,this._z=c*u*x+f*p*h,this._w=c*u*h-f*p*x;break;case"ZYX":this._x=f*u*h-c*p*x,this._y=c*p*h+f*u*x,this._z=c*u*x-f*p*h,this._w=c*u*h+f*p*x;break;case"YZX":this._x=f*u*h+c*p*x,this._y=c*p*h+f*u*x,this._z=c*u*x-f*p*h,this._w=c*u*h-f*p*x;break;case"XZY":this._x=f*u*h-c*p*x,this._y=c*p*h-f*u*x,this._z=c*u*x+f*p*h,this._w=c*u*h+f*p*x;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(co.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(co.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return is.copy(this).projectOnVector(e),this.sub(is)}reflect(e){return this.sub(is.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const is=new B,co=new lr;class Ze{constructor(e,t,n,r,s,a,o,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],x=n[8],v=r[0],m=r[3],d=r[6],C=r[1],R=r[4],y=r[7],T=r[2],w=r[5],P=r[8];return s[0]=a*v+o*C+l*T,s[3]=a*m+o*R+l*w,s[6]=a*d+o*y+l*P,s[1]=c*v+u*C+h*T,s[4]=c*m+u*R+h*w,s[7]=c*d+u*y+h*P,s[2]=f*v+p*C+x*T,s[5]=f*m+p*R+x*w,s[8]=f*d+p*y+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,p=c*s-a*l,x=t*h+n*f+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=h*v,e[1]=(r*c-u*n)*v,e[2]=(o*n-r*a)*v,e[3]=f*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(rs.makeScale(e,t)),this}rotate(e){return this.premultiply(rs.makeRotation(-e)),this}translate(e,t){return this.premultiply(rs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rs=new Ze,uo=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ho=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lc(){const i={enabled:!0,workingColorSpace:Fi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ct&&(r.r=In(r.r),r.g=In(r.g),r.b=In(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(r.r=Li(r.r),r.g=Li(r.g),r.b=Li(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Vn?Hr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fi]:{primaries:e,whitePoint:n,transfer:Hr,toXYZ:uo,fromXYZ:ho,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:uo,fromXYZ:ho,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}}),i}const it=Lc();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let di;class Dc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{di===void 0&&(di=Vr("canvas")),di.width=e.width,di.height=e.height;const r=di.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=di}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=In(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(In(t[n]/255)*255):t[n]=In(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Uc=0;class Ha{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=or(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ss(r[a].image)):s.push(ss(r[a]))}else s=ss(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ss(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let Nc=0;const as=new B;class Lt extends ui{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Rn,r=Rn,s=St,a=oi,o=an,l=qt,c=Lt.DEFAULT_ANISOTROPY,u=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=or(),this.name="",this.source=new Ha(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(as).x}get height(){return this.source.getSize(as).y}get depth(){return this.source.getSize(as).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nr:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case Ws:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nr:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case Ws:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=vl;Lt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],x=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,y=(p+1)/2,T=(d+1)/2,w=(u+f)/4,P=(h+v)/4,z=(x+m)/4;return R>y&&R>T?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=w/n,s=P/n):y>T?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=w/r,s=z/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=P/s,r=z/s),this.set(n,r,s,t),this}let C=Math.sqrt((m-x)*(m-x)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(C)<.001&&(C=1),this.x=(m-x)/C,this.y=(h-v)/C,this.z=(f-u)/C,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fc extends ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Lt(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ha(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends Fc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Rl extends Lt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Oc extends Lt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ct{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,en):en.fromBufferAttribute(s,a),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)),dr.applyMatrix4(e.matrixWorld),this.union(dr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),pr.subVectors(this.max,Xi),pi.subVectors(e.a,Xi),mi.subVectors(e.b,Xi),gi.subVectors(e.c,Xi),On.subVectors(mi,pi),Bn.subVectors(gi,mi),qn.subVectors(pi,gi);let t=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-qn.z,qn.y,On.z,0,-On.x,Bn.z,0,-Bn.x,qn.z,0,-qn.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-qn.y,qn.x,0];return!os(t,pi,mi,gi,pr)||(t=[1,0,0,0,1,0,0,0,1],!os(t,pi,mi,gi,pr))?!1:(mr.crossVectors(On,Bn),t=[mr.x,mr.y,mr.z],os(t,pi,mi,gi,pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mn=[new B,new B,new B,new B,new B,new B,new B,new B],en=new B,dr=new Ct,pi=new B,mi=new B,gi=new B,On=new B,Bn=new B,qn=new B,Xi=new B,pr=new B,mr=new B,Zn=new B;function os(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Zn.fromArray(i,s);const o=r.x*Math.abs(Zn.x)+r.y*Math.abs(Zn.y)+r.z*Math.abs(Zn.z),l=e.dot(Zn),c=t.dot(Zn),u=n.dot(Zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Bc=new Ct,Yi=new B,ls=new B;class Ga{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yi.subVectors(e,this.center);const t=Yi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Yi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ls.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yi.copy(e.center).add(ls)),this.expandByPoint(Yi.copy(e.center).sub(ls))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Sn=new B,cs=new B,gr=new B,zn=new B,us=new B,_r=new B,hs=new B;class Cl{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){cs.copy(e).add(t).multiplyScalar(.5),gr.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(cs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(gr),o=zn.dot(this.direction),l=-zn.dot(gr),c=zn.lengthSq(),u=Math.abs(1-a*a);let h,f,p,x;if(u>0)if(h=a*l-o,f=a*o-l,x=s*u,h>=0)if(f>=-x)if(f<=x){const v=1/u;h*=v,f*=v,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(cs).addScaledVector(gr,f),p}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const n=Sn.dot(this.direction),r=Sn.dot(Sn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,r,s){us.subVectors(t,e),_r.subVectors(n,e),hs.crossVectors(us,_r);let a=this.direction.dot(hs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,e);const l=o*this.direction.dot(_r.crossVectors(zn,_r));if(l<0)return null;const c=o*this.direction.dot(us.cross(zn));if(c<0||l+c>a)return null;const u=-o*zn.dot(hs);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,n,r,s,a,o,l,c,u,h,f,p,x,v,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,f,p,x,v,m)}set(e,t,n,r,s,a,o,l,c,u,h,f,p,x,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=x,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/_i.setFromMatrixColumn(e,0).length(),s=1/_i.setFromMatrixColumn(e,1).length(),a=1/_i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*h,x=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+x*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=x+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,x=c*u,v=c*h;t[0]=f+v*o,t[4]=x*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-x,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,x=c*u,v=c*h;t[0]=f-v*o,t[4]=-a*h,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,x=o*u,v=o*h;t[0]=l*u,t[4]=x*c-p,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=v-f*h,t[8]=x*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+x,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*l,p=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=a*u,t[9]=p*h-x,t[2]=x*h-p,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zc,e,kc)}lookAt(e,t,n){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),kn.crossVectors(n,Yt),kn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),kn.crossVectors(n,Yt)),kn.normalize(),xr.crossVectors(Yt,kn),r[0]=kn.x,r[4]=xr.x,r[8]=Yt.x,r[1]=kn.y,r[5]=xr.y,r[9]=Yt.y,r[2]=kn.z,r[6]=xr.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],x=n[2],v=n[6],m=n[10],d=n[14],C=n[3],R=n[7],y=n[11],T=n[15],w=r[0],P=r[4],z=r[8],M=r[12],g=r[1],E=r[5],H=r[9],O=r[13],G=r[2],$=r[6],N=r[10],L=r[14],q=r[3],oe=r[7],ee=r[11],re=r[15];return s[0]=a*w+o*g+l*G+c*q,s[4]=a*P+o*E+l*$+c*oe,s[8]=a*z+o*H+l*N+c*ee,s[12]=a*M+o*O+l*L+c*re,s[1]=u*w+h*g+f*G+p*q,s[5]=u*P+h*E+f*$+p*oe,s[9]=u*z+h*H+f*N+p*ee,s[13]=u*M+h*O+f*L+p*re,s[2]=x*w+v*g+m*G+d*q,s[6]=x*P+v*E+m*$+d*oe,s[10]=x*z+v*H+m*N+d*ee,s[14]=x*M+v*O+m*L+d*re,s[3]=C*w+R*g+y*G+T*q,s[7]=C*P+R*E+y*$+T*oe,s[11]=C*z+R*H+y*N+T*ee,s[15]=C*M+R*O+y*L+T*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],x=e[3],v=e[7],m=e[11],d=e[15],C=l*p-c*f,R=o*p-c*h,y=o*f-l*h,T=a*p-c*u,w=a*f-l*u,P=a*h-o*u;return t*(v*C-m*R+d*y)-n*(x*C-m*T+d*w)+r*(x*R-v*T+d*P)-s*(x*y-v*w+m*P)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],x=e[12],v=e[13],m=e[14],d=e[15],C=h*m*c-v*f*c+v*l*p-o*m*p-h*l*d+o*f*d,R=x*f*c-u*m*c-x*l*p+a*m*p+u*l*d-a*f*d,y=u*v*c-x*h*c+x*o*p-a*v*p-u*o*d+a*h*d,T=x*h*l-u*v*l-x*o*f+a*v*f+u*o*m-a*h*m,w=t*C+n*R+r*y+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/w;return e[0]=C*P,e[1]=(v*f*s-h*m*s-v*r*p+n*m*p+h*r*d-n*f*d)*P,e[2]=(o*m*s-v*l*s+v*r*c-n*m*c-o*r*d+n*l*d)*P,e[3]=(h*l*s-o*f*s-h*r*c+n*f*c+o*r*p-n*l*p)*P,e[4]=R*P,e[5]=(u*m*s-x*f*s+x*r*p-t*m*p-u*r*d+t*f*d)*P,e[6]=(x*l*s-a*m*s-x*r*c+t*m*c+a*r*d-t*l*d)*P,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*p+t*l*p)*P,e[8]=y*P,e[9]=(x*h*s-u*v*s-x*n*p+t*v*p+u*n*d-t*h*d)*P,e[10]=(a*v*s-x*o*s+x*n*c-t*v*c-a*n*d+t*o*d)*P,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*p-t*o*p)*P,e[12]=T*P,e[13]=(u*v*r-x*h*r+x*n*f-t*v*f-u*n*m+t*h*m)*P,e[14]=(x*o*r-a*v*r-x*n*l+t*v*l+a*n*m-t*o*m)*P,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*f+t*o*f)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,p=s*u,x=s*h,v=a*u,m=a*h,d=o*h,C=l*c,R=l*u,y=l*h,T=n.x,w=n.y,P=n.z;return r[0]=(1-(v+d))*T,r[1]=(p+y)*T,r[2]=(x-R)*T,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(f+d))*w,r[6]=(m+C)*w,r[7]=0,r[8]=(x+R)*P,r[9]=(m-C)*P,r[10]=(1-(f+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=_i.set(r[0],r[1],r[2]).length();const a=_i.set(r[4],r[5],r[6]).length(),o=_i.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),tn.copy(this);const c=1/s,u=1/a,h=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=h,tn.elements[9]*=h,tn.elements[10]*=h,t.setFromRotationMatrix(tn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=hn,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r);let x,v;if(l)x=s/(a-s),v=a*s/(a-s);else if(o===hn)x=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Gr)x=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=hn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r);let x,v;if(l)x=1/(a-s),v=a/(a-s);else if(o===hn)x=-2/(a-s),v=-(a+s)/(a-s);else if(o===Gr)x=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _i=new B,tn=new gt,zc=new B(0,0,0),kc=new B(1,1,1),kn=new B,xr=new B,Yt=new B,fo=new gt,po=new lr;class Qt{constructor(e=0,t=0,n=0,r=Qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return po.setFromEuler(this),this.setFromQuaternion(po,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qt.DEFAULT_ORDER="XYZ";class Va{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hc=0;const mo=new B,xi=new lr,bn=new gt,vr=new B,$i=new B,Gc=new B,Vc=new lr,go=new B(1,0,0),_o=new B(0,1,0),xo=new B(0,0,1),vo={type:"added"},Wc={type:"removed"},vi={type:"childadded",child:null},fs={type:"childremoved",child:null};class Dt extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new B,t=new Qt,n=new lr,r=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ze}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis(go,e)}rotateY(e){return this.rotateOnAxis(_o,e)}rotateZ(e){return this.rotateOnAxis(xo,e)}translateOnAxis(e,t){return mo.copy(e).applyQuaternion(this.quaternion),this.position.add(mo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(go,e)}translateY(e){return this.translateOnAxis(_o,e)}translateZ(e){return this.translateOnAxis(xo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vr.copy(e):vr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt($i,vr,this.up):bn.lookAt(vr,$i,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),xi.setFromRotationMatrix(bn),this.quaternion.premultiply(xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vo),vi.child=e,this.dispatchEvent(vi),vi.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wc),fs.child=e,this.dispatchEvent(fs),fs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vo),vi.child=e,this.dispatchEvent(vi),vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,Gc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,Vc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new B(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new B,En=new B,ds=new B,yn=new B,Mi=new B,Si=new B,Mo=new B,ps=new B,ms=new B,gs=new B,_s=new Mt,xs=new Mt,vs=new Mt;class sn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),nn.subVectors(e,t),r.cross(nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){nn.subVectors(r,t),En.subVectors(n,t),ds.subVectors(e,t);const a=nn.dot(nn),o=nn.dot(En),l=nn.dot(ds),c=En.dot(En),u=En.dot(ds),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,x=(a*u-o*l)*f;return s.set(1-p-x,x,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yn.x),l.addScaledVector(a,yn.y),l.addScaledVector(o,yn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return _s.setScalar(0),xs.setScalar(0),vs.setScalar(0),_s.fromBufferAttribute(e,t),xs.fromBufferAttribute(e,n),vs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(_s,s.x),a.addScaledVector(xs,s.y),a.addScaledVector(vs,s.z),a}static isFrontFacing(e,t,n,r){return nn.subVectors(n,t),En.subVectors(e,t),nn.cross(En).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),nn.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Mi.subVectors(r,n),Si.subVectors(s,n),ps.subVectors(e,n);const l=Mi.dot(ps),c=Si.dot(ps);if(l<=0&&c<=0)return t.copy(n);ms.subVectors(e,r);const u=Mi.dot(ms),h=Si.dot(ms);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Mi,a);gs.subVectors(e,s);const p=Mi.dot(gs),x=Si.dot(gs);if(x>=0&&p<=x)return t.copy(s);const v=p*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Si,o);const m=u*x-p*h;if(m<=0&&h-u>=0&&p-x>=0)return Mo.subVectors(s,r),o=(h-u)/(h-u+(p-x)),t.copy(r).addScaledVector(Mo,o);const d=1/(m+v+f);return a=v*d,o=f*d,t.copy(n).addScaledVector(Mi,a).addScaledVector(Si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Ms(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=it.workingColorSpace){if(e=Ic(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ms(a,s,e+1/3),this.g=Ms(a,s,e),this.b=Ms(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=mt){function n(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){const n=Pl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return it.workingToColorSpace(Nt.copy(this),e),Math.round(tt(Nt.r*255,0,255))*65536+Math.round(tt(Nt.g*255,0,255))*256+Math.round(tt(Nt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Nt.copy(this),t);const n=Nt.r,r=Nt.g,s=Nt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=mt){it.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,r=Nt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Mr);const n=ns(Hn.h,Mr.h,t),r=ns(Hn.s,Mr.s,t),s=ns(Hn.l,Mr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new $e;$e.NAMES=Pl;let Xc=0;class zi extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=or(),this.name="",this.type="Material",this.blending=Ii,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ds,this.blendDst=Us,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ro,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ds&&(n.blendSrc=this.blendSrc),this.blendDst!==Us&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ro&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gn extends zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=$r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new B,Sr=new rt;let Yc=0;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=so,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==so&&(e.usage=this.usage),e}}class Il extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ll extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ln extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $c=0;const Kt=new gt,Ss=new Dt,bi=new B,$t=new Ct,qi=new Ct,wt=new B;class xn extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wl(e)?Ll:Il)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return Ss.lookAt(e),Ss.updateMatrix(),this.applyMatrix4(Ss.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ln(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ct);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];qi.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors($t.min,qi.min),$t.expandByPoint(wt),wt.addVectors($t.max,qi.max),$t.expandByPoint(wt)):($t.expandByPoint(qi.min),$t.expandByPoint(qi.max))}$t.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)wt.fromBufferAttribute(o,c),l&&(bi.fromBufferAttribute(e,c),wt.add(bi)),r=Math.max(r,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let z=0;z<n.count;z++)o[z]=new B,l[z]=new B;const c=new B,u=new B,h=new B,f=new rt,p=new rt,x=new rt,v=new B,m=new B;function d(z,M,g){c.fromBufferAttribute(n,z),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,g),f.fromBufferAttribute(s,z),p.fromBufferAttribute(s,M),x.fromBufferAttribute(s,g),u.sub(c),h.sub(c),p.sub(f),x.sub(f);const E=1/(p.x*x.y-x.x*p.y);isFinite(E)&&(v.copy(u).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(E),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(E),o[z].add(v),o[M].add(v),o[g].add(v),l[z].add(m),l[M].add(m),l[g].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let z=0,M=C.length;z<M;++z){const g=C[z],E=g.start,H=g.count;for(let O=E,G=E+H;O<G;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const R=new B,y=new B,T=new B,w=new B;function P(z){T.fromBufferAttribute(r,z),w.copy(T);const M=o[z];R.copy(M),R.sub(T.multiplyScalar(T.dot(M))).normalize(),y.crossVectors(w,M);const E=y.dot(l[z])<0?-1:1;a.setXYZW(z,R.x,R.y,R.z,E)}for(let z=0,M=C.length;z<M;++z){const g=C[z],E=g.start,H=g.count;for(let O=E,G=E+H;O<G;O+=3)P(e.getX(O+0)),P(e.getX(O+1)),P(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,x=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let d=0;d<u;d++)f[x++]=c[p++]}return new Jt(f,u,h)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const So=new gt,Kn=new Cl,br=new Ga,bo=new B,Er=new B,yr=new B,Tr=new B,bs=new B,Ar=new B,Eo=new B,wr=new B;class Pt extends Dt{constructor(e=new xn,t=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ar.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(bs.fromBufferAttribute(h,e),a?Ar.addScaledVector(bs,u):Ar.addScaledVector(bs.sub(t),u))}t.add(Ar)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(s),Kn.copy(e.ray).recast(e.near),!(br.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(br,bo)===null||Kn.origin.distanceToSquared(bo)>(e.far-e.near)**2))&&(So.copy(s).invert(),Kn.copy(e.ray).applyMatrix4(So),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Kn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=f.length;x<v;x++){const m=f[x],d=a[m.materialIndex],C=Math.max(m.start,p.start),R=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=C,T=R;y<T;y+=3){const w=o.getX(y),P=o.getX(y+1),z=o.getX(y+2);r=Rr(this,d,e,n,c,u,h,w,P,z),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=x,d=v;m<d;m+=3){const C=o.getX(m),R=o.getX(m+1),y=o.getX(m+2);r=Rr(this,a,e,n,c,u,h,C,R,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=f.length;x<v;x++){const m=f[x],d=a[m.materialIndex],C=Math.max(m.start,p.start),R=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=C,T=R;y<T;y+=3){const w=y,P=y+1,z=y+2;r=Rr(this,d,e,n,c,u,h,w,P,z),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=x,d=v;m<d;m+=3){const C=m,R=m+1,y=m+2;r=Rr(this,a,e,n,c,u,h,C,R,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function qc(i,e,t,n,r,s,a,o){let l;if(e.side===Vt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Yn,o),l===null)return null;wr.copy(o),wr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(wr);return c<t.near||c>t.far?null:{distance:c,point:wr.clone(),object:i}}function Rr(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Er),i.getVertexPosition(l,yr),i.getVertexPosition(c,Tr);const u=qc(i,e,t,n,Er,yr,Tr,Eo);if(u){const h=new B;sn.getBarycoord(Eo,Er,yr,Tr,h),r&&(u.uv=sn.getInterpolatedAttribute(r,o,l,c,h,new rt)),s&&(u.uv1=sn.getInterpolatedAttribute(s,o,l,c,h,new rt)),a&&(u.normal=sn.getInterpolatedAttribute(a,o,l,c,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new B,materialIndex:0};sn.getNormal(Er,yr,Tr,f.normal),u.face=f,u.barycoord=h}return u}class Fn extends xn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ln(c,3)),this.setAttribute("normal",new Ln(u,3)),this.setAttribute("uv",new Ln(h,2));function x(v,m,d,C,R,y,T,w,P,z,M){const g=y/P,E=T/z,H=y/2,O=T/2,G=w/2,$=P+1,N=z+1;let L=0,q=0;const oe=new B;for(let ee=0;ee<N;ee++){const re=ee*E-O;for(let ve=0;ve<$;ve++){const we=ve*g-H;oe[v]=we*C,oe[m]=re*R,oe[d]=G,c.push(oe.x,oe.y,oe.z),oe[v]=0,oe[m]=0,oe[d]=w>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(ve/P),h.push(1-ee/z),L+=1}}for(let ee=0;ee<z;ee++)for(let re=0;re<P;re++){const ve=f+re+$*ee,we=f+re+$*(ee+1),Ee=f+(re+1)+$*(ee+1),Re=f+(re+1)+$*ee;l.push(ve,we,Re),l.push(we,Ee,Re),q+=6}o.addGroup(p,q,M),p+=q,f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ot(i){const e={};for(let t=0;t<i.length;t++){const n=Oi(i[t]);for(const r in n)e[r]=n[r]}return e}function Zc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Kc={clone:Oi,merge:Ot};var jc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jc,this.fragmentShader=Jc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=Zc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ul extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new B,yo=new rt,To=new rt;class jt extends Ul{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,yo,To),t.subVectors(To,yo)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ts*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ei=-90,yi=1;class Qc extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new jt(Ei,yi,e,t);r.layers=this.layers,this.add(r);const s=new jt(Ei,yi,e,t);s.layers=this.layers,this.add(s);const a=new jt(Ei,yi,e,t);a.layers=this.layers,this.add(a);const o=new jt(Ei,yi,e,t);o.layers=this.layers,this.add(o);const l=new jt(Ei,yi,e,t);l.layers=this.layers,this.add(l);const c=new jt(Ei,yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Nl extends Lt{constructor(e=[],t=ci,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fl extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Nl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fn(5,5,5),s=new _n({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Pn});s.uniforms.tEquirect.value=t;const a=new Pt(r,s),o=t.minFilter;return t.minFilter===oi&&(t.minFilter=St),new Qc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class Cn extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eu={type:"move"};class Es{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eu)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Cn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Wr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=t,this.far=n}clone(){return new Wr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class tu extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nu extends Lt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=It,u=It,h,f){super(null,a,o,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ys=new B,iu=new B,ru=new Ze;class ti{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ys.subVectors(n,t).cross(iu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ys),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ru.getNormalMatrix(e),r=this.coplanarPoint(ys).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new Ga,su=new rt(.5,.5),Cr=new B;class Wa{constructor(e=new ti,t=new ti,n=new ti,r=new ti,s=new ti,a=new ti){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],p=s[7],x=s[8],v=s[9],m=s[10],d=s[11],C=s[12],R=s[13],y=s[14],T=s[15];if(r[0].setComponents(c-a,p-u,d-x,T-C).normalize(),r[1].setComponents(c+a,p+u,d+x,T+C).normalize(),r[2].setComponents(c+o,p+h,d+v,T+R).normalize(),r[3].setComponents(c-o,p-h,d-v,T-R).normalize(),n)r[4].setComponents(l,f,m,y).normalize(),r[5].setComponents(c-l,p-f,d-m,T-y).normalize();else if(r[4].setComponents(c-l,p-f,d-m,T-y).normalize(),t===hn)r[5].setComponents(c+l,p+f,d+m,T+y).normalize();else if(t===Gr)r[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(e){jn.center.set(0,0,0);const t=su.distanceTo(e.center);return jn.radius=.7071067811865476+t,jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Cr.x=r.normal.x>0?e.max.x:e.min.x,Cr.y=r.normal.y>0?e.max.y:e.min.y,Cr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class au extends Lt{constructor(e,t,n,r,s=St,a=St,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function h(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class vn extends Lt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ar extends Lt{constructor(e,t,n=mn,r,s,a,o=It,l=It,c,u=Nn,h=1){if(u!==Nn&&u!==li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ha(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ou extends ar{constructor(e,t=mn,n=ci,r,s,a=It,o=It,l,c=Nn){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ol extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ki extends xn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=t/l,p=[],x=[],v=[],m=[];for(let d=0;d<u;d++){const C=d*f-a;for(let R=0;R<c;R++){const y=R*h-s;x.push(y,-C,0),v.push(0,0,1),m.push(R/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let C=0;C<o;C++){const R=C+c*d,y=C+c*(d+1),T=C+1+c*(d+1),w=C+1+c*d;p.push(R,y,w),p.push(y,T,w)}this.setIndex(p),this.setAttribute("position",new Ln(x,3)),this.setAttribute("normal",new Ln(v,3)),this.setAttribute("uv",new Ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.width,e.height,e.widthSegments,e.heightSegments)}}class lu extends _n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cu extends zi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new $e(16777215),this.specular=new $e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=$r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yt extends zi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=$r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uu extends zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hu extends zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Xa extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class fu extends Xa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ts=new gt,Ao=new B,wo=new B;class du{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wa,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ao.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ao),wo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wo),t.updateMatrixWorld(),Ts.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ts,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ts)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ya extends Ul{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pu extends du{constructor(){super(new Ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mu extends Xa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new pu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class gu extends Xa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class _u extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class xu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ro=new gt;class vu{constructor(e,t,n=0,r=1/0){this.ray=new Cl(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Va,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):nt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ro.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ro),this}intersectObject(e,t=!0,n=[]){return ya(e,this,n,t),n.sort(Co),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)ya(e[r],this,n,t);return n.sort(Co),n}}function Co(i,e){return i.distance-e.distance}function ya(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)ya(s[a],e,t,!0)}}class Mu extends ui{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ye("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Po(i,e,t,n){const r=Su(n);switch(t){case yl:return i*e;case Al:return i*e/r.components*r.byteLength;case Na:return i*e/r.components*r.byteLength;case Ni:return i*e*2/r.components*r.byteLength;case Fa:return i*e*2/r.components*r.byteLength;case Tl:return i*e*3/r.components*r.byteLength;case an:return i*e*4/r.components*r.byteLength;case Oa:return i*e*4/r.components*r.byteLength;case Nr:case Fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Or:case Br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ys:case qs:return Math.max(i,16)*Math.max(e,8)/4;case Xs:case $s:return Math.max(i,8)*Math.max(e,8)/2;case Zs:case Ks:case Js:case Qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case js:case ea:case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ia:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ra:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case aa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case oa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case la:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ca:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ua:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ha:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case fa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case da:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case pa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ma:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ga:case _a:case xa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case va:case Ma:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Sa:case ba:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Su(i){switch(i){case qt:case Ml:return{byteLength:1,components:1};case ir:case Sl:case Un:return{byteLength:2,components:1};case Da:case Ua:return{byteLength:2,components:4};case mn:case La:case un:return{byteLength:4,components:1};case bl:case El:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ia}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ia);function Bl(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function bu(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<h.length;p++){const x=h[f],v=h[p];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,x=h.length;p<x;p++){const v=h[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Eu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yu=`#ifdef USE_ALPHAHASH
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
#endif`,Tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Au=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ru=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cu=`#ifdef USE_AOMAP
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
#endif`,Pu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iu=`#ifdef USE_BATCHING
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
#endif`,Lu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Du=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fu=`#ifdef USE_IRIDESCENCE
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
#endif`,Ou=`#ifdef USE_BUMPMAP
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
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yu=`#define PI 3.141592653589793
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
} // validated`,$u=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qu=`vec3 transformedNormal = objectNormal;
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
#endif`,Zu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ku=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ju=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ju=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qu="gl_FragColor = linearToOutputTexel( gl_FragColor );",eh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,th=`#ifdef USE_ENVMAP
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
#endif`,nh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ih=`#ifdef USE_ENVMAP
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
#endif`,rh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sh=`#ifdef USE_ENVMAP
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
#endif`,ah=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ch=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uh=`#ifdef USE_GRADIENTMAP
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
}`,hh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ph=`uniform bool receiveShadow;
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
#endif`,mh=`#ifdef USE_ENVMAP
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
#endif`,gh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_h=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mh=`PhysicalMaterial material;
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
#endif`,Sh=`uniform sampler2D dfgLUT;
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
}`,bh=`
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
#endif`,Eh=`#if defined( RE_IndirectDiffuse )
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
#endif`,yh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Th=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ah=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ch=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ph=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ih=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lh=`#if defined( USE_POINTS_UV )
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
#endif`,Dh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Oh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bh=`#ifdef USE_MORPHTARGETS
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
#endif`,zh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xh=`#ifdef USE_NORMALMAP
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
#endif`,Yh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$h=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ef=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,af=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,of=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lf=`float getShadowMask() {
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
}`,cf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uf=`#ifdef USE_SKINNING
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
#endif`,hf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ff=`#ifdef USE_SKINNING
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
#endif`,df=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_f=`#ifdef USE_TRANSMISSION
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
#endif`,xf=`#ifdef USE_TRANSMISSION
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
#endif`,vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ef=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yf=`uniform sampler2D t2D;
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
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`#include <common>
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
}`,Pf=`#if DEPTH_PACKING == 3200
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
}`,If=`#define DISTANCE
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
}`,Lf=`#define DISTANCE
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
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`uniform float scale;
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
}`,Ff=`uniform vec3 diffuse;
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
}`,Of=`#include <common>
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
}`,Bf=`uniform vec3 diffuse;
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
}`,zf=`#define LAMBERT
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
}`,kf=`#define LAMBERT
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
}`,Hf=`#define MATCAP
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
}`,Gf=`#define MATCAP
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
}`,Vf=`#define NORMAL
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
}`,Wf=`#define NORMAL
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
}`,Xf=`#define PHONG
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
}`,Yf=`#define PHONG
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
}`,$f=`#define STANDARD
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
}`,qf=`#define STANDARD
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
}`,Zf=`#define TOON
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
}`,Kf=`#define TOON
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
}`,jf=`uniform float size;
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
}`,Jf=`uniform vec3 diffuse;
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
}`,Qf=`#include <common>
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
}`,ed=`uniform vec3 color;
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
}`,td=`uniform float rotation;
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
}`,nd=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Eu,alphahash_pars_fragment:yu,alphamap_fragment:Tu,alphamap_pars_fragment:Au,alphatest_fragment:wu,alphatest_pars_fragment:Ru,aomap_fragment:Cu,aomap_pars_fragment:Pu,batching_pars_vertex:Iu,batching_vertex:Lu,begin_vertex:Du,beginnormal_vertex:Uu,bsdfs:Nu,iridescence_fragment:Fu,bumpmap_pars_fragment:Ou,clipping_planes_fragment:Bu,clipping_planes_pars_fragment:zu,clipping_planes_pars_vertex:ku,clipping_planes_vertex:Hu,color_fragment:Gu,color_pars_fragment:Vu,color_pars_vertex:Wu,color_vertex:Xu,common:Yu,cube_uv_reflection_fragment:$u,defaultnormal_vertex:qu,displacementmap_pars_vertex:Zu,displacementmap_vertex:Ku,emissivemap_fragment:ju,emissivemap_pars_fragment:Ju,colorspace_fragment:Qu,colorspace_pars_fragment:eh,envmap_fragment:th,envmap_common_pars_fragment:nh,envmap_pars_fragment:ih,envmap_pars_vertex:rh,envmap_physical_pars_fragment:mh,envmap_vertex:sh,fog_vertex:ah,fog_pars_vertex:oh,fog_fragment:lh,fog_pars_fragment:ch,gradientmap_pars_fragment:uh,lightmap_pars_fragment:hh,lights_lambert_fragment:fh,lights_lambert_pars_fragment:dh,lights_pars_begin:ph,lights_toon_fragment:gh,lights_toon_pars_fragment:_h,lights_phong_fragment:xh,lights_phong_pars_fragment:vh,lights_physical_fragment:Mh,lights_physical_pars_fragment:Sh,lights_fragment_begin:bh,lights_fragment_maps:Eh,lights_fragment_end:yh,logdepthbuf_fragment:Th,logdepthbuf_pars_fragment:Ah,logdepthbuf_pars_vertex:wh,logdepthbuf_vertex:Rh,map_fragment:Ch,map_pars_fragment:Ph,map_particle_fragment:Ih,map_particle_pars_fragment:Lh,metalnessmap_fragment:Dh,metalnessmap_pars_fragment:Uh,morphinstance_vertex:Nh,morphcolor_vertex:Fh,morphnormal_vertex:Oh,morphtarget_pars_vertex:Bh,morphtarget_vertex:zh,normal_fragment_begin:kh,normal_fragment_maps:Hh,normal_pars_fragment:Gh,normal_pars_vertex:Vh,normal_vertex:Wh,normalmap_pars_fragment:Xh,clearcoat_normal_fragment_begin:Yh,clearcoat_normal_fragment_maps:$h,clearcoat_pars_fragment:qh,iridescence_pars_fragment:Zh,opaque_fragment:Kh,packing:jh,premultiplied_alpha_fragment:Jh,project_vertex:Qh,dithering_fragment:ef,dithering_pars_fragment:tf,roughnessmap_fragment:nf,roughnessmap_pars_fragment:rf,shadowmap_pars_fragment:sf,shadowmap_pars_vertex:af,shadowmap_vertex:of,shadowmask_pars_fragment:lf,skinbase_vertex:cf,skinning_pars_vertex:uf,skinning_vertex:hf,skinnormal_vertex:ff,specularmap_fragment:df,specularmap_pars_fragment:pf,tonemapping_fragment:mf,tonemapping_pars_fragment:gf,transmission_fragment:_f,transmission_pars_fragment:xf,uv_pars_fragment:vf,uv_pars_vertex:Mf,uv_vertex:Sf,worldpos_vertex:bf,background_vert:Ef,background_frag:yf,backgroundCube_vert:Tf,backgroundCube_frag:Af,cube_vert:wf,cube_frag:Rf,depth_vert:Cf,depth_frag:Pf,distance_vert:If,distance_frag:Lf,equirect_vert:Df,equirect_frag:Uf,linedashed_vert:Nf,linedashed_frag:Ff,meshbasic_vert:Of,meshbasic_frag:Bf,meshlambert_vert:zf,meshlambert_frag:kf,meshmatcap_vert:Hf,meshmatcap_frag:Gf,meshnormal_vert:Vf,meshnormal_frag:Wf,meshphong_vert:Xf,meshphong_frag:Yf,meshphysical_vert:$f,meshphysical_frag:qf,meshtoon_vert:Zf,meshtoon_frag:Kf,points_vert:jf,points_frag:Jf,shadow_vert:Qf,shadow_frag:ed,sprite_vert:td,sprite_frag:nd},Se={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},cn={basic:{uniforms:Ot([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Ot([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new $e(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Ot([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Ot([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Ot([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new $e(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Ot([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Ot([Se.points,Se.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Ot([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Ot([Se.common,Se.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Ot([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Ot([Se.sprite,Se.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:Ot([Se.common,Se.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:Ot([Se.lights,Se.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};cn.physical={uniforms:Ot([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Pr={r:0,b:0,g:0},Jn=new Qt,id=new gt;function rd(i,e,t,n,r,s,a){const o=new $e(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function x(R){let y=R.isScene===!0?R.background:null;return y&&y.isTexture&&(y=(R.backgroundBlurriness>0?t:e).get(y)),y}function v(R){let y=!1;const T=x(R);T===null?d(o,l):T&&T.isColor&&(d(T,1),y=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(R,y){const T=x(y);T&&(T.isCubeTexture||T.mapping===qr)?(u===void 0&&(u=new Pt(new Fn(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Oi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,P,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Jn.copy(y.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(id.makeRotationFromEuler(Jn)),u.material.toneMapped=it.getTransfer(T.colorSpace)!==ct,(h!==T||f!==T.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=T,f=T.version,p=i.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Pt(new ki(2,2),new _n({name:"BackgroundMaterial",uniforms:Oi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=it.getTransfer(T.colorSpace)!==ct,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=T,f=T.version,p=i.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function d(R,y){R.getRGB(Pr,Dl(i)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,y,a)}function C(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(R,y=1){o.set(R),l=y,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,d(o,l)},render:v,addToRenderList:m,dispose:C}}function sd(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(g,E,H,O,G){let $=!1;const N=h(O,H,E);s!==N&&(s=N,c(s.object)),$=p(g,O,H,G),$&&x(g,O,H,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,y(g,E,H,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(g){return i.bindVertexArray(g)}function u(g){return i.deleteVertexArray(g)}function h(g,E,H){const O=H.wireframe===!0;let G=n[g.id];G===void 0&&(G={},n[g.id]=G);let $=G[E.id];$===void 0&&($={},G[E.id]=$);let N=$[O];return N===void 0&&(N=f(l()),$[O]=N),N}function f(g){const E=[],H=[],O=[];for(let G=0;G<t;G++)E[G]=0,H[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:H,attributeDivisors:O,object:g,attributes:{},index:null}}function p(g,E,H,O){const G=s.attributes,$=E.attributes;let N=0;const L=H.getAttributes();for(const q in L)if(L[q].location>=0){const ee=G[q];let re=$[q];if(re===void 0&&(q==="instanceMatrix"&&g.instanceMatrix&&(re=g.instanceMatrix),q==="instanceColor"&&g.instanceColor&&(re=g.instanceColor)),ee===void 0||ee.attribute!==re||re&&ee.data!==re.data)return!0;N++}return s.attributesNum!==N||s.index!==O}function x(g,E,H,O){const G={},$=E.attributes;let N=0;const L=H.getAttributes();for(const q in L)if(L[q].location>=0){let ee=$[q];ee===void 0&&(q==="instanceMatrix"&&g.instanceMatrix&&(ee=g.instanceMatrix),q==="instanceColor"&&g.instanceColor&&(ee=g.instanceColor));const re={};re.attribute=ee,ee&&ee.data&&(re.data=ee.data),G[q]=re,N++}s.attributes=G,s.attributesNum=N,s.index=O}function v(){const g=s.newAttributes;for(let E=0,H=g.length;E<H;E++)g[E]=0}function m(g){d(g,0)}function d(g,E){const H=s.newAttributes,O=s.enabledAttributes,G=s.attributeDivisors;H[g]=1,O[g]===0&&(i.enableVertexAttribArray(g),O[g]=1),G[g]!==E&&(i.vertexAttribDivisor(g,E),G[g]=E)}function C(){const g=s.newAttributes,E=s.enabledAttributes;for(let H=0,O=E.length;H<O;H++)E[H]!==g[H]&&(i.disableVertexAttribArray(H),E[H]=0)}function R(g,E,H,O,G,$,N){N===!0?i.vertexAttribIPointer(g,E,H,G,$):i.vertexAttribPointer(g,E,H,O,G,$)}function y(g,E,H,O){v();const G=O.attributes,$=H.getAttributes(),N=E.defaultAttributeValues;for(const L in $){const q=$[L];if(q.location>=0){let oe=G[L];if(oe===void 0&&(L==="instanceMatrix"&&g.instanceMatrix&&(oe=g.instanceMatrix),L==="instanceColor"&&g.instanceColor&&(oe=g.instanceColor)),oe!==void 0){const ee=oe.normalized,re=oe.itemSize,ve=e.get(oe);if(ve===void 0)continue;const we=ve.buffer,Ee=ve.type,Re=ve.bytesPerElement,X=Ee===i.INT||Ee===i.UNSIGNED_INT||oe.gpuType===La;if(oe.isInterleavedBufferAttribute){const J=oe.data,me=J.stride,Fe=oe.offset;if(J.isInstancedInterleavedBuffer){for(let Ae=0;Ae<q.locationSize;Ae++)d(q.location+Ae,J.meshPerAttribute);g.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ae=0;Ae<q.locationSize;Ae++)m(q.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,we);for(let Ae=0;Ae<q.locationSize;Ae++)R(q.location+Ae,re/q.locationSize,Ee,ee,me*Re,(Fe+re/q.locationSize*Ae)*Re,X)}else{if(oe.isInstancedBufferAttribute){for(let J=0;J<q.locationSize;J++)d(q.location+J,oe.meshPerAttribute);g.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let J=0;J<q.locationSize;J++)m(q.location+J);i.bindBuffer(i.ARRAY_BUFFER,we);for(let J=0;J<q.locationSize;J++)R(q.location+J,re/q.locationSize,Ee,ee,re*Re,re/q.locationSize*J*Re,X)}}else if(N!==void 0){const ee=N[L];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(q.location,ee);break;case 3:i.vertexAttrib3fv(q.location,ee);break;case 4:i.vertexAttrib4fv(q.location,ee);break;default:i.vertexAttrib1fv(q.location,ee)}}}}C()}function T(){z();for(const g in n){const E=n[g];for(const H in E){const O=E[H];for(const G in O)u(O[G].object),delete O[G];delete E[H]}delete n[g]}}function w(g){if(n[g.id]===void 0)return;const E=n[g.id];for(const H in E){const O=E[H];for(const G in O)u(O[G].object),delete O[G];delete E[H]}delete n[g.id]}function P(g){for(const E in n){const H=n[E];if(H[g.id]===void 0)continue;const O=H[g.id];for(const G in O)u(O[G].object),delete O[G];delete H[g.id]}}function z(){M(),a=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:z,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:C}}function ad(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)a(c[x],u[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let x=0;for(let v=0;v<h;v++)x+=u[v]*f[v];t.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function od(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==an&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const z=P===Un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==qt&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==un&&!z)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ye("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:C,maxVaryings:R,maxFragmentUniforms:y,maxSamples:T,samples:w}}function ld(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new ti,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const x=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const C=s?0:n,R=C*4;let y=d.clippingState||null;l.value=y,y=u(x,f,R,p);for(let T=0;T!==R;++T)y[T]=t[T];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,x){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,x!==!0||m===null){const d=p+v*4,C=f.matrixWorldInverse;o.getNormalMatrix(C),(m===null||m.length<d)&&(m=new Float32Array(d));for(let R=0,y=p;R!==v;++R,y+=4)a.copy(h[R]).applyMatrix4(C,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function cd(i){let e=new WeakMap;function t(a,o){return o===Gs?a.mapping=ci:o===Vs&&(a.mapping=Ui),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Gs||o===Vs)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Fl(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Wn=4,Io=[.125,.215,.35,.446,.526,.582],ri=20,ud=256,Zi=new Ya,Lo=new $e;let As=null,ws=0,Rs=0,Cs=!1;const hd=new B;class Do{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=hd}=s;As=this._renderer.getRenderTarget(),ws=this._renderer.getActiveCubeFace(),Rs=this._renderer.getActiveMipmapLevel(),Cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=No(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(As,ws,Rs),this._renderer.xr.enabled=Cs,e.scissorTest=!1,Ti(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ci||e.mapping===Ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),As=this._renderer.getRenderTarget(),ws=this._renderer.getActiveCubeFace(),Rs=this._renderer.getActiveMipmapLevel(),Cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:St,minFilter:St,generateMipmaps:!1,type:Un,format:an,colorSpace:Fi,depthBuffer:!1},r=Uo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uo(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fd(s)),this._blurMaterial=pd(s,e,t),this._ggxMaterial=dd(s,e,t)}return r}_compileMaterial(e){const t=new Pt(new xn,e);this._renderer.compile(t,Zi)}_sceneToCubeUV(e,t,n,r,s){const l=new jt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Lo),h.toneMapping=dn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new Fn,new gn({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let d=!1;const C=e.background;C?C.isColor&&(m.color.copy(C),e.background=null,d=!0):(m.color.copy(Lo),d=!0);for(let R=0;R<6;R++){const y=R%3;y===0?(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[R],s.y,s.z)):y===1?(l.up.set(0,0,c[R]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[R],s.z)):(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[R]));const T=this._cubeSize;Ti(r,y*T,R>2?T:0,T,T),h.setRenderTarget(r),d&&h.render(v,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=C}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ci||e.mapping===Ui;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=No());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ti(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Zi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,p=h*f,{_lodMax:x}=this,v=this._sizeLods[n],m=3*v*(n>x-Wn?n-x+Wn:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,Ti(s,m,d,3*v,2*v),r.setRenderTarget(s),r.render(o,Zi),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-n,Ti(e,m,d,3*v,2*v),r.setRenderTarget(e),r.render(o,Zi)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ri-1),v=s/x,m=isFinite(s)?1+Math.floor(u*v):ri;m>ri&&Ye(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ri}`);const d=[];let C=0;for(let P=0;P<ri;++P){const z=P/v,M=Math.exp(-z*z/2);d.push(M),P===0?C+=M:P<m&&(C+=2*M)}for(let P=0;P<d.length;P++)d[P]=d[P]/C;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:R}=this;f.dTheta.value=x,f.mipInt.value=R-n;const y=this._sizeLods[r],T=3*y*(r>R-Wn?r-R+Wn:0),w=4*(this._cubeSize-y);Ti(t,T,w,3*y,2*y),l.setRenderTarget(t),l.render(h,Zi)}}function fd(i){const e=[],t=[],n=[];let r=i;const s=i-Wn+1+Io.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Wn?l=Io[a-i+Wn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,x=6,v=3,m=2,d=1,C=new Float32Array(v*x*p),R=new Float32Array(m*x*p),y=new Float32Array(d*x*p);for(let w=0;w<p;w++){const P=w%3*2/3-1,z=w>2?0:-1,M=[P,z,0,P+2/3,z,0,P+2/3,z+1,0,P,z,0,P+2/3,z+1,0,P,z+1,0];C.set(M,v*x*w),R.set(f,m*x*w);const g=[w,w,w,w,w,w];y.set(g,d*x*w)}const T=new xn;T.setAttribute("position",new Jt(C,v)),T.setAttribute("uv",new Jt(R,m)),T.setAttribute("faceIndex",new Jt(y,d)),n.push(new Pt(T,null)),r>Wn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Uo(i,e,t){const n=new pn(i,e,t);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ti(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function dd(i,e,t){return new _n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ud,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zr(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function pd(i,e,t){const n=new Float32Array(ri),r=new B(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zr(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function No(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zr(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Fo(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Zr(){return`

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
	`}function md(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Gs||l===Vs,u=l===ci||l===Ui;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Do(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Do(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function gd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&sr("WebGLRenderer: "+n+" extension not supported."),r}}}function _d(i,e,t,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,x=h.attributes.position;let v=0;if(p!==null){const C=p.array;v=p.version;for(let R=0,y=C.length;R<y;R+=3){const T=C[R+0],w=C[R+1],P=C[R+2];f.push(T,w,w,P,P,T)}}else if(x!==void 0){const C=x.array;v=x.version;for(let R=0,y=C.length/3-1;R<y;R+=3){const T=R+0,w=R+1,P=R+2;f.push(T,w,w,P,P,T)}}else return;const m=new(wl(f)?Ll:Il)(f,1);m.version=v;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function xd(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*a),t.update(p,n,1)}function c(f,p,x){x!==0&&(i.drawElementsInstanced(n,p,s,f*a,x),t.update(p,n,x))}function u(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,x);let m=0;for(let d=0;d<x;d++)m+=p[d];t.update(m,n,1)}function h(f,p,x,v){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,v,0,x);let d=0;for(let C=0;C<x;C++)d+=p[C]*v[C];t.update(d,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function vd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Md(i,e,t){const n=new WeakMap,r=new Mt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let g=function(){z.dispose(),n.delete(o),o.removeEventListener("dispose",g)};var p=g;f!==void 0&&f.texture.dispose();const x=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],C=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let y=0;x===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let T=o.attributes.position.count*y,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const P=new Float32Array(T*w*4*h),z=new Rl(P,T,w,h);z.type=un,z.needsUpdate=!0;const M=y*4;for(let E=0;E<h;E++){const H=d[E],O=C[E],G=R[E],$=T*w*4*E;for(let N=0;N<H.count;N++){const L=N*M;x===!0&&(r.fromBufferAttribute(H,N),P[$+L+0]=r.x,P[$+L+1]=r.y,P[$+L+2]=r.z,P[$+L+3]=0),v===!0&&(r.fromBufferAttribute(O,N),P[$+L+4]=r.x,P[$+L+5]=r.y,P[$+L+6]=r.z,P[$+L+7]=0),m===!0&&(r.fromBufferAttribute(G,N),P[$+L+8]=r.x,P[$+L+9]=r.y,P[$+L+10]=r.z,P[$+L+11]=G.itemSize===4?r.w:1)}}f={count:h,texture:z,size:new rt(T,w)},n.set(o,f),o.addEventListener("dispose",g)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const v=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Sd(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const bd={[fl]:"LINEAR_TONE_MAPPING",[dl]:"REINHARD_TONE_MAPPING",[pl]:"CINEON_TONE_MAPPING",[ml]:"ACES_FILMIC_TONE_MAPPING",[_l]:"AGX_TONE_MAPPING",[xl]:"NEUTRAL_TONE_MAPPING",[gl]:"CUSTOM_TONE_MAPPING"};function Ed(i,e,t,n,r){const s=new pn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),a=new pn(e,t,{type:Un,depthBuffer:!1,stencilBuffer:!1}),o=new xn;o.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ln([0,2,0,0,2,0],2));const l=new lu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Pt(o,l),u=new Ya(-1,1,1,-1,0,1);let h=null,f=null,p=!1,x,v=null,m=[],d=!1;this.setSize=function(C,R){s.setSize(C,R),a.setSize(C,R);for(let y=0;y<m.length;y++){const T=m[y];T.setSize&&T.setSize(C,R)}},this.setEffects=function(C){m=C,d=m.length>0&&m[0].isRenderPass===!0;const R=s.width,y=s.height;for(let T=0;T<m.length;T++){const w=m[T];w.setSize&&w.setSize(R,y)}},this.begin=function(C,R){if(p||C.toneMapping===dn&&m.length===0)return!1;if(v=R,R!==null){const y=R.width,T=R.height;(s.width!==y||s.height!==T)&&this.setSize(y,T)}return d===!1&&C.setRenderTarget(s),x=C.toneMapping,C.toneMapping=dn,!0},this.hasRenderPass=function(){return d},this.end=function(C,R){C.toneMapping=x,p=!0;let y=s,T=a;for(let w=0;w<m.length;w++){const P=m[w];if(P.enabled!==!1&&(P.render(C,T,y,R),P.needsSwap!==!1)){const z=y;y=T,T=z}}if(h!==C.outputColorSpace||f!==C.toneMapping){h=C.outputColorSpace,f=C.toneMapping,l.defines={},it.getTransfer(h)===ct&&(l.defines.SRGB_TRANSFER="");const w=bd[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,C.setRenderTarget(v),C.render(c,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const zl=new Lt,Ta=new ar(1,1),kl=new Rl,Hl=new Oc,Gl=new Nl,Oo=[],Bo=[],zo=new Float32Array(16),ko=new Float32Array(9),Ho=new Float32Array(4);function Hi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Oo[r];if(s===void 0&&(s=new Float32Array(r),Oo[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Kr(i,e){let t=Bo[e];t===void 0&&(t=new Int32Array(e),Bo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function yd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Td(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function Ad(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function wd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function Rd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;Ho.set(n),i.uniformMatrix2fv(this.addr,!1,Ho),At(t,n)}}function Cd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;ko.set(n),i.uniformMatrix3fv(this.addr,!1,ko),At(t,n)}}function Pd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;zo.set(n),i.uniformMatrix4fv(this.addr,!1,zo),At(t,n)}}function Id(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ld(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function Dd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function Ud(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function Nd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Fd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function Od(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function Bd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function zd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ta.compareFunction=t.isReversedDepthBuffer()?ka:za,s=Ta):s=zl,t.setTexture2D(e||s,r)}function kd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Hl,r)}function Hd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Gl,r)}function Gd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||kl,r)}function Vd(i){switch(i){case 5126:return yd;case 35664:return Td;case 35665:return Ad;case 35666:return wd;case 35674:return Rd;case 35675:return Cd;case 35676:return Pd;case 5124:case 35670:return Id;case 35667:case 35671:return Ld;case 35668:case 35672:return Dd;case 35669:case 35673:return Ud;case 5125:return Nd;case 36294:return Fd;case 36295:return Od;case 36296:return Bd;case 35678:case 36198:case 36298:case 36306:case 35682:return zd;case 35679:case 36299:case 36307:return kd;case 35680:case 36300:case 36308:case 36293:return Hd;case 36289:case 36303:case 36311:case 36292:return Gd}}function Wd(i,e){i.uniform1fv(this.addr,e)}function Xd(i,e){const t=Hi(e,this.size,2);i.uniform2fv(this.addr,t)}function Yd(i,e){const t=Hi(e,this.size,3);i.uniform3fv(this.addr,t)}function $d(i,e){const t=Hi(e,this.size,4);i.uniform4fv(this.addr,t)}function qd(i,e){const t=Hi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zd(i,e){const t=Hi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Kd(i,e){const t=Hi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function jd(i,e){i.uniform1iv(this.addr,e)}function Jd(i,e){i.uniform2iv(this.addr,e)}function Qd(i,e){i.uniform3iv(this.addr,e)}function ep(i,e){i.uniform4iv(this.addr,e)}function tp(i,e){i.uniform1uiv(this.addr,e)}function np(i,e){i.uniform2uiv(this.addr,e)}function ip(i,e){i.uniform3uiv(this.addr,e)}function rp(i,e){i.uniform4uiv(this.addr,e)}function sp(i,e,t){const n=this.cache,r=e.length,s=Kr(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ta:a=zl;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function ap(i,e,t){const n=this.cache,r=e.length,s=Kr(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Hl,s[a])}function op(i,e,t){const n=this.cache,r=e.length,s=Kr(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Gl,s[a])}function lp(i,e,t){const n=this.cache,r=e.length,s=Kr(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||kl,s[a])}function cp(i){switch(i){case 5126:return Wd;case 35664:return Xd;case 35665:return Yd;case 35666:return $d;case 35674:return qd;case 35675:return Zd;case 35676:return Kd;case 5124:case 35670:return jd;case 35667:case 35671:return Jd;case 35668:case 35672:return Qd;case 35669:case 35673:return ep;case 5125:return tp;case 36294:return np;case 36295:return ip;case 36296:return rp;case 35678:case 36198:case 36298:case 36306:case 35682:return sp;case 35679:case 36299:case 36307:return ap;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return lp}}class up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vd(t.type)}}class hp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cp(t.type)}}class fp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ps=/(\w+)(\])?(\[|\.)?/g;function Go(i,e){i.seq.push(e),i.map[e.id]=e}function dp(i,e,t){const n=i.name,r=n.length;for(Ps.lastIndex=0;;){const s=Ps.exec(n),a=Ps.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Go(t,c===void 0?new up(o,i,e):new hp(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new fp(o),Go(t,h)),t=h}}}class zr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);dp(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Vo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const pp=37297;let mp=0;function gp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Wo=new Ze;function _p(i){it._getMatrix(Wo,it.workingColorSpace,i);const e=`mat3( ${Wo.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case Hr:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+gp(i.getShaderSource(e),o)}else return s}function xp(i,e){const t=_p(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const vp={[fl]:"Linear",[dl]:"Reinhard",[pl]:"Cineon",[ml]:"ACESFilmic",[_l]:"AgX",[xl]:"Neutral",[gl]:"Custom"};function Mp(i,e){const t=vp[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ir=new B;function Sp(){it.getLuminanceCoefficients(Ir);const i=Ir.x.toFixed(4),e=Ir.y.toFixed(4),t=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qi).join(`
`)}function Ep(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Qi(i){return i!==""}function Yo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $o(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Aa(i){return i.replace(Tp,wp)}const Ap=new Map;function wp(i,e){let t=je[e];if(t===void 0){const n=Ap.get(e);if(n!==void 0)t=je[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Aa(t)}const Rp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qo(i){return i.replace(Rp,Cp)}function Cp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zo(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const Pp={[Ur]:"SHADOWMAP_TYPE_PCF",[Ji]:"SHADOWMAP_TYPE_VSM"};function Ip(i){return Pp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Lp={[ci]:"ENVMAP_TYPE_CUBE",[Ui]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE_UV"};function Dp(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Lp[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Up={[Ui]:"ENVMAP_MODE_REFRACTION"};function Np(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Up[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Fp={[$r]:"ENVMAP_BLENDING_MULTIPLY",[xc]:"ENVMAP_BLENDING_MIX",[vc]:"ENVMAP_BLENDING_ADD"};function Op(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Fp[i.combine]||"ENVMAP_BLENDING_NONE"}function Bp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function zp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ip(t),c=Dp(t),u=Np(t),h=Op(t),f=Bp(t),p=bp(t),x=Ep(s),v=r.createProgram();let m,d,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Qi).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Qi).join(`
`),d.length>0&&(d+=`
`)):(m=[Zo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),d=[Zo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dn?"#define TONE_MAPPING":"",t.toneMapping!==dn?je.tonemapping_pars_fragment:"",t.toneMapping!==dn?Mp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,xp("linearToOutputTexel",t.outputColorSpace),Sp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qi).join(`
`)),a=Aa(a),a=Yo(a,t),a=$o(a,t),o=Aa(o),o=Yo(o,t),o=$o(o,t),a=qo(a),o=qo(o),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ao?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ao?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const R=C+m+a,y=C+d+o,T=Vo(r,r.VERTEX_SHADER,R),w=Vo(r,r.FRAGMENT_SHADER,y);r.attachShader(v,T),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(E){if(i.debug.checkShaderErrors){const H=r.getProgramInfoLog(v)||"",O=r.getShaderInfoLog(T)||"",G=r.getShaderInfoLog(w)||"",$=H.trim(),N=O.trim(),L=G.trim();let q=!0,oe=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,T,w);else{const ee=Xo(r,T,"vertex"),re=Xo(r,w,"fragment");nt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+$+`
`+ee+`
`+re)}else $!==""?Ye("WebGLProgram: Program Info Log:",$):(N===""||L==="")&&(oe=!1);oe&&(E.diagnostics={runnable:q,programLog:$,vertexShader:{log:N,prefix:m},fragmentShader:{log:L,prefix:d}})}r.deleteShader(T),r.deleteShader(w),z=new zr(r,v),M=yp(r,v)}let z;this.getUniforms=function(){return z===void 0&&P(this),z};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let g=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(v,pp)),g},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=w,this}let kp=0;class Hp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Gp(e),t.set(e,n)),n}}class Gp{constructor(e){this.id=kp++,this.code=e,this.usedTimes=0}}function Vp(i,e,t,n,r,s,a){const o=new Va,l=new Hp,c=new Set,u=[],h=new Map,f=r.logarithmicDepthBuffer;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,g,E,H,O){const G=H.fog,$=O.geometry,N=M.isMeshStandardMaterial?H.environment:null,L=(M.isMeshStandardMaterial?t:e).get(M.envMap||N),q=L&&L.mapping===qr?L.image.height:null,oe=x[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&Ye("WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ee=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,re=ee!==void 0?ee.length:0;let ve=0;$.morphAttributes.position!==void 0&&(ve=1),$.morphAttributes.normal!==void 0&&(ve=2),$.morphAttributes.color!==void 0&&(ve=3);let we,Ee,Re,X;if(oe){const se=cn[oe];we=se.vertexShader,Ee=se.fragmentShader}else we=M.vertexShader,Ee=M.fragmentShader,l.update(M),Re=l.getVertexShaderID(M),X=l.getFragmentShaderID(M);const J=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Fe=O.isInstancedMesh===!0,Ae=O.isBatchedMesh===!0,Je=!!M.map,dt=!!M.matcap,Ke=!!L,te=!!M.aoMap,Te=!!M.lightMap,le=!!M.bumpMap,ze=!!M.normalMap,I=!!M.displacementMap,et=!!M.emissiveMap,We=!!M.metalnessMap,st=!!M.roughnessMap,de=M.anisotropy>0,A=M.clearcoat>0,_=M.dispersion>0,U=M.iridescence>0,Q=M.sheen>0,ne=M.transmission>0,j=de&&!!M.anisotropyMap,Ue=A&&!!M.clearcoatMap,ge=A&&!!M.clearcoatNormalMap,Ie=A&&!!M.clearcoatRoughnessMap,Ge=U&&!!M.iridescenceMap,ce=U&&!!M.iridescenceThicknessMap,_e=Q&&!!M.sheenColorMap,Pe=Q&&!!M.sheenRoughnessMap,De=!!M.specularMap,pe=!!M.specularColorMap,qe=!!M.specularIntensityMap,D=ne&&!!M.transmissionMap,xe=ne&&!!M.thicknessMap,fe=!!M.gradientMap,be=!!M.alphaMap,ae=M.alphaTest>0,ie=!!M.alphaHash,b=!!M.extensions;let V=dn;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(V=i.toneMapping);const Y={shaderID:oe,shaderType:M.type,shaderName:M.name,vertexShader:we,fragmentShader:Ee,defines:M.defines,customVertexShaderID:Re,customFragmentShaderID:X,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ae,batchingColor:Ae&&O._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&O.instanceColor!==null,instancingMorph:Fe&&O.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Fi,alphaToCoverage:!!M.alphaToCoverage,map:Je,matcap:dt,envMap:Ke,envMapMode:Ke&&L.mapping,envMapCubeUVHeight:q,aoMap:te,lightMap:Te,bumpMap:le,normalMap:ze,displacementMap:I,emissiveMap:et,normalMapObjectSpace:ze&&M.normalMapType===bc,normalMapTangentSpace:ze&&M.normalMapType===Ba,metalnessMap:We,roughnessMap:st,anisotropy:de,anisotropyMap:j,clearcoat:A,clearcoatMap:Ue,clearcoatNormalMap:ge,clearcoatRoughnessMap:Ie,dispersion:_,iridescence:U,iridescenceMap:Ge,iridescenceThicknessMap:ce,sheen:Q,sheenColorMap:_e,sheenRoughnessMap:Pe,specularMap:De,specularColorMap:pe,specularIntensityMap:qe,transmission:ne,transmissionMap:D,thicknessMap:xe,gradientMap:fe,opaque:M.transparent===!1&&M.blending===Ii&&M.alphaToCoverage===!1,alphaMap:be,alphaTest:ae,alphaHash:ie,combine:M.combine,mapUv:Je&&v(M.map.channel),aoMapUv:te&&v(M.aoMap.channel),lightMapUv:Te&&v(M.lightMap.channel),bumpMapUv:le&&v(M.bumpMap.channel),normalMapUv:ze&&v(M.normalMap.channel),displacementMapUv:I&&v(M.displacementMap.channel),emissiveMapUv:et&&v(M.emissiveMap.channel),metalnessMapUv:We&&v(M.metalnessMap.channel),roughnessMapUv:st&&v(M.roughnessMap.channel),anisotropyMapUv:j&&v(M.anisotropyMap.channel),clearcoatMapUv:Ue&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ge&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&v(M.sheenRoughnessMap.channel),specularMapUv:De&&v(M.specularMap.channel),specularColorMapUv:pe&&v(M.specularColorMap.channel),specularIntensityMapUv:qe&&v(M.specularIntensityMap.channel),transmissionMapUv:D&&v(M.transmissionMap.channel),thicknessMapUv:xe&&v(M.thicknessMap.channel),alphaMapUv:be&&v(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ze||de),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(Je||be),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:me,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ve,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:V,decodeVideoTexture:Je&&M.map.isVideoTexture===!0&&it.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:et&&M.emissiveMap.isVideoTexture===!0&&it.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===wn,flipSided:M.side===Vt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:b&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(b&&M.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Y.vertexUv1s=c.has(1),Y.vertexUv2s=c.has(2),Y.vertexUv3s=c.has(3),c.clear(),Y}function d(M){const g=[];if(M.shaderID?g.push(M.shaderID):(g.push(M.customVertexShaderID),g.push(M.customFragmentShaderID)),M.defines!==void 0)for(const E in M.defines)g.push(E),g.push(M.defines[E]);return M.isRawShaderMaterial===!1&&(C(g,M),R(g,M),g.push(i.outputColorSpace)),g.push(M.customProgramCacheKey),g.join()}function C(M,g){M.push(g.precision),M.push(g.outputColorSpace),M.push(g.envMapMode),M.push(g.envMapCubeUVHeight),M.push(g.mapUv),M.push(g.alphaMapUv),M.push(g.lightMapUv),M.push(g.aoMapUv),M.push(g.bumpMapUv),M.push(g.normalMapUv),M.push(g.displacementMapUv),M.push(g.emissiveMapUv),M.push(g.metalnessMapUv),M.push(g.roughnessMapUv),M.push(g.anisotropyMapUv),M.push(g.clearcoatMapUv),M.push(g.clearcoatNormalMapUv),M.push(g.clearcoatRoughnessMapUv),M.push(g.iridescenceMapUv),M.push(g.iridescenceThicknessMapUv),M.push(g.sheenColorMapUv),M.push(g.sheenRoughnessMapUv),M.push(g.specularMapUv),M.push(g.specularColorMapUv),M.push(g.specularIntensityMapUv),M.push(g.transmissionMapUv),M.push(g.thicknessMapUv),M.push(g.combine),M.push(g.fogExp2),M.push(g.sizeAttenuation),M.push(g.morphTargetsCount),M.push(g.morphAttributeCount),M.push(g.numDirLights),M.push(g.numPointLights),M.push(g.numSpotLights),M.push(g.numSpotLightMaps),M.push(g.numHemiLights),M.push(g.numRectAreaLights),M.push(g.numDirLightShadows),M.push(g.numPointLightShadows),M.push(g.numSpotLightShadows),M.push(g.numSpotLightShadowsWithMaps),M.push(g.numLightProbes),M.push(g.shadowMapType),M.push(g.toneMapping),M.push(g.numClippingPlanes),M.push(g.numClipIntersection),M.push(g.depthPacking)}function R(M,g){o.disableAll(),g.instancing&&o.enable(0),g.instancingColor&&o.enable(1),g.instancingMorph&&o.enable(2),g.matcap&&o.enable(3),g.envMap&&o.enable(4),g.normalMapObjectSpace&&o.enable(5),g.normalMapTangentSpace&&o.enable(6),g.clearcoat&&o.enable(7),g.iridescence&&o.enable(8),g.alphaTest&&o.enable(9),g.vertexColors&&o.enable(10),g.vertexAlphas&&o.enable(11),g.vertexUv1s&&o.enable(12),g.vertexUv2s&&o.enable(13),g.vertexUv3s&&o.enable(14),g.vertexTangents&&o.enable(15),g.anisotropy&&o.enable(16),g.alphaHash&&o.enable(17),g.batching&&o.enable(18),g.dispersion&&o.enable(19),g.batchingColor&&o.enable(20),g.gradientMap&&o.enable(21),M.push(o.mask),o.disableAll(),g.fog&&o.enable(0),g.useFog&&o.enable(1),g.flatShading&&o.enable(2),g.logarithmicDepthBuffer&&o.enable(3),g.reversedDepthBuffer&&o.enable(4),g.skinning&&o.enable(5),g.morphTargets&&o.enable(6),g.morphNormals&&o.enable(7),g.morphColors&&o.enable(8),g.premultipliedAlpha&&o.enable(9),g.shadowMapEnabled&&o.enable(10),g.doubleSided&&o.enable(11),g.flipSided&&o.enable(12),g.useDepthPacking&&o.enable(13),g.dithering&&o.enable(14),g.transmission&&o.enable(15),g.sheen&&o.enable(16),g.opaque&&o.enable(17),g.pointsUvs&&o.enable(18),g.decodeVideoTexture&&o.enable(19),g.decodeVideoTextureEmissive&&o.enable(20),g.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){const g=x[M.type];let E;if(g){const H=cn[g];E=Kc.clone(H.uniforms)}else E=M.uniforms;return E}function T(M,g){let E=h.get(g);return E!==void 0?++E.usedTimes:(E=new zp(i,g,M,s),u.push(E),h.set(g,E)),E}function w(M){if(--M.usedTimes===0){const g=u.indexOf(M);u[g]=u[u.length-1],u.pop(),h.delete(M.cacheKey),M.destroy()}}function P(M){l.remove(M)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:T,releaseProgram:w,releaseShaderCache:P,programs:u,dispose:z}}function Wp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Xp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ko(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function jo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,f,p,x,v,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:x,renderOrder:h.renderOrder,z:v,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=x,d.renderOrder=h.renderOrder,d.z=v,d.group=m),e++,d}function o(h,f,p,x,v,m){const d=a(h,f,p,x,v,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,x,v,m){const d=a(h,f,p,x,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Xp),n.length>1&&n.sort(f||Ko),r.length>1&&r.sort(f||Ko)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Yp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new jo,i.set(n,[a])):r>=s.length?(a=new jo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function $p(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new $e};break;case"SpotLight":t={position:new B,direction:new B,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function qp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Zp=0;function Kp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function jp(i){const e=new $p,t=qp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const r=new B,s=new gt,a=new gt;function o(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,x=0,v=0,m=0,d=0,C=0,R=0,y=0,T=0,w=0,P=0;c.sort(Kp);for(let M=0,g=c.length;M<g;M++){const E=c[M],H=E.color,O=E.intensity,G=E.distance;let $=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===Ni?$=E.shadow.map.texture:$=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)u+=H.r*O,h+=H.g*O,f+=H.b*O;else if(E.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(E.sh.coefficients[N],O);P++}else if(E.isDirectionalLight){const N=e.get(E);if(N.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const L=E.shadow,q=t.get(E);q.shadowIntensity=L.intensity,q.shadowBias=L.bias,q.shadowNormalBias=L.normalBias,q.shadowRadius=L.radius,q.shadowMapSize=L.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=E.shadow.matrix,C++}n.directional[p]=N,p++}else if(E.isSpotLight){const N=e.get(E);N.position.setFromMatrixPosition(E.matrixWorld),N.color.copy(H).multiplyScalar(O),N.distance=G,N.coneCos=Math.cos(E.angle),N.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),N.decay=E.decay,n.spot[v]=N;const L=E.shadow;if(E.map&&(n.spotLightMap[T]=E.map,T++,L.updateMatrices(E),E.castShadow&&w++),n.spotLightMatrix[v]=L.matrix,E.castShadow){const q=t.get(E);q.shadowIntensity=L.intensity,q.shadowBias=L.bias,q.shadowNormalBias=L.normalBias,q.shadowRadius=L.radius,q.shadowMapSize=L.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=$,y++}v++}else if(E.isRectAreaLight){const N=e.get(E);N.color.copy(H).multiplyScalar(O),N.halfWidth.set(E.width*.5,0,0),N.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=N,m++}else if(E.isPointLight){const N=e.get(E);if(N.color.copy(E.color).multiplyScalar(E.intensity),N.distance=E.distance,N.decay=E.decay,E.castShadow){const L=E.shadow,q=t.get(E);q.shadowIntensity=L.intensity,q.shadowBias=L.bias,q.shadowNormalBias=L.normalBias,q.shadowRadius=L.radius,q.shadowMapSize=L.mapSize,q.shadowCameraNear=L.camera.near,q.shadowCameraFar=L.camera.far,n.pointShadow[x]=q,n.pointShadowMap[x]=$,n.pointShadowMatrix[x]=E.shadow.matrix,R++}n.point[x]=N,x++}else if(E.isHemisphereLight){const N=e.get(E);N.skyColor.copy(E.color).multiplyScalar(O),N.groundColor.copy(E.groundColor).multiplyScalar(O),n.hemi[d]=N,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const z=n.hash;(z.directionalLength!==p||z.pointLength!==x||z.spotLength!==v||z.rectAreaLength!==m||z.hemiLength!==d||z.numDirectionalShadows!==C||z.numPointShadows!==R||z.numSpotShadows!==y||z.numSpotMaps!==T||z.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=x,n.hemi.length=d,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=y+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,z.directionalLength=p,z.pointLength=x,z.spotLength=v,z.rectAreaLength=m,z.hemiLength=d,z.numDirectionalShadows=C,z.numPointShadows=R,z.numSpotShadows=y,z.numSpotMaps=T,z.numLightProbes=P,n.version=Zp++)}function l(c,u){let h=0,f=0,p=0,x=0,v=0;const m=u.matrixWorldInverse;for(let d=0,C=c.length;d<C;d++){const R=c[d];if(R.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(R.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(R.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(R.isRectAreaLight){const y=n.rectArea[x];y.position.setFromMatrixPosition(R.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(R.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(R.width*.5,0,0),y.halfHeight.set(0,R.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(R.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(R.matrixWorld),y.position.applyMatrix4(m),f++}else if(R.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(R.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Jo(i){const e=new jp(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Jp(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Jo(i),e.set(r,[o])):s>=a.length?(o=new Jo(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Qp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,em=`uniform sampler2D shadow_pass;
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
}`,tm=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],nm=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Qo=new gt,Ki=new B,Is=new B;function im(i,e,t){let n=new Wa;const r=new rt,s=new rt,a=new Mt,o=new uu,l=new hu,c={},u=t.maxTextureSize,h={[Yn]:Vt,[Vt]:Yn,[wn]:wn},f=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Qp,fragmentShader:em}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new xn;x.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Pt(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ur;let d=this.type;this.render=function(w,P,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===Ql&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Ur);const M=i.getRenderTarget(),g=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Pn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const O=d!==this.type;O&&P.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach($=>$.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,$=w.length;G<$;G++){const N=w[G],L=N.shadow;if(L===void 0){Ye("WebGLShadowMap:",N,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const q=L.getFrameExtents();if(r.multiply(q),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,L.mapSize.y=s.y)),L.map===null||O===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===Ji){if(N.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new pn(r.x,r.y,{format:Ni,type:Un,minFilter:St,magFilter:St,generateMipmaps:!1}),L.map.texture.name=N.name+".shadowMap",L.map.depthTexture=new ar(r.x,r.y,un),L.map.depthTexture.name=N.name+".shadowMapDepth",L.map.depthTexture.format=Nn,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=It,L.map.depthTexture.magFilter=It}else{N.isPointLight?(L.map=new Fl(r.x),L.map.depthTexture=new ou(r.x,mn)):(L.map=new pn(r.x,r.y),L.map.depthTexture=new ar(r.x,r.y,mn)),L.map.depthTexture.name=N.name+".shadowMap",L.map.depthTexture.format=Nn;const ee=i.state.buffers.depth.getReversed();this.type===Ur?(L.map.depthTexture.compareFunction=ee?ka:za,L.map.depthTexture.minFilter=St,L.map.depthTexture.magFilter=St):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=It,L.map.depthTexture.magFilter=It)}L.camera.updateProjectionMatrix()}const oe=L.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<oe;ee++){if(L.map.isWebGLCubeRenderTarget)i.setRenderTarget(L.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(L.map),i.clear());const re=L.getViewport(ee);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),H.viewport(a)}if(N.isPointLight){const re=L.camera,ve=L.matrix,we=N.distance||re.far;we!==re.far&&(re.far=we,re.updateProjectionMatrix()),Ki.setFromMatrixPosition(N.matrixWorld),re.position.copy(Ki),Is.copy(re.position),Is.add(tm[ee]),re.up.copy(nm[ee]),re.lookAt(Is),re.updateMatrixWorld(),ve.makeTranslation(-Ki.x,-Ki.y,-Ki.z),Qo.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),L._frustum.setFromProjectionMatrix(Qo,re.coordinateSystem,re.reversedDepth)}else L.updateMatrices(N);n=L.getFrustum(),y(P,z,L.camera,N,this.type)}L.isPointLightShadow!==!0&&this.type===Ji&&C(L,z),L.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,g,E)};function C(w,P){const z=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new pn(r.x,r.y,{format:Ni,type:Un})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,z,f,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,z,p,v,null)}function R(w,P,z,M){let g=null;const E=z.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(E!==void 0)g=E;else if(g=z.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const H=g.uuid,O=P.uuid;let G=c[H];G===void 0&&(G={},c[H]=G);let $=G[O];$===void 0&&($=g.clone(),G[O]=$,P.addEventListener("dispose",T)),g=$}if(g.visible=P.visible,g.wireframe=P.wireframe,M===Ji?g.side=P.shadowSide!==null?P.shadowSide:P.side:g.side=P.shadowSide!==null?P.shadowSide:h[P.side],g.alphaMap=P.alphaMap,g.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,g.map=P.map,g.clipShadows=P.clipShadows,g.clippingPlanes=P.clippingPlanes,g.clipIntersection=P.clipIntersection,g.displacementMap=P.displacementMap,g.displacementScale=P.displacementScale,g.displacementBias=P.displacementBias,g.wireframeLinewidth=P.wireframeLinewidth,g.linewidth=P.linewidth,z.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const H=i.properties.get(g);H.light=z}return g}function y(w,P,z,M,g){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&g===Ji)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld);const O=e.update(w),G=w.material;if(Array.isArray(G)){const $=O.groups;for(let N=0,L=$.length;N<L;N++){const q=$[N],oe=G[q.materialIndex];if(oe&&oe.visible){const ee=R(w,oe,M,g);w.onBeforeShadow(i,w,P,z,O,ee,q),i.renderBufferDirect(z,null,O,ee,w,q),w.onAfterShadow(i,w,P,z,O,ee,q)}}}else if(G.visible){const $=R(w,G,M,g);w.onBeforeShadow(i,w,P,z,O,$,null),i.renderBufferDirect(z,null,O,$,w,null),w.onAfterShadow(i,w,P,z,O,$,null)}}const H=w.children;for(let O=0,G=H.length;O<G;O++)y(H[O],P,z,M,g)}function T(w){w.target.removeEventListener("dispose",T);for(const z in c){const M=c[z],g=w.target.uuid;g in M&&(M[g].dispose(),delete M[g])}}}const rm={[Ns]:Fs,[Os]:ks,[Bs]:Hs,[Di]:zs,[Fs]:Ns,[ks]:Os,[Hs]:Bs,[zs]:Di};function sm(i,e){function t(){let D=!1;const xe=new Mt;let fe=null;const be=new Mt(0,0,0,0);return{setMask:function(ae){fe!==ae&&!D&&(i.colorMask(ae,ae,ae,ae),fe=ae)},setLocked:function(ae){D=ae},setClear:function(ae,ie,b,V,Y){Y===!0&&(ae*=V,ie*=V,b*=V),xe.set(ae,ie,b,V),be.equals(xe)===!1&&(i.clearColor(ae,ie,b,V),be.copy(xe))},reset:function(){D=!1,fe=null,be.set(-1,0,0,0)}}}function n(){let D=!1,xe=!1,fe=null,be=null,ae=null;return{setReversed:function(ie){if(xe!==ie){const b=e.get("EXT_clip_control");ie?b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT):b.clipControlEXT(b.LOWER_LEFT_EXT,b.NEGATIVE_ONE_TO_ONE_EXT),xe=ie;const V=ae;ae=null,this.setClear(V)}},getReversed:function(){return xe},setTest:function(ie){ie?J(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(ie){fe!==ie&&!D&&(i.depthMask(ie),fe=ie)},setFunc:function(ie){if(xe&&(ie=rm[ie]),be!==ie){switch(ie){case Ns:i.depthFunc(i.NEVER);break;case Fs:i.depthFunc(i.ALWAYS);break;case Os:i.depthFunc(i.LESS);break;case Di:i.depthFunc(i.LEQUAL);break;case Bs:i.depthFunc(i.EQUAL);break;case zs:i.depthFunc(i.GEQUAL);break;case ks:i.depthFunc(i.GREATER);break;case Hs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=ie}},setLocked:function(ie){D=ie},setClear:function(ie){ae!==ie&&(xe&&(ie=1-ie),i.clearDepth(ie),ae=ie)},reset:function(){D=!1,fe=null,be=null,ae=null,xe=!1}}}function r(){let D=!1,xe=null,fe=null,be=null,ae=null,ie=null,b=null,V=null,Y=null;return{setTest:function(se){D||(se?J(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(se){xe!==se&&!D&&(i.stencilMask(se),xe=se)},setFunc:function(se,ue,Ne){(fe!==se||be!==ue||ae!==Ne)&&(i.stencilFunc(se,ue,Ne),fe=se,be=ue,ae=Ne)},setOp:function(se,ue,Ne){(ie!==se||b!==ue||V!==Ne)&&(i.stencilOp(se,ue,Ne),ie=se,b=ue,V=Ne)},setLocked:function(se){D=se},setClear:function(se){Y!==se&&(i.clearStencil(se),Y=se)},reset:function(){D=!1,xe=null,fe=null,be=null,ae=null,ie=null,b=null,V=null,Y=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],x=null,v=!1,m=null,d=null,C=null,R=null,y=null,T=null,w=null,P=new $e(0,0,0),z=0,M=!1,g=null,E=null,H=null,O=null,G=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,L=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(q)[1]),N=L>=1):q.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),N=L>=2);let oe=null,ee={};const re=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),we=new Mt().fromArray(re),Ee=new Mt().fromArray(ve);function Re(D,xe,fe,be){const ae=new Uint8Array(4),ie=i.createTexture();i.bindTexture(D,ie),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let b=0;b<fe;b++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(xe+b,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return ie}const X={};X[i.TEXTURE_2D]=Re(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=Re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=Re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=Re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(Di),le(!1),ze(eo),J(i.CULL_FACE),te(Pn);function J(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function me(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Fe(D,xe){return h[D]!==xe?(i.bindFramebuffer(D,xe),h[D]=xe,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xe),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function Ae(D,xe){let fe=p,be=!1;if(D){fe=f.get(xe),fe===void 0&&(fe=[],f.set(xe,fe));const ae=D.textures;if(fe.length!==ae.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,b=ae.length;ie<b;ie++)fe[ie]=i.COLOR_ATTACHMENT0+ie;fe.length=ae.length,be=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,be=!0);be&&i.drawBuffers(fe)}function Je(D){return x!==D?(i.useProgram(D),x=D,!0):!1}const dt={[ii]:i.FUNC_ADD,[tc]:i.FUNC_SUBTRACT,[nc]:i.FUNC_REVERSE_SUBTRACT};dt[ic]=i.MIN,dt[rc]=i.MAX;const Ke={[sc]:i.ZERO,[ac]:i.ONE,[oc]:i.SRC_COLOR,[Ds]:i.SRC_ALPHA,[dc]:i.SRC_ALPHA_SATURATE,[hc]:i.DST_COLOR,[cc]:i.DST_ALPHA,[lc]:i.ONE_MINUS_SRC_COLOR,[Us]:i.ONE_MINUS_SRC_ALPHA,[fc]:i.ONE_MINUS_DST_COLOR,[uc]:i.ONE_MINUS_DST_ALPHA,[pc]:i.CONSTANT_COLOR,[mc]:i.ONE_MINUS_CONSTANT_COLOR,[gc]:i.CONSTANT_ALPHA,[_c]:i.ONE_MINUS_CONSTANT_ALPHA};function te(D,xe,fe,be,ae,ie,b,V,Y,se){if(D===Pn){v===!0&&(me(i.BLEND),v=!1);return}if(v===!1&&(J(i.BLEND),v=!0),D!==ec){if(D!==m||se!==M){if((d!==ii||y!==ii)&&(i.blendEquation(i.FUNC_ADD),d=ii,y=ii),se)switch(D){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case to:i.blendFunc(i.ONE,i.ONE);break;case no:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case io:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:nt("WebGLState: Invalid blending: ",D);break}else switch(D){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case to:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case no:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case io:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",D);break}C=null,R=null,T=null,w=null,P.set(0,0,0),z=0,m=D,M=se}return}ae=ae||xe,ie=ie||fe,b=b||be,(xe!==d||ae!==y)&&(i.blendEquationSeparate(dt[xe],dt[ae]),d=xe,y=ae),(fe!==C||be!==R||ie!==T||b!==w)&&(i.blendFuncSeparate(Ke[fe],Ke[be],Ke[ie],Ke[b]),C=fe,R=be,T=ie,w=b),(V.equals(P)===!1||Y!==z)&&(i.blendColor(V.r,V.g,V.b,Y),P.copy(V),z=Y),m=D,M=!1}function Te(D,xe){D.side===wn?me(i.CULL_FACE):J(i.CULL_FACE);let fe=D.side===Vt;xe&&(fe=!fe),le(fe),D.blending===Ii&&D.transparent===!1?te(Pn):te(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const be=D.stencilWrite;o.setTest(be),be&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),et(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(D){g!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),g=D)}function ze(D){D!==jl?(J(i.CULL_FACE),D!==E&&(D===eo?i.cullFace(i.BACK):D===Jl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),E=D}function I(D){D!==H&&(N&&i.lineWidth(D),H=D)}function et(D,xe,fe){D?(J(i.POLYGON_OFFSET_FILL),(O!==xe||G!==fe)&&(i.polygonOffset(xe,fe),O=xe,G=fe)):me(i.POLYGON_OFFSET_FILL)}function We(D){D?J(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function st(D){D===void 0&&(D=i.TEXTURE0+$-1),oe!==D&&(i.activeTexture(D),oe=D)}function de(D,xe,fe){fe===void 0&&(oe===null?fe=i.TEXTURE0+$-1:fe=oe);let be=ee[fe];be===void 0&&(be={type:void 0,texture:void 0},ee[fe]=be),(be.type!==D||be.texture!==xe)&&(oe!==fe&&(i.activeTexture(fe),oe=fe),i.bindTexture(D,xe||X[D]),be.type=D,be.texture=xe)}function A(){const D=ee[oe];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(D){nt("WebGLState:",D)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(D){nt("WebGLState:",D)}}function Q(){try{i.texSubImage2D(...arguments)}catch(D){nt("WebGLState:",D)}}function ne(){try{i.texSubImage3D(...arguments)}catch(D){nt("WebGLState:",D)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(D){nt("WebGLState:",D)}}function Ue(){try{i.compressedTexSubImage3D(...arguments)}catch(D){nt("WebGLState:",D)}}function ge(){try{i.texStorage2D(...arguments)}catch(D){nt("WebGLState:",D)}}function Ie(){try{i.texStorage3D(...arguments)}catch(D){nt("WebGLState:",D)}}function Ge(){try{i.texImage2D(...arguments)}catch(D){nt("WebGLState:",D)}}function ce(){try{i.texImage3D(...arguments)}catch(D){nt("WebGLState:",D)}}function _e(D){we.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),we.copy(D))}function Pe(D){Ee.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Ee.copy(D))}function De(D,xe){let fe=c.get(xe);fe===void 0&&(fe=new WeakMap,c.set(xe,fe));let be=fe.get(D);be===void 0&&(be=i.getUniformBlockIndex(xe,D.name),fe.set(D,be))}function pe(D,xe){const be=c.get(xe).get(D);l.get(xe)!==be&&(i.uniformBlockBinding(xe,be,D.__bindingPointIndex),l.set(xe,be))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},oe=null,ee={},h={},f=new WeakMap,p=[],x=null,v=!1,m=null,d=null,C=null,R=null,y=null,T=null,w=null,P=new $e(0,0,0),z=0,M=!1,g=null,E=null,H=null,O=null,G=null,we.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:me,bindFramebuffer:Fe,drawBuffers:Ae,useProgram:Je,setBlending:te,setMaterial:Te,setFlipSided:le,setCullFace:ze,setLineWidth:I,setPolygonOffset:et,setScissorTest:We,activeTexture:st,bindTexture:de,unbindTexture:A,compressedTexImage2D:_,compressedTexImage3D:U,texImage2D:Ge,texImage3D:ce,updateUBOMapping:De,uniformBlockBinding:pe,texStorage2D:ge,texStorage3D:Ie,texSubImage2D:Q,texSubImage3D:ne,compressedTexSubImage2D:j,compressedTexSubImage3D:Ue,scissor:_e,viewport:Pe,reset:qe}}function am(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,_){return p?new OffscreenCanvas(A,_):Vr("canvas")}function v(A,_,U){let Q=1;const ne=de(A);if((ne.width>U||ne.height>U)&&(Q=U/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(Q*ne.width),Ue=Math.floor(Q*ne.height);h===void 0&&(h=x(j,Ue));const ge=_?x(j,Ue):h;return ge.width=j,ge.height=Ue,ge.getContext("2d").drawImage(A,0,0,j,Ue),Ye("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+j+"x"+Ue+")."),ge}else return"data"in A&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function C(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(A,_,U,Q,ne=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=_;if(_===i.RED&&(U===i.FLOAT&&(j=i.R32F),U===i.HALF_FLOAT&&(j=i.R16F),U===i.UNSIGNED_BYTE&&(j=i.R8)),_===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.R8UI),U===i.UNSIGNED_SHORT&&(j=i.R16UI),U===i.UNSIGNED_INT&&(j=i.R32UI),U===i.BYTE&&(j=i.R8I),U===i.SHORT&&(j=i.R16I),U===i.INT&&(j=i.R32I)),_===i.RG&&(U===i.FLOAT&&(j=i.RG32F),U===i.HALF_FLOAT&&(j=i.RG16F),U===i.UNSIGNED_BYTE&&(j=i.RG8)),_===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.RG8UI),U===i.UNSIGNED_SHORT&&(j=i.RG16UI),U===i.UNSIGNED_INT&&(j=i.RG32UI),U===i.BYTE&&(j=i.RG8I),U===i.SHORT&&(j=i.RG16I),U===i.INT&&(j=i.RG32I)),_===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.RGB8UI),U===i.UNSIGNED_SHORT&&(j=i.RGB16UI),U===i.UNSIGNED_INT&&(j=i.RGB32UI),U===i.BYTE&&(j=i.RGB8I),U===i.SHORT&&(j=i.RGB16I),U===i.INT&&(j=i.RGB32I)),_===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),U===i.UNSIGNED_INT&&(j=i.RGBA32UI),U===i.BYTE&&(j=i.RGBA8I),U===i.SHORT&&(j=i.RGBA16I),U===i.INT&&(j=i.RGBA32I)),_===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),_===i.RGBA){const Ue=ne?Hr:it.getTransfer(Q);U===i.FLOAT&&(j=i.RGBA32F),U===i.HALF_FLOAT&&(j=i.RGBA16F),U===i.UNSIGNED_BYTE&&(j=Ue===ct?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(A,_){let U;return A?_===null||_===mn||_===rr?U=i.DEPTH24_STENCIL8:_===un?U=i.DEPTH32F_STENCIL8:_===ir&&(U=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===mn||_===rr?U=i.DEPTH_COMPONENT24:_===un?U=i.DEPTH_COMPONENT32F:_===ir&&(U=i.DEPTH_COMPONENT16),U}function T(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==It&&A.minFilter!==St?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function w(A){const _=A.target;_.removeEventListener("dispose",w),z(_),_.isVideoTexture&&u.delete(_)}function P(A){const _=A.target;_.removeEventListener("dispose",P),g(_)}function z(A){const _=n.get(A);if(_.__webglInit===void 0)return;const U=A.source,Q=f.get(U);if(Q){const ne=Q[_.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(A),Object.keys(Q).length===0&&f.delete(U)}n.remove(A)}function M(A){const _=n.get(A);i.deleteTexture(_.__webglTexture);const U=A.source,Q=f.get(U);delete Q[_.__cacheKey],a.memory.textures--}function g(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let ne=0;ne<_.__webglFramebuffer[Q].length;ne++)i.deleteFramebuffer(_.__webglFramebuffer[Q][ne]);else i.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[Q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const U=A.textures;for(let Q=0,ne=U.length;Q<ne;Q++){const j=n.get(U[Q]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(U[Q])}n.remove(A)}let E=0;function H(){E=0}function O(){const A=E;return A>=r.maxTextures&&Ye("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),E+=1,A}function G(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function $(A,_){const U=n.get(A);if(A.isVideoTexture&&We(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&U.__version!==A.version){const Q=A.image;if(Q===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{X(U,A,_);return}}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+_)}function N(A,_){const U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){X(U,A,_);return}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+_)}function L(A,_){const U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){X(U,A,_);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+_)}function q(A,_){const U=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&U.__version!==A.version){J(U,A,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+_)}const oe={[nr]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[Ws]:i.MIRRORED_REPEAT},ee={[It]:i.NEAREST,[Mc]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[St]:i.LINEAR,[es]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},re={[Ec]:i.NEVER,[Rc]:i.ALWAYS,[yc]:i.LESS,[za]:i.LEQUAL,[Tc]:i.EQUAL,[ka]:i.GEQUAL,[Ac]:i.GREATER,[wc]:i.NOTEQUAL};function ve(A,_){if(_.type===un&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===St||_.magFilter===es||_.magFilter===fr||_.magFilter===oi||_.minFilter===St||_.minFilter===es||_.minFilter===fr||_.minFilter===oi)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,oe[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,oe[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,oe[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ee[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ee[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,re[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===It||_.minFilter!==fr&&_.minFilter!==oi||_.type===un&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function we(A,_){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",w));const Q=_.source;let ne=f.get(Q);ne===void 0&&(ne={},f.set(Q,ne));const j=G(_);if(j!==A.__cacheKey){ne[j]===void 0&&(ne[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),ne[j].usedTimes++;const Ue=ne[A.__cacheKey];Ue!==void 0&&(ne[A.__cacheKey].usedTimes--,Ue.usedTimes===0&&M(_)),A.__cacheKey=j,A.__webglTexture=ne[j].texture}return U}function Ee(A,_,U){return Math.floor(Math.floor(A/U)/_)}function Re(A,_,U,Q){const j=A.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,U,Q,_.data);else{j.sort((ce,_e)=>ce.start-_e.start);let Ue=0;for(let ce=1;ce<j.length;ce++){const _e=j[Ue],Pe=j[ce],De=_e.start+_e.count,pe=Ee(Pe.start,_.width,4),qe=Ee(_e.start,_.width,4);Pe.start<=De+1&&pe===qe&&Ee(Pe.start+Pe.count-1,_.width,4)===pe?_e.count=Math.max(_e.count,Pe.start+Pe.count-_e.start):(++Ue,j[Ue]=Pe)}j.length=Ue+1;const ge=i.getParameter(i.UNPACK_ROW_LENGTH),Ie=i.getParameter(i.UNPACK_SKIP_PIXELS),Ge=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ce=0,_e=j.length;ce<_e;ce++){const Pe=j[ce],De=Math.floor(Pe.start/4),pe=Math.ceil(Pe.count/4),qe=De%_.width,D=Math.floor(De/_.width),xe=pe,fe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,qe,D,xe,fe,U,Q,_.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ge),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ie),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ge)}}function X(A,_,U){let Q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=i.TEXTURE_3D);const ne=we(A,_),j=_.source;t.bindTexture(Q,A.__webglTexture,i.TEXTURE0+U);const Ue=n.get(j);if(j.version!==Ue.__version||ne===!0){t.activeTexture(i.TEXTURE0+U);const ge=it.getPrimaries(it.workingColorSpace),Ie=_.colorSpace===Vn?null:it.getPrimaries(_.colorSpace),Ge=_.colorSpace===Vn||ge===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let ce=v(_.image,!1,r.maxTextureSize);ce=st(_,ce);const _e=s.convert(_.format,_.colorSpace),Pe=s.convert(_.type);let De=R(_.internalFormat,_e,Pe,_.colorSpace,_.isVideoTexture);ve(Q,_);let pe;const qe=_.mipmaps,D=_.isVideoTexture!==!0,xe=Ue.__version===void 0||ne===!0,fe=j.dataReady,be=T(_,ce);if(_.isDepthTexture)De=y(_.format===li,_.type),xe&&(D?t.texStorage2D(i.TEXTURE_2D,1,De,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,De,ce.width,ce.height,0,_e,Pe,null));else if(_.isDataTexture)if(qe.length>0){D&&xe&&t.texStorage2D(i.TEXTURE_2D,be,De,qe[0].width,qe[0].height);for(let ae=0,ie=qe.length;ae<ie;ae++)pe=qe[ae],D?fe&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,pe.width,pe.height,_e,Pe,pe.data):t.texImage2D(i.TEXTURE_2D,ae,De,pe.width,pe.height,0,_e,Pe,pe.data);_.generateMipmaps=!1}else D?(xe&&t.texStorage2D(i.TEXTURE_2D,be,De,ce.width,ce.height),fe&&Re(_,ce,_e,Pe)):t.texImage2D(i.TEXTURE_2D,0,De,ce.width,ce.height,0,_e,Pe,ce.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){D&&xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,De,qe[0].width,qe[0].height,ce.depth);for(let ae=0,ie=qe.length;ae<ie;ae++)if(pe=qe[ae],_.format!==an)if(_e!==null)if(D){if(fe)if(_.layerUpdates.size>0){const b=Po(pe.width,pe.height,_.format,_.type);for(const V of _.layerUpdates){const Y=pe.data.subarray(V*b/pe.data.BYTES_PER_ELEMENT,(V+1)*b/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,V,pe.width,pe.height,1,_e,Y)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,pe.width,pe.height,ce.depth,_e,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,De,pe.width,pe.height,ce.depth,0,pe.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?fe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,pe.width,pe.height,ce.depth,_e,Pe,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,De,pe.width,pe.height,ce.depth,0,_e,Pe,pe.data)}else{D&&xe&&t.texStorage2D(i.TEXTURE_2D,be,De,qe[0].width,qe[0].height);for(let ae=0,ie=qe.length;ae<ie;ae++)pe=qe[ae],_.format!==an?_e!==null?D?fe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,pe.width,pe.height,_e,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,De,pe.width,pe.height,0,pe.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?fe&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,pe.width,pe.height,_e,Pe,pe.data):t.texImage2D(i.TEXTURE_2D,ae,De,pe.width,pe.height,0,_e,Pe,pe.data)}else if(_.isDataArrayTexture)if(D){if(xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,De,ce.width,ce.height,ce.depth),fe)if(_.layerUpdates.size>0){const ae=Po(ce.width,ce.height,_.format,_.type);for(const ie of _.layerUpdates){const b=ce.data.subarray(ie*ae/ce.data.BYTES_PER_ELEMENT,(ie+1)*ae/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,ce.width,ce.height,1,_e,Pe,b)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,_e,Pe,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,ce.width,ce.height,ce.depth,0,_e,Pe,ce.data);else if(_.isData3DTexture)D?(xe&&t.texStorage3D(i.TEXTURE_3D,be,De,ce.width,ce.height,ce.depth),fe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,_e,Pe,ce.data)):t.texImage3D(i.TEXTURE_3D,0,De,ce.width,ce.height,ce.depth,0,_e,Pe,ce.data);else if(_.isFramebufferTexture){if(xe)if(D)t.texStorage2D(i.TEXTURE_2D,be,De,ce.width,ce.height);else{let ae=ce.width,ie=ce.height;for(let b=0;b<be;b++)t.texImage2D(i.TEXTURE_2D,b,De,ae,ie,0,_e,Pe,null),ae>>=1,ie>>=1}}else if(qe.length>0){if(D&&xe){const ae=de(qe[0]);t.texStorage2D(i.TEXTURE_2D,be,De,ae.width,ae.height)}for(let ae=0,ie=qe.length;ae<ie;ae++)pe=qe[ae],D?fe&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,_e,Pe,pe):t.texImage2D(i.TEXTURE_2D,ae,De,_e,Pe,pe);_.generateMipmaps=!1}else if(D){if(xe){const ae=de(ce);t.texStorage2D(i.TEXTURE_2D,be,De,ae.width,ae.height)}fe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Pe,ce)}else t.texImage2D(i.TEXTURE_2D,0,De,_e,Pe,ce);m(_)&&d(Q),Ue.__version=j.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function J(A,_,U){if(_.image.length!==6)return;const Q=we(A,_),ne=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+U);const j=n.get(ne);if(ne.version!==j.__version||Q===!0){t.activeTexture(i.TEXTURE0+U);const Ue=it.getPrimaries(it.workingColorSpace),ge=_.colorSpace===Vn?null:it.getPrimaries(_.colorSpace),Ie=_.colorSpace===Vn||Ue===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Ge=_.isCompressedTexture||_.image[0].isCompressedTexture,ce=_.image[0]&&_.image[0].isDataTexture,_e=[];for(let ie=0;ie<6;ie++)!Ge&&!ce?_e[ie]=v(_.image[ie],!0,r.maxCubemapSize):_e[ie]=ce?_.image[ie].image:_.image[ie],_e[ie]=st(_,_e[ie]);const Pe=_e[0],De=s.convert(_.format,_.colorSpace),pe=s.convert(_.type),qe=R(_.internalFormat,De,pe,_.colorSpace),D=_.isVideoTexture!==!0,xe=j.__version===void 0||Q===!0,fe=ne.dataReady;let be=T(_,Pe);ve(i.TEXTURE_CUBE_MAP,_);let ae;if(Ge){D&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,qe,Pe.width,Pe.height);for(let ie=0;ie<6;ie++){ae=_e[ie].mipmaps;for(let b=0;b<ae.length;b++){const V=ae[b];_.format!==an?De!==null?D?fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b,0,0,V.width,V.height,De,V.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b,qe,V.width,V.height,0,V.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b,0,0,V.width,V.height,De,pe,V.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b,qe,V.width,V.height,0,De,pe,V.data)}}}else{if(ae=_.mipmaps,D&&xe){ae.length>0&&be++;const ie=de(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,qe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ce){D?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,_e[ie].width,_e[ie].height,De,pe,_e[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,qe,_e[ie].width,_e[ie].height,0,De,pe,_e[ie].data);for(let b=0;b<ae.length;b++){const Y=ae[b].image[ie].image;D?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b+1,0,0,Y.width,Y.height,De,pe,Y.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b+1,qe,Y.width,Y.height,0,De,pe,Y.data)}}else{D?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,De,pe,_e[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,qe,De,pe,_e[ie]);for(let b=0;b<ae.length;b++){const V=ae[b];D?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b+1,0,0,De,pe,V.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,b+1,qe,De,pe,V.image[ie])}}}m(_)&&d(i.TEXTURE_CUBE_MAP),j.__version=ne.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function me(A,_,U,Q,ne,j){const Ue=s.convert(U.format,U.colorSpace),ge=s.convert(U.type),Ie=R(U.internalFormat,Ue,ge,U.colorSpace),Ge=n.get(_),ce=n.get(U);if(ce.__renderTarget=_,!Ge.__hasExternalTextures){const _e=Math.max(1,_.width>>j),Pe=Math.max(1,_.height>>j);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,j,Ie,_e,Pe,_.depth,0,Ue,ge,null):t.texImage2D(ne,j,Ie,_e,Pe,0,Ue,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),et(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ne,ce.__webglTexture,0,I(_)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ne,ce.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(A,_,U){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){const Q=_.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,j=y(_.stencilBuffer,ne),Ue=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;et(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(_),j,_.width,_.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(_),j,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,j,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ue,i.RENDERBUFFER,A)}else{const Q=_.textures;for(let ne=0;ne<Q.length;ne++){const j=Q[ne],Ue=s.convert(j.format,j.colorSpace),ge=s.convert(j.type),Ie=R(j.internalFormat,Ue,ge,j.colorSpace);et(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(_),Ie,_.width,_.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(_),Ie,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(A,_,U){const Q=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(_.depthTexture);if(ne.__renderTarget=_,(!ne.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Q){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,_.depthTexture.addEventListener("dispose",w)),ne.__webglTexture===void 0){ne.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),ve(i.TEXTURE_CUBE_MAP,_.depthTexture);const Ge=s.convert(_.depthTexture.format),ce=s.convert(_.depthTexture.type);let _e;_.depthTexture.format===Nn?_e=i.DEPTH_COMPONENT24:_.depthTexture.format===li&&(_e=i.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,_e,_.width,_.height,0,Ge,ce,null)}}else $(_.depthTexture,0);const j=ne.__webglTexture,Ue=I(_),ge=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,Ie=_.depthTexture.format===li?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Nn)et(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ie,ge,j,0,Ue):i.framebufferTexture2D(i.FRAMEBUFFER,Ie,ge,j,0);else if(_.depthTexture.format===li)et(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ie,ge,j,0,Ue):i.framebufferTexture2D(i.FRAMEBUFFER,Ie,ge,j,0);else throw new Error("Unknown depthTexture format")}function Je(A){const _=n.get(A),U=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Q){const ne=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),_.__depthDisposeCallback=ne}_.__boundDepthTexture=Q}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(U)for(let Q=0;Q<6;Q++)Ae(_.__webglFramebuffer[Q],A,Q);else{const Q=A.texture.mipmaps;Q&&Q.length>0?Ae(_.__webglFramebuffer[0],A,0):Ae(_.__webglFramebuffer,A,0)}else if(U){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]===void 0)_.__webglDepthbuffer[Q]=i.createRenderbuffer(),Fe(_.__webglDepthbuffer[Q],A,!1);else{const ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,j)}}else{const Q=A.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Fe(_.__webglDepthbuffer,A,!1);else{const ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(A,_,U){const Q=n.get(A);_!==void 0&&me(Q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Je(A)}function Ke(A){const _=A.texture,U=n.get(A),Q=n.get(_);A.addEventListener("dispose",P);const ne=A.textures,j=A.isWebGLCubeRenderTarget===!0,Ue=ne.length>1;if(Ue||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=_.version,a.memory.textures++),j){U.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[ge]=[];for(let Ie=0;Ie<_.mipmaps.length;Ie++)U.__webglFramebuffer[ge][Ie]=i.createFramebuffer()}else U.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let ge=0;ge<_.mipmaps.length;ge++)U.__webglFramebuffer[ge]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(Ue)for(let ge=0,Ie=ne.length;ge<Ie;ge++){const Ge=n.get(ne[ge]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&et(A)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ge=0;ge<ne.length;ge++){const Ie=ne[ge];U.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ge]);const Ge=s.convert(Ie.format,Ie.colorSpace),ce=s.convert(Ie.type),_e=R(Ie.internalFormat,Ge,ce,Ie.colorSpace,A.isXRRenderTarget===!0),Pe=I(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,_e,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,U.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(U.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),ve(i.TEXTURE_CUBE_MAP,_);for(let ge=0;ge<6;ge++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ie=0;Ie<_.mipmaps.length;Ie++)me(U.__webglFramebuffer[ge][Ie],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie);else me(U.__webglFramebuffer[ge],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(_)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let ge=0,Ie=ne.length;ge<Ie;ge++){const Ge=ne[ge],ce=n.get(Ge);let _e=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(_e=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,ce.__webglTexture),ve(_e,Ge),me(U.__webglFramebuffer,A,Ge,i.COLOR_ATTACHMENT0+ge,_e,0),m(Ge)&&d(_e)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ge=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,Q.__webglTexture),ve(ge,_),_.mipmaps&&_.mipmaps.length>0)for(let Ie=0;Ie<_.mipmaps.length;Ie++)me(U.__webglFramebuffer[Ie],A,_,i.COLOR_ATTACHMENT0,ge,Ie);else me(U.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,ge,0);m(_)&&d(ge),t.unbindTexture()}A.depthBuffer&&Je(A)}function te(A){const _=A.textures;for(let U=0,Q=_.length;U<Q;U++){const ne=_[U];if(m(ne)){const j=C(A),Ue=n.get(ne).__webglTexture;t.bindTexture(j,Ue),d(j),t.unbindTexture()}}}const Te=[],le=[];function ze(A){if(A.samples>0){if(et(A)===!1){const _=A.textures,U=A.width,Q=A.height;let ne=i.COLOR_BUFFER_BIT;const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(A),ge=_.length>1;if(ge)for(let Ge=0;Ge<_.length;Ge++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Ie=A.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ge=0;Ge<_.length;Ge++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ge]);const ce=n.get(_[Ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,U,Q,0,0,U,Q,ne,i.NEAREST),l===!0&&(Te.length=0,le.length=0,Te.push(i.COLOR_ATTACHMENT0+Ge),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Te.push(j),le.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let Ge=0;Ge<_.length;Ge++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ge]);const ce=n.get(_[Ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.TEXTURE_2D,ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function I(A){return Math.min(r.maxSamples,A.samples)}function et(A){const _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function We(A){const _=a.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function st(A,_){const U=A.colorSpace,Q=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==Fi&&U!==Vn&&(it.getTransfer(U)===ct?(Q!==an||ne!==qt)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",U)),_}function de(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=H,this.setTexture2D=$,this.setTexture2DArray=N,this.setTexture3D=L,this.setTextureCube=q,this.rebindTextures=dt,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=me,this.useMultisampledRTT=et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function om(i,e){function t(n,r=Vn){let s;const a=it.getTransfer(r);if(n===qt)return i.UNSIGNED_BYTE;if(n===Da)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ua)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===El)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ml)return i.BYTE;if(n===Sl)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===La)return i.INT;if(n===mn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===Un)return i.HALF_FLOAT;if(n===yl)return i.ALPHA;if(n===Tl)return i.RGB;if(n===an)return i.RGBA;if(n===Nn)return i.DEPTH_COMPONENT;if(n===li)return i.DEPTH_STENCIL;if(n===Al)return i.RED;if(n===Na)return i.RED_INTEGER;if(n===Ni)return i.RG;if(n===Fa)return i.RG_INTEGER;if(n===Oa)return i.RGBA_INTEGER;if(n===Nr||n===Fr||n===Or||n===Br)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Nr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Nr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Or)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Br)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xs||n===Ys||n===$s||n===qs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Xs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ys)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$s)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zs||n===Ks||n===js||n===Js||n===Qs||n===ea||n===ta)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Zs||n===Ks)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===js)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Js)return s.COMPRESSED_R11_EAC;if(n===Qs)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ea)return s.COMPRESSED_RG11_EAC;if(n===ta)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===na||n===ia||n===ra||n===sa||n===aa||n===oa||n===la||n===ca||n===ua||n===ha||n===fa||n===da||n===pa||n===ma)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===na)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ia)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ra)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sa)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===aa)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oa)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===la)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ca)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ua)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ha)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fa)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===da)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pa)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ma)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ga||n===_a||n===xa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ga)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_a)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===va||n===Ma||n===Sa||n===ba)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===va)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ma)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ba)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const lm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cm=`
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

}`;class um{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ol(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _n({vertexShader:lm,fragmentShader:cm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hm extends ui{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,x=null;const v=typeof XRWebGLBinding<"u",m=new um,d={},C=t.getContextAttributes();let R=null,y=null;const T=[],w=[],P=new rt;let z=null;const M=new jt;M.viewport=new Mt;const g=new jt;g.viewport=new Mt;const E=[M,g],H=new _u;let O=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=T[X];return J===void 0&&(J=new Es,T[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=T[X];return J===void 0&&(J=new Es,T[X]=J),J.getGripSpace()},this.getHand=function(X){let J=T[X];return J===void 0&&(J=new Es,T[X]=J),J.getHandSpace()};function $(X){const J=w.indexOf(X.inputSource);if(J===-1)return;const me=T[J];me!==void 0&&(me.update(X.inputSource,X.frame,c||a),me.dispatchEvent({type:X.type,data:X.inputSource}))}function N(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",L);for(let X=0;X<T.length;X++){const J=w[X];J!==null&&(w[X]=null,T[X].disconnect(J))}O=null,G=null,m.reset();for(const X in d)delete d[X];e.setRenderTarget(R),p=null,f=null,h=null,r=null,y=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(z),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",N),r.addEventListener("inputsourceschange",L),C.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Fe=null,Ae=null;C.depth&&(Ae=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=C.stencil?li:Nn,Fe=C.stencil?rr:mn);const Je={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Je),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new pn(f.textureWidth,f.textureHeight,{format:an,type:qt,depthTexture:new ar(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const me={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new pn(p.framebufferWidth,p.framebufferHeight,{format:an,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Re.setContext(r),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function L(X){for(let J=0;J<X.removed.length;J++){const me=X.removed[J],Fe=w.indexOf(me);Fe>=0&&(w[Fe]=null,T[Fe].disconnect(me))}for(let J=0;J<X.added.length;J++){const me=X.added[J];let Fe=w.indexOf(me);if(Fe===-1){for(let Je=0;Je<T.length;Je++)if(Je>=w.length){w.push(me),Fe=Je;break}else if(w[Je]===null){w[Je]=me,Fe=Je;break}if(Fe===-1)break}const Ae=T[Fe];Ae&&Ae.connect(me)}}const q=new B,oe=new B;function ee(X,J,me){q.setFromMatrixPosition(J.matrixWorld),oe.setFromMatrixPosition(me.matrixWorld);const Fe=q.distanceTo(oe),Ae=J.projectionMatrix.elements,Je=me.projectionMatrix.elements,dt=Ae[14]/(Ae[10]-1),Ke=Ae[14]/(Ae[10]+1),te=(Ae[9]+1)/Ae[5],Te=(Ae[9]-1)/Ae[5],le=(Ae[8]-1)/Ae[0],ze=(Je[8]+1)/Je[0],I=dt*le,et=dt*ze,We=Fe/(-le+ze),st=We*-le;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(st),X.translateZ(We),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ae[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const de=dt+We,A=Ke+We,_=I-st,U=et+(Fe-st),Q=te*Ke/A*de,ne=Te*Ke/A*de;X.projectionMatrix.makePerspective(_,U,Q,ne,de,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function re(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let J=X.near,me=X.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(me=m.depthFar)),H.near=g.near=M.near=J,H.far=g.far=M.far=me,(O!==H.near||G!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),O=H.near,G=H.far),H.layers.mask=X.layers.mask|6,M.layers.mask=H.layers.mask&3,g.layers.mask=H.layers.mask&5;const Fe=X.parent,Ae=H.cameras;re(H,Fe);for(let Je=0;Je<Ae.length;Je++)re(Ae[Je],Fe);Ae.length===2?ee(H,M,g):H.projectionMatrix.copy(M.projectionMatrix),ve(X,H,Fe)};function ve(X,J,me){me===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(me.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ea*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(X){return d[X]};let we=null;function Ee(X,J){if(u=J.getViewerPose(c||a),x=J,u!==null){const me=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Fe=!1;me.length!==H.cameras.length&&(H.cameras.length=0,Fe=!0);for(let Ke=0;Ke<me.length;Ke++){const te=me[Ke];let Te=null;if(p!==null)Te=p.getViewport(te);else{const ze=h.getViewSubImage(f,te);Te=ze.viewport,Ke===0&&(e.setRenderTargetTextures(y,ze.colorTexture,ze.depthStencilTexture),e.setRenderTarget(y))}let le=E[Ke];le===void 0&&(le=new jt,le.layers.enable(Ke),le.viewport=new Mt,E[Ke]=le),le.matrix.fromArray(te.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(te.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Te.x,Te.y,Te.width,Te.height),Ke===0&&(H.matrix.copy(le.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Fe===!0&&H.cameras.push(le)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const Ke=h.getDepthInformation(me[0]);Ke&&Ke.isValid&&Ke.texture&&m.init(Ke,r.renderState)}if(Ae&&Ae.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let Ke=0;Ke<me.length;Ke++){const te=me[Ke].camera;if(te){let Te=d[te];Te||(Te=new Ol,d[te]=Te);const le=h.getCameraImage(te);Te.sourceTexture=le}}}}for(let me=0;me<T.length;me++){const Fe=w[me],Ae=T[me];Fe!==null&&Ae!==void 0&&Ae.update(Fe,J,c||a)}we&&we(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),x=null}const Re=new Bl;Re.setAnimationLoop(Ee),this.setAnimationLoop=function(X){we=X},this.dispose=function(){}}}const Qn=new Qt,fm=new gt;function dm(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Dl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,C,R,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),x(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,C,R):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Vt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Vt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const C=e.get(d),R=C.envMap,y=C.envMapRotation;R&&(m.envMap.value=R,Qn.copy(y),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),m.envMapRotation.value.setFromMatrix4(fm.makeRotationFromEuler(Qn)),m.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,C,R){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*C,m.scale.value=R*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,C){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Vt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const C=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function pm(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,R){const y=R.program;n.uniformBlockBinding(C,y)}function c(C,R){let y=r[C.id];y===void 0&&(x(C),y=u(C),r[C.id]=y,C.addEventListener("dispose",m));const T=R.program;n.updateUBOMapping(C,T);const w=e.render.frame;s[C.id]!==w&&(f(C),s[C.id]=w)}function u(C){const R=h();C.__bindingPointIndex=R;const y=i.createBuffer(),T=C.__size,w=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,y),y}function h(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){const R=r[C.id],y=C.uniforms,T=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let w=0,P=y.length;w<P;w++){const z=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,g=z.length;M<g;M++){const E=z[M];if(p(E,w,M,T)===!0){const H=E.__offset,O=Array.isArray(E.value)?E.value:[E.value];let G=0;for(let $=0;$<O.length;$++){const N=O[$],L=v(N);typeof N=="number"||typeof N=="boolean"?(E.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,H+G,E.__data)):N.isMatrix3?(E.__data[0]=N.elements[0],E.__data[1]=N.elements[1],E.__data[2]=N.elements[2],E.__data[3]=0,E.__data[4]=N.elements[3],E.__data[5]=N.elements[4],E.__data[6]=N.elements[5],E.__data[7]=0,E.__data[8]=N.elements[6],E.__data[9]=N.elements[7],E.__data[10]=N.elements[8],E.__data[11]=0):(N.toArray(E.__data,G),G+=L.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(C,R,y,T){const w=C.value,P=R+"_"+y;if(T[P]===void 0)return typeof w=="number"||typeof w=="boolean"?T[P]=w:T[P]=w.clone(),!0;{const z=T[P];if(typeof w=="number"||typeof w=="boolean"){if(z!==w)return T[P]=w,!0}else if(z.equals(w)===!1)return z.copy(w),!0}return!1}function x(C){const R=C.uniforms;let y=0;const T=16;for(let P=0,z=R.length;P<z;P++){const M=Array.isArray(R[P])?R[P]:[R[P]];for(let g=0,E=M.length;g<E;g++){const H=M[g],O=Array.isArray(H.value)?H.value:[H.value];for(let G=0,$=O.length;G<$;G++){const N=O[G],L=v(N),q=y%T,oe=q%L.boundary,ee=q+oe;y+=oe,ee!==0&&T-ee<L.storage&&(y+=T-ee),H.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=L.storage}}}const w=y%T;return w>0&&(y+=T-w),C.__size=y,C.__cache={},this}function v(C){const R={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(R.boundary=4,R.storage=4):C.isVector2?(R.boundary=8,R.storage=8):C.isVector3||C.isColor?(R.boundary=16,R.storage=12):C.isVector4?(R.boundary=16,R.storage=16):C.isMatrix3?(R.boundary=48,R.storage=48):C.isMatrix4?(R.boundary=64,R.storage=64):C.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",C),R}function m(C){const R=C.target;R.removeEventListener("dispose",m);const y=a.indexOf(R.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[R.id]),delete r[R.id],delete s[R.id]}function d(){for(const C in r)i.deleteBuffer(r[C]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}const mm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ln=null;function gm(){return ln===null&&(ln=new nu(mm,16,16,Ni,Un),ln.name="DFG_LUT",ln.minFilter=St,ln.magFilter=St,ln.wrapS=Rn,ln.wrapT=Rn,ln.generateMipmaps=!1,ln.needsUpdate=!0),ln}class _m{constructor(e={}){const{canvas:t=Cc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=qt}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const v=p,m=new Set([Oa,Fa,Na]),d=new Set([qt,mn,ir,rr,Da,Ua]),C=new Uint32Array(4),R=new Int32Array(4);let y=null,T=null;const w=[],P=[];let z=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let g=!1;this._outputColorSpace=mt;let E=0,H=0,O=null,G=-1,$=null;const N=new Mt,L=new Mt;let q=null;const oe=new $e(0);let ee=0,re=t.width,ve=t.height,we=1,Ee=null,Re=null;const X=new Mt(0,0,re,ve),J=new Mt(0,0,re,ve);let me=!1;const Fe=new Wa;let Ae=!1,Je=!1;const dt=new gt,Ke=new B,te=new Mt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function ze(){return O===null?we:1}let I=n;function et(S,k){return t.getContext(S,k)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ia}`),t.addEventListener("webglcontextlost",V,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",se,!1),I===null){const k="webgl2";if(I=et(k,S),I===null)throw et(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw nt("WebGLRenderer: "+S.message),S}let We,st,de,A,_,U,Q,ne,j,Ue,ge,Ie,Ge,ce,_e,Pe,De,pe,qe,D,xe,fe,be,ae;function ie(){We=new gd(I),We.init(),fe=new om(I,We),st=new od(I,We,e,fe),de=new sm(I,We),st.reversedDepthBuffer&&f&&de.buffers.depth.setReversed(!0),A=new vd(I),_=new Wp,U=new am(I,We,de,_,st,fe,A),Q=new cd(M),ne=new md(M),j=new bu(I),be=new sd(I,j),Ue=new _d(I,j,A,be),ge=new Sd(I,Ue,j,A),qe=new Md(I,st,U),Pe=new ld(_),Ie=new Vp(M,Q,ne,We,st,be,Pe),Ge=new dm(M,_),ce=new Yp,_e=new Jp(We),pe=new rd(M,Q,ne,de,ge,x,l),De=new im(M,ge,st),ae=new pm(I,A,st,de),D=new ad(I,We,A),xe=new xd(I,We,A),A.programs=Ie.programs,M.capabilities=st,M.extensions=We,M.properties=_,M.renderLists=ce,M.shadowMap=De,M.state=de,M.info=A}ie(),v!==qt&&(z=new Ed(v,t.width,t.height,r,s));const b=new hm(M,I);this.xr=b,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=We.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=We.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(S){S!==void 0&&(we=S,this.setSize(re,ve,!1))},this.getSize=function(S){return S.set(re,ve)},this.setSize=function(S,k,K=!0){if(b.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}re=S,ve=k,t.width=Math.floor(S*we),t.height=Math.floor(k*we),K===!0&&(t.style.width=S+"px",t.style.height=k+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(re*we,ve*we).floor()},this.setDrawingBufferSize=function(S,k,K){re=S,ve=k,we=K,t.width=Math.floor(S*K),t.height=Math.floor(k*K),this.setViewport(0,0,S,k)},this.setEffects=function(S){if(v===qt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let k=0;k<S.length;k++)if(S[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(N)},this.getViewport=function(S){return S.copy(X)},this.setViewport=function(S,k,K,Z){S.isVector4?X.set(S.x,S.y,S.z,S.w):X.set(S,k,K,Z),de.viewport(N.copy(X).multiplyScalar(we).round())},this.getScissor=function(S){return S.copy(J)},this.setScissor=function(S,k,K,Z){S.isVector4?J.set(S.x,S.y,S.z,S.w):J.set(S,k,K,Z),de.scissor(L.copy(J).multiplyScalar(we).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(S){de.setScissorTest(me=S)},this.setOpaqueSort=function(S){Ee=S},this.setTransparentSort=function(S){Re=S},this.getClearColor=function(S){return S.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(S=!0,k=!0,K=!0){let Z=0;if(S){let W=!1;if(O!==null){const Me=O.texture.format;W=m.has(Me)}if(W){const Me=O.texture.type,Ce=d.has(Me),ye=pe.getClearColor(),Le=pe.getClearAlpha(),Oe=ye.r,Ve=ye.g,ke=ye.b;Ce?(C[0]=Oe,C[1]=Ve,C[2]=ke,C[3]=Le,I.clearBufferuiv(I.COLOR,0,C)):(R[0]=Oe,R[1]=Ve,R[2]=ke,R[3]=Le,I.clearBufferiv(I.COLOR,0,R))}else Z|=I.COLOR_BUFFER_BIT}k&&(Z|=I.DEPTH_BUFFER_BIT),K&&(Z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",V,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",se,!1),pe.dispose(),ce.dispose(),_e.dispose(),_.dispose(),Q.dispose(),ne.dispose(),ge.dispose(),be.dispose(),ae.dispose(),Ie.dispose(),b.dispose(),b.removeEventListener("sessionstart",Be),b.removeEventListener("sessionend",at),Bt.stop()};function V(S){S.preventDefault(),lo("WebGLRenderer: Context Lost."),g=!0}function Y(){lo("WebGLRenderer: Context Restored."),g=!1;const S=A.autoReset,k=De.enabled,K=De.autoUpdate,Z=De.needsUpdate,W=De.type;ie(),A.autoReset=S,De.enabled=k,De.autoUpdate=K,De.needsUpdate=Z,De.type=W}function se(S){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ue(S){const k=S.target;k.removeEventListener("dispose",ue),Ne(k)}function Ne(S){Xe(S),_.remove(S)}function Xe(S){const k=_.get(S).programs;k!==void 0&&(k.forEach(function(K){Ie.releaseProgram(K)}),S.isShaderMaterial&&Ie.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,K,Z,W,Me){k===null&&(k=Te);const Ce=W.isMesh&&W.matrixWorld.determinant()<0,ye=Xl(S,k,K,Z,W);de.setMaterial(Z,Ce);let Le=K.index,Oe=1;if(Z.wireframe===!0){if(Le=Ue.getWireframeAttribute(K),Le===void 0)return;Oe=2}const Ve=K.drawRange,ke=K.attributes.position;let Qe=Ve.start*Oe,ut=(Ve.start+Ve.count)*Oe;Me!==null&&(Qe=Math.max(Qe,Me.start*Oe),ut=Math.min(ut,(Me.start+Me.count)*Oe)),Le!==null?(Qe=Math.max(Qe,0),ut=Math.min(ut,Le.count)):ke!=null&&(Qe=Math.max(Qe,0),ut=Math.min(ut,ke.count));const xt=ut-Qe;if(xt<0||xt===1/0)return;be.setup(W,Z,ye,K,Le);let vt,ht=D;if(Le!==null&&(vt=j.get(Le),ht=xe,ht.setIndex(vt)),W.isMesh)Z.wireframe===!0?(de.setLineWidth(Z.wireframeLinewidth*ze()),ht.setMode(I.LINES)):ht.setMode(I.TRIANGLES);else if(W.isLine){let He=Z.linewidth;He===void 0&&(He=1),de.setLineWidth(He*ze()),W.isLineSegments?ht.setMode(I.LINES):W.isLineLoop?ht.setMode(I.LINE_LOOP):ht.setMode(I.LINE_STRIP)}else W.isPoints?ht.setMode(I.POINTS):W.isSprite&&ht.setMode(I.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)sr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))ht.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const He=W._multiDrawStarts,lt=W._multiDrawCounts,ot=W._multiDrawCount,Wt=Le?j.get(Le).bytesPerElement:1,hi=_.get(Z).currentProgram.getUniforms();for(let Xt=0;Xt<ot;Xt++)hi.setValue(I,"_gl_DrawID",Xt),ht.render(He[Xt]/Wt,lt[Xt])}else if(W.isInstancedMesh)ht.renderInstances(Qe,xt,W.count);else if(K.isInstancedBufferGeometry){const He=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,lt=Math.min(K.instanceCount,He);ht.renderInstances(Qe,xt,lt)}else ht.render(Qe,xt)};function _t(S,k,K){S.transparent===!0&&S.side===wn&&S.forceSinglePass===!1?(S.side=Vt,S.needsUpdate=!0,hr(S,k,K),S.side=Yn,S.needsUpdate=!0,hr(S,k,K),S.side=wn):hr(S,k,K)}this.compile=function(S,k,K=null){K===null&&(K=S),T=_e.get(K),T.init(k),P.push(T),K.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),S!==K&&S.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights();const Z=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Me=W.material;if(Me)if(Array.isArray(Me))for(let Ce=0;Ce<Me.length;Ce++){const ye=Me[Ce];_t(ye,K,W),Z.add(ye)}else _t(Me,K,W),Z.add(Me)}),T=P.pop(),Z},this.compileAsync=function(S,k,K=null){const Z=this.compile(S,k,K);return new Promise(W=>{function Me(){if(Z.forEach(function(Ce){_.get(Ce).currentProgram.isReady()&&Z.delete(Ce)}),Z.size===0){W(S);return}setTimeout(Me,10)}We.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Et=null;function on(S){Et&&Et(S)}function Be(){Bt.stop()}function at(){Bt.start()}const Bt=new Bl;Bt.setAnimationLoop(on),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(S){Et=S,b.setAnimationLoop(S),S===null?Bt.stop():Bt.start()},b.addEventListener("sessionstart",Be),b.addEventListener("sessionend",at),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;const K=b.enabled===!0&&b.isPresenting===!0,Z=z!==null&&(O===null||K)&&z.begin(M,O);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),b.enabled===!0&&b.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(b.cameraAutoUpdate===!0&&b.updateCamera(k),k=b.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,k,O),T=_e.get(S,P.length),T.init(k),P.push(T),dt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Fe.setFromProjectionMatrix(dt,hn,k.reversedDepth),Je=this.localClippingEnabled,Ae=Pe.init(this.clippingPlanes,Je),y=ce.get(S,w.length),y.init(),w.push(y),b.enabled===!0&&b.isPresenting===!0){const Ce=M.xr.getDepthSensingMesh();Ce!==null&&Jr(Ce,k,-1/0,M.sortObjects)}Jr(S,k,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(Ee,Re),le=b.enabled===!1||b.isPresenting===!1||b.hasDepthSensing()===!1,le&&pe.addToRenderList(y,S),this.info.render.frame++,Ae===!0&&Pe.beginShadows();const W=T.state.shadowsArray;if(De.render(W,S,k),Ae===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&z.hasRenderPass())===!1){const Ce=y.opaque,ye=y.transmissive;if(T.setupLights(),k.isArrayCamera){const Le=k.cameras;if(ye.length>0)for(let Oe=0,Ve=Le.length;Oe<Ve;Oe++){const ke=Le[Oe];Ka(Ce,ye,S,ke)}le&&pe.render(S);for(let Oe=0,Ve=Le.length;Oe<Ve;Oe++){const ke=Le[Oe];Za(y,S,ke,ke.viewport)}}else ye.length>0&&Ka(Ce,ye,S,k),le&&pe.render(S),Za(y,S,k)}O!==null&&H===0&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O)),Z&&z.end(M),S.isScene===!0&&S.onAfterRender(M,S,k),be.resetDefaultState(),G=-1,$=null,P.pop(),P.length>0?(T=P[P.length-1],Ae===!0&&Pe.setGlobalState(M.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?y=w[w.length-1]:y=null};function Jr(S,k,K,Z){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Fe.intersectsSprite(S)){Z&&te.setFromMatrixPosition(S.matrixWorld).applyMatrix4(dt);const Ce=ge.update(S),ye=S.material;ye.visible&&y.push(S,Ce,ye,K,te.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Fe.intersectsObject(S))){const Ce=ge.update(S),ye=S.material;if(Z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),te.copy(S.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),te.copy(Ce.boundingSphere.center)),te.applyMatrix4(S.matrixWorld).applyMatrix4(dt)),Array.isArray(ye)){const Le=Ce.groups;for(let Oe=0,Ve=Le.length;Oe<Ve;Oe++){const ke=Le[Oe],Qe=ye[ke.materialIndex];Qe&&Qe.visible&&y.push(S,Ce,Qe,K,te.z,ke)}}else ye.visible&&y.push(S,Ce,ye,K,te.z,null)}}const Me=S.children;for(let Ce=0,ye=Me.length;Ce<ye;Ce++)Jr(Me[Ce],k,K,Z)}function Za(S,k,K,Z){const{opaque:W,transmissive:Me,transparent:Ce}=S;T.setupLightsView(K),Ae===!0&&Pe.setGlobalState(M.clippingPlanes,K),Z&&de.viewport(N.copy(Z)),W.length>0&&ur(W,k,K),Me.length>0&&ur(Me,k,K),Ce.length>0&&ur(Ce,k,K),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Ka(S,k,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Z.id]===void 0){const Qe=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Z.id]=new pn(1,1,{generateMipmaps:!0,type:Qe?Un:qt,minFilter:oi,samples:st.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}const Me=T.state.transmissionRenderTarget[Z.id],Ce=Z.viewport||N;Me.setSize(Ce.z*M.transmissionResolutionScale,Ce.w*M.transmissionResolutionScale);const ye=M.getRenderTarget(),Le=M.getActiveCubeFace(),Oe=M.getActiveMipmapLevel();M.setRenderTarget(Me),M.getClearColor(oe),ee=M.getClearAlpha(),ee<1&&M.setClearColor(16777215,.5),M.clear(),le&&pe.render(K);const Ve=M.toneMapping;M.toneMapping=dn;const ke=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),T.setupLightsView(Z),Ae===!0&&Pe.setGlobalState(M.clippingPlanes,Z),ur(S,K,Z),U.updateMultisampleRenderTarget(Me),U.updateRenderTargetMipmap(Me),We.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ut=0,xt=k.length;ut<xt;ut++){const vt=k[ut],{object:ht,geometry:He,material:lt,group:ot}=vt;if(lt.side===wn&&ht.layers.test(Z.layers)){const Wt=lt.side;lt.side=Vt,lt.needsUpdate=!0,ja(ht,K,Z,He,lt,ot),lt.side=Wt,lt.needsUpdate=!0,Qe=!0}}Qe===!0&&(U.updateMultisampleRenderTarget(Me),U.updateRenderTargetMipmap(Me))}M.setRenderTarget(ye,Le,Oe),M.setClearColor(oe,ee),ke!==void 0&&(Z.viewport=ke),M.toneMapping=Ve}function ur(S,k,K){const Z=k.isScene===!0?k.overrideMaterial:null;for(let W=0,Me=S.length;W<Me;W++){const Ce=S[W],{object:ye,geometry:Le,group:Oe}=Ce;let Ve=Ce.material;Ve.allowOverride===!0&&Z!==null&&(Ve=Z),ye.layers.test(K.layers)&&ja(ye,k,K,Le,Ve,Oe)}}function ja(S,k,K,Z,W,Me){S.onBeforeRender(M,k,K,Z,W,Me),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(M,k,K,Z,S,Me),W.transparent===!0&&W.side===wn&&W.forceSinglePass===!1?(W.side=Vt,W.needsUpdate=!0,M.renderBufferDirect(K,k,Z,W,S,Me),W.side=Yn,W.needsUpdate=!0,M.renderBufferDirect(K,k,Z,W,S,Me),W.side=wn):M.renderBufferDirect(K,k,Z,W,S,Me),S.onAfterRender(M,k,K,Z,W,Me)}function hr(S,k,K){k.isScene!==!0&&(k=Te);const Z=_.get(S),W=T.state.lights,Me=T.state.shadowsArray,Ce=W.state.version,ye=Ie.getParameters(S,W.state,Me,k,K),Le=Ie.getProgramCacheKey(ye);let Oe=Z.programs;Z.environment=S.isMeshStandardMaterial?k.environment:null,Z.fog=k.fog,Z.envMap=(S.isMeshStandardMaterial?ne:Q).get(S.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,Oe===void 0&&(S.addEventListener("dispose",ue),Oe=new Map,Z.programs=Oe);let Ve=Oe.get(Le);if(Ve!==void 0){if(Z.currentProgram===Ve&&Z.lightsStateVersion===Ce)return Qa(S,ye),Ve}else ye.uniforms=Ie.getUniforms(S),S.onBeforeCompile(ye,M),Ve=Ie.acquireProgram(ye,Le),Oe.set(Le,Ve),Z.uniforms=ye.uniforms;const ke=Z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ke.clippingPlanes=Pe.uniform),Qa(S,ye),Z.needsLights=$l(S),Z.lightsStateVersion=Ce,Z.needsLights&&(ke.ambientLightColor.value=W.state.ambient,ke.lightProbe.value=W.state.probe,ke.directionalLights.value=W.state.directional,ke.directionalLightShadows.value=W.state.directionalShadow,ke.spotLights.value=W.state.spot,ke.spotLightShadows.value=W.state.spotShadow,ke.rectAreaLights.value=W.state.rectArea,ke.ltc_1.value=W.state.rectAreaLTC1,ke.ltc_2.value=W.state.rectAreaLTC2,ke.pointLights.value=W.state.point,ke.pointLightShadows.value=W.state.pointShadow,ke.hemisphereLights.value=W.state.hemi,ke.directionalShadowMap.value=W.state.directionalShadowMap,ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ke.spotShadowMap.value=W.state.spotShadowMap,ke.spotLightMatrix.value=W.state.spotLightMatrix,ke.spotLightMap.value=W.state.spotLightMap,ke.pointShadowMap.value=W.state.pointShadowMap,ke.pointShadowMatrix.value=W.state.pointShadowMatrix),Z.currentProgram=Ve,Z.uniformsList=null,Ve}function Ja(S){if(S.uniformsList===null){const k=S.currentProgram.getUniforms();S.uniformsList=zr.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function Qa(S,k){const K=_.get(S);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function Xl(S,k,K,Z,W){k.isScene!==!0&&(k=Te),U.resetTextureUnits();const Me=k.fog,Ce=Z.isMeshStandardMaterial?k.environment:null,ye=O===null?M.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Fi,Le=(Z.isMeshStandardMaterial?ne:Q).get(Z.envMap||Ce),Oe=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ve=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),ke=!!K.morphAttributes.position,Qe=!!K.morphAttributes.normal,ut=!!K.morphAttributes.color;let xt=dn;Z.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(xt=M.toneMapping);const vt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ht=vt!==void 0?vt.length:0,He=_.get(Z),lt=T.state.lights;if(Ae===!0&&(Je===!0||S!==$)){const Ft=S===$&&Z.id===G;Pe.setState(Z,S,Ft)}let ot=!1;Z.version===He.__version?(He.needsLights&&He.lightsStateVersion!==lt.state.version||He.outputColorSpace!==ye||W.isBatchedMesh&&He.batching===!1||!W.isBatchedMesh&&He.batching===!0||W.isBatchedMesh&&He.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&He.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&He.instancing===!1||!W.isInstancedMesh&&He.instancing===!0||W.isSkinnedMesh&&He.skinning===!1||!W.isSkinnedMesh&&He.skinning===!0||W.isInstancedMesh&&He.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&He.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&He.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&He.instancingMorph===!1&&W.morphTexture!==null||He.envMap!==Le||Z.fog===!0&&He.fog!==Me||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Pe.numPlanes||He.numIntersection!==Pe.numIntersection)||He.vertexAlphas!==Oe||He.vertexTangents!==Ve||He.morphTargets!==ke||He.morphNormals!==Qe||He.morphColors!==ut||He.toneMapping!==xt||He.morphTargetsCount!==ht)&&(ot=!0):(ot=!0,He.__version=Z.version);let Wt=He.currentProgram;ot===!0&&(Wt=hr(Z,k,W));let hi=!1,Xt=!1,Vi=!1;const ft=Wt.getUniforms(),zt=He.uniforms;if(de.useProgram(Wt.program)&&(hi=!0,Xt=!0,Vi=!0),Z.id!==G&&(G=Z.id,Xt=!0),hi||$!==S){de.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ft.setValue(I,"projectionMatrix",S.projectionMatrix),ft.setValue(I,"viewMatrix",S.matrixWorldInverse);const kt=ft.map.cameraPosition;kt!==void 0&&kt.setValue(I,Ke.setFromMatrixPosition(S.matrixWorld)),st.logarithmicDepthBuffer&&ft.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ft.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),$!==S&&($=S,Xt=!0,Vi=!0)}if(He.needsLights&&(lt.state.directionalShadowMap.length>0&&ft.setValue(I,"directionalShadowMap",lt.state.directionalShadowMap,U),lt.state.spotShadowMap.length>0&&ft.setValue(I,"spotShadowMap",lt.state.spotShadowMap,U),lt.state.pointShadowMap.length>0&&ft.setValue(I,"pointShadowMap",lt.state.pointShadowMap,U)),W.isSkinnedMesh){ft.setOptional(I,W,"bindMatrix"),ft.setOptional(I,W,"bindMatrixInverse");const Ft=W.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),ft.setValue(I,"boneTexture",Ft.boneTexture,U))}W.isBatchedMesh&&(ft.setOptional(I,W,"batchingTexture"),ft.setValue(I,"batchingTexture",W._matricesTexture,U),ft.setOptional(I,W,"batchingIdTexture"),ft.setValue(I,"batchingIdTexture",W._indirectTexture,U),ft.setOptional(I,W,"batchingColorTexture"),W._colorsTexture!==null&&ft.setValue(I,"batchingColorTexture",W._colorsTexture,U));const Zt=K.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&qe.update(W,K,Wt),(Xt||He.receiveShadow!==W.receiveShadow)&&(He.receiveShadow=W.receiveShadow,ft.setValue(I,"receiveShadow",W.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(zt.envMap.value=Le,zt.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&k.environment!==null&&(zt.envMapIntensity.value=k.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=gm()),Xt&&(ft.setValue(I,"toneMappingExposure",M.toneMappingExposure),He.needsLights&&Yl(zt,Vi),Me&&Z.fog===!0&&Ge.refreshFogUniforms(zt,Me),Ge.refreshMaterialUniforms(zt,Z,we,ve,T.state.transmissionRenderTarget[S.id]),zr.upload(I,Ja(He),zt,U)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(zr.upload(I,Ja(He),zt,U),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ft.setValue(I,"center",W.center),ft.setValue(I,"modelViewMatrix",W.modelViewMatrix),ft.setValue(I,"normalMatrix",W.normalMatrix),ft.setValue(I,"modelMatrix",W.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Ft=Z.uniformsGroups;for(let kt=0,Qr=Ft.length;kt<Qr;kt++){const $n=Ft[kt];ae.update($n,Wt),ae.bind($n,Wt)}}return Wt}function Yl(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function $l(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(S,k,K){const Z=_.get(S);Z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),_.get(S.texture).__webglTexture=k,_.get(S.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:K,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,k){const K=_.get(S);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0};const ql=I.createFramebuffer();this.setRenderTarget=function(S,k=0,K=0){O=S,E=k,H=K;let Z=null,W=!1,Me=!1;if(S){const ye=_.get(S);if(ye.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(I.FRAMEBUFFER,ye.__webglFramebuffer),N.copy(S.viewport),L.copy(S.scissor),q=S.scissorTest,de.viewport(N),de.scissor(L),de.setScissorTest(q),G=-1;return}else if(ye.__webglFramebuffer===void 0)U.setupRenderTarget(S);else if(ye.__hasExternalTextures)U.rebindTextures(S,_.get(S.texture).__webglTexture,_.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ve=S.depthTexture;if(ye.__boundDepthTexture!==Ve){if(Ve!==null&&_.has(Ve)&&(S.width!==Ve.image.width||S.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(S)}}const Le=S.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Me=!0);const Oe=_.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Oe[k])?Z=Oe[k][K]:Z=Oe[k],W=!0):S.samples>0&&U.useMultisampledRTT(S)===!1?Z=_.get(S).__webglMultisampledFramebuffer:Array.isArray(Oe)?Z=Oe[K]:Z=Oe,N.copy(S.viewport),L.copy(S.scissor),q=S.scissorTest}else N.copy(X).multiplyScalar(we).floor(),L.copy(J).multiplyScalar(we).floor(),q=me;if(K!==0&&(Z=ql),de.bindFramebuffer(I.FRAMEBUFFER,Z)&&de.drawBuffers(S,Z),de.viewport(N),de.scissor(L),de.setScissorTest(q),W){const ye=_.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,ye.__webglTexture,K)}else if(Me){const ye=k;for(let Le=0;Le<S.textures.length;Le++){const Oe=_.get(S.textures[Le]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Le,Oe.__webglTexture,K,ye)}}else if(S!==null&&K!==0){const ye=_.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ye.__webglTexture,K)}G=-1},this.readRenderTargetPixels=function(S,k,K,Z,W,Me,Ce,ye=0){if(!(S&&S.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=_.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){de.bindFramebuffer(I.FRAMEBUFFER,Le);try{const Oe=S.textures[ye],Ve=Oe.format,ke=Oe.type;if(!st.textureFormatReadable(Ve)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(ke)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-Z&&K>=0&&K<=S.height-W&&(S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ye),I.readPixels(k,K,Z,W,fe.convert(Ve),fe.convert(ke),Me))}finally{const Oe=O!==null?_.get(O).__webglFramebuffer:null;de.bindFramebuffer(I.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(S,k,K,Z,W,Me,Ce,ye=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=_.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le)if(k>=0&&k<=S.width-Z&&K>=0&&K<=S.height-W){de.bindFramebuffer(I.FRAMEBUFFER,Le);const Oe=S.textures[ye],Ve=Oe.format,ke=Oe.type;if(!st.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Qe),I.bufferData(I.PIXEL_PACK_BUFFER,Me.byteLength,I.STREAM_READ),S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ye),I.readPixels(k,K,Z,W,fe.convert(Ve),fe.convert(ke),0);const ut=O!==null?_.get(O).__webglFramebuffer:null;de.bindFramebuffer(I.FRAMEBUFFER,ut);const xt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Pc(I,xt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Qe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Me),I.deleteBuffer(Qe),I.deleteSync(xt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,k=null,K=0){const Z=Math.pow(2,-K),W=Math.floor(S.image.width*Z),Me=Math.floor(S.image.height*Z),Ce=k!==null?k.x:0,ye=k!==null?k.y:0;U.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,K,0,0,Ce,ye,W,Me),de.unbindTexture()};const Zl=I.createFramebuffer(),Kl=I.createFramebuffer();this.copyTextureToTexture=function(S,k,K=null,Z=null,W=0,Me=null){Me===null&&(W!==0?(sr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=W,W=0):Me=0);let Ce,ye,Le,Oe,Ve,ke,Qe,ut,xt;const vt=S.isCompressedTexture?S.mipmaps[Me]:S.image;if(K!==null)Ce=K.max.x-K.min.x,ye=K.max.y-K.min.y,Le=K.isBox3?K.max.z-K.min.z:1,Oe=K.min.x,Ve=K.min.y,ke=K.isBox3?K.min.z:0;else{const Zt=Math.pow(2,-W);Ce=Math.floor(vt.width*Zt),ye=Math.floor(vt.height*Zt),S.isDataArrayTexture?Le=vt.depth:S.isData3DTexture?Le=Math.floor(vt.depth*Zt):Le=1,Oe=0,Ve=0,ke=0}Z!==null?(Qe=Z.x,ut=Z.y,xt=Z.z):(Qe=0,ut=0,xt=0);const ht=fe.convert(k.format),He=fe.convert(k.type);let lt;k.isData3DTexture?(U.setTexture3D(k,0),lt=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(U.setTexture2DArray(k,0),lt=I.TEXTURE_2D_ARRAY):(U.setTexture2D(k,0),lt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const ot=I.getParameter(I.UNPACK_ROW_LENGTH),Wt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),hi=I.getParameter(I.UNPACK_SKIP_PIXELS),Xt=I.getParameter(I.UNPACK_SKIP_ROWS),Vi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,vt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Oe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ve),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ke);const ft=S.isDataArrayTexture||S.isData3DTexture,zt=k.isDataArrayTexture||k.isData3DTexture;if(S.isDepthTexture){const Zt=_.get(S),Ft=_.get(k),kt=_.get(Zt.__renderTarget),Qr=_.get(Ft.__renderTarget);de.bindFramebuffer(I.READ_FRAMEBUFFER,kt.__webglFramebuffer),de.bindFramebuffer(I.DRAW_FRAMEBUFFER,Qr.__webglFramebuffer);for(let $n=0;$n<Le;$n++)ft&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_.get(S).__webglTexture,W,ke+$n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_.get(k).__webglTexture,Me,xt+$n)),I.blitFramebuffer(Oe,Ve,Ce,ye,Qe,ut,Ce,ye,I.DEPTH_BUFFER_BIT,I.NEAREST);de.bindFramebuffer(I.READ_FRAMEBUFFER,null),de.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||_.has(S)){const Zt=_.get(S),Ft=_.get(k);de.bindFramebuffer(I.READ_FRAMEBUFFER,Zl),de.bindFramebuffer(I.DRAW_FRAMEBUFFER,Kl);for(let kt=0;kt<Le;kt++)ft?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Zt.__webglTexture,W,ke+kt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Zt.__webglTexture,W),zt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.__webglTexture,Me,xt+kt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ft.__webglTexture,Me),W!==0?I.blitFramebuffer(Oe,Ve,Ce,ye,Qe,ut,Ce,ye,I.COLOR_BUFFER_BIT,I.NEAREST):zt?I.copyTexSubImage3D(lt,Me,Qe,ut,xt+kt,Oe,Ve,Ce,ye):I.copyTexSubImage2D(lt,Me,Qe,ut,Oe,Ve,Ce,ye);de.bindFramebuffer(I.READ_FRAMEBUFFER,null),de.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else zt?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(lt,Me,Qe,ut,xt,Ce,ye,Le,ht,He,vt.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(lt,Me,Qe,ut,xt,Ce,ye,Le,ht,vt.data):I.texSubImage3D(lt,Me,Qe,ut,xt,Ce,ye,Le,ht,He,vt):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Me,Qe,ut,Ce,ye,ht,He,vt.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Me,Qe,ut,vt.width,vt.height,ht,vt.data):I.texSubImage2D(I.TEXTURE_2D,Me,Qe,ut,Ce,ye,ht,He,vt);I.pixelStorei(I.UNPACK_ROW_LENGTH,ot),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Wt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,hi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Vi),Me===0&&k.generateMipmaps&&I.generateMipmap(lt),de.unbindTexture()},this.initRenderTarget=function(S){_.get(S).__webglFramebuffer===void 0&&U.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?U.setTextureCube(S,0):S.isData3DTexture?U.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?U.setTexture2DArray(S,0):U.setTexture2D(S,0),de.unbindTexture()},this.resetState=function(){E=0,H=0,O=null,de.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const Gi="#005eb8";function si(i,e,t){const n=e.split(/\s+/),r=[];let s="";for(const a of n){const o=s?`${s} ${a}`:a;i.measureText(o).width>t&&s?(r.push(s),s=a):s=o}return s&&r.push(s),r}function er(i,e,t){if(i.measureText(e).width<=t)return e;let n=e;for(;n.length>1&&i.measureText(`${n}…`).width>t;)n=n.slice(0,-1);return`${n}…`}function pt(i){const e=document.createElement("canvas");e.width=i.widthPx,e.height=i.heightPx;const t=e.getContext("2d"),n=Math.round(i.widthPx*.05),r=i.align??"left",s=r==="center"?i.widthPx/2:n;t.fillStyle=i.background??Gi,t.fillRect(0,0,e.width,e.height),t.fillStyle=i.color??"#ffffff",t.textAlign=r,t.textBaseline="top";let a=n;const o=i.titleSize??Math.round(i.heightPx*.28);t.font=`bold ${o}px Arial`;for(const c of si(t,i.title,i.widthPx-n*2))t.fillText(c,s,a),a+=o*1.15;if(i.subtitle){const c=i.subtitleSize??Math.round(o*.55);t.font=`${c}px Arial`,t.globalAlpha=.85;for(const u of si(t,i.subtitle,i.widthPx-n*2))t.fillText(u,s,a),a+=c*1.2;t.globalAlpha=1}if(i.body){a+=n*.5;let c=i.bodySize??Math.round(o*.45);if(i.fitBody){const u=i.footer?Math.round(o*.32)*2.6+n:n,h=i.heightPx-a-u;for(;c>16&&(t.font=`${c}px Arial`,!(si(t,i.body,i.widthPx-n*2).length*c*1.3<=h));)c-=2}t.font=`${c}px Arial`;for(const u of si(t,i.body,i.widthPx-n*2))t.fillText(u,s,a),a+=c*1.3}if(i.footer){const c=Math.round((i.titleSize??i.heightPx*.28)*.32);t.font=`${c}px Arial`,t.globalAlpha=.72;let u=i.heightPx-n;const h=si(t,i.footer,i.widthPx-n*2).reverse();for(const f of h)u-=c*1.25,t.fillText(f,s,u);t.globalAlpha=1}const l=new vn(e);return l.anisotropy=4,l.colorSpace=mt,l}const el="#009639";function xm(i,e,t){const n=document.createElement("canvas");n.width=620,n.height=810;const r=n.getContext("2d");r.fillStyle="#fbfbf8",r.fillRect(0,0,620,810),r.fillStyle=e,r.fillRect(0,0,620,92),r.fillStyle="#ffffff",r.font="bold 46px Arial",r.textBaseline="middle",r.fillText(i,30,48),r.textBaseline="top",r.fillStyle="#20262b",r.font="34px Arial";let s=130;for(const o of si(r,t,560))if(r.fillText(o,30,s),s+=46,s>770)break;const a=new vn(n);return a.anisotropy=4,a.colorSpace=mt,a}function vm(i){const e=document.createElement("canvas");e.width=620,e.height=290;const t=e.getContext("2d");t.fillStyle="#e9e3d0",t.fillRect(0,0,620,290),t.strokeStyle="#8b8672",t.lineWidth=6,t.strokeRect(8,8,604,274),t.fillStyle="#6c6753",t.font="26px Arial",t.fillText("formerly signposted as",28,34),t.fillStyle="#3a382f";let n=88;for(const s of i.slice(0,3)){t.font="bold 44px Arial",t.fillText(s,28,n);const a=t.measureText(s).width;t.strokeStyle="#7d2a2a",t.lineWidth=5,t.beginPath(),t.moveTo(24,n+2),t.lineTo(32+a,n-6),t.stroke(),n+=64}const r=new vn(e);return r.colorSpace=mt,r}function Vl(i){const e=document.createElement("canvas"),t=640,n=460;e.width=t,e.height=n;const r=e.getContext("2d");let s=i%2147483646+1;const a=()=>(s=s*16807%2147483647)/2147483647,o=[["#e8e3d4","#41668c","#c4a35a","#7a4b3a","#5d7a76"],["#ece7dc","#6c8c5f","#c96f4a","#3d4a52","#c4b57a"],["#e6e2d8","#8a5a74","#5a7d8a","#c9a35a","#4a5747"]],l=o[i%o.length];r.fillStyle=l[0],r.fillRect(0,0,t,n);const c=5+Math.floor(a()*5);for(let h=0;h<c;h++)if(r.fillStyle=l[1+Math.floor(a()*(l.length-1))],r.globalAlpha=.75+a()*.25,a()<.45)r.beginPath(),r.arc(a()*t,a()*n,40+a()*100,0,Math.PI*(.7+a()*1.3)),r.lineWidth=14+a()*30,r.strokeStyle=r.fillStyle,r.stroke();else{const f=40+a()*150;r.fillRect(a()*(t-f),a()*(n-100),f,50+a()*160)}r.globalAlpha=1;const u=new vn(e);return u.colorSpace=mt,u}function Xr(i,e){const t=document.createElement("canvas");t.width=512,t.height=150;const n=t.getContext("2d");n.fillStyle="#f5f4ef",n.fillRect(0,0,512,150),n.fillStyle="#20262b",n.font="bold 34px Arial",n.fillText(er(n,i,470),22,26),n.font="24px Arial",n.globalAlpha=.75;let r=78;for(const a of si(n,e,470).slice(0,2))n.fillText(a,22,r),r+=32;n.globalAlpha=1;const s=new vn(t);return s.colorSpace=mt,s}function Wl(i){const e=Math.round(i.widthPx*.035),t=Math.round(i.heightPx*.075);let n=e+t*1.25;i.subtitle&&(n+=t*.8),n+=e*.4;const r=n;n+=e*.6;const s=i.columns??1,a=(i.widthPx-e*2-e*(s-1))/s,o=i.rowSize??Math.round(t*.62),l=o*1.55,c=Math.max(1,Math.floor((i.heightPx-n-e)/l));return{pad:e,titleSize:t,top:n,ruleY:r,columns:s,colWidth:a,rowSize:o,rowH:l,rowsPerCol:c}}function wa(i,e){const t=Wl(i),n=[];for(let r=0;r<e;r++){const s=Math.floor(r/t.rowsPerCol);if(s>=t.columns){n.push(null);continue}const a=t.pad+s*(t.colWidth+t.pad),o=t.top+r%t.rowsPerCol*t.rowH;n.push([a/i.widthPx,1-(o+t.rowH)/i.heightPx,(a+t.colWidth)/i.widthPx,1-o/i.heightPx])}return n}function tr(i){const e=document.createElement("canvas");e.width=i.widthPx,e.height=i.heightPx;const t=e.getContext("2d"),n=Wl(i),r=n.pad;t.fillStyle=i.background??Gi,t.fillRect(0,0,e.width,e.height),t.textBaseline="top",t.textAlign="left";const s=n.titleSize;t.fillStyle="#ffffff",t.font=`bold ${s}px Arial`,t.fillText(er(t,i.title,i.widthPx-r*2),r,r),i.subtitle&&(t.font=`${Math.round(s*.55)}px Arial`,t.globalAlpha=.85,t.fillText(er(t,i.subtitle,i.widthPx-r*2),r,r+s*1.25),t.globalAlpha=1),t.strokeStyle="rgba(255,255,255,0.5)",t.lineWidth=Math.max(2,i.heightPx*.004),t.beginPath(),t.moveTo(r,n.ruleY),t.lineTo(i.widthPx-r,n.ruleY),t.stroke();const a=n.top,o=n.columns,l=n.colWidth,c=n.rowSize,u=n.rowH,h=n.rowsPerCol;i.rows.forEach((p,x)=>{const v=Math.floor(x/h);if(v>=o)return;const m=r+v*(l+r),d=a+x%h*u;let C=m;p.chip&&(t.fillStyle=p.chip,t.fillRect(m,d+c*.1,c*.8,c*.8),C+=c*1.2),t.fillStyle="#ffffff",t.font=`${p.strong?"bold ":""}${c}px Arial`;const R=er(t,p.text,l-(C-m));if(t.fillText(R,C,d),p.sub){const y=t.measureText(R).width;t.font=`${Math.round(c*.78)}px Arial`,t.globalAlpha=.75,t.fillText(er(t,`  ${p.sub}`,l-(C-m)-y),C+y,d+c*.15),t.globalAlpha=1}});const f=new vn(e);return f.anisotropy=4,f.colorSpace=mt,f}function Ra(i,e=1.36){const t=document.createElement("canvas");t.width=1088,t.height=Math.round(1088/e);const n=t.getContext("2d");n.fillStyle="#3b4046",n.fillRect(0,0,t.width,t.height);const r=new vn(t);r.colorSpace=mt,r.anisotropy=4,r.generateMipmaps=!1,r.minFilter=St;const s=new Image;return s.onload=()=>{const a=Math.max(t.width/s.naturalWidth,t.height/s.naturalHeight),o=s.naturalWidth*a,l=s.naturalHeight*a;n.drawImage(s,(t.width-o)/2,(t.height-l)/2,o,l),r.needsUpdate=!0},s.src=i,r}class Mm{entries=[];placeholder=new gn({color:new $e(Gi)});register(e,t,n){e.material=this.placeholder,this.entries.push({pos:t.clone(),mesh:e,make:n,ready:!1})}update(e,t=55,n=120,r=8){const s=[];for(const a of this.entries){const o=a.pos.distanceTo(e);if(a.mesh.visible=o<n,!a.ready&&o<t)s.push({e:a,d:o});else if(a.ready&&o>n){const l=a.mesh.material;l.map?.dispose(),l.dispose(),a.mesh.material=this.placeholder,a.ready=!1}}s.sort((a,o)=>a.d-o.d);for(const{e:a}of s.slice(0,r))a.mesh.material=new gn({map:a.make()}),a.ready=!0}get count(){return this.entries.length}get readyCount(){return this.entries.filter(e=>e.ready).length}}function Sm(i,e,t,n,r,s="sign"){const a=new Pt(new ki(e,t),new gn);return a.name=s,i.register(a,n,r),a}const bm={event:"#41b6e6","mental-object":"#78be20",stative:"#ed8b00","time-interval":"#8a1538",role:"#00a499","physical-object":"#ffb81c",resources:"#7c2855"},Xn=i=>bm[i]??"#425563";function Bi(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new xn;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const h=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let x=0;x<p.count;++x)h.push(p.getX(x)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(const u in s){const h=tl(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const p=[];for(let v=0;v<a[u].length;++v)p.push(a[u][v][f]);const x=tl(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(x)}}return l}function tl(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),o=new Jt(a,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let f=0,p=u.count;f<p;f++)for(let x=0;x<t;x++){const v=u.getComponent(f,x);o.setComponent(f+h,x,v)}}else a.set(u.array,l);l+=u.count*t}return r!==void 0&&(o.gpuType=r),o}function Em(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d");e.fillStyle="#89928b",e.fillRect(0,0,256,256);let t=42;const n=()=>(t=t*16807%2147483647)/2147483647,r=["#9aa39b","#78817a","#a7ada3","#6e766f","#93856f"];for(let a=0;a<1400;a++){e.fillStyle=r[Math.floor(n()*r.length)],e.globalAlpha=.35+n()*.4;const o=1+n()*2.6;e.fillRect(n()*256,n()*256,o,o)}e.globalAlpha=1;const s=new vn(i);return s.wrapS=s.wrapT=nr,s.colorSpace=mt,s.anisotropy=4,s}function ym(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d");e.fillStyle="#f5f6f3",e.fillRect(0,0,256,256);let t=7;const n=()=>(t=t*16807%2147483647)/2147483647;e.fillStyle="#e8eae4";for(let s=0;s<600;s++)e.globalAlpha=.35+n()*.3,e.fillRect(n()*256,n()*256,1.6,1.6);e.globalAlpha=1,e.strokeStyle="#cfd3cb",e.lineWidth=3;for(const s of[0,128,256])e.beginPath(),e.moveTo(s,0),e.lineTo(s,256),e.moveTo(0,s),e.lineTo(256,s),e.stroke();const r=new vn(i);return r.wrapS=r.wrapT=nr,r.repeat.set(1/1.2,1/1.2),r.colorSpace=mt,r.anisotropy=4,r}const he={floor:new cu({map:Em(),shininess:60,specular:new $e(3026478)}),wall:new yt({color:14541782}),endWall:new yt({color:12175549}),ceiling:new yt({map:ym()}),door:new yt({color:9083520}),liftDoor:new yt({color:12042182}),stair:new yt({color:12174013}),stairDark:new yt({color:3817799}),rail:new yt({color:8358806}),oak:new yt({color:9071173}),glass:new yt({color:3095104}),steel:new yt({color:12831182}),led:new gn({color:16251391}),chair:new yt({color:5140074}),daylight:new gn({color:14214894})};function Tm(i,e,t,n){const r=i.attributes.uv,s=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let a=0;a<6;a++){const[o,l]=s[a];for(let c=0;c<4;c++){const u=a*4+c;r.setXY(u,r.getX(u)*o,r.getY(u)*l)}}r.needsUpdate=!0}function ji(i,e){if(!i.length)return null;const t=i.map(s=>{const a=new Fn(s.w,s.h,s.d);return a.translate(s.x,s.y,s.z),a}),n=Bi(t);t.forEach(s=>s.dispose());const r=new Pt(n,e);return r.matrixAutoUpdate=!1,r}const Lr={skirtH:.152,railH:.152,railCentre:.95},Ca=new yt({vertexColors:!0}),nl=["#c98d64","#8d5a3c","#e3b498","#6b4a30","#d9a37e"],il=["#2e2620","#5b4632","#8c8c8c","#d9d3c5","#141414"];function $a(i){const e=i();if(e<.25)return{top:"#f2f3ef",legs:"#f2f3ef",cap:"#ffffff"};if(e<.31)return{top:"#20375c",legs:"#20375c",cap:"#ffffff"};if(e<.43)return{top:"#eeefe9",legs:"#565b62"};if(e<.55)return{top:"#68727d",legs:"#4c5257"};const t=["#7a8f6a","#c0a052","#7c5866","#5f7484","#96694f"],n=["#55504a","#3f464d","#6a5d4f","#44403a"];return{top:t[Math.floor(i()*t.length)],legs:n[Math.floor(i()*n.length)]}}function cr(i){let e=i%2147483646+1;for(let t=0;t<3;t++)e=e*16807%2147483647;return()=>(e=e*16807%2147483647)/2147483647}function Rt(i,e,t,n,r,s,a){const o=new Fn(i,e,t);o.translate(n,r,s);const l=new $e(a),c=o.attributes.position.count,u=new Float32Array(c*3);for(let h=0;h<c;h++)u[h*3]=l.r,u[h*3+1]=l.g,u[h*3+2]=l.b;return o.setAttribute("color",new Jt(u,3)),o}function qa(i,e,t,n){const r=nl[Math.floor(i()*nl.length)],s=e.cap??il[Math.floor(i()*il.length)],a=[Rt(.2,.22,.2,0,t,n,r),Rt(.21,.08,.21,0,t+.15,n-.01,s)];return e.cap&&a.push(Rt(.24,.03,.24,0,t+.2,n-.01,e.cap)),a}function Am(i){const e=cr(i),t=$a(e),n=[Rt(.09,.44,.11,-.09,.22,.17,t.legs),Rt(.09,.44,.11,.09,.22,.17,t.legs),Rt(.1,.13,.4,-.09,.5,.03,t.legs),Rt(.1,.13,.4,.09,.5,.03,t.legs),Rt(.32,.52,.2,0,.82,-.08,t.top),Rt(.08,.4,.1,-.21,.86,-.05,t.top),Rt(.08,.4,.1,.21,.86,-.05,t.top),...qa(e,t,1.2,-.06)],r=Bi(n);return n.forEach(s=>s.dispose()),r}function wm(i){const e=cr(i),t=$a(e),n=[Rt(.1,.78,.12,-.09,.39,0,t.legs),Rt(.1,.78,.12,.09,.39,0,t.legs),Rt(.32,.52,.2,0,1.04,0,t.top),Rt(.08,.52,.1,-.21,1,0,t.top),Rt(.08,.52,.1,.21,1,0,t.top),...qa(e,t,1.42,0)],r=Bi(n);return n.forEach(s=>s.dispose()),r}class Rm{constructor(e,t,n){this.a=e,this.b=t;const r=cr(n),s=$a(r);this.len=e.distanceTo(t),this.speed=1+r()*.5,this.s=r()*this.len,this.dir=r()<.5?1:-1;const a=(h,f,p)=>{const x=new Pt(h,Ca);return x.position.set(f,p,0),this.group.add(x),x},o=()=>Rt(.1,.78,.12,0,-.39,0,s.legs),l=()=>Rt(.08,.52,.1,0,-.26,0,s.top);this.legL=a(o(),-.09,.78),this.legR=a(o(),.09,.78),this.armL=a(l(),-.21,1.28),this.armR=a(l(),.21,1.28);const c=[Rt(.32,.52,.2,0,1.04,0,s.top),...qa(r,s,1.42,0)],u=Bi(c);c.forEach(h=>h.dispose()),this.group.add(new Pt(u,Ca)),this.place()}a;b;group=new Cn;legL;legR;armL;armR;s;dir=1;pause=0;phase=0;len;speed;place(){const e=this.s/this.len;this.group.position.lerpVectors(this.a,this.b,e);const t=(this.b.x-this.a.x)*this.dir,n=(this.b.z-this.a.z)*this.dir;this.group.rotation.y=Math.atan2(t,n)}update(e){if(this.pause>0){this.pause-=e;for(const n of[this.legL,this.legR,this.armL,this.armR])n.rotation.x*=Math.max(0,1-e*6);return}this.s+=this.speed*e*this.dir,(this.s<=0||this.s>=this.len)&&(this.s=Math.max(0,Math.min(this.len,this.s)),this.dir*=-1,this.pause=1.2+this.phase%1.3),this.phase+=this.speed*e*3.4;const t=Math.sin(this.phase)*.5;this.legL.rotation.x=t,this.legR.rotation.x=-t,this.armL.rotation.x=-t*.6,this.armR.rotation.x=t*.6,this.place(),this.group.position.y+=Math.abs(Math.sin(this.phase))*.025}}class Cm{constructor(e,t,n){this.zc=n;const r=new Fn(.05,2.06,.5),s=he.liftDoor;this.leafA=new Pt(r,s),this.leafB=new Pt(r.clone(),s),this.leafA.position.set(t,1.03,n-.25),this.leafB.position.set(t,1.03,n+.25),e.add(this.leafA,this.leafB)}zc;leafA;leafB;openT=0;target=0;update(e){this.openT+=(this.target-this.openT)*Math.min(1,e*5);const t=this.openT*.48;this.leafA.position.z=this.zc-.25-t,this.leafB.position.z=this.zc+.25+t}get openness(){return this.openT}}const rl=i=>i.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""),F={CORRIDOR_W:3,ROOM_H:3,STOREY:4,DOOR_W:1.2,DOOR_H:2.1,DOOR_SPACING:2,ENTRY:2.2,END_ZONE:2.6,NOTICE_SPACING:1.25,LOBBY_W:7,LOBBY_D:7,LANDING_Z0:7,LANDING_Z1:10,STREET_Z0:7,STREET_Z1:11,STREET_H:4,STRIP:8.2,STAIR_SLOT:3.6,WING_GAP:12,PIT_X0:-3.5,PIT_X1:-.7,PIT_Z0:1.2,PIT_Z1:5.5},Pm=(i,e,t=0,n=0)=>{const r=Math.max(t,n)*F.NOTICE_SPACING;return F.ENTRY+Math.max(i,e,1)*F.DOOR_SPACING+(r?r+.4:0)+F.END_ZONE};function Im(i){const e=new Map(i.classes.map(g=>[g.id,g])),t={};for(const g of i.classes)t[g.id]=[];for(const g of i.classes)g.supers.length&&t[g.supers[0]]?.push(g.id);for(const g of i.classes){const E=new Set(t[g.id]);t[g.id]=g.subs.filter(H=>E.has(H))}const n=new Map;function r(g){if(n.has(g))return n.get(g);const E=t[g],H=E.filter(L=>t[L].length),O=[];let G=H.reduce((L,q)=>L+a(q),0),$=0;for(const L of E)t[L].length||($<G?(O.push(L),$+=a(L)):(H.push(L),G+=a(L)));const N={south:H,north:O,southSum:G,northSum:$};return n.set(g,N),N}const s=new Map;function a(g){if(s.has(g))return s.get(g);const E=t[g];let H=F.STRIP;if(E.length){const{southSum:O,northSum:G}=r(g);H=Math.max(F.STRIP,F.STAIR_SLOT+Math.max(O,G))}return s.set(g,H),H}const o={},l={};function c(g,E,H,O=!1){const G=e.get(g),$=t[g],N=$.length?E+.2-F.PIT_X0:E+F.STRIP/2;if(o[g]={x:N,level:H,y:-4*H,flip:O,corridorLen:Pm(G.out.length,G.in.length,G.notes.length,G.examples.length)},$.length){const{south:L,north:q,southSum:oe,northSum:ee}=r(g);let re=E+F.STAIR_SLOT;for(const Ee of L)c(Ee,re,H+1,!1),re+=a(Ee);let ve=E+F.STAIR_SLOT;for(const Ee of q)c(Ee,ve,H+1,!0),ve+=a(Ee);const we=new Set($);l[g]={parentId:g,level:H+1,y:-4*(H+1),x0:E+.2,x1:E+F.STAIR_SLOT+Math.max(oe,ee,5),stairX:N+(F.PIT_X0+F.PIT_X1)/2,homeChildIds:$,southIds:L,northIds:q,portalChildIds:G.subs.filter(Ee=>!we.has(Ee))}}}const u=g=>g.rootIds.reduce((E,H)=>E+a(H),0),h=i.wings.reduce((g,E)=>g+u(E),0);let f=0;const p=new Map;for(const g of i.wings){const E=f<h/2;p.set(g.key,E?"south":"north"),E&&(f+=u(g))}const x=[],v={south:6,north:6};for(const g of i.wings){const E=p.get(g.key),H=v[E];for(const O of g.rootIds)c(O,v[E],0),v[E]+=a(O);x.push({key:g.key,x0:H,x1:v[E],rootIds:g.rootIds,street:E}),v[E]+=F.WING_GAP}const m=Math.max(v.south,v.north)-F.WING_GAP+6;for(const g of x){if(g.street!=="north")continue;const E=g.x0+g.x1;for(const O of i.classes){if(O.wing!==g.key)continue;const G=o[O.id];G.x=E-G.x,G.flip=!G.flip,G.mirror=!0}const H=new Set(i.classes.filter(O=>O.wing===g.key).map(O=>O.id));for(const O of Object.values(l))H.has(O.parentId)&&([O.x0,O.x1]=[E-O.x1,E-O.x0],O.stairX=E-O.stairX,O.mirror=!0)}const d=[],C=[];for(const g of i.classes){const E=o[g.id];!E.mirror&&E.flip&&d.push(E),E.mirror&&!E.flip&&C.push(E)}let R=28;const y=2,T=F.CORRIDOR_W/2+.3,w=F.LOBBY_W/2+.15,P=(g,E,H,O)=>Math.abs(g.x-E.x)<H+O;for(const g of d)for(const E of C)g.level===E.level&&(P(g,E,T,T)&&(R=Math.max(R,12+g.corridorLen+E.corridorLen+y)),P(g,E,T,w)&&(R=Math.max(R,12+g.corridorLen+y)),P(g,E,w,T)&&(R=Math.max(R,12+E.corridorLen+y)));R=Math.ceil(R);const z=F.STREET_Z1+R+F.STREET_Z0+4;for(const g of i.classes){const E=o[g.id];E.mirror=!!E.mirror,E.oz=E.mirror?E.flip?z:z-17:E.flip?17:0}const M=[];for(const g of i.classes)for(const E of g.supers.slice(1))M.push({childId:g.id,parentId:E});return{areas:o,landings:l,homeChildren:t,nonPrimaryUp:M,wings:x,street:{x0:0,x1:m},loop:{C:R,K:z,xEnd:m,south:{z0:F.STREET_Z0,z1:F.STREET_Z1},north:{z0:F.STREET_Z1+R,z1:F.STREET_Z1+R+4},connectors:{west:[.2,3.8],east:[m-3.8,m-.2]}}}}const rn="__atrium",sl=(i,e)=>i===null&&e===null?"":`${i??0}..${e===-1?"*":e??"*"}`;class jr{constructor(e,t,n,r=!1){this.group=e,this.origin=t,this.signs=n,this.f=r?-1:1,e.rotation.y=r?Math.PI:0}group;origin;signs;colliders=[];walkables=[];trims=[];plates=[];glass=[];leds=[];seats=[];f;local(e,t,n){return new B(this.origin.x+this.f*e,this.origin.y+t,this.origin.z+this.f*n)}batches=new Map;box(e,t,n,r,s,a,o,l={solid:!0}){const c={w:e,h:t,d:n,x:s,y:a,z:o,worldUV:l.vinyl||l.worldUV},u=this.batches.get(r);u?u.push(c):this.batches.set(r,[c]);const h=this.origin.x+this.f*s,f=this.origin.z+this.f*o,p=new Ct(new B(h-e/2,this.origin.y+a-t/2,f-n/2),new B(h+e/2,this.origin.y+a+t/2,f+n/2));if(l.solid&&this.colliders.push(p),l.walkable&&this.walkables.push(p),l.trim)for(const x of l.trim)this.trimFace(x,e,t,n,s,a,o)}trimFace(e,t,n,r,s,a,o){const l=a-n/2,c=.05,u=e.startsWith("x")?{w:c,d:Math.max(.3,r-.1)}:{w:Math.max(.3,t-.1),d:c},h=c/2+.005,f=e==="x+"?s+t/2+h:e==="x-"?s-t/2-h:s,p=e==="z+"?o+r/2+h:e==="z-"?o-r/2-h:o;this.trims.push({...u,h:Lr.skirtH,x:f,y:l+Lr.skirtH/2,z:p},{...u,h:Lr.railH,x:f,y:l+Lr.railCentre,z:p})}led(e,t,n,r=.6,s=.6){this.leds.push({w:r,h:.035,d:s,x:e,y:n,z:t})}oakSpec(e){this.trims.push(e)}steelSpec(e){this.plates.push(e)}chairSpots=[];peopleGeos=[];sit(e,t,n,r,s){const a=Am(s);r===-1&&a.rotateY(Math.PI),a.translate(e,t,n),this.peopleGeos.push(a)}stand(e,t,n,r,s){const a=wm(s);a.rotateY(r),a.translate(e,t,n),this.peopleGeos.push(a)}chair(e,t,n,r=1){this.chairSpots.push({x:e,y:t,z:n,face:r});const s=t+.45;this.seats.push({w:.44,h:.06,d:.4,x:e,y:s,z:n}),this.seats.push({w:.44,h:.48,d:.05,x:e,y:s+.36,z:n-r*.19});for(const[a,o]of[[-.18,-.16],[.18,-.16],[-.18,.16],[.18,.16]])this.plates.push({w:.035,h:.44,d:.035,x:e+a,y:t+.22,z:n+o});this.colliders.push(new Ct().setFromPoints([this.local(e-.26,t,n-.26),this.local(e+.26,t+.95,n+.26)]))}doorFurniture(e,t,n,r){const a=e.startsWith("x"),o=a?{w:.02,d:.28}:{w:.28,d:.02},l=a?{w:.02,d:F.DOOR_W-.25}:{w:F.DOOR_W-.25,d:.02},c=a?{w:.02,d:.1}:{w:.1,d:.02},u=.06,h=e==="x+"?t+u:e==="x-"?t-u:t,f=e==="z+"?r+u:e==="z-"?r-u:r,p=.42;this.glass.push({...o,h:.42,x:h,y:n+1.5,z:f}),this.plates.push({...l,h:.25,x:h,y:n+.13,z:f}),this.plates.push({...c,h:.3,x:a?h:t+p,y:n+1.05,z:a?r+p:f})}populate(e,t){if(e!=="off"){const n=e==="full"?.4:.2,r=cr(t);for(const s of this.chairSpots)r()<n&&this.sit(s.x,s.y+.03,s.z,s.face,Math.floor(r()*99991))}if(this.peopleGeos.length){const n=Bi(this.peopleGeos);this.peopleGeos.forEach(s=>s.dispose());const r=new Pt(n,Ca);r.matrixAutoUpdate=!1,this.group.add(r),this.peopleGeos=[]}}finalize(){for(const[e,t]of this.batches){const n=t.map(a=>{const o=new Fn(a.w,a.h,a.d);return a.worldUV&&Tm(o,a.w,a.h,a.d),o.translate(a.x,a.y,a.z),o}),r=Bi(n);n.forEach(a=>a.dispose());const s=new Pt(r,e);s.matrixAutoUpdate=!1,this.group.add(s)}this.batches.clear();for(const e of[ji(this.trims,he.oak),ji(this.plates,he.steel),ji(this.glass,he.glass),ji(this.leds,he.led),ji(this.seats,he.chair)])e&&this.group.add(e)}sign(e,t,n,r,s,a,o,l){const c=Sm(this.signs,e,t,this.local(n,r,s),o,l);return c.position.set(n,r,s),c.rotation.y=a,c.matrixAutoUpdate=!1,c.updateMatrix(),this.group.add(c),c}}function Lm(i,e,t){const{byId:n,layout:r}=e,s=new Cn;s.name=`area:${i.label}`,s.position.copy(t);const a=r.areas[i.id].flip,o=a?Math.PI:0,l=new jr(s,t,e.signs,a),c=[],u=Xn(i.wing),h=r.areas[i.id].corridorLen,f=F.CORRIDOR_W,p=F.ROOM_H,x=F.LOBBY_W,v=F.LOBBY_D,m=r.landings[i.id],d=i.supers.length===0,C=-h/2;l.box(f,.1,h,he.floor,0,-.05,C,{walkable:!0,vinyl:!0}),l.box(f,.1,h,he.ceiling,0,p+.05,C,{worldUV:!0}),l.box(.15,p,h,he.wall,f/2+.075,p/2,C,{solid:!0,trim:["x-"]}),l.box(.15,p,h,he.wall,-f/2-.075,p/2,C,{solid:!0,trim:["x+"]}),l.box(f+.3,p,.15,he.endWall,0,p/2,-h-.075,{solid:!0,trim:["z+"]});for(let te=0;te<Math.floor(h/3);te++)l.led(0,-(te+.6)*3,p-.02,.35,1.3);m?(l.box(x/2-F.PIT_X1,.1,v,he.floor,(F.PIT_X1+x/2)/2,-.05,v/2,{walkable:!0,vinyl:!0}),l.box(F.PIT_X1-F.PIT_X0,.1,F.PIT_Z0,he.floor,(F.PIT_X0+F.PIT_X1)/2,-.05,F.PIT_Z0/2,{walkable:!0,vinyl:!0}),l.box(F.PIT_X1-F.PIT_X0,.1,v-F.PIT_Z1,he.floor,(F.PIT_X0+F.PIT_X1)/2,-.05,(F.PIT_Z1+v)/2,{walkable:!0,vinyl:!0})):l.box(x,.1,v,he.floor,0,-.05,v/2,{walkable:!0,vinyl:!0}),l.box(x,.1,v,he.ceiling,0,p+.05,v/2,{worldUV:!0}),l.box(.15,p,v,he.wall,x/2+.075,p/2,v/2,{solid:!0,trim:["x-"]}),l.box(.15,p,v,he.wall,-x/2-.075,p/2,v/2,{solid:!0,trim:["x+"]});const R=(x-f)/2;l.box(R,p,.15,he.wall,f/2+R/2,p/2,-.075,{solid:!0,trim:["z+","z-"]}),l.box(R,p,.15,he.wall,-2.5,p/2,-.075,{solid:!0,trim:["z+","z-"]}),l.box(2,p,.15,he.wall,-2.5,p/2,v+.075,{solid:!0,trim:["z-","z+"]}),l.box(2,p,.15,he.wall,2.5,p/2,v+.075,{solid:!0,trim:["z-","z+"]}),l.box(3,p-F.DOOR_H-.3,.15,he.wall,0,(p+F.DOOR_H+.3)/2,v+.075,{});for(const te of[-1.8,1.8])for(const Te of[2,5])l.led(te,Te,p-.02);const y=d?F.STREET_H:F.ROOM_H,T=d?2.7:2.4;for(const te of[1,-1])l.sign(1.6,.44,te*.015,T,v+1.35,te*Math.PI/2,()=>pt({widthPx:800,heightPx:220,title:i.label,subtitle:i.roomNumber?`Room ${i.roomNumber}`:`${i.wing} wing`,titleSize:62}),`hang:${i.label}:${te}`);for(const te of[-.6,.6])l.steelSpec({w:.03,h:y-T-.22,d:.03,x:te,y:(y+T+.22)/2,z:v+1.35});const w=new gn({color:new $e(u)});l.box(.18,.012,v+h,w,0,.012,(v-h)/2,{}),l.sign(2.6,.7,0,p-.5,.08,0,()=>pt({widthPx:1024,heightPx:276,title:i.label,subtitle:[i.roomNumber?`Room ${i.roomNumber}`:null,`${i.wing} wing · ${i.floor?`level −${i.floor}`:"ground"}`].filter(Boolean).join(" · "),titleSize:96}),`name:${i.label}`);const P=i.supers.map(te=>n.get(te)?.label??"?");l.sign(2.9,.62,0,F.DOOR_H+.55,v-.09,Math.PI,()=>pt({widthPx:1152,heightPx:246,title:d?"⌂ Hospital Street":`Stairs ↑ ${P[0]}`,subtitle:d?"reception · all wings":`landing · stairs at the west end${P.length>1?` · also: ${P.slice(1).join(", ")}`:""}`,titleSize:74}),`back:${i.label}`),l.sign(1.9,1.5,2.5,1.62,.01,0,()=>pt({widthPx:1024,heightPx:810,title:i.label,subtitle:[i.plural?`plural: ${i.plural}`:null,i.alsoKnownAs.length?`also: ${i.alsoKnownAs.join("; ")}`:null,i.roomNumber?`Room ${i.roomNumber}`:null].filter(Boolean).join(" · "),body:i.description??"Definition pending.",footer:i.source?`Source: ${i.source}`:void 0,fitBody:!0,titleSize:88,align:"left"}),`poster:${i.label}`),e.illustrations?.has(rl(i.label))&&(l.oakSpec({w:1.3,h:1.38,d:.05,x:-2.5,y:1.62,z:-.02}),l.sign(1.2,1.28,-2.5,1.62,.01,0,()=>Ra(`art/illustrations/${rl(i.label)}.jpg`,1.2/1.28),`illu:${i.label}`));const z=i.self.length;i.deprecated.length&&l.sign(.9,.42,-1.44,1.9,-1.4,Math.PI/2,()=>vm(i.deprecated),`old:${i.label}`);const M=Math.max(i.out.length,i.in.length,1)*F.DOOR_SPACING,g=-(F.ENTRY+M+.2),E=(te,Te)=>{const le=te.match(/(\d+)/);return le?`${Te} ${le[1]}`:Te};let H=0;const O=(te,Te,le,ze,I)=>{const et=te==="right"?1:-1,We=g-(Te+.5)*F.NOTICE_SPACING;l.oakSpec({w:.05,h:1.34,d:1.06,x:et*(f/2-.035),y:1.55,z:We}),l.sign(.94,1.22,et*(f/2-.075),1.55,We,et>0?-Math.PI/2:Math.PI/2,()=>xm(le,ze,I),`notice:${i.label}:${le}`),H++};i.notes.forEach((te,Te)=>O("left",Te,E(te.key,"Note"),Gi,te.text)),i.examples.forEach((te,Te)=>O("right",Te,E(te.key,"Example"),el,te.text));const G=i.notes.length-i.examples.length,$=Math.min(Math.abs(G),2);for(let te=0;te<$;te++){const Te=G>0?1:-1,le=(G>0?i.examples.length:i.notes.length)+te,ze=g-(le+.5)*F.NOTICE_SPACING,I=(i.id.charCodeAt(0)+i.id.charCodeAt(3)*31+te*7>>>0)%997,et=e.art.length?e.art[I%e.art.length]:null;l.oakSpec({w:.05,h:1.02,d:1.36,x:Te*(f/2-.035),y:1.68,z:ze}),l.sign(1.28,.94,Te*(f/2-.075),1.68,ze,Te>0?-Math.PI/2:Math.PI/2,()=>et?Ra(`art/${et.file}`):Vl(I),`print:${i.label}:${te}`),l.sign(.44,.13,Te*(f/2-.075),1.05,ze,Te>0?-Math.PI/2:Math.PI/2,()=>et?Xr(et.title,`${et.artist} · ${et.licence} · Wikimedia Commons`):Xr("Untitled study","Procedural print — placeholder"),`placard:${i.label}:${te}`)}l.chair(2.35,0,.42,1),l.chair(2.95,0,.42,1),l.chair(-2.35,0,.42,1),l.chair(-2.95,0,.42,1);const N=te=>-(F.ENTRY+(te+.5)*F.DOOR_SPACING),L=(te,Te,le,ze,I,et,We,st)=>{const de=te==="right"?1:-1,A=de*(f/2),_=N(Te);l.box(.08,F.DOOR_H,F.DOOR_W,he.door,A-de*.05,F.DOOR_H/2,_,{}),l.doorFurniture(de>0?"x-":"x+",A-de*.05,0,_),l.sign(1.5,.45,A-de*.09,F.DOOR_H+.45,_,de>0?-Math.PI/2:Math.PI/2,()=>pt({widthPx:768,heightPx:230,title:We,subtitle:st,titleSize:58}),`doorsign:${I}`),c.push({kind:le,areaId:i.id,elementId:ze,label:I,targetIds:[et],triggerPos:l.local(A-de*.45,0,_),radius:.75,halfX:.4,halfZ:.55,auto:!0,exitPos:l.local(A-de*1.35,0,_),exitYaw:(de>0?Math.PI/2:-Math.PI/2)+o})};i.out.forEach((te,Te)=>{const le=n.get(te.targetId)?.label??"?";L("right",Te,"door-out",te.elementId,te.label,te.targetId,`${te.label} ${sl(te.min,te.max)}`,`→ ${le}`)}),i.in.forEach((te,Te)=>{const le=n.get(te.sourceId)?.label??"?";L("left",Te,"door-in",te.elementId,te.label,te.sourceId,le,`${te.label} →`)});const q=te=>e.art.length?e.art[te%e.art.length]:null,oe=te=>(i.id.charCodeAt(1)*17+i.id.charCodeAt(5)*5+te*31>>>0)%997,ee=Math.max(i.out.length,i.in.length,1),re=(te,Te)=>{const le=te==="right"?1:-1;for(let ze=Te;ze<ee;ze+=2){const I=oe(ze*2+(le>0?1:0));Dn(l,q(I),I,le*(f/2-.075),1.68,N(ze),le>0?-Math.PI/2:Math.PI/2,`${i.label}:${te}:${ze}`)}};i.out.length<ee&&re("right",i.out.length),i.in.length<ee&&re("left",i.in.length);{const te=oe(99);Dn(l,q(te),te,f/2-.075,1.68,-1.15,-Math.PI/2,`${i.label}:entry`)}i.self.forEach((te,Te)=>{const le=f/2-.8-Te*(F.DOOR_W+.2);l.box(F.DOOR_W,F.DOOR_H,.08,he.door,le,F.DOOR_H/2,-h+.06,{}),l.doorFurniture("z+",le,0,-h+.06),l.sign(1.3,.4,le,F.DOOR_H+.4,-h+.07,0,()=>pt({widthPx:768,heightPx:236,title:`${te.label} ${sl(te.min,te.max)}`,subtitle:`→ ${i.label}`,titleSize:56}),`selfsign:${te.label}`),c.push({kind:"door-self",areaId:i.id,elementId:te.elementId,label:te.label,targetIds:[i.id],triggerPos:l.local(le,0,-h+.5),radius:.7,halfX:.55,halfZ:.45,auto:!0})}),z||(l.box(.08,F.DOOR_H,F.DOOR_W,he.door,0,F.DOOR_H/2,-h+.06,{}),l.doorFurniture("z+",0,0,-h+.06),l.sign(1.1,.34,0,F.DOOR_H+.35,-h+.07,0,()=>pt({widthPx:640,heightPx:198,title:"FIRE EXIT",subtitle:"emergency use only",background:el,titleSize:78,align:"center"}),`fire:${i.label}`));const ve=i.supers.length>0||i.subs.length>0;let we,Ee,Re;const X=[],J=[];{const te=Pa(i,n),Te=te.length?Math.max(...te.map(le=>le.level)):0;for(let le=Te;le>=1;le--)for(const ze of te.filter(I=>I.level===le)){const I=n.get(ze.id);X.push({text:`▲${le} ${I?.label??"?"}`,chip:Xn(I?.wing??"")}),J.push(ze.id)}X.push({text:`● ${i.label}`,strong:!0,chip:u}),J.push(null);for(const le of i.subs){const ze=n.get(le);X.push({text:`▼1 ${ze?.label??"?"}`,chip:Xn(ze?.wing??"")}),J.push(le)}X.push({text:"⌂ Reception"}),J.push(rn)}const me={widthPx:850,heightPx:750,title:ve?"Lift":"Exit",subtitle:i.label,rows:X,rowSize:X.length>10?30:38,columns:X.length>10?2:1},Fe=(()=>{const te=wa(me,X.length);return X.flatMap((Te,le)=>te[le]&&J[le]?[{rect:te[le],id:J[le],label:Te.text.replace(/^[▲▼●⌂]\S* ?/u,"")}]:[])})();let Ae;ve&&(l.box(.08,2.4,5.15-4.85,he.liftDoor,2+.04,2.4/2,(4.85+5.15)/2),l.box(.08,2.4,6.45-6.15,he.liftDoor,2+.04,2.4/2,(6.15+6.45)/2),l.box(.08,2.4-F.DOOR_H,1,he.liftDoor,2+.04,(2.4+F.DOOR_H)/2,5.65,{}),l.box(3.42-2,2.4,.08,he.liftDoor,2.71,2.4/2,4.85+.04),l.box(3.42-2,2.4,.08,he.liftDoor,2.71,2.4/2,6.45-.04),l.box(3.42-2,.06,6.45-4.85,he.liftDoor,2.71,2.4+.03,5.65,{}),l.led(2.71,5.65,2.4-.02,.5,.5),Re={doors:new Cm(s,2+.1,5.65),doorwayPos:l.local(2+.05,0,5.65)},l.steelSpec({w:.06,h:2.12,d:.09,x:2-.01,y:1.06,z:5.12}),l.steelSpec({w:.06,h:2.12,d:.09,x:2-.01,y:1.06,z:6.18}),l.steelSpec({w:.06,h:.09,d:1.15,x:2-.01,y:2.14,z:5.65}),l.steelSpec({w:.16,h:.02,d:1.05,x:2+.02,y:.012,z:5.65}),l.steelSpec({w:.03,h:.26,d:.16,x:2-.015,y:1.12,z:4.99}),l.sign(.1,.2,2-.035,1.12,4.99,-Math.PI/2,()=>pt({widthPx:64,heightPx:128,title:"▲",subtitle:"▼",titleSize:40,align:"center"}),`liftcall:${i.label}`),l.sign(.72,.24,2-.015,2.27,5.65,-Math.PI/2,()=>pt({widthPx:384,heightPx:128,title:"LIFT",subtitle:i.floor?`level −${i.floor}`:"ground",titleSize:56,align:"center"}),`liftind:${i.label}`),l.steelSpec({w:1.24,h:.05,d:.04,x:2.71+.04,y:.92,z:4.85+.13}),l.steelSpec({w:1.24,h:.05,d:.04,x:2.71+.04,y:.92,z:6.45-.13}),l.steelSpec({w:.04,h:.05,d:1.44,x:3.42-.13,y:.92,z:5.65}),l.sign(.42,.15,2.71+.35,2.02,4.85+.09,0,()=>pt({widthPx:336,heightPx:120,title:"MAX 8 PERSONS · 610 kg",titleSize:30,align:"center",background:"#e8e9e4",color:"#3a4046"}),`liftload:${i.label}`),l.sign(.4,.14,2.71-.2,1.78,6.45-.09,Math.PI,()=>pt({widthPx:320,heightPx:112,title:"NO SMOKING",titleSize:40,align:"center",background:"#f4f4f1",color:"#b3261e"}),`liftsmoke:${i.label}`),Ae=l.sign(.95,1.05,2.71-.08,1.3,4.85+.09,0,()=>tr(me),`liftcab:${i.label}`),we=l.local(2.71,0,5.65),Ee=Math.PI/2+o,c.push({kind:"lift",areaId:i.id,label:"Lift",targetIds:[],triggerPos:we.clone(),radius:.75,auto:!1,prompt:"E — Lift: select destination"}));const Je=l.sign(1.7,1.5,x/2-.09,1.7,3.1,-Math.PI/2,()=>tr(me),`liftboard:${i.label}`);let dt;if(ve&&(dt=[{kind:"lift",mesh:Je,cells:Fe}],Ae&&dt.push({kind:"lift",mesh:Ae,cells:Fe})),i.supers.slice(1).forEach((te,Te)=>{const le=n.get(te),ze=6.35-Te*1.15;l.box(.1,F.DOOR_H,1,he.door,-3.5+.06,F.DOOR_H/2,ze,{}),l.doorFurniture("x+",-3.5+.06,0,ze),l.sign(1.35,.42,-3.5+.1,F.DOOR_H+.4,ze,Math.PI/2,()=>pt({widthPx:768,heightPx:240,title:`Stairs ↑ ${le?.label??"?"}`,subtitle:`${le?.wing??"?"} wing`,titleSize:56}),`upportal:${le?.label}`),c.push({kind:"stair-up",areaId:i.id,label:`Stairs ↑ ${le?.label??"?"}`,targetIds:[te],triggerPos:l.local(-3.5+.5,0,ze),radius:.7,halfX:.45,halfZ:.55,auto:!0})}),m?Dm(i,l,c,e):i.subs.length&&i.subs.forEach((te,Te)=>{const le=n.get(te),ze=4.6-Te*1.15;l.box(.1,F.DOOR_H,1,he.door,-3.5+.06,F.DOOR_H/2,ze,{}),l.doorFurniture("x+",-3.5+.06,0,ze),l.sign(1.35,.42,-3.5+.1,F.DOOR_H+.4,ze,Math.PI/2,()=>pt({widthPx:768,heightPx:240,title:`↓ ${le?.label??"?"}`,subtitle:`homed in ${le?.wing??"?"} wing`,titleSize:56}),`downportal:${le?.label}`),c.push({kind:"stair-down",areaId:i.id,label:`Stairs ↓ ${le?.label??"?"}`,targetIds:[te],triggerPos:l.local(-3.5+.5,0,ze),radius:.7,halfX:.45,halfZ:.55,auto:!0})}),i.subs.length){const te=i.subs.map(Te=>n.get(Te)?.label??"?");l.sign(1.9,.85,-3.5+.09,2.45,3.3,Math.PI/2,()=>tr({widthPx:900,heightPx:400,title:"Stairs ↓",rows:te.map(Te=>({text:Te})),rowSize:te.length>6?34:44,columns:te.length>8?2:1}),`stairsdown:${i.label}`)}const Ke=[new Ct().setFromPoints([l.local(-x/2-.3,-.5,-.2),l.local(x/2+.3,2.5,v+.2)]),new Ct().setFromPoints([l.local(-f/2-.4,-.5,-h-.5),l.local(f/2+.4,2.5,0)])];if(m){const te=a?-1:1;Ke.push(new Ct().setFromPoints([l.local(F.PIT_X0-.2,-4-.5,F.PIT_Z0-.2),l.local(F.PIT_X1+.2,2.5,v+.2)]),new Ct().setFromPoints([new B(m.x0-.3,t.y-F.STOREY-.5,t.z+te*5.4),new B(m.x1+.3,t.y-F.STOREY+2.5,t.z+te*(F.LANDING_Z1+.3))]))}return l.populate(e.people,i.id.charCodeAt(0)*131+i.id.charCodeAt(4)*17+i.id.charCodeAt(8)>>>0),l.finalize(),{id:i.id,wc:i,label:i.label,group:s,colliders:l.colliders,walkables:l.walkables,interactables:c,spawnPos:l.local(0,0,4.6),spawnYaw:o,liftPos:we,liftYaw:Ee,lift:Re,boards:dt,notices:H,boxes:Ke}}function Dm(i,e,t,n){const{byId:r,layout:s}=n,a=s.landings[i.id],o=e.origin,l=F.STOREY,c=F.PIT_X1-F.PIT_X0,u=c/2-.1,h=F.PIT_X0+u/2,f=F.PIT_X1-u/2,p=.8,x=F.PIT_Z1-F.PIT_Z0-p,v=12,m=x/v;for(let N=0;N<v;N++){const L=-((N+1)*(l/2))/v;e.box(u,.09,m+.02,he.stair,h,L-.045,F.PIT_Z1-(N+.5)*m,{walkable:!0})}e.box(c,.1,p,he.stair,(F.PIT_X0+F.PIT_X1)/2,-l/2-.05,F.PIT_Z0+p/2,{walkable:!0});for(let N=0;N<v;N++){const L=-l/2-(N+1)*(l/2)/v;e.box(u,.09,m+.02,he.stair,f,L-.045,F.PIT_Z0+p+(N+.5)*m,{walkable:!0})}e.box(c,.1,F.LOBBY_D-F.PIT_Z1+.1,he.floor,(F.PIT_X0+F.PIT_X1)/2,-l-.05,(F.PIT_Z1+F.LOBBY_D)/2,{walkable:!0,vinyl:!0});const d=l+F.ROOM_H;e.box(.1,d,F.LOBBY_D-F.PIT_Z0,he.stairDark,F.PIT_X0-.05,-l+d/2-F.ROOM_H,(F.PIT_Z0+F.LOBBY_D)/2),e.box(.1,l,F.PIT_Z1-F.PIT_Z0,he.stairDark,F.PIT_X1+.05,-l/2,(F.PIT_Z0+F.PIT_Z1)/2),e.box(.1,l,F.LOBBY_D-F.PIT_Z1,he.stairDark,F.PIT_X1+.05,-l/2,(F.PIT_Z1+F.LOBBY_D)/2),e.box(c+.2,l,.1,he.stairDark,(F.PIT_X0+F.PIT_X1)/2,-l/2,F.PIT_Z0-.05),e.box(.09,l+.9,F.PIT_Z1-F.PIT_Z0-.8,he.rail,(F.PIT_X0+F.PIT_X1)/2,(.9-l)/2,(F.PIT_Z0+.8+F.PIT_Z1)/2),e.box(.08,.9,F.PIT_Z1-F.PIT_Z0,he.rail,F.PIT_X1+.04,.45,(F.PIT_Z0+F.PIT_Z1)/2),e.box(c,.9,.08,he.rail,(F.PIT_X0+F.PIT_X1)/2,.45,F.PIT_Z0-.04),e.box(u+.2,.9,.08,he.rail,f,.45,F.PIT_Z1+.04);const C=s.areas[i.id].flip?-1:1,R=N=>C*(N-o.x),y=-l,[T,w]=[R(a.x0),R(a.x1)].sort((N,L)=>N-L),P=w-T,z=(T+w)/2,M=(F.LANDING_Z0+F.LANDING_Z1)/2;e.box(P,.1,3,he.floor,z,y-.05,M,{walkable:!0,vinyl:!0}),e.box(P,.1,3,he.ceiling,z,y+F.ROOM_H+.05,M,{worldUV:!0}),e.box(.15,F.ROOM_H,3.3,he.wall,T-.075,y+F.ROOM_H/2,M,{solid:!0,trim:["x+"]}),e.box(.15,F.ROOM_H,3.3,he.wall,w+.075,y+F.ROOM_H/2,M,{solid:!0,trim:["x-"]});for(let N=0;N<Math.floor(P/3.5);N++)e.led(T+(N+.5)*3.5,M,y+F.ROOM_H-.02,.35,1.3);const g=N=>{const L=R(s.areas[N].x);return[L-F.LOBBY_W/2,L+F.LOBBY_W/2]},E=(N,L,q)=>{const oe=[],ee=[...q].sort((ve,we)=>ve[0]-we[0]);let re=T;for(const[ve,we]of ee)ve>re&&(e.box(ve-re,F.ROOM_H,.15,he.wall,(re+ve)/2,y+F.ROOM_H/2,N,{solid:!0,trim:[L]}),oe.push([re,ve])),re=Math.max(re,we);return w>re&&(e.box(w-re,F.ROOM_H,.15,he.wall,(re+w)/2,y+F.ROOM_H/2,N,{solid:!0,trim:[L]}),oe.push([re,w])),oe},H=a.northIds.map(g),O=E(F.LANDING_Z0-.075,"z+",[[F.PIT_X0,F.PIT_X1],...a.southIds.map(g)]);E(F.LANDING_Z1+.075,"z-",H);for(const[N,L]of O)if(!(L-N<4.5))for(let q=N+2.3;q<=L-2.3;q+=6.5){const oe=(Math.round(q*13)+i.id.charCodeAt(2)>>>0)%997;Dn(e,n.art.length?n.art[oe%n.art.length]:null,oe,q,y+1.7,F.LANDING_Z0+.01,0,`${i.label}:land:${Math.round(q)}`)}e.sign(2.4,.6,(F.PIT_X0+F.PIT_X1)/2,y+F.DOOR_H+.5,F.LANDING_Z1-.09,Math.PI,()=>pt({widthPx:1024,heightPx:256,title:`Stairs ↑ ${i.label}`,subtitle:`${i.wing} wing · ${i.floor?`level −${i.floor}`:"ground"}`,titleSize:72}),`landingup:${i.label}`);let G=F.PIT_X1+1.6;const $=N=>{for(const[L,q]of H)if(N>L-.85&&N<q+.85)return q+.95;return N};a.portalChildIds.forEach(N=>{const L=r.get(N);let q=$(G);for(;q!==G;)G=q,q=$(G);G=Math.min(G,w-1),q=G,G+=2,e.box(.08,F.DOOR_H,F.DOOR_W,he.door,q,y+F.DOOR_H/2,F.LANDING_Z1-.05,{}),e.doorFurniture("z-",q,y,F.LANDING_Z1-.05),e.sign(1.5,.45,q,y+F.DOOR_H+.45,F.LANDING_Z1-.09,Math.PI,()=>pt({widthPx:768,heightPx:230,title:`↓ ${L?.label??"?"}`,subtitle:`homed in ${L?.wing??"?"} wing`,titleSize:58}),`downportal:${L?.label}`),t.push({kind:"stair-down",areaId:i.id,label:`Stairs ↓ ${L?.label??"?"}`,targetIds:[N],triggerPos:e.local(q,-l,F.LANDING_Z1-.5),radius:.7,halfX:.55,halfZ:.45,auto:!0})});for(let N=0;N<3;N++){const L=w-.8-N*.6;if(L<G+.8)break;H.some(([q,oe])=>L>q-.45&&L<oe+.45)||e.chair(L,y,F.LANDING_Z1-.45,-1)}}function Dn(i,e,t,n,r,s,a,o){const l=Math.sin(a),c=Math.cos(a),u=Math.abs(l)>.5;i.oakSpec({w:u?.05:1.36,h:1.02,d:u?1.36:.05,x:n-l*.045,y:r,z:s-c*.045}),i.sign(1.28,.94,n,r,s,a,()=>e?Ra(`art/${e.file}`):Vl(t),`pic:${o}`),i.sign(.44,.13,n,r-.62,s,a,()=>e?Xr(e.title,`${e.artist} · ${e.licence} · Wikimedia Commons`):Xr("Untitled study","Procedural print — placeholder"),`picplacard:${o}`)}function Pa(i,e){const t=new Map;let n=[i.id],r=0;for(;n.length;){r++;const s=[];for(const a of n)for(const o of e.get(a)?.supers??[])t.has(o)||(t.set(o,r),s.push(o));n=s}return[...t].map(([s,a])=>({id:s,level:a}))}const ai="__theatre";function Um(i,e,t){const n=new Cn;n.name="area:theatre";const r=new jr(n,new B(0,0,0),i),s=-24,a=-4,o=20,l=33.5,c=(s+a)/2,u=(o+l)/2,h=4.5,f=5,p=1.7,x=.35,v=-f*x,m=v+.4,d=he.wall.clone(),C=he.ceiling.clone(),R=he.floor.clone(),y=he.led.clone(),T=new yt({color:2830648}),w=new yt({color:9264970}),P=new yt({color:6715727}),z=new yt({color:13623528,transparent:!0,opacity:.3}),M=[d,C,R,T].map(ee=>({m:ee,base:ee.color.clone()})),g=ee=>{for(const re of M)re.m.color.copy(re.base).multiplyScalar(ee?1:.3);y.color.set(ee?16251391:4212047)},E=-15;r.box(3,.1,5,he.floor,E,-.05,17.5,{walkable:!0,vinyl:!0}),r.box(3,.1,5,he.ceiling,E,3.05,17.5,{worldUV:!0});for(const[ee,re]of[[E-1.575,"x+"],[E+1.575,"x-"]]){r.box(.15,1,5,he.wall,ee,.5,17.5,{solid:!0,trim:[re]}),r.box(.08,1.7,5,z,ee,1.85,17.5,{solid:!0}),r.box(.15,.3,5,he.wall,ee,2.85,17.5,{});for(const ve of[16.2,17.5,18.8])r.steelSpec({w:.18,h:1.7,d:.07,x:ee,y:1.85,z:ve})}for(const ee of[16.4,18.6])r.led(E,ee,2.98);r.sign(2.6,.62,E,2.55,o-.09,Math.PI,()=>pt({widthPx:1152,heightPx:260,title:"Postgraduate Medical Centre",subtitle:"lecture theatre · seminars & presentations",titleSize:74}),"theatre-door");const H=h+2.4,O=h-H/2;r.box(.15,H,l-o,d,s-.075,O,u,{solid:!0}),r.box(.15,H,l-o,d,a+.075,O,u,{solid:!0}),r.box(a-s+.3,H,.15,d,c,O,l+.075,{solid:!0}),r.box(-16-s,h+.2,.15,d,(s+-16)/2,h/2-.1,o-.075,{solid:!0}),r.box(a- -14,h+.2,.15,d,(-14+a)/2,h/2-.1,o-.075,{solid:!0}),r.box(2,h-2.3,.15,d,E,(h+2.3)/2,o-.075,{}),r.box(a-s,.1,l-o,C,c,h+.05,u,{worldUV:!0});for(const ee of[s+.11,a-.11])r.box(.06,.8,l-o-3,he.daylight,ee,3.7,u,{});r.box(a-s,.1,2,R,c,-.05,o+1,{walkable:!0,vinyl:!0});for(let ee=0;ee<f;ee++){const re=-x*(ee+1),ve=o+2+p*ee;r.box(a-s,.1,p,R,c,re-.05,ve+p/2,{walkable:!0,vinyl:!0}),r.box(a-s,x,.06,T,c,re+x/2,ve+.03,{})}const G=o+2+p*f;r.box(a-s,.1,1,R,c,v-.05,G+.5,{walkable:!0,vinyl:!0}),r.box(17,.5,1.85,he.oak,c,m-.25,G+1+.925,{walkable:!0});for(let ee=0;ee<f;ee++){const re=-x*(ee+1),ve=o+2+p*ee+.9;for(let we=-22.8;we<=-16.45;we+=.62)r.chair(we,re,ve,1);for(let we=-13.55;we<=-5.2;we+=.62)r.chair(we,re,ve,1)}const $=l-.075;r.box(6.7,4.1,.06,T,c,.85,$-.035,{});const N=new gn({color:16777215}),L=new Pt(new ki(6,3.375),N);L.position.set(c,.84,$-.075),L.rotation.y=Math.PI,L.matrixAutoUpdate=!1,L.updateMatrix(),n.add(L),r.sign(5,.7,c,3.35,$-.08,Math.PI,()=>pt({widthPx:1600,heightPx:224,title:"Postgraduate Medical Centre",subtitle:"slides: ← → · PageUp/PageDown (clickers work) · or tap the screen",titleSize:76}),"proscenium"),r.box(.42,1.05,.42,he.oak,-17.5,m+.525,G+1.7,{solid:!0}),r.oakSpec({w:.62,h:.05,d:.5,x:-17.5,y:m+1.08,z:G+1.7}),r.steelSpec({w:.05,h:.3,d:.05,x:-17.28,y:m+1.25,z:G+1.62}),r.sign(1.7,.5,E,2.65,o+.085,0,()=>pt({widthPx:900,heightPx:240,title:"→ Reception",subtitle:"B returns to your last stop",titleSize:66}),"theatre-exit");const q=ee=>e.length?e[ee%e.length]:null;Dn(r,q(5),5,-19.5,1.7,o+.085,0,"theatre:r1"),Dn(r,q(11),11,-10.5,1.7,o+.085,0,"theatre:r2");for(const ee of[-20,c,-8])for(const re of[21.5,24.5,27.5,30.5])r.box(.6,.035,1.3,y,ee,h-.02,re,{});r.box(.12,7,l-o+.3,w,s-.21,1,u,{}),r.box(.12,7,l-o+.3,w,a+.21,1,u,{}),r.box(a-s+.7,7,.12,w,c,1,l+.21,{}),r.box(-16.6-(s-.35),7,.12,w,(s-.35+-16.6)/2,1,o-.21,{}),r.box(a+.35- -13.4,7,.12,w,(-13.4+a+.35)/2,1,o-.21,{}),r.box(3.2,1.3,.12,w,E,3.85,o-.21,{}),r.box(a-s+.9,.18,l-o+.9,w,c,h+.24,u,{});const oe=(ee,re,ve,we)=>r.box(re-ee,.06,we-ve,P,(ee+re)/2,-.09,(ve+we)/2,{});return oe(-30,s-.35,15.2,38),oe(a+.35,2,15.2,38),oe(s-.35,-16.7,15.2,o-.3),oe(-13.3,a+.35,15.2,o-.3),oe(s-.35,a+.35,l+.35,38),t!=="off"&&r.stand(-17.5,m,G+2.15,Math.PI,4271),r.populate(t,6101),r.finalize(),g(!0),{id:ai,wc:null,label:"Postgraduate Medical Centre",group:n,colliders:r.colliders,walkables:r.walkables,interactables:[],boards:[{kind:"screen",mesh:L,cells:[{rect:[0,0,.35,1],id:"prev",label:"previous slide"},{rect:[.35,0,1,1],id:"next",label:"next slide"}]}],spawnPos:new B(E,0,o+1.2),spawnYaw:Math.PI,boxes:[new Ct(new B(s-.3,-2.5,o-.3),new B(a+.3,h+.3,l+.3)),new Ct(new B(E-1.7,-.5,15),new B(E+1.7,3.2,o))],screen:L,setHouseLights:g,lecternPos:new B(-16.6,m,G+1.9),lecternYaw:0}}function Nm(i,e,t,n){const r=new Cn;r.name="area:atrium";const s=new jr(r,new B(0,0,0),e),a=-26,o=0,l=3,c=15,u=F.STREET_H,h=(a+o)/2,f=(l+c)/2;s.box(o-a,.1,c-l,he.floor,h,-.05,f,{walkable:!0,vinyl:!0}),s.box(o-a,.1,c-l,he.ceiling,h,u+.05,f,{worldUV:!0}),s.box(o-a+.3,1,.15,he.wall,h,.5,l-.075,{solid:!0,trim:["z+"]}),s.box(o-a+.3,1.7,.08,he.daylight,h,1.85,l-.075,{solid:!0}),s.box(o-a+.3,u-2.7,.15,he.wall,h,(u+2.7)/2,l-.075,{});for(let w=a+2;w<o-.5;w+=2)s.steelSpec({w:.07,h:1.7,d:.18,x:w,y:1.85,z:l-.075});s.box(-16-a+.3,u,.15,he.wall,(a-.15+-16)/2,u/2,c+.075,{solid:!0,trim:["z-"]}),s.box(o- -14+.3,u,.15,he.wall,(-14+o+.15)/2,u/2,c+.075,{solid:!0,trim:["z-"]}),s.box(2,u-2.3,.15,he.wall,-15,(u+2.3)/2,c+.075,{}),s.box(.15,u,c-l,he.wall,a-.075,u/2,f,{solid:!0,trim:["x+"]}),s.box(.15,u,F.STREET_Z0-l,he.wall,o+.075,u/2,(l+F.STREET_Z0)/2,{solid:!0,trim:["x-"]}),s.box(.15,u,c-F.STREET_Z1,he.wall,o+.075,u/2,(F.STREET_Z1+c)/2,{solid:!0,trim:["x-"]});for(let w=a+3;w<o-1;w+=4.5)for(const P of[5.2,9,12.8])s.led(w,P,u-.02);s.box(1.1,1.1,5.2,he.oak,a+4.5,.55,f);for(const w of[4.4,13.6])s.box(4.2,.46,.55,he.oak,-10,.23,w),s.box(4.2,.5,.09,he.oak,-10,.7,w+(w<f?-.24:.24));for(let w=0;w<5;w++)s.chair(-5.8+w*.62,0,14.35,-1);for(let w=0;w<3;w++)s.chair(-16.2+w*.62,0,14.35,-1);const p=w=>t.length?t[w%t.length]:null;Dn(s,p(3),3,a+.09,1.8,4.6,Math.PI/2,"atrium:w1"),Dn(s,p(9),9,a+.09,1.8,13.4,Math.PI/2,"atrium:w2"),Dn(s,p(6),6,-3.4,1.8,c-.09,Math.PI,"atrium:n1"),s.sign(7,1.5,a+.09,2.6,f,Math.PI/2,()=>pt({widthPx:1792,heightPx:384,title:"ContSys Hospital",subtitle:`${i.meta.label} · ${i.classes.length} concepts · welcome — walk the model`,titleSize:150,align:"center"}),"title"),s.sign(3.2,.7,o-.09,F.ROOM_H+.55,(F.STREET_Z0+F.STREET_Z1)/2,-Math.PI/2,()=>pt({widthPx:1280,heightPx:280,title:"Hospital Street →",subtitle:"all wings · concepts A–Z on the directory",titleSize:88}),"to-street"),s.sign(2.6,.6,-15,2.62,c-.09,Math.PI,()=>pt({widthPx:1152,heightPx:252,title:"Postgraduate Medical Centre →",subtitle:"lecture theatre · seminars & presentations",titleSize:70}),"to-theatre");const x=[...i.wings.map(w=>({text:w.annex?w.label:`${w.label} wing`,sub:`${w.classCount} concepts`,chip:Xn(w.key)})),{text:"Postgraduate Medical Centre",sub:"lecture theatre",chip:"#005eb8"}],v={widthPx:1024,heightPx:724,title:"Hospital directory",subtitle:"wings west to east — tap one to visit its entrance",rows:x,rowSize:40},m=s.sign(3.4,2.4,-20,1.9,c-.09,Math.PI,()=>tr(v),"directory-wings"),d=wa(v,x.length),C={widthPx:2048,heightPx:1152,title:"Concepts A–Z",subtitle:"tap a concept to go there · or press M anywhere for the porter",rows:i.classes.map(w=>({text:w.label,sub:w.roomNumber??void 0,chip:Xn(w.wing)})),rowSize:14,columns:5},R=s.sign(6.4,3.6,-9,1.9,c-.09,Math.PI,()=>tr(C),"directory-az"),y=wa(C,i.classes.length),T=[{kind:"directory",mesh:m,cells:[...i.wings.flatMap((w,P)=>d[P]?[{rect:d[P],id:w.rootIds[0],label:w.annex?w.label:`${w.label} wing`}]:[]),...d[i.wings.length]?[{rect:d[i.wings.length],id:ai,label:"Postgraduate Medical Centre"}]:[]]},{kind:"directory",mesh:R,cells:i.classes.flatMap((w,P)=>y[P]?[{rect:y[P],id:w.id,label:w.label}]:[])}];return n!=="off"&&(s.stand(a+3.7,0,f,Math.PI/2,137),s.sit(-9.4,.02,4.55,1,553),s.sit(-11.1,.02,13.45,-1,887)),s.populate(n,9001),s.finalize(),{id:rn,wc:null,label:"Reception",group:r,colliders:s.colliders,walkables:s.walkables,interactables:[],boards:T,spawnPos:new B(-14,0,f),spawnYaw:-Math.PI/2,boxes:[new Ct(new B(a-.3,-.5,l-.3),new B(o+.1,2.5,c+.3))]}}const kr="__street";function Fm(i,e,t,n,r){const s=new Cn;s.name="area:street";const a=new jr(s,new B(0,0,0),t),o=e.loop,l=0,c=o.xEnd,u=c-l,h=(l+c)/2,f=F.STREET_H,p=o.south.z1,x=o.north.z0,v=[o.connectors.west,o.connectors.east],m=new Map(i.classes.map(T=>[T.id,T])),d=new Map(i.wings.map(T=>[T.key,T])),C=new yt({color:13623528,transparent:!0,opacity:.3}),R=new yt({color:6715727}),y=T=>{const w=T==="south"?o.south:o.north,P=w.z0,z=w.z1,M=(P+z)/2,g=T==="south"?P-.075:z+.075,E=T==="south"?z+.075:P-.075,H=T==="south"?"z+":"z-",O=T==="south"?"z-":"z+",G=T==="south"?0:Math.PI;a.box(u,.1,z-P,he.floor,h,-.05,M,{walkable:!0,vinyl:!0}),a.box(u,.1,z-P,he.ceiling,h,f+.05,M,{worldUV:!0});for(let Ee=l+2;Ee<c-1;Ee+=4)a.led(Ee,P+1.3,f-.02,.35,1.3),a.led(Ee,z-1.3,f-.02,.35,1.3);const $=[];let N=l;for(const[Ee,Re]of v)Ee>N&&$.push([N,Ee]),N=Math.max(N,Re);c>N&&$.push([N,c]);for(const[Ee,Re]of $){const X=(Ee+Re)/2,J=Re-Ee;a.box(J,1,.15,he.wall,X,.5,E,{solid:!0,trim:[O]}),a.box(J,1.7,.08,C,X,1.85,E,{solid:!0}),a.box(J,f-2.7,.15,he.wall,X,(f+2.7)/2,E,{});for(let me=Ee+2;me<Re-.5;me+=2)a.steelSpec({w:.07,h:1.7,d:.18,x:me,y:1.85,z:E})}for(const[Ee,Re]of v){const X=(Ee+Re)/2;a.box(Re-Ee,f-3,.15,he.wall,X,(f+3)/2,E,{}),a.sign(2.7,.6,X,2.62,E+(T==="south"?-.08:.08),T==="south"?Math.PI:0,()=>pt({widthPx:1152,heightPx:252,title:`Cloister → ${T==="south"?"north":"south"} side`,subtitle:"across the courtyard · shorter way round",titleSize:68}),`cloister:${T}:${Math.round(X)}`)}const L=[];for(const Ee of e.wings)if(Ee.street===T)for(const Re of Ee.rootIds)L.push({x:e.areas[Re].x,id:Re,wingKey:Ee.key});L.sort((Ee,Re)=>Ee.x-Re.x);const q=T==="south"?P+.46:z-.46,oe=T==="south"?1:-1,ee=T==="south"?P+.075:z-.075,re=(Ee,Re)=>{const X=Re-Ee,J=(Ee+Re)/2;if(X>=12&&(a.chair(J-.35,0,q,oe),a.chair(J+.35,0,q,oe)),X>=9)for(const me of[J-3.2,J+3.2]){const Fe=(Math.round(me*7)>>>0)%997,Ae=n.length?n[Fe%n.length]:null;Dn(a,Ae,Fe,me,1.78,ee,G,`street:${T}:${Math.round(me)}`)}};let ve=l;for(const Ee of L){const Re=Ee.x-F.LOBBY_W/2,X=Ee.x+F.LOBBY_W/2;Re>ve&&(a.box(Re-ve,f,.15,he.wall,(ve+Re)/2,f/2,g,{solid:!0,trim:[H]}),re(ve,Re)),a.box(F.LOBBY_W,f-F.ROOM_H,.15,he.wall,Ee.x,(f+F.ROOM_H)/2,g,{}),ve=X}c>ve&&(a.box(c-ve,f,.15,he.wall,(ve+c)/2,f/2,g,{solid:!0,trim:[H]}),re(ve,c));const we=T==="south"?P+.02:z-.02;L.forEach(Ee=>{const Re=m.get(Ee.id),X=d.get(Ee.wingKey);a.sign(3.2,.7,Ee.x,F.ROOM_H+.45,we,G,()=>pt({widthPx:1280,heightPx:280,title:X?.annex?Re?.label??"?":`${X?.label??"?"} wing`,subtitle:X?.annex?`${X.label} · ${Re?.roomNumber?`Room ${Re.roomNumber}`:""}`:`${X?.classCount??"?"} concepts · enter for ${Re?.label??"?"}`,titleSize:86}),`street:${Re?.label}`)}),e.wings.filter(Ee=>Ee.street===T).forEach((Ee,Re)=>{const X=new gn({color:new $e(Xn(Ee.key))}),J=e.areas[Ee.rootIds[0]].x,me=T==="south"?P+.4+Re*.24:z-.4-Re*.24;a.box(J-l,.012,.16,X,(l+J)/2,.012,me,{});const Fe=T==="south"?[P,me]:[me,z];a.box(.16,.012,Fe[1]-Fe[0],X,J,.012,(Fe[0]+Fe[1])/2,{})}),a.box(.15,f,z-P+.3,he.wall,c+.075,f/2,M,{solid:!0,trim:["x-"]}),T==="north"&&a.box(.15,f,z-P+.3,he.wall,l-.075,f/2,M,{solid:!0,trim:["x+"]}),a.sign(3.4,.8,l+.4,2.7,M,-Math.PI/2,()=>pt({widthPx:1280,heightPx:300,title:"Hospital Street",subtitle:`${T} side · wings this way →`,titleSize:96}),`street-name:${T}`)};y("south"),y("north");for(const[T,w]of v){const P=(T+w)/2,z=x-p,M=(p+x)/2;a.box(w-T,.1,z,he.floor,P,-.05,M,{walkable:!0,vinyl:!0}),a.box(w-T,.1,z,he.ceiling,P,f+.05,M,{worldUV:!0});for(const g of[T-.075,w+.075]){a.box(.15,1,z,he.wall,g,.5,M,{solid:!0,trim:[g<P?"x+":"x-"]}),a.box(.08,1.7,z,C,g,1.85,M,{solid:!0}),a.box(.15,f-2.7,z,he.wall,g,(f+2.7)/2,M,{});for(let E=p+2;E<x-.5;E+=2)a.steelSpec({w:.18,h:1.7,d:.07,x:g,y:1.85,z:E})}for(let g=p+2;g<x-1;g+=4)a.led(P,g,f-.02,.35,1.3)}return a.box(c-2,.06,x-p-.4,R,(2+c)/2,-.09,(p+x)/2,{}),x-.2>38&&a.box(32,.06,x-.2-38,R,-14,-.09,(38+x-.2)/2,{}),a.populate(r,4211),a.finalize(),{id:kr,wc:null,label:"Hospital Street",group:s,colliders:a.colliders,walkables:a.walkables,interactables:[],spawnPos:new B(l+3,0,(o.south.z0+o.south.z1)/2),spawnYaw:-Math.PI/2,boxes:[new Ct(new B(l-.3,-.5,o.south.z0-.2),new B(c+.3,2.5,o.south.z1+.3)),new Ct(new B(l-.3,-.5,o.north.z0-.3),new B(c+.3,2.5,o.north.z1+.2)),...v.map(([T,w])=>new Ct(new B(T-.2,-.5,p),new B(w+.2,2.5,x)))]}}const fn=1920,Pi=1080;function Om(i,e,t,n){i.fillStyle=Gi,i.fillRect(0,0,fn,Pi),i.fillStyle="#ffffff",i.textAlign="center",i.font="bold 118px Arial",i.fillText(e,fn/2,470),i.font="54px Arial",i.globalAlpha=.92,i.fillText(t,fn/2,580),i.font="34px Arial",i.globalAlpha=.7,i.fillText(n,fn/2,990),i.globalAlpha=1}function al(i,e,t){i.fillStyle="#f4f6f7",i.fillRect(0,0,fn,Pi),i.fillStyle=Gi,i.fillRect(0,0,fn,190),i.fillStyle="#ffffff",i.textAlign="left",i.font="bold 78px Arial",i.fillText(e,110,128),i.fillStyle="#16212a",i.font="46px Arial",t.forEach((n,r)=>i.fillText(n,110,330+r*105))}function Bm(){return[{kind:"builtin",draw:i=>Om(i,"Postgraduate Medical Centre","Lecture Theatre · ContSys Hospital","a walkable model of the continuity-of-care concept system")},{kind:"builtin",draw:i=>al(i,"Bring your own slides",["1.  Export your deck as PNG or JPG images (1920 × 1080 works best).","2.  Copy them into the site’s  slides/  folder.","3.  List them in order in  slides/manifest.json :",'         ["01.png", "02.png", "03.png"]',"4.  Video clips (.mp4, .webm) can be listed too — they play here.","5.  Redeploy. This screen then presents your deck."])},{kind:"builtin",draw:i=>al(i,"Presenting & filming",["← →  or  PageUp / PageDown change slides — presenter clickers work.","Tap or click the screen: right side = next, left side = back.","H  hides the whole interface for a clean recording.","L  dims the house lights.","Add  ?start=theatre  to the address to begin at the lectern.","B  returns to your last stop when you’re done."])}]}class zm{entries=[];index=0;cache=new Map;video=null;videoTex=null;mat;constructor(e){this.mat=e.material}get count(){return this.entries.length}get label(){return`Slide ${this.index+1} / ${this.entries.length}`}async load(){try{const e=await fetch("slides/manifest.json");if(e.ok){const t=await e.json(),n=Array.isArray(t)?t:t?.slides??[];this.entries=n.map(r=>({kind:/\.(mp4|webm|mov)$/i.test(r)?"video":"image",src:`slides/${r}`}))}}catch{}this.entries.length||(this.entries=Bm()),this.show(0)}next(){this.show(Math.min(this.index+1,this.entries.length-1))}prev(){this.show(Math.max(this.index-1,0))}show(e){if(!this.entries.length)return;this.index=e;const t=this.entries[e];t.kind==="video"?this.mat.map=this.playVideo(t.src):(this.video?.pause(),this.mat.map=this.texture(e),this.entries[e+1]?.kind==="image"&&this.texture(e+1),this.entries[e-1]?.kind==="image"&&this.texture(e-1)),this.mat.needsUpdate=!0}texture(e){const t=this.cache.get(e);if(t)return t;const n=document.createElement("canvas");n.width=fn,n.height=Pi;const r=n.getContext("2d");r.fillStyle="#0d1114",r.fillRect(0,0,fn,Pi);const s=new vn(n);s.colorSpace=mt,s.generateMipmaps=!1,s.minFilter=St;const a=this.entries[e];if(a.kind==="builtin")a.draw(r),s.needsUpdate=!0;else if(a.kind==="image"){const o=new Image;o.onload=()=>{const l=Math.min(fn/o.width,Pi/o.height),c=o.width*l,u=o.height*l;r.drawImage(o,(fn-c)/2,(Pi-u)/2,c,u),s.needsUpdate=!0},o.src=a.src}return this.cache.set(e,s),s}playVideo(e){this.video||(this.video=document.createElement("video"),this.video.playsInline=!0,this.videoTex=new au(this.video),this.videoTex.colorSpace=mt,this.videoTex.generateMipmaps=!1,this.videoTex.minFilter=St);const t=this.video;return t.src.endsWith(e)||(t.src=e),t.currentTime=0,t.muted=!1,t.play().catch(()=>{t.muted=!0,t.play().catch(()=>{})}),this.videoTex}}const Ai=new Qt(0,0,0,"YXZ"),wi=new B,km={type:"change"},Hm={type:"lock"},Gm={type:"unlock"},ol=.002,ll=Math.PI/2;class Vm extends Mu{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Wm.bind(this),this._onPointerlockChange=Xm.bind(this),this._onPointerlockError=Ym.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;wi.setFromMatrixColumn(t.matrix,0),wi.crossVectors(t.up,wi),t.position.addScaledVector(wi,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;wi.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(wi,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Wm(i){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;Ai.setFromQuaternion(e.quaternion),Ai.y-=i.movementX*ol*this.pointerSpeed,Ai.x-=i.movementY*ol*this.pointerSpeed,Ai.x=Math.max(ll-this.maxPolarAngle,Math.min(ll-this.minPolarAngle,Ai.x)),e.quaternion.setFromEuler(Ai),this.dispatchEvent(km)}function Xm(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Hm),this.isLocked=!0):(this.dispatchEvent(Gm),this.isLocked=!1)}function Ym(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const ei=1.7,Dr=.3,$m=4.2,qm=8.5,Zm=.5,Km=7;class jm{camera;controls;keys=new Set;colliders=[];walkables=[];touch={f:0,s:0};constructor(e){this.camera=new jt(70,innerWidth/innerHeight,.05,160),this.camera.position.set(0,ei,0),this.camera.rotation.order="YXZ",this.controls=new Vm(this.camera,e),addEventListener("keydown",t=>this.keys.add(t.code)),addEventListener("keyup",t=>this.keys.delete(t.code)),addEventListener("blur",()=>this.keys.clear())}setTouchMove(e,t){this.touch.f=e,this.touch.s=t}enableDragLook(e){let t=!1,n=0,r=0;e.addEventListener("pointerdown",s=>{this.controls.isLocked||(t=!0,n=s.clientX,r=s.clientY,e.setPointerCapture(s.pointerId))}),e.addEventListener("pointermove",s=>{if(!t||this.controls.isLocked)return;const a=this.camera.rotation;a.y-=(s.clientX-n)*.0042,a.x=Math.max(-1.45,Math.min(1.45,a.x-(s.clientY-r)*.0042)),n=s.clientX,r=s.clientY});for(const s of["pointerup","pointercancel"])e.addEventListener(s,()=>t=!1)}dash(e=12){const t=this.camera.rotation.y,n=-Math.sin(t),r=-Math.cos(t),s=this.camera.position;let a=0;for(let o=0;o<Math.ceil(e/.4);o++){const l=this.feetY,c=s.x+n*.4,u=s.z+r*.4;if(this.collides(c,u,l))break;const h=this.groundAt(c,u,l);if(h===-1/0)break;s.x=c,s.z=u,s.y=h+ei,a+=.4}return a}setColliders(e){this.colliders=e}setWalkables(e){this.walkables=e}get position(){return this.camera.position}get feetY(){return this.camera.position.y-ei}get floorPosition(){return new B(this.camera.position.x,this.feetY,this.camera.position.z)}teleport(e,t){this.camera.position.set(e.x,(e.y??0)+ei,e.z),this.camera.rotation.set(0,t,0)}groundAt(e,t,n){let r=-1/0;for(const s of this.walkables){if(e<s.min.x-.05||e>s.max.x+.05||t<s.min.z-.05||t>s.max.z+.05)continue;const a=s.max.y;a<=n+Zm&&a>r&&(r=a)}return r}collides(e,t,n){const r=new Ct(new B(e-Dr,n+.25,t-Dr),new B(e+Dr,n+1.75,t+Dr));return this.colliders.some(s=>s.intersectsBox(r))}snapGround(){const e=this.camera.position,t=this.groundAt(e.x,e.z,this.feetY+.01);t>-1/0&&(e.y=t+ei)}update(e){const t=this.camera.position,n=this.feetY,r=Number(this.keys.has("KeyW"))-Number(this.keys.has("KeyS"))+this.touch.f,s=Number(this.keys.has("KeyD"))-Number(this.keys.has("KeyA"))+this.touch.s;if(r||s){const o=Math.min(1,Math.hypot(r,s)),c=(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||o>.92?qm:$m)*o,u=this.camera.rotation.y,h=-Math.sin(u)*r+Math.cos(u)*s,f=-Math.cos(u)*r-Math.sin(u)*s,p=Math.hypot(h,f)||1,x=h/p*c*e,v=f/p*c*e;this.collides(t.x+x,t.z,n)||(t.x+=x),this.collides(t.x,t.z+v,n)||(t.z+=v)}const a=this.groundAt(t.x,t.z,n);a>-1/0&&(a>=n?t.y=a+ei:t.y=Math.max(a,n-Km*e)+ei)}}let An=null,Yr=!1;const Tn=()=>Yr;function Jm(){return An||(An=document.createElement("div"),An.id="menu-root",document.body.appendChild(An),An)}function Qm(){!An||!Yr||(Yr=!1,An.replaceChildren(),An.style.display="none")}function cl(i,e,t,n){const r=Jm();r.replaceChildren(),r.style.display="flex",Yr=!0;const s=document.createElement("div");s.className="menu-panel";const a=document.createElement("div");a.className="menu-head",a.innerHTML='<div class="menu-title"></div><div class="menu-sub"></div>',a.querySelector(".menu-title").textContent=i,a.querySelector(".menu-sub").textContent=e,s.appendChild(a);let o=null;n.searchable&&(o=document.createElement("input"),o.className="menu-filter",o.placeholder="Type to search…",s.appendChild(o));const l=document.createElement("div");l.className="menu-list",s.appendChild(l);const c=document.createElement("div");c.className="menu-foot",c.textContent="↑↓ choose · Enter go · Esc close",s.appendChild(c),r.appendChild(s);let u=[],h=0;const f=m=>{removeEventListener("keydown",v,!0),Qm(),m!==null?n.onPick(m):n.onClose?.()},p=()=>{const m=o?.value.trim().toLowerCase()??"";u=t.filter(d=>!m||`${d.label} ${d.sub??""}`.toLowerCase().includes(m)),h=Math.min(h,Math.max(0,u.length-1)),l.replaceChildren(...u.map((d,C)=>{const R=document.createElement("div");R.className="menu-item"+(d.value===null?" info":"")+(d.strong?" strong":"")+(C===h&&d.value!==null?" active":""),d.chip&&(R.style.borderLeftColor=d.chip);const y=document.createElement("span");if(y.textContent=d.label,R.appendChild(y),d.sub){const T=document.createElement("span");T.className="menu-item-sub",T.textContent=d.sub,R.appendChild(T)}return d.value!==null&&(R.addEventListener("click",()=>f(d.value)),R.addEventListener("mousemove",()=>{h!==C&&(h=C,p())})),R})),l.querySelector(".active")?.scrollIntoView({block:"nearest"})},x=m=>{if(!u.length)return;let d=h;for(let C=0;C<u.length&&(d=(d+m+u.length)%u.length,u[d].value===null);C++);h=d,p()},v=m=>{if(m.code==="Escape")m.preventDefault(),m.stopPropagation(),f(null);else if(m.code==="ArrowDown")m.preventDefault(),x(1);else if(m.code==="ArrowUp")m.preventDefault(),x(-1);else if(m.code==="Enter"){m.preventDefault();const d=u[h];d&&d.value!==null&&f(d.value)}else o&&requestAnimationFrame(p)};addEventListener("keydown",v,!0),o?.addEventListener("input",()=>{h=0,p()}),p(),h=Math.max(0,u.findIndex(m=>m.value!==null)),p(),o?.focus()}const e0=700,t0=document.getElementById("app"),ni=document.getElementById("start"),ul=document.getElementById("fade"),Ls=document.getElementById("toast"),Ri=document.getElementById("prompt"),n0=document.getElementById("area-sign"),i0=document.querySelector("#area-sign .label"),r0=document.querySelector("#area-sign .room");let hl=0;function Gt(i){Ls.textContent=i,Ls.style.opacity="1",clearTimeout(hl),hl=window.setTimeout(()=>Ls.style.opacity="0",2200)}function Ci(){ul.style.opacity="1",setTimeout(()=>ul.style.opacity="0",160)}async function s0(){const i=await fetch("world.json").then(b=>{if(!b.ok)throw new Error(`world.json ${b.status} — run \`npm run world\` first`);return b.json()}),e=new Map(i.classes.map(b=>[b.id,b])),t=new Map(i.classes.map(b=>[b.label,b])),n=new Map(i.wings.map(b=>[b.key,b.annex?b.label:`${b.label} wing`])),r=Im(i),s=await fetch("art/manifest.json").then(b=>b.ok?b.json():[]).catch(()=>[]),a=await fetch("art/illustrations/manifest.json").then(b=>b.ok?b.json():null).then(b=>b?new Set(b.map(V=>V.slug)):null).catch(()=>null),o=navigator.maxTouchPoints>0&&Math.min(screen.width,screen.height)<=500,l=new URLSearchParams(location.search).get("people"),c=l==="off"||l==="low"||l==="full"?l:o?"low":"full",u=matchMedia("(prefers-reduced-motion: reduce)").matches,h=new tu;h.background=new $e(6055792),h.fog=o?new Wr(6055792,42,120):new Wr(6055792,55,150),h.add(new fu(16777215,12172994,1)),h.add(new gu(16777215,.38));const f=new mu(16777215,.4);f.position.set(3,8,2),h.add(f);let p;try{p=new _m({antialias:!o})}catch{throw new Error("3D graphics (WebGL) could not start in this browser. On iPhone/iPad, Lockdown Mode blocks WebGL — allow this site under Settings → Privacy & Security → Lockdown Mode → Configure Web Browsing, or try another device.")}p.setSize(innerWidth,innerHeight),p.setPixelRatio(Math.min(devicePixelRatio,o?1.5:2)),p.domElement.style.touchAction="none",p.domElement.style.userSelect="none",t0.appendChild(p.domElement);const x=new Mm,v=new Map,m={byId:e,signs:x,layout:r,art:s,illustrations:a,people:c},d=Nm(i,x,s,c);v.set(d.id,d);const C=Fm(i,r,x,s,c);v.set(C.id,C);const R=Um(x,s,c);v.set(R.id,R);const y=new zm(R.screen);y.load();for(const b of i.classes){const V=r.areas[b.id],Y=Lm(b,m,new B(V.x,V.y,V.oz));v.set(Y.id,Y)}for(const b of v.values())h.add(b.group);const T=[...v.values()].flatMap(b=>b.colliders),w=[...v.values()].flatMap(b=>b.walkables),P=[...v.values()].flatMap(b=>b.interactables),z=new Map;for(const b of P)if(b.elementId){const V=z.get(b.elementId)??[];V.push(b),z.set(b.elementId,V)}function M(b){if(b.kind!=="door-self")return z.get(b.elementId)?.find(V=>V!==b)}const g=new jm(p.domElement);g.setColliders(T),g.setWalkables(w),g.teleport(d.spawnPos,d.spawnYaw),h.add(g.camera),o&&(g.camera.far=130,g.camera.updateProjectionMatrix());const E=[];if(c!=="off"&&!u){const b=cr(20260703),V=(se,ue,Ne)=>{const Xe=new Rm(ue,Ne,1+Math.floor(b()*99991));h.add(Xe.group),E.push({w:Xe,owner:se})},Y=c==="full"?7:3;for(let se=0;se<Y;se++){const ue=4+(r.street.x1-70)*se/Math.max(1,Y-1),Ne=se%2?r.loop.north.z0+2:9;V(C,new B(ue,0,Ne),new B(Math.min(ue+55,r.street.x1-4),0,Ne))}if(c==="full"){let se=0;for(const[Ne,Xe]of Object.entries(r.landings)){if(Xe.x1-Xe.x0<18||se>=12)continue;const _t=v.get(Ne);if(!_t)continue;const Et=Xe.mirror?r.loop.K-8.5:8.5;V(_t,new B(Xe.x0+1.2,Xe.y,Et),new B(Xe.x1-1.2,Xe.y,Et)),se++}let ue=0;for(const Ne of i.classes){const Xe=r.areas[Ne.id];if(Xe.corridorLen<24||ue>=8)continue;const _t=v.get(Ne.id);if(!_t)continue;const Et=Xe.oz+(Xe.flip?.8:-.8),on=Xe.oz+(Xe.flip?Xe.corridorLen-2:-(Xe.corridorLen-2));V(_t,new B(Xe.x,Xe.y,Et),new B(Xe.x,Xe.y,on)),ue++}}}const H=o?140:175;function O(){const b=g.position,V=g.floorPosition.y;for(const Y of v.values()){let se=1/0;for(const Ne of Y.boxes)se=Math.min(se,Ne.distanceToPoint(b));const ue=Y.wc?r.areas[Y.wc.id].y:0;Y.group.visible=se<H&&(Math.abs(ue-V)<F.STOREY/2||se<30)}}O();let G=d;function $(b){G=b;const V=b.wc;i0.textContent=b.label,r0.textContent=V?[V.roomNumber?`Room ${V.roomNumber}`:null,`${n.get(V.wing)??V.wing} · ${V.floor?`level −${V.floor}`:"ground"}`].filter(Boolean).join(" · "):i.meta.label,n0.style.borderLeft=`8px solid ${V?Xn(V.wing):"#ffffff"}`}$(d),new URLSearchParams(location.search).get("start")==="theatre"&&(g.teleport(R.lecternPos,R.lecternYaw),$(R));let N=!1;function L(b){const V=G.lift;V&&(N||(V.doors.target=g.floorPosition.distanceTo(V.doorwayPos)<2.1?1:0),V.doors.update(b))}let q=null;const oe=()=>{if(!q)try{q=new AudioContext}catch{}};addEventListener("pointerdown",oe,{once:!0}),addEventListener("keydown",oe,{once:!0});function ee(){if(!q)return;const b=q.currentTime+.05;for(const[V,Y]of[[1318.5,0],[1046.5,.14]]){const se=q.createOscillator(),ue=q.createGain();se.type="sine",se.frequency.value=V,ue.gain.setValueAtTime(1e-4,b+Y),ue.gain.linearRampToValueAtTime(.045,b+Y+.015),ue.gain.exponentialRampToValueAtTime(1e-4,b+Y+.55),se.connect(ue).connect(q.destination),se.start(b+Y),se.stop(b+Y+.6)}}const re=b=>(b.max.x-b.min.x)*(b.max.y-b.min.y)*(b.max.z-b.min.z);function ve(b){let V,Y=1/0;for(const se of v.values())for(const ue of se.boxes)ue.containsPoint(b)&&re(ue)<Y&&(V=se,Y=re(ue));return V}const we=navigator.maxTouchPoints>0||"ontouchstart"in window||matchMedia("(pointer: coarse)").matches,Ee=matchMedia("(pointer: coarse)").matches;if(we){document.body.classList.add("touch");const b=ni.querySelector(".badge"),V=ni.querySelector("p");b&&(b.textContent=Ee?"Tap to enter":"Click or tap to enter"),V&&(V.textContent="Left pad or WASD to walk · drag to look · ⏩ jumps ahead · ℹ reads · ⌖ porter · double-click captures the mouse")}ni.addEventListener("pointerup",b=>{we||b.pointerType==="touch"?ni.style.display="none":g.controls.lock()}),p.domElement.addEventListener("dblclick",()=>g.controls.lock()),g.controls.addEventListener("lock",()=>ni.style.display="none"),g.controls.addEventListener("unlock",()=>{!Tn()&&!We&&(ni.style.display="flex")});let Re=0;const X=[];function J(){const b=g.floorPosition;X.push({x:b.x,y:b.y,z:b.z,yaw:g.camera.rotation.y,areaId:G.id}),X.length>60&&X.shift()}function me(){if(Tn()||We||N)return;const b=X.pop();if(!b){Gt("No earlier stop to go back to");return}const V=v.get(b.areaId);g.teleport({x:b.x,y:b.y,z:b.z},b.yaw),V&&$(V),j=ne(g.floorPosition),O(),Ci(),Gt(`Back → ${V?.label??"previous stop"}`),Re=performance.now()}function Fe(b,V){const Y=v.get(b);Y&&(J(),g.teleport(Y.spawnPos,Y.spawnYaw),$(Y),j=ne(g.floorPosition),O(),Ci(),V&&Gt(V),Re=performance.now())}function Ae(b,V){b?.lift?(N=!0,b.lift.doors.target=0,setTimeout(()=>{N=!1,g.floorPosition.distanceTo(b.lift.doorwayPos)<1.7?Je(V):Gt("The lift left without you")},650)):Je(V)}function Je(b){const V=v.get(b);V&&(V.liftPos?(J(),g.teleport(V.liftPos,V.liftYaw??0),$(V),j=ne(g.floorPosition),O(),Ci(),Gt(`Lift → ${V.label}`),Re=performance.now(),ee()):Fe(b,`Lift → ${V.label}`))}function dt(b){const V=b.targetIds[0],Y=v.get(V);if(Y){if(J(),b.kind==="door-self")g.teleport(Y.spawnPos,Y.spawnYaw),Gt(`${b.label} — back where you started (a pig's ear)`);else{const se=M(b);se?.exitPos?g.teleport(se.exitPos,se.exitYaw??0):g.teleport(Y.spawnPos,Y.spawnYaw),Gt(`${b.label} → ${Y.label}`)}$(Y),j=ne(g.floorPosition),O(),Ci(),Re=performance.now()}}const Ke=(b,V="")=>{const Y=e.get(b);return{label:`${V}${Y?.label??b}`,sub:Y?[Y.roomNumber,`${n.get(Y.wing)??Y.wing} · ${Y.floor?`level −${Y.floor}`:"ground"}`].filter(Boolean).join(" · "):void 0,chip:Y?Xn(Y.wing):void 0,value:b}};function te(b){const V=e.get(b.areaId),Y=g.controls.isLocked;Y&&g.controls.unlock();const se=Ne=>{Y&&g.controls.lock(),Ne?.()},ue=[];if(V){const Ne=Pa(V,e).sort((Xe,_t)=>_t.level-Xe.level);ue.push(...Ne.map(Xe=>Ke(Xe.id,`▲${Xe.level}  `))),ue.push({label:`●  ${V.label}`,sub:"you are here",strong:!0,value:null}),ue.push(...V.subs.map(Xe=>Ke(Xe,"▼1  ")))}ue.push({label:"⌂  Reception",sub:"ground floor",value:rn}),cl("Lift",V?.label??"",ue,{onPick:Ne=>se(()=>Ae(v.get(b.areaId),Ne)),onClose:()=>se()})}function Te(){const b=g.controls.isLocked;b&&g.controls.unlock();const V=[...i.classes].sort((Y,se)=>Y.label.localeCompare(se.label)).map(Y=>Ke(Y.id));V.unshift({label:"⌂  Reception",sub:"the atrium",value:rn},{label:"▤  Postgraduate Medical Centre",sub:"lecture theatre",value:ai}),cl("Porter service","where would you like to go?",V,{searchable:!0,onPick:Y=>{b&&g.controls.lock(),Fe(Y,`Porter → ${v.get(Y)?.label}`)},onClose:()=>{b&&g.controls.lock()}})}const le=document.getElementById("reader"),ze=le.querySelector("h2"),I=le.querySelector("header .meta"),et=le.querySelector(".reader-body");let We=!1,st=!1;const de=b=>b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function A(){We=!1,le.style.display="none",st&&g.controls.lock()}function _(){const b=G.wc;ze.textContent=G.label,I.textContent=b?[b.roomNumber?`Room ${b.roomNumber}`:null,`${n.get(b.wing)??b.wing}`,b.floor?`level −${b.floor}`:"ground"].filter(Boolean).join(" · "):i.meta.label;let V="";if(!b)V=G.id===rn?`<p>Reception for the ContSys Hospital — a walkable model of ${de(i.meta.label)}. The hospital street runs east; every wing's entrance opens off it. The Postgraduate Medical Centre (lecture theatre) is through the north door. Press M (or ⌖) for the porter.</p>`:G.id===ai?`<p>The Postgraduate Medical Centre: a raked lecture theatre for seminars and video presentations.</p>
               <h3>Presenting</h3>
               <ul><li>Slides advance with ← / → or PageUp / PageDown — presenter clickers work.</li>
               <li>Tap or click the screen: right side next, left side back.</li>
               <li><strong>H</strong> hides the whole interface for a clean recording; <strong>L</strong> dims the house lights.</li>
               <li>Add <code>?start=theatre</code> to the address to begin at the lectern.</li></ul>
               <h3>Your own deck</h3>
               <p>Export slides as PNG/JPG (1920×1080), copy them into <code>slides/</code>, and list them in <code>slides/manifest.json</code> — video clips (.mp4) can be listed too.</p>`:"<p>The hospital street: a racetrack loop of two parallel streets joined by glazed cloisters across the courtyard — take whichever way round is shorter. Wing entrances open off the outside of each street; the courtyard holds the lawn and the Postgraduate Medical Centre.</p>";else{V+=`<p>${de(b.description??"Definition pending.")}</p>`;const Y=[];b.plural&&Y.push(`<strong>Plural:</strong> ${de(b.plural)}`),b.alsoKnownAs.length&&Y.push(`<strong>Also known as:</strong> ${de(b.alsoKnownAs.join("; "))}`),b.deprecated.length&&Y.push(`<strong>Deprecated terms:</strong> ${de(b.deprecated.join("; "))}`),b.termClause&&Y.push(`<strong>Clause:</strong> ${de(b.termClause)}`),b.source&&Y.push(`<span class="small"><strong>Source:</strong> ${de(b.source)}</span>`),Y.length&&(V+=`<p>${Y.join("<br>")}</p>`),b.notes.length&&(V+=`<h3>Notes</h3><ol>${b.notes.map(ue=>`<li>${de(ue.text)}</li>`).join("")}</ol>`),b.examples.length&&(V+=`<h3>Examples</h3><ol>${b.examples.map(ue=>`<li>${de(ue.text)}</li>`).join("")}</ol>`);const se=ue=>de(e.get(ue)?.label??"?");(b.out.length||b.self.length)&&(V+=`<h3>Doors out (right wall)</h3><ul>${[...b.out.map(ue=>`<li>${de(ue.label)} → ${se(ue.targetId)}</li>`),...b.self.map(ue=>`<li>${de(ue.label)} → ${de(b.label)} (end wall)</li>`)].join("")}</ul>`),b.in.length&&(V+=`<h3>Doors in (left wall)</h3><ul>${b.in.map(ue=>`<li>${se(ue.sourceId)} — ${de(ue.label)}</li>`).join("")}</ul>`),b.supers.length&&(V+=`<h3>Stairs up</h3><ul>${b.supers.map(ue=>`<li>${se(ue)}</li>`).join("")}</ul>`),b.subs.length&&(V+=`<h3>Stairs down</h3><ul>${b.subs.map(ue=>`<li>${se(ue)}</li>`).join("")}</ul>`)}et.innerHTML=V,st=g.controls.isLocked,st&&g.controls.unlock(),le.style.display="flex",We=!0}le.addEventListener("click",b=>{b.target===le&&A()});let U=null;function Q(){Tn()||We||U?.kind==="lift"&&te(U)}function ne(b){const V=new Set;for(const Y of G.interactables){if(Math.abs(Y.triggerPos.y-b.y)>2)continue;const se=Math.abs(b.x-Y.triggerPos.x),ue=Math.abs(b.z-Y.triggerPos.z);Y.halfX!==void 0?se<=Y.halfX&&ue<=(Y.halfZ??Y.halfX)&&V.add(Y):se*se+ue*ue<=Y.radius*Y.radius&&V.add(Y)}return V}let j=new Set;function Ue(){if(N){U=null,Ri.style.opacity="0";return}const b=performance.now(),V=ne(g.floorPosition);let Y=null;for(const se of V){if(!se.auto){Y=se;continue}if(!j.has(se)&&!(b-Re<e0)){se.kind==="stair-up"||se.kind==="stair-down"?Fe(se.targetIds[0],`${se.label} (portal)`):dt(se);return}}j=V,U=Y,Ri.textContent=Y?Y.prompt??`E — ${Y.label}`:"",Ri.style.opacity=Y?"1":"0"}const ge=new vu,Ie=new rt;function Ge(b,V){const Y=G.boards;if(!Y?.length)return null;g.camera.updateMatrixWorld(),Ie.set(b,V),ge.setFromCamera(Ie,g.camera);for(const se of Y){se.mesh.updateWorldMatrix(!0,!1);const ue=ge.intersectObject(se.mesh,!1)[0];if(!(!ue?.uv||ue.distance>(se.kind==="screen"?16:4.2)))for(const Ne of se.cells){const[Xe,_t,Et,on]=Ne.rect;if(ue.uv.x>=Xe&&ue.uv.x<=Et&&ue.uv.y>=_t&&ue.uv.y<=on)return{...Ne,kind:se.kind}}}return null}function ce(b,V){if(N||Tn()||We||performance.now()-Re<400)return!1;const Y=Ge(b,V);if(!Y)return!1;if(Y.kind==="screen")Y.id==="next"?y.next():y.prev(),Gt(y.label);else if(Y.kind==="lift"){const se=G;se.liftPos&&g.floorPosition.distanceTo(se.liftPos)<1.2?Ae(se,Y.id):Je(Y.id)}else Fe(Y.id,`→ ${v.get(Y.id)?.label??Y.label}`);return!0}p.domElement.addEventListener("click",()=>{g.controls.isLocked&&ce(0,0)});let _e=0,Pe=0,De=0;p.domElement.addEventListener("pointerdown",b=>{_e=b.clientX,Pe=b.clientY,De=performance.now()}),p.domElement.addEventListener("pointerup",b=>{g.controls.isLocked||Math.hypot(b.clientX-_e,b.clientY-Pe)>8||performance.now()-De>600||ce(b.clientX/innerWidth*2-1,-(b.clientY/innerHeight)*2+1)}),addEventListener("keydown",b=>{if(We){(b.code==="Escape"||b.code==="KeyR")&&A();return}Tn()||(b.code==="KeyE"&&Q(),b.code==="KeyR"&&_(),b.code==="KeyM"&&Te(),b.code==="KeyB"&&me(),b.code==="KeyF"&&g.dash(12)>.3&&Ci(),b.code==="KeyH"&&(document.body.classList.toggle("filming")||Gt("Interface restored")),G.id===ai&&((b.code==="ArrowRight"||b.code==="PageDown")&&(b.preventDefault(),y.next(),Gt(y.label)),(b.code==="ArrowLeft"||b.code==="PageUp")&&(b.preventDefault(),y.prev(),Gt(y.label)),b.code==="KeyL"&&(pe=!pe,R.setHouseLights(pe),Gt(pe?"House lights up":"House lights dimmed — L restores"))))});let pe=!0;if(Ri.addEventListener("click",Q),g.enableDragLook(p.domElement),we){const b=document.getElementById("joy"),V=document.getElementById("joy-knob");let Y=null;const se=()=>{Y=null,V.style.transform="",g.setTouchMove(0,0)},ue=Ne=>{const Xe=b.getBoundingClientRect();let _t=Ne.clientX-(Xe.left+Xe.width/2),Et=Ne.clientY-(Xe.top+Xe.height/2);if(!Number.isFinite(_t)||!Number.isFinite(Et))return;const on=Math.hypot(_t,Et),Be=44;on>Be&&(_t*=Be/on,Et*=Be/on),V.style.transform=`translate(${_t}px, ${Et}px)`,g.setTouchMove(-Et/Be,_t/Be)};b.addEventListener("pointerdown",Ne=>{Ne.preventDefault(),Y=Ne.pointerId,ue(Ne);try{b.setPointerCapture(Ne.pointerId)}catch{}}),b.addEventListener("pointermove",Ne=>{Ne.pointerId===Y&&(Ne.preventDefault(),ue(Ne))}),b.addEventListener("pointerup",se),b.addEventListener("pointercancel",se),document.getElementById("btn-read").addEventListener("click",()=>We?A():_()),document.getElementById("btn-porter").addEventListener("click",()=>{!Tn()&&!We&&Te()}),document.getElementById("btn-dash").addEventListener("click",()=>{!Tn()&&!We&&g.dash(12)>.3&&Ci()}),document.getElementById("btn-back").addEventListener("click",me)}const qe=new xu;let D=0;const xe={logic:0,render:0},fe=performance.now();let be=12,ae=0;p.setAnimationLoop(()=>{const b=performance.now(),V=Math.min(qe.getDelta(),.05);Tn()||g.update(V),L(V);for(const ue of E){const Ne=ue.owner.group.visible;ue.w.group.visible=Ne,Ne&&ue.w.update(V)}const Y=ve(g.floorPosition);if(Y&&Y!==G&&$(Y),Ue(),g.controls.isLocked&&!N&&!Tn()){const ue=Ge(0,0);ue&&(Ri.textContent=ue.kind==="screen"?`Click — ${ue.label}`:`Click — ${ue.kind==="lift"?"lift to":"go to"} ${ue.label}`,Ri.style.opacity="1")}if(D+=V,D>.4&&(D=0,x.update(g.position,o?40:55,o?100:120,o?5:8),O(),performance.now()-fe>12e3&&E.length)){if(ae===0&&be>26){ae=1;for(let ue=E.length-1;ue>=0;ue-=2)h.remove(E[ue].w.group),E.splice(ue,1);Gt("Trimmed ward activity to keep things smooth")}else if(ae===1&&be>30){ae=2;for(const ue of E)h.remove(ue.w.group);E.length=0,Gt("Paused ward activity for performance")}}const se=performance.now();p.render(h,g.camera),xe.logic=se-b,xe.render=performance.now()-se,be=be*.96+(xe.logic+xe.render)*.04}),addEventListener("resize",()=>{g.camera.aspect=innerWidth/innerHeight,g.camera.updateProjectionMatrix(),p.setSize(innerWidth,innerHeight)});function ie(){const b={areas:i.classes.length+3,doorOut:i.classes.reduce((Be,at)=>Be+at.out.length,0),doorIn:i.classes.reduce((Be,at)=>Be+at.in.length,0),doorSelf:i.classes.reduce((Be,at)=>Be+at.self.length,0),notices:i.classes.reduce((Be,at)=>Be+at.notes.length+at.examples.length,0),stairUpPortals:i.classes.reduce((Be,at)=>Be+Math.max(0,at.supers.length-1),0),stairDownPortals:i.classes.reduce((Be,at)=>Be+(at.subs.length-(r.homeChildren[at.id]?.length??0)),0),lifts:i.classes.filter(Be=>Be.supers.length||Be.subs.length).length,realStairwells:Object.keys(r.landings).length},V=Be=>P.filter(at=>at.kind===Be).length,Y={areas:v.size,doorOut:V("door-out"),doorIn:V("door-in"),doorSelf:V("door-self"),notices:[...v.values()].reduce((Be,at)=>Be+(at.notices??0),0),stairUpPortals:V("stair-up"),stairDownPortals:V("stair-down"),lifts:V("lift"),realStairwells:Object.keys(r.landings).length},se=P.filter(Be=>(Be.kind==="door-out"||Be.kind==="door-in")&&!M(Be)),ue=new Map,Ne=(Be,at)=>{ue.has(Be)||ue.set(Be,new Set),ue.get(Be).add(at)};Ne(rn,kr),Ne(rn,ai),Ne(ai,rn);for(const Be of r.wings)for(const at of Be.rootIds)Ne(kr,at),Ne(at,kr);for(const[Be,at]of Object.entries(r.homeChildren))for(const Bt of at)Ne(Be,Bt),Ne(Bt,Be);for(const Be of P){for(const at of Be.targetIds)Ne(Be.areaId,at);if(Be.kind==="lift"){const at=e.get(Be.areaId);for(const Bt of Pa(at,e))Ne(Be.areaId,Bt.id);for(const Bt of at.subs)Ne(Be.areaId,Bt);Ne(Be.areaId,rn)}}const Xe=new Set([rn]),_t=[rn];for(;_t.length;)for(const Be of ue.get(_t.pop())??[])Xe.has(Be)||(Xe.add(Be),_t.push(Be));const Et=[...v.keys()].filter(Be=>!Xe.has(Be)).map(Be=>v.get(Be).label);return{pass:Y.areas===b.areas&&Y.doorOut===b.doorOut&&Y.doorIn===b.doorIn&&Y.doorSelf===b.doorSelf&&Y.notices===b.notices&&Y.stairUpPortals===b.stairUpPortals&&Y.stairDownPortals===b.stairDownPortals&&Y.lifts===b.lifts&&se.length===0&&Et.length===0,expect:b,built:Y,unpaired:se.length,unreachable:Et,signs:x.count}}window.__hospital={world:i,layout:r,player:g,areas:v,interactables:P,audit:ie,openSearch:Te,perf:()=>({...xe,avg:+be.toFixed(1),drawCalls:p.info.render.calls,triangles:p.info.render.triangles}),people:()=>({tier:c,walkers:E.length,demoteStage:ae}),tickPeople(b=.1,V=1){for(let Y=0;Y<V;Y++)for(const se of E)se.w.update(b)},tickDoors(b=.1,V=1){for(let Y=0;Y<V;Y++)L(b);return G.lift?+G.lift.doors.openness.toFixed(2):null},bench(b=30){const V=performance.now();for(let Y=0;Y<b;Y++)p.render(h,g.camera);return{msPerFrame:+((performance.now()-V)/b).toFixed(2),drawCalls:p.info.render.calls,triangles:p.info.render.triangles}},currentArea:()=>G.label,pick:(b,V)=>Ge(b,V),tapPick:(b,V)=>ce(b,V),slides:()=>({label:y.label,total:y.count}),nextSlide:()=>(y.next(),y.label),prevSlide:()=>(y.prev(),y.label),houseLights:b=>R.setHouseLights(b),goto(b){const V=b==="Reception"?d:b==="Hospital Street"?C:b==="Postgraduate Medical Centre"?R:t.get(b)&&v.get(t.get(b).id)||null;return V?(Fe(V.id),V.label):`unknown area: ${b}`},walk(b){const V=Math.ceil(Math.abs(b)/.1);for(let se=0;se<V;se++){const ue=g.camera.rotation.y,Ne=g.camera.position;Ne.x+=-Math.sin(ue)*.1*Math.sign(b),Ne.z+=-Math.cos(ue)*.1*Math.sign(b),g.snapGround();const Xe=ve(g.floorPosition);Xe&&Xe!==G&&$(Xe),Ue()}const Y=g.camera.position;return{x:+Y.x.toFixed(2),y:+(Y.y-1.7).toFixed(2),z:+Y.z.toFixed(2),area:G.label}}},console.info(`[hospital] built ${v.size} areas, ${P.length} interactables, ${x.count} signs, loop ${Math.round(r.street.x1)}m × 2 + ${r.loop.C}m courtyard`)}s0().catch(i=>{console.error(i);const e=document.createElement("p");e.style.cssText="color:#fff;padding:24px;font-family:Arial",e.textContent=String(i),ni.replaceChildren(e)});
