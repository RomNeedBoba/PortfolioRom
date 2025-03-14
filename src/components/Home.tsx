import React from 'react';
import '../styles/home.css';
import { useState, useEffect } from 'react';

const ImageText: React.FC = () => {
  return (
    <div className="content">
      <img src="./pf.jpg" alt="First Image" className="center-image" />
      <h1 className="animated-header">
        Hello, My Name is <span className="dynamic-text" style={{ color: 'yellow' }}>Phyrom</span>
      </h1>
      <p>I am currently pursuing my bachelor's in CS, CADT</p>
      <p>Currently I am Working On</p> 
      <TypingParagraph />
      <div className="image-container">
              </div>
    </div>
  );
};

const TypingParagraph: React.FC = () => {
  const [dynamicText, setDynamicText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [index, setIndex] = useState(0);
  const texts = ['Computer Vision', 'ROS2 ( Robotic )', 'Web Development'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const currentText = texts[currentTextIndex];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (index < currentText.length) {
        timeout = setTimeout(() => {
          setDynamicText((prev) => prev + currentText[index]);
          setIndex(index + 1);
        }, 200);
      } else {
        setIsTyping(false);
        setIndex(0);
      }
    } else {
      if (index < currentText.length) {
        timeout = setTimeout(() => {
          setDynamicText((prev) => prev.slice(0, -1));
          setIndex(index + 1);
        }, 200);
      } else {
        setIsTyping(true);
        setIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [isTyping, index, currentText]);

  return <p>{dynamicText}</p>;
};

export default ImageText;
