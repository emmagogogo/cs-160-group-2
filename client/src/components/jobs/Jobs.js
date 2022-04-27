import React, {useEffect, useState} from 'react';
//import PropTypes from 'prop-types';
//import Spinner from '../layout/Spinner';
import {useSelector, useDispatch} from 'react-redux';
import { getAllJobs } from '../../actions/job';
import {Row, Col} from 'antd';
import "./Jobs.css";
import { Link } from 'react-router-dom';
//import 'antd/dist/antd.css';
//import JobPost from "../job-post/JobPost.jsx";
import moment from 'moment';


function Jobs(){
    var{jobs} = useSelector(state=>state.job);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getAllJobs())
    }, [])

    // update the filtered array using hooks
    const [filterdJobs, filterJobs] = useState(jobs);
    // used to differentiate between the filtered and not filtered jobs display 
    const [filtered, setfiltered] = useState(false);

    // select the elements to be used in filtering
    let PartTime = document.getElementById('filter-PartTime');
    let FullTime = document.getElementById('filter-FullTime');
    let Internship = document.getElementById('filter-Internship');
    let Salary = document.getElementById('filter-Salary');
    let Experience = document.getElementById('filter-experience');
    let Title = document.getElementById('filter-Title');
    let Company = document.getElementById('filter-Company');
    let Today = document.getElementById('filter-Today');
    let ThisWeek = document.getElementById('filter-ThisWeek');
    let ThisMonth = document.getElementById('filter-ThisMonth');
    let ThisYear = document.getElementById('filter-ThisYear');

    function handleChange(e) {
        var jFiltered = [];
        var today = new Date();
        
        setfiltered(true);
        if (!PartTime.checked && !FullTime.checked && Salary.value.length === 0 && Experience.value === 'none' && Title.value.length === 0 && Company.value.length === 0 && !Today.checked && !ThisWeek.checked && !ThisMonth.checked && !ThisYear.checked)
            setfiltered(false);

        // Salary filter
        jFiltered = jFiltered.concat(jobs.filter(job => (job.salaryFrom <= Salary.value && job.salaryTo >= Salary.value)));
        //experience filter
        jFiltered = jFiltered.concat(jobs.filter(job => job.experience === Experience.value));
        // title filter
        var titleLength = Title.value.length;

        // filters database of titles with subTitles / 
        if (titleLength > 0){
            jFiltered = jFiltered.concat(jobs.filter
                (job => job.title.substring(0, titleLength).toLowerCase() === Title.value.toLowerCase()));
        }

        // company filter
        var companyLength = Company.value.length;
        if (companyLength > 0){ 
            jFiltered = jFiltered.concat(jobs.filter(job => job.company.substring(0, companyLength).toLowerCase() === Company.value.toLowerCase()));
        }

        // Date filter
        if (Today.checked) {
            jFiltered = jFiltered.concat(jobs.filter(job => Math.ceil((moment(today) - moment(job.createdAt))/ (1000 * 60 * 60 * 24)) <= 1));
        }
        if (ThisWeek.checked) {
            jFiltered = jFiltered.concat(jobs.filter(job => Math.ceil((moment(today) - moment(job.createdAt))/ (1000 * 60 * 60 * 24)) < 7));
        }
        if (ThisMonth.checked) {
            jFiltered = jFiltered.concat(jobs.filter(job => Math.ceil((moment(today) - moment(job.createdAt))/ (1000 * 60 * 60 * 24)) < 30));
        }
        if (ThisYear.checked) {
            jFiltered = jFiltered.concat(jobs.filter(job => Math.ceil((moment(today) - moment(job.createdAt))/ (1000 * 60 * 60 * 24)) < 365));
        } 

        // Job type
        if (PartTime.checked) {
            jFiltered = jFiltered.concat(jobs.filter(job => job.jobType === "Part Time"));
        }
        if (FullTime.checked) {
            jFiltered = jFiltered.concat(jobs.filter(job => job.jobType === "Full Time"));
        } 
        if (Internship.checked) {
            jFiltered = jFiltered.concat(jobs.filter(job => job.jobType === "Internship"));
        }
        
        // remove duplicates
        jFiltered = jFiltered.filter((item,index)=>{
            return (jFiltered.indexOf(item) === index)
        })
    
        // update the filtered array
        filterJobs(jFiltered); 
    }

return(
    <section>
        <div className='jobs-page-container'>
            <div className='job-filters'>
                <form id='filter' onChange={handleChange}>
                    
                    <p className='block-header'> Job Title </p>
                    <div className='block-element'>
                        <div className='inline-element'>
                            <input type="text" id="filter-Title" name="Title"/>
                        </div>
                    </div>
                    
                    <p className='block-header'> Jop Type </p>
                    <div className='block-element'>
                        <div className='inline-element'>
                            <input type="checkbox" id="filter-PartTime" name="PartTime" value="PartTime"/>
                            <label htmlFor="filter-PartTime"> Part Time</label> 
                        </div>
                        <div className='inline-element'>
                            <input type="checkbox" id="filter-FullTime" name="FullTime" value="FullTime"/>
                            <label htmlFor="filter-FullTime"> Full Time</label>
                        </div>
                        <div className='inline-element'>
                            <input type="checkbox" id="filter-Internship" name="Internship" value="Internship"/>
                            <label htmlFor="filter-Internship"> Internship</label>
                        </div>
                    </div>

                    <p className='block-header'> Jobs posted during this </p>
                    <div className='block-element'>
                        <div className='inline-element'>
                            <input type="checkbox" id="filter-Today" name="Today" value="Today" />
                            <label htmlFor="filter-Today"> Day </label> 
                        </div>
                        <div className='inline-element'>
                            <input type="checkbox" id="filter-ThisWeek" name="ThisWeek" value="ThisWeek" />
                            <label htmlFor="filter-ThisWeek"> Week </label>
                        </div>
                        <div className='inline-element'>
                            <input type="checkbox" id="filter-ThisMonth" name="ThisMonth" value="ThisMonth" />
                            <label htmlFor="filter-ThisMonth"> Month </label>
                        </div>
                        <div className='inline-element'>
                            <input type="checkbox" id="filter-ThisYear" name="ThisYear" value="ThisYear" />
                            <label htmlFor="filter-ThisYear"> Year </label>
                        </div>
                    </div>

                    <p className='block-header'> Company </p>
                    <div className='block-element'>
                        <div className='inline-element'>
                            <input type="text" id="filter-Company" name="Company"/>
                        </div>
                    </div>

                    <p className='block-header'> Salary </p>
                    <div className='block-element'>
                        <div className='inline-element'>
                            <input type="number" id="filter-Salary" name="Salary" min="0"/>
                        </div>
                    </div>

                    <p className='block-header'> experience </p>
                    <div className='block-element'>
                        <div className='inline-element'>
                            <select defaultValue={"none"} name="experience" id="filter-experience">
                                <option value="none" disabled hidden>Select an Option</option>
                                <option value='0-1 Years'> 0 - 1 Years</option>
                                <option value='1-2 Years'> 1 - 2 Years</option>
                                <option value='2-3 Years'> 2 - 3 Years </option>
                                <option value='3-5 Years'> 3 - 5 Years </option>
                                <option value='5+ Years'> 5+ Years </option>
                            </select>                                
                        </div>
                    </div>

                </form>
            </div>
            

            <div className='job'>
                <Row gutter={16}>
                    {((filterdJobs.length || filtered) ? filterdJobs : jobs).map(job => {  
                    return (
                    <Col key={job._id} lg={24} sm= {24}>
                        <div className='job-div'>
                            <h4> Job Title : {job.title}</h4>
                            <p> Company: {job.company}</p>
                            <p>Description: {job.smallDescription}</p>
                            <p>Location: {job.location}</p>
                            <p>Job Type: {job.jobType}</p>
                            <div className='flex'>
                                <p>Salary : <b>{job.salaryFrom} - {job.salaryTo}</b></p>
                                <p style={{marginLeft: 20}}> Experience : <b>{job.experience} </b></p>
                            </div>
                            <div>
                                <Link to={`/jobs/${job._id}`}> <button type="link" className="btn btn-primary">View</button> </Link>    
                            </div>
                            
                            <hr/>
                        </div>
                    </Col>
                    )})}
                </Row>
            </div>
        </div>
    </section>
);
    
    
}

export default Jobs;