import { LitElement } from 'lit';
/**
 * @prop {String} icon - Defines the icon shown. Takes any string from the Material Design Library or custom url('') pointing to local or remote images or vectors.
 * @prop {'s'|'m'|'l'|'xl'} size - If set, defines the size of the icon. Possible values are `xl`(48px) `l`(32px), `m`(24px) and `s`(16px), but css font-size can be used to set custom sizes.
 * @prop {String} color -	If set, replaces the text label with a custom icon.
 * @prop {Boolean} button - If set to true, updates hover, click effects and cursors.
 * @prop {Boolean} disabled -	If set to true, disables mouse clicks and the style gets updated.
 * @prop {Boolean} framed - If set to true, the icon is shown within a rounded square frame.
 * @prop {Boolean} tinted - If set to true, the icon set as url('') is used as a mask filled with the current text color, so it gets the same color as the text around it.
 */
export declare class korIcon extends LitElement {
    icon: string | undefined;
    color: string | undefined;
    size: 's' | 'm' | 'l' | 'xl';
    button: boolean | undefined;
    disabled: boolean | undefined;
    framed: boolean | undefined;
    tinted: boolean | undefined;
    static get styles(): import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
    /**
     * Shows the icon set as url('') either as the background image
     * or as the mask filled with the current text color, if it is tinted
     */
    private setImage;
}
