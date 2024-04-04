const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="./components/site-user/site-user.css" />
  <h2></h2>
  <slot name="job"></slot>
  <button class="btn2">Remove</button>
  <hr />
`;
const btn2 = document.querySelector(".btn2");
class SiteUser extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    let remoceBtn = this.shadowRoot.querySelector("button");
    let userNameH2 = this.shadowRoot.querySelector("h2");
    console.log(this.getAttribute("user-title"));

   userNameH2.innerHTML= this.getAttribute("user-title")

    remoceBtn.addEventListener("click", () => {
      this.shadowRoot.querySelector("button").style.scale = 0.5;
      this.shadowRoot.querySelector("button").style.marginLeft = "1200px";

      setTimeout(() => {
        this.remove();
      }, 1000);
    });
  }

  disconnectedCallback() {
    console.log("حذف شد");
  }

  static observedAttrAttributes(){
    return ["user-title", "user-job"]
  }
}

export { SiteUser };
