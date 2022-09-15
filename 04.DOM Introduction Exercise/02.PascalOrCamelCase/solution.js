function solve() {
  let inputText = document.getElementById('text').value;

  let currentCase = document.getElementById('naming-convention').value;

  let result = applyNamingConvention(inputText, currentCase);

  let spamElement = document.getElementById('result');
  spamElement.textContent = result;

  function applyNamingConvention(input, currentCase) {
    let convertion = {
      'Pascal Case': () => input
        .toLowerCase()
        .split(' ')
        .map(x => x[0].toUpperCase() + x.slice(1))
        .join(''),
      'Camel Case': () => input
        .toLowerCase()
        .split(' ')
        .map((x, i) => x = i !== 0 ? x[0].toUpperCase() + x.slice(1) : x)
        .join(''),
      default: () => 'Error!'
    };

    return (convertion[currentCase] || convertion.default)();
  }
}