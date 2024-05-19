import { formatArrayStrings } from './arrayManipulation';

let id = 1;

function createUserProfiles(names, modifiedNames) {
  return names.map((name, index) => {
    return {
      originalName: name,
      modifiedName: modifiedNames[index],
      id: id++,
    };
  });
}

export { createUserProfiles };