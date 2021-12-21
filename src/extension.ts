// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "ts-smart" is now active!')

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('ts-smart.helloWorld', (...args) => {
    // The code you place here will be executed every time your command is executed

    let editor = vscode.window.activeTextEditor
    if (!editor) {
      return // No open text editor
    }
    let selection = editor.selection
    let text = editor.document.getText(selection) //选择文本

    // Display a message box to the user

    // // 从开始到结束，全量替换
    editor.edit(builder => {
      builder.replace(selection, '被替换的文本') //替换选中文本
      vscode.window.showInformationMessage('替换成功！')
    })
  })

  context.subscriptions.push(disposable)
}

// this method is called when your extension is deactivated
export function deactivate() {}
