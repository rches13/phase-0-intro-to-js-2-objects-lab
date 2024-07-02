const employee = {
    name:"Sam",
    streetAddress:"12 Broadway",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee}
    newObj['streetAddress']= "11 Broadway"
    return newObj
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  const streetAddress = 'delete employee.name'
  employee['streetAddress']= '12 Broadway'
  return employee
}
function deleteFromEmployeeByKey(employee, key){
  const newObj1 = {newObj1}
  return newObj1
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee.name;
  return employee;
}
