import { addsListController } from './add-list/addsListController.js'
import { notificationController } from './notifications/notificationsController.js'
import { userActionsController } from './userActions/userActionController.js'

const addListElement = document.querySelector('.adds-list');                    //Accedemos al DOM sólo una vez y desde fuera del controlador
const notificationsElement = document.querySelector('.notifications');
const userActionElement = document.querySelector('.userActions')

notificationController(notificationsElement);
addsListController(addListElement);
userActionsController(userActionElement);                                            //Recibe un nodo del DOM del cual se tiene que encargar.

const showMessage = notificationController(notificationsElement);

addListElement.addEventListener('newNotification', (event) => {
    console.log('He recibido el evento!!!!', event.detail)
    showMessage(event.detail)
});