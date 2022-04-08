import React from 'react';
import axios from 'axios';

class Login extends React.Component{

     constructor(){
         super();
         this.state= {
             password: '',
             emailId: ''

         }
     }
      handleOnChange = (event) => {
         var value=  event.target.value;
         var name = event.target.name;
         this.setState({[name]:value});
      }
      loginUser =(event)=>{
           event.preventDefault();
        
           console.log(this.state);

           axios.post("http://localhost:9014/login",this.state).then(
               res => {
                   console.log(res);

                   if(res.data.token){
                     localStorage.setItem('token', res.data.token);
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
              
              <form onSubmit={this.loginUser}  className="form-horizontal" action='' method="POST">
  <fieldset>
 
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
        <button className="btn btn-success">Login</button>
      </div>
    </div>
  </fieldset>
</form>

             </div>
        )
    }
}
export default Login;