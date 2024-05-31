import React from 'react'
import Tag from '../components/Tag'
import Image from 'next/image'
import Socialtag from '../components/Socialtag'
import Footer from '../components/Footer'

const tags = [
    {
        src: '/terralogo.svg',
        name: 'Terracode',
        link: 'https://www.terracodedev.com/'
    }
]

const Homepage = () => {
  return (
    <section>
        <h1 className="mb-8 text-2xl font-medium tracking-tighter">hey, I'm navindu 👋</h1>
        <p className='prose prose-neutral dark:prose-invert'>
            I'm a fullstack developer, devops enthusiast, and co-founder at <span><Tag src={tags[0].src} name={tags[0].name} link={tags[0].link}/></span> I'm passionate about building software that solves real-world problems and helps people. I'm currently working on a few projects. I'm also a big fan of the CI/CD and cloud technologies. I'm always looking for new opportunities to learn and grow, so feel free to reach out!
        </p>
        {/* ===============  Image grid ============================*/}
        <div className='grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8'>
            <div className='relative h-40'>
                <Image
                    src={'/images/con.jpeg'}
                    className='rounded-lg object-cover object-top sm:object-center'
                    alt='navindu'
                    width={1080}
                    height={885}
                />
            </div>
            <div className='relative sm:row-span-2 row-span-1'>
                <Image
                    src={'/images/navindu.jpg'}
                    className='rounded-lg object-cover object-top sm:object-center'
                    alt='navindu'
                    width={500}
                    height={500}
                />
            </div>
            <div className='relative'>
                <Image
                    src={'/images/vega.jpg'}
                    className='rounded-lg object-cover object-top sm:object-center'
                    alt='navindu'
                    width={1080}
                    height={885}
                />
            </div>
            <div className='relative row-span-2'>
                <Image
                    src={'/images/git_me.jpeg'}
                    className='rounded-lg object-cover object-top sm:object-center'
                    alt='navindu'
                    width={500}
                    height={500}
                />
            </div>
            <div className='relative row-span-2'>
                <Image
                    src={'/images/tech.jpg'}
                    className='rounded-lg object-cover object-top sm:object-center'
                    alt='navindu'
                    width={500}
                    height={500}
                />
            </div>
            <div className='relative h-40'>
            {/* <Image
                    src={'/images/me.jpg'}
                    className='rounded-lg object-cover object-top sm:object-center'
                    alt='navindu'
                    width={1080}
                    height={1080}
                /> */}
            </div>
        </div>
        {/* ===============  Social Media ============================*/}
        <div className='my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0'>
            <div className='group flex w-full'>
                <Socialtag img={'/images/lnkdin.svg'} user={'navindu-sachintha'} social={"Linkedin"} link='https://www.linkedin.com/in/navindu-sachintha/'/>
            </div>
            <div className='group flex w-full'>
                <Socialtag img={'/images/git.svg'} user='navindu-sachintha' social='Github' link='https://github.com/navindu-sachintha'/>
            </div>
        </div>
        <Footer/>
    </section>
  )
}

export default Homepage
