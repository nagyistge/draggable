import {Swappable} from '../../../scripts/vendor/draggable';

export default function FloatedLayout() {
  const containers = document.querySelectorAll('#FloatedLayout .BlockLayout');
  const swappable = new Swappable(containers, {
    draggable: '.Block--isDraggable',
    // placedTimeout: 3000,
    classes: {
      'source:placed': '', // doesn't work
    },
    mirror: {
      constrainDimensions: true,
    },
  });

  // EXPERIMENT WITH MANAGING THE PLACED CLASS MYSELF

  // --- Drag states --- //
  swappable.on('drag:start', evt => {
    // MAX WILL UPDATE THE LIB TO HAVE A NEW CLASS I CAN HOOK INTO
    evt.originalSource.classList.add('Block--isCloned');
  });

  /*
  // doesn't actually work... consult with Max
  swappable.on('swappable:swapped', ({dragEvent, swappedElement}) => {
    const mirror = dragEvent.data.mirror;
    const swappedHeight = swappedElement.offsetHeight;

    mirror.style.height = `${swappedHeight}px`;
  });
*/

  swappable.on('drag:stop', evt => {
    evt.originalSource.classList.remove('Block--isCloned');
  });

  return swappable;
}
