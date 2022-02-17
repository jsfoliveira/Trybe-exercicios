import React from "react";

const Tasks = (value) => {
    return (
        <li>
          {value}
        </li>
    );
  }

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

class Task extends React.Component {
    render() {
        return (
            
                <ul>
                    { tarefas.map(tarefa => Tasks(tarefa)) }
                </ul>
            
        )
    }
}

export default Task;