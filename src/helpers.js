import avatar0 from './assets/avatar0.png';
import avatar1 from './assets/avatar1.png';
import avatar2 from './assets/avatar2.png';
import avatar3 from './assets/avatar3.png';
import avatar4 from './assets/avatar4.png';

export const getAvatar = i => {
  switch(i % 5) {
    case 0:
      return avatar0;
    case 1:
      return avatar1;
    case 2:
      return avatar2;
    case 3:
      return avatar3;
    case 4:
    default:
      return avatar4;
  }
}

export const capitalize = title => {
  return title.trim()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}