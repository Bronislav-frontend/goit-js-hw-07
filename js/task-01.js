document.querySelectorAll('.item h2').forEach(element =>
    console.log(`Категория: ${element.textContent},
Количество элементов: ${element.nextElementSibling.children.length}`));


