import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesListItem from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
    return(
        <div className="app">
            <AppInfo/>
            
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesListItem/>
            <EmployeesAddForm/>
            
        </div>
    )
}

export default App;