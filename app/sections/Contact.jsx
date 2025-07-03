import { PlayCircle, PlayIcon, Quote } from 'lucide-react'
import Image from 'next/image'

const Contact = () => {
  return (
    <section id='testimonials' className='common-padding mt-[3em] min-h-[70vh] flex-center  bg-[#161C28]'>
      <div className='grid grid-cols-2 md:px-[3em] max-md:grid-cols-1 gap-[2em] my-[3em] max-md:my-[1.5em]'>
        <div className='space-y-4'>
          <h2 className='text-white'>People are Saying About DoWhith</h2>
          <p>
            Everything you need to accept to payment and grow your money of
            manage anywhere on planet
          </p>

          <Quote size={60} className='scale-x-[-1] text-white' />

          <p>
            I am very helped by this E-wallet application , my days are very
            easy to use this application and its very helpful in my life , even
            I can pay a short time 😍
          </p>
          <br />
          <p>_ Aria Zinanrio</p>
          <div className='flex items-center gap-3'>
            {[1, 2, 3, 4].map((img, i) => {
              return (
                <Image
                  src={`/images/man${i + 1}.png`}
                  width={50}
                  className='object-cover'
                  height={50}
                  alt='Testimonail'
                />
              )
            })}
            <PlayCircle className='text-white' size={50} />
          </div>
        </div>
        {/* Contact Form */}
        <div className='bg-[#222938] flex-center gap-4 flex-col lg:px-[3em] max-lg:px-[1.5em] py-[1em] max-md:px-[1em] max-md:py-2 rounded-xl'>
          <Image
            src={`/images/contact_image.png`}
            width={200}
            className='object-cover h-[86px] w-[72px] '
            height={300}

            alt='Testimonail'
          />
        <h4 className='text-white tracking-normal font-medium'>Get Started</h4>
        <div className='w-[90%] max-md:w-full space-y-2'>

        <label className='text-[1.1em] text-left w-full text-white' htmlFor="email">
          Email
        </label>
        <input type="text" name='email' className='outline-none text-[1em] w-full  py-4 indent-3.5 rounded-lg bg-white font-medium text-neutral-700' placeholder='Enter Your Email' />
        </div>
        <div className='w-[90%] max-md:w-full space-y-2'>

        <label className='text-[1.1em] text-left w-full text-white' htmlFor="email">
          Message
        </label>
        <input type="text" name='email' aria-rowspan={2} className='outline-none text-[1em] w-full  py-7 indent-3.5 rounded-lg bg-white font-medium text-neutral-700' placeholder='What do you Say?' />
        </div>
        <button className='w-[90%] max-md:w-full rounded-lg py-3 accent-bg text-white'>
          Request Demo
        </button>
        <p className='text-right w-[90%] mt-[-1.2em]'>
          <span className='text-neutral-700'>or</span> Start Free Trial
        </p>
   
        </div>
      </div>
    </section>
  )
}

export default Contact
