import React from 'react'; 
import {  ContainedLink } from './Button'
import { Link } from "./Button"



import { createPopper } from "@popperjs/core";

const Dropdown = ({ color }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-slate-700")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
       <nav className="bg-white sticky top-0 shadow  px-4 md:px-10 py-4 flex items-center z-50">
 
      <Link to="/" className="font-black text-xl font-tt hover:text-black">
         Linked
      </Link>

       <div className="ml-auto"></div>
      <Link to="/"><button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Home</button>
    </Link>
       <Link to="/offers"><button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Offer</button>
         </Link>
    
      <div className="flex flex-wrap">
          <div className=" inline-flex align-middle w-full"> 
            <button
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              project
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <Link
                to="/Artificial_Intelligence"
                  
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-slate-700" : "text-white")
                 }
                // onClick={e => e.preventDefault()}
               >
                Artificial Intelligence 
              
              </Link>
              <Link
                to="/CyberSecurity"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-slate-700" : "text-white")
                }
                // onClick={e => e.preventDefault()}
              >
               Cyber Security
              </Link>
              <Link
                to="/Web_Development"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-slate-700" : "text-white")
                }
                // onClick={e => e.preventDefault()}
              >
               Web Development
              </Link>
              <Link
                to="/Devops"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-slate-700" : "text-white")
                }
                // onClick={e => e.preventDefault()}
              >
               Devops
              </Link>
              </div>
               <Link
                to="/auth/register"      
                className={
                "text-l py-3 px-1 font-normal block w-full whitespace-nowrap bg-transparent Indigo-700 blod" +
                +
                  (color === "white" ? " text-slate-700" : "text-white")}
              
                // onClick={e => e.preventDefault()}
               >
                sign up 
              
              </Link>
             
       <ContainedLink to="/auth/login">Login</ContainedLink>
          </div>
         </div>
     
    </nav>
     </>
  );
};

export default function DropdownRender() {
  return (
    <>
      <Dropdown color="white" />
    </>
  );
}
// export default  function Navbar() {
//   return (
//     <nav className="bg-white sticky top-0 shadow  px-4 md:px-10 py-4 flex items-center z-50">
//       <Link to="/" className="font-black text-xl font-tt hover:text-black">
//         Linked
//       </Link>

//       <div className="ml-auto"></div>
//       <Link to="/"><button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Acceuil</button>
// </Link>
//       <Link to="/offers"><button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Condidate</button>
// </Link>

//       <Link to="/project">    <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Project</button>
     
//       </Link>
      
//       <Link to="/auth/login"><button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Login</button>
// </Link>
//       <ContainedLink to="/auth/register">Signup</ContainedLink>
//     </nav>
//   )
// }
