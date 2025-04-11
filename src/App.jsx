import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/gsc')
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error('Failed to fetch:', err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Search Console Data</h2>
      <table border="1" cellPadding={10}>
        <thead>
          <tr>
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
