import React from "react";

function JobCard({ title, salary, equity, companyName }) {
    return (
        <div className="card m-4 p-2">
            <h4 className="card-title">{title}</h4>
            <div className="cardBody">
                <h6>{companyName}</h6>
                {salary && <p>Salary: {salary}</p>}
                {equity && <p>Equity: {equity}</p>}
            </div>
        </div>
    )
}

export default JobCard;