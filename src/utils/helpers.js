// ==============  replace middle name to "*" ==============

export const extractSecureName = (str) => {
  // get index
  const position = str.length % 2 !== 0 ? Math.floor(str.length / 2) : str.length / 2;

  // replace the middle letter to *
  const newName = str.split('');
  newName[position] = '*';

  return newName.join('');
};
