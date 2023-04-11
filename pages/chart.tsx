import { useEffect } from 'react'
import { useRouter, withRouter } from 'next/router'

interface ChartProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  router: any
}

const Chart: React.FC = (props) => {
  useEffect(() => {
    console.log('In Chart: ')
    console.log(props.router.query.id)
  }, [props.router.query])

  return (
    <div>
      <p>test</p>
    </div>
  )
}

export default withRouter(Chart)
