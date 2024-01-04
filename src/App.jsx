import Form from './components/Form/Form';
import A4Page from './components/A4Page/A4Page';
import { useState } from 'react';

function App() {
  const [form, setForm] = useState([
    {
      id: 'General',
      name: '',
      email: '',
      phone: '',
      address: '',
    },
    {
      id: 'Education',
      degree: '',
      school: '',
      city: '',
      country: '',
    },
    {
      id: 'Practical',
      company: '',
      position: '',
      responsibilities: '',
      employmentPeriod: '',
    },
  ]);

  const handleInputChange = (index, field, value) => {
    setForm((form) => ({
      ...form,
      [index]: {
        ...form[index],
        [field]: value,
      },
    }));
  };

  return (
    <main className="content-grid">
      <h1 className="content" style={{ textAlign: 'center' }}>
        CV Application
      </h1>

      <section>
        <Form handleInputChange={handleInputChange} form={form} />
      </section>

      <section>
        <A4Page general={form[0]} />
      </section>
    </main>
  );
}

export default App;
