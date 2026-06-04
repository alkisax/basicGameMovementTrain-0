import Frame from '../classes/Frame'

type Props = {
  frame: Frame
}

const FrameSvg = ({ frame }: Props) => {
  return (
      <rect
        x={frame.x}
        y={frame.y}
        width={frame.width}
        height={frame.height}
        fill='none'
        stroke={frame.color}
      />
  )
}

export default FrameSvg