var DATE_FORMAT = /(\d{4})-(\d{2})-(\d{2})/

function pad2 (num) {
  return ('0'+num).slice(-2)
}

module.exports = {
  toDate: function (value) {
    if (value instanceof Date) {
      return new Date(value.getFullYear(), value.getMonth(), value.getDate())

    } else if (typeof value === 'string' && DATE_FORMAT.test(value)) {
      var dateParts = value.match(DATE_FORMAT).splice(1)
      return new Date(dateParts[0], dateParts[1]-1, dateParts[2])
      
    } else {
      throw new Error('Invalid date supplied. Please specify a date object or date string in YYYY-MM-DD format.')
    }
  },

  toString: function (date) {
    return [date.getFullYear(), pad2(date.getMonth()+1), pad2(date.getDate())].join('-')
  }
}
