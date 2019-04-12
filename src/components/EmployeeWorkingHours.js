import React from 'react'

class EmployeeWorkingHours extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            open: true
        }

    }

    toggle = () => {
        this.setState({ open: !this.state.open})
    }

    render(){

        const {events, employees} = this.props;

        function secondsToHms(endDate, startDate) {
            var diff = endDate.getTime() - startDate.getTime();

            var msec = diff;
            var hh = Math.floor(msec / 1000 / 60 / 60);
            msec -= hh * 1000 * 60 * 60;
            var mm = Math.floor(msec / 1000 / 60);
            msec -= mm * 1000 * 60;
            var ss = Math.floor(msec / 1000);
            msec -= ss * 1000;

            return hh + ":" + mm 
        }

        let newEmployeeList = []
        employees.map((employee) => {
            events.map((event) => {
                if(employee.id === event.resourceId){

                    let employeeObj = {
                        id: employee.id, 
                        name: employee.name, 
                        weeklyWorkingHours: employee.weeklyWorkingHours,
                        workingHours: secondsToHms(event.end, event.start)
                    }
                    newEmployeeList.push(employeeObj)
                }
                return false
            })
            return false
        })

        let employeeWorkingHours = []
        newEmployeeList.forEach(function (employee) {
            if (!this[employee.id]) {
                this[employee.id] = { id: employee.id, name: employee.name, weeklyWorkingHours: employee.weeklyWorkingHours, workingHours: 0, workingMinutes: 0 };
                employeeWorkingHours.push(this[employee.id]);
            }

            let time = employee.workingHours.split(':');
            let hours = parseInt(time[0]);
            let minutes = parseInt(time[1])

            this[employee.id].workingHours += hours;
            this[employee.id].workingMinutes += minutes;

            if(this[employee.id].workingMinutes >= 60)
            {
                this[employee.id].workingHours += 1;
                this[employee.id].workingMinutes -= 60;
            }

        }, Object.create(null));

        return(
            <div>
                <button onClick={this.toggle} id="showUserHoursButton" className="btn btn-primary btn-sm">{(this.state.open===true)? "Prikaži sate zaposlenika": "Sakrij"}</button>
                <div>
                    {!this.state.open && 
                        <div className="employeeContent">
                            <span>
                                <hr/>
                                <b>Ime Prezime</b>
                                <b id="wHtitle">Radni sati(tjedan)</b>
                            </span><br/><br/>
                            {employeeWorkingHours.map((employee) =>
                                <span key={employee.id}>
                                    {employee.name}
                                    <span> - </span>
                                    <b>{employee.workingHours}:{employee.workingMinutes}</b>
                                    <span className="errMsg">{(employee.weeklyWorkingHours > employee.workingHours)? employee.name +" ima manje od "+employee.weeklyWorkingHours+" sati tjedno!": employee.name +" ima prekovremenih sati! ("+(employee.workingHours-employee.weeklyWorkingHours)+")"}</span>
                                    <hr/>
                                </span>
                            )}
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default EmployeeWorkingHours;