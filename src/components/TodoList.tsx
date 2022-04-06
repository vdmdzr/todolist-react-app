import React from 'react';
import {FilterValueType, TaskType} from "../App";
import {Button} from "./Button";
import TodoListHeader from "./TodoListHeader";
import {TasksList} from "./TasksList";
import {AddItemForm} from "./AddItemForm";

type TodoListPropsType = {
    tlId: string
    title: string
    filter: FilterValueType
    tasks: Array<TaskType>
    removeTask: (tlId: string, id: string) => void
    addTask: (tlId: string, title: string) => void
    changeFilter: (tlId: string, filter: FilterValueType) => void
    changeStatus: (tlId: string, id: string, isDone: boolean) => void
    changeTaskTitle: (tlId: string, id: string, newValue: string) => void
    changeTodoListTitle: (tlId: string, newValue: string) => void
}

const TodoList = (props: TodoListPropsType) => {

    const changeFilterHandler = (filter: FilterValueType) => {
        props.changeFilter(props.tlId, filter)
    }

    const addTask = (title: string) => {
        props.addTask(props.tlId, title)
    }

    return (
      <div>
          <TodoListHeader changeTodoListTitle={props.changeTodoListTitle}
                          tlId={props.tlId} title={props.title}/>
          <AddItemForm addItem={addTask}/>
          <TasksList tasks={props.tasks}
                     removeTask={props.removeTask}
                     changeStatus={props.changeStatus}
                     tlId={props.tlId}
                     changeTaskTitle={props.changeTaskTitle}
          />
          <div>
              <Button className={props.filter === 'all' ? 'active-filter' : ''}
                      name={'All'}
                      callback={() => changeFilterHandler('all')}/>
              <Button className={props.filter === 'active' ? 'active-filter' : ''}
                      name={'Active'}
                      callback={() => changeFilterHandler('active')}/>
              <Button className={props.filter === 'completed' ? 'active-filter' : ''}
                      name={'Completed'}
                      callback={() => changeFilterHandler('completed')}/>
          </div>
      </div>
    );
};

export default TodoList;





