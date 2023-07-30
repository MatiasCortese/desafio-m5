import { initWelcome } from "./pages/welcome";
import { initInstructions } from "./pages/instructions";
import { initPlay } from "./pages/play";
import { initGanaste } from "./pages/result/ganaste";
import { initPerdiste } from "./pages/result/perdiste";

const routes = [
    {
        path: /\/welcome/,
        component: initWelcome,
    },
    {
        path: /\/instructions/,
        component: initInstructions,
    },
    {
        path: /\/play/,
        component: initPlay,
    },
    {
        path: /\/result\/ganaste/,
        component: initGanaste,
    },
    {
        path: /\/result\/perdiste/,
        component: initPerdiste,
    }
];

const BASE_PATH = "/desafio-m5";

function isGithubPages(){
    return location.host.includes("github.io");
}

export function initRouter(container: Element) {
    function goTo(path) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
        handleRoute(completePath);
    }
    function handleRoute(route){
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        for (const r of routes) {
            if (r.path.test(newRoute)) {
                // Pasamos la funcion como parámetro que es comun en varios frameworks
                const el = r.component({goTo:goTo});
                if (container.firstChild){
                    container.firstChild.remove();
                }
                container.appendChild(el as any);
            }
        }
    }
    if (location.pathname == "/" || location.host.includes("github.io")) {
        goTo("/welcome");
    } else {
        handleRoute(location.pathname);
    }
    // si no usamos onpopstate, al usar las flechas del navegador cambiará la url pero no el handleRoute ya que esos cambios del state no estan siendo escuchados. Con onpopstate, logramos que lo sean.
    window.onpopstate = function() {
        handleRoute(location.pathname);
    }
}