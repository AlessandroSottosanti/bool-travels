import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <>
            <nav className="navbar bg-body-tertiary navstyle">
                    <NavLink className="navbar-brand" to="/">
                        <img src="https://venezia-samarcanda.it/wp-content/uploads/2017/06/weroad.png" alt="Bootstrap" width="300" height="200" />
                    </NavLink>
            </nav>
        </>
    )
}

export default NavBar