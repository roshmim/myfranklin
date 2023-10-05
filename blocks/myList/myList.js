/*
 * Text Block
 * 
 */



export default async function decorate(block) {
	// block.innerHTML = '';
    const mytext = document.createElement('h3');
    mytext.innerHTML = "My List Component";
    
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1) 
		div.className = 'mytext-colums-first';
      else 
		div.className = 'mytext-colums-next';
    });
    ul.append(li);
  });

  block.append(mytext);
  block.append(ul);
}