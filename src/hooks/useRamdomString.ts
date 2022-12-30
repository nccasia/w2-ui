const data: string[] = [
  "Welcome to chanel",
  "Here is some information we gathered about tasks",
  "Work work work",
];
function getRandomInt(max): number {
  return Math.floor(Math.random() * max);
}

function useRamdomString(): string {
  return data[getRandomInt(data.length)];
}

export default useRamdomString;
