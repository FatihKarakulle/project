import React from 'react';
const Actor_v = ({actor}) => {

    return (
      <div>
          <div className="text text-with-label" style={{ paddingLeft: '200px' }}>
            <span className="name name1" id="oyuncu" style={{ fontSize: '18px', color: 'grey',marginLeft:'10px'}}>Oyuncular</span>
            <div className="vertical-list">
              <span className="value" id="oyuncu1" style={{ fontSize: '18px', color: 'azure',marginLeft:'10px'}}>{actor}</span>
            </div>
          </div>
      </div>
    );
  }

export default Actor_v;