import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
    return (
        <div>
            <div class="linkedin">
                <Link to="https://www.linkedin.com/in/caleb-afework-8103921b9/">
                <FontAwesomeIcon icon={["fas", "linkedin"]} />
                </Link>
            </div>
            <div class="git">
                <Link to="https://github.com/calebafework">
                <FontAwesomeIcon icon={["fas", "github"]} />
                </Link>
            </div>
        </div>
    );
};

export default Footer;
