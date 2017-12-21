import { Survey } from './survey';

export class User {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    surveys: Survey[];
    constructor(){   }
}
