import React from 'react'
import resume from '../Assets/CV1.pdf'

function Home() {
    return (
        <>
            <div id='home' className=' text-center  justify-center items-center py-48 h-screen   min-h-screen bg-gradient-to-b from-yellow-500 to-blue-500'  >
                <p className='text-center text-6xl font-bold sm:text-6xl xs:text-4xl' > Hi, I'm <span className='text-orange-100'>A</span><span className='text-orange-200'>b</span><span className='text-orange-300'>h</span><span className='text-orange-400'>i</span><span className='text-orange-500'>j</span><span className='text-orange-600'>i</span><span className='text-orange-700'>t</span><span className='text-orange-800'>h</span></p>
                <p md={12} sm={12} className='text-2xl  mt-3 text-bold'> A Full Stack Developer</p>
                <div className='mt-5'>
                    <p class="py-4 text-xl text-gray-600 max-w-[70%] m-auto"> I’m a full-stack developer specializing in building exceptional digital experiences. Currently, I’m focused on
                        building responsive full-stack web applications.</p>
                </div>
                <div className=' d-flex justify-content-center align-item-center m-3 gap-5' >
                    <a href="www.linkedin.com/in/abhijith-s-753560294" target='_blank'><i class="fa-brands fa-linkedin-in fa-2x hover:scale-150 duration-500"></i></a>
                    <a href="https://github.com/AbhijithKollam/" target='_blank'><i class="fa-brands fa-github fa-2x hover:scale-150 duration-500"></i></a>
                    <a href="https://www.instagram.com/a_b_s_0_7/?hl=en" target='_blank'> <i class="fa-brands fa-instagram fa-2x hover:scale-150 duration-500"></i></a>
                    <a href={resume}  target='_blank'><i class="fa-solid fa-file fa-2x hover:scale-150 duration-500"></i></a>



                </div>

            </div>

        </>
    )
}

export default Home
