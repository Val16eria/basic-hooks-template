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
            <input
                type="text"
                id="message"
                name="message"
                onChange={handleChange}
                value={message}
                autoComplete="off"
            />
            <h2>Message: {message}</h2>
            <h2>Updated: {update}</h2>

            <button onClick={handleClick}>Update</button>
        </div>
    )
}
