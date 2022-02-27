import { ILocalPersistence } from "./ILocalPersistence";
import { Keys } from "./KeyTypes";

export class SessionPersistence implements ILocalPersistence{
    exists(type: Keys): boolean {
        let result = JSON.parse(sessionStorage.getItem(type) as string)
        return result == null ? false : true
    }
    read(type: Keys): any{
        if(this.exists(type)) return JSON.parse(sessionStorage.getItem(type) as string)
        return null
    }
    write(data: any, type: Keys): void {
        sessionStorage.setItem(type, JSON.stringify(data))
    }
    
}