// Your code here
function createEmployeeRecord(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  function createEmployeeRecords(arr) {
    return arr.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    employee.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date
    });
    return employee;
  }
  
  function createTimeOutEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    employee.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date
    });
    return employee;
  }
  
  function hoursWorkedOnDate(employee, date) {
    const timeIn = employee.timeInEvents.find(event => event.date === date).hour;
    const timeOut = employee.timeOutEvents.find(event => event.date === date).hour;
    return (timeOut - timeIn) / 100;
  }
  
  function wagesEarnedOnDate(employee, date) {
    const hoursWorked = hoursWorkedOnDate(employee, date);
    return hoursWorked * employee.payPerHour;
  }
  
  function allWagesFor(employee) {
    const datesWorked = employee.timeInEvents.map(event => event.date);
    return datesWorked.reduce((totalWages, date) => totalWages + wagesEarnedOnDate(employee, date), 0);
  }
  
  function calculatePayroll(employees) {
    return employees.reduce((totalPayroll, employee) => totalPayroll + allWagesFor(employee), 0);
  }
  
