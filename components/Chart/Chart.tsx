import React, { useState } from 'react'
import SegmentList from './SegmentList'
import LayersList from './Layers'

export interface LayerType {
  id: string
  date: string
  selected: boolean
}

// in case we want to make it a map instead of an array
// interface LayerType extends LayerDataType, LayerIDType {}
// interface LayerIDType {
//   id: string
// }
// interface LayerDataType {
//   date: string
//   selected: boolean
// }

const dummyData: Array<LayerType> = [
  { id: '000000', date: 'February 3rd, 2023', selected: true },
  { id: '000001', date: 'March 15th, 2023', selected: false },
  { id: '000002', date: 'April 12th, 2023', selected: false },
  { id: '000003', date: 'April 26th, 2023', selected: false },
]

const Chart = () => {
  const [layers, setLayers] = useState(dummyData)

  const handleLayerSelect = (id: string) => {
    const tempLayers = [...layers]
    let i = 0
    while (i < tempLayers.length) {
      if (tempLayers[i].id == id) {
        tempLayers[i].selected = !tempLayers[i].selected
      }
      i += 1
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
      <SegmentList layers={layers} />
    </div>
  )
}

export default Chart
