import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss'

export const Header = () => {
    return (

        <header className={classes.header}>
            <div className={classes.container}>
                <NavLink
                    to={'/'}
                    className={({ isActive }) => isActive ? classes.active : ''}
                >Home</NavLink>
                <NavLink to={'/todo'} className={classes.link}>ToDo</NavLink>

            </div>
        </header >

    )
}