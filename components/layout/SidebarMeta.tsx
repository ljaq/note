'use client'

import { ThemeSelect } from '@/components/theme/ThemeSelect'

/** 底部设置区：主题、语言等 */
export function SidebarMeta() {
  return (
    <div className=''>
      <div className='flex items-center justify-between gap-2 p-3'>
        <span className='shrink-0 text-[11px] text-muted-foreground'>主题</span>
        <ThemeSelect />
      </div>
      <div className='mx-[-16px] border-t border-grid-border' />
    </div>
  )
}
