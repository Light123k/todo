import React, { Component } from 'react'

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [{ task: 'check mails', id: 1 }, { task: 'read book', id: 2 }, { task: 'assignment', id: 3 }],
            currtask: ''
        }
    }

    handlechange = (e) => {
        this.setState({
            currtask: e.target.value
        })
    }

    handlesubmit = () => {
        this.setState({
            tasks: [...this.state.tasks, { task: this.state.currtask, id: this.state.tasks.length + 1 }],
            currtask: ''
        })
    }
    handledelete = (id) => {
        let narr = this.state.tasks.filter((taskobj) => {
            return taskobj.id !== id
        })
        this.setState({
            tasks: [...narr]
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.currtask} onChange={this.handlechange} />
                <button onClick={this.handlesubmit}>Submit</button>
                <ul>
                    {
                        this.state.tasks.map((taskobj) => (
                            <li key={taskobj.id}>
                                <p>{taskobj.task}
                                    <button onClick={() => this.handledelete(taskobj.id)}>Delete</button>
                                </p>
                            </li>
                        ))
                    }
                </ul>

            </div>
        )
    }
}

//export const arr = [1, 2, 3]

export default Todo
