import { LayerType } from './Chart'
import EKG1 from '../../assets/testImages/fullEKG1.jpeg'
import EKG2 from '../../assets/testImages/fullEKG2.jpeg'
// import { StaticImageData } from 'next/image'

interface SegmentObjProps {
  selectedLayers: Array<LayerType>
  segment: string
}

const SegmentObject = ({ selectedLayers, segment }: SegmentObjProps) => {
  // const [state, dispatch] = useReducer(oldState, action) // THIS IS FOR PANNING/ZOOMING
  // import {useReducer} from 'react'
  // zander is so sexy 🤤
  // Folder of images is being weird so just manually doing it untill API is ready.
  const images = [
    { id: selectedLayers[0].id, path: EKG1 },
    { id: selectedLayers[1].id, path: EKG2 },
    { id: selectedLayers[2].id, path: EKG1 },
    { id: selectedLayers[3].id, path: EKG2 },
  ]

  const layers: Array<JSX.Element> = []
  for (let i = 0; i < selectedLayers.length; i++) {
    if (selectedLayers[i].selected) {
      layers.push(
        <view key={i}>
          <img src={images[i].path.src} className="SegmentImg" />
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

export default SegmentObject
