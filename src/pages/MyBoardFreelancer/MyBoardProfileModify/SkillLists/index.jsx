import axios from 'axios';
import { useState } from 'react';

import * as S from '../style';

import Developer from './Developer';
import JobSkill from './JobSkill';

const SkillLists = () => {
  /* =========  /freelancer-profile/developer  ========= */
  const [JavaDetailSkillSTATE, setJavaDetailSkillSTATE] = useState([]);
  const [MobileAppDetailSkillSTATE, setMobileAppDetailSkillSTATE] = useState([]);
  const [PhpOrAspDetailSkillSTATE, setPhpOrAspDetailSkillSTATE] = useState([]);
  const [DotNetDetailSkillSTATE, setDotNetDetailSkillSTATE] = useState([]);
  const [JavaScriptDetailSkillSTATE, setJavaScriptDetailSkillSTATE] = useState([]);
  const [CDetailSkillSTATE, setCDetailSkillSTATE] = useState([]);
  const [DBDetailSkillSTATE, setDBDetailSkillSTATE] = useState([]);

  const [focusSkills, setFocusSkills] = useState([]);
  const [roles, setRoles] = useState([]);
  const [etcSkill, setEtcSkill] = useState('');

  const handleTwoJobField = (e, str) => {
    const FRONT_TYPE = e.target.id;
    const DB_TYPE = e.target.htmlFor;

    // ================= Java =================
    if (str === 'java') {
      // Handle clicked data
      if (FRONT_TYPE && !JavaDetailSkillSTATE.includes(DB_TYPE)) {
        if (JavaDetailSkillSTATE.length < 2) {
          setJavaDetailSkillSTATE((prev) => [...prev, DB_TYPE]);
        } else {
          alert('2개까지만 선택이 가능합니다.');
        }
        return;
      }

      // Unclick DB_TYPE
      if (JavaDetailSkillSTATE.includes(DB_TYPE)) {
        setJavaDetailSkillSTATE((prev) => prev.filter((type) => type !== DB_TYPE));
      }
    }

    // ================= Mobile_App =================
    if (str === 'mobile_App') {
      // Handle clicked data
      if (FRONT_TYPE && !MobileAppDetailSkillSTATE.includes(DB_TYPE)) {
        if (MobileAppDetailSkillSTATE.length < 2) {
          setMobileAppDetailSkillSTATE((prev) => [...prev, DB_TYPE]);
        } else {
          alert('2개까지만 선택이 가능합니다.');
        }
        return;
      }

      // Unclick DB_TYPE
      if (MobileAppDetailSkillSTATE.includes(DB_TYPE)) {
        setMobileAppDetailSkillSTATE((prev) => prev.filter((type) => type !== DB_TYPE));
      }
    }

    // ================= PHP or ASP =================
    if (str === 'php_asp') {
      // Handle clicked data
      if (FRONT_TYPE && !PhpOrAspDetailSkillSTATE.includes(DB_TYPE)) {
        if (PhpOrAspDetailSkillSTATE.length < 2) {
          setPhpOrAspDetailSkillSTATE((prev) => [...prev, DB_TYPE]);
        } else {
          alert('2개까지만 선택이 가능합니다.');
        }
        return;
      }

      // Unclick DB_TYPE
      if (PhpOrAspDetailSkillSTATE.includes(DB_TYPE)) {
        setPhpOrAspDetailSkillSTATE((prev) => prev.filter((type) => type !== DB_TYPE));
      }
    }

    // ================= DotNetDetailSkill =================
    if (str === '.net') {
      // Handle clicked data
      if (FRONT_TYPE && !DotNetDetailSkillSTATE.includes(DB_TYPE)) {
        if (DotNetDetailSkillSTATE.length < 2) {
          setDotNetDetailSkillSTATE((prev) => [...prev, DB_TYPE]);
        } else {
          alert('2개까지만 선택이 가능합니다.');
        }
        return;
      }

      // Unclick DB_TYPE
      if (DotNetDetailSkillSTATE.includes(DB_TYPE)) {
        setDotNetDetailSkillSTATE((prev) => prev.filter((type) => type !== DB_TYPE));
      }
    }

    // ================= JavaScriptSkill =================
    if (str === 'javascript') {
      // Handle clicked data
      if (FRONT_TYPE && !JavaScriptDetailSkillSTATE.includes(DB_TYPE)) {
        if (JavaScriptDetailSkillSTATE.length < 2) {
          setJavaScriptDetailSkillSTATE((prev) => [...prev, DB_TYPE]);
        } else {
          alert('2개까지만 선택이 가능합니다.');
        }
        return;
      }

      // Unclick DB_TYPE
      if (JavaScriptDetailSkillSTATE.includes(DB_TYPE)) {
        setJavaScriptDetailSkillSTATE((prev) => prev.filter((type) => type !== DB_TYPE));
      }
    }

    // ================= C Skill =================
    if (str === 'C_detail') {
      // Handle clicked data
      if (FRONT_TYPE && !CDetailSkillSTATE.includes(DB_TYPE)) {
        if (CDetailSkillSTATE.length < 2) {
          setCDetailSkillSTATE((prev) => [...prev, DB_TYPE]);
        } else {
          alert('2개까지만 선택이 가능합니다.');
        }
        return;
      }

      // Unclick DB_TYPE
      if (CDetailSkillSTATE.includes(DB_TYPE)) {
        setCDetailSkillSTATE((prev) => prev.filter((type) => type !== DB_TYPE));
      }
    }

    // ================= DB Skill =================
    if (str === 'DB') {
      // Handle clicked data
      if (FRONT_TYPE && !DBDetailSkillSTATE.includes(DB_TYPE)) {
        if (DBDetailSkillSTATE.length < 2) {
          setDBDetailSkillSTATE((prev) => [...prev, DB_TYPE]);
        } else {
          alert('2개까지만 선택이 가능합니다.');
        }
        return;
      }

      // Unclick DB_TYPE
      if (DBDetailSkillSTATE.includes(DB_TYPE)) {
        setDBDetailSkillSTATE((prev) => prev.filter((type) => type !== DB_TYPE));
      }
    }
  };

  const submitSkill = (e) => {
    e.preventDefault();

    const newData = {
      focusSkills: [focusSkills],
      roles: [roles],
      javaDetailSkills: JavaDetailSkillSTATE,
      mobileAppDetailSkills: MobileAppDetailSkillSTATE,
      phpOrAspDetailSkills: PhpOrAspDetailSkillSTATE,
      dotNetDetailSkills: DotNetDetailSkillSTATE,
      javaScriptDetailSkills: JavaScriptDetailSkillSTATE,
      cDetailSkills: CDetailSkillSTATE,
      dbDetailSkills: DBDetailSkillSTATE,
      etcSkill,
    };

    console.log(newData);

    axios({
      url: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/freelancer-profile/developer',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `${window.localStorage.accessToken}`,
      },
      data: newData,
    })
      .then(() => {
        console.log(newData);
        alert('정보를 수정했습니다.');
      })
      .catch((err) => {
        console.log(err.message);
        if (newData) alert('필드값 다시 사용확인');
      });
  };

  return (
    <>
      <JobSkill />

      {/* =========  /freelancer-profile/developer ========= */}
      <Developer
        handleTwoJobField={handleTwoJobField}
        JavaDetailSkillSTATE={JavaDetailSkillSTATE}
        MobileAppDetailSkillSTATE={MobileAppDetailSkillSTATE}
        PhpOrAspDetailSkillSTATE={PhpOrAspDetailSkillSTATE}
        DotNetDetailSkillSTATE={DotNetDetailSkillSTATE}
        JavaScriptDetailSkillSTATE={JavaScriptDetailSkillSTATE}
        CDetailSkillSTATE={CDetailSkillSTATE}
        DBDetailSkillSTATE={DBDetailSkillSTATE}
        focusSkills={focusSkills}
        setFocusSkills={setFocusSkills}
        roles={roles}
        setRoles={setRoles}
        etcSkill={etcSkill}
        setEtcSkill={setEtcSkill}
      />

      <S.FlexCenter>
        <S.ProfileButton type="button" onClick={submitSkill}>
          스킬 저장
        </S.ProfileButton>
      </S.FlexCenter>
    </>
  );
};

export default SkillLists;
