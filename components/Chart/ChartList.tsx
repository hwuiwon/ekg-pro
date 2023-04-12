import testPhoto from '../../testEKGImage.jpeg'
import { LayerType } from './Chart'
import SegmentObject from './SegmentObject'

interface ChartListProps {
  layers: Array<LayerType>
}

interface ChartObjProps {
  layerId: string
}

const ChartList = (props: ChartListProps) => {
  // props.layers.forEach((layer: LayerType) => {
  //   if (layer.selected) {
  //     chartComponentList.push(
  //       <div key={layer.id} className="ChartContainer">
  //         <ChartObj layerId={layer.id} />
  //       </div>
  //     )
  //   }
  // })

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
      <div key={dummyChartComponentData[i].name} className="ChartContainer">
        <SegmentObject selectedLayers={props.layers} segment={dummyChartComponentData[i].name} />
      </div>
    )
    i += 1
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {chartComponentList}
    </div>
  )
}

const ChartObj = ({ layerId }: ChartObjProps) => {
  // const [state, dispatch] = useReducer(oldState, action) // THIS IS FOR PANNING/ZOOMING
  // zander is so sexy 🤤

  return (
    <div className="ChartObj">
      <p className="Subheading" style={{ margin: '10px' }}>
        {layerId}
      </p>
      <img src={testPhoto.src} />
    </div>
  )
}

export default ChartList
