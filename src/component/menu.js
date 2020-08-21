import React from "react";
import {Menu} from "antd";
import "antd/dist/antd.css";

const {SubMenu} = Menu;

function NavigationMenu(props) {
    const menuNavigationMap = props.navigationMap

    function createSubMenu(subMenus, menuName) {
        return Object.entries(subMenus).map(([menu, subMenu]) => {
            if (subMenu == null) {
                return <Menu.Item key={menuName + menu}>{menu}</Menu.Item>
            } else {
                return <SubMenu key={menuName + menu} title={menu}>
                    <NavigationMenu navigationMap={subMenu}/>
                </SubMenu>
            }
        })
    }


    return (
        <Menu onClick={() => {
            console.log("menu clicked")
        }} style={{width: 256}} mode="vertical">
            {
                createSubMenu(menuNavigationMap, "start")
            }
        </Menu>
    )
}

export default NavigationMenu;