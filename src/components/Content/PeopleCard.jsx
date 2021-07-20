import s from "../../styles/PeopleCard.module.css"

const PeopleCard = ({ title, people, percents, arrow }) => {
  return <div className={`${s.peopleCard} card`}>
    <div className={`${s.row} centerRow`}>
      <h2 className={s.title}>{title}</h2>
      <img src={process.env.PUBLIC_URL + "/img/dots.svg"} alt="dots button" className={s.dots} />
    </div>
    <div className={`${s.row} centerRow`}>
      <p className={s.people}>{people} people</p>
      <div className="centerRow">
        <p className={s.percents}>{percents}%</p>
        <img src={process.env.PUBLIC_URL + `/img/${arrow}.svg`} alt="arrow icon" className={s.arrow} />
      </div>
    </div>
  </div>
}

export default PeopleCard;