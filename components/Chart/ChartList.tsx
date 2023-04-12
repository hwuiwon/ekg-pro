import { LayerType } from './Chart'
import ChartObject from './ChartObject'

interface ChartListProps {
  layers: Array<LayerType>
}

const ChartList = (props: ChartListProps) => {
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
        <ChartObject layerId={dummyChartComponentData[i].name} />
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

export default ChartList
