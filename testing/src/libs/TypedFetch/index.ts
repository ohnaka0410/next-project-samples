export const typedFetch = async <T>(input: RequestInfo, init?: RequestInit): Promise<T> => {
  const response: Response = await fetch(input, init);
  if (!response.ok) {
    throw new Error(`${response.status}:${response.statusText}`);
  }
  return (await response.json()) as T;
};
