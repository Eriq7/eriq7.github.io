import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./AboutMe.css";

const img = (name) => `${process.env.PUBLIC_URL}/AboveToMe/${name}`;

export default function AboutMe(props) {
  const theme = props.theme;

  return (
    <div className="aboutme-main">
      <Header theme={theme} />

      <div className="aboutme-content">
        <h1 className="aboutme-title" style={{ color: theme.text }}>
          About Me
        </h1>

        <p className="aboutme-paragraph" style={{ color: theme.secondaryText }}>
          Outside of school and building projects, I try to stay consistent with
          training and keep my life balanced. Fitness keeps me disciplined,
          travel keeps me curious, and the NBA is my favorite way to relax and
          stay inspired by high-level competition. I like improving a little
          every day—whether that’s refining a piece of code, learning a new
          idea, or pushing through a tough workout.
        </p>

        <section className="aboutme-section">
          <h2 className="aboutme-section-title" style={{ color: theme.text }}>
            Fitness
          </h2>
          <div className="aboutme-grid">
            <img className="aboutme-img" src={img("gym_1.jpg")} alt="gym 1" />
            <img className="aboutme-img" src={img("gym_2.jpg")} alt="gym 2" />
          </div>
        </section>

        <section className="aboutme-section">
          <h2 className="aboutme-section-title" style={{ color: theme.text }}>
            Travel
          </h2>
          <div className="aboutme-grid">
            <img
              className="aboutme-img"
              src={img("travel_1.jpg")}
              alt="travel 1"
            />
            <img
              className="aboutme-img"
              src={img("travel_2.jpg")}
              alt="travel 2"
            />
          </div>
        </section>

        <section className="aboutme-section">
          <h2 className="aboutme-section-title" style={{ color: theme.text }}>
            NBA
          </h2>
          <div className="aboutme-grid">
            <img className="aboutme-img" src={img("nba_1.jpg")} alt="nba 1" />
            <img className="aboutme-img" src={img("nba_2.jpg")} alt="nba 2" />
          </div>
        </section>
      </div>

      <Footer theme={theme} onToggle={props.onToggle} />
      <TopButton theme={theme} />
    </div>
  );
}
