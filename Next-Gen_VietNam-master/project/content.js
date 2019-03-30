
db.collection('postContent').get().then((snapshot) => {
	snapshot.docs.forEach(doc =>  {
		const array=(doc.data());
		if (window.location.hash === array.id){
			render(array);
			
		}
	})
})
const page = document.querySelector('.container');		
function render(array){

    for (var i = 0;i < array.post.length;i++){
			const type=array.post[i]['type'];
			if (type == 'title'){ 
				let head=document.createElement('h1');
				head.setAttribute('class' , 'heading' );
				head.textContent = array.post[i]['data'];
				page.appendChild(head);
			}else if (type == 'parHeader'){
				let par=document.createElement('p');
				par.textContent= array.post[i]['data'];
				page.appendChild(par);
			}else if (type == 'par'){
				let heading=document.createElement('p');
				if (typeof(array.post[i]['img'])!=='undefined'){
					let image=document.createElement('img');
					image.setAttribute('id' , 'display' );
					image.src= array.post[i]['img'];
					page.appendChild(image);
				}
				let content=document.createElement('p');
				heading.setAttribute('class' , 'title' );
				content.textContent= array.post[i]['content'];
				heading.textContent= i - 1 + '.' + array.post[i]['heading'];
				page.appendChild(heading);
				page.appendChild(content);
				}
    }
	}
