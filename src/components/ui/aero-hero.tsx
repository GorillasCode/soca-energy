"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2400&q=85"

export function AeroHero() {
  return (
    <section className="relative flex min-h-screen w-full items-end justify-center lg:items-center lg:justify-start">
      <div className="absolute inset-0 z-10 size-full">
        <div className="grid h-screen w-full grid-cols-12 divide-x divide-white/20">
          <div className="col-span-1 h-screen" />
          <div className="col-span-3 h-screen" />
          <div className="col-span-4 h-screen" />
          <div className="col-span-3 h-screen" />
          <div className="col-span-1 h-screen" />
        </div>
      </div>

      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-20 flex w-full max-w-7xl flex-col items-center px-6 pb-16 pt-28 text-center text-white sm:pb-20 md:px-10 lg:items-start lg:pb-24 lg:pt-0 lg:text-left">
        <div className="w-full lg:max-w-[min(42rem,52%)] lg:pt-[min(18vh,12rem)]">
        <h1 className="text-balance font-kanturmuy text-4xl font-normal tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
          Southern California Energy Alternatives makes going green simple
        </h1>

        <p className="mx-auto mb-10 mt-6 max-w-2xl text-pretty text-lg font-light text-white/90 md:text-xl lg:mx-0">
          With over 30 years combined experience, you can trust that SCEA will
          build your system, on-schedule, on budget, with attention to detail.
        </p>

        <Button className="group not-disabled:inset-shadow-none mx-auto flex cursor-pointer items-center justify-center gap-0 rounded-full border-none bg-transparent px-0 py-5 font-normal shadow-none hover:bg-transparent [:hover,[data-pressed]]:bg-transparent lg:mx-0">
          <span className="rounded-full bg-[#e1fcad] px-6 py-3 text-black duration-500 ease-in-out group-hover:bg-[#122023] group-hover:text-[#e1fcad] group-hover:transition-colors">
            Start a Project
          </span>
          <div className="relative flex h-fit cursor-pointer items-center overflow-hidden rounded-full bg-[#e1fcad] p-5 text-black duration-500 ease-in-out group-hover:bg-[#122023] group-hover:text-[#e1fcad] group-hover:transition-colors">
            <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
            <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
          </div>
        </Button>
        </div>
      </div>
    </section>
  )
}
