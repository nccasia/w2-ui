const data: string[] = ["Welcome to NCC W2"];
function getRandomInt(max): number {
  return Math.floor(Math.random() * max);
}

function useRamdomString(): string {
  return data[getRandomInt(data.length)];
}

export default useRamdomString;
