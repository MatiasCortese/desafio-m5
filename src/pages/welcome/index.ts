export function initWelcome(params){
    const fondoImg = require("url:../../images/fondo.jpg");
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.innerHTML = `
        <pres-text></pres-text>
        <my-button class="empezar">Empezar</my-button>
        <div class="plays-container">
            <move-jugada jugada="tijera"></move-jugada>
            <move-jugada jugada="piedra"></move-jugada>
            <move-jugada jugada="papel"></move-jugada>
        </div>
    `;
    style.innerHTML = `
        .container {
            padding: 115px 26px 0px 27px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: url(${fondoImg}), lightgray 0% 0% / 29.16666567325592px 29.16666567325592px;
            width: 100%;
            height: 100vh;
        }

        .plays-container {
            display: flex;
            gap: 46px;
            width: 100%;
            height: 20%;
            align-items: center;
            justify-content: center;
            position: fixed;
            bottom: -40px;
        }
    `;
    div.appendChild(style);
    div.classList.add("container");
    div.querySelector(".empezar")?.addEventListener('click', () => {
        params.goTo("/instructions");
    });
    return div;
}
