window.onload = function () {
    const dateTimeElement = document.getElementById('dateTime');
    const dateElement = document.getElementById('date');

    setInterval(function () {
        let date = new Date();

        // Customize the time format
        let timeOptions = {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false // Use 24-hour format
        };
        let dateOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        };

        // Create formatters for time and date
        let timeFormatter = new Intl.DateTimeFormat('en-US', timeOptions);
        let dateFormatter = new Intl.DateTimeFormat('en-UK', dateOptions);

        // Format the date and time
        let formattedTime = timeFormatter.format(date);
        let formattedDate = dateFormatter.format(date);

        // Display the formatted date and time
        dateTimeElement.innerHTML = `${formattedTime}`;
        dateElement.innerHTML = `${formattedDate}`;
    }, 1000); // 1000 milliseconds = 1 second
}
