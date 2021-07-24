import s from "../../styles/AudienceReach.module.css"
import LineGraph from "../Graphs/LineGraph";

const AudienceReach = () => {
  return <div className={`${s.audienceReach} card`}>
    <div className={s.header}>
      <h2>Audience reach</h2>
      <div className="centerRow">
        <div className={`${s.selectDate} centerRow`}>
          <p>31/01/2020 – 06/02/2020</p>
          <img src={process.env.PUBLIC_URL + "/img/smallDropDownArrow.svg"} alt="dropdown" />
        </div>
        <div className={`${s.checkbox} centerRow`}>
          <img src={process.env.PUBLIC_URL + "/img/violetCheck.svg"} alt="checkbox" />
          <p>Total</p>
        </div>
        <div className={`${s.checkbox} centerRow`}>
          <img src={process.env.PUBLIC_URL + "/img/pinkCheck.svg"} alt="checkbox" />
          <p>Follower</p>
        </div>
      </div>
    </div>
    <LineGraph />
    {/* <Graph /> */}
  </div>
}

const Graph = () => {
  return <div className={s.graph}>
    <img src={process.env.PUBLIC_URL + "/img/audienceGraph.svg"} alt="audience graph" />
  </div>
}

export default AudienceReach;