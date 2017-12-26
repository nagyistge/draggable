const scaleFactor = 0.75;
const dragThreshold = {
  min: -40,
  max: 40,
};
const Classes = {
  bottom: 'Plate--levelBottom',
  middle: 'Plate--levelMiddle',
  top: 'Plate--levelTop',
};

function flipSign(number) {
  if (Math.sign(number) === 1) {
    return -Math.abs(number);
  } else if (Math.sign(number) === -1) {
    return Math.abs(number);
  } else {
    return 0;
  }
}

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
    this.factors = this._getFactors();
  }

  setInitialPosition(sensorEvent) {
    this.initialMousePosition.x = sensorEvent.clientX;
    this.initialMousePosition.y = sensorEvent.clientY;
  }

  dragWarp(source, sensorEvent) {
    const adjustedX = this._offsetWithinThreshold(this.initialMousePosition.x, sensorEvent.clientX);
    const adjustedY = this._offsetWithinThreshold(this.initialMousePosition.y, sensorEvent.clientY);

    this._scalePlates(adjustedX, adjustedY);
    this._translateShadow(adjustedX, adjustedY);
    this._translateEachPlate(adjustedX, adjustedY);
  }

  resetWarp() {
    this._scalePlates(0, 0);
    this._translateShadow(0, 0);
    this._translateEachPlate(0, 0);
  }

  _getFactors() {
    const factors = {};

    for (const plateLevel in this.plates) {
      if (!this.plates.hasOwnProperty(plateLevel)) {
        return false;
      }

      factors[plateLevel] = getComputedStyle(this.wrapper).getPropertyValue(`--${plateLevel}-translate-factor`);
    }

    return factors;
  }

  _offsetWithinThreshold(initialPosition, currentPosition) {
    const updatedPosition = initialPosition - currentPosition;
    let offset = updatedPosition;

    if (updatedPosition < dragThreshold.min) {
      offset = dragThreshold.min;
    } else if (updatedPosition > dragThreshold.max) {
      offset = dragThreshold.max;
    }

    return offset;
  }

  _calcScale(value, max, factor) {
    const step1 = Math.abs(value) / max;
    const step2 = step1 - step1 * factor;

    return 1 - step2;
  }

  _scalePlates(x, y) {
    const scaleX = this._calcScale(x, dragThreshold.max, scaleFactor);
    const scaleY = this._calcScale(y, dragThreshold.max, scaleFactor);

    this.wrapper.style.setProperty(`--plate-scale-x`, `${scaleX}`);
    this.wrapper.style.setProperty(`--plate-scale-y`, `${scaleY}`);
  }

  _translateEachPlate(x, y) {
    for (const plateLevel in this.plates) {
      if (!this.plates.hasOwnProperty(plateLevel)) {
        return;
      }

      const translateX = x * 2 * this.factors[plateLevel];
      const translateY = y * 2 * this.factors[plateLevel];

      this.wrapper.style.setProperty(`--${plateLevel}-translate-x`, `${translateX}px`);
      this.wrapper.style.setProperty(`--${plateLevel}-translate-y`, `${translateY}px`);
    }
  }

  _translateShadow(x, y) {
    const shadowX = flipSign(x / 2);
    const shadowY = flipSign(y / 2);

    this.wrapper.style.setProperty(`--shadow-offset-x`, `${shadowX}px`);
    this.wrapper.style.setProperty(`--shadow-offset-y`, `${shadowY}px`);
  }
}
