import {Sortable} from '../../../scripts/vendor/draggable';

export default function Transformed() {
  const containerSelector = '#Transformed .PaperStack';
  const containers = document.querySelectorAll(containerSelector);
  const sortable = new Sortable(containers, {
    draggable: '.PaperStackItem--isDraggable',
    appendTo: containerSelector,
    mirror: {
      constrainDimensions: true,
    },
  });

  // --- Drag states --- //
  sortable.on('drag:start', evt => {
    evt.originalSource.classList.add('PaperStackItem--isCloned');
  });

  sortable.on('drag:stop', evt => {
    evt.originalSource.classList.remove('PaperStackItem--isCloned');
  });

  return sortable;
}
