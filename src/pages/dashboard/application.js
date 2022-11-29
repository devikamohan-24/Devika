import { Steps, Form, Input, Select, DatePicker, Button, InputNumber, Upload } from "antd";
import { ProfileOutlined, InfoCircleOutlined, FileProtectOutlined, CheckOutlined } from "@ant-design/icons";
import { useState, onFinishPersonalForm, Values, onFinish, onChange, PersonalInfo, onFinishDocumentForm, Education, loginDetails, setpNumber } from "react";

function Applicationform () {
  const [current, setCurrent] = useState(0);
  const [PersonalInfo, setPersonalInfo] = useState(null);

  const onFinishPersonalForm = (values) => {
  setPersonalInfo(Values);
  setCurrent(1)
  };
  const onFinishEducationForm = (values) => {
    setPersonalInfo(Values);
    setCurrent(2)
    };
  const onFinishDocumentForm = (values) => {
      setPersonalInfo(Values);
      setCurrent(3)
      };

  const forms = [
    <PersonalForm 
    onFinish={onFinishPersonalForm}
    initialValues={PersonalInfo}/>,
    <EducationForm 
    onFinish={onFinishEducationForm}
    initialValues={PersonalInfo}/>,
    <DocumentForm 
    onFinish={onFinishDocumentForm} 
    initialValues={Education}/>,
    <finish />,
  ];
  const isStepDisabled=(stepNumber)=>{
    if(stepNumber===0){
        return false
    }
    if(setpNumber===1){
      return loginDetails === null || PersonalInfo===null 
    }
    // if(setpNumber===2){
    //   return loginDetails === null || Education===null 
    // }
    // if(setpNumber===3){
    //   return loginDetails === null 
    // }
  }
  return (
  <div className="App">
    <Steps style={{ padding:"32px 36vh" }} 
    onChange={setCurrent} 
    current={current}
    >
      <Steps.Step disabled={isStepDisabled(0)} title='Personal Info' icon={<ProfileOutlined />} />
      <Steps.Step disabled={isStepDisabled(1)} title='Education' icon={<InfoCircleOutlined />} />
      <Steps.Step disabled={isStepDisabled(2)} title='Documents Section' icon={<FileProtectOutlined />} />
      <Steps.Step disabled={isStepDisabled(3)} title='Finish' icon={<CheckOutlined />} />


    </Steps>
    {forms[current]}

  </div>
  );
}

function PersonalForm({onFinish}) {
  return <Form onFinish={({onFinish})}
  style={{ padding:"8px 30%" }} >
  <Form.Item 
            name={"FirstName"} 
            label="First Name" 
            rules={[{
              required: true,
              message:"please enter your FirstName",
            },
            { whitespace: true },
            ]}>
              <Input placeholder="Type your FirstName"/>
  </Form.Item>

  <Form.Item 
            name="SecondName" 
            label="Second Name" 
            rules={[{
            required: true,
            message:"please enter your Second Name",
            },
          { whitespace: true },
            ]}>
            <Input placeholder="Type your Second Name"/>
    </Form.Item>  

    <Form.Item 
              name="gender" 
              label="Gender">
              <Select placeholder="Select your gender" >
                <Select.Option value='male'>Male</Select.Option>
                <Select.Option value='female'>Female</Select.Option>
              </Select>
            </Form.Item>    
 {/* //DOB */}        
 <Form.Item 
            name="dob" 
            label="Date of Birth"
            rules={[{
                required: true,
                message:" Date of Birth",
              },
               { whitespace: true },
            ]}>
              <DatePicker picker="date" placeholder="Chose date of birth" /> 
            </Form.Item>

    {/* //Personal Email */}

    <Form.Item 
            name="FullAddress" 
            label="Full Address"
            rules={[{
            required: true,
             message:"please enter your Full Address",
                },
            { whitespace: true },
              ]}>
            <Input placeholder="Type your Full Address" />
            </Form.Item>  

                       
    <Form.Item 
            name="PostCode" 
            label="Post Code"
            rules={[{
            required: true,
             message:"please enter your Post Code",
                },
            { whitespace: true },
              ]}>
            <Input placeholder="Type your Post Code" />
            </Form.Item>      

            <Button type='primary' htmlType='Save'>Save</Button>
            <Button type='primary' htmlType='submit'>Next</Button>             
            </Form>
}

function EducationForm({}) {
  return ( <Form onFinish={({onFinish})}
  style={{ padding:"8px 30%" }} >
    <Form.Item 
            name="Are you a student" 
            label="Are you a student" 
            
            >
            <Select placeholder="Are you a student" >
                <Select.Option value='yes'>Yes</Select.Option>
                <Select.Option value='no'>No</Select.Option>
            </Select>
        
        </Form.Item> 
    {/* //University Name */}

    <Form.Item 
            name="UniversityName" 
            label="University Name" 
            rules={[{
              required: true,
              message:"please enter your University Name",
            },
             { whitespace: true },
            ]}>
              <Input placeholder="Type your University Name"/>
            </Form.Item>

            
         <Form.Item 
            name="CourseOfStudy" 
            label="Course Of Study" 
            rules={[{
              required: true,
              message:"please enter CourseOfStudy",
            },
             { whitespace: true },
            ]}>
              <Input placeholder="Type your Course Of Study"/>
          </Form.Item>  

          <Form.Item 
            name="University Email" 
            label="University Email" 
            >
                <Input placeholder="Type your Course Of Study"/>
            </Form.Item>

            <Form.Item 
            name="UniversityApproval" 
            label="University Approval" 
            >
            <Select placeholder="University Approval Needed" >
                <Select.Option value='yes'>Yes</Select.Option>
                <Select.Option value='no'>No</Select.Option>
            </Select>      
        </Form.Item> 

        
        <Form.Item 
            name="ISD" 
            label="Internship Start Date" 
            >
           <DatePicker picker="date" placeholder="Chose Course End Date" /> 
            </Form.Item>   

            

        <Form.Item 
            name="IED" 
            label="Internship End Date"
            >
              <DatePicker picker="date" placeholder="Chose Internship End Date" /> 
            </Form.Item>


        <Form.Item 
            name="ID" 
            label="Internship Duration" 
            
            >
              <InputNumber min={1} max={12} defaultValue={3} onChange={onChange} />     
        </Form.Item>

        <Button type='primary' htmlType='submit'>Save</Button>
        <Button type='primary' htmlType='submit'>Next</Button>    
  </Form>
  );
}


function DocumentForm({onFinish}) {
  return (<Form onFinish={({onFinish})}
  labelCol={{ span: 27 }} wrapperCol={{ span: 14}}
  style={{ padding:"15px 30%" }} >
 <Form.Item 
        name="CV" 
        label="Resume" 
        rules={[{
          required: true,
          message:"please upload Cv",
        },
        ]}>
             
    <Upload
    // listType='picture'
    actions={"http://localhost:3002//"}
    showUploadList={{ showRemoveIcon: true}}
    // showUploadList={{ showRemoveIcon: false}}
    accept=".pdf,.doc"
    defaultFileList={[
      {
      name: "exising_file.pdf",
      status:"uploading",
      url: "https:/</Form.Item>/ww.google.com",
      },

    ]}
    >
      
      <button> click Upload</button>
    </Upload>

       </Form.Item>



       <Form.Item 
        name="Passport" 
        label="Passport" 
        rules={[{
          required: true,
          message:"please upload Passport",
        },
        ]}>
             
    <Upload
    // listType='picture'
    actions={"http://localhost:3002//"}
    showUploadList={{ showRemoveIcon: true}}
    // showUploadList={{ showRemoveIcon: false}}
    accept=".pdf,.doc"
    defaultFileList={[
      {
      uid: "abc",
      name: "exising_file.pdf",
      status:"uploading",
      url: "https:/</Form.Item>/ww.google.com",
      },

    ]}
    // iconRender={() => {
    //   return <Spin></Spin>;
    // }}
    // progress={{
    //   strokeWidth: 3,
    //   strokeColor:{
    //     "0%": "#f0f",
    //     "100%": "#ff0",

    //   },
    // }}
    >
      
      <button> click Upload</button>
    </Upload>

       </Form.Item>

<Form.Item 
        name="BRP" 
        label="BRP" 
        rules={[{
          required: true,
          message:"please upload BRP",
        },
        ]}>
             
    <Upload
    // listType='picture'
    actions={"http://localhost:3002//"}
    showUploadList={{ showRemoveIcon: true}}
    // showUploadList={{ showRemoveIcon: false}}
    accept=".pdf,.doc"
    defaultFileList={[
      {
      uid: "abc",
      name: "exising_file.pdf",
      status:"uploading",
      url: "https:/</Form.Item>/ww.google.com",
      },

    ]}
    // iconRender={() => {
    //   return <Spin></Spin>;
    // }}
    // progress={{
    //   strokeWidth: 3,
    //   strokeColor:{
    //     "0%": "#f0f",
    //     "100%": "#ff0",

    //   },
    // }}
    >
      
      <button> click Upload</button>
    </Upload>

       </Form.Item>

<Form.Item 
        name="Address Profe" 
        label="Address Profe" 
        rules={[{
          required: true,
          message:"please upload Address Profe",
        },
        ]}>
             
    <Upload
    // listType='picture'
    actions={"http://localhost:3002//"}
    showUploadList={{ showRemoveIcon: true}}
    // showUploadList={{ showRemoveIcon: false}}
    accept=".pdf,.doc"
    defaultFileList={[
      {
      uid: "abc",
      name: "exising_file.pdf",
      status:"uploading",
      url: "https:/</Form.Item>/ww.google.com",
      },

    ]}
    // iconRender={() => {
    //   return <Spin></Spin>;
    // }}
    // progress={{
    //   strokeWidth: 3,
    //   strokeColor:{
    //     "0%": "#f0f",
    //     "100%": "#ff0",

    //   },
    // }}
    >
      
      <button> click Upload</button>
    </Upload>

       </Form.Item>                     


       <Button type='primary' htmlType='Save'>Save</Button>
           <Button type='primary' htmlType='Submit'>Submit</Button>  



  </Form>
  );
}

function Finish()

{   return ( <>
<h1>Successfully Finished</h1>
 <Button type="primary">Finish</Button>
 </>
 );
} 
export default Applicationform;