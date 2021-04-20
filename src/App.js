import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ReactLoading from 'react-loading';
import Cast from './components/Cast';

export default function App() {
  const styles = {
    loading: {
      margin: 'auto',
      width: 'fit-content',
    },
  };
  const [cast, setCast] = useState([]);
  const [castLength, setCastLength] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [castPerPage] = useState(6);
  useEffect(() => {
    const getCast = async () => {
      const castData = await axios.get('https://thronesapi.com/api/v2/Characters');
      setCast(castData.data);
      setCastLength(cast.length);
    };
    getCast();
  }, [cast]);
  const indexOfLastCast = currentPage * castPerPage;
  const indexOfFirstCast = indexOfLastCast - castPerPage;
  const displayCast = cast.slice(indexOfFirstCast, indexOfLastCast);
  const getPaginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="App">
      <h1>Game of thrones cast</h1>
      {cast && cast.length > 0
        // eslint-disable-next-line max-len
        ? (
          <Cast
            displayCast={displayCast}
            castLength={castLength}
            castPerPage={castPerPage}
            getPaginate={getPaginate}
          />
        )
        : (
          <div style={styles.loading}>
            <ReactLoading type="spin" color="white" />
          </div>
        )}
    </div>
  );
}
