import s from "../../styles/GenderStatistic.module.css";
import BarChart from "../Graphs/BarChart";

const GenderStatistic = () => {
  return <div className={`${s.genderStatistic} card`}>
    <div className={`${s.header} centerRow`}>
      <h2 className="cardTitle">Gender / Age</h2>
      <div className="centerRow">
        <div className={`${s.gender} centerRow`}>
          <div className={s.square}></div>
          <p>women</p>
        </div>
        <div className={`${s.gender} centerRow`}>
          <div className={`${s.square} ${s.purple}`}></div>
          <p>men</p>
        </div>
      </div>
    </div>
    <BarChart />
  </div>
}

export default GenderStatistic;