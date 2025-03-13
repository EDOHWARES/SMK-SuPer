import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Welcome from "../../components/Welcome/Welcome";
import MarqueeText from "../../components/MarqueeText/MarqueeText";
import SocialFeeds from "../../components/SocialFeeds/SocialFeeds";
import Posts from "../../components/Posts/Posts";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Welcome />
      <MarqueeText />
      <SocialFeeds />
      <Posts />
    </div>
  );
};

export default Home;
