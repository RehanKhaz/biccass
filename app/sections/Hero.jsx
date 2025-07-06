import { Play, PlayCircle } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id='home' className='mt-[10em] common-padding grid grid-cols-2 max-md:grid-cols-1 max-md:gap-8 justify-between '>
      {/* Text Section */}
      <div className='space-y-4 max-md:space-y-2'>
        <h1 className='text-[80px] max-lg:text-[65px] max-md:text-[50px] leading-[90px] max-md:leading-[60px] font-bold text-[#191A15]'>
          We're here to Increase your
          <div>
            Productivity
            <Image
              src={'/images/curvedline.png'}
              className='object-cover w-[80%]'
              width={800}
              height={700}
              alt='Hero Image'
            />
          </div>
        </h1>
        <p className='text-[18px] text-black '>
          Let's make your work more organize and easily using the Taskio
          Dashboard with many of the latest features in managing work every day.
        </p>
        <div className='flex items-center gap-6'>
          <button className='accent-bg text-white rounded-3xl px-8 py-4 h-fit '>
            Try Free Trial
          </button>
          <div className='flex-center gap-4 max-md:gap-32'>
            <PlayCircle size={20} />
            <p className='text-black '>View Demo</p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <Image
        src={'/images/hero_image.png'}
        width={1000}
        height={1000}
        alt='Hero Image'
        className='object-cover h-full w-full'
      />
    </section>
  )
}

export default Hero
