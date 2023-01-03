function useCheckIfOrderExists(): [any, (query: string) => void] {
  const datafetch = {
    email: "admin@example.com",
    password: "admin",
  };
  return [datafetch, null];
}
export default useCheckIfOrderExists;
