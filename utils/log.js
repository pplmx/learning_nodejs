/*
* LogHelper
*/
const {
    createLogger,
    format,
    transports
} = require('winston')

const {
    combine,
    timestamp,
    label,
    printf
} = format

const customLogFormat = printf(({
    level,
    message,
    label,
    timestamp
}) => {
    return `[${label}] ${timestamp} ${level}: ${message}`
})

const customLogCombine = combine(
    format.colorize(),
    label({ label: 'Learning' }),
    timestamp({
        format: 'YYYY-MM-DD HH:mm:ss.SSS'
    }),
    customLogFormat
)

const LOG = createLogger({
    level: 'info',
    format: customLogCombine,
    transports: [
        //
        // - Write all logs with level `error` and below to `error.log`
        // - Write all logs with level `info` and below to `info.log`
        // - Write all logs with level `debug` and below to `debug.log`
        //
        new transports.File({
            filename: 'error.log',
            level: 'error'
        }),
        new transports.File({
            filename: 'info.log',
            level: 'info'
        }),
        new transports.File({ filename: 'debug.log' })
    ]
})

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
    LOG.add(new transports.Console({
        format: customLogCombine
    }))
}

module.exports = { LOG }
