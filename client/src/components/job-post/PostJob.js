import React, {useState}from 'react';
import {Row, Col, Form, Tabs, Input, Button, Select} from 'antd';
import {useDispatch} from 'react-redux';
//import {updateUser} from '.actions/userActions';
//import 'antd/dist/antd.css';
const{TextArea} = Input;
const{Tabpane} = Tabs;
const{Option} = Select;

function PostJob(){

    const [jobInfo, setJobInfo] = useState({});
    const [activeTab, setActiveTab] = useState('0');

    function onFirstFormFinish(values){
        setJobInfo(values);
        setActiveTab('1');
    }

    function onFinalFormFinish(values){
        const finalObj = {...jobInfo, ...values};
        console.log(finalObj);
    }

    return (
        <section>
             <table className="jobs-table">
        <div>
            <h1>Allow Recruiter to post job here</h1>
            {/* <Tabs defaultActiveKey='0' accessKey={activeTab}>
                <Tabpane tab='Job Info' key='0'> */}
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
                                <Input/>
                                </Form.Item>
                            </Col>

                            <Col lg={8} sm={24}>
                                <Form.Item name='experience' rules={[{required: true}]} label = 'Experience'>
                                <Input/>
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
                            <Col lg={8} sm={24}>
                                    <Form.Item name='skillsRequired' rules={[{required: true}]} label = 'Skills'>
                                    <Input/>
                                    </Form.Item>
                                </Col>

                                <Col lg={8} sm={24}>
                                    <Form.Item name='minimumQualification' rules={[{required: true}]} label = 'Minimum Qualification'>
                                        <Select>
                                            <Option value='Associate'>Associate Degree </Option>
                                            <Option value='Bachelor'>Bachelor Degree </Option>
                                            <Option value='Master'>Master Degree </Option>
                                        </Select>
                                    </Form.Item>
                                </Col>

                                <Col lg={24} sm={24}>
                                    <Form.Item name='smallDesciption' rules={[{required: true}]} label = 'Brief Description'>
                                    <TextArea rows={3}/>
                                    </Form.Item>
                                </Col>

                                <Col lg={24} sm={24}>
                                    <Form.Item name='fullDesciption' rules={[{required: true}]} label = 'Full Description'>
                                    <TextArea rows={6}/>
                                    </Form.Item>
                                </Col>
                        </Row>
                        <Button htmlType='submit'>Next</Button>
                    </Form>



                {/* </Tabpane> */}
                {/* <Tabpane tab='Company Info' key='1'> */}
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
                                    <Form.Item name='companyDesciption' rules={[{required: true}]} label = 'Company Description'>
                                    <TextArea rows={6}/>
                                    </Form.Item>
                                </Col>
                            
                        </Row>
                        <Button onClick={()=> {setActiveTab('0')}}>Previous</Button>
                        <Button>Submit</Button>
                    </Form>
                {/* </Tabpane>

            </Tabs> */}
        </div>
        </table>
        </section>
      );

}
    
export default PostJob;
