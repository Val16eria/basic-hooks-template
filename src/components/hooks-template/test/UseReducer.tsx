import React from 'react';

// начальное состояние
const initialState = {
    username: '',
    email: ''
};

type Action =
    | { type: "username"; payload: string }
    | { type: "email"; payload: string }
    | { type: "reset" };

const reducer = (state: typeof initialState, action: Action) => {
    switch (action.type) {
        case 'username':
            return {...state, username: action.payload};
        case 'email':
            return {...state, email: action.payload};
        case 'reset':
            return initialState;
        default:
            // @ts-ignore
            throw new Error(`Unknown action type: ${action.type}`);
    }
};

export const UseReducer = () => {

    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <div>
            <h1>useReducer</h1>
            <input
                type="text"
                value={state.username}
                onChange={(e) =>
                    dispatch({type: 'username', payload: e.target.value})
                }
            />
            <input
                type="email"
                value={state.email}
                onChange={(e) =>
                    dispatch({type: 'email', payload: e.target.value})
                }
            />
        </div>
    );
}
