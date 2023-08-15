import { Injectable } from '@nestjs/common';
import { ToDo,TodoStatus } from 'src/todo.model';

@Injectable()
export class TodoService {

    private toDos:ToDo[]=[];
    getAllToDos(){
        return this.toDos;
    }
    createToDo(id:number,description:string,status:TodoStatus){
            const toDo={
                id,
                description,
                status
            }
    }
}
