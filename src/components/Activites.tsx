import React from 'react';
import '../styles/Activities.css';

const Activities: React.FC = () => {
    return (
        <div className="activities-wrapper">
            {/* Wave SVG at the top */}
            <div className="wave-container">
                <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#007BFF" fillOpacity="1" 
                        d="M0,224L30,218.7C60,213,120,203,180,176C240,149,300,107,360,101.3C420,96,480,128,540,154.7C600,181,660,203,720,192C780,181,840,139,900,144C960,149,1020,203,1080,197.3C1140,192,1200,128,1260,112C1320,96,1380,128,1410,144L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z">
                    </path>
                </svg>
            </div>

            {/* Main Content */}
            <div className="activities-container">
                <img src="./Phyrom.jpg" alt="Activity" className="activity-image" />
                <div className="quote-section">
                    <h2 className="name">Rin Pichphyrom - ACE Student Ambassador</h2>
                    <blockquote>
                        "As a sophomore and diploma student at ACE, being a student ambassador has been a highlight for me. Despite leading my university's robotics club, I've recognized a need to enhance my soft skills. Partaking in the ASA program has been transformative, allowing me to collaborate with brilliant minds and become more efficient. With my academic interests and extracurricular activities aligned, I see immense potential to further develop my abilities through various projects. I'm determined to leverage this program to promote both the ASA community's goals and my personal growth. My commitment to fostering innovation and learning fuels my enthusiasm for this program, and I will wholeheartedly support all its activities.  
                        - <a href="https://acecambodia.org/ACEWebsite/Home/ACE%20Student%20Ambassadors" style={{ color: '#6c757d' }}>https://acecambodia.org/ACEWebsite/Home/ACE%20Student%20Ambassadors</a>"
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default Activities;
