import Image from 'next/image'
import { process } from '../constant'

const Process = () => {
  return (
    <section className='my-[3em] flex-center gap-4 common-padding py-8 bg-[#F9F8FE] max-md:flex-col'>
      {/* Process Information */}
      <div className='w-[55%] space-y-8 max-md:space-y-5 max-md:w-full'>
        <h2>How we Support our Partner all over the World</h2>
        <p>
          SaaS become a common delivery model for many business application,
          including office software, messaging software, payroll processing
          software, DBMS software, management software
        </p>
        {/* Rating */}
        <div className='flex items-center gap-8'>
          <div className='space-y-2'>
            <div className='flex gap-2'>
              {['', '', '', '', ''].map((item, index) => {
                return (
                  <Image
                    key={index}
                    src={'/images/star.png'}
                    width={30}
                    height={30}
                    alt='star'
                    className='object-cover size-7'
                  />
                )
              })}
            </div>
            <p className='text-black text-xl'>
              <span className='font-bold'>4.9</span> / 5 rating
            </p>
            <p>databricks</p>
          </div>
          <div className='space-y-2'>
            <div className='flex gap-2'>
              {['', '', '', '', ''].map((item, index) => {
                return (
                  <Image
                    key={index}
                    src={'/images/star.png'}
                    width={30}
                    height={30}
                    alt='star'
                    className='object-cover size-7'
                  />
                )
              })}
            </div>
            <p className='text-black text-xl'>
              <span className='font-bold'>4.9</span> / 5 rating
            </p>
            <p>Chainalysis</p>
          </div>
        </div>
      </div>

<br className='md:hidden' />
      {/* Process Formula */}
      <div className='w-[45%] max-md:w-full flex justify-center flex-col gap-3 '>
        {process.map((p, i) => {
          const { title, description, image } = p
          return (
            <div key={i}
              className='flex gap-5 
                '
            >
              <div className='flex-center px-4 py-3 h-fit w-fit bg-white shadow-gray-400'>
                <Image
                  src={image}
                  className='object-cover size-fit '
                  width={300}
                  height={300}
                  alt='image'
                />
              </div>
              <div className='space-y-3'>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Process
