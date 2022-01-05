import * as vscode from 'vscode'
import typeofJsonc from 'typeof-jsonc'

const generateType = (json: string, name?: string, options?: { addExport?: boolean }) =>
  typeofJsonc(json, name, {
    prefix: 'I',
    rootFlags: 2,
    disallowComments: false,
    addExport: false,
    ...options
  })

const typeofJson = (addExport = false) => {
  let editor = vscode.window.activeTextEditor
  if (!editor) {
    return
  }

  let selection = editor.selection
  let text = editor.document.getText(selection)
  let name = ''

  if (text.includes('=')) {
    const splitList = text.split('=')
    text = splitList[1]
    name = splitList[0].split(' ')[1]
  }

  text = generateType(text, name, { addExport })

  editor.edit(builder => {
    builder.replace(selection, text)
    vscode.window.showInformationMessage('类型解析成功')
  })
}

export default typeofJson
