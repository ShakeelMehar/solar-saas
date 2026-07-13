import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWorks } from './components/SelectedWorks';
import { Journal } from './components/Journal';
import { Explorations } from './components/Explorations';
import { Stats } from './components/Stats';
import { Footer } from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="font-body text-text-primary bg-bg antialiased selection:bg-text-primary selection:text-bg">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <SelectedWorks />
            <Journal />
            <Explorations />
            <Stats />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
