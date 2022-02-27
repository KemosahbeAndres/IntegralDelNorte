import { mount, el, RedomElement } from "redom";
import { LoginController } from "./controllers/LoginController";
import { SessionEntity } from "./models/SessionEntity";
import { SessionPersistence } from "./models/SessionPresistence";
import { View } from "./views/View";



export class LMS {
    private view: View
    private loginController: LoginController
    private sessionEntity: SessionEntity
    private parent: any
    constructor(parent = null){
        this.parent = parent
        this.sessionEntity = new SessionEntity(new SessionPersistence())
        this.loginController = new LoginController(this.sessionEntity)
        this.view = new View(this.loginController)
    }

    start(){
        this.view.interact()
    }
}


















// export class LMS extends React.Component{
//     private loginPresenter: LoginPresenter

//     constructor(props: any){
//         super(props)
//         this.loginPresenter = new LoginPresenter(new SessionEntity())
//         this.loginPresenter.update = ()=>{
//             this.forceUpdate()
//         }
//     }
//     changeState(){
//         if(this.loginPresenter.changeState()){
//             this.forceUpdate()
//         }
//     }
    
//     render(){
//         let params = {
//             loginPresenter: this.loginPresenter
//         }
        
//         if(this.loginPresenter.isLoggedin(null)){
//             console.log("Rendering: USERVIEW")
//             return (
//                 <React.StrictMode>
//                 <button className="btn btn-primary" onClick={() => {this.changeState()}}>CLICK</button>
//                 <UserView {...params}/>
//                 </React.StrictMode>
//             )
//         }else{
//             console.log("Rendering: LOGINVIEW")
//             return (
//                 <React.StrictMode>
//                 <button className="btn btn-primary" onClick={() => {this.changeState()}}>CLICK</button>
//                 <LoginView {...params}/>
//                 </React.StrictMode>
//             )
//         }
//     }
// }

// export class APP extends React.Component{
//     private loginView: LoginView
//     private loginController: LoginController
//     private sessionEntity: SessionEntity

//     constructor(props: any){
//         super(props)
//         this.sessionEntity = new SessionEntity()
//         this.loginController = new LoginController(this.sessionEntity)
//         this.loginView = new LoginView(this.loginController)
//         this.loginView.forceUpdate = ()=>{
//             this.forceUpdate()
//         }
//     }

//     render(){
//         return this.loginView.render()
//     }
// }

