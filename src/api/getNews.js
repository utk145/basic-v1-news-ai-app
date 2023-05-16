// import axios from "axios";

// export default function getNews() {
//     const apiKey = import.meta.env.VITE_REACT_APP_NEWS_API;

//     const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

//     axios.get(newsUrl)
//         .then((response) => {
//             console.log(response.data.articles);
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }



import axios from "axios";

// export function getNews() {
//     const apiKey = import.meta.env.VITE_REACT_APP_NEWS_API;

//     const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

//     return axios.get(newsUrl)

// }



export function getNews(category) {
    const apiKey = import.meta.env.VITE_REACT_APP_NEWS_API;

    // const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    const newsUrl = `https://newsapi.org/v2/everything?q=${category}&apiKey=${apiKey}`;

    return axios.get(newsUrl)

}