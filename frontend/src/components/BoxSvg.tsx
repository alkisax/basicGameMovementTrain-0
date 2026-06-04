import Box from '../classes/Box'

type Props = {
  box: Box
}

const BoxSvg = ({ box }: Props) => {
  return (
    <rect
      x={box.x}
      y={box.y}
      width={box.width}
      height={box.height}
      fill={box.color}
    />
  )
}

export default BoxSvg