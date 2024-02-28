import React from 'react'
import HTML from '../Assets/html.png'
import CSS from '../Assets/css.png'
import Boot from '../Assets/pngwing.com (5).png'
import JS from '../Assets/javascript.png'
import Tail from '../Assets/tailwind.png'
import SASS from '../Assets/sass.webp'
import ReactImg from '../Assets/react.png'
import Node from '../Assets/node.png'
import mongo from '../Assets/mongo.png'
import redux from '../Assets/redux.webp'
import git from '../Assets/git.webp'
import github from '../Assets/github.png'


function Skills() {
    return (
        <>
            <div id="skills" className=" py-28 w-full p-16 min-h-screen bg-gradient-to-b from-orange-500 to-blue-300">
                <div className=" mx-auto  flex flex-col justify-center w-full h-full">
                    <div>
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
                            Skills
                        </p>
                        <p className="py-4">These are the technologies I've worked with :</p>
                    </div>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center py-8">
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
                            <p className="my-4">HTML</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
                            <p className="my-4">CSS</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={JS} alt="HTML icon" />
                            <p className="my-4">Java Script</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={Boot} alt="HTML icon" />
                            <p className="my-4">Bootstrap</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={Tail} alt="HTML icon" />
                            <p className="my-4">Tailwind CSS</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={SASS} alt="HTML icon" />
                            <p className="my-4">SASS</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
                            <p className="my-4">React JS</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
                            <p className="my-4">Node JS</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={mongo} alt="HTML icon" />
                            <p className="my-4">MongoDB</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={redux} alt="HTML icon" />
                            <p className="my-4">Redux</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={git} alt="HTML icon" />
                            <p className="my-4">Git</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img className="w-20 mx-auto" src={github} alt="HTML icon" />
                            <p className="my-4">Github</p>
                        </div>
                    </div>
                </div>
            </div>







            {/* <div className='bg-[#becfe9]'>
                <div className='text-blue-950 p-5  w-full'>
                    <h2 className='text-4xl font-bold inline border-b-4  border-blue-950'>Skills</h2>
                    <h3>What I Can Do..</h3>
                </div>
                <div className='sm:ms-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 text-center justify-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src="https://images.pexels.com/photos/838981/pexels-photo-838981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        <p className='position-fixed ms-5'>html</p>
                    </div>
                    
                </div>
            </div> */}
        </>
    )
}

export default Skills
