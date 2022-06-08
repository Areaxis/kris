import Head from 'next/head';

import {FaInstagram} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

export default function Home() {
    return (
        <>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <title>Workshop</title>
            <meta name="description" content="Generated by create next app,width=device-width" />
            <link rel="icon" href="/images/6.png" />
        </Head>
            <div className="landing">
                <div className="landing-left">
                    <div>
                        <h1>
                            Web Design.<br />
                            Android + iOS.<br />
                            Free Food.<br />
                        </h1>
                        <p>The one stop shop for all your needs.</p>
                        <FaInstagram className="icon" />
                        <FaFacebook className="icon" />
                        <FaLinkedin className="icon" />
                        <br />
                        <button className="primary-button">
                            <h4>Contact Us</h4>
                        </button>
                    </div>
                    </div>
                <div className="landing-right">
                    <img src="/images/1.png" width="50%" />
                </div>
                </div>
                <div className="landing1">
                
                <div className="landing-left1">
                <img src="/images/10.png" width="50%"/>
                    
                </div>

                <div className="landing-right1">
               < div>
                        <h1>
                             Lorem Ipsum.
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                        <p>ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                        <p>nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat </p>
                        <p>nulla pariatur. </p>
                        <br />
                        <button className="primary-button1">
                            <h4>Learn more</h4>
                        </button>
                    </div>
                </div>
            </div>
            <div className="landing2">
                <div className="landing-left2">
                    <div>
                    <h1>
                             Lorem Ipsum.
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                        <p>ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                        <p>nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat </p>
                        <p>nulla pariatur. </p>
                        <br />
                        <button className="primary-button1">
                            <h4>Learn more</h4>
                        </button>
                    </div>
                    </div>
                <div className="landing-right2">
                    <img src="/images/7.png" width="50%" />
                </div>
                </div>
                <div className="landing3">
                
                <div className="landing-left3">
                <img src="/images/8.png" width="50%"/>
                    
                </div>

                <div className="landing-right3">
               < div>
               <h1>
                             Lorem Ipsum.
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                        <p>ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                        <p>nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat </p>
                        <p>nulla pariatur. </p>                        <br />
                        <button className="primary-button1">
                            <h4>Learn more</h4>
                        </button>
                    </div>
                </div>
            </div>
            <div className="landing4">
                <div className="landing-left4">
                    <div>
                    <h1>
                             Lorem Ipsum.
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                        <p>ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                        <p>nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat </p>
                        <p>nulla pariatur. </p>
                        <br />
                        <button className="primary-button1">
                            <h4>Learn more</h4>
                        </button>
                    </div>
                    </div>
                <div className="landing-right2">
                    <img src="/images/9.png" width="50%" />
                </div>
                </div>
            <div className="landing5">
                 <div className="landing-left5">
                    <div>
                    <h1>
                             Lorem Ipsum.
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                        <p>ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                        <p>nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat </p>
                        <p>nulla pariatur. </p>                    </div>
                 </div>
             <div>
                <div className="landing-right5">
                    <img src="/images/6.png" width="250px" height="250px"/>
                </div>
             </div>
             </div>
        </>
    )
}