function clockMinuteAdder(time, minutestoAdd) {
    let [hour, min] = time.split(':')
    hour = parseInt(hour)
    min = parseInt(min) + minutestoAdd
    if (min > 60) {
        hour = hour + Math.trunc(min / 60)
        min %= 60
        if (hour > 12) {
            hour %= 12
        }
    }
    if (hour < 10) {
        hour = "0" + hour
    }
    if (min < 10) {
        min = '0' + min
    }
    return `${hour}:${min}`
}