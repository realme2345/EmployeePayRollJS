let empPayrollList;
window.addEventListener("DOMContentLoader",(Event)=>{
    empPayrollList=getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent=empPayrollList.length;
    createInnerHtml();
});
const getEmployeePayrollDataFromStorage=()=>{
    return localStorage.getItem('EmplpoyeePayrollList') ?
                         JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
}
const createInnerHtml=()=>{
    if(empPayrollList.length==0) return;
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                     "<th>Salary</th>th>StartDate</th><th>Actions</th>";
    //let empPayrollData=createEmployeePayrollJSON();
    let innerHtml=$(headerHtml);
    for(const empPayrollData of empPayrollList){
        innerHtml=`${innerHtml}
        <tr>
        <td><img src="${empPayrollData._picture}">
        </td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${empPayrollData._department}</td>
        <td>${empPayrollData._salary}</td>
        <td>${stringifyDate(empPayrollData._startDate)}</td>
              <td>
                  <img id="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="../asserts/icons8-delete.svg" alt="delete">
                  <img id="${empPayrollData._id}" onclick="update(${empPayrollData._id})" src="../asserts/icons.-edit.svg" alt="edit">
              </td>
              </td>
        </tr>`
        ;
        document.querySelector('#table-display').innerHTML=innerHtml;
    }
}
// const createEmployeePayrollJSON=()=>{
//     let empPayrollListLocal=[
//         {
//             _name:'Kongara',
//             _gender:'male',
//             _department:[
//                 'Engineering',
//                 'Finance'
//             ],
//             _salary:'300000',
//             _startDate:'29 oct 2019',
//             _note:'',
//             _id:new Date().getTime(),
//             _picture:'../asserts/Ellipse-3.png'
//         }
//     ];
//     return empPayrollListLocal;
//}
const remove=(node)=>{
    let empPayrollData=empPayrollList.find(empData=>empData._id==node.id);
    if(!empPayrollData) return;
    const index=empPayrollList.map(empData=>empData._id)
                               .index(empPayrollData._id);
    empPayrollList.splice(index,1);
    localStorage.setItem("EmployeePayrollList",JSON.stringify(empPayrollList));
    createInnerHtml();
}
const update=(node)=>{
    let empPayrollData=empPayrollList.find(empData=>empData._id==node.id);
    if(!empPayrollData) return;
    localStorage.setItem("editEmp",JSON.stringify(empPayrollList));
    window.location.replace(site_properites.add_emp_payroll_page);
}
// const getDeptHtml=(deptList)=>{
//     let deptHtml='';
//     for(const dept of deptList){
//         deptHtml=${deptHtml} <div class='dept-label'>(${dept})</div>;
//     }
//     return deptHtml;
// }