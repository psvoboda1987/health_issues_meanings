
  let options = await fetch('data.json')
      .then(res => res.json())
      .then(data => data.sort(sortOn('name')));
  const selectBox = document.getElementById('cause');
  let target = document.getElementById('advice');

  for (const option of options) {
    const newOption = document.createElement('option');
    newOption.value = option.name;
    newOption.innerHTML = option.name;
    newOption.classList.add('py-5');
    newOption.setAttribute('data-problem', option.problem);
    newOption.setAttribute('data-solution', option.solution);

    selectBox.appendChild(newOption);
  }

  selectBox.addEventListener('change', () => {
    showData(selectBox, target);
  });
  document.getElementById('diagnostic').onsubmit = (e) => {
    e.preventDefault();
    showData(selectBox, target);
  };


function showData(selectBox, target) {
  let cause = selectBox.selectedOptions[0];
  if (!cause.attributes['data-problem']) {
    return;
  }

  target.innerHTML = `
    <h3 class="bold tomato">Problém:</h3>
    <p>${cause.attributes['data-problem'].textContent}</p>
    <h3 class="bold green">Řešení:</h3>
    <p>${cause.attributes['data-solution'].textContent}</p>
  `;

  target.classList.remove('hide');
}

function sortOn(property) {
  return function (a, b) {
    if (a[property] < b[property]) {
      return -1;
    }
    if (a[property] > b[property]) {
      return 1;
    }
    return 0;
  };
}
