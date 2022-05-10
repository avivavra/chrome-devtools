import './App.css';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <div className="navbar-item navbar-header">SiteName</div>
        <div className="navbar-menu">
          <button className="navbar-item navbar-button">Page</button>
          <button className="navbar-item navbar-button">Page</button>
          <button className="navbar-item navbar-button">Page</button>
        </div>
        <div className="navbar-summary">
          <button className="navbar-item navbar-button">Sign In</button>
          <button className="navbar-item navbar-button">Sign Up</button>
          <img className="navbar-item site-logo" src="mcdonalds-logo.webp" alt="Site Logo" />
        </div>
      </div>
      <div className="gallery">
        <div className="gallery-item">
          <img src="field-6574455__480.jpg" alt="Cinque Terre" width="600" height="400" />
          <div className="desc">Add a description of the image here</div>
        </div>

        <div className="gallery-item">
          <img src="istockphoto-517188688-612x612.jpg" alt="Forest" width="600" height="400" />
          <div className="desc">Add a description of the image here</div>
        </div>

        <div className="gallery-item">
          <img src="istockphoto-1297349747-170667a.jpg" alt="Northern Lights" width="600" height="400" />
          <div className="desc">Add a description of the image here</div>
        </div>

        <div className="gallery-item">
          <img src="pexels-photo-302743.jpeg" alt="Mountains" width="600" height="400" />
          <div className="desc">Add a description of the image here</div>
        </div>

        <div className="gallery-item">
          <img src="tree-736885__480.jpg" alt="Mountains" width="600" height="400" />
          <div className="desc">Add a description of the image here</div>
        </div>

        <div className="gallery-item">
          <img src="tree-736885__480.jpg" alt="Mountains" width="600" height="400" />
          <div className="desc">Add a description of the image here</div>
        </div>

        <div className="gallery-item">
          <img src="tree-736885__480.jpg" alt="Mountains" width="600" height="400" />
          <div className="desc">Add a description of the image here</div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-item">Contact Us: website@gmail.com</div>
      </div>
    </div>
  );
}

export default App;
