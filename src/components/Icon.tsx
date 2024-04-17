import c from 'classnames'

interface Props {
  name: string
  className?: string
}

export const Icon: React.FC<Props> = ({ name, className }) => {
  return (
    <svg className={c(className, 'c-icon')}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}
