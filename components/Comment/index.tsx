'use client'

import Giscus from '@giscus/react'

interface CommentProps {
  term: string
}

export default function Comment({ term }: CommentProps) {
  return (
    <div className="mt-12">
      <Giscus
        id="comment"
        repo="LycixRemix/comment"
        repoId="R_kgDOLceyIw"
        category="Announcements"
        categoryId="DIC_kwDOLceyI84Cdw7Z"
        mapping="specific"
        term={term}
        reactionsEnabled="0"
        emitMetadata="0"
        inputPosition="top"
        lang="zh-CN"
        loading="lazy"
        theme="light"
      />
    </div>
  )
}
