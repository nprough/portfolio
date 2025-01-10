import './App.css';
import HomeSection from './components/HomeSection';

function App() {
  return (
    <>
      <div className='h-screen overflow-y-scroll snap-y snap-mandatory'>
        <HomeSection />
        <section className="h-screen snap-start">
          <h1>Section</h1>
        </section>
        <section className="h-screen snap-start">
          <h1>Section</h1>
        </section>
        <section className="h-screen snap-start">
          <h1>Section</h1>
        </section>
      </div>
    </>
  );
}

export default App;
