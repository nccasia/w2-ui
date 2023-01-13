type SlucItem = number | string;

export const createRelayId = (sluc: SlucItem[]) => {
  const idJson = JSON.stringify(sluc);
  const objJsonB64 = btoa(idJson);
  return objJsonB64;
};
