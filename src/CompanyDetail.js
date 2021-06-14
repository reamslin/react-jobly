import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";

function CompanyDetail() {
    const { handle } = useParams();

    const [company, setCompany] = useState(null);

    useEffect(() => {
        async function getCompanyOnMount(handle) {
            let company = await JoblyApi.getCompany(handle);
            setCompany(company);
        }
        getCompanyOnMount(handle);
    }, []);

    return (
        <div>
            { !company ? <h1>Loading...</h1> :
                <div className="container">
                    <h2> {company.name} </h2>
                    <h6> {company.description} </h6>
                    <JobCardList jobs={company.jobs} />
                </div>
            }
        </div>
    )
}

export default CompanyDetail;