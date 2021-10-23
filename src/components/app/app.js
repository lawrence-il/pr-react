import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [

        {
            name:"John C.", salary: 800, increase: 1,
        },
        {
            name:"Alex M.", salary: 1000, increase: 0,
        },
        {
            name:"Carl W.", salary: 3001, increase: 1,
        }

    ]

    return(
        <div className="app">
            <AppInfo/>
            
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
            
        </div>
    )
}

export default App;