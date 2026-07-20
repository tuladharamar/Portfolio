import { useState } from 'react';
import Logo from '../assets/Abelton.jpg'
import Nav from '../Constant/Nav'
import More from '../Constant/More';
import More2 from '../Constant/More2';


const Navbar = () => {
    const [more, setMore] = useState(false);
    return (
        <>
            <div className="py-5 border-b-2 border-gray-200   ">
                <div className="px-5 md:px-15 mx-auto  ">
                    <div className="flex justify-between ">
                        {/* Nav */}
                        <div className='md:px-5 flex items-center gap-10  relative '>
                            {/* logo */}
                            <img src={Logo} alt="" className="h-10" />
                            <ul className='hidden lg:flex justify-center items-center gap-10 cursor-pointer '>
                                {Nav.map(item => (
                                    <li key={item.id} className='font-semibold text-xl'>
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                            <span className='hidden lg:flex cursor-pointer font-semibold text-xl text-red-400' onClick={() => setMore((prev) => !prev)}>More {more ? "-" : "+"}</span>
                            {more && (
                                <div className="absolute top-16 left-0 bg-white border border-gray-200 shadow-xl rounded-lg p-8 w-[460px] z-50">

                                    {/* More on Ableton.com */}
                                    <div className="mb-10">
                                        <h1 className="pb-5 text-xl font-bold">More on Ableton.com:</h1>
                                        <ul className="flex flex-col gap-4">
                                            {More.map(moreItem => (
                                                <li
                                                    key={moreItem.id}
                                                    className="font-semibold cursor-pointer hover:text-red-500 transition-colors"
                                                >
                                                    {moreItem.label}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* More from Ableton */}
                                    <div>
                                        <h1 className="pb-5 text-xl font-bold">More from Ableton:</h1>
                                        <div className="grid grid-cols-2 gap-8">
                                            {More2.map(more2 => (
                                                <div key={more2.id} className="flex flex-col">
                                                    <span className="font-bold text-lg">{more2.label}</span>
                                                    <p className="text-gray-600 text-sm mt-1 leading-snug">
                                                        {more2.content}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Sign */}
                        <div className='hidden md:flex justify-center items-center gap-5'>
                            <a href='' className='text-blue-500 cursor-pointer'>Try live 12 for free</a>
                            <a href='' className='cursor-pointer'>Log in or register</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar