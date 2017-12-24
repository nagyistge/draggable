const maxDragDistance = 80;
const Classes = {
  bottom: 'Plate--levelBottom',
  middle: 'Plate--levelMiddle',
  top: 'Plate--levelTop',
};

export default class Plate {
  constructor(wrapper) {
    this.wrapper = wrapper;
    this.plates = {
      bottom: wrapper.getElementsByClassName(Classes.bottom),
      middle: wrapper.getElementsByClassName(Classes.middle),
      top: wrapper.getElementsByClassName(Classes.top),
    };
    this.initialMousePosition = {
      x: 0,
      y: 0,
    };
  }

  setInitialPosition(sensorEvent) {
    this.initialMousePosition.x = sensorEvent.clientX;
    this.initialMousePosition.y = sensorEvent.clientY;
  }

  dragWarp(source, sensorEvent) {
    const adjustedX = sensorEvent.clientX - this.initialMousePosition.x;
    const adjustedY = this.initialMousePosition.y - sensorEvent.clientY;

    console.log(this.initialMousePosition.x, adjustedX);
    console.log(this.initialMousePosition.y, adjustedY);

    this._translateShadow(adjustedX, adjustedY);
  }

  _transformPlate(x, y) {
    // transform: translate3d(0, -40%, 0) scale(1, 0.75);
  }

  _translateShadow(x, y) {
    this.plates.top[0].style.setProperty(`--shadow-offset-x`, `${x}px`);
    this.plates.top[0].style.setProperty(`--shadow-offset-y`, `${y}px`);
  }

  /*
  _getPlateLevel(source) {
    const test = source.classList;

    console.log(test);
  }
*/
}
