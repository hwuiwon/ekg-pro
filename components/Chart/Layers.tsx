import { LayerType } from './Chart'

interface LayersListProps {
  layers: Array<LayerType>
  onSelect: (id: string) => void
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

export default LayersList
