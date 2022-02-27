import { SessionEntity } from "../models/SessionEntity"

export class LoginPresenter{
    private message: String
    private sessionEntity: SessionEntity

    constructor(sessionEntity: SessionEntity){
        this.sessionEntity = sessionEntity
        this.message = "cambiando estado..."
    }
    update(){
        throw new Error('This method is abstract')
    }

    login(user: String, password: String){
        this.sessionEntity.login({
            user: user,
            password: password
        })
        this.update()
        
    }
    changeState(){
        return this.sessionEntity.change()
    }
    isLoggedin(user = null): boolean {
        return user == null ? this.sessionEntity.hasAnyActiveSession() : this.sessionEntity.hasActiveSession(user)
    }

    getMessage(){
        return this.message
    }

}