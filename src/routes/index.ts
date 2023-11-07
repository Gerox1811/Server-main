
import { Application } from 'express';
import  UserNetwork  from '../network/user';
import Routes from '../utils/constants/routes.json';

function routes (app: Application){
    app.use(Routes.users, UserNetwork);
}

export default routes;