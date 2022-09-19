import React,{useState, useEffect} from "react";
import Footer from "../components/Footer";
import WorkCard from "../components/WorkCard";
import img from "../assets/img4.jpg"

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

<section  className="w-full h-96 bg-[url('https://www.gologic.ca/wp-content/uploads/2021/03/les-outils-devops.jpg')] bg-cover bg-center flex justify-center items-center relative overflow-hidden ">
  
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
                       Devops
                    </h2>
                    <p className="text-l text-body-color  font-bold text-gray-700">
                    A compound of development (Dev) and operations (Ops), DevOps is the union of people, process, and technology to continually provide value to customers.

What does DevOps mean for teams? DevOps enables formerly siloed roles—development, IT operations, quality engineering, and security—to coordinate and collaborate to produce better, more reliable products. By adopting a DevOps culture along with DevOps practices and tools, teams gain the ability to better respond to customer needs, increase confidence in the applications they build, and achieve business goals faster.
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