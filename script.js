document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var studentName = document.getElementById('studentName').value;
    var seatNumber = parseInt(document.getElementById('seatNumber').value);

    // Check if seat number is valid
    if (seatNumber >= 1 && seatNumber <= 100) {
        // Here you can add logic to store the booking, like sending it to a server or storing it in localStorage
        // For now, let's just show a confirmation message
        document.getElementById('bookingStatus').innerHTML = `Seat ${seatNumber} booked for ${studentName}.`;
    } else {
        document.getElementById('bookingStatus').innerHTML = 'Please enter a valid seat number (1-100).';
    }
});
