function generateCalendar() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const calendarBody = document.getElementById('calendar-body');
  const thisMonth = document.querySelector(".current-month");
  
  thisMonth.textContent = currentDate.toLocaleString('default', { month: 'long' });

  let preDate = new Date(year, month, 0).getDate();
  let date = 1;
  let nextDate = 1;
  for (let i = 0; i < 6; i++) { 
    const row = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfMonth.getDay()) {
        const cell = document.createElement("td");
        cell.classList.add("preDates");
        cell.textContent = preDate - firstDayOfMonth.getDay() + j + 1;
        row.appendChild(cell);
      } else if (date <= daysInMonth) {
        const cell = document.createElement('td');
        cell.classList.add("dates");
        cell.textContent = date;
        if (date === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
          cell.classList.add('current-day'); // Highlight the current date
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
