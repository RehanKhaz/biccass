'use client'
import { useState } from 'react'
import { pricing } from '../constant'
import { Check } from 'lucide-react'
import CountUp from 'react-countup'

const Billing = () => {
  const [isYearly, setIsYearly] = useState(true)
  return (
    <section id='#pricing' className='common-padding space-y-5 my-[3em]'>
      <h2 className='text-center'>
        Choose Plan <br />
        That's Right For You
      </h2>
      <p className='text-center'>
        Choose plan that works best for you, feel free to contact us
      </p>

      <div className='mx-auto flex-center w-fit rounded-xl shadow-2xl shadow-neutral-300  bg-neutral-100 px-3 py-1'>
        <button
          onClick={() => setIsYearly(false)}
          className={`${
            !isYearly && 'accent-bg text-white px-5 py-2 text-xl rounded-xl'
          }`}
        >
          Bill Monthly
        </button>
        <button
          onClick={() => setIsYearly(true)}
          className={`${
            isYearly && 'accent-bg text-white px-5 py-2 text-xl rounded-xl'
          }`}
        >
          Bill Yearly
        </button>
      </div>
      
      <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 py-4 overflow-y-hidden'>
        {pricing.map((price, i) => {
          const {
            title,
            description,
            monthlyPrice,
            yearlyPrice,
            features,
            ctaBtn,
            benefitBtn
          } = price
          
          const priceValue = isYearly ? yearlyPrice : monthlyPrice
          const isPopular = i === 1
          
          return (
            <div
              key={i}
              className={`
                flex-center flex-col gap-4 px-4 py-4 shadow-lg rounded-xl shadow-neutral-300
                ${isPopular ? 'accent-bg min-h-[70vh] transform md:scale-[1.03] relative z-10' : 'bg-white min-h-[60vh]'}
                transition-all duration-300
              `}
            >
              <h4 className={`${isPopular && 'text-white'}`}>{title}</h4>
              <p className={`${isPopular && 'text-white'} text-xl text-center`}>
                {description}
              </p>
              
              <h2 className={`${isPopular && 'text-white'}`}>
                <CountUp
                  start={0}
                  end={priceValue}
                  duration={1.5}
                  prefix="$"
                  separator=","
                  decimal="."
                />
              </h2>
              
              {isPopular && (
                <button className='bg-[#85DAB9] text-white rounded-lg'>
                  Save 50$ Yearly
                </button>
              )}
              
              <div
                className={`
                  px-[2em] space-y-2 py-4 w-full rounded-xl
                  ${isPopular ? 'bg-white' : 'bg-neutral-100'}
                `}
              >
                {features.map(feature => (
                  <div key={feature} className='flex items-center gap-2'>
                    <div className='accent-bg size-6 flex-center rounded-full'>
                      <Check className='size-4 text-white font-bold' />
                    </div>
                    <p className='text-black'>{feature}</p>
                  </div>
                ))}
                
                <button className={`w-full ${isPopular ? 'accent-bg text-white' : 'accent-color bg-white'} rounded-xl`}>
                  {ctaBtn}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Billing