const planner = document.getElementById("planner");
const dateElement = document.getElementById("date");
const hours = [
  "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM",
  "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM",
  "6 PM", "7 PM", "8 PM", "9 PM", "10 PM"
];

const now = new Date();
const currentHour = now.getHours();
dateElement.innerText = now.toDateString();

hours.forEach((label, i) => {
  const hourVal = i + 6; // 6AM is index 0
  const timeClass = hourVal < currentHour
    ? "past"
    : hourVal === currentHour
    ? "present"
    : "future";

  const saved = localStorage.getItem(`task-${hourVal}`) || "";

  const block = document.createElement("div");
  block.className = "time-block";

  block.innerHTML = `
    <div class="hour">${label}</div>
    <input type="text" class="task ${timeClass}" id="task-${hourVal}" value="${saved}" />
    <button class="save-btn" onclick="saveTask(${hourVal})">Save</button>
  `;

  planner.appendChild(block);
});

function saveTask(hour) {
  const input = document.getElementById(`task-${hour}`);
  localStorage.setItem(`task-${hour}`, input.value);
}