import React, {useEffect, useState} from "react";
import { useSelector, useDispatch} from "react-redux";
import { Table } from "antd";
import './appliedJobs.css';
import api from '../../utils/api';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getMyAppliedJobs } from '../../actions/job';


function AppliedJobs() {
    
    // const [userAppliedJobs, setUserAppliedJobs] = useState([]);
    const dispatch = useDispatch()
    var userAppliedJobs = useSelector(state => state.job.myAppliedJobs);


    useEffect(() => {
        dispatch(getMyAppliedJobs())
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