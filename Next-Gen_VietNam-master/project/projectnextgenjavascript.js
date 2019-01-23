/* form:
	{titles:"",content:"",img:"imgs/",date:""},

*/
posts=[
	{titles:"Recommended places to travel in Vietnam",content:"Find out about the most favourites places travellers go across Vietnam,from north to south.",img:"imgs/vietnam.png",link:"projectnextgen-post1.html",date:"14/3/2018"},
	{titles:"Things to be bought with in Vietnam",content:"You can't travel to any country without any items in your backpack!In vietnam,these are the top things you need to bring.",img:"imgs/hanoi.png",link:"projectnextgen-post2.html",date:"16/7/2018"},
	{titles:"21 Essential Phrases You'll Need in Vietnam",content:"Communication is the number 1 thing when travelling into diffrent country especially with Vietnam-a non english speaking country.",img:"imgs/language.jpg",link:"projectnextgen-post3.html",date:"6/1/2019"},
]
			createPosts();
			
			function createPosts(){
				if ($('#section').length > 0){
					for (var i=0;i<posts.length;i++){ //mainposts
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
				if ($('#sidePostSection').length > 0){
					var randomise1=Math.floor((Math.random() * posts.length ));
					var randomise2=Math.floor((Math.random() * posts.length ));
					while (randomise1 === randomise2){//chon2postngaunhien
						var randomise2=Math.floor((Math.random() * posts.length));
					}
					for (var i=0;i<2;i++){ //sideposts
						if (i==0){
							var btn=document.createElement("DIV");
							document.getElementById("sidePostSection").appendChild(btn); 
							btn.id = "sidePost";
							var title=document.createElement("a");title.id="sidePostHeader";title.href=posts[randomise1].link;title.appendChild(document.createTextNode(posts[randomise1].titles))  
							var image=document.createElement("img");image.id="sideImg";image.setAttribute("src", posts[randomise1].img);
							document.getElementById(btn.id).appendChild(image); 
							document.getElementById(btn.id).appendChild(title); 
							document.getElementById(btn.id).appendChild(document.createElement("hr")); 				
						}
						if (i==1){
							var btn=document.createElement("DIV");
							document.getElementById("sidePostSection").appendChild(btn); 
							btn.id = "sidePost" ;
							var title=document.createElement("a");title.id="sidePostHeader";title.href=posts[randomise2].link;title.appendChild(document.createTextNode(posts[randomise2].titles))  
							var image=document.createElement("img");image.id="sideImg";image.setAttribute("src", posts[randomise2].img);
							document.getElementById(btn.id).appendChild(image); 
							document.getElementById(btn.id).appendChild(title); 
							document.getElementById(btn.id).appendChild(document.createElement("hr")); 				
						}
					}
				}
			}
			
