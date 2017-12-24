import {Swappable} from '../../../scripts/vendor/draggable';

export default function GridLayout() {
  const containerSelector = '#GridLayout .BlockLayout';
  const containers = document.querySelectorAll(containerSelector);

  if (containers.length === 0) {
    return false;
  }

  const swappable = new Swappable(containers, {
    draggable: '.Block--isDraggable',
    appendTo: containerSelector,
    mirror: {
      constrainDimensions: true,
    },
  });

  // --- Drag states --- //
  swappable.on('drag:start', evt => {
    console.log('Drag: Start', evt);
  });

  swappable.on('drag:stop', evt => {
    console.log('Drag: Stop', evt);
  });

  return swappable;
}
