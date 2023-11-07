import { Application } from "express";
import Routes from "../utils/constants/routes.json"
import UsersNetwork from "./user"

function routes(server:Application){
    server.use(Routes.users, UsersNetwork)
}

export default routes;