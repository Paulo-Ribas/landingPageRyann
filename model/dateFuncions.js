class DateFunctions {
    remakeDate(dateNow) {
        let dateObject = new Date(dateNow)
        let day = dateObject.getDate()
        console.log(day)
        console.log(dateObject)
        dateObject.setDate(day + 1)
        console.log(dateObject)
        return dateObject
    }
}

module.exports = new DateFunctions