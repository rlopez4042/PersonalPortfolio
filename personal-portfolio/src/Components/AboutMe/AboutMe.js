function AboutMe() {
  let aboutMe = (
    <div>
      <img
        className="pictureOfMe"
        src={require("/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/picofmeee.png")}
        width="160"
        height="190"
        alt=""
      />
      <p className="intro">
        Hey! My name is Robert Lopez and I'm currently located in San Diego,
        California. I'm a decorated transitioning service member with five years
        comprehensive ground combat intelligence analyst experience looking to
        launch a career in software development.
      </p>
      <p className="body">
        Currently located in San Diego, I recently graduated from San Diego Mesa
        College with an Associates in Science, majoring in Computer Science, and
        aim to continue my education at San Diego State University starting in
        the Fall of 2022. I'm currently enrolled in a Software Engineering
        Immersive course at General Assembly.
      </p>
      <p className="ending">
        I'm eager to launch a career in software development. If you'd like to
        learn a little more about me, I've linked a copy of my updated resume
        below!
      </p>
      <ul className="aboutMeLogoList">
        <li className="aboutMeLogo">
          <img
            src={require("/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/ImportedImages/htmlLogo.png")}
            width="50"
            height="50"
          />
        </li>
        <li className="aboutMeLogo">
          <img
            src={require("/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/ImportedImages/cssLogo.png")}
            width="50"
            height="50"
          />
        </li>
        <li className="aboutMeLogo">
          <img
            src={require("/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/ImportedImages/jsLogo.png")}
            width="50"
            height="50"
          />
        </li>
        <li className="aboutMeLogo">
          <img
            src={require("/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/ImportedImages/react.png")}
            width="50"
            height="50"
          />
        </li>
        <li className="aboutMeLogo">
          <img
            src={require("/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/5847ea22cef1014c0b5e4833.png")}
            width="50"
            height="50"
          />
        </li>
        <li className="aboutMeLogo">
          <img
            src={require("/Users/robertlopez/Desktop/MyPortfolio/PersonalPortfolio/personal-portfolio/src/Images/ImportedImages/java-logo-1.png")}
            width="70"
            height="70"
          />
        </li>
      </ul>
    </div>
  );
  return (
    <div className="aboutMe">
      <h1>
        <span className="number">0.2</span> About me
      </h1>
      {aboutMe}
    </div>
  );
}

export default AboutMe;
