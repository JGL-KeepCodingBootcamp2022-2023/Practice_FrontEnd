export function buildNotificationsView(message) {
    return `<div class="notificatinBox">
    <div class="notificationButtom">
        <p id="closeNotification">[x]</p>
    </div>
    <div class="notificationText">  
    <p id="messageText">${message}</p>
    </div>
</div>`
}