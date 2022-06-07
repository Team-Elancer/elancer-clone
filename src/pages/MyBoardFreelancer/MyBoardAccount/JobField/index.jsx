import * as S from './style';

const JobField = ({ workTypeField, setWorkTypeField }) => {
  const WORKTYPE = [
    '쇼핑몰',
    '여행사',
    '금융',
    '증권',
    '카드',
    '보험',
    '대학',
    '병원',
    '공공기관',
    '물류',
    '회계',
    '제조',
    '건설',
    '통신',
    '유통',
    '생산',
    '미디어',
    '교육',
    '반도체',
    '자동차',
    '암호화폐',
    '블록체인',
    '빅데이터',
    '기타',
  ];

  const FIELD_DATABASE_FORMAT = [
    'SHOPPING_MALL',
    'TRAVEL_AGENCY',
    'FINANCE',
    'STOCK',
    'CARD',
    'INSURANCE',
    'UNIVERSITY',
    'HOSPITAL',
    'PUBLIC_OFFICE',
    'DISTRIBUTION',
    'ACCOUNTING',
    'PRODUCTION',
    'CONSTRUCTION',
    'COMMUNICATION',
    'CIRCULATION',
    'PRODUCE',
    'MEDIA',
    'EDUCATION',
    'SEMICONDUCTOR',
    'VEHICLE',
    'CRYPTOCURRENCY',
    'BLOCKCHAIN',
    'BIGDATA',
    'ETC',
  ];

  // Filter the database index for CSS(active)
  const filteredIndex = workTypeField.map((typeIndex) => FIELD_DATABASE_FORMAT.indexOf(typeIndex));

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
      {WORKTYPE.map((type, index) => (
        <S.ContainerOptions key={type}>
          <S.ContainerList>
            <S.ButtonLabel
              id={type}
              htmlFor={FIELD_DATABASE_FORMAT[index]}
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
