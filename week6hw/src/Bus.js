import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Bus = () => {
    const [busData, setBusData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchBus = async () => {
      try {
              const res = await axios.get();
      console.log('API 응답:', res.data);
        const response = await axios.get("https://apis.data.go.kr/6410000/busarrivalservice/v2/getBusArrivalListv2", {
          params: {
            serviceKey: process.env.REACT_APP_API_KEY,
            stationId: "206000026",
            resultType: 'json',
          },
        });

        console.log(response.data);
        setBusData(response.data.response.body.items);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBus();

  }, []);

  return (
    <div>
      <h2>버스 도착 정보</h2>
      {error && <p>에러: {error}</p>}
      <ul>
        {busData.map((bus, index) => (
          <li key={index}>
            <p>버스 노선: {bus.routeName}</p> 
            <p>목적지: {bus.routeDestName}</p> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bus;
