import React, { useEffect, useState } from "react";
import "../styles/Header.css";

interface HeaderProps {
  scrollToSection: (section: string) => void;
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection, activeSection }) => {
  const sections: string[] = ["home", "work", "activities", "resume"];
  const [currentSection, setCurrentSection] = useState(activeSection);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const homeSection = document.getElementById("home");
      const workSection = document.getElementById("work");
      const activitiesSection = document.getElementById("activities");

      if (homeSection && workSection && activitiesSection) {
        if (scrollPosition >= activitiesSection.offsetTop) {
          setCurrentSection("activities");
        } else if (scrollPosition >= workSection.offsetTop) {
          setCurrentSection("work");
        } else {
          setCurrentSection("home");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (section: string) => {
    if (section === "resume") {
      window.open("./CV.pdf#zoom=190", "_blank");
    } else {
      scrollToSection(section);
    }
  };

  return (
    <header className="sticky-header">
      <nav>
        <ul>
          {sections.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={currentSection === item ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item);
                }}
              >
                {item.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;