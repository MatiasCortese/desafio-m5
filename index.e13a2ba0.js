function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequire0b44;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequire0b44=o),o.register("27Lyk",function(t,n){"use strict";e(t.exports,"register",()=>a,e=>a=e),e(t.exports,"resolve",()=>o,e=>o=e);var a,o,i={};a=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),o.register("7Q0US",function(e,t){e.exports=new URL(o("27Lyk").resolve("8s0KT"),import.meta.url).toString()}),o.register("908Ah",function(e,t){e.exports=new URL(o("27Lyk").resolve("jYzGd"),import.meta.url).toString()}),o.register("gLTua",function(e,t){e.exports=new URL(o("27Lyk").resolve("lyYKJ"),import.meta.url).toString()}),o.register("fOLdg",function(e,t){e.exports=new URL(o("27Lyk").resolve("cK2FM"),import.meta.url).toString()}),o.register("jCWVD",function(e,t){e.exports=new URL(o("27Lyk").resolve("iTaEq"),import.meta.url).toString()}),o.register("59w94",function(e,t){e.exports=new URL(o("27Lyk").resolve("eCOwJ"),import.meta.url).toString()}),o("27Lyk").register(JSON.parse('{"dZpbI":"index.e13a2ba0.js","8s0KT":"fondo.091dd023.jpg","jYzGd":"papel.e831d3bb.svg","lyYKJ":"piedra.90fc831a.svg","cK2FM":"tijera.6a2fdda1.svg","iTaEq":"ganaste.560c5b77.png","eCOwJ":"perdiste.ef45a8e0.png"}'));const i={data:{currentGame:{computerPlay:"",myPlay:""},history:[]},listeners:[],getState(){return this.data},subscribe(e){this.listeners.push(e)},setMoves(e,t){let n=this.getState();n.currentGame.myPlay=e,n.currentGame.computerPlay=t,this.pushToHistory({computerPlay:t,myPlay:e}),this.whoWin(e,t)},setState(e){for(let t of(this.data.history=e,this.listeners))t(e);localStorage.setItem("saved-state",JSON.stringify(e))},pushToHistory(e){let t=this.getState();t.history.push(e),localStorage.setItem("saved-state",JSON.stringify(t.history))},whoWin(e,t){let n=["tijera"==e&&"papel"==t,"papel"==e&&"piedra"==t,"piedra"==e&&"tijera"==t].includes(!0),a=["papel"==e&&"tijera"==t,"piedra"==e&&"papel"==t,"tijera"==e&&"piedra"==t].includes(!0);return n?"Gan\xe9":a?"Perd\xed":"Empat\xe9"},scoreCalculator(){var e=0,t=0;let n=localStorage.getItem("saved-state");if(n){let a=JSON.parse(n);return a.forEach(n=>{let a=this.whoWin(n.myPlay,n.computerPlay);"Gan\xe9"===a&&e++,"Perd\xed"===a&&t++}),{myScore:e,computerScore:t}}},initState(){let e=JSON.parse(localStorage.getItem("saved-state"));e&&(this.setState(e),this.scoreCalculator())}},r="/desafio-m5";function s(){return location.host.includes("github.io")}const l=[{path:/\/welcome/,component:function(e){let t=o("7Q0US"),n=document.createElement("div"),a=document.createElement("style");return n.innerHTML=`
        <pres-text></pres-text>
        <my-button class="empezar">Empezar</my-button>
        <div class="plays-container">
            <move-jugada jugada="tijera"></move-jugada>
            <move-jugada jugada="piedra"></move-jugada>
            <move-jugada jugada="papel"></move-jugada>
        </div>
    `,a.innerHTML=`
        .container {
            padding: 115px 26px 0px 27px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: url(${t}), lightgray 0% 0% / 29.16666567325592px 29.16666567325592px;
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
    `,n.appendChild(a),n.classList.add("container"),n.querySelector(".empezar")?.addEventListener("click",()=>{e.goTo("/instructions")}),n}},{path:/\/instructions/,component:function(e){o("908Ah"),o("gLTua"),o("fOLdg");let t=o("7Q0US"),n=document.createElement("div"),a=document.createElement("style");return n.innerHTML=`
        <p class="instructions">Presion\xe1 jugar
        y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.</p>
        <my-button class="jugar">\xa1Jugar!</my-button>
        <div class="plays-container">
            <move-jugada jugada="tijera"></move-jugada>
            <move-jugada jugada="piedra"></move-jugada>
            <move-jugada jugada="papel"></move-jugada>
        </div>
    `,a.innerHTML=`
        .container {
            padding: 129px 26px 0px 27px;
            display: flex;
            flex-direction: column;
            justify-contnet: center;
            align-items: center;
            background: url(${t}), lightgray 0% 0% / 29.16666567325592px 29.16666567325592px;
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

    `,n.appendChild(a),n.classList.add("container"),n.querySelector(".jugar")?.addEventListener("click",()=>{e.goTo("/play")}),n}},{path:/\/play/,component:function(e){var t;let n=o("7Q0US"),a=document.createElement("div"),r=document.createElement("style");a.innerHTML=`
        <my-countdown></my-countdown>
        <div class="plays-container">
            <move-jugada class="jugada" jugada="tijera"></move-jugada>
            <move-jugada class="jugada" jugada="piedra"></move-jugada>
            <move-jugada class="jugada" jugada="papel"></move-jugada>
        </div>
        <div class="play-screen hidden">
        </div>
    `,r.innerHTML=`
        .container {
            padding: 129px 26px 0px 27px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            background: url(${n}), lightgray 0% 0% / 29.16666567325592px 29.16666567325592px;
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
    `,a.appendChild(r),a.classList.add("container");let s=a.querySelector("my-countdown"),l=a.querySelector(".plays-container"),d=a.querySelector(".play-screen");return a.querySelectorAll(".jugada").forEach(e=>{e.addEventListener("click",e=>{let n=e.target;return t=n.jugada})}),s?.addEventListener("countdownEnd",()=>{let n=function(){let e=a.querySelectorAll("[jugada]"),t=[];e.forEach(e=>{let n=e.getAttribute("jugada");t.push(n)});let n=t[Math.floor(Math.random()*t.length)];return n}();void 0==t?e.goTo("/instructions"):(function(t,n){let a=i.whoWin(n,t),o=document.createElement("move-jugada"),r=document.createElement("move-jugada");document.querySelector(".container").style.padding="0px",s?.classList.toggle("hidden"),l?.classList.toggle("hidden"),d?.classList.toggle("hidden"),o.setAttribute("jugada",t),o.style.transform="rotate(180deg)",r.setAttribute("jugada",n),d?.append(o,r);let c=3,p=setInterval(()=>{0==--c&&("Gan\xe9"===a&&e.goTo("/result/ganaste"),"Perd\xed"===a&&e.goTo("/result/perdiste"),"Empat\xe9"===a&&e.goTo("/instructions"),clearInterval(p))},1e3)}(n,t),i.setMoves(t,n))}),a}},{path:/\/result\/ganaste/,component:function(e){let t=document.createElement("div"),n=document.createElement("style");return n.innerHTML=`
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
    `,t.innerHTML=`
        <star-result resultado="ganaste"></star-result>
        <score-item></score-item>
        <my-button class="volver-welcome">Volver a jugar</my-button>
    `,t.appendChild(n),t.classList.add("container"),t.querySelector(".volver-welcome")?.addEventListener("click",()=>{e.goTo("/instructions")}),t}},{path:/\/result\/perdiste/,component:function(e){let t=document.createElement("div"),n=document.createElement("style");return n.innerHTML=`
        .container {
            padding: 115px 26px 0px 27px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #894949;
            opacity: 0.9;
            width: 100%;
            height: 100vh;
            gap: 25px;
        }
    `,t.innerHTML=`
        <star-result resultado="perdiste"></star-result>
        <score-item></score-item>
        <my-button class="volver-welcome">Volver a jugar</my-button>
    `,t.appendChild(n),t.classList.add("container"),t.querySelector(".volver-welcome")?.addEventListener("click",()=>{e.goTo("/instructions")}),t}}];customElements.define("pres-text",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){let e=document.createElement("style");e.innerHTML=`
            .title {
                width: 308px;
                color: #009048;
                font-family: American Typewriter;
                font-size: 80px;
                font-style: normal;
                font-weight: 700;
                line-height: 88.1%;
                padding-right: 24px;
            }

            .span {
                color: #91CCAF;
            }
        `,this.shadow.appendChild(e),this.render()}render(){let e=document.createElement("div");e.innerHTML=`
            <h1 class="title">Piedra Papel <span class="span">\xf3</span>
            Tijera
            </h1>
        `,this.shadow.appendChild(e)}}),customElements.define("my-countdown",class extends HTMLElement{constructor(){super(),this.countdownNumber=3,this.fondoImg=o("7Q0US"),this.intervalId=setInterval(()=>{if(this.countdownNumber--,this.shadow.querySelector(".countdownNumber").innerHTML=`${this.countdownNumber}`,this.countdownNumber<1){let e=new CustomEvent("countdownEnd",{});this.dispatchEvent(e),clearInterval(this.intervalId)}},1e3),this.shadow=this.attachShadow({mode:"open"}),this.setAttribute("ready","false")}connectedCallback(){let e=document.createElement("style");e.innerHTML=`
            .countdownCircle {
                width: 243px;
                height: 243px;  
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 135px;
                position: relative;
            }

            .countdownCircle:before {
                content: "";
                border: 20px solid black;
                position: absolute;
                height: 84%;
                width: 84%;
                border-radius: 50%;
            }

            .countdownNumber {
                width: 189px;
                color: #000;
                text-align: center;
                font-family: American Typewriter;
                font-size: 100px;
                font-style: normal;
                font-weight: 700;
                line-height: 100%;
                position: absolute;
            }

            .button:hover {
                cursor: pointer;
            }
        `,this.shadow.appendChild(e),this.render()}render(){let e=document.createElement("div");e.innerHTML=`
            <p class="countdownNumber">${this.countdownNumber}</p>
        `,e.classList.add("countdownCircle"),this.shadow.appendChild(e)}}),customElements.define("move-jugada",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.jugada=this.getAttribute("jugada");let e=document.createElement("style");e.innerHTML=`
            .hand {
                width: 140px;
            }

            .hand:hover {
                cursor: pointer;
            }
        `,this.shadow.appendChild(e),this.render()}imgSelector(e){return"papel"==e?o("908Ah"):"piedra"==e?o("gLTua"):"tijera"==e?o("fOLdg"):void 0}render(){let e=document.createElement("div"),t=this.imgSelector(this.jugada);e.innerHTML=`
            <img class="hand" src="${t}">
        `,this.shadow.appendChild(e)}}),customElements.define("my-button",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){let e=document.createElement("style");e.innerHTML=`
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
        `,this.shadow.appendChild(e),this.render()}render(){let e=document.createElement("div");e.innerHTML=`
            <button class="button">${this.innerHTML}</button>
        `,this.shadow.appendChild(e)}}),customElements.define("star-result",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.resultado=this.getAttribute("resultado");let e=document.createElement("style");e.innerHTML=`
        `,this.shadow.appendChild(e),this.render()}imgSelector(e){return"ganaste"==e?o("jCWVD"):"perdiste"==e?o("59w94"):void 0}render(){let e=document.createElement("div"),t=this.imgSelector(this.resultado);e.innerHTML=`
            <img src="${t}">
        `,this.shadow.appendChild(e)}}),customElements.define("score-item",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){let e=i.scoreCalculator();this.myScore=e?.myScore,this.computerScore=e?.computerScore;let t=document.createElement("style");t.innerHTML=`
            .container {
                width: 259px;
                height: 217px;
                border-radius: 10px;
                border: 10px solid #000000;
                background-color: #fff;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 30px;
            }

            .score-title {
                font-family: 'Odibee Sans', cursive;
                font-weight: 400;
                font-size: 55px;
                line-height: 60.94px;
                margin-top: 10px;
                margin-bottom: 0px;
            }

            .score-container {
                width: 100%;
                margin-right: 30px;
                display: flex;
                flex-direction: column;
                align-items: end;

            .score {
                
                font-family: 'Odibee Sans', cursive;
                font-size: 45px;
                margin: 0;
            }
        `,this.shadow.appendChild(t),this.render()}render(){let e=document.createElement("div");e.innerHTML=`
            <h3 class="score-title">Score</h3>
            <div class="score-container">
                <p class="score myScore">Vos: ${this.myScore}</p>
                <p class="score computerScore">M\xe1quina: ${this.computerScore}</p>
            </div>
        `,e.classList.add("container"),this.shadow.appendChild(e)}}),function(){let e=document.querySelector("#root");(function(e){function t(e){let t=s()?r+e:e;history.pushState({},"",t),n(t)}function n(n){let a=s()?n.replace(r,""):n;for(let n of l)if(n.path.test(a)){let a=n.component({goTo:t});e.firstChild&&e.firstChild.remove(),e.appendChild(a)}}"/"==location.pathname||"/desafio-m5/"==location.pathname?t("/welcome"):n(location.pathname),window.onpopstate=function(){n(location.pathname)}})(e),i.initState()}();
//# sourceMappingURL=index.e13a2ba0.js.map
