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
                    name:"John C.", salary: 800, increase: true, rise:false, id: 1
                },
                {
                    name:"Alex M.", salary: 1000, increase: false, rise:true, id: 2
                },
                {
                    name:"Carl W.", salary: 3001, increase: true, rise:false, id: 3
                }
        
            ],
            term: '',
            riseFilter: '',
            salaryOverTh: '',

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

    addItem = (name, salary) => {
        let check = 0;
        if (name && salary && name.length > 1) {
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

        
    onToggleProp = (id, prop) => {
            this.setState(({data}) => ({
                data: data.map(item => { // получаем массив с одним новым/изм настоящим  объектом и ссылками на объекты из this.state.data
                    if (item.id === id) {
                        return {...item, [prop]: !item[prop]}
                    }
                    return item;
                })
            }))
    
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({
            term: term
        })
    }

    onRiseFilter = () => {
        this.onAllEmp();
        this.setState(({data}) => ({
            riseFilter: data.filter(item => item.rise)
        }))
    }

    onAllEmp = () => {
        this.setState({
            riseFilter: '',
            salaryOverTh: '' 
        })
    }

    onSalaryOverTh = () => {
        this.onAllEmp();
        this.setState(({data}) => ({
            salaryOverTh: data.filter(item => item.salary > 1000)
        }))

    }

    render() {
        const {data, term, riseFilter, salaryOverTh} = this.state;
        const countEmployees = this.state.data.length;
        const countIncrease = this.state.data.filter(item => item.increase === true).length;
        let visibleData = this.searchEmp(data, term);


        if (riseFilter) {
            visibleData = riseFilter;
        } 
        if (salaryOverTh) {
            visibleData = salaryOverTh;
        }

        return(
            <div className="app">
                <AppInfo 
                    countEmployees={countEmployees}
                    countIncrease={countIncrease}/>
        
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>

                    <AppFilter 
                        onRiseFilter={this.onRiseFilter}
                        onAllEmp={this.onAllEmp}
                        onSalaryOverTh={this.onSalaryOverTh}
                        />
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    />
                <EmployeesAddForm
                    onAdd={this.addItem}/>
                
            </div>
        )
    }
}

export default App;