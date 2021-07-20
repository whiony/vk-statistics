import s from "../../styles/Header.module.css"

const Header = () => {
  return <header className={`${s.header} centerRow`}>
    <div className="centerRow">
      <h1>Statistics</h1>
      <Search />
      <img src={process.env.PUBLIC_URL + "/img/notification.svg"} alt="notification icon" className={s.notification} />
    </div>
    <div className={`${s.userRow} centerRow`}>
      <p className={s.userName}>Yana</p>
      <img src={process.env.PUBLIC_URL + "/img/avatar.png"} alt="avatar" className={s.userAvatar} />
      <img src={process.env.PUBLIC_URL + "/img/dropDownArrow.svg"} alt="dropdown" className={s.dropDownArrow} />
    </div>
  </header >
}

const Search = () => {
  return <label className={`${s.search} search`}>
    <img src={process.env.PUBLIC_URL + "/img/search.svg"} alt="search icon" className={s.searchIcon} />
    <input type="text" placeholder="Search"></input>
  </label>
}

export default Header;