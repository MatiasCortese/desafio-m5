export function initInstructions(params){
    const papelImg = require("url:../../images/papel.svg");
    const piedraImg = require("url:../../images/piedra.svg");
    const tijeraImg = require("url:../../images/tijera.svg");
    const fondoImg = require("url:../../images/fondo.jpg");
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.innerHTML = `
        <p class="instructions">Presioná jugar
        y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</p>
        <my-button class="jugar">¡Jugar!</my-button>
        <div class="plays-container">
            <move-jugada jugada="tijera"></move-jugada>
            <move-jugada jugada="piedra"></move-jugada>
            <move-jugada jugada="papel"></move-jugada>
        </div>
    `;
    style.innerHTML = `
        .container {
            padding: 129px 26px 0px 27px;
            display: flex;
            flex-direction: column;
            justify-contnet: center;
            align-items: center;
            background: url(${fondoImg}), lightgray 0% 0% / 29.16666567325592px 29.16666567325592px;
            width: 100%;
            gap: 45px;
            height: 100vh;
        }

        .instructions {
            width: 317px;
            color: #000;
            text-align: center;
            font-family: American Typewriter;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: 100%; /* 40px */
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
    div.querySelector(".jugar")?.addEventListener('click', () => {
        params.goTo("/play");
    });
    return div;
}