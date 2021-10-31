import React from "react";
import "./Footer.css";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import MessageIcon from "@material-ui/icons/Email";

const Footer = (props) => {
  return (
    <div className="footer">
      <a
        className="sociallink"
        rel="noopener noreferrer"
        target="_blank"
        href="http://www.facebook.com/kalyanmoy.borah1"
      >
        <FacebookIcon fontSize="medium" />
      </a>
      <a
        className="sociallink"
        rel="noopener noreferrer"
        target="_blank"
        href="http://www.instagram.com/_k.m.b_7"
      >
        <InstagramIcon fontSize="medium" />
      </a>
      <a
        className="sociallink"
        rel="noopener noreferrer"
        target="_blank"
        href="http://www.linkedin.com/in/kalyanmoyborah"
      >
        <LinkedinIcon fontSize="medium" />
      </a>
      <a
        className="sociallink"
        rel="noopener noreferrer"
        target="_blank"
        href="http://www.github.com/KalyanmoyBorah"
      >
        <GithubIcon fontSize="medium" />
      </a>
      <a
        className="sociallink"
        rel="noopener noreferrer"
        target="_blank"
        href="mailto:borahkalyanmoy@gmail.com"
      >
        <MessageIcon fontSize="medium" />
      </a>
    </div>
  );
};

export default Footer;
