import logo from "../images/logo2.png"

function Navbar({ lang, setLang }) {

  const toggleLang = () => {
    setLang(lang === "en" ? "id" : "en")
  }

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} className="logo" />
      </div>

      <ul className="nav-menu">
        <li>{lang === "en" ? "Home" : "Beranda"}</li>
        <li>{lang === "en" ? "About Me" : "Tentang Saya"}</li>
        <li>{lang === "en" ? "My Activities" : "Aktivitas Saya"}</li>
        <li>{lang === "en" ? "Work" : "Karya"}</li>
      </ul>

      <button className="translate-btn" onClick={toggleLang}>
        {lang === "en" ? "ID" : "EN"}
      </button>
    </nav>
  )
}

export default Navbar