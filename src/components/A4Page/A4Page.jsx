import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './A4Page.scss';
import Button from '../UI/button/Button';

const educationItem = (item) => {
  return (
    <div className="education__details">
      <p className="education__item">{item.degree}</p>
      <p className="education__item">{item.school}</p>
      <p className="education__item">{item.city}</p>
      <p className="education__item">{item.country}</p>
    </div>
  );
};

const experienceItem = (item) => {
  return (
    <div className="practical__details">
      <p className="practical__item practical__item-position">
        {item.position}
      </p>
      <p className="practical__item practical__item-company">{item.company}</p>
      <p className="practical__item practical__item-period">
        {item.employmentPeriod}
      </p>
      <p className="practical__item practical__item-responsibilities">
        {item.responsibilities}
      </p>
    </div>
  );
};

const A4Page = ({ general, practical, education }) => {
  const exportPDF = () => {
    const input = document.getElementById('a4-page');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('download.pdf');
    });
  };

  return (
    <>
      <div id="a4-page" className="a4-page">
        <div className="a4-page__block general">
          <h2 className="general__full-name">{general.name}</h2>
          <div className="general__contact">
            <p className="general__contact-item">{general.email}</p>
            <p className="general__contact-item">{general.phone}</p>
            <p className="general__contact-item">{general.address}</p>
          </div>
        </div>

        <div className="a4-page__block practical">
          <h2 className="a4-page__block-title">Experience</h2>
          {practical.map((item) => experienceItem(item))}
        </div>

        <div className="a4-page__block education">
          <h2 className="a4-page__block-title">Education</h2>
          {education.map((item) => educationItem(item))}
        </div>
      </div>
      <Button className="download-button" onClick={exportPDF}>
        Download
      </Button>
    </>
  );
};

export default A4Page;
