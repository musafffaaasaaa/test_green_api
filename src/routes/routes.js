// routes.js
const express = require('express');
const router = express.Router();
const axios = require('axios');
const path = require('path');
const { BASE_URL } = require('../../constants.js');



router.post('/sendMessage', async (req, res) => {
    var {apiTokenInstance, idInstance, phone, message } = req.body;
    
    const url = `${BASE_URL}${idInstance}/sendMessage/${apiTokenInstance}`;
    
    const payload = {
        chatId: phone + "@c.us",
        message: message,
    };
    
    try {
        const response = await axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // Send the idMessage back to the client
        res.json({ idMessage: response.data.idMessage });
    } catch (ex) {
        console.error(ex);
        res.status(500).json({ error: 'Failed to send message' }); // Send an error response if something goes wrong
    }
});

router.post('/sendFileByUrl', async (req, res) => {
    const {apiTokenInstance, idInstance, phone, urlFile, fileName } = req.body;
    
    const url = `${BASE_URL}${idInstance}/sendFileByUrl/${apiTokenInstance}`;
    const payload = {
        chatId: phone + "@c.us",
        urlFile: urlFile, 
        fileName: fileName 
    };

    try {
        const response = await axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // If the file was sent successfully, send a success response
        res.status(200).json({ success: true, message: "File sent successfully", idMessage: response.data.idMessage });
    } catch (ex) {
        console.error(ex);
        // If there was an error, send an error response
        res.status(500).json({ success: false, message: "Failed to send file" });
    }
});


// Route: /getSettings
router.post('/getSettings', async (req, res) => {
    const { idInstance, apiTokenInstance } = req.body;

    if (!idInstance || !apiTokenInstance) {
        return res.status(400).json({ success: false, message: "Instance ID and API Token are required." });
    }

    try {
        const url = `${BASE_URL}${idInstance}/getSettings/${apiTokenInstance}`;
        const response = await axios.get(url);

        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to fetch settings" });
    }
});

module.exports = router;


// Route: /getStateInstance
router.post('/getStateInstance', async (req, res) => {
    const { idInstance, apiTokenInstance } = req.body;

    if (!idInstance || !apiTokenInstance) {
        return res.status(400).json({ success: false, message: "Instance ID and API Token are required." });
    }

    try {
        const url = `${BASE_URL}${idInstance}/getStateInstance/${apiTokenInstance}`;
        const response = await axios.get(url);
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to fetch state instance data" });
    }
});

module.exports = router;
