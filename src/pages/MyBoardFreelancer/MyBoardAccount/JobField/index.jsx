import * as S from './style';

const JobField = ({ workType, workTypeField, setWorkTypeField, fieldDataBase }) => {
  // Filter the database index for CSS(active)
  const filteredIndex = workTypeField.map((typeIndex) => fieldDataBase.indexOf(typeIndex));

  const handleThreeJobField = (e) => {
    const jobType = e.target.id;
    const jobEnumType = e.target.htmlFor;

    // Handle clicked data
    if (jobType && !workTypeField.includes(jobEnumType)) {
      if (workTypeField.length < 3) {
        setWorkTypeField((prev) => [...prev, jobEnumType]);
      } else {
        alert('3개 업무만 가능해요');
      }
      return;
    }

    // Unclick jobEnumType
    if (workTypeField.includes(jobEnumType)) {
      setWorkTypeField((prev) => prev.filter((type) => type !== jobEnumType));
    }
  };

  return (
    <S.FrameOptions>
      {workType.map((type, index) => (
        <S.ContainerOptions key={type}>
          <S.ContainerList>
            <S.ButtonLabel
              id={type}
              htmlFor={fieldDataBase[index]}
              onClick={(e) => {
                handleThreeJobField(e);
              }}
              // Handle CSS: compare index
              active={filteredIndex.includes(index)}
            >
              {type}
            </S.ButtonLabel>
          </S.ContainerList>
        </S.ContainerOptions>
      ))}
    </S.FrameOptions>
  );
};

export default JobField;
