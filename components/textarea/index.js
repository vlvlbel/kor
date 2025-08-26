(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol();class s{constructor(t,r){if(r!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return t&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const r=new Map,o=t=>{let n=r.get(t);return void 0===n&&r.set(t,n=new s(t,e)),n},i=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,r,n)=>e+(t=>{if(t instanceof s)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1],t[0]);return o(r)},n=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>o("string"==typeof t?t:t+""))(e)})(t):t;var l,h,u,p;const v={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},reactive_element_n=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:reactive_element_n};class a extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,r)=>{const n=this.Πp(r,e);void 0!==n&&(this.Πm.set(n,r),t.push(n))}),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){const l=this[t];this[e]=n,this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static"Πp"(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise(t=>this.enableUpdating=t),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,r;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])})}createRenderRoot(){var e;const r=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,r)=>{t?e.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):r.forEach(t=>{const r=document.createElement("style");r.textContent=t.cssText,e.appendChild(r)})})(r,this.constructor.elementStyles),r}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}),this.Πo=new Promise(t=>this.Πl=t)}attributeChangedCallback(t,e,r){this.K(t,r)}"Πj"(t,e,r=f){var n,l;const h=this.constructor.Πp(t,r);if(void 0!==h&&!0===r.reflect){const u=(null!==(l=null===(n=r.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==l?l:v.toAttribute)(e,r.type);this.Πh=t,null==u?this.removeAttribute(h):this.setAttribute(h,u),this.Πh=null}}K(t,e){var r,n,l;const h=this.constructor,u=h.Πm.get(t);if(void 0!==u&&this.Πh!==u){const t=h.getPropertyOptions(u),p=t.converter,f=null!==(l=null!==(n=null===(r=p)||void 0===r?void 0:r.fromAttribute)&&void 0!==n?n:"function"==typeof p?p:null)&&void 0!==l?l:v.fromAttribute;this.Πh=u,this[u]=f(e,t.type),this.Πh=null}}requestUpdate(t,e,r){let n=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||reactive_element_n)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===r.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,r))):n=!1),!this.isUpdatePending&&n&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach((t,e)=>this[e]=t),this.Πi=void 0);let e=!1;const r=this.L;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(r)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(r)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach((t,e)=>this.Πj(e,this[e],t)),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}var y,g,m,x;a.finalized=!0,a.elementProperties=new Map,a.elementStyles=[],a.shadowRootOptions={mode:"open"},null===(h=(l=globalThis).reactiveElementPlatformSupport)||void 0===h||h.call(l,{ReactiveElement:a}),(null!==(u=(p=globalThis).reactiveElementVersions)&&void 0!==u?u:p.reactiveElementVersions=[]).push("1.0.0-rc.2");const w=globalThis.trustedTypes,S=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,_="?"+$,E=`<${_}>`,P=document,c=(t="")=>P.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,lit_html_a=t=>{var e;return T(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,O=/>/g,B=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,j=/'/g,D=/"/g,V=/^(?:script|style|textarea)$/i,b=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),W=b(1),q=(b(2),Symbol.for("lit-noChange")),K=Symbol.for("lit-nothing"),J=new WeakMap,Z=P.createTreeWalker(P,129,null,!1),M=(t,e)=>{const r=t.length-1,n=[];let l,h=2===e?"<svg>":"",u=U;for(let e=0;e<r;e++){const r=t[e];let p,v,f=-1,y=0;for(;y<r.length&&(u.lastIndex=y,v=u.exec(r),null!==v);)y=u.lastIndex,u===U?"!--"===v[1]?u=A:void 0!==v[1]?u=O:void 0!==v[2]?(V.test(v[2])&&(l=RegExp("</"+v[2],"g")),u=B):void 0!==v[3]&&(u=B):u===B?">"===v[0]?(u=null!=l?l:U,f=-1):void 0===v[1]?f=-2:(f=u.lastIndex-v[2].length,p=v[1],u=void 0===v[3]?B:'"'===v[3]?D:j):u===D||u===j?u=B:u===A||u===O?u=U:(u=B,l=void 0);const g=u===B&&t[e+1].startsWith("/>")?" ":"";h+=u===U?r+E:f>=0?(n.push(p),r.slice(0,f)+"$lit$"+r.slice(f)+$+g):r+$+(-2===f?(n.push(void 0),e):g)}const p=h+(t[r]||"<?>")+(2===e?"</svg>":"");return[void 0!==S?S.createHTML(p):p,n]};class N{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let l=0,h=0;const u=t.length-1,p=this.parts,[v,f]=M(t,e);if(this.el=N.createElement(v,r),Z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=Z.nextNode())&&p.length<u;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const r=f[h++];if(t.push(e),void 0!==r){const t=n.getAttribute(r.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(r);p.push({type:1,index:l,name:e[2],strings:t,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?R:H})}else p.push({type:6,index:l})}for(const e of t)n.removeAttribute(e)}if(V.test(n.tagName)){const t=n.textContent.split($),e=t.length-1;if(e>0){n.textContent=w?w.emptyScript:"";for(let r=0;r<e;r++)n.append(t[r],c()),Z.nextNode(),p.push({type:2,index:++l});n.append(t[e],c())}}}else if(8===n.nodeType)if(n.data===_)p.push({type:2,index:l});else{let t=-1;for(;-1!==(t=n.data.indexOf($,t+1));)p.push({type:7,index:l}),t+=$.length-1}l++}}static createElement(t,e){const r=P.createElement("template");return r.innerHTML=t,r}}function lit_html_S(t,e,r=t,n){var l,h,u,p;if(e===q)return e;let v=void 0!==n?null===(l=r.Σi)||void 0===l?void 0:l[n]:r.Σo;const f=d(e)?void 0:e._$litDirective$;return(null==v?void 0:v.constructor)!==f&&(null===(h=null==v?void 0:v.O)||void 0===h||h.call(v,!1),void 0===f?v=void 0:(v=new f(t),v.T(t,r,n)),void 0!==n?(null!==(u=(p=r).Σi)&&void 0!==u?u:p.Σi=[])[n]=v:r.Σo=v),void 0!==v&&(e=lit_html_S(t,v.S(t,e.values),v,n)),e}class k{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:r},parts:n}=this.D,l=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:P).importNode(r,!0);Z.currentNode=l;let h=Z.nextNode(),u=0,p=0,v=n[0];for(;void 0!==v;){if(u===v.index){let e;2===v.type?e=new C(h,h.nextSibling,this,t):1===v.type?e=new v.ctor(h,v.name,v.strings,this,t):6===v.type&&(e=new z(h,this,t)),this.l.push(e),v=n[++p]}u!==(null==v?void 0:v.index)&&(h=Z.nextNode(),u++)}return l}v(t){let e=0;for(const r of this.l)void 0!==r&&(void 0!==r.strings?(r.I(t,r,e),e+=r.strings.length-2):r.I(t[e])),e++}}class C{constructor(t,e,r,n){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=r,this.options=n}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=lit_html_S(this,t,e),d(t)?t===K||null==t||""===t?(this.H!==K&&this.R(),this.H=K):t!==this.H&&t!==q&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):lit_html_a(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(P.createTextNode(t)),this.H=t}_(t){var e;const{values:r,_$litType$:n}=t,l="number"==typeof n?this.C(t):(void 0===n.el&&(n.el=N.createElement(n.h,this.options)),n);if((null===(e=this.H)||void 0===e?void 0:e.D)===l)this.H.v(r);else{const t=new k(l,this),e=t.u(this.options);t.v(r),this.$(e),this.H=t}}C(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new N(t)),e}g(t){T(this.H)||(this.H=[],this.R());const e=this.H;let r,n=0;for(const l of t)n===e.length?e.push(r=new C(this.k(c()),this.k(c()),this,this.options)):r=e[n],r.I(l),n++;n<e.length&&(this.R(r&&r.B.nextSibling,n),e.length=n)}R(t=this.A.nextSibling,e){var r;for(null===(r=this.P)||void 0===r||r.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class H{constructor(t,e,r,n,l){this.type=1,this.H=K,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=n,this.options=l,r.length>2||""!==r[0]||""!==r[1]?(this.H=Array(r.length-1).fill(K),this.strings=r):this.H=K}get tagName(){return this.element.tagName}I(t,e=this,r,n){const l=this.strings;let h=!1;if(void 0===l)t=lit_html_S(this,t,e,0),h=!d(t)||t!==this.H&&t!==q,h&&(this.H=t);else{const n=t;let u,p;for(t=l[0],u=0;u<l.length-1;u++)p=lit_html_S(this,n[r+u],e,u),p===q&&(p=this.H[u]),h||(h=!d(p)||p!==this.H[u]),p===K?t=K:t!==K&&(t+=(null!=p?p:"")+l[u+1]),this.H[u]=p}h&&!n&&this.W(t)}W(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends H{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===K?void 0:t}}class L extends H{constructor(){super(...arguments),this.type=4}W(t){t&&t!==K?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class R extends H{constructor(){super(...arguments),this.type=5}I(t,e=this){var r;if((t=null!==(r=lit_html_S(this,t,e,0))&&void 0!==r?r:K)===q)return;const n=this.H,l=t===K&&n!==K||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,h=t!==K&&(n===K||l);l&&this.element.removeEventListener(this.name,this,n),h&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,r;"function"==typeof this.H?this.H.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this.H.handleEvent(t)}}class z{constructor(t,e,r){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=r}I(t){lit_html_S(this,t)}}var F,G,Q,X,Y,tt;null===(g=(y=globalThis).litHtmlPlatformSupport)||void 0===g||g.call(y,N,C),(null!==(m=(x=globalThis).litHtmlVersions)&&void 0!==m?m:x.litHtmlVersions=[]).push("2.0.0-rc.3");(null!==(F=(tt=globalThis).litElementVersions)&&void 0!==F?F:tt.litElementVersions=[]).push("3.0.0-rc.2");class lit_element_h extends a{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();super.update(t),this.Φt=((t,e,r)=>{var n,l;const h=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:e;let u=h._$litPart$;if(void 0===u){const t=null!==(l=null==r?void 0:r.renderBefore)&&void 0!==l?l:null;h._$litPart$=u=new C(e.insertBefore(c(),t),t,void 0,r)}return u.I(t),u})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return q}}lit_element_h.finalized=!0,lit_element_h._$litElement$=!0,null===(Q=(G=globalThis).litElementHydrateSupport)||void 0===Q||Q.call(G,{LitElement:lit_element_h}),null===(Y=(X=globalThis).litElementPlatformSupport)||void 0===Y||Y.call(X,{LitElement:lit_element_h});const property_i=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function property_e(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):property_i(t,e)}const et=Element.prototype;et.msMatchesSelector||et.webkitMatchesSelector;const it=i`
  /* scrollbar */
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
    visibility: hidden;
  }
  *::-webkit-scrollbar-track {
    background-color: rgba(var(--neutral-1), 0.05);
    border-radius: 8px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgba(var(--neutral-1), 0.1);
    border-radius: 8px;
  }
  *::-webkit-scrollbar-thumb:active,
  *::-webkit-scrollbar-thumb:hover {
    background-color: rgba(var(--neutral-1), 0.2);
  }
`;var __decorate=function(t,e,r,n){var l,h=arguments.length,u=h<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,r,n);else for(var p=t.length-1;p>=0;p--)(l=t[p])&&(u=(h<3?l(u):h>3?l(e,r,u):l(e,r))||u);return h>3&&u&&Object.defineProperty(e,r,u),u};class korTextarea extends lit_element_h{static get styles(){return[it,i`
        :host {
          display: flex;
          align-items: center;
          min-height: 40px;
          border-width: 0px 0px 1px 0px;
          border-style: solid;
          border-color: rgba(var(--neutral-1), 0.2);
          border-radius: 2px;
          box-sizing: border-box;
          padding: var(--spacing-xs) var(--spacing-s)
            calc(var(--spacing-xs) - 1px) var(--spacing-s);
          width: 100%;
          overflow: visible;
          background-color: rgba(var(--neutral-1), 0.05);
          position: relative;
        }
        :host,
        .label,
        textarea {
          transition: var(--transition-1);
        }
        .center {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        textarea {
          background: none;
          border: none;
          padding: 0px;
          outline: none;
          font: var(--body-1);
          color: var(--text-1);
          resize: none;
        }
        textarea::-webkit-scrollbar {
          display: none;
        }
        /* active */
        :host([active]) {
          border-color: rgba(var(--neutral-1), 0.6);
        }
        :host([active]) .label {
          color: rgb(var(--accent-1));
        }
        /* disabled */
        :host([disabled]) {
          opacity: 0.2;
        }
        :host([disabled]),
        :host([readonly]) {
          pointer-events: none;
        }
        /* readonly */
        :host([readonly]) {
          background: transparent;
        }
        /* label */
        .label {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font: var(--body-1);
          color: var(--text-2);
          pointer-events: none;
        }
        :host([value]) .label,
        :host([active]) .label {
          font: var(--body-2);
        }
        textarea,
        .label {
          line-height: 16px;
        }
        /* clear */
        .clear-icon {
          transition: var(--transition-1), 0.1s opacity ease-out 0.1s;
        }
        :host(:not(:hover):not([active])) .clear-icon {
          transition: var(--transition-1), 0.1s width ease-out 0.1s,
            0.1s margin ease-out 0.1s;
          font-size: 0;
          max-width: 0px;
          max-height: 0px;
          opacity: 0;
          margin-left: 0;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active])) {
            border-color: rgba(var(--neutral-1), 0.4);
          }
        }
      `]}render(){return W`
      <div class="center">
        ${this.label?W` <label class="label">${this.label}</label> `:""}
        <textarea
          .value="${void 0!==this.value?this.value:""}"
          .rows="${this.rows}"
          .columns="${this.rows}"
          ?autofocus="${this.autofocus}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          @focus="${()=>this.active=!0}"
          @blur="${()=>this.active=!1}"
          @input="${this.handleChange}"
        ></textarea>
      </div>
    `}constructor(){super(),this.rows=1,this.autofocus=!1,this.addEventListener("click",()=>{var t,e;this.active=!0,null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("textarea"))||void 0===e||e.focus()})}handleChange(t){this.value=t.target.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleClear(){this.value=void 0,this.removeAttribute("value")}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),this.dispatchEvent(new Event(t+"-changed"))}}__decorate([property_e({type:String,reflect:!0})],korTextarea.prototype,"label",void 0),__decorate([property_e({type:String,reflect:!0})],korTextarea.prototype,"value",void 0),__decorate([property_e({type:Number,reflect:!0})],korTextarea.prototype,"rows",void 0),__decorate([property_e({type:Boolean,reflect:!0})],korTextarea.prototype,"active",void 0),__decorate([property_e({type:Boolean,reflect:!0})],korTextarea.prototype,"disabled",void 0),__decorate([property_e({type:Boolean,reflect:!0})],korTextarea.prototype,"readonly",void 0),__decorate([property_e({type:Boolean,reflect:!0})],korTextarea.prototype,"autofocus",void 0),window.customElements.get("kor-textarea")||window.customElements.define("kor-textarea",korTextarea)})();