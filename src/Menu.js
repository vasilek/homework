/**
 * Created by tvs on 06.03.2017.
 */
import MenuItem from 'material-ui/MenuItem'
import React, { Component } from 'react';
import { Link } from 'react-router';

class Menu extends Component {
    render() {
        return (
            <div>
                <MenuItem containerElement={<Link to="/users/create" />}>user create</MenuItem>
                <MenuItem containerElement={<Link to="/users/list" />}>user list</MenuItem>
            </div>
        );
    }
}

export default Menu;