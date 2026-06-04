import Grid from '../classes/Grid'

type Props = {
  grid: Grid
}

const GridSvg = ({ grid }: Props) => {

  const verticalLines = []

  for (let col = 0; col <= grid.columns; col++) {

    const lineX =
      grid.x +
      col * grid.cellWidth

    verticalLines.push(
      <line
        key={`v-${col}`}
        x1={lineX}
        y1={grid.y}
        x2={lineX}
        y2={grid.y + grid.height}
        stroke={grid.color}
      />
    )
  }

  const horizontalLines = []

  for (let row = 0; row <= grid.rows; row++) {

    const lineY =
      grid.y +
      row * grid.cellHeight

    horizontalLines.push(
      <line
        key={`h-${row}`}
        x1={grid.x}
        y1={lineY}
        x2={grid.x + grid.width}
        y2={lineY}
        stroke={grid.color}
      />
    )
  }

  return (
    <>
      {verticalLines}
      {horizontalLines}    
    </>
  )
}

export default GridSvg