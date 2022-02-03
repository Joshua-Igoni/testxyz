import React from 'react';
import {ReactComponent as Automation} from '../../Automation.svg'
import {ReactComponent as Integration} from '../../integration 1.svg'
import {ReactComponent as Time} from '../../Time Tracking.svg'
import {ReactComponent as Report } from '../../Report and Analysis.svg'
import {ReactComponent as Task} from '../../Task Management.svg'
import {ReactComponent as Team} from '../../Team Collaboration.svg'
import {PaperAirplaneIcon} from '@heroicons/react/outline';
import {TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialTwitterCircular} from 'react-icons/ti'
import {BsFillCheckCircleFill} from 'react-icons/bs';
import {FaQuoteLeft} from 'react-icons/fa';


const Homepage = () => {
    return (
        <div className="w-screen">
        <div className="py-6 px-4 text-center bg-primary">
            <div className='text-2xl sm:text-3xl md:text-5xl'>
                <h1 className="capitalize text-secondary-3">great app for managing <br/>Your Projects</h1>
            </div>

            <div className="py-5 text-lg">
            <p className="text-secondary-3">Our app helps you to arrange, organize and prioritize your<br/>
            projects to guarantee smooth running of the projects</p>
            </div>

            <input type="text" placeholder='Enter Your Email Address' className="bg-white rounded-sm py-3 px-16 mx-3 my-2 placeholder-secondary-2" />
            <button className="bg-blue-700 px-5 py-3 rounded-lg text-white">Get Started</button>
            <img src={'./header.jpg'} alt="header" className="py-10 max-w-sm sm:max-w-2xl lg:max-w-4xl m-auto z-0"/>
        </div>

        {/* Brands */}
        <div className="absolute z-10 -mt-36 w-full m-auto py-10 bg-sky-200">
            <h1 className="text-center text-2xl uppercase font-semibold"> <span className="text-3xl">t</span>rusted by over 1000+ highly productive team</h1>
            <div className=" py-7 flex center justify-around">
                <img src="./slack-2 1.svg" alt="slack logo" className=" w-16 md:w-28 lg:w-48" />
                <img src="./google.svg" alt="google logo" className=" w-16 md:w-28 lg:w-36" />
                <img src="./ibm 1.svg" alt="ibm logo" className=" w-16 md:w-28 lg:w-36" />
                <img src="./stripe-3 1.svg" alt="stripe logo" className=" w-16 md:w-28 lg:w-36" />
                <img src="./dropbox 1.svg" alt="dropbox" className=" w-16 md:w-28 lg:w-36" />
            </div>        
        </div>

    {/* App Description */}
        <div>

            <div className="flex flex-wrap justify-evenly w-screen mt-10 mx-auto pt-16">
                <div className="px-16 w-1/2 xs:w-full xs:py-4 xs:px-16 md:my-10 md:py-4 lg:pt-20"> 
                    <h1 className="font-semibold text-2xl mb-3 leading-relaxed md:text-2xl md:mb-4 md:leading-normal lg:text-4xl lg:leading-relaxed lg:mb-6">Our App Creates The Ideal Workflow For Each Job</h1>
                    <p className="text-secondary leading-relaxed xs:text-md md:text-lg md:leading-normal 2xl">with stunning views that make project planning a snap, you can track your entire project from start to finish. 
                        Use a list, gantt, board or calendar view to manage your resources.</p>
                    <button className=" bg-primary px-6 py-2 rounded-md text-secondary-3 my-6">Get started</button>
                </div>
                <div className="w-1/2 xs:w-full xs:ml-12 -ml-5 lg:-ml-10 flex justify-end xs:justify-center">
                    <img src="./Group 578.png" alt="tasks" className="max-w-xs mt-7 md:max-w-sm lg:max-w-lg xl:max-w-2xl"/>
                </div>
            </div>

            <div className="flex flex-wrap justify-evenly w-screen mt-10 mx-auto">
            <div className="w-1/2 item-center flex justify-center ">
                    <img src="./Group 579.png" alt="tasks" className="max-w-xs mt-7 md:max-w-sm lg:max-w-lg xl:max-w-2xl"/>
                </div>
                <div className="py-20 px-16 w-1/2 xs:w-full xs:py-4 xs:px-16 md:my-10 md:py-4 lg:pt-20"> 
                    <h1 className="font-semibold capitalize text-2xl mb-3 leading-relaxed md:text-2xl md:mb-4 md:leading-normal lg:text-4xl lg:leading-relaxed lg:mb-6">Manage all your projects in one suitable workspace</h1>
                    <p className="text-secondary leading-relaxed xs:text-md md:text-lg md:leading-normal">Appera helps brings all your team together in one suitable workspace to plan, track and collaborate on any project</p>
                    <ul>
                        <li className="text-secondary flex py-4 items-center"> <BsFillCheckCircleFill size={20} color="#073AAB" className=" mr-6"/> Users can easily organize multiple projects </li>
                        <li className="text-secondary flex py-4 items-center"><BsFillCheckCircleFill size={20} color="#073AAB" className=" mr-6"/> Collaborate with your team mates</li>
                        <li className="text-secondary flex py-4 items-center"><BsFillCheckCircleFill size={20} color="#073AAB" className=" mr-6"/> Keep track of your team's progress and targets </li>
                    </ul>
                    <button className=" bg-secondary-2 text-primary px-6 py-2 rounded-md my-6">Learn more</button>
                </div>
                
            </div>

            <div className="flex flex-wrap justify-evenly w-screen mt-10 mx-auto">
                <div className="py-20 px-16 w-1/2 xs:w-full xs:py-4 xs:px-16 md:my-10 md:py-4 lg:pt-20"> 
                    <h1 className="font-semibold text-2xl mb-3 leading-relaxed md:text-2xl md:mb-4 md:leading-normal lg:text-4xl lg:leading-relaxed lg:mb-6 capitalize">Improve the speed with which your teams's ideas are put into action</h1>
                    <p className="text-secondary leading-relaxed xs:text-md md:text-lg md:leading-normal lg: text-xl">add comments to any task or document to collaborate and build absolute alignment on your project. Assign action items to comments, communicate in real time, share files and never miss a beat with notifications that bring everything together in one spot</p>
                    <button className=" bg-primary text-white px-6 py-2 my-6 rounded-md">Learn more</button>
                </div>
                <div className="w-1/2 flex justify-end xs:justify-center">
                    <img src="./Group 580.png" alt="tasks" className="max-w-xs mt-7 md:max-w-sm lg:max-w-lg xl:max-w-2xl"/>
                </div>
            </div>
        </div>

    {/* App Features */}
        <div className=" bg-paused py-10">
            <h1 className="text-center text-4xl text-primary font-bold">Our Outstanding Features</h1>
            <div className=" mx-20 flex flex-wrap justify-evenly">
                <div className="bg-secondary-3 w-full md:w-1/3 lg:w-1/4 mr-3 my-5 px-6 rounded-xl pb-3">
                    <Automation className="py-4"/>
                    <h1 className="pb-2 text-xl font-semibold">Automations</h1>
                    <p className="mb-3 text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt.</p>
                    <a href='#' className="text-primary font-semibold">Learn more</a>
                </div>
                <div className="bg-secondary-3 w-full md:w-1/3 lg:w-1/4 mr-3 my-5 px-6 rounded-xl pb-3">
                    <Integration className="py-4"/>
                    <h1 className="pb-2 text-xl font-semibold">Integrations</h1>
                    <p className="mb-3 text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt.</p>
                    <a href='#' className="text-primary font-semibold">Learn more</a>
                </div>
                <div className="bg-secondary-3 w-full md:w-1/3 lg:w-1/4 mr-3 my-5 px-6 rounded-xl pb-3">
                    <Time className="py-4"/>
                    <h1 className="pb-2 text-xl font-semibold">Time Tracking</h1>
                    <p className="mb-3 text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt.</p>
                    <a href='#' className="text-primary font-semibold">Learn more</a>
                </div>
                <div className="bg-secondary-3 w-full md:w-1/3 lg:w-1/4 mr-3 my-5 px-6 rounded-xl pb-3">
                    <Report className="py-4"/>
                    <h1 className="pb-2 text-xl font-semibold">Report & Analysis</h1>
                    <p className="mb-3 text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt.</p>
                    <a href='#' className="text-primary font-semibold">Learn more</a>
                </div>
                <div className="bg-secondary-3 w-full md:w-1/3 lg:w-1/4 mr-3 my-5 px-6 rounded-xl pb-3">
                    <Task className="py-4"/>
                    <h1 className="pb-2 text-xl font-semibold">Task Management</h1>
                    <p className="mb-3 text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt.</p>
                    <a href='#' className="text-primary font-semibold">Learn more</a>
                </div>
                <div className="bg-secondary-3 w-full md:w-1/3 lg:w-1/4 mr-3 my-5 px-6 rounded-xl pb-3">
                    <Team className="py-4"/>
                    <h1 className="pb-2 text-xl font-semibold">Team Collaboration</h1>
                    <p className="mb-3 text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt.</p>
                    <a href='#' className="text-primary font-semibold">Learn more</a>
                </div>
            </div>
        </div>

        {/* Testimony */}
        <div className="pb-40">
            <h1 className="text-center text-3xl py-10">What Customers Are Saying About Appera </h1>
            <div className="flex flex-wrap justify-around">
                <div className="w-full my-3 md:w-2/5 lg:w-1/3 bg-secondary-2 px-10 py-5 rounded-lg">
                    <FaQuoteLeft size={20} color="#073AAB"/>
                    <p className="text-primary text-lg rounded-xl">
                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat.
                    </p>
                        <div className="my-3 flex items-center">
                            <img src="./man.png" alt="avatar" className="h-10 mr-3" />
                            <p className="font-bold">Daniel Edwards</p>
                        </div>
                </div>
                <div className="w-full my-3 md:w-2/5 lg:w-1/3 bg-secondary-2 px-10 py-5 rounded-lg">
                    <FaQuoteLeft size={20} color="#073AAB"/>
                    <p className="text-primary text-lg rounded-xl">
                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat.
                    </p>
                        <div className="my-3 flex items-center">
                            <img src="./avatar.png" alt="avatar" className="h-10 mr-3" />
                            <p className="font-bold">Naomi Natasha</p>
                        </div>
                </div>

            </div>
        </div>

        {/* Newsletter */}
        <div className="absolute z-10 -mt-32 flex justify-center items-center w-full">
            <div className=" bg-gray-200 py-10 px-10 w-2/5 xs:w-4/5 items-center">
                <h1 className="mb-4 text-2xl">Subscribe now to get special offer and updates on our products</h1>
                <p className="mb-4 text-grey2">Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                <div className="flex px-4 justify-center items-center">
                    <input type="text" placeholder='Enter Your Email' className=" bg-secondary-3 py-3 px-2 rounded-bl-lg rounded-tl-lg placeholder-black flex-grow"/>
                    <button className=" bg-primary py-3 px-3 rounded-br-md rounded-tr-md"><PaperAirplaneIcon className="h-6 text-white rotate-90" aria-hidden="true"/></button>
                </div>
            </div>
        </div>

        {/* Footer */}
        <div className="pt-72 pb-10 bg-primary flex flex-wrap items-start justify-evenly text-white w-full leading-loose md:pt-64 lg:pt-48">
            <div className="w-1/5 xs:w-2/5">
                <h1 className="text-2xl my-3">Appera</h1>
                <p className="xs:text-md xs:leading-relaxed">Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                <button className=" bg-primary border-x border-y border-white px-4 py-1">Learn more</button>
            </div>
            <div className="w-1/5 xs:w-2/5">
                <h1 className="text-2xl my-3">Quick Links</h1>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About US</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className="w-1/5 xs:w-2/5">
                <h1 className="text-2xl my-3">Features</h1>
                <ul>
                    <li>Automations</li>
                    <li>Collaborations</li>
                    <li>Reports</li>
                    <li>Dashboards</li>
                    <li>Goals & Targets</li>
                </ul>
            </div>
            <div className="w-1/5 xs:w-2/5">
                <h1 className="text-2xl my-3">Follow Us </h1>
                <ul className="flex flex-row items-center">
                    <li><a href=""> <TiSocialFacebookCircular size={40}/> </a></li>
                    <li><a href=""><TiSocialLinkedinCircular size={40}/> </a></li>
                    <li><a href=""><TiSocialTwitterCircular size={40}/> </a></li>
                </ul>
            </div>
            <p className="w-full mt-12 flex md:items-end md:justify-end justify-evenly items-center mr-10">&copy; Appera, All Rights Reserved 2021 </p>
        </div>

        
    </div>
    )
}

export default Homepage

