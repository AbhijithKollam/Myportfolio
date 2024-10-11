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
                            <p>Hello, I'm Abhijith S, a Dynamic MEARN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, Angular, and Node.js. Proficient in developing responsive user interfaces, optimizing server-side logic, and ensuring seamless database integration. Passionate about leveraging cutting-edge technologies to deliver high-quality solutions that enhance user experiences and meet business objectives.</p>
                            <p className='mt-3'>Skilled in full-stack development, with expertise in JavaScript, TypeScript, HTML5, and CSS3. Experienced in RESTful API design, version control using Git, and agile methodologies. Adept at collaborating with cross-functional teams to identify requirements and implement efficient solutions. Committed to continuous learning and keeping up with industry trends to drive innovation in web development.</p>

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
