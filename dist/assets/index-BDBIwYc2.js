(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Do="182",Jl=0,na=1,Ql=2,Ur=1,ec=2,Ji=3,Yn=0,Vt=1,An=2,Pn=0,Ii=1,ia=2,ra=3,sa=4,tc=5,ii=100,nc=101,ic=102,rc=103,sc=104,oc=200,ac=201,lc=202,cc=203,Us=204,Ns=205,uc=206,hc=207,fc=208,dc=209,pc=210,mc=211,gc=212,_c=213,xc=214,Fs=0,Os=1,Bs=2,Di=3,zs=4,ks=5,Hs=6,Gs=7,qr=0,vc=1,Mc=2,dn=0,dl=1,pl=2,ml=3,gl=4,_l=5,xl=6,vl=7,Ml=300,ci=301,Ui=302,Vs=303,Ws=304,Zr=306,nr=1e3,Rn=1001,Xs=1002,It=1003,Sc=1004,fr=1005,St=1006,ts=1007,ai=1008,qt=1009,Sl=1010,bl=1011,ir=1012,Uo=1013,mn=1014,un=1015,Un=1016,No=1017,Fo=1018,rr=1020,El=35902,yl=35899,Tl=1021,wl=1022,on=1023,Nn=1026,li=1027,Al=1028,Oo=1029,Ni=1030,Bo=1031,zo=1033,Nr=33776,Fr=33777,Or=33778,Br=33779,Ys=35840,$s=35841,qs=35842,Zs=35843,Ks=36196,js=37492,Js=37496,Qs=37488,eo=37489,to=37490,no=37491,io=37808,ro=37809,so=37810,oo=37811,ao=37812,lo=37813,co=37814,uo=37815,ho=37816,fo=37817,po=37818,mo=37819,go=37820,_o=37821,xo=36492,vo=36494,Mo=36495,So=36283,bo=36284,Eo=36285,yo=36286,bc=3200,ko=0,Ec=1,Vn="",mt="srgb",Fi="srgb-linear",Hr="linear",ut="srgb",fi=7680,oa=519,yc=512,Tc=513,wc=514,Ho=515,Ac=516,Rc=517,Go=518,Cc=519,aa=35044,la="300 es",hn=2e3,Gr=2001;function Rl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pc(){const i=Vr("canvas");return i.style.display="block",i}const ca={};function ua(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ye(...i){const e="THREE."+i.shift();console.warn(e,...i)}function nt(...i){const e="THREE."+i.shift();console.error(e,...i)}function sr(...i){const e=i.join(" ");e in ca||(ca[e]=!0,Ye(...i))}function Ic(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ns=Math.PI/180,To=180/Math.PI;function ar(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function Lc(i,e){return(i%e+e)%e}function is(i,e,t){return(1-t)*i+t*e}function Wi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],p=s[o+1],x=s[o+2],v=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=v;return}if(h!==v||l!==f||c!==p||u!==x){let m=l*f+c*p+u*x+h*v;m<0&&(f=-f,p=-p,x=-x,v=-v,m=-m);let d=1-a;if(m<.9995){const A=Math.acos(m),T=Math.sin(A);d=Math.sin(d*A)/T,a=Math.sin(a*A)/T,l=l*d+f*a,c=c*d+p*a,u=u*d+x*a,h=h*d+v*a}else{l=l*d+f*a,c=c*d+p*a,u=u*d+x*a,h=h*d+v*a;const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],p=s[o+2],x=s[o+3];return e[t]=a*x+u*h+l*p-c*f,e[t+1]=l*x+u*f+c*h-a*p,e[t+2]=c*x+u*p+a*f-l*h,e[t+3]=u*x-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*x,this._y=c*p*h-f*u*x,this._z=c*u*x+f*p*h,this._w=c*u*h-f*p*x;break;case"YXZ":this._x=f*u*h+c*p*x,this._y=c*p*h-f*u*x,this._z=c*u*x-f*p*h,this._w=c*u*h+f*p*x;break;case"ZXY":this._x=f*u*h-c*p*x,this._y=c*p*h+f*u*x,this._z=c*u*x+f*p*h,this._w=c*u*h-f*p*x;break;case"ZYX":this._x=f*u*h-c*p*x,this._y=c*p*h+f*u*x,this._z=c*u*x-f*p*h,this._w=c*u*h+f*p*x;break;case"YZX":this._x=f*u*h+c*p*x,this._y=c*p*h+f*u*x,this._z=c*u*x-f*p*h,this._w=c*u*h-f*p*x;break;case"XZY":this._x=f*u*h-c*p*x,this._y=c*p*h-f*u*x,this._z=c*u*x+f*p*h,this._w=c*u*h+f*p*x;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ha.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ha.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rs.copy(this).projectOnVector(e),this.sub(rs)}reflect(e){return this.sub(rs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rs=new B,ha=new lr;class Ke{constructor(e,t,n,r,s,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],x=n[8],v=r[0],m=r[3],d=r[6],A=r[1],T=r[4],w=r[7],C=r[2],R=r[5],P=r[8];return s[0]=o*v+a*A+l*C,s[3]=o*m+a*T+l*R,s[6]=o*d+a*w+l*P,s[1]=c*v+u*A+h*C,s[4]=c*m+u*T+h*R,s[7]=c*d+u*w+h*P,s[2]=f*v+p*A+x*C,s[5]=f*m+p*T+x*R,s[8]=f*d+p*w+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,x=t*h+n*f+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=h*v,e[1]=(r*c-u*n)*v,e[2]=(a*n-r*o)*v,e[3]=f*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ss.makeScale(e,t)),this}rotate(e){return this.premultiply(ss.makeRotation(-e)),this}translate(e,t){return this.premultiply(ss.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ss=new Ke,fa=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),da=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dc(){const i={enabled:!0,workingColorSpace:Fi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(r.r=In(r.r),r.g=In(r.g),r.b=In(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=Li(r.r),r.g=Li(r.g),r.b=Li(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Vn?Hr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fi]:{primaries:e,whitePoint:n,transfer:Hr,toXYZ:fa,fromXYZ:da,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:fa,fromXYZ:da,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}}),i}const it=Dc();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let di;class Uc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{di===void 0&&(di=Vr("canvas")),di.width=e.width,di.height=e.height;const r=di.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=di}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=In(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(In(t[n]/255)*255):t[n]=In(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nc=0;class Vo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=ar(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(os(r[o].image)):s.push(os(r[o]))}else s=os(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function os(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let Fc=0;const as=new B;class Lt extends ui{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Rn,r=Rn,s=St,o=ai,a=on,l=qt,c=Lt.DEFAULT_ANISOTROPY,u=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=ar(),this.name="",this.source=new Vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(as).x}get height(){return this.source.getSize(as).y}get depth(){return this.source.getSize(as).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ml)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nr:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case Xs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nr:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case Xs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Ml;Lt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],x=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,w=(p+1)/2,C=(d+1)/2,R=(u+f)/4,P=(h+v)/4,G=(x+m)/4;return T>w&&T>C?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=R/n,s=P/n):w>C?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=R/r,s=G/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=P/s,r=G/s),this.set(n,r,s,t),this}let A=Math.sqrt((m-x)*(m-x)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-x)/A,this.y=(h-v)/A,this.z=(f-u)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Oc extends ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Lt(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Vo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends Oc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Cl extends Lt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bc extends Lt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Et{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,en):en.fromBufferAttribute(s,o),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)),dr.applyMatrix4(e.matrixWorld),this.union(dr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),pr.subVectors(this.max,Xi),pi.subVectors(e.a,Xi),mi.subVectors(e.b,Xi),gi.subVectors(e.c,Xi),On.subVectors(mi,pi),Bn.subVectors(gi,mi),qn.subVectors(pi,gi);let t=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-qn.z,qn.y,On.z,0,-On.x,Bn.z,0,-Bn.x,qn.z,0,-qn.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-qn.y,qn.x,0];return!ls(t,pi,mi,gi,pr)||(t=[1,0,0,0,1,0,0,0,1],!ls(t,pi,mi,gi,pr))?!1:(mr.crossVectors(On,Bn),t=[mr.x,mr.y,mr.z],ls(t,pi,mi,gi,pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mn=[new B,new B,new B,new B,new B,new B,new B,new B],en=new B,dr=new Et,pi=new B,mi=new B,gi=new B,On=new B,Bn=new B,qn=new B,Xi=new B,pr=new B,mr=new B,Zn=new B;function ls(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Zn.fromArray(i,s);const a=r.x*Math.abs(Zn.x)+r.y*Math.abs(Zn.y)+r.z*Math.abs(Zn.z),l=e.dot(Zn),c=t.dot(Zn),u=n.dot(Zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const zc=new Et,Yi=new B,cs=new B;class Wo{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yi.subVectors(e,this.center);const t=Yi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Yi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yi.copy(e.center).add(cs)),this.expandByPoint(Yi.copy(e.center).sub(cs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Sn=new B,us=new B,gr=new B,zn=new B,hs=new B,_r=new B,fs=new B;class Pl{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){us.copy(e).add(t).multiplyScalar(.5),gr.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(us);const s=e.distanceTo(t)*.5,o=-this.direction.dot(gr),a=zn.dot(this.direction),l=-zn.dot(gr),c=zn.lengthSq(),u=Math.abs(1-o*o);let h,f,p,x;if(u>0)if(h=o*l-a,f=o*a-l,x=s*u,h>=0)if(f>=-x)if(f<=x){const v=1/u;h*=v,f*=v,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(us).addScaledVector(gr,f),p}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const n=Sn.dot(this.direction),r=Sn.dot(Sn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,r,s){hs.subVectors(t,e),_r.subVectors(n,e),fs.crossVectors(hs,_r);let o=this.direction.dot(fs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,e);const l=a*this.direction.dot(_r.crossVectors(zn,_r));if(l<0)return null;const c=a*this.direction.dot(hs.cross(zn));if(c<0||l+c>o)return null;const u=-a*zn.dot(fs);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,n,r,s,o,a,l,c,u,h,f,p,x,v,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,f,p,x,v,m)}set(e,t,n,r,s,o,a,l,c,u,h,f,p,x,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=x,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/_i.setFromMatrixColumn(e,0).length(),s=1/_i.setFromMatrixColumn(e,1).length(),o=1/_i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,x=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+x*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=x+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,x=c*u,v=c*h;t[0]=f+v*a,t[4]=x*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-x,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,x=c*u,v=c*h;t[0]=f-v*a,t[4]=-o*h,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,x=a*u,v=a*h;t[0]=l*u,t[4]=x*c-p,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=p*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,x=a*l,v=a*c;t[0]=l*u,t[4]=v-f*h,t[8]=x*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+x,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,p=o*c,x=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=o*u,t[9]=p*h-x,t[2]=x*h-p,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kc,e,Hc)}lookAt(e,t,n){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),kn.crossVectors(n,Yt),kn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),kn.crossVectors(n,Yt)),kn.normalize(),xr.crossVectors(Yt,kn),r[0]=kn.x,r[4]=xr.x,r[8]=Yt.x,r[1]=kn.y,r[5]=xr.y,r[9]=Yt.y,r[2]=kn.z,r[6]=xr.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],x=n[2],v=n[6],m=n[10],d=n[14],A=n[3],T=n[7],w=n[11],C=n[15],R=r[0],P=r[4],G=r[8],M=r[12],g=r[1],E=r[5],U=r[9],D=r[13],z=r[2],V=r[6],$=r[10],L=r[14],W=r[3],ee=r[7],Z=r[11],re=r[15];return s[0]=o*R+a*g+l*z+c*W,s[4]=o*P+a*E+l*V+c*ee,s[8]=o*G+a*U+l*$+c*Z,s[12]=o*M+a*D+l*L+c*re,s[1]=u*R+h*g+f*z+p*W,s[5]=u*P+h*E+f*V+p*ee,s[9]=u*G+h*U+f*$+p*Z,s[13]=u*M+h*D+f*L+p*re,s[2]=x*R+v*g+m*z+d*W,s[6]=x*P+v*E+m*V+d*ee,s[10]=x*G+v*U+m*$+d*Z,s[14]=x*M+v*D+m*L+d*re,s[3]=A*R+T*g+w*z+C*W,s[7]=A*P+T*E+w*V+C*ee,s[11]=A*G+T*U+w*$+C*Z,s[15]=A*M+T*D+w*L+C*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],x=e[3],v=e[7],m=e[11],d=e[15],A=l*p-c*f,T=a*p-c*h,w=a*f-l*h,C=o*p-c*u,R=o*f-l*u,P=o*h-a*u;return t*(v*A-m*T+d*w)-n*(x*A-m*C+d*R)+r*(x*T-v*C+d*P)-s*(x*w-v*R+m*P)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],x=e[12],v=e[13],m=e[14],d=e[15],A=h*m*c-v*f*c+v*l*p-a*m*p-h*l*d+a*f*d,T=x*f*c-u*m*c-x*l*p+o*m*p+u*l*d-o*f*d,w=u*v*c-x*h*c+x*a*p-o*v*p-u*a*d+o*h*d,C=x*h*l-u*v*l-x*a*f+o*v*f+u*a*m-o*h*m,R=t*A+n*T+r*w+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=A*P,e[1]=(v*f*s-h*m*s-v*r*p+n*m*p+h*r*d-n*f*d)*P,e[2]=(a*m*s-v*l*s+v*r*c-n*m*c-a*r*d+n*l*d)*P,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*p-n*l*p)*P,e[4]=T*P,e[5]=(u*m*s-x*f*s+x*r*p-t*m*p-u*r*d+t*f*d)*P,e[6]=(x*l*s-o*m*s-x*r*c+t*m*c+o*r*d-t*l*d)*P,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*P,e[8]=w*P,e[9]=(x*h*s-u*v*s-x*n*p+t*v*p+u*n*d-t*h*d)*P,e[10]=(o*v*s-x*a*s+x*n*c-t*v*c-o*n*d+t*a*d)*P,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*p-t*a*p)*P,e[12]=C*P,e[13]=(u*v*r-x*h*r+x*n*f-t*v*f-u*n*m+t*h*m)*P,e[14]=(x*a*r-o*v*r-x*n*l+t*v*l+o*n*m-t*a*m)*P,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,x=s*h,v=o*u,m=o*h,d=a*h,A=l*c,T=l*u,w=l*h,C=n.x,R=n.y,P=n.z;return r[0]=(1-(v+d))*C,r[1]=(p+w)*C,r[2]=(x-T)*C,r[3]=0,r[4]=(p-w)*R,r[5]=(1-(f+d))*R,r[6]=(m+A)*R,r[7]=0,r[8]=(x+T)*P,r[9]=(m-A)*P,r[10]=(1-(f+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=_i.set(r[0],r[1],r[2]).length();const o=_i.set(r[4],r[5],r[6]).length(),a=_i.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),tn.copy(this);const c=1/s,u=1/o,h=1/a;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=h,tn.elements[9]*=h,tn.elements[10]*=h,t.setFromRotationMatrix(tn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=hn,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r);let x,v;if(l)x=s/(o-s),v=o*s/(o-s);else if(a===hn)x=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Gr)x=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=hn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r);let x,v;if(l)x=1/(o-s),v=o/(o-s);else if(a===hn)x=-2/(o-s),v=-(o+s)/(o-s);else if(a===Gr)x=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _i=new B,tn=new gt,kc=new B(0,0,0),Hc=new B(1,1,1),kn=new B,xr=new B,Yt=new B,pa=new gt,ma=new lr;class Qt{constructor(e=0,t=0,n=0,r=Qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ma.setFromEuler(this),this.setFromQuaternion(ma,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qt.DEFAULT_ORDER="XYZ";class Xo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gc=0;const ga=new B,xi=new lr,bn=new gt,vr=new B,$i=new B,Vc=new B,Wc=new lr,_a=new B(1,0,0),xa=new B(0,1,0),va=new B(0,0,1),Ma={type:"added"},Xc={type:"removed"},vi={type:"childadded",child:null},ds={type:"childremoved",child:null};class Dt extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new B,t=new Qt,n=new lr,r=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ke}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis(_a,e)}rotateY(e){return this.rotateOnAxis(xa,e)}rotateZ(e){return this.rotateOnAxis(va,e)}translateOnAxis(e,t){return ga.copy(e).applyQuaternion(this.quaternion),this.position.add(ga.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_a,e)}translateY(e){return this.translateOnAxis(xa,e)}translateZ(e){return this.translateOnAxis(va,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vr.copy(e):vr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt($i,vr,this.up):bn.lookAt(vr,$i,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),xi.setFromRotationMatrix(bn),this.quaternion.premultiply(xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ma),vi.child=e,this.dispatchEvent(vi),vi.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xc),ds.child=e,this.dispatchEvent(ds),ds.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ma),vi.child=e,this.dispatchEvent(vi),vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,Vc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,Wc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new B(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new B,En=new B,ps=new B,yn=new B,Mi=new B,Si=new B,Sa=new B,ms=new B,gs=new B,_s=new B,xs=new Mt,vs=new Mt,Ms=new Mt;class sn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),nn.subVectors(e,t),r.cross(nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){nn.subVectors(r,t),En.subVectors(n,t),ps.subVectors(e,t);const o=nn.dot(nn),a=nn.dot(En),l=nn.dot(ps),c=En.dot(En),u=En.dot(ps),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,x=(o*u-a*l)*f;return s.set(1-p-x,x,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yn.x),l.addScaledVector(o,yn.y),l.addScaledVector(a,yn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return xs.setScalar(0),vs.setScalar(0),Ms.setScalar(0),xs.fromBufferAttribute(e,t),vs.fromBufferAttribute(e,n),Ms.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(xs,s.x),o.addScaledVector(vs,s.y),o.addScaledVector(Ms,s.z),o}static isFrontFacing(e,t,n,r){return nn.subVectors(n,t),En.subVectors(e,t),nn.cross(En).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),nn.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Mi.subVectors(r,n),Si.subVectors(s,n),ms.subVectors(e,n);const l=Mi.dot(ms),c=Si.dot(ms);if(l<=0&&c<=0)return t.copy(n);gs.subVectors(e,r);const u=Mi.dot(gs),h=Si.dot(gs);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Mi,o);_s.subVectors(e,s);const p=Mi.dot(_s),x=Si.dot(_s);if(x>=0&&p<=x)return t.copy(s);const v=p*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(Si,a);const m=u*x-p*h;if(m<=0&&h-u>=0&&p-x>=0)return Sa.subVectors(s,r),a=(h-u)/(h-u+(p-x)),t.copy(r).addScaledVector(Sa,a);const d=1/(m+v+f);return o=v*d,a=f*d,t.copy(n).addScaledVector(Mi,o).addScaledVector(Si,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Il={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Ss(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=it.workingColorSpace){if(e=Lc(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ss(o,s,e+1/3),this.g=Ss(o,s,e),this.b=Ss(o,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=mt){function n(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){const n=Il[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return it.workingToColorSpace(Nt.copy(this),e),Math.round(tt(Nt.r*255,0,255))*65536+Math.round(tt(Nt.g*255,0,255))*256+Math.round(tt(Nt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Nt.copy(this),t);const n=Nt.r,r=Nt.g,s=Nt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=mt){it.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,r=Nt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Mr);const n=is(Hn.h,Mr.h,t),r=is(Hn.s,Mr.s,t),s=is(Hn.l,Mr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new qe;qe.NAMES=Il;let Yc=0;class zi extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=Ii,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Us,this.blendDst=Ns,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Us&&(n.blendSrc=this.blendSrc),this.blendDst!==Ns&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gn extends zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new B,Sr=new rt;let $c=0;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$c++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=aa,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),r=Gt(r,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==aa&&(e.usage=this.usage),e}}class Ll extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dl extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ln extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qc=0;const Kt=new gt,bs=new Dt,bi=new B,$t=new Et,qi=new Et,Rt=new B;class xn extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rl(e)?Dl:Ll)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return bs.lookAt(e),bs.updateMatrix(),this.applyMatrix4(bs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ln(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Et);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];qi.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors($t.min,qi.min),$t.expandByPoint(Rt),Rt.addVectors($t.max,qi.max),$t.expandByPoint(Rt)):($t.expandByPoint(qi.min),$t.expandByPoint(qi.max))}$t.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Rt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rt.fromBufferAttribute(a,c),l&&(bi.fromBufferAttribute(e,c),Rt.add(bi)),r=Math.max(r,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let G=0;G<n.count;G++)a[G]=new B,l[G]=new B;const c=new B,u=new B,h=new B,f=new rt,p=new rt,x=new rt,v=new B,m=new B;function d(G,M,g){c.fromBufferAttribute(n,G),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,g),f.fromBufferAttribute(s,G),p.fromBufferAttribute(s,M),x.fromBufferAttribute(s,g),u.sub(c),h.sub(c),p.sub(f),x.sub(f);const E=1/(p.x*x.y-x.x*p.y);isFinite(E)&&(v.copy(u).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(E),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(E),a[G].add(v),a[M].add(v),a[g].add(v),l[G].add(m),l[M].add(m),l[g].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let G=0,M=A.length;G<M;++G){const g=A[G],E=g.start,U=g.count;for(let D=E,z=E+U;D<z;D+=3)d(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const T=new B,w=new B,C=new B,R=new B;function P(G){C.fromBufferAttribute(r,G),R.copy(C);const M=a[G];T.copy(M),T.sub(C.multiplyScalar(C.dot(M))).normalize(),w.crossVectors(R,M);const E=w.dot(l[G])<0?-1:1;o.setXYZW(G,T.x,T.y,T.z,E)}for(let G=0,M=A.length;G<M;++G){const g=A[G],E=g.start,U=g.count;for(let D=E,z=E+U;D<z;D+=3)P(e.getX(D+0)),P(e.getX(D+1)),P(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,x=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)f[x++]=c[p++]}return new Jt(f,u,h)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ba=new gt,Kn=new Pl,br=new Wo,Ea=new B,Er=new B,yr=new B,Tr=new B,Es=new B,wr=new B,ya=new B,Ar=new B;class Pt extends Dt{constructor(e=new xn,t=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){wr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Es.fromBufferAttribute(h,e),o?wr.addScaledVector(Es,u):wr.addScaledVector(Es.sub(t),u))}t.add(wr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(s),Kn.copy(e.ray).recast(e.near),!(br.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(br,Ea)===null||Kn.origin.distanceToSquared(Ea)>(e.far-e.near)**2))&&(ba.copy(s).invert(),Kn.copy(e.ray).applyMatrix4(ba),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Kn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){const m=f[x],d=o[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=A,C=T;w<C;w+=3){const R=a.getX(w),P=a.getX(w+1),G=a.getX(w+2);r=Rr(this,d,e,n,c,u,h,R,P,G),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=x,d=v;m<d;m+=3){const A=a.getX(m),T=a.getX(m+1),w=a.getX(m+2);r=Rr(this,o,e,n,c,u,h,A,T,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){const m=f[x],d=o[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=A,C=T;w<C;w+=3){const R=w,P=w+1,G=w+2;r=Rr(this,d,e,n,c,u,h,R,P,G),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=x,d=v;m<d;m+=3){const A=m,T=m+1,w=m+2;r=Rr(this,o,e,n,c,u,h,A,T,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Zc(i,e,t,n,r,s,o,a){let l;if(e.side===Vt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Yn,a),l===null)return null;Ar.copy(a),Ar.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ar);return c<t.near||c>t.far?null:{distance:c,point:Ar.clone(),object:i}}function Rr(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Er),i.getVertexPosition(l,yr),i.getVertexPosition(c,Tr);const u=Zc(i,e,t,n,Er,yr,Tr,ya);if(u){const h=new B;sn.getBarycoord(ya,Er,yr,Tr,h),r&&(u.uv=sn.getInterpolatedAttribute(r,a,l,c,h,new rt)),s&&(u.uv1=sn.getInterpolatedAttribute(s,a,l,c,h,new rt)),o&&(u.normal=sn.getInterpolatedAttribute(o,a,l,c,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new B,materialIndex:0};sn.getNormal(Er,yr,Tr,f.normal),u.face=f,u.barycoord=h}return u}class Fn extends xn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,r,o,2),x("x","z","y",1,-1,e,n,-t,r,o,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ln(c,3)),this.setAttribute("normal",new Ln(u,3)),this.setAttribute("uv",new Ln(h,2));function x(v,m,d,A,T,w,C,R,P,G,M){const g=w/P,E=C/G,U=w/2,D=C/2,z=R/2,V=P+1,$=G+1;let L=0,W=0;const ee=new B;for(let Z=0;Z<$;Z++){const re=Z*E-D;for(let _e=0;_e<V;_e++){const Me=_e*g-U;ee[v]=Me*A,ee[m]=re*T,ee[d]=z,c.push(ee.x,ee.y,ee.z),ee[v]=0,ee[m]=0,ee[d]=R>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(_e/P),h.push(1-Z/G),L+=1}}for(let Z=0;Z<G;Z++)for(let re=0;re<P;re++){const _e=f+re+V*Z,Me=f+re+V*(Z+1),He=f+(re+1)+V*(Z+1),je=f+(re+1)+V*Z;l.push(_e,Me,je),l.push(Me,He,je),W+=6}a.addGroup(p,W,M),p+=W,f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Bt(i){const e={};for(let t=0;t<i.length;t++){const n=Oi(i[t]);for(const r in n)e[r]=n[r]}return e}function Kc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ul(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const jc={clone:Oi,merge:Bt};var Jc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jc,this.fragmentShader=Qc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=Kc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nl extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new B,Ta=new rt,wa=new rt;class jt extends Nl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=To*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return To*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,Ta,wa),t.subVectors(wa,Ta)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ns*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ei=-90,yi=1;class eu extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new jt(Ei,yi,e,t);r.layers=this.layers,this.add(r);const s=new jt(Ei,yi,e,t);s.layers=this.layers,this.add(s);const o=new jt(Ei,yi,e,t);o.layers=this.layers,this.add(o);const a=new jt(Ei,yi,e,t);a.layers=this.layers,this.add(a);const l=new jt(Ei,yi,e,t);l.layers=this.layers,this.add(l);const c=new jt(Ei,yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Fl extends Lt{constructor(e=[],t=ci,n,r,s,o,a,l,c,u){super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ol extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Fl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fn(5,5,5),s=new _n({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Pn});s.uniforms.tEquirect.value=t;const o=new Pt(r,s),a=t.minFilter;return t.minFilter===ai&&(t.minFilter=St),new eu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class Cn extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tu={type:"move"};class ys{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tu)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Cn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Wr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=t,this.far=n}clone(){return new Wr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nu extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class iu extends Lt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=It,u=It,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ts=new B,ru=new B,su=new Ke;class ti{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ts.subVectors(n,t).cross(ru.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ts),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||su.getNormalMatrix(e),r=this.coplanarPoint(Ts).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new Wo,ou=new rt(.5,.5),Cr=new B;class Yo{constructor(e=new ti,t=new ti,n=new ti,r=new ti,s=new ti,o=new ti){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],p=s[7],x=s[8],v=s[9],m=s[10],d=s[11],A=s[12],T=s[13],w=s[14],C=s[15];if(r[0].setComponents(c-o,p-u,d-x,C-A).normalize(),r[1].setComponents(c+o,p+u,d+x,C+A).normalize(),r[2].setComponents(c+a,p+h,d+v,C+T).normalize(),r[3].setComponents(c-a,p-h,d-v,C-T).normalize(),n)r[4].setComponents(l,f,m,w).normalize(),r[5].setComponents(c-l,p-f,d-m,C-w).normalize();else if(r[4].setComponents(c-l,p-f,d-m,C-w).normalize(),t===hn)r[5].setComponents(c+l,p+f,d+m,C+w).normalize();else if(t===Gr)r[5].setComponents(l,f,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(e){jn.center.set(0,0,0);const t=ou.distanceTo(e.center);return jn.radius=.7071067811865476+t,jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Cr.x=r.normal.x>0?e.max.x:e.min.x,Cr.y=r.normal.y>0?e.max.y:e.min.y,Cr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class au extends Lt{constructor(e,t,n,r,s=St,o=St,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function h(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class vn extends Lt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class or extends Lt{constructor(e,t,n=mn,r,s,o,a=It,l=It,c,u=Nn,h=1){if(u!==Nn&&u!==li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class lu extends or{constructor(e,t=mn,n=ci,r,s,o=It,a=It,l,c=Nn){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Bl extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ki extends xn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,p=[],x=[],v=[],m=[];for(let d=0;d<u;d++){const A=d*f-o;for(let T=0;T<c;T++){const w=T*h-s;x.push(w,-A,0),v.push(0,0,1),m.push(T/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){const T=A+c*d,w=A+c*(d+1),C=A+1+c*(d+1),R=A+1+c*d;p.push(T,w,R),p.push(w,C,R)}this.setIndex(p),this.setAttribute("position",new Ln(x,3)),this.setAttribute("normal",new Ln(v,3)),this.setAttribute("uv",new Ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.width,e.height,e.widthSegments,e.heightSegments)}}class cu extends _n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class uu extends zi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qe(16777215),this.specular=new qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ko,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tt extends zi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ko,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hu extends zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fu extends zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $o extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class du extends $o{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ws=new gt,Aa=new B,Ra=new B;class pu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yo,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Aa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Aa),Ra.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ra),t.updateMatrixWorld(),ws.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ws,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ws)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qo extends Nl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class mu extends pu{constructor(){super(new qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gu extends $o{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new mu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class _u extends $o{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xu extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class vu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ca=new gt;class Mu{constructor(e,t,n=0,r=1/0){this.ray=new Pl(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):nt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ca.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ca),this}intersectObject(e,t=!0,n=[]){return wo(e,this,n,t),n.sort(Pa),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)wo(e[r],this,n,t);return n.sort(Pa),n}}function Pa(i,e){return i.distance-e.distance}function wo(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)wo(s[o],e,t,!0)}}class Su extends ui{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ye("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ia(i,e,t,n){const r=bu(n);switch(t){case Tl:return i*e;case Al:return i*e/r.components*r.byteLength;case Oo:return i*e/r.components*r.byteLength;case Ni:return i*e*2/r.components*r.byteLength;case Bo:return i*e*2/r.components*r.byteLength;case wl:return i*e*3/r.components*r.byteLength;case on:return i*e*4/r.components*r.byteLength;case zo:return i*e*4/r.components*r.byteLength;case Nr:case Fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Or:case Br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $s:case Zs:return Math.max(i,16)*Math.max(e,8)/4;case Ys:case qs:return Math.max(i,8)*Math.max(e,8)/2;case Ks:case js:case Qs:case eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Js:case to:case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ro:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case so:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case oo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ao:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case lo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case co:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case uo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ho:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case po:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case mo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case go:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _o:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xo:case vo:case Mo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case So:case bo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Eo:case yo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bu(i){switch(i){case qt:case Sl:return{byteLength:1,components:1};case ir:case bl:case Un:return{byteLength:2,components:1};case No:case Fo:return{byteLength:2,components:4};case mn:case Uo:case un:return{byteLength:4,components:1};case El:case yl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Do}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Do);function zl(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Eu(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<h.length;p++){const x=h[f],v=h[p];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,x=h.length;p<x;p++){const v=h[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var yu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tu=`#ifdef USE_ALPHAHASH
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
#endif`,wu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Au=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ru=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pu=`#ifdef USE_AOMAP
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
#endif`,Iu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lu=`#ifdef USE_BATCHING
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
#endif`,Du=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ou=`#ifdef USE_IRIDESCENCE
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
#endif`,Bu=`#ifdef USE_BUMPMAP
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
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$u=`#define PI 3.141592653589793
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
} // validated`,qu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zu=`vec3 transformedNormal = objectNormal;
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
#endif`,Ku=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ju=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ju=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eh="gl_FragColor = linearToOutputTexel( gl_FragColor );",th=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nh=`#ifdef USE_ENVMAP
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
#endif`,ih=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rh=`#ifdef USE_ENVMAP
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
#endif`,sh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oh=`#ifdef USE_ENVMAP
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
#endif`,lh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ch=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hh=`#ifdef USE_GRADIENTMAP
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
}`,fh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ph=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mh=`uniform bool receiveShadow;
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
#endif`,gh=`#ifdef USE_ENVMAP
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
#endif`,_h=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sh=`PhysicalMaterial material;
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
#endif`,bh=`uniform sampler2D dfgLUT;
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
}`,Eh=`
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
#endif`,yh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Th=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ah=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ch=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ph=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ih=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dh=`#if defined( USE_POINTS_UV )
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
#endif`,Uh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Oh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zh=`#ifdef USE_MORPHTARGETS
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
#endif`,kh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yh=`#ifdef USE_NORMALMAP
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
#endif`,$h=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ef=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,of=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cf=`float getShadowMask() {
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
}`,uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hf=`#ifdef USE_SKINNING
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
#endif`,ff=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,df=`#ifdef USE_SKINNING
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
#endif`,pf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_f=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xf=`#ifdef USE_TRANSMISSION
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
#endif`,vf=`#ifdef USE_TRANSMISSION
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
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ef=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tf=`uniform sampler2D t2D;
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
}`,wf=`varying vec3 vWorldDirection;
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
}`,Rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`#include <common>
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
}`,If=`#if DEPTH_PACKING == 3200
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
}`,Lf=`#define DISTANCE
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
}`,Df=`#define DISTANCE
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
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`uniform float scale;
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
}`,Of=`uniform vec3 diffuse;
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
}`,Bf=`#include <common>
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
}`,zf=`uniform vec3 diffuse;
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
}`,kf=`#define LAMBERT
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
}`,Hf=`#define LAMBERT
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
}`,Gf=`#define MATCAP
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
}`,Vf=`#define MATCAP
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
}`,Wf=`#define NORMAL
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
}`,Xf=`#define NORMAL
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
}`,Yf=`#define PHONG
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
}`,$f=`#define PHONG
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
}`,qf=`#define STANDARD
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
}`,Zf=`#define STANDARD
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
}`,Kf=`#define TOON
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
}`,jf=`#define TOON
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
}`,Jf=`uniform float size;
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
}`,Qf=`uniform vec3 diffuse;
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
}`,ed=`#include <common>
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
}`,td=`uniform vec3 color;
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
}`,nd=`uniform float rotation;
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
}`,id=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:yu,alphahash_pars_fragment:Tu,alphamap_fragment:wu,alphamap_pars_fragment:Au,alphatest_fragment:Ru,alphatest_pars_fragment:Cu,aomap_fragment:Pu,aomap_pars_fragment:Iu,batching_pars_vertex:Lu,batching_vertex:Du,begin_vertex:Uu,beginnormal_vertex:Nu,bsdfs:Fu,iridescence_fragment:Ou,bumpmap_pars_fragment:Bu,clipping_planes_fragment:zu,clipping_planes_pars_fragment:ku,clipping_planes_pars_vertex:Hu,clipping_planes_vertex:Gu,color_fragment:Vu,color_pars_fragment:Wu,color_pars_vertex:Xu,color_vertex:Yu,common:$u,cube_uv_reflection_fragment:qu,defaultnormal_vertex:Zu,displacementmap_pars_vertex:Ku,displacementmap_vertex:ju,emissivemap_fragment:Ju,emissivemap_pars_fragment:Qu,colorspace_fragment:eh,colorspace_pars_fragment:th,envmap_fragment:nh,envmap_common_pars_fragment:ih,envmap_pars_fragment:rh,envmap_pars_vertex:sh,envmap_physical_pars_fragment:gh,envmap_vertex:oh,fog_vertex:ah,fog_pars_vertex:lh,fog_fragment:ch,fog_pars_fragment:uh,gradientmap_pars_fragment:hh,lightmap_pars_fragment:fh,lights_lambert_fragment:dh,lights_lambert_pars_fragment:ph,lights_pars_begin:mh,lights_toon_fragment:_h,lights_toon_pars_fragment:xh,lights_phong_fragment:vh,lights_phong_pars_fragment:Mh,lights_physical_fragment:Sh,lights_physical_pars_fragment:bh,lights_fragment_begin:Eh,lights_fragment_maps:yh,lights_fragment_end:Th,logdepthbuf_fragment:wh,logdepthbuf_pars_fragment:Ah,logdepthbuf_pars_vertex:Rh,logdepthbuf_vertex:Ch,map_fragment:Ph,map_pars_fragment:Ih,map_particle_fragment:Lh,map_particle_pars_fragment:Dh,metalnessmap_fragment:Uh,metalnessmap_pars_fragment:Nh,morphinstance_vertex:Fh,morphcolor_vertex:Oh,morphnormal_vertex:Bh,morphtarget_pars_vertex:zh,morphtarget_vertex:kh,normal_fragment_begin:Hh,normal_fragment_maps:Gh,normal_pars_fragment:Vh,normal_pars_vertex:Wh,normal_vertex:Xh,normalmap_pars_fragment:Yh,clearcoat_normal_fragment_begin:$h,clearcoat_normal_fragment_maps:qh,clearcoat_pars_fragment:Zh,iridescence_pars_fragment:Kh,opaque_fragment:jh,packing:Jh,premultiplied_alpha_fragment:Qh,project_vertex:ef,dithering_fragment:tf,dithering_pars_fragment:nf,roughnessmap_fragment:rf,roughnessmap_pars_fragment:sf,shadowmap_pars_fragment:of,shadowmap_pars_vertex:af,shadowmap_vertex:lf,shadowmask_pars_fragment:cf,skinbase_vertex:uf,skinning_pars_vertex:hf,skinning_vertex:ff,skinnormal_vertex:df,specularmap_fragment:pf,specularmap_pars_fragment:mf,tonemapping_fragment:gf,tonemapping_pars_fragment:_f,transmission_fragment:xf,transmission_pars_fragment:vf,uv_pars_fragment:Mf,uv_pars_vertex:Sf,uv_vertex:bf,worldpos_vertex:Ef,background_vert:yf,background_frag:Tf,backgroundCube_vert:wf,backgroundCube_frag:Af,cube_vert:Rf,cube_frag:Cf,depth_vert:Pf,depth_frag:If,distance_vert:Lf,distance_frag:Df,equirect_vert:Uf,equirect_frag:Nf,linedashed_vert:Ff,linedashed_frag:Of,meshbasic_vert:Bf,meshbasic_frag:zf,meshlambert_vert:kf,meshlambert_frag:Hf,meshmatcap_vert:Gf,meshmatcap_frag:Vf,meshnormal_vert:Wf,meshnormal_frag:Xf,meshphong_vert:Yf,meshphong_frag:$f,meshphysical_vert:qf,meshphysical_frag:Zf,meshtoon_vert:Kf,meshtoon_frag:jf,points_vert:Jf,points_frag:Qf,shadow_vert:ed,shadow_frag:td,sprite_vert:nd,sprite_frag:id},Te={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},cn={basic:{uniforms:Bt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Bt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new qe(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Bt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Bt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Bt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new qe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Bt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Bt([Te.points,Te.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Bt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Bt([Te.common,Te.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Bt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Bt([Te.sprite,Te.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:Bt([Te.common,Te.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:Bt([Te.lights,Te.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};cn.physical={uniforms:Bt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Pr={r:0,b:0,g:0},Jn=new Qt,rd=new gt;function sd(i,e,t,n,r,s,o){const a=new qe(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function x(T){let w=T.isScene===!0?T.background:null;return w&&w.isTexture&&(w=(T.backgroundBlurriness>0?t:e).get(w)),w}function v(T){let w=!1;const C=x(T);C===null?d(a,l):C&&C.isColor&&(d(C,1),w=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,w){const C=x(w);C&&(C.isCubeTexture||C.mapping===Zr)?(u===void 0&&(u=new Pt(new Fn(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Oi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,P,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Jn.copy(w.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rd.makeRotationFromEuler(Jn)),u.material.toneMapped=it.getTransfer(C.colorSpace)!==ut,(h!==C||f!==C.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=C,f=C.version,p=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Pt(new ki(2,2),new _n({name:"BackgroundMaterial",uniforms:Oi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=it.getTransfer(C.colorSpace)!==ut,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||f!==C.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=C,f=C.version,p=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,w){T.getRGB(Pr,Ul(i)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,w,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,w=1){a.set(T),l=w,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(a,l)},render:v,addToRenderList:m,dispose:A}}function od(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(g,E,U,D,z){let V=!1;const $=h(D,U,E);s!==$&&(s=$,c(s.object)),V=p(g,D,U,z),V&&x(g,D,U,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,w(g,E,U,D),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(g){return i.bindVertexArray(g)}function u(g){return i.deleteVertexArray(g)}function h(g,E,U){const D=U.wireframe===!0;let z=n[g.id];z===void 0&&(z={},n[g.id]=z);let V=z[E.id];V===void 0&&(V={},z[E.id]=V);let $=V[D];return $===void 0&&($=f(l()),V[D]=$),$}function f(g){const E=[],U=[],D=[];for(let z=0;z<t;z++)E[z]=0,U[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:U,attributeDivisors:D,object:g,attributes:{},index:null}}function p(g,E,U,D){const z=s.attributes,V=E.attributes;let $=0;const L=U.getAttributes();for(const W in L)if(L[W].location>=0){const Z=z[W];let re=V[W];if(re===void 0&&(W==="instanceMatrix"&&g.instanceMatrix&&(re=g.instanceMatrix),W==="instanceColor"&&g.instanceColor&&(re=g.instanceColor)),Z===void 0||Z.attribute!==re||re&&Z.data!==re.data)return!0;$++}return s.attributesNum!==$||s.index!==D}function x(g,E,U,D){const z={},V=E.attributes;let $=0;const L=U.getAttributes();for(const W in L)if(L[W].location>=0){let Z=V[W];Z===void 0&&(W==="instanceMatrix"&&g.instanceMatrix&&(Z=g.instanceMatrix),W==="instanceColor"&&g.instanceColor&&(Z=g.instanceColor));const re={};re.attribute=Z,Z&&Z.data&&(re.data=Z.data),z[W]=re,$++}s.attributes=z,s.attributesNum=$,s.index=D}function v(){const g=s.newAttributes;for(let E=0,U=g.length;E<U;E++)g[E]=0}function m(g){d(g,0)}function d(g,E){const U=s.newAttributes,D=s.enabledAttributes,z=s.attributeDivisors;U[g]=1,D[g]===0&&(i.enableVertexAttribArray(g),D[g]=1),z[g]!==E&&(i.vertexAttribDivisor(g,E),z[g]=E)}function A(){const g=s.newAttributes,E=s.enabledAttributes;for(let U=0,D=E.length;U<D;U++)E[U]!==g[U]&&(i.disableVertexAttribArray(U),E[U]=0)}function T(g,E,U,D,z,V,$){$===!0?i.vertexAttribIPointer(g,E,U,z,V):i.vertexAttribPointer(g,E,U,D,z,V)}function w(g,E,U,D){v();const z=D.attributes,V=U.getAttributes(),$=E.defaultAttributeValues;for(const L in V){const W=V[L];if(W.location>=0){let ee=z[L];if(ee===void 0&&(L==="instanceMatrix"&&g.instanceMatrix&&(ee=g.instanceMatrix),L==="instanceColor"&&g.instanceColor&&(ee=g.instanceColor)),ee!==void 0){const Z=ee.normalized,re=ee.itemSize,_e=e.get(ee);if(_e===void 0)continue;const Me=_e.buffer,He=_e.type,je=_e.bytesPerElement,K=He===i.INT||He===i.UNSIGNED_INT||ee.gpuType===Uo;if(ee.isInterleavedBufferAttribute){const ne=ee.data,ae=ne.stride,Se=ee.offset;if(ne.isInstancedInterleavedBuffer){for(let pe=0;pe<W.locationSize;pe++)d(W.location+pe,ne.meshPerAttribute);g.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let pe=0;pe<W.locationSize;pe++)m(W.location+pe);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let pe=0;pe<W.locationSize;pe++)T(W.location+pe,re/W.locationSize,He,Z,ae*je,(Se+re/W.locationSize*pe)*je,K)}else{if(ee.isInstancedBufferAttribute){for(let ne=0;ne<W.locationSize;ne++)d(W.location+ne,ee.meshPerAttribute);g.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ne=0;ne<W.locationSize;ne++)m(W.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let ne=0;ne<W.locationSize;ne++)T(W.location+ne,re/W.locationSize,He,Z,re*je,re/W.locationSize*ne*je,K)}}else if($!==void 0){const Z=$[L];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(W.location,Z);break;case 3:i.vertexAttrib3fv(W.location,Z);break;case 4:i.vertexAttrib4fv(W.location,Z);break;default:i.vertexAttrib1fv(W.location,Z)}}}}A()}function C(){G();for(const g in n){const E=n[g];for(const U in E){const D=E[U];for(const z in D)u(D[z].object),delete D[z];delete E[U]}delete n[g]}}function R(g){if(n[g.id]===void 0)return;const E=n[g.id];for(const U in E){const D=E[U];for(const z in D)u(D[z].object),delete D[z];delete E[U]}delete n[g.id]}function P(g){for(const E in n){const U=n[E];if(U[g.id]===void 0)continue;const D=U[g.id];for(const z in D)u(D[z].object),delete D[z];delete U[g.id]}}function G(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:G,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function ad(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],u[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let x=0;for(let v=0;v<h;v++)x+=u[v]*f[v];t.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ld(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==on&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const G=P===Un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==qt&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==un&&!G)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ye("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:w,maxSamples:C,samples:R}}function cd(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new ti,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const x=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const A=s?0:n,T=A*4;let w=d.clippingState||null;l.value=w,w=u(x,f,T,p);for(let C=0;C!==T;++C)w[C]=t[C];d.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,x){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,x!==!0||m===null){const d=p+v*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,w=p;T!==v;++T,w+=4)o.copy(h[T]).applyMatrix4(A,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function ud(i){let e=new WeakMap;function t(o,a){return a===Vs?o.mapping=ci:a===Ws&&(o.mapping=Ui),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vs||a===Ws)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ol(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Wn=4,La=[.125,.215,.35,.446,.526,.582],ri=20,hd=256,Zi=new qo,Da=new qe;let As=null,Rs=0,Cs=0,Ps=!1;const fd=new B;class Ua{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=fd}=s;As=this._renderer.getRenderTarget(),Rs=this._renderer.getActiveCubeFace(),Cs=this._renderer.getActiveMipmapLevel(),Ps=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(As,Rs,Cs),this._renderer.xr.enabled=Ps,e.scissorTest=!1,Ti(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ci||e.mapping===Ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),As=this._renderer.getRenderTarget(),Rs=this._renderer.getActiveCubeFace(),Cs=this._renderer.getActiveMipmapLevel(),Ps=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:St,minFilter:St,generateMipmaps:!1,type:Un,format:on,colorSpace:Fi,depthBuffer:!1},r=Na(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Na(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=dd(s)),this._blurMaterial=md(s,e,t),this._ggxMaterial=pd(s,e,t)}return r}_compileMaterial(e){const t=new Pt(new xn,e);this._renderer.compile(t,Zi)}_sceneToCubeUV(e,t,n,r,s){const l=new jt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Da),h.toneMapping=dn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new Fn,new gn({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let d=!1;const A=e.background;A?A.isColor&&(m.color.copy(A),e.background=null,d=!0):(m.color.copy(Da),d=!0);for(let T=0;T<6;T++){const w=T%3;w===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):w===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const C=this._cubeSize;Ti(r,w*C,T>2?C:0,C,C),h.setRenderTarget(r),d&&h.render(v,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ci||e.mapping===Ui;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fa());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ti(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Zi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,p=h*f,{_lodMax:x}=this,v=this._sizeLods[n],m=3*v*(n>x-Wn?n-x+Wn:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,Ti(s,m,d,3*v,2*v),r.setRenderTarget(s),r.render(a,Zi),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-n,Ti(e,m,d,3*v,2*v),r.setRenderTarget(e),r.render(a,Zi)}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ri-1),v=s/x,m=isFinite(s)?1+Math.floor(u*v):ri;m>ri&&Ye(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ri}`);const d=[];let A=0;for(let P=0;P<ri;++P){const G=P/v,M=Math.exp(-G*G/2);d.push(M),P===0?A+=M:P<m&&(A+=2*M)}for(let P=0;P<d.length;P++)d[P]=d[P]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=x,f.mipInt.value=T-n;const w=this._sizeLods[r],C=3*w*(r>T-Wn?r-T+Wn:0),R=4*(this._cubeSize-w);Ti(t,C,R,3*w,2*w),l.setRenderTarget(t),l.render(h,Zi)}}function dd(i){const e=[],t=[],n=[];let r=i;const s=i-Wn+1+La.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Wn?l=La[o-i+Wn-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,x=6,v=3,m=2,d=1,A=new Float32Array(v*x*p),T=new Float32Array(m*x*p),w=new Float32Array(d*x*p);for(let R=0;R<p;R++){const P=R%3*2/3-1,G=R>2?0:-1,M=[P,G,0,P+2/3,G,0,P+2/3,G+1,0,P,G,0,P+2/3,G+1,0,P,G+1,0];A.set(M,v*x*R),T.set(f,m*x*R);const g=[R,R,R,R,R,R];w.set(g,d*x*R)}const C=new xn;C.setAttribute("position",new Jt(A,v)),C.setAttribute("uv",new Jt(T,m)),C.setAttribute("faceIndex",new Jt(w,d)),n.push(new Pt(C,null)),r>Wn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Na(i,e,t){const n=new pn(i,e,t);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ti(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function pd(i,e,t){return new _n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hd,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kr(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function md(i,e,t){const n=new Float32Array(ri),r=new B(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kr(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Fa(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kr(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Oa(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Kr(){return`

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
	`}function gd(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vs||l===Ws,u=l===ci||l===Ui;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ua(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Ua(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function _d(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&sr("WebGLRenderer: "+n+" extension not supported."),r}}}function xd(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,x=h.attributes.position;let v=0;if(p!==null){const A=p.array;v=p.version;for(let T=0,w=A.length;T<w;T+=3){const C=A[T+0],R=A[T+1],P=A[T+2];f.push(C,R,R,P,P,C)}}else if(x!==void 0){const A=x.array;v=x.version;for(let T=0,w=A.length/3-1;T<w;T+=3){const C=T+0,R=T+1,P=T+2;f.push(C,R,R,P,P,C)}}else return;const m=new(Rl(f)?Dl:Ll)(f,1);m.version=v;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function vd(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*o),t.update(p,n,1)}function c(f,p,x){x!==0&&(i.drawElementsInstanced(n,p,s,f*o,x),t.update(p,n,x))}function u(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,x);let m=0;for(let d=0;d<x;d++)m+=p[d];t.update(m,n,1)}function h(f,p,x,v){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,v,0,x);let d=0;for(let A=0;A<x;A++)d+=p[A]*v[A];t.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Md(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:nt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Sd(i,e,t){const n=new WeakMap,r=new Mt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let g=function(){G.dispose(),n.delete(a),a.removeEventListener("dispose",g)};var p=g;f!==void 0&&f.texture.dispose();const x=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let w=0;x===!0&&(w=1),v===!0&&(w=2),m===!0&&(w=3);let C=a.attributes.position.count*w,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const P=new Float32Array(C*R*4*h),G=new Cl(P,C,R,h);G.type=un,G.needsUpdate=!0;const M=w*4;for(let E=0;E<h;E++){const U=d[E],D=A[E],z=T[E],V=C*R*4*E;for(let $=0;$<U.count;$++){const L=$*M;x===!0&&(r.fromBufferAttribute(U,$),P[V+L+0]=r.x,P[V+L+1]=r.y,P[V+L+2]=r.z,P[V+L+3]=0),v===!0&&(r.fromBufferAttribute(D,$),P[V+L+4]=r.x,P[V+L+5]=r.y,P[V+L+6]=r.z,P[V+L+7]=0),m===!0&&(r.fromBufferAttribute(z,$),P[V+L+8]=r.x,P[V+L+9]=r.y,P[V+L+10]=r.z,P[V+L+11]=z.itemSize===4?r.w:1)}}f={count:h,texture:G,size:new rt(C,R)},n.set(a,f),a.addEventListener("dispose",g)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const v=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function bd(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Ed={[dl]:"LINEAR_TONE_MAPPING",[pl]:"REINHARD_TONE_MAPPING",[ml]:"CINEON_TONE_MAPPING",[gl]:"ACES_FILMIC_TONE_MAPPING",[xl]:"AGX_TONE_MAPPING",[vl]:"NEUTRAL_TONE_MAPPING",[_l]:"CUSTOM_TONE_MAPPING"};function yd(i,e,t,n,r){const s=new pn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),o=new pn(e,t,{type:Un,depthBuffer:!1,stencilBuffer:!1}),a=new xn;a.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ln([0,2,0,0,2,0],2));const l=new cu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Pt(a,l),u=new qo(-1,1,1,-1,0,1);let h=null,f=null,p=!1,x,v=null,m=[],d=!1;this.setSize=function(A,T){s.setSize(A,T),o.setSize(A,T);for(let w=0;w<m.length;w++){const C=m[w];C.setSize&&C.setSize(A,T)}},this.setEffects=function(A){m=A,d=m.length>0&&m[0].isRenderPass===!0;const T=s.width,w=s.height;for(let C=0;C<m.length;C++){const R=m[C];R.setSize&&R.setSize(T,w)}},this.begin=function(A,T){if(p||A.toneMapping===dn&&m.length===0)return!1;if(v=T,T!==null){const w=T.width,C=T.height;(s.width!==w||s.height!==C)&&this.setSize(w,C)}return d===!1&&A.setRenderTarget(s),x=A.toneMapping,A.toneMapping=dn,!0},this.hasRenderPass=function(){return d},this.end=function(A,T){A.toneMapping=x,p=!0;let w=s,C=o;for(let R=0;R<m.length;R++){const P=m[R];if(P.enabled!==!1&&(P.render(A,C,w,T),P.needsSwap!==!1)){const G=w;w=C,C=G}}if(h!==A.outputColorSpace||f!==A.toneMapping){h=A.outputColorSpace,f=A.toneMapping,l.defines={},it.getTransfer(h)===ut&&(l.defines.SRGB_TRANSFER="");const R=Ed[f];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,A.setRenderTarget(v),A.render(c,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const kl=new Lt,Ao=new or(1,1),Hl=new Cl,Gl=new Bc,Vl=new Fl,Ba=[],za=[],ka=new Float32Array(16),Ha=new Float32Array(9),Ga=new Float32Array(4);function Hi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ba[r];if(s===void 0&&(s=new Float32Array(r),Ba[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function jr(i,e){let t=za[e];t===void 0&&(t=new Int32Array(e),za[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Td(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function Ad(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function Rd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function Cd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;Ga.set(n),i.uniformMatrix2fv(this.addr,!1,Ga),At(t,n)}}function Pd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;Ha.set(n),i.uniformMatrix3fv(this.addr,!1,Ha),At(t,n)}}function Id(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;ka.set(n),i.uniformMatrix4fv(this.addr,!1,ka),At(t,n)}}function Ld(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function Ud(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function Nd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function Fd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Od(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function Bd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function zd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function kd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ao.compareFunction=t.isReversedDepthBuffer()?Go:Ho,s=Ao):s=kl,t.setTexture2D(e||s,r)}function Hd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Gl,r)}function Gd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Vl,r)}function Vd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Hl,r)}function Wd(i){switch(i){case 5126:return Td;case 35664:return wd;case 35665:return Ad;case 35666:return Rd;case 35674:return Cd;case 35675:return Pd;case 35676:return Id;case 5124:case 35670:return Ld;case 35667:case 35671:return Dd;case 35668:case 35672:return Ud;case 35669:case 35673:return Nd;case 5125:return Fd;case 36294:return Od;case 36295:return Bd;case 36296:return zd;case 35678:case 36198:case 36298:case 36306:case 35682:return kd;case 35679:case 36299:case 36307:return Hd;case 35680:case 36300:case 36308:case 36293:return Gd;case 36289:case 36303:case 36311:case 36292:return Vd}}function Xd(i,e){i.uniform1fv(this.addr,e)}function Yd(i,e){const t=Hi(e,this.size,2);i.uniform2fv(this.addr,t)}function $d(i,e){const t=Hi(e,this.size,3);i.uniform3fv(this.addr,t)}function qd(i,e){const t=Hi(e,this.size,4);i.uniform4fv(this.addr,t)}function Zd(i,e){const t=Hi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Kd(i,e){const t=Hi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jd(i,e){const t=Hi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Jd(i,e){i.uniform1iv(this.addr,e)}function Qd(i,e){i.uniform2iv(this.addr,e)}function ep(i,e){i.uniform3iv(this.addr,e)}function tp(i,e){i.uniform4iv(this.addr,e)}function np(i,e){i.uniform1uiv(this.addr,e)}function ip(i,e){i.uniform2uiv(this.addr,e)}function rp(i,e){i.uniform3uiv(this.addr,e)}function sp(i,e){i.uniform4uiv(this.addr,e)}function op(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ao:o=kl;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function ap(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Gl,s[o])}function lp(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Vl,s[o])}function cp(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Hl,s[o])}function up(i){switch(i){case 5126:return Xd;case 35664:return Yd;case 35665:return $d;case 35666:return qd;case 35674:return Zd;case 35675:return Kd;case 35676:return jd;case 5124:case 35670:return Jd;case 35667:case 35671:return Qd;case 35668:case 35672:return ep;case 35669:case 35673:return tp;case 5125:return np;case 36294:return ip;case 36295:return rp;case 36296:return sp;case 35678:case 36198:case 36298:case 36306:case 35682:return op;case 35679:case 36299:case 36307:return ap;case 35680:case 36300:case 36308:case 36293:return lp;case 36289:case 36303:case 36311:case 36292:return cp}}class hp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wd(t.type)}}class fp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=up(t.type)}}class dp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Is=/(\w+)(\])?(\[|\.)?/g;function Va(i,e){i.seq.push(e),i.map[e.id]=e}function pp(i,e,t){const n=i.name,r=n.length;for(Is.lastIndex=0;;){const s=Is.exec(n),o=Is.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Va(t,c===void 0?new hp(a,i,e):new fp(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new dp(a),Va(t,h)),t=h}}}class zr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);pp(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Wa(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const mp=37297;let gp=0;function _p(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Xa=new Ke;function xp(i){it._getMatrix(Xa,it.workingColorSpace,i);const e=`mat3( ${Xa.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case Hr:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ya(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+_p(i.getShaderSource(e),a)}else return s}function vp(i,e){const t=xp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Mp={[dl]:"Linear",[pl]:"Reinhard",[ml]:"Cineon",[gl]:"ACESFilmic",[xl]:"AgX",[vl]:"Neutral",[_l]:"Custom"};function Sp(i,e){const t=Mp[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ir=new B;function bp(){it.getLuminanceCoefficients(Ir);const i=Ir.x.toFixed(4),e=Ir.y.toFixed(4),t=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ep(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qi).join(`
`)}function yp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Qi(i){return i!==""}function $a(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ro(i){return i.replace(wp,Rp)}const Ap=new Map;function Rp(i,e){let t=Je[e];if(t===void 0){const n=Ap.get(e);if(n!==void 0)t=Je[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ro(t)}const Cp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Za(i){return i.replace(Cp,Pp)}function Pp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ka(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const Ip={[Ur]:"SHADOWMAP_TYPE_PCF",[Ji]:"SHADOWMAP_TYPE_VSM"};function Lp(i){return Ip[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Dp={[ci]:"ENVMAP_TYPE_CUBE",[Ui]:"ENVMAP_TYPE_CUBE",[Zr]:"ENVMAP_TYPE_CUBE_UV"};function Up(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Dp[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Np={[Ui]:"ENVMAP_MODE_REFRACTION"};function Fp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Np[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Op={[qr]:"ENVMAP_BLENDING_MULTIPLY",[vc]:"ENVMAP_BLENDING_MIX",[Mc]:"ENVMAP_BLENDING_ADD"};function Bp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Op[i.combine]||"ENVMAP_BLENDING_NONE"}function zp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function kp(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Lp(t),c=Up(t),u=Fp(t),h=Bp(t),f=zp(t),p=Ep(t),x=yp(s),v=r.createProgram();let m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Qi).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Qi).join(`
`),d.length>0&&(d+=`
`)):(m=[Ka(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),d=[Ka(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dn?"#define TONE_MAPPING":"",t.toneMapping!==dn?Je.tonemapping_pars_fragment:"",t.toneMapping!==dn?Sp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,vp("linearToOutputTexel",t.outputColorSpace),bp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qi).join(`
`)),o=Ro(o),o=$a(o,t),o=qa(o,t),a=Ro(a),a=$a(a,t),a=qa(a,t),o=Za(o),a=Za(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===la?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===la?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=A+m+o,w=A+d+a,C=Wa(r,r.VERTEX_SHADER,T),R=Wa(r,r.FRAGMENT_SHADER,w);r.attachShader(v,C),r.attachShader(v,R),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(E){if(i.debug.checkShaderErrors){const U=r.getProgramInfoLog(v)||"",D=r.getShaderInfoLog(C)||"",z=r.getShaderInfoLog(R)||"",V=U.trim(),$=D.trim(),L=z.trim();let W=!0,ee=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,C,R);else{const Z=Ya(r,C,"vertex"),re=Ya(r,R,"fragment");nt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+V+`
`+Z+`
`+re)}else V!==""?Ye("WebGLProgram: Program Info Log:",V):($===""||L==="")&&(ee=!1);ee&&(E.diagnostics={runnable:W,programLog:V,vertexShader:{log:$,prefix:m},fragmentShader:{log:L,prefix:d}})}r.deleteShader(C),r.deleteShader(R),G=new zr(r,v),M=Tp(r,v)}let G;this.getUniforms=function(){return G===void 0&&P(this),G};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let g=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(v,mp)),g},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=R,this}let Hp=0;class Gp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Vp(e),t.set(e,n)),n}}class Vp{constructor(e){this.id=Hp++,this.code=e,this.usedTimes=0}}function Wp(i,e,t,n,r,s,o){const a=new Xo,l=new Gp,c=new Set,u=[],h=new Map,f=r.logarithmicDepthBuffer;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,g,E,U,D){const z=U.fog,V=D.geometry,$=M.isMeshStandardMaterial?U.environment:null,L=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),W=L&&L.mapping===Zr?L.image.height:null,ee=x[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&Ye("WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const Z=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,re=Z!==void 0?Z.length:0;let _e=0;V.morphAttributes.position!==void 0&&(_e=1),V.morphAttributes.normal!==void 0&&(_e=2),V.morphAttributes.color!==void 0&&(_e=3);let Me,He,je,K;if(ee){const oe=cn[ee];Me=oe.vertexShader,He=oe.fragmentShader}else Me=M.vertexShader,He=M.fragmentShader,l.update(M),je=l.getVertexShaderID(M),K=l.getFragmentShaderID(M);const ne=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),Se=D.isInstancedMesh===!0,pe=D.isBatchedMesh===!0,Ve=!!M.map,st=!!M.matcap,$e=!!L,te=!!M.aoMap,ye=!!M.lightMap,ce=!!M.bumpMap,Oe=!!M.normalMap,I=!!M.displacementMap,et=!!M.emissiveMap,We=!!M.metalnessMap,ot=!!M.roughnessMap,me=M.anisotropy>0,y=M.clearcoat>0,_=M.dispersion>0,F=M.iridescence>0,Q=M.sheen>0,ie=M.transmission>0,J=me&&!!M.anisotropyMap,De=y&&!!M.clearcoatMap,xe=y&&!!M.clearcoatNormalMap,Pe=y&&!!M.clearcoatRoughnessMap,ke=F&&!!M.iridescenceMap,ue=F&&!!M.iridescenceThicknessMap,ve=Q&&!!M.sheenColorMap,Ce=Q&&!!M.sheenRoughnessMap,Le=!!M.specularMap,ge=!!M.specularColorMap,Ze=!!M.specularIntensityMap,N=ie&&!!M.transmissionMap,be=ie&&!!M.thicknessMap,fe=!!M.gradientMap,we=!!M.alphaMap,le=M.alphaTest>0,se=!!M.alphaHash,b=!!M.extensions;let H=dn;M.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(H=i.toneMapping);const Y={shaderID:ee,shaderType:M.type,shaderName:M.name,vertexShader:Me,fragmentShader:He,defines:M.defines,customVertexShaderID:je,customFragmentShaderID:K,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:pe,batchingColor:pe&&D._colorsTexture!==null,instancing:Se,instancingColor:Se&&D.instanceColor!==null,instancingMorph:Se&&D.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Fi,alphaToCoverage:!!M.alphaToCoverage,map:Ve,matcap:st,envMap:$e,envMapMode:$e&&L.mapping,envMapCubeUVHeight:W,aoMap:te,lightMap:ye,bumpMap:ce,normalMap:Oe,displacementMap:I,emissiveMap:et,normalMapObjectSpace:Oe&&M.normalMapType===Ec,normalMapTangentSpace:Oe&&M.normalMapType===ko,metalnessMap:We,roughnessMap:ot,anisotropy:me,anisotropyMap:J,clearcoat:y,clearcoatMap:De,clearcoatNormalMap:xe,clearcoatRoughnessMap:Pe,dispersion:_,iridescence:F,iridescenceMap:ke,iridescenceThicknessMap:ue,sheen:Q,sheenColorMap:ve,sheenRoughnessMap:Ce,specularMap:Le,specularColorMap:ge,specularIntensityMap:Ze,transmission:ie,transmissionMap:N,thicknessMap:be,gradientMap:fe,opaque:M.transparent===!1&&M.blending===Ii&&M.alphaToCoverage===!1,alphaMap:we,alphaTest:le,alphaHash:se,combine:M.combine,mapUv:Ve&&v(M.map.channel),aoMapUv:te&&v(M.aoMap.channel),lightMapUv:ye&&v(M.lightMap.channel),bumpMapUv:ce&&v(M.bumpMap.channel),normalMapUv:Oe&&v(M.normalMap.channel),displacementMapUv:I&&v(M.displacementMap.channel),emissiveMapUv:et&&v(M.emissiveMap.channel),metalnessMapUv:We&&v(M.metalnessMap.channel),roughnessMapUv:ot&&v(M.roughnessMap.channel),anisotropyMapUv:J&&v(M.anisotropyMap.channel),clearcoatMapUv:De&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:xe&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&v(M.sheenRoughnessMap.channel),specularMapUv:Le&&v(M.specularMap.channel),specularColorMapUv:ge&&v(M.specularColorMap.channel),specularIntensityMapUv:Ze&&v(M.specularIntensityMap.channel),transmissionMapUv:N&&v(M.transmissionMap.channel),thicknessMapUv:be&&v(M.thicknessMap.channel),alphaMapUv:we&&v(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Oe||me),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(Ve||we),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ae,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:_e,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:H,decodeVideoTexture:Ve&&M.map.isVideoTexture===!0&&it.getTransfer(M.map.colorSpace)===ut,decodeVideoTextureEmissive:et&&M.emissiveMap.isVideoTexture===!0&&it.getTransfer(M.emissiveMap.colorSpace)===ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===An,flipSided:M.side===Vt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:b&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(b&&M.extensions.multiDraw===!0||pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Y.vertexUv1s=c.has(1),Y.vertexUv2s=c.has(2),Y.vertexUv3s=c.has(3),c.clear(),Y}function d(M){const g=[];if(M.shaderID?g.push(M.shaderID):(g.push(M.customVertexShaderID),g.push(M.customFragmentShaderID)),M.defines!==void 0)for(const E in M.defines)g.push(E),g.push(M.defines[E]);return M.isRawShaderMaterial===!1&&(A(g,M),T(g,M),g.push(i.outputColorSpace)),g.push(M.customProgramCacheKey),g.join()}function A(M,g){M.push(g.precision),M.push(g.outputColorSpace),M.push(g.envMapMode),M.push(g.envMapCubeUVHeight),M.push(g.mapUv),M.push(g.alphaMapUv),M.push(g.lightMapUv),M.push(g.aoMapUv),M.push(g.bumpMapUv),M.push(g.normalMapUv),M.push(g.displacementMapUv),M.push(g.emissiveMapUv),M.push(g.metalnessMapUv),M.push(g.roughnessMapUv),M.push(g.anisotropyMapUv),M.push(g.clearcoatMapUv),M.push(g.clearcoatNormalMapUv),M.push(g.clearcoatRoughnessMapUv),M.push(g.iridescenceMapUv),M.push(g.iridescenceThicknessMapUv),M.push(g.sheenColorMapUv),M.push(g.sheenRoughnessMapUv),M.push(g.specularMapUv),M.push(g.specularColorMapUv),M.push(g.specularIntensityMapUv),M.push(g.transmissionMapUv),M.push(g.thicknessMapUv),M.push(g.combine),M.push(g.fogExp2),M.push(g.sizeAttenuation),M.push(g.morphTargetsCount),M.push(g.morphAttributeCount),M.push(g.numDirLights),M.push(g.numPointLights),M.push(g.numSpotLights),M.push(g.numSpotLightMaps),M.push(g.numHemiLights),M.push(g.numRectAreaLights),M.push(g.numDirLightShadows),M.push(g.numPointLightShadows),M.push(g.numSpotLightShadows),M.push(g.numSpotLightShadowsWithMaps),M.push(g.numLightProbes),M.push(g.shadowMapType),M.push(g.toneMapping),M.push(g.numClippingPlanes),M.push(g.numClipIntersection),M.push(g.depthPacking)}function T(M,g){a.disableAll(),g.instancing&&a.enable(0),g.instancingColor&&a.enable(1),g.instancingMorph&&a.enable(2),g.matcap&&a.enable(3),g.envMap&&a.enable(4),g.normalMapObjectSpace&&a.enable(5),g.normalMapTangentSpace&&a.enable(6),g.clearcoat&&a.enable(7),g.iridescence&&a.enable(8),g.alphaTest&&a.enable(9),g.vertexColors&&a.enable(10),g.vertexAlphas&&a.enable(11),g.vertexUv1s&&a.enable(12),g.vertexUv2s&&a.enable(13),g.vertexUv3s&&a.enable(14),g.vertexTangents&&a.enable(15),g.anisotropy&&a.enable(16),g.alphaHash&&a.enable(17),g.batching&&a.enable(18),g.dispersion&&a.enable(19),g.batchingColor&&a.enable(20),g.gradientMap&&a.enable(21),M.push(a.mask),a.disableAll(),g.fog&&a.enable(0),g.useFog&&a.enable(1),g.flatShading&&a.enable(2),g.logarithmicDepthBuffer&&a.enable(3),g.reversedDepthBuffer&&a.enable(4),g.skinning&&a.enable(5),g.morphTargets&&a.enable(6),g.morphNormals&&a.enable(7),g.morphColors&&a.enable(8),g.premultipliedAlpha&&a.enable(9),g.shadowMapEnabled&&a.enable(10),g.doubleSided&&a.enable(11),g.flipSided&&a.enable(12),g.useDepthPacking&&a.enable(13),g.dithering&&a.enable(14),g.transmission&&a.enable(15),g.sheen&&a.enable(16),g.opaque&&a.enable(17),g.pointsUvs&&a.enable(18),g.decodeVideoTexture&&a.enable(19),g.decodeVideoTextureEmissive&&a.enable(20),g.alphaToCoverage&&a.enable(21),M.push(a.mask)}function w(M){const g=x[M.type];let E;if(g){const U=cn[g];E=jc.clone(U.uniforms)}else E=M.uniforms;return E}function C(M,g){let E=h.get(g);return E!==void 0?++E.usedTimes:(E=new kp(i,g,M,s),u.push(E),h.set(g,E)),E}function R(M){if(--M.usedTimes===0){const g=u.indexOf(M);u[g]=u[u.length-1],u.pop(),h.delete(M.cacheKey),M.destroy()}}function P(M){l.remove(M)}function G(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:w,acquireProgram:C,releaseProgram:R,releaseShaderCache:P,programs:u,dispose:G}}function Xp(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Yp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ja(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ja(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,p,x,v,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:x,renderOrder:h.renderOrder,z:v,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=x,d.renderOrder=h.renderOrder,d.z=v,d.group=m),e++,d}function a(h,f,p,x,v,m){const d=o(h,f,p,x,v,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,x,v,m){const d=o(h,f,p,x,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Yp),n.length>1&&n.sort(f||ja),r.length>1&&r.sort(f||ja)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function $p(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ja,i.set(n,[o])):r>=s.length?(o=new Ja,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function qp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new qe};break;case"SpotLight":t={position:new B,direction:new B,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function Zp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Kp=0;function jp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Jp(i){const e=new qp,t=Zp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const r=new B,s=new gt,o=new gt;function a(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,x=0,v=0,m=0,d=0,A=0,T=0,w=0,C=0,R=0,P=0;c.sort(jp);for(let M=0,g=c.length;M<g;M++){const E=c[M],U=E.color,D=E.intensity,z=E.distance;let V=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===Ni?V=E.shadow.map.texture:V=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)u+=U.r*D,h+=U.g*D,f+=U.b*D;else if(E.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(E.sh.coefficients[$],D);P++}else if(E.isDirectionalLight){const $=e.get(E);if($.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const L=E.shadow,W=t.get(E);W.shadowIntensity=L.intensity,W.shadowBias=L.bias,W.shadowNormalBias=L.normalBias,W.shadowRadius=L.radius,W.shadowMapSize=L.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=E.shadow.matrix,A++}n.directional[p]=$,p++}else if(E.isSpotLight){const $=e.get(E);$.position.setFromMatrixPosition(E.matrixWorld),$.color.copy(U).multiplyScalar(D),$.distance=z,$.coneCos=Math.cos(E.angle),$.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),$.decay=E.decay,n.spot[v]=$;const L=E.shadow;if(E.map&&(n.spotLightMap[C]=E.map,C++,L.updateMatrices(E),E.castShadow&&R++),n.spotLightMatrix[v]=L.matrix,E.castShadow){const W=t.get(E);W.shadowIntensity=L.intensity,W.shadowBias=L.bias,W.shadowNormalBias=L.normalBias,W.shadowRadius=L.radius,W.shadowMapSize=L.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=V,w++}v++}else if(E.isRectAreaLight){const $=e.get(E);$.color.copy(U).multiplyScalar(D),$.halfWidth.set(E.width*.5,0,0),$.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=$,m++}else if(E.isPointLight){const $=e.get(E);if($.color.copy(E.color).multiplyScalar(E.intensity),$.distance=E.distance,$.decay=E.decay,E.castShadow){const L=E.shadow,W=t.get(E);W.shadowIntensity=L.intensity,W.shadowBias=L.bias,W.shadowNormalBias=L.normalBias,W.shadowRadius=L.radius,W.shadowMapSize=L.mapSize,W.shadowCameraNear=L.camera.near,W.shadowCameraFar=L.camera.far,n.pointShadow[x]=W,n.pointShadowMap[x]=V,n.pointShadowMatrix[x]=E.shadow.matrix,T++}n.point[x]=$,x++}else if(E.isHemisphereLight){const $=e.get(E);$.skyColor.copy(E.color).multiplyScalar(D),$.groundColor.copy(E.groundColor).multiplyScalar(D),n.hemi[d]=$,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const G=n.hash;(G.directionalLength!==p||G.pointLength!==x||G.spotLength!==v||G.rectAreaLength!==m||G.hemiLength!==d||G.numDirectionalShadows!==A||G.numPointShadows!==T||G.numSpotShadows!==w||G.numSpotMaps!==C||G.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=x,n.hemi.length=d,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=w+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,G.directionalLength=p,G.pointLength=x,G.spotLength=v,G.rectAreaLength=m,G.hemiLength=d,G.numDirectionalShadows=A,G.numPointShadows=T,G.numSpotShadows=w,G.numSpotMaps=C,G.numLightProbes=P,n.version=Kp++)}function l(c,u){let h=0,f=0,p=0,x=0,v=0;const m=u.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){const T=c[d];if(T.isDirectionalLight){const w=n.directional[h];w.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),h++}else if(T.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const w=n.rectArea[x];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(T.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const w=n.hemi[v];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Qa(i){const e=new Jp(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Qp(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Qa(i),e.set(r,[a])):s>=o.length?(a=new Qa(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const em=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tm=`uniform sampler2D shadow_pass;
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
}`,nm=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],im=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],el=new gt,Ki=new B,Ls=new B;function rm(i,e,t){let n=new Yo;const r=new rt,s=new rt,o=new Mt,a=new hu,l=new fu,c={},u=t.maxTextureSize,h={[Yn]:Vt,[Vt]:Yn,[An]:An},f=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:em,fragmentShader:tm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new xn;x.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Pt(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ur;let d=this.type;this.render=function(R,P,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;R.type===ec&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=Ur);const M=i.getRenderTarget(),g=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Pn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const D=d!==this.type;D&&P.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(V=>V.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,V=R.length;z<V;z++){const $=R[z],L=$.shadow;if(L===void 0){Ye("WebGLShadowMap:",$,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const W=L.getFrameExtents();if(r.multiply(W),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,L.mapSize.y=s.y)),L.map===null||D===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===Ji){if($.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new pn(r.x,r.y,{format:Ni,type:Un,minFilter:St,magFilter:St,generateMipmaps:!1}),L.map.texture.name=$.name+".shadowMap",L.map.depthTexture=new or(r.x,r.y,un),L.map.depthTexture.name=$.name+".shadowMapDepth",L.map.depthTexture.format=Nn,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=It,L.map.depthTexture.magFilter=It}else{$.isPointLight?(L.map=new Ol(r.x),L.map.depthTexture=new lu(r.x,mn)):(L.map=new pn(r.x,r.y),L.map.depthTexture=new or(r.x,r.y,mn)),L.map.depthTexture.name=$.name+".shadowMap",L.map.depthTexture.format=Nn;const Z=i.state.buffers.depth.getReversed();this.type===Ur?(L.map.depthTexture.compareFunction=Z?Go:Ho,L.map.depthTexture.minFilter=St,L.map.depthTexture.magFilter=St):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=It,L.map.depthTexture.magFilter=It)}L.camera.updateProjectionMatrix()}const ee=L.map.isWebGLCubeRenderTarget?6:1;for(let Z=0;Z<ee;Z++){if(L.map.isWebGLCubeRenderTarget)i.setRenderTarget(L.map,Z),i.clear();else{Z===0&&(i.setRenderTarget(L.map),i.clear());const re=L.getViewport(Z);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),U.viewport(o)}if($.isPointLight){const re=L.camera,_e=L.matrix,Me=$.distance||re.far;Me!==re.far&&(re.far=Me,re.updateProjectionMatrix()),Ki.setFromMatrixPosition($.matrixWorld),re.position.copy(Ki),Ls.copy(re.position),Ls.add(nm[Z]),re.up.copy(im[Z]),re.lookAt(Ls),re.updateMatrixWorld(),_e.makeTranslation(-Ki.x,-Ki.y,-Ki.z),el.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),L._frustum.setFromProjectionMatrix(el,re.coordinateSystem,re.reversedDepth)}else L.updateMatrices($);n=L.getFrustum(),w(P,G,L.camera,$,this.type)}L.isPointLightShadow!==!0&&this.type===Ji&&A(L,G),L.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,g,E)};function A(R,P){const G=e.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new pn(r.x,r.y,{format:Ni,type:Un})),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(P,null,G,f,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(P,null,G,p,v,null)}function T(R,P,G,M){let g=null;const E=G.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(E!==void 0)g=E;else if(g=G.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const U=g.uuid,D=P.uuid;let z=c[U];z===void 0&&(z={},c[U]=z);let V=z[D];V===void 0&&(V=g.clone(),z[D]=V,P.addEventListener("dispose",C)),g=V}if(g.visible=P.visible,g.wireframe=P.wireframe,M===Ji?g.side=P.shadowSide!==null?P.shadowSide:P.side:g.side=P.shadowSide!==null?P.shadowSide:h[P.side],g.alphaMap=P.alphaMap,g.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,g.map=P.map,g.clipShadows=P.clipShadows,g.clippingPlanes=P.clippingPlanes,g.clipIntersection=P.clipIntersection,g.displacementMap=P.displacementMap,g.displacementScale=P.displacementScale,g.displacementBias=P.displacementBias,g.wireframeLinewidth=P.wireframeLinewidth,g.linewidth=P.linewidth,G.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const U=i.properties.get(g);U.light=G}return g}function w(R,P,G,M,g){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&g===Ji)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld);const D=e.update(R),z=R.material;if(Array.isArray(z)){const V=D.groups;for(let $=0,L=V.length;$<L;$++){const W=V[$],ee=z[W.materialIndex];if(ee&&ee.visible){const Z=T(R,ee,M,g);R.onBeforeShadow(i,R,P,G,D,Z,W),i.renderBufferDirect(G,null,D,Z,R,W),R.onAfterShadow(i,R,P,G,D,Z,W)}}}else if(z.visible){const V=T(R,z,M,g);R.onBeforeShadow(i,R,P,G,D,V,null),i.renderBufferDirect(G,null,D,V,R,null),R.onAfterShadow(i,R,P,G,D,V,null)}}const U=R.children;for(let D=0,z=U.length;D<z;D++)w(U[D],P,G,M,g)}function C(R){R.target.removeEventListener("dispose",C);for(const G in c){const M=c[G],g=R.target.uuid;g in M&&(M[g].dispose(),delete M[g])}}}const sm={[Fs]:Os,[Bs]:Hs,[zs]:Gs,[Di]:ks,[Os]:Fs,[Hs]:Bs,[Gs]:zs,[ks]:Di};function om(i,e){function t(){let N=!1;const be=new Mt;let fe=null;const we=new Mt(0,0,0,0);return{setMask:function(le){fe!==le&&!N&&(i.colorMask(le,le,le,le),fe=le)},setLocked:function(le){N=le},setClear:function(le,se,b,H,Y){Y===!0&&(le*=H,se*=H,b*=H),be.set(le,se,b,H),we.equals(be)===!1&&(i.clearColor(le,se,b,H),we.copy(be))},reset:function(){N=!1,fe=null,we.set(-1,0,0,0)}}}function n(){let N=!1,be=!1,fe=null,we=null,le=null;return{setReversed:function(se){if(be!==se){const b=e.get("EXT_clip_control");se?b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT):b.clipControlEXT(b.LOWER_LEFT_EXT,b.NEGATIVE_ONE_TO_ONE_EXT),be=se;const H=le;le=null,this.setClear(H)}},getReversed:function(){return be},setTest:function(se){se?ne(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(se){fe!==se&&!N&&(i.depthMask(se),fe=se)},setFunc:function(se){if(be&&(se=sm[se]),we!==se){switch(se){case Fs:i.depthFunc(i.NEVER);break;case Os:i.depthFunc(i.ALWAYS);break;case Bs:i.depthFunc(i.LESS);break;case Di:i.depthFunc(i.LEQUAL);break;case zs:i.depthFunc(i.EQUAL);break;case ks:i.depthFunc(i.GEQUAL);break;case Hs:i.depthFunc(i.GREATER);break;case Gs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=se}},setLocked:function(se){N=se},setClear:function(se){le!==se&&(be&&(se=1-se),i.clearDepth(se),le=se)},reset:function(){N=!1,fe=null,we=null,le=null,be=!1}}}function r(){let N=!1,be=null,fe=null,we=null,le=null,se=null,b=null,H=null,Y=null;return{setTest:function(oe){N||(oe?ne(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(oe){be!==oe&&!N&&(i.stencilMask(oe),be=oe)},setFunc:function(oe,he,Ue){(fe!==oe||we!==he||le!==Ue)&&(i.stencilFunc(oe,he,Ue),fe=oe,we=he,le=Ue)},setOp:function(oe,he,Ue){(se!==oe||b!==he||H!==Ue)&&(i.stencilOp(oe,he,Ue),se=oe,b=he,H=Ue)},setLocked:function(oe){N=oe},setClear:function(oe){Y!==oe&&(i.clearStencil(oe),Y=oe)},reset:function(){N=!1,be=null,fe=null,we=null,le=null,se=null,b=null,H=null,Y=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],x=null,v=!1,m=null,d=null,A=null,T=null,w=null,C=null,R=null,P=new qe(0,0,0),G=0,M=!1,g=null,E=null,U=null,D=null,z=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,L=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(W)[1]),$=L>=1):W.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),$=L>=2);let ee=null,Z={};const re=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),Me=new Mt().fromArray(re),He=new Mt().fromArray(_e);function je(N,be,fe,we){const le=new Uint8Array(4),se=i.createTexture();i.bindTexture(N,se),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let b=0;b<fe;b++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(be+b,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return se}const K={};K[i.TEXTURE_2D]=je(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(i.DEPTH_TEST),o.setFunc(Di),ce(!1),Oe(na),ne(i.CULL_FACE),te(Pn);function ne(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function ae(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Se(N,be){return h[N]!==be?(i.bindFramebuffer(N,be),h[N]=be,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=be),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=be),!0):!1}function pe(N,be){let fe=p,we=!1;if(N){fe=f.get(be),fe===void 0&&(fe=[],f.set(be,fe));const le=N.textures;if(fe.length!==le.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let se=0,b=le.length;se<b;se++)fe[se]=i.COLOR_ATTACHMENT0+se;fe.length=le.length,we=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,we=!0);we&&i.drawBuffers(fe)}function Ve(N){return x!==N?(i.useProgram(N),x=N,!0):!1}const st={[ii]:i.FUNC_ADD,[nc]:i.FUNC_SUBTRACT,[ic]:i.FUNC_REVERSE_SUBTRACT};st[rc]=i.MIN,st[sc]=i.MAX;const $e={[oc]:i.ZERO,[ac]:i.ONE,[lc]:i.SRC_COLOR,[Us]:i.SRC_ALPHA,[pc]:i.SRC_ALPHA_SATURATE,[fc]:i.DST_COLOR,[uc]:i.DST_ALPHA,[cc]:i.ONE_MINUS_SRC_COLOR,[Ns]:i.ONE_MINUS_SRC_ALPHA,[dc]:i.ONE_MINUS_DST_COLOR,[hc]:i.ONE_MINUS_DST_ALPHA,[mc]:i.CONSTANT_COLOR,[gc]:i.ONE_MINUS_CONSTANT_COLOR,[_c]:i.CONSTANT_ALPHA,[xc]:i.ONE_MINUS_CONSTANT_ALPHA};function te(N,be,fe,we,le,se,b,H,Y,oe){if(N===Pn){v===!0&&(ae(i.BLEND),v=!1);return}if(v===!1&&(ne(i.BLEND),v=!0),N!==tc){if(N!==m||oe!==M){if((d!==ii||w!==ii)&&(i.blendEquation(i.FUNC_ADD),d=ii,w=ii),oe)switch(N){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ia:i.blendFunc(i.ONE,i.ONE);break;case ra:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:nt("WebGLState: Invalid blending: ",N);break}else switch(N){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ia:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ra:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sa:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",N);break}A=null,T=null,C=null,R=null,P.set(0,0,0),G=0,m=N,M=oe}return}le=le||be,se=se||fe,b=b||we,(be!==d||le!==w)&&(i.blendEquationSeparate(st[be],st[le]),d=be,w=le),(fe!==A||we!==T||se!==C||b!==R)&&(i.blendFuncSeparate($e[fe],$e[we],$e[se],$e[b]),A=fe,T=we,C=se,R=b),(H.equals(P)===!1||Y!==G)&&(i.blendColor(H.r,H.g,H.b,Y),P.copy(H),G=Y),m=N,M=!1}function ye(N,be){N.side===An?ae(i.CULL_FACE):ne(i.CULL_FACE);let fe=N.side===Vt;be&&(fe=!fe),ce(fe),N.blending===Ii&&N.transparent===!1?te(Pn):te(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const we=N.stencilWrite;a.setTest(we),we&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),et(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(N){g!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),g=N)}function Oe(N){N!==Jl?(ne(i.CULL_FACE),N!==E&&(N===na?i.cullFace(i.BACK):N===Ql?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),E=N}function I(N){N!==U&&($&&i.lineWidth(N),U=N)}function et(N,be,fe){N?(ne(i.POLYGON_OFFSET_FILL),(D!==be||z!==fe)&&(i.polygonOffset(be,fe),D=be,z=fe)):ae(i.POLYGON_OFFSET_FILL)}function We(N){N?ne(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function ot(N){N===void 0&&(N=i.TEXTURE0+V-1),ee!==N&&(i.activeTexture(N),ee=N)}function me(N,be,fe){fe===void 0&&(ee===null?fe=i.TEXTURE0+V-1:fe=ee);let we=Z[fe];we===void 0&&(we={type:void 0,texture:void 0},Z[fe]=we),(we.type!==N||we.texture!==be)&&(ee!==fe&&(i.activeTexture(fe),ee=fe),i.bindTexture(N,be||K[N]),we.type=N,we.texture=be)}function y(){const N=Z[ee];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function Q(){try{i.texSubImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function ie(){try{i.texSubImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function De(){try{i.compressedTexSubImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function xe(){try{i.texStorage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function Pe(){try{i.texStorage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function ke(){try{i.texImage2D(...arguments)}catch(N){nt("WebGLState:",N)}}function ue(){try{i.texImage3D(...arguments)}catch(N){nt("WebGLState:",N)}}function ve(N){Me.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Me.copy(N))}function Ce(N){He.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),He.copy(N))}function Le(N,be){let fe=c.get(be);fe===void 0&&(fe=new WeakMap,c.set(be,fe));let we=fe.get(N);we===void 0&&(we=i.getUniformBlockIndex(be,N.name),fe.set(N,we))}function ge(N,be){const we=c.get(be).get(N);l.get(be)!==we&&(i.uniformBlockBinding(be,we,N.__bindingPointIndex),l.set(be,we))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ee=null,Z={},h={},f=new WeakMap,p=[],x=null,v=!1,m=null,d=null,A=null,T=null,w=null,C=null,R=null,P=new qe(0,0,0),G=0,M=!1,g=null,E=null,U=null,D=null,z=null,Me.set(0,0,i.canvas.width,i.canvas.height),He.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:ae,bindFramebuffer:Se,drawBuffers:pe,useProgram:Ve,setBlending:te,setMaterial:ye,setFlipSided:ce,setCullFace:Oe,setLineWidth:I,setPolygonOffset:et,setScissorTest:We,activeTexture:ot,bindTexture:me,unbindTexture:y,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:ke,texImage3D:ue,updateUBOMapping:Le,uniformBlockBinding:ge,texStorage2D:xe,texStorage3D:Pe,texSubImage2D:Q,texSubImage3D:ie,compressedTexSubImage2D:J,compressedTexSubImage3D:De,scissor:ve,viewport:Ce,reset:Ze}}function am(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(y,_){return p?new OffscreenCanvas(y,_):Vr("canvas")}function v(y,_,F){let Q=1;const ie=me(y);if((ie.width>F||ie.height>F)&&(Q=F/Math.max(ie.width,ie.height)),Q<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const J=Math.floor(Q*ie.width),De=Math.floor(Q*ie.height);h===void 0&&(h=x(J,De));const xe=_?x(J,De):h;return xe.width=J,xe.height=De,xe.getContext("2d").drawImage(y,0,0,J,De),Ye("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+De+")."),xe}else return"data"in y&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),y;return y}function m(y){return y.generateMipmaps}function d(y){i.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(y,_,F,Q,ie=!1){if(y!==null){if(i[y]!==void 0)return i[y];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let J=_;if(_===i.RED&&(F===i.FLOAT&&(J=i.R32F),F===i.HALF_FLOAT&&(J=i.R16F),F===i.UNSIGNED_BYTE&&(J=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.R8UI),F===i.UNSIGNED_SHORT&&(J=i.R16UI),F===i.UNSIGNED_INT&&(J=i.R32UI),F===i.BYTE&&(J=i.R8I),F===i.SHORT&&(J=i.R16I),F===i.INT&&(J=i.R32I)),_===i.RG&&(F===i.FLOAT&&(J=i.RG32F),F===i.HALF_FLOAT&&(J=i.RG16F),F===i.UNSIGNED_BYTE&&(J=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RG8UI),F===i.UNSIGNED_SHORT&&(J=i.RG16UI),F===i.UNSIGNED_INT&&(J=i.RG32UI),F===i.BYTE&&(J=i.RG8I),F===i.SHORT&&(J=i.RG16I),F===i.INT&&(J=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RGB8UI),F===i.UNSIGNED_SHORT&&(J=i.RGB16UI),F===i.UNSIGNED_INT&&(J=i.RGB32UI),F===i.BYTE&&(J=i.RGB8I),F===i.SHORT&&(J=i.RGB16I),F===i.INT&&(J=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),F===i.UNSIGNED_INT&&(J=i.RGBA32UI),F===i.BYTE&&(J=i.RGBA8I),F===i.SHORT&&(J=i.RGBA16I),F===i.INT&&(J=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),_===i.RGBA){const De=ie?Hr:it.getTransfer(Q);F===i.FLOAT&&(J=i.RGBA32F),F===i.HALF_FLOAT&&(J=i.RGBA16F),F===i.UNSIGNED_BYTE&&(J=De===ut?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function w(y,_){let F;return y?_===null||_===mn||_===rr?F=i.DEPTH24_STENCIL8:_===un?F=i.DEPTH32F_STENCIL8:_===ir&&(F=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===mn||_===rr?F=i.DEPTH_COMPONENT24:_===un?F=i.DEPTH_COMPONENT32F:_===ir&&(F=i.DEPTH_COMPONENT16),F}function C(y,_){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==It&&y.minFilter!==St?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function R(y){const _=y.target;_.removeEventListener("dispose",R),G(_),_.isVideoTexture&&u.delete(_)}function P(y){const _=y.target;_.removeEventListener("dispose",P),g(_)}function G(y){const _=n.get(y);if(_.__webglInit===void 0)return;const F=y.source,Q=f.get(F);if(Q){const ie=Q[_.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&M(y),Object.keys(Q).length===0&&f.delete(F)}n.remove(y)}function M(y){const _=n.get(y);i.deleteTexture(_.__webglTexture);const F=y.source,Q=f.get(F);delete Q[_.__cacheKey],o.memory.textures--}function g(y){const _=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let ie=0;ie<_.__webglFramebuffer[Q].length;ie++)i.deleteFramebuffer(_.__webglFramebuffer[Q][ie]);else i.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[Q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=y.textures;for(let Q=0,ie=F.length;Q<ie;Q++){const J=n.get(F[Q]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(F[Q])}n.remove(y)}let E=0;function U(){E=0}function D(){const y=E;return y>=r.maxTextures&&Ye("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),E+=1,y}function z(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function V(y,_){const F=n.get(y);if(y.isVideoTexture&&We(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&F.__version!==y.version){const Q=y.image;if(Q===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{K(F,y,_);return}}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function $(y,_){const F=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){K(F,y,_);return}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function L(y,_){const F=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){K(F,y,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function W(y,_){const F=n.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&F.__version!==y.version){ne(F,y,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const ee={[nr]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[Xs]:i.MIRRORED_REPEAT},Z={[It]:i.NEAREST,[Sc]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[St]:i.LINEAR,[ts]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},re={[yc]:i.NEVER,[Cc]:i.ALWAYS,[Tc]:i.LESS,[Ho]:i.LEQUAL,[wc]:i.EQUAL,[Go]:i.GEQUAL,[Ac]:i.GREATER,[Rc]:i.NOTEQUAL};function _e(y,_){if(_.type===un&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===St||_.magFilter===ts||_.magFilter===fr||_.magFilter===ai||_.minFilter===St||_.minFilter===ts||_.minFilter===fr||_.minFilter===ai)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,ee[_.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,ee[_.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,ee[_.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,Z[_.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,Z[_.minFilter]),_.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,re[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===It||_.minFilter!==fr&&_.minFilter!==ai||_.type===un&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Me(y,_){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",R));const Q=_.source;let ie=f.get(Q);ie===void 0&&(ie={},f.set(Q,ie));const J=z(_);if(J!==y.__cacheKey){ie[J]===void 0&&(ie[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ie[J].usedTimes++;const De=ie[y.__cacheKey];De!==void 0&&(ie[y.__cacheKey].usedTimes--,De.usedTimes===0&&M(_)),y.__cacheKey=J,y.__webglTexture=ie[J].texture}return F}function He(y,_,F){return Math.floor(Math.floor(y/F)/_)}function je(y,_,F,Q){const J=y.updateRanges;if(J.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,Q,_.data);else{J.sort((ue,ve)=>ue.start-ve.start);let De=0;for(let ue=1;ue<J.length;ue++){const ve=J[De],Ce=J[ue],Le=ve.start+ve.count,ge=He(Ce.start,_.width,4),Ze=He(ve.start,_.width,4);Ce.start<=Le+1&&ge===Ze&&He(Ce.start+Ce.count-1,_.width,4)===ge?ve.count=Math.max(ve.count,Ce.start+Ce.count-ve.start):(++De,J[De]=Ce)}J.length=De+1;const xe=i.getParameter(i.UNPACK_ROW_LENGTH),Pe=i.getParameter(i.UNPACK_SKIP_PIXELS),ke=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ue=0,ve=J.length;ue<ve;ue++){const Ce=J[ue],Le=Math.floor(Ce.start/4),ge=Math.ceil(Ce.count/4),Ze=Le%_.width,N=Math.floor(Le/_.width),be=ge,fe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,Ze,N,be,fe,F,Q,_.data)}y.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,xe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),i.pixelStorei(i.UNPACK_SKIP_ROWS,ke)}}function K(y,_,F){let Q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=i.TEXTURE_3D);const ie=Me(y,_),J=_.source;t.bindTexture(Q,y.__webglTexture,i.TEXTURE0+F);const De=n.get(J);if(J.version!==De.__version||ie===!0){t.activeTexture(i.TEXTURE0+F);const xe=it.getPrimaries(it.workingColorSpace),Pe=_.colorSpace===Vn?null:it.getPrimaries(_.colorSpace),ke=_.colorSpace===Vn||xe===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ue=v(_.image,!1,r.maxTextureSize);ue=ot(_,ue);const ve=s.convert(_.format,_.colorSpace),Ce=s.convert(_.type);let Le=T(_.internalFormat,ve,Ce,_.colorSpace,_.isVideoTexture);_e(Q,_);let ge;const Ze=_.mipmaps,N=_.isVideoTexture!==!0,be=De.__version===void 0||ie===!0,fe=J.dataReady,we=C(_,ue);if(_.isDepthTexture)Le=w(_.format===li,_.type),be&&(N?t.texStorage2D(i.TEXTURE_2D,1,Le,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Le,ue.width,ue.height,0,ve,Ce,null));else if(_.isDataTexture)if(Ze.length>0){N&&be&&t.texStorage2D(i.TEXTURE_2D,we,Le,Ze[0].width,Ze[0].height);for(let le=0,se=Ze.length;le<se;le++)ge=Ze[le],N?fe&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,ge.width,ge.height,ve,Ce,ge.data):t.texImage2D(i.TEXTURE_2D,le,Le,ge.width,ge.height,0,ve,Ce,ge.data);_.generateMipmaps=!1}else N?(be&&t.texStorage2D(i.TEXTURE_2D,we,Le,ue.width,ue.height),fe&&je(_,ue,ve,Ce)):t.texImage2D(i.TEXTURE_2D,0,Le,ue.width,ue.height,0,ve,Ce,ue.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){N&&be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Le,Ze[0].width,Ze[0].height,ue.depth);for(let le=0,se=Ze.length;le<se;le++)if(ge=Ze[le],_.format!==on)if(ve!==null)if(N){if(fe)if(_.layerUpdates.size>0){const b=Ia(ge.width,ge.height,_.format,_.type);for(const H of _.layerUpdates){const Y=ge.data.subarray(H*b/ge.data.BYTES_PER_ELEMENT,(H+1)*b/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,H,ge.width,ge.height,1,ve,Y)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,ge.width,ge.height,ue.depth,ve,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,Le,ge.width,ge.height,ue.depth,0,ge.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?fe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,ge.width,ge.height,ue.depth,ve,Ce,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,Le,ge.width,ge.height,ue.depth,0,ve,Ce,ge.data)}else{N&&be&&t.texStorage2D(i.TEXTURE_2D,we,Le,Ze[0].width,Ze[0].height);for(let le=0,se=Ze.length;le<se;le++)ge=Ze[le],_.format!==on?ve!==null?N?fe&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,ge.width,ge.height,ve,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,le,Le,ge.width,ge.height,0,ge.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?fe&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,ge.width,ge.height,ve,Ce,ge.data):t.texImage2D(i.TEXTURE_2D,le,Le,ge.width,ge.height,0,ve,Ce,ge.data)}else if(_.isDataArrayTexture)if(N){if(be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Le,ue.width,ue.height,ue.depth),fe)if(_.layerUpdates.size>0){const le=Ia(ue.width,ue.height,_.format,_.type);for(const se of _.layerUpdates){const b=ue.data.subarray(se*le/ue.data.BYTES_PER_ELEMENT,(se+1)*le/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,ue.width,ue.height,1,ve,Ce,b)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ve,Ce,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,ue.width,ue.height,ue.depth,0,ve,Ce,ue.data);else if(_.isData3DTexture)N?(be&&t.texStorage3D(i.TEXTURE_3D,we,Le,ue.width,ue.height,ue.depth),fe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ve,Ce,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Le,ue.width,ue.height,ue.depth,0,ve,Ce,ue.data);else if(_.isFramebufferTexture){if(be)if(N)t.texStorage2D(i.TEXTURE_2D,we,Le,ue.width,ue.height);else{let le=ue.width,se=ue.height;for(let b=0;b<we;b++)t.texImage2D(i.TEXTURE_2D,b,Le,le,se,0,ve,Ce,null),le>>=1,se>>=1}}else if(Ze.length>0){if(N&&be){const le=me(Ze[0]);t.texStorage2D(i.TEXTURE_2D,we,Le,le.width,le.height)}for(let le=0,se=Ze.length;le<se;le++)ge=Ze[le],N?fe&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,ve,Ce,ge):t.texImage2D(i.TEXTURE_2D,le,Le,ve,Ce,ge);_.generateMipmaps=!1}else if(N){if(be){const le=me(ue);t.texStorage2D(i.TEXTURE_2D,we,Le,le.width,le.height)}fe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Ce,ue)}else t.texImage2D(i.TEXTURE_2D,0,Le,ve,Ce,ue);m(_)&&d(Q),De.__version=J.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function ne(y,_,F){if(_.image.length!==6)return;const Q=Me(y,_),ie=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+F);const J=n.get(ie);if(ie.version!==J.__version||Q===!0){t.activeTexture(i.TEXTURE0+F);const De=it.getPrimaries(it.workingColorSpace),xe=_.colorSpace===Vn?null:it.getPrimaries(_.colorSpace),Pe=_.colorSpace===Vn||De===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const ke=_.isCompressedTexture||_.image[0].isCompressedTexture,ue=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let se=0;se<6;se++)!ke&&!ue?ve[se]=v(_.image[se],!0,r.maxCubemapSize):ve[se]=ue?_.image[se].image:_.image[se],ve[se]=ot(_,ve[se]);const Ce=ve[0],Le=s.convert(_.format,_.colorSpace),ge=s.convert(_.type),Ze=T(_.internalFormat,Le,ge,_.colorSpace),N=_.isVideoTexture!==!0,be=J.__version===void 0||Q===!0,fe=ie.dataReady;let we=C(_,Ce);_e(i.TEXTURE_CUBE_MAP,_);let le;if(ke){N&&be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Ze,Ce.width,Ce.height);for(let se=0;se<6;se++){le=ve[se].mipmaps;for(let b=0;b<le.length;b++){const H=le[b];_.format!==on?Le!==null?N?fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,b,0,0,H.width,H.height,Le,H.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,b,Ze,H.width,H.height,0,H.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,b,0,0,H.width,H.height,Le,ge,H.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,b,Ze,H.width,H.height,0,Le,ge,H.data)}}}else{if(le=_.mipmaps,N&&be){le.length>0&&we++;const se=me(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Ze,se.width,se.height)}for(let se=0;se<6;se++)if(ue){N?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ve[se].width,ve[se].height,Le,ge,ve[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ze,ve[se].width,ve[se].height,0,Le,ge,ve[se].data);for(let b=0;b<le.length;b++){const Y=le[b].image[se].image;N?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,b+1,0,0,Y.width,Y.height,Le,ge,Y.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,b+1,Ze,Y.width,Y.height,0,Le,ge,Y.data)}}else{N?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Le,ge,ve[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ze,Le,ge,ve[se]);for(let b=0;b<le.length;b++){const H=le[b];N?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,b+1,0,0,Le,ge,H.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,b+1,Ze,Le,ge,H.image[se])}}}m(_)&&d(i.TEXTURE_CUBE_MAP),J.__version=ie.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function ae(y,_,F,Q,ie,J){const De=s.convert(F.format,F.colorSpace),xe=s.convert(F.type),Pe=T(F.internalFormat,De,xe,F.colorSpace),ke=n.get(_),ue=n.get(F);if(ue.__renderTarget=_,!ke.__hasExternalTextures){const ve=Math.max(1,_.width>>J),Ce=Math.max(1,_.height>>J);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,J,Pe,ve,Ce,_.depth,0,De,xe,null):t.texImage2D(ie,J,Pe,ve,Ce,0,De,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),et(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ie,ue.__webglTexture,0,I(_)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ie,ue.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(y,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,y),_.depthBuffer){const Q=_.depthTexture,ie=Q&&Q.isDepthTexture?Q.type:null,J=w(_.stencilBuffer,ie),De=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;et(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(_),J,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(_),J,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,J,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,y)}else{const Q=_.textures;for(let ie=0;ie<Q.length;ie++){const J=Q[ie],De=s.convert(J.format,J.colorSpace),xe=s.convert(J.type),Pe=T(J.internalFormat,De,xe,J.colorSpace);et(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(_),Pe,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(_),Pe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(y,_,F){const Q=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=n.get(_.depthTexture);if(ie.__renderTarget=_,(!ie.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Q){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),ie.__webglTexture===void 0){ie.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),_e(i.TEXTURE_CUBE_MAP,_.depthTexture);const ke=s.convert(_.depthTexture.format),ue=s.convert(_.depthTexture.type);let ve;_.depthTexture.format===Nn?ve=i.DEPTH_COMPONENT24:_.depthTexture.format===li&&(ve=i.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ve,_.width,_.height,0,ke,ue,null)}}else V(_.depthTexture,0);const J=ie.__webglTexture,De=I(_),xe=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,Pe=_.depthTexture.format===li?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Nn)et(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Pe,xe,J,0,De):i.framebufferTexture2D(i.FRAMEBUFFER,Pe,xe,J,0);else if(_.depthTexture.format===li)et(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Pe,xe,J,0,De):i.framebufferTexture2D(i.FRAMEBUFFER,Pe,xe,J,0);else throw new Error("Unknown depthTexture format")}function Ve(y){const _=n.get(y),F=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const Q=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Q){const ie=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Q.removeEventListener("dispose",ie)};Q.addEventListener("dispose",ie),_.__depthDisposeCallback=ie}_.__boundDepthTexture=Q}if(y.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let Q=0;Q<6;Q++)pe(_.__webglFramebuffer[Q],y,Q);else{const Q=y.texture.mipmaps;Q&&Q.length>0?pe(_.__webglFramebuffer[0],y,0):pe(_.__webglFramebuffer,y,0)}else if(F){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]===void 0)_.__webglDepthbuffer[Q]=i.createRenderbuffer(),Se(_.__webglDepthbuffer[Q],y,!1);else{const ie=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,J)}}else{const Q=y.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Se(_.__webglDepthbuffer,y,!1);else{const ie=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,J)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(y,_,F){const Q=n.get(y);_!==void 0&&ae(Q.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ve(y)}function $e(y){const _=y.texture,F=n.get(y),Q=n.get(_);y.addEventListener("dispose",P);const ie=y.textures,J=y.isWebGLCubeRenderTarget===!0,De=ie.length>1;if(De||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=_.version,o.memory.textures++),J){F.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[xe]=[];for(let Pe=0;Pe<_.mipmaps.length;Pe++)F.__webglFramebuffer[xe][Pe]=i.createFramebuffer()}else F.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let xe=0;xe<_.mipmaps.length;xe++)F.__webglFramebuffer[xe]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(De)for(let xe=0,Pe=ie.length;xe<Pe;xe++){const ke=n.get(ie[xe]);ke.__webglTexture===void 0&&(ke.__webglTexture=i.createTexture(),o.memory.textures++)}if(y.samples>0&&et(y)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let xe=0;xe<ie.length;xe++){const Pe=ie[xe];F.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[xe]);const ke=s.convert(Pe.format,Pe.colorSpace),ue=s.convert(Pe.type),ve=T(Pe.internalFormat,ke,ue,Pe.colorSpace,y.isXRRenderTarget===!0),Ce=I(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,ve,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,F.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Se(F.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),_e(i.TEXTURE_CUBE_MAP,_);for(let xe=0;xe<6;xe++)if(_.mipmaps&&_.mipmaps.length>0)for(let Pe=0;Pe<_.mipmaps.length;Pe++)ae(F.__webglFramebuffer[xe][Pe],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Pe);else ae(F.__webglFramebuffer[xe],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(_)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let xe=0,Pe=ie.length;xe<Pe;xe++){const ke=ie[xe],ue=n.get(ke);let ve=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ve=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,ue.__webglTexture),_e(ve,ke),ae(F.__webglFramebuffer,y,ke,i.COLOR_ATTACHMENT0+xe,ve,0),m(ke)&&d(ve)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(xe=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,Q.__webglTexture),_e(xe,_),_.mipmaps&&_.mipmaps.length>0)for(let Pe=0;Pe<_.mipmaps.length;Pe++)ae(F.__webglFramebuffer[Pe],y,_,i.COLOR_ATTACHMENT0,xe,Pe);else ae(F.__webglFramebuffer,y,_,i.COLOR_ATTACHMENT0,xe,0);m(_)&&d(xe),t.unbindTexture()}y.depthBuffer&&Ve(y)}function te(y){const _=y.textures;for(let F=0,Q=_.length;F<Q;F++){const ie=_[F];if(m(ie)){const J=A(y),De=n.get(ie).__webglTexture;t.bindTexture(J,De),d(J),t.unbindTexture()}}}const ye=[],ce=[];function Oe(y){if(y.samples>0){if(et(y)===!1){const _=y.textures,F=y.width,Q=y.height;let ie=i.COLOR_BUFFER_BIT;const J=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(y),xe=_.length>1;if(xe)for(let ke=0;ke<_.length;ke++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const Pe=y.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let ke=0;ke<_.length;ke++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[ke]);const ue=n.get(_[ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,F,Q,0,0,F,Q,ie,i.NEAREST),l===!0&&(ye.length=0,ce.length=0,ye.push(i.COLOR_ATTACHMENT0+ke),y.depthBuffer&&y.resolveDepthBuffer===!1&&(ye.push(J),ce.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let ke=0;ke<_.length;ke++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,De.__webglColorRenderbuffer[ke]);const ue=n.get(_[ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function I(y){return Math.min(r.maxSamples,y.samples)}function et(y){const _=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function We(y){const _=o.render.frame;u.get(y)!==_&&(u.set(y,_),y.update())}function ot(y,_){const F=y.colorSpace,Q=y.format,ie=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||F!==Fi&&F!==Vn&&(it.getTransfer(F)===ut?(Q!==on||ie!==qt)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",F)),_}function me(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=$,this.setTexture3D=L,this.setTextureCube=W,this.rebindTextures=st,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function lm(i,e){function t(n,r=Vn){let s;const o=it.getTransfer(r);if(n===qt)return i.UNSIGNED_BYTE;if(n===No)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===El)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sl)return i.BYTE;if(n===bl)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===Uo)return i.INT;if(n===mn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===Un)return i.HALF_FLOAT;if(n===Tl)return i.ALPHA;if(n===wl)return i.RGB;if(n===on)return i.RGBA;if(n===Nn)return i.DEPTH_COMPONENT;if(n===li)return i.DEPTH_STENCIL;if(n===Al)return i.RED;if(n===Oo)return i.RED_INTEGER;if(n===Ni)return i.RG;if(n===Bo)return i.RG_INTEGER;if(n===zo)return i.RGBA_INTEGER;if(n===Nr||n===Fr||n===Or||n===Br)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Nr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Nr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Or)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Br)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ys||n===$s||n===qs||n===Zs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ys)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$s)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ks||n===js||n===Js||n===Qs||n===eo||n===to||n===no)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ks||n===js)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Js)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Qs)return s.COMPRESSED_R11_EAC;if(n===eo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===to)return s.COMPRESSED_RG11_EAC;if(n===no)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===io||n===ro||n===so||n===oo||n===ao||n===lo||n===co||n===uo||n===ho||n===fo||n===po||n===mo||n===go||n===_o)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===io)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ro)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===so)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oo)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ao)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lo)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===co)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uo)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ho)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fo)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===po)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mo)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===go)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_o)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xo||n===vo||n===Mo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===xo)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===So||n===bo||n===Eo||n===yo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===So)return s.COMPRESSED_RED_RGTC1_EXT;if(n===bo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const cm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,um=`
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

}`;class hm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Bl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _n({vertexShader:cm,fragmentShader:um,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fm extends ui{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,x=null;const v=typeof XRWebGLBinding<"u",m=new hm,d={},A=t.getContextAttributes();let T=null,w=null;const C=[],R=[],P=new rt;let G=null;const M=new jt;M.viewport=new Mt;const g=new jt;g.viewport=new Mt;const E=[M,g],U=new xu;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=C[K];return ne===void 0&&(ne=new ys,C[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=C[K];return ne===void 0&&(ne=new ys,C[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=C[K];return ne===void 0&&(ne=new ys,C[K]=ne),ne.getHandSpace()};function V(K){const ne=R.indexOf(K.inputSource);if(ne===-1)return;const ae=C[ne];ae!==void 0&&(ae.update(K.inputSource,K.frame,c||o),ae.dispatchEvent({type:K.type,data:K.inputSource}))}function $(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",L);for(let K=0;K<C.length;K++){const ne=R[K];ne!==null&&(R[K]=null,C[K].disconnect(ne))}D=null,z=null,m.reset();for(const K in d)delete d[K];e.setRenderTarget(T),p=null,f=null,h=null,r=null,w=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(G),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",$),r.addEventListener("inputsourceschange",L),A.xrCompatible!==!0&&await t.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Se=null,pe=null;A.depth&&(pe=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=A.stencil?li:Nn,Se=A.stencil?rr:mn);const Ve={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ve),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new pn(f.textureWidth,f.textureHeight,{format:on,type:qt,depthTexture:new or(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ae={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new pn(p.framebufferWidth,p.framebufferHeight,{format:on,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function L(K){for(let ne=0;ne<K.removed.length;ne++){const ae=K.removed[ne],Se=R.indexOf(ae);Se>=0&&(R[Se]=null,C[Se].disconnect(ae))}for(let ne=0;ne<K.added.length;ne++){const ae=K.added[ne];let Se=R.indexOf(ae);if(Se===-1){for(let Ve=0;Ve<C.length;Ve++)if(Ve>=R.length){R.push(ae),Se=Ve;break}else if(R[Ve]===null){R[Ve]=ae,Se=Ve;break}if(Se===-1)break}const pe=C[Se];pe&&pe.connect(ae)}}const W=new B,ee=new B;function Z(K,ne,ae){W.setFromMatrixPosition(ne.matrixWorld),ee.setFromMatrixPosition(ae.matrixWorld);const Se=W.distanceTo(ee),pe=ne.projectionMatrix.elements,Ve=ae.projectionMatrix.elements,st=pe[14]/(pe[10]-1),$e=pe[14]/(pe[10]+1),te=(pe[9]+1)/pe[5],ye=(pe[9]-1)/pe[5],ce=(pe[8]-1)/pe[0],Oe=(Ve[8]+1)/Ve[0],I=st*ce,et=st*Oe,We=Se/(-ce+Oe),ot=We*-ce;if(ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ot),K.translateZ(We),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),pe[10]===-1)K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const me=st+We,y=$e+We,_=I-ot,F=et+(Se-ot),Q=te*$e/y*me,ie=ye*$e/y*me;K.projectionMatrix.makePerspective(_,F,Q,ie,me,y),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function re(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ne=K.near,ae=K.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),U.near=g.near=M.near=ne,U.far=g.far=M.far=ae,(D!==U.near||z!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),D=U.near,z=U.far),U.layers.mask=K.layers.mask|6,M.layers.mask=U.layers.mask&3,g.layers.mask=U.layers.mask&5;const Se=K.parent,pe=U.cameras;re(U,Se);for(let Ve=0;Ve<pe.length;Ve++)re(pe[Ve],Se);pe.length===2?Z(U,M,g):U.projectionMatrix.copy(M.projectionMatrix),_e(K,U,Se)};function _e(K,ne,ae){ae===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(ae.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=To*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(K){return d[K]};let Me=null;function He(K,ne){if(u=ne.getViewerPose(c||o),x=ne,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let Se=!1;ae.length!==U.cameras.length&&(U.cameras.length=0,Se=!0);for(let $e=0;$e<ae.length;$e++){const te=ae[$e];let ye=null;if(p!==null)ye=p.getViewport(te);else{const Oe=h.getViewSubImage(f,te);ye=Oe.viewport,$e===0&&(e.setRenderTargetTextures(w,Oe.colorTexture,Oe.depthStencilTexture),e.setRenderTarget(w))}let ce=E[$e];ce===void 0&&(ce=new jt,ce.layers.enable($e),ce.viewport=new Mt,E[$e]=ce),ce.matrix.fromArray(te.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(te.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(ye.x,ye.y,ye.width,ye.height),$e===0&&(U.matrix.copy(ce.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Se===!0&&U.cameras.push(ce)}const pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const $e=h.getDepthInformation(ae[0]);$e&&$e.isValid&&$e.texture&&m.init($e,r.renderState)}if(pe&&pe.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let $e=0;$e<ae.length;$e++){const te=ae[$e].camera;if(te){let ye=d[te];ye||(ye=new Bl,d[te]=ye);const ce=h.getCameraImage(te);ye.sourceTexture=ce}}}}for(let ae=0;ae<C.length;ae++){const Se=R[ae],pe=C[ae];Se!==null&&pe!==void 0&&pe.update(Se,ne,c||o)}Me&&Me(K,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),x=null}const je=new zl;je.setAnimationLoop(He),this.setAnimationLoop=function(K){Me=K},this.dispose=function(){}}}const Qn=new Qt,dm=new gt;function pm(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Ul(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,A,T,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,w)):d.isMeshMatcapMaterial?(s(m,d),x(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,A,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Vt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Vt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=e.get(d),T=A.envMap,w=A.envMapRotation;T&&(m.envMap.value=T,Qn.copy(w),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),m.envMapRotation.value.setFromMatrix4(dm.makeRotationFromEuler(Qn)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=T*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Vt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function mm(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const w=T.program;n.uniformBlockBinding(A,w)}function c(A,T){let w=r[A.id];w===void 0&&(x(A),w=u(A),r[A.id]=w,A.addEventListener("dispose",m));const C=T.program;n.updateUBOMapping(A,C);const R=e.render.frame;s[A.id]!==R&&(f(A),s[A.id]=R)}function u(A){const T=h();A.__bindingPointIndex=T;const w=i.createBuffer(),C=A.__size,R=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,w),w}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const T=r[A.id],w=A.uniforms,C=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let R=0,P=w.length;R<P;R++){const G=Array.isArray(w[R])?w[R]:[w[R]];for(let M=0,g=G.length;M<g;M++){const E=G[M];if(p(E,R,M,C)===!0){const U=E.__offset,D=Array.isArray(E.value)?E.value:[E.value];let z=0;for(let V=0;V<D.length;V++){const $=D[V],L=v($);typeof $=="number"||typeof $=="boolean"?(E.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,U+z,E.__data)):$.isMatrix3?(E.__data[0]=$.elements[0],E.__data[1]=$.elements[1],E.__data[2]=$.elements[2],E.__data[3]=0,E.__data[4]=$.elements[3],E.__data[5]=$.elements[4],E.__data[6]=$.elements[5],E.__data[7]=0,E.__data[8]=$.elements[6],E.__data[9]=$.elements[7],E.__data[10]=$.elements[8],E.__data[11]=0):($.toArray(E.__data,z),z+=L.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,T,w,C){const R=A.value,P=T+"_"+w;if(C[P]===void 0)return typeof R=="number"||typeof R=="boolean"?C[P]=R:C[P]=R.clone(),!0;{const G=C[P];if(typeof R=="number"||typeof R=="boolean"){if(G!==R)return C[P]=R,!0}else if(G.equals(R)===!1)return G.copy(R),!0}return!1}function x(A){const T=A.uniforms;let w=0;const C=16;for(let P=0,G=T.length;P<G;P++){const M=Array.isArray(T[P])?T[P]:[T[P]];for(let g=0,E=M.length;g<E;g++){const U=M[g],D=Array.isArray(U.value)?U.value:[U.value];for(let z=0,V=D.length;z<V;z++){const $=D[z],L=v($),W=w%C,ee=W%L.boundary,Z=W+ee;w+=ee,Z!==0&&C-Z<L.storage&&(w+=C-Z),U.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=w,w+=L.storage}}}const R=w%C;return R>0&&(w+=C-R),A.__size=w,A.__cache={},this}function v(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const w=o.indexOf(T.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function d(){for(const A in r)i.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}const gm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ln=null;function _m(){return ln===null&&(ln=new iu(gm,16,16,Ni,Un),ln.name="DFG_LUT",ln.minFilter=St,ln.magFilter=St,ln.wrapS=Rn,ln.wrapT=Rn,ln.generateMipmaps=!1,ln.needsUpdate=!0),ln}class xm{constructor(e={}){const{canvas:t=Pc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=qt}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;const v=p,m=new Set([zo,Bo,Oo]),d=new Set([qt,mn,ir,rr,No,Fo]),A=new Uint32Array(4),T=new Int32Array(4);let w=null,C=null;const R=[],P=[];let G=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let g=!1;this._outputColorSpace=mt;let E=0,U=0,D=null,z=-1,V=null;const $=new Mt,L=new Mt;let W=null;const ee=new qe(0);let Z=0,re=t.width,_e=t.height,Me=1,He=null,je=null;const K=new Mt(0,0,re,_e),ne=new Mt(0,0,re,_e);let ae=!1;const Se=new Yo;let pe=!1,Ve=!1;const st=new gt,$e=new B,te=new Mt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function Oe(){return D===null?Me:1}let I=n;function et(S,k){return t.getContext(S,k)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Do}`),t.addEventListener("webglcontextlost",H,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",oe,!1),I===null){const k="webgl2";if(I=et(k,S),I===null)throw et(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw nt("WebGLRenderer: "+S.message),S}let We,ot,me,y,_,F,Q,ie,J,De,xe,Pe,ke,ue,ve,Ce,Le,ge,Ze,N,be,fe,we,le;function se(){We=new _d(I),We.init(),fe=new lm(I,We),ot=new ld(I,We,e,fe),me=new om(I,We),ot.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),y=new Md(I),_=new Xp,F=new am(I,We,me,_,ot,fe,y),Q=new ud(M),ie=new gd(M),J=new Eu(I),we=new od(I,J),De=new xd(I,J,y,we),xe=new bd(I,De,J,y),Ze=new Sd(I,ot,F),Ce=new cd(_),Pe=new Wp(M,Q,ie,We,ot,we,Ce),ke=new pm(M,_),ue=new $p,ve=new Qp(We),ge=new sd(M,Q,ie,me,xe,x,l),Le=new rm(M,xe,ot),le=new mm(I,y,ot,me),N=new ad(I,We,y),be=new vd(I,We,y),y.programs=Pe.programs,M.capabilities=ot,M.extensions=We,M.properties=_,M.renderLists=ue,M.shadowMap=Le,M.state=me,M.info=y}se(),v!==qt&&(G=new yd(v,t.width,t.height,r,s));const b=new fm(M,I);this.xr=b,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=We.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=We.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(S){S!==void 0&&(Me=S,this.setSize(re,_e,!1))},this.getSize=function(S){return S.set(re,_e)},this.setSize=function(S,k,j=!0){if(b.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}re=S,_e=k,t.width=Math.floor(S*Me),t.height=Math.floor(k*Me),j===!0&&(t.style.width=S+"px",t.style.height=k+"px"),G!==null&&G.setSize(t.width,t.height),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(re*Me,_e*Me).floor()},this.setDrawingBufferSize=function(S,k,j){re=S,_e=k,Me=j,t.width=Math.floor(S*j),t.height=Math.floor(k*j),this.setViewport(0,0,S,k)},this.setEffects=function(S){if(v===qt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let k=0;k<S.length;k++)if(S[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}G.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy($)},this.getViewport=function(S){return S.copy(K)},this.setViewport=function(S,k,j,q){S.isVector4?K.set(S.x,S.y,S.z,S.w):K.set(S,k,j,q),me.viewport($.copy(K).multiplyScalar(Me).round())},this.getScissor=function(S){return S.copy(ne)},this.setScissor=function(S,k,j,q){S.isVector4?ne.set(S.x,S.y,S.z,S.w):ne.set(S,k,j,q),me.scissor(L.copy(ne).multiplyScalar(Me).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(S){me.setScissorTest(ae=S)},this.setOpaqueSort=function(S){He=S},this.setTransparentSort=function(S){je=S},this.getClearColor=function(S){return S.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(S=!0,k=!0,j=!0){let q=0;if(S){let X=!1;if(D!==null){const Ee=D.texture.format;X=m.has(Ee)}if(X){const Ee=D.texture.type,Re=d.has(Ee),Ae=ge.getClearColor(),Ie=ge.getClearAlpha(),Ne=Ae.r,Ge=Ae.g,Be=Ae.b;Re?(A[0]=Ne,A[1]=Ge,A[2]=Be,A[3]=Ie,I.clearBufferuiv(I.COLOR,0,A)):(T[0]=Ne,T[1]=Ge,T[2]=Be,T[3]=Ie,I.clearBufferiv(I.COLOR,0,T))}else q|=I.COLOR_BUFFER_BIT}k&&(q|=I.DEPTH_BUFFER_BIT),j&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",H,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ge.dispose(),ue.dispose(),ve.dispose(),_.dispose(),Q.dispose(),ie.dispose(),xe.dispose(),we.dispose(),le.dispose(),Pe.dispose(),b.dispose(),b.removeEventListener("sessionstart",Fe),b.removeEventListener("sessionend",at),zt.stop()};function H(S){S.preventDefault(),ua("WebGLRenderer: Context Lost."),g=!0}function Y(){ua("WebGLRenderer: Context Restored."),g=!1;const S=y.autoReset,k=Le.enabled,j=Le.autoUpdate,q=Le.needsUpdate,X=Le.type;se(),y.autoReset=S,Le.enabled=k,Le.autoUpdate=j,Le.needsUpdate=q,Le.type=X}function oe(S){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function he(S){const k=S.target;k.removeEventListener("dispose",he),Ue(k)}function Ue(S){Xe(S),_.remove(S)}function Xe(S){const k=_.get(S).programs;k!==void 0&&(k.forEach(function(j){Pe.releaseProgram(j)}),S.isShaderMaterial&&Pe.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,j,q,X,Ee){k===null&&(k=ye);const Re=X.isMesh&&X.matrixWorld.determinant()<0,Ae=Yl(S,k,j,q,X);me.setMaterial(q,Re);let Ie=j.index,Ne=1;if(q.wireframe===!0){if(Ie=De.getWireframeAttribute(j),Ie===void 0)return;Ne=2}const Ge=j.drawRange,Be=j.attributes.position;let Qe=Ge.start*Ne,ht=(Ge.start+Ge.count)*Ne;Ee!==null&&(Qe=Math.max(Qe,Ee.start*Ne),ht=Math.min(ht,(Ee.start+Ee.count)*Ne)),Ie!==null?(Qe=Math.max(Qe,0),ht=Math.min(ht,Ie.count)):Be!=null&&(Qe=Math.max(Qe,0),ht=Math.min(ht,Be.count));const xt=ht-Qe;if(xt<0||xt===1/0)return;we.setup(X,q,Ae,j,Ie);let vt,ft=N;if(Ie!==null&&(vt=J.get(Ie),ft=be,ft.setIndex(vt)),X.isMesh)q.wireframe===!0?(me.setLineWidth(q.wireframeLinewidth*Oe()),ft.setMode(I.LINES)):ft.setMode(I.TRIANGLES);else if(X.isLine){let ze=q.linewidth;ze===void 0&&(ze=1),me.setLineWidth(ze*Oe()),X.isLineSegments?ft.setMode(I.LINES):X.isLineLoop?ft.setMode(I.LINE_LOOP):ft.setMode(I.LINE_STRIP)}else X.isPoints?ft.setMode(I.POINTS):X.isSprite&&ft.setMode(I.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)sr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))ft.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const ze=X._multiDrawStarts,ct=X._multiDrawCounts,lt=X._multiDrawCount,Wt=Ie?J.get(Ie).bytesPerElement:1,hi=_.get(q).currentProgram.getUniforms();for(let Xt=0;Xt<lt;Xt++)hi.setValue(I,"_gl_DrawID",Xt),ft.render(ze[Xt]/Wt,ct[Xt])}else if(X.isInstancedMesh)ft.renderInstances(Qe,xt,X.count);else if(j.isInstancedBufferGeometry){const ze=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ct=Math.min(j.instanceCount,ze);ft.renderInstances(Qe,xt,ct)}else ft.render(Qe,xt)};function _t(S,k,j){S.transparent===!0&&S.side===An&&S.forceSinglePass===!1?(S.side=Vt,S.needsUpdate=!0,hr(S,k,j),S.side=Yn,S.needsUpdate=!0,hr(S,k,j),S.side=An):hr(S,k,j)}this.compile=function(S,k,j=null){j===null&&(j=S),C=ve.get(j),C.init(k),P.push(C),j.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(C.pushLight(X),X.castShadow&&C.pushShadow(X))}),S!==j&&S.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(C.pushLight(X),X.castShadow&&C.pushShadow(X))}),C.setupLights();const q=new Set;return S.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let Re=0;Re<Ee.length;Re++){const Ae=Ee[Re];_t(Ae,j,X),q.add(Ae)}else _t(Ee,j,X),q.add(Ee)}),C=P.pop(),q},this.compileAsync=function(S,k,j=null){const q=this.compile(S,k,j);return new Promise(X=>{function Ee(){if(q.forEach(function(Re){_.get(Re).currentProgram.isReady()&&q.delete(Re)}),q.size===0){X(S);return}setTimeout(Ee,10)}We.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let yt=null;function an(S){yt&&yt(S)}function Fe(){zt.stop()}function at(){zt.start()}const zt=new zl;zt.setAnimationLoop(an),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(S){yt=S,b.setAnimationLoop(S),S===null?zt.stop():zt.start()},b.addEventListener("sessionstart",Fe),b.addEventListener("sessionend",at),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;const j=b.enabled===!0&&b.isPresenting===!0,q=G!==null&&(D===null||j)&&G.begin(M,D);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),b.enabled===!0&&b.isPresenting===!0&&(G===null||G.isCompositing()===!1)&&(b.cameraAutoUpdate===!0&&b.updateCamera(k),k=b.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,k,D),C=ve.get(S,P.length),C.init(k),P.push(C),st.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Se.setFromProjectionMatrix(st,hn,k.reversedDepth),Ve=this.localClippingEnabled,pe=Ce.init(this.clippingPlanes,Ve),w=ue.get(S,R.length),w.init(),R.push(w),b.enabled===!0&&b.isPresenting===!0){const Re=M.xr.getDepthSensingMesh();Re!==null&&Qr(Re,k,-1/0,M.sortObjects)}Qr(S,k,0,M.sortObjects),w.finish(),M.sortObjects===!0&&w.sort(He,je),ce=b.enabled===!1||b.isPresenting===!1||b.hasDepthSensing()===!1,ce&&ge.addToRenderList(w,S),this.info.render.frame++,pe===!0&&Ce.beginShadows();const X=C.state.shadowsArray;if(Le.render(X,S,k),pe===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&G.hasRenderPass())===!1){const Re=w.opaque,Ae=w.transmissive;if(C.setupLights(),k.isArrayCamera){const Ie=k.cameras;if(Ae.length>0)for(let Ne=0,Ge=Ie.length;Ne<Ge;Ne++){const Be=Ie[Ne];Jo(Re,Ae,S,Be)}ce&&ge.render(S);for(let Ne=0,Ge=Ie.length;Ne<Ge;Ne++){const Be=Ie[Ne];jo(w,S,Be,Be.viewport)}}else Ae.length>0&&Jo(Re,Ae,S,k),ce&&ge.render(S),jo(w,S,k)}D!==null&&U===0&&(F.updateMultisampleRenderTarget(D),F.updateRenderTargetMipmap(D)),q&&G.end(M),S.isScene===!0&&S.onAfterRender(M,S,k),we.resetDefaultState(),z=-1,V=null,P.pop(),P.length>0?(C=P[P.length-1],pe===!0&&Ce.setGlobalState(M.clippingPlanes,C.state.camera)):C=null,R.pop(),R.length>0?w=R[R.length-1]:w=null};function Qr(S,k,j,q){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)C.pushLight(S),S.castShadow&&C.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Se.intersectsSprite(S)){q&&te.setFromMatrixPosition(S.matrixWorld).applyMatrix4(st);const Re=xe.update(S),Ae=S.material;Ae.visible&&w.push(S,Re,Ae,j,te.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Se.intersectsObject(S))){const Re=xe.update(S),Ae=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),te.copy(S.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),te.copy(Re.boundingSphere.center)),te.applyMatrix4(S.matrixWorld).applyMatrix4(st)),Array.isArray(Ae)){const Ie=Re.groups;for(let Ne=0,Ge=Ie.length;Ne<Ge;Ne++){const Be=Ie[Ne],Qe=Ae[Be.materialIndex];Qe&&Qe.visible&&w.push(S,Re,Qe,j,te.z,Be)}}else Ae.visible&&w.push(S,Re,Ae,j,te.z,null)}}const Ee=S.children;for(let Re=0,Ae=Ee.length;Re<Ae;Re++)Qr(Ee[Re],k,j,q)}function jo(S,k,j,q){const{opaque:X,transmissive:Ee,transparent:Re}=S;C.setupLightsView(j),pe===!0&&Ce.setGlobalState(M.clippingPlanes,j),q&&me.viewport($.copy(q)),X.length>0&&ur(X,k,j),Ee.length>0&&ur(Ee,k,j),Re.length>0&&ur(Re,k,j),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Jo(S,k,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[q.id]===void 0){const Qe=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[q.id]=new pn(1,1,{generateMipmaps:!0,type:Qe?Un:qt,minFilter:ai,samples:ot.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}const Ee=C.state.transmissionRenderTarget[q.id],Re=q.viewport||$;Ee.setSize(Re.z*M.transmissionResolutionScale,Re.w*M.transmissionResolutionScale);const Ae=M.getRenderTarget(),Ie=M.getActiveCubeFace(),Ne=M.getActiveMipmapLevel();M.setRenderTarget(Ee),M.getClearColor(ee),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),ce&&ge.render(j);const Ge=M.toneMapping;M.toneMapping=dn;const Be=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),C.setupLightsView(q),pe===!0&&Ce.setGlobalState(M.clippingPlanes,q),ur(S,j,q),F.updateMultisampleRenderTarget(Ee),F.updateRenderTargetMipmap(Ee),We.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ht=0,xt=k.length;ht<xt;ht++){const vt=k[ht],{object:ft,geometry:ze,material:ct,group:lt}=vt;if(ct.side===An&&ft.layers.test(q.layers)){const Wt=ct.side;ct.side=Vt,ct.needsUpdate=!0,Qo(ft,j,q,ze,ct,lt),ct.side=Wt,ct.needsUpdate=!0,Qe=!0}}Qe===!0&&(F.updateMultisampleRenderTarget(Ee),F.updateRenderTargetMipmap(Ee))}M.setRenderTarget(Ae,Ie,Ne),M.setClearColor(ee,Z),Be!==void 0&&(q.viewport=Be),M.toneMapping=Ge}function ur(S,k,j){const q=k.isScene===!0?k.overrideMaterial:null;for(let X=0,Ee=S.length;X<Ee;X++){const Re=S[X],{object:Ae,geometry:Ie,group:Ne}=Re;let Ge=Re.material;Ge.allowOverride===!0&&q!==null&&(Ge=q),Ae.layers.test(j.layers)&&Qo(Ae,k,j,Ie,Ge,Ne)}}function Qo(S,k,j,q,X,Ee){S.onBeforeRender(M,k,j,q,X,Ee),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(M,k,j,q,S,Ee),X.transparent===!0&&X.side===An&&X.forceSinglePass===!1?(X.side=Vt,X.needsUpdate=!0,M.renderBufferDirect(j,k,q,X,S,Ee),X.side=Yn,X.needsUpdate=!0,M.renderBufferDirect(j,k,q,X,S,Ee),X.side=An):M.renderBufferDirect(j,k,q,X,S,Ee),S.onAfterRender(M,k,j,q,X,Ee)}function hr(S,k,j){k.isScene!==!0&&(k=ye);const q=_.get(S),X=C.state.lights,Ee=C.state.shadowsArray,Re=X.state.version,Ae=Pe.getParameters(S,X.state,Ee,k,j),Ie=Pe.getProgramCacheKey(Ae);let Ne=q.programs;q.environment=S.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(S.isMeshStandardMaterial?ie:Q).get(S.envMap||q.environment),q.envMapRotation=q.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,Ne===void 0&&(S.addEventListener("dispose",he),Ne=new Map,q.programs=Ne);let Ge=Ne.get(Ie);if(Ge!==void 0){if(q.currentProgram===Ge&&q.lightsStateVersion===Re)return ta(S,Ae),Ge}else Ae.uniforms=Pe.getUniforms(S),S.onBeforeCompile(Ae,M),Ge=Pe.acquireProgram(Ae,Ie),Ne.set(Ie,Ge),q.uniforms=Ae.uniforms;const Be=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Be.clippingPlanes=Ce.uniform),ta(S,Ae),q.needsLights=ql(S),q.lightsStateVersion=Re,q.needsLights&&(Be.ambientLightColor.value=X.state.ambient,Be.lightProbe.value=X.state.probe,Be.directionalLights.value=X.state.directional,Be.directionalLightShadows.value=X.state.directionalShadow,Be.spotLights.value=X.state.spot,Be.spotLightShadows.value=X.state.spotShadow,Be.rectAreaLights.value=X.state.rectArea,Be.ltc_1.value=X.state.rectAreaLTC1,Be.ltc_2.value=X.state.rectAreaLTC2,Be.pointLights.value=X.state.point,Be.pointLightShadows.value=X.state.pointShadow,Be.hemisphereLights.value=X.state.hemi,Be.directionalShadowMap.value=X.state.directionalShadowMap,Be.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Be.spotShadowMap.value=X.state.spotShadowMap,Be.spotLightMatrix.value=X.state.spotLightMatrix,Be.spotLightMap.value=X.state.spotLightMap,Be.pointShadowMap.value=X.state.pointShadowMap,Be.pointShadowMatrix.value=X.state.pointShadowMatrix),q.currentProgram=Ge,q.uniformsList=null,Ge}function ea(S){if(S.uniformsList===null){const k=S.currentProgram.getUniforms();S.uniformsList=zr.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function ta(S,k){const j=_.get(S);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function Yl(S,k,j,q,X){k.isScene!==!0&&(k=ye),F.resetTextureUnits();const Ee=k.fog,Re=q.isMeshStandardMaterial?k.environment:null,Ae=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Fi,Ie=(q.isMeshStandardMaterial?ie:Q).get(q.envMap||Re),Ne=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ge=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Be=!!j.morphAttributes.position,Qe=!!j.morphAttributes.normal,ht=!!j.morphAttributes.color;let xt=dn;q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(xt=M.toneMapping);const vt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ft=vt!==void 0?vt.length:0,ze=_.get(q),ct=C.state.lights;if(pe===!0&&(Ve===!0||S!==V)){const Ft=S===V&&q.id===z;Ce.setState(q,S,Ft)}let lt=!1;q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==ct.state.version||ze.outputColorSpace!==Ae||X.isBatchedMesh&&ze.batching===!1||!X.isBatchedMesh&&ze.batching===!0||X.isBatchedMesh&&ze.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&ze.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&ze.instancing===!1||!X.isInstancedMesh&&ze.instancing===!0||X.isSkinnedMesh&&ze.skinning===!1||!X.isSkinnedMesh&&ze.skinning===!0||X.isInstancedMesh&&ze.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&ze.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&ze.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&ze.instancingMorph===!1&&X.morphTexture!==null||ze.envMap!==Ie||q.fog===!0&&ze.fog!==Ee||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ce.numPlanes||ze.numIntersection!==Ce.numIntersection)||ze.vertexAlphas!==Ne||ze.vertexTangents!==Ge||ze.morphTargets!==Be||ze.morphNormals!==Qe||ze.morphColors!==ht||ze.toneMapping!==xt||ze.morphTargetsCount!==ft)&&(lt=!0):(lt=!0,ze.__version=q.version);let Wt=ze.currentProgram;lt===!0&&(Wt=hr(q,k,X));let hi=!1,Xt=!1,Vi=!1;const dt=Wt.getUniforms(),kt=ze.uniforms;if(me.useProgram(Wt.program)&&(hi=!0,Xt=!0,Vi=!0),q.id!==z&&(z=q.id,Xt=!0),hi||V!==S){me.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),dt.setValue(I,"projectionMatrix",S.projectionMatrix),dt.setValue(I,"viewMatrix",S.matrixWorldInverse);const Ht=dt.map.cameraPosition;Ht!==void 0&&Ht.setValue(I,$e.setFromMatrixPosition(S.matrixWorld)),ot.logarithmicDepthBuffer&&dt.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&dt.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),V!==S&&(V=S,Xt=!0,Vi=!0)}if(ze.needsLights&&(ct.state.directionalShadowMap.length>0&&dt.setValue(I,"directionalShadowMap",ct.state.directionalShadowMap,F),ct.state.spotShadowMap.length>0&&dt.setValue(I,"spotShadowMap",ct.state.spotShadowMap,F),ct.state.pointShadowMap.length>0&&dt.setValue(I,"pointShadowMap",ct.state.pointShadowMap,F)),X.isSkinnedMesh){dt.setOptional(I,X,"bindMatrix"),dt.setOptional(I,X,"bindMatrixInverse");const Ft=X.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),dt.setValue(I,"boneTexture",Ft.boneTexture,F))}X.isBatchedMesh&&(dt.setOptional(I,X,"batchingTexture"),dt.setValue(I,"batchingTexture",X._matricesTexture,F),dt.setOptional(I,X,"batchingIdTexture"),dt.setValue(I,"batchingIdTexture",X._indirectTexture,F),dt.setOptional(I,X,"batchingColorTexture"),X._colorsTexture!==null&&dt.setValue(I,"batchingColorTexture",X._colorsTexture,F));const Zt=j.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&Ze.update(X,j,Wt),(Xt||ze.receiveShadow!==X.receiveShadow)&&(ze.receiveShadow=X.receiveShadow,dt.setValue(I,"receiveShadow",X.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(kt.envMap.value=Ie,kt.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(kt.envMapIntensity.value=k.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=_m()),Xt&&(dt.setValue(I,"toneMappingExposure",M.toneMappingExposure),ze.needsLights&&$l(kt,Vi),Ee&&q.fog===!0&&ke.refreshFogUniforms(kt,Ee),ke.refreshMaterialUniforms(kt,q,Me,_e,C.state.transmissionRenderTarget[S.id]),zr.upload(I,ea(ze),kt,F)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(zr.upload(I,ea(ze),kt,F),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&dt.setValue(I,"center",X.center),dt.setValue(I,"modelViewMatrix",X.modelViewMatrix),dt.setValue(I,"normalMatrix",X.normalMatrix),dt.setValue(I,"modelMatrix",X.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ft=q.uniformsGroups;for(let Ht=0,es=Ft.length;Ht<es;Ht++){const $n=Ft[Ht];le.update($n,Wt),le.bind($n,Wt)}}return Wt}function $l(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function ql(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,k,j){const q=_.get(S);q.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),_.get(S.texture).__webglTexture=k,_.get(S.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:j,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,k){const j=_.get(S);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0};const Zl=I.createFramebuffer();this.setRenderTarget=function(S,k=0,j=0){D=S,E=k,U=j;let q=null,X=!1,Ee=!1;if(S){const Ae=_.get(S);if(Ae.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(I.FRAMEBUFFER,Ae.__webglFramebuffer),$.copy(S.viewport),L.copy(S.scissor),W=S.scissorTest,me.viewport($),me.scissor(L),me.setScissorTest(W),z=-1;return}else if(Ae.__webglFramebuffer===void 0)F.setupRenderTarget(S);else if(Ae.__hasExternalTextures)F.rebindTextures(S,_.get(S.texture).__webglTexture,_.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ge=S.depthTexture;if(Ae.__boundDepthTexture!==Ge){if(Ge!==null&&_.has(Ge)&&(S.width!==Ge.image.width||S.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(S)}}const Ie=S.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Ee=!0);const Ne=_.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ne[k])?q=Ne[k][j]:q=Ne[k],X=!0):S.samples>0&&F.useMultisampledRTT(S)===!1?q=_.get(S).__webglMultisampledFramebuffer:Array.isArray(Ne)?q=Ne[j]:q=Ne,$.copy(S.viewport),L.copy(S.scissor),W=S.scissorTest}else $.copy(K).multiplyScalar(Me).floor(),L.copy(ne).multiplyScalar(Me).floor(),W=ae;if(j!==0&&(q=Zl),me.bindFramebuffer(I.FRAMEBUFFER,q)&&me.drawBuffers(S,q),me.viewport($),me.scissor(L),me.setScissorTest(W),X){const Ae=_.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ae.__webglTexture,j)}else if(Ee){const Ae=k;for(let Ie=0;Ie<S.textures.length;Ie++){const Ne=_.get(S.textures[Ie]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ie,Ne.__webglTexture,j,Ae)}}else if(S!==null&&j!==0){const Ae=_.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ae.__webglTexture,j)}z=-1},this.readRenderTargetPixels=function(S,k,j,q,X,Ee,Re,Ae=0){if(!(S&&S.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=_.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){me.bindFramebuffer(I.FRAMEBUFFER,Ie);try{const Ne=S.textures[Ae],Ge=Ne.format,Be=Ne.type;if(!ot.textureFormatReadable(Ge)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Be)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-q&&j>=0&&j<=S.height-X&&(S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ae),I.readPixels(k,j,q,X,fe.convert(Ge),fe.convert(Be),Ee))}finally{const Ne=D!==null?_.get(D).__webglFramebuffer:null;me.bindFramebuffer(I.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(S,k,j,q,X,Ee,Re,Ae=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=_.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie)if(k>=0&&k<=S.width-q&&j>=0&&j<=S.height-X){me.bindFramebuffer(I.FRAMEBUFFER,Ie);const Ne=S.textures[Ae],Ge=Ne.format,Be=Ne.type;if(!ot.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Qe),I.bufferData(I.PIXEL_PACK_BUFFER,Ee.byteLength,I.STREAM_READ),S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ae),I.readPixels(k,j,q,X,fe.convert(Ge),fe.convert(Be),0);const ht=D!==null?_.get(D).__webglFramebuffer:null;me.bindFramebuffer(I.FRAMEBUFFER,ht);const xt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ic(I,xt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Qe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ee),I.deleteBuffer(Qe),I.deleteSync(xt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,k=null,j=0){const q=Math.pow(2,-j),X=Math.floor(S.image.width*q),Ee=Math.floor(S.image.height*q),Re=k!==null?k.x:0,Ae=k!==null?k.y:0;F.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,j,0,0,Re,Ae,X,Ee),me.unbindTexture()};const Kl=I.createFramebuffer(),jl=I.createFramebuffer();this.copyTextureToTexture=function(S,k,j=null,q=null,X=0,Ee=null){Ee===null&&(X!==0?(sr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=X,X=0):Ee=0);let Re,Ae,Ie,Ne,Ge,Be,Qe,ht,xt;const vt=S.isCompressedTexture?S.mipmaps[Ee]:S.image;if(j!==null)Re=j.max.x-j.min.x,Ae=j.max.y-j.min.y,Ie=j.isBox3?j.max.z-j.min.z:1,Ne=j.min.x,Ge=j.min.y,Be=j.isBox3?j.min.z:0;else{const Zt=Math.pow(2,-X);Re=Math.floor(vt.width*Zt),Ae=Math.floor(vt.height*Zt),S.isDataArrayTexture?Ie=vt.depth:S.isData3DTexture?Ie=Math.floor(vt.depth*Zt):Ie=1,Ne=0,Ge=0,Be=0}q!==null?(Qe=q.x,ht=q.y,xt=q.z):(Qe=0,ht=0,xt=0);const ft=fe.convert(k.format),ze=fe.convert(k.type);let ct;k.isData3DTexture?(F.setTexture3D(k,0),ct=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(F.setTexture2DArray(k,0),ct=I.TEXTURE_2D_ARRAY):(F.setTexture2D(k,0),ct=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const lt=I.getParameter(I.UNPACK_ROW_LENGTH),Wt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),hi=I.getParameter(I.UNPACK_SKIP_PIXELS),Xt=I.getParameter(I.UNPACK_SKIP_ROWS),Vi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,vt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ne),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ge),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Be);const dt=S.isDataArrayTexture||S.isData3DTexture,kt=k.isDataArrayTexture||k.isData3DTexture;if(S.isDepthTexture){const Zt=_.get(S),Ft=_.get(k),Ht=_.get(Zt.__renderTarget),es=_.get(Ft.__renderTarget);me.bindFramebuffer(I.READ_FRAMEBUFFER,Ht.__webglFramebuffer),me.bindFramebuffer(I.DRAW_FRAMEBUFFER,es.__webglFramebuffer);for(let $n=0;$n<Ie;$n++)dt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_.get(S).__webglTexture,X,Be+$n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_.get(k).__webglTexture,Ee,xt+$n)),I.blitFramebuffer(Ne,Ge,Re,Ae,Qe,ht,Re,Ae,I.DEPTH_BUFFER_BIT,I.NEAREST);me.bindFramebuffer(I.READ_FRAMEBUFFER,null),me.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(X!==0||S.isRenderTargetTexture||_.has(S)){const Zt=_.get(S),Ft=_.get(k);me.bindFramebuffer(I.READ_FRAMEBUFFER,Kl),me.bindFramebuffer(I.DRAW_FRAMEBUFFER,jl);for(let Ht=0;Ht<Ie;Ht++)dt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Zt.__webglTexture,X,Be+Ht):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Zt.__webglTexture,X),kt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.__webglTexture,Ee,xt+Ht):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ft.__webglTexture,Ee),X!==0?I.blitFramebuffer(Ne,Ge,Re,Ae,Qe,ht,Re,Ae,I.COLOR_BUFFER_BIT,I.NEAREST):kt?I.copyTexSubImage3D(ct,Ee,Qe,ht,xt+Ht,Ne,Ge,Re,Ae):I.copyTexSubImage2D(ct,Ee,Qe,ht,Ne,Ge,Re,Ae);me.bindFramebuffer(I.READ_FRAMEBUFFER,null),me.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else kt?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(ct,Ee,Qe,ht,xt,Re,Ae,Ie,ft,ze,vt.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(ct,Ee,Qe,ht,xt,Re,Ae,Ie,ft,vt.data):I.texSubImage3D(ct,Ee,Qe,ht,xt,Re,Ae,Ie,ft,ze,vt):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Ee,Qe,ht,Re,Ae,ft,ze,vt.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Ee,Qe,ht,vt.width,vt.height,ft,vt.data):I.texSubImage2D(I.TEXTURE_2D,Ee,Qe,ht,Re,Ae,ft,ze,vt);I.pixelStorei(I.UNPACK_ROW_LENGTH,lt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Wt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,hi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Vi),Ee===0&&k.generateMipmaps&&I.generateMipmap(ct),me.unbindTexture()},this.initRenderTarget=function(S){_.get(S).__webglFramebuffer===void 0&&F.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?F.setTextureCube(S,0):S.isData3DTexture?F.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?F.setTexture2DArray(S,0):F.setTexture2D(S,0),me.unbindTexture()},this.resetState=function(){E=0,U=0,D=null,me.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const Gi="#005eb8";function si(i,e,t){const n=e.split(/\s+/),r=[];let s="";for(const o of n){const a=s?`${s} ${o}`:o;i.measureText(a).width>t&&s?(r.push(s),s=o):s=a}return s&&r.push(s),r}function er(i,e,t){if(i.measureText(e).width<=t)return e;let n=e;for(;n.length>1&&i.measureText(`${n}…`).width>t;)n=n.slice(0,-1);return`${n}…`}function pt(i){const e=document.createElement("canvas");e.width=i.widthPx,e.height=i.heightPx;const t=e.getContext("2d"),n=Math.round(i.widthPx*.05),r=i.align??"left",s=r==="center"?i.widthPx/2:n;t.fillStyle=i.background??Gi,t.fillRect(0,0,e.width,e.height),t.fillStyle=i.color??"#ffffff",t.textAlign=r,t.textBaseline="top";let o=n;const a=i.titleSize??Math.round(i.heightPx*.28);t.font=`bold ${a}px Arial`;for(const c of si(t,i.title,i.widthPx-n*2))t.fillText(c,s,o),o+=a*1.15;if(i.subtitle){const c=i.subtitleSize??Math.round(a*.55);t.font=`${c}px Arial`,t.globalAlpha=.85;for(const u of si(t,i.subtitle,i.widthPx-n*2))t.fillText(u,s,o),o+=c*1.2;t.globalAlpha=1}if(i.body){o+=n*.5;let c=i.bodySize??Math.round(a*.45);if(i.fitBody){const u=i.footer?Math.round(a*.32)*2.6+n:n,h=i.heightPx-o-u;for(;c>16&&(t.font=`${c}px Arial`,!(si(t,i.body,i.widthPx-n*2).length*c*1.3<=h));)c-=2}t.font=`${c}px Arial`;for(const u of si(t,i.body,i.widthPx-n*2))t.fillText(u,s,o),o+=c*1.3}if(i.footer){const c=Math.round((i.titleSize??i.heightPx*.28)*.32);t.font=`${c}px Arial`,t.globalAlpha=.72;let u=i.heightPx-n;const h=si(t,i.footer,i.widthPx-n*2).reverse();for(const f of h)u-=c*1.25,t.fillText(f,s,u);t.globalAlpha=1}const l=new vn(e);return l.anisotropy=4,l.colorSpace=mt,l}const tl="#009639";function vm(i,e,t){const n=document.createElement("canvas");n.width=620,n.height=810;const r=n.getContext("2d");r.fillStyle="#fbfbf8",r.fillRect(0,0,620,810),r.fillStyle=e,r.fillRect(0,0,620,92),r.fillStyle="#ffffff",r.font="bold 46px Arial",r.textBaseline="middle",r.fillText(i,30,48),r.textBaseline="top",r.fillStyle="#20262b",r.font="34px Arial";let s=130;for(const a of si(r,t,560))if(r.fillText(a,30,s),s+=46,s>770)break;const o=new vn(n);return o.anisotropy=4,o.colorSpace=mt,o}function Mm(i){const e=document.createElement("canvas");e.width=620,e.height=290;const t=e.getContext("2d");t.fillStyle="#e9e3d0",t.fillRect(0,0,620,290),t.strokeStyle="#8b8672",t.lineWidth=6,t.strokeRect(8,8,604,274),t.fillStyle="#6c6753",t.font="26px Arial",t.fillText("formerly signposted as",28,34),t.fillStyle="#3a382f";let n=88;for(const s of i.slice(0,3)){t.font="bold 44px Arial",t.fillText(s,28,n);const o=t.measureText(s).width;t.strokeStyle="#7d2a2a",t.lineWidth=5,t.beginPath(),t.moveTo(24,n+2),t.lineTo(32+o,n-6),t.stroke(),n+=64}const r=new vn(e);return r.colorSpace=mt,r}function Wl(i){const e=document.createElement("canvas"),t=640,n=460;e.width=t,e.height=n;const r=e.getContext("2d");let s=i%2147483646+1;const o=()=>(s=s*16807%2147483647)/2147483647,a=[["#e8e3d4","#41668c","#c4a35a","#7a4b3a","#5d7a76"],["#ece7dc","#6c8c5f","#c96f4a","#3d4a52","#c4b57a"],["#e6e2d8","#8a5a74","#5a7d8a","#c9a35a","#4a5747"]],l=a[i%a.length];r.fillStyle=l[0],r.fillRect(0,0,t,n);const c=5+Math.floor(o()*5);for(let h=0;h<c;h++)if(r.fillStyle=l[1+Math.floor(o()*(l.length-1))],r.globalAlpha=.75+o()*.25,o()<.45)r.beginPath(),r.arc(o()*t,o()*n,40+o()*100,0,Math.PI*(.7+o()*1.3)),r.lineWidth=14+o()*30,r.strokeStyle=r.fillStyle,r.stroke();else{const f=40+o()*150;r.fillRect(o()*(t-f),o()*(n-100),f,50+o()*160)}r.globalAlpha=1;const u=new vn(e);return u.colorSpace=mt,u}function Xr(i,e){const t=document.createElement("canvas");t.width=512,t.height=150;const n=t.getContext("2d");n.fillStyle="#f5f4ef",n.fillRect(0,0,512,150),n.fillStyle="#20262b",n.font="bold 34px Arial",n.fillText(er(n,i,470),22,26),n.font="24px Arial",n.globalAlpha=.75;let r=78;for(const o of si(n,e,470).slice(0,2))n.fillText(o,22,r),r+=32;n.globalAlpha=1;const s=new vn(t);return s.colorSpace=mt,s}function Xl(i){const e=Math.round(i.widthPx*.035),t=Math.round(i.heightPx*.075);let n=e+t*1.25;i.subtitle&&(n+=t*.8),n+=e*.4;const r=n;n+=e*.6;const s=i.columns??1,o=(i.widthPx-e*2-e*(s-1))/s,a=i.rowSize??Math.round(t*.62),l=a*1.55,c=Math.max(1,Math.floor((i.heightPx-n-e)/l));return{pad:e,titleSize:t,top:n,ruleY:r,columns:s,colWidth:o,rowSize:a,rowH:l,rowsPerCol:c}}function Co(i,e){const t=Xl(i),n=[];for(let r=0;r<e;r++){const s=Math.floor(r/t.rowsPerCol);if(s>=t.columns){n.push(null);continue}const o=t.pad+s*(t.colWidth+t.pad),a=t.top+r%t.rowsPerCol*t.rowH;n.push([o/i.widthPx,1-(a+t.rowH)/i.heightPx,(o+t.colWidth)/i.widthPx,1-a/i.heightPx])}return n}function tr(i){const e=document.createElement("canvas");e.width=i.widthPx,e.height=i.heightPx;const t=e.getContext("2d"),n=Xl(i),r=n.pad;t.fillStyle=i.background??Gi,t.fillRect(0,0,e.width,e.height),t.textBaseline="top",t.textAlign="left";const s=n.titleSize;t.fillStyle="#ffffff",t.font=`bold ${s}px Arial`,t.fillText(er(t,i.title,i.widthPx-r*2),r,r),i.subtitle&&(t.font=`${Math.round(s*.55)}px Arial`,t.globalAlpha=.85,t.fillText(er(t,i.subtitle,i.widthPx-r*2),r,r+s*1.25),t.globalAlpha=1),t.strokeStyle="rgba(255,255,255,0.5)",t.lineWidth=Math.max(2,i.heightPx*.004),t.beginPath(),t.moveTo(r,n.ruleY),t.lineTo(i.widthPx-r,n.ruleY),t.stroke();const o=n.top,a=n.columns,l=n.colWidth,c=n.rowSize,u=n.rowH,h=n.rowsPerCol;i.rows.forEach((p,x)=>{const v=Math.floor(x/h);if(v>=a)return;const m=r+v*(l+r),d=o+x%h*u;let A=m;p.chip&&(t.fillStyle=p.chip,t.fillRect(m,d+c*.1,c*.8,c*.8),A+=c*1.2),t.fillStyle="#ffffff",t.font=`${p.strong?"bold ":""}${c}px Arial`;const T=er(t,p.text,l-(A-m));if(t.fillText(T,A,d),p.sub){const w=t.measureText(T).width;t.font=`${Math.round(c*.78)}px Arial`,t.globalAlpha=.75,t.fillText(er(t,`  ${p.sub}`,l-(A-m)-w),A+w,d+c*.15),t.globalAlpha=1}});const f=new vn(e);return f.anisotropy=4,f.colorSpace=mt,f}function Po(i,e=1.36){const t=document.createElement("canvas");t.width=1088,t.height=Math.round(1088/e);const n=t.getContext("2d");n.fillStyle="#3b4046",n.fillRect(0,0,t.width,t.height);const r=new vn(t);r.colorSpace=mt,r.anisotropy=4,r.generateMipmaps=!1,r.minFilter=St;const s=new Image;return s.onload=()=>{const o=Math.max(t.width/s.naturalWidth,t.height/s.naturalHeight),a=s.naturalWidth*o,l=s.naturalHeight*o;n.drawImage(s,(t.width-a)/2,(t.height-l)/2,a,l),r.needsUpdate=!0},s.src=i,r}class Sm{entries=[];placeholder=new gn({color:new qe(Gi)});register(e,t,n){e.material=this.placeholder,this.entries.push({pos:t.clone(),mesh:e,make:n,ready:!1})}update(e,t=55,n=120,r=8){const s=[];for(const o of this.entries){const a=o.pos.distanceTo(e);if(o.mesh.visible=a<n,!o.ready&&a<t)s.push({e:o,d:a});else if(o.ready&&a>n){const l=o.mesh.material;l.map?.dispose(),l.dispose(),o.mesh.material=this.placeholder,o.ready=!1}}s.sort((o,a)=>o.d-a.d);for(const{e:o}of s.slice(0,r))o.mesh.material=new gn({map:o.make()}),o.ready=!0}get count(){return this.entries.length}get readyCount(){return this.entries.filter(e=>e.ready).length}}function bm(i,e,t,n,r,s="sign"){const o=new Pt(new ki(e,t),new gn);return o.name=s,i.register(o,n,r),o}const Em={event:"#41b6e6","mental-object":"#78be20",stative:"#ed8b00","time-interval":"#8a1538",role:"#00a499","physical-object":"#ffb81c",resources:"#7c2855"},Xn=i=>Em[i]??"#425563";function Bi(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new xn;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const h=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let x=0;x<p.count;++x)h.push(p.getX(x)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(const u in s){const h=nl(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const p=[];for(let v=0;v<o[u].length;++v)p.push(o[u][v][f]);const x=nl(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(x)}}return l}function nl(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),a=new Jt(o,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let f=0,p=u.count;f<p;f++)for(let x=0;x<t;x++){const v=u.getComponent(f,x);a.setComponent(f+h,x,v)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function ym(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d");e.fillStyle="#89928b",e.fillRect(0,0,256,256);let t=42;const n=()=>(t=t*16807%2147483647)/2147483647,r=["#9aa39b","#78817a","#a7ada3","#6e766f","#93856f"];for(let o=0;o<1400;o++){e.fillStyle=r[Math.floor(n()*r.length)],e.globalAlpha=.35+n()*.4;const a=1+n()*2.6;e.fillRect(n()*256,n()*256,a,a)}e.globalAlpha=1;const s=new vn(i);return s.wrapS=s.wrapT=nr,s.colorSpace=mt,s.anisotropy=4,s}function Tm(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d");e.fillStyle="#f5f6f3",e.fillRect(0,0,256,256);let t=7;const n=()=>(t=t*16807%2147483647)/2147483647;e.fillStyle="#e8eae4";for(let s=0;s<600;s++)e.globalAlpha=.35+n()*.3,e.fillRect(n()*256,n()*256,1.6,1.6);e.globalAlpha=1,e.strokeStyle="#cfd3cb",e.lineWidth=3;for(const s of[0,128,256])e.beginPath(),e.moveTo(s,0),e.lineTo(s,256),e.moveTo(0,s),e.lineTo(256,s),e.stroke();const r=new vn(i);return r.wrapS=r.wrapT=nr,r.repeat.set(1/1.2,1/1.2),r.colorSpace=mt,r.anisotropy=4,r}const de={floor:new uu({map:ym(),shininess:60,specular:new qe(3026478)}),wall:new Tt({color:14541782}),endWall:new Tt({color:12175549}),ceiling:new Tt({map:Tm()}),door:new Tt({color:9083520}),liftDoor:new Tt({color:12042182}),stair:new Tt({color:12174013}),stairDark:new Tt({color:3817799}),rail:new Tt({color:8358806}),oak:new Tt({color:9071173}),glass:new Tt({color:3095104}),steel:new Tt({color:12831182}),led:new gn({color:16251391}),chair:new Tt({color:5140074}),daylight:new gn({color:14214894})};function wm(i,e,t,n){const r=i.attributes.uv,s=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let o=0;o<6;o++){const[a,l]=s[o];for(let c=0;c<4;c++){const u=o*4+c;r.setXY(u,r.getX(u)*a,r.getY(u)*l)}}r.needsUpdate=!0}function ji(i,e){if(!i.length)return null;const t=i.map(s=>{const o=new Fn(s.w,s.h,s.d);return o.translate(s.x,s.y,s.z),o}),n=Bi(t);t.forEach(s=>s.dispose());const r=new Pt(n,e);return r.matrixAutoUpdate=!1,r}const Lr={skirtH:.152,railH:.152,railCentre:.95},Io=new Tt({vertexColors:!0}),il=["#c98d64","#8d5a3c","#e3b498","#6b4a30","#d9a37e"],rl=["#2e2620","#5b4632","#8c8c8c","#d9d3c5","#141414"];function Zo(i){const e=i();if(e<.25)return{top:"#f2f3ef",legs:"#f2f3ef",cap:"#ffffff"};if(e<.31)return{top:"#20375c",legs:"#20375c",cap:"#ffffff"};if(e<.43)return{top:"#eeefe9",legs:"#565b62"};if(e<.55)return{top:"#68727d",legs:"#4c5257"};const t=["#7a8f6a","#c0a052","#7c5866","#5f7484","#96694f"],n=["#55504a","#3f464d","#6a5d4f","#44403a"];return{top:t[Math.floor(i()*t.length)],legs:n[Math.floor(i()*n.length)]}}function cr(i){let e=i%2147483646+1;for(let t=0;t<3;t++)e=e*16807%2147483647;return()=>(e=e*16807%2147483647)/2147483647}function Ct(i,e,t,n,r,s,o){const a=new Fn(i,e,t);a.translate(n,r,s);const l=new qe(o),c=a.attributes.position.count,u=new Float32Array(c*3);for(let h=0;h<c;h++)u[h*3]=l.r,u[h*3+1]=l.g,u[h*3+2]=l.b;return a.setAttribute("color",new Jt(u,3)),a}function Ko(i,e,t,n){const r=il[Math.floor(i()*il.length)],s=e.cap??rl[Math.floor(i()*rl.length)],o=[Ct(.2,.22,.2,0,t,n,r),Ct(.21,.08,.21,0,t+.15,n-.01,s)];return e.cap&&o.push(Ct(.24,.03,.24,0,t+.2,n-.01,e.cap)),o}function Am(i){const e=cr(i),t=Zo(e),n=[Ct(.09,.44,.11,-.09,.22,.17,t.legs),Ct(.09,.44,.11,.09,.22,.17,t.legs),Ct(.1,.13,.4,-.09,.5,.03,t.legs),Ct(.1,.13,.4,.09,.5,.03,t.legs),Ct(.32,.52,.2,0,.82,-.08,t.top),Ct(.08,.4,.1,-.21,.86,-.05,t.top),Ct(.08,.4,.1,.21,.86,-.05,t.top),...Ko(e,t,1.2,-.06)],r=Bi(n);return n.forEach(s=>s.dispose()),r}function Rm(i){const e=cr(i),t=Zo(e),n=[Ct(.1,.78,.12,-.09,.39,0,t.legs),Ct(.1,.78,.12,.09,.39,0,t.legs),Ct(.32,.52,.2,0,1.04,0,t.top),Ct(.08,.52,.1,-.21,1,0,t.top),Ct(.08,.52,.1,.21,1,0,t.top),...Ko(e,t,1.42,0)],r=Bi(n);return n.forEach(s=>s.dispose()),r}class Cm{constructor(e,t,n){this.a=e,this.b=t;const r=cr(n),s=Zo(r);this.len=e.distanceTo(t),this.speed=1+r()*.5,this.s=r()*this.len,this.dir=r()<.5?1:-1;const o=(h,f,p)=>{const x=new Pt(h,Io);return x.position.set(f,p,0),this.group.add(x),x},a=()=>Ct(.1,.78,.12,0,-.39,0,s.legs),l=()=>Ct(.08,.52,.1,0,-.26,0,s.top);this.legL=o(a(),-.09,.78),this.legR=o(a(),.09,.78),this.armL=o(l(),-.21,1.28),this.armR=o(l(),.21,1.28);const c=[Ct(.32,.52,.2,0,1.04,0,s.top),...Ko(r,s,1.42,0)],u=Bi(c);c.forEach(h=>h.dispose()),this.group.add(new Pt(u,Io)),this.place()}a;b;group=new Cn;legL;legR;armL;armR;s;dir=1;pause=0;phase=0;len;speed;place(){const e=this.s/this.len;this.group.position.lerpVectors(this.a,this.b,e);const t=(this.b.x-this.a.x)*this.dir,n=(this.b.z-this.a.z)*this.dir;this.group.rotation.y=Math.atan2(t,n)}update(e){if(this.pause>0){this.pause-=e;for(const n of[this.legL,this.legR,this.armL,this.armR])n.rotation.x*=Math.max(0,1-e*6);return}this.s+=this.speed*e*this.dir,(this.s<=0||this.s>=this.len)&&(this.s=Math.max(0,Math.min(this.len,this.s)),this.dir*=-1,this.pause=1.2+this.phase%1.3),this.phase+=this.speed*e*3.4;const t=Math.sin(this.phase)*.5;this.legL.rotation.x=t,this.legR.rotation.x=-t,this.armL.rotation.x=-t*.6,this.armR.rotation.x=t*.6,this.place(),this.group.position.y+=Math.abs(Math.sin(this.phase))*.025}}class Pm{constructor(e,t,n){this.zc=n;const r=new Fn(.05,2.06,.5),s=de.liftDoor;this.leafA=new Pt(r,s),this.leafB=new Pt(r.clone(),s),this.leafA.position.set(t,1.03,n-.25),this.leafB.position.set(t,1.03,n+.25),e.add(this.leafA,this.leafB)}zc;leafA;leafB;openT=0;target=0;update(e){this.openT+=(this.target-this.openT)*Math.min(1,e*5);const t=this.openT*.48;this.leafA.position.z=this.zc-.25-t,this.leafB.position.z=this.zc+.25+t}get openness(){return this.openT}}const sl=i=>i.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""),O={CORRIDOR_W:3,ROOM_H:3,STOREY:4,DOOR_W:1.2,DOOR_H:2.1,DOOR_SPACING:2,ENTRY:2.2,END_ZONE:2.6,NOTICE_SPACING:1.25,LOBBY_W:7,LOBBY_D:7,LANDING_Z0:7,LANDING_Z1:10,STREET_Z0:7,STREET_Z1:11,STREET_H:4,STRIP:8.2,STAIR_SLOT:3.6,WING_GAP:12,PIT_X0:-3.5,PIT_X1:-.7,PIT_Z0:1.2,PIT_Z1:5.5},Im=(i,e,t=0,n=0)=>{const r=Math.max(t,n)*O.NOTICE_SPACING;return O.ENTRY+Math.max(i,e,1)*O.DOOR_SPACING+(r?r+.4:0)+O.END_ZONE};function Lm(i){const e=new Map(i.classes.map(g=>[g.id,g])),t={};for(const g of i.classes)t[g.id]=[];for(const g of i.classes)g.supers.length&&t[g.supers[0]]?.push(g.id);for(const g of i.classes){const E=new Set(t[g.id]);t[g.id]=g.subs.filter(U=>E.has(U))}const n=new Map;function r(g){if(n.has(g))return n.get(g);const E=t[g],U=E.filter(L=>t[L].length),D=[];let z=U.reduce((L,W)=>L+o(W),0),V=0;for(const L of E)t[L].length||(V<z?(D.push(L),V+=o(L)):(U.push(L),z+=o(L)));const $={south:U,north:D,southSum:z,northSum:V};return n.set(g,$),$}const s=new Map;function o(g){if(s.has(g))return s.get(g);const E=t[g];let U=O.STRIP;if(E.length){const{southSum:D,northSum:z}=r(g);U=Math.max(O.STRIP,O.STAIR_SLOT+Math.max(D,z))}return s.set(g,U),U}const a={},l={};function c(g,E,U,D=!1){const z=e.get(g),V=t[g],$=V.length?E+.2-O.PIT_X0:E+O.STRIP/2;if(a[g]={x:$,level:U,y:-4*U,flip:D,corridorLen:Im(z.out.length,z.in.length,z.notes.length,z.examples.length)},V.length){const{south:L,north:W,southSum:ee,northSum:Z}=r(g);let re=E+O.STAIR_SLOT;for(const He of L)c(He,re,U+1,!1),re+=o(He);let _e=E+O.STAIR_SLOT;for(const He of W)c(He,_e,U+1,!0),_e+=o(He);const Me=new Set(V);l[g]={parentId:g,level:U+1,y:-4*(U+1),x0:E+.2,x1:E+O.STAIR_SLOT+Math.max(ee,Z,5),stairX:$+(O.PIT_X0+O.PIT_X1)/2,homeChildIds:V,southIds:L,northIds:W,portalChildIds:z.subs.filter(He=>!Me.has(He))}}}const u=g=>g.rootIds.reduce((E,U)=>E+o(U),0),h=i.wings.reduce((g,E)=>g+u(E),0);let f=0;const p=new Map;for(const g of i.wings){const E=f<h/2;p.set(g.key,E?"south":"north"),E&&(f+=u(g))}const x=[],v={south:6,north:6};for(const g of i.wings){const E=p.get(g.key),U=v[E];for(const D of g.rootIds)c(D,v[E],0),v[E]+=o(D);x.push({key:g.key,x0:U,x1:v[E],rootIds:g.rootIds,street:E}),v[E]+=O.WING_GAP}const m=Math.max(v.south,v.north)-O.WING_GAP+6;for(const g of x){if(g.street!=="north")continue;const E=g.x0+g.x1;for(const D of i.classes){if(D.wing!==g.key)continue;const z=a[D.id];z.x=E-z.x,z.flip=!z.flip,z.mirror=!0}const U=new Set(i.classes.filter(D=>D.wing===g.key).map(D=>D.id));for(const D of Object.values(l))U.has(D.parentId)&&([D.x0,D.x1]=[E-D.x1,E-D.x0],D.stairX=E-D.stairX,D.mirror=!0)}const d=[],A=[];for(const g of i.classes){const E=a[g.id];!E.mirror&&E.flip&&d.push(E),E.mirror&&!E.flip&&A.push(E)}let T=28;const w=2,C=O.CORRIDOR_W/2+.3,R=O.LOBBY_W/2+.15,P=(g,E,U,D)=>Math.abs(g.x-E.x)<U+D;for(const g of d)for(const E of A)g.level===E.level&&(P(g,E,C,C)&&(T=Math.max(T,12+g.corridorLen+E.corridorLen+w)),P(g,E,C,R)&&(T=Math.max(T,12+g.corridorLen+w)),P(g,E,R,C)&&(T=Math.max(T,12+E.corridorLen+w)));T=Math.ceil(T);const G=O.STREET_Z1+T+O.STREET_Z0+4;for(const g of i.classes){const E=a[g.id];E.mirror=!!E.mirror,E.oz=E.mirror?E.flip?G:G-17:E.flip?17:0}const M=[];for(const g of i.classes)for(const E of g.supers.slice(1))M.push({childId:g.id,parentId:E});return{areas:a,landings:l,homeChildren:t,nonPrimaryUp:M,wings:x,street:{x0:0,x1:m},loop:{C:T,K:G,xEnd:m,south:{z0:O.STREET_Z0,z1:O.STREET_Z1},north:{z0:O.STREET_Z1+T,z1:O.STREET_Z1+T+4},connectors:{west:[.2,3.8],east:[m-3.8,m-.2]}}}}const rn="__atrium",Dm=(i,e)=>i===null&&e===null?"":`${i??0}..${e===-1?"*":e??"*"}`,ol=(i,e)=>{if(i===null&&e===null)return"";const t=e===null||String(e)==="-1"?"*":String(e);return`${i??0}..${t}`},Yr=(i,e,t,n)=>`${[ol(n.oppMin,n.oppMax),i].filter(Boolean).join(" ")} — ${e} → ${[ol(n.min,n.max),t].filter(Boolean).join(" ")}`;class Jr{constructor(e,t,n,r=!1){this.group=e,this.origin=t,this.signs=n,this.f=r?-1:1,e.rotation.y=r?Math.PI:0}group;origin;signs;colliders=[];walkables=[];trims=[];plates=[];glass=[];leds=[];seats=[];f;local(e,t,n){return new B(this.origin.x+this.f*e,this.origin.y+t,this.origin.z+this.f*n)}batches=new Map;box(e,t,n,r,s,o,a,l={solid:!0}){const c={w:e,h:t,d:n,x:s,y:o,z:a,worldUV:l.vinyl||l.worldUV},u=this.batches.get(r);u?u.push(c):this.batches.set(r,[c]);const h=this.origin.x+this.f*s,f=this.origin.z+this.f*a,p=new Et(new B(h-e/2,this.origin.y+o-t/2,f-n/2),new B(h+e/2,this.origin.y+o+t/2,f+n/2));if(l.solid&&this.colliders.push(p),l.walkable&&this.walkables.push(p),l.trim)for(const x of l.trim)this.trimFace(x,e,t,n,s,o,a)}trimFace(e,t,n,r,s,o,a){const l=o-n/2,c=.05,u=e.startsWith("x")?{w:c,d:Math.max(.3,r-.1)}:{w:Math.max(.3,t-.1),d:c},h=c/2+.005,f=e==="x+"?s+t/2+h:e==="x-"?s-t/2-h:s,p=e==="z+"?a+r/2+h:e==="z-"?a-r/2-h:a;this.trims.push({...u,h:Lr.skirtH,x:f,y:l+Lr.skirtH/2,z:p},{...u,h:Lr.railH,x:f,y:l+Lr.railCentre,z:p})}led(e,t,n,r=.6,s=.6){this.leds.push({w:r,h:.035,d:s,x:e,y:n,z:t})}oakSpec(e){this.trims.push(e)}steelSpec(e){this.plates.push(e)}chairSpots=[];peopleGeos=[];sit(e,t,n,r,s){const o=Am(s);r===-1&&o.rotateY(Math.PI),o.translate(e,t,n),this.peopleGeos.push(o)}stand(e,t,n,r,s){const o=Rm(s);o.rotateY(r),o.translate(e,t,n),this.peopleGeos.push(o)}chair(e,t,n,r=1){this.chairSpots.push({x:e,y:t,z:n,face:r});const s=t+.45;this.seats.push({w:.44,h:.06,d:.4,x:e,y:s,z:n}),this.seats.push({w:.44,h:.48,d:.05,x:e,y:s+.36,z:n-r*.19});for(const[o,a]of[[-.18,-.16],[.18,-.16],[-.18,.16],[.18,.16]])this.plates.push({w:.035,h:.44,d:.035,x:e+o,y:t+.22,z:n+a});this.colliders.push(new Et().setFromPoints([this.local(e-.26,t,n-.26),this.local(e+.26,t+.95,n+.26)]))}doorFurniture(e,t,n,r){const o=e.startsWith("x"),a=o?{w:.02,d:.28}:{w:.28,d:.02},l=o?{w:.02,d:O.DOOR_W-.25}:{w:O.DOOR_W-.25,d:.02},c=o?{w:.02,d:.1}:{w:.1,d:.02},u=.06,h=e==="x+"?t+u:e==="x-"?t-u:t,f=e==="z+"?r+u:e==="z-"?r-u:r,p=.42;this.glass.push({...a,h:.42,x:h,y:n+1.5,z:f}),this.plates.push({...l,h:.25,x:h,y:n+.13,z:f}),this.plates.push({...c,h:.3,x:o?h:t+p,y:n+1.05,z:o?r+p:f})}populate(e,t){if(e!=="off"){const n=e==="full"?.4:.2,r=cr(t);for(const s of this.chairSpots)r()<n&&this.sit(s.x,s.y+.03,s.z,s.face,Math.floor(r()*99991))}if(this.peopleGeos.length){const n=Bi(this.peopleGeos);this.peopleGeos.forEach(s=>s.dispose());const r=new Pt(n,Io);r.matrixAutoUpdate=!1,this.group.add(r),this.peopleGeos=[]}}finalize(){for(const[e,t]of this.batches){const n=t.map(o=>{const a=new Fn(o.w,o.h,o.d);return o.worldUV&&wm(a,o.w,o.h,o.d),a.translate(o.x,o.y,o.z),a}),r=Bi(n);n.forEach(o=>o.dispose());const s=new Pt(r,e);s.matrixAutoUpdate=!1,this.group.add(s)}this.batches.clear();for(const e of[ji(this.trims,de.oak),ji(this.plates,de.steel),ji(this.glass,de.glass),ji(this.leds,de.led),ji(this.seats,de.chair)])e&&this.group.add(e)}sign(e,t,n,r,s,o,a,l){const c=bm(this.signs,e,t,this.local(n,r,s),a,l);return c.position.set(n,r,s),c.rotation.y=o,c.matrixAutoUpdate=!1,c.updateMatrix(),this.group.add(c),c}}function Um(i,e,t){const{byId:n,layout:r}=e,s=new Cn;s.name=`area:${i.label}`,s.position.copy(t);const o=r.areas[i.id].flip,a=o?Math.PI:0,l=new Jr(s,t,e.signs,o),c=[],u=Xn(i.wing),h=r.areas[i.id].corridorLen,f=O.CORRIDOR_W,p=O.ROOM_H,x=O.LOBBY_W,v=O.LOBBY_D,m=r.landings[i.id],d=i.supers.length===0,A=-h/2;l.box(f,.1,h,de.floor,0,-.05,A,{walkable:!0,vinyl:!0}),l.box(f,.1,h,de.ceiling,0,p+.05,A,{worldUV:!0}),l.box(.15,p,h,de.wall,f/2+.075,p/2,A,{solid:!0,trim:["x-"]}),l.box(.15,p,h,de.wall,-f/2-.075,p/2,A,{solid:!0,trim:["x+"]}),l.box(f+.3,p,.15,de.endWall,0,p/2,-h-.075,{solid:!0,trim:["z+"]});for(let te=0;te<Math.floor(h/3);te++)l.led(0,-(te+.6)*3,p-.02,.35,1.3);m?(l.box(x/2-O.PIT_X1,.1,v,de.floor,(O.PIT_X1+x/2)/2,-.05,v/2,{walkable:!0,vinyl:!0}),l.box(O.PIT_X1-O.PIT_X0,.1,O.PIT_Z0,de.floor,(O.PIT_X0+O.PIT_X1)/2,-.05,O.PIT_Z0/2,{walkable:!0,vinyl:!0}),l.box(O.PIT_X1-O.PIT_X0,.1,v-O.PIT_Z1,de.floor,(O.PIT_X0+O.PIT_X1)/2,-.05,(O.PIT_Z1+v)/2,{walkable:!0,vinyl:!0})):l.box(x,.1,v,de.floor,0,-.05,v/2,{walkable:!0,vinyl:!0}),l.box(x,.1,v,de.ceiling,0,p+.05,v/2,{worldUV:!0}),l.box(.15,p,v,de.wall,x/2+.075,p/2,v/2,{solid:!0,trim:["x-"]}),l.box(.15,p,v,de.wall,-x/2-.075,p/2,v/2,{solid:!0,trim:["x+"]});const T=(x-f)/2;l.box(T,p,.15,de.wall,f/2+T/2,p/2,-.075,{solid:!0,trim:["z+","z-"]}),l.box(T,p,.15,de.wall,-2.5,p/2,-.075,{solid:!0,trim:["z+","z-"]}),l.box(2,p,.15,de.wall,-2.5,p/2,v+.075,{solid:!0,trim:["z-","z+"]}),l.box(2,p,.15,de.wall,2.5,p/2,v+.075,{solid:!0,trim:["z-","z+"]}),l.box(3,p-O.DOOR_H-.3,.15,de.wall,0,(p+O.DOOR_H+.3)/2,v+.075,{});for(const te of[-1.8,1.8])for(const ye of[2,5])l.led(te,ye,p-.02);const w=d?O.STREET_H:O.ROOM_H,C=d?2.7:2.4;for(const te of[1,-1])l.sign(1.6,.44,te*.015,C,v+1.35,te*Math.PI/2,()=>pt({widthPx:800,heightPx:220,title:i.label,subtitle:i.roomNumber?`Room ${i.roomNumber}`:`${i.wing} wing`,titleSize:62}),`hang:${i.label}:${te}`);for(const te of[-.6,.6])l.steelSpec({w:.03,h:w-C-.22,d:.03,x:te,y:(w+C+.22)/2,z:v+1.35});const R=new gn({color:new qe(u)});l.box(.18,.012,v+h,R,0,.012,(v-h)/2,{}),l.sign(2.6,.7,0,p-.5,.08,0,()=>pt({widthPx:1024,heightPx:276,title:i.label,subtitle:[i.roomNumber?`Room ${i.roomNumber}`:null,`${i.wing} wing · ${i.floor?`level −${i.floor}`:"ground"}`].filter(Boolean).join(" · "),titleSize:96}),`name:${i.label}`);const P=i.supers.map(te=>n.get(te)?.label??"?");l.sign(2.9,.62,0,O.DOOR_H+.55,v-.09,Math.PI,()=>pt({widthPx:1152,heightPx:246,title:d?"⌂ Hospital Street":`Stairs ↑ ${P[0]}`,subtitle:d?"reception · all wings":`landing · stairs at the west end${P.length>1?` · also: ${P.slice(1).join(", ")}`:""}`,titleSize:74}),`back:${i.label}`),l.sign(1.9,1.5,2.5,1.62,.01,0,()=>pt({widthPx:1024,heightPx:810,title:i.label,subtitle:[i.plural?`plural: ${i.plural}`:null,i.alsoKnownAs.length?`also: ${i.alsoKnownAs.join("; ")}`:null,i.roomNumber?`Room ${i.roomNumber}`:null].filter(Boolean).join(" · "),body:i.description??"Definition pending.",footer:i.source?`Source: ${i.source}`:void 0,fitBody:!0,titleSize:88,align:"left"}),`poster:${i.label}`),e.illustrations?.has(sl(i.label))&&(l.oakSpec({w:1.3,h:1.38,d:.05,x:-2.5,y:1.62,z:-.02}),l.sign(1.2,1.28,-2.5,1.62,.01,0,()=>Po(`art/illustrations/${sl(i.label)}.jpg`,1.2/1.28),`illu:${i.label}`));const G=i.self.length;i.deprecated.length&&l.sign(.9,.42,-1.44,1.9,-1.4,Math.PI/2,()=>Mm(i.deprecated),`old:${i.label}`);const M=Math.max(i.out.length,i.in.length,1)*O.DOOR_SPACING,g=-(O.ENTRY+M+.2),E=(te,ye)=>{const ce=te.match(/(\d+)/);return ce?`${ye} ${ce[1]}`:ye};let U=0;const D=(te,ye,ce,Oe,I)=>{const et=te==="right"?1:-1,We=g-(ye+.5)*O.NOTICE_SPACING;l.oakSpec({w:.05,h:1.34,d:1.06,x:et*(f/2-.035),y:1.55,z:We}),l.sign(.94,1.22,et*(f/2-.075),1.55,We,et>0?-Math.PI/2:Math.PI/2,()=>vm(ce,Oe,I),`notice:${i.label}:${ce}`),U++};i.notes.forEach((te,ye)=>D("left",ye,E(te.key,"Note"),Gi,te.text)),i.examples.forEach((te,ye)=>D("right",ye,E(te.key,"Example"),tl,te.text));const z=i.notes.length-i.examples.length,V=Math.min(Math.abs(z),2);for(let te=0;te<V;te++){const ye=z>0?1:-1,ce=(z>0?i.examples.length:i.notes.length)+te,Oe=g-(ce+.5)*O.NOTICE_SPACING,I=(i.id.charCodeAt(0)+i.id.charCodeAt(3)*31+te*7>>>0)%997,et=e.art.length?e.art[I%e.art.length]:null;l.oakSpec({w:.05,h:1.02,d:1.36,x:ye*(f/2-.035),y:1.68,z:Oe}),l.sign(1.28,.94,ye*(f/2-.075),1.68,Oe,ye>0?-Math.PI/2:Math.PI/2,()=>et?Po(`art/${et.file}`):Wl(I),`print:${i.label}:${te}`),l.sign(.44,.13,ye*(f/2-.075),1.05,Oe,ye>0?-Math.PI/2:Math.PI/2,()=>et?Xr(et.title,`${et.artist} · ${et.licence} · Wikimedia Commons`):Xr("Untitled study","Procedural print — placeholder"),`placard:${i.label}:${te}`)}l.chair(2.35,0,.42,1),l.chair(2.95,0,.42,1),l.chair(-2.35,0,.42,1),l.chair(-2.95,0,.42,1);const $=te=>-(O.ENTRY+(te+.5)*O.DOOR_SPACING),L=(te,ye,ce,Oe,I,et,We,ot)=>{const me=te==="right"?1:-1,y=me*(f/2),_=$(ye);l.box(.08,O.DOOR_H,O.DOOR_W,de.door,y-me*.05,O.DOOR_H/2,_,{}),l.doorFurniture(me>0?"x-":"x+",y-me*.05,0,_);const F=me*.75;for(const Q of[1,-1])l.sign(1.3,.56,F,2.42,_+Q*.015,Q>0?0:Math.PI,()=>pt({widthPx:760,heightPx:328,title:We,subtitle:ot,titleSize:50}),`doorsign:${I}:${Q}`);for(const Q of[F-.45,F+.45])l.steelSpec({w:.03,h:p-2.69,d:.03,x:Q,y:(p+2.69)/2,z:_});c.push({kind:ce,areaId:i.id,elementId:Oe,label:I,targetIds:[et],triggerPos:l.local(y-me*.45,0,_),radius:.75,halfX:.4,halfZ:.55,auto:!0,exitPos:l.local(y-me*1.35,0,_),exitYaw:(me>0?Math.PI/2:-Math.PI/2)+a})};i.out.forEach((te,ye)=>{const ce=n.get(te.targetId)?.label??"?";L("right",ye,"door-out",te.elementId,te.label,te.targetId,ce,Yr(i.label,te.label,ce,te))}),i.in.forEach((te,ye)=>{const ce=n.get(te.sourceId)?.label??"?";L("left",ye,"door-in",te.elementId,te.label,te.sourceId,ce,Yr(ce,te.label,i.label,te))});const W=te=>e.art.length?e.art[te%e.art.length]:null,ee=te=>(i.id.charCodeAt(1)*17+i.id.charCodeAt(5)*5+te*31>>>0)%997,Z=Math.max(i.out.length,i.in.length,1),re=(te,ye)=>{const ce=te==="right"?1:-1;for(let Oe=ye;Oe<Z;Oe+=2){const I=ee(Oe*2+(ce>0?1:0));Dn(l,W(I),I,ce*(f/2-.075),1.68,$(Oe),ce>0?-Math.PI/2:Math.PI/2,`${i.label}:${te}:${Oe}`)}};i.out.length<Z&&re("right",i.out.length),i.in.length<Z&&re("left",i.in.length);{const te=ee(99);Dn(l,W(te),te,f/2-.075,1.68,-1.15,-Math.PI/2,`${i.label}:entry`)}if(i.self.forEach((te,ye)=>{const ce=f/2-.8-ye*(O.DOOR_W+.2);l.box(O.DOOR_W,O.DOOR_H,.08,de.door,ce,O.DOOR_H/2,-h+.06,{}),l.doorFurniture("z+",ce,0,-h+.06),l.sign(1.3,.4,ce,O.DOOR_H+.4,-h+.07,0,()=>pt({widthPx:768,heightPx:236,title:`${te.label} ${Dm(te.min,te.max)}`,subtitle:`→ ${i.label}`,titleSize:56}),`selfsign:${te.label}`),c.push({kind:"door-self",areaId:i.id,elementId:te.elementId,label:te.label,targetIds:[i.id],triggerPos:l.local(ce,0,-h+.5),radius:.7,halfX:.55,halfZ:.45,auto:!0})}),!G){for(const te of[-1,1]){const ye=te*.44;l.box(.85,O.DOOR_H,.08,de.door,ye,O.DOOR_H/2,-h+.06,{}),l.steelSpec({w:.7,h:.05,d:.05,x:ye,y:1.05,z:-h+.13}),l.steelSpec({w:.7,h:.22,d:.02,x:ye,y:.13,z:-h+.11})}l.steelSpec({w:.04,h:O.DOOR_H,d:.03,x:0,y:O.DOOR_H/2,z:-h+.11}),l.sign(1.1,.34,0,O.DOOR_H+.35,-h+.07,0,()=>pt({widthPx:640,heightPx:198,title:"FIRE EXIT",subtitle:"emergency use only",background:tl,titleSize:78,align:"center"}),`fire:${i.label}`)}const _e=i.supers.length>0||i.subs.length>0;let Me,He,je;const K=[],ne=[];{const te=Lo(i,n),ye=te.length?Math.max(...te.map(ce=>ce.level)):0;for(let ce=ye;ce>=1;ce--)for(const Oe of te.filter(I=>I.level===ce)){const I=n.get(Oe.id);K.push({text:`▲${ce} ${I?.label??"?"}`,chip:Xn(I?.wing??"")}),ne.push(Oe.id)}K.push({text:`● ${i.label}`,strong:!0,chip:u}),ne.push(null);for(const ce of i.subs){const Oe=n.get(ce);K.push({text:`▼1 ${Oe?.label??"?"}`,chip:Xn(Oe?.wing??"")}),ne.push(ce)}K.push({text:"⌂ Reception"}),ne.push(rn)}const ae={widthPx:850,heightPx:750,title:_e?"Lift":"Exit",subtitle:i.label,rows:K,rowSize:K.length>10?30:38,columns:K.length>10?2:1},Se=(()=>{const te=Co(ae,K.length);return K.flatMap((ye,ce)=>te[ce]&&ne[ce]?[{rect:te[ce],id:ne[ce],label:ye.text.replace(/^[▲▼●⌂]\S* ?/u,"")}]:[])})();let pe;_e&&(l.box(.08,2.4,5.15-4.85,de.liftDoor,2+.04,2.4/2,(4.85+5.15)/2),l.box(.08,2.4,6.45-6.15,de.liftDoor,2+.04,2.4/2,(6.15+6.45)/2),l.box(.08,2.4-O.DOOR_H,1,de.liftDoor,2+.04,(2.4+O.DOOR_H)/2,5.65,{}),l.box(3.42-2,2.4,.08,de.liftDoor,2.71,2.4/2,4.85+.04),l.box(3.42-2,2.4,.08,de.liftDoor,2.71,2.4/2,6.45-.04),l.box(3.42-2,.06,6.45-4.85,de.liftDoor,2.71,2.4+.03,5.65,{}),l.led(2.71,5.65,2.4-.02,.5,.5),je={doors:new Pm(s,2+.1,5.65),doorwayPos:l.local(2+.05,0,5.65)},l.steelSpec({w:.06,h:2.12,d:.09,x:2-.01,y:1.06,z:5.12}),l.steelSpec({w:.06,h:2.12,d:.09,x:2-.01,y:1.06,z:6.18}),l.steelSpec({w:.06,h:.09,d:1.15,x:2-.01,y:2.14,z:5.65}),l.steelSpec({w:.16,h:.02,d:1.05,x:2+.02,y:.012,z:5.65}),l.steelSpec({w:.03,h:.26,d:.16,x:2-.015,y:1.12,z:4.99}),l.sign(.1,.2,2-.035,1.12,4.99,-Math.PI/2,()=>pt({widthPx:64,heightPx:128,title:"▲",subtitle:"▼",titleSize:40,align:"center"}),`liftcall:${i.label}`),l.sign(.72,.24,2-.015,2.27,5.65,-Math.PI/2,()=>pt({widthPx:384,heightPx:128,title:"LIFT",subtitle:i.floor?`level −${i.floor}`:"ground",titleSize:56,align:"center"}),`liftind:${i.label}`),l.steelSpec({w:1.24,h:.05,d:.04,x:2.71+.04,y:.92,z:4.85+.13}),l.steelSpec({w:1.24,h:.05,d:.04,x:2.71+.04,y:.92,z:6.45-.13}),l.steelSpec({w:.04,h:.05,d:1.44,x:3.42-.13,y:.92,z:5.65}),l.sign(.42,.15,2.71+.35,2.02,4.85+.09,0,()=>pt({widthPx:336,heightPx:120,title:"MAX 8 PERSONS · 610 kg",titleSize:30,align:"center",background:"#e8e9e4",color:"#3a4046"}),`liftload:${i.label}`),l.sign(.4,.14,2.71-.2,1.78,6.45-.09,Math.PI,()=>pt({widthPx:320,heightPx:112,title:"NO SMOKING",titleSize:40,align:"center",background:"#f4f4f1",color:"#b3261e"}),`liftsmoke:${i.label}`),pe=l.sign(.95,1.05,2.71-.08,1.3,4.85+.09,0,()=>tr(ae),`liftcab:${i.label}`),Me=l.local(2.71,0,5.65),He=Math.PI/2+a,c.push({kind:"lift",areaId:i.id,label:"Lift",targetIds:[],triggerPos:Me.clone(),radius:.75,auto:!1,prompt:"E — Lift: select destination"}));const Ve=l.sign(1.7,1.5,x/2-.09,1.7,3.1,-Math.PI/2,()=>tr(ae),`liftboard:${i.label}`);let st;if(_e&&(st=[{kind:"lift",mesh:Ve,cells:Se}],pe&&st.push({kind:"lift",mesh:pe,cells:Se})),i.supers.slice(1).forEach((te,ye)=>{const ce=n.get(te),Oe=6.35-ye*1.15;l.box(.1,O.DOOR_H,1,de.door,-3.5+.06,O.DOOR_H/2,Oe,{}),l.doorFurniture("x+",-3.5+.06,0,Oe),l.sign(1.35,.42,-3.5+.1,O.DOOR_H+.4,Oe,Math.PI/2,()=>pt({widthPx:768,heightPx:240,title:`Stairs ↑ ${ce?.label??"?"}`,subtitle:`${ce?.wing??"?"} wing`,titleSize:56}),`upportal:${ce?.label}`),c.push({kind:"stair-up",areaId:i.id,label:`Stairs ↑ ${ce?.label??"?"}`,targetIds:[te],triggerPos:l.local(-3.5+.5,0,Oe),radius:.7,halfX:.45,halfZ:.55,auto:!0})}),m?Nm(i,l,c,e):i.subs.length&&i.subs.forEach((te,ye)=>{const ce=n.get(te),Oe=4.6-ye*1.15;l.box(.1,O.DOOR_H,1,de.door,-3.5+.06,O.DOOR_H/2,Oe,{}),l.doorFurniture("x+",-3.5+.06,0,Oe),l.sign(1.35,.42,-3.5+.1,O.DOOR_H+.4,Oe,Math.PI/2,()=>pt({widthPx:768,heightPx:240,title:`↓ ${ce?.label??"?"}`,subtitle:`homed in ${ce?.wing??"?"} wing`,titleSize:56}),`downportal:${ce?.label}`),c.push({kind:"stair-down",areaId:i.id,label:`Stairs ↓ ${ce?.label??"?"}`,targetIds:[te],triggerPos:l.local(-3.5+.5,0,Oe),radius:.7,halfX:.45,halfZ:.55,auto:!0})}),i.subs.length){const te=i.subs.map(ye=>n.get(ye)?.label??"?");l.sign(1.9,.85,-3.5+.09,2.45,3.3,Math.PI/2,()=>tr({widthPx:900,heightPx:400,title:"Stairs ↓",rows:te.map(ye=>({text:ye})),rowSize:te.length>6?34:44,columns:te.length>8?2:1}),`stairsdown:${i.label}`)}const $e=[new Et().setFromPoints([l.local(-x/2-.3,-.5,-.2),l.local(x/2+.3,2.5,v+.2)]),new Et().setFromPoints([l.local(-f/2-.4,-.5,-h-.5),l.local(f/2+.4,2.5,0)])];if(m){const te=o?-1:1;$e.push(new Et().setFromPoints([l.local(O.PIT_X0-.2,-4-.5,O.PIT_Z0-.2),l.local(O.PIT_X1+.2,2.5,v+.2)]),new Et().setFromPoints([new B(m.x0-.3,t.y-O.STOREY-.5,t.z+te*5.4),new B(m.x1+.3,t.y-O.STOREY+2.5,t.z+te*(O.LANDING_Z1+.3))]))}return l.populate(e.people,i.id.charCodeAt(0)*131+i.id.charCodeAt(4)*17+i.id.charCodeAt(8)>>>0),l.finalize(),{id:i.id,wc:i,label:i.label,group:s,colliders:l.colliders,walkables:l.walkables,interactables:c,spawnPos:l.local(0,0,4.6),spawnYaw:a,liftPos:Me,liftYaw:He,lift:je,boards:st,notices:U,boxes:$e}}function Nm(i,e,t,n){const{byId:r,layout:s}=n,o=s.landings[i.id],a=e.origin,l=O.STOREY,c=O.PIT_X1-O.PIT_X0,u=c/2-.1,h=O.PIT_X0+u/2,f=O.PIT_X1-u/2,p=.8,x=O.PIT_Z1-O.PIT_Z0-p,v=12,m=x/v;for(let L=0;L<v;L++){const W=-((L+1)*(l/2))/v;e.box(u,.09,m+.02,de.stair,h,W-.045,O.PIT_Z1-(L+.5)*m,{walkable:!0})}e.box(c,.1,p,de.stair,(O.PIT_X0+O.PIT_X1)/2,-l/2-.05,O.PIT_Z0+p/2,{walkable:!0});for(let L=0;L<v;L++){const W=-l/2-(L+1)*(l/2)/v;e.box(u,.09,m+.02,de.stair,f,W-.045,O.PIT_Z0+p+(L+.5)*m,{walkable:!0})}e.box(c,.1,O.LOBBY_D-O.PIT_Z1+.1,de.floor,(O.PIT_X0+O.PIT_X1)/2,-l-.05,(O.PIT_Z1+O.LOBBY_D)/2,{walkable:!0,vinyl:!0});const d=l+O.ROOM_H;e.box(.1,d,O.LOBBY_D-O.PIT_Z0,de.wall,O.PIT_X0-.05,-l+d/2-O.ROOM_H,(O.PIT_Z0+O.LOBBY_D)/2),e.box(.1,l,O.PIT_Z1-O.PIT_Z0,de.wall,O.PIT_X1+.05,-l/2,(O.PIT_Z0+O.PIT_Z1)/2),e.box(.1,l,O.LOBBY_D-O.PIT_Z1,de.wall,O.PIT_X1+.05,-l/2,(O.PIT_Z1+O.LOBBY_D)/2),e.box(c+.2,l,.1,de.wall,(O.PIT_X0+O.PIT_X1)/2,-l/2,O.PIT_Z0-.05);const A=(L,W,ee,Z,re)=>{const _e=Math.abs(ee-L)>Math.abs(Z-W),Me=_e?ee-L:Z-W;e.oakSpec({w:_e?Me:.06,h:.06,d:_e?.06:Me,x:(L+ee)/2,y:re+.87,z:(W+Z)/2});for(let He=.15;He<Me;He+=.3)e.oakSpec({w:.035,h:.84,d:.035,x:_e?L+He:L,y:re+.42,z:_e?W:W+He});e.colliders.push(new Et().setFromPoints([e.local(Math.min(L,ee)-.05,re,Math.min(W,Z)-.05),e.local(Math.max(L,ee)+.05,re+.95,Math.max(W,Z)+.05)]))};A(O.PIT_X1+.04,O.PIT_Z0,O.PIT_X1+.04,O.PIT_Z1,0),A(O.PIT_X0,O.PIT_Z0-.04,O.PIT_X1,O.PIT_Z0-.04,0),A(O.PIT_X1-u-.2,O.PIT_Z1+.04,O.PIT_X1,O.PIT_Z1+.04,0);{const L=(O.PIT_X0+O.PIT_X1)/2,W=6,ee=x/W;for(let Z=0;Z<W;Z++){const re=O.PIT_Z1-(Z+.5)*ee,_e=(Z+.5)/W,Me=-2*_e+.87,He=-l+l/2*_e+.87;e.oakSpec({w:.07,h:.06,d:ee,x:L,y:Me,z:re}),e.oakSpec({w:.07,h:.06,d:ee,x:L,y:He,z:re});for(const je of[re-ee/4,re+ee/4]){const K=He-.85;e.oakSpec({w:.035,h:Me-K,d:.035,x:L,y:(Me+K)/2,z:je})}}e.colliders.push(new Et().setFromPoints([e.local(L-.06,-l,O.PIT_Z0+.8),e.local(L+.06,.9,O.PIT_Z1)]))}const T=s.areas[i.id].flip?-1:1,w=L=>T*(L-a.x),C=-l,[R,P]=[w(o.x0),w(o.x1)].sort((L,W)=>L-W),G=P-R,M=(R+P)/2,g=(O.LANDING_Z0+O.LANDING_Z1)/2;e.box(G,.1,3,de.floor,M,C-.05,g,{walkable:!0,vinyl:!0}),e.box(G,.1,3,de.ceiling,M,C+O.ROOM_H+.05,g,{worldUV:!0}),e.box(.15,O.ROOM_H,3.3,de.wall,R-.075,C+O.ROOM_H/2,g,{solid:!0,trim:["x+"]}),e.box(.15,O.ROOM_H,3.3,de.wall,P+.075,C+O.ROOM_H/2,g,{solid:!0,trim:["x-"]});for(let L=0;L<Math.floor(G/3.5);L++)e.led(R+(L+.5)*3.5,g,C+O.ROOM_H-.02,.35,1.3);const E=L=>{const W=w(s.areas[L].x);return[W-O.LOBBY_W/2,W+O.LOBBY_W/2]},U=(L,W,ee)=>{const Z=[],re=[...ee].sort((Me,He)=>Me[0]-He[0]);let _e=R;for(const[Me,He]of re)Me>_e&&(e.box(Me-_e,O.ROOM_H,.15,de.wall,(_e+Me)/2,C+O.ROOM_H/2,L,{solid:!0,trim:[W]}),Z.push([_e,Me])),_e=Math.max(_e,He);return P>_e&&(e.box(P-_e,O.ROOM_H,.15,de.wall,(_e+P)/2,C+O.ROOM_H/2,L,{solid:!0,trim:[W]}),Z.push([_e,P])),Z},D=o.northIds.map(E),z=U(O.LANDING_Z0-.075,"z+",[[O.PIT_X0,O.PIT_X1],...o.southIds.map(E)]);U(O.LANDING_Z1+.075,"z-",D);for(const[L,W]of z)if(!(W-L<4.5))for(let ee=L+2.3;ee<=W-2.3;ee+=6.5){const Z=(Math.round(ee*13)+i.id.charCodeAt(2)>>>0)%997;Dn(e,n.art.length?n.art[Z%n.art.length]:null,Z,ee,C+1.7,O.LANDING_Z0+.01,0,`${i.label}:land:${Math.round(ee)}`)}e.sign(2.4,.6,(O.PIT_X0+O.PIT_X1)/2,C+O.DOOR_H+.5,O.LANDING_Z1-.09,Math.PI,()=>pt({widthPx:1024,heightPx:256,title:`Stairs ↑ ${i.label}`,subtitle:`${i.wing} wing · ${i.floor?`level −${i.floor}`:"ground"}`,titleSize:72}),`landingup:${i.label}`);let V=O.PIT_X1+1.6;const $=L=>{for(const[W,ee]of D)if(L>W-.85&&L<ee+.85)return ee+.95;return L};o.portalChildIds.forEach(L=>{const W=r.get(L);let ee=$(V);for(;ee!==V;)V=ee,ee=$(V);V=Math.min(V,P-1),ee=V,V+=2,e.box(.08,O.DOOR_H,O.DOOR_W,de.door,ee,C+O.DOOR_H/2,O.LANDING_Z1-.05,{}),e.doorFurniture("z-",ee,C,O.LANDING_Z1-.05),e.sign(1.5,.45,ee,C+O.DOOR_H+.45,O.LANDING_Z1-.09,Math.PI,()=>pt({widthPx:768,heightPx:230,title:`↓ ${W?.label??"?"}`,subtitle:`homed in ${W?.wing??"?"} wing`,titleSize:58}),`downportal:${W?.label}`),t.push({kind:"stair-down",areaId:i.id,label:`Stairs ↓ ${W?.label??"?"}`,targetIds:[L],triggerPos:e.local(ee,-l,O.LANDING_Z1-.5),radius:.7,halfX:.55,halfZ:.45,auto:!0})});for(let L=0;L<3;L++){const W=P-.8-L*.6;if(W<V+.8)break;D.some(([ee,Z])=>W>ee-.45&&W<Z+.45)||e.chair(W,C,O.LANDING_Z1-.45,-1)}}function Dn(i,e,t,n,r,s,o,a){const l=Math.sin(o),c=Math.cos(o),u=Math.abs(l)>.5;i.oakSpec({w:u?.05:1.36,h:1.02,d:u?1.36:.05,x:n-l*.045,y:r,z:s-c*.045}),i.sign(1.28,.94,n,r,s,o,()=>e?Po(`art/${e.file}`):Wl(t),`pic:${a}`),i.sign(.44,.13,n,r-.62,s,o,()=>e?Xr(e.title,`${e.artist} · ${e.licence} · Wikimedia Commons`):Xr("Untitled study","Procedural print — placeholder"),`picplacard:${a}`)}function Lo(i,e){const t=new Map;let n=[i.id],r=0;for(;n.length;){r++;const s=[];for(const o of n)for(const a of e.get(o)?.supers??[])t.has(a)||(t.set(a,r),s.push(a));n=s}return[...t].map(([s,o])=>({id:s,level:o}))}const oi="__theatre";function Fm(i,e,t){const n=new Cn;n.name="area:theatre";const r=new Jr(n,new B(0,0,0),i),s=-24,o=-4,a=20,l=33.5,c=(s+o)/2,u=(a+l)/2,h=4.5,f=5,p=1.7,x=.35,v=-f*x,m=v+.4,d=de.wall.clone(),A=de.ceiling.clone(),T=de.floor.clone(),w=de.led.clone(),C=new Tt({color:2830648}),R=new Tt({color:9264970}),P=new Tt({color:6715727}),G=new Tt({color:13623528,transparent:!0,opacity:.3}),M=[d,A,T,C].map(Z=>({m:Z,base:Z.color.clone()})),g=Z=>{for(const re of M)re.m.color.copy(re.base).multiplyScalar(Z?1:.3);w.color.set(Z?16251391:4212047)},E=-15;r.box(3,.1,5,de.floor,E,-.05,17.5,{walkable:!0,vinyl:!0}),r.box(3,.1,5,de.ceiling,E,3.05,17.5,{worldUV:!0});for(const[Z,re]of[[E-1.575,"x+"],[E+1.575,"x-"]]){r.box(.15,1,5,de.wall,Z,.5,17.5,{solid:!0,trim:[re]}),r.box(.08,1.7,5,G,Z,1.85,17.5,{solid:!0}),r.box(.15,.3,5,de.wall,Z,2.85,17.5,{});for(const _e of[16.2,17.5,18.8])r.steelSpec({w:.18,h:1.7,d:.07,x:Z,y:1.85,z:_e})}for(const Z of[16.4,18.6])r.led(E,Z,2.98);r.sign(2.6,.62,E,2.55,a-.09,Math.PI,()=>pt({widthPx:1152,heightPx:260,title:"Postgraduate Medical Centre",subtitle:"lecture theatre · seminars & presentations",titleSize:74}),"theatre-door");const U=h+2.4,D=h-U/2;r.box(.15,U,l-a,d,s-.075,D,u,{solid:!0}),r.box(.15,U,l-a,d,o+.075,D,u,{solid:!0}),r.box(o-s+.3,U,.15,d,c,D,l+.075,{solid:!0}),r.box(-16-s,h+.2,.15,d,(s+-16)/2,h/2-.1,a-.075,{solid:!0}),r.box(o- -14,h+.2,.15,d,(-14+o)/2,h/2-.1,a-.075,{solid:!0}),r.box(2,h-2.3,.15,d,E,(h+2.3)/2,a-.075,{}),r.box(o-s,.1,l-a,A,c,h+.05,u,{worldUV:!0});for(const Z of[s+.11,o-.11])r.box(.06,.8,l-a-3,de.daylight,Z,3.7,u,{});r.box(o-s,.1,2,T,c,-.05,a+1,{walkable:!0,vinyl:!0});for(let Z=0;Z<f;Z++){const re=-x*(Z+1),_e=a+2+p*Z;r.box(o-s,.1,p,T,c,re-.05,_e+p/2,{walkable:!0,vinyl:!0}),r.box(o-s,x,.06,C,c,re+x/2,_e+.03,{})}const z=a+2+p*f;r.box(o-s,.1,1,T,c,v-.05,z+.5,{walkable:!0,vinyl:!0}),r.box(17,.5,1.85,de.oak,c,m-.25,z+1+.925,{walkable:!0});for(let Z=0;Z<f;Z++){const re=-x*(Z+1),_e=a+2+p*Z+.9;for(let Me=-22.8;Me<=-16.45;Me+=.62)r.chair(Me,re,_e,1);for(let Me=-13.55;Me<=-5.2;Me+=.62)r.chair(Me,re,_e,1)}const V=l-.075;r.box(6.7,4.1,.06,C,c,.85,V-.035,{});const $=new gn({color:16777215}),L=new Pt(new ki(6,3.375),$);L.position.set(c,.84,V-.075),L.rotation.y=Math.PI,L.matrixAutoUpdate=!1,L.updateMatrix(),n.add(L),r.sign(5,.7,c,3.35,V-.08,Math.PI,()=>pt({widthPx:1600,heightPx:224,title:"Postgraduate Medical Centre",subtitle:"slides: ← → · PageUp/PageDown (clickers work) · or tap the screen",titleSize:76}),"proscenium"),r.box(.42,1.05,.42,de.oak,-17.5,m+.525,z+1.7,{solid:!0}),r.oakSpec({w:.62,h:.05,d:.5,x:-17.5,y:m+1.08,z:z+1.7}),r.steelSpec({w:.05,h:.3,d:.05,x:-17.28,y:m+1.25,z:z+1.62}),r.sign(1.7,.5,E,2.65,a+.085,0,()=>pt({widthPx:900,heightPx:240,title:"→ Reception",subtitle:"B returns to your last stop",titleSize:66}),"theatre-exit");const W=Z=>e.length?e[Z%e.length]:null;Dn(r,W(5),5,-19.5,1.7,a+.085,0,"theatre:r1"),Dn(r,W(11),11,-10.5,1.7,a+.085,0,"theatre:r2");for(const Z of[-20,c,-8])for(const re of[21.5,24.5,27.5,30.5])r.box(.6,.035,1.3,w,Z,h-.02,re,{});r.box(.12,7,l-a+.3,R,s-.21,1,u,{}),r.box(.12,7,l-a+.3,R,o+.21,1,u,{}),r.box(o-s+.7,7,.12,R,c,1,l+.21,{}),r.box(-16.6-(s-.35),7,.12,R,(s-.35+-16.6)/2,1,a-.21,{}),r.box(o+.35- -13.4,7,.12,R,(-13.4+o+.35)/2,1,a-.21,{}),r.box(3.2,1.3,.12,R,E,3.85,a-.21,{}),r.box(o-s+.9,.18,l-a+.9,R,c,h+.24,u,{});const ee=(Z,re,_e,Me)=>r.box(re-Z,.06,Me-_e,P,(Z+re)/2,-.09,(_e+Me)/2,{});return ee(-30,s-.35,15.2,38),ee(o+.35,2,15.2,38),ee(s-.35,-16.7,15.2,a-.3),ee(-13.3,o+.35,15.2,a-.3),ee(s-.35,o+.35,l+.35,38),t!=="off"&&r.stand(-17.5,m,z+2.15,Math.PI,4271),r.populate(t,6101),r.finalize(),g(!0),{id:oi,wc:null,label:"Postgraduate Medical Centre",group:n,colliders:r.colliders,walkables:r.walkables,interactables:[],boards:[{kind:"screen",mesh:L,cells:[{rect:[0,0,.35,1],id:"prev",label:"previous slide"},{rect:[.35,0,1,1],id:"next",label:"next slide"}]}],spawnPos:new B(E,0,a+1.2),spawnYaw:Math.PI,boxes:[new Et(new B(s-.3,-2.5,a-.3),new B(o+.3,h+.3,l+.3)),new Et(new B(E-1.7,-.5,15),new B(E+1.7,3.2,a))],screen:L,setHouseLights:g,lecternPos:new B(-16.6,m,z+1.9),lecternYaw:0}}function Om(i,e,t,n){const r=new Cn;r.name="area:atrium";const s=new Jr(r,new B(0,0,0),e),o=-26,a=0,l=3,c=15,u=O.STREET_H,h=(o+a)/2,f=(l+c)/2;s.box(a-o,.1,c-l,de.floor,h,-.05,f,{walkable:!0,vinyl:!0}),s.box(a-o,.1,c-l,de.ceiling,h,u+.05,f,{worldUV:!0}),s.box(a-o+.3,1,.15,de.wall,h,.5,l-.075,{solid:!0,trim:["z+"]}),s.box(a-o+.3,1.7,.08,de.daylight,h,1.85,l-.075,{solid:!0}),s.box(a-o+.3,u-2.7,.15,de.wall,h,(u+2.7)/2,l-.075,{});for(let R=o+2;R<a-.5;R+=2)s.steelSpec({w:.07,h:1.7,d:.18,x:R,y:1.85,z:l-.075});s.box(-16-o+.3,u,.15,de.wall,(o-.15+-16)/2,u/2,c+.075,{solid:!0,trim:["z-"]}),s.box(a- -14+.3,u,.15,de.wall,(-14+a+.15)/2,u/2,c+.075,{solid:!0,trim:["z-"]}),s.box(2,u-2.3,.15,de.wall,-15,(u+2.3)/2,c+.075,{}),s.box(.15,u,c-l,de.wall,o-.075,u/2,f,{solid:!0,trim:["x+"]}),s.box(.15,u,O.STREET_Z0-l,de.wall,a+.075,u/2,(l+O.STREET_Z0)/2,{solid:!0,trim:["x-"]}),s.box(.15,u,c-O.STREET_Z1,de.wall,a+.075,u/2,(O.STREET_Z1+c)/2,{solid:!0,trim:["x-"]});for(let R=o+3;R<a-1;R+=4.5)for(const P of[5.2,9,12.8])s.led(R,P,u-.02);s.box(1.1,1.1,5.2,de.oak,o+4.5,.55,f),s.box(4.2,.46,.55,de.oak,-10,.23,4.4),s.box(4.2,.5,.09,de.oak,-10,.7,4.4-.24);for(let R=0;R<5;R++)s.chair(-5.8+R*.62,0,14.35,-1);for(let R=0;R<3;R++)s.chair(-17.9+R*.62,0,14.35,-1);const p=R=>t.length?t[R%t.length]:null;Dn(s,p(3),3,o+.09,1.8,4.6,Math.PI/2,"atrium:w1"),Dn(s,p(9),9,o+.09,1.8,13.4,Math.PI/2,"atrium:w2"),Dn(s,p(6),6,-3.4,1.8,c-.09,Math.PI,"atrium:n1"),s.sign(7,1.5,o+.09,2.6,f,Math.PI/2,()=>pt({widthPx:1792,heightPx:384,title:"ContSys Hospital",subtitle:`${i.meta.label} · ${i.classes.length} concepts · welcome — walk the model`,titleSize:150,align:"center"}),"title"),s.sign(3.2,.7,a-.09,O.ROOM_H+.55,(O.STREET_Z0+O.STREET_Z1)/2,-Math.PI/2,()=>pt({widthPx:1280,heightPx:280,title:"Hospital Street →",subtitle:"all wings · concepts A–Z on the directory",titleSize:88}),"to-street"),s.sign(2.6,.6,-15,2.62,c-.09,Math.PI,()=>pt({widthPx:1152,heightPx:252,title:"Postgraduate Medical Centre →",subtitle:"lecture theatre · seminars & presentations",titleSize:70}),"to-theatre");const x=[...i.wings.map(R=>({text:R.annex?R.label:`${R.label} wing`,sub:`${R.classCount} concepts`,chip:Xn(R.key)})),{text:"Postgraduate Medical Centre",sub:"lecture theatre",chip:"#005eb8"}],v={widthPx:1024,heightPx:724,title:"Hospital directory",subtitle:"wings west to east — tap one to visit its entrance",rows:x,rowSize:40},m=s.sign(3.4,2.4,-20,1.9,c-.09,Math.PI,()=>tr(v),"directory-wings"),d=Co(v,x.length),A={widthPx:2048,heightPx:1152,title:"Concepts A–Z",subtitle:"tap a concept to go there · or press M anywhere for the porter",rows:i.classes.map(R=>({text:R.label,sub:R.roomNumber??void 0,chip:Xn(R.wing)})),rowSize:14,columns:5},T=s.sign(6.4,3.6,-9,1.9,c-.09,Math.PI,()=>tr(A),"directory-az"),w=Co(A,i.classes.length),C=[{kind:"directory",mesh:m,cells:[...i.wings.flatMap((R,P)=>d[P]?[{rect:d[P],id:R.rootIds[0],label:R.annex?R.label:`${R.label} wing`}]:[]),...d[i.wings.length]?[{rect:d[i.wings.length],id:oi,label:"Postgraduate Medical Centre"}]:[]]},{kind:"directory",mesh:T,cells:i.classes.flatMap((R,P)=>w[P]?[{rect:w[P],id:R.id,label:R.label}]:[])}];return n!=="off"&&(s.stand(o+3.7,0,f,Math.PI/2,137),s.sit(-9.4,.02,4.55,1,553),s.sit(-10.6,.02,4.55,1,887)),s.populate(n,9001),s.finalize(),{id:rn,wc:null,label:"Reception",group:r,colliders:s.colliders,walkables:s.walkables,interactables:[],boards:C,spawnPos:new B(-14,0,f),spawnYaw:-Math.PI/2,boxes:[new Et(new B(o-.3,-.5,l-.3),new B(a+.1,2.5,c+.3))]}}const kr="__street";function Bm(i,e,t,n,r){const s=new Cn;s.name="area:street";const o=new Jr(s,new B(0,0,0),t),a=e.loop,l=0,c=a.xEnd,u=c-l,h=(l+c)/2,f=O.STREET_H,p=a.south.z1,x=a.north.z0,v=[a.connectors.west,a.connectors.east],m=new Map(i.classes.map(M=>[M.id,M])),d=new Map(i.wings.map(M=>[M.key,M])),A=new Tt({color:13623528,transparent:!0,opacity:.3}),T=new Tt({color:6715727}),w=M=>{const g=M==="south"?a.south:a.north,E=g.z0,U=g.z1,D=(E+U)/2,z=M==="south"?E-.075:U+.075,V=M==="south"?U+.075:E-.075,$=M==="south"?"z+":"z-",L=M==="south"?"z-":"z+",W=M==="south"?0:Math.PI;o.box(u,.1,U-E,de.floor,h,-.05,D,{walkable:!0,vinyl:!0}),o.box(u,.1,U-E,de.ceiling,h,f+.05,D,{worldUV:!0});for(let ae=l+2;ae<c-1;ae+=4)o.led(ae,E+1.3,f-.02,.35,1.3),o.led(ae,U-1.3,f-.02,.35,1.3);const ee=[];let Z=l;for(const[ae,Se]of v)ae>Z&&ee.push([Z,ae]),Z=Math.max(Z,Se);c>Z&&ee.push([Z,c]);for(const[ae,Se]of ee){const pe=(ae+Se)/2,Ve=Se-ae;o.box(Ve,1,.15,de.wall,pe,.5,V,{solid:!0,trim:[L]}),o.box(Ve,1.7,.08,A,pe,1.85,V,{solid:!0}),o.box(Ve,f-2.7,.15,de.wall,pe,(f+2.7)/2,V,{});for(let st=ae+2;st<Se-.5;st+=2)o.steelSpec({w:.07,h:1.7,d:.18,x:st,y:1.85,z:V})}for(const[ae,Se]of v){const pe=(ae+Se)/2;o.box(Se-ae,f-3,.15,de.wall,pe,(f+3)/2,V,{}),o.sign(2.7,.6,pe,2.62,V+(M==="south"?-.08:.08),M==="south"?Math.PI:0,()=>pt({widthPx:1152,heightPx:252,title:`Cloister → ${M==="south"?"north":"south"} side`,subtitle:"across the courtyard · shorter way round",titleSize:68}),`cloister:${M}:${Math.round(pe)}`)}const re=[];for(const ae of e.wings)if(ae.street===M)for(const Se of ae.rootIds)re.push({x:e.areas[Se].x,id:Se,wingKey:ae.key});re.sort((ae,Se)=>ae.x-Se.x);const _e=M==="south"?E+.46:U-.46,Me=M==="south"?1:-1,He=M==="south"?E+.075:U-.075,je=(ae,Se)=>{const pe=Se-ae,Ve=(ae+Se)/2;if(pe>=12&&(o.chair(Ve-.35,0,_e,Me),o.chair(Ve+.35,0,_e,Me)),pe>=9)for(const st of[Ve-3.2,Ve+3.2]){const $e=(Math.round(st*7)>>>0)%997,te=n.length?n[$e%n.length]:null;Dn(o,te,$e,st,1.78,He,W,`street:${M}:${Math.round(st)}`)}};let K=l;for(const ae of re){const Se=ae.x-O.LOBBY_W/2,pe=ae.x+O.LOBBY_W/2;Se>K&&(o.box(Se-K,f,.15,de.wall,(K+Se)/2,f/2,z,{solid:!0,trim:[$]}),je(K,Se)),o.box(O.LOBBY_W,f-O.ROOM_H,.15,de.wall,ae.x,(f+O.ROOM_H)/2,z,{}),K=pe}c>K&&(o.box(c-K,f,.15,de.wall,(K+c)/2,f/2,z,{solid:!0,trim:[$]}),je(K,c));const ne=M==="south"?E+.02:U-.02;re.forEach(ae=>{const Se=m.get(ae.id),pe=d.get(ae.wingKey);o.sign(3.2,.7,ae.x,O.ROOM_H+.45,ne,W,()=>pt({widthPx:1280,heightPx:280,title:pe?.annex?Se?.label??"?":`${pe?.label??"?"} wing`,subtitle:pe?.annex?`${pe.label} · ${Se?.roomNumber?`Room ${Se.roomNumber}`:""}`:`${pe?.classCount??"?"} concepts · enter for ${Se?.label??"?"}`,titleSize:86}),`street:${Se?.label}`)}),o.box(.15,f,U-E+.3,de.wall,c+.075,f/2,D,{solid:!0,trim:["x-"]}),M==="north"&&o.box(.15,f,U-E+.3,de.wall,l-.075,f/2,D,{solid:!0,trim:["x+"]}),o.sign(3.4,.8,l+.4,2.7,D,-Math.PI/2,()=>pt({widthPx:1280,heightPx:300,title:"Hospital Street",subtitle:`${M} side · wings this way →`,titleSize:96}),`street-name:${M}`)};w("south"),w("north");const[C]=a.connectors.west,R=e.wings.filter(M=>M.street==="south").length;let P=0,G=0;for(const M of e.wings){const g=new gn({color:new qe(Xn(M.key))}),E=e.areas[M.rootIds[0]].x;if(M.street==="south"){const U=a.south.z0+.4+P*.24;P++,o.box(E-l,.012,.16,g,(l+E)/2,.012,U,{}),o.box(.16,.012,U-a.south.z0,g,E,.012,(a.south.z0+U)/2,{})}else{const U=C+.55+G*.62,D=a.south.z0+.4+(R+G)*.24,z=a.north.z1-.4-G*.24;G++,o.box(U-l,.012,.16,g,(l+U)/2,.012,D,{}),o.box(.16,.012,z-D,g,U,.012,(D+z)/2,{}),o.box(E-U,.012,.16,g,(U+E)/2,.012,z,{}),o.box(.16,.012,a.north.z1-z,g,E,.012,(z+a.north.z1)/2,{})}}for(const[M,g]of v){const E=(M+g)/2,U=x-p,D=(p+x)/2;o.box(g-M,.1,U,de.floor,E,-.05,D,{walkable:!0,vinyl:!0}),o.box(g-M,.1,U,de.ceiling,E,f+.05,D,{worldUV:!0});for(const z of[M-.075,g+.075]){o.box(.15,1,U,de.wall,z,.5,D,{solid:!0,trim:[z<E?"x+":"x-"]}),o.box(.08,1.7,U,A,z,1.85,D,{solid:!0}),o.box(.15,f-2.7,U,de.wall,z,(f+2.7)/2,D,{});for(let V=p+2;V<x-.5;V+=2)o.steelSpec({w:.18,h:1.7,d:.07,x:z,y:1.85,z:V})}for(let z=p+2;z<x-1;z+=4)o.led(E,z,f-.02,.35,1.3)}return o.box(c-2,.06,x-p-.4,T,(2+c)/2,-.09,(p+x)/2,{}),x-.2>38&&o.box(32,.06,x-.2-38,T,-14,-.09,(38+x-.2)/2,{}),o.populate(r,4211),o.finalize(),{id:kr,wc:null,label:"Hospital Street",group:s,colliders:o.colliders,walkables:o.walkables,interactables:[],spawnPos:new B(l+3,0,(a.south.z0+a.south.z1)/2),spawnYaw:-Math.PI/2,boxes:[new Et(new B(l-.3,-.5,a.south.z0-.2),new B(c+.3,2.5,a.south.z1+.3)),new Et(new B(l-.3,-.5,a.north.z0-.3),new B(c+.3,2.5,a.north.z1+.2)),...v.map(([M,g])=>new Et(new B(M-.2,-.5,p),new B(g+.2,2.5,x)))]}}const fn=1920,Pi=1080;function zm(i,e,t,n){i.fillStyle=Gi,i.fillRect(0,0,fn,Pi),i.fillStyle="#ffffff",i.textAlign="center",i.font="bold 118px Arial",i.fillText(e,fn/2,470),i.font="54px Arial",i.globalAlpha=.92,i.fillText(t,fn/2,580),i.font="34px Arial",i.globalAlpha=.7,i.fillText(n,fn/2,990),i.globalAlpha=1}function al(i,e,t){i.fillStyle="#f4f6f7",i.fillRect(0,0,fn,Pi),i.fillStyle=Gi,i.fillRect(0,0,fn,190),i.fillStyle="#ffffff",i.textAlign="left",i.font="bold 78px Arial",i.fillText(e,110,128),i.fillStyle="#16212a",i.font="46px Arial",t.forEach((n,r)=>i.fillText(n,110,330+r*105))}function km(){return[{kind:"builtin",draw:i=>zm(i,"Postgraduate Medical Centre","Lecture Theatre · ContSys Hospital","a walkable model of the continuity-of-care concept system")},{kind:"builtin",draw:i=>al(i,"Bring your own slides",["1.  Export your deck as PNG or JPG images (1920 × 1080 works best).","2.  Copy them into the site’s  slides/  folder.","3.  List them in order in  slides/manifest.json :",'         ["01.png", "02.png", "03.png"]',"4.  Video clips (.mp4, .webm) can be listed too — they play here.","5.  Redeploy. This screen then presents your deck."])},{kind:"builtin",draw:i=>al(i,"Presenting & filming",["← →  or  PageUp / PageDown change slides — presenter clickers work.","Tap or click the screen: right side = next, left side = back.","H  hides the whole interface for a clean recording.","L  dims the house lights.","Add  ?start=theatre  to the address to begin at the lectern.","B  returns to your last stop when you’re done."])}]}class Hm{entries=[];index=0;cache=new Map;video=null;videoTex=null;mat;constructor(e){this.mat=e.material}get count(){return this.entries.length}get label(){return`Slide ${this.index+1} / ${this.entries.length}`}async load(){try{const e=await fetch("slides/manifest.json");if(e.ok){const t=await e.json(),n=Array.isArray(t)?t:t?.slides??[];this.entries=n.map(r=>({kind:/\.(mp4|webm|mov)$/i.test(r)?"video":"image",src:`slides/${r}`}))}}catch{}this.entries.length||(this.entries=km()),this.show(0)}next(){this.show(Math.min(this.index+1,this.entries.length-1))}prev(){this.show(Math.max(this.index-1,0))}show(e){if(!this.entries.length)return;this.index=e;const t=this.entries[e];t.kind==="video"?this.mat.map=this.playVideo(t.src):(this.video?.pause(),this.mat.map=this.texture(e),this.entries[e+1]?.kind==="image"&&this.texture(e+1),this.entries[e-1]?.kind==="image"&&this.texture(e-1)),this.mat.needsUpdate=!0}texture(e){const t=this.cache.get(e);if(t)return t;const n=document.createElement("canvas");n.width=fn,n.height=Pi;const r=n.getContext("2d");r.fillStyle="#0d1114",r.fillRect(0,0,fn,Pi);const s=new vn(n);s.colorSpace=mt,s.generateMipmaps=!1,s.minFilter=St;const o=this.entries[e];if(o.kind==="builtin")o.draw(r),s.needsUpdate=!0;else if(o.kind==="image"){const a=new Image;a.onload=()=>{const l=Math.min(fn/a.width,Pi/a.height),c=a.width*l,u=a.height*l;r.drawImage(a,(fn-c)/2,(Pi-u)/2,c,u),s.needsUpdate=!0},a.src=o.src}return this.cache.set(e,s),s}playVideo(e){this.video||(this.video=document.createElement("video"),this.video.playsInline=!0,this.videoTex=new au(this.video),this.videoTex.colorSpace=mt,this.videoTex.generateMipmaps=!1,this.videoTex.minFilter=St);const t=this.video;return t.src.endsWith(e)||(t.src=e),t.currentTime=0,t.muted=!1,t.play().catch(()=>{t.muted=!0,t.play().catch(()=>{})}),this.videoTex}}const wi=new Qt(0,0,0,"YXZ"),Ai=new B,Gm={type:"change"},Vm={type:"lock"},Wm={type:"unlock"},ll=.002,cl=Math.PI/2;class Xm extends Su{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Ym.bind(this),this._onPointerlockChange=$m.bind(this),this._onPointerlockError=qm.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;Ai.setFromMatrixColumn(t.matrix,0),Ai.crossVectors(t.up,Ai),t.position.addScaledVector(Ai,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;Ai.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(Ai,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Ym(i){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;wi.setFromQuaternion(e.quaternion),wi.y-=i.movementX*ll*this.pointerSpeed,wi.x-=i.movementY*ll*this.pointerSpeed,wi.x=Math.max(cl-this.maxPolarAngle,Math.min(cl-this.minPolarAngle,wi.x)),e.quaternion.setFromEuler(wi),this.dispatchEvent(Gm)}function $m(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Vm),this.isLocked=!0):(this.dispatchEvent(Wm),this.isLocked=!1)}function qm(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const ei=1.7,Dr=.3,Zm=4.2,Km=8.5,jm=.5,Jm=7;class Qm{camera;controls;keys=new Set;colliders=[];walkables=[];touch={f:0,s:0};constructor(e){this.camera=new jt(70,innerWidth/innerHeight,.05,160),this.camera.position.set(0,ei,0),this.camera.rotation.order="YXZ",this.controls=new Xm(this.camera,e),addEventListener("keydown",t=>this.keys.add(t.code)),addEventListener("keyup",t=>this.keys.delete(t.code)),addEventListener("blur",()=>this.keys.clear())}setTouchMove(e,t){this.touch.f=e,this.touch.s=t}enableDragLook(e){let t=!1,n=0,r=0;e.addEventListener("pointerdown",s=>{this.controls.isLocked||(t=!0,n=s.clientX,r=s.clientY,e.setPointerCapture(s.pointerId))}),e.addEventListener("pointermove",s=>{if(!t||this.controls.isLocked)return;const o=this.camera.rotation;o.y-=(s.clientX-n)*.0042,o.x=Math.max(-1.45,Math.min(1.45,o.x-(s.clientY-r)*.0042)),n=s.clientX,r=s.clientY});for(const s of["pointerup","pointercancel"])e.addEventListener(s,()=>t=!1)}dash(e=12){const t=this.camera.rotation.y,n=-Math.sin(t),r=-Math.cos(t),s=this.camera.position;let o=0;for(let a=0;a<Math.ceil(e/.4);a++){const l=this.feetY,c=s.x+n*.4,u=s.z+r*.4;if(this.collides(c,u,l))break;const h=this.groundAt(c,u,l);if(h===-1/0)break;s.x=c,s.z=u,s.y=h+ei,o+=.4}return o}setColliders(e){this.colliders=e}setWalkables(e){this.walkables=e}get position(){return this.camera.position}get feetY(){return this.camera.position.y-ei}get floorPosition(){return new B(this.camera.position.x,this.feetY,this.camera.position.z)}teleport(e,t){this.camera.position.set(e.x,(e.y??0)+ei,e.z),this.camera.rotation.set(0,t,0)}groundAt(e,t,n){let r=-1/0;for(const s of this.walkables){if(e<s.min.x-.05||e>s.max.x+.05||t<s.min.z-.05||t>s.max.z+.05)continue;const o=s.max.y;o<=n+jm&&o>r&&(r=o)}return r}collides(e,t,n){const r=new Et(new B(e-Dr,n+.25,t-Dr),new B(e+Dr,n+1.75,t+Dr));return this.colliders.some(s=>s.intersectsBox(r))}snapGround(){const e=this.camera.position,t=this.groundAt(e.x,e.z,this.feetY+.01);t>-1/0&&(e.y=t+ei)}update(e){const t=this.camera.position,n=this.feetY,r=Number(this.keys.has("KeyW"))-Number(this.keys.has("KeyS"))+this.touch.f,s=Number(this.keys.has("KeyD"))-Number(this.keys.has("KeyA"))+this.touch.s;if(r||s){const a=Math.min(1,Math.hypot(r,s)),c=(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||a>.92?Km:Zm)*a,u=this.camera.rotation.y,h=-Math.sin(u)*r+Math.cos(u)*s,f=-Math.cos(u)*r-Math.sin(u)*s,p=Math.hypot(h,f)||1,x=h/p*c*e,v=f/p*c*e;this.collides(t.x+x,t.z,n)||(t.x+=x),this.collides(t.x,t.z+v,n)||(t.z+=v)}const o=this.groundAt(t.x,t.z,n);o>-1/0&&(o>=n?t.y=o+ei:t.y=Math.max(o,n-Jm*e)+ei)}}let wn=null,$r=!1;const Tn=()=>$r;function e0(){return wn||(wn=document.createElement("div"),wn.id="menu-root",document.body.appendChild(wn),wn)}function t0(){!wn||!$r||($r=!1,wn.replaceChildren(),wn.style.display="none")}function ul(i,e,t,n){const r=e0();r.replaceChildren(),r.style.display="flex",$r=!0;const s=document.createElement("div");s.className="menu-panel";const o=document.createElement("div");o.className="menu-head",o.innerHTML='<div class="menu-title"></div><div class="menu-sub"></div>',o.querySelector(".menu-title").textContent=i,o.querySelector(".menu-sub").textContent=e,s.appendChild(o);let a=null;n.searchable&&(a=document.createElement("input"),a.className="menu-filter",a.placeholder="Type to search…",s.appendChild(a));const l=document.createElement("div");l.className="menu-list",s.appendChild(l);const c=document.createElement("div");c.className="menu-foot",c.textContent="↑↓ choose · Enter go · Esc close",s.appendChild(c),r.appendChild(s);let u=[],h=0;const f=m=>{removeEventListener("keydown",v,!0),t0(),m!==null?n.onPick(m):n.onClose?.()},p=()=>{const m=a?.value.trim().toLowerCase()??"";u=t.filter(d=>!m||`${d.label} ${d.sub??""}`.toLowerCase().includes(m)),h=Math.min(h,Math.max(0,u.length-1)),l.replaceChildren(...u.map((d,A)=>{const T=document.createElement("div");T.className="menu-item"+(d.value===null?" info":"")+(d.strong?" strong":"")+(A===h&&d.value!==null?" active":""),d.chip&&(T.style.borderLeftColor=d.chip);const w=document.createElement("span");if(w.textContent=d.label,T.appendChild(w),d.sub){const C=document.createElement("span");C.className="menu-item-sub",C.textContent=d.sub,T.appendChild(C)}return d.value!==null&&(T.addEventListener("click",()=>f(d.value)),T.addEventListener("mousemove",()=>{h!==A&&(h=A,p())})),T})),l.querySelector(".active")?.scrollIntoView({block:"nearest"})},x=m=>{if(!u.length)return;let d=h;for(let A=0;A<u.length&&(d=(d+m+u.length)%u.length,u[d].value===null);A++);h=d,p()},v=m=>{if(m.code==="Escape")m.preventDefault(),m.stopPropagation(),f(null);else if(m.code==="ArrowDown")m.preventDefault(),x(1);else if(m.code==="ArrowUp")m.preventDefault(),x(-1);else if(m.code==="Enter"){m.preventDefault();const d=u[h];d&&d.value!==null&&f(d.value)}else a&&requestAnimationFrame(p)};addEventListener("keydown",v,!0),a?.addEventListener("input",()=>{h=0,p()}),p(),h=Math.max(0,u.findIndex(m=>m.value!==null)),p(),a?.focus()}const n0=700,i0=document.getElementById("app"),ni=document.getElementById("start"),hl=document.getElementById("fade"),Ds=document.getElementById("toast"),Ri=document.getElementById("prompt"),r0=document.getElementById("area-sign"),s0=document.querySelector("#area-sign .label"),o0=document.querySelector("#area-sign .room");let fl=0;function Ot(i){Ds.textContent=i,Ds.style.opacity="1",clearTimeout(fl),fl=window.setTimeout(()=>Ds.style.opacity="0",2200)}function Ci(){hl.style.opacity="1",setTimeout(()=>hl.style.opacity="0",160)}async function a0(){const i=await fetch("world.json").then(b=>{if(!b.ok)throw new Error(`world.json ${b.status} — run \`npm run world\` first`);return b.json()}),e=new Map(i.classes.map(b=>[b.id,b])),t=new Map(i.classes.map(b=>[b.label,b])),n=new Map(i.wings.map(b=>[b.key,b.annex?b.label:`${b.label} wing`])),r=Lm(i),s=await fetch("art/manifest.json").then(b=>b.ok?b.json():[]).catch(()=>[]),o=await fetch("art/illustrations/manifest.json").then(b=>b.ok?b.json():null).then(b=>b?new Set(b.map(H=>H.slug)):null).catch(()=>null),a=navigator.maxTouchPoints>0&&Math.min(screen.width,screen.height)<=500,l=new URLSearchParams(location.search).get("people"),c=l==="off"||l==="low"||l==="full"?l:a?"low":"full",u=matchMedia("(prefers-reduced-motion: reduce)").matches,h=new nu;h.background=new qe(6055792),h.fog=a?new Wr(6055792,42,120):new Wr(6055792,55,150),h.add(new du(16777215,12172994,1)),h.add(new _u(16777215,.38));const f=new gu(16777215,.4);f.position.set(3,8,2),h.add(f);let p;try{p=new xm({antialias:!a})}catch{throw new Error("3D graphics (WebGL) could not start in this browser. On iPhone/iPad, Lockdown Mode blocks WebGL — allow this site under Settings → Privacy & Security → Lockdown Mode → Configure Web Browsing, or try another device.")}p.setSize(innerWidth,innerHeight),p.setPixelRatio(Math.min(devicePixelRatio,a?1.5:2)),p.domElement.style.touchAction="none",p.domElement.style.userSelect="none",i0.appendChild(p.domElement);const x=new Sm,v=new Map,m={byId:e,signs:x,layout:r,art:s,illustrations:o,people:c},d=Om(i,x,s,c);v.set(d.id,d);const A=Bm(i,r,x,s,c);v.set(A.id,A);const T=Fm(x,s,c);v.set(T.id,T);const w=new Hm(T.screen);w.load();for(const b of i.classes){const H=r.areas[b.id],Y=Um(b,m,new B(H.x,H.y,H.oz));v.set(Y.id,Y)}for(const b of v.values())h.add(b.group);const C=[...v.values()].flatMap(b=>b.colliders),R=[...v.values()].flatMap(b=>b.walkables),P=[...v.values()].flatMap(b=>b.interactables),G=new Map;for(const b of P)if(b.elementId){const H=G.get(b.elementId)??[];H.push(b),G.set(b.elementId,H)}function M(b){if(b.kind!=="door-self")return G.get(b.elementId)?.find(H=>H!==b)}const g=new Qm(p.domElement);g.setColliders(C),g.setWalkables(R),g.teleport(d.spawnPos,d.spawnYaw),h.add(g.camera),a&&(g.camera.far=130,g.camera.updateProjectionMatrix());const E=[];if(c!=="off"&&!u){const b=cr(20260703),H=(oe,he,Ue)=>{const Xe=new Cm(he,Ue,1+Math.floor(b()*99991));h.add(Xe.group),E.push({w:Xe,owner:oe})},Y=c==="full"?7:3;for(let oe=0;oe<Y;oe++){const he=4+(r.street.x1-70)*oe/Math.max(1,Y-1),Ue=oe%2?r.loop.north.z0+2:9;H(A,new B(he,0,Ue),new B(Math.min(he+55,r.street.x1-4),0,Ue))}if(c==="full"){let oe=0;for(const[Ue,Xe]of Object.entries(r.landings)){if(Xe.x1-Xe.x0<18||oe>=12)continue;const _t=v.get(Ue);if(!_t)continue;const yt=Xe.mirror?r.loop.K-8.5:8.5;H(_t,new B(Xe.x0+1.2,Xe.y,yt),new B(Xe.x1-1.2,Xe.y,yt)),oe++}let he=0;for(const Ue of i.classes){const Xe=r.areas[Ue.id];if(Xe.corridorLen<24||he>=8)continue;const _t=v.get(Ue.id);if(!_t)continue;const yt=Xe.oz+(Xe.flip?.8:-.8),an=Xe.oz+(Xe.flip?Xe.corridorLen-2:-(Xe.corridorLen-2));H(_t,new B(Xe.x,Xe.y,yt),new B(Xe.x,Xe.y,an)),he++}}}const U=a?140:175;function D(){const b=g.position,H=g.floorPosition.y;for(const Y of v.values()){let oe=1/0;for(const Ue of Y.boxes)oe=Math.min(oe,Ue.distanceToPoint(b));const he=Y.wc?r.areas[Y.wc.id].y:0;Y.group.visible=oe<U&&(Math.abs(he-H)<O.STOREY/2||oe<30)}}D();let z=d;function V(b){z=b;const H=b.wc;s0.textContent=b.label,o0.textContent=H?[H.roomNumber?`Room ${H.roomNumber}`:null,`${n.get(H.wing)??H.wing} · ${H.floor?`level −${H.floor}`:"ground"}`].filter(Boolean).join(" · "):i.meta.label,r0.style.borderLeft=`8px solid ${H?Xn(H.wing):"#ffffff"}`}V(d),new URLSearchParams(location.search).get("start")==="theatre"&&(g.teleport(T.lecternPos,T.lecternYaw),V(T));{const b=new URLSearchParams(location.search).get("concept")?.trim().toLowerCase();if(b){const H=i.classes.find(oe=>oe.label.toLowerCase()===b),Y=H&&v.get(H.id);Y?(g.teleport(Y.spawnPos,Y.spawnYaw),V(Y),D()):Ot(`No concept called “${b}” — press M for the porter`)}}let $=!1;function L(b){const H=z.lift;H&&($||(H.doors.target=g.floorPosition.distanceTo(H.doorwayPos)<2.1?1:0),H.doors.update(b))}let W=null;const ee=()=>{if(!W)try{W=new AudioContext}catch{}};addEventListener("pointerdown",ee,{once:!0}),addEventListener("keydown",ee,{once:!0});function Z(){if(!W)return;const b=W.currentTime+.05;for(const[H,Y]of[[1318.5,0],[1046.5,.14]]){const oe=W.createOscillator(),he=W.createGain();oe.type="sine",oe.frequency.value=H,he.gain.setValueAtTime(1e-4,b+Y),he.gain.linearRampToValueAtTime(.045,b+Y+.015),he.gain.exponentialRampToValueAtTime(1e-4,b+Y+.55),oe.connect(he).connect(W.destination),oe.start(b+Y),oe.stop(b+Y+.6)}}const re=b=>(b.max.x-b.min.x)*(b.max.y-b.min.y)*(b.max.z-b.min.z);function _e(b){let H,Y=1/0;for(const oe of v.values())for(const he of oe.boxes)he.containsPoint(b)&&re(he)<Y&&(H=oe,Y=re(he));return H}const Me=navigator.maxTouchPoints>0||"ontouchstart"in window||matchMedia("(pointer: coarse)").matches,He=matchMedia("(pointer: coarse)").matches;if(Me){document.body.classList.add("touch");const b=ni.querySelector(".badge"),H=ni.querySelector("p");b&&(b.textContent=He?"Tap to enter":"Click or tap to enter"),H&&(H.textContent="Left pad or WASD to walk · drag to look · ⏩ jumps ahead · ℹ reads · ⌖ porter · double-click captures the mouse")}ni.addEventListener("pointerup",b=>{Me||b.pointerType==="touch"?ni.style.display="none":g.controls.lock()}),p.domElement.addEventListener("dblclick",()=>g.controls.lock()),g.controls.addEventListener("lock",()=>ni.style.display="none"),g.controls.addEventListener("unlock",()=>{!Tn()&&!We&&(ni.style.display="flex")});let je=0;const K=[];function ne(){const b=g.floorPosition;K.push({x:b.x,y:b.y,z:b.z,yaw:g.camera.rotation.y,areaId:z.id}),K.length>60&&K.shift()}function ae(){if(Tn()||We||$)return;const b=K.pop();if(!b){Ot("No earlier stop to go back to");return}const H=v.get(b.areaId);g.teleport({x:b.x,y:b.y,z:b.z},b.yaw),H&&V(H),J=ie(g.floorPosition),D(),Ci(),Ot(`Back → ${H?.label??"previous stop"}`),je=performance.now()}function Se(b,H){const Y=v.get(b);Y&&(ne(),g.teleport(Y.spawnPos,Y.spawnYaw),V(Y),J=ie(g.floorPosition),D(),Ci(),H&&Ot(H),je=performance.now())}function pe(b,H){b?.lift?($=!0,b.lift.doors.target=0,setTimeout(()=>{$=!1,g.floorPosition.distanceTo(b.lift.doorwayPos)<1.7?Ve(H):Ot("The lift left without you")},650)):Ve(H)}function Ve(b){const H=v.get(b);H&&(H.liftPos?(ne(),g.teleport(H.liftPos,H.liftYaw??0),V(H),J=ie(g.floorPosition),D(),Ci(),Ot(`Lift → ${H.label}`),je=performance.now(),Z()):Se(b,`Lift → ${H.label}`))}function st(b){const H=b.targetIds[0],Y=v.get(H);if(Y){if(ne(),b.kind==="door-self")g.teleport(Y.spawnPos,Y.spawnYaw),Ot(`${b.label} — back where you started (a pig's ear)`);else{const oe=M(b);oe?.exitPos?g.teleport(oe.exitPos,oe.exitYaw??0):g.teleport(Y.spawnPos,Y.spawnYaw),Ot(`${b.label} → ${Y.label}`)}V(Y),J=ie(g.floorPosition),D(),Ci(),je=performance.now()}}const $e=(b,H="")=>{const Y=e.get(b);return{label:`${H}${Y?.label??b}`,sub:Y?[Y.roomNumber,`${n.get(Y.wing)??Y.wing} · ${Y.floor?`level −${Y.floor}`:"ground"}`].filter(Boolean).join(" · "):void 0,chip:Y?Xn(Y.wing):void 0,value:b}};function te(b){const H=e.get(b.areaId),Y=g.controls.isLocked;Y&&g.controls.unlock();const oe=Ue=>{Y&&g.controls.lock(),Ue?.()},he=[];if(H){const Ue=Lo(H,e).sort((Xe,_t)=>_t.level-Xe.level);he.push(...Ue.map(Xe=>$e(Xe.id,`▲${Xe.level}  `))),he.push({label:`●  ${H.label}`,sub:"you are here",strong:!0,value:null}),he.push(...H.subs.map(Xe=>$e(Xe,"▼1  ")))}he.push({label:"⌂  Reception",sub:"ground floor",value:rn}),ul("Lift",H?.label??"",he,{onPick:Ue=>oe(()=>pe(v.get(b.areaId),Ue)),onClose:()=>oe()})}function ye(){const b=g.controls.isLocked;b&&g.controls.unlock();const H=[...i.classes].sort((Y,oe)=>Y.label.localeCompare(oe.label)).map(Y=>$e(Y.id));H.unshift({label:"⌂  Reception",sub:"the atrium",value:rn},{label:"▤  Postgraduate Medical Centre",sub:"lecture theatre",value:oi}),ul("Porter service","where would you like to go?",H,{searchable:!0,onPick:Y=>{b&&g.controls.lock(),Se(Y,`Porter → ${v.get(Y)?.label}`)},onClose:()=>{b&&g.controls.lock()}})}const ce=document.getElementById("reader"),Oe=ce.querySelector("h2"),I=ce.querySelector("header .meta"),et=ce.querySelector(".reader-body");let We=!1,ot=!1;const me=b=>b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function y(){We=!1,ce.style.display="none",ot&&g.controls.lock()}function _(){const b=z.wc;Oe.textContent=z.label,I.textContent=b?[b.roomNumber?`Room ${b.roomNumber}`:null,`${n.get(b.wing)??b.wing}`,b.floor?`level −${b.floor}`:"ground"].filter(Boolean).join(" · "):i.meta.label;let H="";if(!b)H=z.id===rn?`<p>Reception for the ContSys Hospital — a walkable model of ${me(i.meta.label)}. The hospital street runs east; every wing's entrance opens off it. The Postgraduate Medical Centre (lecture theatre) is through the north door. Press M (or ⌖) for the porter.</p>`:z.id===oi?`<p>The Postgraduate Medical Centre: a raked lecture theatre for seminars and video presentations.</p>
               <h3>Presenting</h3>
               <ul><li>Slides advance with ← / → or PageUp / PageDown — presenter clickers work.</li>
               <li>Tap or click the screen: right side next, left side back.</li>
               <li><strong>H</strong> hides the whole interface for a clean recording; <strong>L</strong> dims the house lights.</li>
               <li>Add <code>?start=theatre</code> to the address to begin at the lectern.</li></ul>
               <h3>Your own deck</h3>
               <p>Export slides as PNG/JPG (1920×1080), copy them into <code>slides/</code>, and list them in <code>slides/manifest.json</code> — video clips (.mp4) can be listed too.</p>`:"<p>The hospital street: a racetrack loop of two parallel streets joined by glazed cloisters across the courtyard — take whichever way round is shorter. Wing entrances open off the outside of each street; the courtyard holds the lawn and the Postgraduate Medical Centre.</p>";else{H+=`<p>${me(b.description??"Definition pending.")}</p>`;const Y=[];b.plural&&Y.push(`<strong>Plural:</strong> ${me(b.plural)}`),b.alsoKnownAs.length&&Y.push(`<strong>Also known as:</strong> ${me(b.alsoKnownAs.join("; "))}`),b.deprecated.length&&Y.push(`<strong>Deprecated terms:</strong> ${me(b.deprecated.join("; "))}`),b.termClause&&Y.push(`<strong>Clause:</strong> ${me(b.termClause)}`),b.source&&Y.push(`<span class="small"><strong>Source:</strong> ${me(b.source)}</span>`),Y.length&&(H+=`<p>${Y.join("<br>")}</p>`),b.notes.length&&(H+=`<h3>Notes</h3><ol>${b.notes.map(he=>`<li>${me(he.text)}</li>`).join("")}</ol>`),b.examples.length&&(H+=`<h3>Examples</h3><ol>${b.examples.map(he=>`<li>${me(he.text)}</li>`).join("")}</ol>`);const oe=he=>me(e.get(he)?.label??"?");(b.out.length||b.self.length)&&(H+=`<h3>Outbound associations (doors on the right wall)</h3><ul>${[...b.out.map(he=>`<li>${me(Yr(b.label,he.label,e.get(he.targetId)?.label??"?",he))}</li>`),...b.self.map(he=>`<li>${me(he.label)} → ${me(b.label)} (end wall)</li>`)].join("")}</ul>`),b.in.length&&(H+=`<h3>Inbound associations (doors on the left wall)</h3><ul>${b.in.map(he=>`<li>${me(Yr(e.get(he.sourceId)?.label??"?",he.label,b.label,he))}</li>`).join("")}</ul>`),b.supers.length&&(H+=`<h3>Generalisations (stairs up)</h3><ul>${b.supers.map(he=>`<li>${oe(he)}</li>`).join("")}</ul>`),b.subs.length&&(H+=`<h3>Specialisations (stairs down)</h3><ul>${b.subs.map(he=>`<li>${oe(he)}</li>`).join("")}</ul>`)}et.innerHTML=H,ot=g.controls.isLocked,ot&&g.controls.unlock(),ce.style.display="flex",We=!0}ce.addEventListener("click",b=>{b.target===ce&&y()});let F=null;function Q(){Tn()||We||F?.kind==="lift"&&te(F)}function ie(b){const H=new Set;for(const Y of z.interactables){if(Math.abs(Y.triggerPos.y-b.y)>2)continue;const oe=Math.abs(b.x-Y.triggerPos.x),he=Math.abs(b.z-Y.triggerPos.z);Y.halfX!==void 0?oe<=Y.halfX&&he<=(Y.halfZ??Y.halfX)&&H.add(Y):oe*oe+he*he<=Y.radius*Y.radius&&H.add(Y)}return H}let J=new Set;function De(){if($){F=null,Ri.style.opacity="0";return}const b=performance.now(),H=ie(g.floorPosition);let Y=null;for(const oe of H){if(!oe.auto){Y=oe;continue}if(!J.has(oe)&&!(b-je<n0)){oe.kind==="stair-up"||oe.kind==="stair-down"?Se(oe.targetIds[0],`${oe.label} (portal)`):st(oe);return}}J=H,F=Y,Ri.textContent=Y?Y.prompt??`E — ${Y.label}`:"",Ri.style.opacity=Y?"1":"0"}const xe=new Mu,Pe=new rt;function ke(b,H){const Y=z.boards;if(!Y?.length)return null;g.camera.updateMatrixWorld(),Pe.set(b,H),xe.setFromCamera(Pe,g.camera);for(const oe of Y){oe.mesh.updateWorldMatrix(!0,!1);const he=xe.intersectObject(oe.mesh,!1)[0];if(!(!he?.uv||he.distance>(oe.kind==="screen"?16:4.2)))for(const Ue of oe.cells){const[Xe,_t,yt,an]=Ue.rect;if(he.uv.x>=Xe&&he.uv.x<=yt&&he.uv.y>=_t&&he.uv.y<=an)return{...Ue,kind:oe.kind}}}return null}function ue(b,H){if($||Tn()||We||performance.now()-je<400)return!1;const Y=ke(b,H);if(!Y)return!1;if(Y.kind==="screen")Y.id==="next"?w.next():w.prev(),Ot(w.label);else if(Y.kind==="lift"){const oe=z;oe.liftPos&&g.floorPosition.distanceTo(oe.liftPos)<1.2?pe(oe,Y.id):Ve(Y.id)}else Se(Y.id,`→ ${v.get(Y.id)?.label??Y.label}`);return!0}p.domElement.addEventListener("click",()=>{g.controls.isLocked&&ue(0,0)});let ve=0,Ce=0,Le=0;p.domElement.addEventListener("pointerdown",b=>{ve=b.clientX,Ce=b.clientY,Le=performance.now()}),p.domElement.addEventListener("pointerup",b=>{g.controls.isLocked||Math.hypot(b.clientX-ve,b.clientY-Ce)>8||performance.now()-Le>600||ue(b.clientX/innerWidth*2-1,-(b.clientY/innerHeight)*2+1)}),addEventListener("keydown",b=>{if(We){(b.code==="Escape"||b.code==="KeyR")&&y();return}Tn()||(b.code==="KeyE"&&Q(),b.code==="KeyR"&&_(),b.code==="KeyM"&&ye(),b.code==="KeyB"&&ae(),b.code==="KeyF"&&g.dash(12)>.3&&Ci(),b.code==="KeyH"&&(document.body.classList.toggle("filming")||Ot("Interface restored")),z.id===oi&&((b.code==="ArrowRight"||b.code==="PageDown")&&(b.preventDefault(),w.next(),Ot(w.label)),(b.code==="ArrowLeft"||b.code==="PageUp")&&(b.preventDefault(),w.prev(),Ot(w.label)),b.code==="KeyL"&&(ge=!ge,T.setHouseLights(ge),Ot(ge?"House lights up":"House lights dimmed — L restores"))))});let ge=!0;if(Ri.addEventListener("click",Q),g.enableDragLook(p.domElement),Me){const b=document.getElementById("joy"),H=document.getElementById("joy-knob");let Y=null;const oe=()=>{Y=null,H.style.transform="",g.setTouchMove(0,0)},he=Ue=>{const Xe=b.getBoundingClientRect();let _t=Ue.clientX-(Xe.left+Xe.width/2),yt=Ue.clientY-(Xe.top+Xe.height/2);if(!Number.isFinite(_t)||!Number.isFinite(yt))return;const an=Math.hypot(_t,yt),Fe=44;an>Fe&&(_t*=Fe/an,yt*=Fe/an),H.style.transform=`translate(${_t}px, ${yt}px)`,g.setTouchMove(-yt/Fe,_t/Fe)};b.addEventListener("pointerdown",Ue=>{Ue.preventDefault(),Y=Ue.pointerId,he(Ue);try{b.setPointerCapture(Ue.pointerId)}catch{}}),b.addEventListener("pointermove",Ue=>{Ue.pointerId===Y&&(Ue.preventDefault(),he(Ue))}),b.addEventListener("pointerup",oe),b.addEventListener("pointercancel",oe),document.getElementById("btn-read").addEventListener("click",()=>We?y():_()),document.getElementById("btn-porter").addEventListener("click",()=>{!Tn()&&!We&&ye()}),document.getElementById("btn-dash").addEventListener("click",()=>{!Tn()&&!We&&g.dash(12)>.3&&Ci()}),document.getElementById("btn-back").addEventListener("click",ae)}const Ze=new vu;let N=0;const be={logic:0,render:0},fe=performance.now();let we=12,le=0;p.setAnimationLoop(()=>{const b=performance.now(),H=Math.min(Ze.getDelta(),.05);Tn()||g.update(H),L(H);for(const he of E){const Ue=he.owner.group.visible;he.w.group.visible=Ue,Ue&&he.w.update(H)}const Y=_e(g.floorPosition);if(Y&&Y!==z&&V(Y),De(),g.controls.isLocked&&!$&&!Tn()){const he=ke(0,0);he&&(Ri.textContent=he.kind==="screen"?`Click — ${he.label}`:`Click — ${he.kind==="lift"?"lift to":"go to"} ${he.label}`,Ri.style.opacity="1")}if(N+=H,N>.4&&(N=0,x.update(g.position,a?40:55,a?100:120,a?5:8),D(),performance.now()-fe>12e3&&E.length)){if(le===0&&we>26){le=1;for(let he=E.length-1;he>=0;he-=2)h.remove(E[he].w.group),E.splice(he,1);Ot("Trimmed ward activity to keep things smooth")}else if(le===1&&we>30){le=2;for(const he of E)h.remove(he.w.group);E.length=0,Ot("Paused ward activity for performance")}}const oe=performance.now();p.render(h,g.camera),be.logic=oe-b,be.render=performance.now()-oe,we=we*.96+(be.logic+be.render)*.04}),addEventListener("resize",()=>{g.camera.aspect=innerWidth/innerHeight,g.camera.updateProjectionMatrix(),p.setSize(innerWidth,innerHeight)});function se(){const b={areas:i.classes.length+3,doorOut:i.classes.reduce((Fe,at)=>Fe+at.out.length,0),doorIn:i.classes.reduce((Fe,at)=>Fe+at.in.length,0),doorSelf:i.classes.reduce((Fe,at)=>Fe+at.self.length,0),notices:i.classes.reduce((Fe,at)=>Fe+at.notes.length+at.examples.length,0),stairUpPortals:i.classes.reduce((Fe,at)=>Fe+Math.max(0,at.supers.length-1),0),stairDownPortals:i.classes.reduce((Fe,at)=>Fe+(at.subs.length-(r.homeChildren[at.id]?.length??0)),0),lifts:i.classes.filter(Fe=>Fe.supers.length||Fe.subs.length).length,realStairwells:Object.keys(r.landings).length},H=Fe=>P.filter(at=>at.kind===Fe).length,Y={areas:v.size,doorOut:H("door-out"),doorIn:H("door-in"),doorSelf:H("door-self"),notices:[...v.values()].reduce((Fe,at)=>Fe+(at.notices??0),0),stairUpPortals:H("stair-up"),stairDownPortals:H("stair-down"),lifts:H("lift"),realStairwells:Object.keys(r.landings).length},oe=P.filter(Fe=>(Fe.kind==="door-out"||Fe.kind==="door-in")&&!M(Fe)),he=new Map,Ue=(Fe,at)=>{he.has(Fe)||he.set(Fe,new Set),he.get(Fe).add(at)};Ue(rn,kr),Ue(rn,oi),Ue(oi,rn);for(const Fe of r.wings)for(const at of Fe.rootIds)Ue(kr,at),Ue(at,kr);for(const[Fe,at]of Object.entries(r.homeChildren))for(const zt of at)Ue(Fe,zt),Ue(zt,Fe);for(const Fe of P){for(const at of Fe.targetIds)Ue(Fe.areaId,at);if(Fe.kind==="lift"){const at=e.get(Fe.areaId);for(const zt of Lo(at,e))Ue(Fe.areaId,zt.id);for(const zt of at.subs)Ue(Fe.areaId,zt);Ue(Fe.areaId,rn)}}const Xe=new Set([rn]),_t=[rn];for(;_t.length;)for(const Fe of he.get(_t.pop())??[])Xe.has(Fe)||(Xe.add(Fe),_t.push(Fe));const yt=[...v.keys()].filter(Fe=>!Xe.has(Fe)).map(Fe=>v.get(Fe).label);return{pass:Y.areas===b.areas&&Y.doorOut===b.doorOut&&Y.doorIn===b.doorIn&&Y.doorSelf===b.doorSelf&&Y.notices===b.notices&&Y.stairUpPortals===b.stairUpPortals&&Y.stairDownPortals===b.stairDownPortals&&Y.lifts===b.lifts&&oe.length===0&&yt.length===0,expect:b,built:Y,unpaired:oe.length,unreachable:yt,signs:x.count}}window.__hospital={world:i,layout:r,player:g,areas:v,interactables:P,audit:se,openSearch:ye,perf:()=>({...be,avg:+we.toFixed(1),drawCalls:p.info.render.calls,triangles:p.info.render.triangles}),people:()=>({tier:c,walkers:E.length,demoteStage:le}),tickPeople(b=.1,H=1){for(let Y=0;Y<H;Y++)for(const oe of E)oe.w.update(b)},tickDoors(b=.1,H=1){for(let Y=0;Y<H;Y++)L(b);return z.lift?+z.lift.doors.openness.toFixed(2):null},bench(b=30){const H=performance.now();for(let Y=0;Y<b;Y++)p.render(h,g.camera);return{msPerFrame:+((performance.now()-H)/b).toFixed(2),drawCalls:p.info.render.calls,triangles:p.info.render.triangles}},currentArea:()=>z.label,pick:(b,H)=>ke(b,H),tapPick:(b,H)=>ue(b,H),slides:()=>({label:w.label,total:w.count}),nextSlide:()=>(w.next(),w.label),prevSlide:()=>(w.prev(),w.label),houseLights:b=>T.setHouseLights(b),goto(b){const H=b==="Reception"?d:b==="Hospital Street"?A:b==="Postgraduate Medical Centre"?T:t.get(b)&&v.get(t.get(b).id)||null;return H?(Se(H.id),H.label):`unknown area: ${b}`},walk(b){const H=Math.ceil(Math.abs(b)/.1);for(let oe=0;oe<H;oe++){const he=g.camera.rotation.y,Ue=g.camera.position;Ue.x+=-Math.sin(he)*.1*Math.sign(b),Ue.z+=-Math.cos(he)*.1*Math.sign(b),g.snapGround();const Xe=_e(g.floorPosition);Xe&&Xe!==z&&V(Xe),De()}const Y=g.camera.position;return{x:+Y.x.toFixed(2),y:+(Y.y-1.7).toFixed(2),z:+Y.z.toFixed(2),area:z.label}}},console.info(`[hospital] built ${v.size} areas, ${P.length} interactables, ${x.count} signs, loop ${Math.round(r.street.x1)}m × 2 + ${r.loop.C}m courtyard`)}a0().catch(i=>{console.error(i);const e=document.createElement("p");e.style.cssText="color:#fff;padding:24px;font-family:Arial",e.textContent=String(i),ni.replaceChildren(e)});
