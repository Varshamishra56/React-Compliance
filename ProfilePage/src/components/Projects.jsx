import React, { useState, useRef, useEffect } from "react";
import "./Projects.css";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(-${
          100 * currentIndex
        }%)`;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially to set the position
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  const slides = [
    {
      icon: "🖥️",
      title: "R Programming Project",
      description:
        "Led a team in developing a data analysis project using R, focusing on statistical modeling and visualization techniques to analyze real-world datasets.",
    },
    {
      icon: "🛒🛍️",
      title: "Functional Myntra Website",
      description:
        "Developed a fully functional replica of Myntra using HTML, CSS, and JavaScript. Implemented responsive design principles, product listings, and interactive features to mimic the shopping experience of the popular e-commerce platform.",
    },
    {
      icon: "📝",
      title: "Notes Management Project",
      description:
        "Created a notes management system using HTML and CSS for the frontend interface, seamlessly linked with a Python backend utilizing SQL for data storage. Implemented features for creating, editing, and organizing notes, providing a user-friendly interface for efficient note-taking and retrieval.",
    },
    {
      icon: "👩🏻‍🏫",
      title: "Students' Adaptability Machine Learning Project",
      description:
        "Developed and compared multiple machine learning models including Linear Regression, SVM, Random Forest, Decision Tree, and KNN to analyze students' adaptability towards digital learning platforms during COVID-19. Evaluated model performance to understand and predict factors influencing students' engagement and success in online education.",
    },
    {
      icon: "⛅",
      title: "Telegram Weather Bot",
      description:
        "Created a Telegram bot that retrieves weather details based on user location inputs. Utilized the OpenWeatherMap API to fetch current weather data, providing users with real-time weather updates directly through Telegram.",
    },
  ];

  const moveSlides = (step) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + slides.length + step) % slides.length;
      return newIndex;
    });
  };

  return (
    <section id="projects" className="projects">
      <h1>
        <span>Dig</span> into My <span>Universe</span>
      </h1>
      <div className="services-projects">
        <div className="services-inner" ref={containerRef}>
          {slides.map((slide, index) => (
            <div key={index} className="projects-made">
              <div className="icon">{slide.icon}</div>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          ))}
        </div>
        <button type="button" className="prev" onClick={() => moveSlides(-1)}>
          ◀
        </button>
        <button type="button" className="next" onClick={() => moveSlides(1)}>
          ▶
        </button>
      </div>
      {/* <p class="navigation-instructions">
        Explore more projects using the navigation buttons on the sides.
      </p> */}

    </section>
  );
};

export default Projects;
