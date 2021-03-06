import React from 'react';
import PropTypes from 'prop-types';
import Pagination from './Pagination';
import CastCard from './CastCard';

function Casts({
  displayCast, castLength, castPerPage, getPaginate,
}) {
  const styles = {
    castsRoot: {
      width: '98%',
      display: 'grid',
      gridTemplateColumns: 'auto auto auto',
      gridGap: '20px',
      justifyContent: 'end',
      marginTop: '10px',
    },
  };
  return (
    <div>
      <div style={styles.castsRoot}>
        {displayCast && displayCast.map((cast) => (
          <CastCard key={cast.id} cast={cast} />
        ))}
      </div>
      <Pagination castsPerPage={castPerPage} totalCasts={castLength} getPaginate={getPaginate} />
    </div>
  );
}
Casts.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  displayCast: PropTypes.array.isRequired,
  castLength: PropTypes.number.isRequired,
  castPerPage: PropTypes.number.isRequired,
  getPaginate: PropTypes.func.isRequired,
};

export default Casts;
