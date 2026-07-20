

const SubNavbar = () => {
  return (
   <>
    <div className='md:pl-15 py-5 '>
        <div className='flex justify-center md:justify-start items-center gap-5 '>
            <h1 className='font-bold hover:text-orange-300  cursor-pointer transition-colors duration-300'> About</h1>
            <h1 className='font-bold hover:text-orange-300  cursor-pointer transition-colors duration-300'>Jobs</h1>
            <h1 className='font-bold hover:text-orange-300  cursor-pointer transition-colors duration-300'>Apprenticeships</h1>
        </div>
    </div>
   </>
  )
}

export default SubNavbar