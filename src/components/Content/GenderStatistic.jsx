import s from "../../styles/GenderStatistic.module.css";

const GenderStatistic = () => {
  return <div className={`${s.genderStatistic}`}>
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
    <Graph />
  </div>
}

const Graph = () => {
  return <div>
    <img src={process.env.PUBLIC_URL + "/img/genderGraph.svg"} alt="gender graph" className={s.graph} />
  </div>
}

export default GenderStatistic;