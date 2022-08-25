import React from "react";
const Footer = ({ author = "Oleg", contributor = "V" }) => {
  return (
    <footer>
      <p>Created by {author}.</p>
      <p>Modified by {contributor}.</p>
    </footer>
  );
};
export default Footer;
