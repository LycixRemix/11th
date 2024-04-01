'use client'

import { about } from 'contentlayer/generated'
import MDX from '@/components/MDX'

export default function About() {
  return (
    <div className="page p-4">
      <article>
        <MDX code={about.body.code} />
      </article>
    </div>
  )
}
