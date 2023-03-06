import { buildNotificationsView } from './notificationsView.js'

export function notificationController(notificationsElement) {
    function showMessage(message) {
        
        if (message.startsWith('No hemos podido')){
            notificationsElement.classList.replace('notifications', 'badNotifications')
        } else if (message.startsWith('No hay')) {
            notificationsElement.classList.replace('notifications', 'neutralNotifications')
        } else {
            notificationsElement.classList.replace('notifications', 'goodNotifications')
        }

        notificationsElement.innerHTML = buildNotificationsView(message)
    }

    return showMessage
}