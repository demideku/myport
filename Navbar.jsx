import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 200;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <h2>My Portfolio</h2>
      <ul>
        <li className={activeSection === "home" ? "active" : ""} onClick={() => scrollToSection("home")}>Home</li>
        <li className={activeSection === "about" ? "active" : ""} onClick={() => scrollToSection("about")}>About</li>
        <li className={activeSection === "projects" ? "active" : ""} onClick={() => scrollToSection("projects")}>Projects</li>
        <li className={activeSection === "contact" ? "active" : ""} onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
