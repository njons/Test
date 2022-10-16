import { html, LitElement } from "https://cdn.skypack.dev/lit";
import {
  customElement,
  property,
} from "https://cdn.skypack.dev/lit/decorators";

@customElement("my-element")
export class MyElement extends LitElement {
  @property({ type: String })
  declare status;
  constructor() {
    super();
    this.status = "Click me";
  }

  statusChange(e: Event) {
    this.status = "Clicked!!!";
  }
  render() {
    return html` <p>Basic Lit behavior works?</p>
      <p>Click the button to test reactive properties in external events.</p>
      <button @click="${this.statusChange}">
        ${this.status}
      </button>` as unknown as symbol;
  }
}
