import React, {useState, useEffect}from "react";
import Footer from "../components/Footer";
import WorkCard from "../components/WorkCard";
import img from "../assets/img1.jpg"


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

  <section  className="w-full h-96 bg-[url('https://softwareguia.com/wp-content/uploads/video-editing-laptop-768x384.png')] bg-cover bg-center flex justify-center items-center relative overflow-hidden ">
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
                      WEB DEVELOPMENT
                    </h2>
                    <p className="text-l text-body-color  font-bold text-gray-700">
                    A correctly designed web site is essential for the success of any enterprise. A singular web site has the capability of attracting many guests to the enterprise’s web site, serving to to show them into prospects. Net improvement will be stated to be one of the vital demanding duties as a result of it contains growing, designing, creating content material, search engine marketing and different facets.
                    </p>
                 </div>
              </div>
        </div>
        </section>
  {posts.map(post => (
         < WorkCard key={post._id} title = {post.title} body={post.body} category={post.category}  img={img}/>
         ))}
  
  <Footer/>

 
 </div>
)
};

export default DataFetching;