import React from "react";

import Tab from "../../components/Tab";

import "antd/dist/antd.css";

import { HomeContainer, Navigation, NewButton } from "./Home.styled";
import { Link } from "react-router-dom";
const Home = () => {

  return (
    <HomeContainer>
      <Navigation>
        <h3>LanceHub</h3>
        <Link to = "create"><NewButton>Create Job</NewButton></Link>
        <Link to = "resume"><NewButton>Resume</NewButton></Link>
      </Navigation>
      <Tab/>
        {alert('Sử dụng màn hình web mobile để có trải nghiệm tốt nhất! 🥰')}
    </HomeContainer>
  );
};

export default Home;
