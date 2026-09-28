import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { DownloadPage } from './pages/Download';
import { FeaturesPage } from './pages/Features';
import { DocsPage } from './pages/Docs';
import { ChangelogPage } from './pages/Changelog';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/changelog" element={<ChangelogPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
