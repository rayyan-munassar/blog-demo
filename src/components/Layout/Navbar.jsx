import classes from "../Layout/Navbar.module.css"

const Navbar = (props) => {

    let loginContent = <button onClick={props.openLogin}>Login</button>
    if (props.isLogin) {
        loginContent = <button>Logout</button>
    }

    return (
        <div className={classes.Navbar}>
            <h1>Blog Demo</h1>
            {loginContent}
        </div>
    )

}

export default Navbar