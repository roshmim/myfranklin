/*
 * My list component
 * 
 */
import { createOptimizedPicture } from '../../scripts/aem.js';


export default async function decorate(block) {
	// block.innerHTML = '';
    const mytext = document.createElement('h3');
    mytext.innerHTML = "My Teaser Component";
    
  const finalhtml = document.createElement('div');
  [...block.children].forEach((row) => {
    const li = document.createElement('div');
    while (row.firstElementChild) li.append(row.firstElementChild);
    
  	if (li.children[0].innerHTML == "Title") {
	const heading = document.createElement('h3');
	heading.innerHTML = li.children[1].innerHTML;
	heading.className = "teaser"+ li.children[0].innerHTML
	li.innerHTML = "";
	li.appendChild(heading)
    finalhtml.append(li);
	}

  	if (li.children[0].innerHTML == "Text") {
	const paragraph = document.createElement('p');
	paragraph.innerHTML = li.children[1].innerHTML;
	paragraph.className = "teaser"+ li.children[0].innerHTML
	li.innerHTML = "";
	li.appendChild(paragraph)
    finalhtml.append(li);
	}
	
	if (li.children[0].innerHTML == "Asset") {
	const image = document.createElement('div');
	image.appendChild(li.querySelector("img"));
	image.className = "teaser"+ li.children[0].innerHTML
	li.innerHTML = "";
	li.appendChild(image)
    finalhtml.append(li);
	}
	
	if (li.children[0].innerHTML == "Link") {
	var clickMeButton = document.createElement('button');
	clickMeButton.id = 'myButton';
	clickMeButton.innerHTML = li.children[1].innerHTML;
	li.innerHTML = "";
	li.appendChild(clickMeButton)
    finalhtml.append(li);
	}
	
  });
 // finalhtml.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.append(mytext);
  block.append(finalhtml);
}