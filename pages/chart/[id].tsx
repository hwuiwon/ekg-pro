import { useEffect } from 'react'

export const Chart = (): JSX.Element => {
  useEffect(() => {
    const { data } = getQueryParams(window.location.search)
    console.log(data)
  }, [])

  return (
    <div>
      <p>test</p>
    </div>
  )
}

const getQueryParams = (query) => {
  return query
    ? (/^[?#]/.test(query) ? query.slice(1) : query)
        .split('&')
        .reduce((params, param) => {
          const [key, value] = param.split('=')
          params[key] = value
            ? decodeURIComponent(value.replace(/\+/g, ' '))
            : ''
          return params
        }, {})
    : {}
}
