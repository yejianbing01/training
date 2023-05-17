
// time
let currentTime = new Date()
render(currentTime)
g('#today').onclick = () => {
  render(new Date())
}
g('#prevMonth').onclick = () => {
  render(new Date(currentTime.getFullYear(), currentTime.getMonth() - 1, 1))
}
g('#nextMonth').onclick = () => {
  render(new Date(currentTime.getFullYear(), currentTime.getMonth() + 1, 1))
}

// 帮助函数
function render(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  init()
  generateDays()

  function init() {
    const time = g('#time')
    time.textContent = `${year}年${month}月`
  }

  function generateDays() {
    // days  day:星期 date:日期
    const startDay = new Date(year, month - 1, 1).getDay()
    const end = new Date(new Date(year, month - 1 + 1, 1) - 86400 * 1000)
    const endDate = end.getDate()
    const endDay = end.getDay()

    const days = g('#days')
    days.innerHTML = ''
    currentTime = date
    let dayCount = 0;

    // 补充上月
    for (let i = 1; i < startDay; i++) {
      const li = document.createElement('li');
      const date = new Date(startDay - 84600 * 1000 * i).getDate()
      li.textContent = date
      li.classList.add('calendar-days-disabled')
      days.prepend(li)
      dayCount += 1
    }
    // 本月
    const now = new Date()
    let selected = null;
    for (let i = 1; i <= endDate; i++) {
      const li = document.createElement('li');
      li.textContent = i
      if (now.getFullYear() === year && now.getMonth() + 1 === month && now.getDate() === i) {
        li.classList.add('calendar-days-today')
      }
      li.onclick = () => {
        selected && selected.classList.remove('calendar-days-selected')
        li.classList.add('calendar-days-selected')
        selected = li
      }
      days.append(li)
      dayCount += 1
    }
    // 补充下月
    for (let i = 1; i <= 42 - dayCount; i++) {
      const li = document.createElement('li');
      const date = new Date(endDay - 0 + 84600 * 1000 * i).getDate()
      li.textContent = i
      li.classList.add('calendar-days-disabled')
      days.append(li)
    }
  }
}

function g(selector) {
  return document.querySelector(selector)
}

function gs(selector) {
  return document.querySelectorAll(selector)
}
