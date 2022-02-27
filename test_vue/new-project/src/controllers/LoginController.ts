import { SessionEntity } from "../models/SessionEntity";

export class LoginController {
    private sessionEntity: SessionEntity
    constructor(sessionEntity: SessionEntity){
        this.sessionEntity = sessionEntity
    }
}