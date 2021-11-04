
export default class Character {
  constructor(character) {
      this.birth_year = character.birth_year;
      this.created = character.created;
      this.edited = character.edited;
      this.eye_color = character.eye_color;
      this.films = character.films;
      this.gender = character.gender;
      this.hair_color = character.hair_color;
      this.height = character.height;
      this.homeworld = character.homeworld;
      this.mass = character.mass;
      this.name = character.name;
      this.skin_color = character.skin_color;
      this.species = character.species;
      this.starships = character.starships;
      this.url = character.url;
      this.vehicles = character.vehicles;
  }

  getBirthYear() {
    return this.birth_year;
  }

  getCreated() {
    return this.created;
  }

  getEdited() {
    return this.edited;
  }

  getFilms() {
    return this.films;
  }

  getGender() {
    return this.gender;
  }

  getHairColor() {
    return this.hair_color;
  }

  getHeight() {
    return this.height;
  }

  getHomeworld() {
    return this.homeworld;
  }

  getMass() {
    return this.mass;
  }

  getName() {
    return this.name;
  }

  getSkinColor() {
    return this.skin_color;
  }

  getSpecies() {
    return this.species;
  }

  getStarships() {
    return this.starships;
  }

  getUrl() {
    return this.url;
  }

  getVehicles() {
    return this.vehicles;
  }
}