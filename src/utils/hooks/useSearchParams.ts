import { useSearchParams } from "react-router-dom";

const useSearchparams = () => {
  const [a, b] = useSearchParams();
  const searchParams = Object.fromEntries([...a]);
  const setSearchParams = (_key: string, value: number | string) => {
    a.set(String(_key), String(value));
    b(a);
  };

  return { searchParams, setSearchParams };
};

export default useSearchparams;
