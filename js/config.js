// Add user profiles here
var luke = 'luke';
var jake = 'jake';

// Weather Parameters
// Units: metric or imperial
var lang = 'en';
var units = 'imperial';
var id = '4862034'; // default to iowa city

// RSS feed link
var feed = 'http://www.cbsnews.com/latest/rss/us';

// Calendar can be changed from the calendar php file
var numCalendarEvents = 10;

// Notifications feed link
var notifications = '';

// Compliments:
var morningStart = 3;
var morning = [
            'Good morning!',
            'Make today great.',
            'How was your sleep?'
        ];

var afternoonStart = 11;   
var afternoon = [
            'Hope your day is going well!',
            'You look great!',
            'You\'ve almost made it.'
        ];
 
var eveningStart = 21;      
var evening = [
            'Brush your teeth!',
            'Goodnight!',
            'Sleep tight!'
        ];


// Override any parameters for the specific users here
if (user == luke) {
    id = '4846960';
    notifications = '';
} else if (user == jake) {
    id = '4862034';
    notifications = '';
}


// finish by setting up the weather parameters
var weatherParams = {
    'id':id,
    'units':units,
    'lang':lang
};


/**
 City IDs:

 4862034 - Iowa city
 4846960 - Ankeny


 */