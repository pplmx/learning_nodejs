/*
* LogHelper
*/
import * as winston from 'winston'

export const LOG = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with level `error` and below to `error.log`
        // - Write all logs with level `info` and below to `info.log`
        // - Write all logs with level `debug` and below to `debug.log`
        //
        new winston.transports.File({
            filename: 'error.log',
            level: 'error'
        }),
        new winston.transports.File({
            filename: 'info.log',
            level: 'info'
        }),
        new winston.transports.File({ filename: 'debug.log' })
    ]
})

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
    LOG.add(new winston.transports.Console({
        format: winston.format.simple()
    }))
}
