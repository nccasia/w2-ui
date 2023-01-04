export const filterMetadataArray = (metadataInputs: any[]) =>
  metadataInputs.filter(input => !!input.key);
