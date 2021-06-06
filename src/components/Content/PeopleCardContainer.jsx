import s from "../../styles/PeopleCard.module.css"
import PeopleCard from "./PeopleCard";

const PeopleCardContainer = () => {
  return <div className={s.peopleCardContainer}>
    <PeopleCard title="Friends" people="271" percents="+ 0,7" arrow="arrowTop" />
    <PeopleCard title="Unique visitors" people="69" percents="- 1,7" arrow="arrowDown" />
    <PeopleCard title="Followers" people="288" percents="+ 1" arrow="arrowTop" />
  </div>
}

export default PeopleCardContainer;