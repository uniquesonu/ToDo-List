// let input = document.querySelector('input');
// let button = document.querySelector('button');
// let ul = document.querySelector('ul');

// let li = document.querySelector('li');

// let handleClick = (e) => {
//     let CurrTask = input.value;
//     if(CurrTask.length > 0 && CurrTask.trim()!==''){
//         ul.innerHTML += '<li>' + CurrTask + '</li>';
//     }
//     input.value = '';
// };

// button.addEventListener('click',handleClick); 

let input = document.querySelector(".container input")
let button = document.querySelector(".container button")
let taskList = document.querySelector(".task_wrapper ul")

//Function
let addTask = () => {
    let newTask = input.value;
    // console.log(newTask);
    if(newTask.length > 0 && newTask.trim()!==''){
        taskList.innerHTML += '<li> <div class="task"><div class = "task-value">'+newTask+'</div> <div class = "task_options"><input type = "checkbox"name="isTaskDone"> <span> &Cross; </span> </div></div> </li>';

        input.value='';
        updatedCheckBox();
        updatedCross();
    }
}

let updatedCheckBox = () =>{
    let checkbox = document.querySelectorAll('.task_options input');
    checkbox.forEach((checkboxItem,index)=>{
        // console.log(checkboxItem,index);
        checkboxItem.addEventListener('click',toggleCompleted);
    });
};

let toggleCompleted = (e) => {
    e.target.parentElement.parentElement.children[0].classList.toggle('done')
}

let updatedCross = () => {
    let cross = document.querySelectorAll('.task_options span');
    cross.forEach((crossItem,index)=>{
        // console.log(crossItem,index);
        crossItem.addEventListener('click',removedTask);
    });
}

let removedTask = (e) => {
    e.target.parentElement.parentElement.parentElement.innerHTML = '';
}

updatedCheckBox();
updatedCross();

//event listner
button.addEventListener('click',addTask)

