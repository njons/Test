import { html, LitElement } from "https://cdn.skypack.dev/lit";
import {
  customElement,
  property,
} from "https://cdn.skypack.dev/lit/decorators";

@customElement("my-element")
export class MyElement extends LitElement {
  @property()
  status = "";

  render() {
    return html` <p>Basic Lit behavior works.</p>
      <p>Click this text to test reactive properties in external events.</p>
      <p>
        Once clicked, this text -> [<b>${this.status}</b>] will be updated.
      </p>` as unknown as symbol;
  }
}

const ele = <MyElement>document.querySelector("my-element");
ele.addEventListener("click", () => {
  console.log(
    `my-element was clicked, the status will be changed next.  current status: [${ele.status}]`
  );
  ele.status = "Clicked!!!";
  console.log(
    `my-element's status has been changed.  current status: [${ele.status}]`
  );
});
ele.status = "waiting ...";
