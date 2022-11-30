const INITIAL_STATE = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
  };

function createColors() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';
    const randomly = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        color += oneChar[randomly()];
    }
    return color;
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NEXT_COLOR':
            return {
                ...state,
                index: state.index === state.colors.length - 1 ? 0 : state.index + 1
            }
        case 'PREVIOUS_COLOR':
            return {
                ...state,
                index: state.index === 0 ? state.colors.length - 1 : state.index -1
            }
        case 'RANDOM_COLOR':
            return {
                ...state,
                colors: [...state.colors, createColors()],
                index: state.colors.length,
            }
        default:
            return state;
    }  
}

const store = Redux.createStore(reducer);
console.log(store);

const btnNext = document.getElementById('next');
const btnPrevious = document.getElementById('previous');
const btnRandom = document.getElementById('random');

const changeColor = { type: 'NEXT_COLOR' }
const changePrevious = { type: 'PREVIOUS_COLOR' }
const changeRandom = { type: 'RANDOM_COLOR' }

btnNext.addEventListener('click', () => {
    store.dispatch(changeColor)
})

btnPrevious.addEventListener('click', () => {
    store.dispatch(changePrevious)
})

btnRandom.addEventListener('click', () => {
    store.dispatch(changeRandom)
})

store.subscribe(() => {
    const { colors, index } = store.getState();
    document.getElementById('value').innerHTML = colors[index];
    document.getElementById('container').style.backgroundColor = colors[index];
})
