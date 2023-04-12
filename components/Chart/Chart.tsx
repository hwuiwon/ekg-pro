import React, { useState } from 'react'

const Chart = () => {
  const map = new Map()
  map.set('First Chart', true)
  map.set('Second Chart', false)
  map.set('Third Chart', true)
  const [selectedLayers, setLayers] = useState<Map<string, boolean>>(map)

  const handleLayerSelect = (id: string) => {
    // console.log(selectedLayers, id)
    const newLayers = selectedLayers
    newLayers?.set(id, !newLayers.get(id))
    setLayers(newLayers)
  }

  return (
    <div className="AnalysisContianer">
      <div className="LayerContainer">
        <p className="Subheading" style={{ margin: '10px' }}>
          Layers
        </p>
        <LayersList
          selectedLayers={selectedLayers}
          onSelect={handleLayerSelect}
        />
      </div>
      <div className="ChartContianer">
        <ChartList selectedLayers={selectedLayers} />
      </div>
    </div>
  )
}

interface LayersListProps {
  selectedLayers: Map<string, boolean>
  onSelect: (id: string) => void
}

interface ChartListProps {
  selectedLayers: Map<string, boolean>
}

const LayersList = (props: LayersListProps) => {
  const layerComponentList: Array<JSX.Element> = []
  console.log(props.selectedLayers)
  props.selectedLayers.forEach((selected: boolean, id: string) => {
    layerComponentList.push(
      <div className="Layer" key={id} onClick={() => props.onSelect(id)}>
        <p className="LayerText">{id}</p>
        <div
          className="LayerButton"
          style={{
            background: selected ? 'green' : 'gray',
          }}
        />
      </div>
    )
  })

  return <>{layerComponentList}</>
}

const ChartList = ({ selectedLayers }: ChartListProps) => {
  const chartComponentList: Array<JSX.Element> = []
  selectedLayers.forEach((selected: boolean, id: string) => {
    if (selected) {
      chartComponentList.push(
        <div key={id} className="ChartContainer">
          {id}
        </div>
      )
    }
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {chartComponentList}
    </div>
  )
}

export default Chart
