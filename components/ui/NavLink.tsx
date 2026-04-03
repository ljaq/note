'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
}

export function NavLink({ href, children, className = '' }: NavLinkProps) {
  const pathname = usePathname()
  const active = href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition ${className} ${
        active
          ? 'border border-[color:var(--grid-border-color)] bg-card text-foreground'
          : 'border border-transparent text-muted-foreground hover:border-[color:var(--grid-border-color)] hover:bg-card/80 hover:text-foreground'
      }`}
    >
      {children}
    </Link>
  )
}
