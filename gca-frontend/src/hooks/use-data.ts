import { useLoaderData } from 'react-router-dom';

const useData = <T>(): T => {
    const loaderData = useLoaderData() as T;
    return loaderData as T;
};

export default useData;
