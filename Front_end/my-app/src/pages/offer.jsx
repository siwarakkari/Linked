import { Card} from '../components/JobCard'
import Head from '../components/head'
import Footer from "../components/Footer"
import React ,{useState, useEffect} from 'react'




function DataFetchin() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
  
     const fetchData= async () => {
        const result = await fetch('http://localhost:5000/api/offers');
        
     
     const jsonResult = await result.json();

    setPosts(jsonResult);

  }   
    fetchData()
   },[]);


  return (
    <>
  <Head>
        <title>Linked</title>
    </Head>
    <section  className="w-full h-96 bg-[url('https://news.comschool.com.br/wp-content/uploads/2019/08/vaga-estrategista-de-contas.jpg')] bg-cover bg-center flex justify-center items-center relative overflow-hidden ">
   {/* <div className="heading">
    <h1 className="font-extrablod font-mono leading-tight text-9xl mt-0 mb-2 text-cyan-600">Projects</h1>
    <p className="font-extrablod font-serif leading-tight text-8xl mt-0 mb-2 text-gray-200">Cyber security</p>
   </div> */}
   </section>

    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5">
      <div className="p-4 md:p-10 col-span-4 grid gap-4 grid-cols-1 md:grid-cols-3">
        {posts.map(post => (
            <Card key={post._id} title= {post.title} campany={post.campany} location={post.location} date={post.date} requirements={post.requirements} type={post.type} tasks={post.tasks} aboutCompany={post.aboutCompany}/>
            ))}
      </div>
      <div className="hidden xl:block p-10">
        <div className="text-white bg-dark-2 p-4 rounded-md ">
          I honstly don&#39;t know what to put here
        </div>
      </div>
    </div>
    <Footer/>
    </>
        
  )
 }
 export default DataFetchin;

//  export default function Offer() {
// const data = [
//     {
//       title: 'Backend Software Engineer',
//       company: 'Yassir',
//       location: 'Tunis, Tunisia',
//       date: '6 months ago',
//       tasks: [    ],
//       about:"",
//           requirements: [
//         ],
//       applied: 162,
//       type: 'Full-time'
   
//     },
//     {
//       title: 'Machine learning Engineer',
//       company: 'InstaDeep Ltd',
//       location: 'Paris, French',
//       date: '6 months ago',
//       tasks: [
//       ],
//       about:
//           'Hey',
//       requirements: [
//         ],
//       applied: 98,
//       type: 'Full-time',
      
//     },
//     {
//       title: 'Front-End Engineer',
//       company: 'cognira',
//       location: 'Ariana, Tunisia',
//       date: '6 months ago',
//       tasks: [
//       ],
  
//       requirements: [
       
//       ],
//       applied: 80,
//       type: 'Full-time',
      
//     },
//     {
//       title: 'MlOps Engineer',
//       company: 'InstaDeep',
//       location: 'Paris, French',
//       date: '2 months ago',
//       tasks: [    ],
//       about:
//       "heyy",
//       requirements: [
     
//       ],
//       applied: 162,
//       type: 'Full-time',
      
//     },
//     {
//       title: 'Deep learning Engineer',
//       company: 'Open NLP',
//       location: 'Paris, French',
//       date: '1 months ago',
//       tasks: [
  
//       ],
//       about:"",
//       requirements: []
//       ,
//       applied: 5,
//       type: 'Full-time',
  
//     },
//     {
//       title: 'Cloud Engineer',
//       company: 'Google ',
//       location: 'Paris, French',
//       date: '6 months ago',
//       tasks: [
  
//       ],
//       about: "",
//       requirements: [],
//       applied: 14,
//       type: 'Full-time',
      
//     },
//     {
//       title: 'Designer',
//       company: 'Value',
//       location: 'U.K ',
//       date: '3 months ago',
//       tasks: [],
//       about:""
//       ,
//       requirements: [
//          ],
//       applied: 66,
//       type: 'Full-time',
      
//     },
//     {
//       title: 'Front-End Engineer',
//       company: 'cognira',
//       location: 'Ariana, Tunisia',
//       date: '6 months ago',
//       tasks: [
//       ],
  
//       requirements: [
       
//       ],
//       applied: 80,
//       type: 'Full-time',
      
//     },
//     {
//       title: 'MlOps Engineer',
//       company: 'InstaDeep',
//       location: 'Paris, French',
//       date: '2 months ago',
//       tasks: [    ],
//       about:
//       "heyy",
//       requirements: [
     
//       ],
//       applied: 162,
//       type: 'Full-time',
      
//     },
//     {
//       title: 'Deep learning Engineer',
//       company: 'Open NLP',
//       location: 'Paris, French',
//       date: '1 months ago',
//       tasks: [
  
//       ],
//       about:"",
//       requirements: []
//       ,
//       applied: 5,
//       type: 'Full-time',
  
//     },
//     {
//       title: 'Cloud Engineer',
//       company: 'Google ',
//       location: 'Paris, French',
//       date: '6 months ago',
//       tasks: [
  
//       ],
//       about: "",
//       requirements: [],
//       applied: 14,
//       type: 'Full-time',
      
//     },
//     {
//       title: 'Designer',
//       company: 'Value',
//       location: 'U.K ',
//       date: '3 months ago',
//       tasks: [],
//       about:""
//       ,
//       requirements: [
//          ],
//       applied: 66,
//       type: 'Full-time',
      
//     },
//   ]