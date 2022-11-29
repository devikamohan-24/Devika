import React, { Component } from 'react';
import { Button, Input, Form } from "antd"; 

export default class Login extends Component {
  constructor(props) {
    super (props)
    this.state={
       email: "",
       password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
  }
// const Login = () => { 
render() {
  return ( 
    <div className="App"> 
      <header className="App-header"> 
      <h1>Login</h1> 
      <Form labelCol={{ span: 10 }} wrapperCol={{ span: 14}} >
       <Form.Item  
                 name="email"  
                 label="Email" 
                 rules={[{ 
                   required: true, 
                   message:"please enter your email", 
                 }, 
                  { whitespace: true }, 
               ]}> 
               <Input placeholder="Type your Email" 
               
               onChange={(e) => this.setState({ email: e.target.value })}
               /> 
        </Form.Item>
        <Form.Item  
               name="password"  
               label="Password" 
              //  rules={[ 
              //    { 
              //      required: true, 
              //    }, 
              //    { min: 6 }, 
              //    { 
              //      validator:(_,value) =>  
              //      value && value.includes('A')  
              //      ? Promise.resolve() 
              //      :Promise.reject('Password does not match criteria.') 
              //    }, 
              //  ]} 
              //   hasFeedback
                >
                <Input.Password placeholder="Type your Password" 
                onChange={(e) => this.setState({ password: e.target.value })}
                /> 
        </Form.Item>  
        <Button type='primary' onSubmit={this.handleSubmit} htmlType='Submit'>Login</Button> <br></br> 
        <Button type='primary' htmltype='submit'>Forgot Password</Button> 
      </Form> 
      </header> 
    </div> 
  ); 
}  
}


// export default Login; 