import s from "../../styles/DeviceReach.module.css";
import PieChart from "../Graphs/PieChart";
import ParentSize from "@visx/responsive/lib/components/ParentSize";


const DeviceReach = ({ size = 200 }) => {
  return <div className={`${s.deviceReach} card`}>
    <h2 className={s.title}>Reach by device</h2>
    <div className={s.row}>
      <div style={{ minWidth: "130px", width: size, maxWidth: "220", height: size, marginTop: "-35px" }}>
        <ParentSize>
          {({ width, height }) => <PieChart width={width} height={height} />}
        </ParentSize>
      </div>
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