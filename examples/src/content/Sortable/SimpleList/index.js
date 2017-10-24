import {Sortable} from '../../../scripts/vendor/draggable';

export default function SimpleList() {
  const containerSelector = '#SimpleList .StackedList';
  const containers = document.querySelectorAll(containerSelector);
  const sortable = new Sortable(containers, {
    draggable: '.StackedListItem--isDraggable',
    appendTo: containerSelector,
    mirror: {
      constrainDimensions: true,
    },
  });

  // --- Drag states --- //
  sortable.on('drag:start', evt => {
    evt.originalSource.classList.add('StackedListItem--isCloned');
  });

  sortable.on('drag:stop', evt => {
    evt.originalSource.classList.remove('StackedListItem--isCloned');
  });

  return sortable;
}
