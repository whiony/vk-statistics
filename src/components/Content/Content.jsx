import s from "../../styles/Content.module.css"
import Header from "./Header";
import PeopleCardContainer from "./PeopleCardContainer";
import ReachStatistics from "./ReachStatistics";

const Content = () => {
  return <div className={s.content}>
    <Header />
    <PeopleCardContainer />
    <ReachStatistics />
  </div>
}

export default Content;