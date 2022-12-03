import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Box, Button, ClickAwayListener } from "@mui/material";
import { Outlet } from "react-router-dom";

import { navBarColors, subNavBarColors } from '../colorStyle';

export default function Navbar() {
    const [showLogout, setShowLogout] = useState(false)
    const inActiveStyle = {
        textDecoration: "none",
        color: navBarColors.navlinkColor,
        fontWeight: '500',
        background: navBarColors.navlinkBackground,
        padding: '10px 20px',
        transition: 'all 0.3s ease'
    };

    const activeStyle = {
        ...inActiveStyle,
        color: navBarColors.navlinkSelectedColor,
        background: navBarColors.navlinkSelectedBackground,
        borderRadius: '10px 10px 0 0'
    };

    const navLinks = [
        {
            path: '/',
            label: 'Dashboard'
        },
        {
            path: 'test-manager',
            label: 'Test Manager'
        }
    ];

    return (
        <>
            <nav
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'sticky',
                    width: '100%',
                    height: '50px',
                    background: navBarColors.background,
                }}
            >
                <div
                    style={{
                        width: '200px',
                        height: '100%',
                        padding: '5px 20px 0 20px'
                    }}
                >
                    <h3>Backend</h3>
                </div>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '20px',
                        padding: '5px 0 0 20px',
                        width: '100%',
                        height: '100%',
                        alignItems: 'end',
                        position: 'relative'
                    }}
                >
                    {navLinks?.map((link, index) => (
                        <NavLink
                            key={'NavLink' + index}
                            to={link.path}
                            style={({ isActive }) => isActive ? activeStyle : inActiveStyle}
                        >{link.label}</NavLink>
                    ))}
                    <ClickAwayListener onClickAway={() => setShowLogout(false)} >
                        <Box sx={{ margin: '0 20px 0 auto' }} >
                            <Button
                                disableRipple
                                sx={{
                                    height: '40px',
                                    padding: '10px 20px',
                                    borderRadius: '20px',
                                    cursor: 'pointer',
                                    border: 'none',
                                    textTransform: 'none',
                                    color: navBarColors.buttonColor,
                                    background: navBarColors.buttonBackground,
                                    '&:hover': {
                                        background: navBarColors.buttonOnhoverBackground
                                    }
                                }}
                                onClick={() => setShowLogout(!showLogout)}
                            >Admin</Button>
                            <Box
                                sx={{
                                    display: showLogout ? 'grid' : 'none',
                                    position: 'absolute',
                                    right: '20px',
                                    top: '70px',
                                    width: '200px',
                                    height: '400px',
                                    zIndex: '99',
                                    borderRadius: '20px',
                                    background: navBarColors.popUpPanelBackground,
                                    overflow: 'hidden',
                                    transition: 'all 0.5s ease',
                                }}
                            >
                                {/* // Menu Items // */}
                            </Box>
                        </Box>
                    </ClickAwayListener>
                </Box>
            </nav>
            <Outlet />
        </>
    )
};

export function SubNavbar({ subNavLinks }) {
    const inActiveStyle = {
        textDecoration: "none",
        color: subNavBarColors.subNavlinkColor,
        fontWeight: '500',
        background: subNavBarColors.subNavlinkBackground,
        padding: '5px 15px',
        transition: 'all 0.3s ease'
    };

    const activeStyle = {
        ...inActiveStyle,
        color: subNavBarColors.subNavlinkSelectedColor,
        background: subNavBarColors.subNavlinkSelectedBackground,
        borderRadius: '5px'
    };
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    paddingY: '10px',
                    background: subNavBarColors.background,
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    borderBottom: '2px solid grey'
                }}
            >
                {subNavLinks?.map((link, index) => (
                    <NavLink
                        key={'SubNavLink' + index}
                        to={link.path}
                        style={({ isActive }) => isActive ? activeStyle : inActiveStyle}
                        end={link.end}
                    >{link.label}</NavLink>
                ))}
            </Box>
            <Outlet />
        </>
    )

}
