import { SectionLabel, SketchFrame } from '@/components/ui'
import { ContentBleedSection } from '@/components/layout/ContentBleed'
import { SiteShell } from '@/components/layout/SiteShell'

export default function AboutPage() {
  return (
    <SiteShell>
      <ContentBleedSection bleed='both'>
        <SectionLabel index='01'>resume</SectionLabel>
        <h1 className='mt-4 break-words text-4xl font-semibold tracking-tight text-ink md:text-5xl'>关于我</h1>
        <p className='mt-4 max-w-2xl text-lg leading-relaxed text-ink/75'>
          七年前端开发经验，具备独立负责大型项目、进行技术选型和架构设计的能力。现就职于掌阅科技，负责掌阅App核心开发及文字类小程序开发。
        </p>

        <div className='mt-10 space-y-8'>
          <SketchFrame as='section'>
            <SectionLabel index='02'>skills</SectionLabel>
            <ul className='mt-4 space-y-2 text-ink/85'>
              <li className='flex gap-2'>
                <span className='text-ink/40'>—</span>
                精通：HTML、CSS、JavaScript、TypeScript、ESNext
              </li>
              <li className='flex gap-2'>
                <span className='text-ink/40'>—</span>
                React 生态：React、React hooks、zustand、Redux、React-router、Next.js
              </li>
              <li className='flex gap-2'>
                <span className='text-ink/40'>—</span>
                Vue 生态：Vue2/3、Pinia、Vuex、Vue-router、Nuxt
              </li>
              <li className='flex gap-2'>
                <span className='text-ink/40'>—</span>
                小程序：原生、uni-app、Taro
              </li>
              <li className='flex gap-2'>
                <span className='text-ink/40'>—</span>
                可视化：Three.js、Cesium.js、高德/百度地图、Echarts、AntV
              </li>
              <li className='flex gap-2'>
                <span className='text-ink/40'>—</span>
                后端：Node.js、Express、Koa、Hono、MongoDB、Mongoose
              </li>
            </ul>
          </SketchFrame>

          <SketchFrame as='section'>
            <SectionLabel index='03'>experience</SectionLabel>
            <ul className='mt-4 space-y-5 text-ink/85'>
              <li>
                <p className='font-medium text-ink'>掌阅科技 · 前端核心开发</p>
                <p className='text-sm text-ink/55'>2024.06 — 至今</p>
                <p className='mt-2 leading-relaxed'>
                  负责掌阅App前端核心开发（hybrid、网页版等）、文字小程序核心开发（微信/抖音）。主导掌阅网页版从0到1搭建，使用 Nuxt2 实现服务端渲染。
                </p>
              </li>
              <li>
                <p className='font-medium text-ink'>天津引元信息科技有限公司 · 前端开发</p>
                <p className='text-sm text-ink/55'>2022.05 — 2024.06</p>
                <p className='mt-2 leading-relaxed'>
                  负责多个政府、企业级项目的前端架构设计与核心开发。在"无废河西"大屏项目中，集成高德地图、Cesium.js、Three.js，实现 3D 模型、实时风向、车辆监控等复杂可视化效果。
                </p>
              </li>
              <li>
                <p className='font-medium text-ink'>北京赋乐科技有限公司 · 前端开发</p>
                <p className='text-sm text-ink/55'>2018.07 — 2022.05</p>
                <p className='mt-2 leading-relaxed'>
                  参与大数据可视化、内部运维工具等多类项目的前端开发。独立使用 Node.js + MongoDB 完成后端模块开发，确保项目按时交付。
                </p>
              </li>
            </ul>
          </SketchFrame>

          <SketchFrame as='section'>
            <SectionLabel index='04'>education</SectionLabel>
            <ul className='mt-4 space-y-4 text-ink/85'>
              <li>
                <p className='font-medium text-ink'>河北工程大学</p>
                <p className='text-sm text-ink/55'>2014.09 — 2018.06 · 本科</p>
              </li>
            </ul>
          </SketchFrame>

          <SketchFrame as='section'>
            <SectionLabel index='05'>contact</SectionLabel>
            <p className='mt-4 text-ink/80'>
              📧 邮箱：jq_96m@163.com<br />
              📱 电话：13011550934<br />
              📍 住址：天津
            </p>
          </SketchFrame>
        </div>
      </ContentBleedSection>
    </SiteShell>
  )
}
