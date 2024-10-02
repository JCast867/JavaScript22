// define an array of months
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

// function to display holidays based on the month
function getHolidays(month) {
    let holidays = '';

    // use switch to assign holidays based on the month
    switch (month) {
        case 'January':
            holidays = '<li>New Year\'s Day</li><li>Martin Luther King Jr. Day</li>';
            break;
        case 'February':
            holidays = '<li>Valentine\'s Day</li><li>Presidents\' Day</li>';
            break;
        case 'March':
            holidays = '<li>St. Patrick\'s Day</li><li>Women\'s History Month</li>';
            break;
        case 'April':
            holidays = '<li>April Fool\'s Day</li><li>Earth Day</li>';
            break;
        case 'May':
            holidays = '<li>Mother\'s Day</li><li>Memorial Day</li>';
            break;
        case 'June':
            holidays = '<li>Juneteenth</li><li>Father\'s Day</li>';
            break;
        case 'July':
            holidays = '<li>Independence Day</li><li>Parents\' Day</li>';
            break;
        case 'August':
            holidays = '<li>International Youth Day</li><li>Women\'s Equality Day</li>';
            break;
        case 'September':
            holidays = '<li>Labor Day</li><li>Patriot Day</li>';
            break;
        case 'October':
            holidays = '<li>Halloween</li><li>Columbus Day</li>';
            break;
        case 'November':
            holidays = '<li>Veterans Day</li><li>Thanksgiving Day</li>';
            break;
        case 'December':
            holidays = '<li>Christmas Day</li><li>New Year\'s Eve</li>';
            break;
        default:
            holidays = '<li>No holidays available</li>';
            break;
    }

    return holidays;
}

// loop through the months and display holidays
const holidaysContainer = document.getElementById('holidays-container');
for (let i = 0; i < months.length; i++) {
    const month = months[i];
    const monthHolidays = getHolidays(month);
    holidaysContainer.innerHTML += `
        <div class="month-holidays">
            <h2>${month}</h2>
            <ul>${monthHolidays}</ul>
        </div>
    `;
}
