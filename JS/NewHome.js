window.addEventListener('DOMContentLoader',(Event)=>{
    createInnerHtml();
});
const createInnerHtml = () => {
   const innerHtml='
    <tr>
       <th></th>
       <th>Name</th>
       <th>Gender</th>
       <th>Department</th>
       <th>Salary</th>
       <th>startDate</th>
       <th>Actions</th>
    </tr>
    <tr>
     <td><img class="profile" src="../asserts/Ellipse -2.png"></td>
     <td>Mohammad Muzaffair</td>
     <td>Male</td>
     <td><div class='dept-label'>HR</div>
         <div class='dept-label'>Finance</div>
         <td>300000</td>
         <td>1 Nov 2020</td>
     </td>
     <td>
         <img id="1" onclick="remove(this)" alt="delete" src="../asserts/trash.png" width="25px" height="25px"/>
         <img id="1" onclick="upadte(this)" alt="delete" src="../asserts/edit-text.png" width="25px" height="25px"/>
     </td>
    </tr>
 ';
 document.querySelector('#table-display').innerHTML=innerHTML;
}