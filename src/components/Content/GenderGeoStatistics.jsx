import s from "../../styles/GenderStatistic.module.css";
import GenderStatistic from "./GenderStatistic";
import GeoStatistic from "./GeoStatistic";

const GenderGeoStatistics = () => {
  return <div className={`${s.genderGeoStatistics} flex`}>
    <GenderStatistic />
    <GeoStatistic />
  </div>
}

export default GenderGeoStatistics;