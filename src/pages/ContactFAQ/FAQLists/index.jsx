import CareerQNA from './Career';
import EtcQNA from './ETC';
import FindAccountQNA from './FindAccount';
import ModifyAccountQNA from './ModifyAccount';
import ProjectQNA from './Project';
import SignupQNA from './Signup';

import * as S from './style';

import { CAREER_LIST } from 'utils/constants/FAQList/career';
import { ETC_LIST } from 'utils/constants/FAQList/etc';
import { FIND_ACCOUNT_LIST } from 'utils/constants/FAQList/findAccount';
import { MODIFY_ACCOUNT_LIST } from 'utils/constants/FAQList/modifyAccount';
import { PROJECT_LIST } from 'utils/constants/FAQList/project';
import { SIGNUP_LIST } from 'utils/constants/FAQList/signUp';

const FAQLists = ({ isCheckedProject, defaultPrimary, setDefaultPrimary }) => {
  const { project, career, account } = defaultPrimary;

  return (
    <S.ContainerUl>
      {(isCheckedProject === '#project' || project) && (
        <div>
          {PROJECT_LIST.map((section, index) => (
            <ProjectQNA section={section} key={`ProjectQNA${index + 1}`} />
          ))}
        </div>
      )}

      {(isCheckedProject === '#career' || career) && (
        <div>
          {CAREER_LIST.map((section, index) => (
            <CareerQNA section={section} key={`CareerQNA${index + 1}`} />
          ))}
        </div>
      )}

      {(isCheckedProject === '#account' || account) && (
        <div>
          {MODIFY_ACCOUNT_LIST.map((section, index) => (
            <ModifyAccountQNA section={section} key={`ModifyAccountQNA${index + 1}`} />
          ))}
        </div>
      )}

      {isCheckedProject === '#signup' && (
        <div>
          {SIGNUP_LIST.map((section, index) => (
            <SignupQNA section={section} key={`SignupQNA${index + 1}`} />
          ))}
        </div>
      )}

      {isCheckedProject === '#id-password' && (
        <div>
          {FIND_ACCOUNT_LIST.map((section, index) => (
            <FindAccountQNA section={section} key={`FindAccountQNA${index + 1}`} />
          ))}
        </div>
      )}

      {isCheckedProject === '#etc' && (
        <div>
          {ETC_LIST.map((section, index) => (
            <EtcQNA section={section} key={`EtcQNA${index + 1}`} />
          ))}
        </div>
      )}
    </S.ContainerUl>
  );
};

export default FAQLists;
