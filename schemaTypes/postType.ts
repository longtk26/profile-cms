import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Thumbnail / Cover Image',
      type: 'image',
      description: 'Primary thumbnail for post cards, lists, and social previews',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'images',
      title: 'Post Images / Gallery',
      type: 'array',
      description: 'Upload multiple images or diagrams contained within and associated with this post',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              description: 'Important for SEO and screen readers',
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'Optional caption displayed below the image',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'tag',
          fields: [{type: 'string', name: 'value'}],
        }),
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated at',
      type: 'datetime',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: 20,
      description: 'Paste Markdown here. The site renders this content as Markdown.',
    }),
  ],
})
