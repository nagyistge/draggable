import MobileNav from '../components/MobileNav';

// import Home from '../content/Home';
import BasicDragging from '../content/Draggable/BasicDragging';
import Positioned from '../content/Draggable/Positioned';
import OneAndOnly from '../content/Droppable/OneAndOnly';
import SimpleList from '../content/Sortable/SimpleList';
import Transformed from '../content/Sortable/Transformed';
import MultipleContainers from '../content/Sortable/MultipleContainers';
import FloatedLayout from '../content/Swappable/FloatedLayout';
import GridLayout from '../content/Swappable/GridLayout';
import Collidable from '../content/Plugins/Collidable';
import SwapAnimation from '../content/Plugins/SwapAnimation';

const navActivator = document.getElementById('MobileNavActivator');

if (navActivator) {
  const mobileNav = new MobileNav(navActivator); // eslint-disable-line no-unused-vars
}

// Initialize all examples
// Home();
BasicDragging();
Positioned();
OneAndOnly();
SimpleList();
Transformed();
MultipleContainers();
FloatedLayout();
GridLayout();
Collidable();
SwapAnimation();
