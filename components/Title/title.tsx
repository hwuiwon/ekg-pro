interface TitleProps {
  title: string
}

const Title = (props: TitleProps): JSX.Element => {
  return (
    <p className="text-3xl text-gray-900 dark:text-white font-semibold mt-7 mb-5">
      {props.title}
    </p>
  )
}

export default Title
