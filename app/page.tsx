/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import type { Docs } from 'contentlayer/generated'
import AOS from 'aos'
import clsx from 'clsx'
import { allDocs } from 'contentlayer/generated'
import { compareDesc, format } from 'date-fns'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { FiCalendar, FiTag } from 'react-icons/fi'
import MDX from '@/components/MDX'

export default function Home() {
  const allList: Docs[] = allDocs.sort((a, b) => compareDesc(new Date(a.created_at), new Date(b.created_at)))
  const [page, setPage] = useState(1)
  const router = useRouter()
  const [docs, setDocs] = useState<Docs[]>([])
  const maskRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const hoverRef = useRef(null)
  const timerRef = useRef<number>()
  const finishedRef = useRef<boolean>(false)
  const [maskHeight, setMaskHeight] = useState(0)
  const [maskTop, setMaskTop] = useState(0)
  const [anime, setAnime] = useState('fade-left')

  useEffect(() => {
    const data = allList.slice((page - 1) * 10, page * 10)
    if (data.length) {
      setDocs([...docs, ...data])
    } else {
      finishedRef.current = true
    }

    if (maskHeight === 0) {
      setTimeout(() => {
        const target = listRef.current?.firstChild
        if (target) {
          calcMaskPos(target)
        }
      }, 100)
    }
  }, [page])

  const calcMaskPos = (target: any) => {
    const { clientHeight, offsetTop } = target
    const paddingTop = document.documentElement.clientWidth > 1024 ? 0 * 16 : 0 * 16
    const realTop = offsetTop + paddingTop
    if (maskHeight === clientHeight && maskTop === realTop) return
    setMaskHeight(clientHeight)
    setMaskTop(realTop)
  }

  const handleMask = (e: any) => {
    e.preventDefault()
    hoverRef.current = e.currentTarget
    calcMaskPos(e.currentTarget)
  }

  const handleScroll = () => {
    clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      if (hoverRef.current) {
        calcMaskPos(hoverRef.current)
      }
      // load more
      if (finishedRef.current) return
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      if (scrollTop + clientHeight > scrollHeight - 100) {
        setPage((page) => page + 1)
      }
    }, 100)
  }

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease',
      debounceDelay: 50,
      throttleDelay: 100,
      offset: 0,
    })
    setAnime(document.documentElement.clientWidth > 640 ? 'fade-left' : 'fade-up')

    window.addEventListener('scroll', handleScroll, false)
    return () => window.removeEventListener('scroll', handleScroll, false)
  }, [])

  return (
    <main className="page px-0">
      <div
        ref={maskRef}
        className="mask pointer-events-none absolute left-0 top-0 w-full transform rounded transition-all duration-300 ease-in-out"
        style={{
          height: `${maskHeight}px`,
          transform: `translateY(${maskTop}px)`,
        }}
      ></div>
      <div ref={listRef} className="relative space-y-4">
        {docs.map((doc) => {
          return (
            <article
              key={doc._id}
              className="cursor-pointer p-4"
              data-aos={anime}
              onClick={() => router.push(`/posts/${doc.slug}`)}
              onMouseOver={handleMask}
              onMouseEnter={handleMask}
            >
              <h2 className="mb-2 text-xl italic">{doc.title}</h2>
              <MDX code={doc.summary.code} />
              <div className="meta mt-2 flex items-center justify-start">
                <FiCalendar className="mr-1" />
                {format(new Date(doc.created_at), 'yyyy-MM-dd')}
                <FiTag className="ml-4 mr-1" />
                {doc.labels.map((label, index) => (
                  <span key={label} className={clsx('mr-2', index >= 1 && 'hidden sm:inline-block')}>
                    {label}
                  </span>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </main>
  )
}
