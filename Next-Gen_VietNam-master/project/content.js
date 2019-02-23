db.collection('postContent').get().then((snapshot) => {
        snapshot.docs.forEach(doc =>  {
        const array=doc.data();
        render(array)  ; 
    })
})
const page = document.querySelector('h3');
function render(array){
    for (var i = 0;i < array.post.length;i++){
		const type=array.post[i]['type'];
		if (type == 'title'){ 
			let title=document.createElement('h1');
			title.setAttribute('class' , 'heading' );
			title.textContent= array.post[i]['data'];
			page.appendChild(title);
		}else if (type == 'parHeader'){
			let par=document.createElement('p');
			par.textContent= array.post[i]['data'];
			page.appendChild(par);
		}else if (type == 'par'){
			let heading=document.createElement('p');
			let image=document.createElement('img');
			let content=document.createElement('p');
			heading.setAttribute('class' , 'title' );
			image.setAttribute('id' , 'display' );
			content.textContent= array.post[i]['content'];
			image.src= array.post[i]['img'];
			heading.textContent= i - 1 + '.' + array.post[i]['heading'];
			page.appendChild(heading);
			page.appendChild(image);
			page.appendChild(content);
		}
    }
}
