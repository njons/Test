import { html, LitElement, css } from "https://cdn.skypack.dev/lit";
import { unsafeHTML } from "https://cdn.skypack.dev/lit/directives/unsafe-html.js";
import {
  customElement,
  property,
} from "https://cdn.skypack.dev/lit/decorators";

enum TextVariants {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  P = "p",
  Span = "span",
}

export const textElements = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "p",
  "span",
] as const;

export type Text = typeof textElements[number];

@customElement("text-element")
export class TextElement extends LitElement {
  @property()
  as: Text = TextVariants.Span;

  @property({ type: String, reflect: true })
  variant: Text = TextVariants.P;

  static styles = css`
    * {
      margin: var(--reset-margin);
      padding: var(--reset-padding);
      color: currentColor;
      margin-left: var(--page-margin-left);
    }

    h1 {
      font-weight: 200;
      font-size: 3.625rem;
      line-height: 3.75rem;
    }

    p {
      font-weight: 500;
      font-size: 1.125rem;
      line-height: 1.5625rem;
    }
  `;

  render() {
    const { as, variant } = this;
    const isValid = textElements.includes(as);
    const tag: Text = isValid ? as : "span";

    const template = `
      <${tag} class="${variant}">
        <slot></slot>
      </${tag}>
    `;

    return html`${unsafeHTML(template)}` as unknown as symbol;
  }
}
