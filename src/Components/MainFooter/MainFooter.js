import React from "react";
import { Footer } from "react-materialize";

const MainFooter = () => (
  <Footer
    className="main-footer"
    copyrights="Billy Le &copy; 2015 Copyright"
    links={
      <ul>
        <li>
          <a
            className="grey-text text-lighten-3"
            href="https://lebilly.github.io/js-calc"
          >
            JavaScript Calculator
          </a>
        </li>
        <li>
          <a
            className="grey-text text-lighten-3"
            href="https://lebilly.github.io/twitchtv"
          >
            Twitch.tv Viewer App
          </a>
        </li>
      </ul>
    }
  >
    <h5 className="white-text">Billy Le | Full-stack Developer</h5>
    <p className="grey-text text-lighten-4">
      Lead Organizer of freeCodeCamp Sacramento. I'm not a designer as you can
      tell but please checkout some of my other work.
    </p>
  </Footer>
);

export default MainFooter;
