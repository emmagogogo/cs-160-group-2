import React, {useState}from 'react';
import {Row, Col, Form, Tabs, Input, Button, Select} from 'antd';
import {useDispatch} from 'react-redux';
//import {updateUser} from '.actions/userActions';
import 'antd/dist/antd.css';
import './JobPost.css'
import { postjob } from '../../actions/job';
const{ TextArea } = Input;
const{ TabPane } = Tabs;
const{ Option } = Select;

function PostJob(){

    const [jobInfo, setJobInfo] = useState({});
    const [activeTab, setActiveTab] = useState("0");
    const dispatch = useDispatch();

    function onFirstFormFinish(values){
        setJobInfo(values);
        setActiveTab("1");
    }

    function onFinalFormFinish(values){
        const finalObj = {...jobInfo, ...values};
        console.log(finalObj);
        dispatch(postjob(finalObj));
    }

    return (
        <section>
            <div className="jobs-table">
             <div className="post-job">
              <h1>Allow Recruiter to post job here</h1>
              <Tabs defaultActiveKey='0' activeKey={activeTab}>
                  <TabPane tab='Job Info' key='0'>
                      <Form layout='vertical' onFinish={onFirstFormFinish}>
                          <Row gutter={16}>
                              <Col lg={8} sm={24}>
                                  <Form.Item name='title' rules={[{required: true}]} label = 'Title'>
                                  <Input/>
                                  </Form.Item>
                              </Col>

                              <Col lg={8} sm={24}>
                                  <Form.Item name='department' rules={[{required: true}]} label = 'Department'>
                                  <Input/>
                                  </Form.Item>
                              </Col>

                              <Col lg={8} sm={24}>
                                  <Form.Item name='location' rules={[{required: true}]} label = 'Location'>
                                  <Input/>
                                  </Form.Item>
                              </Col>

                              <Col lg={8} sm={24}>
                                  <Form.Item name='jobType' rules={[{required: true}]} label = 'Job Type'>
                                    <Select>
                                              <Option value='Full Time'>Full Time</Option>
                                              <Option value='Part Time'>Part Time</Option>
                                              <Option value='Internship'>Internship </Option>
                                          </Select>
                                      </Form.Item>
                              </Col>

                              <Col lg={8} sm={24}>
                                  <Form.Item name='experience' rules={[{required: true}]} label = 'Experience Years'>
                                  <Select>
                                              <Option value='0-1 Years'> 0 - 1 Years</Option>
                                              <Option value='1-2 Years'> 1 - 2 Years</Option>
                                              <Option value='2-3 Years'> 2 - 3 Years </Option>
                                              <Option value='3-5 Years'> 3 - 5 Years </Option>
                                              <Option value='5+ Years'> 5+ Years </Option>
                                          </Select>
                                      </Form.Item>
                              </Col>

                              <Col lg={8} sm={24}>
                                      <Form.Item name='minimumQualification' rules={[{required: true}]} label = 'Minimum Qualification'>
                                          <Select>
                                              <Option value='Associate Degree'>Associate Degree </Option>
                                              <Option value='Bachelor Degree'>Bachelor Degree </Option>
                                              <Option value='Master Degree'>Master Degree </Option>
                                          </Select>
                                      </Form.Item>
                                  </Col>
                            
                              <Col lg={8} sm={24}>
                                  <Form.Item name='salaryFrom' rules={[{required: true}]} label = 'Salary From'>
                                  <Input type='number'/>
                                  </Form.Item>
                              </Col>

                              <Col lg={8} sm={24}>
                                  <Form.Item name='salaryTo' rules={[{required: true}]} label = 'Salary To'>
                                  <Input type='number'/>
                                  </Form.Item>
                              </Col>

                             
                          </Row>
                              

                          <Row gutter={16}>
                              <Col lg={24} sm={24}>
                                      <Form.Item name='skillRequired' rules={[{required: true}]} label = 'Skills, for example: HTML, CSS, seperated by ",'>
                                      <TextArea rows={1}/>
                                      </Form.Item>
                                  </Col>

                                  

                                  <Col lg={24} sm={24}>
                                      <Form.Item name='smallDescription' rules={[{required: true}]} label = 'Brief Description'>
                                      <TextArea rows={3}/>
                                      </Form.Item>
                                  </Col>

                                  <Col lg={24} sm={24}>
                                      <Form.Item name='fullDescription' rules={[{required: true}]} label = 'Full Description'>
                                      <TextArea rows={6}/>
                                      </Form.Item>
                                  </Col>
                          </Row>
                          <Button htmlType='submit'>Next</Button>
                      </Form>
                  </TabPane> 

                  <TabPane tab='Company Info' key='1'>
                      <Form layout='vertical' onFinish = {onFinalFormFinish}>
                          <Row gutter={16}>
                              <Col lg={8} sm={24}>
                                  <Form.Item name='company' rules={[{required: true}]} label = 'Company Name'>
                                  <Input/>
                                  </Form.Item>
                              </Col>

                              <Col lg={8} sm={24}>
                                  <Form.Item name='email' rules={[{required: true}]} label = 'Email'>
                                  <Input/>
                                  </Form.Item>
                              </Col>
                              <Col lg={8} sm={24}>
                                  <Form.Item name='phoneNumber' rules={[{required: true}]} label = 'Phone Number'>
                                  <Input/>
                                  </Form.Item>
                              </Col>

                              <Col lg={24} sm={24}>
                                      <Form.Item name='companyDescription' rules={[{required: true}]} label = 'Company Description'>
                                      <TextArea rows={6}/>
                                      </Form.Item>
                                  </Col>
                              
                          </Row>
                          <Button onClick={()=> {setActiveTab('0')}}>Previous</Button>
                          <Button htmlType='submit'>Post Job</Button>
                      </Form>
                  </TabPane>

              </Tabs>
            </div>
          </div>
        </section>
      );

}
    
export default PostJob;