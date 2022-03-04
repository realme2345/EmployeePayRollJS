let empPayrollObj={}
const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
};
function reset(){
    setValue('#name','');
    setValue('#salary','');
    setValue('#notes','');
}
const save=()=>{
    try{
        let empData=saveData();
        console.log(empData);
        console.log(JSON.stringify(empData));
        localStorage.setItem('empData',empData);
        var retrievedObject = localStorage.getItem('testObject');
        console.log('empData: ', JSON.parse(retrievedObject));
        reset();
        if(empData!=null){
            createAndUpdateId(empData)
        }
    }   
    catch(e){
        return;
    }    

}
function saveData(){
    let employee = new EmployeePayrollData();
    if(employee.isValid()){
        employee.id=Math.floor(Math.random() * 100) + 1;
        console.log(employee.id)
        employee.name=document.getElementById("name").value;
        var empPic=document.querySelector('input[name = profile]:checked');
        var empGender=document.querySelector('input[name = gender]:checked');
        var empDepts = document.getElementsByName('dept');
        var department="";
        for (var checkbox of empDepts) {
            if(checkbox.checked ==true){
                department=department+","+checkbox.value;
            }
        }
        if(empPic!=null){
            employee.picture = document.querySelector('input[name = profile]:checked').value;
        }
        if(empGender!=null){
            employee.gender = document.querySelector('input[name = gender]:checked').value;
        }
        if(empDepts!=null){
            employee.department =department;
        }
        //console.log(department)
        employee.salary = document.getElementById("salary").value;
        var day = document.getElementById("day").value;
        var month = document.getElementById("month").value;
        var year = document.getElementById("year").value;
        employee.note = document.getElementById("notes").value;
        employee.startDate = new Date(day+" "+month+" "+year);
        //console.log(employee.toString());
        reset();
        if(employee.name==null || employee.name=='' || employee.startDate==null){
          return null;
        }else{
          return employee;
        }
    }
}
function createAndUpdateId(empData){
    let employeeData1=saveData();
    console.log(employeeData1)
    console.log(JSON.stringify(empData));
    localStorage.setItem('empData',empData);
    var retrievedObject = localStorage.getItem('testObject');
    console.log('empData: ', JSON.parse(retrievedObject));
    reset();
}
const text = document.querySelector("#name");
var errorInputt = document.querySelector('.textError')
const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
text.addEventListener("input", function () {
  if (nameRegex.test(text.value)) errorInputt.textContent = "";
  else errorInputt.textContent = "Name is Incorrect";
});