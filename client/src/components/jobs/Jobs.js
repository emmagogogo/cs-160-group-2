import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import {useSelector, useDispatch} from 'react-redux';
import { getAllJobs } from '../../actions/job';
import {Row, Col} from 'antd';
import "./Jobs.css";
//import 'antd/dist/antd.css';
import JobPost from "../job-post/JobPost.jsx";


function Jobs(){
    const{jobs} = useSelector(state=>state.job);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getAllJobs())
    }, [])

return(
    <section>
        <table className="jobs-table">
                 <td>
                     <div className="filter">
                         <p className="filterForm">Filters</p>
                        <form className="filterForm" action="/action_page.php">
                            <input type="checkbox" name="date" value="date" />
                             <label htmlFor="date"> Date</label><br />
                             <input type="checkbox" name="full-time" value="full-time" />
                             <label htmlFor="full-time"> FullTime</label><br />
                             <input type="checkbox" name="part-time" value="part-time" />
                            <label htmlFor="part-time"> PartTime</label><br />
                            <input type="checkbox" name="internship" value="internship" />
                             <label htmlFor="internship"> Internship</label><br /><br />
                             <input type="submit" value="Submit" />
                         </form>
                     </div>
                 </td>
                <div>
                    <Row gutter={16}>
                        {jobs.map(job => {  
                        return <Col key={job._id} lg={12} sm= {24}>
                                    <div className='job-div'>
                                        <h4> Job Title : {job.title}</h4>
                                        <p> Company: {job.company}</p>
                                        <p>Description: {job.smallDescription}</p>
                                        <p>Location: {job.location}</p>
                                        <p>Job Type: {job.jobType}</p>
                                        <div className='flex'>
                                            <p>Salary : <b>{job.salaryFrom} - {job.salaryTo}</b>   </p>
                                            <p style={{marginLeft: 20}}> Experience : <b>{job.experience} Years</b></p>
                                            
                                        </div>
                                        <div>
                                          <button type="link" class="btn btn-primary">View</button>   
                                        </div>
                                        
                                        <hr/>
                                    
                                    </div>

                            </Col>;
                        })}
                    </Row>
                </div>
        </table>
    </section>
);
}

export default Jobs;



