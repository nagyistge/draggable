import {Draggable} from '../../../scripts/vendor/draggable';
import Plate from '../../../components/Plate';

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
  const plates = new Plate(containers[0]);

  // --- Drag states --- //
  draggable.on('drag:start', evt => {
    plates.setInitialPosition(evt.sensorEvent);
  });

  draggable.on('mirror:created', evt => {
    // console.log('Mirror: Created', evt);
  });

  draggable.on('drag:move', evt => {
    // console.log('Drag: Move', evt);
    plates.dragWarp(evt.source, evt.sensorEvent);
  });

  draggable.on('drag:stop', () => {
    plates.resetWarp();
  });

  return draggable;
}
