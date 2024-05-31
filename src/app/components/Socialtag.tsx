import React from 'react'
import Image from 'next/image'

const Socialtag = ({img, user, social, link}:{
    img: string,
    user: string,
    social: string,
    link: string
}) => {
  return (
    <a className='flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800' href={link}>
        <div className='flex items-center space-x-3'>
            <div className='relative h-16'>
                <Image
                    src={img}
                    className='rounded-lg object-cover'
                    alt='navindu'
                    width={60}
                    height={60}
                />
                <div className='relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border border-neutral-200 bg-white p-1 dark:border-neutral-700'>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-medium text-neutral-900 dark:text-neutral-100'>{user}</p>
                <p className='text-neutral-600 dark:text-neutral-400'>{social}</p>
            </div>
            <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path></svg></div>
        </div>
    </a>
  )
}

export default Socialtag
