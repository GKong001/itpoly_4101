import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <h1>ยินดีต้อนรับสู่เว็บไซต์สาขาเทคโนโลยีสารสนเทศ</h1>
      <p>แสดงข้อมูลทั่วไปของสาขา</p>
      <div className="activities">
        <h2>กิจกรรมที่เกี่ยวข้อง:</h2>
        <ul>
          <li>งานปฐมนิเทศนักศึกษา</li>
          <li>กิจกรรมวันไอที</li>
          <li>โครงการพัฒนาทักษะ</li>
        </ul>
      </div>
      <div className="welcome-message">
        <h2>คำต้อนรับและปณิธาน</h2>
        <p>เรามุ่งมั่นที่จะสร้างนักศึกษาให้มีคุณภาพและพร้อมสู่โลกเทคโนโลยี</p>
      </div>
    </div>
  );
};

export default Home;
