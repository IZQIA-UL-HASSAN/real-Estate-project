import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

//simple mock response for now when back end comes we can remove it 

const mockResponse = {
  sale_listing:{
    title:"luxury villa in tuscany",
    price : "500000",
    rooms:"5",
    bathroom:"3",
    location:"florance , italy",
    images :[
      "https://picsum.photos/200/200?1",
      "https://picsum.photos/200/200?2",
    ],
  },
  matches :[
   {
     source : "Airbnb",
     title : "Charming tuscan villa",
     url :"https://airbnb.com/listing/999",
     score : 0.87,
     images :["https://picsum.photos/300/200?3"],
   },
{
  source :"booking",
  title : "rustic villa with pool",
  url : "https://booking.com/listing/888",
  score : 0.81,
  images:["https://picsum.photos/300/200?4"],
},
  ],

};

function App() {
  const [url, setUrl] = useState("");
  const [loading , setLoading] = useState(false);
  const [results , setResults] = useState(null);

  const handleMatch = () =>{
    setLoading(true);
  }
  //in future we will be replacing this with real API fetch

  setTimeout(() => {
    setResults(mockResponse);
    setLoading(false);
  }, 1000);

  

 
  return (
    <>
    
    
    <div className="container">
      <Navbar/>
      <h1> Sale → Rental Matching MVP</h1>

      {/* URL input */}
      <input
        type="text"
        placeholder="Paste sale property URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleMatch} disabled={loading || !url}>
        {loading ? "Finding Matches..." : "Find Matches"}
      </button>

      {/* Results */}
      {results && (
        <div style={{ marginTop: "20px" }}>
          {/* Sale Listing */}
          <div className="card">
            <h2>Sale Listing</h2>
            <p><strong>{results.sale_listing.title}</strong></p>
            <p>
              ${results.sale_listing?.price?.toLocaleString?.()} •{" "}
              {results.sale_listing?.rooms || "?"} rooms •{" "}
              {results.sale_listing?.bathrooms || "?"} baths
            </p>
            <p>{results.sale_listing?.location || "unknown location"}</p>
            <div className="sale-images">
              {results.sale_listing?.images?.map((img, i) => (
                <img key={i} src={img} alt="Sale" />
              ))}
            </div>
          </div>

          {/* Matches */}
          <h2>Top Matches</h2>
          <div className="grid">
            {results.matches?.map((m, i) => (
              <div key={i} className="card">
                <img src={m.images[0]} alt="Rental" />
                <h3>{m.title}</h3>
                <p><em>{m.source}</em></p>
                <p>Score: {m.score?.toFixed?.(2)}</p>
                <a href={m.url} target="_blank" rel="noreferrer">
                  View Listing
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default App;