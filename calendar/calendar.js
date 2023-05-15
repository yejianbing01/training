
// time
let currentTime = new Date()
render(currentTime)
g('#today').onclick = () => {
	render(new Date())
}
g('#prevMonth').onclick = () => {
	render(new Date(currentTime - 86400 * 1000 * 30))
}
g('#nextMonth').onclick = () => {
	render(new Date(currentTime - 0 + 86400 * 1000 * 30))
}

// 帮助函数
function render(now) {
	const year = now.getFullYear()
	const month = now.getMonth() + 1

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
		currentTime = now

		// 补充上月
		for (let i = 1; i < startDay; i++) {
			const li = document.createElement('li');

			const date = new Date(startDay - 84600 * 1000 * i).getDate()
			li.textContent = date
			days.prepend(li)
		}
		// 本月
		for (let i = 1; i <= endDate; i++) {
			const li = document.createElement('li');
			li.textContent = i
			days.append(li)
		}
		// 补充下月
		for (let i = 1; i <= 7 - endDay; i++) {
			const li = document.createElement('li');
			const date = new Date(endDay - 0 + 84600 * 1000 * i).getDate()
			li.textContent = i
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
