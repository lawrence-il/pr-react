import './app-filter.css';

const AppFilter = ({onRiseFilter, onAllEmp, onSalaryOverTh}) => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light" 
                type="button"
                onClick={onAllEmp}>
                    Все сотрудники
            </button>
            <button 
                className="btn btn-outline-light" 
                type="button"
                onClick={onRiseFilter}>
                    На повышение
            </button>
            <button 
                className="btn btn-outline-light" 
                type="button"
                onClick={onSalaryOverTh} >
                    З/П больше 1000$
            </button>
        </div>
    )

}

export default AppFilter;