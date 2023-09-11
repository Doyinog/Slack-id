// Function to get the current day of the week
function getCurrentDay() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    return dayOfWeek;
}

// Function to get the current UTC time in milliseconds
function getCurrentUTCTime() {
    return new Date().getTime();
}

// Update the element with data-testid="currentDayOfTheWeek"
const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
if (currentDayElement) {
    currentDayElement.textContent = getCurrentDay();
}

// Update the element with data-testid="currentUTCTime"
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
if (currentUTCTimeElement) {
    currentUTCTimeElement.textContent = getCurrentUTCTime();
}
