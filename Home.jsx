import profile from "../assets/me.jpg";

function Home() {
  return (
    <section id="home" className="home">
      <img src={profile} alt="me" className="me-img" />

      <h1>Hello, I'm Demilade 👋</h1>
      <h3>Frontend Developer</h3>
      <p>I build clean and interactive websites using React.</p>
    </section>
  );
}

export default Home;
