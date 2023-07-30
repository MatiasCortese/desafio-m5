import { initWelcome } from "./pages/welcome";
import { initInstructions } from "./pages/instructions";
import "./components/presentation-text";
import { state } from "./state";
import "./components/countdown"
import "./components/jugada";
import "./components/button";
import "./components/star";
import "./components/score"
import { initRouter } from "./router";

(function(){
    const localData = JSON.parse(localStorage.getItem("saved-state") as any);
    if (localData) {
        state.initState();
    }
    const container = document.querySelector("#root");
    initRouter(container as any);
})()