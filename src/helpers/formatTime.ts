const formatTime = (timeStamp: number): string => {
  const date = new Date(timeStamp)
  const formattedTime = `Ends at: ${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

  return formattedTime
}

export const convertHMS = (secs: number) => {
  const hours = Math.floor(secs / 3600)
  const minutes = Math.floor((secs - hours * 3600) / 60)
  const seconds = secs - hours * 3600 - minutes * 60
  let hoursString = `${hours}`,
    minutesString = `${minutes}`,
    secondsString = `${seconds}`

  if (hours < 10) {
    hoursString = `0${hours}`
  }
  if (minutes < 10) {
    minutesString = `0${minutes}`
  }
  if (seconds < 10) {
    secondsString = `0${seconds}`
  }
  return `${hoursString}:${minutesString}:${secondsString}`
}

export default formatTime
