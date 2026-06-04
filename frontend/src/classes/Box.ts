import type Frame from "./Frame";

// frontend\src\classes\Box.ts
class Box {
  x: number;
  y: number;

  width: number;
  height: number;

  color: string;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
  ) {
    this.x = x;
    this.y = y;

    this.width = width;
    this.height = height;

    this.color = color;
  }

  move(dx: number, dy: number) {
    this.x += dx;
    this.y += dy;
  }

  canMove(dx: number, dy: number, frame: Frame, shadowBoxes: Box[]): boolean {
    const newX = this.x + dx;
    const newY = this.y + dy;

    if (newX < frame.x) {
      return false;
    }

    if (newX + this.width > frame.x + frame.width) {
      return false;
    }

    if (newY < frame.y) {
      return false;
    }

    if (newY + this.height > frame.y + frame.height) {
      return false;
    }

    for (const shadowBox of shadowBoxes) {
      if (shadowBox.x === newX && shadowBox.y === newY) {
        return false;
      }
    }

    return true;
  }
}

export default Box;
