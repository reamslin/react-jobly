import React, { useState } from "react";
import { useHistory } from "react-router-dom";
function Login({ login }) {
    const [formData, setFormData] = useState({ username: "", password: "" })
    const history = useHistory();

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(f => ({ ...f, [name]: value }))
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const result = await login();
        if (result.sucess) {
            history.push("/companies");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username: </label>
                <input className="form-control" type="text" name="username" id="username" value={formData.username} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input className="form-control" type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    )
}

export default Login;