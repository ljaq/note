import { MobileBar } from './MobileBar'
import { SiteFooter } from './SiteFooter'
import { SiteSidebar } from './SiteSidebar'

type SiteShellProps = {
  children: React.ReactNode
}

/**
 * 居中外壳：滚动在 document（html/body）。
 * 外层用块级堆叠，勿对整页再套 flex-col——否则主栏上 flex-1 在移动端会沿「竖轴」生效，父高为 auto 时易把高度算死、无法纵向滚动。
 * 主栏 flex-1 仅 md+（横向占满剩余宽度）；小屏单列不设 flex-1。
 */
export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className='dot-grid min-h-dvh'>
      <MobileBar />
      {/* 用 padding 代替 margin，避免 w-full + mx 造成横向溢出；min-w-0 保证 flex 子项可收缩 */}
      <div className='mx-auto w-full min-w-0 max-w-4xl px-2 md:px-4 lg:px-0'>
        <SiteSidebar />
        <div className='border-x border-[color:var(--grid-border-color)] bg-[var(--content-bg)] md:ml-[calc(260px+1rem)] md:w-[calc(100%-260px-1rem)] md:min-w-0 [--bleed-shift:calc(0.5rem+1px+1rem)] md:[--bleed-shift:calc(1rem+260px+1rem+1px+2rem)] lg:[--bleed-shift:calc(50vw-28rem+260px+1rem+1px+2.5rem)]'>
          <main className='relative flex flex-col justify-between z-10 min-w-0 min-h-screen px-4 pt-10'>
            <div
              className='pointer-events-none absolute top-0 bottom-0 left-4 hidden h-min-dvh w-px bg-[color:var(--grid-border-color)] sm:block'
              aria-hidden
            />
            <div>{children}</div>
            <div
              className='pointer-events-none absolute top-0 bottom-0 right-4 hidden h-min-dvh w-px bg-[color:var(--grid-border-color)] sm:block'
              aria-hidden
            />
            <SiteFooter />
          </main>
          {/* 与 main 同水平内边距，FullBleedLine 的负边距参照点才与正文 bleed 一致 */}
          {/* <div className='min-w-0 px-4 md:px-8 lg:px-4'> */}

          {/* </div> */}
        </div>
      </div>
    </div>
  )
}
