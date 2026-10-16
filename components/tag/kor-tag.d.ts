import { LitElement } from 'lit';
import '../icon';
import '../text';
/**
 * @prop {String} label - If set, defines the text label.
 * @prop {String} icon - If set, defines the icon shown besides the label.
 * @prop {Boolean} button - If set to true, hover and click effects will be added.
 * @prop {Boolean} removable - If set to true, a close icon is displayed. Clicking on it dispatches a remove event.
 * @prop {Boolean} ellipsis - If set to true, the label is kept in one line and is cut with an ellipsis, when the tag is shrunk.
 *
 * @fires remove - Dispatched when clicking on the close icon (removable only).
 */
export declare class korTag extends LitElement {
    label: string;
    icon: string | undefined;
    button: boolean | undefined;
    removable: boolean | undefined;
    ellipsis: boolean | undefined;
    static get styles(): import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: string, oldval: string, newval: string): void;
    handleRemove(): void;
}
