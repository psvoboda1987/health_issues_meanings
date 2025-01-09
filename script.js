window.onload = function () {
  const selectBox = document.getElementById('cause')
  let options = getOptions().sort(sortOn('name'))
  let target = document.getElementById('advice')

  for (const option of options) {
    const newOption = document.createElement('option')
    newOption.value = option.name
    newOption.innerHTML = option.name
    newOption.classList.add('py-5')
    newOption.setAttribute('data-problem', option.problem)
    newOption.setAttribute('data-solution', option.solution)

    selectBox.appendChild(newOption)
  }

  selectBox.addEventListener('change', () => {
    showData(selectBox, target)
  })
  document.getElementById('diagnostic').onsubmit = (e) => {
    e.preventDefault()
    showData(selectBox, target)
  }
}

function showData (selectBox, target) {
  let cause = selectBox.selectedOptions[0]
  if (!cause.attributes['data-problem']) {
    return
  }

  target.innerHTML = `
    <h3 class="bold tomato">Problém:</h3>
    <p>${cause.attributes['data-problem'].textContent}</p>
    <h3 class="bold green">Řešení:</h3>
    <p>${cause.attributes['data-solution'].textContent}</p>
  `

  target.classList.remove('hide')
}

function sortOn (property) {
  return function (a, b) {
    if (a[property] < b[property]) {
      return -1
    }
    if (a[property] > b[property]) {
      return 1
    }
    return 0
  }
}

function getOptions () {
  return [{
    name: 'hlava',
    problem: 'reprezentace, identifikace, ukazujeme se jí okolnímu světu',
    solution: 'vědět, kdo jsem, poznat se a beze strachu se prezentovat okolnímu světu'
  },
    {
      name: 'bolest hlavy',
      problem: 'člověk si sám ubližuje, chce toho po sobě moc, má na sebe příliš velké nároky nebo si nechce/nedovede odpustit, neumí se posunout a jít dál, aniž by si přestal vyčítat své chyby, snaží se být dokonalý a je neustále ve  stresu',
      solution: 'uvolnit se, přijmout sám sebe a své současné nedokonalosti a limity, přestat chtít vše za každou cenu a naučit se odpočívat'
    },
    {
      name: 'vlasy',
      problem: 'síla, pokud je tělo stažené, nejisté, nervní, vlasy nemohou "dýchat", vypadávají a nedorůstají',
      solution: 'uvolnit se a být v klidu, posilovat sebejistotu a nestresovat se'
    },
    {
      name: 'uši',
      problem: 'člověk něco nechce slyšet nebo ho štve to, co slyší',
      solution: 'přijmout to, co je nevyhnutelné a nesnažit se tomu vyhýbat'
    },
    {
      name: 'oči',
      problem: 'člověk něco nechce vidět, odmítá vidět pravdu',
      solution: 'přijmout to, co se mi život snaží ukázat, přijmout realitu'
    },
    {
      name: 'dutiny',
      problem: 'spojují nos a krk, problémy se obvykle objevují, když má člověk zlost na někoho blízkého',
      solution: 'přijmout lidi takové, jací ve skutečnosti jsou i s jejich nedokonalostmi, odpustit jim a ulevit od držené zloby sobě'
    },
    {
      name: 'krk',
      problem: 'přehnané lpění na vlastním pohledu, názoru',
      solution: 'nechat mluvit druhé a věnovat pozornost jejich názorům'
    },
    {
      name: 'hrdlo',
      problem: 'neschopnost vyjádřit se, stát si za svým',
      solution: 'v klidu dávat druhým najevo své myšlenky, názory a potřeby'
    },
    {
      name: 'nachlazení',
      problem: 'duševní neklid, zlost na někoho nebo na sebe',
      solution: 'zklidnit, zvolnit, dopřát si odpočinek'
    },
    {
      name: 'zánět mandlí',
      problem: 'potlačená kreativita nebo problémy se štítnou žlázou',
      solution: 'najít si prostor a způsob, jak se svobodně vyjádřit'
    },
    {
      name: 'zánět hrtanu',
      problem: 'extrémní zloba na někoho',
      solution: 'odpustit, vysvobodit všechny zůčastněné ze začarovaného kruhu'
    },
    {
      name: 'paže',
      problem: 'představují možnosti a naše schopnosti, staré emoce, přizpůsobivost změnám',
      solution: 'přijmout současnou situaci a nechat emoce z minulosti odejít'
    },
    {
      name: 'ruce',
      problem: 'strach, že o něco přijdu,<br/>pěst = vztek, zloba, neochota odpustit',
      solution: 'věřit, že život mi přinese vše potřebné a nechat vše proudit vlastním tempem, nechat se životem vést a následovat vhodné impulzy'
    },
    {
      name: 'prsty',
      problem: 'ukazují, kde je co potřeba uvolnit a co pustit',
      solution: 'palec = mentální sféra a starosti,<br/>ukazovák = ego a strach,<br/>prostředník = sex a zlost,<br/>prsteník = vztahy a zármutek,<br/>malík = rodina, předstírání'
    },
    {
      name: 'záda',
      problem: 'pocit nedostatečné podpory',
      solution: 'horní = emocionální podpora (manžel, šéf, partner),<br/>střední = pocit viny, vše co je za mnou v minulosti,<br/>spodní = finance, starosti o živobytí'
    },
    {
      name: 'plíce',
      problem: 'přijímání života, umění žít naplno',
      solution: 'kouření je popírání vlastního života, pocit, že si čistý vzduch/život nezasloužím a člověk dobrovolně přijímá jed'
    },
    {
      name: 'prsa',
      problem: 'mateřský princip, matka neumí dítě pustit a nechat dospět',
      solution: 'milovat, ale nechat dítě jít si postupně svou vlastní cestou a utvářet si vlastní život'
    },
    {
      name: 'srdce',
      problem: 'láska a radost z života, odmítání radosti a lásky (srdce pumpuje slabě) -> angína, anémie (chudokrevnost), infarkt',
      solution: 'najít si důvod, proč tu chci být a co se mi tu líbí, radost se i z každodenních maličkostí'
    }]
}
