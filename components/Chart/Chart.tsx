import React, { useEffect, useReducer, useState } from 'react'
import EKG1 from '../../testImages/fullEKG1.jpeg'
import EKG2 from '../../testImages/fullEKG2.jpeg'
import { StaticImageData } from 'next/image'

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

interface SegmentObjProps {
  selectedLayers: Array<LayerType>
  segment: string
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
    { name: 'Segment 3', display: false },
  ]

  const chartComponentList: Array<JSX.Element> = []
  let i = 0
  while (i < 3) {
    if (dummyChartComponentData[i].display) {
    chartComponentList.push(
      <div key={dummyChartComponentData[i].name} className="ChartContainer">
        <SegmentObj selectedLayers={props.layers} segment={dummyChartComponentData[i].name} />
      </div>
    )
    }
    i += 1
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {chartComponentList}
    </div>
  )
}

const SegmentObj = ({ selectedLayers, segment }: SegmentObjProps) => {
  // const [state, dispatch] = useReducer(oldState, action) // THIS IS FOR PANNING/ZOOMING
  // zander is so sexy 🤤
  // Folder of images is being weird so just manually doing it untill API is ready.
  var images = [
    {id: selectedLayers[0].id, path: EKG1},
    {id: selectedLayers[1].id, path: EKG2},
    {id: selectedLayers[2].id, path: EKG1}
  ]

  const layers: Array<JSX.Element> = []
  for (let i = 0; i < selectedLayers.length; i++) {
    if (selectedLayers[i].selected) {
      layers.push(
        <view key={i}>
            <img src={images[i].path.src} className="SegmentImg"/>
        </view>
      )
    }
  }

  return (
    <div className="SegmentObj">
      <p className="Subheading">{segment}</p>
      {layers}
    </div>
  )
}

export default Chart
