import React, { useState } from "react";

function SearchForm({ search }) {
    const [formData, setFormData] = useState("");

    function handleChange(e) {
        setFormData(f => e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        search(formData);
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex m-2">
            <input className="form-control" name="formData" value={formData} placeholder="Search" type="search" onChange={handleChange} />
            <button className="btn btn-primary" type="submit">Search</button>
        </form>
    )
}

export default SearchForm;