export function initGanaste(params){
    // le pasamos params ya que en algún momento dibujamos el boton para reiniciar el juego
    const resultado = "ganaste";
    const div = document.createElement("div");
    const style = document.createElement("style");
    style.innerHTML = `
        .container {
            padding: 115px 26px 0px 27px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #888949;
            opacity: 0.9;
            width: 100%;
            height: 100vh;
            gap: 25px;
        }
    `;
    div.innerHTML = `
        <star-result resultado="${resultado}"></star-result>
        <score-item></score-item>
        <my-button class="volver-welcome">Volver a jugar</my-button>
    `;
    div.appendChild(style);
    div.classList.add("container");
    div.querySelector(".volver-welcome")?.addEventListener('click', () => {
        params.goTo("/instructions");
    });
    return div;
}