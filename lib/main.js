"use babel"

import { spawn } from "threads"
import * as BrowserImplementation from "threads/dist/master/implementation.browser"
const implementation = BrowserImplementation
getWorkerImplementation = implementation.getWorkerImplementation
const Worker = getWorkerImplementation().default


async function main() {
  const JSONLanguageClient = await spawn(new Worker("./worker"))
  const client = await new JSONLanguageClient()
  console.log(client)
  return client
}

module.exports = main()
