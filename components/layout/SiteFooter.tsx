import { ContentBleedSection } from './ContentBleed'
import { EMAIL, GITHUB_URL, PHONE, WECHAT_QR_SRC } from '@/lib/social'

export function SiteFooter() {
  return (
    <ContentBleedSection bleed='top'>
      <footer className='mt-auto px-4 py-4 md:px-8 lg:px-10'>
        <div className='flex max-w-3xl flex-col gap-4 text-xs text-ink/45 md:flex-row md:items-center md:justify-between'>
          <p className='font-mono tracking-wider'>© {new Date().getFullYear()} 李佳棋 · Next.js SSG / MDX</p>
          {/* 小屏无侧栏：用内联链接与可展开的二维码，避免依赖 Popover */}
          <div className='flex flex-col gap-3 border-t border-[color:var(--grid-border-color)] pt-4 md:hidden'>
            <p className='text-[0.65rem] font-mono uppercase tracking-wider text-ink/40'>contact</p>
            <div className='flex flex-wrap gap-x-5 gap-y-2 text-ink/75'>
              <a
                href={GITHUB_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='underline decoration-dotted decoration-ink/30 underline-offset-4 hover:text-ink'
              >
                GitHub
              </a>
              <a href={`mailto:${EMAIL}`} className='break-all underline decoration-dotted decoration-ink/30 underline-offset-4 hover:text-ink'>
                {EMAIL}
              </a>
              <a href={`tel:${PHONE}`} className='underline decoration-dotted decoration-ink/30 underline-offset-4 hover:text-ink'>
                {PHONE}
              </a>
            </div>
            <details className='text-ink/75'>
              <summary className='cursor-pointer select-none text-ink/80 hover:text-ink'>微信二维码</summary>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={WECHAT_QR_SRC}
                alt='微信'
                width={128}
                height={128}
                className='mt-3 max-w-[min(100%,8rem)] border border-[color:var(--grid-border-color)] bg-paper'
              />
            </details>
          </div>
        </div>
      </footer>
    </ContentBleedSection>
  )
}
