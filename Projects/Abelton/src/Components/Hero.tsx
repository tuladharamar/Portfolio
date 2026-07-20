import header from '../assets/header.avif'
import photo1 from '../assets/photo1.avif';
import photo2 from '../assets/photo2.avif'
const Hero = () => {
    return (
        <div className='mt-20'>
            <div className='max-w-7xl mx-auto relative px-5'>
                <img src={header} alt='' className='' />
                <span className='text-[100px] font-bold text-red-400 absolute top-10 md:top-30 left-1/2 -translate-x-1/2'>Ableton</span>
            </div>

            <div className='md:max-w-7xl mx-auto mt-50 md:mt-40 px-8  '>
                <h1 className='text-3xl leading-10'>
                    We make &nbsp;
                    <span className='text-blue-500'>Live, Push, Note, Move </span>
                    and &nbsp;
                    <span className='text-blue-500'>Link</span>&nbsp;
                    <span className=' '>—</span>&nbsp;
                    unique software and hardware for music creaction and performance. With these products, our community of users creates amazing things.
                </h1>
                <p className='my-7'>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
            </div>
            <div className='relative h-48 md:min-h-screen mb-50 px-10'>
                 <div className='h-50 overflow-hidden w-50 z-10 absolute top-13 '>
                    <img src={photo1} alt="photo1" className='object-cover h-full '/>
                </div> 
                <div className='bg-yellow-100 pl-30 py-30 z-0 absolute right-0 pr-5 '>
                    <img src={photo2} alt="photo1" className='h-30'/>
                </div>


            </div>
            <div className='max-w-7xl mx-auto flex flex-col justify-center items-center px-5'>
                <h1 className='text-2xl font-bold max-w-3xl mx-auto pb-10'>
                    Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.
                </h1>
                <p className='text-gray-300 max-w-3xl mx-auto'>
                    We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.
                </p>
            </div>
        </div>
    )
}

export default Hero