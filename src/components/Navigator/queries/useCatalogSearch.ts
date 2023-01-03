type UseSearchCatalog = [any, (query: string) => void];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function useSearchCatalog(first: number): UseSearchCatalog {
  // fetch data backend
  const datafetch = {
    email: "admin@example.com",
    password: "admin",
  };
  return [datafetch, null];
}
export default useSearchCatalog;
