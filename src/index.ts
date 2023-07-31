import { state } from "./state";
import { initRouter } from "./router";
import "./components/presentation-text";
import "./components/countdown"
import "./components/jugada";
import "./components/button";
import "./components/star";
import "./components/score"


(function(){
    const container = document.querySelector("#root");
    const test = state;
    initRouter(container as any);
    test.initState();
})();