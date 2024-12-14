import * as core from '@actions/core'
// import * as fs from 'fs/promises'
// import * as path from 'path'
import { parse as yamlParse } from 'yaml'

export async function run(): Promise<void> {
  try {
    const bakeFile: string =
      core.getInput('bake-file', { required: false, trimWhitespace: true }) ||
      'backery.hcl'
    const buildArgsMatrix: string = core.getInput('build-args-matrix', {
      required: true
    })

    core.warning(`Got Matrix: ${buildArgsMatrix}`)
    core.warning(`Got parsed: ${JSON.stringify(yamlParse(buildArgsMatrix))}`)

    core.setOutput('bake-file', bakeFile)
  } catch (error) {
    core.setFailed(error instanceof Error ? error.message : 'Unknown error')
  }
}
