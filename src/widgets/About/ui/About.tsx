import s from "./About.module.scss";
export const About = () => {
  return (
    <div className={s.about}>
      <div>
        <h2>About Me</h2>
        <span>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</span>
      </div>

      <div>
        <h2>Work Experience</h2>
        <div>
          <span>Junior Web Developer</span>
          <span>Full Time</span>
        </div>
        <div>
          <span>Dr. Rajkumar’s Learning App</span>
          <span>Bengaluru</span>
          <span>Sep 2021 - Dec 2021</span>
        </div>
      </div>

      <div>
        <h2>Education</h2>
        <div>
          <span>Bachelor in Electronics & Communication</span>
          <span>Full Time</span>
        </div>
        <div>
          <span>Bangalore Instutute of Technology</span>
          <span>Bengaluru</span>
          <span>Aug 2015 - Dec 2020</span>
        </div>
      </div>
    </div>
  );
};