import {mount, RedomElement, el, unmount, setChildren} from 'redom'
import { LoginController } from '../controllers/LoginController'
import { LoginView } from './LoginView'
import { UserView } from './UserView'

export class View{
    private loginController: LoginController
    private userView: UserView
    private loginView: LoginView

    constructor(loginController: LoginController){
        this.loginController = loginController
        this.userView = new UserView(this.loginController)
        this.userView.onLogout = () => {
            this.interact()
        }
        this.loginView = new LoginView(this.loginController)
        this.loginView.onUserLogin = () => {
            this.interact()
        }
    }
    render(child: any, parent = null){
        setChildren(
            parent==null ? document.body : parent,
            child
        )
    }
    interact(){
        if(this.loginController.isLoggedin()){
            this.render(this.userView)
        }else{
            this.render(this.loginView)
        }
    }
}