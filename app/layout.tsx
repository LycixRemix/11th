import './globals.css'
import 'aos/dist/aos.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '青山阅微笔记 - 生活其实很简单，过了今天就是明天',
  description: '生活其实很简单，过了今天就是明天',
  authors: [{ name: '青山阅微笔记', url: 'https://liucy.cn' }],
  keywords: 'Code, ACG, Blog, 青山, 笔记',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={inter.className} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
