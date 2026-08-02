import{A as Ie,D as P,Da as Pe,Ea as vr,F as x,Fa as nt,G as he,Ga as yr,Ha as br,I as R,Ib as rt,J as A,Jb as at,K as T,Kb as _,L as Ze,Lb as Cr,Ma as Yt,Mb as Ir,N as tr,Na as ve,Nb as kr,O as Wt,Oa as Gt,Ob as Re,P as nr,Pa as wr,Pb as Dr,Qb as Pr,Rb as Rr,Tb as it,Ua as Tr,Ub as ot,V as F,Va as Jt,Vb as Or,W as rr,Z as ke,_ as Vt,_a as Er,ba as ar,c as Ut,ca as ir,d as Ke,ea as De,ga as or,h as H,ha as Xt,ia as sr,j as se,ja as Qe,ka as et,l as ee,la as lr,na as tt,nb as xr,o as $t,oa as pe,p as Bt,pa as ge,q as Zn,qa as cr,r as Qn,ra as fr,rb as Sr,sa as ur,sb as Ar,t as qe,ta as dr,u as Ce,ua as mr,v as er,va as hr,wa as pr,xa as le,y as Ht,ya as gr,yb as Mr}from"./chunk-QABQACZH.js";import{a as j,b as zt,c as qn}from"./chunk-7CGTOI24.js";var Oe=class{_doc;constructor(r){this._doc=r}manager},st=(()=>{class t extends Oe{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,a,i){return e.addEventListener(n,a,i),()=>this.removeEventListener(e,n,a,i)}removeEventListener(e,n,a,i){return e.removeEventListener(n,a,i)}static \u0275fac=function(n){return new(n||t)(A(F))};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),ft=new R(""),Qt=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(o=>{o.manager=this});let a=e.filter(o=>!(o instanceof st));this._plugins=a.slice().reverse();let i=e.find(o=>o instanceof st);i&&this._plugins.push(i)}addEventListener(e,n,a,i){return this._findPluginFor(n).addEventListener(e,n,a,i)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(i=>i.supports(e)),!n)throw new P(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(A(ft),A(ke))};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),Kt="ng-app-id";function Nr(t){for(let r of t)r.remove()}function _r(t,r){let e=r.createElement("style");return e.textContent=t,e}function io(t,r,e,n){let a=t.head?.querySelectorAll(`style[${Kt}="${r}"],link[${Kt}="${r}"]`);if(a)for(let i of a)i.removeAttribute(Kt),i instanceof HTMLLinkElement?n.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&e.set(i.textContent,{usage:0,elements:[i]})}function Zt(t,r){let e=r.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var en=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,a,i={}){this.doc=e,this.appId=n,this.nonce=a,io(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let a of e)this.addUsage(a,this.inline,_r);n?.forEach(a=>this.addUsage(a,this.external,Zt))}removeStyles(e,n){for(let a of e)this.removeUsage(a,this.inline);n?.forEach(a=>this.removeUsage(a,this.external))}addUsage(e,n,a){let i=n.get(e);i?i.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,a(e,this.doc)))})}removeUsage(e,n){let a=n.get(e);a&&(a.usage--,a.usage<=0&&(Nr(a.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Nr(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:a}]of this.inline)a.push(this.addElement(e,_r(n,this.doc)));for(let[n,{elements:a}]of this.external)a.push(this.addElement(e,Zt(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(A(F),A(Xt),A(et,8),A(Qe))};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),qt={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},tn=/%COMP%/g;var Fr="%COMP%",oo=`_nghost-${Fr}`,so=`_ngcontent-${Fr}`,lo=!0,co=new R("",{factory:()=>lo});function fo(t){return so.replace(tn,t)}function uo(t){return oo.replace(tn,t)}function jr(t,r){return r.map(e=>e.replace(tn,t))}var nn=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,a,i,o,s,l=null,c=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=a,this.removeStylesOnCompDestroy=i,this.doc=o,this.ngZone=s,this.nonce=l,this.tracingService=c,this.defaultRenderer=new Ne(e,o,s,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let a=this.getOrCreateRenderer(e,n);return a instanceof ct?a.applyToHost(e):a instanceof _e&&a.applyStyles(),a}getOrCreateRenderer(e,n){let a=this.rendererByCompId,i=a.get(n.id);if(!i){let o=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(n.encapsulation){case tt.Emulated:i=new ct(l,c,n,this.appId,d,o,s,f);break;case tt.ShadowDom:return new lt(l,e,n,o,s,this.nonce,f,c);case tt.ExperimentalIsolatedShadowDom:return new lt(l,e,n,o,s,this.nonce,f);default:i=new _e(l,c,n,d,o,s,f);break}a.set(n.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(A(Qt),A(en),A(Xt),A(co),A(F),A(ke),A(et),A(nt,8))};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),Ne=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,e,n,a){this.eventManager=r,this.doc=e,this.ngZone=n,this.tracingService=a}destroy(){}destroyNode=null;createElement(r,e){return e?this.doc.createElementNS(qt[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(Lr(r)?r.content:r).appendChild(e)}insertBefore(r,e,n){r&&(Lr(r)?r.content:r).insertBefore(e,n)}removeChild(r,e){e.remove()}selectRootElement(r,e){let n=typeof r=="string"?this.doc.querySelector(r):r;if(!n)throw new P(-5104,!1);return e||(n.textContent=""),n}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,n,a){if(a){e=a+":"+e;let i=qt[a];i?r.setAttributeNS(i,e,n):r.setAttribute(e,n)}else r.setAttribute(e,n)}removeAttribute(r,e,n){if(n){let a=qt[n];a?r.removeAttributeNS(a,e):r.removeAttribute(`${n}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,n,a){a&(Pe.DashCase|Pe.Important)?r.style.setProperty(e,n,a&Pe.Important?"important":""):r.style[e]=n}removeStyle(r,e,n){n&Pe.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,n){r!=null&&(r[e]=n)}setValue(r,e){r.nodeValue=e}listen(r,e,n,a){if(typeof r=="string"&&(r=Re().getGlobalEventTarget(this.doc,r),!r))throw new P(5102,!1);let i=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(r,e,i)),this.eventManager.addEventListener(r,e,i,a)}decoratePreventDefault(r){return e=>{if(e==="__ngUnwrap__")return r;r(e)===!1&&e.preventDefault()}}};function Lr(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var lt=class extends Ne{hostEl;sharedStylesHost;shadowRoot;constructor(r,e,n,a,i,o,s,l){super(r,a,i,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=n.styles;c=jr(n.id,c);for(let f of c){let p=document.createElement("style");o&&p.setAttribute("nonce",o),p.textContent=f,this.shadowRoot.appendChild(p)}let d=n.getExternalStyles?.();if(d)for(let f of d){let p=Zt(f,a);o&&p.setAttribute("nonce",o),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,n){return super.insertBefore(this.nodeOrShadowRoot(r),e,n)}removeChild(r,e){return super.removeChild(null,e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},_e=class extends Ne{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,e,n,a,i,o,s,l){super(r,i,o,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=a;let c=n.styles;this.styles=l?jr(l,c):c,this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&vr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ct=class extends _e{contentAttr;hostAttr;constructor(r,e,n,a,i,o,s,l){let c=a+"-"+n.id;super(r,e,n,i,o,s,l,c),this.contentAttr=fo(c),this.hostAttr=uo(c)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){let n=super.createElement(r,e);return super.setAttribute(n,this.contentAttr,""),n}};var ut=class t extends Pr{supportsDOMEvents=!0;static makeCurrent(){Dr(new t)}onAndCancel(r,e,n,a){return r.addEventListener(e,n,a),()=>{r.removeEventListener(e,n,a)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.remove()}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e==="window"?window:e==="document"?r:e==="body"?r.body:null}getBaseHref(r){let e=ho();return e==null?null:po(e)}resetBaseElement(){Fe=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return it(document.cookie,r)}},Fe=null;function ho(){return Fe=Fe||document.head.querySelector("base"),Fe?Fe.getAttribute("href"):null}function po(t){return new URL(t,document.baseURI).pathname}var go=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),zr=["alt","control","meta","shift"],vo={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},yo={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Ur=(()=>{class t extends Oe{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,a,i){let o=t.parseEventName(n),s=t.eventCallback(o.fullKey,a,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Re().onAndCancel(e,o.domEventName,s,i))}static parseEventName(e){let n=e.toLowerCase().split("."),a=n.shift();if(n.length===0||!(a==="keydown"||a==="keyup"))return null;let i=t._normalizeKey(n.pop()),o="",s=n.indexOf("code");if(s>-1&&(n.splice(s,1),o="code."),zr.forEach(c=>{let d=n.indexOf(c);d>-1&&(n.splice(d,1),o+=c+".")}),o+=i,n.length!=0||i.length===0)return null;let l={};return l.domEventName=a,l.fullKey=o,l}static matchEventFullKeyCode(e,n){let a=vo[e.key]||e.key,i="";return n.indexOf("code.")>-1&&(a=e.code,i="code."),a==null||!a?!1:(a=a.toLowerCase(),a===" "?a="space":a==="."&&(a="dot"),zr.forEach(o=>{if(o!==a){let s=yo[o];s(e)&&(i+=o+".")}}),i+=a,i===n)}static eventCallback(e,n,a){return i=>{t.matchEventFullKeyCode(i,e)&&a.runGuarded(()=>n(i))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(A(F))};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})();async function bo(t,r,e){let n=j({rootComponent:t},wo(r,e));return kr(n)}function wo(t,r){return{platformRef:r?.platformRef,appProviders:[...Ao,...t?.providers??[]],platformProviders:So}}function To(){ut.makeCurrent()}function Eo(){return new Vt}function xo(){return or(document),document}var So=[{provide:Qe,useValue:Or},{provide:sr,useValue:To,multi:!0},{provide:F,useFactory:xo}];var Ao=[{provide:tr,useValue:"root"},{provide:Vt,useFactory:Eo},{provide:ft,useClass:st,multi:!0},{provide:ft,useClass:Ur,multi:!0},nn,en,Qt,{provide:br,useExisting:nn},{provide:ot,useClass:go},[]];var U=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r=="string"?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let a=e.slice(0,n),i=e.slice(n+1).trim();this.addHeaderEntry(a,i)}})}:typeof Headers<"u"&&r instanceof Headers?(this.headers=new Map,r.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let e=this.headers.get(r.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,e){return this.clone({name:r,value:e,op:"a"})}set(r,e){return this.clone({name:r,value:e,op:"s"})}delete(r,e){return this.clone({name:r,value:e,op:"d"})}maybeSetNormalizedName(r,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,r)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init(),Array.from(r.headers.keys()).forEach(e=>{this.headers.set(e,r.headers.get(e)),this.normalizedNames.set(e,r.normalizedNames.get(e))})}clone(r){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([r]),e}applyUpdate(r){let e=r.name.toLowerCase();switch(r.op){case"a":case"s":let n=r.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(r.name,e);let a=(r.op==="a"?this.headers.get(e):void 0)||[];a.push(...n),this.headers.set(e,a);break;case"d":let i=r.value;if(!i)this.headers.delete(e),this.normalizedNames.delete(e);else{let o=this.headers.get(e);if(!o)return;o=o.filter(s=>i.indexOf(s)===-1),o.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,o)}break}}addHeaderEntry(r,e){let n=r.toLowerCase();this.maybeSetNormalizedName(r,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(r,e){let n=(Array.isArray(e)?e:[e]).map(i=>i.toString()),a=r.toLowerCase();this.headers.set(a,n),this.maybeSetNormalizedName(r,a)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>r(this.normalizedNames.get(e),this.headers.get(e)))}};var ht=class{map=new Map;set(r,e){return this.map.set(r,e),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}},pt=class{encodeKey(r){return $r(r)}encodeValue(r){return $r(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function Mo(t,r){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(a=>{let i=a.indexOf("="),[o,s]=i==-1?[r.decodeKey(a),""]:[r.decodeKey(a.slice(0,i)),r.decodeValue(a.slice(i+1))],l=e.get(o)||[];l.push(s),e.set(o,l)}),e}var Co=/%(\d[a-f0-9])/gi,Io={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function $r(t){return encodeURIComponent(t).replace(Co,(r,e)=>Io[e]??r)}function dt(t){return`${t}`}var Y=class t{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new pt,r.fromString){if(r.fromObject)throw new P(2805,!1);this.map=Mo(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(e=>{let n=r.fromObject[e],a=Array.isArray(n)?n.map(dt):[dt(n)];this.map.set(e,a)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let e=this.map.get(r);return e?e[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,e){return this.clone({param:r,value:e,op:"a"})}appendAll(r){let e=[];return Object.keys(r).forEach(n=>{let a=r[n];Array.isArray(a)?a.forEach(i=>{e.push({param:n,value:i,op:"a"})}):e.push({param:n,value:a,op:"a"})}),this.clone(e)}set(r,e){return this.clone({param:r,value:e,op:"s"})}delete(r,e){return this.clone({param:r,value:e,op:"d"})}toString(){return this.init(),this.keys().map(r=>{let e=this.encoder.encodeKey(r);return this.map.get(r).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(r=>r!=="").join("&")}clone(r){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(r),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(r=>this.map.set(r,this.cloneFrom.map.get(r))),this.updates.forEach(r=>{switch(r.op){case"a":case"s":let e=(r.op==="a"?this.map.get(r.param):void 0)||[];e.push(dt(r.value)),this.map.set(r.param,e);break;case"d":if(r.value!==void 0){let n=this.map.get(r.param)||[],a=n.indexOf(dt(r.value));a!==-1&&n.splice(a,1),n.length>0?this.map.set(r.param,n):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null)}};function ko(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Br(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Hr(t){return typeof Blob<"u"&&t instanceof Blob}function Wr(t){return typeof FormData<"u"&&t instanceof FormData}function Do(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var je="Content-Type",gt="Accept",Xr="text/plain",Yr="application/json",Gr=`${Yr}, ${Xr}, */*`,ye=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(r,e,n,a){this.url=e,this.method=r.toUpperCase();let i;if(ko(this.method)||a?(this.body=n!==void 0?n:null,i=a):i=n,i){if(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,this.keepalive=!!i.keepalive,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),i.priority&&(this.priority=i.priority),i.cache&&(this.cache=i.cache),i.credentials&&(this.credentials=i.credentials),typeof i.timeout=="number"){if(i.timeout<1||!Number.isInteger(i.timeout))throw new P(2822,"");this.timeout=i.timeout}i.mode&&(this.mode=i.mode),i.redirect&&(this.redirect=i.redirect),i.integrity&&(this.integrity=i.integrity),i.referrer!==void 0&&(this.referrer=i.referrer),i.referrerPolicy&&(this.referrerPolicy=i.referrerPolicy),this.transferCache=i.transferCache}if(this.headers??=new U,this.context??=new ht,!this.params)this.params=new Y,this.urlWithParams=e;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Br(this.body)||Hr(this.body)||Wr(this.body)||Do(this.body)?this.body:this.body instanceof Y?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Wr(this.body)?null:Hr(this.body)?this.body.type||null:Br(this.body)?null:typeof this.body=="string"?Xr:this.body instanceof Y?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Yr:null}clone(r={}){let e=r.method||this.method,n=r.url||this.url,a=r.responseType||this.responseType,i=r.keepalive??this.keepalive,o=r.priority||this.priority,s=r.cache||this.cache,l=r.mode||this.mode,c=r.redirect||this.redirect,d=r.credentials||this.credentials,f=r.referrer??this.referrer,p=r.integrity||this.integrity,g=r.referrerPolicy||this.referrerPolicy,S=r.transferCache??this.transferCache,b=r.timeout??this.timeout,h=r.body!==void 0?r.body:this.body,y=r.withCredentials??this.withCredentials,w=r.reportProgress??this.reportProgress,M=r.headers||this.headers,E=r.params||this.params,k=r.context??this.context;return r.setHeaders!==void 0&&(M=Object.keys(r.setHeaders).reduce((I,N)=>I.set(N,r.setHeaders[N]),M)),r.setParams&&(E=Object.keys(r.setParams).reduce((I,N)=>I.set(N,r.setParams[N]),E)),new t(e,n,h,{params:E,headers:M,context:k,reportProgress:w,responseType:a,withCredentials:y,transferCache:S,keepalive:i,cache:s,priority:o,timeout:b,mode:l,redirect:c,credentials:d,referrer:f,integrity:p,referrerPolicy:g})}},G=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(G||{}),be=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(r,e=200,n="OK"){this.headers=r.headers||new U,this.status=r.status!==void 0?r.status:e,this.statusText=r.statusText||n,this.url=r.url||null,this.redirected=r.redirected,this.responseType=r.responseType,this.ok=this.status>=200&&this.status<300}},ze=class t extends be{constructor(r={}){super(r)}type=G.ResponseHeader;clone(r={}){return new t({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}},ce=class t extends be{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=G.Response;clone(r={}){return new t({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0,redirected:r.redirected??this.redirected,responseType:r.responseType??this.responseType})}},W=class extends be{name="HttpErrorResponse";message;error;ok=!1;constructor(r){super(r,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||"(unknown url)"}`:this.message=`Http failure response for ${r.url||"(unknown url)"}: ${r.status} ${r.statusText}`,this.error=r.error||null}},Jr=200,Po=204;var Ro=/^\)\]\}',?\n/,Kr=new R(""),mt=(()=>{class t{fetchImpl=T(an,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=T(ke);destroyRef=T(rr);handle(e){return new Ut(n=>{let a=new AbortController;this.doRequest(e,a.signal,n).then(on,o=>n.error(new W({error:o})));let i;return e.timeout&&(i=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{a.signal.aborted||a.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{i!==void 0&&clearTimeout(i),a.abort()}})}async doRequest(e,n,a){let i=this.createRequestInit(e),o;try{let b=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,j({signal:n},i)));Oo(b),a.next({type:G.Sent}),o=await b}catch(b){a.error(new W({error:b,status:b.status??0,statusText:b.statusText,url:e.urlWithParams,headers:b.headers}));return}let s=new U(o.headers),l=o.statusText,c=o.url||e.urlWithParams,d=o.status,f=null;if(e.reportProgress&&a.next(new ze({headers:s,status:d,statusText:l,url:c})),o.body){let b=o.headers.get("content-length"),h=[],y=o.body.getReader(),w=0,M,E,k=typeof Zone<"u"&&Zone.current,I=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await y.cancel(),I=!0;break}let{done:L,value:X}=await y.read();if(L)break;if(h.push(X),w+=X.length,e.reportProgress){E=e.responseType==="text"?(E??"")+(M??=new TextDecoder).decode(X,{stream:!0}):void 0;let D=()=>a.next({type:G.DownloadProgress,total:b?+b:void 0,loaded:w,partialText:E});k?k.run(D):D()}}}),I){a.complete();return}let N=this.concatChunks(h,w);try{let L=o.headers.get(je)??"";f=this.parseBody(e,N,L,d)}catch(L){a.error(new W({error:L,headers:new U(o.headers),status:o.status,statusText:o.statusText,url:o.url||e.urlWithParams}));return}}d===0&&(d=f?Jr:0);let p=d>=200&&d<300,g=o.redirected,S=o.type;p?(a.next(new ce({body:f,headers:s,status:d,statusText:l,url:c,redirected:g,responseType:S})),a.complete()):a.error(new W({error:f,headers:s,status:d,statusText:l,url:c,redirected:g,responseType:S}))}parseBody(e,n,a,i){switch(e.responseType){case"json":let o=new TextDecoder().decode(n).replace(Ro,"");if(o==="")return null;try{return JSON.parse(o)}catch(s){if(i<200||i>=300)return o;throw s}case"text":return new TextDecoder().decode(n);case"blob":return new Blob([n],{type:a});case"arraybuffer":return n.buffer}}createRequestInit(e){let n={},a;if(a=e.credentials,e.withCredentials&&(a="include"),e.headers.forEach((i,o)=>n[i]=o.join(",")),e.headers.has(gt)||(n[gt]=Gr),!e.headers.has(je)){let i=e.detectContentTypeHeader();i!==null&&(n[je]=i)}return{body:e.serializeBody(),method:e.method,headers:n,credentials:a,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,n){let a=new Uint8Array(n),i=0;for(let o of e)a.set(o,i),i+=o.length;return a}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),an=class{};function on(){}function Oo(t){t.then(on,on)}var No=/^\)\]\}',?\n/;var sn=(()=>{class t{xhrFactory;tracingService=T(nt,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new P(-2800,!1);let n=this.xhrFactory;return H(null).pipe(Ie(()=>new Ut(i=>{let o=n.build();if(o.open(e.method,e.urlWithParams),e.withCredentials&&(o.withCredentials=!0),e.headers.forEach((h,y)=>o.setRequestHeader(h,y.join(","))),e.headers.has(gt)||o.setRequestHeader(gt,Gr),!e.headers.has(je)){let h=e.detectContentTypeHeader();h!==null&&o.setRequestHeader(je,h)}if(e.timeout&&(o.timeout=e.timeout),e.responseType){let h=e.responseType.toLowerCase();o.responseType=h!=="json"?h:"text"}let s=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let h=o.statusText||"OK",y=new U(o.getAllResponseHeaders()),w=o.responseURL||e.url;return l=new ze({headers:y,status:o.status,statusText:h,url:w}),l},d=this.maybePropagateTrace(()=>{let{headers:h,status:y,statusText:w,url:M}=c(),E=null;y!==Po&&(E=typeof o.response>"u"?o.responseText:o.response),y===0&&(y=E?Jr:0);let k=y>=200&&y<300;if(e.responseType==="json"&&typeof E=="string"){let I=E;E=E.replace(No,"");try{E=E!==""?JSON.parse(E):null}catch(N){E=I,k&&(k=!1,E={error:N,text:E})}}k?(i.next(new ce({body:E,headers:h,status:y,statusText:w,url:M||void 0})),i.complete()):i.error(new W({error:E,headers:h,status:y,statusText:w,url:M||void 0}))}),f=this.maybePropagateTrace(h=>{let{url:y}=c(),w=new W({error:h,status:o.status||0,statusText:o.statusText||"Unknown Error",url:y||void 0});i.error(w)}),p=f;e.timeout&&(p=this.maybePropagateTrace(h=>{let{url:y}=c(),w=new W({error:new DOMException("Request timed out","TimeoutError"),status:o.status||0,statusText:o.statusText||"Request timeout",url:y||void 0});i.error(w)}));let g=!1,S=this.maybePropagateTrace(h=>{g||(i.next(c()),g=!0);let y={type:G.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(y.total=h.total),e.responseType==="text"&&o.responseText&&(y.partialText=o.responseText),i.next(y)}),b=this.maybePropagateTrace(h=>{let y={type:G.UploadProgress,loaded:h.loaded};h.lengthComputable&&(y.total=h.total),i.next(y)});return o.addEventListener("load",d),o.addEventListener("error",f),o.addEventListener("timeout",p),o.addEventListener("abort",f),e.reportProgress&&(o.addEventListener("progress",S),s!==null&&o.upload&&o.upload.addEventListener("progress",b)),o.send(s),i.next({type:G.Sent}),()=>{o.removeEventListener("error",f),o.removeEventListener("abort",f),o.removeEventListener("load",d),o.removeEventListener("timeout",p),e.reportProgress&&(o.removeEventListener("progress",S),s!==null&&o.upload&&o.upload.removeEventListener("progress",b)),o.readyState!==o.DONE&&o.abort()}})))}static \u0275fac=function(n){return new(n||t)(A(ot))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),_o=new R("",{factory:()=>!0}),Lo="XSRF-TOKEN",Fo=new R("",{factory:()=>Lo}),jo="X-XSRF-TOKEN",zo=new R("",{factory:()=>jo}),Uo=(()=>{class t{cookieName=T(Fo);doc=T(F);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=it(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),qr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:function(n){let a=null;return n?a=new(n||t):a=A(Uo),a},providedIn:"root"})}return t})();function Zr(t,r){if(!T(_o)||t.method==="GET"||t.method==="HEAD")return r(t);try{let a=T(Rr).href,{origin:i}=new URL(a),{origin:o}=new URL(t.url,i);if(i!==o)return r(t)}catch{return r(t)}let e=T(qr).getToken(),n=T(zo);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),r(t)}function $o(t,r){return r(t)}function Bo(t,r,e){return(n,a)=>nr(e,()=>r(n,i=>t(i,a)))}var Qr=new R("",{factory:()=>[Zr]}),ln=new R(""),ea=new R("",{factory:()=>!0});var yt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:function(n){let a=null;return n?a=new(n||t):a=A(sn),a},providedIn:"root"})}return t})();var vt=(()=>{class t{backend;injector;chain=null;pendingTasks=T(ar);contributeToStability=T(ea);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Qr),...this.injector.get(ln,[])]));this.chain=n.reduceRight((a,i)=>Bo(a,i,this.injector),$o)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,a=>this.backend.handle(a)).pipe(er(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(A(yt),A(Wt))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),cn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:function(n){let a=null;return n?a=new(n||t):a=A(vt),a},providedIn:"root"})}return t})();function rn(t,r){return{body:r,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var ta=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,a={}){let i;if(e instanceof ye)i=e;else{let l;a.headers instanceof U?l=a.headers:l=new U(a.headers);let c;a.params&&(a.params instanceof Y?c=a.params:c=new Y({fromObject:a.params})),i=new ye(e,n,a.body!==void 0?a.body:null,{headers:l,context:a.context,params:c,reportProgress:a.reportProgress,responseType:a.responseType||"json",withCredentials:a.withCredentials,transferCache:a.transferCache,keepalive:a.keepalive,priority:a.priority,cache:a.cache,mode:a.mode,redirect:a.redirect,credentials:a.credentials,referrer:a.referrer,referrerPolicy:a.referrerPolicy,integrity:a.integrity,timeout:a.timeout})}let o=H(i).pipe(qe(l=>this.handler.handle(l)));if(e instanceof ye||a.observe==="events")return o;let s=o.pipe(Qn(l=>l instanceof ce));switch(a.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return s.pipe(ee(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new P(2806,!1);return l.body}));case"blob":return s.pipe(ee(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new P(2807,!1);return l.body}));case"text":return s.pipe(ee(l=>{if(l.body!==null&&typeof l.body!="string")throw new P(2808,!1);return l.body}));default:return s.pipe(ee(l=>l.body))}case"response":return s;default:throw new P(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Y().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,a={}){return this.request("PATCH",e,rn(a,n))}post(e,n,a={}){return this.request("POST",e,rn(a,n))}put(e,n,a={}){return this.request("PUT",e,rn(a,n))}static \u0275fac=function(n){return new(n||t)(A(cn))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var fn=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})(fn||{});function Ho(t,r){return{\u0275kind:t,\u0275providers:r}}function Wo(...t){let r=[ta,vt,{provide:cn,useExisting:vt},{provide:yt,useFactory:()=>T(Kr,{optional:!0})??T(sn)},{provide:Qr,useValue:Zr,multi:!0}];for(let e of t)r.push(...e.\u0275providers);return Ze(r)}function Vo(){return Ho(fn.Fetch,[mt,{provide:Kr,useExisting:mt},{provide:yt,useExisting:mt}])}var Xo=new R(""),Yo="b",Go="h",Jo="s",Ko="st",qo="u",Zo="rt",un=new R(""),Qo=["GET","HEAD"];function oa(t,r){let o=r,{isCacheActive:e}=o,n=qn(o,["isCacheActive"]),{transferCache:a,method:i}=t;return!(!e||a===!1||rs(t)||i==="POST"&&!n.includePostRequests&&!a||i!=="POST"&&!Qo.includes(i)||!n.includeRequestsWithAuthHeaders&&ns(t)||is(t.headers)||os(t.cache)||n.filter?.(t)===!1)}function es(t,r,e,n,a,i=!1){if(!i&&!oa(t,r))return null;if(n)throw new P(2803,!1);if(!a){let b=t.url;a=sa(t,b)}let o=e.get(a,null);if(!o)return null;let{[Yo]:s,[Zo]:l,[Go]:c,[Jo]:d,[Ko]:f,[qo]:p}=o,g=s;switch(l){case"arraybuffer":g=ra(s);break;case"blob":g=new Blob([ra(s)]);break}let S=new U(c);return new ce({body:g,headers:S,status:d,statusText:f,url:p})}function ts(t,r){let e=T(un);if(!oa(t,e))return r(t);let n=T(lr),a=T(Xo,{optional:!0}),i=t.url,o=sa(t,i),s=es(t,e,n,null,o,!0);return s?H(s):r(t)}function ns(t){let r=t.headers;return r.has("authorization")||r.has("proxy-authorization")||r.has("cookie")}function rs(t){let{withCredentials:r,credentials:e}=t;return r||e==="include"||e==="same-origin"}var as=new Set(["no-store","private","no-cache"]);function is(t){let r=t.get("cache-control");return r?r.split(",").some(e=>{let n=e.split("=",1)[0].trim().toLowerCase();return as.has(n)}):!1}function os(t){return t==="no-cache"||t==="no-store"}function na(t){let r=new URLSearchParams(t instanceof URLSearchParams?t:t.toString());return r.sort(),r.toString()}function sa(t,r){let{params:e,method:n,responseType:a}=t,i=na(e),o=t.serializeBody();o instanceof URLSearchParams?o=na(o):typeof o!="string"&&(o="");let s=[n,a,r,o,i].join("|"),l=ls(s);return l}function ra(t){let r=atob(t);return Uint8Array.from(r,n=>n.charCodeAt(0)).buffer}function la(t){return[{provide:un,useFactory:()=>(yr("NgHttpTransferCache"),j({isCacheActive:!0},t))},{provide:ln,useValue:ts,multi:!0},{provide:Tr,multi:!0,useFactory:()=>{let r=T(Jt),e=T(un);return()=>{r.whenStable().then(()=>{e.isCacheActive=!1})}}}]}var ss=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),aa;function ls(t){aa??=new TextEncoder;let r=aa.encode(t),e=1779033703,n=3144134277,a=1013904242,i=2773480762,o=1359893119,s=2600822924,l=528734635,c=1541459225,d=r.length*8,f=(r.length+8>>6)+1<<6,p=new Uint8Array(f);p.set(r),p[r.length]=128;let g=new DataView(p.buffer),S=d>>>0,b=d/4294967296>>>0;g.setUint32(f-8,b,!1),g.setUint32(f-4,S,!1);let h=new Uint32Array(64);for(let y=0;y<f;y+=64){for(let D=0;D<16;D++)h[D]=g.getUint32(y+D*4,!1);for(let D=16;D<64;D++){let oe=h[D-15],Ft=((oe>>>7|oe<<25)^(oe>>>18|oe<<14)^oe>>>3)>>>0,Q=h[D-2],jt=((Q>>>17|Q<<15)^(Q>>>19|Q<<13)^Q>>>10)>>>0;h[D]=h[D-16]+Ft+h[D-7]+jt>>>0}let w=e,M=n,E=a,k=i,I=o,N=s,L=l,X=c;for(let D=0;D<64;D++){let oe=((I>>>6|I<<26)^(I>>>11|I<<21)^(I>>>25|I<<7))>>>0,Ft=(I&N^~I&L)>>>0,Q=X+oe+Ft+ss[D]+h[D]>>>0,jt=((w>>>2|w<<30)^(w>>>13|w<<19)^(w>>>22|w<<10))>>>0,ro=(w&M^w&E^M&E)>>>0,ao=jt+ro>>>0;X=L,L=N,N=I,I=k+Q>>>0,k=E,E=M,M=w,w=Q+ao>>>0}e=e+w>>>0,n=n+M>>>0,a=a+E>>>0,i=i+k>>>0,o=o+I>>>0,s=s+N>>>0,l=l+L>>>0,c=c+X>>>0}return[e,n,a,i,o,s,l,c].map(y=>y.toString(16).padStart(8,"0")).join("")}var Hd=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(A(F))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var mn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:function(n){let a=null;return n?a=new(n||t):a=A(cs),a},providedIn:"root"})}return t})(),cs=(()=>{class t extends mn{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case le.NONE:return n;case le.HTML:return ge(n,"HTML")?pe(n):pr(this._doc,String(n)).toString();case le.STYLE:return ge(n,"Style")?pe(n):n;case le.SCRIPT:if(ge(n,"Script"))return pe(n);throw new P(5200,!1);case le.URL:return ge(n,"URL")?pe(n):hr(String(n));case le.RESOURCE_URL:if(ge(n,"ResourceURL"))return pe(n);throw new P(5201,!1);default:throw new P(5202,!1)}}bypassSecurityTrustHtml(e){return cr(e)}bypassSecurityTrustStyle(e){return fr(e)}bypassSecurityTrustScript(e){return ur(e)}bypassSecurityTrustUrl(e){return dr(e)}bypassSecurityTrustResourceUrl(e){return mr(e)}static \u0275fac=function(n){return new(n||t)(A(F))};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),dn=(function(t){return t[t.NoHttpTransferCache=0]="NoHttpTransferCache",t[t.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",t[t.I18nSupport=2]="I18nSupport",t[t.EventReplay=3]="EventReplay",t[t.IncrementalHydration=4]="IncrementalHydration",t})(dn||{});function Wd(...t){let r=[],e=new Set;for(let{\u0275providers:a,\u0275kind:i}of t)e.add(i),a.length&&r.push(a);let n=e.has(dn.HttpTransferCacheOptions);return Ze([[],[],Cr(),e.has(dn.NoHttpTransferCache)||n?[]:la({}),r])}var Be=class{},fs=(()=>{class t{handle(e){return e.key}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),we=class{},us=(()=>{class t extends we{compile(e,n){return e}compileTranslations(e,n){return e}static \u0275fac=(()=>{let e;return function(a){return(e||(e=De(t)))(a||t)}})();static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),Te=class{},ds=(()=>{class t extends Te{getTranslation(e){return H({})}static \u0275fac=(()=>{let e;return function(a){return(e||(e=De(t)))(a||t)}})();static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})();function bt(t,r){if(t===r)return!0;if(t===null||r===null)return!1;if(t!==t&&r!==r)return!0;let e=typeof t,n=typeof r,a;if(e==n&&e=="object")if(Array.isArray(t)){if(!Array.isArray(r))return!1;if((a=t.length)==r.length){for(let i=0;i<a;i++)if(!bt(t[i],r[i]))return!1;return!0}}else{if(Array.isArray(r))return!1;if(J(t)&&J(r)){let i=Object.create(null);for(let o in t){if(!bt(t[o],r[o]))return!1;i[o]=!0}for(let o in r)if(!(o in i)&&typeof r[o]<"u")return!1;return!0}}return!1}function te(t){return typeof t<"u"&&t!==null}function ca(t){return t!==void 0}function J(t){return $e(t)&&!fe(t)&&t!==null}function $e(t){return typeof t=="object"&&t!==null}function fe(t){return Array.isArray(t)}function wt(t){return typeof t=="string"}function ms(t){return typeof t=="function"}function Tt(t){if(fe(t))return t.map(r=>Tt(r));if(J(t)){let r={};return Object.keys(t).forEach(e=>{r[e]=Tt(t[e])}),r}else return t}function vn(t,r){if(!$e(t))return Tt(r);let e=Tt(t);return $e(e)&&$e(r)&&Object.keys(r).forEach(n=>{J(r[n])?n in t?e[n]=vn(t[n],r[n]):Object.assign(e,{[n]:r[n]}):Object.assign(e,{[n]:r[n]})}),e}function ua(t,r){let e=r.split(".");r="";do{r+=e.shift();let n=!e.length;if(te(t)){if(J(t)&&ca(t[r])&&(J(t[r])||fe(t[r])||n)){t=t[r],r="";continue}if(fe(t)){let a=parseInt(r,10);if(ca(t[a])&&(J(t[a])||fe(t[a])||n)){t=t[a],r="";continue}}}if(n){t=void 0;continue}r+="."}while(e.length);return t}function hs(t,r,e){return vn(t,ps(r,e))}function ps(t,r){return t.split(".").reduceRight((e,n)=>({[n]:e}),r)}var Ee=class{},gs=(()=>{class t extends Ee{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,n){if(wt(e))return this.interpolateString(e,n);if(ms(e))return this.interpolateFunction(e,n)}interpolateFunction(e,n){return e(n)}interpolateString(e,n){return n?e.replace(this.templateMatcher,(a,i)=>{let o=this.getInterpolationReplacement(n,i);return o!==void 0?o:a}):e}getInterpolationReplacement(e,n){return this.formatValue(ua(e,n))}formatValue(e){if(wt(e))return e;if(typeof e=="number"||typeof e=="boolean")return e.toString();if(e===null)return"null";if(fe(e))return e.join(", ");if($e(e))return typeof e.toString=="function"&&e.toString!==Object.prototype.toString?e.toString():JSON.stringify(e)}static \u0275fac=(()=>{let e;return function(a){return(e||(e=De(t)))(a||t)}})();static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),hn=(()=>{class t{_onTranslationChange=new Ke;_onLangChange=new Ke;_onFallbackLangChange=new Ke;fallbackLang=null;currentLang;translations={};languages=[];getTranslations(e){return this.translations[e]}setTranslations(e,n,a){this.translations[e]=a&&this.hasTranslationFor(e)?vn(this.translations[e],n):n,this.addLanguages([e]),this._onTranslationChange.next({lang:e,translations:this.getTranslations(e)})}getLanguages(){return this.languages}getCurrentLang(){return this.currentLang}getFallbackLang(){return this.fallbackLang}setFallbackLang(e,n=!0){this.fallbackLang=e,n&&this._onFallbackLangChange.next({lang:e,translations:this.translations[e]})}setCurrentLang(e,n=!0){this.currentLang=e,n&&this._onLangChange.next({lang:e,translations:this.translations[e]})}get onTranslationChange(){return this._onTranslationChange.asObservable()}get onLangChange(){return this._onLangChange.asObservable()}get onFallbackLangChange(){return this._onFallbackLangChange.asObservable()}addLanguages(e){this.languages=Array.from(new Set([...this.languages,...e]))}hasTranslationFor(e){return typeof this.translations[e]<"u"}deleteTranslations(e){delete this.translations[e]}getTranslation(e){let n=this.getValue(this.currentLang,e);return n===void 0&&this.fallbackLang!=null&&this.fallbackLang!==this.currentLang&&(n=this.getValue(this.fallbackLang,e)),n}getValue(e,n){return ua(this.getTranslations(e),n)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})(),pn=new R("TRANSLATE_CONFIG"),Ue=t=>se(t)?t:H(t);var gn=(()=>{class t{loadingTranslations;pending=!1;_translationRequests={};lastUseLanguage=null;currentLoader=T(Te);compiler=T(we);parser=T(Ee);missingTranslationHandler=T(Be);store=T(hn);extend=!1;get onTranslationChange(){return this.store.onTranslationChange}get onLangChange(){return this.store.onLangChange}get onFallbackLangChange(){return this.store.onFallbackLangChange}get onDefaultLangChange(){return this.store.onFallbackLangChange}constructor(){let e=j({extend:!1,fallbackLang:null},T(pn,{optional:!0}));e.lang&&this.use(e.lang),e.fallbackLang&&this.setFallbackLang(e.fallbackLang),e.extend&&(this.extend=!0)}setFallbackLang(e){this.getFallbackLang()||this.store.setFallbackLang(e,!1);let n=this.loadOrExtendLanguage(e);return se(n)?(n.pipe(Ce(1)).subscribe({next:()=>{this.store.setFallbackLang(e)},error:()=>{}}),n):(this.store.setFallbackLang(e),H(this.store.getTranslations(e)))}use(e){this.lastUseLanguage=e,this.getCurrentLang()||this.store.setCurrentLang(e,!1);let n=this.loadOrExtendLanguage(e);return se(n)?(n.pipe(Ce(1)).subscribe({next:()=>{this.changeLang(e)},error:()=>{}}),n):(this.changeLang(e),H(this.store.getTranslations(e)))}loadOrExtendLanguage(e){if(!this.store.hasTranslationFor(e)||this.extend)return this._translationRequests[e]=this._translationRequests[e]||this.loadAndCompileTranslations(e),this._translationRequests[e]}changeLang(e){e===this.lastUseLanguage&&this.store.setCurrentLang(e)}getCurrentLang(){return this.store.getCurrentLang()}loadAndCompileTranslations(e){this.pending=!0;let n=this.currentLoader.getTranslation(e).pipe(Ht(1),Ce(1));return this.loadingTranslations=n.pipe(ee(a=>this.compiler.compileTranslations(a,e)),Ht(1),Ce(1)),this.loadingTranslations.subscribe({next:a=>{this.store.setTranslations(e,a,this.extend),this.pending=!1},error:a=>{this.pending=!1}}),n}setTranslation(e,n,a=!1){let i=this.compiler.compileTranslations(n,e);this.store.setTranslations(e,i,a||this.extend)}getLangs(){return this.store.getLanguages()}addLangs(e){this.store.addLanguages(e)}getParsedResultForKey(e,n){let a=this.getTextToInterpolate(e);if(te(a))return this.runInterpolation(a,n);let i=this.missingTranslationHandler.handle(j({key:e,translateService:this},n!==void 0&&{interpolateParams:n}));return i!==void 0?i:e}getFallbackLang(){return this.store.getFallbackLang()}getTextToInterpolate(e){return this.store.getTranslation(e)}runInterpolation(e,n){if(te(e))return fe(e)?this.runInterpolationOnArray(e,n):J(e)?this.runInterpolationOnDict(e,n):this.parser.interpolate(e,n)}runInterpolationOnArray(e,n){return e.map(a=>this.runInterpolation(a,n))}runInterpolationOnDict(e,n){let a={};for(let i in e){let o=this.runInterpolation(e[i],n);o!==void 0&&(a[i]=o)}return a}getParsedResult(e,n){return e instanceof Array?this.getParsedResultForArray(e,n):this.getParsedResultForKey(e,n)}getParsedResultForArray(e,n){let a={},i=!1;for(let s of e)a[s]=this.getParsedResultForKey(s,n),i=i||se(a[s]);if(!i)return a;let o=e.map(s=>Ue(a[s]));return Zn(o).pipe(ee(s=>{let l={};return s.forEach((c,d)=>{l[e[d]]=c}),l}))}get(e,n){if(!te(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return this.pending?this.loadingTranslations.pipe(qe(()=>Ue(this.getParsedResult(e,n)))):Ue(this.getParsedResult(e,n))}getStreamOnTranslationChange(e,n){if(!te(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return $t(Bt(()=>this.get(e,n)),this.onTranslationChange.pipe(Ie(()=>{let a=this.getParsedResult(e,n);return Ue(a)})))}stream(e,n){if(!te(e)||!e.length)throw new Error('Parameter "key" required');return $t(Bt(()=>this.get(e,n)),this.onLangChange.pipe(Ie(()=>{let a=this.getParsedResult(e,n);return Ue(a)})))}instant(e,n){if(!te(e)||e.length===0)throw new Error('Parameter "key" is required and cannot be empty');let a=this.getParsedResult(e,n);return se(a)?Array.isArray(e)?e.reduce((i,o)=>(i[o]=o,i),{}):e:a}set(e,n,a=this.getCurrentLang()){this.store.setTranslations(a,hs(this.store.getTranslations(a),e,wt(n)?this.compiler.compile(n,a):this.compiler.compileTranslations(n,a)),!1)}reloadLang(e){return this.resetLang(e),this.loadAndCompileTranslations(e)}resetLang(e){delete this._translationRequests[e],this.store.deleteTranslations(e)}static getBrowserLang(){if(typeof window>"u"||!window.navigator)return;let e=this.getBrowserCultureLang();return e?e.split(/[-_]/)[0]:void 0}static getBrowserCultureLang(){if(!(typeof window>"u"||typeof window.navigator>"u"))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}getBrowserLang(){return t.getBrowserLang()}getBrowserCultureLang(){return t.getBrowserCultureLang()}get defaultLang(){return this.getFallbackLang()}get currentLang(){return this.store.getCurrentLang()}get langs(){return this.store.getLanguages()}setDefaultLang(e){return this.setFallbackLang(e)}getDefaultLang(){return this.getFallbackLang()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})();var nm=(()=>{class t{translate=T(gn);_ref=T(Ir);value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onFallbackLangChange;updateValue(e,n,a){let i=o=>{this.value=o!==void 0?o:e,this.lastKey=e,this._ref.markForCheck()};if(a){let o=this.translate.getParsedResult(e,n);se(o)?o.subscribe(i):i(o)}this.translate.get(e,n).subscribe(i)}transform(e,...n){if(!e||!e.length)return e;if(bt(e,this.lastKey)&&bt(n,this.lastParams))return this.value;let a;if(te(n[0])&&n.length)if(wt(n[0])&&n[0].length){let i=n[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g,'"$2":').replace(/:(\s)?(')(.*?)(')/g,':"$3"');try{a=JSON.parse(i)}catch(o){throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${n[0]}`)}}else J(n[0])&&(a=n[0]);return this.lastKey=e,this.lastParams=n,this.updateValue(e,a),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(i=>{(this.lastKey&&i.lang===this.translate.getCurrentLang()||i.lang===this.translate.getFallbackLang())&&(this.lastKey=null,this.updateValue(e,a,i.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(i=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,a,i.translations))})),this.onFallbackLangChange||(this.onFallbackLangChange=this.translate.onFallbackLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,a))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onFallbackLangChange<"u"&&(this.onFallbackLangChange.unsubscribe(),this.onFallbackLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(n){return new(n||t)};static \u0275pipe=wr({name:"translate",type:t,pure:!1});static \u0275prov=x({token:t,factory:t.\u0275fac})}return t})();function vs(t){return{provide:Te,useClass:t}}function ys(t){return{provide:we,useClass:t}}function bs(t){return{provide:Ee,useClass:t}}function ws(t){return{provide:Be,useClass:t}}function fa(t={},r){let e=[];t.loader&&e.push(t.loader),t.compiler&&e.push(t.compiler),t.parser&&e.push(t.parser),t.missingTranslationHandler&&e.push(t.missingTranslationHandler),r&&e.push(hn),(t.useDefaultLang||t.defaultLanguage)&&(console.warn("The `useDefaultLang` and `defaultLanguage` options are deprecated. Please use `fallbackLang` instead."),t.useDefaultLang===!0&&t.defaultLanguage&&(t.fallbackLang=t.defaultLanguage));let n={fallbackLang:t.fallbackLang??null,lang:t.lang,extend:t.extend??!1};return e.push({provide:pn,useValue:n}),e.push({provide:gn,useClass:gn,deps:[hn,Te,we,Ee,Be,pn]}),e}var rm=(()=>{class t{static forRoot(e={}){return{ngModule:t,providers:[...fa(j({compiler:ys(us),parser:bs(gs),loader:vs(ds),missingTranslationHandler:ws(fs)},e),!0)]}}static forChild(e={}){return{ngModule:t,providers:[...fa(e,e.isolate??!1)]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=ve({type:t});static \u0275inj=he({})}return t})();function xn(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function Ts(t){if(Array.isArray(t))return t}function Es(t){if(Array.isArray(t))return xn(t)}function xs(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function da(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Wa(n.key),n)}}function Ss(t,r,e){return r&&da(t.prototype,r),e&&da(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Mt(t,r){var e=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=jn(t))||r&&t&&typeof t.length=="number"){e&&(t=e);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){e=e.call(t)},n:function(){var l=e.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||e.return==null||e.return()}finally{if(s)throw i}}}}function v(t,r,e){return(r=Wa(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function As(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ms(t,r){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var n,a,i,o,s=[],l=!0,c=!1;try{if(i=(e=e.call(t)).next,r===0){if(Object(e)!==e)return;l=!1}else for(;!(l=(n=i.call(e)).done)&&(s.push(n.value),s.length!==r);l=!0);}catch(d){c=!0,a=d}finally{try{if(!l&&e.return!=null&&(o=e.return(),Object(o)!==o))return}finally{if(c)throw a}}return s}}function Cs(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Is(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ma(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,n)}return e}function u(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?ma(Object(e),!0).forEach(function(n){v(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ma(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function Rt(t,r){return Ts(t)||Ms(t,r)||jn(t,r)||Cs()}function B(t){return Es(t)||As(t)||jn(t)||Is()}function ks(t,r){if(typeof t!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var n=e.call(t,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function Wa(t){var r=ks(t,"string");return typeof r=="symbol"?r:r+""}function kt(t){"@babel/helpers - typeof";return kt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},kt(t)}function jn(t,r){if(t){if(typeof t=="string")return xn(t,r);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?xn(t,r):void 0}}var ha=function(){},zn={},Va={},Xa=null,Ya={mark:ha,measure:ha};try{typeof window<"u"&&(zn=window),typeof document<"u"&&(Va=document),typeof MutationObserver<"u"&&(Xa=MutationObserver),typeof performance<"u"&&(Ya=performance)}catch{}var Ds=zn.navigator||{},pa=Ds.userAgent,ga=pa===void 0?"":pa,re=zn,C=Va,va=Xa,Et=Ya,om=!!re.document,Z=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",Ga=~ga.indexOf("MSIE")||~ga.indexOf("Trident/"),xt,Ps=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Rs=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Ja={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Os={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ka=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],O="classic",Ye="duotone",qa="sharp",Za="sharp-duotone",Qa="chisel",ei="etch",ti="graphite",ni="jelly",ri="jelly-duo",ai="jelly-fill",ii="mosaic",oi="notdog",si="notdog-duo",li="pixel",ci="slab",fi="slab-duo",ui="slab-press",di="slab-press-duo",mi="thumbprint",hi="utility",pi="utility-duo",gi="utility-fill",vi="vellum",yi="whiteboard",Ns="Classic",_s="Duotone",Ls="Sharp",Fs="Sharp Duotone",js="Chisel",zs="Etch",Us="Graphite",$s="Jelly",Bs="Jelly Duo",Hs="Jelly Fill",Ws="Mosaic",Vs="Notdog",Xs="Notdog Duo",Ys="Pixel",Gs="Slab",Js="Slab Duo",Ks="Slab Press",qs="Slab Press Duo",Zs="Thumbprint",Qs="Utility",el="Utility Duo",tl="Utility Fill",nl="Vellum",rl="Whiteboard",bi=[O,Ye,qa,Za,Qa,ei,ti,ni,ri,ai,ii,oi,si,li,ci,fi,ui,di,mi,hi,pi,gi,vi,yi],sm=(xt={},v(v(v(v(v(v(v(v(v(v(xt,O,Ns),Ye,_s),qa,Ls),Za,Fs),Qa,js),ei,zs),ti,Us),ni,$s),ri,Bs),ai,Hs),v(v(v(v(v(v(v(v(v(v(xt,ii,Ws),oi,Vs),si,Xs),li,Ys),ci,Gs),fi,Js),ui,Ks),di,qs),mi,Zs),hi,Qs),v(v(v(v(xt,pi,el),gi,tl),vi,nl),yi,rl)),al={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},il={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},ol=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),sl={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},wi=["fak","fa-kit","fakd","fa-kit-duotone"],ya={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ll=["kit"],cl="kit",fl="kit-duotone",ul="Kit",dl="Kit Duotone",lm=v(v({},cl,ul),fl,dl),ml={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},hl={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},pl={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ba={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},St,At={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gl=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],vl="classic",yl="duotone",bl="sharp",wl="sharp-duotone",Tl="chisel",El="etch",xl="graphite",Sl="jelly",Al="jelly-duo",Ml="jelly-fill",Cl="mosaic",Il="notdog",kl="notdog-duo",Dl="pixel",Pl="slab",Rl="slab-duo",Ol="slab-press",Nl="slab-press-duo",_l="thumbprint",Ll="utility",Fl="utility-duo",jl="utility-fill",zl="vellum",Ul="whiteboard",$l="Classic",Bl="Duotone",Hl="Sharp",Wl="Sharp Duotone",Vl="Chisel",Xl="Etch",Yl="Graphite",Gl="Jelly",Jl="Jelly Duo",Kl="Jelly Fill",ql="Mosaic",Zl="Notdog",Ql="Notdog Duo",ec="Pixel",tc="Slab",nc="Slab Duo",rc="Slab Press",ac="Slab Press Duo",ic="Thumbprint",oc="Utility",sc="Utility Duo",lc="Utility Fill",cc="Vellum",fc="Whiteboard",cm=(St={},v(v(v(v(v(v(v(v(v(v(St,vl,$l),yl,Bl),bl,Hl),wl,Wl),Tl,Vl),El,Xl),xl,Yl),Sl,Gl),Al,Jl),Ml,Kl),v(v(v(v(v(v(v(v(v(v(St,Cl,ql),Il,Zl),kl,Ql),Dl,ec),Pl,tc),Rl,nc),Ol,rc),Nl,ac),_l,ic),Ll,oc),v(v(v(v(St,Fl,sc),jl,lc),zl,cc),Ul,fc)),uc="kit",dc="kit-duotone",mc="Kit",hc="Kit Duotone",fm=v(v({},uc,mc),dc,hc),pc={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},gc={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Sn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},vc=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Ti=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(gl,vc),yc=["solid","regular","light","thin","duotone","brands","semibold"],Ei=[1,2,3,4,5,6,7,8,9,10],bc=Ei.concat([11,12,13,14,15,16,17,18,19,20]),wc=["aw","fw","pull-left","pull-right"],Tc=[].concat(B(Object.keys(gc)),yc,wc,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",At.GROUP,At.SWAP_OPACITY,At.PRIMARY,At.SECONDARY]).concat(Ei.map(function(t){return"".concat(t,"x")})).concat(bc.map(function(t){return"w-".concat(t)})),Ec={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},K="___FONT_AWESOME___",An=16,xi="fa",Si="svg-inline--fa",de="data-fa-i2svg",Mn="data-fa-pseudo-element",xc="data-fa-pseudo-element-pending",Un="data-prefix",$n="data-icon",wa="fontawesome-i2svg",Sc="async",Ac=["HTML","HEAD","STYLE","SCRIPT"],Ai=["::before","::after",":before",":after"],Mi=(function(){try{return!0}catch{return!1}})();function Ge(t){return new Proxy(t,{get:function(e,n){return n in e?e[n]:e[O]}})}var Ci=u({},Ja);Ci[O]=u(u(u(u({},{"fa-duotone":"duotone"}),Ja[O]),ya.kit),ya["kit-duotone"]);var Mc=Ge(Ci),Cn=u({},sl);Cn[O]=u(u(u(u({},{duotone:"fad"}),Cn[O]),ba.kit),ba["kit-duotone"]);var Ta=Ge(Cn),In=u({},Sn);In[O]=u(u({},In[O]),pl.kit);var Bn=Ge(In),kn=u({},pc);kn[O]=u(u({},kn[O]),ml.kit);var um=Ge(kn),Cc=Ps,Ii="fa-layers-text",Ic=Rs,kc=u({},al),dm=Ge(kc),Dc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],yn=Os,Pc=[].concat(B(ll),B(Tc)),We=re.FontAwesomeConfig||{};function Rc(t){var r=C.querySelector("script["+t+"]");if(r)return r.getAttribute(t)}function Oc(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}C&&typeof C.querySelector=="function"&&(Ea=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],Ea.forEach(function(t){var r=Rt(t,2),e=r[0],n=r[1],a=Oc(Rc(e));a!=null&&(We[n]=a)}));var Ea,ki={styleDefault:"solid",familyDefault:O,cssPrefix:xi,replacementClass:Si,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};We.familyPrefix&&(We.cssPrefix=We.familyPrefix);var Ae=u(u({},ki),We);Ae.autoReplaceSvg||(Ae.observeMutations=!1);var m={};Object.keys(ki).forEach(function(t){Object.defineProperty(m,t,{enumerable:!0,set:function(e){Ae[t]=e,Ve.forEach(function(n){return n(m)})},get:function(){return Ae[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(r){Ae.cssPrefix=r,Ve.forEach(function(e){return e(m)})},get:function(){return Ae.cssPrefix}});re.FontAwesomeConfig=m;var Ve=[];function Nc(t){return Ve.push(t),function(){Ve.splice(Ve.indexOf(t),1)}}var ne=An,V={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _c(t){if(!(!t||!Z)){var r=C.createElement("style");r.setAttribute("type","text/css"),r.innerHTML=t;for(var e=C.head.childNodes,n=null,a=e.length-1;a>-1;a--){var i=e[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return C.head.insertBefore(r,n),t}}var Lc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xa(){for(var t=12,r="";t-- >0;)r+=Lc[Math.random()*62|0];return r}function Me(t){for(var r=[],e=(t||[]).length>>>0;e--;)r[e]=t[e];return r}function Hn(t){return t.classList?Me(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(r){return r})}function Di(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fc(t){return Object.keys(t||{}).reduce(function(r,e){return r+"".concat(e,'="').concat(Di(t[e]),'" ')},"").trim()}function Ot(t){return Object.keys(t||{}).reduce(function(r,e){return r+"".concat(e,": ").concat(t[e].trim(),";")},"")}function Wn(t){return t.size!==V.size||t.x!==V.x||t.y!==V.y||t.rotate!==V.rotate||t.flipX||t.flipY}function jc(t){var r=t.transform,e=t.containerWidth,n=t.iconWidth,a={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(r.x*32,", ").concat(r.y*32,") "),o="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),s="rotate(".concat(r.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:a,inner:l,path:c}}function zc(t){var r=t.transform,e=t.width,n=e===void 0?An:e,a=t.height,i=a===void 0?An:a,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&Ga?l+="translate(".concat(r.x/ne-n/2,"em, ").concat(r.y/ne-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(r.x/ne,"em), calc(-50% + ").concat(r.y/ne,"em)) "):l+="translate(".concat(r.x/ne,"em, ").concat(r.y/ne,"em) "),l+="scale(".concat(r.size/ne*(r.flipX?-1:1),", ").concat(r.size/ne*(r.flipY?-1:1),") "),l+="rotate(".concat(r.rotate,"deg) "),l}var Uc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Pi(){var t=xi,r=Si,e=m.cssPrefix,n=m.replacementClass,a=Uc;if(e!==t||n!==r){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(r),"g");a=a.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(n))}return a}var Sa=!1;function bn(){m.autoAddCss&&!Sa&&(_c(Pi()),Sa=!0)}var $c={mixout:function(){return{dom:{css:Pi,insertCss:bn}}},hooks:function(){return{beforeDOMElementCreation:function(){bn()},beforeI2svg:function(){bn()}}}},q=re||{};q[K]||(q[K]={});q[K].styles||(q[K].styles={});q[K].hooks||(q[K].hooks={});q[K].shims||(q[K].shims=[]);var $=q[K],Ri=[],Oi=function(){C.removeEventListener("DOMContentLoaded",Oi),Dt=1,Ri.map(function(r){return r()})},Dt=!1;Z&&(Dt=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),Dt||C.addEventListener("DOMContentLoaded",Oi));function Bc(t){Z&&(Dt?setTimeout(t,0):Ri.push(t))}function Je(t){var r=t.tag,e=t.attributes,n=e===void 0?{}:e,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Di(t):"<".concat(r," ").concat(Fc(n),">").concat(i.map(Je).join(""),"</").concat(r,">")}function Aa(t,r,e){if(t&&t[r]&&t[r][e])return{prefix:r,iconName:e,icon:t[r][e]}}var Hc=function(r,e){return function(n,a,i,o){return r.call(e,n,a,i,o)}},wn=function(r,e,n,a){var i=Object.keys(r),o=i.length,s=a!==void 0?Hc(e,a):e,l,c,d;for(n===void 0?(l=1,d=r[i[0]]):(l=0,d=n);l<o;l++)c=i[l],d=s(d,r[c],c,r);return d};function Ni(t){return B(t).length!==1?null:t.codePointAt(0).toString(16)}function Ma(t){return Object.keys(t).reduce(function(r,e){var n=t[e],a=!!n.icon;return a?r[n.iconName]=n.icon:r[e]=n,r},{})}function Dn(t,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=e.skipHooks,a=n===void 0?!1:n,i=Ma(r);typeof $.hooks.addPack=="function"&&!a?$.hooks.addPack(t,Ma(r)):$.styles[t]=u(u({},$.styles[t]||{}),i),t==="fas"&&Dn("fa",r)}var Xe=$.styles,Wc=$.shims,_i=Object.keys(Bn),Vc=_i.reduce(function(t,r){return t[r]=Object.keys(Bn[r]),t},{}),Vn=null,Li={},Fi={},ji={},zi={},Ui={};function Xc(t){return~Pc.indexOf(t)}function Yc(t,r){var e=r.split("-"),n=e[0],a=e.slice(1).join("-");return n===t&&a!==""&&!Xc(a)?a:null}var $i=function(){var r=function(i){return wn(Xe,function(o,s,l){return o[l]=wn(s,i,{}),o},{})};Li=r(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Fi=r(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Ui=r(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var e="far"in Xe||m.autoFetchSvg,n=wn(Wc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ji=n.names,zi=n.unicodes,Vn=Nt(m.styleDefault,{family:m.familyDefault})};Nc(function(t){Vn=Nt(t.styleDefault,{family:m.familyDefault})});$i();function Xn(t,r){return(Li[t]||{})[r]}function Gc(t,r){return(Fi[t]||{})[r]}function ue(t,r){return(Ui[t]||{})[r]}function Bi(t){return ji[t]||{prefix:null,iconName:null}}function Jc(t){var r=zi[t],e=Xn("fas",t);return r||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function ae(){return Vn}var Hi=function(){return{prefix:null,iconName:null,rest:[]}};function Kc(t){var r=O,e=_i.reduce(function(n,a){return n[a]="".concat(m.cssPrefix,"-").concat(a),n},{});return bi.forEach(function(n){(t.includes(e[n])||t.some(function(a){return Vc[n].includes(a)}))&&(r=n)}),r}function Nt(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.family,n=e===void 0?O:e,a=Mc[n][t];if(n===Ye&&!t)return"fad";var i=Ta[n][t]||Ta[n][a],o=t in $.styles?t:null,s=i||o||null;return s}function qc(t){var r=[],e=null;return t.forEach(function(n){var a=Yc(m.cssPrefix,n);a?e=a:n&&r.push(n)}),{iconName:e,rest:r}}function Ca(t){return t.sort().filter(function(r,e,n){return n.indexOf(r)===e})}var Ia=Ti.concat(wi);function _t(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.skipLookups,n=e===void 0?!1:e,a=null,i=Ca(t.filter(function(g){return Ia.includes(g)})),o=Ca(t.filter(function(g){return!Ia.includes(g)})),s=i.filter(function(g){return a=g,!Ka.includes(g)}),l=Rt(s,1),c=l[0],d=c===void 0?null:c,f=Kc(i),p=u(u({},qc(o)),{},{prefix:Nt(d,{family:f})});return u(u(u({},p),tf({values:t,family:f,styles:Xe,config:m,canonical:p,givenPrefix:a})),Zc(n,a,p))}function Zc(t,r,e){var n=e.prefix,a=e.iconName;if(t||!n||!a)return{prefix:n,iconName:a};var i=r==="fa"?Bi(a):{},o=ue(n,a);return a=i.iconName||o||a,n=i.prefix||n,n==="far"&&!Xe.far&&Xe.fas&&!m.autoFetchSvg&&(n="fas"),{prefix:n,iconName:a}}var Qc=bi.filter(function(t){return t!==O||t!==Ye}),ef=Object.keys(Sn).filter(function(t){return t!==O}).map(function(t){return Object.keys(Sn[t])}).flat();function tf(t){var r=t.values,e=t.family,n=t.canonical,a=t.givenPrefix,i=a===void 0?"":a,o=t.styles,s=o===void 0?{}:o,l=t.config,c=l===void 0?{}:l,d=e===Ye,f=r.includes("fa-duotone")||r.includes("fad"),p=c.familyDefault==="duotone",g=n.prefix==="fad"||n.prefix==="fa-duotone";if(!d&&(f||p||g)&&(n.prefix="fad"),(r.includes("fa-brands")||r.includes("fab"))&&(n.prefix="fab"),!n.prefix&&Qc.includes(e)){var S=Object.keys(s).find(function(h){return ef.includes(h)});if(S||c.autoFetchSvg){var b=ol.get(e).defaultShortPrefixId;n.prefix=b,n.iconName=ue(n.prefix,n.iconName)||n.iconName}}return(n.prefix==="fa"||i==="fa")&&(n.prefix=ae()||"fas"),n}var nf=(function(){function t(){xs(this,t),this.definitions={}}return Ss(t,[{key:"add",value:function(){for(var e=this,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=u(u({},e.definitions[s]||{}),o[s]),Dn(s,o[s]);var l=Bn[O][s];l&&Dn(l,o[s]),$i()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,n){var a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];e[s]||(e[s]={}),d.length>0&&d.forEach(function(f){typeof f=="string"&&(e[s][f]=c)}),e[s][l]=c}),e}}])})(),ka=[],xe={},Se={},rf=Object.keys(Se);function af(t,r){var e=r.mixoutsTo;return ka=t,xe={},Object.keys(Se).forEach(function(n){rf.indexOf(n)===-1&&delete Se[n]}),ka.forEach(function(n){var a=n.mixout?n.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(e[o]=a[o]),kt(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=a[o][s]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){xe[o]||(xe[o]=[]),xe[o].push(i[o])})}n.provides&&n.provides(Se)}),e}function Pn(t,r){for(var e=arguments.length,n=new Array(e>2?e-2:0),a=2;a<e;a++)n[a-2]=arguments[a];var i=xe[t]||[];return i.forEach(function(o){r=o.apply(null,[r].concat(n))}),r}function me(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),n=1;n<r;n++)e[n-1]=arguments[n];var a=xe[t]||[];a.forEach(function(i){i.apply(null,e)})}function ie(){var t=arguments[0],r=Array.prototype.slice.call(arguments,1);return Se[t]?Se[t].apply(null,r):void 0}function Rn(t){t.prefix==="fa"&&(t.prefix="fas");var r=t.iconName,e=t.prefix||ae();if(r)return r=ue(e,r)||r,Aa(Wi.definitions,e,r)||Aa($.styles,e,r)}var Wi=new nf,of=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,me("noAuto")},sf={i2svg:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Z?(me("beforeI2svg",r),ie("pseudoElements2svg",r),ie("i2svg",r)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=r.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Bc(function(){cf({autoReplaceSvgRoot:e}),me("watch",r)})}},lf={icon:function(r){if(r===null)return null;if(kt(r)==="object"&&r.prefix&&r.iconName)return{prefix:r.prefix,iconName:ue(r.prefix,r.iconName)||r.iconName};if(Array.isArray(r)&&r.length===2){var e=r[1].indexOf("fa-")===0?r[1].slice(3):r[1],n=Nt(r[0]);return{prefix:n,iconName:ue(n,e)||e}}if(typeof r=="string"&&(r.indexOf("".concat(m.cssPrefix,"-"))>-1||r.match(Cc))){var a=_t(r.split(" "),{skipLookups:!0});return{prefix:a.prefix||ae(),iconName:ue(a.prefix,a.iconName)||a.iconName}}if(typeof r=="string"){var i=ae();return{prefix:i,iconName:ue(i,r)||r}}}},z={noAuto:of,config:m,dom:sf,parse:lf,library:Wi,findIconDefinition:Rn,toHtml:Je},cf=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=r.autoReplaceSvgRoot,n=e===void 0?C:e;(Object.keys($.styles).length>0||m.autoFetchSvg)&&Z&&m.autoReplaceSvg&&z.dom.i2svg({node:n})};function Lt(t,r){return Object.defineProperty(t,"abstract",{get:r}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return Je(n)})}}),Object.defineProperty(t,"node",{get:function(){if(Z){var n=C.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function ff(t){var r=t.children,e=t.main,n=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(Wn(o)&&e.found&&!n.found){var s=e.width,l=e.height,c={x:s/l/2,y:.5};a.style=Ot(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:r}]}function uf(t){var r=t.prefix,e=t.iconName,n=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(r,"-").concat(m.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},a),{},{id:o}),children:n}]}]}function df(t){var r=["aria-label","aria-labelledby","title","role"];return r.some(function(e){return e in t})}function Yn(t){var r=t.icons,e=r.main,n=r.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.maskId,c=t.extra,d=t.watchable,f=d===void 0?!1:d,p=n.found?n:e,g=p.width,S=p.height,b=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(k){return c.classes.indexOf(k)===-1}).filter(function(k){return k!==""||!!k}).concat(c.classes).join(" "),h={children:[],attributes:u(u({},c.attributes),{},{"data-prefix":a,"data-icon":i,class:b,role:c.attributes.role||"img",viewBox:"0 0 ".concat(g," ").concat(S)})};!df(c.attributes)&&!c.attributes["aria-hidden"]&&(h.attributes["aria-hidden"]="true"),f&&(h.attributes[de]="");var y=u(u({},h),{},{prefix:a,iconName:i,main:e,mask:n,maskId:l,transform:o,symbol:s,styles:u({},c.styles)}),w=n.found&&e.found?ie("generateAbstractMask",y)||{children:[],attributes:{}}:ie("generateAbstractIcon",y)||{children:[],attributes:{}},M=w.children,E=w.attributes;return y.children=M,y.attributes=E,s?uf(y):ff(y)}function Da(t){var r=t.content,e=t.width,n=t.height,a=t.transform,i=t.extra,o=t.watchable,s=o===void 0?!1:o,l=u(u({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[de]="");var c=u({},i.styles);Wn(a)&&(c.transform=zc({transform:a,startCentered:!0,width:e,height:n}),c["-webkit-transform"]=c.transform);var d=Ot(c);d.length>0&&(l.style=d);var f=[];return f.push({tag:"span",attributes:l,children:[r]}),f}function mf(t){var r=t.content,e=t.extra,n=u(u({},e.attributes),{},{class:e.classes.join(" ")}),a=Ot(e.styles);a.length>0&&(n.style=a);var i=[];return i.push({tag:"span",attributes:n,children:[r]}),i}var Tn=$.styles;function On(t){var r=t[0],e=t[1],n=t.slice(4),a=Rt(n,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(yn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(yn.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(yn.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:r,height:e,icon:o}}var hf={found:!1,width:512,height:512};function pf(t,r){!Mi&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(r,'" is missing.'))}function Nn(t,r){var e=r;return r==="fa"&&m.styleDefault!==null&&(r=ae()),new Promise(function(n,a){if(e==="fa"){var i=Bi(t)||{};t=i.iconName||t,r=i.prefix||r}if(t&&r&&Tn[r]&&Tn[r][t]){var o=Tn[r][t];return n(On(o))}pf(t,r),n(u(u({},hf),{},{icon:m.showMissingIcons&&t?ie("missingIconAbstract")||{}:{}}))})}var Pa=function(){},_n=m.measurePerformance&&Et&&Et.mark&&Et.measure?Et:{mark:Pa,measure:Pa},He='FA "7.3.1"',gf=function(r){return _n.mark("".concat(He," ").concat(r," begins")),function(){return Vi(r)}},Vi=function(r){_n.mark("".concat(He," ").concat(r," ends")),_n.measure("".concat(He," ").concat(r),"".concat(He," ").concat(r," begins"),"".concat(He," ").concat(r," ends"))},Gn={begin:gf,end:Vi},Ct=function(){};function Ra(t){var r=t.getAttribute?t.getAttribute(de):null;return typeof r=="string"}function vf(t){var r=t.getAttribute?t.getAttribute(Un):null,e=t.getAttribute?t.getAttribute($n):null;return r&&e}function yf(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function bf(){if(m.autoReplaceSvg===!0)return It.replace;var t=It[m.autoReplaceSvg];return t||It.replace}function wf(t){return C.createElementNS("http://www.w3.org/2000/svg",t)}function Tf(t){return C.createElement(t)}function Xi(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.ceFn,n=e===void 0?t.tag==="svg"?wf:Tf:e;if(typeof t=="string")return C.createTextNode(t);var a=n(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(Xi(o,{ceFn:n}))}),a}function Ef(t){var r=" ".concat(t.outerHTML," ");return r="".concat(r,"Font Awesome fontawesome.com "),r}var It={replace:function(r){var e=r[0];if(e.parentNode)if(r[1].forEach(function(a){e.parentNode.insertBefore(Xi(a),e)}),e.getAttribute(de)===null&&m.keepOriginalSource){var n=C.createComment(Ef(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(r){var e=r[0],n=r[1];if(~Hn(e).indexOf(m.replacementClass))return It.replace(r);var a=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=n.map(function(s){return Je(s)}).join(`
`);e.setAttribute(de,""),e.innerHTML=o}};function Oa(t){t()}function Yi(t,r){var e=typeof r=="function"?r:Ct;if(t.length===0)e();else{var n=Oa;m.mutateApproach===Sc&&(n=re.requestAnimationFrame||Oa),n(function(){var a=bf(),i=Gn.begin("mutate");t.map(a),i(),e()})}}var Jn=!1;function Gi(){Jn=!0}function Ln(){Jn=!1}var Pt=null;function Na(t){if(va&&m.observeMutations){var r=t.treeCallback,e=r===void 0?Ct:r,n=t.nodeCallback,a=n===void 0?Ct:n,i=t.pseudoElementsCallback,o=i===void 0?Ct:i,s=t.observeMutationsRoot,l=s===void 0?C:s;Pt=new va(function(c){if(!Jn){var d=ae();Me(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Ra(f.addedNodes[0])&&(m.searchPseudoElements&&o(f.target),e(f.target)),f.type==="attributes"&&f.target.parentNode&&m.searchPseudoElements&&o([f.target],!0),f.type==="attributes"&&Ra(f.target)&&~Dc.indexOf(f.attributeName))if(f.attributeName==="class"&&vf(f.target)){var p=_t(Hn(f.target)),g=p.prefix,S=p.iconName;f.target.setAttribute(Un,g||d),S&&f.target.setAttribute($n,S)}else yf(f.target)&&a(f.target)})}}),Z&&Pt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function xf(){Pt&&Pt.disconnect()}function Sf(t){var r=t.getAttribute("style"),e=[];return r&&(e=r.split(";").reduce(function(n,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),e}function Af(t){var r=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"",a=_t(Hn(t));return a.prefix||(a.prefix=ae()),r&&e&&(a.prefix=r,a.iconName=e),a.iconName&&a.prefix||(a.prefix&&n.length>0&&(a.iconName=Gc(a.prefix,t.innerText)||Xn(a.prefix,Ni(t.innerText))),!a.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Mf(t){var r=Me(t.attributes).reduce(function(e,n){return e.name!=="class"&&e.name!=="style"&&(e[n.name]=n.value),e},{});return r}function Cf(){return{iconName:null,prefix:null,transform:V,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _a(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Af(t),n=e.iconName,a=e.prefix,i=e.rest,o=Mf(t),s=Pn("parseNodeAttributes",{},t),l=r.styleParser?Sf(t):[];return u({iconName:n,prefix:a,transform:V,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var If=$.styles;function Ji(t){var r=m.autoReplaceSvg==="nest"?_a(t,{styleParser:!1}):_a(t);return~r.extra.classes.indexOf(Ii)?ie("generateLayersText",t,r):ie("generateSvgReplacementMutation",t,r)}function kf(){return[].concat(B(wi),B(Ti))}function La(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Z)return Promise.resolve();var e=C.documentElement.classList,n=function(f){return e.add("".concat(wa,"-").concat(f))},a=function(f){return e.remove("".concat(wa,"-").concat(f))},i=m.autoFetchSvg?kf():Ka.concat(Object.keys(If));i.includes("fa")||i.push("fa");var o=[".".concat(Ii,":not([").concat(de,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(de,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Me(t.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),a("complete");else return Promise.resolve();var l=Gn.begin("onTree"),c=s.reduce(function(d,f){try{var p=Ji(f);p&&d.push(p)}catch(g){Mi||g.name==="MissingIcon"&&console.error(g)}return d},[]);return new Promise(function(d,f){Promise.all(c).then(function(p){Yi(p,function(){n("active"),n("complete"),a("pending"),typeof r=="function"&&r(),l(),d()})}).catch(function(p){l(),f(p)})})}function Df(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ji(t).then(function(e){e&&Yi([e],r)})}function Pf(t){return function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(r||{}).icon?r:Rn(r||{}),a=e.mask;return a&&(a=(a||{}).icon?a:Rn(a||{})),t(n,u(u({},e),{},{mask:a}))}}var Rf=function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,a=n===void 0?V:n,i=e.symbol,o=i===void 0?!1:i,s=e.mask,l=s===void 0?null:s,c=e.maskId,d=c===void 0?null:c,f=e.classes,p=f===void 0?[]:f,g=e.attributes,S=g===void 0?{}:g,b=e.styles,h=b===void 0?{}:b;if(r){var y=r.prefix,w=r.iconName,M=r.icon;return Lt(u({type:"icon"},r),function(){return me("beforeDOMElementCreation",{iconDefinition:r,params:e}),Yn({icons:{main:On(M),mask:l?On(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:w,transform:u(u({},V),a),symbol:o,maskId:d,extra:{attributes:S,styles:h,classes:p}})})}},Of={mixout:function(){return{icon:Pf(Rf)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=La,e.nodeCallback=Df,e}}},provides:function(r){r.i2svg=function(e){var n=e.node,a=n===void 0?C:n,i=e.callback,o=i===void 0?function(){}:i;return La(a,o)},r.generateSvgReplacementMutation=function(e,n){var a=n.iconName,i=n.prefix,o=n.transform,s=n.symbol,l=n.mask,c=n.maskId,d=n.extra;return new Promise(function(f,p){Promise.all([Nn(a,i),l.iconName?Nn(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var S=Rt(g,2),b=S[0],h=S[1];f([e,Yn({icons:{main:b,mask:h},prefix:i,iconName:a,transform:o,symbol:s,maskId:c,extra:d,watchable:!0})])}).catch(p)})},r.generateAbstractIcon=function(e){var n=e.children,a=e.attributes,i=e.main,o=e.transform,s=e.styles,l=Ot(s);l.length>0&&(a.style=l);var c;return Wn(o)&&(c=ie("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(c||i.icon),{children:n,attributes:a}}}},Nf={mixout:function(){return{layer:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.classes,i=a===void 0?[]:a;return Lt({type:"layer"},function(){me("beforeDOMElementCreation",{assembler:e,params:n});var o=[];return e(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(B(i)).join(" ")},children:o}]})}}}},_f={mixout:function(){return{counter:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.title,i=a===void 0?null:a,o=n.classes,s=o===void 0?[]:o,l=n.attributes,c=l===void 0?{}:l,d=n.styles,f=d===void 0?{}:d;return Lt({type:"counter",content:e},function(){return me("beforeDOMElementCreation",{content:e,params:n}),mf({content:e.toString(),title:i,extra:{attributes:c,styles:f,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(B(s))}})})}}}},Lf={mixout:function(){return{text:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,i=a===void 0?V:a,o=n.classes,s=o===void 0?[]:o,l=n.attributes,c=l===void 0?{}:l,d=n.styles,f=d===void 0?{}:d;return Lt({type:"text",content:e},function(){return me("beforeDOMElementCreation",{content:e,params:n}),Da({content:e,transform:u(u({},V),i),extra:{attributes:c,styles:f,classes:["".concat(m.cssPrefix,"-layers-text")].concat(B(s))}})})}}},provides:function(r){r.generateLayersText=function(e,n){var a=n.transform,i=n.extra,o=null,s=null;if(Ga){var l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,s=c.height/l}return Promise.resolve([e,Da({content:e.innerHTML,width:o,height:s,transform:a,extra:i,watchable:!0})])}}},Ki=new RegExp('"',"ug"),Fa=[1105920,1112319],ja=u(u(u(u({},{FontAwesome:{normal:"fas",400:"fas"}}),il),Ec),hl),Fn=Object.keys(ja).reduce(function(t,r){return t[r.toLowerCase()]=ja[r],t},{}),Ff=Object.keys(Fn).reduce(function(t,r){var e=Fn[r];return t[r]=e[900]||B(Object.entries(e))[0][1],t},{});function jf(t){var r=t.replace(Ki,"");return Ni(B(r)[0]||"")}function zf(t){var r=t.getPropertyValue("font-feature-settings").includes("ss01"),e=t.getPropertyValue("content"),n=e.replace(Ki,""),a=n.codePointAt(0),i=a>=Fa[0]&&a<=Fa[1],o=n.length===2?n[0]===n[1]:!1;return i||o||r}function Uf(t,r){var e=t.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(r),a=isNaN(n)?"normal":n;return(Fn[e]||{})[a]||Ff[e]}function za(t,r){var e="".concat(xc).concat(r.replace(":","-"));return new Promise(function(n,a){if(t.getAttribute(e)!==null)return n();var i=Me(t.children),o=i.filter(function(I){return I.getAttribute(Mn)===r})[0],s=re.getComputedStyle(t,r),l=s.getPropertyValue("font-family"),c=l.match(Ic),d=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!c)return t.removeChild(o),n();if(c&&f!=="none"&&f!==""){var p=s.getPropertyValue("content"),g=Uf(l,d),S=jf(p),b=c[0].startsWith("FontAwesome"),h=zf(s),y=Xn(g,S),w=y;if(b){var M=Jc(S);M.iconName&&M.prefix&&(y=M.iconName,g=M.prefix)}if(y&&!h&&(!o||o.getAttribute(Un)!==g||o.getAttribute($n)!==w)){t.setAttribute(e,w),o&&t.removeChild(o);var E=Cf(),k=E.extra;k.attributes[Mn]=r,Nn(y,g).then(function(I){var N=Yn(u(u({},E),{},{icons:{main:I,mask:Hi()},prefix:g,iconName:w,extra:k,watchable:!0})),L=C.createElementNS("http://www.w3.org/2000/svg","svg");r==="::before"?t.insertBefore(L,t.firstChild):t.appendChild(L),L.outerHTML=N.map(function(X){return Je(X)}).join(`
`),t.removeAttribute(e),n()}).catch(a)}else n()}else n()})}function $f(t){return Promise.all([za(t,"::before"),za(t,"::after")])}function Bf(t){return t.parentNode!==document.head&&!~Ac.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Mn)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var Hf=function(r){return!!r&&Ai.some(function(e){return r.includes(e)})},Wf=function(r){if(!r)return[];var e=new Set,n=r.split(/,(?![^()]*\))/).map(function(l){return l.trim()});n=n.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(c){return c.trim()})});var a=Mt(n),i;try{for(a.s();!(i=a.n()).done;){var o=i.value;if(Hf(o)){var s=Ai.reduce(function(l,c){return l.replace(c,"")},o);s!==""&&s!=="*"&&e.add(s)}}}catch(l){a.e(l)}finally{a.f()}return e};function Ua(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Z){var e;if(r)e=t;else if(m.searchPseudoElementsFullScan)e=t.querySelectorAll("*");else{var n=new Set,a=Mt(document.styleSheets),i;try{for(a.s();!(i=a.n()).done;){var o=i.value;try{var s=Mt(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var c=l.value,d=Wf(c.selectorText),f=Mt(d),p;try{for(f.s();!(p=f.n()).done;){var g=p.value;n.add(g)}}catch(b){f.e(b)}finally{f.f()}}}catch(b){s.e(b)}finally{s.f()}}catch(b){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){a.e(b)}finally{a.f()}if(!n.size)return;var S=Array.from(n).join(", ");try{e=t.querySelectorAll(S)}catch{}}return new Promise(function(b,h){var y=Me(e).filter(Bf).map($f),w=Gn.begin("searchPseudoElements");Gi(),Promise.all(y).then(function(){w(),Ln(),b()}).catch(function(){w(),Ln(),h()})})}}var Vf={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Ua,e}}},provides:function(r){r.pseudoElements2svg=function(e){var n=e.node,a=n===void 0?C:n;m.searchPseudoElements&&Ua(a)}}},$a=!1,Xf={mixout:function(){return{dom:{unwatch:function(){Gi(),$a=!0}}}},hooks:function(){return{bootstrap:function(){Na(Pn("mutationObserverCallbacks",{}))},noAuto:function(){xf()},watch:function(e){var n=e.observeMutationsRoot;$a?Ln():Na(Pn("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Ba=function(r){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return r.toLowerCase().split(" ").reduce(function(n,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)},Yf={mixout:function(){return{parse:{transform:function(e){return Ba(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,n){var a=n.getAttribute("data-fa-transform");return a&&(e.transform=Ba(a)),e}}},provides:function(r){r.generateAbstractTransformGrouping=function(e){var n=e.main,a=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(d)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:f,path:p};return{tag:"g",attributes:u({},g.outer),children:[{tag:"g",attributes:u({},g.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:u(u({},n.icon.attributes),g.path)}]}]}}}},En={x:0,y:0,width:"100%",height:"100%"};function Ha(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||r)&&(t.attributes.fill="black"),t}function Gf(t){return t.tag==="g"?t.children:[t]}var Jf={hooks:function(){return{parseNodeAttributes:function(e,n){var a=n.getAttribute("data-fa-mask"),i=a?_t(a.split(" ").map(function(o){return o.trim()})):Hi();return i.prefix||(i.prefix=ae()),e.mask=i,e.maskId=n.getAttribute("data-fa-mask-id"),e}}},provides:function(r){r.generateAbstractMask=function(e){var n=e.children,a=e.attributes,i=e.main,o=e.mask,s=e.maskId,l=e.transform,c=i.width,d=i.icon,f=o.width,p=o.icon,g=jc({transform:l,containerWidth:f,iconWidth:c}),S={tag:"rect",attributes:u(u({},En),{},{fill:"white"})},b=d.children?{children:d.children.map(Ha)}:{},h={tag:"g",attributes:u({},g.inner),children:[Ha(u({tag:d.tag,attributes:u(u({},d.attributes),g.path)},b))]},y={tag:"g",attributes:u({},g.outer),children:[h]},w="mask-".concat(s||xa()),M="clip-".concat(s||xa()),E={tag:"mask",attributes:u(u({},En),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,y]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:Gf(p)},E]};return n.push(k,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(w,")")},En)}),{children:n,attributes:a}}}},Kf={provides:function(r){var e=!1;re.matchMedia&&(e=re.matchMedia("(prefers-reduced-motion: reduce)").matches),r.missingIconAbstract=function(){var n=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:u(u({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:u(u({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:u(u({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},qf={hooks:function(){return{parseNodeAttributes:function(e,n){var a=n.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return e.symbol=i,e}}}},Zf=[$c,Of,Nf,_f,Lf,Vf,Xf,Yf,Jf,Kf,qf];af(Zf,{mixoutsTo:z});var mm=z.noAuto,qi=z.config,hm=z.library,Zi=z.dom,Qi=z.parse,pm=z.findIconDefinition,gm=z.toHtml,eo=z.icon,vm=z.layer,Qf=z.text,eu=z.counter;var tu=["*"],nu=(()=>{class t{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(e){qi.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ru=(()=>{class t{definitions={};addIcons(...e){for(let n of e){n.prefix in this.definitions||(this.definitions[n.prefix]={}),this.definitions[n.prefix][n.iconName]=n;for(let a of n.icon[2])typeof a=="string"&&(this.definitions[n.prefix][a]=n)}}addIconPacks(...e){for(let n of e){let a=Object.keys(n).map(i=>n[i]);this.addIcons(...a)}}getIconDefinition(e,n){return e in this.definitions&&n in this.definitions[e]?this.definitions[e][n]:null}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),au=t=>{throw new Error(`Could not find icon with iconName=${t.iconName} and prefix=${t.prefix} in the icon library.`)},iu=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},no=t=>t!=null&&(t===90||t===180||t===270||t==="90"||t==="180"||t==="270"),ou=t=>{let r=no(t.rotate),e={[`fa-${t.animation}`]:t.animation!=null&&!t.animation.startsWith("spin"),"fa-spin":t.animation==="spin"||t.animation==="spin-reverse","fa-spin-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-spin-reverse":t.animation==="spin-reverse"||t.animation==="spin-pulse-reverse","fa-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-fw":t.fixedWidth,"fa-border":t.border,"fa-inverse":t.inverse,"fa-layers-counter":t.counter,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both",[`fa-${t.size}`]:t.size!==null,[`fa-rotate-${t.rotate}`]:r,"fa-rotate-by":t.rotate!=null&&!r,[`fa-pull-${t.pull}`]:t.pull!==null,[`fa-stack-${t.stackItemSize}`]:t.stackItemSize!=null};return Object.keys(e).map(n=>e[n]?n:null).filter(n=>n!=null)},Kn=new WeakSet,to="fa-auto-css";function su(t,r){if(!r.autoAddCss||Kn.has(t))return;if(t.getElementById(to)!=null){r.autoAddCss=!1,Kn.add(t);return}let e=t.createElement("style");e.setAttribute("type","text/css"),e.setAttribute("id",to),e.innerHTML=Zi.css();let n=t.head.childNodes,a=null;for(let i=n.length-1;i>-1;i--){let o=n[i],s=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}t.head.insertBefore(e,a),r.autoAddCss=!1,Kn.add(t)}var lu=t=>t.prefix!==void 0&&t.iconName!==void 0,cu=(t,r)=>lu(t)?t:Array.isArray(t)&&t.length===2?{prefix:t[0],iconName:t[1]}:{prefix:r,iconName:t},fu=(()=>{class t{stackItemSize=at("1x");size=at();_effect=ir(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(n){return new(n||t)};static \u0275dir=Gt({type:t,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return t})(),uu=(()=>{class t{size=at();classes=rt(()=>{let e=this.size(),n=e?{[`fa-${e}`]:!0}:{};return zt(j({},n),{"fa-stack":!0})});static \u0275fac=function(n){return new(n||t)};static \u0275cmp=Yt({type:t,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(n,a){n&2&&Mr(a.classes())},inputs:{size:[1,"size"]},ngContentSelectors:tu,decls:1,vars:0,template:function(n,a){n&1&&(Sr(),Ar(0))},encapsulation:2,changeDetection:0})}return t})(),Im=(()=>{class t{icon=_();title=_();animation=_();mask=_();flip=_();size=_();pull=_();border=_();inverse=_();symbol=_();rotate=_();fixedWidth=_();transform=_();a11yRole=_();renderedIconHTML=rt(()=>{let e=this.icon()??this.config.fallbackIcon;if(!e)return iu(),"";let n=this.findIconDefinition(e);if(!n)return"";let a=this.buildParams();su(this.document,this.config);let i=eo(n,a);return this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))});document=T(F);sanitizer=T(mn);config=T(nu);iconLibrary=T(ru);stackItem=T(fu,{optional:!0});stack=T(uu,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(e){let n=cu(e,this.config.defaultPrefix);if("icon"in n)return n;let a=this.iconLibrary.getIconDefinition(n.prefix,n.iconName);return a??(au(n),null)}buildParams(){let e=this.fixedWidth(),n={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof e=="boolean"?e:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},a=this.transform(),i=typeof a=="string"?Qi.transform(a):a,o=this.mask(),s=o!=null?this.findIconDefinition(o):null,l={},c=this.a11yRole();c!=null&&(l.role=c);let d={};return n.rotate!=null&&!no(n.rotate)&&(d["--fa-rotate-angle"]=`${n.rotate}`),{title:this.title(),transform:i,classes:ou(n),mask:s??void 0,symbol:this.symbol(),attributes:l,styles:d}}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=Yt({type:t,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(n,a){n&2&&(xr("innerHTML",a.renderedIconHTML(),gr),Er("title",a.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(n,a){},encapsulation:2,changeDetection:0})}return t})();export{bo as a,ta as b,Wo as c,Vo as d,Hd as e,mn as f,Wd as g,Te as h,gn as i,nm as j,rm as k,hm as l,ru as m,Im as n};
