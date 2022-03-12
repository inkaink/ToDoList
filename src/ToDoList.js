import { Component } from "react"


export class ToDoList extends Component {
    state={
        userInput: "",
        toDoList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addCase(input) {
        if(input === "") {
            alert("Пожалуйста, введите текст!")
        }
        else {
            let listArray = this.state.toDoList;
            listArray.push(input);
            this.setState({toDoList: listArray, userInput:""});
        }
    }

    crossWord(e) {
        const li = e.target;
        li.classList.toggle('crossed');
    }

    deleteCase() {
        let listArray = this.state.toDoList;
        listArray = [];
        this.setState({toDoList: listArray});
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="container">
                        <input type="text"
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput} />
                    </div>
                    <div className="container">
                        <button onClick = {()=> this.addCase(this.state.userInput)} className="btn add">Добавить</button>
                    </div>
                    <div className="container">
                        <ul>{this.state.toDoList.map((item, index) => (
                            <li onClick={this.crossWord}
                            key={index}>{item}</li>
                            ))}</ul>
                    </div>
                    <div className="container">
                        <button onClick = {()=> this.deleteCase(this.state.userInput)} className="btn delete">Удалить</button>
                    </div>
                </form>
            </div>
        )
    }
}