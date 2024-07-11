import { Express } from 'express'
import * as winstonExpress from 'express-winston'
import * as winston from 'winston'

// =================== [Default Configuration] ===================
let logMiddleware = winstonExpress.logger({
  level: 'info',
  transports: [new winston.transports.Console()],
  format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
  meta: false,
  msg: 'HTTP : {{req.method}} {{res.statusCode}} {{req.url}} {{res.responseTime}}ms Body: {{JSON.stringify(req.body)}}',
  colorize: true,
  // expressFormat: true,
})
let logErrorMiddleware = winstonExpress.errorLogger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(winston.format.colorize(), winston.format.json()),
})

// ===============================================================

function initLogging(app: Express, config?: winstonExpress.LoggerOptions) {
  if (config) logMiddleware = winstonExpress.logger(config)
  app.use(logMiddleware)
}

function initLoggingError(app: Express, config?: winstonExpress.ErrorLoggerOptions) {
  if (config) logErrorMiddleware = winstonExpress.errorLogger(config)
  app.use(logErrorMiddleware)
}

export { initLogging, initLoggingError }
