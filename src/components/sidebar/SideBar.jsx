import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">Sobre nosotros</span>
                <img
                    src="https://image.shutterstock.com/image-vector/compact-size-icon-vector-illustration-260nw-489811306.jpg" 
                    alt="" />
                <p>Estas fotos son auxiliares</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categorias</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">HARDWARE</li>
                    <li className="sidebarListItem">ATAJOS</li>
                    <li className="sidebarListItem">ERRORES</li>
                    <li className="sidebarListItem">TI</li>
                    <li className="sidebarListItem">PROGRA</li>
                    <li className="sidebarListItem">LIFE-HACKS</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">SIGUENOS!</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                    <i className="sidebarIcon fa-brands fa-github-square"></i>
                    <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
