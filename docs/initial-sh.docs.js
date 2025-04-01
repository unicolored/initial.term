!function(t){
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const i=globalThis,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),e=new WeakMap;let o=class{constructor(t,i,s){if(this._$cssResult$=!0,s!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(s&&void 0===t){const s=void 0!==i&&1===i.length;s&&(t=e.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&e.set(i,t))}return t}toString(){return this.cssText}};const r=(t,...i)=>{const s=1===t.length?t[0]:i.reduce(((i,s,n)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o(s,t,n)},h=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,n))(i)})(t):t
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */,{is:c,defineProperty:l,getOwnPropertyDescriptor:a,getOwnPropertyNames:u,getOwnPropertySymbols:f,getPrototypeOf:d}=Object,p=globalThis,v=p.trustedTypes,y=v?v.emptyScript:"",b=p.reactiveElementPolyfillSupport,g=(t,i)=>t,w={toAttribute(t,i){switch(i){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},m=(t,i)=>!c(t,i),x={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:m};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=x){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(t,s,i);void 0!==n&&l(this.prototype,t,n)}}static getPropertyDescriptor(t,i,s){const{get:n,set:e}=a(this.prototype,t)??{get(){return this[i]},set(t){this[i]=t}};return{get(){return n?.call(this)},set(i){const o=n?.call(this);e.call(this,i),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,i=[...u(t),...f(t)];for(const s of i)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const i=litPropertyMetadata.get(t);if(void 0!==i)for(const[t,s]of i)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(h(t))}else void 0!==t&&i.push(h(t));return i}static _$Eu(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const s of i.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{if(s)t.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of n){const n=document.createElement("style"),e=i.litNonce;void 0!==e&&n.setAttribute("nonce",e),n.textContent=s.cssText,t.appendChild(n)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EC(t,i){const s=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,s);if(void 0!==n&&!0===s.reflect){const e=(void 0!==s.converter?.toAttribute?s.converter:w).toAttribute(i,s.type);this._$Em=t,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._$Em=null}}_$AK(t,i){const s=this.constructor,n=s._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=s.getPropertyOptions(n),e="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:w;this._$Em=n,this[n]=e.fromAttribute(i,t.type),this._$Em=null}}requestUpdate(t,i,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??m)(this[t],i))return;this.P(t,i,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,i,s){this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,i]of this._$Ep)this[t]=i;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[i,s]of t)!0!==s.wrapped||this._$AL.has(i)||void 0===this[i]||this.P(i,this[i],s)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(i)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[g("elementProperties")]=new Map,$[g("finalized")]=new Map,b?.({ReactiveElement:$}),(p.reactiveElementVersions??=[]).push("2.0.4");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const S=globalThis,k=S.trustedTypes,A=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,_="?"+E,O=`<${_}>`,T=document,j=()=>T.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,z="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,B=/>/g,L=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,H=/"/g,I=/^(?:script|style|textarea|title)$/i,D=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),W=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),K=new WeakMap,V=T.createTreeWalker(T,129);function Z(t,i){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(i):i}const q=(t,i)=>{const s=t.length-1,n=[];let e,o=2===i?"<svg>":3===i?"<math>":"",r=P;for(let i=0;i<s;i++){const s=t[i];let h,c,l=-1,a=0;for(;a<s.length&&(r.lastIndex=a,c=r.exec(s),null!==c);)a=r.lastIndex,r===P?"!--"===c[1]?r=N:void 0!==c[1]?r=B:void 0!==c[2]?(I.test(c[2])&&(e=RegExp("</"+c[2],"g")),r=L):void 0!==c[3]&&(r=L):r===L?">"===c[0]?(r=e??P,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,h=c[1],r=void 0===c[3]?L:'"'===c[3]?H:R):r===H||r===R?r=L:r===N||r===B?r=P:(r=L,e=void 0);const u=r===L&&t[i+1].startsWith("/>")?" ":"";o+=r===P?s+O:l>=0?(n.push(h),s.slice(0,l)+C+s.slice(l)+E+u):s+E+(-2===l?i:u)}return[Z(t,o+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),n]};class F{constructor({strings:t,_$litType$:i},s){let n;this.parts=[];let e=0,o=0;const r=t.length-1,h=this.parts,[c,l]=q(t,i);if(this.el=F.createElement(c,s),V.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=V.nextNode())&&h.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(C)){const i=l[o++],s=n.getAttribute(t).split(E),r=/([.?@])?(.*)/.exec(i);h.push({type:1,index:e,name:r[2],strings:s,ctor:"."===r[1]?tt:"?"===r[1]?it:"@"===r[1]?st:Y}),n.removeAttribute(t)}else t.startsWith(E)&&(h.push({type:6,index:e}),n.removeAttribute(t));if(I.test(n.tagName)){const t=n.textContent.split(E),i=t.length-1;if(i>0){n.textContent=k?k.emptyScript:"";for(let s=0;s<i;s++)n.append(t[s],j()),V.nextNode(),h.push({type:2,index:++e});n.append(t[i],j())}}}else if(8===n.nodeType)if(n.data===_)h.push({type:2,index:e});else{let t=-1;for(;-1!==(t=n.data.indexOf(E,t+1));)h.push({type:7,index:e}),t+=E.length-1}e++}}static createElement(t,i){const s=T.createElement("template");return s.innerHTML=t,s}}function G(t,i,s=t,n){if(i===W)return i;let e=void 0!==n?s._$Co?.[n]:s._$Cl;const o=M(i)?void 0:i._$litDirective$;return e?.constructor!==o&&(e?._$AO?.(!1),void 0===o?e=void 0:(e=new o(t),e._$AT(t,s,n)),void 0!==n?(s._$Co??=[])[n]=e:s._$Cl=e),void 0!==e&&(i=G(t,e._$AS(t,i.values),e,n)),i}class Q{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,n=(t?.creationScope??T).importNode(i,!0);V.currentNode=n;let e=V.nextNode(),o=0,r=0,h=s[0];for(;void 0!==h;){if(o===h.index){let i;2===h.type?i=new X(e,e.nextSibling,this,t):1===h.type?i=new h.ctor(e,h.name,h.strings,this,t):6===h.type&&(i=new nt(e,this,t)),this._$AV.push(i),h=s[++r]}o!==h?.index&&(e=V.nextNode(),o++)}return V.currentNode=T,n}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,n){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=G(this,t,i),M(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==J&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=F.createElement(Z(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===n)this._$AH.p(i);else{const t=new Q(n,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t}}_$AC(t){let i=K.get(t.strings);return void 0===i&&K.set(t.strings,i=new F(t)),i}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,n=0;for(const e of t)n===i.length?i.push(s=new X(this.O(j()),this.O(j()),this,this.options)):s=i[n],s._$AI(e),n++;n<i.length&&(this._$AR(s&&s._$AB.nextSibling,n),i.length=n)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,n,e){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=i,this._$AM=n,this.options=e,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=J}_$AI(t,i=this,s,n){const e=this.strings;let o=!1;if(void 0===e)t=G(this,t,i,0),o=!M(t)||t!==this._$AH&&t!==W,o&&(this._$AH=t);else{const n=t;let r,h;for(t=e[0],r=0;r<e.length-1;r++)h=G(this,n[s+r],i,r),h===W&&(h=this._$AH[r]),o||=!M(h)||h!==this._$AH[r],h===J?t=J:t!==J&&(t+=(h??"")+e[r+1]),this._$AH[r]=h}o&&!n&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}class it extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class st extends Y{constructor(t,i,s,n,e){super(t,i,s,n,e),this.type=5}_$AI(t,i=this){if((t=G(this,t,i,0)??J)===W)return;const s=this._$AH,n=t===J&&s!==J||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,e=t!==J&&(s===J||n);n&&this.element.removeEventListener(this.name,this,s),e&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const et=S.litHtmlPolyfillSupport;et?.(F,X),(S.litHtmlVersions??=[]).push("3.2.1");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
let ot=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{const n=s?.renderBefore??i;let e=n._$litPart$;if(void 0===e){const t=s?.renderBefore??null;n._$litPart$=e=new X(i.insertBefore(j(),t),t,void 0,s??{})}return e._$AI(t),e})(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};ot._$litElement$=!0,ot.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ot});const rt=globalThis.litElementPolyfillSupport;rt?.({LitElement:ot}),(globalThis.litElementVersions??=[]).push("4.1.1");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const ht=t=>(i,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,i)})):customElements.define(t,i)}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */,ct={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:m},lt=(t=ct,i,s)=>{const{kind:n,metadata:e}=s;let o=globalThis.litPropertyMetadata.get(e);if(void 0===o&&globalThis.litPropertyMetadata.set(e,o=new Map),o.set(s.name,t),"accessor"===n){const{name:n}=s;return{set(s){const e=i.get.call(this);i.set.call(this,s),this.requestUpdate(n,e,t)},init(i){return void 0!==i&&this.P(n,void 0,t),i}}}if("setter"===n){const{name:n}=s;return function(s){const e=this[n];i.call(this,s),this.requestUpdate(n,e,t)}}throw Error("Unsupported decorator location: "+n)};function at(t){return(i,s)=>"object"==typeof s?lt(t,i,s):((t,i,s)=>{const n=i.hasOwnProperty(s);return i.constructor.createProperty(s,n?{...t,wrapped:!0}:t),n?Object.getOwnPropertyDescriptor(i,s):void 0})(t,i,s)}const ut=r`
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
`;class ft{constructor(){this.audioContext=null,this.audioContext=new(window.AudioContext||window.AudioContext)}playSound(t,i,s){if(!this.audioContext)return;const n=this.audioContext.createGain(),e=this.audioContext.createOscillator();e.type=i,e.frequency.value=t,e.connect(n),n.connect(this.audioContext.destination),n.gain.setValueAtTime(.033,this.audioContext.currentTime),e.start(),e.stop(this.audioContext.currentTime+s)}}
/**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const dt=2,pt=t=>(...i)=>({_$litDirective$:t,values:i});
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class vt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const yt=(t,i)=>{const s=t._$AN;if(void 0===s)return!1;for(const t of s)t._$AO?.(i,!1),yt(t,i);return!0},bt=t=>{let i,s;do{if(void 0===(i=t._$AM))break;s=i._$AN,s.delete(t),t=i}while(0===s?.size)},gt=t=>{for(let i;i=t._$AM;t=i){let s=i._$AN;if(void 0===s)i._$AN=s=new Set;else if(s.has(t))break;s.add(t),xt(i)}};function wt(t){void 0!==this._$AN?(bt(this),this._$AM=t,gt(this)):this._$AM=t}function mt(t,i=!1,s=0){const n=this._$AH,e=this._$AN;if(void 0!==e&&0!==e.size)if(i)if(Array.isArray(n))for(let t=s;t<n.length;t++)yt(n[t],!1),bt(n[t]);else null!=n&&(yt(n,!1),bt(n));else yt(this,t)}const xt=t=>{t.type==dt&&(t._$AP??=mt,t._$AQ??=wt)};class $t extends vt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,s){super._$AT(t,i,s),gt(this),this.isConnected=t._$AU}_$AO(t,i=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),i&&(yt(this,t),bt(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}
/**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const St=()=>new kt;class kt{}const At=new WeakMap,Ct=pt(class extends $t{render(t){return J}update(t,[i]){const s=i!==this.Y;return s&&void 0!==this.Y&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=i,this.ht=t.options?.host,this.rt(this.ct=t.element)),J}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const i=this.ht??globalThis;let s=At.get(i);void 0===s&&(s=new WeakMap,At.set(i,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return"function"==typeof this.Y?At.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Et=r`
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
`;var _t=function(t,i){return _t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])},_t(t,i)};function Ot(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function s(){this.constructor=t}_t(t,i),t.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}function Tt(t){var i="function"==typeof Symbol&&Symbol.iterator,s=i&&t[i],n=0;if(s)return s.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(i?"Object is not iterable.":"Symbol.iterator is not defined.")}function jt(t,i){var s="function"==typeof Symbol&&t[Symbol.iterator];if(!s)return t;var n,e,o=s.call(t),r=[];try{for(;(void 0===i||i-- >0)&&!(n=o.next()).done;)r.push(n.value)}catch(t){e={error:t}}finally{try{n&&!n.done&&(s=o.return)&&s.call(o)}finally{if(e)throw e.error}}return r}function Mt(t,i,s){if(s||2===arguments.length)for(var n,e=0,o=i.length;e<o;e++)!n&&e in i||(n||(n=Array.prototype.slice.call(i,0,e)),n[e]=i[e]);return t.concat(n||Array.prototype.slice.call(i))}function Ut(t){return"function"==typeof t}function zt(t){var i=t((function(t){Error.call(t),t.stack=(new Error).stack}));return i.prototype=Object.create(Error.prototype),i.prototype.constructor=i,i}"function"==typeof SuppressedError&&SuppressedError;var Pt=zt((function(t){return function(i){t(this),this.message=i?i.length+" errors occurred during unsubscription:\n"+i.map((function(t,i){return i+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=i}}));function Nt(t,i){if(t){var s=t.indexOf(i);0<=s&&t.splice(s,1)}}var Bt=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}var i;return t.prototype.unsubscribe=function(){var t,i,s,n,e;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var r=Tt(o),h=r.next();!h.done;h=r.next()){h.value.remove(this)}}catch(i){t={error:i}}finally{try{h&&!h.done&&(i=r.return)&&i.call(r)}finally{if(t)throw t.error}}else o.remove(this);var c=this.initialTeardown;if(Ut(c))try{c()}catch(t){e=t instanceof Pt?t.errors:[t]}var l=this._finalizers;if(l){this._finalizers=null;try{for(var a=Tt(l),u=a.next();!u.done;u=a.next()){var f=u.value;try{Ht(f)}catch(t){e=null!=e?e:[],t instanceof Pt?e=Mt(Mt([],jt(e)),jt(t.errors)):e.push(t)}}}catch(t){s={error:t}}finally{try{u&&!u.done&&(n=a.return)&&n.call(a)}finally{if(s)throw s.error}}}if(e)throw new Pt(e)}},t.prototype.add=function(i){var s;if(i&&i!==this)if(this.closed)Ht(i);else{if(i instanceof t){if(i.closed||i._hasParent(this))return;i._addParent(this)}(this._finalizers=null!==(s=this._finalizers)&&void 0!==s?s:[]).push(i)}},t.prototype._hasParent=function(t){var i=this._parentage;return i===t||Array.isArray(i)&&i.includes(t)},t.prototype._addParent=function(t){var i=this._parentage;this._parentage=Array.isArray(i)?(i.push(t),i):i?[i,t]:t},t.prototype._removeParent=function(t){var i=this._parentage;i===t?this._parentage=null:Array.isArray(i)&&Nt(i,t)},t.prototype.remove=function(i){var s=this._finalizers;s&&Nt(s,i),i instanceof t&&i._removeParent(this)},t.EMPTY=((i=new t).closed=!0,i),t}(),Lt=Bt.EMPTY;function Rt(t){return t instanceof Bt||t&&"closed"in t&&Ut(t.remove)&&Ut(t.add)&&Ut(t.unsubscribe)}function Ht(t){Ut(t)?t():t.unsubscribe()}var It={Promise:void 0},Dt=function(t,i){for(var s=[],n=2;n<arguments.length;n++)s[n-2]=arguments[n];return setTimeout.apply(void 0,Mt([t,i],jt(s)))};function Wt(){}function Jt(t){t()}var Kt=function(t){function i(i){var s=t.call(this)||this;return s.isStopped=!1,i?(s.destination=i,Rt(i)&&i.add(s)):s.destination=Ft,s}return Ot(i,t),i.create=function(t,i,s){return new Zt(t,i,s)},i.prototype.next=function(t){this.isStopped||this._next(t)},i.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},i.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},i.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},i.prototype._next=function(t){this.destination.next(t)},i.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},i.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},i}(Bt),Vt=function(){function t(t){this.partialObserver=t}return t.prototype.next=function(t){var i=this.partialObserver;if(i.next)try{i.next(t)}catch(t){qt(t)}},t.prototype.error=function(t){var i=this.partialObserver;if(i.error)try{i.error(t)}catch(t){qt(t)}else qt(t)},t.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(t){qt(t)}},t}(),Zt=function(t){function i(i,s,n){var e,o=t.call(this)||this;return e=Ut(i)||!i?{next:null!=i?i:void 0,error:null!=s?s:void 0,complete:null!=n?n:void 0}:i,o.destination=new Vt(e),o}return Ot(i,t),i}(Kt);function qt(t){var i;i=t,Dt((function(){throw i}))}var Ft={closed:!0,next:Wt,error:function(t){throw t},complete:Wt},Gt="function"==typeof Symbol&&Symbol.observable||"@@observable";function Qt(t){return t}var Xt=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(i){var s=new t;return s.source=this,s.operator=i,s},t.prototype.subscribe=function(t,i,s){var n,e=this,o=(n=t)&&n instanceof Kt||function(t){return t&&Ut(t.next)&&Ut(t.error)&&Ut(t.complete)}(n)&&Rt(n)?t:new Zt(t,i,s);return Jt((function(){var t=e,i=t.operator,s=t.source;o.add(i?i.call(o,s):s?e._subscribe(o):e._trySubscribe(o))})),o},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(i){t.error(i)}},t.prototype.forEach=function(t,i){var s=this;return new(i=Yt(i))((function(i,n){var e=new Zt({next:function(i){try{t(i)}catch(t){n(t),e.unsubscribe()}},error:n,complete:i});s.subscribe(e)}))},t.prototype._subscribe=function(t){var i;return null===(i=this.source)||void 0===i?void 0:i.subscribe(t)},t.prototype[Gt]=function(){return this},t.prototype.pipe=function(){for(var t,i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];return(0===(t=i).length?Qt:1===t.length?t[0]:function(i){return t.reduce((function(t,i){return i(t)}),i)})(this)},t.prototype.toPromise=function(t){var i=this;return new(t=Yt(t))((function(t,s){var n;i.subscribe((function(t){return n=t}),(function(t){return s(t)}),(function(){return t(n)}))}))},t.create=function(i){return new t(i)},t}();function Yt(t){var i;return null!==(i=null!=t?t:It.Promise)&&void 0!==i?i:Promise}var ti=zt((function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),ii=function(t){function i(){var i=t.call(this)||this;return i.closed=!1,i.currentObservers=null,i.observers=[],i.isStopped=!1,i.hasError=!1,i.thrownError=null,i}return Ot(i,t),i.prototype.lift=function(t){var i=new si(this,this);return i.operator=t,i},i.prototype._throwIfClosed=function(){if(this.closed)throw new ti},i.prototype.next=function(t){var i=this;Jt((function(){var s,n;if(i._throwIfClosed(),!i.isStopped){i.currentObservers||(i.currentObservers=Array.from(i.observers));try{for(var e=Tt(i.currentObservers),o=e.next();!o.done;o=e.next()){o.value.next(t)}}catch(t){s={error:t}}finally{try{o&&!o.done&&(n=e.return)&&n.call(e)}finally{if(s)throw s.error}}}}))},i.prototype.error=function(t){var i=this;Jt((function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=t;for(var s=i.observers;s.length;)s.shift().error(t)}}))},i.prototype.complete=function(){var t=this;Jt((function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var i=t.observers;i.length;)i.shift().complete()}}))},i.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(i.prototype,"observed",{get:function(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0},enumerable:!1,configurable:!0}),i.prototype._trySubscribe=function(i){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,i)},i.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},i.prototype._innerSubscribe=function(t){var i=this,s=this,n=s.hasError,e=s.isStopped,o=s.observers;return n||e?Lt:(this.currentObservers=null,o.push(t),new Bt((function(){i.currentObservers=null,Nt(o,t)})))},i.prototype._checkFinalizedStatuses=function(t){var i=this,s=i.hasError,n=i.thrownError,e=i.isStopped;s?t.error(n):e&&t.complete()},i.prototype.asObservable=function(){var t=new Xt;return t.source=this,t},i.create=function(t,i){return new si(t,i)},i}(Xt),si=function(t){function i(i,s){var n=t.call(this)||this;return n.destination=i,n.source=s,n}return Ot(i,t),i.prototype.next=function(t){var i,s;null===(s=null===(i=this.destination)||void 0===i?void 0:i.next)||void 0===s||s.call(i,t)},i.prototype.error=function(t){var i,s;null===(s=null===(i=this.destination)||void 0===i?void 0:i.error)||void 0===s||s.call(i,t)},i.prototype.complete=function(){var t,i;null===(i=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===i||i.call(t)},i.prototype._subscribe=function(t){var i,s;return null!==(s=null===(i=this.source)||void 0===i?void 0:i.subscribe(t))&&void 0!==s?s:Lt},i}(ii);class ni{constructor(t){this.options=t,this.events=new ii,this.coreCommands={info:()=>this.putMessage(["Hey hi!","Have a great day!"]),clear:()=>{this.history=[]},exit:()=>(this.putMessage(["Bye!"]),">>event:callback:close")},this.history=[],this.messages=[]}init(){this.options.banner&&this.putMessage([this.options.banner])}async processInput(t){t=t.trim();const i=await this._processCommand(t);if(i)if(i.startsWith(">>event:")){const t=i.replace(">>event:",""),s=new Event(t);this.events.next(s)}else this.putMessage([i]);return i??[]}putMessage(t){this.history=[...this.history,...this.messages],this.messages=[...t]}putHistory(t,i=!1){this.history=[...this.history,i?`Error: ${t}`:t]}async _processCommand(t){const i=t.trim().toLowerCase();return this.coreCommands[i]?this.coreCommands[i]():`ish :: Command not found: ${t}`}clear(){this.history=[],this.events.unsubscribe()}}function ei(t,...i){const s={red:"text-red",yellow:"text-yellow",blue:"text-blue",green:"text-green",bold:"text-bold",italic:"text-italic"};let n="";return t.forEach(((t,e)=>{if(n+=t,i[e]){const[t,o]=i[e],r=(Array.isArray(o)?o:[o]).map((t=>s[t]||"")).join(" ").trim();n+=`<span class="${r}">${t}</span>`}})),n}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class oi extends vt{constructor(t){if(super(t),this.it=J,t.type!==dt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===J||null==t)return this._t=void 0,this.it=t;if(t===W)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}oi.directiveName="unsafeHTML",oi.resultType=1;const ri=pt(oi);var hi=function(t,i,s,n){for(var e,o=arguments.length,r=o<3?i:null===n?n=Object.getOwnPropertyDescriptor(i,s):n,h=t.length-1;h>=0;h--)(e=t[h])&&(r=(o<3?e(r):o>3?e(i,s,r):e(i,s))||r);return o>3&&r&&Object.defineProperty(i,s,r),r};let ci=class extends ot{constructor(){super(),this.banner='initial.sh - Type "info"',this.sounds=!1,this.theInput=St(),this.audio=null,this.site=window.location.hostname||"unknown site",this.pluginCommands={},this.history=[],this.focusInput=()=>{this.theInput?.value?.focus()},this.messages=[],this.typedMessages=[],this.typingSpeed=100,this.shell=new ni({banner:this.banner}),this.promptSign=ei`${[this.site,["red","bold"]]} >> `,this.shell.init(),this.shell.events.subscribe((t=>{console.log(t),this.dispatchEvent(t)}))}firstUpdated(){this.sounds&&(this.audio=new ft);const t=this.shadowRoot?.querySelectorAll("p.typed");t&&t.forEach((t=>{}))}disconnectedCallback(){this.shell.events.unsubscribe(),this.shell.clear(),super.disconnectedCallback()}render(){return this.history=[...this.shell.history],this.messages=[...this.shell.messages],D`
      <div class="console" @click=${this.handleClick}>
        <div class="terminal">
          <div class="shell">
            ${this.history.map((t=>D`<p class=${t.startsWith("Error")?"error":""}>
                ${ri(t)}
              </p>`))}
            ${this.messages.map((t=>D`<p class="typed">${ri(t)}</p>`))}
          </div>
          <div class="input-line">
            <span class="prompt">
              ${D`${ri(this.promptSign)}`}
            </span>
            <input
              ${Ct(this.theInput)}
              @keydown=${this.handleInput}
              placeholder=""
              autofocus
            />
          </div>
        </div>
      </div>
    `}async handleInput(t){const i=t.target.value.trim();if("Enter"===t.key){if(t.target.value="",!i)return void this.audio?.playSound(100,"sine",.01);this.shell.putMessage([`${this.promptSign} ${i}`]),await this.shell.processInput(i),this.requestUpdate()}}handleClick(){const t=this.theInput.value;t&&t.focus()}};ci.styles=Et,hi([at({type:String,reflect:!1})],ci.prototype,"banner",void 0),hi([at({type:Boolean,reflect:!1})],ci.prototype,"sounds",void 0),hi([at({type:Array})],ci.prototype,"messages",void 0),hi([at({type:Array})],ci.prototype,"typedMessages",void 0),hi([at({type:Number})],ci.prototype,"typingSpeed",void 0),ci=hi([ht("initial-shell")],ci),window.InitialIntShell={registerPlugin:(t,i)=>{const s=document.querySelector("initial-shell");s&&(s.pluginCommands[t]=i)}};var li=function(t,i,s,n){for(var e,o=arguments.length,r=o<3?i:null===n?n=Object.getOwnPropertyDescriptor(i,s):n,h=t.length-1;h>=0;h--)(e=t[h])&&(r=(o<3?e(r):o>3?e(i,s,r):e(i,s))||r);return o>3&&r&&Object.defineProperty(i,s,r),r};t.InitialConsole=class extends ot{constructor(){super(),this.config={showDrop:!1},this.apiUrl="",this.open=!1,this.static=!1,this.sounds=!1,this.pluginCommands={},this.audio=null,this.shellElement=St(),this.static||document.addEventListener("keyup",this.handleKeydown.bind(this))}disconnectedCallback(){document.removeEventListener("keyup",this.handleKeydown.bind(this)),super.disconnectedCallback()}firstUpdated(){this.static&&this.show(),this.sounds&&(this.audio=new ft),this.shellElement?.value&&this.shellElement.value.addEventListener("callback:close",(()=>{this.close()}))}render(){return D`<initial-shell
        ${Ct(this.shellElement)}
        static
        ?sounds=${this.sounds}
      ></initial-shell>
      ${this.config.showDrop&&!this.static?D`
            <button @click=${()=>this.open?this.close():this.show()}>
              initial
              ${this.open?D`<svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
                    ></path>
                  </svg>`:D`<svg
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
          `:""} `}handleKeydown(t){"Help"!==t.key||t.shiftKey||t.ctrlKey||t.altKey||(this.open?this.close():this.show())}show(){this.open||(this.open=!0,this.audio?.playSound(900,"triangle",.08),this.shellElement.value?.focusInput())}close(){this.open&&(this.open=!1,this.audio?.playSound(500,"sine",.05))}},t.InitialConsole.styles=ut,li([at({type:Object})],t.InitialConsole.prototype,"config",void 0),li([at({type:String})],t.InitialConsole.prototype,"apiUrl",void 0),li([at({type:Boolean,reflect:!0})],t.InitialConsole.prototype,"open",void 0),li([at({type:Boolean,reflect:!0})],t.InitialConsole.prototype,"static",void 0),li([at({type:Boolean,reflect:!1})],t.InitialConsole.prototype,"sounds",void 0),t.InitialConsole=li([ht("initial-console")],t.InitialConsole),window.InitialIntConsole={registerPlugin:(t,i)=>{const s=document.querySelector("initial-console");s&&(s.pluginCommands[t]=i)}}}({});
