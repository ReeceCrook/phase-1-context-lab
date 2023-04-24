/* Your Code Here */


function createEmployeeRecord(employee){

    let employeeRecord = { 
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }

    return employeeRecord
}

function createEmployeeRecords(employees){
    return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(timeStamp){
    const [date, hour] = timeStamp.split(" ")
    
    const timeInObj = {
        type: "TimeIn",
        date: date,
        hour: parseInt(hour)   
    }
    
    this.timeInEvents.push(timeInObj)
        return this
}

function createTimeOutEvent(timeStamp){
    const [date, hour] = timeStamp.split(" ")

    const timeOutObj = {
        type: "TimeOut",
        date: date,
        hour: parseInt(hour)
    }

    this.timeOutEvents.push(timeOutObj)
        return this
}

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(event => event.date === date)
    const timeOut = this.timeOutEvents.find(event => event.date === date)
    return (timeOut.hour - timeIn.hour) / 100
    
    /*
    for(let i = 0; i < this.timeOutEvents.length; i++){
        if(this.timeOutEvents[i].date && this.timeInEvents[i].date === date){
            const hoursWorked = this.timeOutEvents[i].hour - this.timeInEvents[i].hour
            return hoursWorked / 100
        }
    }
    */
}

function wagesEarnedOnDate(date){
    const wages = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return wages
}

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(event => event.firstName === firstName)
}

function calculatePayroll(employeeRecords){
    return employeeRecords.map(employee => allWagesFor.call(employee)).reduce((currentValue, total) => currentValue + total, 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        console.log(memo + wagesEarnedOnDate.call(this, d))
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
