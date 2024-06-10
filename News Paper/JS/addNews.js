let newsCollection = JSON.parse(localStorage.getItem("newsData")) || [];

const newsData = (event) => {
  event.preventDefault();
  const newsTitle = document.querySelector("#newsTitle").value;
  const newsContent = document.querySelector("#newsContent").value;
  const imageUrl = document.querySelector("#imageUrl").value;
  const Country = document.querySelector("#Country").value;

  const news = {
    newsTitle,
    newsContent,
    imageUrl,
    Country,
  };
  console.log(newsContent.length);
  if(newsContent.length<150||newsContent.length>200){
    alert("News Content must be between 200 and 150 characters")
    return 1
  }
else{
  
  newsCollection.push(news);
  console.log(news);
  console.log(newsCollection);
  localStorage.setItem("newsData", JSON.stringify(newsCollection));
  window.location.href = "../Html/index.html";
}
};

document.querySelector("form").addEventListener("submit", newsData);
