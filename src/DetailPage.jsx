import React, { useEffect, useState } from 'react';
import './index.css';
import Title_v from './components/Title_v';
import Genre_v from './components/Genre_v';
import Time_v from './components/Time_v';
import Date_v from './components/Date_v';
import Language_v from './components/Language_v';
import Subtitle_v from './components/Subtitle_v';
import Actor_v from './components/Actor_v';
import Director_v from './components/Director_v';
import Summary_v from './components/Summary_v';
import { token } from './assets/constant';


const DetailPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const id = window.location.pathname;
  const apiUrl = 'http://localhost:1337/api/movies'+ id;

  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };


  const fetchOut=()=>{
    fetch(apiUrl, {
      method: 'GET',
      headers: headers
    })
      .then(response => {
        if (!response.ok) {
          
          throw new Error(`HTTP hata! Status: ${response.status}`);
        }
        return response.json();
      })
    
      .then(apiData => {
        console.log(apiData);
        let data=apiData.data.attributes;
	      let { Title, Text_Subtitle } = data;

        console.log('API data:', data);
        
        setData({
          Title: data.Title,
          Text_Subtitle: data.Text_Subtitle,
          Genre: data.Genre,
          Time: data.Time,
          Date: data.Date,
          Language:data.Language,
          Subtitle:data.Subtitle,
          Director: data.Director,
          Actor: data.Actor,
          Summary: data.Summary,
          RTUK: data.rtuk.split(',')
        });
        setLoading(false);
      })

      .catch(error => {
        console.error('An Error Occured:', error);
        setLoading(false);
      });
  }


  useEffect(() => {
    if(!data) {
      fetchOut()
    }

    
  }, []);
  
  return (
    <div >
      <div className="details" style={{ zIndex: 2, position: 'relative' }}>
      <Title_v title={data?.Title} text_subtitle={data?.Text_Subtitle} />
        <div className="row">
          {
            data?.RTUK.map((icon)=>{
              return(
                  <div className="rtuk-item">
                  <img src={`https://tv-static-cdn.tvplus.com.tr/bigscreen/smarttv/assets/icons/rtuk-v3/${icon}.svg`}/>
                </div>
              )
            })
          }
          
          
        </div>
        <div className="row" style={{ display: 'inline-flex' }}>
        <Genre_v genre={data?.Genre} />
        <Time_v time={data?.Time} />
        <Date_v date={data?.Date} />
        <Language_v language={data?.Language} />
        <Subtitle_v subtitle={data?.Subtitle} />
        </div>
        <div className="row">
        <Director_v director={data?.Director} />
        <Actor_v actor={data?.Actor} />
        </div>
        <div className="row hide">
        <Summary_v summary={data?.Summary} />
        </div>
        <div className="inner">
          <div className="scroller-container has-bookmark">
            <div className="row btn-row"></div>
            <div id="box"></div>
            <div>
              <div>
                <img src="https://tv-static-cdn.tvplus.com.tr/bigscreen/smarttv/assets/icons/icons-v2/play.svg" id="box1"  />
                <span id="box2">Hemen İzle</span>
              </div>
            </div>
            <div id="fragman1">
              <img src="https://tv-static-cdn.tvplus.com.tr/bigscreen/smarttv/assets/icons/icons-v2/watch-trailer.svg " id="fragman2" />
            </div>
            <div className="tooltip">
              <div>
                <div className="arrow"></div>
              </div>
            </div>
            <div id="listeme-ekle">
              <div id="liste1">
                <img src="https://tv-static-cdn.tvplus.com.tr/bigscreen/smarttv/assets/icons/icons-v2/add-to-list-white.svg" id="liste2" />
                <div className="tooltip">
                  <div>
                    <div className="arrow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <video autoPlay muted id="id1">
        <source src="images/trailer.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default DetailPage;


