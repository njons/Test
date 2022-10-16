// let greeting = document.querySelector('greeting-message');
// console.log(greeting)
// // The console logs...
// // // "disconnected" <greeting-message></greeting-message>
// // // "connected!" <greeting-message></greeting-message>
// document.body.append(greeting);

const template = document.createElement('template');
template.innerHTML = `<style>
<style>
  .employee-card {
    font-family: sans-serif;
    background: #f4f6f7;
    width: 3250px;
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 10px;
  }

</style>
<div class="employee-card">
  <img/>
  <div>
    <h3></h3>
    <div class="details">
      <p><slot name="id"/></p>
      <p><slot name="job title"/></p>
      <p><slot name="email"/></p>
      <p><slot name="phone"/></p>
    </div>
  </div>
</div>`;
// // The console logs...
// // "disconnected" <greeting-message></greeting-message>
// greeting.remove();

// Extend the HTMLElement class to create the web component
class EmployeeCard extends HTMLElement {
  /**
   * The class constructor object
   */
  constructor() {
    // Always call super first in constructor
    super();

    console.log("Constructed", this);
    this.attachShadow({ mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar'); 
  }

  // We'll create our web component here

  connectedCallback(){
    this.h3 = this.getAttribute("name")
    this.render();
  }
 
  render(){
    this.h3;
  }
 }
 window.customElements.define('employee-card', EmployeeCard);
