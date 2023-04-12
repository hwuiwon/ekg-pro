import React, { useEffect, useReducer, useState } from 'react'
import testPhoto from '../../testEKGImage.jpeg'

interface LayerType {
  id: string
  date: string
  selected: boolean
}

// in case we want to make it a map instead of an array
// interface LayerType extends LayerMetadataType, LayerIDType {}

// interface LayerIDType {
//   id: string
// }

// interface LayerDataType {
//   date: string
//   selected: boolean
// }

const Chart = () => {
  const dummyData: Array<LayerType> = [
    { id: '000000', date: 'April 12th, 2023', selected: true },
    { id: '000001', date: 'March 15th, 2023', selected: true },
    { id: '000002', date: 'February 3rd, 2023', selected: false },
  ]
  const [layers, setLayers] = useState(dummyData)

  const handleLayerSelect = (id: string) => {
    const tempLayers = layers
    for (let i = 0; i++; i < tempLayers.length) {
      if (tempLayers[i].id == id) {
        tempLayers[i].selected = !tempLayers[i].selected
      }
    }
    setLayers(tempLayers)
  }

  return (
    <div className="AnalysisContianer">
      <div className="LayerContainer">
        <p className="Subheading" style={{ margin: '10px' }}>
          Layers
        </p>
        <LayersList layers={layers} onSelect={handleLayerSelect} />
      </div>
      <div className="ChartContianer">
        <ChartList layers={layers} />
      </div>
    </div>
  )
}

interface LayersListProps {
  layers: Array<LayerType>
  onSelect: (id: string) => void
}

interface ChartListProps {
  layers: Array<LayerType>
}

interface ChartObjProps {
  layerId: string
}

const LayersList = (props: LayersListProps) => {
  const layerComponentList: Array<JSX.Element> = []
  props.layers.forEach((layer: LayerType, index: number) => {
    layerComponentList.push(
      <div
        className="Layer"
        key={layer.id}
        onClick={() => props.onSelect(layer.id)}
      >
        <p className="LayerText">
          {'Chart ' + (index + 1) + ': ' + layer.date}
        </p>
        <div
          className="LayerButton"
          style={{
            background: layer.selected ? 'green' : 'gray',
          }}
        />
      </div>
    )
  })

  return <>{layerComponentList}</>
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
        <ChartObj layerId={dummyChartComponentData[i].name} />
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
      <p className="Subheading">{layerId}</p>
      <img src={testPhoto.src} />
    </div>
  )
}

export default Chart
