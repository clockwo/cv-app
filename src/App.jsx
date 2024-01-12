import Form from './components/Form/Form';
import A4Page from './components/A4Page/A4Page';
import { useState } from 'react';

function App() {
  const [general, setGeneral] = useState({
    id: 'general',
    name: 'Mels Malkov',
    email: 'melsmalkov@gmail.com',
    phone: '+79559505511',
    address: 'Saint-Petersburg',
  });

  const handleGeneralChanges = (changeItem, value) => {
    setGeneral((general) => ({
      ...general,
      [changeItem]: value,
    }));
  };

  const [education, setEducation] = useState([
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      school: 'Saint Petersburg State University',
      city: 'Saint Petersburg',
      country: 'Russia',
    },
    {
      id: 2,
      degree: 'Master of Science in Software Engineering',
      school: 'Moscow Institute of Physics and Technology',
      city: 'Moscow',
      country: 'Russia',
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: 1,
      company: 'SoftTech',
      position: 'Junior Frontend Developer',
      responsibilities:
        'Developing user interfaces, participating in component design, bug fixing, writing unit tests.',
      employmentPeriod: 'January 2020 - August 2021',
    },
    {
      id: 2,
      company: 'Innovatech Solutions',
      position: 'Middle Frontend Developer',
      responsibilities:
        'Leading the development of large-scale web applications, performance optimization, implementing complex interface solutions, mentoring junior developers.',
      employmentPeriod: 'September 2021 - Present',
    },
    {
      id: 3,
      company: 'Creative Web Studio',
      position: 'Senior Frontend Developer',
      responsibilities:
        'Managing a team of developers, designing application architecture, ensuring high code quality, implementing best development practices.',
      employmentPeriod: 'June 2019 - December 2019',
    },
  ]);

  const handleEducationChanges = (index, changeItem, value) => {
    setEducation((education) =>
      education.map((item, i) => {
        if (i === index) {
          return { ...item, [changeItem]: value };
        } else {
          return item;
        }
      })
    );
  };

  const addEmptyItem = (isEducation = false, isExperience = false) => {
    const educationItem = {
      id: Date.now(),
      degree: '',
      school: '',
      city: '',
      country: '',
    };
    const experienceItem = {
      id: Date.now(),
      company: '',
      position: '',
      responsibilities: '',
      employmentPeriod: '',
    };

    if (isEducation) {
      setEducation((education) => [...education, educationItem]);
    }
    if (isExperience) {
      setExperience((experience) => [...experience, experienceItem]);
    }
  };

  const removeEducationItem = (remItem) => {
    setEducation((education) =>
      education.filter((item) => item.id !== remItem.id)
    );
  };

  const handleExperienceChanges = (index, changeItem, value) => {
    setExperience((experience) =>
      experience.map((item, i) => {
        if (i === index) {
          return { ...item, [changeItem]: value };
        } else {
          return item;
        }
      })
    );
  };

  const removeExperienceItem = (remItem) => {
    setExperience((experience) =>
      experience.filter((item) => item.id !== remItem.id)
    );
  };

  return (
    <main className="content-grid">
      <h1 className="content" style={{ textAlign: 'center' }}>
        CV Application
      </h1>

      <section>
        <Form
          general={general}
          handleGeneralChanges={handleGeneralChanges}
          education={education}
          handleEducationChanges={handleEducationChanges}
          removeEducationItem={removeEducationItem}
          experience={experience}
          handleExperienceChanges={handleExperienceChanges}
          removeExperienceItem={removeExperienceItem}
          addNewItem={addEmptyItem}
        />
      </section>

      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <A4Page
          general={general}
          education={education}
          practical={experience}
        />
      </section>
    </main>
  );
}

export default App;
