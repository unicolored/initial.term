!function(t){
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const i=globalThis,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),o=new WeakMap;let n=class{constructor(t,i,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(s&&void 0===t){const s=void 0!==i&&1===i.length;s&&(t=o.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(i,t))}return t}toString(){return this.cssText}};const r=(t,...i)=>{const s=1===t.length?t[0]:i.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new n(s,t,e)},h=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,e))(i)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,{is:l,defineProperty:a,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:f}=Object,p=globalThis,v=p.trustedTypes,g=v?v.emptyScript:"",y=p.reactiveElementPolyfillSupport,b=(t,i)=>t,w={toAttribute(t,i){switch(i){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},m=(t,i)=>!l(t,i),$={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:m};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=$){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const s=Symbol(),e=this.getPropertyDescriptor(t,s,i);void 0!==e&&a(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){const{get:e,set:o}=c(this.prototype,t)??{get(){return this[i]},set(t){this[i]=t}};return{get(){return e?.call(this)},set(i){const n=e?.call(this);o.call(this,i),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,i=[...d(t),...u(t)];for(const s of i)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const i=litPropertyMetadata.get(t);if(void 0!==i)for(const[t,s]of i)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(h(t))}else void 0!==t&&i.push(h(t));return i}static _$Eu(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const s of i.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(s)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),o=i.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=s.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EC(t,i){const s=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,s);if(void 0!==e&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:w).toAttribute(i,s.type);this._$Em=t,null==o?this.removeAttribute(e):this.setAttribute(e,o),this._$Em=null}}_$AK(t,i){const s=this.constructor,e=s._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=s.getPropertyOptions(e),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:w;this._$Em=e,this[e]=o.fromAttribute(i,t.type),this._$Em=null}}requestUpdate(t,i,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??m)(this[t],i))return;this.P(t,i,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,i,s){this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,i]of this._$Ep)this[t]=i;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[i,s]of t)!0!==s.wrapped||this._$AL.has(i)||void 0===this[i]||this.P(i,this[i],s)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(i)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[b("elementProperties")]=new Map,x[b("finalized")]=new Map,y?.({ReactiveElement:x}),(p.reactiveElementVersions??=[]).push("2.0.4");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const S=globalThis,k=S.trustedTypes,C=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+_,T=`<${E}>`,U=document,M=()=>U.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,z="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,R=/>/g,B=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,I=/"/g,L=/^(?:script|style|textarea|title)$/i,W=(t,...i)=>({_$litType$:1,strings:t,values:i}),D=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),K=new WeakMap,V=U.createTreeWalker(U,129);function Z(t,i){if(!P(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(i):i}class q{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let o=0,n=0;const r=t.length-1,h=this.parts,[l,a]=((t,i)=>{const s=t.length-1,e=[];let o,n=2===i?"<svg>":3===i?"<math>":"",r=N;for(let i=0;i<s;i++){const s=t[i];let h,l,a=-1,c=0;for(;c<s.length&&(r.lastIndex=c,l=r.exec(s),null!==l);)c=r.lastIndex,r===N?"!--"===l[1]?r=j:void 0!==l[1]?r=R:void 0!==l[2]?(L.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=B):void 0!==l[3]&&(r=B):r===B?">"===l[0]?(r=o??N,a=-1):void 0===l[1]?a=-2:(a=r.lastIndex-l[2].length,h=l[1],r=void 0===l[3]?B:'"'===l[3]?I:H):r===I||r===H?r=B:r===j||r===R?r=N:(r=B,o=void 0);const d=r===B&&t[i+1].startsWith("/>")?" ":"";n+=r===N?s+T:a>=0?(e.push(h),s.slice(0,a)+A+s.slice(a)+_+d):s+_+(-2===a?i:d)}return[Z(t,n+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]})(t,i);if(this.el=q.createElement(l,s),V.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(e=V.nextNode())&&h.length<r;){if(1===e.nodeType){if(e.hasAttributes())for(const t of e.getAttributeNames())if(t.endsWith(A)){const i=a[n++],s=e.getAttribute(t).split(_),r=/([.?@])?(.*)/.exec(i);h.push({type:1,index:o,name:r[2],strings:s,ctor:"."===r[1]?Y:"?"===r[1]?tt:"@"===r[1]?it:X}),e.removeAttribute(t)}else t.startsWith(_)&&(h.push({type:6,index:o}),e.removeAttribute(t));if(L.test(e.tagName)){const t=e.textContent.split(_),i=t.length-1;if(i>0){e.textContent=k?k.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],M()),V.nextNode(),h.push({type:2,index:++o});e.append(t[i],M())}}}else if(8===e.nodeType)if(e.data===E)h.push({type:2,index:o});else{let t=-1;for(;-1!==(t=e.data.indexOf(_,t+1));)h.push({type:7,index:o}),t+=_.length-1}o++}}static createElement(t,i){const s=U.createElement("template");return s.innerHTML=t,s}}function F(t,i,s=t,e){if(i===D)return i;let o=void 0!==e?s._$Co?.[e]:s._$Cl;const n=O(i)?void 0:i._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=o:s._$Cl=o),void 0!==o&&(i=F(t,o._$AS(t,i.values),o,e)),i}class G{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??U).importNode(i,!0);V.currentNode=e;let o=V.nextNode(),n=0,r=0,h=s[0];for(;void 0!==h;){if(n===h.index){let i;2===h.type?i=new Q(o,o.nextSibling,this,t):1===h.type?i=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(i=new st(o,this,t)),this._$AV.push(i),h=s[++r]}n!==h?.index&&(o=V.nextNode(),n++)}return V.currentNode=U,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=F(this,t,i),O(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==D&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==J&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=q.createElement(Z(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new G(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t}}_$AC(t){let i=K.get(t.strings);return void 0===i&&K.set(t.strings,i=new q(t)),i}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new Q(this.O(M()),this.O(M()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,o){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=J}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=F(this,t,i,0),n=!O(t)||t!==this._$AH&&t!==D,n&&(this._$AH=t);else{const e=t;let r,h;for(t=o[0],r=0;r<o.length-1;r++)h=F(this,e[s+r],i,r),h===D&&(h=this._$AH[r]),n||=!O(h)||h!==this._$AH[r],h===J?t=J:t!==J&&(t+=(h??"")+o[r+1]),this._$AH[r]=h}n&&!e&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Y extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}class tt extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class it extends X{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){if((t=F(this,t,i,0)??J)===D)return;const s=this._$AH,e=t===J&&s!==J||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==J&&(s===J||e);e&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const et=S.litHtmlPolyfillSupport;et?.(q,Q),(S.litHtmlVersions??=[]).push("3.2.1");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
let ot=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{const e=s?.renderBefore??i;let o=e._$litPart$;if(void 0===o){const t=s?.renderBefore??null;e._$litPart$=o=new Q(i.insertBefore(M(),t),t,void 0,s??{})}return o._$AI(t),o})(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}};ot._$litElement$=!0,ot.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ot});const nt=globalThis.litElementPolyfillSupport;nt?.({LitElement:ot}),(globalThis.litElementVersions??=[]).push("4.1.1");
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
     */,ht={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:m},lt=(t=ht,i,s)=>{const{kind:e,metadata:o}=s;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(s.name,t),"accessor"===e){const{name:e}=s;return{set(s){const o=i.get.call(this);i.set.call(this,s),this.requestUpdate(e,o,t)},init(i){return void 0!==i&&this.P(e,void 0,t),i}}}if("setter"===e){const{name:e}=s;return function(s){const o=this[e];i.call(this,s),this.requestUpdate(e,o,t)}}throw Error("Unsupported decorator location: "+e)};function at(t){return(i,s)=>"object"==typeof s?lt(t,i,s):((t,i,s)=>{const e=i.hasOwnProperty(s);return i.constructor.createProperty(s,e?{...t,wrapped:!0}:t),e?Object.getOwnPropertyDescriptor(i,s):void 0})(t,i,s)}const ct=r`
  :host {
    --initial-text-color: yellow; /* Changes text color to blue */
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
  }
  :host([open]) {
    top: 0;
  }
  :host([static]) {
    position: relative;
    top: 0;
    z-index: 1;
    height: 100%;
    display: block;
    overflow-y: auto;
  }
`;class dt{constructor(){this.audioContext=null,this.audioContext=new(window.AudioContext||window.AudioContext)}playSound(t,i,s){if(!this.audioContext)return;const e=this.audioContext.createGain(),o=this.audioContext.createOscillator();o.type=i,o.frequency.value=t,o.connect(e),e.connect(this.audioContext.destination),e.gain.setValueAtTime(.033,this.audioContext.currentTime),o.start(),o.stop(this.audioContext.currentTime+s)}}
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const ut=t=>(...i)=>({_$litDirective$:t,values:i})
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;class ft{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const pt=(t,i)=>{const s=t._$AN;if(void 0===s)return!1;for(const t of s)t._$AO?.(i,!1),pt(t,i);return!0},vt=t=>{let i,s;do{if(void 0===(i=t._$AM))break;s=i._$AN,s.delete(t),t=i}while(0===s?.size)},gt=t=>{for(let i;i=t._$AM;t=i){let s=i._$AN;if(void 0===s)i._$AN=s=new Set;else if(s.has(t))break;s.add(t),wt(i)}};function yt(t){void 0!==this._$AN?(vt(this),this._$AM=t,gt(this)):this._$AM=t}function bt(t,i=!1,s=0){const e=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(i)if(Array.isArray(e))for(let t=s;t<e.length;t++)pt(e[t],!1),vt(e[t]);else null!=e&&(pt(e,!1),vt(e));else pt(this,t)}const wt=t=>{2==t.type&&(t._$AP??=bt,t._$AQ??=yt)};class mt extends ft{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,s){super._$AT(t,i,s),gt(this),this.isConnected=t._$AU}_$AO(t,i=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),i&&(pt(this,t),vt(this))}setValue(t){if((()=>void 0===this._$Ct.strings)())this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class $t{}const xt=new WeakMap,St=ut(class extends mt{render(t){return J}update(t,[i]){const s=i!==this.Y;return s&&void 0!==this.Y&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=i,this.ht=t.options?.host,this.rt(this.ct=t.element)),J}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const i=this.ht??globalThis;let s=xt.get(i);void 0===s&&(s=new WeakMap,xt.set(i,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return"function"==typeof this.Y?xt.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),kt=r`
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
`;class Ct{constructor(t){this.options=t,this.coreCommands={info:()=>this.putMessage(["Hey hi!","Have a great day!"]),clear:()=>{this.history=[]}},this.history=[],this.messages=[]}init(){this.options.banner&&this.putMessage([this.options.banner])}async processInput(t){t=t.trim();const i=await this._processCommand(t);return i&&this.putMessage([i]),i??[]}putMessage(t){this.history=[...this.history,...this.messages],this.messages=[...t]}putHistory(t,i=!1){this.history=[...this.history,i?`Error: ${t}`:t]}async _processCommand(t){const i=t.trim().toLowerCase();return this.coreCommands[i]?this.coreCommands[i]():`ish :: Command not found: ${t}`}clear(){this.history=[]}}function At(t,...i){const s={red:"text-red",yellow:"text-yellow",blue:"text-blue",green:"text-green",bold:"text-bold",italic:"text-italic"};let e="";return t.forEach(((t,o)=>{if(e+=t,i[o]){const[t,n]=i[o],r=(Array.isArray(n)?n:[n]).map((t=>s[t]||"")).join(" ").trim();e+=`<span class="${r}">${t}</span>`}})),e}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class _t extends ft{constructor(t){if(super(t),this.it=J,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===J||null==t)return this._t=void 0,this.it=t;if(t===D)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}_t.directiveName="unsafeHTML",_t.resultType=1;const Et=ut(_t);var Tt=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:e,h=t.length-1;h>=0;h--)(o=t[h])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};let Ut=class extends ot{constructor(){super(),this.banner='initial.sh - Type "info"',this.sounds=!0,this.theInput=new $t,this.audio=null,this.site=window.location.hostname||"unknown site",this.browser=function(){const t=navigator.userAgent.toLowerCase();return t.includes("firefox")?"Firefox":t.includes("chrome")?"Chrome":t.includes("safari")?"Safari":t.includes("edge")?"Edge":t.includes("opera")||t.includes("opr")?"Opera":"Unknown Browser"}(),this.pluginCommands={},this.history=[],this.messages=[],this.typedMessages=[],this.typingSpeed=100,this.shell=new Ct({banner:this.banner}),this.sounds&&(this.audio=new dt),this.promptSign=At`${[this.site,["blue","bold"]]}@${[this.browser,["green","bold"]]} >> `,this.shell.init()}firstUpdated(){const t=this.shadowRoot?.querySelectorAll("p.typed");t&&t.forEach((t=>{}))}disconnectedCallback(){this.shell.clear(),super.disconnectedCallback()}render(){return this.history=[...this.shell.history],this.messages=[...this.shell.messages],W`
      <div class="console" @click=${this.handleClick}>
        <div class="terminal">
          <div class="shell">
            ${this.history.map((t=>W`<p class=${t.startsWith("Error")?"error":""}>
                ${Et(t)}
              </p>`))}
            ${this.messages.map((t=>W`<p class="typed">${Et(t)}</p>`))}
          </div>
          <div class="input-line">
            <span class="prompt">
              ${W`${Et(this.promptSign)}`}
            </span>
            <input
              ${St(this.theInput)}
              @keydown=${this.handleInput}
              placeholder=""
              autofocus
            />
          </div>
        </div>
      </div>
    `}async handleInput(t){const i=t.target.value.trim();if("Enter"===t.key){if(t.target.value="",!i)return void this.audio?.playSound(100,"sine",.01);this.shell.putMessage([`${this.promptSign} ${i}`]),await this.shell.processInput(i),this.requestUpdate()}}handleClick(){const t=this.theInput.value;t&&t.focus()}};Ut.styles=kt,Tt([at({type:String,reflect:!1})],Ut.prototype,"banner",void 0),Tt([at({type:Boolean,reflect:!1})],Ut.prototype,"sounds",void 0),Tt([at({type:Array})],Ut.prototype,"messages",void 0),Tt([at({type:Array})],Ut.prototype,"typedMessages",void 0),Tt([at({type:Number})],Ut.prototype,"typingSpeed",void 0),Ut=Tt([rt("initial-terminal")],Ut),window.InitialIntTerminal={registerPlugin:(t,i)=>{const s=document.querySelector("initial-terminal");s&&(s.pluginCommands[t]=i)}};var Mt=function(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:e,h=t.length-1;h>=0;h--)(o=t[h])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r};t.InitialSh=class extends ot{constructor(){super(),this.banner='initial v1.0 - Type "init" or "help"',this.apiUrl="",this.open=!1,this.static=!1,this.sounds=!1,this.pluginCommands={},this.audio=null,this.static||document.addEventListener("keyup",this.handleKeydown.bind(this)),this.sounds&&(this.audio=new dt)}disconnectedCallback(){document.removeEventListener("keyup",this.handleKeydown.bind(this)),super.disconnectedCallback()}firstUpdated(){this.static&&this.show()}render(){return W`<initial-terminal static></initial-terminal>`}handleKeydown(t){"Help"!==t.key||t.shiftKey||t.ctrlKey||t.altKey||(this.open?this.close():this.show())}show(){this.open||(this.open=!0,this.audio?.playSound(900,"triangle",.08))}close(){this.open&&(this.open=!1,this.audio?.playSound(500,"sine",.05))}},t.InitialSh.styles=ct,Mt([at({type:String})],t.InitialSh.prototype,"banner",void 0),Mt([at({type:String})],t.InitialSh.prototype,"apiUrl",void 0),Mt([at({type:Boolean,reflect:!0})],t.InitialSh.prototype,"open",void 0),Mt([at({type:Boolean,reflect:!0})],t.InitialSh.prototype,"static",void 0),Mt([at({type:Boolean,reflect:!1})],t.InitialSh.prototype,"sounds",void 0),t.InitialSh=Mt([rt("initial-sh")],t.InitialSh),window.InitialIntConsole={registerPlugin:(t,i)=>{const s=document.querySelector("initial-sh");s&&(s.pluginCommands[t]=i)}}}({});
