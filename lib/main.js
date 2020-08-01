"use babel"

import { spawn } from "threads"
import * as BrowserImplementation from "threads/dist/master/implementation.browser"
const implementation = BrowserImplementation
getWorkerImplementation = implementation.getWorkerImplementation
const Worker = getWorkerImplementation().default


async function main() {
  const client = await spawn(new Worker("./worker"))
  console.log(client)
  return client
}

module.exports = main()
