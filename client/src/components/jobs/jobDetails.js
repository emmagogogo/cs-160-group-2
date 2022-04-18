import React from 'react';
import "./Jobs.css";
import { useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { Link } from 'react-router-dom';


function JobDetails(){
    const { id } = useParams();
    console.log(id);
    const{jobs} = useSelector(state=>state.job);

     const job = jobs.find(job=>job._id === id);
   
         return(
                <div className="container">

                    {job && (<div key={job.id}> 
                        <p className="p-style"> <b>Job Title:</b> {job.title} </p>
                        <p className="p-style"> <b>Company:</b> {job.company} </p>
                        <p className="p-style"> <b>Location:</b> {job.location} </p>
                        <p className="p-style"> <b>Job Type:</b> {job.jobType} </p>
                        <p className="p-style"> <b>Brief Description:</b> {job.smallDescription} </p>
                        <p className="p-style"> <b>Full Description:</b> {job.fullDescription} </p>
                        <p className="p-style"> <b>Skills Required:</b> {job.skillsRequired}</p>
                        <p className="p-style"> <b>Experience:</b> {job.experience} Years</p>
                        <p className="p-style"> <b>Minimum Qualification:</b> {job.minimumQualification}</p>
                        <hr className="p-style"/>
                        <p className="p-style"> <b>Salary Range:</b> {job.salaryFrom} - {job.salaryTo}</p>
                        <p className="p-style"> <b>Department:</b> {job.department} </p>
                        <p className="p-style"> <b>Company Profile:</b> {job.companyDescription} </p>
                        <p className="p-style"> <b>Total Candidates Applied:</b> {job.appliedCndidates.length} </p>
                        <hr className="p-style"/>
                    
                    <div className="p-style"> </div>

                    <button className="btn btn-back"> <Link to="/Jobs"> Back</Link></button>

                    <button className="btn btn-primary"> Apply Now</button>
                    
                    <p className="p-style"><b>Posted on: </b> {moment(job.createdAt).format('MMM DD, yyyy')}</p>
                    <hr className="p-style"/>

                    </div>)
                        }  
                </div>

         )

}

export default JobDetails;