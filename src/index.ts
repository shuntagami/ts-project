import World from "./world";

const root: HTMLElement | null = document.getElementById("root");
const world = new World("hello");
world.sayHello(root);

import asyncAwaitSample from "./asynchronous/asyncAwait";
asyncAwaitSample();
