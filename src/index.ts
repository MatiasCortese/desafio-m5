import { state } from "./state";
import { initWelcome } from "./pages/welcome";
import { initInstructions } from "./pages/instructions";
import "./components/presentation-text";
import "./components/countdown"
import "./components/jugada";
import "./components/button";
import "./components/star";
import "./components/score"
import { initRouter } from "./router";

(function(){
    const container = document.querySelector("#root");
    initRouter(container as any);
    state.initState();
})();