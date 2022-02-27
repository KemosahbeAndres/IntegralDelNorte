import React from 'react'
import { LoginController } from '../controllers/LoginController'
import { SessionEntity } from '../models/SessionEntity'
import {LoginPresenter} from '../presenters/LoginPresenter'

export class LoginViewComponent extends React.Component{
    private loginController: LoginController

    constructor(props: {loginController: LoginController}){
        super(props)
        this.loginController = props.loginController
    }

    private tryLogin(e: any){
        //const formData = new FormData(e.target)
        e.preventDefault()
        
        let user = e.target.username.value
        let pass = e.target.password.value

        console.log("object: ", this.loginController)

        if(user != "" && pass != ""){
            console.log("Loggin with: ", user, pass)
            this.loginController.login()
        }else{
            console.log("User o password empty")
        }
    }

    render(){
        return (
            <div className='container' id='login-container'>
                <div className="login-card">
                    <h3 className='text-center'>Login</h3>
                    <form name='loginForm' className='d-grid gap-2' onSubmit={(e)=>{this.tryLogin(e)}} >
                        <input name='username' type="text" className='form-control mt-2' placeholder='RUT o Correo'/>
                        <input name='password' type="password" className="form-control mt-2" placeholder='Password'/>
                        <input name='submit' type="submit" className='btn btn-primary' value="Ingresar"/>
                    </form>
                </div>
            </div>
        )
    }

}