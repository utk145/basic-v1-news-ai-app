// ****************** Below Code is essential to understand the errors that i Made *****************
// import React from 'react'
// import { useEffect, useState } from 'react'
// import { getNews } from '../api/getNews'
// import moment from 'moment/moment'
// import alanBtn from '@alan-ai/alan-sdk-web';

// const NewsData = () => {

//     const [newsData, setNewsData] = useState([]);
//     const [selectedOption, setSelectedOption] = useState("");
//     const fetchAllNews = async () => {
//         // setNewsData(await getNews());
//         let data = await getNews(selectedOption || "general");
//         setNewsData(data?.data?.articles);
//     }
//     useEffect(() => {

//         // fetchAllNews();
//         fetchAllNews();

//     }, [selectedOption])

//     // console.log(newsData?.data?.articles); // Just to check if data is being fetched. This is done before  setNewsData(data?.data?.articles);
//     useEffect(() => {
//         console.log(newsData); // Log the newsData state variable
//     }, [newsData]);


//     const selectCategory = (event) => {
//         // console.log(event.target.value);
//         setSelectedOption(event.target.value);
//     }
//     const alanapiKey = import.meta.env.VITE_REACT_APP_ALAN_API;
//     useEffect(() => {
//         alanBtn({
//             key: `${alanapiKey}/stage`,
//             onCommand: (commandData) => {
//             //    console.log(commandData.data);
//                selectedOption(commandData.data);
//             }
//         });
//     }, []);

//     return (
//         <div className='main'>
//             <h1>AI News App</h1>
//             <p style={{
//                 fontWeight: 600,
//                 fontSize: 19,
//                 opacity: 1,
//                 letterSpacing: .5,
//             }}>Click on the mic to get started</p>
//             <div className='category'>
//                 <label htmlFor="category">Choose a category : </label>
//                 <select name="category" id="category" onChange={selectCategory}>
//                     <option value="general">General</option>
//                     <option value="business">Business</option>
//                     <option value="entertainment">Entertainment</option>
//                     <option value="health">Health</option>
//                     <option value="science">Science</option>
//                     <option value="sports">Sports</option>
//                     <option value="technology">Technology</option>
//                 </select>
//             </div>
//             <div className="display">
//                 {newsData.map((item) => {
//                     return (
//                         <div className="display-news" key={item.title}>
//                             <img src={item?.urlToImage ? item.urlToImage : "https://ma-hub.imgix.net/wp-images/2019/05/28232454/news-intro-template.jpg"} alt="news-image" className='news-img' />
//                             <p className='news-title'>
//                                 {item.title}
//                             </p>
//                             <p className='news-content'>{item?.content}</p>
//                             <div className="warap">
//                                 <p className='news-author'>Author : {item?.author ? item?.author : <i>Author Unavailable</i>}</p>
//                                 <p className='news-date'>Date : {moment(item?.publishedAt).format("LLLL")}</p>
//                             </div>
//                             <a href={item.url} target="_blank" rel="noopener noreferrer">Read More.</a>
//                         </div>
//                     )
//                 })}

//             </div>
//         </div>
//     )
// }

// export default NewsData





// ***************** Corrected Code : version2*****************
// import React from 'react';
// import { useEffect, useState } from 'react';
// import { getNews } from '../api/getNews';
// import moment from 'moment/moment';
// import alanBtn from '@alan-ai/alan-sdk-web';

// const NewsData = () => {
//   const [newsData, setNewsData] = useState([]);
//   const [selectedOption, setSelectedOption] = useState('');

//   const fetchAllNews = async () => {
//     let data = await getNews(selectedOption || 'general');
//     setNewsData(data?.data?.articles);
//   };

//   useEffect(() => {
//     fetchAllNews();
//   }, [selectedOption]);

//   useEffect(() => {
//     console.log(newsData);
//   }, [newsData]);

//   const selectCategory = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const alanapiKey = import.meta.env.VITE_REACT_APP_ALAN_API;
//   useEffect(() => {
//     alanBtn({
//       key: `${alanapiKey}/stage`,
//       onCommand: (commandData) => {
//         setSelectedOption(commandData.data);
//       },
//     });
//   }, []);

//   return (
//     <div className='main'>
//       <h1>AI News App</h1>
//       <p
//         style={{
//           fontWeight: 600,
//           fontSize: 19,
//           opacity: 1,
//           letterSpacing: 0.5,
//         }}
//       >
//         Click on the mic to get started
//       </p>
//       <div className='category'>
//         <label htmlFor='category'>Choose a category : </label>
//         <select name='category' id='category' onChange={selectCategory}>
//           <option value='general'>General</option>
//           <option value='business'>Business</option>
//           <option value='entertainment'>Entertainment</option>
//           <option value='health'>Health</option>
//           <option value='science'>Science</option>
//           <option value='sports'>Sports</option>
//           <option value='technology'>Technology</option>
//         </select>
//       </div>
//       <div className='display'>
//         {newsData.map((item) => (
//           <div className='display-news' key={item.title}>
//             <img
//               src={
//                 item?.urlToImage ||
//                 'https://ma-hub.imgix.net/wp-images/2019/05/28232454/news-intro-template.jpg'
//               }
//               alt='news-image'
//               className='news-img'
//             />
//             <p className='news-title'>{item.title}</p>
//             <p className='news-content'>{item?.content}</p>
//             <div className='warap'>
//               <p className='news-author'>
//                 Author :{' '}
//                 {item?.author ? item?.author : <i>Author Unavailable</i>}
//               </p>
//               <p className='news-date'>
//                 Date : {moment(item?.publishedAt).format('LLLL')}
//               </p>
//             </div>
//             <a href={item.url} target='_blank' rel='noopener noreferrer'>
//               Read More.
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewsData;






// ***************** Corrected Code : version3*****************

// import React, { useEffect, useState } from 'react';
// import moment from 'moment/moment';
// import alanBtn from '@alan-ai/alan-sdk-web';
// import { getNews } from '../api/getNews';

// const NewsData = () => {
//   const [newsData, setNewsData] = useState([]);
//   const [selectedOption, setSelectedOption] = useState('');

//   const fetchNewsData = async (category) => {
//     const data = await getNews(category);
//     setNewsData(data?.data?.articles);
//   };

//   useEffect(() => {
//     fetchNewsData(selectedOption || 'general');
//   }, [selectedOption]);

//   useEffect(() => {
//     console.log(newsData);
//   }, [newsData]);

//   const selectCategory = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const alanapiKey = import.meta.env.VITE_REACT_APP_ALAN_API;

//   useEffect(() => {
//     alanBtn({
//       key: `${alanapiKey}/stage`,
//       onCommand: (commandData) => {
//         if (commandData.command === 'VoiceNews') {
//           const category = commandData.data;
//           setSelectedOption(category);
//         }
//       },
//     });
//   }, []);

//   return (
//     <div className="main">
//       <h1>AI News App</h1>
//       <p
//         style={{
//           fontWeight: 600,
//           fontSize: 19,
//           opacity: 1,
//           letterSpacing: 0.5,
//         }}
//       >
//         Click on the mic and say <b>Open</b> to get started
//       </p>
//       <div className="category">
//         <label htmlFor="category">Choose a category :</label>
//         <select name="category" id="category" onChange={selectCategory} value={selectedOption}>
//           <option value="general">General</option>
//           <option value="business">Business</option>
//           <option value="entertainment">Entertainment</option>
//           <option value="health">Health</option>
//           <option value="science">Science</option>
//           <option value="sports">Sports</option>
//           <option value="technology">Technology</option>
//         </select>
//       </div>
//       <div className="display">
//         {newsData.map((item) => (
//           <div className="display-news" key={item.title}>
//             <img
//               src={
//                 item?.urlToImage ||
//                 'https://ma-hub.imgix.net/wp-images/2019/05/28232454/news-intro-template.jpg'
//               }
//               alt="news-image"
//               className="news-img"
//             />
//             <p className="news-title">{item.title}</p>
//             <p className="news-content">{item?.content}</p>
//             <div className="warap">
//               <p className="news-author">
//                 Author : {item?.author || <i>Author Unavailable</i>}
//               </p>
//               <p className="news-date">
//                 Date : {moment(item?.publishedAt).format('LLLL')}
//               </p>
//             </div>
//             <a href={item.url} target="_blank" rel="noopener noreferrer">
//               Read More.
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewsData;




// Version 4 to update the Selected Category

import React, { useEffect, useState } from 'react';
import moment from 'moment/moment';
import alanBtn from '@alan-ai/alan-sdk-web';
import { getNews } from '../api/getNews';

const NewsData = () => {
  const [newsData, setNewsData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const fetchNewsData = async (category) => {
    const data = await getNews(category);
    setNewsData(data?.data?.articles);
  };

  useEffect(() => {
    fetchNewsData(selectedOption || 'general');
  }, [selectedOption]);

  useEffect(() => {
    console.log(newsData);
  }, [newsData]);

  const selectCategory = (event) => {
    setSelectedOption(event.target.value);
  };

  const alanapiKey = import.meta.env.VITE_REACT_APP_ALAN_API;

  useEffect(() => {
    alanBtn({
      key: `${alanapiKey}/stage`,
      onCommand: (commandData) => {
        if (commandData.command === 'VoiceNews') {
          const category = commandData.data;
          setSelectedOption(category); // Update here
        }
      },
    });
  }, []);

  return (
    <div className="main">
      <h1>AI News App</h1>
      <p
        style={{
          fontWeight: 600,
          fontSize: 19,
          opacity: 1,
          letterSpacing: 0.5,
        }}
      >
        Click on the mic and say <b>Open</b> to get started
      </p>
      <div className="category">
        <label htmlFor="category">Choose a category :</label>
        <select name="category" id="category" onChange={selectCategory} value={selectedOption}>
          <option value="general">General</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
      </div>
      {/* <div class="custom-dropdown">
        <select name="category" id="category" onChange={selectCategory} value={selectedOption}>
          <option value="general">General</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
        <div class="dropdown-arrow">&#9662;</div>
      </div> */}

      <div className="display">
        {newsData.map((item) => (
          <div className="display-news" key={item.title}>
            <img
              src={
                item?.urlToImage ||
                'https://ma-hub.imgix.net/wp-images/2019/05/28232454/news-intro-template.jpg'
              }
              alt="news-image"
              className="news-img"
            />
            <p className="news-title">{item.title}</p>
            <p className="news-content">{item?.content}</p>
            <div className="warap">
              <p className="news-author">
                Author : {item?.author || <i>Author Unavailable</i>}
              </p>
              <p className="news-date">
                Date : {moment(item?.publishedAt).format('LLLL')}
              </p>
            </div>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              Read More.
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsData;