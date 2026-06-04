// frontend\src\components\Home.tsx

import { useState, useEffect } from 'react'
import Box from "../classes/Box";
import Frame from "../classes/Frame";
import Grid from "../classes/Grid";
import BoxSvg from "./BoxSvg";
import FrameSvg from "./FrameSvg";
import GridSvg from "./GridSvg";

// helper func
const createRandomBox = (
  grid: Grid
): Box => {
  const randomRow = Math.floor(Math.random() * grid.rows) + 1
  const randomCol = Math.floor(Math.random() * grid.columns) + 1

  return new Box(grid.x + (randomCol - 0.5) * grid.cellWidth - 10, grid.y + (randomRow - 0.5) * grid.cellHeight - 10, 20, 20, 'lime')
}

const Home = () => {
  const frame = new Frame(100, 40, 300, 300, 'red')
  const grid = new Grid(100, 40, 300, 300, 10, 10, 'green')
  console.log(grid);

  const [box, setBox] = useState<Box>(createRandomBox(grid))
  const [shadowBoxes, setShadowBoxes] = useState<Box[]>([])

  const moveBox = (dx: number, dy: number) => {
    if (!box.canMove(dx, dy, frame, shadowBoxes)) return

    const shadowBox = new Box(
      box.x,
      box.y,
      box.width,
      box.height,
      'green'
    )

    setShadowBoxes([...shadowBoxes, shadowBox])

    const newBox = new Box(
      box.x + dx,
      box.y + dy,
      box.width,
      box.height,
      box.color
    )
    setBox(newBox)
  }

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === 'ArrowRight') {
        moveBox(grid.cellWidth, 0)
      }

      if (event.key === 'ArrowLeft') {
        moveBox(-grid.cellWidth, 0)
      }

      if (event.key === 'ArrowUp') {
        moveBox(0, -grid.cellHeight)
      }

      if (event.key === 'ArrowDown') {
        moveBox(0, grid.cellHeight)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [box])

  return (
    <>
      <svg width='640' height='360'>
        <GridSvg grid={grid} />
        <FrameSvg frame={frame} />

        {
          shadowBoxes.map(
            (shadowBox, index) => (
              <BoxSvg
                key={index}
                box={shadowBox}
              />
            )
          )
        }

        <BoxSvg box={box} />
      </svg>
    </>

  )
}
export default Home
