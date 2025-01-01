import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'profile-cms',

  projectId: 'demmqb6o',
  dataset: 'blogs',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
