import React from 'react';
const Genre_v = ({genre}) => {

    return (
      <div>
        <div className="text text-with-label">
            <span className="name"></span>
            <span className="value" id="tur" style={{ display: 'inline-flex' }}>
                {genre}
            </span>
        </div>
      </div>
    );
  }

export default Genre_v;