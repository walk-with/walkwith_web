export const throttle = (callback: (arg: any) => void, delay: number) => {
  let timeout: NodeJS.Timeout;
  return (...arg: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(arg), delay);
  };
};
