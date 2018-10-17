exports.formatDate = function (date, sep) {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    return `${day}${sep}${month}${sep}${year}`;
}

exports.formatTime = function (time, sep) {
    let hour = time.getHours();
    let min = time.getMinutes();
    return `${hour}${sep}${min}`;
}
