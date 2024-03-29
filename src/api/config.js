import dotenv from "dotenv"
import knexfile from "knexfile"
import { resolve } from "path"

dotenv.config({ path: resolve(".env.local") })

const config = {
  port: 3000,
  db: knexfile,
  baseURL: "http://localhost:3000",
  security: {
    jwt: {
      secret: process.env.SECURITY__JWT__SECRET,
      expiresIn: "3 days",
    },
    password: {
      saltlen: 512,
      keylen: 512,
      iterations: 100000,
      digest: "sha512",
      pepper: process.env.SECURITY__PASSWORD__PEPPER,
    },
    sendgrid: process.env.SENDGRID_API_KEY,
  },
}

export default config
