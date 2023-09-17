import React from "react";
export const DetailPage = () => {
  return (
    <section className="outter option1">
      <section className="video-container">
        <video src="video/video.mp4" autoPlay loop playsInline muted></video>
        <div className="callout">
          <h1>Assasins's Creed</h1>
          <h2>Assasins's Creed</h2>
          <div className="icons">
            <img src="icons/3.png" />
            <img src="icons/1.png" />
            <img src="icons/2.png" />
          </div>
          <div className="desc">
            <b>Gerilim, Bilim Kurgu, Fantastik, Macera</b>{" "}
            <span className="time">110dk</span> <span className="time">2016</span>
            <span className="subtitle">Dil:</span> Türkçe, İngilizce
            <span className="subtitle">Altyazı:</span> Türkçe, İngilizce
          </div>
          <table className="details">
            <thead className="headers">
              <tr>
                <th>Yönetmen</th>
                <th>Oyuncular</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Justin Kurzel</td>
                <td>Michael Fassbender Marion Cotillard Jeremy Irons</td>
              </tr>
            </tbody>
          </table>

          <div className="info">
            <p>
              Genetik kodunun kilidini kırması ile atalarının hatıralarına
              erişim sağlayabilen Callum Lynch, 15. yüzyıl İspanya'sında yaşayan
              atası Aguilar'ın maceralarını kendi hafızalarında yer alacak kadar
              canlı bir şekilde deneyimler. Gizli bir topluluk olan
              Suikastçiler'in soyundan geldiğini öğrenen genç adam yeni
              kazandığı beceriler ile baskıcı ve güçlü organizasyon Templer'ın
              karşısına çıkar. Callum, günümüzde de varolan Templar
              organizasyonunu alt etmek için geçmişindeki bilgi ve tecrübesini
              kullanacaktır.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};
