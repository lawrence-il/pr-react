import EmployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'

// Добавляем здесь изменяющиеся данные(или данные с сервака)
const EmployeesList = ({data}) => {

    const elements = data.map(item => {

            return (
                <EmployeesListItem {...item}/>  
            )

    })
    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;