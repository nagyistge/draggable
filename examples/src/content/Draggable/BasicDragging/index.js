import {Draggable} from '../../../scripts/vendor/draggable';

export default function BasicDragging() {
  const containers = document.querySelectorAll('#BasicDragging .PillSwitch');
  const draggable = new Draggable(containers, {
    draggable: '.PillSwitchControl',
  });

  let initialMousePosition;
  let sourceContainerRect;
  let sourceRect;

  // --- Drag states --- //
  draggable.on('drag:start', evt => {
    initialMousePosition = {
      clientX: evt.sensorEvent.clientX,
      clientY: evt.sensorEvent.clientY,
    };
  });

  draggable.on('mirror:created', evt => {
    sourceRect = evt.originalSource.getBoundingClientRect();
    sourceContainerRect = evt.sourceContainer.getBoundingClientRect();
  });

  draggable.on('drag:move', evt => {
    evt.cancel();

    const offset = (initialMousePosition.clientY - evt.sensorEvent.clientY) * 2 * 0.5;
    const left = sourceRect.left + offset;
    const top = sourceRect.top - offset;

    if (top < sourceContainerRect.top || left < sourceContainerRect.left) {
      return;
    }

    requestAnimationFrame(() => {
      evt.mirror.style.transform = `translate3d(${left}px, ${top}px, 0)`;
    });
  });

  return draggable;
}
