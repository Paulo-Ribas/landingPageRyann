class DateFunctions {
    remakeDate(dateNow) {
        let dateObject = new Date(dateNow)
        let day = dateObject.getDay()
        dateObject.setDate(day)
        return dateObject
    }
}

module.exports = new DateFunctions