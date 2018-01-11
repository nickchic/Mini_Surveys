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
      for(let i=0; i<2; i++){
        this.options[i] = new Option();
      }
    }

    addOption(): void{
        let newOption = new Option();
        this.options.push(newOption);
    }

    deleteOption(idx: number): void {
        this.options.splice(idx, 1);
    }
}
