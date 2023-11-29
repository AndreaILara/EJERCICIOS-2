// 3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];

console.log('Original Points List:', pointsList);
console.log('Copied Points List', pointsListCopy);

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyCopy = { ...toy };

console.log('Original Toy:', toy);
console.log('Copied Toy:', toyCopy);

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
// spread operatos.
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];

const combinedPointsList = [...pointsList1, ...pointsList2];

console.log('Combined Points List:', combinedPointsList);
// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
// con spread operators.
const toys = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toysUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] };
const mergedToy = { ...toys, ...toysUpdate };

console.log('Merged Toy:', mergedToy);

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
// pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsCopyWithoutPosition2 = [...colors.slice(0, 2), ...colors.slice(3)];

console.log('Original Colors:', colors);
console.log('Copied Colors without Position 2:', colorsCopyWithoutPosition2);