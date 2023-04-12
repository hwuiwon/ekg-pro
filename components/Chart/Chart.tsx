import React, { useEffect, useReducer, useState } from 'react'
import ChartList from './ChartList'
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

export default Chart
