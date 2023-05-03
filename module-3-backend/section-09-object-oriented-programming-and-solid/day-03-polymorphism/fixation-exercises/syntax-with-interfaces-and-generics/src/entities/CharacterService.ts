import { Character } from '../interfaces/Character';
import { IModel } from '../interfaces/IModel';

export default class CharacterService {
  constructor(readonly model: IModel) { }

  async create(character: Character) {
    const newCharacter = await this.model.create(character);
    return ({ status: 201, data: newCharacter });
  }

  async getAll() {
    const allCharacter = await this.model.getAll();
    return ({ status: 200, data: allCharacter });
  }

  async update(id: number, character: Character) {
    const updatedCharacter = await this.model.update(id, character);
    return { status: 200, data: updatedCharacter };
  }

  async delete(id: number) {
    const isDeleted = await this.model.delete(id);
    if (isDeleted) {
      return { status: 204, message: 'Character deleted' };
    }
  }

  async getById(id: number) {
    const character = await this.model.getById(id);
    if (character) {
      return { status: 200, data: character };
    }
  }
}