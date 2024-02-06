import { VscArrowCircleRight } from "react-icons/vsc";
const Future=()=>{
    return(<>
    <div className=" mt-16 h-auto py-6 px-3 ">
        <div className=" mb-8 md:text-center md:mb-16">
            <h6 className=" text-PrimaryColor font-normal leading-7">Your Own AI Chatbot</h6>
            <h1 className=" font-bold text-2xl leading-7 mb-2   ">The Future of Conversational AI</h1>
            <p className=" leading-6 font-light">Developing a personalized chatbot trained on your content
                <br></br>is now as simple as pressing a single button.</p>
        </div>

        <div className="  md:flex max-sm:space-y-6">
            <div>
                <div className=" flex ">
                    <p className="  text-PrimaryColor text-2xl mr-1">< VscArrowCircleRight /></p>
                    <p className=" font-bold">Enter your website URL</p>
                </div>
                <p className="font-light leading-6">Our automated system will seamlessly retrieve all pages from your website and present them for your review effortlessly.</p>
            </div>

            <div>
                <div className=" flex ">
                    <p className="  text-PrimaryColor text-2xl mr-1">< VscArrowCircleRight /></p>
                    <p className=" font-bold">Start Training</p>
                </div>
                <p className="font-light leading-6">Select the pages you want the chatbot to train on and click on Start Training.</p>
            </div>

            <div>
                <div className="flex">
                    <p className="  text-PrimaryColor text-2xl mr-1">< VscArrowCircleRight /></p>
                    <p className=" font-bold">Your own chatbot</p>
                </div>
                <p className="font-light leading-6">You now have your own chatbot that can answer anything related to your website content.</p>
            </div>
        </div>
        
        
     </div>
    
    
    
    </>)
}

export default Future;