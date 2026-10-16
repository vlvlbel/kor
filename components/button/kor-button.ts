import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { sharedStyles } from '../../shared-styles';
import '../icon';
import '../divider';

/**
 * @prop {String} label - Defines the text label.
 * @prop {String} icon - If set, replaces the text label with a custom icon.
 * @prop {'primary'|'secondary'|'tertiary'} color - Defines the color. The possible values are `primary`, `secondary` and `tertiary`
 * @prop {Boolean} disabled - If set to true, disables mouse clicks and the style gets updated.
 * @prop {Boolean} divided - If set to true together with both icon and label, a vertical divider is shown between them.
 * @prop {Boolean} glow - If set to true, the button glows with its color, which may be customized with the `--btn-glow` css property.
 * @prop {Boolean} tinted - If set to true, the icon set as url('') gets the same color as the label, see the `tinted` property of kor-icon.
 */

export class korButton extends LitElement {
  @property({ type: String, reflect: true }) label: string | undefined;
  @property({ type: String, reflect: true }) icon: string | undefined;
  @property({ type: String, reflect: true }) color:
    | 'primary'
    | 'secondary'
    | 'tertiary' = 'primary';
  @property({ type: Boolean, reflect: true }) disabled: boolean | undefined;
  @property({ type: Boolean, reflect: true }) divided: boolean | undefined;
  @property({ type: Boolean, reflect: true }) glow: boolean | undefined;
  @property({ type: Boolean, reflect: true }) tinted: boolean | undefined;

  static get styles() {
    return [
      sharedStyles,
      css`
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
      `,
    ];
  }

  render() {
    return html`
      <slot name="icon">
        ${this.icon
          ? html` <kor-icon icon="${this.icon}" ?tinted="${this.tinted}"></kor-icon> `
          : ''}
      </slot>
      ${this.divided && this.icon && this.label
        ? html`<kor-divider orientation="vertical" spacing="s"></kor-divider>`
        : ''}
      <slot>${this.label ?
              html`<div class="center"><label class="label">${this.label}</label></div>`
              : ''}</slot>
    `;
  }

  attributeChangedCallback(name: string, oldval: string, newval: string) {
    super.attributeChangedCallback(name, oldval, newval);
    this.dispatchEvent(new Event(`${name}-changed`));
  }
}

if (!window.customElements.get('kor-button')) {
  window.customElements.define('kor-button', korButton);
}
