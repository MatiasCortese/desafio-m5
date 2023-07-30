type Jugada = "piedra" | "papel" | "tijera";
type Game = {
    computerPlay: Jugada,
    myPlay: Jugada
};

const state = {
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: ""
        },
        history:[]
    },
    listeners: [],
    getState(){
        return this.data;
    },
    subscribe(callback){
        this.listeners.push(callback);
    },
    setMoves(myPlay: Jugada, computerPlay: Jugada){
        const currentState = this.getState();
        currentState.currentGame.myPlay = myPlay;
        currentState.currentGame.computerPlay = computerPlay;
        this.pushToHistory({computerPlay, myPlay});
        this.whoWin(myPlay, computerPlay);
    },
    initState(){
        const localData = JSON.parse(localStorage.getItem("saved-state") as any);
        if (localData){
            this.setState(localData);
            this.scoreCalculator();
        }
    },
    setState(newState){
        this.data.history = newState;
        for (const cb of this.listeners) {
            console.log("pa saber si entra")
            cb(newState);
            localStorage.setItem("saved-state", JSON.stringify(newState));
        };
    },
    pushToHistory(game: Game){
        const currentState = this.getState();
        currentState.history.push(game);
        localStorage.setItem("saved-state", JSON.stringify(currentState.history));
    },
    whoWin(myPlay:Jugada, computerPlay:Jugada){
        const ganeConTijera = myPlay == "tijera" && computerPlay == "papel";
        const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijera";
        const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";
        const perdiContraTijera = myPlay == "papel" && computerPlay == "tijera";
        const perdiContraPiedra = myPlay == "tijera" && computerPlay == "piedra";
        const perdiContraPapel = myPlay == "piedra" && computerPlay == "papel";
        const gane = [ganeConTijera, ganeConPapel, ganeConPiedra].includes(true);
        const perdi = [perdiContraTijera, perdiContraPapel, perdiContraPiedra].includes(true);
        if (gane) {
            return "Gané";
        }
        else if (perdi) {
            return "Perdí";
        }
        else {
            return "Empaté";
        }
    },
    scoreCalculator(){
        var myScore = 0;
        var computerScore = 0;
        const localData = localStorage.getItem("saved-state");
        if(localData) {
            const data = JSON.parse(localData as any);
            data.forEach(juego => {
                const resultado = this.whoWin(juego.myPlay, juego.computerPlay);
                if (resultado === "Gané") {
                    myScore++;
                }
                if (resultado === "Perdí") {
                    computerScore++;
                }
            })
            return {
                myScore: myScore,
                computerScore: computerScore
            }
        }
    }
};

export {state};