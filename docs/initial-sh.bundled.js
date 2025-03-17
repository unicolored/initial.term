!function(t){
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const i=globalThis,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),o=new WeakMap;let n=class{constructor(t,i,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(s&&void 0===t){const s=void 0!==i&&1===i.length;s&&(t=o.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(i,t))}return t}toString(){return this.cssText}};const h=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,e))(i)})(t):t
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */,{is:r,defineProperty:c,getOwnPropertyDescriptor:a,getOwnPropertyNames:l,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,f=globalThis,p=f.trustedTypes,v=p?p.emptyScript:"",m=f.reactiveElementPolyfillSupport,g=(t,i)=>t,y={toAttribute(t,i){switch(i){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},b=(t,i)=>!r(t,i),w={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=w){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const s=Symbol(),e=this.getPropertyDescriptor(t,s,i);void 0!==e&&c(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){const{get:e,set:o}=a(this.prototype,t)??{get(){return this[i]},set(t){this[i]=t}};return{get(){return e?.call(this)},set(i){const n=e?.call(this);o.call(this,i),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,i=[...l(t),...d(t)];for(const s of i)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const i=litPropertyMetadata.get(t);if(void 0!==i)for(const[t,s]of i)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(h(t))}else void 0!==t&&i.push(h(t));return i}static _$Eu(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const s of i.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(s)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),o=i.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=s.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EC(t,i){const s=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,s);if(void 0!==e&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(i,s.type);this._$Em=t,null==o?this.removeAttribute(e):this.setAttribute(e,o),this._$Em=null}}_$AK(t,i){const s=this.constructor,e=s._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=s.getPropertyOptions(e),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=e,this[e]=o.fromAttribute(i,t.type),this._$Em=null}}requestUpdate(t,i,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??b)(this[t],i))return;this.P(t,i,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,i,s){this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,i]of this._$Ep)this[t]=i;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[i,s]of t)!0!==s.wrapped||this._$AL.has(i)||void 0===this[i]||this.P(i,this[i],s)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(i)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[g("elementProperties")]=new Map,$[g("finalized")]=new Map,m?.({ReactiveElement:$}),(f.reactiveElementVersions??=[]).push("2.0.4");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const S=globalThis,k=S.trustedTypes,x=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+_,T=`<${E}>`,A=document,O=()=>A.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,M="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,R=/>/g,z=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,B=/"/g,D=/^(?:script|style|textarea|title)$/i,F=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),L=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),J=new WeakMap,H=A.createTreeWalker(A,129);function V(t,i){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(i):i}const G=(t,i)=>{const s=t.length-1,e=[];let o,n=2===i?"<svg>":3===i?"<math>":"",h=j;for(let i=0;i<s;i++){const s=t[i];let r,c,a=-1,l=0;for(;l<s.length&&(h.lastIndex=l,c=h.exec(s),null!==c);)l=h.lastIndex,h===j?"!--"===c[1]?h=N:void 0!==c[1]?h=R:void 0!==c[2]?(D.test(c[2])&&(o=RegExp("</"+c[2],"g")),h=z):void 0!==c[3]&&(h=z):h===z?">"===c[0]?(h=o??j,a=-1):void 0===c[1]?a=-2:(a=h.lastIndex-c[2].length,r=c[1],h=void 0===c[3]?z:'"'===c[3]?B:I):h===B||h===I?h=z:h===N||h===R?h=j:(h=z,o=void 0);const d=h===z&&t[i+1].startsWith("/>")?" ":"";n+=h===j?s+T:a>=0?(e.push(r),s.slice(0,a)+C+s.slice(a)+_+d):s+_+(-2===a?i:d)}return[V(t,n+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class K{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let o=0,n=0;const h=t.length-1,r=this.parts,[c,a]=G(t,i);if(this.el=K.createElement(c,s),H.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(e=H.nextNode())&&r.length<h;){if(1===e.nodeType){if(e.hasAttributes())for(const t of e.getAttributeNames())if(t.endsWith(C)){const i=a[n++],s=e.getAttribute(t).split(_),h=/([.?@])?(.*)/.exec(i);r.push({type:1,index:o,name:h[2],strings:s,ctor:"."===h[1]?X:"?"===h[1]?tt:"@"===h[1]?it:Q}),e.removeAttribute(t)}else t.startsWith(_)&&(r.push({type:6,index:o}),e.removeAttribute(t));if(D.test(e.tagName)){const t=e.textContent.split(_),i=t.length-1;if(i>0){e.textContent=k?k.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],O()),H.nextNode(),r.push({type:2,index:++o});e.append(t[i],O())}}}else if(8===e.nodeType)if(e.data===E)r.push({type:2,index:o});else{let t=-1;for(;-1!==(t=e.data.indexOf(_,t+1));)r.push({type:7,index:o}),t+=_.length-1}o++}}static createElement(t,i){const s=A.createElement("template");return s.innerHTML=t,s}}function Z(t,i,s=t,e){if(i===L)return i;let o=void 0!==e?s._$Co?.[e]:s._$Cl;const n=P(i)?void 0:i._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=o:s._$Cl=o),void 0!==o&&(i=Z(t,o._$AS(t,i.values),o,e)),i}class q{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??A).importNode(i,!0);H.currentNode=e;let o=H.nextNode(),n=0,h=0,r=s[0];for(;void 0!==r;){if(n===r.index){let i;2===r.type?i=new Y(o,o.nextSibling,this,t):1===r.type?i=new r.ctor(o,r.name,r.strings,this,t):6===r.type&&(i=new st(o,this,t)),this._$AV.push(i),r=s[++h]}n!==r?.index&&(o=H.nextNode(),n++)}return H.currentNode=A,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Z(this,t,i),P(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=K.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new q(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t}}_$AC(t){let i=J.get(t.strings);return void 0===i&&J.set(t.strings,i=new K(t)),i}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new Y(this.O(O()),this.O(O()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=Z(this,t,i,0),n=!P(t)||t!==this._$AH&&t!==L,n&&(this._$AH=t);else{const e=t;let h,r;for(t=o[0],h=0;h<o.length-1;h++)r=Z(this,e[s+h],i,h),r===L&&(r=this._$AH[h]),n||=!P(r)||r!==this._$AH[h],r===W?t=W:t!==W&&(t+=(r??"")+o[h+1]),this._$AH[h]=r}n&&!e&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class tt extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends Q{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){if((t=Z(this,t,i,0)??W)===L)return;const s=this._$AH,e=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==W&&(s===W||e);e&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const et=S.litHtmlPolyfillSupport;et?.(K,Y),(S.litHtmlVersions??=[]).push("3.2.1");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
let ot=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,s)=>{const e=s?.renderBefore??i;let o=e._$litPart$;if(void 0===o){const t=s?.renderBefore??null;e._$litPart$=o=new Y(i.insertBefore(O(),t),t,void 0,s??{})}return o._$AI(t),o})(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}};ot._$litElement$=!0,ot.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ot});const nt=globalThis.litElementPolyfillSupport;nt?.({LitElement:ot}),(globalThis.litElementVersions??=[]).push("4.1.1");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const ht={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},rt=(t=ht,i,s)=>{const{kind:e,metadata:o}=s;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(s.name,t),"accessor"===e){const{name:e}=s;return{set(s){const o=i.get.call(this);i.set.call(this,s),this.requestUpdate(e,o,t)},init(i){return void 0!==i&&this.P(e,void 0,t),i}}}if("setter"===e){const{name:e}=s;return function(s){const o=this[e];i.call(this,s),this.requestUpdate(e,o,t)}}throw Error("Unsupported decorator location: "+e)};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function ct(t){return(i,s)=>"object"==typeof s?rt(t,i,s):((t,i,s)=>{const e=i.hasOwnProperty(s);return i.constructor.createProperty(s,e?{...t,wrapped:!0}:t),e?Object.getOwnPropertyDescriptor(i,s):void 0})(t,i,s)
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */}function at(t){return ct({...t,state:!0,attribute:!1})}
/**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const lt=2;
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class dt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const ut=(t,i)=>{const s=t._$AN;if(void 0===s)return!1;for(const t of s)t._$AO?.(i,!1),ut(t,i);return!0},ft=t=>{let i,s;do{if(void 0===(i=t._$AM))break;s=i._$AN,s.delete(t),t=i}while(0===s?.size)},pt=t=>{for(let i;i=t._$AM;t=i){let s=i._$AN;if(void 0===s)i._$AN=s=new Set;else if(s.has(t))break;s.add(t),gt(i)}};function vt(t){void 0!==this._$AN?(ft(this),this._$AM=t,pt(this)):this._$AM=t}function mt(t,i=!1,s=0){const e=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(i)if(Array.isArray(e))for(let t=s;t<e.length;t++)ut(e[t],!1),ft(e[t]);else null!=e&&(ut(e,!1),ft(e));else ut(this,t)}const gt=t=>{t.type==lt&&(t._$AP??=mt,t._$AQ??=vt)};class yt extends dt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,s){super._$AT(t,i,s),pt(this),this.isConnected=t._$AU}_$AO(t,i=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),i&&(ut(this,t),ft(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}
/**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class bt{}const wt=new WeakMap,$t=(t=>(...i)=>({_$litDirective$:t,values:i}))(class extends yt{render(t){return W}update(t,[i]){const s=i!==this.Y;return s&&void 0!==this.Y&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=i,this.ht=t.options?.host,this.rt(this.ct=t.element)),W}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const i=this.ht??globalThis;let s=wt.get(i);void 0===s&&(s=new WeakMap,wt.set(i,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return"function"==typeof this.Y?wt.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),St=((t,...i)=>{const s=1===t.length?t[0]:i.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new n(s,t,e)})`
  :host {
    color: var(--initial-sh-text-color, black);
    background: var(--initial-sh-background-color, white);
    font-family: var(--initial-sh-font-family, Roboto);
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    height: 50vh;
    background: rgba(0, 0, 0, 0.9);
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
    background: transparent;
  }
  p {
    margin: 0 0 4px 0;
  }
  .wrapper {
    display: flex;
    overflow-y: auto;
    align-items: stretch;
    height: 100%;
  }
  .console-content {
    margin: 15px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    font-family: 'Courier New', monospace;
    color: #00ff00;
    color: white;
    // background: #1a1a1a;
  }
  .banner {
    color: #ffff00;
    margin-bottom: 10px;
  }
  .output {
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
    background: none;
    border: none;
    color: #00ff00;
    color: white;
    font-family: inherit;
    font-size: 20px;
    width: 100%;
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
`;var kt=function(t,i,s,e){for(var o,n=arguments.length,h=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,r=t.length-1;r>=0;r--)(o=t[r])&&(h=(n<3?o(h):n>3?o(i,s,h):o(i,s))||h);return n>3&&h&&Object.defineProperty(i,s,h),h};t.InitialSh=class extends ot{constructor(){super(),this.theInput=new bt,this.banner='initial v1.0 - Type "init" or "help"',this.apiUrl="",this.open=!1,this.static=!1,this.sounds=!1,this.messages=[],this.conversation=[],this.promptSign="::",this.audioContext=null,this.coreCommands={init:()=>this._addOutput('Welcome to initial! Type "help" fer commands.'),help:()=>this._addOutput("Commands: init, help, clear, exit, cookie, lighthouse, seo, feedback"+(Object.keys(this.pluginCommands).length?", "+Object.keys(this.pluginCommands).join(", "):"")),clear:()=>{this.messages=[],this.conversation=[]},exit:()=>this.close(),cookie:()=>this._listCookies(),lighthouse:()=>this._runLighthouse(),seo:()=>this._checkSEO()},this.pluginCommands={},console.log("init!"),this.loadPlugins(),this.static||document.addEventListener("keyup",this.handleKeydown.bind(this));const t=this.getBrowserName(),i=window.location.hostname||"unknown site";this.banner=`initial v1.0 @ ${i} on ${t} - Type "init" or "help"`}disconnectedCallback(){document.removeEventListener("keyup",this.handleKeydown.bind(this)),super.disconnectedCallback()}render(){return this.sounds&&this.initSounds(),this.static&&this.show(),F`
      <div class="wrapper">
        <div class="console-content" @click=${this.handleClick}>
          <div class="output">
            <div class="banner">${this.banner}</div>
            ${this.messages.map((t=>F`<p class=${t.startsWith("Error")?"error":""}>
                ${t}
              </p>`))}
          </div>
          <div class="input-line">
            <span class="prompt">${this.promptSign}</span>
            <input
              ${$t(this.theInput)}
              @keydown=${this.handleInput}
              placeholder=""
              autofocus
            />
          </div>
        </div>
      </div>
    `}initSounds(){this.audioContext=new(window.AudioContext||window.AudioContext)}playSound(t,i,s){if(!this.audioContext)return;const e=this.audioContext.createGain(),o=this.audioContext.createOscillator();o.type=i,o.frequency.value=t,o.connect(e),e.connect(this.audioContext.destination),e.gain.setValueAtTime(.033,this.audioContext.currentTime),o.start(),o.stop(this.audioContext.currentTime+s)}async loadPlugins(){const t=[{name:"ping",execute:t=>t._addOutput("Pong!")},{name:"time",execute:t=>t._addOutput(`Time be ${(new Date).toLocaleTimeString()}!`)},{name:"feedback",execute:t=>t._startFeedback()}];if(this.registerPlugins(t),this.apiUrl)try{const t=await fetch(`${this.apiUrl}/plugins`,{method:"GET",headers:{"Content-Type":"application/json"}}),i=await t.json();this.registerPlugins(i)}catch(t){this._addOutput("Error: Couldn’t fetch plugins",!0)}}registerPlugins(t){t.forEach((t=>{this.pluginCommands[t.name]=t.execute}))}handleInput(t){const i=t.target.value.trim();"Enter"===t.key?i?(this._addOutput(`${this.promptSign} ${i}`,!1,!1),this._processCommand(i),t.target.value=""):this.playSound(100,"sine",.01):"Escape"===t.key&&this.close()}handleKeydown(t){"Help"!==t.key||t.shiftKey||t.ctrlKey||t.altKey||(this.open?this.close():this.show())}handleClick(){this._focusInput()}async _addOutput(t,i=!1,s=!0){if(i&&this.playSound(200,"sawtooth",.05),s&&t.length>1){let s="";this.messages=[...this.messages,s];const e=this.messages.length-1;for(const i of t)s+=i,this.messages=[...this.messages.slice(0,e),s,...this.messages.slice(e+1)],await new Promise((t=>setTimeout(t,10))),this.requestUpdate();i&&(this.messages[e]=`Error: ${s}`)}else this.messages=[...this.messages,i?`Error: ${t}`:t]}_processCommand(t){const i=t.toLowerCase();this.coreCommands[i]?this.coreCommands[i]():this.pluginCommands[i]?this.pluginCommands[i](this):(this.conversation.push({role:"user",content:t}),this._emitConversation())}async _emitConversation(){const t={model:"initial-shell",messages:[...this.conversation]};let i;if(this.apiUrl)try{const s=await fetch(`${this.apiUrl}/convo`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});i=(await s.json()).response||"Arr, server be silent!"}catch(t){i="Error: Couldn’t reach server!"}else i=this._fakeResponse(t.messages[t.messages.length-1].content);this.conversation.push({role:"developer",content:i}),this._addOutput(i)}_fakeResponse(t){return"Are semicolons optional in JavaScript?"===t?"Aye, mostly optional thanks to ASI, but watch fer bugs!":`ish: command not found: ${t}`}async _runLighthouse(){this._addOutput("Runnin’ Lighthouse audit... (mock fer now)"),await new Promise((t=>setTimeout(t,500))),this._addOutput("Performance: 85/100 - Speed be decent, matey!"),this._addOutput("SEO: 90/100 - Search engines’ll find ye fine."),this._addOutput("Run in Chrome DevTools fer the real deal!")}async _checkSEO(){this._addOutput("Checkin’ SEO... (mock fer now)"),await new Promise((t=>setTimeout(t,500))),this._addOutput("Title: Good - Ye got one!"),this._addOutput("Meta Desc: Fair - Could be snappier."),this._addOutput("Visit ahrefs.com/webmaster-tools fer a proper look!")}_startFeedback(){this._addOutput('Enter yer feedback (type "done" to submit):'),this.conversation=[],this.pluginCommands["temp-feedback"]=()=>{const t=this.conversation[this.conversation.length-1]?.content;"done"===t&&(this._submitFeedback(),delete this.pluginCommands["temp-feedback"])}}async _submitFeedback(){const t=this.conversation.map((t=>t.content)).join("\n");if(this.apiUrl)try{await fetch(`${this.apiUrl}/feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({feedback:t})}),this._addOutput("Feedback sent! Thanks, matey!")}catch(t){this._addOutput("Error: Feedback lost!",!0)}else this._addOutput("Feedback logged locally: "+t)}_listCookies(){const t=document.cookie.split(";").map((t=>t.trim().split("=")[0]));0===t.length||1===t.length&&""===t[0]?this._addOutput("No cookies found on this site."):(this._addOutput("Cookies found:"),t.forEach((t=>{t&&this._addOutput(`- ${t}`)})))}getBrowserName(){const t=navigator.userAgent.toLowerCase();return t.includes("firefox")?"Firefox":t.includes("chrome")?"Chrome":t.includes("safari")?"Safari":t.includes("edge")?"Edge":t.includes("opera")||t.includes("opr")?"Opera":"Unknown Browser"}show(){this.open||(this.open=!0,this._focusInput(),this.playSound(900,"triangle",.08))}close(){this.open&&(this.open=!1,this.playSound(500,"sine",.05))}_focusInput(){const t=this.theInput.value;t&&t.focus()}},t.InitialSh.styles=St,kt([ct({type:String})],t.InitialSh.prototype,"banner",void 0),kt([ct({type:String})],t.InitialSh.prototype,"apiUrl",void 0),kt([ct({type:Boolean,reflect:!0})],t.InitialSh.prototype,"open",void 0),kt([ct({type:Boolean,reflect:!0})],t.InitialSh.prototype,"static",void 0),kt([ct({type:Boolean,reflect:!1})],t.InitialSh.prototype,"sounds",void 0),kt([at()],t.InitialSh.prototype,"messages",void 0),kt([at()],t.InitialSh.prototype,"conversation",void 0),t.InitialSh=kt([(t=>(i,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,i)})):customElements.define(t,i)})("initial-sh")],t.InitialSh),window.Initial={registerPlugin:(t,i)=>{const s=document.querySelector("initial-sh");s&&(s.pluginCommands[t]=i)}}}({});
