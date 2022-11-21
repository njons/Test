import { html, LitElement, css } from "https://cdn.skypack.dev/lit";
import {
  customElement,
  property,
} from "https://cdn.skypack.dev/lit/decorators";

@customElement("link-element")
export class LinkElement extends LitElement {
  @property({ type: String, reflect: true })
  href? = undefined;

  static styles = css`
    * {
      margin: var(--reset-margin);
      padding: var(--reset-padding);
      color: currentColor;
      margin-left: var(--page-margin-left);
    }
    a {
      color: currentColor;
      font: inherit;
      text-decoration: none;
    }
  `;

  render() {
    const { href } = this;
    return html` <a href="${href}">
      <slot></slot>
    </a>` as unknown as symbol;
  }
}
