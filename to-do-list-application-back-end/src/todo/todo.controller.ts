import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

constructor(private todoService:TodoService){

}

    @Get()
    getAlltoDo(){
        //todo:impletemet
       return this.todoService.getAllToDos();
    }
    @Post()
    createToDo() {

        
    }

}
