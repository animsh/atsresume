const ExtraCurricular = ({ title, extracurricular }) => {
  return (
    extracurricular.length > 0 && (
      <div>
        <h2 className="section-title mb-1 border-b-2 border-gray-300">
          {title}
        </h2>
        <ul className="sub-content list-disc ul-padding">
          {extracurricular.map((extracurricular, index) => (
            <li key={index}>{extracurricular}</li>
          ))}
        </ul>
      </div>
    )
  );
};

export default ExtraCurricular;
