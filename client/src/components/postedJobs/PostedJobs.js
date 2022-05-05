//import React, {useState, useEffect} from 'react';
import React from 'react';
import './postedJobs.css';
import{useSelector, useDispatch} from 'react-redux';
import{Table, Modal} from 'antd';
import moment from 'moment';
import {EditOutlined, OrderedListOutlined, DeleteOutlined, ExclamationCircleOutlined} from '@ant-design/icons'
import{ useNavigate } from "react-router-dom";
import { deleteJob } from '../../actions/job';
const { confirm } = Modal;

//import api from '../../utils/api.js';



function PostedJobs(){

    const navigate = useNavigate();
    const allJobs = useSelector(state=>state.job).jobs;
    const userid = JSON.parse(localStorage.getItem('id'));
    const userPostedJobs = allJobs.filter(job=>job.postedBy === userid);
    const dispatch = useDispatch();

  



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
                <OrderedListOutlined style={{fontSize:20}}/>
                <DeleteOutlined style={{fontSize:20}} onClick={()=> popup(data.completeJobData._id)}/>
            </div>
        }
    }

];

    function popup(data){
        
        confirm({
            title: 'Do you want to delete this job?',
            icon: <ExclamationCircleOutlined />,
            content: '',
            onOk() {
                dispatch(deleteJob(data));
            },
            onCancel() {
            console.log('Cancel');
            },
        });

    
}

const dataSource = [];
 
    for (var job of userPostedJobs){
        var obj = {
            key: job._id,
            title: job.title,
            company: job.company,
            postedOn: moment(job.createdAt).format('MMM-DD-yyyy'), 
            appliedCandidates: job.applications.length,
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