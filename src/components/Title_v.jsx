import React from 'react';

const Title_v = ({ title, text_subtitle }) => {

  return (
    <div>
      <div className="title-content">
        <div className="text-title" id="title" style={{ fontSize: '68px', fontWeight:'600' ,color: 'azure' }}>
          <span>{title}</span>
        </div>
      </div>
      <div className="text-subtitle" id="subtitle" style={{ fontSize: '44px', color: '#FFFFFF99' }}>
        {text_subtitle}
      </div>
    </div>
  );
}

export default Title_v;
