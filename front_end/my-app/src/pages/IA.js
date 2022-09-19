import React ,{useState, useEffect} from 'react'
import Footer from "../components/Footer";
import WorkCard from "../components/WorkCard";
import AI from "../assets/AI.jpg";

 

function DataFetching() {

     const [posts, setPosts] = useState([])
  
     useEffect(() => {
     
        const fetchData= async () => {
           const result = await fetch('http://localhost:5000/api/Ai')
          const jsonResult =await result.json()
  
           setPosts(jsonResult)
        }
  
       fetchData()
     },[]);
 
     return (
      <div>
      <section className="w-full h-96 bg-[url('https://www.themarketingguardian.com/wp-content/uploads/2021/04/New-Project-6.jpg')] bg-cover bg-center flex justify-center items-center relative overflow-hidden ">
   
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
                       ARTIFICIAL INTELLIGENCE & MACHINE LEARNING PROJECTS
                    </h2>
                    <p className="text-l text-body-color  font-bold text-gray-700">
                    In this current technology-driven world, machine learning is a prominent area that makes our machine or electronic device intelligent. The purpose of this field is to transform a simple machine into a machine with the mind. In this article, we explore machine learning and artificial intelligence projects to boost your interest. Because these AI and ML projects are so competitive, tricky, and interesting to develop. I firmly believe these projects are the best place to invest your time and skill. Let’s move on to explore interesting, innovative as well as easy machine learning projects.
                    </p>
                 </div>
              </div>
        </div>
        </section>
     
     {posts.map(post => (
           < WorkCard key={post._id} title = {post.title} body={post.body} category={post.category}  img={AI}/>
            ))}
     
     <Footer/>

    
    </div>
  )
};

export default DataFetching;
