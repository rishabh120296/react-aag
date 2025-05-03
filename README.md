basic javascript code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Training</title>
</head>
<body>
    <div id="root"> 
    </div>
    <script>
        const element = document.createElement('h1')
        element.innerHTML = 'Hello World from javascript'
        const rootElement = document.getElementById('root')
        rootElement.appendChild(element)

    </script>
</body>
</html>