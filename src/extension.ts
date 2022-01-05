import * as vscode from 'vscode'
import typeofJson from './typeofJson'

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    ...[
      vscode.commands.registerCommand('ts-smart.typeofJson', () => {
        typeofJson()
      }),
      vscode.commands.registerCommand('ts-smart.typeofJsonExport', () => {
        typeofJson(true)
      })
    ]
  )
}

export function deactivate() {}
