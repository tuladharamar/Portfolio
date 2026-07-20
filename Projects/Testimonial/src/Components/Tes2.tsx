import { BiStar } from "react-icons/bi"


const tes2 = () => {
  return (
    <>
    <div className="flex justify-center items-center h-screen gap-10 max-w-150 mx-auto ">
        <div className="">
            <img src="https://edimakor.hitpaw.com/images/edimakor-2026/article/video-tips/passport-size-photo-prompt-for-girls.jpg" alt="" className="rounded-2xl h-60 w-120"/>
        </div>
        <div className="p-7 bg-gray-600 rounded-2xl">
            <span className="flex items-center"><BiStar size={30} color="yellow"/><BiStar size={30} color="yellow"/><BiStar size={30} color="yellow"/><BiStar size={30} color="yellow"/><BiStar size={30} color="yellow"/></span>
            <h1 className="text-3xl font-bold mt-5 text-white ">Jackie Mackle</h1>
            <p className="text-gray-300 mt-2">Engineering Manager</p>
            <p className="font-semibold mt-5 text-white">I find myself recommending roadmap.sh to all the internees or junior developers. It's great way to skill up and grow in your career.</p>
        </div>
    </div>
    </>
  )
}

export default tes2