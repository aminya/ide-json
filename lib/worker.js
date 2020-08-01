const { AutoLanguageClient } = require('atom-languageclient')

class JSONLanguageClient extends AutoLanguageClient {
  getGrammarScopes() { return ['source.json'] }
  getLanguageName() { return 'JSON' }
  getServerName() { return 'VSCode' }

  startServerProcess() {
    return super.spawnChildNode([require.resolve('vscode-json-languageserver/bin/vscode-json-languageserver'), '--stdio']);
  }
}

import { expose } from "threads/worker"

const client = new JSONLanguageClient()
expose(client)

// module.exports = new JSONLanguageClient();
