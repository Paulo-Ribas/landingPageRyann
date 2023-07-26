class DateFunctions {
    remakeDate(dateNow) {
        let dateObject = new Date(dateNow)
        let day = dateObject.getDate()
        dateObject.setDate(day + 1)
        return dateObject
    }
}

module.exports = new DateFunctions