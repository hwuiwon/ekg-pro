import testPhoto from '../../assets/testEKGImage.jpeg'

interface ChartObjProps {
  layerId: string
}

const ChartObject = ({ layerId }: ChartObjProps) => {
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

export default ChartObject
