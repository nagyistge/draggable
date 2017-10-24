import {Droppable, Plugins} from '../../../scripts/vendor/draggable';

export default function Collidable() {
  const containers = document.querySelectorAll('#Collidable .BlockLayout');
  const droppable = new Droppable(containers, {
    draggable: '.Block--isDraggable',
    droppable: '.BlockWrapper--isDroppable',
    collidables: '.CollidableObstacle',
    mirror: {
      constrainDimensions: true,
    },
    plugins: [Plugins.Collidable],
  });

  // --- Drag states --- //
  droppable.on('collidable:in', ({collidingElement}) => {
    collidingElement.classList.add('isColliding');
  });

  droppable.on('collidable:out', ({collidingElement}) => {
    collidingElement.classList.remove('isColliding');
  });

  return droppable;
}
