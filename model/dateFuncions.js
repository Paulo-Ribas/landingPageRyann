class DateFunctions {
    remakeDate(dateNow) {
        let dateObject = new Date(dateNow)
        let day = dateObject.getDay()
        console.log(day, dateObject.getDate())
        dateObject.setDate(day)
        console.log(dateNow, dateObject.getTime(), dateObject.getDay())
        return dateObject
    }
}

module.exports = new DateFunctions