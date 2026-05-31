function updateTime(){
    let now = new Date();
    document.getElementById("time").innerHTML = now.toLocaleTimeString();
    document.getElementById("date").innerHTML = now.toLocaleDateString();
}
updateTime();
setInterval(updateTime,1000);

function overview() {
    document.getElementById("overview").style.display = "block";
    document.getElementById("addtask").style.display = "none";
    document.getElementById("main").style.justifyContent = "center";
    document.getElementById("main").style.alignItems = "flex-start";
    let name = localStorage.getItem("name");
    document.getElementById("user_name").innerHTML = name ;
        view_tasks();  
        updatecounts();

}
overview();
function updatecounts(){
        document.getElementById("total_tasks").innerHTML = `${JSON.parse(localStorage.getItem("task")).length}`;  
        document.getElementById("pending_tasks").innerHTML = `${JSON.parse(localStorage.getItem("task")).filter(task => !task.completed).length}`;
        document.getElementById("completed_tasks").innerHTML = `${JSON.parse(localStorage.getItem("task")).filter(task => task.completed).length}`;
let today = new Date().toISOString().split("T")[0];

document.getElementById("past_due_tasks").innerHTML =JSON.parse(localStorage.getItem("task")).filter(task => task.dueDate < today && !task.completed).length;}
function add_task(){
    document.getElementById("addtask").style.display = "block";
    document.getElementById("overview").style.display = "none";
    document.getElementById("main").style.justifyContent = "center";
    document.getElementById("main").style.alignItems = "center";
            updatecounts();

    }
function submitTask(){ 

   let task = {
        title: document.getElementById("task_title").value,
        description: document.getElementById("task_description").value,
        dueDate: document.getElementById("due_date").value,
        completed: false,
    };
    let tasks = JSON.parse(localStorage.getItem("task")) ||[];
    tasks.push(task);
    localStorage.setItem("task", JSON.stringify(tasks));
    view_tasks();  
    alert("Task saved successfully!");
    document.getElementById("task_form").reset(); 
            updatecounts();
  

}
function view_tasks(){

    let tasks = JSON.parse(localStorage.getItem("task")) || [];

    let tableBody = document.getElementById("task_table_body");

    tableBody.innerHTML = "";

    for(let i = 0; i < tasks.length; i++){

        tableBody.innerHTML += `
        <tr>
            <td>${tasks[i].title}</td>
            <td>${tasks[i].description}</td>
            <td>${tasks[i].dueDate}</td>
            <td>
                ${tasks[i].completed ? "Completed" : "Pending"}
            </td>
            <td>
                <button onclick="markDone(${i})">
                    Done
                </button>

                <button onclick="deleteTask(${i})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    }
}
function markDone(index){

    let tasks = JSON.parse(localStorage.getItem("task")) || [];

    tasks[index].completed = true;

    localStorage.setItem("task", JSON.stringify(tasks));

    view_tasks();
            updatecounts();

}
function deleteTask(index){

    let tasks = JSON.parse(localStorage.getItem("task")) || [];

    tasks.splice(index, 1);

    localStorage.setItem("task", JSON.stringify(tasks));

    view_tasks();
            updatecounts();

}