import { Keys } from "./KeyTypes";

export interface IRemotePersistence {
    exists(id: string, type: Keys): boolean
    
}