import React, {useEffect, useState} from 'react';
import baseUrl from "../api/baseUrl";

const Nav = () => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setVisible(true);
            } else {
                setVisible(false)
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
        }, []);

    return (
        <div className={`navigation ${visible && "navigation-dark"}`}>
            <img className="navigation__logo"
                 src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                 alt="netflix-logo"/>
            <img className="navigation__profile"
                 src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                 alt="profile-logo"/>
        </div>
    );
};

export default Nav;
