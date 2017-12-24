import {Draggable} from '../../../scripts/vendor/draggable';

// const maxDragDistance = 80;

export default function Positioned() {
  const containerSelector = '#Positioned .PlateWrapper';
  const containers = document.querySelectorAll(containerSelector);

  if (containers.length === 0) {
    return false;
  }

  const draggable = new Draggable(containers, {
    draggable: '.Plate',
    appendTo: containerSelector,
  });

  // --- Drag states --- //
  draggable.on('drag:start', evt => {
    console.log('Drag: Start', evt);
  });

  draggable.on('drag:move', evt => {
    console.log('Drag: Move', evt);
  });

  draggable.on('drag:stop', evt => {
    console.log('Drag: Stop', evt);
  });

  return draggable;
}
