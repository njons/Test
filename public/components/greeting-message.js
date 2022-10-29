const template = document.createElement("template");
template.innerHTML = `<p>hello</p>`;

class GreetingMessage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
  }

  connectedCallback() {
    this.h3 = this.getAttribute("name");
    this.render();
  }

  render() {
    this.h3;
  }
}
window.customElements.define("greeting-message", GreetingMessage);