import { html, LitElement, css } from "https://cdn.skypack.dev/lit";
import { customElement } from "https://cdn.skypack.dev/lit/decorators";

@customElement("banner-element")
export class BannerElement extends LitElement {
  static styles = css`
    .banner {
      background-color: var(--color-blue);
      color: var(--color-beige-light);
      height: calc(281px - 11px - 16px);
      padding-top: 11px;
      padding-bottom: 16px;
      margin-bottom: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .github-link {
      font-weight: 700;
      font-size: 1.375rem;
      line-height: 1.875rem;
    }

    /* .banner,
    .github-link {
      padding-right: var(--page-margin-left);
    } */
  `;
  render() {
    return html` <div class="banner">
      <link-element class="github-link" href="#">@njons</link-element>
      <text-element as="h1" variant="h1">Nathalie Jonsson</text-element>
    </div>` as unknown as symbol;
  }
}
