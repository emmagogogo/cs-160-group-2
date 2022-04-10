import React, {Fragment, useState} from 'react';
//import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postJob } from '../../actions/profile';


const PostJob = ({ postJob, navigate }) => {
    const [formData, setFormData] = useState({
        title: '',
        department: '',
        location: '',
        jobType: '',
        experience: '',
        salaryFrom: '',
        salaryTo: '',
        skillsRequired: '',
        company: '',
        email: '',
        phoneNumber: '',
        minimumQualification: '',
        companyDescription: ''
    });

    const {
        title,
        department,
        location,
        jobType,
        experience,
        salaryFrom,
        salaryTo,
        skillsRequired,
        company,
        email,
        phoneNumber,
        minimumQualification,
        companyDescription
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});
    const onSubmit = e => {
        e.preventDefault();
        postJob(formData, navigate);
    }

    return (
        <Fragment>
            <h1 className="large text-primary">
        Allow Recruiter to post job here
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i> Please enter your job details
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="Title" name="title" value={title} onChange={e => onChange(e)}/>
          <small className="form-text"
            >Please enter the title of the job</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Department" name="department" value={department} onChange={e => onChange(e)}/>
          <small className="form-text"
            >Please enter the name of the department</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)}/>
          <small className="form-text"
            >Please enter City & state suggested (eg. Boston, MA)</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Job Type" name="jobType" value={jobType} onChange={e => onChange(e)}/>
          <small className="form-text"
            >Please enter the job type</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Experience" name="experience" value={experience} onChange={e => onChange(e)}/>
          <small className="form-text"
            >Please enter the experience</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Salary From" name="salaryFrom" value={salaryFrom} onChange={e => onChange(e)}/>
          <small className="form-text"
            >Please enter the salary starting from</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Salary To" name="salaryTo" value={salaryTo} onChange={e => onChange(e)}/>
          <small className="form-text"
            >Please enter the salary to</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Skills" name="skillsRequired" value={skillsRequired} onChange={e => onChange(e)}/>
          <small className="form-text"
            >Please use comma separated values (eg.
            HTML,CSS,JavaScript,PHP)</small
          >
        </div>
        <div className="form-group">
          <select name="minimumQualification" value={minimumQualification} onChange={e => onChange(e)}>
            <option value="0">* Select Minimum Qualification</option>
            <option value="Developer">Associate Degree</option>
            <option value="Junior Developer">Bachelor Degree</option>
            <option value="Senior Developer">Master Degree</option>
          </select>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Company Name" name="company" value={company} onChange={e => onChange(e)}/>
          <small className="form-text"
            >Please enter the company name</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Email" name="email" value={email} onChange={e => onChange(e)}/>
          <small className="form-text"
            >Please enter your email</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Phone Number" name="phoneNumber" value={phoneNumber} onChange={e => onChange(e)}/>
          <small className="form-text"
            >Please enter your phone number</small
          >
        </div>
        <div classNameName="form-group">
          <input type="text" placeholder="Company description" name="companyDescription" value={companyDescription} onChange={e => onChange(e)}/>
          <small classNameName="form-text"
            >Please enter your compnay's description</small
          >
        </div>
        <input type="submit" classNameName="btn btn-primary my-1" />
        <a classNameName="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
        </Fragment>
    )
}

PostJob.propTypes = {
    postJob: PropTypes.func.isRequired
};


export default PostJob