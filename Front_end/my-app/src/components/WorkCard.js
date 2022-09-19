import AI from "../assets/AI.jpg";

function WorkCard(props){

  return (
   <section >
           
  <div class="pt-6 pb-12 bg-gray-300 ">  
  <div id="card" class="">
    {/* <div class="container w-100 lg:w-4/5 mx-auto flex flex-col"> */}
   
      <div v-for="card in cards" class="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2"> 
       
        <div class="h-64 w-auto md:w-1/2">
          <img class="inset-0 h-full w-full object-cover object-center" src={props.img}  ></img>
        </div>
        
        <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
        <h5 class="text-gray-900 text-xl font-medium mb-2">Title:</h5>
          <h3 class="font-semibold text-lg leading-tight truncate"> {props.title} </h3>
          <h5 class="text-gray-900 text-xl font-medium mb-2">Description:</h5>
          <p class="mt-2">
            { props.body}
          </p>
          <h5 class="text-gray-900 text-xl font-medium mb-2">Category</h5>
          <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
          {props.category}
          </p>
       
          <div className="d-grid gap-2 d-md-block">
           <a href='/contact' className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-m leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out">contact owner</a>
           <a href='url' className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-m leading-tight uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out">View project</a>    
       </div>
       </div>
       </div>
    </div>
  </div>


   
  
   </section>
   
  );
};
export default WorkCard;

 
