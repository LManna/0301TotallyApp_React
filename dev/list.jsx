import './list.css';
import React from "react";
import ReactDOM from "react-dom";


var TodoItems = React.createClass({
    render: function () {
        var todoEntries = this.props.entries;
        function createTask(item){
            return <li key={item.key}>{item.text}</li>
        }
        var listItems = todoEntries.map(createTask);
        return (
            <ul className="theList">
                {listItems}
            </ul>
        )
    }
})

var TodoList = React.createClass({
    getInitialState: function () {
        return {
            items:[],
            color:"red"
        }
    },
    addItem: function (e) {
        var itemArray = this.state.items;

        itemArray.push(
            {
                key:Date.now(),
                text: this.textInput.value
            }
        )
        this.setState({
            items: itemArray
        })
        this.textInput.value = "";
        e.preventDefault();
    },
    clickHandle: function () {
        this.setState({color:this.color.value});
        this.color.value = ""
        this.color.focus();
    },
    render: function () {
        var colorCss = {
            backgroundColor: this.state.color
        }
        return (
            <div className="main">
                <div className="todoListMain">
                    <div className="header">
                        <form onSubmit={this.addItem}>
                            <input placeholder="enter task" ref={(input)=>{this.textInput=input;}}>

                            </input>
                            <button type="submit">add</button>
                        </form>
                    </div>
                    <TodoItems entries={this.state.items}/>
                </div>
                <div className="colorContent">
                    <p style={colorCss}>{this.state.color}</p>
                    <div>
                        <input type="text" placeholder="enter color" ref={(color)=>{this.color=color}}/>
                        <button onClick={this.clickHandle}>go</button>
                    </div>
                </div>
            </div>
        )
    }
})

ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    document.querySelector("#container")
)