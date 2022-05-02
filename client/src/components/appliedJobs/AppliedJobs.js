import React from "react";
import { useSelector} from "react-redux";
import { Table } from "antd";
import './appliedJobs.css';


function AppliedJobs() {
    const jobs = useSelector(state=>state.job).jobs;
    const user = useSelector(state=>state.auth.user);
    const userid = user._id;
    // console.log(jobs);
    // console.log(userid);

    const userAppliedJobs=[]


    for(var job of jobs){

         var appliedCandidates = job.applications;

         var temp = appliedCandidates.find(candidate=>candidate.userid==userid)

        
         if(temp){

              var obj = {
                  title : job.title,
                  company : job.company ,
                  appliedDate : temp.appliedDate
              }

              userAppliedJobs.push(obj);
         }  

    }

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