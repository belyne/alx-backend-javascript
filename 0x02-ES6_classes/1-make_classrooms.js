// 1-make_classrooms.js
import ClassRoom from './0-classroom.js';

function initializeRooms() {
  const roomSizes = [19, 20, 34];

  // Create an array of ClassRoom objects with specified sizes
  const rooms = roomSizes.map(size => new ClassRoom(size));

  return rooms;
}

export default initializeRooms;
