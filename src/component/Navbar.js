import Logo from '../Images/LogoNavbar.png'
const Navbar=()=>{
return(<>
  <div className=' bg-gray-200'>
  <div className=' h-12 bg-white relative top-4 mx-2 mb-2 rounded-full flex justify-between items-center px-2 md:max-w-1000 md:mx-auto '>
    <div className='flex items-center'>
        <div className=' max-w-7 rounded-3xl mr-[2px]'><img src={Logo} /></div>
        <h1 className=' font-bold'>InfyGPT</h1>
    </div>
    <div className='flex space-x-3 '>
        <ul className=' invisible md:visible  py-1 ' ><li className=' space-x-3 font-extralight'><a className=' py-1 px-1 rounded-2xl hover:bg-gray-200 '>How it works</a><a className=' py-1 px-1 rounded-2xl hover:bg-gray-200 '>Pricing</a></li></ul>
        <button className='bg-PrimaryColor h-9 rounded-full w-20 text-white font-light hover:bg-green-900'>Sign up</button>
    </div>


  </div>
  </div>
 
       </>)
}
export default Navbar;