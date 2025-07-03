import { ArrowRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer id='contact' className='common-padding bg-[#161C28]'>
      <div className='flex-between py-[3em] gap-4 flex-wrap'>
        <div className='space-y-3'>
          <h1 className='font-semibold text-[2.6em] max-md:text-[2em] accent-color '>
            Biccas
          </h1>
          <p>Get Started Now try our Product</p>
          <div className='w-[25em] relative h-full overflow-hidden max-md:w-full flex-between border-2 border-neutral-300 px-6 py-2 rounded-4xl'>
            <input
              type='text'
              className='outline-none flex-1 border-none text-lg text-white placeholder:text-neutral-600'
              placeholder='Enter your Email here'
            />
            <div className='size-[3em] absolute right-0 translate-y-[-50%] top-1/2
             flex-center rounded-full accent-bg'>
              <ArrowRight className='size-8 text-white' />
            </div>
          </div>
        </div>
        <div className='space-y-3'>
          <h4 className='text-white'>Support</h4>
          <div className='space-y-2'>
            <p> Help Center </p>
            <p> Account Information </p>
            <p> About </p>
            <p> Contact Us </p>
          </div>
        </div>
        <div className='space-y-3'>
          <h4 className='text-white'>Help & Solution</h4>
          <div className='space-y-2'>
            <p> Talk to Support </p>
            <p> Support Doc </p>
            <p> System Status</p>
            <p> Covid Responde </p>
          </div>
        </div>
        <div className='space-y-3'>
          <h4 className='text-white'>Product</h4>
          <div className='space-y-2'>
            <p> Update</p>
            <p> Security </p>
            <p> Beta Test </p>
            <p> Pricing Product </p>
          </div>
        </div>
      </div>
      <div className='flex-between max-md:flex-col'>
        <p className='text-white leading-[1.2em] text-center'>
            © 2022 Biccas Inc. Copyright and rights reserved
        </p>
        <p className='text-white'>
            Terms & Conditions ◦ Privacy Policy
        </p>
      </div>
    </footer>
  )
}

export default Footer
