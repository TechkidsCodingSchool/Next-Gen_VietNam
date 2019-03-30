
const postsList = document.querySelector('#section');
const form= document.querySelector('#add-post-form')
//create element and render cafe
function renderPosts(doc){
	let div=document.createElement('div');
	let title= document.createElement('a');
	let content= document.createElement('span');
	let image= document.createElement('img');
	let hr= document.createElement('hr');
	div.setAttribute('data-id' , doc.id );
	console.log( doc.id )
	title.textContent = doc.data().title;
	content.textContent = doc.data().content;
	image.src = doc.data().image;
	//addIDs
	title.setAttribute("id", 'postHeader');
	title.setAttribute("href", doc.data().link);
	content.setAttribute("id",'postContent' );
	image.setAttribute("class", 'pImg');
	
	//appendChild
	div.appendChild(content);
	div.appendChild(image);
	div.appendChild(title) ;
	div.appendChild(hr) ;
	postsList.appendChild(div); 
	//deleting data
	/*cross.addEventListener('click',(e) => {
		e.stopPropagation();
		let id = e.target.parentElement.getAttribute('data-id')
		db.collection('posts').doc(id).delete();
	}) */
}
//getting data (new)
db.collection('posts').onSnapshot(snapshot => {
	let changes = snapshot.docChanges();
	changes.forEach(change => { 
		console.log(change.doc.data());
			if (change.type == 'added'){
				renderPosts(change.doc)
			}else if (change.type == 'removed'){
				let li =postsList.querySelector('[data-id=' + change.doc.id + ']');
				postsList.removeChild(li); 
			}
	})
})

//getting data (old)
	/*db.collection('posts').get().then((snapshot) => {
		snapshot.docs.forEach(doc =>  {
			renderPosts(doc);
		})
	})*/
	
	
