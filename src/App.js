import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ReactLoading from 'react-loading';
import Casts from './components/Casts';

export default function App() {
  const styles = {
    loading: {
      margin: 'auto',
      width: 'fit-content',
    },
  };
  const [casts, setCasts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [castPerPage] = useState(6);
  useEffect(() => {
    const getCasts = async () => {
      const castsData = await axios.get('https://thronesapi.com/api/v2/Characters');
      setCasts(castsData.data);
    };
    getCasts();
  }, []);
  const indexOfLastCast = currentPage * castPerPage;
  const indexOfFirstCast = indexOfLastCast - castPerPage;
  const displayCasts = casts.slice(indexOfFirstCast, indexOfLastCast);
  const getPaginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="App">
      <h1>Game of thrones casts</h1>
      {casts && casts.length > 0
        // eslint-disable-next-line max-len
        ? <Casts displayCasts={displayCasts} casts={casts} castPerPage={castPerPage} getPaginate={getPaginate} />
        : (
          <div style={styles.loading}>
            <ReactLoading type="spin" color="white" />
          </div>
        )}
    </div>
  );
}
