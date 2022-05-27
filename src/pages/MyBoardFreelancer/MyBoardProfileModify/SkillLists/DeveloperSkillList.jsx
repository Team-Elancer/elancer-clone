import { useState } from 'react';
import * as S from './style';

const DeveloperSkillList = () => {
  const [isCheckedProject, setIsCheckedProject] = useState('');
  const [defaultPrimary, setDefaultPrimary] = useState({
    project: false,
    career: false,
    account: false,
  });

  const { project, career, account } = defaultPrimary;

  const removeDefault = () => {
    setDefaultPrimary({});
  };
  return (
    <S.FrameLists>
      <S.FrameOptions>
        <S.SubjectTitle>JAVA</S.SubjectTitle>
        <S.ContainerOptions>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="project"
              onClick={() => {
                setIsCheckedProject('#project');
                removeDefault();
              }}
              active={isCheckedProject === '#project' || project}
            >
              Front-End
              <S.ButtonOption type="radio" value="1" name="project" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="career"
              active={isCheckedProject === '#career' || career}
              onClick={() => {
                removeDefault();
                setIsCheckedProject('#career');
              }}
            >
              Back-End
              <S.ButtonOption type="radio" value="2" name="career" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="account"
              active={isCheckedProject === '#account' || account}
              onClick={() => {
                removeDefault();
                setIsCheckedProject('#account');
              }}
            >
              Spring
              <S.ButtonOption type="radio" value="3" name="account" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="signup"
              active={isCheckedProject === '#signup'}
              onClick={() => {
                removeDefault();
                setIsCheckedProject('#signup');
              }}
            >
              Jenkins
              <S.ButtonOption type="radio" value="4" name="signup" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="etc"
              active={isCheckedProject === '#etc'}
              onClick={() => {
                removeDefault();
                setIsCheckedProject('#etc');
              }}
            >
              Sencha
              <S.ButtonOption type="radio" value="6" name="etc" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="etc"
              active={isCheckedProject === '#etc'}
              onClick={() => {
                removeDefault();
                setIsCheckedProject('#etc');
              }}
            >
              Sencha
              <S.ButtonOption type="radio" value="6" name="etc" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="etc"
              active={isCheckedProject === '#etc'}
              onClick={() => {
                removeDefault();
                setIsCheckedProject('#etc');
              }}
            >
              Sencha
              <S.ButtonOption type="radio" value="6" name="etc" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="etc"
              active={isCheckedProject === '#etc'}
              onClick={() => {
                removeDefault();
                setIsCheckedProject('#etc');
              }}
            >
              Sencha
              <S.ButtonOption type="radio" value="6" name="etc" />
            </S.ButtonLabel>
          </S.ContainerList>
        </S.ContainerOptions>
      </S.FrameOptions>
      <S.FrameOptions>
        <S.SubjectTitle>JAVA</S.SubjectTitle>
        <S.ContainerOptions>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="project"
              onClick={() => {
                setIsCheckedProject('#project');
                removeDefault();
              }}
              active={isCheckedProject === '#project' || project}
            >
              Front-End
              <S.ButtonOption type="radio" value="1" name="project" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="career"
              active={isCheckedProject === '#career' || career}
              onClick={() => {
                removeDefault();
                setIsCheckedProject('#career');
              }}
            >
              Back-End
              <S.ButtonOption type="radio" value="2" name="career" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="account"
              active={isCheckedProject === '#account' || account}
              onClick={() => {
                removeDefault();
                setIsCheckedProject('#account');
              }}
            >
              Spring
              <S.ButtonOption type="radio" value="3" name="account" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="signup"
              active={isCheckedProject === '#signup'}
              onClick={() => {
                removeDefault();
                setIsCheckedProject('#signup');
              }}
            >
              Jenkins
              <S.ButtonOption type="radio" value="4" name="signup" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="etc"
              active={isCheckedProject === '#etc'}
              onClick={() => {
                removeDefault();
                setIsCheckedProject('#etc');
              }}
            >
              Sencha
              <S.ButtonOption type="radio" value="6" name="etc" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="etc"
              active={isCheckedProject === '#etc'}
              onClick={() => {
                removeDefault();
                setIsCheckedProject('#etc');
              }}
            >
              Sencha
              <S.ButtonOption type="radio" value="6" name="etc" />
            </S.ButtonLabel>
          </S.ContainerList>
        </S.ContainerOptions>
      </S.FrameOptions>
      <S.FrameOptions>
        <S.SubjectTitle>JAVA</S.SubjectTitle>
        <S.ContainerOptions>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="project"
              onClick={() => {
                setIsCheckedProject('#project');
                removeDefault();
              }}
              active={isCheckedProject === '#project' || project}
            >
              Front-End
              <S.ButtonOption type="radio" value="1" name="project" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="career"
              active={isCheckedProject === '#career' || career}
              onClick={() => {
                removeDefault();
                setIsCheckedProject('#career');
              }}
            >
              Back-End
              <S.ButtonOption type="radio" value="2" name="career" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="account"
              active={isCheckedProject === '#account' || account}
              onClick={() => {
                removeDefault();
                setIsCheckedProject('#account');
              }}
            >
              Spring
              <S.ButtonOption type="radio" value="3" name="account" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="signup"
              active={isCheckedProject === '#signup'}
              onClick={() => {
                removeDefault();
                setIsCheckedProject('#signup');
              }}
            >
              Jenkins
              <S.ButtonOption type="radio" value="4" name="signup" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="etc"
              active={isCheckedProject === '#etc'}
              onClick={() => {
                removeDefault();
                setIsCheckedProject('#etc');
              }}
            >
              Sencha
              <S.ButtonOption type="radio" value="6" name="etc" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="etc"
              active={isCheckedProject === '#etc'}
              onClick={() => {
                removeDefault();
                setIsCheckedProject('#etc');
              }}
            >
              Sencha
              <S.ButtonOption type="radio" value="6" name="etc" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="etc"
              active={isCheckedProject === '#etc'}
              onClick={() => {
                removeDefault();
                setIsCheckedProject('#etc');
              }}
            >
              Sencha
              <S.ButtonOption type="radio" value="6" name="etc" />
            </S.ButtonLabel>
          </S.ContainerList>
        </S.ContainerOptions>
      </S.FrameOptions>
      <S.FrameOptions>
        <S.SubjectTitle>JAVA</S.SubjectTitle>
        <S.ContainerOptions>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="project"
              onClick={() => {
                setIsCheckedProject('#project');
                removeDefault();
              }}
              active={isCheckedProject === '#project' || project}
            >
              Front-End
              <S.ButtonOption type="radio" value="1" name="project" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="career"
              active={isCheckedProject === '#career' || career}
              onClick={() => {
                removeDefault();
                setIsCheckedProject('#career');
              }}
            >
              Back-End
              <S.ButtonOption type="radio" value="2" name="career" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="account"
              active={isCheckedProject === '#account' || account}
              onClick={() => {
                removeDefault();
                setIsCheckedProject('#account');
              }}
            >
              Spring
              <S.ButtonOption type="radio" value="3" name="account" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="signup"
              active={isCheckedProject === '#signup'}
              onClick={() => {
                removeDefault();
                setIsCheckedProject('#signup');
              }}
            >
              Jenkins
              <S.ButtonOption type="radio" value="4" name="signup" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="etc"
              active={isCheckedProject === '#etc'}
              onClick={() => {
                removeDefault();
                setIsCheckedProject('#etc');
              }}
            >
              Sencha
              <S.ButtonOption type="radio" value="6" name="etc" />
            </S.ButtonLabel>
          </S.ContainerList>
        </S.ContainerOptions>
      </S.FrameOptions>
    </S.FrameLists>
  );
};

export default DeveloperSkillList;
