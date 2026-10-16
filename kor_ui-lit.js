import{LitElement as t,css as e,html as n}from"lit";const i=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function property_e(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):i(t,e)}function r(t){return property_e({...t,state:!0,attribute:!1})}const base_o=({finisher:t,descriptor:e})=>(n,s)=>{var l;if(void 0===s){const s=null!==(l=n.originalKey)&&void 0!==l?l:n.key,p=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(n.key)}:{...n,key:s};return null!=t&&(p.finisher=function(e){t(e,s)}),p}{const l=n.constructor;void 0!==e&&Object.defineProperty(n,s,e(s)),null==t||t(l,s)}};const s=Element.prototype;s.msMatchesSelector||s.webkitMatchesSelector;const l=e`
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
`;var __decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korIcon extends t{constructor(){super(...arguments),this.size="m"}static get styles(){return[l,e`
        :host {
          font-family: 'md-icons';
          line-height: 1;
          -webkit-font-smoothing: auto;
          text-rendering: optimizeLegibility;
          -moz-osx-font-smoothing: grayscale;
          font-feature-settings: 'liga';
          opacity: 0.9;
          color: var(--text-1);
          transition: var(--transition-1);
          height: max-content;
          width: max-content;
          min-height: max-content;
          min-width: max-content;
          overflow: hidden;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
        :host([button]) {
          opacity: 0.6;
          cursor: pointer;
        }
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* size */
        :host([size='xl']) {
          height: 48px;
          width: 48px;
          font-size: 48px;
        }
        :host([size='l']) {
          height: 32px;
          width: 32px;
          font-size: 32px;
        }
        :host([size='m']) {
          height: 24px;
          width: 24px;
          font-size: 24px;
        }
        :host([size='s']) {
          height: 16px;
          width: 16px;
          font-size: 16px;
        }
        /* frame */
        :host([framed]) {
          box-sizing: content-box;
          padding: var(--spacing-xs);
          border: 1px solid rgba(var(--neutral-1), 0.1);
          border-radius: var(--border-radius);
          background-color: rgba(var(--neutral-1), 0.05);
          opacity: 0.9;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host([button]:hover:not(:active)) {
            opacity: 0.9;
          }
          :host([framed][button]:hover:not(:active)) {
            border-color: rgba(var(--neutral-1), 0.2);
            background-color: rgba(var(--neutral-1), 0.1);
          }
        }
      `]}render(){var t;return n` ${(null===(t=this.icon)||void 0===t?void 0:t.indexOf("url"))?n` ${this.icon} `:""}`}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed")),"color"==t&&this.color?this.style.color=this.color:"icon"==t&&n.indexOf("url")>-1&&this.setBackgroundImage(n)}setBackgroundImage(t){this.style.backgroundImage=t}}__decorate([property_e({type:String,reflect:!0})],korIcon.prototype,"icon",void 0),__decorate([property_e({type:String,reflect:!0})],korIcon.prototype,"color",void 0),__decorate([property_e({type:String,reflect:!0})],korIcon.prototype,"size",void 0),__decorate([property_e({type:Boolean,reflect:!0})],korIcon.prototype,"button",void 0),__decorate([property_e({type:Boolean,reflect:!0})],korIcon.prototype,"disabled",void 0),__decorate([property_e({type:Boolean,reflect:!0})],korIcon.prototype,"framed",void 0),window.customElements.get("kor-icon")||window.customElements.define("kor-icon",korIcon);var kor_card_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korCard extends t{constructor(){super(...arguments),this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[l,e`
        :host {
          display: flex;
          flex-direction: column;
          flex: 1;
          border-radius: var(--border-radius);
          box-sizing: border-box;
          overflow: hidden;
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host(:not([flat])) {
          background-color: rgb(var(--base-3));
          box-shadow: var(--shadow-1);
          padding: var(--spacing-l);
        }
        /* header */
        slot,
        .header,
        .top {
          display: flex;
          overflow: auto;
        }
        .header,
        slot[name='functions'] {
          height: max-content;
        }
        .header {
          flex: 1;
        }
        .top:not(.empty) {
          padding-bottom: var(--spacing-l);
        }
        slot[name='footer']:not(.empty) {
          padding-top: var(--spacing-l);
        }
        .label {
          flex: 1;
          display: flex;
          gap: var(--spacing-s);
        }
        .label p {
          font: var(--header-1);
          color: var(--text-1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: unset;
        }
        /* slots */
        slot[name='functions'] {
          gap: var(--functions-gap);
        }
        slot[name='header'] {
          gap: var(--header-gap);
        }
        slot:not([name]) {
          gap: var(--spacing-m);
        }
        slot[name='header'],
        slot[name='functions'],
        slot[name='footer'] {
          align-items: center;
        }
        /* content */
        slot:not([name]) {
          flex: 1;
          width: 100%;
          /* Don't set the right padding to have a vertical scrollbar for overflows */
          padding: 0 0 0 var(--spacing-l);
          margin-right: calc(var(--spacing-l) * -1);
          margin-left: calc(var(--spacing-l) * -1);
          gap: var(--body-gap);
        }
        :host([flex-direction='column']) slot:not([name]),
        .header {
          flex-direction: column;
        }
        /* footer */
        slot[name='footer'] {
          justify-content: flex-end;
          gap: var(--footer-gap);
        }
        /* image */
        .image {
          width: calc(100% + 32px);
          margin: calc(var(--spacing-l) * -1) calc(var(--spacing-l) * -1)
            var(--spacing-l) calc(var(--spacing-l) * -1);
        }
      `]}render(){return n`
      ${this.image?n` <img class="image" src="${this.image}" /> `:""}
      <div
        class="top ${this.emptyHeader&&this.emptyFunctions&&!this.label&&!this.icon?"empty":""}"
      >
        <div class="header">
          ${this.label||this.icon?n`
                <div class="label">
                  ${this.icon?n` <kor-icon icon="${this.icon}"></kor-icon> `:""}
                  <p>${this.label}</p>
                </div>
                ${this.emptyHeader||!this.label&&!this.icon?"":n` <div style="margin-top: var(--spacing-l)"></div> `}
              `:""}
          <slot
            name="header"
            @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
            class="${this.emptyHeader?"empty":""}"
          ></slot>
        </div>
        <slot
          name="functions"
          @slotchange="${t=>this.emptyFunctions=0===t.target.assignedNodes().length}"
        ></slot>
      </div>
      <slot></slot>
      <slot
        name="footer"
        @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        class="${this.emptyFooter?"empty":""}"
      ></slot>
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}}kor_card_decorate([property_e({type:String,reflect:!0})],korCard.prototype,"label",void 0),kor_card_decorate([property_e({type:String,reflect:!0})],korCard.prototype,"icon",void 0),kor_card_decorate([property_e({type:String,reflect:!0})],korCard.prototype,"image",void 0),kor_card_decorate([property_e({type:String,reflect:!0,attribute:"flex-direction"})],korCard.prototype,"flexDirection",void 0),kor_card_decorate([property_e({type:Boolean,reflect:!0})],korCard.prototype,"flat",void 0),kor_card_decorate([r()],korCard.prototype,"emptyHeader",void 0),kor_card_decorate([r()],korCard.prototype,"emptyFunctions",void 0),kor_card_decorate([r()],korCard.prototype,"emptyFooter",void 0),window.customElements.get("kor-card")||window.customElements.define("kor-card",korCard);var kor_accordion_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korAccordion extends t{constructor(){super(...arguments),this.label="Label",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyBody=!0,this.emptyFooter=!0}static get styles(){return[l,e`
        :host {
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host(:not([expanded])) kor-card {
          cursor: pointer;
        }
        kor-card {
          padding: var(--spacing-s) var(--spacing-l);
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
        slot:not([name]) {
          transition: var(--transition-1);
          display: inherit;
          flex-direction: inherit;
          gap: inherit;
        }
        slot[name='footer'] {
          justify-content: flex-end;
        }
        /* expanded */
        :host([expanded]) slot:not([name]) {
          margin-top: var(--spacing-l);
        }
        :host(:not([expanded])) slot:not([name]) {
          max-height: 0px;
          opacity: 0;
          overflow: hidden;
        }
        :host([expanded]) .expand {
          transform: rotate(180deg);
        }
        .header {
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex: 1;
        }
        .icon {
          margin-right: var(--spacing-s);
        }
        slot[name='header'] p {
          font: var(--header-1);
          color: var(--text-1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: unset;
          flex: 1;
        }
        /* disabled */
        :host([disabled]) .header {
          opacity: 0.2;
        }
        :host([disabled]) kor-card {
          pointer-events: none;
        }
      `]}render(){return n`
      <kor-card
        @click="${()=>this.expanded?"":this.expanded=!0}"
      >
        <slot
          name="header"
          slot="header"
          @click="${t=>this.handleCollapse(t)}"
        >
          <div class="header">
            ${this.icon?n` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `:""}
            <p>${this.label}</p>
            <kor-icon
              button
              class="expand"
              icon="keyboard_arrow_down"
            ></kor-icon>
          </div>
        </slot>
        <slot name="functions" slot="functions"></slot>
        <slot></slot>
        ${this.expanded?n`
              <slot
                name="footer"
                slot="${this.emptyFooter?"hidden":"footer"}"
                @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
              ></slot>
            `:""}
      </kor-card>
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),setTimeout(()=>{var t,e,n;const s=null===(n=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("kor-card"))||void 0===e?void 0:e.shadowRoot)||void 0===n?void 0:n.querySelector(".top");s&&(s.style.padding="0")},0)}handleCollapse(t){this.expanded&&(this.expanded=!1,t.stopPropagation())}}kor_accordion_decorate([property_e({type:String,reflect:!0})],korAccordion.prototype,"label",void 0),kor_accordion_decorate([property_e({type:String,reflect:!0})],korAccordion.prototype,"icon",void 0),kor_accordion_decorate([property_e({type:Boolean,reflect:!0})],korAccordion.prototype,"expanded",void 0),kor_accordion_decorate([property_e({type:Boolean,reflect:!0})],korAccordion.prototype,"disabled",void 0),kor_accordion_decorate([r()],korAccordion.prototype,"emptyHeader",void 0),kor_accordion_decorate([r()],korAccordion.prototype,"emptyFunctions",void 0),kor_accordion_decorate([r()],korAccordion.prototype,"emptyBody",void 0),kor_accordion_decorate([r()],korAccordion.prototype,"emptyFooter",void 0),window.customElements.get("kor-accordion")||window.customElements.define("kor-accordion",korAccordion);var kor_app_bar_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korAppBar extends t{static get styles(){return[l,e`
        :host {
          z-index: 3;
          height: calc(24px + var(--spacing-l) * 2);
          padding: 0 var(--spacing-l);
          display: flex;
          align-items: center;
          overflow: hidden;
          background-color: rgb(var(--base-0));
          box-shadow: var(--shadow-1);
          transition: var(--transition-1);
          gap: calc(var(--spacing-l) * 2);
          /* css properties */
          --functions-gap: var(--spacing-m);
        }
        .logo {
          height: 24px;
        }
        .label {
          font: var(--header-1);
          color: var(--text-1);
          max-width: 320px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        /* mobile */
        :host[mobile] {
          gap: var(--spacing-l);
        }
        :host([mobile]) .label {
          flex: 1;
          max-width: unset;
          text-align: center;
        }
        /* slots */
        slot {
          display: flex;
          align-items: center;
        }
        slot:not([name]) {
          flex: 1;
        }
        slot[name='functions'] {
          gap: var(--functions-gap);
        }
        ::slotted(kor-tabs) {
          border-bottom: unset;
        }
        slot[name='right'],
        slot[name='left'] {
          min-width: 24px;
        }
        slot[name='right'] {
          margin-left: auto;
        }
      `]}render(){return n`
      ${this.mobile?n`
            <slot name="left"></slot>
            ${this.label?n` <div class="label">${this.label}</div> `:""}
            <slot name="right"></slot>
          `:n`
            ${this.logo?n`
                  <img
                    class="logo"
                    src="${this.logo}"
                    @click="${()=>this.handleLogoClick()}"
                  />
                `:""}
            ${this.label?n` <div class="label">${this.label}</div> `:""}
            <slot></slot>
            <slot name="functions"></slot>
          `}
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}handleLogoClick(){this.dispatchEvent(new Event("logo-clicked"))}}kor_app_bar_decorate([property_e({type:String,reflect:!0})],korAppBar.prototype,"label",void 0),kor_app_bar_decorate([property_e({type:String,reflect:!0})],korAppBar.prototype,"logo",void 0),kor_app_bar_decorate([property_e({type:Boolean,reflect:!0})],korAppBar.prototype,"mobile",void 0),window.customElements.get("kor-app-bar")||window.customElements.define("kor-app-bar",korAppBar);var kor_text_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korText extends t{constructor(){super(...arguments),this.size="body-1"}static get styles(){return[l,e`
        :host {
          color: var(--text-1);
          transition: var(--transition-1);
        }
        :host([size='body-1']) {
          font: var(--body-1);
        }
        :host([size='body-2']) {
          font: var(--body-2);
        }
        :host([size='header-1']) {
          font: var(--header-1);
        }
        :host([size='header-2']) {
          font: var(--header-2);
        }
      `]}render(){return n`<slot></slot>`}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed")),"color"==t&&this.color&&(this.style.color=this.color)}}kor_text_decorate([property_e({type:String,reflect:!0})],korText.prototype,"size",void 0),kor_text_decorate([property_e({type:String,reflect:!0})],korText.prototype,"color",void 0),window.customElements.get("kor-text")||window.customElements.define("kor-text",korText);var kor_avatar_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korAvatar extends t{static get styles(){return[l,e`
        :host,
        .image {
          display: flex;
          align-items: center;
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          margin-left: var(--spacing-s);
          overflow: hidden;
        }
        .label,
        .info {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .label {
          font-weight: bold;
        }
        .image {
          overflow: hidden;
          justify-content: center;
          font: var(--header-2);
          color: var(--text-1);
          height: 32px;
          width: 32px;
          border-radius: 50%;
          background: rgba(var(--neutral-1), 0.1);
        }
        .image > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        :host-context(kor-app-bar) {
          max-width: 288px;
        }
        /* condensed */
        :host([condensed]) .image {
          height: 24px;
          width: 24px;
        }
      `]}render(){return n`
      <!-- image -->
      <div class="image">
        ${this.image?n` <img src="${this.image}" /> `:n`
              ${this.label?n` ${this.getInitials(this.label)} `:n` <kor-icon icon="person"></kor-icon> `}
            `}
      </div>
      <!-- text -->
      ${this.label||this.info?n`
            <div class="text">
              ${this.label?n`<kor-text size="body-2" class="label"
                    >${this.label}</kor-text
                  >`:""}
              ${this.info?n`<kor-text
                    size="body-2"
                    class="info"
                    color="var(--text-2)"
                    >${this.info}</kor-text
                  >`:""}
            </div>
          `:""}
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}getInitials(t){const e=t.match(/\b\w/g)||[];return(e.shift()||"")+(e.pop()||"").toUpperCase()}}kor_avatar_decorate([property_e({type:String,reflect:!0})],korAvatar.prototype,"label",void 0),kor_avatar_decorate([property_e({type:String,reflect:!0})],korAvatar.prototype,"info",void 0),kor_avatar_decorate([property_e({type:String,reflect:!0})],korAvatar.prototype,"image",void 0),kor_avatar_decorate([property_e({type:Boolean,reflect:!0})],korAvatar.prototype,"condensed",void 0),window.customElements.get("kor-avatar")||window.customElements.define("kor-avatar",korAvatar);var kor_badge_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korBadge extends t{static get styles(){return[l,e`
        :host {
          display: flex;
          justify-content: center;
          box-sizing: border-box;
          width: max-content;
          min-width: 16px;
          padding: 0 4px;
          border-radius: 8px;
          background: rgb(var(--functional-blue));
        }
        :host(:not([label])) {
          padding: 4px;
          min-width: unset;
        }
        kor-text {
          color: white;
          font-weight: bold;
        }
        /* status */
        :host([status]) {
          background: transparent;
          padding: 0px;
        }
        .status-icon[icon='cancel'] {
          color: rgb(var(--functional-red));
        }
        .status-icon[icon='error'] {
          color: rgb(var(--functional-yellow));
        }
        .status-icon[icon='check_circle'] {
          color: rgb(var(--functional-green));
        }
      `]}render(){return n`
      ${this.status?n`
            <!-- status -->
            ${this.status?n`
                  <kor-icon
                    class="status-icon"
                    size="s"
                    icon="${this.getStatusIcon()}"
                  ></kor-icon>
                `:""}
          `:n`
            ${this.label?n`
                  <kor-text size="body-2">
                    ${this.label>999?n` 999+ `:n` ${this.label} `}
                  </kor-text>
                `:""}
          `}
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}getStatusIcon(){let t;switch(this.status){case"error":t="cancel";break;case"warning":t="error";break;case"success":t="check_circle"}return t}}kor_badge_decorate([property_e({type:Number,reflect:!0})],korBadge.prototype,"label",void 0),kor_badge_decorate([property_e({type:String,reflect:!0})],korBadge.prototype,"status",void 0),window.customElements.get("kor-badge")||window.customElements.define("kor-badge",korBadge);class korBreadcrumbs extends t{static get styles(){return[l,e`
        :host {
          display: flex;
          width: 100%;
          height: max-content;
        }
      `]}render(){return n` <slot></slot> `}}window.customElements.get("kor-breadcrumbs")||window.customElements.define("kor-breadcrumbs",korBreadcrumbs);var kor_breadcrumb_item_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korBreadcrumbItem extends t{constructor(){super(...arguments),this.label="Label"}static get styles(){return[l,e`
        :host {
          display: flex;
          align-items: center;
        }
        kor-icon {
          pointer-events: none;
          margin: 0 var(--spacing-xs);
        }
        kor-text {
          color: var(--text-2);
          cursor: pointer;
          font-weight: bold;
        }
        :host([active]) kor-text {
          color: var(--text-1);
        }
        /* hover inputs */
        @media (hover: hover) {
          kor-text:hover:not(:active) {
            color: var(--text-1);
          }
        }
      `]}render(){return n`
      ${this.firstItem()?"":n`
            <kor-icon
              icon="keyboard_arrow_right"
              color="var(--text-2)"
            ></kor-icon>
          `}
      <kor-text>${this.label}</kor-text>
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}firstItem(){var t;let e,n;return n=Array.prototype.slice.call(null===(t=this.parentElement)||void 0===t?void 0:t.children),e=0==n.indexOf(this),e}}kor_breadcrumb_item_decorate([property_e({type:String,reflect:!0})],korBreadcrumbItem.prototype,"label",void 0),kor_breadcrumb_item_decorate([property_e({type:Boolean,reflect:!0})],korBreadcrumbItem.prototype,"active",void 0),window.customElements.get("kor-breadcrumb-item")||window.customElements.define("kor-breadcrumb-item",korBreadcrumbItem);var kor_divider_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korDivider extends t{constructor(){super(...arguments),this.spacing="m",this.orientation="horizontal"}static get styles(){return[l,e`
        :host([orientation='horizontal']) {
          width: 100%;
        }
        :host([orientation='vertical']) {
          height: 100%;
        }
        .line {
          background: rgba(var(--neutral-1), 0.25);
        }
        :host([orientation='horizontal']) .line {
          height: 1px;
          width: 100%;
        }
        :host([orientation='vertical']) .line {
          width: 1px;
          height: 100%;
        }
        /* spacing */
        :host([spacing='s'][orientation='horizontal']) {
          padding: var(--spacing-s) 0;
        }
        :host([spacing='m'][orientation='horizontal']) {
          padding: var(--spacing-l) 0;
        }
        :host([spacing='l'][orientation='horizontal']) {
          padding: calc(var(--spacing-l) * 2) 0;
        }
        :host([spacing='s'][orientation='vertical']) {
          padding: 0 var(--spacing-s);
        }
        :host([spacing='m'][orientation='vertical']) {
          padding: 0 var(--spacing-l);
        }
        :host([spacing='l'][orientation='vertical']) {
          padding: 0 calc(var(--spacing-s) * 2);
        }
      `]}render(){return n`<div class="line"></div>`}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}}kor_divider_decorate([property_e({type:String,reflect:!0})],korDivider.prototype,"spacing",void 0),kor_divider_decorate([property_e({type:String,reflect:!0})],korDivider.prototype,"orientation",void 0),window.customElements.get("kor-divider")||window.customElements.define("kor-divider",korDivider);var kor_button_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korButton extends t{constructor(){super(...arguments),this.color="primary"}static get styles(){return[l,e`
        :host {
          font: var(--header-2);
          color: var(--text-1);
          display: flex;
          gap: var(--spacing-xs);
          height: max-content;
          width: max-content;
          border-radius: var(--btn-border-radius, --border-radius);
          cursor: pointer;
          transition: var(--transition-1);
          justify-content: center;
          user-select: none;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        :host([label]) {
          max-width: 160px;
          padding: var(--spacing-xs) var(--spacing-m);
        }
        :host([color='tertiary'][label]) {
          padding: 3px 11px;
        }
        :host(:not([label])) {
          padding: var(--spacing-xs);
        }
        :host([color='tertiary']:not([label])) {
          padding: 3px;
        }
        /* idle */
        :host([color='primary']) {
          color: var(--btn-primary-face-color, --text-1);
          background: var(--btn-primary-gradient, rgb(var(--accent-1)));
        }
        :host([color='secondary']) {
          background-color: rgba(var(--neutral-1), 0.1);
        }
        :host([color='tertiary']) {
          border-width: 1px;
          border-style: solid;
          border-color: rgba(var(--neutral-1), 0.25);
        }
        /* glow */
        :host([glow]) {
          box-shadow: var(--btn-glow, 0 0 12px rgba(var(--accent-1), 0.5));
        }
        /* divider between the icon and the label */
        :host([divided]) kor-divider {
          align-self: stretch;
          height: auto;
          opacity: 0.6;
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* text and icon colors */
        kor-icon {
          color: unset;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host([color='primary']:not(:active):hover) {
            background: var(--btn-primary-gradient-hover, rgb(var(--accent-1b)));
          }
          :host([color='secondary']:not(:active):hover) {
            background-color: rgba(var(--neutral-1), 0.15);
          }
          :host([color='tertiary']:not(:active):hover) {
            border-color: rgba(var(--neutral-1), 0.3);
            background-color: rgba(var(--neutral-1), 0.05);
          }
        }
        .center {
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        .label {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `]}render(){return n`
      <slot name="icon">
        ${this.icon?n` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      </slot>
      ${this.divided&&this.icon&&this.label?n`<kor-divider orientation="vertical" spacing="s"></kor-divider>`:""}
      <slot>${this.label?n`<div class="center"><label class="label">${this.label}</label></div>`:""}</slot>
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}}kor_button_decorate([property_e({type:String,reflect:!0})],korButton.prototype,"label",void 0),kor_button_decorate([property_e({type:String,reflect:!0})],korButton.prototype,"icon",void 0),kor_button_decorate([property_e({type:String,reflect:!0})],korButton.prototype,"color",void 0),kor_button_decorate([property_e({type:Boolean,reflect:!0})],korButton.prototype,"disabled",void 0),kor_button_decorate([property_e({type:Boolean,reflect:!0})],korButton.prototype,"divided",void 0),kor_button_decorate([property_e({type:Boolean,reflect:!0})],korButton.prototype,"glow",void 0),window.customElements.get("kor-button")||window.customElements.define("kor-button",korButton);var kor_checkbox_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korCheckbox extends t{static get styles(){return[l,e`
        :host {
          display: flex;
          cursor: pointer;
        }
        input {
          display: none;
        }
        /* box */
        .box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
          margin: 4px;
          border-radius: 2px;
          box-sizing: border-box;
          border: 2px solid rgba(var(--neutral-1), 0.25);
          transition: var(--transition-1);
        }
        :host([active]) .box {
          border-color: transparent;
          background: rgb(var(--accent-1));
        }
        /* label */
        kor-text {
          flex: 1;
          margin-left: var(--spacing-s);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          pointer-events: none;
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active]):not(:active)) .box {
            border-color: rgba(var(--neutral-1), 0.3);
          }
        }
      `]}render(){return n`
      <input
        type="checkbox"
        ?checked="${this.active}"
        ?readonly="${this.disabled}"
        .value="${this.label}"
        .name="${this.label}"
        @change="${this.handleChange}"
      />
      <div class="box">
        ${this.active?n` <kor-icon icon="check" size="s" color="white"></kor-icon> `:""}
      </div>
      ${this.label?n` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>{this.active=!this.active})}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}}kor_checkbox_decorate([property_e({type:String,reflect:!0})],korCheckbox.prototype,"label",void 0),kor_checkbox_decorate([property_e({type:Boolean,reflect:!0})],korCheckbox.prototype,"active",void 0),kor_checkbox_decorate([property_e({type:Boolean,reflect:!0})],korCheckbox.prototype,"disabled",void 0),window.customElements.get("kor-checkbox")||window.customElements.define("kor-checkbox",korCheckbox);var kor_drawer_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korDrawer extends t{constructor(){super(...arguments),this.position="left",this.height="320px",this.width="320px",this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[l,e`
        :host {
          transition: var(--transition-1), 0s top, 0s left;
          position: fixed;
          opacity: 1;
          z-index: 5;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
        }
        kor-card {
          position: absolute;
          border-radius: 0px;
          background-color: rgb(var(--base-3));
          box-shadow: var(--shadow-1);
          transition: 0.2s all ease-out, 0s top, 0s left;
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
        /* position */
        :host([position='left']) kor-card {
          left: 0;
        }
        :host([position='right']) kor-card {
          right: 0;
        }
        :host([position='top']) kor-card {
          top: 0;
        }
        :host([position='bottom']) kor-card {
          bottom: 0;
        }
        /* animations */
        :host([position='left']:not([visible])) kor-card {
          margin-left: -40px;
        }
        :host([position='right']:not([visible])) kor-card {
          margin-right: -40px;
        }
        :host([position='top']:not([visible])) kor-card {
          margin-top: -40px;
        }
        :host([position='bottom']:not([visible])) kor-card {
          margin-bottom: -40px;
        }
      `]}render(){return n`
      <kor-card
        @click="${t=>t.stopPropagation()}"
        style="height: ${this.getCardSize().height}; width: ${this.getCardSize().width}; max-height: ${this.getCardSize().height}; max-width: ${this.getCardSize().width}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
        ></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":n`
                <kor-icon
                  button
                  icon="close"
                  @click="${()=>this.visible=!1}"
                ></kor-icon>
              `}
        </slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed")),"visible"===t&&this.visible&&this.addEventListener("click",()=>this.sticky?"":this.visible=!1)}getCardSize(){let t={height:void 0,width:void 0};switch(this.position){case"left":case"right":t.height="100%",t.width=this.width;break;case"top":case"bottom":t.height=this.height,t.width="100%"}return t}}kor_drawer_decorate([property_e({type:String,reflect:!0})],korDrawer.prototype,"label",void 0),kor_drawer_decorate([property_e({type:String,reflect:!0})],korDrawer.prototype,"icon",void 0),kor_drawer_decorate([property_e({type:String,reflect:!0})],korDrawer.prototype,"position",void 0),kor_drawer_decorate([property_e({type:String,reflect:!0})],korDrawer.prototype,"height",void 0),kor_drawer_decorate([property_e({type:String,reflect:!0})],korDrawer.prototype,"width",void 0),kor_drawer_decorate([property_e({type:String,reflect:!0,attribute:"flex-direction"})],korDrawer.prototype,"flexDirection",void 0),kor_drawer_decorate([property_e({type:Boolean,reflect:!0})],korDrawer.prototype,"visible",void 0),kor_drawer_decorate([property_e({type:Boolean,reflect:!0})],korDrawer.prototype,"sticky",void 0),kor_drawer_decorate([r()],korDrawer.prototype,"emptyHeader",void 0),kor_drawer_decorate([r()],korDrawer.prototype,"emptyFunctions",void 0),kor_drawer_decorate([r()],korDrawer.prototype,"emptyFooter",void 0),window.customElements.get("kor-drawer")||window.customElements.define("kor-drawer",korDrawer);var kor_empty_state_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korEmptyState extends t{static get styles(){return[l,e`
        :host {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          /* css properties */
          --footer-gap: var(--spacing-m);
        }
        slot[name='footer'] {
          display: flex;
          margin-top: var(--spacing-l);
          gap: var(--footer-gap);
        }
        kor-icon + kor-text {
          margin-top: var(--spacing-s);
        }
        kor-text {
          text-align: center;
        }
      `]}render(){return n`
      ${this.icon?n`
            <kor-icon
              icon="${this.icon}"
              size="xl"
              color="var(--text-2)"
            ></kor-icon>
          `:""}
      ${this.label?n` <kor-text color="var(--text-2)">${this.label}</kor-text> `:""}
      <slot name="footer"></slot>
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}}kor_empty_state_decorate([property_e({type:String,reflect:!0})],korEmptyState.prototype,"label",void 0),kor_empty_state_decorate([property_e({type:String,reflect:!0})],korEmptyState.prototype,"icon",void 0),window.customElements.get("kor-empty-state")||window.customElements.define("kor-empty-state",korEmptyState);var kor_grid_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korGrid extends t{constructor(){super(...arguments),this.columns=12,this.spacing="m"}static get styles(){return[l,e`
        :host {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
        }
        :host(:not([fit-content])) {
          height: 100%;
          width: 100%;
        }
        ::slotted(*) {
          width: auto;
          min-width: 0;
          min-height: 0;
        }
        /* spacing */
        :host([spacing='s']) {
          grid-gap: var(--spacing-s);
        }
        :host([spacing='m']) {
          grid-gap: var(--spacing-m);
        }
        :host([spacing='l']) {
          grid-gap: var(--spacing-l);
        }
        /* columns and rows */
        ::slotted(*[grid-cols='0']) {
          display: none;
        }
        ::slotted(*:not([grid-cols])),
        ::slotted(*[grid-cols='1']) {
          grid-column: span 1;
        }
        ::slotted(*[grid-cols='2']) {
          grid-column: span 2;
        }
        ::slotted(*[grid-cols='3']) {
          grid-column: span 3;
        }
        ::slotted(*[grid-cols='4']) {
          grid-column: span 4;
        }
        ::slotted(*[grid-cols='5']) {
          grid-column: span 5;
        }
        ::slotted(*[grid-cols='6']) {
          grid-column: span 6;
        }
        ::slotted(*[grid-cols='7']) {
          grid-column: span 7;
        }
        ::slotted(*[grid-cols='8']) {
          grid-column: span 8;
        }
        ::slotted(*[grid-cols='9']) {
          grid-column: span 9;
        }
        ::slotted(*[grid-cols='10']) {
          grid-column: span 10;
        }
        ::slotted(*[grid-cols='11']) {
          grid-column: span 11;
        }
        ::slotted(*[grid-cols='12']) {
          grid-column: span 12;
        }
        ::slotted(*:not([grid-rows])),
        ::slotted(*[grid-rows='1']) {
          grid-row: span 1;
        }
        ::slotted(*[grid-rows='2']) {
          grid-row: span 2;
        }
        ::slotted(*[grid-rows='3']) {
          grid-row: span 3;
        }
        ::slotted(*[grid-rows='4']) {
          grid-row: span 4;
        }
        ::slotted(*[grid-rows='5']) {
          grid-row: span 5;
        }
        ::slotted(*[grid-rows='6']) {
          grid-row: span 6;
        }
        ::slotted(*[grid-rows='7']) {
          grid-row: span 7;
        }
        ::slotted(*[grid-rows='8']) {
          grid-row: span 8;
        }
        ::slotted(*[grid-rows='9']) {
          grid-row: span 9;
        }
        ::slotted(*[grid-rows='10']) {
          grid-row: span 10;
        }
        ::slotted(*[grid-rows='11']) {
          grid-row: span 11;
        }
        ::slotted(*[grid-rows='12']) {
          grid-row: span 12;
        }
        /* tablet */
        @media only screen and (max-width: 1025px) {
          ::slotted(*[grid-cols-m='0']) {
            display: none;
          }
          ::slotted(*[grid-cols-m='1']) {
            grid-column: span 1;
          }
          ::slotted(*[grid-cols-m='2']) {
            grid-column: span 2;
          }
          ::slotted(*[grid-cols-m='3']) {
            grid-column: span 3;
          }
          ::slotted(*[grid-cols-m='4']) {
            grid-column: span 4;
          }
          ::slotted(*[grid-cols-m='5']) {
            grid-column: span 5;
          }
          ::slotted(*[grid-cols-m='6']) {
            grid-column: span 6;
          }
          ::slotted(*[grid-cols-m='7']) {
            grid-column: span 7;
          }
          ::slotted(*[grid-cols-m='8']) {
            grid-column: span 8;
          }
          ::slotted(*[grid-cols-m='9']) {
            grid-column: span 9;
          }
          ::slotted(*[grid-cols-m='10']) {
            grid-column: span 10;
          }
          ::slotted(*[grid-cols-m='11']) {
            grid-column: span 11;
          }
          ::slotted(*[grid-cols-m='12']) {
            grid-column: span 12;
          }
          ::slotted(*[grid-rows-m='1']) {
            grid-row: span 1;
          }
          ::slotted(*[grid-rows-m='2']) {
            grid-row: span 2;
          }
          ::slotted(*[grid-rows-m='3']) {
            grid-row: span 3;
          }
          ::slotted(*[grid-rows-m='4']) {
            grid-row: span 4;
          }
          ::slotted(*[grid-rows-m='5']) {
            grid-row: span 5;
          }
          ::slotted(*[grid-rows-m='6']) {
            grid-row: span 6;
          }
          ::slotted(*[grid-rows-m='7']) {
            grid-row: span 7;
          }
          ::slotted(*[grid-rows-m='8']) {
            grid-row: span 8;
          }
          ::slotted(*[grid-rows-m='9']) {
            grid-row: span 9;
          }
          ::slotted(*[grid-rows-m='10']) {
            grid-row: span 10;
          }
          ::slotted(*[grid-rows-m='11']) {
            grid-row: span 11;
          }
          ::slotted(*[grid-rows-m='12']) {
            grid-row: span 12;
          }
        }
        /* tablet */
        @media only screen and (max-width: 767px) {
          ::slotted(*[grid-cols-s='0']) {
            display: none;
          }
          ::slotted(*[grid-cols-s='1']) {
            grid-column: span 1;
          }
          ::slotted(*[grid-cols-s='2']) {
            grid-column: span 2;
          }
          ::slotted(*[grid-cols-s='3']) {
            grid-column: span 3;
          }
          ::slotted(*[grid-cols-s='4']) {
            grid-column: span 4;
          }
          ::slotted(*[grid-cols-s='5']) {
            grid-column: span 5;
          }
          ::slotted(*[grid-cols-s='6']) {
            grid-column: span 6;
          }
          ::slotted(*[grid-cols-s='7']) {
            grid-column: span 7;
          }
          ::slotted(*[grid-cols-s='8']) {
            grid-column: span 8;
          }
          ::slotted(*[grid-cols-s='9']) {
            grid-column: span 9;
          }
          ::slotted(*[grid-cols-s='10']) {
            grid-column: span 10;
          }
          ::slotted(*[grid-cols-s='11']) {
            grid-column: span 11;
          }
          ::slotted(*[grid-cols-s='12']) {
            grid-column: span 12;
          }
          ::slotted(*[grid-rows-s='1']) {
            grid-row: span 1;
          }
          ::slotted(*[grid-rows-s='2']) {
            grid-row: span 2;
          }
          ::slotted(*[grid-rows-s='3']) {
            grid-row: span 3;
          }
          ::slotted(*[grid-rows-s='4']) {
            grid-row: span 4;
          }
          ::slotted(*[grid-rows-s='5']) {
            grid-row: span 5;
          }
          ::slotted(*[grid-rows-s='6']) {
            grid-row: span 6;
          }
          ::slotted(*[grid-rows-s='7']) {
            grid-row: span 7;
          }
          ::slotted(*[grid-rows-s='8']) {
            grid-row: span 8;
          }
          ::slotted(*[grid-rows-s='9']) {
            grid-row: span 9;
          }
          ::slotted(*[grid-rows-s='10']) {
            grid-row: span 10;
          }
          ::slotted(*[grid-rows-s='11']) {
            grid-row: span 11;
          }
          ::slotted(*[grid-rows-s='12']) {
            grid-row: span 12;
          }
        }
      `]}render(){return n`<slot></slot>`}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed")),"columns"===t?this.style.gridTemplateColumns=`repeat(${this.columns}, 1fr)`:"rows"===t&&(this.style.gridTemplateRows=`repeat(${this.rows}, 1fr)`)}}kor_grid_decorate([property_e({type:Number,reflect:!0})],korGrid.prototype,"columns",void 0),kor_grid_decorate([property_e({type:Number,reflect:!0})],korGrid.prototype,"rows",void 0),kor_grid_decorate([property_e({type:String,reflect:!0})],korGrid.prototype,"spacing",void 0),window.customElements.get("kor-grid")||window.customElements.define("kor-grid",korGrid);var p,h,g,u,kor_image_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korImage extends t{constructor(){super(...arguments),this.width="100%",this.fit="contain"}static get styles(){return[l,e`
        :host {
          position: relative;
          max-width: max-content;
          display: flex;
          flex-direction: column;
          font: var(--body-2);
          color: var(--text-1);
        }
        /* legend */
        kor-text {
          width: 100%;
          color: unset;
          font: unset;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        :host(:not([legend-position])) kor-text {
          margin-top: var(--spacing-s);
        }
        :host([legend-position^='inner-']) kor-text {
          position: absolute;
          padding: var(--spacing-s);
          box-sizing: border-box;
        }
        :host([legend-position='inner-top']) kor-text {
          top: 0;
          background-image: linear-gradient(
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0)
          );
        }
        :host([legend-position='inner-bottom']) kor-text {
          bottom: 0;
          background-image: linear-gradient(
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.8)
          );
        }
        /* slots */
        slot {
          display: flex;
          justify-content: flex-end;
          gap: var(--spacing-s);
          position: absolute;
          padding: var(--spacing-xs);
          box-sizing: border-box;
          width: 100%;
          overflow: hidden;
        }
        slot[name='top'] {
          top: 0;
        }
        :host([legend][legend-position='inner-top']) slot[name='top'] {
          top: 24px;
        }
        slot[name='bottom'] {
          bottom: 0;
        }
        :host([legend]:not([legend-position])) slot[name='bottom'],
        :host([legend][legend-position='inner-bottom']) slot[name='bottom'] {
          bottom: 24px;
        }
      `]}render(){return n`
      <img
        src="${this.src}"
        alt="${this.alt}"
        width="${this.width}"
        height="${this.height}"
        style="object-fit: ${this.fit}"
      />
      ${this.legend?n` <kor-text>${this.legend}</kor-text> `:""}
      <slot name="top"></slot>
      <slot name="bottom"></slot>
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}}kor_image_decorate([property_e({type:String,reflect:!0})],korImage.prototype,"src",void 0),kor_image_decorate([property_e({type:String,reflect:!0})],korImage.prototype,"alt",void 0),kor_image_decorate([property_e({type:String,reflect:!0})],korImage.prototype,"height",void 0),kor_image_decorate([property_e({type:String,reflect:!0})],korImage.prototype,"width",void 0),kor_image_decorate([property_e({type:String,reflect:!0})],korImage.prototype,"fit",void 0),kor_image_decorate([property_e({type:String,reflect:!0})],korImage.prototype,"legend",void 0),kor_image_decorate([property_e({type:String,reflect:!0,attribute:"legend-position"})],korImage.prototype,"legendPosition",void 0),window.customElements.get("kor-image")||window.customElements.define("kor-image",korImage);const v=globalThis.trustedTypes,y=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,f=`lit$${(Math.random()+"").slice(9)}$`,m="?"+f,w=`<${m}>`,x=document,c=(t="")=>x.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,$=Array.isArray,a=t=>{var e;return $(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,P=/>/g,j=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,D=/'/g,O=/"/g,T=/^(?:script|style|textarea)$/i,b=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),B=(b(1),b(2),Symbol.for("lit-noChange")),A=Symbol.for("lit-nothing"),F=new WeakMap,W=x.createTreeWalker(x,129,null,!1),M=(t,e)=>{const n=t.length-1,s=[];let l,p=2===e?"<svg>":"",h=_;for(let e=0;e<n;e++){const n=t[e];let g,u,v=-1,y=0;for(;y<n.length&&(h.lastIndex=y,u=h.exec(n),null!==u);)y=h.lastIndex,h===_?"!--"===u[1]?h=E:void 0!==u[1]?h=P:void 0!==u[2]?(T.test(u[2])&&(l=RegExp("</"+u[2],"g")),h=j):void 0!==u[3]&&(h=j):h===j?">"===u[0]?(h=null!=l?l:_,v=-1):void 0===u[1]?v=-2:(v=h.lastIndex-u[2].length,g=u[1],h=void 0===u[3]?j:'"'===u[3]?O:D):h===O||h===D?h=j:h===E||h===P?h=_:(h=j,l=void 0);const m=h===j&&t[e+1].startsWith("/>")?" ":"";p+=h===_?n+w:v>=0?(s.push(g),n.slice(0,v)+"$lit$"+n.slice(v)+f+m):n+f+(-2===v?(s.push(void 0),e):m)}const g=p+(t[n]||"<?>")+(2===e?"</svg>":"");return[void 0!==y?y.createHTML(g):g,s]};class N{constructor({strings:t,_$litType$:e},n){let s;this.parts=[];let l=0,p=0;const h=t.length-1,g=this.parts,[u,y]=M(t,e);if(this.el=N.createElement(u,n),W.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=W.nextNode())&&g.length<h;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(f)){const n=y[p++];if(t.push(e),void 0!==n){const t=s.getAttribute(n.toLowerCase()+"$lit$").split(f),e=/([.?@])?(.*)/.exec(n);g.push({type:1,index:l,name:e[2],strings:t,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?R:H})}else g.push({type:6,index:l})}for(const e of t)s.removeAttribute(e)}if(T.test(s.tagName)){const t=s.textContent.split(f),e=t.length-1;if(e>0){s.textContent=v?v.emptyScript:"";for(let n=0;n<e;n++)s.append(t[n],c()),W.nextNode(),g.push({type:2,index:++l});s.append(t[e],c())}}}else if(8===s.nodeType)if(s.data===m)g.push({type:2,index:l});else{let t=-1;for(;-1!==(t=s.data.indexOf(f,t+1));)g.push({type:7,index:l}),t+=f.length-1}l++}}static createElement(t,e){const n=x.createElement("template");return n.innerHTML=t,n}}function S(t,e,n=t,s){var l,p,h,g;if(e===B)return e;let u=void 0!==s?null===(l=n.Σi)||void 0===l?void 0:l[s]:n.Σo;const v=d(e)?void 0:e._$litDirective$;return(null==u?void 0:u.constructor)!==v&&(null===(p=null==u?void 0:u.O)||void 0===p||p.call(u,!1),void 0===v?u=void 0:(u=new v(t),u.T(t,n,s)),void 0!==s?(null!==(h=(g=n).Σi)&&void 0!==h?h:g.Σi=[])[s]=u:n.Σo=u),void 0!==u&&(e=S(t,u.S(t,e.values),u,s)),e}class k{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:n},parts:s}=this.D,l=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(n,!0);W.currentNode=l;let p=W.nextNode(),h=0,g=0,u=s[0];for(;void 0!==u;){if(h===u.index){let e;2===u.type?e=new C(p,p.nextSibling,this,t):1===u.type?e=new u.ctor(p,u.name,u.strings,this,t):6===u.type&&(e=new z(p,this,t)),this.l.push(e),u=s[++g]}h!==(null==u?void 0:u.index)&&(p=W.nextNode(),h++)}return l}v(t){let e=0;for(const n of this.l)void 0!==n&&(void 0!==n.strings?(n.I(t,n,e),e+=n.strings.length-2):n.I(t[e])),e++}}class C{constructor(t,e,n,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=n,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=S(this,t,e),d(t)?t===A||null==t||""===t?(this.H!==A&&this.R(),this.H=A):t!==this.H&&t!==B&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):a(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(x.createTextNode(t)),this.H=t}_(t){var e;const{values:n,_$litType$:s}=t,l="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=N.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===l)this.H.v(n);else{const t=new k(l,this),e=t.u(this.options);t.v(n),this.$(e),this.H=t}}C(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new N(t)),e}g(t){$(this.H)||(this.H=[],this.R());const e=this.H;let n,s=0;for(const l of t)s===e.length?e.push(n=new C(this.k(c()),this.k(c()),this,this.options)):n=e[s],n.I(l),s++;s<e.length&&(this.R(n&&n.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var n;for(null===(n=this.P)||void 0===n||n.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class H{constructor(t,e,n,s,l){this.type=1,this.H=A,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=l,n.length>2||""!==n[0]||""!==n[1]?(this.H=Array(n.length-1).fill(A),this.strings=n):this.H=A}get tagName(){return this.element.tagName}I(t,e=this,n,s){const l=this.strings;let p=!1;if(void 0===l)t=S(this,t,e,0),p=!d(t)||t!==this.H&&t!==B,p&&(this.H=t);else{const s=t;let h,g;for(t=l[0],h=0;h<l.length-1;h++)g=S(this,s[n+h],e,h),g===B&&(g=this.H[h]),p||(p=!d(g)||g!==this.H[h]),g===A?t=A:t!==A&&(t+=(null!=g?g:"")+l[h+1]),this.H[h]=g}p&&!s&&this.W(t)}W(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends H{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===A?void 0:t}}class L extends H{constructor(){super(...arguments),this.type=4}W(t){t&&t!==A?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class R extends H{constructor(){super(...arguments),this.type=5}I(t,e=this){var n;if((t=null!==(n=S(this,t,e,0))&&void 0!==n?n:A)===B)return;const s=this.H,l=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,p=t!==A&&(s===A||l);l&&this.element.removeEventListener(this.name,this,s),p&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,n;"function"==typeof this.H?this.H.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this.H.handleEvent(t)}}class z{constructor(t,e,n){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=n}I(t){S(this,t)}}null===(h=(p=globalThis).litHtmlPlatformSupport)||void 0===h||h.call(p,N,C),(null!==(g=(u=globalThis).litHtmlVersions)&&void 0!==g?g:u.litHtmlVersions=[]).push("2.0.0-rc.3");const if_defined_l=t=>null!=t?t:A;var kor_input_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};let q=class korInput extends t{static get styles(){return[l,e`
        :host {
          display: flex;
          align-items: center;
          min-height: 40px;
          border-width: 0px 0px 1px 0px;
          border-style: solid;
          border-color: rgba(var(--neutral-1), 0.2);
          border-radius: 2px;
          box-sizing: border-box;
          padding: 0 8px;
          width: 100%;
          overflow: visible;
          background-color: rgba(var(--neutral-1), 0.05);
          position: relative;
        }
        :host,
        .label,
        input {
          transition: var(--transition-1);
        }
        .center {
          flex: 1 1 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        .hours,
        .minutes {
          min-height: 40px;
          border-width: 0px 0px 1px 0px;
          border-style: solid;
          border-color: rgba(var(--neutral-1), 0.2);
          border-radius: 2px;
          box-sizing: border-box;
          padding-top: 8px;
          width: 100%;
          background-color: rgba(var(--neutral-1), 0.05);
          min-width: 2rem;
          text-align: center;
        }
        .hours > input,
        .minutes > input {
          padding-left: 8px;
        }
        input {
          background: none;
          border: none;
          box-shadow: none;
          padding: 0px;
          outline: none;
          -webkit-appearance: none;
          font: var(--body-1);
          color: var(--text-1);
          max-height: 16px;
        }
        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button,
        input[type='search']::-webkit-search-decoration,
        input[type='search']::-webkit-search-cancel-button,
        input[type='search']::-webkit-search-results-button,
        input[type='search']::-webkit-search-results-decoration {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type='number'] {
          -moz-appearance: textfield;
        }
        /* active */
        :host([active]) {
          border-color: rgb(var(--accent-1));
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
        /* condensed */
        :host([condensed]) {
          min-height: 32px;
        }
        :host([condensed][value]:not([value=''])) .label,
        :host([condensed][active]) .label {
          display: none;
        }
        /* icon */
        :host([icon]) .icon {
          margin-right: var(--spacing-s);
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
        :host([value]:not([value=''])) .label,
        :host([active]) .label {
          font: var(--body-2);
        }
        :host(:not([value]):not([active]):not([type='date'])) input,
        :host([value='']:not([active]):not([type='date'])) input {
          max-height: 0px;
        }
        input,
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
        /* status */
        .clear-icon,
        .status-icon,
        .increment-icon,
        .select-icon,
        slot[name='functions']::slotted(*) {
          margin-left: var(--spacing-s);
        }
        .status-icon[icon='cancel'] {
          color: rgb(var(--functional-red));
        }
        .status-icon[icon='error'] {
          color: rgb(var(--functional-yellow));
        }
        .status-icon[icon='check_circle'] {
          color: rgb(var(--functional-green));
        }
        /* select, date and datetime */
        :host([type='date']),
        :host([type='date']) *,
        :host([type='datetime']),
        :host([type='datetime']) *,
        :host([type='select']),
        :host([type='select']) * {
          cursor: pointer !important;
        }
        :host([type='text']) .center,
        :host([type='number']) .center,
        :host([type='select'][filterable]) .center,
        :host([type='select'][filterable]) input {
          cursor: text !important;
        }
        :host([active]) .select-icon {
          transform: rotate(180deg);
        }
        .select-menu {
          position: fixed;
          max-height: 240px;
          z-index: 3;
          padding: var(--spacing-l) 0;
          background-color: rgb(var(--base-4));
        }
        slot:not([name]) {
          display: block;
          margin: 0 var(--spacing-s);
        }
        slot:not([name])::slotted(*) {
          margin-bottom: 0;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active])) {
            border-color: rgba(var(--neutral-1), 0.4);
          }
        }
      `]}render(){var t;return n`
      ${this.icon?n` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `:""}
      <div class="center">
        ${this.label?n` <label class="label">${this.label}</label> `:""}
        <input id="main_input"
          .type="${"date"===this.type||"datetime"===this.type?"text":this.type}"
          .value="${this.value?this.value:""}"
          .step="${this.step?this.step.toString():"any"}"
          ?autofocus="${this.autofocus}"
          ?readonly="${this.readonly||this.disabled||"select"===this.type&&!this.filterable}"
          min="${if_defined_l(this.min)}"
          max="${if_defined_l(this.max)}"
          pattern="${if_defined_l(this.pattern)}"
          name="${if_defined_l(this.name)}"
          @input="${t=>{const e=t.target;e.value!=this.value&&this.handleChange_(t),this.isFilterableSelect_()&&(this.filter_=e.value,this.active=!0,this.filterItems_())}}"
          @keydown="${t=>{this.handleFilterKeys_(t)}}"
          @focus="${t=>{this.handleFocus_(t)}}"
          @blur="${t=>{this.handleBlur_(t)}}"
        />
      </div>
      <!-- select -->
      ${"select"===this.type?n`
            <kor-icon
              button
              class="select-icon"
              icon="arrow_drop_down"
            ></kor-icon>
            ${this.active?n`
                  <kor-card
                    @click="${t=>{this.active=!1,t.stopPropagation()}}"
                    @wheel="${t=>t.stopPropagation()}"
                    class="select-menu"
                    .style="
                  top: ${this.getMenuStyles().top};
                  left: ${this.getMenuStyles().left};
                  width: ${this.getMenuStyles().width};
                "
                  >
                    <slot @slotchange="${this.handleItems}"></slot>
                  </kor-card>
                `:""}
          `:""}
      <!-- date and datetime -->
      ${"date"===this.type||"datetime"===this.type?n`${this.active?this.getCalendarGrid_(null!==(t=this.value)&&void 0!==t?t:""):""}`:""}
      <!-- clear -->
      ${this.disabled||this.readonly||!this.value||this.noClear||"select"===this.type?"":n`
            <kor-icon
              button
              class="clear-icon"
              icon="close"
              @click="${this.handleClear}"
            ></kor-icon>
          `}
      <!-- status -->
      ${this.status?n`
            <kor-icon
              class="status-icon"
              .icon="${this.getStatusIcon()}"
            ></kor-icon>
          `:""}
      <!-- number increment or month increment -->
      ${("number"===this.type&&parseFloat(String(this.step))||"date"===this.type||"datetime"===this.type)&&!this.readonly?n`
            <kor-icon
              button
              class="increment-icon"
              icon="keyboard_arrow_left"
              @click="${t=>this.handleIncrement_(t,"left")}"
            ></kor-icon>
            <kor-icon
              button
              class="increment-icon"
              icon="keyboard_arrow_right"
              @click="${t=>this.handleIncrement_(t,"right")}"
            ></kor-icon>
          `:""}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `}constructor(){if(super(),this.type="text",this.autofocus=!1,this.step=0,this.is12Hour_=!1,this.isMenuHandlerSet_=!1,this.filter_="",this.addEventListener("click",t=>{var e;if(this.active)if("select"===this.type){if(this.isFilterableSelect_()&&t.composedPath().includes(this.main_input))return;this.closeSelectMenu(t)}else this.active=!1;else this.active||(this.filter_="",this.active=!0,"select"===this.type&&!this.filterable||this.disabled||this.readonly||null===(e=this.main_input)||void 0===e||e.focus())}),"datetime"===this.type){const t=new Intl.DateTimeFormat(this.locale,{hour:"numeric"}).resolvedOptions().hourCycle;"h11"!==t&&"h12"!==t||(this.is12Hour_=!0)}}firstUpdated(){var t,e,n,s;"select"===this.type||this.disabled||this.readonly||null===(t=this.main_input)||void 0===t||t.focus(),null===(e=this.main_input)||void 0===e||e.addEventListener("keydown",t=>{this.step||"number"!==this.type||"ArrowUp"!==t.key&&"ArrowDown"!==t.key||t.preventDefault()}),null===(n=this.main_input)||void 0===n||n.addEventListener("wheel",t=>{this.step||"number"!==this.type||t.preventDefault()},{passive:!1}),"date"!==this.type&&"datetime"!==this.type||(this.value=this.validateAndFormatDate_(null!==(s=this.value)&&void 0!==s?s:""))}handleChange_(t){var e;t instanceof Date?this.value=this.validateAndFormatDate_(t):t instanceof Event&&"string"==typeof(null===(e=t.target)||void 0===e?void 0:e.value)&&(this.value=t.target.value),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}setDay_(t){var e,n;let s=new Date(Date.parse(null!==(e=this.value)&&void 0!==e?e:""));isNaN(s.getTime())&&(s=new Date),s.setDate(null!==(n=parseInt(t))&&void 0!==n?n:0),this.handleChange_(s),this.active=!1,this.requestUpdate()}getHour_(){var t;let e=new Date(Date.parse(null!==(t=this.value)&&void 0!==t?t:""));isNaN(e.getTime())&&(e=new Date);let n=e.getHours();return this.is12Hour_&&n>12&&(n-=12),String(n)}setHour_(t){var e,n;let s=new Date(Date.parse(null!==(e=this.value)&&void 0!==e?e:""));isNaN(s.getTime())&&(s=new Date);let l=null!==(n=parseInt(t))&&void 0!==n?n:0;this.is12Hour_&&l>0&&l<12&&"PM"===this.getAMPM_()&&(l+=12),s.setHours(l),this.handleChange_(s)}getMinute_(){var t;let e=new Date(Date.parse(null!==(t=this.value)&&void 0!==t?t:""));return isNaN(e.getTime())&&(e=new Date),String(e.getMinutes())}setMinute_(t){var e,n;let s=new Date(Date.parse(null!==(e=this.value)&&void 0!==e?e:""));isNaN(s.getTime())&&(s=new Date),s.setMinutes(null!==(n=parseInt(t))&&void 0!==n?n:0),this.handleChange_(s)}getAMPM_(){var t,e;return(null===(t=this.value)||void 0===t?void 0:t.includes("AM"))?"AM":(null===(e=this.value)||void 0===e?void 0:e.includes("PM"))?"PM":""}setAMPM_(t){var e;let n=new Date(Date.parse(null!==(e=this.main_input.value)&&void 0!==e?e:""));if(isNaN(n.getTime())&&(n=new Date),n.getHours()>=12&&"AM"===t)n.setHours(n.getHours()-12);else{if(!(n.getHours()<12&&"PM"===t))return;n.setHours(n.getHours()+12)}this.handleChange_(n)}handleClear(t){t.stopImmediatePropagation(),this.value=void 0,this.removeAttribute("value"),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleFocus_(t){this.active||"select"===this.type||"date"===this.type||"datetime"===this.type||(this.active=!0)}handleBlur_(t){"number"===this.type&&this.validateMinMax(parseFloat(t.target.value)),"select"!==this.type&&"date"!==this.type&&"datetime"!==this.type&&(this.active=!1)}handleIncrement_(t,e){var n,s,l,p,h,g,u;if("date"===this.type||"datetime"===this.type){t.stopImmediatePropagation();let s=new Date(Date.parse(null!==(n=this.value)&&void 0!==n?n:""));return isNaN(s.getTime())&&(s=new Date),"left"===e?s.setMonth(s.getMonth()-1):s.setMonth(s.getMonth()+1),void this.handleChange_(s)}const v=parseFloat(String(this.step));!isNaN(v)&&v&&("left"===e?this.validateMinMax((null!==(p=parseFloat(null!==(l=null!==(s=this.value)&&void 0!==s?s:this.max)&&void 0!==l?l:"0"))&&void 0!==p?p:0)-v):"right"===e&&this.validateMinMax((null!==(u=parseFloat(null!==(g=null!==(h=this.value)&&void 0!==h?h:this.min)&&void 0!==g?g:"0"))&&void 0!==u?u:0)+v))}handleItems(t){const e=t.target.assignedNodes();e.forEach(t=>{"KOR-MENU-ITEM"===t.tagName&&t.addEventListener("active-changed",n=>{n.target.active&&(e.forEach(t=>{t.active=!1}),n.target.active=!0,this.value=t.label,this.active=!1,this.isFilterableSelect_()&&(this.filter_="",this.filterItems_(),this.handleChange_(void 0)))})}),this.filterItems_()}isFilterableSelect_(){return"select"===this.type&&!!this.filterable&&!this.disabled&&!this.readonly}filterItems_(){const t=this.filter_.trim().toLowerCase();Array.from(this.children).forEach(e=>{var n;if("KOR-MENU-ITEM"!==e.tagName)return;const s=String(null!==(n=e.label)&&void 0!==n?n:"").toLowerCase();e.style.display=!t||s.includes(t)?"":"none"})}handleFilterKeys_(t){if(this.isFilterableSelect_()&&this.active)if("Enter"===t.key){t.preventDefault();const e=Array.from(this.children).find(t=>"KOR-MENU-ITEM"===t.tagName&&"none"!==t.style.display);if(!e)return;e.active?(this.value=e.label,this.active=!1,this.filter_="",this.filterItems_(),this.handleChange_(void 0)):e.active=!0}else"Escape"===t.key&&(t.preventDefault(),this.active=!1)}attributeChangedCallback(t,e,n){var s;if(super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed")),"active"!==t||"select"!==this.type&&"date"!==this.type&&"datetime"!==this.type){if("locale"==t&&("date"===this.type||"datetime"===this.type)){const t=new Intl.DateTimeFormat(n,{hour:"numeric"}).resolvedOptions().hourCycle;this.is12Hour_="h11"===t||"h12"===t;const e=this.validateAndFormatDate_(null!==(s=this.value)&&void 0!==s?s:"");e!==this.value&&(this.value=e)}}else this.active&&!this.isMenuHandlerSet_&&(this.handleMenu(),this.isMenuHandlerSet_=!0)}handleMenu(){const t=this.parentElement,closePopover=()=>{this.active=!1,null==t||t.removeEventListener("wheel",closePopover),this.isMenuHandlerSet_=!1};null==t||t.addEventListener("wheel",closePopover)}closeSelectMenu(t){"select"===this.type&&this.active&&(t.stopImmediatePropagation(),this.active=!1)}validateMinMax(t){isNaN(t)||t===parseFloat(this.value)||(this.min&&t<parseFloat(this.min)?this.value=this.min:this.max&&t>parseFloat(this.max)?this.value=this.max:this.value=t.toString(),this.handleChange_(void 0))}getStatusIcon(){let t;switch(this.status){case"error":t="cancel";break;case"warning":t="error";break;case"success":t="check_circle"}return t}getMenuStyles(){return{top:this.getBoundingClientRect().top+this.clientHeight+1+"px",left:this.getBoundingClientRect().left+"px",width:this.clientWidth+"px"}}validateAndFormatDate_(t){let e=t instanceof Date?t:new Date(Date.parse(null!=t?t:""));isNaN(e.getTime())&&(e=new Date);const n={dateStyle:"short"};"datetime"===this.type&&(n.timeStyle="short");return new Intl.DateTimeFormat(this.locale,n).format(e)}getLocaleDayNames_(){const t=new Intl.DateTimeFormat(this.locale,{weekday:"narrow"});return[1,2,3,4,5,6,7].map(e=>{const n=new Date(2024,0,e);return t.format(n)+"."})}getCalendarGrid_(t){var e,s;let l=new Date(Date.parse(null!=t?t:""));isNaN(l.getTime())&&(l=new Date);const p=new Intl.DateTimeFormat(this.locale,{month:"long"}).formatToParts(l).reduce((t,e)=>("literal"!==e.type&&(t[e.type]=e.value),t),{}),h=new Intl.DateTimeFormat(this.locale,{day:"numeric",month:"numeric",year:"numeric"}).formatToParts(l).reduce((t,e)=>("literal"!==e.type&&(t[e.type]=e.value),t),{}),g=null!==(e=parseInt(h.month))&&void 0!==e?e:0,u=null!==(s=parseInt(h.year))&&void 0!==s?s:0,v=p.month+" "+h.year;let y=new Date(u,g-1,1).getDay();y=0===y?6:y-1;const f=new Date(u,g,0).getDate(),m=new Date(u,g-1,0).getDate(),w=[];let x=1,$=1;w.push(...this.getLocaleDayNames_());for(let t=0;t<6;t++)for(let e=0;e<7;e++){const n=7*t+e;n<y?w.push(m-y+n+1+"."):x<=f?(w.push(String(x)),x++):(w.push($+"."),$++)}return n`
      <kor-card id="calendar_popup" class="select-menu"
        style="top: ${this.getMenuStyles().top};
               left: ${this.getMenuStyles().left};
               width: -webkit-fit-content;
               width: -moz-fit-content;
               width: fit-content;
               max-width: 100%;
               min-width: 21rem;
               height: -webkit-fit-content;
               height: fit-content;
               max-height: 24rem;
               padding-left: 0.5rem;
               overflow: hidden;
               display: flex;"
      >
        <kor-text size="body-1">
          ${v}
        <kor-text>
        <kor-switch>
          <kor-grid columns="7" spacing
            style="grid-template-columns: repeat(7, 3rem);"
          >
            ${w.map(t=>n`
                <kor-switch-item
                  label="${t.includes(".")?t.slice(0,-1):t}"
                  grid-cols="1"
                  ?active="${t===h.day}"
                  ?disabled="${t.includes(".")}"
                  @click="${t=>{var e;t.stopImmediatePropagation();const n=t.target;this.setDay_(null!==(e=n.label)&&void 0!==e?e:"")}}"
                ></kor-switch-item>
              `)}
          </kor-grid>
        </kor-switch>
        ${"datetime"===this.type?n`
            <kor-grid columns="${this.is12Hour_?"3":"2"}" spacing="s"
              style="display: flex;"
            >
              <!-- The hours input with its &lt; and &gt; buttons -->
              <div grid-cols="1" style="display: flex; max-width: 6rem;">
                <div class="center">
                  <input class="hours" type="number" step="1"
                    min="0" max="${this.is12Hour_?12:24}"
                    value="${this.getHour_()}"
                    @input="${t=>{var e;const n=t.target;n.value!==this.getHour_()&&this.setHour_(null!==(e=n.value)&&void 0!==e?e:"")}}"
                    @click="${t=>{t.stopImmediatePropagation()}}"
                  />
                </div>
                <kor-icon class="hours" button size="m"
                  class="increment-icon"
                  icon="keyboard_arrow_left"
                  @click="${t=>{var e,n,s,l,p;t.stopImmediatePropagation();const h=t.target.parentNode.querySelector("div > input");if(!h)return;const g=(null!==(n=parseInt(null!==(e=h.value)&&void 0!==e?e:h.max))&&void 0!==n?n:0)-(null!==(s=parseInt(h.step))&&void 0!==s?s:0);g>=(null!==(l=parseInt(h.min))&&void 0!==l?l:0)&&(h.value=String(g),this.setHour_(null!==(p=h.value)&&void 0!==p?p:""))}}"
                ></kor-icon>
                <kor-icon class="hours" button size="m"
                  class="increment-icon"
                  icon="keyboard_arrow_right"
                  @click="${t=>{var e,n,s,l,p;t.stopImmediatePropagation();const h=t.target.parentNode.querySelector("div > input");if(!h)return;const g=(null!==(n=parseInt(null!==(e=h.value)&&void 0!==e?e:h.min))&&void 0!==n?n:0)+(null!==(s=parseInt(h.step))&&void 0!==s?s:0);g<=(null!==(l=parseInt(h.max))&&void 0!==l?l:0)&&(h.value=String(g),this.setHour_(null!==(p=h.value)&&void 0!==p?p:""))}}"
                ></kor-icon>
              </div>
              <!-- The minutes input with its &lt; and &gt; buttons -->
              <div grid-cols="1" style="display: flex; max-width: 6rem;">
                <div class="center">
                  <input class="minutes" type="number" step="1"
                    min="0" max="60"
                    value="${this.getMinute_()}"
                    @input="${t=>{var e;const n=t.target;n.value!==this.getMinute_()&&this.setMinute_(null!==(e=n.value)&&void 0!==e?e:"")}}"
                    @click="${t=>{t.stopImmediatePropagation()}}"
                  />
                </div>
                <kor-icon class="minutes" button size="m"
                  class="increment-icon"
                  icon="keyboard_arrow_left"
                  @click="${t=>{var e,n,s,l,p;t.stopImmediatePropagation();const h=t.target.parentNode.querySelector("div > input");if(!h)return;const g=(null!==(n=parseInt(null!==(e=h.value)&&void 0!==e?e:h.max))&&void 0!==n?n:0)-(null!==(s=parseInt(h.step))&&void 0!==s?s:0);g>=(null!==(l=parseInt(h.min))&&void 0!==l?l:0)&&(h.value=String(g),this.setMinute_(null!==(p=h.value)&&void 0!==p?p:""))}}"
                ></kor-icon>
                <kor-icon class="minutes" button size="m"
                  class="increment-icon"
                  icon="keyboard_arrow_right"
                  @click="${t=>{var e,n,s,l,p;t.stopImmediatePropagation();const h=t.target.parentNode.querySelector("div > input");if(!h)return;const g=(null!==(n=parseInt(null!==(e=h.value)&&void 0!==e?e:h.min))&&void 0!==n?n:0)+(null!==(s=parseInt(h.step))&&void 0!==s?s:0);g<=(null!==(l=parseInt(h.max))&&void 0!==l?l:0)&&(h.value=String(g),this.setMinute_(null!==(p=h.value)&&void 0!==p?p:""))}}"
                ></kor-icon>
              </div>
              <!-- The optional AM/PM switch for 12 hour time format -->
              ${this.is12Hour_?n`
                  <kor-switch grid-cols="1"
                    style="display: flex; margin: 4px 8px 0 0; max-width: 8rem;"
                  >
                    <kor-grid columns="2" spacing>
                      <kor-switch-item label="AM"
                        ?active="${"AM"===this.getAMPM_()}"
                        @click="${t=>{var e;t.stopImmediatePropagation();const n=t.target;this.setAMPM_(null!==(e=n.label)&&void 0!==e?e:"")}}"
                      ></kor-switch-item>
                      <kor-switch-item label="PM"
                        ?active="${"PM"===this.getAMPM_()}"
                        @click="${t=>{var e;t.stopImmediatePropagation();const n=t.target;this.setAMPM_(null!==(e=n.label)&&void 0!==e?e:"")}}"
                      ></kor-switch-item>
                    </kor-grid>
                  </kor-switch>
                `:""}
            </kor-grid>
          `:""}
      </kor-card>
    `}};kor_input_decorate([property_e({type:String,reflect:!0})],q.prototype,"label",void 0),kor_input_decorate([property_e({type:String,reflect:!0})],q.prototype,"icon",void 0),kor_input_decorate([property_e({type:String,reflect:!0})],q.prototype,"value",void 0),kor_input_decorate([property_e({type:String,reflect:!0})],q.prototype,"name",void 0),kor_input_decorate([property_e({type:String,reflect:!0})],q.prototype,"type",void 0),kor_input_decorate([property_e({type:String,reflect:!0})],q.prototype,"locale",void 0),kor_input_decorate([property_e({type:String,reflect:!0})],q.prototype,"status",void 0),kor_input_decorate([property_e({type:Boolean,reflect:!0})],q.prototype,"condensed",void 0),kor_input_decorate([property_e({type:Boolean,reflect:!0})],q.prototype,"active",void 0),kor_input_decorate([property_e({type:Boolean,reflect:!0})],q.prototype,"disabled",void 0),kor_input_decorate([property_e({type:Boolean,reflect:!0})],q.prototype,"readonly",void 0),kor_input_decorate([property_e({type:Boolean,reflect:!0,attribute:"no-clear"})],q.prototype,"noClear",void 0),kor_input_decorate([property_e({type:Boolean,reflect:!0})],q.prototype,"autofocus",void 0),kor_input_decorate([property_e({type:Boolean,reflect:!0})],q.prototype,"filterable",void 0),kor_input_decorate([property_e({type:String,reflect:!0})],q.prototype,"pattern",void 0),kor_input_decorate([property_e({type:String,reflect:!0})],q.prototype,"min",void 0),kor_input_decorate([property_e({type:String,reflect:!0})],q.prototype,"max",void 0),kor_input_decorate([property_e({type:Number,reflect:!0})],q.prototype,"step",void 0),kor_input_decorate([function o(t,e){return base_o({descriptor:n=>{const s={get(){var e;return null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof n?Symbol():"__"+n;s.get=function(){var n;return void 0===this[e]&&(this[e]=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(t)),this[e]}}return s}})}("#main_input",!1)],q.prototype,"main_input",void 0),q=kor_input_decorate([(t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:s}=e;return{kind:n,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e))("kor-input")],q);var kor_menu_item_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korMenuItem extends t{constructor(){super(...arguments),this.label="Label",this.toggle=!0}static get styles(){return[l,e`
        :host {
          padding: var(--spacing-s) 0;
          border-radius: var(--border-radius);
          display: flex;
          cursor: pointer;
          transition: var(--transition-1);
          overflow: visible;
        }
        kor-icon {
          margin-right: var(--spacing-s);
        }
        .label {
          flex: 1;
        }
        /* label */
        kor-text {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          pointer-events: none;
        }
        slot[name='functions']::slotted(*) {
          margin-left: var(--spacing-s);
        }
        :host([active]) {
          padding: var(--spacing-s);
          margin-left: calc(var(--spacing-s) * -1);
          margin-right: calc(var(--spacing-s) * -1);
          background: rgba(var(--neutral-1), 0.1);
        }
        /* disabled */
        :host([disabled]) {
          opacity: 0.2;
          pointer-events: none;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:not([active]):hover) {
            padding: var(--spacing-s);
            margin-left: calc(var(--spacing-s) * -1);
            margin-right: calc(var(--spacing-s) * -1);
            background: rgba(var(--neutral-1), 0.05);
          }
        }
      `]}render(){return n`
      ${this.icon?n` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label?n` <kor-text>${this.label}</kor-text> `:""}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed")),"toggle"==t&&this.toggle&&this.addEventListener("click",()=>{this.active=!this.active})}}kor_menu_item_decorate([property_e({type:String,reflect:!0})],korMenuItem.prototype,"label",void 0),kor_menu_item_decorate([property_e({type:String,reflect:!0})],korMenuItem.prototype,"icon",void 0),kor_menu_item_decorate([property_e({type:Boolean,reflect:!0})],korMenuItem.prototype,"active",void 0),kor_menu_item_decorate([property_e({type:Boolean,reflect:!0})],korMenuItem.prototype,"toggle",void 0),kor_menu_item_decorate([property_e({type:Boolean,reflect:!0})],korMenuItem.prototype,"disabled",void 0),window.customElements.get("kor-menu-item")||window.customElements.define("kor-menu-item",korMenuItem);var kor_modal_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korModal extends t{constructor(){super(...arguments),this.height="400px",this.width="600px",this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[l,e`
        :host {
          transition: var(--transition-1), 0s top, 0s left;
          position: fixed;
          opacity: 1;
          z-index: 5;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
        }
        :host(:not([visible])) kor-card {
          margin-bottom: -40px;
        }
        kor-card {
          background-color: rgb(var(--base-3));
          box-shadow: var(--shadow-1);
          transition: 0.2s all ease-out, 0s top, 0s left;
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
      `]}render(){return n`
      <kor-card
        @click="${t=>t.stopPropagation()}"
        style="height: ${this.height}; width: ${this.width}; max-height: ${this.height}; max-width: ${this.width}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
        ></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":n`
                <kor-icon
                  button
                  icon="close"
                  @click="${()=>this.visible=!1}"
                ></kor-icon>
              `}
        </slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed")),"visible"===t&&this.visible&&this.addEventListener("click",()=>this.sticky?"":this.visible=!1)}}kor_modal_decorate([property_e({type:String,reflect:!0})],korModal.prototype,"label",void 0),kor_modal_decorate([property_e({type:String,reflect:!0})],korModal.prototype,"icon",void 0),kor_modal_decorate([property_e({type:String,reflect:!0})],korModal.prototype,"height",void 0),kor_modal_decorate([property_e({type:String,reflect:!0})],korModal.prototype,"width",void 0),kor_modal_decorate([property_e({type:String,reflect:!0,attribute:"flex-direction"})],korModal.prototype,"flexDirection",void 0),kor_modal_decorate([property_e({type:Boolean,reflect:!0})],korModal.prototype,"visible",void 0),kor_modal_decorate([property_e({type:Boolean,reflect:!0})],korModal.prototype,"sticky",void 0),kor_modal_decorate([r()],korModal.prototype,"emptyHeader",void 0),kor_modal_decorate([r()],korModal.prototype,"emptyFunctions",void 0),kor_modal_decorate([r()],korModal.prototype,"emptyFooter",void 0),window.customElements.get("kor-modal")||window.customElements.define("kor-modal",korModal);class korNavbar extends t{static get styles(){return[l,e`
        :host {
          z-index: 2;
        }
        kor-app-bar {
          background-color: rgb(var(--base-2));
        }
      `]}render(){return n`
      <kor-app-bar>
        <slot></slot>
        <slot name="functions" slot="functions"></slot>
      </kor-app-bar>
    `}}window.customElements.get("kor-nav-bar")||window.customElements.define("kor-nav-bar",korNavbar);var kor_notifications_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korNotifications extends t{constructor(){super(...arguments),this.position="top-right"}static get styles(){return[l,e`
        :host {
          position: fixed;
          display: flex;
          flex-direction: column;
          max-height: 100%;
          box-sizing: border-box;
          padding: var(--spacing-l);
          margin: 0;
          width: 320px;
          z-index: 6;
          pointer-events: none;
          /* css properties */
          --body-gap: var(--spacing-m);
        }
        slot:not([name]) {
          gap: var(--body-gap);
          display: flex;
          flex-direction: column;
        }
        ::slotted(*) {
          pointer-events: all;
        }
        :host([position^='top']) {
          top: 0px;
        }
        :host([position^='bottom']) {
          flex-flow: column-reverse;
          bottom: 0px;
        }
        :host([position$='left']) {
          left: 0px;
        }
        :host([position$='right']) {
          right: 0px;
        }
      `]}render(){return n`<slot></slot>`}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}}kor_notifications_decorate([property_e({type:String,reflect:!0})],korNotifications.prototype,"position",void 0),window.customElements.get("kor-notifications")||window.customElements.define("kor-notifications",korNotifications);var kor_notification_item_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korNotificationItem extends t{constructor(){super(...arguments),this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[l,e`
        :host {
          transition: var(--transition-1);
          opacity: 1;
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
          max-height: 0px;
          overflow: hidden;
          margin-top: 0;
          margin-bottom: 0;
        }
        kor-card {
          background: rgb(var(--base-4));
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
        :host(:not([visible]):host-context([position$='right'])) {
          margin-left: 8px;
          margin-right: -8px;
        }
        :host(:not([visible]):host-context([position$='left'])) {
          margin-left: -8px;
          margin-right: 8px;
        }
      `]}render(){return n`
      <kor-card
        @click="${t=>t.stopPropagation()}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
        ></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":n`
                <kor-icon
                  button
                  icon="close"
                  @click="${()=>this.visible=!1}"
                ></kor-icon>
              `}
        </slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}}kor_notification_item_decorate([property_e({type:String,reflect:!0})],korNotificationItem.prototype,"label",void 0),kor_notification_item_decorate([property_e({type:String,reflect:!0})],korNotificationItem.prototype,"icon",void 0),kor_notification_item_decorate([property_e({type:String,reflect:!0,attribute:"flex-direction"})],korNotificationItem.prototype,"flexDirection",void 0),kor_notification_item_decorate([property_e({type:Boolean,reflect:!0})],korNotificationItem.prototype,"visible",void 0),kor_notification_item_decorate([property_e({type:Boolean,reflect:!0})],korNotificationItem.prototype,"sticky",void 0),kor_notification_item_decorate([r()],korNotificationItem.prototype,"emptyHeader",void 0),kor_notification_item_decorate([r()],korNotificationItem.prototype,"emptyFunctions",void 0),kor_notification_item_decorate([r()],korNotificationItem.prototype,"emptyFooter",void 0),window.customElements.get("kor-notification-item")||window.customElements.define("kor-notification-item",korNotificationItem);var kor_page_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korPage extends t{constructor(){super(...arguments),this.padding="var(--spacing-l)",this.flexDirection="row"}static get styles(){return[l,e`
        :host {
          height: 100%;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          background-color: rgb(var(--base-1));
        }
        :host([flat]) {
          background-color: rgb(var(--base-3));
        }
        .center-wrapper,
        slot {
          display: flex;
        }
        .center-wrapper,
        slot:not([name]) {
          flex: 1;
          overflow: hidden;
        }
        :host([scrollable]) slot:not([name]) {
          overflow: auto;
        }
        slot[name='top'],
        slot[name='bottom'],
        :host([flex-direction='column']) slot:not([name]) {
          flex-direction: column;
        }
      `]}render(){return n`
      <slot name="top"></slot>
      <div class="center-wrapper">
        <slot name="left"></slot>
        <slot style="padding: ${this.padding}"></slot>
        <slot name="right"></slot>
      </div>
      <slot name="bottom"></slot>
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}}kor_page_decorate([property_e({type:String,reflect:!0})],korPage.prototype,"theme",void 0),kor_page_decorate([property_e({type:String,reflect:!0})],korPage.prototype,"padding",void 0),kor_page_decorate([property_e({type:String,reflect:!0,attribute:"flex-direction"})],korPage.prototype,"flexDirection",void 0),kor_page_decorate([property_e({type:Boolean,reflect:!0})],korPage.prototype,"flat",void 0),kor_page_decorate([property_e({type:Boolean,reflect:!0})],korPage.prototype,"scrollable",void 0),window.customElements.get("kor-page")||window.customElements.define("kor-page",korPage);var kor_pane_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korPane extends t{constructor(){super(...arguments),this.flexDirection="column",this.size="l",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[l,e`
        :host {
          background-color: rgb(var(--base-2));
          display: flex;
          box-shadow: var(--shadow-1);
          transition: 0.1s width ease-out;
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host([size='l']) {
          width: 320px;
        }
        :host([size='m']) {
          width: 120px;
        }
        :host([size='s']) {
          width: 80px;
        }
        kor-card {
          background-color: transparent;
          box-shadow: none;
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
      `]}render(){return n`
      <kor-card
        label="${this.label?this.label:""}"
        icon="${this.icon?this.icon:""}"
        flex-direction="${this.flexDirection}"
      >
        <slot></slot>
        <slot
          name="header"
          slot="${this.emptyHeader?"":"header"}"
          @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?"":"functions"}"
          @slotchange="${t=>this.emptyFunctions=0===t.target.assignedNodes().length}"
        ></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"":"footer"}"
          @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}}kor_pane_decorate([property_e({type:String,reflect:!0})],korPane.prototype,"label",void 0),kor_pane_decorate([property_e({type:String,reflect:!0})],korPane.prototype,"icon",void 0),kor_pane_decorate([property_e({type:String,reflect:!0,attribute:"flex-direction"})],korPane.prototype,"flexDirection",void 0),kor_pane_decorate([property_e({type:String,reflect:!0})],korPane.prototype,"size",void 0),kor_pane_decorate([r()],korPane.prototype,"emptyHeader",void 0),kor_pane_decorate([r()],korPane.prototype,"emptyFunctions",void 0),kor_pane_decorate([r()],korPane.prototype,"emptyFooter",void 0),window.customElements.get("kor-pane")||window.customElements.define("kor-pane",korPane);var kor_popover_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korPopover extends t{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[l,e`
        :host {
          background-color: rgb(var(--base-4));
          border-radius: var(--border-radius);
          display: flex;
          box-shadow: var(--shadow-1);
          transition: var(--transition-1), 0s top, 0s left;
          position: fixed;
          opacity: 1;
          z-index: 4;
          width: 240px;
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
        }
        :host([position^='bottom']:not([visible])) {
          margin-top: -8px;
        }
        :host([position^='top']:not([visible])) {
          margin-top: 8px;
        }
        :host([position^='right']:not([visible])) {
          margin-left: -8px;
        }
        :host([position^='left']:not([visible])) {
          margin-left: 8px;
        }
        kor-card {
          background-color: transparent;
          box-shadow: none;
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
      `]}render(){return n`
      <kor-card
        @click="${t=>t.stopPropagation()}"
        @wheel="${t=>t.stopPropagation()}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?"hidden":"functions"}"
          @slotchange="${t=>this.emptyFunctions=0===t.target.assignedNodes().length}"
        ></slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed")),"target"===t&&this.target?this.targetObserver():"visible"===t&&this.visible&&this.visibleObserver()}targetObserver(){const t="string"==typeof this.target?document.querySelector(this.target):this.target;t&&t.addEventListener("click",()=>this.handlePosition(t))}visibleObserver(){const t="string"==typeof this.target?document.querySelector(this.target):this.target;t&&(this.handlePosition(t),!this.sticky&&this.target&&this.addDocListener(t))}handlePosition(t){if(!t)return;let e=this,n=t.getBoundingClientRect();if(e.visible=!0,e.position.startsWith("bottom"))e.style.top=n.top+n.height+8+"px";else if(e.position.startsWith("top"))e.style.top=n.top-e.clientHeight-8+"px";else{e.style.top=n.top+n.height/2-e.clientHeight/2+"px",parseInt(e.style.top)<0&&(e.style.top="8px");const t=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);parseInt(e.style.top)+e.clientHeight>t&&(e.style.top=t-e.clientHeight-8+"px")}e.position.startsWith("right")?e.style.left=n.left+n.width+8+"px":e.position.startsWith("left")?e.style.left=n.left-e.clientWidth-8+"px":e.style.left=n.left+n.width/2-e.clientWidth/2+"px"}addDocListener(t){let closePopover=e=>{(e.composedPath()[0]!==t&&e.target!==t&&"click"===e.type||"wheel"===e.type)&&(this.visible=!1,document.removeEventListener("click",closePopover),document.removeEventListener("wheel",closePopover))};document.addEventListener("click",closePopover),document.addEventListener("wheel",closePopover)}}kor_popover_decorate([property_e({type:String,reflect:!0})],korPopover.prototype,"label",void 0),kor_popover_decorate([property_e({type:String,reflect:!0})],korPopover.prototype,"icon",void 0),kor_popover_decorate([property_e({type:String,reflect:!0,attribute:"flex-direction"})],korPopover.prototype,"flexDirection",void 0),kor_popover_decorate([property_e({type:String,reflect:!0})],korPopover.prototype,"position",void 0),kor_popover_decorate([property_e({type:String,reflect:!0})],korPopover.prototype,"target",void 0),kor_popover_decorate([property_e({type:Boolean,reflect:!0})],korPopover.prototype,"visible",void 0),kor_popover_decorate([property_e({type:Boolean,reflect:!0})],korPopover.prototype,"sticky",void 0),kor_popover_decorate([r()],korPopover.prototype,"emptyHeader",void 0),kor_popover_decorate([r()],korPopover.prototype,"emptyFunctions",void 0),kor_popover_decorate([r()],korPopover.prototype,"emptyFooter",void 0),window.customElements.get("kor-popover")||window.customElements.define("kor-popover",korPopover);var kor_progress_bar_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korProgressBar extends t{constructor(){super(...arguments),this.size="m"}static get styles(){return[l,e`
        :host {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .header,
        .footer {
          display: flex;
          align-items: center;
        }
        .label,
        .info {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .header {
          margin-bottom: var(--spacing-s);
        }
        .footer {
          margin-top: var(--spacing-s);
        }
        /* radial */
        :host([radial]) {
          align-items: center;
          justify-content: center;
        }
        .radial-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .radial-wrapper kor-text {
          position: absolute;
          width: 100%;
          text-align: center;
        }
        .radial {
          transform: rotate(-90deg);
        }
        circle {
          fill: transparent;
          stroke-width: 8px;
        }
        /* status */
        .status-icon {
          margin-right: var(--spacing-s);
        }
        .status-icon[icon='cancel'] {
          color: rgb(var(--functional-red));
        }
        .status-icon[icon='error'] {
          color: rgb(var(--functional-yellow));
        }
        .status-icon[icon='check_circle'] {
          color: rgb(var(--functional-green));
        }
      `]}render(){return n`
      <!-- header -->
      ${this.label||this.showProgress?n`
            <div class="header">
              <kor-text size="header-2" class="label">${this.label}</kor-text>
              ${this.showProgress&&!this.radial?n` <kor-text size="header-2">${this.value}%</kor-text> `:""}
            </div>
          `:""}
      ${this.radial?n`
            <!-- radial -->
            <div class="radial-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="radial"
                width="${this.getSize()}"
                viewBox="0 0 ${this.getSize()} ${this.getSize()}"
              >
                <circle
                  stroke="rgba(var(--neutral-1), .1)"
                  r="${this.getSize()/2-4}"
                  cx="${this.getSize()/2}"
                  cy="${this.getSize()/2}"
                />
                <circle
                  stroke="${this.color?this.color:"rgb(var(--accent-1))"}"
                  stroke-dasharray="${2*Math.PI*(this.getSize()/2-4)}"
                  stroke-dashoffset="${2*Math.PI*(this.getSize()/2-4)*(1-(this.value?this.value/100:0))}"
                  r="${this.getSize()/2-4}"
                  cx="${this.getSize()/2}"
                  cy="${this.getSize()/2}"
                />
              </svg>
              ${this.showProgress?n` <kor-text size="header-2">${this.value}%</kor-text> `:""}
            </div>
          `:n`
            <!-- linear -->
            <svg width="100%" height="8">
              <defs>
                <clipPath id="clip-path">
                  <rect width="100%" height="8px" rx="4px" />
                </clipPath>
              </defs>
              <rect
                fill="rgba(var(--neutral-1), .1)"
                width="100%"
                height="100%"
                rx="4px"
              />
              <rect
                fill="${this.color?this.color:"rgb(var(--accent-1))"}"
                width="${this.value}%"
                height="100%"
                clip-path="url(#clip-path)"
              />
            </svg>
          `}
      ${this.info||this.status?n`
            <div class="footer">
              <!-- status -->
              ${this.status?n`
                    <kor-icon
                      class="status-icon"
                      .icon="${this.getStatusIcon()}"
                    ></kor-icon>
                  `:""}
              <!-- info -->
              ${this.info?n`
                    <kor-text color="var(--text-2)" class="info"
                      >${this.info}</kor-text
                    >
                  `:""}
            </div>
          `:""}
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}getStatusIcon(){let t;switch(this.status){case"error":t="cancel";break;case"warning":t="error";break;case"success":t="check_circle"}return t}getSize(){let t;switch(this.size){case"s":t=48;break;case"m":t=64;break;case"l":t=80;break;default:t=0}return t}}kor_progress_bar_decorate([property_e({type:String,reflect:!0})],korProgressBar.prototype,"label",void 0),kor_progress_bar_decorate([property_e({type:String,reflect:!0})],korProgressBar.prototype,"info",void 0),kor_progress_bar_decorate([property_e({type:String,reflect:!0})],korProgressBar.prototype,"status",void 0),kor_progress_bar_decorate([property_e({type:String,reflect:!0})],korProgressBar.prototype,"color",void 0),kor_progress_bar_decorate([property_e({type:String,reflect:!0})],korProgressBar.prototype,"size",void 0),kor_progress_bar_decorate([property_e({type:Number,reflect:!0})],korProgressBar.prototype,"value",void 0),kor_progress_bar_decorate([property_e({type:Boolean,reflect:!0})],korProgressBar.prototype,"radial",void 0),kor_progress_bar_decorate([property_e({type:Boolean,reflect:!0,attribute:"show-progress"})],korProgressBar.prototype,"showProgress",void 0),window.customElements.get("kor-progress-bar")||window.customElements.define("kor-progress-bar",korProgressBar);var kor_radio_button_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korRadioButton extends t{static get styles(){return[l,e`
        :host {
          display: flex;
          cursor: pointer;
        }
        input {
          display: none;
        }
        /* box */
        .circle {
          transition: var(--transition-1);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
          margin: 4px;
          border-radius: 50%;
          box-sizing: border-box;
          border: 2px solid rgba(var(--neutral-1), 0.25);
        }
        :host([active]) .circle {
          border-color: transparent;
          border: 5px solid rgb(var(--accent-1));
        }
        /* label */
        kor-text {
          flex: 1;
          margin-left: var(--spacing-s);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          pointer-events: none;
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active])) .circle {
            border-color: rgba(var(--neutral-1), 0.3);
          }
        }
      `]}render(){return n`
      <input
        type="radio"
        ?checked="${this.active}"
        .value="${this.label}"
        .name="${this.label}"
        @change="${this.handleChange}"
      />
      <div class="circle"></div>
      ${this.label?n` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleActive(){var t;let e=null===(t=this.parentElement)||void 0===t?void 0:t.childNodes;null==e||e.forEach(t=>{t.active=!1}),this.active=!0}}kor_radio_button_decorate([property_e({type:String,reflect:!0})],korRadioButton.prototype,"label",void 0),kor_radio_button_decorate([property_e({type:Boolean,reflect:!0})],korRadioButton.prototype,"active",void 0),kor_radio_button_decorate([property_e({type:Boolean,reflect:!0})],korRadioButton.prototype,"disabled",void 0),window.customElements.get("kor-radio-button")||window.customElements.define("kor-radio-button",korRadioButton);var kor_slider_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korSlider extends t{constructor(){super(...arguments),this.value=50,this.min=0,this.max=100,this.step=1}static get styles(){return[l,e`
        .track {
          width: 100%;
          height: 2px;
          margin: var(--spacing-l) 0;
          background-color: rgba(var(--neutral-1), 0.2);
          position: relative;
        }
        .thumb {
          padding: 10px;
          position: absolute;
          top: -15px;
          margin-left: calc(var(--spacing-l) * -1);
          cursor: pointer;
        }
        .thumb > div {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background-color: rgb(var(--accent-1));
          transition: 0.1s all ease-out;
        }
        .thumb:hover > div {
          background-color: rgb(var(--accent-1b));
        }
        /* input */
        input {
          background: none;
          border: none;
          outline: none;
          -webkit-appearance: none;
          font: var(--body-1);
          color: var(--text-1);
          background-color: rgba(var(--neutral-1), 0.05);
          border-radius: 2px;
          box-sizing: border-box;
          padding: 0 4px;
          width: 40px;
        }
        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type='number'] {
          -moz-appearance: textfield;
        }
        .label {
          display: flex;
        }
        .label kor-text {
          flex: 1;
        }
        .label > * + * {
          margin-left: var(--spacing-s);
        }
      `]}render(){return n`
      ${this.label?n`
            <div class="label">
              <kor-text>${this.label}</kor-text>
              ${this.input?n`
                    <input
                      type="number"
                      .value="${this.value}"
                      @blur="${t=>this.handleInput(parseFloat(t.target.value))}"
                      @keypress="${t=>"Enter"===t.key?this.handleInput(parseFloat(t.target.value)):""}"
                    />
                  `:""}
            </div>
          `:""}
      <div class="track">
        <div
          class="thumb"
          @mousedown="${t=>this.handleThumbDrag(t)}"
          @touchstart="${t=>this.handleThumbDrag(t)}"
        >
          <div></div>
        </div>
      </div>
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed")),"value"!==t&&"min"!==t&&"max"!==t||this.handleThumbPosition()}firstUpdated(){this.handleThumbPosition()}handleInput(t){t>=this.min&&t<=this.max?this.value=t:t<this.min?this.value=this.min:t>this.max&&(this.value=this.max)}handleThumbPosition(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".thumb"),n=(this.value-this.min)/(this.max-this.min)*100;e&&n>=0&&n<=100&&(e.style.left=n+"%")}handleThumbDrag(t){const e=this.shadowRoot.querySelector(".track").clientWidth/(this.max-this.min)*this.step;let n="mousedown"===t.type?t.clientX:t.touches[0].clientX;const getDeltaX=t=>{t.preventDefault();const s="mousemove"===t.type?t.clientX:t.touches[0].clientX,l=s-n;if(l>e||-1*l>e){const t=Math.floor(l<0?-1*l:l),p=Math.round(t/e),h=l>0?this.value+this.step*p:this.value-this.step*p;h<=this.max&&h>=this.min&&(this.value=h,n=s)}},removeListeners=()=>{window.removeEventListener("mousemove",getDeltaX),window.removeEventListener("touchmove",getDeltaX),window.removeEventListener("mouseup",removeListeners),window.removeEventListener("touchend",removeListeners)};window.addEventListener("mousemove",getDeltaX),window.addEventListener("touchmove",getDeltaX),window.addEventListener("mouseup",removeListeners),window.addEventListener("touchend",removeListeners)}}kor_slider_decorate([property_e({type:String,reflect:!0})],korSlider.prototype,"label",void 0),kor_slider_decorate([property_e({type:Number,reflect:!0})],korSlider.prototype,"value",void 0),kor_slider_decorate([property_e({type:Number,reflect:!0})],korSlider.prototype,"min",void 0),kor_slider_decorate([property_e({type:Number,reflect:!0})],korSlider.prototype,"max",void 0),kor_slider_decorate([property_e({type:Number,reflect:!0})],korSlider.prototype,"step",void 0),kor_slider_decorate([property_e({type:Boolean,reflect:!0})],korSlider.prototype,"input",void 0),window.customElements.get("kor-slider")||window.customElements.define("kor-slider",korSlider);var kor_spinner_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korSpinner extends t{constructor(){super(...arguments),this.size="m"}static get styles(){return[l,e`
        :host {
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        svg {
          animation: 1s linear infinite svg-animation;
        }
        @keyframes svg-animation {
          0% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }
        circle {
          fill: transparent;
          stroke: rgb(var(--accent-1));
          stroke-linecap: round;
          stroke-width: 4px;
        }
        /* label */
        kor-text {
          margin-top: var(--spacing-s);
          text-align: center;
          max-width: 240px;
        }
      `]}render(){return n`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="${this.getSize()}"
        viewBox="0 0 ${this.getSize()} ${this.getSize()}"
      >
        <circle
          stroke-dasharray="${this.getSize()}"
          r="${this.getSize()/2-4}"
          cx="${this.getSize()/2}"
          cy="${this.getSize()/2}"
        />
      </svg>
      ${this.label?n` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}getSize(){let t;switch(this.size){case"s":t=24;break;case"m":t=32;break;case"l":t=40}return t}}kor_spinner_decorate([property_e({type:String,reflect:!0})],korSpinner.prototype,"size",void 0),kor_spinner_decorate([property_e({type:String,reflect:!0})],korSpinner.prototype,"label",void 0),window.customElements.get("kor-spinner")||window.customElements.define("kor-spinner",korSpinner);var kor_stepper_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korStepper extends t{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[l,e`
        :host {
          display: flex;
          width: 100%;
          height: max-content;
          overflow: auto;
        }
        /* vertical */
        :host([orientation='vertical']) {
          flex-direction: column;
        }
      `]}render(){return n`
      <slot
        @slotchange="${()=>{this.handleOrientation(),this.handleItems()}}"
      ></slot>
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}handleOrientation(){this.childNodes.forEach(t=>{t.orientation=this.orientation})}handleItems(){let t,e;t=Array.prototype.slice.call(this.children),e=this.children.length,t.forEach(t=>{t.first=1==t.index,t.last=t.index==e})}}kor_stepper_decorate([property_e({type:String,reflect:!0})],korStepper.prototype,"orientation",void 0),window.customElements.get("kor-stepper")||window.customElements.define("kor-stepper",korStepper);var kor_stepper_item_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korStepperItem extends t{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[l,e`
        :host {
          position: relative;
          flex: 1;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          transition: var(--transition-1);
          cursor: pointer;
        }
        .circle {
          height: 40px;
          width: 40px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-s);
          border-radius: 50%;
          background-color: rgba(var(--neutral-1), 0.1);
          transition: var(--transition-1);
        }
        .text {
          display: flex;
          flex-direction: column;
        }
        .label {
          font-weight: bold;
        }
        .info {
          color: var(--text-2);
        }
        .label,
        .info {
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label,
        .number,
        kor-icon {
          color: var(--text-2);
        }
        /* line */
        .line {
          background-color: rgba(var(--neutral-1), 0.1);
          position: absolute;
        }
        /* horizontal */
        :host([orientation='horizontal']) {
          justify-content: center;
          flex-direction: column;
          padding: 0 var(--spacing-l);
        }
        :host([orientation='horizontal']) .label,
        :host([orientation='horizontal']) .info {
          text-align: center;
        }
        :host([orientation='horizontal']) .circle + .text {
          margin-top: var(--spacing-xs);
        }
        :host([orientation='horizontal']) .line {
          height: 2px;
          width: calc(50% - 28px);
          top: 19px;
        }
        :host([orientation='horizontal']) .line.before {
          left: 0px;
        }
        :host([orientation='horizontal']) .line.after {
          right: 0px;
        }
        /* vertical */
        :host([orientation='vertical']) {
          justify-content: flex-start;
          flex-direction: row;
          width: 100%;
          height: max-content;
          padding: var(--spacing-l) 0;
        }
        :host([orientation='vertical']) .label,
        :host([orientation='vertical']) .info {
          text-align: left;
        }
        :host([orientation='vertical']) .circle + .text {
          margin-left: var(--spacing-s);
        }
        :host([orientation='vertical']) .line {
          width: 2px;
          height: calc(50% - 28px);
          left: 19px;
        }
        :host([orientation='vertical']) .line.before {
          top: 0px;
        }
        :host([orientation='vertical']) .line.after {
          bottom: 0px;
        }
        /* active */
        :host([active]) .circle {
          background-color: rgb(var(--accent-1));
        }
        :host([active]) .label {
          color: var(--text-1);
        }
        :host([active]) .number,
        :host([active]) kor-icon {
          color: rgba(255, 255, 255, 0.9);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
        }
        :host([disabled]) .circle,
        :host([disabled]) .text {
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active])) .label,
          :host(:hover:not([active])) .number,
          :host(:hover:not([active])) kor-icon {
            color: var(--text-1);
          }
          :host(:not([active]):not(:active):hover) .circle {
            background-color: rgba(var(--neutral-1), 0.15);
          }
          :host([active]:not(:active):hover) .circle {
            background-color: rgb(var(--accent-1b));
          }
        }
      `]}render(){return n`
      <!-- circle -->
      <div class="circle">
        ${this.icon?n` <kor-icon icon="${this.icon}"></kor-icon> `:n`
              <kor-text size="header-1" class="number">${this.index}</kor-text>
            `}
      </div>
      <!-- text -->
      <div class="text">
        ${this.label?n` <kor-text class="label">${this.label}</kor-text> `:""}
        ${this.info?n` <kor-text size="body-2" class="info">${this.info}</kor-text> `:""}
      </div>
      <!-- lines -->
      ${this.first?"":n` <div class="line before"></div> `}
      ${this.last?"":n` <div class="line after"></div> `}
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.getIndex(),this.addEventListener("click",()=>{var t;(null===(t=this.parentElement)||void 0===t?void 0:t.childNodes).forEach(t=>{t.active=!1}),this.active=!0})}getIndex(){var t;let e;e=Array.prototype.slice.call(null===(t=this.parentElement)||void 0===t?void 0:t.children),this.index=e.indexOf(this)+1}}kor_stepper_item_decorate([property_e({type:String,reflect:!0})],korStepperItem.prototype,"label",void 0),kor_stepper_item_decorate([property_e({type:String,reflect:!0})],korStepperItem.prototype,"info",void 0),kor_stepper_item_decorate([property_e({type:String,reflect:!0})],korStepperItem.prototype,"icon",void 0),kor_stepper_item_decorate([property_e({type:Number,reflect:!0})],korStepperItem.prototype,"index",void 0),kor_stepper_item_decorate([property_e({type:Boolean,reflect:!0})],korStepperItem.prototype,"active",void 0),kor_stepper_item_decorate([property_e({type:Boolean,reflect:!0})],korStepperItem.prototype,"disabled",void 0),kor_stepper_item_decorate([property_e({type:Boolean,reflect:!0})],korStepperItem.prototype,"first",void 0),kor_stepper_item_decorate([property_e({type:Boolean,reflect:!0})],korStepperItem.prototype,"last",void 0),kor_stepper_item_decorate([property_e({type:String,reflect:!0})],korStepperItem.prototype,"orientation",void 0),window.customElements.get("kor-stepper-item")||window.customElements.define("kor-stepper-item",korStepperItem);class korSwipeActions extends t{static get styles(){return[l,e`
        :host {
          display: flex;
          overflow: auto;
          scroll-snap-type: x mandatory;
          overflow-x: scroll;
        }
        slot[name] {
          display: flex;
          transition: 0.1s opacity ease-out;
        }
        slot:not([name]) {
          min-width: 100%;
          display: block;
          scroll-snap-align: start;
        }
      `]}render(){return n`
      <slot
        name="left"
        @slotchange="${t=>this.setSlotWidth(t.target)}"
      ></slot>
      <slot></slot>
      <slot
        name="right"
        @slotchange="${t=>this.setSlotWidth(t.target)}"
      ></slot>
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("touchend",this.handleTouchEnd),this.addEventListener("scroll",this.setSlotOpacity)}setSlotWidth(t){t.assignedNodes().length>0?t.style.minWidth="100%":t.style.minWidth="unset"}handleTouchEnd(){const t=this.scrollLeft-this.clientWidth;t<this.clientWidth/3*-1?this.dispatchEvent(new Event("swipe-left")):t>this.clientWidth/3&&this.dispatchEvent(new Event("swipe-right"))}setSlotOpacity(){var t,e;const n=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector('slot[name="left"]'),s=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector('slot[name="right"]'),l=this.scrollLeft-this.clientWidth;n&&(n.style.opacity=-1*l/this.clientWidth*3>1?1:.5),s&&(s.style.opacity=1*l/this.clientWidth*3>1?1:.5)}getSlotOpacity(t){const e="left"===t?-1:1,n=(this.scrollLeft-this.clientWidth)*e/this.clientWidth*3;return n>1?1:n<0?0:n}}window.customElements.get("kor-swipe-actions")||window.customElements.define("kor-swipe-actions",korSwipeActions);var kor_swipe_action_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korSwipeAction extends t{static get styles(){return[l,e`
        :host {
          height: 100%;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          background-color: rgba(var(--neutral-1), 0.1);
        }
        :host([slot='left']) {
          justify-content: flex-start;
        }
        :host([slot='right']) {
          justify-content: flex-end;
        }
        kor-icon {
          position: sticky;
        }
        :host([slot='left']) kor-icon {
          left: var(--spacing-l);
        }
        :host([slot='right']) kor-icon {
          right: var(--spacing-l);
        }
      `]}render(){return n` <kor-icon .icon="${this.icon}"></kor-icon> `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed")),"bg-color"===t&&n!==e&&(this.style.backgroundColor=n)}connectedCallback(){super.connectedCallback()}}kor_swipe_action_decorate([property_e({reflect:!0})],korSwipeAction.prototype,"icon",void 0),kor_swipe_action_decorate([property_e({reflect:!0,attribute:"bg-color"})],korSwipeAction.prototype,"bgColor",void 0),window.customElements.get("kor-swipe-action")||window.customElements.define("kor-swipe-action",korSwipeAction);class korSwitch extends t{static get styles(){return[l,e`
        :host {
          background-color: rgba(var(--neutral-1), 0.1);
          display: flex;
          width: max-content;
          height: max-content;
          border-radius: var(--border-radius);
        }
      `]}render(){return n` <slot></slot> `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}}window.customElements.get("kor-switch")||window.customElements.define("kor-switch",korSwitch);var kor_switch_item_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korSwitchItem extends t{static get styles(){return[l,e`
        :host {
          display: flex;
          width: max-content;
          min-width: 40px;
          max-width: 120px;
          padding: var(--spacing-xs) var(--spacing-m);
          border-radius: var(--border-radius);
          cursor: pointer;
          align-items: center;
          justify-content: center;
          transition: var(--transition-1);
        }
        .label {
          user-select: none;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label,
        kor-icon {
          color: var(--text-2);
        }
        /* active */
        :host([active]) .label,
        :host([active]) kor-icon {
          color: var(--text-1);
        }
        :host([active]) {
          background: rgba(var(--neutral-1), 0.1);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:not([active]):hover) {
            background: rgba(var(--neutral-1), 0.05);
          }
          :host([active]:hover) {
            background: rgba(var(--neutral-1), 0.15);
          }
        }
      `]}render(){return n`
      ${this.icon?n` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label&&!this.icon?n` <kor-text class="label">${this.label}</kor-text> `:""}
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleActive(){var t;(null===(t=this.parentElement)||void 0===t?void 0:t.childNodes).forEach(t=>{t.active=!1}),this.active=!0}}kor_switch_item_decorate([property_e({type:String,reflect:!0})],korSwitchItem.prototype,"label",void 0),kor_switch_item_decorate([property_e({type:String,reflect:!0})],korSwitchItem.prototype,"icon",void 0),kor_switch_item_decorate([property_e({type:Boolean,reflect:!0})],korSwitchItem.prototype,"active",void 0),kor_switch_item_decorate([property_e({type:Boolean,reflect:!0})],korSwitchItem.prototype,"disabled",void 0),window.customElements.get("kor-switch-item")||window.customElements.define("kor-switch-item",korSwitchItem);var kor_tab_item_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korTabItem extends t{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[l,e`
        :host {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          transition: var(--transition-1);
          cursor: pointer;
          border-color: transparent;
          border-style: solid;
          color: var(--text-2);
        }
        .label {
          line-height: 24px;
          font-weight: bold;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label,
        kor-icon {
          color: unset;
        }
        /* horizontal */
        :host([orientation='horizontal']) {
          flex-direction: column;
          justify-content: center;
          width: max-content;
          min-width: 72px;
          max-width: 240px;
          height: calc(24px + var(--spacing-l) * 2);
          padding: 0px var(--spacing-l);
          border-width: 0px 0px 2px 0px;
        }
        :host([orientation='horizontal']) .label {
          text-align: center;
        }
        /* vertical */
        :host([orientation='vertical']) .label {
          text-align: left;
        }
        :host([orientation='vertical']) {
          justify-content: flex-start;
          flex-direction: row;
          width: 100%;
          min-width: unset;
          max-width: 100%;
          height: max-content;
          padding: var(--spacing-s) var(--spacing-s) var(--spacing-s)
            calc(var(--spacing-l) - 2px);
          border-width: 0px 0px 0px 2px;
        }
        :host([orientation='vertical']) {
          gap: var(--spacing-s);
        }
        /* active */
        :host([active]) {
          border-color: rgb(var(--accent-1));
        }
        :host([active]) {
          color: var(--text-1);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover) .label {
            color: var(--text-1);
          }
        }
      `]}render(){return n`
      <slot>
        ${this.icon?n` <kor-icon icon="${this.icon}"></kor-icon> `:""}
        ${this.label?n` <kor-text class="label">${this.label}</kor-text> `:""}
      </slot>
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleActive(){var t;(null===(t=this.closest("kor-tabs"))||void 0===t?void 0:t.querySelectorAll("kor-tab-item")).forEach(t=>{t.active=!1}),this.active=!0}}kor_tab_item_decorate([property_e({type:String,reflect:!0})],korTabItem.prototype,"label",void 0),kor_tab_item_decorate([property_e({type:String,reflect:!0})],korTabItem.prototype,"icon",void 0),kor_tab_item_decorate([property_e({type:Boolean,reflect:!0})],korTabItem.prototype,"active",void 0),kor_tab_item_decorate([property_e({type:Boolean,reflect:!0})],korTabItem.prototype,"disabled",void 0),kor_tab_item_decorate([property_e({type:String,reflect:!0})],korTabItem.prototype,"orientation",void 0),window.customElements.get("kor-tab-item")||window.customElements.define("kor-tab-item",korTabItem);var kor_table_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korTable extends t{constructor(){super(...arguments),this.columns="repeat(24, 1fr)"}static get styles(){return[l,e`
        :host {
          display: flex;
          flex-direction: column;
          height: fit-content;
        }
        slot {
          display: block;
        }
        slot:not([name]) {
          flex: 1;
        }
        slot[name="header"] {
          position: sticky;
          top: 0;
          z-index: 4;
          background-color: rgb(var(--base-3));
        }
      `]}render(){return n`
      <slot name="header"></slot>
      <slot></slot>
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}}kor_table_decorate([property_e({type:Boolean,reflect:!0})],korTable.prototype,"readonly",void 0),kor_table_decorate([property_e({type:Boolean,reflect:!0})],korTable.prototype,"condensed",void 0),kor_table_decorate([property_e({type:String,reflect:!0})],korTable.prototype,"columns",void 0),window.customElements.get("kor-table")||window.customElements.define("kor-table",korTable);var kor_table_row_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korTableRow extends t{getAllSlottedContent(){return Array.from(this.slots).flatMap(t=>t.assignedElements({flatten:!0}))}static get styles(){return[l,e`
        :host {
          display: grid;
          border-bottom: 1px solid rgba(var(--neutral-1), 0.15);
          transition: var(--transition-1);
        }
        /* header */
        :host([slot='header']) {
          border-color: rgba(var(--neutral-1), 0.4);
        }
        /* active */
        :host([active]) {
          background-color: rgba(var(--neutral-1), 0.1);
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active]):not([slot='header'])) {
            background-color: rgba(var(--neutral-1), 0.05);
          }
          :host(:hover:not([active])):host-context(kor-table[readonly]) {
            background-color: transparent;
          }
        }
      `]}render(){return n` <slot></slot> `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive()),this.addEventListener("mouseenter",()=>{this.active||"header"==this.slot||this.getAllSlottedContent().forEach(t=>{t.sticky&&(t.style.backgroundColor="color-mix(in srgb, rgb(var(--neutral-1)) 5%, rgb(var(--base-3)))")})}),this.addEventListener("mouseleave",()=>{this.active||"header"==this.slot||this.getAllSlottedContent().forEach(t=>{t.sticky&&(t.style.backgroundColor="rgb(var(--base-3))")})}),this.handleColumns()}handleActive(){var t;let e,n;e=this.closest("kor-table"),(null==e?void 0:e.readonly)||"header"==this.slot||(n=null===(t=this.parentElement)||void 0===t?void 0:t.childNodes,null==n||n.forEach(t=>{t.active=!1,"header"!=t.slot&&t.getAllSlottedContent&&t.getAllSlottedContent().forEach(t=>{t.sticky&&(t.style.backgroundColor="rgb(var(--base-3))")})}),this.active=!0,this.getAllSlottedContent().forEach(t=>{t.sticky&&(t.style.backgroundColor="color-mix(in srgb, rgb(var(--neutral-1)) 10%, rgb(var(--base-3)))")}))}handleColumns(){const t=this.closest("kor-table");this.style.gridTemplateColumns=t.columns,null==t||t.addEventListener("columns-changed",()=>{this.style.gridTemplateColumns=t.columns})}}kor_table_row_decorate([property_e({type:Boolean,reflect:!0})],korTableRow.prototype,"active",void 0),kor_table_row_decorate([function query_all_e(t){return base_o({descriptor:e=>({get(){var e;return null===(e=this.renderRoot)||void 0===e?void 0:e.querySelectorAll(t)},enumerable:!0,configurable:!0})})}("slot")],korTableRow.prototype,"slots",void 0),window.customElements.get("kor-table-row")||window.customElements.define("kor-table-row",korTableRow);var kor_table_cell_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korTableCell extends t{constructor(){super(...arguments),this.alignment="left"}static get styles(){return[l,e`
        :host {
          display: flex;
          align-items: center;
          padding: var(--spacing-m) var(--spacing-s);
          font: var(--body-1);
          overflow: hidden;
          cursor: default;
        }
        kor-text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        /* condensed */
        :host:host-context(kor-table[condensed]) {
          padding: var(--spacing-s);
        }
        /* head */
        :host([head]) kor-text {
          font-weight: bold;
        }
        /* align */
        :host([alignment='center']) {
          justify-content: center;
        }
        :host([alignment='right']) {
          justify-content: flex-end;
        }
        /* sortable */
        :host([sortable]) {
          cursor: pointer;
        }
        :host([sort-direction='desc']) .sort {
          transform: rotate(180deg);
        }
        .sort {
          margin: var(--spacing-xs) 0px var(--spacing-xs) var(--spacing-xs);
          color: var(--text-2);
        }
      `]}render(){return n`
      <kor-text>
        <slot></slot>
      </kor-text>
      ${this.head&&this.sorted?n`
            <kor-icon size="s" icon="arrow_downward" class="sort"></kor-icon>
          `:""}
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed")),"grid-cols"==t?this.style.gridColumn="span "+this.gridCols:"sortable"==t&&this.sortable?(this.sortDirection||(this.sortDirection="asc"),this.addEventListener("click",()=>{this.handleSort()})):"sticky"==t?this.sticky?(this.style.position="sticky",this.style.backgroundColor="rgb(var(--base-3))",this.style.zIndex&&"0"!==this.style.zIndex||(this.style.zIndex="1")):(this.style.removeProperty("position"),this.style.removeProperty("background-color"),"1"===this.style.zIndex&&this.style.removeProperty("z-index")):"left"==t?this.style.left=n:"top"==t?this.style.top=n:"right"==t?this.style.right=n:"bottom"==t&&(this.style.bottom=n)}handleSort(){var t;if(this.sorted)this.sortDirection="asc"==this.sortDirection?"desc":"asc";else{let e=null===(t=this.parentElement)||void 0===t?void 0:t.childNodes;null==e||e.forEach(t=>{t.sorted=!1}),this.sorted=!0,this.sortDirection="asc"}}}kor_table_cell_decorate([property_e({type:Number,reflect:!0,attribute:"grid-cols"})],korTableCell.prototype,"gridCols",void 0),kor_table_cell_decorate([property_e({type:String,reflect:!0})],korTableCell.prototype,"alignment",void 0),kor_table_cell_decorate([property_e({type:Boolean,reflect:!0})],korTableCell.prototype,"head",void 0),kor_table_cell_decorate([property_e({type:Boolean,reflect:!0})],korTableCell.prototype,"sorted",void 0),kor_table_cell_decorate([property_e({type:Boolean,reflect:!0})],korTableCell.prototype,"sortable",void 0),kor_table_cell_decorate([property_e({type:String,reflect:!0,attribute:"sort-direction"})],korTableCell.prototype,"sortDirection",void 0),kor_table_cell_decorate([property_e({type:Boolean,reflect:!0})],korTableCell.prototype,"sticky",void 0),kor_table_cell_decorate([property_e({type:String,reflect:!0})],korTableCell.prototype,"left",void 0),kor_table_cell_decorate([property_e({type:String,reflect:!0})],korTableCell.prototype,"top",void 0),kor_table_cell_decorate([property_e({type:String,reflect:!0})],korTableCell.prototype,"right",void 0),kor_table_cell_decorate([property_e({type:String,reflect:!0})],korTableCell.prototype,"bottom",void 0),window.customElements.get("kor-table-cell")||window.customElements.define("kor-table-cell",korTableCell);var kor_tabs_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korTabs extends t{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[l,e`
        :host {
          display: flex;
          width: 100%;
          height: max-content;
        }
        :host([slot='header']) {
          margin-top: calc(var(--spacing-l) * -1);
        }
        :host(:not([orientation='vertical'])) {
          border-bottom: 1px solid rgba(var(--neutral-1), 0.1);
        }
        /* vertical */
        :host([orientation='vertical']) {
          flex-direction: column;
        }
      `]}render(){return n`
      <slot @slotchange="${()=>this.handleOrientation()}"></slot>
    `}handleOrientation(){this.childNodes.forEach(t=>{t.orientation=this.orientation})}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}}kor_tabs_decorate([property_e({type:String,reflect:!0})],korTabs.prototype,"orientation",void 0),window.customElements.get("kor-tabs")||window.customElements.define("kor-tabs",korTabs);var kor_tag_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korTag extends t{constructor(){super(...arguments),this.label="Label"}static get styles(){return[l,e`
        :host {
          padding: var(--spacing-xs);
          display: flex;
          height: max-content;
          width: max-content;
          max-width: 160px;
          border-radius: var(--border-radius);
          border: 1px solid rgba(var(--neutral-1), 0.25);
          transition: var(--transition-1);
        }
        .label {
          margin: 0 var(--spacing-xs);
        }
        /* button */
        :host([button]) {
          cursor: pointer;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host([button]:not(:active):hover) {
            border-color: rgba(var(--neutral-1), 0.3);
            background-color: rgba(var(--neutral-1), 0.05);
          }
        }
      `]}render(){return n`
      <!-- icon -->
      ${this.icon?n` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      <!-- label -->
      ${this.label?n` <kor-text class="label">${this.label}</kor-text> `:""}
      <!-- removable -->
      ${this.removable?n`
            <kor-icon
              icon="close"
              button
              @click="${()=>this.handleRemove()}"
            ></kor-icon>
          `:""}
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}handleRemove(){this.dispatchEvent(new Event("remove"))}}kor_tag_decorate([property_e({type:String,reflect:!0})],korTag.prototype,"label",void 0),kor_tag_decorate([property_e({type:String,reflect:!0})],korTag.prototype,"icon",void 0),kor_tag_decorate([property_e({type:Boolean,reflect:!0})],korTag.prototype,"button",void 0),kor_tag_decorate([property_e({type:Boolean,reflect:!0})],korTag.prototype,"removable",void 0),window.customElements.get("kor-tag")||window.customElements.define("kor-tag",korTag);var kor_textarea_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korTextarea extends t{static get styles(){return[l,e`
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
      `]}render(){return n`
      <div class="center">
        ${this.label?n` <label class="label">${this.label}</label> `:""}
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
    `}constructor(){super(),this.rows=1,this.autofocus=!1,this.addEventListener("click",()=>{var t,e;this.active=!0,null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("textarea"))||void 0===e||e.focus()})}handleChange(t){this.value=t.target.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleClear(){this.value=void 0,this.removeAttribute("value")}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}}kor_textarea_decorate([property_e({type:String,reflect:!0})],korTextarea.prototype,"label",void 0),kor_textarea_decorate([property_e({type:String,reflect:!0})],korTextarea.prototype,"value",void 0),kor_textarea_decorate([property_e({type:Number,reflect:!0})],korTextarea.prototype,"rows",void 0),kor_textarea_decorate([property_e({type:Boolean,reflect:!0})],korTextarea.prototype,"active",void 0),kor_textarea_decorate([property_e({type:Boolean,reflect:!0})],korTextarea.prototype,"disabled",void 0),kor_textarea_decorate([property_e({type:Boolean,reflect:!0})],korTextarea.prototype,"readonly",void 0),kor_textarea_decorate([property_e({type:Boolean,reflect:!0})],korTextarea.prototype,"autofocus",void 0),window.customElements.get("kor-textarea")||window.customElements.define("kor-textarea",korTextarea);var kor_toggle_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korToggle extends t{static get styles(){return[l,e`
        :host {
          display: flex;
          cursor: pointer;
        }
        input {
          display: none;
        }
        /* toggle */
        .bg {
          width: 32px;
          height: 20px;
          margin: 2px;
          padding: 2px;
          border-radius: 12px;
          box-sizing: border-box;
          border: 2px solid rgba(var(--neutral-1), 0.25);
          transition: var(--transition-1);
        }
        :host([active]) .bg {
          border-color: transparent;
          background: rgb(var(--accent-1));
        }
        .dot {
          display: flex;
          transition: var(--transition-1);
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: rgba(var(--neutral-1), 0.6);
        }
        :host([active]) .dot {
          transform: translateX(12px);
          background: white;
        }
        /* label */
        kor-text {
          flex: 1;
          margin-left: var(--spacing-s);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          pointer-events: none;
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not(:active):not([active])) .bg {
            border-color: rgba(var(--neutral-1), 0.3);
          }
          :host(:hover:not(:active):not([active])) .dot {
            background: rgba(var(--neutral-1), 0.9);
          }
        }
      `]}render(){return n`
      <input
        type="checkbox"
        ?checked="${this.active}"
        ?readonly="${this.disabled}"
        .value="${this.label}"
        .name="${this.label}"
        @change="${this.handleChange}"
      />
      <div class="bg">
        <div class="dot"></div>
      </div>
      ${this.label?n` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>{this.active=!this.active})}handleChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}}kor_toggle_decorate([property_e({type:String,reflect:!0})],korToggle.prototype,"label",void 0),kor_toggle_decorate([property_e({type:Boolean,reflect:!0})],korToggle.prototype,"active",void 0),kor_toggle_decorate([property_e({type:Boolean,reflect:!0})],korToggle.prototype,"disabled",void 0),window.customElements.get("kor-toggle")||window.customElements.define("kor-toggle",korToggle);var kor_tool_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korTool extends t{constructor(){super(...arguments),this.size="m"}static get styles(){return[l,e`
        :host {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: max-content;
          padding: var(--spacing-xs);
          box-sizing: border-box;
          transition: var(--transition-1);
          cursor: pointer;
          border-radius: var(--border-radius);
        }
        .label {
          display: -webkit-box;
          width: 100%;
          line-height: 12px;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        /* size */
        :host([size='m']) {
          height: 56px;
          width: 56px;
        }
        :host([size='s']) {
          height: 32px;
          width: 32px;
        }
        /* active */
        :host([active]) {
          background-color: rgba(var(--neutral-1), 0.1);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:not(:active):not([active]):hover) {
            background-color: rgba(var(--neutral-1), 0.05);
          }
        }
      `]}render(){return n`
      ${this.icon?n` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${!this.label||this.icon&&"s"==this.size?"":n` <kor-text class="label" size="body-2">${this.label}</kor-text> `}
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed")),"toggle"==t&&this.toggle&&this.addEventListener("click",()=>{this.active=!this.active})}}kor_tool_decorate([property_e({type:String,reflect:!0})],korTool.prototype,"label",void 0),kor_tool_decorate([property_e({type:String,reflect:!0})],korTool.prototype,"icon",void 0),kor_tool_decorate([property_e({type:String,reflect:!0})],korTool.prototype,"size",void 0),kor_tool_decorate([property_e({type:Boolean,reflect:!0})],korTool.prototype,"toggle",void 0),kor_tool_decorate([property_e({type:Boolean,reflect:!0})],korTool.prototype,"active",void 0),kor_tool_decorate([property_e({type:Boolean,reflect:!0})],korTool.prototype,"disabled",void 0),window.customElements.get("kor-tool")||window.customElements.define("kor-tool",korTool);var kor_tooltip_decorate=function(t,e,n,s){var l,p=arguments.length,h=p<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,n,s);else for(var g=t.length-1;g>=0;g--)(l=t[g])&&(h=(p<3?l(h):p>3?l(e,n,h):l(e,n))||h);return p>3&&h&&Object.defineProperty(e,n,h),h};class korTooltip extends t{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[l,e`
        :host {
          position: fixed;
          z-index: 4;
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        kor-popover {
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
      `]}render(){return n`
      <kor-popover
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
        .target="${this.target}"
        .position="${this.position}"
        ?visible="${this.visible}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${t=>this.emptyHeader=0===t.target.assignedNodes().length}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?"hidden":"functions"}"
          @slotchange="${t=>this.emptyFunctions=0===t.target.assignedNodes().length}"
        ></slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${t=>this.emptyFooter=0===t.target.assignedNodes().length}"
        ></slot>
      </kor-popover>
    `}attributeChangedCallback(t,e,n){super.attributeChangedCallback(t,e,n),this.dispatchEvent(new Event(t+"-changed")),"target"===t&&this.target&&this.targetObserver()}targetObserver(){let t;const e="string"==typeof this.target?document.querySelector(this.target):this.target;e&&(e.addEventListener("mouseover",()=>{t=setTimeout(()=>this.visible=!0,500)}),e.addEventListener("mouseout",()=>{this.visible=!1,clearTimeout(t)}))}}kor_tooltip_decorate([property_e({type:String,reflect:!0})],korTooltip.prototype,"label",void 0),kor_tooltip_decorate([property_e({type:String,reflect:!0})],korTooltip.prototype,"icon",void 0),kor_tooltip_decorate([property_e({type:String,reflect:!0,attribute:"flex-direction"})],korTooltip.prototype,"flexDirection",void 0),kor_tooltip_decorate([property_e({type:String,reflect:!0})],korTooltip.prototype,"position",void 0),kor_tooltip_decorate([property_e({type:String,reflect:!0})],korTooltip.prototype,"target",void 0),kor_tooltip_decorate([property_e({type:Boolean,reflect:!0})],korTooltip.prototype,"visible",void 0),kor_tooltip_decorate([r()],korTooltip.prototype,"emptyHeader",void 0),kor_tooltip_decorate([r()],korTooltip.prototype,"emptyFunctions",void 0),kor_tooltip_decorate([r()],korTooltip.prototype,"emptyFooter",void 0),window.customElements.get("kor-tooltip")||window.customElements.define("kor-tooltip",korTooltip);export{korAccordion,korAppBar,korAvatar,korBadge,korBreadcrumbItem,korBreadcrumbs,korButton,korCard,korCheckbox,korDivider,korDrawer,korEmptyState,korGrid,korIcon,korImage,q as korInput,korMenuItem,korModal,korNavbar,korNotificationItem,korNotifications,korPage,korPane,korPopover,korProgressBar,korRadioButton,korSlider,korSpinner,korStepper,korStepperItem,korSwipeAction,korSwipeActions,korSwitch,korSwitchItem,korTabItem,korTable,korTableCell,korTableRow,korTabs,korTag,korText,korTextarea,korToggle,korTool,korTooltip};