import Form from './components/Form/Form';

function App() {
  return (
    <main className="content-grid">
      <h1 className="content" style={{ textAlign: 'center' }}>
        CV Application
      </h1>

      <section>
        <Form />
      </section>
    </main>
  );
}

export default App;
