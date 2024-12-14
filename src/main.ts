import * as core from '@actions/core'
import * as fs from 'fs/promises'
import * as path from 'path'

export async function run() {
  try {
    const bakeFile: string = core.getInput('bake_file', { required: true })
    const buildArgsMatrix: string = core.getInput('build_args_matrix', {
      required: true
    })

    core.warning(`Got Matrix: ${buildArgsMatrix}`)
    core.warning(`Got parsed: ${JSON.stringify(JSON.parse(buildArgsMatrix))}`)

    core.setOutput('bake_file', bakeFile)
  } catch (error) {
    core.setFailed(error instanceof Error ? error.message : 'Unknown error')
  }
}
