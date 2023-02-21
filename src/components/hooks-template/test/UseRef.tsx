import React from 'react';

export const UseRef = () => {

    const ref = React.useRef<HTMLInputElement>(null)

    React.useEffect(() => {
        ref.current?.focus()
    }, [])

    return (
        <div>
            {/*ссылка на ввод*/}
            <input ref={ref}/>
        </div>
    );
}
