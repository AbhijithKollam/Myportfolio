import React from 'react'
import { Col, Row } from 'react-bootstrap'
import profileImg from '../Assets/ABHIJITH-removebg-preview.png'


function About() {
    return (
        <>
            <div id='about'>
                <Row style={{ '--bs-gutter-x': '0rem' }} className='py-5 min-h-screen bg-gradient-to-b from-blue-500 to-orange-500'>
                    <Col  xs={12} sm={12} md={6} lg={6} className=' p-16'>
                        <div>
                            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                            <p className='py-4'>WHO I Am</p>
                        </div>
                        <div>
                            <p>Hello, I'm Abhijith S, a passionate Full Stack Developer with a strong foundation in computer science and a Diploma in ECE. I thrive on turning ideas into digital solutions and enjoy the process of creating seamless, user-friendly experiences.</p>
                            <p className='mt-3'>In my professional journey, I have successfully contributed to various projects, utilizing my expertise in the MERN stack. From designing responsive user interfaces with React to building robust back-end services with Node.js and Express, my goal is to create seamless and enjoyable user experiences</p>

                        </div>

                    </Col>
                    <Col sm={12} md={6} lg={6} xs={12} className='text-center p-5 mx-auto '>
                        <img className=' profileImg shadow-md shadow-[#040c16]  hover:scale-110 duration-500 rounded-3xl md:rounded-none' src={profileImg} alt="" />
                    </Col>
                </Row>
            </div>


        </>
    )
}

export default About
