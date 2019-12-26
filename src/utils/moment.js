const moment = require('moment')

const momentFormat = fmt => {
    if (fmt === undefined)
        fmt = "YYYY-MM-DD HH:mm:ss";
    return moment().format(fmt);
}

export {
    momentFormat
}