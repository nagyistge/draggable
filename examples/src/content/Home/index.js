import {Draggable} from '../../scripts/vendor/draggable';

export default function Home() {
  const containers = document.querySelectorAll('#Home');

  if (containers.length === 0) {
    return false;
  }

  const draggable = new Draggable(containers, {
    draggable: '.Block--isDraggable',
  });

  // --- Drag states --- //
  draggable.on('drag:start', evt => {
    console.log('Drag: Start', evt);
  });

  draggable.on('drag:stop', evt => {
    console.log('Drag: Stop', evt);
  });

  return draggable;
}
