import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./index.module.less";
const Home: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(window.globalConfig);
  }, []);
  return <div className={Style.home}>home</div>;
};
export default Home;
