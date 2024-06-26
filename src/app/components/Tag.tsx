import React from 'react'
import Image from 'next/image'

const Tag = ({src,name,link}:{
  src:string,
  name:string,
  link:string

}) => {
  return (
    <a className='inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100' href={link} target="_blank" rel="noopener noreferrer">
        <Image
          src={src}
          alt='tag'
          width={14}
          height={14} 
        />
        {name}
    </a>
  )
}

export default Tag
