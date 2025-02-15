const express = require('express');
const multer = require('multer');
const { spawn } = require('child_process');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('video'), (req, res) => {
    const videoPath = req.file.path;
    const modelPath = 'happy\\supermen\\superman\\don\\vite-project\\src\\Licence-Plate-Detection-and-Recognition-using-YOLO-V8-EasyOCR\\best.pt';

    // Run the Python script with the video file path and model path
    const pythonProcess = spawn('python', [
        'happy\\supermen\\superman\\don\\vite-project\\src\\Licence-Plate-Detection-and-Recognition-using-YOLO-V8-EasyOCR\\predictWithOCR.py',
        `model=${modelPath}`,
        `source=${videoPath}`
    ]);

    pythonProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
        res.json({ result: data.toString() });
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
