class DynamicTitle extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = "<h1></h1>";

        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("title");

        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: #ff5e00; 
            }
        `

        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define("dynamic-title", DynamicTitle);
