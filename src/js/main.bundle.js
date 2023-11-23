import moment from 'moment'

const startButton = document.getElementById('start-button')

startButton.addEventListener('click', () => {
	const startTime = moment()
	const timerHours = +document.getElementById('hours').value
	const timerMinutes = +document.getElementById('minutes').value
	const timerSeconds = +document.getElementById('seconds').value
	const endTime = moment()
		.local()
		.add(timerHours, 'hours')
		.add(timerMinutes, 'minutes')
		.add(timerSeconds, 'second')

	let timerDuration = moment.duration(endTime.diff(startTime))
	console.log(timerDuration)
	const format = 'HH:mm:ss'
	const timer = document.getElementById('timer-ongoing-clock')

	const interval = setInterval(() => {
		timer.textContent = moment
			.utc(moment.duration(timerDuration).asMilliseconds())
			.format(format)

		timerDuration -= 1000
		if (+timerDuration < 0) {
			clearInterval(interval)
			document.getElementById('timer-sound').play()
		}

		setTimeout(() => {
			timer.style.display = 'flex'
			document.getElementById('start-button').style.display = 'none'
			document
				.getElementsByClassName('timer-text')[0]
				.classList.add('timer-text-ongoing')
			document.getElementById('timer-clocks-container').style.display = 'none'
			document.getElementById('timer-ongoing').style.display = 'flex'
		}, 0)
	}, 1000)
})
