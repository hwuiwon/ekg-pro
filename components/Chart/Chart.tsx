import React, { useState } from 'react'

interface LayersListProps {
  selectedLayers: Map<string, boolean>
  onSelect: (id: string) => void
}

interface ChartListProps {
  selectedLayers: Map<string, boolean>
}

const LayersList = ({
  selectedLayers: selectedLayers,
  onSelect,
}: LayersListProps) => {
  const layerComponentList: Array<JSX.Element> = []
  selectedLayers.forEach((selected: boolean, id: string) => {
    layerComponentList.push(
      <div
        key={id}
        style={{
          background: selected ? 'green' : 'gray',
        }}
        onClick={() => onSelect(id)}
      >
        {selected}
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
        <div
          key={id}
          style={{
            width: '100%',
            height: '50px',
            backgroundColor: 'white',
            marginBottom: '10px',
          }}
        >
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

const Chart = () => {
  const map = new Map()
  map.set('First Chart', true)
  map.set('Second Chart', true)
  map.set('Third Chart', true)
  const [selectedLayers, setLayers] = useState<Map<string, boolean>>(map)

  const handleLayerSelect = (id: string) => {
    const newLayers = selectedLayers
    newLayers?.set(id, !newLayers.get(id))
    setLayers(newLayers)
  }

  // useEffect(() => {
  //   const map = new Map()
  //   map.set('First Chart', true)
  //   map.set('Second Chart', true)
  //   map.set('Third Chart', true)
  //   setLayers(map)
  // }, [])

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '10px' }}>
        <LayersList
          selectedLayers={selectedLayers}
          onSelect={handleLayerSelect}
        />
      </div>
      <div>
        <ChartList selectedLayers={selectedLayers} />
      </div>
    </div>
  )
}

export default Chart
