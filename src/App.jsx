import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Ensure that the backend URL is fetched from the environment variable
    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    if (!backendUrl) {
      console.error('REACT_APP_BACKEND_URL is not defined');
      return;
    }

    fetch(`${backendUrl}/api/data`)
      .then(res => res.json())
      .then(data => setData(data || []))
      .catch(err => console.error("Failed to fetch:", err));
  }, []);

  return (
    <div className="container">
      <h1>Google Search Console Insights</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Page</th>
            <th>Clicks</th>
            <th>Impressions</th>
            <th>CTR</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{row.keys[0]}</td>
              <td>{row.clicks}</td>
              <td>{row.impressions}</td>
              <td>{(row.ctr * 100).toFixed(2)}%</td>
              <td>{row.position.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
