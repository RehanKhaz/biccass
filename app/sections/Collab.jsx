import { collab } from '../constant'
import Image from 'next/image'

const Collab = () => {
  return (
    <section className='my-[4em] common-padding max-md:my-[2.5em]'>
      <h2 className='text-center text-4xl'>
        More than 25,000 Teams <br className='md:hidden' /> use Collab
      </h2>
      <br />
      <br />
      <div className='flex-center gap-8 flex-wrap'>
        {collab.map((item, i) => {
          const { image, alt } = item
          return (
            <div key={i}>
              <Image
                src={image}
                className='object-cover size-fit '
                width={200}
                height={300}
                alt={alt}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Collab
