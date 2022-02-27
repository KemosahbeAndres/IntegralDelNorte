import { LoginController } from "../controllers/LoginController";
import { LoginView } from "./LoginView";
import { View } from "./View";
import { el, RedomElement } from 'redom'
import { VNavigatorView } from "./VNavigatorView";

export class UserView {
    private loginController: LoginController
    el: HTMLElement
    private navigator: VNavigatorView

    constructor(loginController: LoginController){
        this.loginController = loginController
        this.navigator = new VNavigatorView([
            "Home",
            "Cursos",
            "Logout"
        ])
        this.navigator.onItemClick = (e)=>{
            console.log("Link clicked. ", e.target.link)
            if(e.target.link == "logout"){
                this.loginController.logout()
                if(this.onLogout != undefined){
                    this.onLogout()
                }
            }
        }
        this.el = (
            <div>
                {this.navigator}
            </div>
        )
    }

    onLogout?(): void
}