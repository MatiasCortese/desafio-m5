import { initRouter } from "./router";
import { state } from "./state";
import "./components/presentation-text";
import "./components/countdown"
import "./components/jugada";
import "./components/button";
import "./components/star";
import "./components/score"


(function(){
    const container = document.querySelector("#root");
    state.initState();
    initRouter(container as any);
})();