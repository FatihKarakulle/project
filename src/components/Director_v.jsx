import React from 'react';
const Director_v = ({director}) => {

    return (
      <div>
          <div className="text text-with-label" style={{ paddingLeft: '55px', marginTop: '9px' }}>
            <span className="name name1" style={{ fontSize: '20px', color: 'grey' }}>Yönetmen</span>
            <div className="vertical-list">
              <span focusable="true" className="value" style={{ fontSize: '18px', color: 'azure'}}>{director}</span>
            </div>
          </div>
      </div>
    );
  }

export default Director_v;