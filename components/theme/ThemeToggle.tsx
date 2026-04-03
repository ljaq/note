'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type ThemeToggleProps = {
  className?: string
}

/** 滑块式开关：在浅色 / 深色之间切换（跟随系统为默认，用户可覆盖并写入 localStorage） */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <span
        className={cn('inline-block h-9 w-14 shrink-0 rounded-full border border-grid-border bg-paper-deep', className)}
        aria-hidden
      />
    )
  }

  const dark = resolvedTheme === 'dark'

  return (
    <button
      type='button'
      role='switch'
      aria-checked={dark}
      aria-label={dark ? '切换到浅色模式' : '切换到深色模式'}
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      className={cn(
        'relative inline-flex h-9 w-14 shrink-0 cursor-pointer items-center rounded-full border border-grid-border bg-paper-deep px-0.5 transition-colors',
        className,
      )}
    >
      <span
        className={cn(
          'pointer-events-none flex h-7 w-7 items-center justify-center rounded-full border border-grid-border bg-paper shadow-sm transition-transform duration-200',
          dark ? 'translate-x-6' : 'translate-x-0',
        )}
      >
        {dark ? <Moon className='size-3.5 text-foreground' strokeWidth={2} /> : <Sun className='size-3.5 text-amber-600' strokeWidth={2} />}
      </span>
    </button>
  )
}
