<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample JavaScript</title>
    <script>
        function displayMessage() {
            document.getElementById("message").innerText = "Hello, JavaScript is working!";
        }
    </script>
</head>
<body>

    <h1>Sample JavaScript Event</h1>
    <button onclick="displayMessage()">Click Me</button>
    <p id="message"></p>

</body>
</html>
