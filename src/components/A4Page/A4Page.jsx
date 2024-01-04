import './A4Page.scss';

const A4Page = ({ general }) => {
  return (
    <div className="a4-page">
      <h1 className="full-name">{general.name}</h1>
      <div className="contact">
        <p>{general.email}</p>
        <p>{general.phone}</p>
        <p>{general.address}</p>
      </div>
    </div>
  );
};

export default A4Page;
