import "./sidebar.css"

export default function Sidebar() {

    return (
        <div className="sidebar">
            <div className="mainwv">
                <h2 className="border">WITZ</h2>
                <h2 className="wave">WITZ</h2>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Hardware</li>
                    <li className="sidebarListItem">Software</li>
                    <li className="sidebarListItem">Programs</li>
                    <li className="sidebarListItem">TI</li>
                    <li className="sidebarListItem">About DDBB</li>
                    <li className="sidebarListItem">LIFE-HACKS</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow US!</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                    <i className="sidebarIcon fa-brands fa-github-square"></i>
                    <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                </div>
            </div>

  return (
    <div className="sidebar">
      <div className="mainwv">
        <h2 className="border">WITZ</h2>
        <h2 className="wave">WITZ</h2>
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
