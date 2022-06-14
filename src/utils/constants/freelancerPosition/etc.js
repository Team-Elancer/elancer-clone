// ============  EtcDetailRole 구성 ============
export const ETC_DETAIL_ROLE_FRONT = [
  'PM',
  'PL',
  '시스템분석/설계',
  'DA',
  'DBA',
  'TA',
  'AA',
  'NA',
  'PMO',
  'SE',
  'QA',
  'QC',
];

export const ETC_DETAIL_ROLE_DB = [
  'PM',
  'PL',
  'SYSTEM_ANALYSIS_AND_PLAN',
  'DA',
  'DBA',
  'TA',
  'AA',
  'NA',
  'PMO',
  'SE',
  'QA',
  'QC',
];

/*


PUT http://localhost:8080/freelancer-profile/1/etc
Content-Type: application/json

#info
# EtcDetailRole 구성 {
#    PM("PM"),
#    PL("PL"),
#    SYSTEM_ANALYSIS_AND_PLAN("시스템분석/설계"),
#    DA("DA"),
#    DBA("DBA"),
#    TA("TA"),
#    AA("AA"),
#    NA("NA"),
#    PMO("PMO"),
#    SE("SE"),
#    QA("QA"),
#    QC("QC")
#}
#

#req
{
  "etcDetailRoles": [
    "PM", "PL", "DBA"
  ],
  "positionEtcRole": "etcRole"
}

*/
