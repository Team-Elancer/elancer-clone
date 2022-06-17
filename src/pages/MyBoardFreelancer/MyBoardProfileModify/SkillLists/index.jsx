import axios from 'axios';
import { useState } from 'react';

import * as S from '../style';

import Designer from './Designer';

import Developer from './Developer';
import ETC from './ETC';
import JobSkill from './JobSkill';
import ProjectManager from './ProjectManager';
import Publisher from './Publisher';

const SkillLists = () => {
  /* ======= */

  const [positionKeyword, setPositionKeyword] = useState('DEVELOPER');

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

  /* =========  /freelancer-profile/publisher  ========= */
  const [PublishingDetailSkillSTATE, setPublishingDetailSkillSTATE] = useState([]);
  const [publishingEtcSkill, setPublishingEtcSkill] = useState('');

  /* =========  /freelancer-profile/designer  ========= */
  const [DesignDetailRolesSTATE, setDesignDetailRolesSTATE] = useState([]);
  const [DesignDetailSkillsSTATE, setDesignDetailSkillsSTATE] = useState([]);

  const [designEtcRole, setDesignEtcRole] = useState('');
  const [designEtcSkill, setDesignEtcSkill] = useState('');

  /* =========  /freelancer-profile/planner  ========= */

  const [PlannerDetailSkillSTATE, setPlannerDetailSkillSTATE] = useState([]);
  const [plannerEtcField, setPlannerEtcField] = useState('');

  /* =========  /freelancer-profile/etc  ========= */

  const [ETCDetailRoleSTATE, setETCDetailRoleSTATE] = useState([]);
  const [positionEtcRole, setPositionEtcRole] = useState('');

  // ================= 3개 업무 =================

  const handleThreeJobField = (e, str) => {
    const FRONT_TYPE = e.target.id;
    const DB_TYPE = e.target.htmlFor;

    // ================= publisher =================
    if (str === 'publisher') {
      // Handle clicked data
      if (FRONT_TYPE && !PublishingDetailSkillSTATE.includes(DB_TYPE)) {
        if (PublishingDetailSkillSTATE.length < 3) {
          setPublishingDetailSkillSTATE((prev) => [...prev, DB_TYPE]);
        } else {
          alert('3개까지만 선택이 가능합니다.');
        }
        return;
      }

      // Unclick DB_TYPE
      if (PublishingDetailSkillSTATE.includes(DB_TYPE)) {
        setPublishingDetailSkillSTATE((prev) => prev.filter((type) => type !== DB_TYPE));
      }
    }

    // ================= Designer =================

    if (str === 'designerRole') {
      // Handle clicked data
      if (FRONT_TYPE && !DesignDetailRolesSTATE.includes(DB_TYPE)) {
        if (DesignDetailRolesSTATE.length < 3) {
          setDesignDetailRolesSTATE((prev) => [...prev, DB_TYPE]);
        } else {
          alert('3개까지만 선택이 가능합니다.');
        }
        return;
      }

      // Unclick DB_TYPE
      if (DesignDetailRolesSTATE.includes(DB_TYPE)) {
        setDesignDetailRolesSTATE((prev) => prev.filter((type) => type !== DB_TYPE));
      }
    }

    if (str === 'designSkill') {
      // Handle clicked data
      if (FRONT_TYPE && !DesignDetailSkillsSTATE.includes(DB_TYPE)) {
        if (DesignDetailSkillsSTATE.length < 3) {
          setDesignDetailSkillsSTATE((prev) => [...prev, DB_TYPE]);
        } else {
          alert('3개까지만 선택이 가능합니다.');
        }
        return;
      }

      // Unclick DB_TYPE
      if (DesignDetailSkillsSTATE.includes(DB_TYPE)) {
        setDesignDetailSkillsSTATE((prev) => prev.filter((type) => type !== DB_TYPE));
      }
    }

    // ================= Project Manager =================

    if (str === 'planner') {
      // Handle clicked data
      if (FRONT_TYPE && !PlannerDetailSkillSTATE.includes(DB_TYPE)) {
        if (PlannerDetailSkillSTATE.length < 3) {
          setPlannerDetailSkillSTATE((prev) => [...prev, DB_TYPE]);
        } else {
          alert('3개까지만 선택이 가능합니다.');
        }
        return;
      }

      // Unclick DB_TYPE
      if (PlannerDetailSkillSTATE.includes(DB_TYPE)) {
        setPlannerDetailSkillSTATE((prev) => prev.filter((type) => type !== DB_TYPE));
      }
    }

    // ================= Project Manager =================

    if (str === 'etc') {
      // Handle clicked data
      if (FRONT_TYPE && !ETCDetailRoleSTATE.includes(DB_TYPE)) {
        if (ETCDetailRoleSTATE.length < 3) {
          setETCDetailRoleSTATE((prev) => [...prev, DB_TYPE]);
        } else {
          alert('3개까지만 선택이 가능합니다.');
        }
        return;
      }

      // Unclick DB_TYPE
      if (ETCDetailRoleSTATE.includes(DB_TYPE)) {
        setETCDetailRoleSTATE((prev) => prev.filter((type) => type !== DB_TYPE));
      }
    }
  };

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

  const submitDeveloper = (e) => {
    e.preventDefault();

    const newData = {
      focusSkills,
      roles,
      javaDetailSkills: JavaDetailSkillSTATE,
      mobileAppDetailSkills: MobileAppDetailSkillSTATE,
      phpOrAspDetailSkills: PhpOrAspDetailSkillSTATE,
      dotNetDetailSkills: DotNetDetailSkillSTATE,
      javaScriptDetailSkills: JavaScriptDetailSkillSTATE,
      cDetailSkills: CDetailSkillSTATE,
      dbDetailSkills: DBDetailSkillSTATE,
      etcSkill,
    };

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

  const submitPublisher = (e) => {
    e.preventDefault();

    const newData = {
      publishingDetailSkills: PublishingDetailSkillSTATE,
      etcSkill: publishingEtcSkill,
    };

    console.log(newData);

    axios({
      url: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/freelancer-profile/publisher',
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

  const submitDesigner = (e) => {
    e.preventDefault();

    const newData = {
      designDetailRoles: DesignDetailRolesSTATE,
      etcRole: designEtcRole,
      designDetailSkills: DesignDetailSkillsSTATE,
      etcSkill: designEtcSkill,
    };

    axios({
      url: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/freelancer-profile/designer',
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

  const submitPlanner = (e) => {
    e.preventDefault();

    const newData = {
      plannerDetailFields: PlannerDetailSkillSTATE,
      etcField: plannerEtcField,
    };

    console.log(newData);

    axios({
      url: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/freelancer-profile/planner',
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

  const submitETC = (e) => {
    e.preventDefault();

    const newData = {
      etcDetailRoles: ETCDetailRoleSTATE,
      positionEtcRole,
    };

    console.log(newData);

    axios({
      url: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/freelancer-profile/etc',
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
      <JobSkill positionKeyword={positionKeyword} setPositionKeyword={setPositionKeyword} />

      {/* =========  /freelancer-profile/developer ========= */}
      {positionKeyword === 'DEVELOPER' && (
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
          submitDeveloper={submitDeveloper}
        />
      )}

      {/* =========  /freelancer-profile/publisher ========= */}
      {positionKeyword === 'PUBLISHER' && (
        <Publisher
          PublishingDetailSkillSTATE={PublishingDetailSkillSTATE}
          publishingEtcSkill={publishingEtcSkill}
          setPublishingEtcSkill={setPublishingEtcSkill}
          handleThreeJobField={handleThreeJobField}
          submitPublisher={submitPublisher}
        />
      )}

      {/* =========  /freelancer-profile/designer ========= */}

      {positionKeyword === 'DESIGNER' && (
        <Designer
          DesignDetailRolesSTATE={DesignDetailRolesSTATE}
          DesignDetailSkillsSTATE={DesignDetailSkillsSTATE}
          designEtcRole={designEtcRole}
          setDesignEtcRole={setDesignEtcRole}
          designEtcSkill={designEtcSkill}
          setDesignEtcSkill={setDesignEtcSkill}
          handleThreeJobField={handleThreeJobField}
          submitDesigner={submitDesigner}
        />
      )}

      {/* =========  /freelancer-profile/planner ========= */}

      {positionKeyword === 'PLANNER' && (
        <ProjectManager
          PlannerDetailSkillSTATE={PlannerDetailSkillSTATE}
          plannerEtcField={plannerEtcField}
          setPlannerEtcField={setPlannerEtcField}
          handleThreeJobField={handleThreeJobField}
          submitPlanner={submitPlanner}
        />
      )}

      {/* {positionKeyword === 'CROWD_WORKER' && (
        <CrowdWorker/>
        )}
    */}

      {positionKeyword === 'ETC' && (
        <ETC
          ETCDetailRoleSTATE={ETCDetailRoleSTATE}
          positionEtcRole={positionEtcRole}
          setPositionEtcRole={setPositionEtcRole}
          handleThreeJobField={handleThreeJobField}
          submitETC={submitETC}
        />
      )}
    </>
  );
};

export default SkillLists;
