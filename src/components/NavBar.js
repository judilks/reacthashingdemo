import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
const NavBar = ({page}) => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit" style={style}>
                    Hashing Password
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
const style = {
    margin:'auto'
}

export default NavBar;