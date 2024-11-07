import React from 'react'
import { useState } from "react";
import { data } from "../data/data.js";
import '../styles/Footer.css'

const Work = () => {

  // projects file
  const project = data;
  //setProject(data);
  const [isHovered, setIsHovered] = useState(false);

  // const bgImg={
  //   backgroundImage: "url(https://media.istockphoto.com/id/465559373/photo/old-wood-background.jpg?s=612x612&w=0&k=20&c=mQ5fJU_4IwgCB8VK6g551yNVzsQJn7ZYpI8Ua6TeC0I=)",
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center',
  // }

  return (
    <div id ='works' className='py-10 w-full  min-h-screen  bg-gradient-to-b from-blue-300 to-yellow-500'>
      <div className=' mx-auto p-16 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4  border-blue-950'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work :</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center gap-4'>
          {
            project.length > 0 ?
              project.map((item) => (


                // <div style={{ backgroundImage: `url(${item.image})`, backgroundSize:"cover", backgroundPosition:"center", overflow:"hidden"}} className=' w-64 h-36 mb-4 transition-transform transform-gpu hover:scale-110 rounded-2xl'>
                //   {/* <img className='hover:opacity-0' src='https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' /> */}
                //   <div className='hover:opacity-100'>
                //     <button className='btn '>Code</button>
                //     <button className='btn'>Live</button>
                //   </div>
                // </div>

                <div>
                  <h2 className='pb-1'>{item.name}</h2>
                  <img src={`${item.image}`} alt="" className="rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500" />
                  <div className="button-container grid-cols-2">
                    <a href={`${item.github}`} target='_blank' rel="noopener noreferrer"><button className="btn btn-success m-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500">Github</button></a>
                    <a href={`${item.live}`} target='_blank' rel="noopener noreferrer"> <button className="btn btn-info shadow-md shadow-[#040c16] hover:scale-110 duration-500" >Live </button></a>
                  </div>
                </div>





              )) :
              <p>No items to display</p>
          }



        </div>


      </div>
    </div>
  );
};

export default Work;

