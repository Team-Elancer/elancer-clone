// ============  JavaDetailSkill 구성 ============
export const JAVA_DETAIL_SKILL_FRONT = [
  'Front-End',
  'Back-End',
  'Spring',
  'Xplatform',
  'Miplatform',
  'Nexacro',
  'Proframe',
  'Maven',
  'Jenkins',
  'Sencha',
  'Trustform',
  'Tuxedo',
  'Gauce',
  'Pro*C',
  'DevOn',
  'Thymeleaf',
];

export const JAVA_DETAIL_SKILL_DB = [
  'FRONT_END',
  'BACK_END',
  'SPRING',
  'XPLATFORM',
  'MIPLATFORM',
  'NEXACRO',
  'PROFRAME',
  'MAVEN',
  'JENKINS',
  'SENCHA',
  'TRUSTFORM',
  'TUXEDO',
  'GAUCE',
  'PRO_C',
  'DEVON',
  'THYMELEAF',
];

// ============  MobileAppDetailSkill 구성 ============
export const MOBILE_APP_DETAIL_SKILL_FRONT = ['Hybrid', 'Android', 'IOS(Object-C)', 'IOS(Swift)', 'WebView', 'IoT'];
export const MOBILE_APP_DETAIL_SKILL_DB = ['HYBRID', 'ANDROID', 'IOS_OBJECT_C', 'IOS_SWIFT', ' WEBVIEW', 'IOT'];

// ============  PhpOrAspDetailSkill 구성 ============
export const PHP_OR_ASP_DETAIL_SKILL_FRONT = [
  'PHP',
  'Laravel',
  'Codeigniter',
  'Symfony',
  'Zend Framework',
  'WordPress',
  'Asp',
];

export const PHP_OR_ASP_DETAIL_SKILL_DB = [
  'PHP',
  'LARAVEL',
  'CODEIGNITER',
  'SYMFONY',
  'ZEND_FRAMEWORK',
  'WORDPRESS',
  'ASP',
];

// ============  DotNetDetailSkill 구성 ============
export const DOT_NET_DETAIL_SKILL_FRONT = ['ASP.net', 'C', 'C++', 'C#', 'MFC', 'OpenGL', 'DevExpress', 'VBA'];
export const DOT_NET_DETAIL_SKILL_DB = [
  'ASP_DOT_NET',
  'C',
  'C_PLUS_PLUS',
  'C_SHOP',
  'MFC',
  'OPENGL',
  'DEVEXPRESS',
  'VBA',
];

// ============  JavaScriptDetailSkill 구성 ============
export const JAVA_SCRIPT_DETAIL_FRONT = ['node.js', 'AngularJS', 'React.js', 'Vue.js', 'jQuery', 'JavaScript'];
export const JAVA_SCRIPT_DETAIL_DB = ['NODE_JS', 'ANGULAR_JS', 'REACT', 'VUE_JS', 'JQUERY', 'JAVASCRIPT'];

// ============  CDetailSkill 구성 ============
export const C_DETAIL_FRONT = [
  'Server',
  'Unix',
  'Embedded',
  'Firmware',
  'Machine Vision',
  'Aduino',
  'Qt',
  'MetaLab',
  'LabVIEW',
];

export const C_DETAIL_DB = [
  'SERVER',
  'UNIX',
  'EMBEDDED',
  'FIRMWARE',
  'MACHINE_VISION',
  'ADUINO',
  'QT',
  'METALAB',
  'LABVIEW',
];

// ============  DBDetailSkill 구성 ============
export const DB_DETAIL_FRONT = ['Oracle', 'MSSQL', 'MySQL', 'MariaDB', 'MongoDB', 'Prostgresql', 'CUBRID', 'Tibero'];
export const DB_DETAIL_DB = ['ORACLE', 'MSSQL', 'MYSQL', 'MARIADB', 'MONGODB', 'POSTGRESQL', 'CUBRID', 'TIBERO'];

/*
PUT http://localhost:8080/freelancer-profile/5/developer
Content-Type: application/json

#info
# MobileAppDetailSkill 구성 {
#    HYBRID("Hybrid"),
#    ANDROID("Android"),
#    IOS_OBJECT_C("IOS(Object-C)"),
#    IOS_SWIFT("IOS(Swift)"),
#    WEBVIEW("WebView"),
#    IOT("IoT")
#}
#
# PhpOrAspDetailSkill 구성 {
#    PHP("PHP"),
#    LARAVEL("laravel"),
#    CODEIGNITER("Codeigniter"),
#    SYMFONY("Symfony"),
#    ZEND_FRAMEWORK("Zend Framework"),
#    WORDPRESS("WordPress"),
#    ASP("Asp")
#}
#
# DotNetDetailSkill 구성 {
#    ASP_DOT_NET("ASP.net"),
#    C("C"),
#    C_PLUS_PLUS("C++"),
#    C_SHOP("C#"),
#    MFC("MFC"),
#    OPENGL("OpenGL"),
#    DEVEXPRESS("DevExpress"),
#    VBA("VBA")
# }
#
# JavaScriptDetailSkill 구성 {
#    NODE_JS("node.js"),
#    ANGULAR_JS("AngularJS"),
#    REACT_JS("React.js"),
#    VUE_JS("Vue.js"),
#    JQUERY("jQuery"),
#    JAVASCRIPT("JavaScript")
# }
#
# CDetailSkill 구성 {
#    SERVER("Server"),
#    UNIX("Unix"),
#    EMBEDDED("Embedded"),
#    FIRMWARE("Firmware"),
#    MACHINE_VISION("Machine Vision"),
#    ADUINO("Aduino"),
#    QT("Qt"),
#    METALAB("MetaLab"),
#    LABVIEW("LabVIEW")
# }
#
# DBDetailSkill 구성 {
#    ORACLE("Oracle"),
#    MSSQL("MSSQL"),
#    MYSQL("MySQL"),
#    MARIADB("MariaDB"),
#    MONGODB("MongoDB"),
#    POSTGRESQL("Prostgresql"),
#    CUBRID("CUBRID"),
#    TIBERO("Tibero")
# }
#


#req
{
  "focusSkills": [
    "java", "spring"
  ],
  "roles": [
    "백엔드 개발자"
  ],
  "javaDetailSkills": [
    "BACK_END", "SPRING"
  ],
  "mobileAppDetailSkills": [
    "HYBRID"
  ],
  "phpOrAspDetailSkills": [
    "PHP"
  ],
  "dotNetDetailSkills": [
    "ASP_DOT_NET"
  ],
  "javaScriptDetailSkills": [
    "NODE_JS"
  ],
  "cDetailSkills": [
    "SERVER"
  ],
  "dbDetailSkills": [
    "ORACLE", "MYSQL"
  ],
  "etcSkill": "etc"
}
*/
