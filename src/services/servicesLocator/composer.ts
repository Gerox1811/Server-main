import {Connection} from "mysql2"
import { DependencyLocator } from "./dependenciesLocator";
import database from "../database"
import {UserUtils} from "../../utils/users/index"


const di = DependencyLocator.getInstance();

const types = {
    database: "database-conexion",
    Users: "Users-utils"
}
function getDatabase(){
    return di.get(types.database)
}

function init(){
    di.bindLazySingleton(types.database, ()=> database);
    di.bindFactory(types.Users,()=> 
    new UserUtils(
        getDatabase()
        )
    )
}

