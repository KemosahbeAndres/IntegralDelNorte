import { ILocalPersistence } from "./ILocalPersistence"
import { IRemotePersistence } from "./IRemotePersistence"
import { Keys } from "./KeyTypes"

export class SessionEntity{
    private sessionInfo: SessionPayload
    private local: ILocalPersistence
    private remote: IRemotePersistence

    constructor(repository: ILocalPersistence, remote: IRemotePersistence){
        this.sessionInfo = new SessionPayload()
        this.local = repository
        this.remote = remote
        console.log("LAST local: ", this.local)
        console.log("NEW local: ", this.local)
        // this.local.localUpdated = (local: boolean) => {
        //     this.repo.write(local, Keys.Login)
        // }
    }
    // private updatelocal(){
    //     this.local.setlocal(this.repo.read(Keys.Login))
    // }
    hasActiveSession(user: String): boolean{
        return this.local.getlocal()
    }
    hasAnyActiveSession(): boolean{
        console.log("hasActiveSession: ", this.local)
        return this.local.getlocal()
    }
    change(){
        this.local.setlocal(!this.local.getlocal())
        console.log("local Changed: ",this.local)
        return this.local.getlocal()
    }
    login(params:{user: String, password: String}){
        this.local.setlocal(true)
        console.log("LOGGED IN", this.local)
        return this.local.getlocal()
    }
    logout(){
        this.local.setlocal(false)
        console.log("LOGGED OUT", this.local)
    }
    private isSessionTimeout(): boolean {

    }
    private isSessionValid(): boolean {

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
