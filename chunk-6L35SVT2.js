import{A as Ie,D as P,Da as Pe,Ea as vr,F as x,Fa as nt,G as he,Ga as yr,Ha as br,I as R,Ib as rt,J as A,Jb as at,K as w,Kb as _,L as Ze,Lb as Cr,Ma as Yt,Mb as Ir,N as tr,Na as ve,Nb as kr,O as Wt,Oa as Gt,Ob as Re,P as nr,Pa as wr,Pb as Dr,Qb as Pr,Rb as Rr,Tb as it,Ua as Tr,Ub as ot,V as L,Va as Jt,Vb as Or,W as rr,Z as ke,_ as Vt,_a as Er,ba as ar,c as Ut,ca as ir,d as Ke,ea as De,ga as or,h as V,ha as Xt,ia as sr,j as se,ja as Qe,ka as et,l as te,la as lr,na as tt,nb as xr,o as $t,oa as pe,p as Bt,pa as ge,q as Zn,qa as cr,r as Qn,ra as fr,rb as Sr,sa as ur,sb as Ar,t as qe,ta as dr,u as Ce,ua as mr,v as er,va as hr,wa as pr,xa as le,y as Ht,ya as gr,yb as Mr}from"./chunk-WFHLHTZH.js";import{a as F,b as zt,c as qn}from"./chunk-7CGTOI24.js";var Oe=class{_doc;constructor(r){this._doc=r}manager},st=(()=>{class e extends Oe{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,a,i){return t.addEventListener(n,a,i),()=>this.removeEventListener(t,n,a,i)}removeEventListener(t,n,a,i){return t.removeEventListener(n,a,i)}static \u0275fac=function(n){return new(n||e)(A(L))};static \u0275prov=x({token:e,factory:e.\u0275fac})}return e})(),ft=new R(""),Qt=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,n){this._zone=n,t.forEach(o=>{o.manager=this});let a=t.filter(o=>!(o instanceof st));this._plugins=a.slice().reverse();let i=t.find(o=>o instanceof st);i&&this._plugins.push(i)}addEventListener(t,n,a,i){return this._findPluginFor(n).addEventListener(t,n,a,i)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(i=>i.supports(t)),!n)throw new P(5101,!1);return this._eventNameToPlugin.set(t,n),n}static \u0275fac=function(n){return new(n||e)(A(ft),A(ke))};static \u0275prov=x({token:e,factory:e.\u0275fac})}return e})(),Kt="ng-app-id";function Nr(e){for(let r of e)r.remove()}function _r(e,r){let t=r.createElement("style");return t.textContent=e,t}function io(e,r,t,n){var i;let a=(i=e.head)==null?void 0:i.querySelectorAll(`style[${Kt}="${r}"],link[${Kt}="${r}"]`);if(a)for(let o of a)o.removeAttribute(Kt),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&t.set(o.textContent,{usage:0,elements:[o]})}function Zt(e,r){let t=r.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),t}var en=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,n,a,i={}){this.doc=t,this.appId=n,this.nonce=a,io(t,n,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,n){for(let a of t)this.addUsage(a,this.inline,_r);n==null||n.forEach(a=>this.addUsage(a,this.external,Zt))}removeStyles(t,n){for(let a of t)this.removeUsage(a,this.inline);n==null||n.forEach(a=>this.removeUsage(a,this.external))}addUsage(t,n,a){let i=n.get(t);i?i.usage++:n.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,a(t,this.doc)))})}removeUsage(t,n){let a=n.get(t);a&&(a.usage--,a.usage<=0&&(Nr(a.elements),n.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Nr(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[n,{elements:a}]of this.inline)a.push(this.addElement(t,_r(n,this.doc)));for(let[n,{elements:a}]of this.external)a.push(this.addElement(t,Zt(n,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,n){return this.nonce&&n.setAttribute("nonce",this.nonce),t.appendChild(n)}static \u0275fac=function(n){return new(n||e)(A(L),A(Xt),A(et,8),A(Qe))};static \u0275prov=x({token:e,factory:e.\u0275fac})}return e})(),qt={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},tn=/%COMP%/g;var Fr="%COMP%",oo=`_nghost-${Fr}`,so=`_ngcontent-${Fr}`,lo=!0,co=new R("",{factory:()=>lo});function fo(e){return so.replace(tn,e)}function uo(e){return oo.replace(tn,e)}function jr(e,r){return r.map(t=>t.replace(tn,e))}var nn=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(t,n,a,i,o,s,l=null,c=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=a,this.removeStylesOnCompDestroy=i,this.doc=o,this.ngZone=s,this.nonce=l,this.tracingService=c,this.defaultRenderer=new Ne(t,o,s,this.tracingService)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;let a=this.getOrCreateRenderer(t,n);return a instanceof ct?a.applyToHost(t):a instanceof _e&&a.applyStyles(),a}getOrCreateRenderer(t,n){let a=this.rendererByCompId,i=a.get(n.id);if(!i){let o=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(n.encapsulation){case tt.Emulated:i=new ct(l,c,n,this.appId,d,o,s,f);break;case tt.ShadowDom:return new lt(l,t,n,o,s,this.nonce,f,c);case tt.ExperimentalIsolatedShadowDom:return new lt(l,t,n,o,s,this.nonce,f);default:i=new _e(l,c,n,d,o,s,f);break}a.set(n.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(n){return new(n||e)(A(Qt),A(en),A(Xt),A(co),A(L),A(ke),A(et),A(nt,8))};static \u0275prov=x({token:e,factory:e.\u0275fac})}return e})(),Ne=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,t,n,a){this.eventManager=r,this.doc=t,this.ngZone=n,this.tracingService=a}destroy(){}destroyNode=null;createElement(r,t){return t?this.doc.createElementNS(qt[t]||t,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,t){(Lr(r)?r.content:r).appendChild(t)}insertBefore(r,t,n){r&&(Lr(r)?r.content:r).insertBefore(t,n)}removeChild(r,t){t.remove()}selectRootElement(r,t){let n=typeof r=="string"?this.doc.querySelector(r):r;if(!n)throw new P(-5104,!1);return t||(n.textContent=""),n}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,t,n,a){if(a){t=a+":"+t;let i=qt[a];i?r.setAttributeNS(i,t,n):r.setAttribute(t,n)}else r.setAttribute(t,n)}removeAttribute(r,t,n){if(n){let a=qt[n];a?r.removeAttributeNS(a,t):r.removeAttribute(`${n}:${t}`)}else r.removeAttribute(t)}addClass(r,t){r.classList.add(t)}removeClass(r,t){r.classList.remove(t)}setStyle(r,t,n,a){a&(Pe.DashCase|Pe.Important)?r.style.setProperty(t,n,a&Pe.Important?"important":""):r.style[t]=n}removeStyle(r,t,n){n&Pe.DashCase?r.style.removeProperty(t):r.style[t]=""}setProperty(r,t,n){r!=null&&(r[t]=n)}setValue(r,t){r.nodeValue=t}listen(r,t,n,a){var o;if(typeof r=="string"&&(r=Re().getGlobalEventTarget(this.doc,r),!r))throw new P(5102,!1);let i=this.decoratePreventDefault(n);return(o=this.tracingService)!=null&&o.wrapEventListener&&(i=this.tracingService.wrapEventListener(r,t,i)),this.eventManager.addEventListener(r,t,i,a)}decoratePreventDefault(r){return t=>{if(t==="__ngUnwrap__")return r;r(t)===!1&&t.preventDefault()}}};function Lr(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var lt=class extends Ne{hostEl;sharedStylesHost;shadowRoot;constructor(r,t,n,a,i,o,s,l){var f;super(r,a,i,s),this.hostEl=t,this.sharedStylesHost=l,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=n.styles;c=jr(n.id,c);for(let g of c){let h=document.createElement("style");o&&h.setAttribute("nonce",o),h.textContent=g,this.shadowRoot.appendChild(h)}let d=(f=n.getExternalStyles)==null?void 0:f.call(n);if(d)for(let g of d){let h=Zt(g,a);o&&h.setAttribute("nonce",o),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,t){return super.appendChild(this.nodeOrShadowRoot(r),t)}insertBefore(r,t,n){return super.insertBefore(this.nodeOrShadowRoot(r),t,n)}removeChild(r,t){return super.removeChild(null,t)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},_e=class extends Ne{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,t,n,a,i,o,s,l){var d;super(r,i,o,s),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=a;let c=n.styles;this.styles=l?jr(l,c):c,this.styleUrls=(d=n.getExternalStyles)==null?void 0:d.call(n,l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&vr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ct=class extends _e{contentAttr;hostAttr;constructor(r,t,n,a,i,o,s,l){let c=a+"-"+n.id;super(r,t,n,i,o,s,l,c),this.contentAttr=fo(c),this.hostAttr=uo(c)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,t){let n=super.createElement(r,t);return super.setAttribute(n,this.contentAttr,""),n}};var ut=class e extends Pr{supportsDOMEvents=!0;static makeCurrent(){Dr(new e)}onAndCancel(r,t,n,a){return r.addEventListener(t,n,a),()=>{r.removeEventListener(t,n,a)}}dispatchEvent(r,t){r.dispatchEvent(t)}remove(r){r.remove()}createElement(r,t){return t=t||this.getDefaultDocument(),t.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,t){return t==="window"?window:t==="document"?r:t==="body"?r.body:null}getBaseHref(r){let t=ho();return t==null?null:po(t)}resetBaseElement(){Fe=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return it(document.cookie,r)}},Fe=null;function ho(){return Fe=Fe||document.head.querySelector("base"),Fe?Fe.getAttribute("href"):null}function po(e){return new URL(e,document.baseURI).pathname}var go=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||e)};static \u0275prov=x({token:e,factory:e.\u0275fac})}return e})(),zr=["alt","control","meta","shift"],vo={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},yo={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},Ur=(()=>{class e extends Oe{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,n,a,i){let o=e.parseEventName(n),s=e.eventCallback(o.fullKey,a,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Re().onAndCancel(t,o.domEventName,s,i))}static parseEventName(t){let n=t.toLowerCase().split("."),a=n.shift();if(n.length===0||!(a==="keydown"||a==="keyup"))return null;let i=e._normalizeKey(n.pop()),o="",s=n.indexOf("code");if(s>-1&&(n.splice(s,1),o="code."),zr.forEach(c=>{let d=n.indexOf(c);d>-1&&(n.splice(d,1),o+=c+".")}),o+=i,n.length!=0||i.length===0)return null;let l={};return l.domEventName=a,l.fullKey=o,l}static matchEventFullKeyCode(t,n){let a=vo[t.key]||t.key,i="";return n.indexOf("code.")>-1&&(a=t.code,i="code."),a==null||!a?!1:(a=a.toLowerCase(),a===" "?a="space":a==="."&&(a="dot"),zr.forEach(o=>{if(o!==a){let s=yo[o];s(t)&&(i+=o+".")}}),i+=a,i===n)}static eventCallback(t,n,a){return i=>{e.matchEventFullKeyCode(i,t)&&a.runGuarded(()=>n(i))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(n){return new(n||e)(A(L))};static \u0275prov=x({token:e,factory:e.\u0275fac})}return e})();async function bo(e,r,t){let n=F({rootComponent:e},wo(r,t));return kr(n)}function wo(e,r){return{platformRef:r==null?void 0:r.platformRef,appProviders:[...Ao,...(e==null?void 0:e.providers)??[]],platformProviders:So}}function To(){ut.makeCurrent()}function Eo(){return new Vt}function xo(){return or(document),document}var So=[{provide:Qe,useValue:Or},{provide:sr,useValue:To,multi:!0},{provide:L,useFactory:xo}];var Ao=[{provide:tr,useValue:"root"},{provide:Vt,useFactory:Eo},{provide:ft,useClass:st,multi:!0},{provide:ft,useClass:Ur,multi:!0},nn,en,Qt,{provide:br,useExisting:nn},{provide:ot,useClass:go},[]];var U=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r=="string"?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(t=>{let n=t.indexOf(":");if(n>0){let a=t.slice(0,n),i=t.slice(n+1).trim();this.addHeaderEntry(a,i)}})}:typeof Headers<"u"&&r instanceof Headers?(this.headers=new Map,r.forEach((t,n)=>{this.addHeaderEntry(n,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([t,n])=>{this.setHeaderEntries(t,n)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let t=this.headers.get(r.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,t){return this.clone({name:r,value:t,op:"a"})}set(r,t){return this.clone({name:r,value:t,op:"s"})}delete(r,t){return this.clone({name:r,value:t,op:"d"})}maybeSetNormalizedName(r,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,r)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init(),Array.from(r.headers.keys()).forEach(t=>{this.headers.set(t,r.headers.get(t)),this.normalizedNames.set(t,r.normalizedNames.get(t))})}clone(r){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([r]),t}applyUpdate(r){let t=r.name.toLowerCase();switch(r.op){case"a":case"s":let n=r.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(r.name,t);let a=(r.op==="a"?this.headers.get(t):void 0)||[];a.push(...n),this.headers.set(t,a);break;case"d":let i=r.value;if(!i)this.headers.delete(t),this.normalizedNames.delete(t);else{let o=this.headers.get(t);if(!o)return;o=o.filter(s=>i.indexOf(s)===-1),o.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}break}}addHeaderEntry(r,t){let n=r.toLowerCase();this.maybeSetNormalizedName(r,n),this.headers.has(n)?this.headers.get(n).push(t):this.headers.set(n,[t])}setHeaderEntries(r,t){let n=(Array.isArray(t)?t:[t]).map(i=>i.toString()),a=r.toLowerCase();this.headers.set(a,n),this.maybeSetNormalizedName(r,a)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>r(this.normalizedNames.get(t),this.headers.get(t)))}};var ht=class{map=new Map;set(r,t){return this.map.set(r,t),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}},pt=class{encodeKey(r){return $r(r)}encodeValue(r){return $r(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function Mo(e,r){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(a=>{let i=a.indexOf("="),[o,s]=i==-1?[r.decodeKey(a),""]:[r.decodeKey(a.slice(0,i)),r.decodeValue(a.slice(i+1))],l=t.get(o)||[];l.push(s),t.set(o,l)}),t}var Co=/%(\d[a-f0-9])/gi,Io={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function $r(e){return encodeURIComponent(e).replace(Co,(r,t)=>Io[t]??r)}function dt(e){return`${e}`}var G=class e{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new pt,r.fromString){if(r.fromObject)throw new P(2805,!1);this.map=Mo(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(t=>{let n=r.fromObject[t],a=Array.isArray(n)?n.map(dt):[dt(n)];this.map.set(t,a)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let t=this.map.get(r);return t?t[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,t){return this.clone({param:r,value:t,op:"a"})}appendAll(r){let t=[];return Object.keys(r).forEach(n=>{let a=r[n];Array.isArray(a)?a.forEach(i=>{t.push({param:n,value:i,op:"a"})}):t.push({param:n,value:a,op:"a"})}),this.clone(t)}set(r,t){return this.clone({param:r,value:t,op:"s"})}delete(r,t){return this.clone({param:r,value:t,op:"d"})}toString(){return this.init(),this.keys().map(r=>{let t=this.encoder.encodeKey(r);return this.map.get(r).map(n=>t+"="+this.encoder.encodeValue(n)).join("&")}).filter(r=>r!=="").join("&")}clone(r){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(r),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(r=>this.map.set(r,this.cloneFrom.map.get(r))),this.updates.forEach(r=>{switch(r.op){case"a":case"s":let t=(r.op==="a"?this.map.get(r.param):void 0)||[];t.push(dt(r.value)),this.map.set(r.param,t);break;case"d":if(r.value!==void 0){let n=this.map.get(r.param)||[],a=n.indexOf(dt(r.value));a!==-1&&n.splice(a,1),n.length>0?this.map.set(r.param,n):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null)}};function ko(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Br(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Hr(e){return typeof Blob<"u"&&e instanceof Blob}function Wr(e){return typeof FormData<"u"&&e instanceof FormData}function Do(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var je="Content-Type",gt="Accept",Xr="text/plain",Yr="application/json",Gr=`${Yr}, ${Xr}, */*`,ye=class e{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(r,t,n,a){this.url=t,this.method=r.toUpperCase();let i;if(ko(this.method)||a?(this.body=n!==void 0?n:null,i=a):i=n,i){if(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,this.keepalive=!!i.keepalive,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),i.priority&&(this.priority=i.priority),i.cache&&(this.cache=i.cache),i.credentials&&(this.credentials=i.credentials),typeof i.timeout=="number"){if(i.timeout<1||!Number.isInteger(i.timeout))throw new P(2822,"");this.timeout=i.timeout}i.mode&&(this.mode=i.mode),i.redirect&&(this.redirect=i.redirect),i.integrity&&(this.integrity=i.integrity),i.referrer!==void 0&&(this.referrer=i.referrer),i.referrerPolicy&&(this.referrerPolicy=i.referrerPolicy),this.transferCache=i.transferCache}if(this.headers??=new U,this.context??=new ht,!this.params)this.params=new G,this.urlWithParams=t;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=t;else{let s=t.indexOf("?"),l=s===-1?"?":s<t.length-1?"&":"";this.urlWithParams=t+l+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Br(this.body)||Hr(this.body)||Wr(this.body)||Do(this.body)?this.body:this.body instanceof G?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Wr(this.body)?null:Hr(this.body)?this.body.type||null:Br(this.body)?null:typeof this.body=="string"?Xr:this.body instanceof G?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Yr:null}clone(r={}){let t=r.method||this.method,n=r.url||this.url,a=r.responseType||this.responseType,i=r.keepalive??this.keepalive,o=r.priority||this.priority,s=r.cache||this.cache,l=r.mode||this.mode,c=r.redirect||this.redirect,d=r.credentials||this.credentials,f=r.referrer??this.referrer,g=r.integrity||this.integrity,h=r.referrerPolicy||this.referrerPolicy,S=r.transferCache??this.transferCache,T=r.timeout??this.timeout,m=r.body!==void 0?r.body:this.body,y=r.withCredentials??this.withCredentials,b=r.reportProgress??this.reportProgress,M=r.headers||this.headers,E=r.params||this.params,k=r.context??this.context;return r.setHeaders!==void 0&&(M=Object.keys(r.setHeaders).reduce((I,O)=>I.set(O,r.setHeaders[O]),M)),r.setParams&&(E=Object.keys(r.setParams).reduce((I,O)=>I.set(O,r.setParams[O]),E)),new e(t,n,m,{params:E,headers:M,context:k,reportProgress:b,responseType:a,withCredentials:y,transferCache:S,keepalive:i,cache:s,priority:o,timeout:T,mode:l,redirect:c,credentials:d,referrer:f,integrity:g,referrerPolicy:h})}},J=(function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e})(J||{}),be=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(r,t=200,n="OK"){this.headers=r.headers||new U,this.status=r.status!==void 0?r.status:t,this.statusText=r.statusText||n,this.url=r.url||null,this.redirected=r.redirected,this.responseType=r.responseType,this.ok=this.status>=200&&this.status<300}},ze=class e extends be{constructor(r={}){super(r)}type=J.ResponseHeader;clone(r={}){return new e({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}},ce=class e extends be{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=J.Response;clone(r={}){return new e({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0,redirected:r.redirected??this.redirected,responseType:r.responseType??this.responseType})}},X=class extends be{name="HttpErrorResponse";message;error;ok=!1;constructor(r){super(r,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||"(unknown url)"}`:this.message=`Http failure response for ${r.url||"(unknown url)"}: ${r.status} ${r.statusText}`,this.error=r.error||null}},Jr=200,Po=204;var Ro=/^\)\]\}',?\n/,Kr=new R(""),mt=(()=>{var r;class e{fetchImpl=((r=w(an,{optional:!0}))==null?void 0:r.fetch)??((...n)=>globalThis.fetch(...n));ngZone=w(ke);destroyRef=w(rr);handle(n){return new Ut(a=>{let i=new AbortController;this.doRequest(n,i.signal,a).then(on,s=>a.error(new X({error:s})));let o;return n.timeout&&(o=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{i.signal.aborted||i.abort(new DOMException("signal timed out","TimeoutError"))},n.timeout))),()=>{o!==void 0&&clearTimeout(o),i.abort()}})}async doRequest(n,a,i){let o=this.createRequestInit(n),s;try{let m=this.ngZone.runOutsideAngular(()=>this.fetchImpl(n.urlWithParams,F({signal:a},o)));Oo(m),i.next({type:J.Sent}),s=await m}catch(m){i.error(new X({error:m,status:m.status??0,statusText:m.statusText,url:n.urlWithParams,headers:m.headers}));return}let l=new U(s.headers),c=s.statusText,d=s.url||n.urlWithParams,f=s.status,g=null;if(n.reportProgress&&i.next(new ze({headers:l,status:f,statusText:c,url:d})),s.body){let m=s.headers.get("content-length"),y=[],b=s.body.getReader(),M=0,E,k,I=typeof Zone<"u"&&Zone.current,O=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await b.cancel(),O=!0;break}let{done:z,value:D}=await b.read();if(z)break;if(y.push(D),M+=D.length,n.reportProgress){k=n.responseType==="text"?(k??"")+(E??=new TextDecoder).decode(D,{stream:!0}):void 0;let W=()=>i.next({type:J.DownloadProgress,total:m?+m:void 0,loaded:M,partialText:k});I?I.run(W):W()}}}),O){i.complete();return}let H=this.concatChunks(y,M);try{let z=s.headers.get(je)??"";g=this.parseBody(n,H,z,f)}catch(z){i.error(new X({error:z,headers:new U(s.headers),status:s.status,statusText:s.statusText,url:s.url||n.urlWithParams}));return}}f===0&&(f=g?Jr:0);let h=f>=200&&f<300,S=s.redirected,T=s.type;h?(i.next(new ce({body:g,headers:l,status:f,statusText:c,url:d,redirected:S,responseType:T})),i.complete()):i.error(new X({error:g,headers:l,status:f,statusText:c,url:d,redirected:S,responseType:T}))}parseBody(n,a,i,o){switch(n.responseType){case"json":let s=new TextDecoder().decode(a).replace(Ro,"");if(s==="")return null;try{return JSON.parse(s)}catch(l){if(o<200||o>=300)return s;throw l}case"text":return new TextDecoder().decode(a);case"blob":return new Blob([a],{type:i});case"arraybuffer":return a.buffer}}createRequestInit(n){let a={},i;if(i=n.credentials,n.withCredentials&&(i="include"),n.headers.forEach((o,s)=>a[o]=s.join(",")),n.headers.has(gt)||(a[gt]=Gr),!n.headers.has(je)){let o=n.detectContentTypeHeader();o!==null&&(a[je]=o)}return{body:n.serializeBody(),method:n.method,headers:a,credentials:i,keepalive:n.keepalive,cache:n.cache,priority:n.priority,mode:n.mode,redirect:n.redirect,referrer:n.referrer,integrity:n.integrity,referrerPolicy:n.referrerPolicy}}concatChunks(n,a){let i=new Uint8Array(a),o=0;for(let s of n)i.set(s,o),o+=s.length;return i}static \u0275fac=function(a){return new(a||e)};static \u0275prov=x({token:e,factory:e.\u0275fac})}return e})(),an=class{};function on(){}function Oo(e){e.then(on,on)}var No=/^\)\]\}',?\n/;var sn=(()=>{class e{xhrFactory;tracingService=w(nt,{optional:!0});constructor(t){this.xhrFactory=t}maybePropagateTrace(t){var n;return(n=this.tracingService)!=null&&n.propagate?this.tracingService.propagate(t):t}handle(t){if(t.method==="JSONP")throw new P(-2800,!1);let n=this.xhrFactory;return V(null).pipe(Ie(()=>new Ut(i=>{let o=n.build();if(o.open(t.method,t.urlWithParams),t.withCredentials&&(o.withCredentials=!0),t.headers.forEach((m,y)=>o.setRequestHeader(m,y.join(","))),t.headers.has(gt)||o.setRequestHeader(gt,Gr),!t.headers.has(je)){let m=t.detectContentTypeHeader();m!==null&&o.setRequestHeader(je,m)}if(t.timeout&&(o.timeout=t.timeout),t.responseType){let m=t.responseType.toLowerCase();o.responseType=m!=="json"?m:"text"}let s=t.serializeBody(),l=null,c=()=>{if(l!==null)return l;let m=o.statusText||"OK",y=new U(o.getAllResponseHeaders()),b=o.responseURL||t.url;return l=new ze({headers:y,status:o.status,statusText:m,url:b}),l},d=this.maybePropagateTrace(()=>{let{headers:m,status:y,statusText:b,url:M}=c(),E=null;y!==Po&&(E=typeof o.response>"u"?o.responseText:o.response),y===0&&(y=E?Jr:0);let k=y>=200&&y<300;if(t.responseType==="json"&&typeof E=="string"){let I=E;E=E.replace(No,"");try{E=E!==""?JSON.parse(E):null}catch(O){E=I,k&&(k=!1,E={error:O,text:E})}}k?(i.next(new ce({body:E,headers:m,status:y,statusText:b,url:M||void 0})),i.complete()):i.error(new X({error:E,headers:m,status:y,statusText:b,url:M||void 0}))}),f=this.maybePropagateTrace(m=>{let{url:y}=c(),b=new X({error:m,status:o.status||0,statusText:o.statusText||"Unknown Error",url:y||void 0});i.error(b)}),g=f;t.timeout&&(g=this.maybePropagateTrace(m=>{let{url:y}=c(),b=new X({error:new DOMException("Request timed out","TimeoutError"),status:o.status||0,statusText:o.statusText||"Request timeout",url:y||void 0});i.error(b)}));let h=!1,S=this.maybePropagateTrace(m=>{h||(i.next(c()),h=!0);let y={type:J.DownloadProgress,loaded:m.loaded};m.lengthComputable&&(y.total=m.total),t.responseType==="text"&&o.responseText&&(y.partialText=o.responseText),i.next(y)}),T=this.maybePropagateTrace(m=>{let y={type:J.UploadProgress,loaded:m.loaded};m.lengthComputable&&(y.total=m.total),i.next(y)});return o.addEventListener("load",d),o.addEventListener("error",f),o.addEventListener("timeout",g),o.addEventListener("abort",f),t.reportProgress&&(o.addEventListener("progress",S),s!==null&&o.upload&&o.upload.addEventListener("progress",T)),o.send(s),i.next({type:J.Sent}),()=>{o.removeEventListener("error",f),o.removeEventListener("abort",f),o.removeEventListener("load",d),o.removeEventListener("timeout",g),t.reportProgress&&(o.removeEventListener("progress",S),s!==null&&o.upload&&o.upload.removeEventListener("progress",T)),o.readyState!==o.DONE&&o.abort()}})))}static \u0275fac=function(n){return new(n||e)(A(ot))};static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),_o=new R("",{factory:()=>!0}),Lo="XSRF-TOKEN",Fo=new R("",{factory:()=>Lo}),jo="X-XSRF-TOKEN",zo=new R("",{factory:()=>jo}),Uo=(()=>{class e{cookieName=w(Fo);doc=w(L);lastCookieString="";lastToken=null;parseCount=0;getToken(){let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=it(t,this.cookieName),this.lastCookieString=t),this.lastToken}static \u0275fac=function(n){return new(n||e)};static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),qr=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=x({token:e,factory:function(n){let a=null;return n?a=new(n||e):a=A(Uo),a},providedIn:"root"})}return e})();function Zr(e,r){if(!w(_o)||e.method==="GET"||e.method==="HEAD")return r(e);try{let a=w(Rr).href,{origin:i}=new URL(a),{origin:o}=new URL(e.url,i);if(i!==o)return r(e)}catch{return r(e)}let t=w(qr).getToken(),n=w(zo);return t!=null&&!e.headers.has(n)&&(e=e.clone({headers:e.headers.set(n,t)})),r(e)}function $o(e,r){return r(e)}function Bo(e,r,t){return(n,a)=>nr(t,()=>r(n,i=>e(i,a)))}var Qr=new R("",{factory:()=>[Zr]}),ln=new R(""),ea=new R("",{factory:()=>!0});var yt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=x({token:e,factory:function(n){let a=null;return n?a=new(n||e):a=A(sn),a},providedIn:"root"})}return e})();var vt=(()=>{class e{backend;injector;chain=null;pendingTasks=w(ar);contributeToStability=w(ea);constructor(t,n){this.backend=t,this.injector=n}handle(t){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Qr),...this.injector.get(ln,[])]));this.chain=n.reduceRight((a,i)=>Bo(a,i,this.injector),$o)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(t,a=>this.backend.handle(a)).pipe(er(n))}else return this.chain(t,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||e)(A(yt),A(Wt))};static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),cn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=x({token:e,factory:function(n){let a=null;return n?a=new(n||e):a=A(vt),a},providedIn:"root"})}return e})();function rn(e,r){return{body:r,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,credentials:e.credentials,transferCache:e.transferCache,timeout:e.timeout,keepalive:e.keepalive,priority:e.priority,cache:e.cache,mode:e.mode,redirect:e.redirect,integrity:e.integrity,referrer:e.referrer,referrerPolicy:e.referrerPolicy}}var ta=(()=>{class e{handler;constructor(t){this.handler=t}request(t,n,a={}){let i;if(t instanceof ye)i=t;else{let l;a.headers instanceof U?l=a.headers:l=new U(a.headers);let c;a.params&&(a.params instanceof G?c=a.params:c=new G({fromObject:a.params})),i=new ye(t,n,a.body!==void 0?a.body:null,{headers:l,context:a.context,params:c,reportProgress:a.reportProgress,responseType:a.responseType||"json",withCredentials:a.withCredentials,transferCache:a.transferCache,keepalive:a.keepalive,priority:a.priority,cache:a.cache,mode:a.mode,redirect:a.redirect,credentials:a.credentials,referrer:a.referrer,referrerPolicy:a.referrerPolicy,integrity:a.integrity,timeout:a.timeout})}let o=V(i).pipe(qe(l=>this.handler.handle(l)));if(t instanceof ye||a.observe==="events")return o;let s=o.pipe(Qn(l=>l instanceof ce));switch(a.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return s.pipe(te(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new P(2806,!1);return l.body}));case"blob":return s.pipe(te(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new P(2807,!1);return l.body}));case"text":return s.pipe(te(l=>{if(l.body!==null&&typeof l.body!="string")throw new P(2808,!1);return l.body}));default:return s.pipe(te(l=>l.body))}case"response":return s;default:throw new P(2809,!1)}}delete(t,n={}){return this.request("DELETE",t,n)}get(t,n={}){return this.request("GET",t,n)}head(t,n={}){return this.request("HEAD",t,n)}jsonp(t,n){return this.request("JSONP",t,{params:new G().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,n={}){return this.request("OPTIONS",t,n)}patch(t,n,a={}){return this.request("PATCH",t,rn(a,n))}post(t,n,a={}){return this.request("POST",t,rn(a,n))}put(t,n,a={}){return this.request("PUT",t,rn(a,n))}static \u0275fac=function(n){return new(n||e)(A(cn))};static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var fn=(function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e})(fn||{});function Ho(e,r){return{\u0275kind:e,\u0275providers:r}}function Wo(...e){let r=[ta,vt,{provide:cn,useExisting:vt},{provide:yt,useFactory:()=>w(Kr,{optional:!0})??w(sn)},{provide:Qr,useValue:Zr,multi:!0}];for(let t of e)r.push(...t.\u0275providers);return Ze(r)}function Vo(){return Ho(fn.Fetch,[mt,{provide:Kr,useExisting:mt},{provide:yt,useExisting:mt}])}var Xo=new R(""),Yo="b",Go="h",Jo="s",Ko="st",qo="u",Zo="rt",un=new R(""),Qo=["GET","HEAD"];function oa(e,r){var s;let o=r,{isCacheActive:t}=o,n=qn(o,["isCacheActive"]),{transferCache:a,method:i}=e;return!(!t||a===!1||rs(e)||i==="POST"&&!n.includePostRequests&&!a||i!=="POST"&&!Qo.includes(i)||!n.includeRequestsWithAuthHeaders&&ns(e)||is(e.headers)||os(e.cache)||((s=n.filter)==null?void 0:s.call(n,e))===!1)}function es(e,r,t,n,a,i=!1){if(!i&&!oa(e,r))return null;if(n)throw new P(2803,!1);if(!a){let T=e.url;a=sa(e,T)}let o=t.get(a,null);if(!o)return null;let{[Yo]:s,[Zo]:l,[Go]:c,[Jo]:d,[Ko]:f,[qo]:g}=o,h=s;switch(l){case"arraybuffer":h=ra(s);break;case"blob":h=new Blob([ra(s)]);break}let S=new U(c);return new ce({body:h,headers:S,status:d,statusText:f,url:g})}function ts(e,r){let t=w(un);if(!oa(e,t))return r(e);let n=w(lr),a=w(Xo,{optional:!0}),i=e.url,o=sa(e,i),s=es(e,t,n,null,o,!0);return s?V(s):r(e)}function ns(e){let r=e.headers;return r.has("authorization")||r.has("proxy-authorization")||r.has("cookie")}function rs(e){let{withCredentials:r,credentials:t}=e;return r||t==="include"||t==="same-origin"}var as=new Set(["no-store","private","no-cache"]);function is(e){let r=e.get("cache-control");return r?r.split(",").some(t=>{let n=t.split("=",1)[0].trim().toLowerCase();return as.has(n)}):!1}function os(e){return e==="no-cache"||e==="no-store"}function na(e){let r=new URLSearchParams(e instanceof URLSearchParams?e:e.toString());return r.sort(),r.toString()}function sa(e,r){let{params:t,method:n,responseType:a}=e,i=na(t),o=e.serializeBody();o instanceof URLSearchParams?o=na(o):typeof o!="string"&&(o="");let s=[n,a,r,o,i].join("|"),l=ls(s);return l}function ra(e){let r=atob(e);return Uint8Array.from(r,n=>n.charCodeAt(0)).buffer}function la(e){return[{provide:un,useFactory:()=>(yr("NgHttpTransferCache"),F({isCacheActive:!0},e))},{provide:ln,useValue:ts,multi:!0},{provide:Tr,multi:!0,useFactory:()=>{let r=w(Jt),t=w(un);return()=>{r.whenStable().then(()=>{t.isCacheActive=!1})}}}]}var ss=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),aa;function ls(e){aa??=new TextEncoder;let r=aa.encode(e),t=1779033703,n=3144134277,a=1013904242,i=2773480762,o=1359893119,s=2600822924,l=528734635,c=1541459225,d=r.length*8,f=(r.length+8>>6)+1<<6,g=new Uint8Array(f);g.set(r),g[r.length]=128;let h=new DataView(g.buffer),S=d>>>0,T=d/4294967296>>>0;h.setUint32(f-8,T,!1),h.setUint32(f-4,S,!1);let m=new Uint32Array(64);for(let y=0;y<f;y+=64){for(let D=0;D<16;D++)m[D]=h.getUint32(y+D*4,!1);for(let D=16;D<64;D++){let W=m[D-15],Ft=((W>>>7|W<<25)^(W>>>18|W<<14)^W>>>3)>>>0,ee=m[D-2],jt=((ee>>>17|ee<<15)^(ee>>>19|ee<<13)^ee>>>10)>>>0;m[D]=m[D-16]+Ft+m[D-7]+jt>>>0}let b=t,M=n,E=a,k=i,I=o,O=s,H=l,z=c;for(let D=0;D<64;D++){let W=((I>>>6|I<<26)^(I>>>11|I<<21)^(I>>>25|I<<7))>>>0,Ft=(I&O^~I&H)>>>0,ee=z+W+Ft+ss[D]+m[D]>>>0,jt=((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))>>>0,ro=(b&M^b&E^M&E)>>>0,ao=jt+ro>>>0;z=H,H=O,O=I,I=k+ee>>>0,k=E,E=M,M=b,b=ee+ao>>>0}t=t+b>>>0,n=n+M>>>0,a=a+E>>>0,i=i+k>>>0,o=o+I>>>0,s=s+O>>>0,l=l+H>>>0,c=c+z>>>0}return[t,n,a,i,o,s,l,c].map(y=>y.toString(16).padStart(8,"0")).join("")}var Hd=(()=>{class e{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(n){return new(n||e)(A(L))};static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var mn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275prov=x({token:e,factory:function(n){let a=null;return n?a=new(n||e):a=A(cs),a},providedIn:"root"})}return e})(),cs=(()=>{class e extends mn{_doc;constructor(t){super(),this._doc=t}sanitize(t,n){if(n==null)return null;switch(t){case le.NONE:return n;case le.HTML:return ge(n,"HTML")?pe(n):pr(this._doc,String(n)).toString();case le.STYLE:return ge(n,"Style")?pe(n):n;case le.SCRIPT:if(ge(n,"Script"))return pe(n);throw new P(5200,!1);case le.URL:return ge(n,"URL")?pe(n):hr(String(n));case le.RESOURCE_URL:if(ge(n,"ResourceURL"))return pe(n);throw new P(5201,!1);default:throw new P(5202,!1)}}bypassSecurityTrustHtml(t){return cr(t)}bypassSecurityTrustStyle(t){return fr(t)}bypassSecurityTrustScript(t){return ur(t)}bypassSecurityTrustUrl(t){return dr(t)}bypassSecurityTrustResourceUrl(t){return mr(t)}static \u0275fac=function(n){return new(n||e)(A(L))};static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),dn=(function(e){return e[e.NoHttpTransferCache=0]="NoHttpTransferCache",e[e.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",e[e.I18nSupport=2]="I18nSupport",e[e.EventReplay=3]="EventReplay",e[e.IncrementalHydration=4]="IncrementalHydration",e})(dn||{});function Wd(...e){let r=[],t=new Set;for(let{\u0275providers:a,\u0275kind:i}of e)t.add(i),a.length&&r.push(a);let n=t.has(dn.HttpTransferCacheOptions);return Ze([[],[],Cr(),t.has(dn.NoHttpTransferCache)||n?[]:la({}),r])}var Be=class{},fs=(()=>{class e{handle(t){return t.key}static \u0275fac=function(n){return new(n||e)};static \u0275prov=x({token:e,factory:e.\u0275fac})}return e})(),we=class{},us=(()=>{class e extends we{compile(t,n){return t}compileTranslations(t,n){return t}static \u0275fac=(()=>{let t;return function(a){return(t||(t=De(e)))(a||e)}})();static \u0275prov=x({token:e,factory:e.\u0275fac})}return e})(),Te=class{},ds=(()=>{class e extends Te{getTranslation(t){return V({})}static \u0275fac=(()=>{let t;return function(a){return(t||(t=De(e)))(a||e)}})();static \u0275prov=x({token:e,factory:e.\u0275fac})}return e})();function bt(e,r){if(e===r)return!0;if(e===null||r===null)return!1;if(e!==e&&r!==r)return!0;let t=typeof e,n=typeof r,a;if(t==n&&t=="object")if(Array.isArray(e)){if(!Array.isArray(r))return!1;if((a=e.length)==r.length){for(let i=0;i<a;i++)if(!bt(e[i],r[i]))return!1;return!0}}else{if(Array.isArray(r))return!1;if(K(e)&&K(r)){let i=Object.create(null);for(let o in e){if(!bt(e[o],r[o]))return!1;i[o]=!0}for(let o in r)if(!(o in i)&&typeof r[o]<"u")return!1;return!0}}return!1}function ne(e){return typeof e<"u"&&e!==null}function ca(e){return e!==void 0}function K(e){return $e(e)&&!fe(e)&&e!==null}function $e(e){return typeof e=="object"&&e!==null}function fe(e){return Array.isArray(e)}function wt(e){return typeof e=="string"}function ms(e){return typeof e=="function"}function Tt(e){if(fe(e))return e.map(r=>Tt(r));if(K(e)){let r={};return Object.keys(e).forEach(t=>{r[t]=Tt(e[t])}),r}else return e}function vn(e,r){if(!$e(e))return Tt(r);let t=Tt(e);return $e(t)&&$e(r)&&Object.keys(r).forEach(n=>{K(r[n])?n in e?t[n]=vn(e[n],r[n]):Object.assign(t,{[n]:r[n]}):Object.assign(t,{[n]:r[n]})}),t}function ua(e,r){let t=r.split(".");r="";do{r+=t.shift();let n=!t.length;if(ne(e)){if(K(e)&&ca(e[r])&&(K(e[r])||fe(e[r])||n)){e=e[r],r="";continue}if(fe(e)){let a=parseInt(r,10);if(ca(e[a])&&(K(e[a])||fe(e[a])||n)){e=e[a],r="";continue}}}if(n){e=void 0;continue}r+="."}while(t.length);return e}function hs(e,r,t){return vn(e,ps(r,t))}function ps(e,r){return e.split(".").reduceRight((t,n)=>({[n]:t}),r)}var Ee=class{},gs=(()=>{class e extends Ee{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(t,n){if(wt(t))return this.interpolateString(t,n);if(ms(t))return this.interpolateFunction(t,n)}interpolateFunction(t,n){return t(n)}interpolateString(t,n){return n?t.replace(this.templateMatcher,(a,i)=>{let o=this.getInterpolationReplacement(n,i);return o!==void 0?o:a}):t}getInterpolationReplacement(t,n){return this.formatValue(ua(t,n))}formatValue(t){if(wt(t))return t;if(typeof t=="number"||typeof t=="boolean")return t.toString();if(t===null)return"null";if(fe(t))return t.join(", ");if($e(t))return typeof t.toString=="function"&&t.toString!==Object.prototype.toString?t.toString():JSON.stringify(t)}static \u0275fac=(()=>{let t;return function(a){return(t||(t=De(e)))(a||e)}})();static \u0275prov=x({token:e,factory:e.\u0275fac})}return e})(),hn=(()=>{class e{_onTranslationChange=new Ke;_onLangChange=new Ke;_onFallbackLangChange=new Ke;fallbackLang=null;currentLang;translations={};languages=[];getTranslations(t){return this.translations[t]}setTranslations(t,n,a){this.translations[t]=a&&this.hasTranslationFor(t)?vn(this.translations[t],n):n,this.addLanguages([t]),this._onTranslationChange.next({lang:t,translations:this.getTranslations(t)})}getLanguages(){return this.languages}getCurrentLang(){return this.currentLang}getFallbackLang(){return this.fallbackLang}setFallbackLang(t,n=!0){this.fallbackLang=t,n&&this._onFallbackLangChange.next({lang:t,translations:this.translations[t]})}setCurrentLang(t,n=!0){this.currentLang=t,n&&this._onLangChange.next({lang:t,translations:this.translations[t]})}get onTranslationChange(){return this._onTranslationChange.asObservable()}get onLangChange(){return this._onLangChange.asObservable()}get onFallbackLangChange(){return this._onFallbackLangChange.asObservable()}addLanguages(t){this.languages=Array.from(new Set([...this.languages,...t]))}hasTranslationFor(t){return typeof this.translations[t]<"u"}deleteTranslations(t){delete this.translations[t]}getTranslation(t){let n=this.getValue(this.currentLang,t);return n===void 0&&this.fallbackLang!=null&&this.fallbackLang!==this.currentLang&&(n=this.getValue(this.fallbackLang,t)),n}getValue(t,n){return ua(this.getTranslations(t),n)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=x({token:e,factory:e.\u0275fac})}return e})(),pn=new R("TRANSLATE_CONFIG"),Ue=e=>se(e)?e:V(e);var gn=(()=>{class e{loadingTranslations;pending=!1;_translationRequests={};lastUseLanguage=null;currentLoader=w(Te);compiler=w(we);parser=w(Ee);missingTranslationHandler=w(Be);store=w(hn);extend=!1;get onTranslationChange(){return this.store.onTranslationChange}get onLangChange(){return this.store.onLangChange}get onFallbackLangChange(){return this.store.onFallbackLangChange}get onDefaultLangChange(){return this.store.onFallbackLangChange}constructor(){let t=F({extend:!1,fallbackLang:null},w(pn,{optional:!0}));t.lang&&this.use(t.lang),t.fallbackLang&&this.setFallbackLang(t.fallbackLang),t.extend&&(this.extend=!0)}setFallbackLang(t){this.getFallbackLang()||this.store.setFallbackLang(t,!1);let n=this.loadOrExtendLanguage(t);return se(n)?(n.pipe(Ce(1)).subscribe({next:()=>{this.store.setFallbackLang(t)},error:()=>{}}),n):(this.store.setFallbackLang(t),V(this.store.getTranslations(t)))}use(t){this.lastUseLanguage=t,this.getCurrentLang()||this.store.setCurrentLang(t,!1);let n=this.loadOrExtendLanguage(t);return se(n)?(n.pipe(Ce(1)).subscribe({next:()=>{this.changeLang(t)},error:()=>{}}),n):(this.changeLang(t),V(this.store.getTranslations(t)))}loadOrExtendLanguage(t){if(!this.store.hasTranslationFor(t)||this.extend)return this._translationRequests[t]=this._translationRequests[t]||this.loadAndCompileTranslations(t),this._translationRequests[t]}changeLang(t){t===this.lastUseLanguage&&this.store.setCurrentLang(t)}getCurrentLang(){return this.store.getCurrentLang()}loadAndCompileTranslations(t){this.pending=!0;let n=this.currentLoader.getTranslation(t).pipe(Ht(1),Ce(1));return this.loadingTranslations=n.pipe(te(a=>this.compiler.compileTranslations(a,t)),Ht(1),Ce(1)),this.loadingTranslations.subscribe({next:a=>{this.store.setTranslations(t,a,this.extend),this.pending=!1},error:a=>{this.pending=!1}}),n}setTranslation(t,n,a=!1){let i=this.compiler.compileTranslations(n,t);this.store.setTranslations(t,i,a||this.extend)}getLangs(){return this.store.getLanguages()}addLangs(t){this.store.addLanguages(t)}getParsedResultForKey(t,n){let a=this.getTextToInterpolate(t);if(ne(a))return this.runInterpolation(a,n);let i=this.missingTranslationHandler.handle(F({key:t,translateService:this},n!==void 0&&{interpolateParams:n}));return i!==void 0?i:t}getFallbackLang(){return this.store.getFallbackLang()}getTextToInterpolate(t){return this.store.getTranslation(t)}runInterpolation(t,n){if(ne(t))return fe(t)?this.runInterpolationOnArray(t,n):K(t)?this.runInterpolationOnDict(t,n):this.parser.interpolate(t,n)}runInterpolationOnArray(t,n){return t.map(a=>this.runInterpolation(a,n))}runInterpolationOnDict(t,n){let a={};for(let i in t){let o=this.runInterpolation(t[i],n);o!==void 0&&(a[i]=o)}return a}getParsedResult(t,n){return t instanceof Array?this.getParsedResultForArray(t,n):this.getParsedResultForKey(t,n)}getParsedResultForArray(t,n){let a={},i=!1;for(let s of t)a[s]=this.getParsedResultForKey(s,n),i=i||se(a[s]);if(!i)return a;let o=t.map(s=>Ue(a[s]));return Zn(o).pipe(te(s=>{let l={};return s.forEach((c,d)=>{l[t[d]]=c}),l}))}get(t,n){if(!ne(t)||!t.length)throw new Error('Parameter "key" is required and cannot be empty');return this.pending?this.loadingTranslations.pipe(qe(()=>Ue(this.getParsedResult(t,n)))):Ue(this.getParsedResult(t,n))}getStreamOnTranslationChange(t,n){if(!ne(t)||!t.length)throw new Error('Parameter "key" is required and cannot be empty');return $t(Bt(()=>this.get(t,n)),this.onTranslationChange.pipe(Ie(()=>{let a=this.getParsedResult(t,n);return Ue(a)})))}stream(t,n){if(!ne(t)||!t.length)throw new Error('Parameter "key" required');return $t(Bt(()=>this.get(t,n)),this.onLangChange.pipe(Ie(()=>{let a=this.getParsedResult(t,n);return Ue(a)})))}instant(t,n){if(!ne(t)||t.length===0)throw new Error('Parameter "key" is required and cannot be empty');let a=this.getParsedResult(t,n);return se(a)?Array.isArray(t)?t.reduce((i,o)=>(i[o]=o,i),{}):t:a}set(t,n,a=this.getCurrentLang()){this.store.setTranslations(a,hs(this.store.getTranslations(a),t,wt(n)?this.compiler.compile(n,a):this.compiler.compileTranslations(n,a)),!1)}reloadLang(t){return this.resetLang(t),this.loadAndCompileTranslations(t)}resetLang(t){delete this._translationRequests[t],this.store.deleteTranslations(t)}static getBrowserLang(){if(typeof window>"u"||!window.navigator)return;let t=this.getBrowserCultureLang();return t?t.split(/[-_]/)[0]:void 0}static getBrowserCultureLang(){if(!(typeof window>"u"||typeof window.navigator>"u"))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}getBrowserLang(){return e.getBrowserLang()}getBrowserCultureLang(){return e.getBrowserCultureLang()}get defaultLang(){return this.getFallbackLang()}get currentLang(){return this.store.getCurrentLang()}get langs(){return this.store.getLanguages()}setDefaultLang(t){return this.setFallbackLang(t)}getDefaultLang(){return this.getFallbackLang()}static \u0275fac=function(n){return new(n||e)};static \u0275prov=x({token:e,factory:e.\u0275fac})}return e})();var nm=(()=>{class e{translate=w(gn);_ref=w(Ir);value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onFallbackLangChange;updateValue(t,n,a){let i=o=>{this.value=o!==void 0?o:t,this.lastKey=t,this._ref.markForCheck()};if(a){let o=this.translate.getParsedResult(t,n);se(o)?o.subscribe(i):i(o)}this.translate.get(t,n).subscribe(i)}transform(t,...n){if(!t||!t.length)return t;if(bt(t,this.lastKey)&&bt(n,this.lastParams))return this.value;let a;if(ne(n[0])&&n.length)if(wt(n[0])&&n[0].length){let i=n[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g,'"$2":').replace(/:(\s)?(')(.*?)(')/g,':"$3"');try{a=JSON.parse(i)}catch(o){throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${n[0]}`)}}else K(n[0])&&(a=n[0]);return this.lastKey=t,this.lastParams=n,this.updateValue(t,a),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(i=>{(this.lastKey&&i.lang===this.translate.getCurrentLang()||i.lang===this.translate.getFallbackLang())&&(this.lastKey=null,this.updateValue(t,a,i.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(i=>{this.lastKey&&(this.lastKey=null,this.updateValue(t,a,i.translations))})),this.onFallbackLangChange||(this.onFallbackLangChange=this.translate.onFallbackLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(t,a))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onFallbackLangChange<"u"&&(this.onFallbackLangChange.unsubscribe(),this.onFallbackLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(n){return new(n||e)};static \u0275pipe=wr({name:"translate",type:e,pure:!1});static \u0275prov=x({token:e,factory:e.\u0275fac})}return e})();function vs(e){return{provide:Te,useClass:e}}function ys(e){return{provide:we,useClass:e}}function bs(e){return{provide:Ee,useClass:e}}function ws(e){return{provide:Be,useClass:e}}function fa(e={},r){let t=[];e.loader&&t.push(e.loader),e.compiler&&t.push(e.compiler),e.parser&&t.push(e.parser),e.missingTranslationHandler&&t.push(e.missingTranslationHandler),r&&t.push(hn),(e.useDefaultLang||e.defaultLanguage)&&(console.warn("The `useDefaultLang` and `defaultLanguage` options are deprecated. Please use `fallbackLang` instead."),e.useDefaultLang===!0&&e.defaultLanguage&&(e.fallbackLang=e.defaultLanguage));let n={fallbackLang:e.fallbackLang??null,lang:e.lang,extend:e.extend??!1};return t.push({provide:pn,useValue:n}),t.push({provide:gn,useClass:gn,deps:[hn,Te,we,Ee,Be,pn]}),t}var rm=(()=>{class e{static forRoot(t={}){return{ngModule:e,providers:[...fa(F({compiler:ys(us),parser:bs(gs),loader:vs(ds),missingTranslationHandler:ws(fs)},t),!0)]}}static forChild(t={}){return{ngModule:e,providers:[...fa(t,t.isolate??!1)]}}static \u0275fac=function(n){return new(n||e)};static \u0275mod=ve({type:e});static \u0275inj=he({})}return e})();function xn(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function Ts(e){if(Array.isArray(e))return e}function Es(e){if(Array.isArray(e))return xn(e)}function xs(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function da(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Wa(n.key),n)}}function Ss(e,r,t){return r&&da(e.prototype,r),t&&da(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Mt(e,r){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=jn(e))||r&&e&&typeof e.length=="number"){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||t.return==null||t.return()}finally{if(s)throw i}}}}function v(e,r,t){return(r=Wa(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function As(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ms(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n,a,i,o,s=[],l=!0,c=!1;try{if(i=(t=t.call(e)).next,r===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=i.call(t)).done)&&(s.push(n.value),s.length!==r);l=!0);}catch(d){c=!0,a=d}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw a}}return s}}function Cs(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Is(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ma(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?ma(Object(t),!0).forEach(function(n){v(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ma(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Rt(e,r){return Ts(e)||Ms(e,r)||jn(e,r)||Cs()}function B(e){return Es(e)||As(e)||jn(e)||Is()}function ks(e,r){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Wa(e){var r=ks(e,"string");return typeof r=="symbol"?r:r+""}function kt(e){"@babel/helpers - typeof";return kt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},kt(e)}function jn(e,r){if(e){if(typeof e=="string")return xn(e,r);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?xn(e,r):void 0}}var ha=function(){},zn={},Va={},Xa=null,Ya={mark:ha,measure:ha};try{typeof window<"u"&&(zn=window),typeof document<"u"&&(Va=document),typeof MutationObserver<"u"&&(Xa=MutationObserver),typeof performance<"u"&&(Ya=performance)}catch{}var Ds=zn.navigator||{},pa=Ds.userAgent,ga=pa===void 0?"":pa,ae=zn,C=Va,va=Xa,Et=Ya,om=!!ae.document,Q=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",Ga=~ga.indexOf("MSIE")||~ga.indexOf("Trident/"),xt,Ps=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Rs=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Ja={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Os={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ka=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],N="classic",Ye="duotone",qa="sharp",Za="sharp-duotone",Qa="chisel",ei="etch",ti="graphite",ni="jelly",ri="jelly-duo",ai="jelly-fill",ii="mosaic",oi="notdog",si="notdog-duo",li="pixel",ci="slab",fi="slab-duo",ui="slab-press",di="slab-press-duo",mi="thumbprint",hi="utility",pi="utility-duo",gi="utility-fill",vi="vellum",yi="whiteboard",Ns="Classic",_s="Duotone",Ls="Sharp",Fs="Sharp Duotone",js="Chisel",zs="Etch",Us="Graphite",$s="Jelly",Bs="Jelly Duo",Hs="Jelly Fill",Ws="Mosaic",Vs="Notdog",Xs="Notdog Duo",Ys="Pixel",Gs="Slab",Js="Slab Duo",Ks="Slab Press",qs="Slab Press Duo",Zs="Thumbprint",Qs="Utility",el="Utility Duo",tl="Utility Fill",nl="Vellum",rl="Whiteboard",bi=[N,Ye,qa,Za,Qa,ei,ti,ni,ri,ai,ii,oi,si,li,ci,fi,ui,di,mi,hi,pi,gi,vi,yi],sm=(xt={},v(v(v(v(v(v(v(v(v(v(xt,N,Ns),Ye,_s),qa,Ls),Za,Fs),Qa,js),ei,zs),ti,Us),ni,$s),ri,Bs),ai,Hs),v(v(v(v(v(v(v(v(v(v(xt,ii,Ws),oi,Vs),si,Xs),li,Ys),ci,Gs),fi,Js),ui,Ks),di,qs),mi,Zs),hi,Qs),v(v(v(v(xt,pi,el),gi,tl),vi,nl),yi,rl)),al={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},il={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},ol=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),sl={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},wi=["fak","fa-kit","fakd","fa-kit-duotone"],ya={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ll=["kit"],cl="kit",fl="kit-duotone",ul="Kit",dl="Kit Duotone",lm=v(v({},cl,ul),fl,dl),ml={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},hl={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},pl={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ba={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},St,At={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gl=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],vl="classic",yl="duotone",bl="sharp",wl="sharp-duotone",Tl="chisel",El="etch",xl="graphite",Sl="jelly",Al="jelly-duo",Ml="jelly-fill",Cl="mosaic",Il="notdog",kl="notdog-duo",Dl="pixel",Pl="slab",Rl="slab-duo",Ol="slab-press",Nl="slab-press-duo",_l="thumbprint",Ll="utility",Fl="utility-duo",jl="utility-fill",zl="vellum",Ul="whiteboard",$l="Classic",Bl="Duotone",Hl="Sharp",Wl="Sharp Duotone",Vl="Chisel",Xl="Etch",Yl="Graphite",Gl="Jelly",Jl="Jelly Duo",Kl="Jelly Fill",ql="Mosaic",Zl="Notdog",Ql="Notdog Duo",ec="Pixel",tc="Slab",nc="Slab Duo",rc="Slab Press",ac="Slab Press Duo",ic="Thumbprint",oc="Utility",sc="Utility Duo",lc="Utility Fill",cc="Vellum",fc="Whiteboard",cm=(St={},v(v(v(v(v(v(v(v(v(v(St,vl,$l),yl,Bl),bl,Hl),wl,Wl),Tl,Vl),El,Xl),xl,Yl),Sl,Gl),Al,Jl),Ml,Kl),v(v(v(v(v(v(v(v(v(v(St,Cl,ql),Il,Zl),kl,Ql),Dl,ec),Pl,tc),Rl,nc),Ol,rc),Nl,ac),_l,ic),Ll,oc),v(v(v(v(St,Fl,sc),jl,lc),zl,cc),Ul,fc)),uc="kit",dc="kit-duotone",mc="Kit",hc="Kit Duotone",fm=v(v({},uc,mc),dc,hc),pc={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},gc={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Sn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},vc=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Ti=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(gl,vc),yc=["solid","regular","light","thin","duotone","brands","semibold"],Ei=[1,2,3,4,5,6,7,8,9,10],bc=Ei.concat([11,12,13,14,15,16,17,18,19,20]),wc=["aw","fw","pull-left","pull-right"],Tc=[].concat(B(Object.keys(gc)),yc,wc,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",At.GROUP,At.SWAP_OPACITY,At.PRIMARY,At.SECONDARY]).concat(Ei.map(function(e){return"".concat(e,"x")})).concat(bc.map(function(e){return"w-".concat(e)})),Ec={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},q="___FONT_AWESOME___",An=16,xi="fa",Si="svg-inline--fa",de="data-fa-i2svg",Mn="data-fa-pseudo-element",xc="data-fa-pseudo-element-pending",Un="data-prefix",$n="data-icon",wa="fontawesome-i2svg",Sc="async",Ac=["HTML","HEAD","STYLE","SCRIPT"],Ai=["::before","::after",":before",":after"],Mi=(function(){try{return!0}catch{return!1}})();function Ge(e){return new Proxy(e,{get:function(t,n){return n in t?t[n]:t[N]}})}var Ci=u({},Ja);Ci[N]=u(u(u(u({},{"fa-duotone":"duotone"}),Ja[N]),ya.kit),ya["kit-duotone"]);var Mc=Ge(Ci),Cn=u({},sl);Cn[N]=u(u(u(u({},{duotone:"fad"}),Cn[N]),ba.kit),ba["kit-duotone"]);var Ta=Ge(Cn),In=u({},Sn);In[N]=u(u({},In[N]),pl.kit);var Bn=Ge(In),kn=u({},pc);kn[N]=u(u({},kn[N]),ml.kit);var um=Ge(kn),Cc=Ps,Ii="fa-layers-text",Ic=Rs,kc=u({},al),dm=Ge(kc),Dc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],yn=Os,Pc=[].concat(B(ll),B(Tc)),We=ae.FontAwesomeConfig||{};function Rc(e){var r=C.querySelector("script["+e+"]");if(r)return r.getAttribute(e)}function Oc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}C&&typeof C.querySelector=="function"&&(Ea=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],Ea.forEach(function(e){var r=Rt(e,2),t=r[0],n=r[1],a=Oc(Rc(t));a!=null&&(We[n]=a)}));var Ea,ki={styleDefault:"solid",familyDefault:N,cssPrefix:xi,replacementClass:Si,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};We.familyPrefix&&(We.cssPrefix=We.familyPrefix);var Ae=u(u({},ki),We);Ae.autoReplaceSvg||(Ae.observeMutations=!1);var p={};Object.keys(ki).forEach(function(e){Object.defineProperty(p,e,{enumerable:!0,set:function(t){Ae[e]=t,Ve.forEach(function(n){return n(p)})},get:function(){return Ae[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(r){Ae.cssPrefix=r,Ve.forEach(function(t){return t(p)})},get:function(){return Ae.cssPrefix}});ae.FontAwesomeConfig=p;var Ve=[];function Nc(e){return Ve.push(e),function(){Ve.splice(Ve.indexOf(e),1)}}var re=An,Y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _c(e){if(!(!e||!Q)){var r=C.createElement("style");r.setAttribute("type","text/css"),r.innerHTML=e;for(var t=C.head.childNodes,n=null,a=t.length-1;a>-1;a--){var i=t[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return C.head.insertBefore(r,n),e}}var Lc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xa(){for(var e=12,r="";e-- >0;)r+=Lc[Math.random()*62|0];return r}function Me(e){for(var r=[],t=(e||[]).length>>>0;t--;)r[t]=e[t];return r}function Hn(e){return e.classList?Me(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(r){return r})}function Di(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fc(e){return Object.keys(e||{}).reduce(function(r,t){return r+"".concat(t,'="').concat(Di(e[t]),'" ')},"").trim()}function Ot(e){return Object.keys(e||{}).reduce(function(r,t){return r+"".concat(t,": ").concat(e[t].trim(),";")},"")}function Wn(e){return e.size!==Y.size||e.x!==Y.x||e.y!==Y.y||e.rotate!==Y.rotate||e.flipX||e.flipY}function jc(e){var r=e.transform,t=e.containerWidth,n=e.iconWidth,a={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(r.x*32,", ").concat(r.y*32,") "),o="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),s="rotate(".concat(r.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:a,inner:l,path:c}}function zc(e){var r=e.transform,t=e.width,n=t===void 0?An:t,a=e.height,i=a===void 0?An:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ga?l+="translate(".concat(r.x/re-n/2,"em, ").concat(r.y/re-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(r.x/re,"em), calc(-50% + ").concat(r.y/re,"em)) "):l+="translate(".concat(r.x/re,"em, ").concat(r.y/re,"em) "),l+="scale(".concat(r.size/re*(r.flipX?-1:1),", ").concat(r.size/re*(r.flipY?-1:1),") "),l+="rotate(".concat(r.rotate,"deg) "),l}var Uc=`:root, :host {
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
}`;function Pi(){var e=xi,r=Si,t=p.cssPrefix,n=p.replacementClass,a=Uc;if(t!==e||n!==r){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(r),"g");a=a.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(s,".".concat(n))}return a}var Sa=!1;function bn(){p.autoAddCss&&!Sa&&(_c(Pi()),Sa=!0)}var $c={mixout:function(){return{dom:{css:Pi,insertCss:bn}}},hooks:function(){return{beforeDOMElementCreation:function(){bn()},beforeI2svg:function(){bn()}}}},Z=ae||{};Z[q]||(Z[q]={});Z[q].styles||(Z[q].styles={});Z[q].hooks||(Z[q].hooks={});Z[q].shims||(Z[q].shims=[]);var $=Z[q],Ri=[],Oi=function(){C.removeEventListener("DOMContentLoaded",Oi),Dt=1,Ri.map(function(r){return r()})},Dt=!1;Q&&(Dt=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),Dt||C.addEventListener("DOMContentLoaded",Oi));function Bc(e){Q&&(Dt?setTimeout(e,0):Ri.push(e))}function Je(e){var r=e.tag,t=e.attributes,n=t===void 0?{}:t,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Di(e):"<".concat(r," ").concat(Fc(n),">").concat(i.map(Je).join(""),"</").concat(r,">")}function Aa(e,r,t){if(e&&e[r]&&e[r][t])return{prefix:r,iconName:t,icon:e[r][t]}}var Hc=function(r,t){return function(n,a,i,o){return r.call(t,n,a,i,o)}},wn=function(r,t,n,a){var i=Object.keys(r),o=i.length,s=a!==void 0?Hc(t,a):t,l,c,d;for(n===void 0?(l=1,d=r[i[0]]):(l=0,d=n);l<o;l++)c=i[l],d=s(d,r[c],c,r);return d};function Ni(e){return B(e).length!==1?null:e.codePointAt(0).toString(16)}function Ma(e){return Object.keys(e).reduce(function(r,t){var n=e[t],a=!!n.icon;return a?r[n.iconName]=n.icon:r[t]=n,r},{})}function Dn(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=t.skipHooks,a=n===void 0?!1:n,i=Ma(r);typeof $.hooks.addPack=="function"&&!a?$.hooks.addPack(e,Ma(r)):$.styles[e]=u(u({},$.styles[e]||{}),i),e==="fas"&&Dn("fa",r)}var Xe=$.styles,Wc=$.shims,_i=Object.keys(Bn),Vc=_i.reduce(function(e,r){return e[r]=Object.keys(Bn[r]),e},{}),Vn=null,Li={},Fi={},ji={},zi={},Ui={};function Xc(e){return~Pc.indexOf(e)}function Yc(e,r){var t=r.split("-"),n=t[0],a=t.slice(1).join("-");return n===e&&a!==""&&!Xc(a)?a:null}var $i=function(){var r=function(i){return wn(Xe,function(o,s,l){return o[l]=wn(s,i,{}),o},{})};Li=r(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Fi=r(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Ui=r(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var t="far"in Xe||p.autoFetchSvg,n=wn(Wc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ji=n.names,zi=n.unicodes,Vn=Nt(p.styleDefault,{family:p.familyDefault})};Nc(function(e){Vn=Nt(e.styleDefault,{family:p.familyDefault})});$i();function Xn(e,r){return(Li[e]||{})[r]}function Gc(e,r){return(Fi[e]||{})[r]}function ue(e,r){return(Ui[e]||{})[r]}function Bi(e){return ji[e]||{prefix:null,iconName:null}}function Jc(e){var r=zi[e],t=Xn("fas",e);return r||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function ie(){return Vn}var Hi=function(){return{prefix:null,iconName:null,rest:[]}};function Kc(e){var r=N,t=_i.reduce(function(n,a){return n[a]="".concat(p.cssPrefix,"-").concat(a),n},{});return bi.forEach(function(n){(e.includes(t[n])||e.some(function(a){return Vc[n].includes(a)}))&&(r=n)}),r}function Nt(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.family,n=t===void 0?N:t,a=Mc[n][e];if(n===Ye&&!e)return"fad";var i=Ta[n][e]||Ta[n][a],o=e in $.styles?e:null,s=i||o||null;return s}function qc(e){var r=[],t=null;return e.forEach(function(n){var a=Yc(p.cssPrefix,n);a?t=a:n&&r.push(n)}),{iconName:t,rest:r}}function Ca(e){return e.sort().filter(function(r,t,n){return n.indexOf(r)===t})}var Ia=Ti.concat(wi);function _t(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.skipLookups,n=t===void 0?!1:t,a=null,i=Ca(e.filter(function(h){return Ia.includes(h)})),o=Ca(e.filter(function(h){return!Ia.includes(h)})),s=i.filter(function(h){return a=h,!Ka.includes(h)}),l=Rt(s,1),c=l[0],d=c===void 0?null:c,f=Kc(i),g=u(u({},qc(o)),{},{prefix:Nt(d,{family:f})});return u(u(u({},g),tf({values:e,family:f,styles:Xe,config:p,canonical:g,givenPrefix:a})),Zc(n,a,g))}function Zc(e,r,t){var n=t.prefix,a=t.iconName;if(e||!n||!a)return{prefix:n,iconName:a};var i=r==="fa"?Bi(a):{},o=ue(n,a);return a=i.iconName||o||a,n=i.prefix||n,n==="far"&&!Xe.far&&Xe.fas&&!p.autoFetchSvg&&(n="fas"),{prefix:n,iconName:a}}var Qc=bi.filter(function(e){return e!==N||e!==Ye}),ef=Object.keys(Sn).filter(function(e){return e!==N}).map(function(e){return Object.keys(Sn[e])}).flat();function tf(e){var r=e.values,t=e.family,n=e.canonical,a=e.givenPrefix,i=a===void 0?"":a,o=e.styles,s=o===void 0?{}:o,l=e.config,c=l===void 0?{}:l,d=t===Ye,f=r.includes("fa-duotone")||r.includes("fad"),g=c.familyDefault==="duotone",h=n.prefix==="fad"||n.prefix==="fa-duotone";if(!d&&(f||g||h)&&(n.prefix="fad"),(r.includes("fa-brands")||r.includes("fab"))&&(n.prefix="fab"),!n.prefix&&Qc.includes(t)){var S=Object.keys(s).find(function(m){return ef.includes(m)});if(S||c.autoFetchSvg){var T=ol.get(t).defaultShortPrefixId;n.prefix=T,n.iconName=ue(n.prefix,n.iconName)||n.iconName}}return(n.prefix==="fa"||i==="fa")&&(n.prefix=ie()||"fas"),n}var nf=(function(){function e(){xs(this,e),this.definitions={}}return Ss(e,[{key:"add",value:function(){for(var t=this,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){t.definitions[s]=u(u({},t.definitions[s]||{}),o[s]),Dn(s,o[s]);var l=Bn[N][s];l&&Dn(l,o[s]),$i()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,n){var a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];t[s]||(t[s]={}),d.length>0&&d.forEach(function(f){typeof f=="string"&&(t[s][f]=c)}),t[s][l]=c}),t}}])})(),ka=[],xe={},Se={},rf=Object.keys(Se);function af(e,r){var t=r.mixoutsTo;return ka=e,xe={},Object.keys(Se).forEach(function(n){rf.indexOf(n)===-1&&delete Se[n]}),ka.forEach(function(n){var a=n.mixout?n.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(t[o]=a[o]),kt(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){t[o]||(t[o]={}),t[o][s]=a[o][s]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){xe[o]||(xe[o]=[]),xe[o].push(i[o])})}n.provides&&n.provides(Se)}),t}function Pn(e,r){for(var t=arguments.length,n=new Array(t>2?t-2:0),a=2;a<t;a++)n[a-2]=arguments[a];var i=xe[e]||[];return i.forEach(function(o){r=o.apply(null,[r].concat(n))}),r}function me(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var a=xe[e]||[];a.forEach(function(i){i.apply(null,t)})}function oe(){var e=arguments[0],r=Array.prototype.slice.call(arguments,1);return Se[e]?Se[e].apply(null,r):void 0}function Rn(e){e.prefix==="fa"&&(e.prefix="fas");var r=e.iconName,t=e.prefix||ie();if(r)return r=ue(t,r)||r,Aa(Wi.definitions,t,r)||Aa($.styles,t,r)}var Wi=new nf,of=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,me("noAuto")},sf={i2svg:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Q?(me("beforeI2svg",r),oe("pseudoElements2svg",r),oe("i2svg",r)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=r.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,Bc(function(){cf({autoReplaceSvgRoot:t}),me("watch",r)})}},lf={icon:function(r){if(r===null)return null;if(kt(r)==="object"&&r.prefix&&r.iconName)return{prefix:r.prefix,iconName:ue(r.prefix,r.iconName)||r.iconName};if(Array.isArray(r)&&r.length===2){var t=r[1].indexOf("fa-")===0?r[1].slice(3):r[1],n=Nt(r[0]);return{prefix:n,iconName:ue(n,t)||t}}if(typeof r=="string"&&(r.indexOf("".concat(p.cssPrefix,"-"))>-1||r.match(Cc))){var a=_t(r.split(" "),{skipLookups:!0});return{prefix:a.prefix||ie(),iconName:ue(a.prefix,a.iconName)||a.iconName}}if(typeof r=="string"){var i=ie();return{prefix:i,iconName:ue(i,r)||r}}}},j={noAuto:of,config:p,dom:sf,parse:lf,library:Wi,findIconDefinition:Rn,toHtml:Je},cf=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=r.autoReplaceSvgRoot,n=t===void 0?C:t;(Object.keys($.styles).length>0||p.autoFetchSvg)&&Q&&p.autoReplaceSvg&&j.dom.i2svg({node:n})};function Lt(e,r){return Object.defineProperty(e,"abstract",{get:r}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return Je(n)})}}),Object.defineProperty(e,"node",{get:function(){if(Q){var n=C.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function ff(e){var r=e.children,t=e.main,n=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Wn(o)&&t.found&&!n.found){var s=t.width,l=t.height,c={x:s/l/2,y:.5};a.style=Ot(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:r}]}function uf(e){var r=e.prefix,t=e.iconName,n=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(r,"-").concat(p.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},a),{},{id:o}),children:n}]}]}function df(e){var r=["aria-label","aria-labelledby","title","role"];return r.some(function(t){return t in e})}function Yn(e){var r=e.icons,t=r.main,n=r.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,c=e.extra,d=e.watchable,f=d===void 0?!1:d,g=n.found?n:t,h=g.width,S=g.height,T=[p.replacementClass,i?"".concat(p.cssPrefix,"-").concat(i):""].filter(function(k){return c.classes.indexOf(k)===-1}).filter(function(k){return k!==""||!!k}).concat(c.classes).join(" "),m={children:[],attributes:u(u({},c.attributes),{},{"data-prefix":a,"data-icon":i,class:T,role:c.attributes.role||"img",viewBox:"0 0 ".concat(h," ").concat(S)})};!df(c.attributes)&&!c.attributes["aria-hidden"]&&(m.attributes["aria-hidden"]="true"),f&&(m.attributes[de]="");var y=u(u({},m),{},{prefix:a,iconName:i,main:t,mask:n,maskId:l,transform:o,symbol:s,styles:u({},c.styles)}),b=n.found&&t.found?oe("generateAbstractMask",y)||{children:[],attributes:{}}:oe("generateAbstractIcon",y)||{children:[],attributes:{}},M=b.children,E=b.attributes;return y.children=M,y.attributes=E,s?uf(y):ff(y)}function Da(e){var r=e.content,t=e.width,n=e.height,a=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=u(u({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[de]="");var c=u({},i.styles);Wn(a)&&(c.transform=zc({transform:a,startCentered:!0,width:t,height:n}),c["-webkit-transform"]=c.transform);var d=Ot(c);d.length>0&&(l.style=d);var f=[];return f.push({tag:"span",attributes:l,children:[r]}),f}function mf(e){var r=e.content,t=e.extra,n=u(u({},t.attributes),{},{class:t.classes.join(" ")}),a=Ot(t.styles);a.length>0&&(n.style=a);var i=[];return i.push({tag:"span",attributes:n,children:[r]}),i}var Tn=$.styles;function On(e){var r=e[0],t=e[1],n=e.slice(4),a=Rt(n,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(yn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(yn.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(yn.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:r,height:t,icon:o}}var hf={found:!1,width:512,height:512};function pf(e,r){!Mi&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(r,'" is missing.'))}function Nn(e,r){var t=r;return r==="fa"&&p.styleDefault!==null&&(r=ie()),new Promise(function(n,a){if(t==="fa"){var i=Bi(e)||{};e=i.iconName||e,r=i.prefix||r}if(e&&r&&Tn[r]&&Tn[r][e]){var o=Tn[r][e];return n(On(o))}pf(e,r),n(u(u({},hf),{},{icon:p.showMissingIcons&&e?oe("missingIconAbstract")||{}:{}}))})}var Pa=function(){},_n=p.measurePerformance&&Et&&Et.mark&&Et.measure?Et:{mark:Pa,measure:Pa},He='FA "7.3.1"',gf=function(r){return _n.mark("".concat(He," ").concat(r," begins")),function(){return Vi(r)}},Vi=function(r){_n.mark("".concat(He," ").concat(r," ends")),_n.measure("".concat(He," ").concat(r),"".concat(He," ").concat(r," begins"),"".concat(He," ").concat(r," ends"))},Gn={begin:gf,end:Vi},Ct=function(){};function Ra(e){var r=e.getAttribute?e.getAttribute(de):null;return typeof r=="string"}function vf(e){var r=e.getAttribute?e.getAttribute(Un):null,t=e.getAttribute?e.getAttribute($n):null;return r&&t}function yf(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function bf(){if(p.autoReplaceSvg===!0)return It.replace;var e=It[p.autoReplaceSvg];return e||It.replace}function wf(e){return C.createElementNS("http://www.w3.org/2000/svg",e)}function Tf(e){return C.createElement(e)}function Xi(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.ceFn,n=t===void 0?e.tag==="svg"?wf:Tf:t;if(typeof e=="string")return C.createTextNode(e);var a=n(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Xi(o,{ceFn:n}))}),a}function Ef(e){var r=" ".concat(e.outerHTML," ");return r="".concat(r,"Font Awesome fontawesome.com "),r}var It={replace:function(r){var t=r[0];if(t.parentNode)if(r[1].forEach(function(a){t.parentNode.insertBefore(Xi(a),t)}),t.getAttribute(de)===null&&p.keepOriginalSource){var n=C.createComment(Ef(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(r){var t=r[0],n=r[1];if(~Hn(t).indexOf(p.replacementClass))return It.replace(r);var a=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(s,l){return l===p.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=n.map(function(s){return Je(s)}).join(`
`);t.setAttribute(de,""),t.innerHTML=o}};function Oa(e){e()}function Yi(e,r){var t=typeof r=="function"?r:Ct;if(e.length===0)t();else{var n=Oa;p.mutateApproach===Sc&&(n=ae.requestAnimationFrame||Oa),n(function(){var a=bf(),i=Gn.begin("mutate");e.map(a),i(),t()})}}var Jn=!1;function Gi(){Jn=!0}function Ln(){Jn=!1}var Pt=null;function Na(e){if(va&&p.observeMutations){var r=e.treeCallback,t=r===void 0?Ct:r,n=e.nodeCallback,a=n===void 0?Ct:n,i=e.pseudoElementsCallback,o=i===void 0?Ct:i,s=e.observeMutationsRoot,l=s===void 0?C:s;Pt=new va(function(c){if(!Jn){var d=ie();Me(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Ra(f.addedNodes[0])&&(p.searchPseudoElements&&o(f.target),t(f.target)),f.type==="attributes"&&f.target.parentNode&&p.searchPseudoElements&&o([f.target],!0),f.type==="attributes"&&Ra(f.target)&&~Dc.indexOf(f.attributeName))if(f.attributeName==="class"&&vf(f.target)){var g=_t(Hn(f.target)),h=g.prefix,S=g.iconName;f.target.setAttribute(Un,h||d),S&&f.target.setAttribute($n,S)}else yf(f.target)&&a(f.target)})}}),Q&&Pt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function xf(){Pt&&Pt.disconnect()}function Sf(e){var r=e.getAttribute("style"),t=[];return r&&(t=r.split(";").reduce(function(n,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),t}function Af(e){var r=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",a=_t(Hn(e));return a.prefix||(a.prefix=ie()),r&&t&&(a.prefix=r,a.iconName=t),a.iconName&&a.prefix||(a.prefix&&n.length>0&&(a.iconName=Gc(a.prefix,e.innerText)||Xn(a.prefix,Ni(e.innerText))),!a.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Mf(e){var r=Me(e.attributes).reduce(function(t,n){return t.name!=="class"&&t.name!=="style"&&(t[n.name]=n.value),t},{});return r}function Cf(){return{iconName:null,prefix:null,transform:Y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _a(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Af(e),n=t.iconName,a=t.prefix,i=t.rest,o=Mf(e),s=Pn("parseNodeAttributes",{},e),l=r.styleParser?Sf(e):[];return u({iconName:n,prefix:a,transform:Y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var If=$.styles;function Ji(e){var r=p.autoReplaceSvg==="nest"?_a(e,{styleParser:!1}):_a(e);return~r.extra.classes.indexOf(Ii)?oe("generateLayersText",e,r):oe("generateSvgReplacementMutation",e,r)}function kf(){return[].concat(B(wi),B(Ti))}function La(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Q)return Promise.resolve();var t=C.documentElement.classList,n=function(f){return t.add("".concat(wa,"-").concat(f))},a=function(f){return t.remove("".concat(wa,"-").concat(f))},i=p.autoFetchSvg?kf():Ka.concat(Object.keys(If));i.includes("fa")||i.push("fa");var o=[".".concat(Ii,":not([").concat(de,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(de,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Me(e.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),a("complete");else return Promise.resolve();var l=Gn.begin("onTree"),c=s.reduce(function(d,f){try{var g=Ji(f);g&&d.push(g)}catch(h){Mi||h.name==="MissingIcon"&&console.error(h)}return d},[]);return new Promise(function(d,f){Promise.all(c).then(function(g){Yi(g,function(){n("active"),n("complete"),a("pending"),typeof r=="function"&&r(),l(),d()})}).catch(function(g){l(),f(g)})})}function Df(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ji(e).then(function(t){t&&Yi([t],r)})}function Pf(e){return function(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(r||{}).icon?r:Rn(r||{}),a=t.mask;return a&&(a=(a||{}).icon?a:Rn(a||{})),e(n,u(u({},t),{},{mask:a}))}}var Rf=function(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,a=n===void 0?Y:n,i=t.symbol,o=i===void 0?!1:i,s=t.mask,l=s===void 0?null:s,c=t.maskId,d=c===void 0?null:c,f=t.classes,g=f===void 0?[]:f,h=t.attributes,S=h===void 0?{}:h,T=t.styles,m=T===void 0?{}:T;if(r){var y=r.prefix,b=r.iconName,M=r.icon;return Lt(u({type:"icon"},r),function(){return me("beforeDOMElementCreation",{iconDefinition:r,params:t}),Yn({icons:{main:On(M),mask:l?On(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:b,transform:u(u({},Y),a),symbol:o,maskId:d,extra:{attributes:S,styles:m,classes:g}})})}},Of={mixout:function(){return{icon:Pf(Rf)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=La,t.nodeCallback=Df,t}}},provides:function(r){r.i2svg=function(t){var n=t.node,a=n===void 0?C:n,i=t.callback,o=i===void 0?function(){}:i;return La(a,o)},r.generateSvgReplacementMutation=function(t,n){var a=n.iconName,i=n.prefix,o=n.transform,s=n.symbol,l=n.mask,c=n.maskId,d=n.extra;return new Promise(function(f,g){Promise.all([Nn(a,i),l.iconName?Nn(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var S=Rt(h,2),T=S[0],m=S[1];f([t,Yn({icons:{main:T,mask:m},prefix:i,iconName:a,transform:o,symbol:s,maskId:c,extra:d,watchable:!0})])}).catch(g)})},r.generateAbstractIcon=function(t){var n=t.children,a=t.attributes,i=t.main,o=t.transform,s=t.styles,l=Ot(s);l.length>0&&(a.style=l);var c;return Wn(o)&&(c=oe("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(c||i.icon),{children:n,attributes:a}}}},Nf={mixout:function(){return{layer:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.classes,i=a===void 0?[]:a;return Lt({type:"layer"},function(){me("beforeDOMElementCreation",{assembler:t,params:n});var o=[];return t(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(B(i)).join(" ")},children:o}]})}}}},_f={mixout:function(){return{counter:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.title,i=a===void 0?null:a,o=n.classes,s=o===void 0?[]:o,l=n.attributes,c=l===void 0?{}:l,d=n.styles,f=d===void 0?{}:d;return Lt({type:"counter",content:t},function(){return me("beforeDOMElementCreation",{content:t,params:n}),mf({content:t.toString(),title:i,extra:{attributes:c,styles:f,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(B(s))}})})}}}},Lf={mixout:function(){return{text:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,i=a===void 0?Y:a,o=n.classes,s=o===void 0?[]:o,l=n.attributes,c=l===void 0?{}:l,d=n.styles,f=d===void 0?{}:d;return Lt({type:"text",content:t},function(){return me("beforeDOMElementCreation",{content:t,params:n}),Da({content:t,transform:u(u({},Y),i),extra:{attributes:c,styles:f,classes:["".concat(p.cssPrefix,"-layers-text")].concat(B(s))}})})}}},provides:function(r){r.generateLayersText=function(t,n){var a=n.transform,i=n.extra,o=null,s=null;if(Ga){var l=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();o=c.width/l,s=c.height/l}return Promise.resolve([t,Da({content:t.innerHTML,width:o,height:s,transform:a,extra:i,watchable:!0})])}}},Ki=new RegExp('"',"ug"),Fa=[1105920,1112319],ja=u(u(u(u({},{FontAwesome:{normal:"fas",400:"fas"}}),il),Ec),hl),Fn=Object.keys(ja).reduce(function(e,r){return e[r.toLowerCase()]=ja[r],e},{}),Ff=Object.keys(Fn).reduce(function(e,r){var t=Fn[r];return e[r]=t[900]||B(Object.entries(t))[0][1],e},{});function jf(e){var r=e.replace(Ki,"");return Ni(B(r)[0]||"")}function zf(e){var r=e.getPropertyValue("font-feature-settings").includes("ss01"),t=e.getPropertyValue("content"),n=t.replace(Ki,""),a=n.codePointAt(0),i=a>=Fa[0]&&a<=Fa[1],o=n.length===2?n[0]===n[1]:!1;return i||o||r}function Uf(e,r){var t=e.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(r),a=isNaN(n)?"normal":n;return(Fn[t]||{})[a]||Ff[t]}function za(e,r){var t="".concat(xc).concat(r.replace(":","-"));return new Promise(function(n,a){if(e.getAttribute(t)!==null)return n();var i=Me(e.children),o=i.filter(function(I){return I.getAttribute(Mn)===r})[0],s=ae.getComputedStyle(e,r),l=s.getPropertyValue("font-family"),c=l.match(Ic),d=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!c)return e.removeChild(o),n();if(c&&f!=="none"&&f!==""){var g=s.getPropertyValue("content"),h=Uf(l,d),S=jf(g),T=c[0].startsWith("FontAwesome"),m=zf(s),y=Xn(h,S),b=y;if(T){var M=Jc(S);M.iconName&&M.prefix&&(y=M.iconName,h=M.prefix)}if(y&&!m&&(!o||o.getAttribute(Un)!==h||o.getAttribute($n)!==b)){e.setAttribute(t,b),o&&e.removeChild(o);var E=Cf(),k=E.extra;k.attributes[Mn]=r,Nn(y,h).then(function(I){var O=Yn(u(u({},E),{},{icons:{main:I,mask:Hi()},prefix:h,iconName:b,extra:k,watchable:!0})),H=C.createElementNS("http://www.w3.org/2000/svg","svg");r==="::before"?e.insertBefore(H,e.firstChild):e.appendChild(H),H.outerHTML=O.map(function(z){return Je(z)}).join(`
`),e.removeAttribute(t),n()}).catch(a)}else n()}else n()})}function $f(e){return Promise.all([za(e,"::before"),za(e,"::after")])}function Bf(e){return e.parentNode!==document.head&&!~Ac.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Mn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Hf=function(r){return!!r&&Ai.some(function(t){return r.includes(t)})},Wf=function(r){if(!r)return[];var t=new Set,n=r.split(/,(?![^()]*\))/).map(function(l){return l.trim()});n=n.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(c){return c.trim()})});var a=Mt(n),i;try{for(a.s();!(i=a.n()).done;){var o=i.value;if(Hf(o)){var s=Ai.reduce(function(l,c){return l.replace(c,"")},o);s!==""&&s!=="*"&&t.add(s)}}}catch(l){a.e(l)}finally{a.f()}return t};function Ua(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Q){var t;if(r)t=e;else if(p.searchPseudoElementsFullScan)t=e.querySelectorAll("*");else{var n=new Set,a=Mt(document.styleSheets),i;try{for(a.s();!(i=a.n()).done;){var o=i.value;try{var s=Mt(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var c=l.value,d=Wf(c.selectorText),f=Mt(d),g;try{for(f.s();!(g=f.n()).done;){var h=g.value;n.add(h)}}catch(T){f.e(T)}finally{f.f()}}}catch(T){s.e(T)}finally{s.f()}}catch(T){p.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(T.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(T){a.e(T)}finally{a.f()}if(!n.size)return;var S=Array.from(n).join(", ");try{t=e.querySelectorAll(S)}catch{}}return new Promise(function(T,m){var y=Me(t).filter(Bf).map($f),b=Gn.begin("searchPseudoElements");Gi(),Promise.all(y).then(function(){b(),Ln(),T()}).catch(function(){b(),Ln(),m()})})}}var Vf={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Ua,t}}},provides:function(r){r.pseudoElements2svg=function(t){var n=t.node,a=n===void 0?C:n;p.searchPseudoElements&&Ua(a)}}},$a=!1,Xf={mixout:function(){return{dom:{unwatch:function(){Gi(),$a=!0}}}},hooks:function(){return{bootstrap:function(){Na(Pn("mutationObserverCallbacks",{}))},noAuto:function(){xf()},watch:function(t){var n=t.observeMutationsRoot;$a?Ln():Na(Pn("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Ba=function(r){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return r.toLowerCase().split(" ").reduce(function(n,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)},Yf={mixout:function(){return{parse:{transform:function(t){return Ba(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,n){var a=n.getAttribute("data-fa-transform");return a&&(t.transform=Ba(a)),t}}},provides:function(r){r.generateAbstractTransformGrouping=function(t){var n=t.main,a=t.transform,i=t.containerWidth,o=t.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(d)},g={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:f,path:g};return{tag:"g",attributes:u({},h.outer),children:[{tag:"g",attributes:u({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:u(u({},n.icon.attributes),h.path)}]}]}}}},En={x:0,y:0,width:"100%",height:"100%"};function Ha(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||r)&&(e.attributes.fill="black"),e}function Gf(e){return e.tag==="g"?e.children:[e]}var Jf={hooks:function(){return{parseNodeAttributes:function(t,n){var a=n.getAttribute("data-fa-mask"),i=a?_t(a.split(" ").map(function(o){return o.trim()})):Hi();return i.prefix||(i.prefix=ie()),t.mask=i,t.maskId=n.getAttribute("data-fa-mask-id"),t}}},provides:function(r){r.generateAbstractMask=function(t){var n=t.children,a=t.attributes,i=t.main,o=t.mask,s=t.maskId,l=t.transform,c=i.width,d=i.icon,f=o.width,g=o.icon,h=jc({transform:l,containerWidth:f,iconWidth:c}),S={tag:"rect",attributes:u(u({},En),{},{fill:"white"})},T=d.children?{children:d.children.map(Ha)}:{},m={tag:"g",attributes:u({},h.inner),children:[Ha(u({tag:d.tag,attributes:u(u({},d.attributes),h.path)},T))]},y={tag:"g",attributes:u({},h.outer),children:[m]},b="mask-".concat(s||xa()),M="clip-".concat(s||xa()),E={tag:"mask",attributes:u(u({},En),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,y]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:Gf(g)},E]};return n.push(k,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(b,")")},En)}),{children:n,attributes:a}}}},Kf={provides:function(r){var t=!1;ae.matchMedia&&(t=ae.matchMedia("(prefers-reduced-motion: reduce)").matches),r.missingIconAbstract=function(){var n=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:u(u({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:u(u({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:u(u({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},qf={hooks:function(){return{parseNodeAttributes:function(t,n){var a=n.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return t.symbol=i,t}}}},Zf=[$c,Of,Nf,_f,Lf,Vf,Xf,Yf,Jf,Kf,qf];af(Zf,{mixoutsTo:j});var mm=j.noAuto,qi=j.config,hm=j.library,Zi=j.dom,Qi=j.parse,pm=j.findIconDefinition,gm=j.toHtml,eo=j.icon,vm=j.layer,Qf=j.text,eu=j.counter;var tu=["*"],nu=(()=>{class e{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(t){qi.autoAddCss=t,this._autoAddCss=t}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(n){return new(n||e)};static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),ru=(()=>{class e{definitions={};addIcons(...t){for(let n of t){n.prefix in this.definitions||(this.definitions[n.prefix]={}),this.definitions[n.prefix][n.iconName]=n;for(let a of n.icon[2])typeof a=="string"&&(this.definitions[n.prefix][a]=n)}}addIconPacks(...t){for(let n of t){let a=Object.keys(n).map(i=>n[i]);this.addIcons(...a)}}getIconDefinition(t,n){return t in this.definitions&&n in this.definitions[t]?this.definitions[t][n]:null}static \u0275fac=function(n){return new(n||e)};static \u0275prov=x({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),au=e=>{throw new Error(`Could not find icon with iconName=${e.iconName} and prefix=${e.prefix} in the icon library.`)},iu=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},no=e=>e!=null&&(e===90||e===180||e===270||e==="90"||e==="180"||e==="270"),ou=e=>{let r=no(e.rotate),t={[`fa-${e.animation}`]:e.animation!=null&&!e.animation.startsWith("spin"),"fa-spin":e.animation==="spin"||e.animation==="spin-reverse","fa-spin-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-spin-reverse":e.animation==="spin-reverse"||e.animation==="spin-pulse-reverse","fa-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-fw":e.fixedWidth,"fa-border":e.border,"fa-inverse":e.inverse,"fa-layers-counter":e.counter,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both",[`fa-${e.size}`]:e.size!==null,[`fa-rotate-${e.rotate}`]:r,"fa-rotate-by":e.rotate!=null&&!r,[`fa-pull-${e.pull}`]:e.pull!==null,[`fa-stack-${e.stackItemSize}`]:e.stackItemSize!=null};return Object.keys(t).map(n=>t[n]?n:null).filter(n=>n!=null)},Kn=new WeakSet,to="fa-auto-css";function su(e,r){if(!r.autoAddCss||Kn.has(e))return;if(e.getElementById(to)!=null){r.autoAddCss=!1,Kn.add(e);return}let t=e.createElement("style");t.setAttribute("type","text/css"),t.setAttribute("id",to),t.innerHTML=Zi.css();let n=e.head.childNodes,a=null;for(let i=n.length-1;i>-1;i--){let o=n[i],s=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}e.head.insertBefore(t,a),r.autoAddCss=!1,Kn.add(e)}var lu=e=>e.prefix!==void 0&&e.iconName!==void 0,cu=(e,r)=>lu(e)?e:Array.isArray(e)&&e.length===2?{prefix:e[0],iconName:e[1]}:{prefix:r,iconName:e},fu=(()=>{class e{stackItemSize=at("1x");size=at();_effect=ir(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(n){return new(n||e)};static \u0275dir=Gt({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return e})(),uu=(()=>{class e{size=at();classes=rt(()=>{let t=this.size(),n=t?{[`fa-${t}`]:!0}:{};return zt(F({},n),{"fa-stack":!0})});static \u0275fac=function(n){return new(n||e)};static \u0275cmp=Yt({type:e,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(n,a){n&2&&Mr(a.classes())},inputs:{size:[1,"size"]},ngContentSelectors:tu,decls:1,vars:0,template:function(n,a){n&1&&(Sr(),Ar(0))},encapsulation:2,changeDetection:0})}return e})(),Im=(()=>{class e{icon=_();title=_();animation=_();mask=_();flip=_();size=_();pull=_();border=_();inverse=_();symbol=_();rotate=_();fixedWidth=_();transform=_();a11yRole=_();renderedIconHTML=rt(()=>{let t=this.icon()??this.config.fallbackIcon;if(!t)return iu(),"";let n=this.findIconDefinition(t);if(!n)return"";let a=this.buildParams();su(this.document,this.config);let i=eo(n,a);return this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))});document=w(L);sanitizer=w(mn);config=w(nu);iconLibrary=w(ru);stackItem=w(fu,{optional:!0});stack=w(uu,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(t){let n=cu(t,this.config.defaultPrefix);if("icon"in n)return n;let a=this.iconLibrary.getIconDefinition(n.prefix,n.iconName);return a??(au(n),null)}buildParams(){let t=this.fixedWidth(),n={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof t=="boolean"?t:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},a=this.transform(),i=typeof a=="string"?Qi.transform(a):a,o=this.mask(),s=o!=null?this.findIconDefinition(o):null,l={},c=this.a11yRole();c!=null&&(l.role=c);let d={};return n.rotate!=null&&!no(n.rotate)&&(d["--fa-rotate-angle"]=`${n.rotate}`),{title:this.title(),transform:i,classes:ou(n),mask:s??void 0,symbol:this.symbol(),attributes:l,styles:d}}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=Yt({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(n,a){n&2&&(xr("innerHTML",a.renderedIconHTML(),gr),Er("title",a.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(n,a){},encapsulation:2,changeDetection:0})}return e})();export{bo as a,ta as b,Wo as c,Vo as d,Hd as e,mn as f,Wd as g,Te as h,gn as i,nm as j,rm as k,hm as l,ru as m,Im as n};
