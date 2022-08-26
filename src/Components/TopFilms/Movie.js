// import Reac, { useState, useEffect} from 'react'
// import axios from '../Slides/axios'
// import './Movies.scss'

// function Movie({ title, fetchUlr, isLargeRow = false }) {
//     const [movies, setMovies] = useState([]);
//     useEffect(() => {
//         async function fetchData() {
//             const request = await axios.get(fetchUlr);
//             setMovies(request.data.results);
//             return request
//         }
//         fetchData();

//     }, [fetchUlr]);
//        console.log(movies);

//   return (
//       <div className='movie'>
//           <h2>{ title}</h2>
//     </div>
//   )
// }

// export default Movie