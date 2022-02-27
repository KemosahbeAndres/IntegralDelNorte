import { Keys } from "./KeyTypes";

export interface ILocalPersistence{
    read(type: Keys): any
    write(data: any, type: Keys): void
    exists(type: Keys): boolean
}