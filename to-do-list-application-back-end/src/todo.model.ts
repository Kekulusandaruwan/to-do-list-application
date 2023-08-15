export interface ToDo{
    id: number;
    description:string;
    status:TodoStatus;
}
export enum TodoStatus{
    COMPLETED,INCOMPLETED
}