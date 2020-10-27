//? _________________Color Change________________________________________

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
]

const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
}
let timerId = null

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const colorChange = () => {
  const randomBgColor = colors[randomIntegerFromInterval(0, colors.length)]
  refs.body.style.backgroundColor = `${randomBgColor}`
}

const stopColorChange = () => {
  if (timerId !== null) {
    clearInterval(timerId)
  }
}

refs.startBtn.addEventListener("click", () => {
  console.log("startBtn")
  timerId = setInterval(colorChange, 1000)
  refs.startBtn.disabled = true
  refs.startBtn.style.backgroundColor = "gray"
})

refs.stopBtn.addEventListener("click", () => {
  stopColorChange()
  refs.startBtn.disabled = false
  refs.startBtn.style.backgroundColor = "#8add7f"
})

//? _____________________Promises_______________________________________________
//* Task 1

// const delay = (ms) => {
//   return new Promise((res, rej) => setTimeout(() => res(ms), ms))
// }

// const logger = (time) => console.log(`Resolved after ${time}ms`)

// // Вызовы функции для проверки
// delay(2000).then(logger) // Resolved after 2000ms
// delay(1000).then(logger) // Resolved after 1000ms
// delay(1500).then(logger) // Resolved after 1500ms

//* Task 2
// const users = [
//   { name: "Mango", active: true },
//   { name: "Poly", active: false },
//   { name: "Ajax", active: true },
//   { name: "Lux", active: false },
// ]
// const toggleUserState = (allUsers, userName) => {
//   return new Promise((res, rej) => {
//     const updatedUsers = allUsers.map((user) =>
//       user.name === userName ? { ...user, active: !user.active } : user
//     )
//     res(updatedUsers)
//   })
// }

// const logger = (updatedUsers) => console.table(updatedUsers)
// toggleUserState(users, "Mango").then(logger)
// toggleUserState(users, "Lux").then(logger)

//* Task 3
// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }
// const makeTransaction = (transaction) => {
//   return new Promise((res, rej) => {
//     const delay = randomIntegerFromInterval(200, 500)
//     setTimeout(() => {
//       const canProcess = Math.random() > 0.3
//       if (canProcess) {
//         res({ id: transaction.id, time: delay })
//       } else {
//         rej(transaction.id)
//       }
//     }, delay)
//   })
// }
// const logSuccess = ({ id, time }) => {
//   console.log(`Transaction ${id} processed in ${time} ms`)
// }

// const logError = (id) => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`)
// }
// makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError)

// makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError)

// makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError)

// makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError)

//?  _____________________Timer_________________________________________________

// const refs = {
//   sec: document.querySelector('[data-value="secs"]'),
//   min: document.querySelector('[data-value="mins"]'),
//   hour: document.querySelector('[data-value="hours"]'),
//   day: document.querySelector('[data-value="days"]'),
// }

// const timer = {
//   start() {
//     const targetTime = new Date("Dec 31, 2020")

//     setInterval(() => {
//       const currentTime = Date.now()

//       const delta = targetTime - currentTime

//       updateTime(delta)
//     }, 1000)
//   },
// }

// const updateTime = (time) => {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)))
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   )
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000))
//   updateValues(secs, mins, hours, days)
// }

// const updateValues = (secs, mins, hours, days) => {
//   refs.sec.textContent = secs
//   refs.min.textContent = mins
//   refs.hour.textContent = hours
//   refs.day.textContent = days
// }

// const pad = (value) => {
//   return String(value).padStart(2, "0")
// }

// timer.start()
