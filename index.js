import { addsListController } from './add-list/addsListController.js'
import { notificationController } from './notifications/notificationsController.js'

const tweetListElement = document.querySelector('.tweet-list');

const addListElement = document.querySelector('.adds-list'); //Accedems al DOM sólo una vez y desde fuera del controlador
const notificationsElement = document.querySelector('.notifications')

notificationController(notificationsElement)
addsListController(addListElement); //Recibe un nodo del DOM del cual se tiene que encargar.

const showMessage = notificationController(notificationsElement)

addListElement.addEventListener('newNotification', (event) => {
    console.log('He recibido el evento!!!!', event.detail)
    showMessage(event.detail)
})