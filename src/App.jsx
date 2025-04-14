import { useEffect, useState } from 'react';
import './App.css';
import './styles.css'; // optional for custom styling

function App() {
  const [data, setData] = useState([]);

  // Mock data (based on screenshot)
  const mockData = [
    {
      page: 'adtech-hub-digital-marketing-ai-consulting',
      title: 'AdTech Hub - Trusted Marketing Agency for Growth | Agencyspot',
      score: 11,
      position: 5,
      traffic: 0,
      impressions: 4,
      ctr: 0,
      trend: 'down',
    },
    {
      page: 'adam-4-business',
      title: 'ADAM 4 Business - SEO, PPC & Social Media Experts | Agencyspot',
      score: 49,
      position: 5,
      traffic: 0,
      impressions: 5,
      ctr: 0,
      trend: 'down',
    },
    {
      page: 'a3h-consultants',
      title: 'A3H Consultants - SEO, PPC & Social Media Experts | Agencyspot',
      score: 28,
      position: 5,
      traffic: 0,
      impressions: 5,
      ctr: 0,
      trend: 'down',
    },
    {
      page: 'advert-digital-mantra-pvt-ltd',
      title: 'Advert Digital Mantra - Grow Your Brand with Top Marketing Strategies',
      score: 38,
      position: 6,
      traffic: 0,
      impressions: 5,
      ctr: 0,
      trend: 'down',
    },
    {
      page: 'datafunc-case-studies',
      title: 'Datafunc - Best-Rated Marketing Agency | Services & Reviews',
      score: 4,
      position: 6,
      traffic: 0,
      impressions: 1,
      ctr: 0,
      trend: 'down',
    },
    {
      page: 'falahbits',
      title: 'Discover falahbits - Top Digital Marketing Agency | Agencyspot',
      score: 46,
      position: 6,
      traffic: 0,
      impressions: 5,
      ctr: 0,
      trend: 'down',
    },
    {
      page: 'gleexa',
      title: 'Gleexa - Full-Service Digital Marketing & Branding Experts',
      score: 93,
      position: 6,
      traffic: 0,
      impressions: 2,
      ctr: 0,
      trend: 'up',
    },
    {
      page: 'growxme',
      title: 'GrowXme - Best-Rated Marketing Agency | Services & Reviews',
      score: 75,
      position: 6,
      traffic: 0,
      impressions: 1,
      ctr: 0,
      trend: 'down',
    },
    {
      page: 'digitlfly-com',
      title: 'Digitlfly - Expert Marketing Services for Your Business | Agencyspot',
      score: 27,
      position: 8,
      traffic: 0,
      impressions: 5,
      ctr: 0,
      trend: 'down',
    },
  ];

  useEffect(() => {
    setData(mockData);
  }, []);

  return (
    <div className="container">
      <h1>Top Pages</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Page</th>
            <th>Content Score</th>
            <th>Position</th>
            <th>Traffic</th>
            <th>Impr.</th>
            <th>CTR</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <a href={`https://${row.page}`} target="_blank" rel="noreferrer">
                  {row.title}
                </a>
              </td>
              <td>
                <div className="bar-wrapper">
                  <div className="bar" style={{ width: `${row.score}%` }}></div>
                  <span>{row.score}%</span>
                </div>
              </td>
              <td>{row.position}</td>
              <td>{row.traffic}</td>
              <td className={row.trend === 'up' ? 'green' : 'red'}>
                {row.impressions}
                {row.trend === 'up' ? ' 🔼' : ' 🔽'}
              </td>
              <td>{row.ctr}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
