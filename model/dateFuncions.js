class DateFunctions {
    remakeDate(dateNow) {
        let dateObject = new Date(dateNow)
        let day = dateObject.getDay()
        dateObject.setDate(day)
        console.log(dateObject.getDate())
        return dateObject
    }
}

module.exports = new DateFunctions