import React from "react";
import { Link } from "react-router-dom";


function CompanyCard({ name, description, handle }) {
    return (

        <Link className="card m-4 p-2" to={`/companies/${handle}`}>
            <h6 className="card-title">{name}</h6>
            <p className="card-body">{description}</p>
        </Link>
    )
}

export default CompanyCard;