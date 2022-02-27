import { SessionEntity } from "../models/SessionEntity";

export class LoginController {
    private sessionEntity: SessionEntity
    constructor(sessionEntity: SessionEntity){
        this.sessionEntity = sessionEntity
    }
    login(){
        this.sessionEntity.login({
            user: "1123",
            password: "passwordu"
        })
        this.onLogin()
    }
    logout(){
        this.sessionEntity.logout()
    }
    isLoggedin(user = null){
        return user != null ? this.sessionEntity.hasActiveSession(user) : this.sessionEntity.hasAnyActiveSession()
    }

    onLogin(){}
}