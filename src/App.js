import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import News from "./routes/news/news.component";
import Pictures from "./routes/pictures/pictures.component";
import Favorites from "./routes/favorites/favorites.component";
import Authentication from "./routes/authentication/authentication.container";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="pictures" element={<Pictures />} />
        <Route path="favorites/*" element={<Favorites />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
