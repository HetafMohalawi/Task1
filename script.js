// Attach click event listeners to the control buttons
document.getElementById('move-forward').addEventListener('click', sendMoveForwardCommand);
document.getElementById('move-backward').addEventListener('click', sendMoveBackwardCommand);
document.getElementById('turn-left').addEventListener('click', sendTurnLeftCommand);
document.getElementById('turn-right').addEventListener('click', sendTurnRightCommand);

// Example functions to send commands to the robot
function sendMoveForwardCommand() {
    // Code to send "move forward" command to the robot
    console.log('Sending "move forward" command to the robot');
}

function sendMoveBackwardCommand() {
    // Code to send "move backward" command to the robot
    console.log('Sending "move backward" command to the robot');
}

function sendTurnLeftCommand() {
    // Code to send "turn left" command to the robot
    console.log('Sending "turn left" command to the robot');
}

function sendTurnRightCommand() {
    // Code to send "turn right" command to the robot
    console.log('Sending "turn right" command to the robot');
}