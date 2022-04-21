import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">Sobre nosotros</span>
                <img
                    src="https://image.shutterstock.com/image-vector/compact-size-icon-vector-illustration-260nw-489811306.jpg" 
                    alt="" />
                <img src="https://media.istockphoto.com/photos/big-and-small-picture-id172759822?b=1&k=20&m=172759822&s=170667a&w=0&h=kkmaR2OYuS14rTiEotbzXoBecwnRePNC79Jsgl3M4dY=" alt="" />
                
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
