import { useCallback, useReducer } from "react";

const useForceUpdate = () => {
  const [, dispatch] = useReducer(
    () => Object.create(null),
    Object.create(null)
  );
  const memoizedDispatch = useCallback(() => {
    dispatch(null);
  }, [dispatch]);
  return memoizedDispatch;
};

export default useForceUpdate;
