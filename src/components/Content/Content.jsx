import s from "../../styles/Content.module.css"
import Header from "./Header";
import PeopleCardContainer from "./PeopleCardContainer";
import ReachStatistics from "./ReachStatistics";
import GenderGeoStatistics from "./GenderGeoStatistics";

const Content = () => {
  return <div className={s.content}>
    <Header />
    <PeopleCardContainer />
    <ReachStatistics />
    <GenderGeoStatistics />
  </div>
}

export default Content;