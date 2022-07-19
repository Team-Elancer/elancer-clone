// ==============  replace middle name to "*" ==============

export const extractSecureName = (str) => {
  // get index
  const position = str.length % 2 !== 0 ? Math.floor(str.length / 2) : str.length / 2;

  // replace the middle letter to *
  const newName = str.split('');
  newName[position] = '*';

  return newName.join('');
};

// ==============  For filtering URL  ==============

export const handlePosition = (type) => {
  switch (type) {
    case '🛠 퍼블리싱':
      return ['publishers', 'PUBLISHER'];
    case '🎨 디자인':
      return ['designers', 'DESIGNER'];

    case '📝 기획':
      return ['planners', 'PLANNER'];

    case '🔗 기타':
      return ['positionEtcers', 'ETC'];
    default:
      return ['developers', 'DEVELOPER'];
  }
};

export const handleHopeWork = (type) => {
  switch (type) {
    case '🏢 상주':
      return 'AT_COMPANY';
    case '🖥 반상주':
      return 'AT_HALF_COMPANY';
    case '🏠 재택':
      return 'AT_HOME';
    case '🔗 정규직':
      return 'REGULAR';
    case '관계없음':
      return 'NO_MATTER';
    default:
      return '';
  }
};

export const handleProjectType = (type) => {
  switch (type) {
    case '🏢 상주':
      return 'WORKING';
    case '🖥  재택,상주':
      return 'BOTH_TELEWORKING_WORKING';
    case '🏠 재택':
      return 'TELEWORKING';
    default:
      return '';
  }
};

export const handleWorkManShip = (type) => {
  switch (type) {
    case '초급 0~4년':
      return 'JUNIOR';
    case '중급 5~9년':
      return 'MIDDLE';
    case '고급 10년 이상':
      return 'SENIOR';
    default:
      return '';
  }
};

export const handleWorkArea = (type) => {
  switch (type) {
    case '서울':
      return 'SEOUL';
    case '부산':
      return 'BUSAN';
    case '대구':
      return 'DAEGU';
    case '인천':
      return 'INCHEON';
    case '광주':
      return 'GWANGJU';
    case '대전':
      return 'DAEJUN';
    case '울산':
      return 'ULSAN';
    case '세종':
      return 'SEJONG';
    case '경기':
      return 'GYEONGGI';
    case '강원':
      return 'GANGWON';
    case '충북':
      return 'CHUNGBUK';
    case '충남':
      return 'CHUNGNAM';
    case '전북':
      return 'JEONBUK';
    case '전남':
      return 'JEONNAM';
    case '경북':
      return 'KYUNGBUK';
    case '경남':
      return 'KYUNGNAM';
    case '제주':
      return 'JEJU';
    default:
      return '';
  }
};
