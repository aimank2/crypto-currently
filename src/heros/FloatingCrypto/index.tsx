'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'
import podium from '@/assets/hero-media/podium.png'
import topGlow from '@/assets/hero-media/yellow-glow-top.svg'
import bottomGlow from '@/assets/hero-media/yellow-glow-bottom.svg'
import leftGlow from '@/assets/hero-media/yellow-glow-left.svg'
import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import Image from 'next/image'

export const FloatingCrypto: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  }, [setHeaderTheme])

  const video = 'video/Bit_anim_alpha_860 (1).webm'

  return (
    <div
      className="relative flex md:flex-row flex-col mx-0 -mt-[10.4rem] px-0 pt-[20vh] md:pt-[30vh] h-dvh overflow-hidden text-white"
      data-theme="dark"
    >
      <div className="z-50 px-6 md:pl-10 lg:pl-20 xl:pl-40 w-full text-center md:text-start">
        {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
        {Array.isArray(links) && links.length > 0 && (
          <ul className="flex flex-wrap justify-center md:justify-start gap-4 w-full">
            {links.map(({ link }, i) => {
              return (
                <li key={i}>
                  <CMSLink {...link} appearance={i === 0 ? 'wide' : 'secondary'}></CMSLink>
                </li>
              )
            })}
          </ul>
        )}
      </div>
      <div className="mt-8 md:mt-0 px-6 md:px-20 lg:px-40 xl:px-60 font-sora">
        {richText && (
          <RichText
            className="hidden md:block opacity-0 mb-6"
            data={richText}
            enableGutter={false}
          />
        )}

        <div className="pointer-events-none">
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            tabIndex={-1}
            className="hidden md:block right-10 md:right-20 bottom-36 md:bottom-32 -z-10 absolute opacity-90 max-w-[80%] md:max-w-full md:scale-75"
          />
        </div>
        <Image
          src={podium}
          alt="Podium"
          className="right-0 md:right-20 lg:right-32 xl:right-44 bottom-0 md:bottom-0 absolute mx-auto md:mx-0 md:scale-100 lg:scale-110"
        />
      </div>
      <Image src={topGlow} alt="Top glow" className="top-0 right-0 z-20 absolute lg:scale-110" />
      <Image src={bottomGlow} alt="Bottom glow" className="bottom-0 absolute lg:scale-110" />
      <Image src={leftGlow} alt="Left glow" className="top-0 left-0 absolute lg:scale-110" />
    </div>
  )
}
