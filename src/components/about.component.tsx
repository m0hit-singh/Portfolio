import React from "react";

export default function AboutComponent() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="content">
          <div className="img">
            <img className="content-img" src="src/assets/work.jpg" alt="img" />
          </div>
          <div className="text">
            <h3>About Me</h3>
            <h4>
              A Full Stack Javascript Developer
              <br />
              based in New Delhi, India
            </h4>
            <p>
              A passionate Full Stack Developer with a proven track record of 5
              years in the dynamic world of web development. My expertise lies
              in crafting robust and scalable applications using a powerful
              combination of React, Angular, and Node.js.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
