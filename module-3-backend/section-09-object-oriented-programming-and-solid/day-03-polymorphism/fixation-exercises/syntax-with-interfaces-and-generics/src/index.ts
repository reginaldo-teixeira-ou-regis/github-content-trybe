import CharacterService from './entities/CharacterService';
import LocalDbModel from './entities/LocalDbModel';
import MockDbModel from './entities/MockDbModel';

const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);

const B = new CharacterService(new MockDbModel());
B.getAll().then(console.log);