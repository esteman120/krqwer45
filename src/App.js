import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: '',
      classTarea: '',

    }
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li key={task.id}
            className={task.done === true ? "done" : null} onClick={this.SelectTarea.bind(this, task.id)}>{task.name}</li>)}
          </ul>
          <form onSubmit={this.GuardarTarea.bind(this)}>
            <input type="text" className={this.state.classTarea} id="new-task" placeholder="Ingresa una tarea y oprime Enter" onChange={this.ObtenerTarea.bind(this)} value={this.state.newTask} />
          </form>
        </div>
      </div>
    )
  }

  ObtenerTarea(event){
    this.setState({
      newTask: event.target.value,
      classTarea: ""
    })
  }

  SelectTarea(id){
     let index = this.state.tasks.findIndex(x=> x.id === id);
     let done = this.state.tasks[index].done;
     this.state.tasks[index].done = !done
      this.setState({
        tasks: this.state.tasks        
      })
  }

  GuardarTarea(event){
    event.preventDefault();
    if (this.state.newTask.length > 0) {
      this.setState({
        tasks: this.state.tasks.concat({
          id: this.state.tasks.length + 1,
          name:this.state.newTask,
          done: false
        }),
        newTask:""
      })
    }
    else {
      this.setState({
        classTarea: "error"
      })
    }
  }
}

export default App;
