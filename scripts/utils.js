import typeDictionary from "../data/type-dictionary.js";

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function translateTypeName(typeName) {
  return capitalize(typeDictionary[typeName.toLowerCase()]);
}
