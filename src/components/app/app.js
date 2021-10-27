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
                    name:"John C.", salary: 800, increase: 1, id: 1
                },
                {
                    name:"Alex M.", salary: 1000, increase: 0, id: 2
                },
                {
                    name:"Carl W.", salary: 3001, increase: 1, id: 3
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
                        name:  name,
                        salary: +salary,
                        increase: 0, 
                        id: this.maxId   
                    }
                    const newArrayWithAddedObj = [...data];
                    newArrayWithAddedObj.push(newObj)
                    return {
                        data:newArrayWithAddedObj
                    }
                }
                
            })
               
        }
    } 
        


    render() {
        return(
            <div className="app">
                <AppInfo/>
                
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm
                    onAdd={this.addItem}/>
                
            </div>
        )
    }
}

export default App;