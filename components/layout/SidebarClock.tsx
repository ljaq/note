'use client'

import { useEffect, useState } from 'react'
import { SketchDivider } from './SketchDivider'

export function SidebarClock() {
  const [time, setTime] = useState<string>('')
  const [date, setDate] = useState<string>('')

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('zh-CN', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }),
      )
    setDate(
      new Date().toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
    )
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className='flex items-center justify-between gap-2 px-4 h-8'>
      <span className='font-mono text-[11px] tabular-nums tracking-tight text-foreground'>{date || '—-—-—'}</span>
      <span className='font-mono text-[11px] tabular-nums tracking-tight text-muted-foreground'>{time || '—:—:—'}</span>
    </div>
  )
}
