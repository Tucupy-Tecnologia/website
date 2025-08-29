import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { CodePlayground, InteractiveChart, TabsComponent } from '@/components/mdx'

const components = {
  h1: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = typeof children === 'string' 
      ? children.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      : props.id
    return (
      <h1
        id={id}
        className={cn(
          "mt-8 scroll-m-20 text-4xl font-bold tracking-tight",
          className
        )}
        {...props}
      >
        {children}
      </h1>
    )
  },
  h2: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = typeof children === 'string' 
      ? children.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      : props.id
    return (
      <h2
        id={id}
        className={cn(
          "mt-10 scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
          className
        )}
        {...props}
      >
        {children}
      </h2>
    )
  },
  h3: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = typeof children === 'string' 
      ? children.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      : props.id
    return (
      <h3
        id={id}
        className={cn(
          "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
          className
        )}
        {...props}
      >
        {children}
      </h3>
    )
  },
  h4: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = typeof children === 'string' 
      ? children.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      : props.id
    return (
      <h4
        id={id}
        className={cn(
          "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
          className
        )}
        {...props}
      >
        {children}
      </h4>
    )
  },
  h5: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = typeof children === 'string' 
      ? children.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      : props.id
    return (
      <h5
        id={id}
        className={cn(
          "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
          className
        )}
        {...props}
      >
        {children}
      </h5>
    )
  },
  h6: ({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = typeof children === 'string' 
      ? children.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      : props.id
    return (
      <h6
        id={id}
        className={cn(
          "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
          className
        )}
        {...props}
      >
        {children}
      </h6>
    )
  },
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <Link
      className={cn(
        "font-medium text-primary underline underline-offset-4 hover:text-primary/80",
        className
      )}
      {...(props as any)}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-neutral-600 pl-6 italic text-neutral-400",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    src,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <Image
      className={cn("rounded-md border border-neutral-800", className)}
      alt={alt || ''}
      src={src || ''}
      width={800}
      height={400}
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
      {...props}
    />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-8 border-neutral-800" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t border-neutral-800 p-0", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border border-neutral-800 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border border-neutral-800 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg bg-neutral-900 p-4 border border-neutral-800",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded bg-neutral-800 px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className={cn("font-semibold", className)}
      {...props}
    />
  ),
  // Interactive components
  CodePlayground,
  InteractiveChart,
  TabsComponent,
} satisfies MDXComponents

export function useMDXComponents(): MDXComponents {
  return components
}