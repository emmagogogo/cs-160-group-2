import React, {useEffect, useState} from "react";
import { useSelector} from "react-redux";
import { Table } from "antd";
import './appliedJobs.css';
import api from '../../utils/api';
import { Link } from 'react-router-dom';
import moment from 'moment';


function AppliedJobs() {
    
    const [userAppliedJobs, setUserAppliedJobs] = useState([]);


    useEffect(() => {
        api.get('/jobs/getMyApplications').then((res) => {
            //console.log(res.data)
            let newData = res.data.map(jobApplication => {
                if(jobApplication.job[0] == null) return null
                return {
                    title:jobApplication.job[0].title, 
                    company: jobApplication.job[0].company , 
                    appliedDate: moment(jobApplication.date).format('MMM-DD-yyyy'), 
                    status: jobApplication.stage,
                    id: jobApplication.job[0]._id
                }
            })
            setUserAppliedJobs(newData)
        }).catch(err => console.log(err))
    },[]);

    const columns = [
        {
            title : 'Job Title' , 
            dataIndex : 'title',
            render : (text ,data)=>{
                return <Link key= {data.id} to={`/jobs/${data.id}`}>{data.title}</Link>
              }
        }, 
        {
            title : 'Company' , 
            dataIndex : 'company',
            key: 'company',
        },{
            title : 'Applied Date' , 
            dataIndex : 'appliedDate', 
            key:'appliedDate'
        },
        {
            title : 'Status' , 
            dataIndex : 'status' ,
            key:'status'
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