import Link from 'next/link'
import type { Metadata } from 'next'
import { Button, SectionLabel, SketchFrame } from '@/components/ui'
import { ContentBleedSection } from '@/components/layout/ContentBleed'
import { SiteShell } from '@/components/layout/SiteShell'
import { getAllProjectsMeta } from '@/lib/projects-mdx'

export const metadata: Metadata = {
  title: '项目',
  description: '作品集与案例（MDX 详情页）。',
}

export default function ProjectsPage() {
  const projects = getAllProjectsMeta()

  return (
    <SiteShell>
      <ContentBleedSection bleed='both'>
        <SectionLabel>projects</SectionLabel>
        <h1 className='mt-4 break-words text-4xl font-semibold tracking-tight text-ink md:text-5xl'>项目</h1>
        <p className='mt-4 max-w-xl text-ink/70'>
          七年开发历程，涵盖政府项目、企业级应用、小程序开发、可视化大屏等多个领域。从0到1主导掌阅网页版开发，参与多个大型项目的核心功能实现。
        </p>

        <div className='mt-12 flex flex-col gap-6'>
          {projects.map(p => (
            <SketchFrame key={p.slug} as='article' className='p-6'>
              <h2 className='text-2xl font-semibold tracking-tight text-ink'>
                <Link
                  href={`/projects/${p.slug}`}
                  className='underline decoration-dotted decoration-ink/30 underline-offset-[5px] hover:decoration-accent-magenta'
                >
                  {p.title}
                </Link>
              </h2>
              <p className='mt-2 text-sm text-ink/50'>{p.date}</p>
              <p className='mt-3 leading-relaxed text-ink/75'>{p.description}</p>
              {p.stack && p.stack.length > 0 ? (
                <ul className='mt-4 flex flex-wrap gap-2'>
                  {p.stack.map(s => (
                    <li
                      key={s}
                      className='rounded-md border border-ink/15 bg-paper-deep px-2 py-0.5 font-mono text-xs text-ink/65'
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              ) : null}
            </SketchFrame>
          ))}
        </div>
      </ContentBleedSection>
    </SiteShell>
  )
}
