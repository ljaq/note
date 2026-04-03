'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

type ThemeSelectProps = {
  className?: string
  /** 仅作用于 SelectTrigger */
  triggerClassName?: string
}

/** 与 next-themes 联动的主题选择（system / light / dark） */
export function ThemeSelect({ className, triggerClassName }: ThemeSelectProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div
        className={cn(
          'flex h-8 min-w-[9rem] max-w-[9rem] items-center justify-end rounded-none border border-grid-border bg-paper px-2 text-[11px] text-muted-foreground',
          triggerClassName,
          className,
        )}
        aria-hidden
      >
        …
      </div>
    )
  }

  return (
    <div className={className}>
      <Select value={theme ?? 'system'} onValueChange={setTheme}>
        <SelectTrigger
          size='sm'
          className={cn(
            'h-8 min-w-[9rem] max-w-[9rem] rounded-none border-grid-border bg-paper text-[11px] text-foreground hover:bg-paper-deep',
            triggerClassName,
          )}
          aria-label='主题'
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent className='rounded-none'>
          <SelectItem value='system'>跟随系统</SelectItem>
          <SelectItem value='light'>浅色</SelectItem>
          <SelectItem value='dark'>深色</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
