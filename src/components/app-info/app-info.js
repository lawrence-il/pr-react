import './app-info.css';

const AppInfo = ({countEmployees, countRise}) => {
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {countEmployees()}</h2>
            <h2>Премию получат: {countRise()}</h2>
        </div>
    )
}

export default AppInfo;