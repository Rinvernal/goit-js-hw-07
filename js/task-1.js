  const listItem = document.querySelectorAll('#categories .item');
  console.log(`Number of categories: ${listItem.length}`);

  listItem.forEach(element => {
    const elTitle = element.querySelector('h2').textContent;
    const elNum = element.querySelectorAll('ul li').length;
    console.log(`Category: ${elTitle}`);
    console.log(`Elements: ${elNum}`);
  });
