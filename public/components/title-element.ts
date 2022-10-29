import { html, LitElement } from "https://cdn.skypack.dev/lit";
import {
  customElement,
  property,
} from "https://cdn.skypack.dev/lit/decorators";

@customElement("title-element")
export class TitleElement extends LitElement {
  @property({ type: String })
  declare text;
  constructor() {
    super();
    this.text = "";
  }
  // _increment(e: Event) {
  //   this.count++;
  // }
  render() {
    return html` <h1 class="">${this.text}</h1> ` as unknown as symbol;
  }
}
