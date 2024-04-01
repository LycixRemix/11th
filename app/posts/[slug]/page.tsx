import { allDocs } from 'contentlayer/generated'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'
import { FiCalendar, FiTag } from 'react-icons/fi'
import Comment from '@/components/Comment'
import MDX from '@/components/MDX'

export const generateStaticParams = async () => allDocs.map((doc) => ({ slug: doc.slug }))

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const doc = allDocs.find((doc) => doc.slug === decodeURIComponent(params.slug))
  return {
    title: `${doc?.title} - 阿琳LycixRemix`,
    description: doc?.description,
    keywords: doc?.labels.join(','),
  }
}

export default function PostLayout({ params }: { params: { slug: string } }) {
  const doc = allDocs.find((doc) => doc.slug === decodeURIComponent(params.slug))
  if (!doc) {
    return notFound()
  }

  return (
    <div className="page p-4">
      <article>
        <h2 className="mb-6 text-4xl italic">{doc.title}</h2>
        <div className="meta mb-6 flex items-center justify-start">
          <FiCalendar className="mr-1" />
          {format(new Date(doc.created_at), 'yyyy-MM-dd')}
          <FiTag className="ml-4 mr-1" />
          {doc.labels.map((label) => (
            <span key={label} className="mr-2">
              {label.trim()}
            </span>
          ))}
        </div>
        <MDX code={doc.body.code} />
      </article>
      <Comment term={doc.title} />
    </div>
  )
}
