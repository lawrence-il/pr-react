import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    name:"John C.", salary: 800, increase: true, id: 1
                },
                {
                    name:"Alex M.", salary: 1000, increase: false, id: 2
                },
                {
                    name:"Carl W.", salary: 3001, increase: true, id: 3
                }
        
            ]

        }
        this.maxId = this.state.data.length + 1;
        
    }

    deleteItem = (id) => { 
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArray = [...data]
            newArray.splice(index, 1);
            return {
                data: newArray // data.filter(item => item.id !== id)
            }
          
        })
    }

    addItem = (name, salary, e) => {
        e.preventDefault();
        let check = 0;
        if (name && salary) {
            this.setState(({data}) => {
                data.forEach(v => {
                    if (v.name === name) {
                        check = 1
                    }
                })
                if (check === 0) {
                    const newObj = {
                        name: name,
                        salary: +salary,
                        increase: 0,
                        id: this.maxId
                    }
                    const newArrayWithAddedObj = [...data];
                    newArrayWithAddedObj.push(newObj)
                    return {
                        data: newArrayWithAddedObj
                    }
                }

            })

        }
    }
        
    onToggleIncrease = (id) => {
        // this.setState(({data}) => { // this.state передаётся по умолчанию
        //     // const index = data.findIndex(elem => elem.id === id);
        //     // const newItem = {...data[index], increase: !data[index].increase}
        //     // // const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]; если так то 2 стр ниже не нужны
        //     // const newArray = [...data]; // новый массив в котором лежат ссылки на объекты в data
        //     // newArray[index] = newItem; // ссылка заменяется на нормальный объект
        //     // return {
        //     //     data: newArray
        //     // }                   
        // })
        this.setState(({data}) => ({
            data: data.map(item => { // получаем массив с одним новым/изм настоящим  объектом и ссылками на объекты из this.state.data
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))

    }

    onToggleRise = (id) => {
        console.log(`Rise this ${id}`);
    }

    countEmployees = () => this.state.data.length;

    countRise = () => this.state.data.filter(item => item.increase === true).length;
        
    render() {
        return(
            <div className="app">
                <AppInfo 
                    countEmployees={this.countEmployees}
                    countRise={this.countRise}/>
        
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
                <EmployeesAddForm
                    onAdd={this.addItem}/>
                
            </div>
        )
    }
}

export default App;