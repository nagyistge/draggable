import {Draggable} from '../../../scripts/vendor/draggable';

export default function Positioned() {
  const containers = document.querySelectorAll('#Positioned .Plate');
  const draggable = new Draggable(containers, {
    draggable: '.Plate',
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
