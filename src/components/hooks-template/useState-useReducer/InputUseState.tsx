import React from 'react';

export const InputUseState = () => {
    // определяем состояние
    const [message, setMessage] = React.useState('');
    const [update, setUpdate] = React.useState(message);

    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setMessage(e.target.value);
        //console.log("value is:", e.target.value);
    };

    const handleClick = () => {
        setUpdate(message);
        //console.log("handleClick", message);
    };

    return (
        <div>
            <h1>useState</h1>

            <input
                type="text"
                id="message"
                name="message"
                onChange={handleChange}
                value={message}
                autoComplete="off"
            />
            <p>Message: {message}</p>
            <p>Updated: {update}</p>

            <button onClick={handleClick}>Update</button>
        </div>
    )
}
