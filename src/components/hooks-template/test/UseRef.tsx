import React from 'react';

export const UseRef = () => {

    const ref = React.useRef<HTMLInputElement>(null)

    React.useEffect(() => {
        ref.current?.focus()
    }, [])

    return (
        <div>
            <h1>useRef</h1>

            {/*ссылка на ввод*/}
            <input ref={ref}/>
        </div>
    );
}
