import { LitElement } from 'lit';
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
export declare class korButton extends LitElement {
    label: string | undefined;
    icon: string | undefined;
    color: 'primary' | 'secondary' | 'tertiary';
    disabled: boolean | undefined;
    divided: boolean | undefined;
    glow: boolean | undefined;
    tinted: boolean | undefined;
    static get styles(): import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
}
