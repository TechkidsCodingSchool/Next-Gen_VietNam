		
	posts=[
				{titles:"Recommended places to travel",content:"Find out about the most favourites places travellers go across Vietnam,from north to south.",img:"imgs/vietnam.png",link:"projectnextgen-post1.html",date:"14/3/2018"},
				{titles:"Things to be bought with in Vietnam",content:"You can't travel to any country without any items in your backpack!In vietnam,these are the top things you need to bring.",img:"imgs/hanoi.png",link:"projectnextgen-post2.html",date:"16/7/2018"},
			]
			createPosts();
			function createPosts(){
				for (var i=0;i<2;i++){
					var btn=document.createElement("DIV");
					document.getElementById("section").appendChild(btn); 
					btn.id = "post" + i; 
					var title=document.createElement("a");title.id="postHeader";title.href=posts[i].link;title.appendChild(document.createTextNode(posts[i].titles))  
					var content=document.createElement("span");content.id="postContent";content.appendChild(document.createTextNode(posts[i].content))  
					var image=document.createElement("img");image.id="img";image.setAttribute("src", posts[i].img);
					var date=document.createElement("span");date.id="eI";date.appendChild(document.createTextNode("posted by Minh at " + posts[i].date ))  
					document.getElementById(btn.id).appendChild(image); 
					document.getElementById(btn.id).appendChild(title); 
					document.getElementById(btn.id).appendChild(content); 
					document.getElementById(btn.id).appendChild(date); 
					document.getElementById(btn.id).appendChild(document.createElement("hr")); 
					
				}
				
			}