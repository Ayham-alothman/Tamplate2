import Logo from '../Images/LogoNavbar.png'
import { VscTwitter } from "react-icons/vsc";

const Footer=()=>{
    return(<>
    <div className=" bg-black ">
        <div className=" w-auto bg-red-300  mx-auto mt-10 py-6  ">
            
          <div className='flex mx-auto  bg-blue-300   py-5  '>
            <div className='   rounded-3xl mr-[2px] max-w-8 '><img src={Logo} /></div>
            <h1 className=' font-bold'>InfyGPT</h1>
          </div>
          <div>
            <ul><li className=' space-x-4 text-center'> <a className=' cursor-pointer'>Pricing</a><a>API Docs</a><a>Contact us</a><a>Terms & Conditions</a> </li></ul>
          </div>
          <div className='flex w-48 border-2 px-2 rounded-xl m-auto hover:bg-blue-100 cursor-pointer mt-5 '>
            <p className=' pt-1 text-blue-500 mr-2'><VscTwitter /></p> <p className=' text-gray-500 leading-6 font-light'>Follow us on twitter</p> 
          </div>
          <div className=' text-center my-6'>
            <p className=' text-gray-500 font-thin leading-6'>tailwindtap@gmail.com</p>
          </div>


        </div>
    </div>
    </>)
}

export default Footer;