import React ,{useState, useEffect} from 'react'
import Footer from "../components/Footer";
import WorkCard from "../components/WorkCard";
import Cybery from "../assets/Cyber-security.jpg"

 function DataFetching() {

   const [posts, setPosts] = useState([])

   useEffect(() => {
   
      const fetchData= async () => {
         const result = await fetch('http://localhost:5000/api/CyberSec')
        const jsonResult =await result.json()

         setPosts(jsonResult)
      }

     fetchData()
   },[]);
    
    return (
   <div>
  
  <section  className="w-full h-96 bg-[url('https://thumbs.dreamstime.com/b/cyber-security-information-privacy-data-protection-concept-server-room-background-cyber-security-information-privacy-139659406.jpg')] bg-cover bg-center flex justify-center items-center relative overflow-hidden ">
   {/* <div className="heading">
    <h1 className="font-extrablod font-mono leading-tight text-9xl mt-0 mb-2 text-cyan-600">Projects</h1>
    <p className="font-extrablod font-serif leading-tight text-8xl mt-0 mb-2 text-gray-200">Cyber security</p>
   </div> */}
   </section>
   <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
   <div className="flex flex-wrap justify-center -mx-4">
              <div className="w-full px-8">
                 <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[1140px] space-y-9">
                    <h2
                       className="
                       font-bold
                       text-3xl
                       sm:text-4xl
                       md:text-[40px]
                       text-slate-900
                       mb-4
                       
                       "
                       >
                       CYBER SECURITY
                    </h2>
                    <p className="text-l text-body-color  font-bold text-gray-700">
                    Cybersecurity technology and best practices protect critical systems and sensitive information from an ever-growing volume of continually evolving threats. Cybersecurity is the practice of protecting critical systems and sensitive information from digital attacks. Also known as information technology (IT) security, cybersecurity measures are designed to combat threats against networked systems and applications, whether those threats originate from inside or outside of an organization.
                    </p>
                 </div>
              </div>
        </div>
        </section>
    {posts.map(post => (
           < WorkCard key={post._id} title = {post.title} body={post.body} category={post.category}  img={Cybery}/>
           ))}
    
    <Footer/>
  
   
   </div>
  )
  };
  
  export default DataFetching;