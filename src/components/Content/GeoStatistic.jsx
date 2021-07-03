import s from "../../styles/GeoStatistic.module.css";

const GeoStatistic = () => {
  return <div className={`${s.geoStatistic}`}>
    <div className={`${s.header} centerRow`}>
      <h2 className="cardTitle">Geo</h2>
      <div className={`${s.countryCity} centerRow`}>
        <p className={s.selected}>Country</p>
        <p>City</p>
      </div>
    </div>
    <div className={s.graphContainer}>
      <div className={s.column}>
        <GraphItem location="Russia" percents="94%" />
        <GraphItem location="Ukraine" percents="0.20%" />
        <GraphItem location="Mongolia" percents="0.13%" />
      </div>
      <div className={s.column}>
        <GraphItem location="China" percents="0.26%" />
        <GraphItem location="USA" percents="0.20%" />
        <GraphItem location="Other" percents="1.37%" />
      </div>
    </div>
  </div>
}

const GraphItem = ({ location, percents }) => {
  return <div className={s.graphItem}>
    <div className={`${s.graphTitle} centerRow`}>
      <p className={s.location}>{location}</p>
      <p className={s.percents}>{percents}</p>
    </div>
    <div className={s.scale}>
      <div className={s.fullness} style={{ width: percents }}></div>
    </div>
  </div>
}

export default GeoStatistic;