import Image from 'next/image'
import clsx from 'clsx'

type BrandLogoProps = {
  className?: string
  priority?: boolean
  theme?: 'adaptive' | 'dark' | 'light'
}

export default function BrandLogo({
  className,
  priority = false,
  theme = 'adaptive',
}: BrandLogoProps) {
  return (
    <span
      className={clsx(
        'inline-flex h-7 items-center gap-2',
        theme === 'adaptive' && 'dark:brightness-0 dark:invert',
        theme === 'light' && 'brightness-0 invert',
        className
      )}
    >
      <Image
        src="/buteforce-mark.svg"
        alt=""
        aria-hidden
        width={146}
        height={144}
        priority={priority}
        sizes="28px"
        className="h-full w-auto flex-shrink-0"
      />
      <Image
        src="/buteforce-wordmark.svg"
        alt="Buteforce"
        width={464}
        height={37}
        priority={priority}
        sizes="(max-width: 768px) 110px, 150px"
        className="h-[68%] w-auto"
      />
    </span>
  )
}
