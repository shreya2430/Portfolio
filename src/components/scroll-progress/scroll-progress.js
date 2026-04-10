import * as React from "react"
import "./scroll-progress.scss"

const ScrollProgress = () => {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const onScroll = () => {
      const scrollTop    = window.scrollY || document.documentElement.scrollTop
      const docHeight    = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const pct          = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(Math.min(pct, 100))
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress__bar" style={{ width: `${progress}%` }} />
    </div>
  )
}

export default ScrollProgress
