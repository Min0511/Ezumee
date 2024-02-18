const currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth();

// let firstDayOfMonth = new Date(year, month, 1);
// let lastDayOfMonth = new Date(year, month + 1, 0);
// When I set variables and use it, btns don't work but If I use new Date(year, month), it works.

let daysInMonth = new Date(year, month + 1, 0).getDate();
const calendarBody = document.getElementById('calendar-body');
const thisMonth = document.querySelector(".year-and-month");
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const toPreBtn = document.querySelector("#to-left");
const toNextBtn = document.querySelector("#to-right");

toPreBtn.addEventListener("click", () => {
  if(month === 0) {
    month = 11;
    year = year - 1;
  } else {
    month = month -1;
  }
  thisMonth.textContent = `${months[month]} ${year}`
  clearCalendar();
  generateCalendar();
});

toNextBtn.addEventListener("click", () => {
  if (month === 11) {
    month = 0;
    year = year + 1;
  } else {
    month = month + 1;
  }
  thisMonth.textContent = `${months[month]} ${year}`
  clearCalendar();
  generateCalendar();
});

  thisMonth.textContent = `${months[month]} ${year}`

function generateCalendar() {
let preDate = new Date(year, month, 0).getDate();
let date = 1;
let nextDate = 1;
for (let i = 0; i < 6; i++) { 
  const row = document.createElement('tr');
  for (let j = 0; j < 7; j++) {
    if (i === 0 && j < new Date(year, month, 1).getDay()) {
      const cell = document.createElement("td");
      cell.classList.add("preDates");
      cell.textContent = preDate - new Date(year, month, 1).getDay() + j + 1;
      row.appendChild(cell);
    } else if (date <= daysInMonth) {
      const cell = document.createElement('td');
      cell.classList.add("dates");
      cell.textContent = date;
      if (date === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
        cell.classList.add('current-day');
      }
      row.appendChild(cell);
      date++;
    } else if (date > daysInMonth) {
      const cell = document.createElement('td');
      cell.classList.add("nextDates")
      cell.textContent = nextDate;
      row.appendChild(cell);
      nextDate++;
    }
  }
  calendarBody.appendChild(row);
}
}

generateCalendar();

function clearCalendar() {
calendarBody.innerHTML = "";
}
