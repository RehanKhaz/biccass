import Image from 'next/image'
import { features } from '../constant'

const Features = () => {
  return (
    <section id='features' className='my-[3em] common-padding'>
      <div className='flex-between flex-wrap  '>
        <h2 className='w-1/3 max-lg:w-full text-center'>
          Our Features <br className='max-lg:hidden' />
          You Cab Get
        </h2>
        <p className='inline max-md:w-full w-[50%]'>
          We offer a variety of interesting features that you can help increase
          yor productivity at work and manage your projrct esalys
        </p>
        <button className='accent-bg py-4 px-5 max-sm:w-full  rounded-2xl  text-white'>
          Get Started
        </button>
      </div>
      <br />
      {/* Features */}
      <div className='grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1'>
        {features.map((feature, i) => {
          const { image, title, description } = feature
          return (
            <div key={i} className='space-y-3'>
              <Image width={600} height={800} className='object-cover' src={image} alt={title} />
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Features
