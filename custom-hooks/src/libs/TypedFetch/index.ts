export const typedFetch = async <T>(input: RequestInfo, init?: RequestInit | undefined): Promise<T> => {
  const response: Response = await fetch(input, init);
  if (!response.ok) {
    throw new Error(`${response}`);
  }
  return await response.json();
};
