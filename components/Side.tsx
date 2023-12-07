import Image from 'next/image'
import Link from 'next/link'
import { SiBilibili, SiGithub, SiGmail, SiTwitter } from 'react-icons/si'
import Menu from './Menu'

const IconStyle = {
  width: '24px',
  height: '24px',
}

export default function Side() {
  return (
    <div className="relative h-full w-full select-none">
      <Menu className="absolute right-2 top-1 z-50" />
      <Image src="/image/202312051842.jpg" fill className="absolute h-full w-full object-cover" alt="" priority />
      <div className="absolute top-0 h-full w-full bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVQImU3IMREAIAgAwJfNkQCEsH8cijjpMf6vnXlQaIiJFx+omEBfmqIEZLe2jzcAAAAASUVORK5CYII=')] object-cover" />
      <div className="absolute bottom-2 left-0 right-0 text-center text-white md:bottom-1/4">
        <h1 className="p-2 text-3xl md:p-4 md:text-4xl">青山阅微筆記</h1>
        <div className="flex justify-center">
          <Link href="https://space.bilibili.com/525626978" className="mb-2 px-3 md:mb-4">
            <SiBilibili style={IconStyle} />
          </Link>
          <Link href="https://github.com/liucys" className="mb-2 px-3 md:mb-4">
            <SiGithub style={IconStyle} />
          </Link>
          <Link href="mailto:chengyongliu@foxmail.com" className="mb-2 px-3 md:mb-4">
            <SiGmail style={IconStyle} />
          </Link>
          <Link href="" className="mb-2 px-3 md:mb-4">
            <SiTwitter style={IconStyle} />
          </Link>
        </div>
        <h4 className="p-2 pt-0 md:text-2xl">生活其实很简单，过了今天就是明天！</h4>
      </div>
    </div>
  )
}
