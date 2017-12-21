import { User } from './user';
import { Option } from './option';

export class Survey {
    _id: string;
    question: string;
    options: Option[];
    user: User;
    constructor(){
      this.question = '';
      this.options = [];
      for(let i=0; i<4; i++){
        this.options[i] = new Option();
        this.options[i].option = '';
        this.options[i].votes = 0;
      }
    }
}
