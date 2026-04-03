import type { Metadata } from 'next'
import './globals.css'
import { Geist } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { cn } from '@/lib/utils'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: {
    default: '李佳棋 · 简历与作品',
    template: '%s · 李佳棋',
  },
  description: '手绘线条风格的个人网站：简历、项目与 MDX 文章。',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='zh-CN' suppressHydrationWarning className={cn('font-sans', geist.variable)}>
      <body className='min-h-dvh overflow-x-hidden font-sans antialiased'>
        <ThemeProvider>
          {children}
          <NextTopLoader
            color='#e01e5a'
            height={2}
            showSpinner={false}
            shadow={false}
            zIndex={9999}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
