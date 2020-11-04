//st item or provide navigational or orthogonal actions related to the primary task. Although they can display the same content, simple menus are preferred over simple dialogs because simple menus are less disruptive to the user’s current context.

import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { useDispatch } from 'react-redux';
import { color } from '../redux/actions';

export default function SimpleMenu() {
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget, () =>  console.log(anchorEl.getAttribute('value')));
    };

    const handleClose = (ev) => {
        dispatch(color(ev.nativeEvent.target.outerText))
        console.log(ev.nativeEvent.target.outerText);
        setAnchorEl(null);      
    };

    return (
        <div style={{backgroundColor : 'black'}}>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                Choose Graph Color
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem value="Green" onClick={handleClose}>Green</MenuItem>
                <MenuItem value="Blue" onClick={handleClose}>Blue</MenuItem>
                <MenuItem value="Red" onClick={handleClose}>Red</MenuItem>
            </Menu>
        </div>
    );
}
