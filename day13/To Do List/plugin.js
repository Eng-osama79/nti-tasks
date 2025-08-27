let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

// create the task
function createTask(taskText) {
  let li = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  let span = document.createElement("span");
  span.textContent = taskText;
  span.classList.add("task-text");

  let delBtn = document.createElement("button");
  delBtn.textContent = "Remove";

  // check
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      span.classList.add("completed");
    } else {
      span.classList.remove("completed");
    }
  });

  // remove button
  delBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);
}

// add button
addBtn.addEventListener("click", function () {
  let taskText = input.value.trim();

  if (taskText === "") {
    Swal.fire({
      icon: "info",
      title: "<strong>Note!</strong>",
      text: "Please write a task",
    });
    return;
  }

  createTask(taskText);
  input.value = "";
});

let initialTasks = ["Study JavaScript", "Go to the gym", "Read a book"];

for (let i = 0; i < initialTasks.length; i++) {
  let task = initialTasks[i];
  createTask(task);
}

// وما نيل المطالب بالتمني ولكن تؤخذ الدنيا غلابا
// ومن يتهيب صعود الجبال يعش أبد الدهر بين الحفر

// بشكر حضرتك يا بشمهندسه على كل مجهودك معانا،     
// على الدعم اللي قدمتيه لينا خطوة خطوة طول المنحة،  
// فعلاً تعبك ومجهودك أثر فينا جدًا وهنفتكر ده دايمًا.

// يارب بس تفتحي الكود (:😂