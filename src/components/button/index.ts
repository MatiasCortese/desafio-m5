customElements.define("my-button", class extends HTMLElement {
    shadow: ShadowRoot;
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"})
    }
    connectedCallback(){
        const style = document.createElement("style");
        style.innerHTML = `
            .button {
                width: 322px;
                height: 87px;
                border-radius: 10px;
                border: 10px solid #001997;
                background: #006CFC;
                color: #D8FCFC;
                text-align: center;
                font-family: 'Odibee Sans', cursive;
                font-size: 45px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 2.25px;
            }

            .button:hover {
                cursor: pointer;
            }
        `;
        this.shadow.appendChild(style);
        this.render();
    }
    render(){
        const div = document.createElement("div");
        div.innerHTML = `
            <button class="button">${this.innerHTML}</button>
        `;
        this.shadow.appendChild(div);
    }
});