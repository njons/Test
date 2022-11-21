import { html, LitElement, css } from "https://cdn.skypack.dev/lit";
import { customElement } from "https://cdn.skypack.dev/lit/decorators";

@customElement("border-element")
export class BorderElement extends LitElement {
  static styles = css`
    .border {
      position: absolute;
      left: 2.75rem;
      top: 0;
      border-left: solid 1px #cab294;
      border-bottom: solid 1px #cab294;
      height: 635px;
      width: 519px;
      padding-left: 29px;
    }
  `;
  render() {
    return html` <div class="border"></div>` as unknown as symbol;
  }
}
