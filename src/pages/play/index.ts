import { state } from "../../state";

export function initPlay(params){
    const fondoImg = require("url:../../images/fondo.jpg");
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.innerHTML = `
        <my-countdown></my-countdown>
        <div class="plays-container">
            <move-jugada class="jugada" jugada="tijera"></move-jugada>
            <move-jugada class="jugada" jugada="piedra"></move-jugada>
            <move-jugada class="jugada" jugada="papel"></move-jugada>
        </div>
        <div class="play-screen hidden">
        </div>
    `;
    style.innerHTML = `
        .container {
            padding: 129px 26px 0px 27px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
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

        .play-screen {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100vh;
        }

        .jugada {
            opacity: 0.5;
        }

        .jugada:hover {
            position: relative;
            bottom: 30px;
            opacity: 1;
        }

        .chosen-play {
            width: 159px;
            height: 356px
        }

        .hidden {
            display: none;
        }
    `;
    div.appendChild(style);
    div.classList.add("container");
    const countdownEl = div.querySelector("my-countdown");
    const playsContainerEl = div.querySelector(".plays-container");
    const playScreenEl = div.querySelector(".play-screen");
    var myMove;

    // De acá en más ya hay que ir conectando con el state
    div.querySelectorAll(".jugada").forEach(play => {
        play.addEventListener("click", (e) => {
            const target = e.target as any;
            myMove = target.jugada;
            return myMove;
        })
    });

    function computerPlay(){
        const moves = div.querySelectorAll("[jugada]");
        const jugadas: any[] = [];
        moves.forEach(move => {
            const jugada = move.getAttribute("jugada");
            jugadas.push(jugada);
        });
        const jugadaRandom = jugadas[Math.floor(Math.random() * jugadas.length)];
        return jugadaRandom;
    };

    function showMoves(computerMove, myMove){
        const result = state.whoWin(myMove, computerMove);
        console.log(result)
        const computerPlay = document.createElement("move-jugada");
        const myPlay = document.createElement("move-jugada");
        var containerEl = document.querySelector(".container");
        (containerEl as HTMLElement).style.padding = "0px";
        countdownEl?.classList.toggle("hidden");
        playsContainerEl?.classList.toggle("hidden");
        playScreenEl?.classList.toggle("hidden");
        computerPlay.setAttribute("jugada", computerMove);
        computerPlay.style.transform = "rotate(180deg)";
        myPlay.setAttribute("jugada", myMove);
        playScreenEl?.append(computerPlay, myPlay);
        let counter = 3;
        const intervalId = setInterval(() => {
            counter--
            if (counter == 0) {
                if (result === "Gané") {
                    params.goTo("/result/ganaste");
                }
                if (result === "Perdí") {
                    params.goTo("/result/perdiste");
                }
                if (result === "Empaté") {
                    params.goTo("/instructions");
                }
                clearInterval(intervalId);
            }
        }, 1000);
    }

    countdownEl?.addEventListener("countdownEnd", () => {
        const computerMove = computerPlay();
        if (myMove == undefined) {
            params.goTo("/instructions");
        } else {
            showMoves(computerMove, myMove);
            state.setMoves(myMove, computerMove);
        }   
    });
    return div;
}