import React from 'react';
import axios from 'axios';

class Register extends React.Component{

     constructor(){
         super();
         this.state= {
             username: '',
             password: '',
             emailId: ''

         }
     }
      handleOnChange = (event) => {
         var value=  event.target.value;
         var name = event.target.name;
         this.setState({[name]:value});
      }
      registerUser =(event)=>{
           event.preventDefault();
        
           console.log(this.state);

           axios.post("http://localhost:9014/register",this.state).then(
               res => {
                   console.log(res)

                    if(res.data.token){
                      localStorage.setItem('token',res.data.token);
                      this.props.history.push("/dashboard");
                    }
               },
               err => {
                   console.log(err);
               }
           )
      
      }

    render(){
        return(
            <div>
              
              <form onSubmit={this.registerUser}  className="form-horizontal" action='' method="POST">
  <fieldset>
    <div id="legend">
      <legend className="">Register</legend>
    </div>
    <div className="control-group">
      
      <label className="control-label"  for="username">Username</label>
      <div className="controls">
        <input onChange= {this.handleOnChange} type="text" id="username" name="username" placeholder="" className="input-xlarge"/>
       
      </div>
    </div>
 
    <div className="control-group">
     
      <label className="control-label" for="email">E-mail</label>
      <div className="controls">
        <input onChange= {this.handleOnChange} type="text" id="email" name="emailId" placeholder="" className="input-xlarge"/>
        
      </div>
    </div>
 
    <div className="control-group">
      
      <label className="control-label" for="password">Password</label>
      <div className="controls">
        <input onChange= {this.handleOnChange} type="password" id="password" name="password" placeholder="" className="input-xlarge"/>
       
      </div>
    </div>
  <br></br>
    <div className="control-group">
      <div className="controls">
        <button className="btn btn-success">Register</button>
      </div>
    </div>
  </fieldset>
</form>

             </div>
        )
    }
}
export default Register;