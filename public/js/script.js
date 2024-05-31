//script.js

document.addEventListener('DOMContentLoaded', () => {
    // Attach event listeners
    document.getElementById('sendMessageButton').addEventListener('click', sendMessage);
});

async function sendMessage() {
    // Get the values from the input fields
    const apiTokenInstance = document.getElementById('apiTokenInstance').value.trim();
    const idInstance = document.getElementById('idInstance').value.trim();
    const message = document.getElementById('message').value.trim();
    const phoneNumber = document.getElementById('phone').value.trim();

    // Validate input
    if (!apiTokenInstance || !idInstance || !message || !phoneNumber) {
        alert('Please enter API Token, Instance ID, message, and phone number.');
        return;
    }

    // Create the request body
    const requestBody = {
        idInstance,
        apiTokenInstance,
        phone: phoneNumber,
        message
    };

    try {
        // Send the request to your API endpoint
        const response = await fetch('http://localhost:3030/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        // Check if response is ok
        if (!response.ok) {
            throw new Error(`Failed to send message: ${response.statusText}`);
        }

        // Parse the response and display it
        const data = await response.json();
        displayResponse(JSON.stringify(data, null, 2));
    } catch (error) {
        // Handle errors
        console.error('Error:', error);
        displayResponse('There was a problem sending the message.');
    }
}

function displayResponse(message) {
    // Display the response message
    document.getElementById('response').textContent = message;
}







document.addEventListener('DOMContentLoaded', () => {
    // Attach event listeners
    document.getElementById('sendFileByUrlButton').addEventListener('click', sendFileByUrl);
});

async function sendFileByUrl() {
    // Get the values from the input fields
    const apiTokenInstance = document.getElementById('apiTokenInstance').value.trim();
    const idInstance = document.getElementById('idInstance').value.trim();
    const phoneNumber = document.getElementById('phone').value.trim();
    const urlFile = document.getElementById('urlFile').value.trim();
    const fileName = document.getElementById('fileName').value.trim();

    // Validate input
    if (!apiTokenInstance || !idInstance || !phoneNumber || !urlFile || !fileName) {
        alert('Please enter API Token, Instance ID, phone number, URL file, and file name.');
        return;
    }

    // Create the request body
    const requestBody = {
        idInstance,
        apiTokenInstance,
        phone: phoneNumber,
        urlFile,
        fileName
    };

    try {
        // Send the request to your API endpoint
        const response = await fetch('http://localhost:3030/sendFileByUrl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        // Check if response is ok
        if (!response.ok) {
            throw new Error(`Network request failed: ${response.statusText}`);
        }

        // Parse the response and display it
        const data = await response.json();
        displayResponse(JSON.stringify(data, null, 2));

        // Check if the file was sent successfully
        if (data.success) {
            alert('File sent successfully!');
        } else {
            alert(data.message);
        }
    } catch (error) {
        // Handle errors
        console.error('Error:', error);
        alert('There was a problem sending the file.');
    }
}

function displayResponse(message) {
    // Display the response message
    document.getElementById('response').textContent = message;
}





    document.addEventListener('DOMContentLoaded', () => {
    // Attach event listeners
    document.getElementById('getSettingsButton').addEventListener('click', getSettings);
});

async function getSettings() {
    // Get the values from the input fields
    const idInstance = document.getElementById('idInstance').value.trim();
    const apiTokenInstance = document.getElementById('apiTokenInstance').value.trim();

    // Validate input
    if (!idInstance || !apiTokenInstance) {
        alert('Please enter both Instance ID and API Token.');
        return;
    }

    const requestBody = {
        idInstance,
        apiTokenInstance
    };

    try {
        const response = await fetch('http://localhost:3030/getSettings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch settings: ${response.statusText}`);
        }

        const data = await response.json();
        displayResponse(JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error fetching settings:', error);
        displayResponse('Failed to fetch settings');
    }
}

function displayResponse(message) {
    document.getElementById('response').textContent = message;
}


        

document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('getStateInstanceButton').addEventListener('click', getStateInstance);
});

async function getStateInstance() {
    const idInstance = document.getElementById('idInstance').value.trim();
    const apiTokenInstance = document.getElementById('apiTokenInstance').value.trim();

    
    if (!idInstance || !apiTokenInstance) {
        alert('Please enter both Instance ID and API Token.');
        return;
    }

    const requestBody = {
        idInstance,
        apiTokenInstance
    };

    try {
        const response = await fetch('http://localhost:3030/getStateInstance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch state instance data: ${response.statusText}`);
        }

        const data = await response.json();
        displayResponse(JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error fetching state instance data:', error);
        displayResponse('Failed to fetch state instance data');
    }
}

function displayResponse(message) {
    document.getElementById('response').textContent = message;
}



