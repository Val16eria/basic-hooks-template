import React, {useReducer} from 'react';

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'increment':
            return {...state, count: state.count + 1}
        case 'decrement':
            return {...state, count: state.count - 1}
        case 'newUser':
            return {...state, userInput: action.payload};
        default:
            throw new Error();
    }
}

const ACTION = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    NEW_USER: 'newUser'
}

export const InputUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0, userInput: ''});
    //const [userInput, setUserInput] = useState('');

    return (
      <div>
          <h1>useReducer</h1>
          <input
              type="text"
              value={state.userInput}
              onChange={e => dispatch({type: ACTION.NEW_USER, payload: e.target.value})}
          />
          <p>{state.count}</p>
          <section>
              <button onClick={() => dispatch({type: ACTION.DECREMENT})}>-</button>
              <button onClick={() => dispatch({type: ACTION.INCREMENT})}>+</button>
          </section>
          <p>Имя: {state.userInput}</p>
      </div>
    );
}
