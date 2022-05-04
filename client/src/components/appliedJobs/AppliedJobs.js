import React, {useEffect, useState} from "react";
import { useSelector} from "react-redux";
import { Table } from "antd";
import './appliedJobs.css';
import api from '../../utils/api'


function AppliedJobs() {
    
    const [userAppliedJobs, setUserAppliedJobs] = useState([])

    useEffect(() => {
        api.get('/jobs/getMyApplications').then(async (res) => {
            setUserAppliedJobs(res.data.map(jobApplication => jobApplication.job[0]))
        })
    });

    const columns = [
        {
            title : 'Job Title' , 
            dataIndex : 'title' 
        }, 
        {
            title : 'Company' , 
            dataIndex : 'company' 
        },{
            title : 'Applied Date' , 
            dataIndex : 'appliedDate' 
        }
    ]

    return (
        <section>

            <div className= 'appliedJobs-table'>
                   <h1>AppliedJobs</h1>
                   <Table columns={columns} dataSource={userAppliedJobs}/>
            </div>
        </section>

    )
}

export default AppliedJobs