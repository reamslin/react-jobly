import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";

function CompanyList() {
    const [companies, setCompanies] = useState(null);

    useEffect(() => {
        async function getCompaniesOnMount() {
            let companies = await JoblyApi.getCompanies();
            setCompanies(companies);
        }
        getCompaniesOnMount();
    }, [])

    async function search(name) {
        let companies = await JoblyApi.getCompaniesByName(name);
        setCompanies(companies);
    }

    return (
        <div>
            {!companies ? <h1> Loading... </h1>
                :
                <div className="container-fluid col-md-8">
                    <SearchForm search={search} />
                    {companies.map(c => <CompanyCard key={c.handle} name={c.name} description={c.description} handle={c.handle} />)}
                </div>
            }


        </div>
    )
}

export default CompanyList;