export function buildNotificationsView(message) {
    return `<div>
    <div class="notificationButtom" >
        <p id="closeNotification">[x]</p>
    </div>
    <div class="notificationText">  
    <p>${message}</p>
    </div>
</div>`
}