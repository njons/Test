import { html, LitElement } from "https://cdn.skypack.dev/lit";
import {
  customElement,
  property,
} from "https://cdn.skypack.dev/lit/decorators";

@customElement("button-test")
export class ButtonTest extends LitElement {
  @property({ type: Number })
  declare count;
  constructor() {
    super();
    this.count = 0;
  }
  _increment(e: Event) {
    this.count++;
  }
  render() {
    return html`
      <button @click="${this._increment}">Click Me!</button>
      <p>Click count: ${this.count}</p>
    ` as unknown as symbol;
  }
}
