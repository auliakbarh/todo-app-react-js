import React, {Component} from 'react';
import Headers from "../components/headers";
import List from "../components/list";

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myToDo: [
                {
                    id: 0,
                    title: 'test',
                    done: false
                },
                {
                    id: 1,
                    title: 'test',
                    done: false
                }
            ]
        }
    }

    toggleDone = (id) => {
        let list = this.state.myToDo;
        let index = list.findIndex(item => item.id === id);
        list[index].done = !list[index].done;
        this.setState({
            myToDo: list
        })
    };

    deleteItem = (id) => {
        let list = this.state.myToDo;
        this.setState({
            myToDo: list.filter(item => item.id !== id)
        })
    };

    addItem = (title) => {
        let list = this.state.myToDo;
        if(list){
            let id = list.length + 1;
            list.push({
                id,
                title,
                done: false
            });

            this.setState({
                myToDo: list
            })
        }else{
            this.setState({
                myToDo: [{
                    id: 0,
                    title,
                    done: false
                }]
            })
        }
    };


    render() {

        const container = {
            width: '800px'
        };

        return (
            <div style={container}>
                <Headers addItem={this.addItem} />
                <List items={this.state.myToDo} onClick={this.toggleDone} deleteItem={this.deleteItem} />
            </div>
        );
    }
}

export default Index;
