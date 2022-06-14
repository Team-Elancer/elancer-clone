// ============  PlannerDetailField 구성 ============
export const PLANNER_DETAIL_FIELD_FRONT = [
  'PM',
  'PL',
  'PMO(사업관리)',
  '시스템분석/설계',
  '웹기획',
  '앱기획',
  '컨설팅',
  '제안',
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
  '암호화폐',
];

export const PLANNER_DETAIL_FIELD_DB = [
  'PM',
  'PL',
  'PMO',
  'SYSTEM_ANALYSIS_AND_PLAN',
  'WEB_PLAN',
  'APP_PLAN',
  'CONSULTING',
  'OFFER',
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
  'CRYPTOCURRENCY',
];

/*


PUT http://localhost:8080/freelancer-profile/1/planner
Content-Type: application/json

#info
# PlannerDetailField 구성 {
#    PM("PM"),
#    PL("PL"),
#    PMO("PMO(사업관리)"),
#    SYSTEM_ANALYSIS_AND_PLAN("시스템분석/설계"),
#    WEB_PLAN("웹기획"),
#    APP_PLAN("앱기획"),
#    CONSULTING("컨설팅"),
#    OFFER("제안"),
#    SHOPPING_MALL("쇼핑몰"),
#    TRAVEL_AGENCY("여행사"),
#    FINANCE("금융"),
#    STOCK("증권"),
#    CARD("카드"),
#    INSURANCE("보험"),
#    UNIVERSITY("대학"),
#    HOSPITAL("병원"),
#    PUBLIC_OFFICE("공공기관"),
#    DISTRIBUTION("물류"),
#    ACCOUNTING("회계"),
#    PRODUCTION("제조"),
#    CONSTRUCTION("건설"),
#    CRYPTOCURRENCY("암호화폐")
# }
#

#req
{
  "plannerDetailFields": [
    "SHOPPING_MALL", "PM"
  ],
  "etcField": "etcField"
}

*/
