function extractText() {
    let listElement = document.querySelectorAll('#items li');
    let result = '';

    for (const item of listElement) {
        result += item.textContent.trim() + '\n';
    }

    let resultElement = document.getElementById('result');
    resultElement.textContent = result.trim();
}