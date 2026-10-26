import { useEffect, useState } from 'react'

// Types the text out one character at a time.
// Users who prefer reduced motion see the full text immediately.
export default function Typewriter({ text, speed = 100, startDelay = 500 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setCount(text.length)
      return undefined
    }

    setCount(0)
    let index = 0
    let timer

    const tick = () => {
      index += 1
      setCount(index)
      if (index < text.length) timer = setTimeout(tick, speed)
    }

    timer = setTimeout(tick, startDelay)
    return () => clearTimeout(timer)
  }, [text, speed, startDelay])

  return (
    <span className="relative inline-block">
      <span className="sr-only">{text}</span>
      <span className="invisible" aria-hidden="true">
        {text}
      </span>
      <span className="absolute left-0 top-0 w-full" aria-hidden="true">
        {text.slice(0, count)}
        <span className="animate-pulse text-accent">|</span>
      </span>
    </span>
  )
}