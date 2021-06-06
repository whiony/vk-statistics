import AudienceReach from "./AudienceReach"
import DeviceReach from "./DeviceReach"

const ReachStatistics = () => {
  return <div className="flex">
    <AudienceReach />
    <DeviceReach />
  </div>
}

export default ReachStatistics;