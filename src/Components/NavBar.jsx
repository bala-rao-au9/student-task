import { AppBar, Toolbar,  makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const usestyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#ffffff',
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 20
    }
})

const NavBar = () => {
    const classes = usestyle();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                
                <NavLink className={classes.tabs} to='all' exact>All User</NavLink>
                <NavLink className={classes.tabs} to='add' exact>Add User</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;