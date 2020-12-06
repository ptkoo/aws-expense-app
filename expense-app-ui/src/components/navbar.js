import React, { Component } from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavElements'

export class Navbar extends Component {
    render() {
        return (
            <>
            <Nav>
                <NavLink to="/">
                   <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/dashboard" activeStyle>
                        Dashboard
                    </NavLink>
                    <NavLink to="/requests" activeStyle>
                        Requests
                    </NavLink>
                    <NavLink to="/payments" activeStyle>
                        Payments
                    </NavLink>
                    <NavLink to="/financial" activeStyle>
                        Financial
                    </NavLink>
                    <NavLink to="/employee" activeStyle>
                        Employee
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav> 
            </>
        )
    }
}

export default Navbar
