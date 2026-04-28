import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();

  const time = new Date();
  const hours = time.getHours();
  return (
    <div className="bg-secondary  text-white py-4.5 px-10 flex  justify-between items-center flex-col md:flex-row gap-5">
      <div className=" text-sm">
        <p className="text-[12px] md:text-sm">Have a nice {hours < 12 ? "Morning" : hours < 18 ? "Afternoon" : hours < 24 && hours > 20 ?"Evening": "Night"}</p>
      </div>
      <div className='  gap-5  text-sm'>
        <p className='text-[12px] md:text-sm '>Copyright © {year} | All rights reserved by Tuladhar</p>
      </div>
      <div className=" gap-5 text-2xl flex">
        <div className="">
          <a href="https://www.facebook.com/amar.tuladhar.142/" target="_blank"><FaFacebook /></a>
        </div>
        <div className="">
          <a href="https://www.instagram.com/amar.tuladhar.142/" target="_blank"><FaInstagram /></a>
        </div>
        <div className="">
          <a href="mailto:tuladharamar@gmail.com" ><CgMail /></a>
        </div>
        <div className="">
          <a href="https://github.com/tuladharamar" target="_blank"><FaGithub /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
