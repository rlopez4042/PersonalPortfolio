function Home() {
  let home = (
    <div className="home">
      <h3 className="slimShady">Hi, my name is</h3>
      <h1 className="name">Robert Lopez.</h1>
      <h3 className="tagline">Student | Software Engineer</h3>
      <p className="summary">
        A decorated Marine Corps veteran and interdisciplinary software engineer
        pursuing a degree in Computer Science at San Diego State University.
        Currently enrolled at General Assembly, living in San Diego, California.
      </p>
      <p className="summaryMobile">
        A decorated Marine Corps veteran and interdisciplinary software
        engineer, currently enrolled at General Assembly.<br></br>
        <span className="spanWhite">Check out some of my projects below:</span>
      </p>
    </div>
  );
  return <div>{home}</div>;
}

export default Home;
