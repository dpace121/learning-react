import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {

  return (
     <div className="absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between ">
        <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center '>{props.id+1}</h2>
        <div>
        <p className='text-xl leading-relaxed text-white mb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita voluptas est repellendus aperiam nam.</p>
        <div className='flex justify-between'>
          <button style={{backgroundColor:props.color}} className='text-white font-medium px-8 py-3 rounded-full relative z-10'>{props.tag}</button>
          <button className=' text-white font-medium px-4 py-3 rounded-full relative z-20'><ArrowRight /></button>
        </div>
        </div>
      </div>
  )
}

export default RightCardContent
