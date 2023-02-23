import React, {useState, useEffect} from 'react';

export const UseEffect = () => {
    const [type, setType] = useState('users');

    useEffect(() => {

    }, [])

    return (
      <div>
          <h1>useEffect</h1>
          <p>Ресурс: {type}</p>
          <button onClick={() => setType('users')}>users</button>
          <button onClick={() => setType('todo')}>todos</button>
          <button onClick={() => setType('posts')}>posts</button>
      </div>
    );
}
