import {Sortable} from '../../../scripts/vendor/draggable';

export default function MultipleContainers() {
  const containerSelector = '#MultipleContainers .Container';
  const containers = document.querySelectorAll(containerSelector);
  const sortable = new Sortable(containers, {
    draggable: '.StackedListItem--isDraggable',
    mirror: {
      constrainDimensions: true,
    },
  });

  let lastOverContainer;

  // --- Drag states --- //
  sortable.on('drag:start', evt => {
    evt.originalSource.classList.add('StackedListItem--isCloned');
  });

  sortable.on('sortable:sorted', evt => {
    if (lastOverContainer === evt.dragEvent.overContainer) {
      return;
    }

    evt.dragEvent.overContainer.appendChild(evt.dragEvent.mirror);

    const overRect = evt.dragEvent.over.getBoundingClientRect();

    evt.dragEvent.mirror.style.width = `${overRect.width}px`;
    evt.dragEvent.mirror.style.height = `${overRect.height}px`;

    lastOverContainer = evt.dragEvent.overContainer;
  });

  sortable.on('drag:stop', evt => {
    evt.originalSource.classList.remove('StackedListItem--isCloned');
  });

  return sortable;
}
