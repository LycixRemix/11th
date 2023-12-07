import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import { bundleMDX } from 'mdx-bundler'
import externalLinks from 'rehype-external-links'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import emoji from 'remark-emoji'
import remarkGfm from 'remark-gfm'
import smartypants from 'remark-smartypants'

export const Post = defineDocumentType(() => ({
  name: 'Docs',
  filePathPattern: `blog/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    created_at: { type: 'date', required: true },
    updated_at: { type: 'date', required: true },
    description: { type: 'string', required: true },
    labels: {
      type: 'list',
      of: {
        type: 'string',
      },
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace('.mdx', ''),
    },
    summary: {
      type: 'json',
      resolve: async (doc) => {
        let raw = doc.description
        if (!raw) {
          const regex = /^(.+)?\r?\n\s*(.+)?(\r?\n)?/
          const result = regex.exec(doc.body.raw)
          raw = result ? result[2] : ''
        }
        const { code } = await bundleMDX({ source: raw })
        return { code, raw }
      },
    },
  },
}))

export default makeSource({
  contentDirPath: 'docs',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [smartypants, emoji, remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [externalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
      [rehypePrettyCode, { theme: 'material-theme-ocean' }],
    ],
  },
})
