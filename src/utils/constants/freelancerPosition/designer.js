// ============  DesignDetailRole 구성 ============
export const DESIGN_DETAIL_ROLE_FRONT = [
  '웹디자인',
  '앱디자인',
  '출판/편집 디자인',
  '게임 디자인',
  '판촉물 디자인',
  '3D 디자인',
  '그래픽 디자인',
  '패키지 디자인',
  '아트 디렉션',
  '애니메이션',
  '로고 브랜딩',
];

export const DESIGN_DETAIL_ROLE_DB = [
  'WEB_DESIGN',
  'APP_DESIGN',
  'PUBLISH_AND_EDIT_DESIGN',
  'GAME_DESIGN',
  'FREEBIE_DESIGN',
  'THREED_DESIGN',
  'GRAPHIC_DESIGN',
  'PACKAGE_DESIGN',
  'ART_DIRECTION',
  'ANIMATION',
  'LOGO_BRANDING',
];

// ============  DesignDetailSkill 구성 ============

export const DESIGN_DETAIL_SKILL_FRONT = [
  'Afere Effect',
  'Illustrator',
  'InDesign',
  'Photoshop',
  'Sketch',
  'Zeplin',
  'Adobe XD',
  '3D Max/Maya',
  'CLIP STUDIO',
  'MediBang',
  'Flash',
];

export const DESIGN_DETAIL_SKILL_DB = [
  'AFERE_EFFECT',
  'ILLUSTRATOR',
  'INDESIGN',
  'PHOTOSHOP',
  'SKETCH',
  'ZEPLIN',
  'ADOBE_XD',
  'THREE_D_MAX_AND_MAYA',
  'CLIP_STUDIO',
  'MEDIBANG',
  'FLASH',
];

/*
  PUT http://localhost:8080/freelancer-profile/1/designer
Content-Type: application/json

#info
# DesignDetailRole 구성 {
#    WEB_DESIGN("웹디자인"),
#    APP_DESIGN("앱디자인"),
#    PUBLISH_AND_EDIT_DESIGN("출판/편집 디자인"),
#    GAME_DESIGN("게임 디자인"),
#    FREEBIE_DESIGN("판촉물 디자인"),
#    THREED_DESIGN("3D 디자인"),
#    GRAPHIC_DESIGN("그래픽 디자인"),
#    PACKAGE_DESIGN("패키지 디자인"),
#    ART_DIRECTION("아트 디렉션"),
#    ANIMATION("애니메이션"),
#    LOGO_BRANDING("로고 브랜딩")
#}
#
# DesignDetailSkill 구성 {
#    AFERE_EFFECT("Afere Effect"),
#    ILLUSTRATOR("Illustrator"),
#    INDESIGN("InDesign"),
#    PHOTOSHOP("Photoshop"),
#    SKETCH("Sketch"),
#    ZEPLIN("Zeplin"),
#    ADOBE_XD("Adobe XD"),
#    THREE_D_MAX_AND_MAYA("3D Max/Maya"),
#    CLIP_STUDIO("CLIP STUDIO"),
#    MEDIBANG("MediBang"),
#    FLASH("Flash")
#}
#


#req
{
  "designDetailRoles": [
    "WEB_DESIGN", "GRAPHIC_DESIGN", "GAME_DESIGN"
  ],
  "etcRole": "etcRole",
  "designDetailSkills": [
    "AFERE_EFFECT", "SKETCH", "INDESIGN"
  ],
  "etcSkill": "etcSkill"
}
  */
