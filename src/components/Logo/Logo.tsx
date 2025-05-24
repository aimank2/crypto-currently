import clsx from 'clsx'
import { GanttChartSquareIcon } from 'lucide-react'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <strong className="text-xl">Cc</strong>

    // <img
    //   alt="Payload Logo"
    //   width={193}
    //   height={34}
    //   loading={loading}
    //   fetchPriority={priority}
    //   decoding="async"
    //   className={clsx('w-full max-w-[9.375rem] h-[34px]', className)}
    //   src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-logo-light.svg"
    // />
  )
}
