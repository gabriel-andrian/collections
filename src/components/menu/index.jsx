import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  TeamOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { MenuStyled } from "../styled-components";
import { Link, useLocation } from "react-router-dom";

const TopMenu = () => {
  const location = useLocation();

  return (
    <MenuStyled>
      <Menu
        defaultSelectedKeys={location.pathname}
        mode="horizontal"
        theme="dark"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Menu.Item key="/home" icon={<HomeOutlined />}>
          <Link to={"/home"}>Home</Link>
        </Menu.Item>
        <Menu.Item key="/characters/1" icon={<TeamOutlined />}>
          <Link to={"/characters/1"}>Characters</Link>
        </Menu.Item>
        <Menu.Item key="/chart" icon={<PieChartOutlined />}>
          <Link to={"/chart"}>Chart</Link>
        </Menu.Item>
      </Menu>
    </MenuStyled>
  );
};

export default TopMenu;
