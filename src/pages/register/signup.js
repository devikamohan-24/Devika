import { Button, Checkbox,Input, Form } from "antd"; 

const Signup = () => { 
     return ( 
       <div className="App"> 
         <header className="App-header"> 
         <h1>SignUp</h1> 
           <Form labelCol={{ span: 10 }} wrapperCol={{ span: 14}}> 
             <Form.Item  
             name="UserName"  
             label="User Name"  
             rules={[{ 
               required: true, 
               message:"please enter your name", 
             }, 
              { whitespace: true }, 
             ]}> 
            <Input placeholder="Type your User Name"/> 
            </Form.Item> 

            <Form.Item  
                 name="email"  
                 label="Email" 
                 rules={[{ 
                   required: true, 
                   message:"please enter your email", 
                 }, 
                  { whitespace: true }, 
               ]}> 
                <Input placeholder="Type your Email" /> 
            </Form.Item> 

            <Form.Item  
               name="password"  
               label="Password" 
               rules={[ 
                 { 
                   required: true, 
                 }, 
                 { min: 6 }, 
                 { 
                   validator:(_,value) =>  
                   value && value.includes('A')  
                   ? Promise.resolve() 
                   :Promise.reject('Password does not match criteria.') 
                 }, 
               ]} 
               hasFeedback> 
               <Input.Password placeholder="Type your Password" /> 
            </Form.Item> 

            <Form.Item  
               name="confirmPassword"  
               label="Confirm Password" 
               dependencies={['password']} 
               rules={[ 
                 { 
                   required: true, 
                 }, 
                 ({getFieldValue}) => ({ 
                   validator(_, value) { 
                    if(!value || getFieldValue('password') === value){ 
                       return Promise.resolve() 
                     }
                      return Promise.reject('The two passwords that your entered does not match.');         
                   }, 
                 }), 
               ]}
               hasFeedback > 
               <Input.Password placeholder="Confirm your Password" /> 
            </Form.Item> 

            <Form.Item  
              name="agreement" 
              wrapperCol={{ span: 24 }} 
              valuePropName="checked" 
              rules={[ 
               { 
                 validator:(_,value) =>  
                 value 
                 ? Promise.resolve() 
                 :Promise.reject("To proceed, you need to agree with our terms and conditions.") 
               }, 
             ]} 
             > 
               <Checkbox>  
                 {" "} 
                 Agree to our <a href='#'>Terms and Condition</a></Checkbox> 
            </Form.Item> 
            <Button type='primary' htmlType='submit'>Register</Button> 
           </Form> 
         </header> 
       </div> 
     ); 
     }    

export default Signup; 