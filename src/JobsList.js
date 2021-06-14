import React, { useState, useEffect } from "react";
import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";

function JobsList() {
    const [jobs, setJobs] = useState(null);

    useEffect(() => {
        async function getJobsOnMount() {
            let jobs = await JoblyApi.getJobs();
            setJobs(jobs);
        }
        getJobsOnMount();
    }, [])

    async function search(title) {
        let jobs = await JoblyApi.getJobsByTitle(title);
        setJobs(jobs);
    }

    return (
        <div>
            {!jobs ? <h1> Loading... </h1>
                :
                <div className="container-fluid col-md-8">
                    <SearchForm search={search} />
                    <JobCardList jobs={jobs} />
                </div>
            }


        </div>
    )
}

export default JobsList;