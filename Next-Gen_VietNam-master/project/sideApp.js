
const postsList = document.querySelector('#sidePostSection');
const form= document.querySelector('#add-post-form')
function renderPosts(doc){
		let div=document.createElement('div');
		let title= document.createElement('a');
		let image= document.createElement('img');
		let hr= document.createElement('hr');
		div.setAttribute('data-id' , doc.id );
		title.textContent = doc.data().title;
		image.src = doc.data().image;
		title.setAttribute("id", 'sidePostHeader');
		title.setAttribute("href", doc.data().link);
		image.setAttribute("id", 'sideImg');
		div.appendChild(image);
		div.appendChild(title) ;
		div.appendChild(hr) ;
		postsList.appendChild(div); 
	
	
}

db.collection('posts').get().then((snapshot) => {
	snapshot.docs.forEach(doc =>  {
		renderPosts(doc);
	})
})
