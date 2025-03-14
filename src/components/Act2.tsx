import React from 'react';
import '../styles/Acti2.css';

const Roadmap: React.FC = () => {
    const imageExtensions = ['jpg', 'png', 'png', 'png', 'png', 'jpg', 'png', 'png', 'png'];

    return (
        <div className="roadmap-container">
            {/* Big Box with Title */}
            <div className="big-box">
                <h1>Activity</h1>
            </div>
            {/* Big Image Section */}
            <div className="big-image-section">
                <img src="./DSC03596.jpg" alt="Big Activity" className="big-image" />
            </div>

            {/* Road Section */}
            <div className="road-section">
                <div className="road"></div>

                {/* Small Images along the Road, connected to the center */}
                <div className="small-images">
                    {[...Array(9)].map((_, index) => (
                        <div className="image-container" key={index}>
                            <div className="connector"></div>
                            <img
                                src={`./r${index + 1}.${imageExtensions[index]}`}
                                alt={`Step ${index + 1}`}
                                onError={(e) => {
                                    e.currentTarget.src = './placeholder.jpg'; // Fallback image
                                    e.currentTarget.alt = 'Image not found';
                                }}
                            />
                            {index === 0 && <p className="description right">Intepreter, Working with representer from Trent University, Canada</p>}
                            {index === 1 && <p className="description left">Yes Student Network's Facilitator 2023, Teaching Student about Basic Programming.</p>}
                            {index === 2 && <p className="description right">Operation and Media Volunteer at CamYIGF 2023, CADT Phnom Penh</p>}
                            {index === 3 && <p className="description left">20th CamTESOL, Support through Biggest English Lanuage Wrokshop In Cambodia, as ACE Student Ambassador</p>}
                            {index === 4 && <p className="description right">9th GAC, One of Best Convention Among South Sea, Supporting Even as Operation.</p>}
                            {index === 5 && <p className="description left">AU NZ 2023, Interpreter for Flinder University, AU</p>}
                            {index === 6 && <p className="description right">AU NZ 2024, Interpreter for Merlbourne University, AU</p>}
                            {index === 7 && <p className="description left">CamDEBATE, Biggest debate and public speaking Compeition in Cambodia, as Supporting Whole Event for 2 whole months</p>}
                            {index === 8 && <p className="description right">Sea Game 32nd, ASEAN Para Game 12th Under GRS Team ( Game-IT ) as a website monitor and keep tracking align with scoring update at Sea Game Website</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
