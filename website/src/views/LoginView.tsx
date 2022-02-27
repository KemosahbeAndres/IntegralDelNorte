import { el, RedomElement } from "redom";
import { LoginController } from "../controllers/LoginController";

export class LoginView{
    private loginController: LoginController
    el: RedomElement
    private form: RedomElement

    constructor(loginController: LoginController){
        this.loginController = loginController
        this.form = (
            <form name='loginForm' className='d-grid gap-2' >
                <input name='username' type="text" className='form-control mt-2' placeholder='RUT o Correo'/>
                <input name='password' type="password" className="form-control mt-2" placeholder='Password'/>
                <input name='submit' type="submit" className='btn btn-primary' value="Ingresar"/>
            </form>
        )
        this.el = (
            <div className='container' id='login-container'>
                <div className="login-card">
                    <h3 className='text-center'>Login</h3>
                    {this.form}
                </div>
            </div>
        )
        this.form.addEventListener("submit", (e: any)=>{
            e.preventDefault()
            this.loginController.login()
            this.onUserLogin()
        })
    }
    render(){
        return <h2>Login View</h2>
    }
    onUserLogin(){
        throw new Error('Evento onFormSubmit es abstracto.')
    }
    tryLogin(e: Event) {
        e.preventDefault()
        console.log("Login: ", e.target)
    }
}