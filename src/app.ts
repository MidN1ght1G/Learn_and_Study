import * as express from 'express'
import { urlencoded, json } from 'express'
import * as cookieParser from 'cookie-parser'
import * as cors from 'cors'
import * as libs from './libs'
import { GlobalRoutes } from './routes'

// ====== For Server  ======
let app: express.Express

async function initServer() {
  // ====== SET Global Instance  ======
  app = express()

  // ====== SET Static Resources  ======
  // app.use('/static', express.static(path.join(__dirname, 'public')));

  // ====== SET Global Middlewares  ======
  app.use(libs.metricsMiddleware('Simple App')) // Monitor by Prometheus
  app.use(cors())
  app.use(urlencoded({ extended: false })) // Parse 'application/x-www-form-urlencoded'
  app.use(json({ limit: '10MB' })) // Parse 'application/json'
  app.use(cookieParser())

  // app.use(formDataMiddleware({ encoding: 'utf-8' })); // app.use(formDataMiddleware({ encoding: 'utf-8', uploadDir: '......', multiples: true, }));
  // ====== INIT LOGGER =======
  libs.initLogging(app)
  // ====== INIT ROUTES  ======
  new GlobalRoutes(app).mapRoutes()

  libs.initLoggingError(app)
  // ====== START Server  ======
  app.listen(3000, async () => {
    console.log(`=========== APP: Simplp App`)
    console.log(`=========== APP_ENV: ${process.env.NODE_ENV}`)
    console.log(`=========== APP-PORT: 3000`)
    console.log(`=========== APP-TIMEZONE: Asia/Bangkok`)
  })
}

// ====== START Server  ======
initServer()
