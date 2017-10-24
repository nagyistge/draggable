import {Swappable} from '../../../scripts/vendor/draggable';

export default function GridLayout() {
  const containerSelector = '#GridLayout .BlockLayout';
  const containers = document.querySelectorAll(containerSelector);
  const swappable = new Swappable(containers, {
    draggable: '.Block--isDraggable',
    appendTo: containerSelector,
    mirror: {
      constrainDimensions: true,
    },
  });

  // --- Drag states --- //
  swappable.on('drag:start', evt => {
    console.log('Drag: Start', evt); // eslint-disable-line no-console
  });

  swappable.on('drag:stop', evt => {
    console.log('Drag: Stop', evt); // eslint-disable-line no-console
  });

  return swappable;
}
