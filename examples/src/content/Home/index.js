import {Draggable} from '../../scripts/vendor/draggable';

export default function Home() {
  const containers = document.querySelectorAll('#Home');
  const draggable = new Draggable(containers, {
    draggable: '.Block--isDraggable',
  });

  // --- Drag states --- //
  draggable.on('drag:start', evt => {
    console.log('Drag: Start', evt); // eslint-disable-line no-console
  });

  draggable.on('drag:stop', evt => {
    console.log('Drag: Stop', evt); // eslint-disable-line no-console
  });

  return draggable;
}
