type SlucItem = string;

export const createNumberId = (sluc: SlucItem) => {
  const objJsonB64 = atob(sluc);
  const idJson = JSON.parse(objJsonB64)[3];
  return idJson;
};
