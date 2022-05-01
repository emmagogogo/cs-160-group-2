//import React, {useState, useEffect} from 'react';
import React from 'react';
import './postedJob.css';
import{useSelector} from 'react-redux';
import{Table} from 'antd';
import moment from 'moment';
import {EditOutlined} from '@ant-design/icons'
import{ useNavigate } from "react-router-dom";
//import { getJobByUserId  } from '../../actions/job';
//import api from '../../utils/api.js';



function PostedJobs(){

    const navigate = useNavigate();
    const allJobs = useSelector(state=>state.job).jobs;
    //console.log(allJobs);
    const user = useSelector(state=>state.auth.user)
    const userid = user._id;
    const userPostedJobs = allJobs.filter(job=>job.postedBy === userid);


    const columns = [{
        title: "Title", 
        dataIndex: "title",
    },
    {
        title: "Company",
        dataIndex: "company",
    },
    {
        title: "Posted on",
        dataIndex: "postedOn",
    },
    {
        title: "Applied Candidates",
        dataIndex: "appliedCandidates",
    },
    {
        title: 'Actions',
        render : (text, data)=>{
            return <div className="flex"> 
                <EditOutlined onClick={()=>{navigate(`/editjob/${data.completeJobData._id}`)}}/>
            </div>
        }
    }

];

const dataSource = [];
 
    for (var job of userPostedJobs){
        var obj = {
            key: job._id,
            title: job.title,
            company: job.company,
            postedOn: moment(job.createdAt).format('MMM-DD-yyyy'), 
            appliedCandidates: job.appliedCndidates.length,
            completeJobData: job
    
        }
        dataSource.push(obj);  
  }

    return (
        <section> 
            <div className="postedJobs-table">
                <h1>Posted Job</h1>
                <Table columns={columns} dataSource={dataSource}/>
            </div>
        </section>
    )
        
    
}

export default PostedJobs;