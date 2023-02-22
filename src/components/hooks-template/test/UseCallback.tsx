import React, {useCallback, useState} from "react";

export const UseCallback = () => {
    const [count, setCount] = useState(0);
    const addTwo = useCallback(() => setCount(prev => prev + 1), []);

    return (
        <div>
            <h1>useCallback</h1>
            <p>{count}</p>
            <button onClick={addTwo}>
                Add
            </button>
        </div>
    );
}
