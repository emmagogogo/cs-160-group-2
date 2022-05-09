import React, {useState, useEffect} from 'react';
import './postedJobs.css';
import{useSelector, useDispatch} from 'react-redux';
import{Table, Modal} from 'antd';
import moment from 'moment';
import {EditOutlined, OrderedListOutlined, DeleteOutlined, ExclamationCircleOutlined} from '@ant-design/icons'
import{ useNavigate } from "react-router-dom";
import { deleteJob } from '../../actions/job';
import { Link } from 'react-router-dom';
import api from '../../utils/api'
import Spinner from '../layout/Spinner';
const { confirm } = Modal;



function PostedJobs(){

    const navigate = useNavigate();
    const allJobs = useSelector(state=>state.job).jobs;
    const userid = JSON.parse(localStorage.getItem('id'));
    const userPostedJobs = allJobs.filter(job=>job.postedBy === userid);
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedJob, setSelectedJob] = useState();

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
    // {
    //     title: "Applied Candidates",
    //     dataIndex: "appliedCandidates",
    // },
    {
        title: 'Actions',
        render : (text, data)=>{
            return <div className="flex" key={data.completeJobData._id}> 
                <EditOutlined onClick={()=>{navigate(`/editjob/${data.completeJobData._id}`);}}/>
                <OrderedListOutlined style={{fontSize:20}} onClick={() => {showModal(job);}}/>
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
            // appliedCandidates: job.applications.length,
            completeJobData: job
    
        }
        dataSource.push(obj);  
  }
  //console.log(job);

    const showModal = (job) => {
        setIsModalVisible(true);
        setSelectedJob(job);
        //console.log(job);
    };
    console.log(selectedJob);

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    //sub  components
    function CandidatesList(){
        const candidatesColumns = [
          {
            title: "Candidate Id",
            dataIndex: "candidateId",
            key: "candidateId",
            render : (text ,data)=>{
              return <Link key={data.candidateId} to={`/profile/${data.candidateId}`}>{data.candidateId}</Link>
            }
          },
          {
            title: "Full Name",
            dataIndex: "fullName",
            key:'fullName',
          },
          {
            title: "Email",
            dataIndex: "email",
            key:'email',
          },
          {
            title: "Phone Number",
            dataIndex: "phoneNumber",
            key:'phoneNumber',
          },
          { title: "Applied Date", dataIndex: "appliedDate", key:'appliedDate' },
          { title: "Status", dataIndex: "status", key:'status' },
        ];
        
        const [candidates, setCandidates] = useState([]);

        useEffect(() => {
            api.get(`/jobs/${selectedJob._id}/getCandidates`).then((res) => {
                console.log(res.data)
                 let newData = res.data.map(candidates => {
                     if(candidates.profileDetails[0] == null) return null;
                     const user = candidates.profileDetails[0];
                      //console.log(user.phoneNumber);
                    //  console.log(candidates);
                    // console.log(candidates);
                     return {
                        candidateId: user.user, 
                        fullName: user.firstName + " " + user.lastName,
                        email: user.email,
                        phoneNumber: user.phoneNumber,
                        appliedDate: moment(candidates.date).format('MMM-DD-yyyy'),
                        status: candidates.stage,
                    }
                 })
                 console.log(newData);
                  setCandidates(newData);
            }).catch(err => console.log(err))
        },[]);

      
        return <Table key={candidates}
        columns={candidatesColumns}
        dataSource={candidates}
       
      />
    }


    return (
        <section> 
            <div className="postedJobs-table">
                <h1>Posted Job</h1>
                <Table  columns={columns} dataSource={dataSource}/>
                <Modal key={dataSource}
                    title="Applied Candidates List"
                    visible={isModalVisible}
                    closable={false}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={1500}
                    >
                    <CandidatesList/>
                 </Modal>
            </div>
        </section>
    )
        
    
}


export default PostedJobs;