import { buildGreeting2 } from "./userActionView.js";


export function sayHello(userActionsElement, payload){

    const helloElement = userActionsElement.querySelector('#hello')
    helloElement.appendChild(buildGreeting2(payload.username));
    setTimeout(() => {
      helloElement.innerHTML = '';
    }, 5000)
};