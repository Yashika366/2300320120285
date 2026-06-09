const axios = require('axios');
const accessToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ5YXNoaWtha2VzaGFyaXlrbXpwQGdtYWlsLmNvbSIsImV4cCI6MTc4MDk4ODg2MywiaWF0IjoxNzgwOTg3OTYzLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiOWVkNmFkYWYtNDA5ZS00ODRiLWIxYWUtNDhmN2NlMTlkYmMzIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoieWFzaGlrYSBrZXNoYXJpIiwic3ViIjoiNDE1ZTVkYzktOTljYS00NzY0LTlmNDEtZmEwZDY0NDRiNGEwIn0sImVtYWlsIjoieWFzaGlrYWtlc2hhcml5a216cEBnbWFpbC5jb20iLCJuYW1lIjoieWFzaGlrYSBrZXNoYXJpIiwicm9sbE5vIjoiMjMwMDMyMDEyMDI4NSIsImFjY2Vzc0NvZGUiOiJjWHVxaHQiLCJjbGllbnRJRCI6IjQxNWU1ZGM5LTk5Y2EtNDc2NC05ZjQxLWZhMGQ2NDQ0YjRhMCIsImNsaWVudFNlY3JldCI6IlJDdVVCR1hOZXBmZFd4WkYifQ.GLRR_VGLslsonhtmV-wx0sbPVNtFfuRVlt3LKeaurA8';
const logid='98f5d488-3d64-4fb4-8604-7c1397807840';
const notificationsUrl = 'http://4.224.186.213/evaluation-service/notifications';
async function getNotifications() {
    try{
        const response = await axios.get(notificationsUrl, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'LogId': logid
            }
        });
        return response.data;
    } catch (error) {
        console.error('failed to fetch notifications:', error);
        throw error;
    }
}

 function processNotifications(notifications) {
    notifications.forEach(notification => {
        console.log(`Notification ID: ${notification.id}`);
        console.log(`Type: ${notification.type}`);
        console.log(`Message: ${notification.message}`);
        console.log(`Timestamp: ${notification.timestamp}`);
        
    });
}
function displayNotifications(notifications) {
    console.log('Notifications:');
    notifications.forEach(notification => {
        console.log(`- ${notification.message} (Type: ${notification.type}, Timestamp: ${notification.timestamp})`);
    });
}
async function main() {
    try {
        const notifications = await getNotifications();
        processNotifications(notifications);
        displayNotifications(notifications);
        console.log('Notifications processed and displayed successfully.');
    } catch (error) {
        console.error('Error in main function:', error);
    }   
}
main();
 