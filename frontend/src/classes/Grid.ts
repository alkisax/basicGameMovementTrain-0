// frontend\src\classes\Grid.ts

class Grid {
  x: number
  y: number

  width: number
  height: number

  rows: number
  columns: number

  cellWidth: number
  cellHeight: number

  color: string

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    rows: number,
    columns: number,
    color: string
  ) {
    this.x = x
    this.y = y

    this.width = width
    this.height = height

    this.rows = rows
    this.columns = columns

    this.cellWidth = width / columns
    this.cellHeight = height / rows

    this.color = color
  }
}

export default Grid