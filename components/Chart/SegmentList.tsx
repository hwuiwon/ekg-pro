import { LayerType } from './Chart'
import SegmentObject from './SegmentObject'

interface ChartListProps {
  layers: Array<LayerType>
}

const SegmentList = (props: ChartListProps) => {
  // TODO make this interact with "toggle chart components" so we display the right components
  // of the EKG
  const dummyChartComponentData = [
    { name: 'Segment 1', display: true },
    { name: 'Segment 2', display: true },
    { name: 'Segment 3', display: true },
  ]

  const chartComponentList: Array<JSX.Element> = []
  let i = 0
  while (i < 3) {
    chartComponentList.push(
      <div key={dummyChartComponentData[i].name} className="SegmentContainer">
        <SegmentObject
          selectedLayers={props.layers}
          segment={dummyChartComponentData[i].name}
        />
      </div>
    )
    i += 1
  }

  return <div className="SegmentListContainer">{chartComponentList}</div>
}

export default SegmentList
