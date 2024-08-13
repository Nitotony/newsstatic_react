import React from "react";
import img from "../assets/LOGO.png";

const Body = () => {
  return (
    <div className="body">
      <div className="Model-A">
        <div className="Prime-section">
          <div className="content-area-1">
            <h2>Breaking News: Major Economic Shift</h2>
            <p>
              The global economy is undergoing significant changes as major
              industries adapt to new challenges. Experts predict a shift in
              economic power towards emerging markets, driven by innovation and
              strategic investments. Stay informed about the latest developments
              and their potential impacts.
            </p>
          </div>
          <div className="image-area-1">
            <img src={img} alt="Economic Shift" />
          </div>
        </div>

        <div className="Secondary-section">
          <div className="image-area-2">
            <img src={img} alt="Tech Innovations" />
          </div>
          <div className="content-area-2">
            <h3>Tech Innovations: Leading the Future</h3>
            <p>
              From AI advancements to breakthroughs in renewable energy,
              technology continues to shape the future. Learn about the latest
              innovations and how they are transforming industries across the
              globe.
            </p>
          </div>
        </div>
      </div>

      <div className="Model-A">
        <div className="Prime-section">
          <div className="content-area-1">
            <h2>Global Politics: Shifting Alliances</h2>
            <p>
              Political landscapes are evolving rapidly as nations reassess
              their alliances and strategies. Discover the key players
              influencing global politics and the potential outcomes of these
              changes on international relations.
            </p>
          </div>
          <div className="image-area-1">
            <img src={img} alt="Global Politics" />
          </div>
        </div>

        <div className="Secondary-section">
          <div className="image-area-2">
            <img src={img} alt="Cultural Spotlight" />
          </div>
          <div className="content-area-2">
            <h3>Cultural Spotlight: Arts & Society</h3>
            <p>
              Explore how culture and the arts are influencing society in
              today's world. From groundbreaking exhibitions to
              thought-provoking performances, see how creativity is shaping our
              collective future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
