import EmployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'


const EmployeesList = ({data, onDelete, onToggleProp, onChangeSalary}) => {
    const elements = data.map(item => {
            const {id, ...itemProps} = item; // здесь берём id для метода
            return (
                <EmployeesListItem 
                    key={id}    
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleProp={(e) => onToggleProp(id, e.currentTarget.dataset.toggle)}
                    onChangeSalary={(e) => onChangeSalary(e, id)}/>  
            )

    })
    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;