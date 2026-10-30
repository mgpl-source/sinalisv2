declare namespace JSX { interface IntrinsicElements { [elemName: string]: any; } }
declare const React: {
  useState<T>(initial: T): [T, (value: T | ((old: T)=>T))=>void];
  useEffect(effect:()=>void | (()=>void), deps?:unknown[]):void;
  createElement: (...args:any[])=>any;
};
declare const ReactDOM: {createRoot(element:HTMLElement):{render(node:any):void}};
