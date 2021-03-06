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
    case 'π  νΌλΈλ¦¬μ±':
      return ['publishers', 'PUBLISHER'];
    case 'π¨ λμμΈ':
      return ['designers', 'DESIGNER'];

    case 'π κΈ°ν':
      return ['planners', 'PLANNER'];

    case 'π κΈ°ν':
      return ['positionEtcers', 'ETC'];
    default:
      return ['developers', 'DEVELOPER'];
  }
};

export const handleHopeWork = (type) => {
  switch (type) {
    case 'π’ μμ£Ό':
      return 'AT_COMPANY';
    case 'π₯ λ°μμ£Ό':
      return 'AT_HALF_COMPANY';
    case 'π  μ¬ν':
      return 'AT_HOME';
    case 'π μ κ·μ§':
      return 'REGULAR';
    case 'κ΄κ³μμ':
      return 'NO_MATTER';
    default:
      return '';
  }
};

export const handleProjectType = (type) => {
  switch (type) {
    case 'π’ μμ£Ό':
      return 'WORKING';
    case 'π₯  μ¬ν,μμ£Ό':
      return 'BOTH_TELEWORKING_WORKING';
    case 'π  μ¬ν':
      return 'TELEWORKING';
    default:
      return '';
  }
};

export const handleWorkManShip = (type) => {
  switch (type) {
    case 'μ΄κΈ 0~4λ':
      return 'JUNIOR';
    case 'μ€κΈ 5~9λ':
      return 'MIDDLE';
    case 'κ³ κΈ 10λ μ΄μ':
      return 'SENIOR';
    default:
      return '';
  }
};

export const handleWorkArea = (type) => {
  switch (type) {
    case 'μμΈ':
      return 'SEOUL';
    case 'λΆμ°':
      return 'BUSAN';
    case 'λκ΅¬':
      return 'DAEGU';
    case 'μΈμ²':
      return 'INCHEON';
    case 'κ΄μ£Ό':
      return 'GWANGJU';
    case 'λμ ':
      return 'DAEJUN';
    case 'μΈμ°':
      return 'ULSAN';
    case 'μΈμ’':
      return 'SEJONG';
    case 'κ²½κΈ°':
      return 'GYEONGGI';
    case 'κ°μ':
      return 'GANGWON';
    case 'μΆ©λΆ':
      return 'CHUNGBUK';
    case 'μΆ©λ¨':
      return 'CHUNGNAM';
    case 'μ λΆ':
      return 'JEONBUK';
    case 'μ λ¨':
      return 'JEONNAM';
    case 'κ²½λΆ':
      return 'KYUNGBUK';
    case 'κ²½λ¨':
      return 'KYUNGNAM';
    case 'μ μ£Ό':
      return 'JEJU';
    default:
      return '';
  }
};
