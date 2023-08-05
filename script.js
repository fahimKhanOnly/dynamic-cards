// javaScript Bangla tutorial 91 : mini project 2 | how to create dynamic cards

// fetching data
const fetchData = async (config) => {
    try{
        const res = await axios(config);
        return res.data;
    }catch(err){
        throw Error("Data is not fetched");
    }
};

const postsElement = document.querySelector(".posts");

const loadAllData = async () => {

    const posts = await fetchData('https://jsonplaceholder.typicode.com/posts');
    for(let count = 0; count <= posts.length; count++){
    posts.map((post) => {
        count++;
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        
        postElement.innerHTML = `
        <h3>Post No: ${count}</h3>
        <h4><span>Title : </span>${post.title}</h4>
        <p><span>Body : </span>${post.body}</p>
        `;
        postsElement.appendChild(postElement);
    });
}
};
loadAllData();