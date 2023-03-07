import { buildNotificationsView } from './notificationsView.js'

export function notificationController(notificationsElement) {
    function showMessage(detail) {
        
        if (detail.isError){
            notificationsElement.classList.add('goodNotifications')
        } else {
            notificationsElement.classList.add('badNotifications')
        }

        notificationsElement.innerHTML = buildNotificationsView(detail.message)

        const closeNotification = notificationsElement.querySelector('#closeNotification')
        closeNotification.addEventListener('click', () => closeNotificationWindow(notificationsElement))
    }

    return showMessage
}

function closeNotificationWindow(notificationsElement){
    notificationsElement.classList.add('hide')
    notificationsElement.innerHTML = '';
}