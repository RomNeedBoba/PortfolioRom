import React from 'react';
import '../styles/HomeTwo.css';

const HomeTwo: React.FC = () => {
    return (
        <div className="home-two">
            <header className="header">
                <div className="curve"></div>
                <h1>Explore My Projects</h1>
                <p className="subtitle">A collection of my creative and technical work</p>
            </header>
            
            <section className="projects">
                <div className="project-item">
                    <img src="pc.png" alt="Project 1" className="project-image" />
                    <div className="project-content">
                        <h3>Text Annotaion Tool</h3>
                        <p>( Project Lead ) Leading a project for labels text data for machine learning. It turns raw text into usable data to train to develop an AI Model.</p>
                        <div className="tech-stack">
                            <span className="tech">Vite</span>
                            <span className="tech">ReactJS</span>
                            <span className="tech">TypeScript</span>
                            <span className="tech">Golang</span>
                            <span className="tech">Yolo</span>
                            <span className="tech">Pytorch</span>

                        </div>
                        <a href="#" target="_blank" className="btn">ComingBefore April</a>
                    </div>
                </div>
                <div className="project-item">
                    <img src="ST.png" alt="Project 2" className="project-image" />
                    <div className="project-content">
                        <h3>KhmerST Model</h3>
                        <p>( Contributer ) Contributing to KhmerST, where i improving the dataset, performance, and mainly test with new YoloV12</p>
                        <div className="tech-stack">
                            <span className="tech">Python</span>
                            <span className="tech">Computer Vision</span>
                            <span className="tech">YOLO</span>
                            <span className="tech">Pytorch</span>

                        </div>
                        <a href="#" target="_blank" className="btn">Coming Before April</a>
                    </div>
                </div>
                <div className="project-item">
                    <img src="baske.jpg" alt="Project 3" className="project-image" />
                    <div className="project-content">
                        <h3>Hoop Detection</h3>
                        <p>( Individual ) AI model developed for ABU Robocon 2025. As it is to enable autonomous shooting by accurately identifying the rim's location in real-time</p>
                        <div className="tech-stack">
                        <span className="tech">Computer Vision</span>
                            <span className="tech">YoloV8</span>
                            <span className="tech">Pytorch</span>
                            <span className="tech">Python</span>
                        </div>
                        <a href="https://aburobcoon2024cadtphyrom.my.canva.site/" target="_blank" className="btn">Read More</a>
                    </div>
                </div>
                <div className="project-item">
                    <img src="robo24.jpg" alt="Project 4" className="project-image" />
                    <div className="project-content">
                        <h3>ABU Robocon 2024</h3>
                        <p>( Member ) Responsibiliyu was utilizing Python and C++ for robot control. I gained  experience in ROS2 Foxy, Nvidia Jetson Orin Nano and many Sensor</p>
                        <div className="tech-stack">
                        <span className="tech">ROS2 Foxy</span>
                        <span className="tech">Python</span>
                        <span className="tech">IoT</span>
                        <span className="tech">Control System</span>
                        </div>
                        <a href="https://aburobcoon2024cadtphyrom.my.canva.site/abu-robocon-2024-national-compeition" target="_blank" className="btn">Read More</a>
                    </div>
                </div>  
                <div className="project-item">
                    <img src="typing2.png" alt="Project 5" className="project-image" />
                    <div className="project-content">
                        <h3>Khmer Typing Website</h3>
                        <p>( Individual ) I worked on a website designed to help users practice and improve their Khmer typing skills. Which is inspired From MonkeyType. Currently, converting from V1.0.3 to V2.0.0 Where I change the whole System Architecture</p>
                        <div className="tech-stack">
                        <span className="tech">Vite</span>
                        <span className="tech">REactJS</span>
                        <span className="tech">TypeScript</span>
                        <span className="tech">Cheapname</span>
                        </div>
                        <a href="https://khmertypingz.info/" target="_blank" className="btn">Visit Site</a>
                    </div>
                </div>  
                <div className="project-item">
                    <img src="coc.png" alt="Project 6" className="project-image" />
                    <div className="project-content">
                        <h3>Clashofclanlayouts.com</h3>
                        <p>( Individual ) my first ever website built in 2023, as this is a web full of clash clash of clan base, where user can easily copy any base by it game, stategy base by communication between Our Web And Clash Of Clan API</p>
                        <div className="tech-stack">
                        <span className="tech">HTML</span>
                        <span className="tech">CSS</span>
                        <span className="tech">JavaScript</span>
                        <span className="tech">Cheapname</span>
                        </div>
                        <a href="https://clashofclanlayouts.com/" target="_blank" className="btn">Visit Site</a>
                    </div>
                </div>  

            </section>
        </div>
    );
};

export default HomeTwo;
