import { pubSub } from '../pubSub.js'
import { buildNotificationsView } from './notificationsView.js'

export function notificationController(notificationsElement) {

    function showMessage(message) {     

        notificationsElement.innerHTML = buildNotificationsView(message)

        setTimeout (() => {
            notificationsElement.classList.add('hide')
            notificationsElement.innerHTML =  ''
        }, 5000);

        const closeNotification = notificationsElement.querySelector('#closeNotification')
        closeNotification.addEventListener('click', () => closeNotificationWindow(notificationsElement))
    }

    pubSub.subscribe(pubSub.TOPICS.SHOW_NOTIFICATION, (message) => {
        showMessage(message)
    })

    return showMessage
}

function closeNotificationWindow(notificationsElement){
    notificationsElement.classList.add('hide')
    notificationsElement.innerHTML = '';
}