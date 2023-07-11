const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json())
app.use(cors());

var selected;

app.post('/selected', async (req, res) => {
    console.log('POST request received');
    const data = req.body;
    if (data.functionName == 'selSend') {
        selected = data.sel;
        res.send('received')
    } else if (data.functionName == 'requestSel') {
        res.send(selected);
    } else {
        console.log("ERROR in request");
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});



