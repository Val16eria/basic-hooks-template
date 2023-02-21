import React, {useState} from 'react';

export const InputUseState = () => {

    const [details, setDetails] = useState({
        name: "",
        email: "",
        password: "",
        address: ""
    })

    const handleChange = (e: { target: any; }) => {
        const {name, value} = e.target;
        setDetails((prev) => {
            return { ...prev, [name]: value }
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(details);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Name:</h3> <input type="text" name="name" onChange={handleChange}/>
            <h3>Email:</h3> <input type="email" name="email" onChange={handleChange}/>
            <h3>Password:</h3>{" "}
            <input type="password" name="password" onChange={handleChange}/>
            <h3>Address:</h3> <textarea name="address" onChange={handleChange}></textarea>
            <br/>
            <button type="submit">Submit Form</button>
        </form>
    );
}
