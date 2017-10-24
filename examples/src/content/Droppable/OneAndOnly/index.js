import {Droppable} from '../../../scripts/vendor/draggable';

export default function OneAndOnly() {
  const containerSelector = '#OneAndOnly .BlockLayout';
  const containers = document.querySelectorAll(containerSelector);
  const droppable = new Droppable(containers, {
    draggable: '.Block--isDraggable',
    droppable: '.BlockWrapper--isDroppable',
    mirror: {
      constrainDimensions: true,
    },
  });

  let droppableOrigin;

  // --- Drag states --- //
  droppable.on('drag:start', evt => {
    droppableOrigin = evt.originalSource.parentNode.dataset.droppable;
  });

  droppable.on('droppable:over', evt => {
    if (droppableOrigin !== evt.droppable.dataset.droppable) {
      evt.cancel();
    }
  });

  return droppable;
}
