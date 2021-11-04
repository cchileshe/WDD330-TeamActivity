
export default class CharacterHandler {
  constructor(count, nextURL, previousURL, characterData) {
    this.count = count;
    this.nextURL = nextURL;
    this.previousURL = previousURL;

    this.character_list = characterData;
  }

  getCharacterList() {
    return this.character_list;
  }

}