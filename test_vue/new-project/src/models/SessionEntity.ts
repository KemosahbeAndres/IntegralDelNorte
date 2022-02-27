
import { Keys } from "./KeyTypes"

export class SessionEntity{
    private sessionInfo: SessionPayload
    //private local: ILocalPersistence
    //private remote: IRemotePersistence

    constructor(){
        this.sessionInfo = new SessionPayload()
        //this.local = repository
        //this.remote = remote
        //console.log("LAST local: ", this.local)
        //console.log("NEW local: ", this.local)
        // this.local.localUpdated = (local: boolean) => {
        //     this.repo.write(local, Keys.Login)
        // }
    }
    // private updatelocal(){
    //     this.local.setlocal(this.repo.read(Keys.Login))
    // }
    hasActiveSession(user: String): boolean{
        return true//this.local.read(Keys.Login)
    }
    hasAnyActiveSession(): boolean{
        //console.log("hasActiveSession: ", this.local)
        return true //this.local.read(Keys.Login)
    }
    change(){
        //this.local.write(!this.local.read(Keys.Login), Keys.Login)
        //console.log("local Changed: ",this.local)
        //return this.local.read(Keys.Login)
    }
    login(params:{user: String, password: String}){
        //this.local.setlocal(true)
        //console.log("LOGGED IN", this.local)
        return true //this.local.read(Keys.Login)
    }
    logout(){
        //this.local.write(false)
        //console.log("LOGGED OUT", this.local)
    }
    private isSessionTimeout(): boolean {
        return false
    }
    private isSessionValid(): boolean {
        return false
    }
}

export class SessionPayload {
    private token: string
    private security: string
    private uid: string

    constructor(payload: {token: string, uid: string} = {token: "", uid: ""}){
        this.token = payload.token
        this.security = btoa(Date.now()+navigator.userAgent)
        this.uid = payload.uid
    }
    toJSON(): string {
        return JSON.stringify({token: this.token, security: this.security, uid: this.uid})
    }
}
