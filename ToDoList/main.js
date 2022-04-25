function add_task(){
    var task = document.getElementById("task");

    var table = document.getElementById("task_table");

    if(task.value == ""){
        task.focus();
    }
    else{
        var row = document.createElement("tr");

        row.classList.add("task_row");

        var check = '<img src="./Components/check-solid.svg" alt=".">';
        var cross = '<img class="cross-black" src="./Components/xmark-solid.svg" alt="x"><img class="cross-white" src="./Components/xmark-solid-white.svg" alt="x">';

        var row_data = `<td class="comp_task">${check}</td><td class="task_name">${task.value}</td><td class="del_task">${cross}</td>`;

        row.innerHTML = row_data;

        table.insertBefore(row, table.firstElementChild);

        task.value = "";

        task.focus();
        
        var task_rows = document.querySelectorAll(".task_row");
        
        row.addEventListener('click', function click(){

            if(row.classList.contains("completed")){
                row.style.backgroundColor = "";
                row.querySelectorAll(".comp_task img")[0].style.display = "none";
                row.getElementsByClassName("task_name")[0].style.color = "black";
                row.getElementsByClassName("task_name")[0].style.textDecoration = "none";
                row.querySelectorAll(".del_task img")[0].style.display = "inline-block";
                row.querySelectorAll(".del_task img")[1].style.display = "none";

                row.classList.remove("completed");
            }
            else{
                row.style.backgroundColor = "rgba(0, 95, 200, 0.8)";
                row.querySelectorAll(".comp_task img")[0].style.display = "inline-block";
                row.getElementsByClassName("task_name")[0].style.color = "white";
                row.getElementsByClassName("task_name")[0].style.textDecoration = "line-through";
                row.querySelectorAll(".del_task img")[0].style.display = "none";
                row.querySelectorAll(".del_task img")[1].style.display = "inline-block";

                row.classList.add("completed");
            }

        });  
        
        
        row.getElementsByClassName("del_task")[0].addEventListener('click', function click(event){
            event.stopPropagation();
            
            row.remove();
        });
    }
}

var task = document.getElementById("task");

task.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        add_task();
    }
});