const ioModule = jest.createMockFromModule("socket.io-client");
let events: { [ket: string]: Array<(...args: Array<unknown>) => void> } = {};
const emit = (eventName: string, ...args: Array<unknown>) => {
  events[eventName]?.forEach((func) => func(args));
};
export const server = {
  emit,
};
export const io = (url: string) => {
  return {
    url,
    on(eventName: string, func: (...args: Array<unknown>) => void) {
      if (Array.isArray(events[eventName])) {
        events[eventName].push(func);
        if (eventName === "connect") func();
      } else {
        events[eventName] = [func];
      }
    },
    off(eventName: string) {
      delete events[eventName];
    },
    disconnect() {
      console.log("disconnected");
    },
    emit,
  };
};

export const cleanUp = () => {
  events = {};
};
export default ioModule;
