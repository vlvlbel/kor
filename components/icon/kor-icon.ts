import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { sharedStyles } from '../../shared-styles';

/**
 * @prop {String} icon - Defines the icon shown. Takes any string from the Material Design Library or custom url('') pointing to local or remote images or vectors.
 * @prop {'s'|'m'|'l'|'xl'} size - If set, defines the size of the icon. Possible values are `xl`(48px) `l`(32px), `m`(24px) and `s`(16px), but css font-size can be used to set custom sizes.
 * @prop {String} color -	If set, replaces the text label with a custom icon.
 * @prop {Boolean} button - If set to true, updates hover, click effects and cursors.
 * @prop {Boolean} disabled -	If set to true, disables mouse clicks and the style gets updated.
 * @prop {Boolean} framed - If set to true, the icon is shown within a rounded square frame.
 * @prop {Boolean} tinted - If set to true, the icon set as url('') is used as a mask filled with the current text color, so it gets the same color as the text around it.
 */

export class korIcon extends LitElement {
  @property({ type: String, reflect: true }) icon: string | undefined;
  @property({ type: String, reflect: true }) color: string | undefined;
  @property({ type: String, reflect: true }) size: 's' | 'm' | 'l' | 'xl' = 'm';
  @property({ type: Boolean, reflect: true }) button: boolean | undefined;
  @property({ type: Boolean, reflect: true }) disabled: boolean | undefined;
  @property({ type: Boolean, reflect: true }) framed: boolean | undefined;
  @property({ type: Boolean, reflect: true }) tinted: boolean | undefined;

  static get styles() {
    return [
      sharedStyles,
      css`
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
        /* tinted url('') icon */
        :host([tinted]) {
          background-color: currentColor;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: center;
          mask-position: center;
          -webkit-mask-size: contain;
          mask-size: contain;
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
      `,
    ];
  }

  render() {
    return html` ${this.icon?.indexOf('url') ? html` ${this.icon} ` : ''}`;
  }

  attributeChangedCallback(name: string, oldval: string, newval: string) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
    if (name == 'color' && this.color) {
      this.style.color = this.color;
    } else if (name == 'icon' || name == 'tinted') {
      this.setImage();
    }
  }

  /**
   * Shows the icon set as url('') either as the background image
   * or as the mask filled with the current text color, if it is tinted
   */
  private setImage(): void {
    const url: string =
      this.icon && this.icon.indexOf('url') > -1 ? this.icon : '';
    this.style.backgroundImage = url && !this.tinted ? url : '';
    this.style.webkitMaskImage = url && this.tinted ? url : '';
    this.style.maskImage = url && this.tinted ? url : '';
  }
}

if (!window.customElements.get('kor-icon')) {
  window.customElements.define('kor-icon', korIcon);
}
