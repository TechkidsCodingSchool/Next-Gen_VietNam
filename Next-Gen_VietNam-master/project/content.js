db.collection('postContent').onSnapshot(snapshot => {
	let changes = snapshot.docChanges();
	changes.forEach(change => { 
			if (change.type == 'added'){
				const array=(change.doc.data());
				render(array);
			}else if (change.type == 'removed'){
				let li =postsList.querySelector('[data-id=' + change.doc.id + ']');
				postContent.removeChild(div);  
			}
	})
})
const page = document.querySelector('.container');
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
