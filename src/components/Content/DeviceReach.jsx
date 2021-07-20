import s from "../../styles/DeviceReach.module.css"

const DeviceReach = () => {
  return <div className={`${s.deviceReach} card`}>
    <h2 className={s.title}>Reach by device</h2>
    <div className={s.row}>
      <img src={process.env.PUBLIC_URL + "/img/deviceGraph.svg"} alt="device graph" />
      <div className={s.description}>
        <div className={`${s.descRow} centerRow`}>
          <div className={s.square} />
          <p>Desktop</p>
        </div>
        <div className={`${s.descRow} centerRow`}>
          <div className={`${s.square} ${s.purple}`} />
          <p>Mobile views</p>
        </div>
      </div>
    </div>
  </div>
}

export default DeviceReach;