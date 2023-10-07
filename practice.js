
function addTableRow(){  
// 在新行中插入单元格并填入数据
let table = document.getElementById("myTable");
let newRow = table.insertRow();
let checkboxCell = document.createElement('td');
let checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkboxCell.appendChild(checkbox);
newRow.appendChild(checkboxCell);
  let lastRow = table.rows[table.rows.length -1];

  for(let i = 0; i<table.rows.length; i++) {
      rownum = i;
  }
  let cell1 = newRow.insertCell(1);
  cell1.textContent = rownum;
  
  var stuno = prompt("请输入学号");
  let cell2 = lastRow.insertCell(2);
  cell2.innerHTML = stuno;
  
  var stuname = prompt("请输入名字");
  let cell3 = lastRow.insertCell(3);
  cell3.innerHTML = stuname;
  
  var stuColl = prompt("请输入学院");
  let cell4 = lastRow.insertCell(4);
  cell4.innerHTML = stuColl; 
  
  var stuJob = prompt("请输入专业");
  let cell5 = lastRow.insertCell(5);
  cell5.innerHTML = stuJob;
  
  var stuGrade = prompt("请输入年级");
  let cell6 = lastRow.insertCell(6);
  cell6.innerHTML = stuGrade;
  
  var stuClass = prompt("请输入班级");
  let cell7 = lastRow.insertCell(7);
  cell7.innerHTML = stuClass;
   
  var stuAge = prompt("请输入年龄");
  let cell8 = lastRow.insertCell(8);
  cell8.innerHTML = stuAge;

  
      var studentArr = [];
      var studentNoArr = [];
      var studentColl = [];
      var studentJob = [];
      var studentGrade = [];
      var studentClass = [];
      var studentAge = [];
            
      studentNoArr.push(stuno); //根据用户输入添加信息
      studentArr.push(stuname);
      studentColl.push(stuColl);
      studentJob.push(stuJob);
      studentGrade.push(stuGrade);
      studentClass.push(stuClass);
      studentAge.push(stuAge);
      alert("添加成功");

      /*删除所选的单元行*/ 
let deleteButton = document.getElementById("deleteButton");
function deleteSelectedRows() {
  let table = document.getElementById("myTable");
  let checkboxes = table.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach(function(checkbox) {
  let row = checkbox.parentNode.parentNode;
  row.remove()
    });
  }
  deleteButton.addEventListener('click',deleteSelectedRows);

   /*修改内容*/
   let modify = document.createElement('button');
   modify.textContent = '修改';
   modify.addEventListener('click',function(){
       let nowRow = this.parentNode.parentNode;     
       console.log('当前行的索引:',nowRow.rowIndex);
       console.log('当前行的学号:',nowRow.cells[2].textContent);
       console.log('当前行的姓名:',nowRow.cells[3].textContent);
       console.log('当前行的学院:',nowRow.cells[4].textContent);
       console.log('当前行的专业:',nowRow.cells[5].textContent);
       console.log('当前行的年级:',nowRow.cells[6].textContent);
       console.log('当前行的班级:',nowRow.cells[7].textContent);
       console.log('当前行的年龄:',nowRow.cells[8].textContent);
       let table = document.getElementById("myTable");
       let newRow = table.insertRow();
       let Data = ['stuno','stuname','stuColl','stuJob','stuGrade','stuClass','stuAge']
       
      for(let i = 0;i<newRow.cells.length;i++){
          delete Data[i];
          console.log(Data[i]);
      }

      var stuno = prompt("请输入学号");
      let cell2 = lastRow.insertCell(2);
      cell2.innerHTML = stuno;
      
      var stuname = prompt("请输入名字");
      let cell3 = lastRow.insertCell(3);
      cell3.innerHTML = stuname;
      
      var stuColl = prompt("请输入学院");
      let cell4 = lastRow.insertCell(4);
      cell4.innerHTML = stuColl; 
      
      var stuJob = prompt("请输入专业");
      let cell5 = lastRow.insertCell(5);
      cell5.innerHTML = stuJob;
      
      var stuGrade = prompt("请输入年级");
      let cell6 = lastRow.insertCell(6);
      cell6.innerHTML = stuGrade;
      
      var stuClass = prompt("请输入班级");
      let cell7 = lastRow.insertCell(7);
      cell7.innerHTML = stuClass;
       
      var stuAge = prompt("请输入年龄");
      let cell8 = lastRow.insertCell(8);
      cell8.innerHTML = stuAge;
    
      
          var studentArr = [];
          var studentNoArr = [];
          var studentColl = [];
          var studentJob = [];
          var studentGrade = [];
          var studentClass = [];
          var studentAge = [];
                
          studentNoArr.push(stuno); //根据用户输入添加信息
          studentArr.push(stuname);
          studentColl.push(stuColl);
          studentJob.push(stuJob);
          studentGrade.push(stuGrade);
          studentClass.push(stuClass);
          studentAge.push(stuAge);
          alert("添加成功");
   });
   
   let cell9 = newRow.insertCell(9); 
   cell9.appendChild(modify)


}

const startBtn = document.querySelector("#startBtn"),
endBtn = document.querySelector("#endBtn"),
prevNext = document.querySelectorAll(".prevNext"),
numbers = document.querySelectorAll(".link");

let currentStep = 0;

const updateBtn = () => {
  if(currentStep === 4){
    endBtn.disabled = true;
    prevNext[1].disabled = true;
  }else if(currentStep === 0){
    startBtn.disabled = true;
    prevNext[0].disabled = true;
  }else{
    endBtn.disabled = false;
    prevNext[1].disabled = false;
    startBtn.disabled = false;
    prevNext[0].disabled = false;
  }
};

numbers.forEach((number,numIndex) => {
  number.addEventListener("click", (e) => {
    e.preventDefault();
    currentStep = numIndex;
    document.querySelector(".active").classList.remove("active");
    number.classList.add("active");
    updateBtn();
  });
});

prevNext.forEach((button) => {
  button.addEventListener("click", (e) => {
    currentStep += e.target.id === "next" ? 1 : -1;
    numbers.forEach((number,numberIndex) => {
      number.classList.toggle("active", numIndex === currentStep);
      updateBtn();
    });
  });
});

window.startBtn.addEventListener("click", () => {
  document.querySelector(".active").classList.remove("active");
  numbers[0].classList.add("active");
  currentStep = 0;
  updateBtn();
  endBtn.disabled = false;
  prevNext[1].disabled = false;
});

endBtn.addEventListener("click", () => {
  document.querySelector(".active").classList.remove("active");
  numbers[4].classList.add("active");
  currentStep = 4;
  updateBtn();
});
