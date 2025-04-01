/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;let e=class{constructor(t,i,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const s=this.t;if(i&&void 0===t){const i=void 0!==s&&1===s.length;i&&(t=n.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(s,t))}return t}toString(){return this.cssText}};const o=(t,...i)=>{const n=1===t.length?t[0]:i.reduce(((i,s,n)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new e(n,t,s)},r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new e("string"==typeof t?t:t+"",void 0,s))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:h,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:a,getOwnPropertySymbols:u,getPrototypeOf:f}=Object,d=globalThis,p=d.trustedTypes,v=p?p.emptyScript:"",y=d.reactiveElementPolyfillSupport,b=(t,i)=>t,g={toAttribute(t,i){switch(i){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},w=(t,i)=>!h(t,i),m={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),d.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=m){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(t,s,i);void 0!==n&&l(this.prototype,t,n)}}static getPropertyDescriptor(t,i,s){const{get:n,set:e}=c(this.prototype,t)??{get(){return this[i]},set(t){this[i]=t}};return{get(){return n?.call(this)},set(i){const o=n?.call(this);e.call(this,i),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??m}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,i=[...a(t),...u(t)];for(const s of i)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const i=litPropertyMetadata.get(t);if(void 0!==i)for(const[t,s]of i)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(r(t))}else void 0!==t&&i.push(r(t));return i}static _$Eu(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const s of i.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((s,n)=>{if(i)s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of n){const n=document.createElement("style"),e=t.litNonce;void 0!==e&&n.setAttribute("nonce",e),n.textContent=i.cssText,s.appendChild(n)}})(s,this.constructor.elementStyles),s}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EC(t,i){const s=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,s);if(void 0!==n&&!0===s.reflect){const e=(void 0!==s.converter?.toAttribute?s.converter:g).toAttribute(i,s.type);this._$Em=t,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._$Em=null}}_$AK(t,i){const s=this.constructor,n=s._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=s.getPropertyOptions(n),e="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:g;this._$Em=n,this[n]=e.fromAttribute(i,t.type),this._$Em=null}}requestUpdate(t,i,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??w)(this[t],i))return;this.P(t,i,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,i,s){this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,i]of this._$Ep)this[t]=i;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[i,s]of t)!0!==s.wrapped||this._$AL.has(i)||void 0===this[i]||this.P(i,this[i],s)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(i)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[b("elementProperties")]=new Map,x[b("finalized")]=new Map,y?.({ReactiveElement:x}),(d.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,S=$.trustedTypes,k=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+C,_=`<${E}>`,O=document,T=()=>O.createComment(""),j=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,U="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,N=/>/g,B=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,R=/"/g,H=/^(?:script|style|textarea|title)$/i,I=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),D=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),J=new WeakMap,K=O.createTreeWalker(O,129);function V(t,i){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(i):i}const Z=(t,i)=>{const s=t.length-1,n=[];let e,o=2===i?"<svg>":3===i?"<math>":"",r=z;for(let i=0;i<s;i++){const s=t[i];let h,l,c=-1,a=0;for(;a<s.length&&(r.lastIndex=a,l=r.exec(s),null!==l);)a=r.lastIndex,r===z?"!--"===l[1]?r=P:void 0!==l[1]?r=N:void 0!==l[2]?(H.test(l[2])&&(e=RegExp("</"+l[2],"g")),r=B):void 0!==l[3]&&(r=B):r===B?">"===l[0]?(r=e??z,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,h=l[1],r=void 0===l[3]?B:'"'===l[3]?R:L):r===R||r===L?r=B:r===P||r===N?r=z:(r=B,e=void 0);const u=r===B&&t[i+1].startsWith("/>")?" ":"";o+=r===z?s+_:c>=0?(n.push(h),s.slice(0,c)+A+s.slice(c)+C+u):s+C+(-2===c?i:u)}return[V(t,o+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),n]};class q{constructor({strings:t,_$litType$:i},s){let n;this.parts=[];let e=0,o=0;const r=t.length-1,h=this.parts,[l,c]=Z(t,i);if(this.el=q.createElement(l,s),K.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=K.nextNode())&&h.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(A)){const i=c[o++],s=n.getAttribute(t).split(C),r=/([.?@])?(.*)/.exec(i);h.push({type:1,index:e,name:r[2],strings:s,ctor:"."===r[1]?Y:"?"===r[1]?tt:"@"===r[1]?it:X}),n.removeAttribute(t)}else t.startsWith(C)&&(h.push({type:6,index:e}),n.removeAttribute(t));if(H.test(n.tagName)){const t=n.textContent.split(C),i=t.length-1;if(i>0){n.textContent=S?S.emptyScript:"";for(let s=0;s<i;s++)n.append(t[s],T()),K.nextNode(),h.push({type:2,index:++e});n.append(t[i],T())}}}else if(8===n.nodeType)if(n.data===E)h.push({type:2,index:e});else{let t=-1;for(;-1!==(t=n.data.indexOf(C,t+1));)h.push({type:7,index:e}),t+=C.length-1}e++}}static createElement(t,i){const s=O.createElement("template");return s.innerHTML=t,s}}function F(t,i,s=t,n){if(i===D)return i;let e=void 0!==n?s._$Co?.[n]:s._$Cl;const o=j(i)?void 0:i._$litDirective$;return e?.constructor!==o&&(e?._$AO?.(!1),void 0===o?e=void 0:(e=new o(t),e._$AT(t,s,n)),void 0!==n?(s._$Co??=[])[n]=e:s._$Cl=e),void 0!==e&&(i=F(t,e._$AS(t,i.values),e,n)),i}class G{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,n=(t?.creationScope??O).importNode(i,!0);K.currentNode=n;let e=K.nextNode(),o=0,r=0,h=s[0];for(;void 0!==h;){if(o===h.index){let i;2===h.type?i=new Q(e,e.nextSibling,this,t):1===h.type?i=new h.ctor(e,h.name,h.strings,this,t):6===h.type&&(i=new st(e,this,t)),this._$AV.push(i),h=s[++r]}o!==h?.index&&(e=K.nextNode(),o++)}return K.currentNode=O,n}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,n){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=F(this,t,i),j(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==D&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=q.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===n)this._$AH.p(i);else{const t=new G(n,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t}}_$AC(t){let i=J.get(t.strings);return void 0===i&&J.set(t.strings,i=new q(t)),i}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,n=0;for(const e of t)n===i.length?i.push(s=new Q(this.O(T()),this.O(T()),this,this.options)):s=i[n],s._$AI(e),n++;n<i.length&&(this._$AR(s&&s._$AB.nextSibling,n),i.length=n)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,n,e){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=i,this._$AM=n,this.options=e,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,i=this,s,n){const e=this.strings;let o=!1;if(void 0===e)t=F(this,t,i,0),o=!j(t)||t!==this._$AH&&t!==D,o&&(this._$AH=t);else{const n=t;let r,h;for(t=e[0],r=0;r<e.length-1;r++)h=F(this,n[s+r],i,r),h===D&&(h=this._$AH[r]),o||=!j(h)||h!==this._$AH[r],h===W?t=W:t!==W&&(t+=(h??"")+e[r+1]),this._$AH[r]=h}o&&!n&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Y extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class tt extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends X{constructor(t,i,s,n,e){super(t,i,s,n,e),this.type=5}_$AI(t,i=this){if((t=F(this,t,i,0)??W)===D)return;const s=this._$AH,n=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,e=t!==W&&(s===W||n);n&&this.element.removeEventListener(this.name,this,s),e&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const nt=$.litHtmlPolyfillSupport;nt?.(q,Q),($.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let et=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{const n=s?.renderBefore??i;let e=n._$litPart$;if(void 0===e){const t=s?.renderBefore??null;n._$litPart$=e=new Q(i.insertBefore(T(),t),t,void 0,s??{})}return e._$AI(t),e})(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}};et._$litElement$=!0,et.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:et});const ot=globalThis.litElementPolyfillSupport;ot?.({LitElement:et}),(globalThis.litElementVersions??=[]).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt=t=>(i,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,i)})):customElements.define(t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ht={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:w},lt=(t=ht,i,s)=>{const{kind:n,metadata:e}=s;let o=globalThis.litPropertyMetadata.get(e);if(void 0===o&&globalThis.litPropertyMetadata.set(e,o=new Map),o.set(s.name,t),"accessor"===n){const{name:n}=s;return{set(s){const e=i.get.call(this);i.set.call(this,s),this.requestUpdate(n,e,t)},init(i){return void 0!==i&&this.P(n,void 0,t),i}}}if("setter"===n){const{name:n}=s;return function(s){const e=this[n];i.call(this,s),this.requestUpdate(n,e,t)}}throw Error("Unsupported decorator location: "+n)};function ct(t){return(i,s)=>"object"==typeof s?lt(t,i,s):((t,i,s)=>{const n=i.hasOwnProperty(s);return i.constructor.createProperty(s,n?{...t,wrapped:!0}:t),n?Object.getOwnPropertyDescriptor(i,s):void 0})(t,i,s)}const at=o`
  :host {
    --initial-text-color: yellow;
    --initial-background-color: rgba(0, 0, 0, 0.9);
    --initial-font-family: 'Courier New', monospace;
    --initial-font-size: 20px;
  }

  :host {
    color: var(--initial-text-color, black);
    background: var(--initial-background-color, white);
    font-family: var(--initial-font-family);
    font-size: var(--initial-font-size, 20px);
    border-bottom: 1px solid transparent;
    box-shadow: 0 4px 48px transparent;
    position: fixed;
    top: -50%;
    left: 0;
    width: 100%;
    height: 50vh;
    transition: top 0.3s ease-in-out;
    z-index: 10000;
    display: block;
    box-sizing: border-box;
  }
  :host button {
    color: var(--initial-text-color, black);
    background: var(--initial-background-color, white);
    font-family: var(--initial-font-family);
    border: 1px solid #888;
    border-top: none;
    position: absolute;
    right: 10px;
    bottom: calc(-24px);
    height: 24px;
    border-radius: 0 0 4px 4px;
    padding: 0 8px;
    z-index: 1;
    cursor: pointer;
  }
  :host([open]) {
    top: 0;
    border-bottom: 1px solid #888;
    box-shadow: 0 4px 48px #555;
  }
  :host([static]) {
    border-bottom: 1px inner solid transparent;
    box-shadow: none;
    position: relative;
    top: 0;
    z-index: 1;
    height: 100%;
    display: block;
    overflow-y: auto;
  }
`;class ut{constructor(){this.audioContext=null,this.audioContext=new(window.AudioContext||window.AudioContext)}playSound(t,i,s){if(!this.audioContext)return;const n=this.audioContext.createGain(),e=this.audioContext.createOscillator();e.type=i,e.frequency.value=t,e.connect(n),n.connect(this.audioContext.destination),n.gain.setValueAtTime(.033,this.audioContext.currentTime),e.start(),e.stop(this.audioContext.currentTime+s)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=2,dt=t=>(...i)=>({_$litDirective$:t,values:i});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=(t,i)=>{const s=t._$AN;if(void 0===s)return!1;for(const t of s)t._$AO?.(i,!1),vt(t,i);return!0},yt=t=>{let i,s;do{if(void 0===(i=t._$AM))break;s=i._$AN,s.delete(t),t=i}while(0===s?.size)},bt=t=>{for(let i;i=t._$AM;t=i){let s=i._$AN;if(void 0===s)i._$AN=s=new Set;else if(s.has(t))break;s.add(t),mt(i)}};function gt(t){void 0!==this._$AN?(yt(this),this._$AM=t,bt(this)):this._$AM=t}function wt(t,i=!1,s=0){const n=this._$AH,e=this._$AN;if(void 0!==e&&0!==e.size)if(i)if(Array.isArray(n))for(let t=s;t<n.length;t++)vt(n[t],!1),yt(n[t]);else null!=n&&(vt(n,!1),yt(n));else vt(this,t)}const mt=t=>{t.type==ft&&(t._$AP??=wt,t._$AQ??=gt)};class xt extends pt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,s){super._$AT(t,i,s),bt(this),this.isConnected=t._$AU}_$AO(t,i=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),i&&(vt(this,t),yt(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=()=>new St;class St{}const kt=new WeakMap,At=dt(class extends xt{render(t){return W}update(t,[i]){const s=i!==this.Y;return s&&void 0!==this.Y&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=i,this.ht=t.options?.host,this.rt(this.ct=t.element)),W}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const i=this.ht??globalThis;let s=kt.get(i);void 0===s&&(s=new WeakMap,kt.set(i,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return"function"==typeof this.Y?kt.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Ct=o`
  :host {
    --initial-text-color: white; /* Changes text color to blue */
    --initial-background-color: rgba(
      0,
      0,
      0,
      0.9
    ); /* Changes background to gray */
    --initial-font-family: 'Courier New', monospace; /* Changes font to Arial */
  }

  :host {
    color: var(--initial-text-color, black);
    background: var(--initial-background-color, white);
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    height: 50vh;
    transition: top 0.3s ease-in-out;
    z-index: 1000;
    display: block;
    font-size: 20px;
    position: relative;
    top: 0;
    z-index: 1;
    height: 100%;
    display: block;
    overflow-y: auto;
  }
  p {
    margin: 0 0 4px 0;
  }
  .console {
    display: flex;
    overflow-y: auto;
    align-items: stretch;
    height: 100%;
  }
  .terminal {
    margin: 15px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    font-family: var(--initial-font-family, 'Courier New, monospace');
    color: var(--initial-text-color, black);
  }
  .banner {
    color: #ffffff;
    margin-bottom: 10px;
  }
  .shell {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-bottom: 10px;
    overflow-y: auto;
    align-items: baseline;
    justify-content: end;
    font-size: 20px;
  }
  .input-line {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .prompt {
    margin-right: 5px;
  }
  input {
    background: transparent;
    border: none;
    color: #00ff00;
    color: white;
    font-family: inherit;
    font-size: 20px;
    flex-grow: 1;
    padding: 4px;
    outline: none;
  }
  input::placeholder {
    color: #008000;
    color: blue;
  }
  .error {
    color: #ff4040;
    color: red;
  }

  .text-red {
    color: #ff0000;
  }
  .text-yellow {
    color: #ffff00;
  }
  .text-blue {
    color: #88aaff;
  }
  .text-green {
    color: #00ff00;
  }
  .text-bold {
    font-weight: bold;
  }
  .text-italic {
    font-style: italic;
  }
`;var Et=function(t,i){return Et=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])},Et(t,i)};function _t(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function s(){this.constructor=t}Et(t,i),t.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}function Ot(t){var i="function"==typeof Symbol&&Symbol.iterator,s=i&&t[i],n=0;if(s)return s.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(i?"Object is not iterable.":"Symbol.iterator is not defined.")}function Tt(t,i){var s="function"==typeof Symbol&&t[Symbol.iterator];if(!s)return t;var n,e,o=s.call(t),r=[];try{for(;(void 0===i||i-- >0)&&!(n=o.next()).done;)r.push(n.value)}catch(t){e={error:t}}finally{try{n&&!n.done&&(s=o.return)&&s.call(o)}finally{if(e)throw e.error}}return r}function jt(t,i,s){if(s||2===arguments.length)for(var n,e=0,o=i.length;e<o;e++)!n&&e in i||(n||(n=Array.prototype.slice.call(i,0,e)),n[e]=i[e]);return t.concat(n||Array.prototype.slice.call(i))}function Mt(t){return"function"==typeof t}function Ut(t){var i=t((function(t){Error.call(t),t.stack=(new Error).stack}));return i.prototype=Object.create(Error.prototype),i.prototype.constructor=i,i}"function"==typeof SuppressedError&&SuppressedError;var zt=Ut((function(t){return function(i){t(this),this.message=i?i.length+" errors occurred during unsubscription:\n"+i.map((function(t,i){return i+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=i}}));function Pt(t,i){if(t){var s=t.indexOf(i);0<=s&&t.splice(s,1)}}var Nt=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}var i;return t.prototype.unsubscribe=function(){var t,i,s,n,e;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var r=Ot(o),h=r.next();!h.done;h=r.next()){h.value.remove(this)}}catch(i){t={error:i}}finally{try{h&&!h.done&&(i=r.return)&&i.call(r)}finally{if(t)throw t.error}}else o.remove(this);var l=this.initialTeardown;if(Mt(l))try{l()}catch(t){e=t instanceof zt?t.errors:[t]}var c=this._finalizers;if(c){this._finalizers=null;try{for(var a=Ot(c),u=a.next();!u.done;u=a.next()){var f=u.value;try{Rt(f)}catch(t){e=null!=e?e:[],t instanceof zt?e=jt(jt([],Tt(e)),Tt(t.errors)):e.push(t)}}}catch(t){s={error:t}}finally{try{u&&!u.done&&(n=a.return)&&n.call(a)}finally{if(s)throw s.error}}}if(e)throw new zt(e)}},t.prototype.add=function(i){var s;if(i&&i!==this)if(this.closed)Rt(i);else{if(i instanceof t){if(i.closed||i._hasParent(this))return;i._addParent(this)}(this._finalizers=null!==(s=this._finalizers)&&void 0!==s?s:[]).push(i)}},t.prototype._hasParent=function(t){var i=this._parentage;return i===t||Array.isArray(i)&&i.includes(t)},t.prototype._addParent=function(t){var i=this._parentage;this._parentage=Array.isArray(i)?(i.push(t),i):i?[i,t]:t},t.prototype._removeParent=function(t){var i=this._parentage;i===t?this._parentage=null:Array.isArray(i)&&Pt(i,t)},t.prototype.remove=function(i){var s=this._finalizers;s&&Pt(s,i),i instanceof t&&i._removeParent(this)},t.EMPTY=((i=new t).closed=!0,i),t}(),Bt=Nt.EMPTY;function Lt(t){return t instanceof Nt||t&&"closed"in t&&Mt(t.remove)&&Mt(t.add)&&Mt(t.unsubscribe)}function Rt(t){Mt(t)?t():t.unsubscribe()}var Ht={Promise:void 0},It=function(t,i){for(var s=[],n=2;n<arguments.length;n++)s[n-2]=arguments[n];return setTimeout.apply(void 0,jt([t,i],Tt(s)))};function Dt(){}function Wt(t){t()}var Jt=function(t){function i(i){var s=t.call(this)||this;return s.isStopped=!1,i?(s.destination=i,Lt(i)&&i.add(s)):s.destination=qt,s}return _t(i,t),i.create=function(t,i,s){return new Vt(t,i,s)},i.prototype.next=function(t){this.isStopped||this._next(t)},i.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},i.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},i.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},i.prototype._next=function(t){this.destination.next(t)},i.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},i.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},i}(Nt),Kt=function(){function t(t){this.partialObserver=t}return t.prototype.next=function(t){var i=this.partialObserver;if(i.next)try{i.next(t)}catch(t){Zt(t)}},t.prototype.error=function(t){var i=this.partialObserver;if(i.error)try{i.error(t)}catch(t){Zt(t)}else Zt(t)},t.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(t){Zt(t)}},t}(),Vt=function(t){function i(i,s,n){var e,o=t.call(this)||this;return e=Mt(i)||!i?{next:null!=i?i:void 0,error:null!=s?s:void 0,complete:null!=n?n:void 0}:i,o.destination=new Kt(e),o}return _t(i,t),i}(Jt);function Zt(t){var i;i=t,It((function(){throw i}))}var qt={closed:!0,next:Dt,error:function(t){throw t},complete:Dt},Ft="function"==typeof Symbol&&Symbol.observable||"@@observable";function Gt(t){return t}var Qt=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(i){var s=new t;return s.source=this,s.operator=i,s},t.prototype.subscribe=function(t,i,s){var n,e=this,o=(n=t)&&n instanceof Jt||function(t){return t&&Mt(t.next)&&Mt(t.error)&&Mt(t.complete)}(n)&&Lt(n)?t:new Vt(t,i,s);return Wt((function(){var t=e,i=t.operator,s=t.source;o.add(i?i.call(o,s):s?e._subscribe(o):e._trySubscribe(o))})),o},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(i){t.error(i)}},t.prototype.forEach=function(t,i){var s=this;return new(i=Xt(i))((function(i,n){var e=new Vt({next:function(i){try{t(i)}catch(t){n(t),e.unsubscribe()}},error:n,complete:i});s.subscribe(e)}))},t.prototype._subscribe=function(t){var i;return null===(i=this.source)||void 0===i?void 0:i.subscribe(t)},t.prototype[Ft]=function(){return this},t.prototype.pipe=function(){for(var t,i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];return(0===(t=i).length?Gt:1===t.length?t[0]:function(i){return t.reduce((function(t,i){return i(t)}),i)})(this)},t.prototype.toPromise=function(t){var i=this;return new(t=Xt(t))((function(t,s){var n;i.subscribe((function(t){return n=t}),(function(t){return s(t)}),(function(){return t(n)}))}))},t.create=function(i){return new t(i)},t}();function Xt(t){var i;return null!==(i=null!=t?t:Ht.Promise)&&void 0!==i?i:Promise}var Yt=Ut((function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),ti=function(t){function i(){var i=t.call(this)||this;return i.closed=!1,i.currentObservers=null,i.observers=[],i.isStopped=!1,i.hasError=!1,i.thrownError=null,i}return _t(i,t),i.prototype.lift=function(t){var i=new ii(this,this);return i.operator=t,i},i.prototype._throwIfClosed=function(){if(this.closed)throw new Yt},i.prototype.next=function(t){var i=this;Wt((function(){var s,n;if(i._throwIfClosed(),!i.isStopped){i.currentObservers||(i.currentObservers=Array.from(i.observers));try{for(var e=Ot(i.currentObservers),o=e.next();!o.done;o=e.next()){o.value.next(t)}}catch(t){s={error:t}}finally{try{o&&!o.done&&(n=e.return)&&n.call(e)}finally{if(s)throw s.error}}}}))},i.prototype.error=function(t){var i=this;Wt((function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=t;for(var s=i.observers;s.length;)s.shift().error(t)}}))},i.prototype.complete=function(){var t=this;Wt((function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var i=t.observers;i.length;)i.shift().complete()}}))},i.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(i.prototype,"observed",{get:function(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0},enumerable:!1,configurable:!0}),i.prototype._trySubscribe=function(i){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,i)},i.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},i.prototype._innerSubscribe=function(t){var i=this,s=this,n=s.hasError,e=s.isStopped,o=s.observers;return n||e?Bt:(this.currentObservers=null,o.push(t),new Nt((function(){i.currentObservers=null,Pt(o,t)})))},i.prototype._checkFinalizedStatuses=function(t){var i=this,s=i.hasError,n=i.thrownError,e=i.isStopped;s?t.error(n):e&&t.complete()},i.prototype.asObservable=function(){var t=new Qt;return t.source=this,t},i.create=function(t,i){return new ii(t,i)},i}(Qt),ii=function(t){function i(i,s){var n=t.call(this)||this;return n.destination=i,n.source=s,n}return _t(i,t),i.prototype.next=function(t){var i,s;null===(s=null===(i=this.destination)||void 0===i?void 0:i.next)||void 0===s||s.call(i,t)},i.prototype.error=function(t){var i,s;null===(s=null===(i=this.destination)||void 0===i?void 0:i.error)||void 0===s||s.call(i,t)},i.prototype.complete=function(){var t,i;null===(i=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===i||i.call(t)},i.prototype._subscribe=function(t){var i,s;return null!==(s=null===(i=this.source)||void 0===i?void 0:i.subscribe(t))&&void 0!==s?s:Bt},i}(ti);class si{constructor(t){this.options=t,this.events=new ti,this.coreCommands={info:()=>this.putMessage(["Hey hi!","Have a great day!"]),version:()=>{},clear:()=>{this.history=[]},exit:()=>(this.putMessage(["Bye!"]),">>event:callback:close")},this.history=[],this.messages=[]}init(){this.options.banner&&this.putMessage([this.options.banner])}async processInput(t){t=t.trim();const i=await this._processCommand(t);if(i)if(i.startsWith(">>event:")){const t=i.replace(">>event:",""),s=new Event(t);this.events.next(s)}else this.putMessage([i]);return i??[]}putMessage(t){this.history=[...this.history,...this.messages],this.messages=[...t]}putHistory(t,i=!1){this.history=[...this.history,i?`Error: ${t}`:t]}async _processCommand(t){const i=t.trim().toLowerCase();return this.coreCommands[i]?this.coreCommands[i]():`ish :: Command not found: ${t}`}clear(){this.history=[],this.events.unsubscribe()}}function ni(t,...i){const s={red:"text-red",yellow:"text-yellow",blue:"text-blue",green:"text-green",bold:"text-bold",italic:"text-italic"};let n="";return t.forEach(((t,e)=>{if(n+=t,i[e]){const[t,o]=i[e],r=(Array.isArray(o)?o:[o]).map((t=>s[t]||"")).join(" ").trim();n+=`<span class="${r}">${t}</span>`}})),n}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ei extends pt{constructor(t){if(super(t),this.it=W,t.type!==ft)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===W||null==t)return this._t=void 0,this.it=t;if(t===D)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}ei.directiveName="unsafeHTML",ei.resultType=1;const oi=dt(ei);var ri=function(t,i,s,n){for(var e,o=arguments.length,r=o<3?i:null===n?n=Object.getOwnPropertyDescriptor(i,s):n,h=t.length-1;h>=0;h--)(e=t[h])&&(r=(o<3?e(r):o>3?e(i,s,r):e(i,s))||r);return o>3&&r&&Object.defineProperty(i,s,r),r};let hi=class extends et{constructor(){super(),this.banner='initial.sh - Type "info"',this.sounds=!1,this.theInput=$t(),this.audio=null,this.site=window.location.hostname||"unknown site",this.pluginCommands={},this.history=[],this.focusInput=()=>{this.theInput?.value?.focus()},this.messages=[],this.typedMessages=[],this.typingSpeed=100,this.shell=new si({banner:this.banner}),this.promptSign=ni`${[this.site,["red","bold"]]} >> `,this.shell.init(),this.shell.events.subscribe((t=>{this.dispatchEvent(t)}))}firstUpdated(){this.sounds&&(this.audio=new ut);const t=this.shadowRoot?.querySelectorAll("p.typed");t&&t.forEach((t=>{}))}disconnectedCallback(){this.shell.events.unsubscribe(),this.shell.clear(),super.disconnectedCallback()}render(){return this.history=[...this.shell.history],this.messages=[...this.shell.messages],I`
      <div class="console" @click=${this.handleClick}>
        <div class="terminal">
          <div class="shell">
            ${this.history.map((t=>I`<p class=${t.startsWith("Error")?"error":""}>
                ${oi(t)}
              </p>`))}
            ${this.messages.map((t=>I`<p class="typed">${oi(t)}</p>`))}
          </div>
          <div class="input-line">
            <span class="prompt">
              ${I`${oi(this.promptSign)}`}
            </span>
            <input
              ${At(this.theInput)}
              @keydown=${this.handleInput}
              placeholder=""
              autofocus
            />
          </div>
        </div>
      </div>
    `}async handleInput(t){const i=t.target.value.trim();if("Enter"===t.key){if(t.target.value="",!i)return void this.audio?.playSound(100,"sine",.01);this.shell.putMessage([`${this.promptSign} ${i}`]),await this.shell.processInput(i),this.requestUpdate()}}handleClick(){const t=this.theInput.value;t&&t.focus()}};hi.styles=Ct,ri([ct({type:String,reflect:!1})],hi.prototype,"banner",void 0),ri([ct({type:Boolean,reflect:!1})],hi.prototype,"sounds",void 0),ri([ct({type:Array})],hi.prototype,"messages",void 0),ri([ct({type:Array})],hi.prototype,"typedMessages",void 0),ri([ct({type:Number})],hi.prototype,"typingSpeed",void 0),hi=ri([rt("initial-shell")],hi),window.InitialIntShell={registerPlugin:(t,i)=>{const s=document.querySelector("initial-shell");s&&(s.pluginCommands[t]=i)}};var li=function(t,i,s,n){for(var e,o=arguments.length,r=o<3?i:null===n?n=Object.getOwnPropertyDescriptor(i,s):n,h=t.length-1;h>=0;h--)(e=t[h])&&(r=(o<3?e(r):o>3?e(i,s,r):e(i,s))||r);return o>3&&r&&Object.defineProperty(i,s,r),r};let ci=class extends et{constructor(){super(),this.config={showDrop:!1},this.apiUrl="",this.open=!1,this.static=!1,this.sounds=!1,this.pluginCommands={},this.audio=null,this.shellElement=$t(),this.static||document.addEventListener("keyup",this.handleKeydown.bind(this))}disconnectedCallback(){document.removeEventListener("keyup",this.handleKeydown.bind(this)),super.disconnectedCallback()}firstUpdated(){this.static&&this.show(),this.sounds&&(this.audio=new ut),this.shellElement?.value&&this.shellElement.value.addEventListener("callback:close",(()=>{this.close()}))}render(){return I`<initial-shell
        ${At(this.shellElement)}
        static
        ?sounds=${this.sounds}
      ></initial-shell>
      ${this.config.showDrop&&!this.static?I`
            <button @click=${()=>this.open?this.close():this.show()}>
              initial
              ${this.open?I`<svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
                    ></path>
                  </svg>`:I`<svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                    ></path>
                  </svg>`}
            </button>
          `:""} `}handleKeydown(t){"Help"!==t.key||t.shiftKey||t.ctrlKey||t.altKey||(this.open?this.close():this.show())}show(){this.open||(this.open=!0,this.audio?.playSound(900,"triangle",.08),this.shellElement.value?.focusInput())}close(){this.open&&(this.open=!1,this.audio?.playSound(500,"sine",.05))}};ci.styles=at,li([ct({type:Object})],ci.prototype,"config",void 0),li([ct({type:String})],ci.prototype,"apiUrl",void 0),li([ct({type:Boolean,reflect:!0})],ci.prototype,"open",void 0),li([ct({type:Boolean,reflect:!0})],ci.prototype,"static",void 0),li([ct({type:Boolean,reflect:!1})],ci.prototype,"sounds",void 0),ci=li([rt("initial-console")],ci),window.InitialIntConsole={registerPlugin:(t,i)=>{const s=document.querySelector("initial-console");s&&(s.pluginCommands[t]=i)}};export{ci as InitialConsole};
