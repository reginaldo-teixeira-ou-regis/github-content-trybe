import Character from './entities/Character';
import LongRangeCharacter from './entities/LongRangeCharacter';
import MeleeCharacter from './entities/MeleeCharacter';

const yoshi = new MeleeCharacter('Yoshi', 'Super dragon');
const samus = new LongRangeCharacter('Samus', 'Zero Laser');

// yoshi.talk();
// yoshi.specialMove();
// samus.talk();
// samus.specialMove();
Character.characterPresentation(yoshi);
Character.characterPresentation(samus);