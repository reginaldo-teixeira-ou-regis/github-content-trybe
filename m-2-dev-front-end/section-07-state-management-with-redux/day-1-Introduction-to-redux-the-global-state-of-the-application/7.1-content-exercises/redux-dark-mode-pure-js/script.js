const INITIAL_STATE = {
  theme: "light",
};

// 3 passos para configurar o Redux
// 1 - [x] Configuração do Redux
// 2 - [x] Disparo de Eventos
// 3 = [x] Me inscrever na loja de eventos

const buttonEl = document.getElementById("light-switch");
const lampel = document.getElementById("light-bulb");
const mainApp = document.getElementById("wrapper");

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "changeTheme":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    // case "xablau":
    //   return {
    //     ...state,
    //     theme: state.theme === "light" ? "dark" : "light",
    //   };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

store.subscribe(() => {
  const theme = store.getState().theme;
  mainApp.className = theme;
  lampel.src = `img/${theme}.png`;
})

const changeTheme = { type: "changeTheme", payload: "" };

// const wesleyTheme = { type: "xablau", payload: "" };

buttonEl.addEventListener("click", () => {
//   theme = theme === "light" ? "dark" : "light"
store.dispatch(changeTheme);
//     mainApp.className = theme;
//     lampel.src = `img/${theme}.png`;
});
