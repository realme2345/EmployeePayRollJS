let empPayRollList;
window.addEventListener("DOMContentLoader",(Event)=>{
    empPayRollList=getEmployeeFromServer();
    console.log(em)
});
const getEmployeeFromServer = () => {
   makeServiceCall("GET",'http://127.0.0.1:5500/Html/EmployeePayroll.html',true)
   .then(response=>{
       empPayRollList=JSON.parse(response)
       console.log(empPayRollList)
       processEmpDataResponse();
   })
   .catch(error=>{
    onsole.log("GET Error Status: "+JSON.stringify(error));
    empPayRollList = []; 
    processEmpDataResponse();
  })
}

const processEmpDataResponse = () => {
    document.querySelector(".emp-count").textContent = empPayRollList.length;
    createInnerHtml();
    // localStorage.removeItem("empEdit");
};

const createInnerHtml=()=>{
    if(empPayRollList.length==0)return;
let innerHtml=`${headerHtml}`;

for(const empPayrollData of empPayRollList){
  innerHtml=`${innerHtml}
  <tr><td><img src="${empPayrollData._picture}" /></td>
  <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>Hr</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
            <img id="${empPayrollData._name}" onclick="remove(this)" alt="delete" src="../asserts/trash.png">
            <img id="${empPayrollData._id}" alt="edit" onclick="update(${empPayrollData._id})" src="../asserts/edit-text.png">
        </td>
        </td>
  </tr>`
}
document.querySelector("#table-display").innerHTML=innerHtml;
}