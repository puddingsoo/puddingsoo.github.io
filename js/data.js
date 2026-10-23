/*
 * 포트폴리오 콘텐츠 데이터 (최적화 버전)
 */

const TODO = '';

const PROFILE = {
  nameKo: '안수진',
  nameEn: 'Soojin An',
  role: '서비스 기획자',
  years: '5년 차',
  email: 'So2_11@naver.com',
  heroLead: '사용자 맥락을 깊이 이해하고,<br>복잡한 시스템을 명확한 흐름으로 구조화합니다.',
  heroSub: '5년 차 서비스 기획자 안수진입니다.',
  aboutTitle: '리서치로 문제를 정의하고,<br>명확한 구조로 해결합니다',
  aboutTags: ['UX 기획', 'UX 리서치', '서비스기획'],
  aboutBody: '사용자 경험 문제를 리서치로 분석하고, IA부터 QA까지 직접 주도해 실서비스로 연결합니다.',
  principles: [
    { title: '리서치로 문제의 원인을 찾습니다', body: '휴리스틱 평가·심층 인터뷰·통계 분석을 직접 설계하고 수행합니다. 추측이 아닌 분석결과와 근거로 문제를 정의하고 우선순위를 정합니다.' },
    { title: '복잡한 정책을 하나의 흐름으로 통합합니다', body: '서비스별로 달랐던 정책과 예외 케이스를 단일 사용자 플로우로 구조화합니다. 조건이 복잡할수록 흐름을 단순하게 만드는 데 집중합니다.' },
    { title: '근거를 들고 개발·디자인과 협의합니다', body: '의견 충돌이 생기면 사용자 목적과 데이터를 근거로 방향을 제안합니다. 설득보다 판단 기준을 공유하는 방식으로 협업합니다.' },
    { title: '팀이 쓸 수 있는 기준을 남깁니다', body: 'UX 라이팅 가이드북·운영 매뉴얼처럼 일관된 기준을 정립해 팀의 반복 업무를 줄이고 일하기 편한 환경을 만드는 것을 좋아합니다.' },
  ],
  closing: '문제를 마주하면 먼저 이해하려고 합니다. 복잡한 상황은 기준과 흐름으로 정리해, 사람과 팀이 조금 더 편해지도록 만드는 일을 좋아합니다. 작은 개선이 쌓여 더 나은 경험이 된다고 믿으며, 그 과정을 함께 만들어가고 싶습니다.',
};

/* 경력 타임라인 — kind별 그룹(Work / Education / Activity)으로 나눠 보여줌
 * kind: work | project | edu | activity
 * children: 회사 안에서 진행한 프로젝트 (회사 항목 아래에 묶여 표시) */
const TIMELINE = [
  {
    date: '2021.11 – 현재',
    kind: 'work',
    title: '이모션글로벌',
    meta: '서비스 기획 · 운영 · UX 리서치 · UX Writing',
    children: [
      { date: '2025.01 – 현재', kind: 'project', title: '신한 SOL페이 UX/UI 고도화 & 신규 서비스 기획', meta: '기획 PA · 단위 서비스 Lead Planner', link: 'project.html?id=cardmove' },
      { date: '2023.06 – 2024.12', kind: 'project', title: 'LG전자 WEB/오픈마켓 기획전 제작·운영', meta: '기획 PA', link: 'project.html?id=lge' },
      { date: '2022.08 – 2023.05', kind: 'project', title: '이마트24 구축 및 APP/WEB 운영', meta: '기획 PA', link: 'project.html?id=emart24' },
      { date: '2022.05 – 2022.08', kind: 'project', title: '벨리곰 NFT 프로젝트', meta: '기획 PA', link: 'project.html?id=bellygom' },
    ],
  },
  { date: '2025.08', kind: 'edu', title: '홍익대학교 서비스디자인학과 졸업', meta: '석사' },
  { date: '2021.02', kind: 'edu', title: '국립한밭대학교 시각디자인학과 졸업', meta: '학사' },
  { date: '2024.08', kind: 'activity', title: 'SQLD', meta: '자격' },
  { date: '2024.02 – 2024.10', kind: 'activity', title: '한국연구재단 참여 연구원', meta: '산학협력활동 · 디지털 휴먼 연구' },
  { date: '2021.07 – 2021.11', kind: 'activity', title: '아카데미 정글 웹 퍼블리싱 실무 워크숍', meta: '수료 · HTML · CSS' },
  { date: '2019.03 – 2019.10', kind: 'activity', title: 'London Kings Education', meta: '어학연수' },
];

const SKILLS = [
  { area: 'Service Planning', items: ['사용자 요구 분석 및 서비스 정책·기능 설계', 'IA · User Flow 설계, 예외 로직 및 운영 프로세스 기획'] },
  { area: 'UX Research & Analysis', items: ['사용자 인터뷰 · 경쟁사 분석 · 휴리스틱 평가', '설문 설계 및 통계 분석 (SPSS)'] },
  { area: 'Product Delivery & Collaboration', items: ['개발·디자인 협업, 요구사항 구체화 및 QA', 'Jira · Slack · Teams 기반 이슈 관리'] },
  { area: 'Tools', items: ['Figma · PowerPoint · Excel · SPSS · Jira · Slack · Teams'] },
];

const PAPERS = [
  { date: '2026.06', title: '정신건강 상담을 위한 AI 챗봇 상담가 페르소나 설계 전략 제안', venue: '한국디자인학회 · KCI, SCOPUS', url: 'https://aodr.org/_PR/view/?aidx=49544&bidx=4446', caseId: 'ai-persona' },
  { date: '2025.08', title: '정신건강 상담을 위한 버추얼 휴먼 페르소나 설계 전략 제안', venue: '홍익대학교 석사 학위 논문', url: 'https://drive.google.com/file/d/15yefxVXGZySGUfoo7K1Ny6FZNsFtN68d/view?usp=sharing' },
  { date: '2024.11', title: '중년의 외로움 완화를 위한 버추얼 휴먼 페르소나 설계 전략 제안', venue: '한국디자인학회 · KCI, SCOPUS', url: 'https://aodr.org/_PR/view/?aidx=42744&bidx=3874', caseId: 'midlife-persona' },
  { date: '2024.03', title: '이동적 관광약자의 무장애관광 경험 개선을 위한 스마트관광 서비스디자인 전략 연구', venue: '한국 디자인 문화 학회 · KCI', url: 'https://drive.google.com/file/d/1lIMz-WYZkOZafQ-X5MfMYdLF6Vb8yZv_/view?usp=drive_link', caseId: 'smart-tourism' },
  { date: '2023.10', title: '산모의 산후우울 관리를 위한 자가 진단과 유형 맞춤형 솔루션 서비스 제안', venue: '커뮤니케이션 디자인 학회 · KCI', url: 'https://drive.google.com/file/d/1BuTrvCUAd52-Sr1UtTvQI_uoneyBohnq/view?usp=drive_link', caseId: 'postpartum' },
];

const PROJECTS = [
  {
    id: 'cardmove',
    group: '신한 SOL페이 UX/UI 고도화 & 신규 서비스 기획',
    title: '카드이동서비스',
    showName: true, // 상단 파란 문구를 '신한 SOL페이 - 프로젝트명'으로 표시
    groupShort: '신한 SOL페이',
    headline: '흩어진 정기결제를 신한카드로,<br>한번에 이동하는 경험 설계',
    summary: '6개 청구기관의 상이한 정책을 단일 플로우로 통합하고, 100개 이상의 화면을 정의해 오픈까지 주도한 B2C 신규 서비스',
    category: 'B2C 서비스 기획',
    type: 'APP, PC/Mobile Web',
    role: '서비스 Lead Planner',
    contribution: ['일정 리딩', '정책 · IA · 화면설계', '개발·디자인 협업 및 QA'],
    team: '기획 1 · 디자인 1 · 개발 2',
    thumb: 'assets/img/cardmove-problem.jpg', coverBg: '#002188',
    tags: ['공통 플로우 설계', '선조회 방식', '100+ 화면 정의', '예외 분기'],
    sections: {
      background: [
        { type: 'text', title: '카드이동서비스란?', body: '다른 카드사로 결제 중인 정기결제를 <strong>별도의 해지나 재신청 없이 신한카드로 간편하게 변경</strong>할 수 있는 B2C 신규 서비스입니다.' },
        { type: 'list', title: '대상 서비스 (6개 청구기관)', items: ['아파트 관리비', '전기요금', '4대 사회보험료', '스쿨뱅킹', '주택임대료', '전화요금'] },
      ],
      problem: [
        { type: 'text', title: 'User', body: '타 카드사에 등록된 정기결제를 변경하려면 <strong>사용자는 카드별로 직접 해지하고 다시 등록해야 했습니다.</strong> 서비스마다 변경 방법도 달라 변경을 포기하는 경우도 많았습니다.' },
        { type: 'text', title: 'Business', body: '<strong>기존 고객의 결제를 신한카드로 전환할 방법이 없었습니다.</strong> 카드 이동을 유도할 서비스가 필요했습니다.' },
        { type: 'list', title: 'Key Challenge', items: ['금융결제원 데이터 구조 연동', '서비스별 상이한 납부 정책', '6개 서비스별 예외/노출 규칙'] },
        { type: 'text', body: '<strong>서로 다른 정책과 데이터를 하나의 사용자 Flow로 통합해야 했습니다.</strong>' },
        { type: 'figure', src: 'assets/img/cardmove-problem.jpg', caption: '카드이동서비스 진입 화면 · 신청 안내' },
      ],
      design: [
        { type: 'text', label: 'Decision Making', title: '사용자 경험을 위해 조회 방식을 바꾸다', body: '카드이동 신청 결과를 확인하는 화면에서 금융결제원 대량 데이터 수신 시 에러 우려로 <strong>개발팀은 ‘조회’ 버튼을 눌러 결과를 불러오는 방식을 제안</strong>했습니다. 하지만 결과 확인이 목적인 사용자에게 <strong>별도의 조회 Action을 요구하는 것은 불필요한 단계라고 판단</strong>했습니다.' },
        { type: 'compare', head: ['', '개발팀 의견', '내가 제안한 방향'], rows: [['조회 방식', '에러를 방지하기 위해 조회 버튼을 눌러 결과를 가져오자', '진입 즉시 조회되는 흐름이 사용자의 목적과 더 자연스럽다'], ['결과', '조회 버튼 클릭 필요', '진입 즉시 결과 노출']] },
        { type: 'text', body: '<strong>조회 기간을 최대 한 달로 제한해 데이터 부담을 줄이고, 진입 즉시 결과를 확인할 수 있는 선조회 방식을 유지했습니다.</strong>' },
        { type: 'figure', src: 'assets/img/cardmove-decision.jpg', caption: '결과 확인을 위한 불필요한 Action 제거' },
        { type: 'text', label: 'Screen Design', title: '6개 서비스를 하나의 공통 플로우로 통합', body: '아파트 관리비, 전기요금, 4대 사회보험료 등 <strong>6개 서비스를 하나의 플로우 구조로 설계</strong>했습니다. 서비스별로 노출 정보와 예외 케이스가 달랐기 때문에, 6개 서비스가 동일 플로우를 공유하되 <strong>각 서비스별 노출 정보와 예외 케이스를 단계마다 명확히 분기</strong>했습니다.' },
        { type: 'cards', items: [{ title: '① 공통 플로우', body: '6개 서비스 동일' }, { title: '② 서비스별 정책 분기', body: '납부정보 · 예외 케이스' }, { title: '③ 상태별 결과 분기', body: '완료 · 처리중 · 실패' }] },
        { type: 'steps', title: 'Service Flow', items: ['이용안내', '약관 동의', '납부현황 조회', '변경카드 선택', '서비스 이용안내', '서비스별 약관 동의', '본인인증', '신청완료'] },
        { type: 'figure', src: 'assets/img/cardmove-flow.jpg', caption: '① 공통 플로우 ② 서비스별 정책 분기 ③ 상태별 결과 분기' },
      ],
      result: [
        { type: 'text', title: '신규 서비스의 구조 설계부터 오픈까지 주도', body: '금융결제원 요건을 사용자 경험 관점에서 해석하고, 6개 서비스의 복잡한 분기를 하나의 Flow로 구조화했습니다. <strong>IA부터 화면설계, QA까지 전 과정을 주도하며 개발·디자인과 협업해 실제 서비스 오픈까지 연결했습니다.</strong>' },
        { type: 'steps', items: ['IA 설계', 'User Flow 설계', '화면설계', 'QA', '개발 협업', '실제 오픈'] },
        { type: 'stats', items: [{ value: '6개', label: '서비스 유형' }, { value: '100개+', label: '화면 정의' }, { value: 'IA → 오픈', label: 'IA · User Flow · 화면설계 · QA · 오픈' }] },
        { type: 'figure', src: 'assets/img/cardmove-deliver.jpg', caption: 'IA · 상세설계서' },
      ],
    },
  },

  {
    id: 'loan',
    group: '신한 SOL페이 UX/UI 고도화 & 신규 서비스 기획',
    title: '중금리 생활안정대출',
    showName: true, // 상단 파란 문구를 '신한 SOL페이 - 프로젝트명'으로 표시
    groupShort: '신한 SOL페이',
    headline: '신규 대출 상품의<br>신청 프로세스 설계 및 서비스 출시',
    summary: '대출 신청 전 과정의 프로세스와 상세 정책을 설계하고, 당일 재진입 시 반복 인증을 생략하도록 개선한 신규 대출 서비스',
    category: 'B2C 서비스 기획',
    type: 'APP, PC/Mobile Web',
    role: '서비스 Lead Planner',
    contribution: ['일정 리딩', '정책 · IA · 화면설계', '개발·디자인 협업 및 QA'],
    team: '기획 1 · 디자인 1 · 개발 2',
    thumb: 'assets/img/loan-screens.jpg', coverBg: '#000000',
    tags: ['공공마이데이터', '토큰 재활용', '본인인증 분기', '예외 로직'],
    sections: {
      background: [
        { type: 'text', title: 'Service Context', body: '중금리 생활안정대출, 사잇돌2, 사업자 마이너스대출의 UI/UX 상세 설계를 담당했습니다. 대출 신청 전 과정의 <strong>프로세스와 상세 정책을 설계</strong>하고, <strong>디자인·개발 협업을 통해 서비스 출시까지 완료</strong>했습니다.' },
      ],
      problem: [
        { type: 'list', title: 'Key Challenge', items: ['<strong>전사 대출에 확장될 공통 프로세스 선행 설계</strong><br>전사 대출 상품에 공통 확장될 공공마이데이터 동의/조회 절차를 중금리 대출에 최초 설계', '<strong>유관 부서 협업 및 예외 로직 설계</strong><br>현업(법무) 요구사항 반영 및 디자인·개발 파트 간 커뮤니케이션 주도'] },
      ],
      design: [
        { type: 'text', label: 'Process Architecture', title: '대출 신청부터 완료까지 전체 프로세스 설계', body: '' },
        { type: 'cards', ratio: '9 / 16', fit: 'contain', bg: '#000', items: [
          { img: 'assets/img/loan-arch-1.jpg', pos: 'center top', title: '① 전 과정 프로세스 수립', body: '한도 조회부터 소득정보 수집, 비대면 거래 인증, 전자서명까지 대출 신청 전체 흐름 설계' },
          { img: 'assets/img/loan-arch-2.jpg', pos: 'center top', title: '② 로그인/비로그인 본인인증 분기', body: '로그인 여부에 따른 회원정보 자동 입력 및 본인인증(SOL페이/KCB) 분기 설계' },
          { img: 'assets/img/loan-arch-3.jpg', pos: 'center top', title: '③ 한도 거절 대응 & 이탈 방지', body: '이용 불가 시 안내 팝업 노출 및 대체 상품(카드론/대출비교) 연결 설계' },
        ] },
        { type: 'steps', title: '대출 신청 프로세스', items: ['대출 신청 진입', '로그인/본인확인', '소득정보 수집 및 금소법/약관 동의', '신청 정보 입력', '비대면 거래인증 (OCR/1원인증)', '전자서명 및 신청 완료'] },
        { type: 'text', body: '<strong>로그인 여부에 따른 진입 분기부터 한도 거절 대응까지 대출 신청 전체 프로세스를 설계했습니다.</strong>' },
        { type: 'text', label: 'Process Improvement', title: '전사 대출 공통 공공마이데이터 프로세스 선행 설계', body: '신한카드 대출 상품에 공통 적용될 공공마이데이터 동의·조회 절차를 중금리 대출에 처음 설계했습니다.' },
        { type: 'figure', src: 'assets/img/loan-tobe.jpg', caption: 'AS IS / TO BE — 당일 재진입 시 공마데 프로세스 Skip' },
        { type: 'compare', head: ['', 'AS IS', 'TO BE'], rows: [
          ['인증 절차', '대출에 다시 진입하거나 한도를 재조회할 때마다 공공마이데이터 동의와 전자서명을 반복', '계정계 토큰을 재사용하도록 정책을 설계해, 동일 거래에서 당일 재진입 시 동의와 전자서명 생략'],
          ['예외 처리', '—', '상품·사업자 번호 변경 케이스에 대한 예외 로직 수립'],
          ['결과', '전자서명 매회 필수 → 고객 이탈 유발', '당일 재진입 시 전자서명 Skip → 대출 조회 경험 개선'],
        ] },
        { type: 'text', body: '<strong>당일 재진입 시 반복 인증을 생략하도록 설계해, 고객의 대출 조회 부담을 줄였습니다.</strong>' },
      ],
      result: [
        { type: 'text', body: '<strong>금융 규제와 정책을 반영해 대출 신청 전체 플로우를 설계하고 서비스를 오픈했습니다.</strong> 전사 대출에 공통으로 확장될 공공마이데이터 프로세스를 먼저 설계했고, 당일 재진입 시 반복 인증을 생략해 고객의 대출 조회 부담을 줄였습니다.' },
      ],
    },
  },

  {
    id: 'databada',
    group: '신한 SOL페이 UX/UI 고도화 & 신규 서비스 기획',
    title: '데이터바다 어드민',
    showName: true, // 상단 파란 문구를 '신한 SOL페이 - 프로젝트명'으로 표시
    groupShort: '신한 SOL페이',
    headline: '계약 업무 흐름에 맞춘<br>어드민 프로세스 재설계',
    summary: '분리되어 있던 계약·정산·상품 등록을 하나의 단계별 프로세스로 통합하고, 실적 현황·예상 실적 조회 기능을 신규 기획한 B2B 어드민',
    category: 'B2B 어드민 기획',
    type: 'Web Admin',
    role: '서비스 Lead Planner',
    contribution: ['일정 리딩', '정책 · IA · 화면설계', '개발·디자인 협업 및 QA'],
    team: '기획 1 · 디자인 1 · 개발 2',
    thumb: 'assets/img/admin-dash-1.jpg',
    // 상세 페이지 상단 이미지를 브라우저 목업으로 (메인 카드와 같은 화면, 배경만 남색)
    cover: { type: 'browser', src: 'assets/img/mock-databada.png', bg: '#002188', caption: 'DataBada 서비스 화면 · 어드민은 내부 시스템으로 아래 설계 산출물로 대체' },
    tags: ['프로세스 통합', '권한 매트릭스', '예외 정책', '실적 대시보드'],
    sections: {
      background: [
        { type: 'text', body: 'DataBada(B2B 데이터 거래 마켓플레이스)의 계약·정산 어드민을 <strong>실무자 업무 흐름에 맞춰 개선</strong>하고, 실시간 <strong>실적 현황 확인 메뉴</strong>를 신규 기획했습니다.' },
      ],
      problem: [
        { type: 'text', title: 'Problem', body: '' },
        { type: 'cards', cols: 2, items: [
          { title: '① 프로세스 파편화', body: '계약 등록 후 정산 정보와 상품 정보를 각각 다른 메뉴에서 추가로 등록해야 했습니다.' },
          { title: '② 수기 입력 및 계산 오류', body: '부가세와 공급가액을 직접 계산하고 달러 환율을 수기로 입력해 데이터 오류가 발생했습니다.' },
          { title: '③ 불명확한 권한 및 예외 분기', body: '담당자와 계약 상태에 따른 접근 권한 및 상태별 처리 기준이 명확하지 않았습니다.' },
          { title: '④ 실적 관리 및 보고의 한계', body: '어드민에서 실적을 조회할 수 없어 엑셀로 수기 집계해 보고하는 불편함이 컸습니다.' },
        ] },
        { type: 'text', title: 'Key Challenge', body: '' },
        { type: 'cards', items: [
          { title: '① 계약·정산·상품 등록 프로세스 통합', body: '분리되어 있던 계약·정산·상품 등록을 하나의 단계별 프로세스로 통합' },
          { title: '② 실적 현황 및 예상 실적 조회 기능 기획', body: '엑셀로 별도 집계하던 실적을 어드민에서 확인하고, 향후 예상 실적까지 조회할 수 있도록 기획' },
        ] },
        { type: 'figure', src: 'assets/img/admin-spec.jpg', caption: '상세설계서' },
      ],
      design: [
        { type: 'text', label: 'Process Redesign', title: '실무 흐름에 맞춘 계약 등록 프로세스 재설계', body: '' },
        { type: 'compare', head: ['', 'AS IS', 'TO BE'], rows: [
          ['등록 절차', '계약 등록 후 정산·상품 정보를 별도로 입력', '분리되어 있던 등록 절차를 <strong>[계약 정보] → [정산 정보] → [상품 선택]</strong> 순서로 통합'],
          ['수정·재기안', '등록·수정·재기안마다 처리 기준이 달라 혼선', '수정·재기안 시에도 <strong>동일한 탭 구성과 유효성 검증 규칙</strong>을 적용하도록 정책 정리'],
        ] },
        { type: 'figure', src: 'assets/img/admin-oneflow.jpg', caption: '[TO-BE] 계약·정산·상품 통합 등록 및 재기안 플로우' },
        { type: 'text', label: 'Policy & Logic', title: '계약 상태와 사용자 권한에 따른 예외 정책 체계화', body: '<strong>예외 정책과 상태 변경 이력을 명확히 정의해 입력 오류를 줄이고, 변경 내역을 확인할 수 있도록 설계했습니다.</strong>' },
        { type: 'cards', layout: 'stack', items: [
          { img: 'assets/img/admin-policy-1.jpg', title: '① 사용자 권한 및 상태별 버튼 제어 정책', body: '문서 상태, ID 부여 기준, 권한별 수정 가능 여부를 정리해 상태별 제어 기준표를 작성했습니다. 상황별 버튼 노출 기준을 정의해 실무자의 오입력을 방지하고, 개발 시 기준을 명확히 전달하도록 했습니다.' },
          { img: 'assets/img/admin-policy-2.jpg', title: '② 문서 상태 변경 이력 조회 탭 설계', body: '계약 생성·수정·결재·반려 이력과 결재 코멘트를 시점별로 확인할 수 있는 전용 탭을 설계했습니다.' },
        ] },
        { type: 'text', label: 'New Feature', title: '계약 데이터 기반 실적 조회·예측 기능 설계', body: '엑셀로 실적을 별도 집계하던 업무를 개선하기 위해, <strong>어드민에서 실적 현황과 예상 매출을 조회할 수 있는 대시보드를 설계</strong>했습니다.' },
        { type: 'cards', layout: 'stack', items: [
          { img: 'assets/img/admin-dash-1.jpg', title: '① 실적 현황 조회 (실적현황 탭)', body: '계약 데이터와 연동되어 별도 엑셀 가공 없이 누적/월별 판매 금액 및 영업 수익 현황을 실시간으로 한눈에 파악할 수 있도록 구현했습니다.' },
          { img: 'assets/img/admin-dash-2.jpg', title: '② 예상 실적 조회 (실적예상 탭)', body: '전체 계약 진행 데이터를 바탕으로 연도별·월별 예상 판매 금액과 영업 수익을 자동으로 산출하여, 별도 가공 없이 즉시 보고에 활용할 수 있도록 구현했습니다.' },
        ] },
      ],
      result: [
        { type: 'text', body: '분리되어 있던 계약·정산·상품 등록을 <strong>하나의 단계별 프로세스로 통합</strong>하고, 상태·권한별 예외 정책과 변경 이력을 정의해 <strong>입력 오류를 줄였습니다.</strong> 엑셀로 집계하던 실적은 <strong>어드민에서 현황과 예상 실적까지 바로 조회</strong>할 수 있게 했습니다.' },
      ],
    },
  },

  {
    id: 'solpay-main',
    group: '신한 SOL페이 UX/UI 고도화 & 신규 서비스 기획',
    title: '신한 SOL페이 메인 화면 개선',
    showName: true, // 상단 파란 문구를 '신한 SOL페이 - 프로젝트명'으로 표시
    groupShort: '신한 SOL페이',
    shortName: '메인 화면 개선',
    headline: '메인 화면을 카드 발급을 위한<br>정보 탐색의 출발점으로 재설계',
    summary: '자사·타사 메인 화면 분석과 구조 테스트를 바탕으로, 카드 탐색 구조를 재구성하고 소비 패턴 기반으로 카드를 분류한 메인 화면 개선',
    category: '서비스 개선',
    type: 'APP, PC/Mobile Web',
    role: '서비스 Lead Planner',
    contribution: ['일정 리딩', '리서치 (60%)', 'IA · 화면설계', '개발·디자인 협업 및 QA'],
    team: '기획 1 · 디자인 1 · 개발 2',
    thumb: 'assets/img/main-hero.jpg', coverBg: '#002188',
    tags: ['메인 화면', '카드 탐색 구조', '구조 테스트', 'UX 라이팅'],
    sectionLabels: { research: { label: 'UX 전략', en: 'UX Strategy' }, result: { label: '결과', en: 'What Changed' } },
    sections: {
      problem: [
        { type: 'text', title: '사용자 흐름 관점에서 발견된 핵심 UX 문제', body: '기존 메인 화면은 <strong>카드 정보 노출이 부족해 카드의 혜택이나 상태를 한눈에 확인하기 어려운 구조</strong>였습니다. 카드 확인을 위해 여러 화면을 이동해야 했고, 메인 화면이 카드 서비스의 시작점 역할을 충분히 수행하지 못하고 있었습니다. 카드 발급률 확대를 목표로 하는 상황에서, 이러한 구조는 사용성과 성과 측면 모두에서 개선이 필요했습니다.' },
      ],
      research: [
        { type: 'text', title: '리서치를 통한 핵심 개선 전략 도출', body: '자사·타사 메인 화면을 비교 분석하여 카드 발급 유도 요소와 콘텐츠 구조를 도출하고, <strong>탐색성과 정보 전달력을 높일 수 있는 최적의 카드 영역 구조를 설계</strong>했습니다.' },
        { type: 'text', title: '자사와 타사 6개의 메인 화면 분석', body: '영역별, 카드 발급 유도 전략 등으로 나누어 각 카드사의 전략과 특징을 분석하여 개선 인사이트를 도출하였습니다.' },
        { type: 'text', body: '신한카드의 메인화면은 <strong>카드에 관련된 영역이 타사 대비 적은 편</strong>이며, 혜택이나 카드 정보에 대한 제공 또한 많지 않습니다. 제휴, 라이프 프로모션/하단의 명세서, 이용내역, 즉시결제 등 기존 고객의 전반적인 금융 관리 서비스에 초점이 맞춰진 정보가 많습니다.' },
        { type: 'figure', src: 'assets/img/main-research-table.jpg', caption: '자사, 타사 메인 화면 분석 결과' },
        { type: 'details', summary: '01 메인영역', blocks: [
          { type: 'text', body: '신한카드 메인화면 내 배너의 경우 상단에 메인 배너 영역 없이 카드 플레이트가 바로 노출, <strong>카드와 직접적인 관련이 없는 라이프 스타일, 제휴 프로모션 배너의 비중이 높은 것</strong>이 타사와의 차이점입니다. (카드 관련 배너는 카드 서브 메인만 노출중)' },
          { type: 'figure', src: 'assets/img/main-research-banner.jpg', caption: '메인영역 — 신한·삼성·현대·국민·롯데·하나·농협카드' },
        ] },
        { type: 'details', summary: '02 카드영역', blocks: [
          { type: 'text', body: '신한카드 메인화면 내에는 <strong>카드 서브 메인으로 바로 이동 가능한 진입점이 없습니다.</strong> 진입점이 있는 경우, 전체 메뉴를 거치지 않아 더 빠른 탐색 가능하고 전환율을 향상시킵니다.' },
          { type: 'figure', src: 'assets/img/main-research-cardarea.jpg', caption: '카드영역 — 서브 메인 진입점 비교' },
        ] },
        { type: 'details', summary: '03 노출카드 분류와 정보', blocks: [
          { type: 'text', body: '메인화면에 노출되는 카드 플레이트의 분류 방식과 보여주는 정보를 정리합니다. 신한카드의 경우 <strong>혜택 중심이 아닌 고객 관심 중심의 카드를 혜택과 정보 없이 카드명만 노출</strong>하고 있습니다.' },
          { type: 'figure', src: 'assets/img/main-research-cardinfo.jpg', caption: '노출카드 분류와 정보' },
        ] },
        { type: 'details', summary: '04 카드 찾기 노출 유무', blocks: [
          { type: 'text', body: '데이터 기반 개인화 서비스는 아니지만 직접 혜택을 선택하여 카드를 찾을 수 있습니다.(혜택별 카드 분류를 생략할 수 있는 장치로 볼 수 있음) 신규 고객 대상으로는 메인에서 바로 노출하는 것이 유리할 수 있겠으나 <strong>신한카드의 경우, 메인에 카드 찾기 기능을 제공하지 않고 있습니다.</strong>' },
          { type: 'figure', src: 'assets/img/main-research-finder.jpg', caption: '카드 찾기 노출 유무' },
        ] },
      ],
      design: [
        { type: 'text', label: '핵심 개선 전략 1', title: '상단 영역을 카드 탐색의 진입 허브로 재구성', body: '메인 상단에 카드 관련 핵심 배너를 집중 배치하여 사용자가 <strong>서비스 진입 직후 카드 상품을 인지</strong>하고 <strong>자연스럽게 탐색·발급 흐름으로 이어질 수 있도록 설계</strong>했습니다.' },
        { type: 'figure', src: 'assets/img/main-banner.jpg', caption: '상단 영역 배너 구성' },
        { type: 'text', label: '핵심 개선 전략 2', title: '카드 탐색 흐름을 고려한 카드 영역 구조 개선', body: '<strong>사용자의 소비 패턴을 기준으로 카드 카테고리를 재구성</strong>하여 다양한 카드가 목적에 맞게 노출되도록 설계했습니다. 또한 <strong>UX 라이팅을 활용해 각 카드의 핵심 혜택이 한눈에 인지되도록 강화</strong>했습니다.' },
        { type: 'figure', src: 'assets/img/main-cards.jpg', caption: '자사, 타사 메인 화면 분석 결과' },
        { type: 'text', title: '정보 탐색 방식을 고려한 구조 테스트', body: '메인 화면 진입 시 정보 탐색 방식의 차이를 고려해 <strong>‘몰입형’과 ‘컴팩트형’ 두 가지 구조 컨셉을 설계</strong>했습니다. 각 구조 안에서 정보 인지 속도와 탐색 효율을 비교·검증한 뒤, <strong>메인 화면의 역할에 가장 적합한 구조를 최종안으로 도출</strong>했습니다.' },
        { type: 'figure', src: 'assets/img/main-structure.jpg', caption: '구조 테스트' },
      ],
      result: [
        { type: 'text', title: '메인 화면을 카드 발급을 위한 정보 탐색의 출발점으로 재설계', body: '구조 테스트 결과를 반영해, <strong>메인 화면에서 카드 정보를 더 빠르게 탐색하고 발급으로 이어질 수 있도록 개선</strong>했습니다.' },
        { type: 'list', items: ['메인 진입과 동시에 <strong>카드 혜택을 인지할 수 있도록 화면 흐름을 재구성</strong>했습니다.', '카드 목록을 소비 패턴으로 나누어 <strong>사용자가 자신의 목적에 맞는 카드를 바로 찾을 수 있도록 변경</strong>했습니다.'] },
        { type: 'cards', layout: 'row', ratio: '4 / 3', fit: 'contain', bg: '#eef1f8', items: [
          { img: 'assets/img/main-after-1.jpg', pos: 'center center', title: '메인 영역 | 메인 배너', body: '카드·이벤트 정보를 상단에 집중 배치해 메인 진입 시 카드 탐색을 유도' },
          { img: 'assets/img/main-after-2.jpg', pos: 'center center', title: '카드 영역', body: '소비 패턴 기준으로 카드 카테고리를 재구성해 탐색 효율과 혜택 인지 강화. 뱃지를 활용해 카드 특장점과 최신 정보 직관적으로 전달' },
          { img: 'assets/img/main-after-3.jpg', pos: 'center center', title: '앱 설치 유도 배너', body: '앱 내 서비스로의 진입 유도 역할. 친근한 문장으로 클릭 전환 유도' },
        ] },
        { type: 'figure', src: 'assets/img/main-after.jpg', caption: '개선된 메인 화면' },
      ],
    },
  },

  {
    id: 'ux-writing',
    group: '신한 SOL페이 UX/UI 고도화 & 신규 서비스 기획',
    title: 'UX Writing 가이드 및 용어 체계 구축',
    showName: true, // 상단 파란 문구를 '신한 SOL페이 - 프로젝트명'으로 표시
    groupShort: '신한 SOL페이',
    shortName: 'UX Writing',
    headline: '필요한 순간, 바로 참고하는<br>UX 라이팅 가이드북 및 단어장 개발',
    summary: '코어밸류와 보이스톤을 기준으로 UX 라이팅 가이드북을 구축하고, 실무에서 즉시 활용할 수 있도록 단어 분류 체계와 UX 라이팅 단어장으로 구체화',
    category: '가이드 구축',
    type: 'UX Writing Guide',
    role: '서비스 Lead Planner',
    contribution: ['리서치', '가이드북', 'UX 라이팅 단어장'],
    team: '기획 1 (단독 수행)',
    thumb: 'assets/img/writing-guidebook.jpg', coverBg: '#c2d0ff',
    tags: ['UX 라이팅', '심층 인터뷰', '코어밸류·페르소나', '단어장'],
    sectionLabels: { research: { label: 'UX 전략', en: 'UX Strategy' }, design: { label: '기준 정립', en: 'Core Value & Persona' }, result: { label: '결과', en: 'What Changed' } },
    sections: {
      problem: [
        { type: 'text', title: '신한 SOL페이 UX 라이팅, 왜 정리가 필요할까?', body: '서비스 전반에서 UX 라이팅 기준이 일관되지 않아 <strong>화면과 기능마다 표현 방식과 용어가 다르게 사용</strong>되고 있었습니다. 이로 인해 동일한 행동임에도 사용자가 문구를 해석해야 하는 상황이 반복되었습니다. 금융 서비스 특성상 명확한 이해가 중요한 만큼, <strong>용어와 문구를 사용자 관점에서 정리하고 일관된 기준을 마련할 필요</strong>가 있었습니다.' },
        { type: 'text', body: '신한 SOL페이의 UX 라이팅은 여러 실무자가 함께 진행하고 있지만, 표현의 일관성, 용어 정리, 톤앤매너 적용에 어려움이 있었습니다. 이에 따라 UX 라이팅 가이드를 정리하고, 실무에서 바로 활용할 수 있는 단어장을 구축했습니다.' },
        { type: 'text', title: 'Process', body: '사용자·실무 맥락 이해 → 기준 정립 → 적용 가능한 규칙화 → 실무 도구화' },
        { type: 'cards', items: [
          { title: '1 사용자 조사 및 리서치', body: '현황 파악과 개선 방향 탐색을 위한 리서치 진행<br>이해관계자 심층 인터뷰, 자사·타사 라이팅 비교 분석' },
          { title: '2 코어밸류', body: 'UX 라이팅의 기준이 되는 핵심 가치 설정<br>핵심 키워드 정리, 코어밸류 도출' },
          { title: '3 페르소나', body: '일관된 톤을 위한 페르소나 정의<br>보이스톤 도출, 구체적인 페르소나 도출' },
          { title: '4 UX 라이팅 가이드', body: '실질적인 작성 원칙과 적용 규칙 수립<br>보이스톤에 따른 원칙 설정, 상황별 적용 가능한 규칙 설정, 가이드북 제작' },
          { title: '5 UX 라이팅 단어장', body: '통일성과 실무 활용성을 높이기 위한 도구 제작<br>단어 데이터 확보, TO BE 단어 작성, UX 라이팅 단어장' },
        ] },
      ],
      research: [
        { type: 'text', title: 'UX 라이팅 현황 파악 및 개선 방향 도출을 위한 심층 인터뷰', body: 'UX 라이팅의 현황과 실무 과정에서 발생하는 문제를 파악하기 위해 실무자 심층 인터뷰를 진행하고, <strong>이를 바탕으로 페인포인트와 개선 방향을 도출</strong>하였습니다.' },
        { type: 'list', items: ['<strong>참여자</strong> 기획자 5명, 디자이너 2명', '<strong>방식</strong> 1:1 심층 인터뷰 (약 20분)'] },
        { type: 'cards', cols: 2, ratio: 'auto', fit: 'contain', items: [
          { img: 'assets/img/writing-interview-1.jpg', title: '신한카드 UX라이팅에 대한 인식 · 가이드 인식 및 활용' },
          { img: 'assets/img/writing-interview-2.jpg', title: 'UX라이팅 업무 과정의 Pain Point · 우려와 기대효과' },
        ] },
        { type: 'cards', items: [
          { title: 'UX 라이팅 작업 시 Pain Point', points: ['일관성 부족', '문서 접근 어려움', '문구 작성의 시간 소요', '커뮤니케이션 이슈'] },
          { title: 'UX 라이팅 가이드 개선 방향성', points: [['접근성 개선', '탐색성 높은 UI 적용'], ['실무 적용 중심 구성', '상황별·기능별 가이드 세분화, 화면 위치별 문장 스타일 가이드 제공, 실제 예시 중심 구성']] },
          { title: 'UX 라이팅 단어장 개발 방향성', points: ['사용자 친화적 인터페이스 제공', 'UX 라이팅 가이드와 연계', '단어장 분류 및 의미 세분화'] },
        ] },
        { type: 'text', body: '<strong>인터뷰 결과 UX 라이팅의 문제는 공통 기준과 실무 도구의 부재에서 비롯되고 있었습니다.</strong>' },
      ],
      design: [
        { type: 'text', title: 'UX 라이팅의 기준이 되는 코어밸류와 페르소나 도출', body: '이해관계자 인터뷰와 브랜드 분석을 통해 <strong>UX 라이팅의 기준이 되는 코어밸류를 정의</strong>하고, <strong>실무자가 일관된 톤으로 활용할 수 있도록 보이스톤과 페르소나를 수립</strong>했습니다.' },
        { type: 'cards', cols: 3, items: [
          { title: '고객 중심', body: '누구나 이해하기 쉬운 언어를 사용합니다' },
          { title: '커뮤니케이션', body: '명확하고 직관적으로 소통합니다' },
          { title: '신뢰와 편안함', body: '고객을 이해하며 신뢰를 쌓습니다' },
        ] },
        { type: 'figure', src: 'assets/img/writing-persona.jpg', caption: '페르소나 — 똑똑하고 다정한 금융 도우미' },
      ],
      result: [
        { type: 'text', title: '필요한 순간, 바로 참고하는 UX 라이팅 가이드북 및 단어장 개발', body: '코어밸류와 보이스톤을 기준으로 <strong>UX 라이팅의 판단 원칙과 상황별 규칙을 정리한 가이드북</strong>을 구축했습니다. 그 기준을 실무에서 즉시 활용할 수 있도록 단어 분류 체계와 <strong>UX 라이팅 단어장</strong>으로 구체화했습니다.' },
        { type: 'cards', layout: 'stack', items: [
          { img: 'assets/img/writing-guidebook.jpg', title: 'UX 라이팅 가이드북' },
          { img: 'assets/img/writing-wordbook.jpg', title: 'UX 라이팅 단어장' },
        ] },
        { type: 'text', body: '<strong>일관된 UX 라이팅 기준을 통해 실무자는 더 빠르게 결정하고, 사용자는 더 쉽게 이해하는 경험을 만들었습니다.</strong>' },
      ],
    },
  },

  {
    id: 'emart24',
    group: '이마트24 APP/WEB 운영',
    title: '이마트24 운영 프로세스',
    headline: '오픈 이후 서비스 안정화와<br>지속 가능한 운영 체계 구축',
    summary: 'Play to Earn과 커머스를 결합한 이마트24 APP/WEB의 오픈과 상시 운영을 맡아, 운영 데이터 기준·이슈 대응 프로세스·문서화 체계를 구축한 운영 프로젝트',
    category: '운영 프로세스 기획',
    period: '2022.08 – 2023.05',
    type: 'APP, PC/Mobile Web',
    role: '기획 PA',
    contribution: ['이벤트 기획 및 상시 운영 (70%)', '데이터/쿠폰 관리 및 이슈 대응 (70%)', '어드민 매뉴얼 및 운영 프로세스 표준화 (50%)'],
    team: '기획 3 · 디자인 2 · 개발 3',
    thumb: 'assets/img/emart-hero.jpg', coverBg: '#141323',
    // 운영 프로젝트라 화면설계 대신 슬라이드 표현(운영 전략)으로 표시
    sectionLabels: { design: { label: '운영 전략', en: 'Operation Strategy' } },
    tags: ['운영 프로세스', '데이터 교차검증', 'QA 시나리오', '온보딩 매뉴얼'],
    sections: {
      background: [
        { type: 'text', title: 'Overview', body: 'Play to Earn과 커머스를 결합한 이마트24 APP/WEB의 <strong>서비스 오픈 및 상시 운영</strong>을 담당했습니다. 오픈 전 기능 검수와 테스트를 거쳐, 오픈 후에는 이벤트 기획·운영과 상품·쿠폰·직영점 데이터를 관리했습니다. <strong>CS 기반 이슈 분석과 개발 협업 체계를 정립</strong>하여 서비스 안정성과 실무 운영 효율을 강화했습니다.' },
        { type: 'text', title: '담당 범위', body: '' },
        { type: 'cards', cols: 3, items: [
          { title: '01 서비스 구축', body: '화면 설계' },
          { title: '02 서비스 오픈', body: '기능 검수 및 시나리오 테스트, 통합 테스트' },
          { title: '03 서비스 상시 운영', body: '상품·쿠폰·직영점 데이터 관리' },
          { title: '04 이벤트 운영', body: '기획 · 모니터링 · 이슈 관리' },
          { title: '05 이슈 대응·안정화', body: 'CS 기반 이슈 분석, 개발자 협업을 통한 이슈 해결 및 재발 방지' },
          { title: '06 운영 고도화', body: '안정화를 위한 프로세스 개선, 매뉴얼·인수인계 문서 작성' },
        ] },
      ],
      problem: [
        { type: 'cards', cols: 2, items: [
          { title: 'Problem 01. 표준 운영 기준 및 데이터 프로세스 부재', body: '오픈 직후 상품·쿠폰 데이터 관리 기준이 미비하여 업무 누적과 오류 위험이 존재했습니다.', points: [['Key Challenge', '데이터 관리 프로세스 표준화 및 어드민 매뉴얼 제작']] },
          { title: 'Problem 02. 참여형 이벤트 증가에 따른 이슈 대응 지연', body: '빈번한 이벤트 기획·오픈 과정에서 QA 시나리오 부재로 인한 개발/CS 이슈가 빈번했습니다.', points: [['Key Challenge', '사전 테스트 시나리오 수립 및 원인 단위 재발 방지 체계 구축']] },
        ] },
      ],
      design: [
        { type: 'text', label: 'Operation Strategy', title: '오류 최소화를 위한 운영 데이터 정립 및 이슈 대응 프로세스 수립', body: '<strong>운영 중 발생하는 일정·데이터·이슈를 기준과 프로세스 중심으로 관리하는 체계를 구축했습니다.</strong>' },
        { type: 'cards', layout: 'row', items: [
          { img: 'assets/img/emart-ops-1.jpg', title: '운영 데이터 관리 기준 표준화', points: [
            '이벤트 배너 노출 겹침 및 일정 누락을 방지하기 위해 통합 관리표를 구축했습니다.',
            '어드민 등록 데이터와 쿠폰 파일을 교차 검증하여 오발송 위험을 최소화했습니다.',
          ] },
          { img: 'assets/img/emart-ops-2.jpg', title: 'CS/이슈 대응 구조화 및 재발 방지', points: [
            '[인입 > 원인 파악 > 개발자 협업 > 테스트 > 공유] 5단계 이슈 대응 단계를 정립했습니다.',
            '이슈 발생 원인을 지속적으로 기록·관리하여 동일한 유형의 이슈 재발을 방지했습니다.',
          ] },
        ] },
        { type: 'text', label: 'Operation Strategy', title: '지속 가능한 운영을 위한 문서화 체계 구축', body: '<strong>운영 기준을 문서화해, 일관되고 안정적인 운영 환경을 구축했습니다.</strong>' },
        { type: 'cards', layout: 'row', items: [
          { img: 'assets/img/emart-docs-1.jpg', title: '인수인계 문서 작성', points: [
            '업무 전반의 프로세스와 상세 기준을 문서화하여 신규 담당자 투입 시에도 공백 없이 빠르게 적응하도록 했습니다.',
          ] },
          { img: 'assets/img/emart-docs-2.jpg', title: '어드민 관리자 매뉴얼 작성', points: [
            '새로 구축된 어드민의 실무 활용도를 높이기 위해 상품·쿠폰·이벤트 관리 기능을 단계별 화면으로 정리했습니다.',
          ] },
        ] },
        { type: 'text', label: 'Operation Strategy', title: '이벤트 기획부터 오픈까지, 이슈를 줄이기 위한 운영 관리', body: '이벤트 운영 과정에서 발생하던 <strong>반복 이슈를 줄이기 위해 전 과정을 기준화된 운영 흐름으로 정리</strong>했습니다.' },
        { type: 'cards', layout: 'row', items: [
          { img: 'assets/img/emart-event-1.jpg', title: '이벤트 운영 프로세스 전반 주도', points: [
            '일정 관리부터 기획안 작성, 개발 협업, 릴리즈, 모니터링까지 이벤트 운영 전 과정을 책임지고 관리했습니다.',
          ] },
          { img: 'assets/img/emart-event-2.jpg', title: '사전 QA 테스트 시나리오 구축', points: [
            '참여형 이벤트에서 빈번히 발생하는 오류를 차단하고자 이벤트별 사전 테스트 시나리오를 수립해 검수를 진행했습니다.',
          ] },
        ] },
      ],
      result: [
        { type: 'text', title: '운영 프로세스 개선과 산출물을 통해 효율성과 일관성 확보', body: '업무 관리 파일과 운영 프로세스를 도입한 이후 <strong>이슈 평균 대응 시간이 단축</strong>되었고 <strong>반복적으로 발생하던 이슈의 빈도가 감소</strong>했습니다. 일정 관리 파일과 메뉴얼 문서화를 통해 <strong>부서 간 커뮤니케이션 누락이 줄고, 신규 인력 투입 시에도 업무 적응 시간이 크게 줄어</strong>들었습니다.' },
        { type: 'compare', head: ['구분', 'AS IS', 'TO BE'], rows: [
          ['이슈 대응 방식', '개별 대응, 담당자 의존', '<strong>프로세스 기반 단일 흐름</strong>'],
          ['이슈 대응 속도', '상황별 편차 큼', '<strong>당일 또는 단기간 내 처리</strong><br>대응 시간 약 60% 단축'],
          ['반복 이슈', '원인 파악 어려움', '<strong>원인 단위 정리 및 재발 방지</strong>'],
          ['일정/데이터 관리', '파일 분산, 누락 발생', '<strong>기준 파일 기반 통합 관리</strong><br>오류 발생률 감소'],
          ['신규 인력 온보딩', '구두 설명 중심', '<strong>문서·매뉴얼 기반 인수인계</strong><br>온보딩 소요 기간 50% 단축'],
        ] },
        { type: 'stats', items: [{ value: '약 60%', label: '이슈 대응 시간 단축' }, { value: '50%', label: '신규 인력 온보딩 소요 기간 단축' }] },
        { type: 'text', body: '<strong>결과적으로 프로세스 기반 대응 체계와 사전 검증 파일 운영을 통해 이마트24 서비스의 상시 운영 안정성을 확보했습니다.</strong>' },
      ],
    },
  },

  {
    id: 'lge',
    group: 'LG전자 WEB/오픈마켓 운영',
    title: 'LG전자 WEB/오픈마켓 기획전',
    headline: 'LG전자 WEB/오픈마켓<br>기획전 제작 운영',
    summary: 'LGE.COM과 오픈마켓 채널의 기획전·이벤트 콘텐츠를 기획·운영하고, 프로젝트 히스토리를 기반으로 운영 프로세스를 최적화한 이커머스 운영 프로젝트',
    category: '이커머스 운영',
    period: '2023.05 – 2024.12',
    type: 'WEB · 오픈마켓',
    role: '기획 PA',
    contribution: ['자사 플랫폼 기획전·이벤트 운영 (70%)', '오픈마켓 기획전 운영 (70%)', '주간 유입량 보고 (30%)'],
    team: '기획 6 · 디자인 9 · 개발 2',
    thumb: 'assets/img/lge-hero.jpg', coverBg: '#b71d1d',
    tags: ['이커머스', '기획전운영', '오픈마켓'],
    sectionLabels: { design: { label: '주요 업무', en: 'Key Work' } },
    sections: {
      background: [
        { type: 'text', title: 'Overview', body: 'LG전자 LGE.COM과 오픈마켓 채널에서 <strong>차별화된 기획전과 이벤트로 디지털 고객 경험과 브랜드 가치를 극대화하는 데 주력</strong>했습니다. 콘텐츠로 LG전자의 제품과 이벤트를 효과적으로 소개하며, <strong>안정적인 운영을 통해 브랜드 신뢰도와 고객 만족도를 향상</strong>시켰습니다.' },
      ],
      design: [
        { type: 'text', title: '운영 안정화 & 협업 리더십', body: '' },
        { type: 'cards', layout: 'row', items: [
          { img: 'assets/img/lge-work-1.jpg', title: '기획전 제작', points: [
            ['전체적인 기획전 운영 관리', '기획전의 초기 컨셉부터 배포까지 전 과정 관리, 기획전 목표와 고객 니즈를 반영한 안정적 결과물 도출'],
            ['콘텐츠 전략 개발', '플랫폼 특성에 맞춘 차별화된 기획안 및 시즌 캠페인 기획, 브랜드 이미지에 맞는 카피와 비주얼 콘텐츠 제작'],
            ['이해관계자 조율', '내부 팀과 협업하여 일관된 메시지와 결과물 제작, 고객사 및 오픈마켓과의 소통을 통해 프로젝트 진행 조율'],
          ] },
          { img: 'assets/img/lge-work-2.jpg', title: '가이드 관리 · 주간 유입량 보고', points: [
            ['마켓별 복잡한 가이드 안정적 관리', '오픈마켓별 복잡한 가이드를 정확히 적용하고 안정적으로 운영, 마켓 요구사항에 맞춘 작업 흐름 관리 및 문제 사전 예방'],
            ['주간 유입량 보고 및 보고서 작성', '각 채널별 유입량 데이터 수집 및 분석, 주간 단위로 유입량 변화 추이 파악, 주간 유입량 보고서 작성 및 주요 지표 시각화'],
          ] },
          { img: 'assets/img/lge-work-3.jpg', title: '운영 안정화', points: [
            ['프로젝트 히스토리 관리', '프로젝트 초기 단계부터 참여하여 축적된 히스토리를 기반으로 신규 멤버 온보딩 및 업무 인수인계 지원'],
            ['프로세스 최적화', '고객사의 피드백 프로그램 변경 시 일정상의 잠재적 이슈 사전 분석 및 작업 우선순위 조정'],
            ['팀 내 허브 역할', '프로젝트 히스토리를 바탕으로 고객사와의 커뮤니케이션 주도, 온보딩 및 고객사 요청에 신속히 대응하며 팀 내 신뢰 구축'],
          ] },
        ] },
      ],
      result: [
        { type: 'text', body: '<strong>프로젝트 히스토리를 기반으로 운영 프로세스를 최적화하고, 신속한 대응과 조율을 통해 팀과 고객사 간의 신뢰를 강화하며 안정적인 운영을 이끌어냈습니다.</strong>' },
      ],
    },
  },

  {
    id: 'bellygom',
    group: '벨리곰 NFT 프로젝트',
    title: '벨리곰 NFT 프로젝트',
    headline: '벨리곰 NFT 프로젝트<br>상위 기획 및 사이트 설계',
    summary: '벨리곰 캐릭터 IP를 활용한 NFT 프로젝트에서 스토리·로드맵·유틸리티 상위 기획에 참여하고, NFT에 익숙하지 않은 사용자도 쉽게 이해할 수 있는 스토리 기반 스크롤형 사이트를 설계한 프로젝트',
    category: 'NFT · 웹사이트 기획',
    period: '2022.05 – 2022.08',
    type: 'WEB (반응형) · 민팅 사이트',
    role: '기획 PA',
    contribution: ['상위 기획 (30%)', '반응형 사이트 화면 설계 및 검수 (60%)', '민팅 사이트 화면 설계 및 검수 (30%)'],
    team: '기획 3 · 디자인 5 · 개발 3',
    thumb: 'assets/img/bellygom-hero.jpg',
    tags: ['상위기획', '유틸리티설계', '웹사이트구축'],
    sectionLabels: { design: { label: '기획 · 설계', en: 'Planning & Design' } },
    sections: {
      background: [
        { type: 'text', title: 'Overview', body: '본 프로젝트는 벨리곰 캐릭터 IP를 활용해 롯데 그룹의 기존 혜택을 NFT로 통합하여 새로운 가치를 창출했습니다. <strong>NFT 시장에 익숙하지 않은 사용자들도 쉽게 접근할 수 있도록</strong> 벨리곰 IP 사이트를 통해 다양한 인터랙션과 모션을 구현했으며, 재미있고 참신한 구성으로 다양한 혜택과 정보를 제공했습니다.' },
      ],
      design: [
        { type: 'text', label: '상위 기획', title: '벨리곰 NFT 프로젝트의 시작을 위한 상위 기획 설계', body: '벨리곰 IP의 탄생 스토리부터 프로젝트 로드맵, 그리고 NFT 유틸리티까지 <strong>프로젝트의 상위 기획에 참여하여 벨리곰 NFT를 탄생</strong>시켰습니다.' },
        { type: 'steps', title: 'Process', items: ['벨리곰 스토리 (상위기획)', '벨리곰 NFT 로드맵 (상위기획)', '벨리곰 NFT 유틸리티 (상위기획)', '벨리곰 NFT 사이트 오픈', '벨리곰 커뮤니티 오픈', '벨리곰 민팅', '벨리곰 리빌 (레어리티 & 랭킹 공개)'] },
        { type: 'cards', layout: 'row', items: [
          { img: 'assets/img/bellygom-plan-1.jpg', title: '벨리곰 스토리', points: [
            '캐릭터 IP와 관련된 서사, 배경, 세계관 등을 포함',
            '사용자가 캐릭터와 감정적으로 연결될 수 있게 하며, 이를 통해 <strong>더 깊은 몰입과 충성도를 유도</strong>함',
            '풍부한 스토리를 통해 <strong>커뮤니티가 형성</strong>되도록 도와주며, 팬 아트, 팬픽 등 <strong>사용자 생성 콘텐츠를 장려</strong>할 수 있음',
          ] },
          { img: 'assets/img/bellygom-plan-2.jpg', title: '벨리곰 NFT 로드맵', points: [
            '프로젝트의 진행 계획으로 주요 마일스톤, 목표, 출시 일정 등을 포함',
            '투자자와 커뮤니티에게 프로젝트에 대한 신뢰 제공',
            '<strong>명확한 일정과 목표를 통해 커뮤니티의 기대치를 조정하고, 언제 무엇이 제공될지를 명확하게 제공</strong>',
          ] },
          { img: 'assets/img/bellygom-plan-3.jpg', title: '벨리곰 NFT 유틸리티', points: [
            'NFT 소유자가 얻을 수 있는 혜택과 사용 사례로 이는 <strong>디지털 자산의 가치를 높이는 중요한 요소</strong>',
            'NFT의 가치를 증대시켜 <strong>NFT의 소유 동기 제공</strong>',
            'NFT가 단순한 디지털 자산을 넘어 게임, 메타버스, 독점 콘텐츠 접근 등 <strong>다양한 분야에서 실제로 사용될 수 있게 함</strong>',
          ] },
        ] },
        { type: 'text', label: '사이트 설계', title: '사용자가 NFT 시장을 쉽게 이해하고, 접근할 수 있는 인터랙티브 사이트 설계', body: 'NFT 시장에 익숙하지 않은 사용자들이 벨리곰 NFT 정보(스토리, 로드맵, 유틸리티 등)를 쉽고 흥미롭게 이해할 수 있도록, <strong>스토리 기반의 스크롤형 사이트를 설계</strong>하여 벨리곰 IP 사이트를 방문한 사용자들에게 즐거운 사용자 경험을 제공했습니다.' },
        { type: 'text', body: '스크롤 시 벨리곰 3D 캐릭터가 움직이며 화면이 이동되고, 이를 통해 벨리곰 NFT에 대한 정보를 확인할 수 있습니다.' },
        { type: 'steps', items: ['벨리곰 스토리', '벨리곰 NFT 로드맵', '벨리곰 NFT 유틸리티'] },
        // 세 화면을 같은 비율 카드로 ①②③ 순서 배치 (pos: 카드에서 보일 위치, 누르면 전체 이미지)
        { type: 'cards', ratio: '4 / 3', items: [
          { img: 'assets/img/bellygom-site-1.jpg', pos: 'center top', title: '① 벨리곰 스토리' },
          { img: 'assets/img/bellygom-site-2.jpg', pos: '94% center', title: '② 벨리곰 NFT 로드맵' },
          { img: 'assets/img/bellygom-site-3.jpg', pos: 'center top', title: '③ 벨리곰 NFT 유틸리티' },
        ] },
        { type: 'text', label: '민팅', title: '민팅 가이드 및 민팅 사이트 설계', body: '벨리곰 NFT 민팅을 위한 <strong>민팅 가이드</strong>와 <strong>민팅 사이트</strong> 화면을 설계했습니다.' },
        { type: 'cards', ratio: '4 / 3', items: [
          { img: 'assets/img/bellygom-mint-guide.jpg', pos: 'center top', title: '민팅 가이드', body: '누구나 쉽게 따라 할 수 있는 벨리곰 NFT 민팅가이드<br>카이카스 지갑 만들기, 카이카스 지갑 간단 사용 방법, 오픈씨 이용방법' },
          { img: 'assets/img/bellygom-mint-site.jpg', pos: 'center center', title: '민팅 사이트', body: '지갑 연결, 판매 차수(1st·2nd PRE-SALE, PUBLIC SALE), 남은 수량, 수량 선택 및 민팅' },
        ] },
      ],
      result: [
        { type: 'text', body: '벨리곰 스토리·로드맵·유틸리티 <strong>상위 기획</strong>부터 <strong>벨리곰 IP 사이트</strong>, <strong>민팅 가이드와 민팅 사이트</strong>까지 참여하며 벨리곰 NFT 프로젝트를 마무리했습니다.' },
      ],
    },
  },

  {
    id: 'ai-persona',
    group: 'Research Paper',
    title: 'AI 챗봇 상담가 페르소나',
    headline: 'AI 챗봇 상담가 페르소나<br>설계 전략 및 UX 리서치',
    summary: 'AI 상담가 요인 분석 기반 맞춤형 프롬프트 모델 수립',
    category: 'UX 리서치 · 논문',
    period: '2026.06',
    type: 'Paper · 한국디자인학회 (KCI, SCOPUS)',
    role: '단독 연구',
    contribution: ['문제 정의 및 연구·실험 설계 (100%)', '정량·정성 데이터 분석 및 페르소나 도출 (100%)', 'AI 챗봇 프로토타입 구현 및 프롬프트 설계 (100%)'],
    team: '',
    link: { label: '논문 보기', url: 'https://aodr.org/_PR/view/?aidx=49544&bidx=4446' },
    thumb: 'assets/img/ai-hero.jpg',
    tags: ['심층 인터뷰', '요인·군집 분석', 'ANOVA', '프롬프트 설계'],
    sectionLabels: { research: { label: '1차 실험', en: 'UX Research' }, design: { label: '2차 실험', en: 'UX Research' }, result: { label: '설계 전략', en: 'Design Implication' } },
    sections: {
      background: [
        { type: 'text', title: 'AI 정신건강 상담의 효과를 높이기 위한 내담자 맞춤형 페르소나 도출 및 검증', body: 'AI 정신건강 상담의 효과성을 극대화하고자 내담자 맞춤형 페르소나 설계 기준을 정립했습니다. 학술적 검증에 그치지 않고, 실제 AI 챗봇 서비스에 적용 가능한 프롬프트 모델 완성을 목표로 진행했습니다.' },
        { type: 'figure', src: 'assets/img/ai-process.jpg', caption: '데스크리서치 → 심층인터뷰 → 온라인 설문조사 → AI 상담가 페르소나 도출 (1차 실험) → AI 상담 실험물 개발 → 온라인 설문조사 → 설문조사 데이터 분석 (2차 실험) → 페르소나 설계 전략 도출' },
        { type: 'cards', cols: 2, items: [
          { title: 'UX 리서치 전 과정 단독 설계 및 데이터 분석', body: '문제 정의부터 251명 대상의 설문·인터뷰 설계, 통계 분석(ANOVA/군집분석)까지 UX 리서치 전 과정을 주도했습니다.' },
          { title: 'AI 챗봇 프로토타입 구현 및 프롬프트 설계', body: '도출된 페르소나를 검증하기 위해 Poe 플랫폼 기반 AI 챗봇을 직접 구현하고 상담 스크립트와 프롬프트를 설계했습니다.' },
        ] },
      ],
      problem: [
        { type: 'text', title: 'AI 상담 서비스는 확산되고 있지만, 사용자에게 맞는 AI 상담가 페르소나를 설계할 기준은 부족합니다', body: '' },
        { type: 'cards', layout: 'stack', items: [
          { title: 'Market & Service Context', body: 'AI 기반 정신건강 상담 서비스는 시간적·경제적 제약으로 대면 상담이 어려운 사용자에게 대안적 상담 경험으로 확산되고 있습니다.' },
          { title: 'Pain Point & Problem', body: '그러나 실제 서비스에서는 단일한 AI 상담가 페르소나가 주로 제공되어, 내담자의 목적과 특성에 따른 상담 경험 차이가 충분히 반영되지 못하고 있습니다.' },
          { title: 'Impact on User Experience', body: '내담자의 기대나 상태에 부합하지 않는 어투와 답변 방식은 상담 몰입도를 저하시키고 이탈 및 서비스 만족도 감소로 이어집니다.' },
        ] },
        { type: 'list', title: 'Key Challenge', items: ['<strong>사용자 특성별 최적의 AI 페르소나 및 프롬프트 정의</strong><br>AI 상담사의 말투나 성격에 따라 사용자가 느끼는 만족도가 어떻게 다른지 검증', '<strong>맞춤형 AI 상담사 설계 기준 마련</strong><br>나이나 상담 경험처럼 사용자 특성에 맞는 맞춤형 AI 상담사 설계 기준 마련'] },
      ],
      research: [
        { type: 'text', topic: true, title: '페르소나 설계를 위한 AI 상담가 핵심 요인 정의', body: '사용자 및 전문가 리서치를 통해 AI 상담가를 구별짓는 5가지 핵심 기획 기준을 정립했습니다.' },
        { type: 'cards', layout: 'row', ratio: 'auto', fit: 'contain', items: [
          { img: 'assets/img/ai-interview.jpg', title: '심층 인터뷰', body: '<strong>상담 경험자·전문가 10명 심층 인터뷰</strong><br>AI 상담의 기술적 신뢰와 분석 역량은 강점으로 평가받은 반면, 감정적 교류와 공감 영역에서는 명확한 한계가 존재함을 확인했습니다.' },
          { img: 'assets/img/ai-factors.jpg', title: '온라인 설문조사', body: '<strong>내담자 221명 대상 요인 분석</strong><br>정량 설문 데이터를 분석해 사용자 만족도에 결정적 영향을 미치는 5가지 AI 상담가 핵심 요인을 정교하게 구조화했습니다.' },
        ] },
        { type: 'cards', cols: 3, group: 'AI 상담가 5대 핵심 요인', items: [
          { title: '공감적 경청과 피드백', body: '내담자의 감정을 공감하고 긍정적인 피드백을 제공하는 상담가의 역량' },
          { title: '데이터 기반 정보 분석', body: '정보를 신속하게 파악하고, 다양한 데이터를 활용해 상담을 진행하는 역량' },
          { title: '중립적인 상담 태도', body: '비판단적이고 객관적인 태도로 신뢰감 있는 상담을 이끄는 역량' },
          { title: '인간다운 대화', body: '버추얼 휴먼이 인간처럼 자연스럽게 대화하는 역량' },
          { title: '상담가의 자기개방', body: '상담가의 경험 공유를 통해 내담자와 공감대를 형성하는 역량' },
        ] },
        { type: 'text', body: '<strong>5대 핵심 요인은 향후 AI 상담 챗봇의 페르소나를 유형별로 구별하고 프롬프트를 설계하는 중심 축으로 활용되었습니다.</strong>' },
        { type: 'text', topic: true, title: '군집 분석을 통해 도출한 AI 상담가 페르소나 유형', body: 'AI 상담가 요인에 대한 군집 분석 결과, 상담 접근 방식에 따라 구분되는 <strong>세 가지 AI 상담가 페르소나 유형</strong>을 도출했습니다.' },
        { type: 'cards', layout: 'stack', items: [
          { img: 'assets/img/ai-persona-1.jpg', title: '감정중심 공감형 상담가', body: '감정적 안정과 공감을 우선하는 상담가' },
          { img: 'assets/img/ai-persona-2.jpg', title: '해결중심 객관형 상담가', body: '공감과 해결을 균형 있게 제공하는 상담가' },
          { img: 'assets/img/ai-persona-3.jpg', title: '정보중심 분석형 상담가', body: '객관적 정보와 분석을 중심으로 돕는 상담가' },
        ] },
        { type: 'text', body: '<strong>도출된 페르소나를 기반으로 AI 상담 챗봇을 구현하고, 2차 실험을 통해 내담자 특성별 최적의 페르소나 매칭을 검증했습니다.</strong>' },
      ],
      design: [
        { type: 'text', topic: true, title: '페르소나 검증을 위한 챗봇 기반 AI 상담 프로토타입 구현', body: '각 페르소나의 <strong>상담 스타일(어투, 공감 방식, 정보 제공 수준)</strong>을 반영한 대화 스크립트를 작성하고 <strong>전문가 검증을 통해 페르소나 일치도를 점검</strong>했습니다. <strong>LLM 기반 Poe 플랫폼에서 각 페르소나의 시스템 프롬프트와 대화 조건, 상담 목표를 직접 설정하여 챗봇을 구현</strong>했습니다.' },
        { type: 'tabs', title: '페르소나별 상담 스크립트', items: [
          { label: '감정중심 공감형', blocks: [{ type: 'figure', src: 'assets/img/ai-script-1.jpg', caption: '감정중심 공감형 상담가 — 공감적 경청과 피드백 · 인간다운 대화' }] },
          { label: '해결중심 객관형', blocks: [{ type: 'figure', src: 'assets/img/ai-script-2.jpg', caption: '해결중심 객관형 상담가 — 중립적인 상담 태도 · 인간다운 대화 · 상담자의 자기개방' }] },
          { label: '정보중심 분석형', blocks: [{ type: 'figure', src: 'assets/img/ai-script-3.jpg', caption: '정보중심 분석형 상담가 — 데이터 기반 정보 분석 · 중립적인 상담 태도' }] },
        ] },
        { type: 'figure', src: 'assets/img/ai-poe.jpg', caption: 'Poe 기반 챗봇 상담 체험 화면 / 프롬프트' },
        { type: 'text', body: '<strong>설계된 AI 챗봇 프로토타입을 활용해 251명의 내담자를 대상으로 페르소나별 상담 만족도 및 내담자 특성과의 상호작용 검증 실험을 진행했습니다.</strong>' },
        { type: 'text', topic: true, title: '설문과 상담 체험 기반 실험을 통해 페르소나 효과와 내담자 특성 차이 검증', body: '실험 참여자는 사전 설문에서 선택한 상담 이슈를 바탕으로 <strong>AI 상담가와 상담 체험을 진행</strong>했으며, 상담가 유형별로 총 3회 반복 참여했습니다. 총 251명을 대상으로 온라인 설문을 진행했으며, 불성실 응답을 제외한 221명의 데이터를 분석에 활용했습니다.' },
        { type: 'steps', title: '상담가 유형별 반복 실험 구조', items: ['사전 설문<br>성별, 직업, 내담자의 연령, 정신건강 상담 횟수, 정신건강 상담 원인', 'AI 상담 체험<br>사전 설문에서 선택한 상담 원인 주제에 대해 상담 진행 (상담가당 5분 이내, 최소 10턴 이상)', '상담 후 설문 응답<br>항목 평가, 라포 척도 평가, 상담 만족도 척도 평가'] },
        { type: 'cards', cols: 2, ratio: 'auto', fit: 'contain', items: [
          { img: 'assets/img/ai-method.jpg', title: '설문조사 방법' },
          { img: 'assets/img/ai-survey.jpg', title: '온라인 설문조사' },
        ] },
        { type: 'text', body: '<strong>설문 결과는 회귀 분석과 ANOVA 분석을 통해 상담 만족도 영향 요인과 내담자 특성에 따른 페르소나 선호 차이를 검증했습니다.</strong>' },
      ],
      result: [
        { type: 'text', title: '내담자 특성을 고려한 AI 상담가 페르소나 설계 전략', body: '리서치 및 실험 데이터 검증을 바탕으로, <strong>실제 AI 정신건강 상담 서비스에 즉시 적용 가능한 페르소나 전략을 정립</strong>했습니다. 또한 내담자의 특성에 따라 선호도가 달랐으며, <strong>내담자의 연령과 상담 경험을 고려한 맞춤형 페르소나 설계가 필요함</strong>을 확인했습니다.' },
        { type: 'cards', cols: 3, items: [
          { title: '감정중심 공감형 상담가', body: '공감적 경청과 피드백 · 인간다운 대화', points: [['선호 집단(내담자 특성)', '30대 (20대는 선호도가 낮음), 중간 경험자(10회 이상 30회 미만)']] },
          { title: '해결중심 객관형 상담가', body: '중립적인 상담 태도 · 인간다운 대화 · 상담가의 자기개방', points: [['선호 집단(내담자 특성)', '30대, 중간 경험자(10회 이상 30회 미만), 초기 경험자(10회 미만)']] },
          { title: '정보중심 분석형 상담가', body: '데이터 기반 정보 분석 · 중립적인 상담 태도', points: [['선호 집단(내담자 특성)', '40대, 숙련된 경험자(30회 이상)']] },
        ] },
        { type: 'figure', src: 'assets/img/ai-strategy-1.jpg', caption: 'AI 상담가 요인 · 버추얼 휴먼 상담가 페르소나 (*상담만족도 영향력)' },
        { type: 'figure', src: 'assets/img/ai-strategy-2.jpg', caption: '페르소나별 상담 스크립트 · AI 상담가 페르소나 설계 전략' },
        { type: 'text', body: '<strong>AI 상담가 페르소나는 고정된 유형이 아닌, 내담자 특성에 따라 전략적으로 설계되어야 할 선택지입니다. 이는 향후 AI 상담 서비스 설계의 기준이 될 수 있습니다.</strong>' },
        { type: 'details', summary: 'Appendix', blocks: [
          { type: 'cards', cols: 3, ratio: 'auto', fit: 'contain', items: [
            { img: 'assets/img/ai-appx-model.jpg', title: '연구 모형', points: [['RQ1', 'AI 상담가 요인은 상담 만족도에 유의미한 영향을 미치는가?'], ['RQ2', 'AI 상담가의 페르소나 유형에 따라 상담 만족도에 차이가 있는가?'], ['RQ3', '내담자의 특성(연령, 정신건강 상담 경험, 상담 이유)에 따라 페르소나 유형과 상담 만족도의 관계에서 조절 효과가 존재하는가?']] },
            { img: 'assets/img/ai-appx-rq3.jpg', title: 'RQ1 검증 결과<br>AI 상담가 요인의 영향 (회귀 분석)', body: '5개 요인 모두 상담 만족도에 유의미한 정(+)의 영향 (Adj R² = .740)<br>인간다운 대화 β = 0.359로 가장 큼' },
            { img: 'assets/img/ai-appx-rq45.jpg', title: 'RQ2 · RQ3 검증 결과<br>페르소나 유형 · 내담자 특성 (ANOVA)', body: '해결중심 객관형(P2) 만족도가 감정중심 공감형(P1)보다 유의미하게 높음<br>연령·상담 횟수에 따라 선호 페르소나 차이' },
          ] },
        ] },
      ],
    },
  },
  {
    id: 'midlife-persona',
    group: 'Research Paper',
    title: '중년 외로움 완화 버추얼 휴먼',
    headline: '중년의 외로움 완화를 위한<br>버추얼 휴먼 페르소나 설계 전략',
    summary: '버추얼 휴먼의 인간 유사성과 매력성에 따른 의사사회적 상호작용을 중심으로',
    category: 'UX 리서치 · 논문',
    period: '2024.11',
    type: 'Paper · 한국디자인학회 (KCI, SCOPUS)',
    role: '주저자',
    contribution: ['문헌 연구와 질적 리서치를 기반으로 가설 수립', '질적 및 양적 리서치 수행', '실험물 설계', '양적 데이터 분석 및 가설 검증', '버추얼 휴먼 페르소나 설계 전략 도출'],
    team: '1명 (기여도 100%, 주저자)',
    link: { label: '논문 보기', url: 'https://aodr.org/_PR/view/?aidx=42744&bidx=3874' },
    thumb: 'assets/img/mid-hero.jpg',
    tags: ['심층 인터뷰', '온라인 설문', '분산·회귀분석', '버추얼 휴먼'],
    sectionLabels: { research: { label: '사용자 조사', en: 'User Research' }, design: { label: '가설 검증', en: 'Data Analysis' }, result: { label: '설계 전략', en: 'Design Guide' } },
    sections: {
      background: [
        { type: 'text', title: 'Overview', body: '중년기는 자녀의 독립, 배우자의 은퇴 등으로 외로움을 느끼기 쉬운 시기입니다. 이런 외로움은 우울로 이어질 수 있어, 실질적인 대안이 필요합니다. 최근 버추얼 휴먼은 정서적 지원 수단으로 주목받고 있으며, 이는 인간과 비슷한 상호작용을 통해 외로움을 덜어줄 수 있는 가능성이 큽니다.<br><br>이 연구에서는 <strong>중년과 버추얼 휴먼의 상호작용을 높이는 요인을 분석하고, 외로움 완화를 위한 페르소나 디자인 전략을 제안</strong>했습니다. 연구 결과, 외형보다는 화법이나 가치관 같은 정신적 유사성이 신뢰 형성과 외로움 완화에 더 중요한 역할을 하는 것으로 나타났습니다. 이에 따라, 인간 유사성, 화법, 가치관 등 핵심 요소를 정리하고, 개인화된 정서적 지원이 가능한 버추얼 휴먼 디자인 방향을 제시했습니다.' },
        { type: 'cards', cols: 2, items: [
          { title: '📚 문헌 조사', body: '중년 외로움 & 버추얼 휴먼 이해<br>가설 도출' },
          { title: '👥 사용자 조사', body: '질적 조사 | 심층 인터뷰<br>사용자 페인포인트+니즈 파악<br>양적 조사 | 실험물 제작 + 온라인 설문<br>가설 검증을 위한 설문 진행' },
          { title: '📊 데이터 분석', body: 'SPSS를 활용한 데이터 분석<br>분산분석과 회귀분석을 통해 설정한 가설을 정량적으로 검증' },
          { title: '🚀 전략 제안', body: '중년의 외로움 완화를 위한 버추얼 휴먼 페르소나 설계 전략 도출' },
        ] },
      ],
      research: [
        { type: 'text', title: '심층 인터뷰를 통한 정신적 지원을 위한 버추얼 휴먼 페르소나 도출', body: '<strong>인터뷰 대상자 : 총 8명</strong> | 외로움을 느끼는 45세에서 65세의 중년 여성 5명과 중년 남성 3명<br>심층 인터뷰를 통해 우울과 외로움을 겪는 중년기의 니즈와 페인포인트를 심층적으로 파악하고, 정신적 지원 버추얼 휴먼 페르소나를 구체화 하였습니다.' },
        { type: 'figure', src: 'assets/img/mid-interviewees.jpg', caption: '인터뷰 대상자' },
        { type: 'cards', cols: 3, group: '중년의 외로움과 버추얼 휴먼 정신적 지원 서비스에 대한 5가지 카테고리 도출', items: [
          { title: '정서적 외로움', body: '함께 할 가족의 부재로 인한 우울감<br>아이의 성장으로 인한 공허함' },
          { title: '사회적 외로움', body: '함께 어울릴 수 있는 사람의 감소<br>사회적 자리가 없어짐에 따라 생긴 공허함' },
          { title: '상황적 요인', body: '나만 혼자일 때 느껴지는 외로움<br>혼자 있을 때 느끼는 외로움' },
          { title: '정신적 지원 서비스', body: '사람들과의 대화의 중요성<br>함께 있는 사람의 필요성' },
          { title: '버추얼 휴먼 선호도', body: '본인과 유사한 사람과의 대화 선호<br>나의 관심사에 대한 공감의 필요성' },
        ] },
        { type: 'text', topic: true, title: '버추얼 휴먼 페르소나', body: '버추얼 휴먼 \'소울(Soul)\'을 개발하기 위해, <strong>시각적 유사성(X축)과 정신적 유사성(Y축)</strong>을 설정했습니다. 시각적 유사성은 3D 인간 캐릭터와 3D 인간으로 구분하고, 중년층의 선호도를 반영하여 40대 남녀의 이미지를 생성형 AI로 제작했습니다. 정신적 유사성은 대화 방식에 따라 감정적인 \'친구형\'과 기계적인 \'전문가형\'으로 나누었습니다. 이러한 요소들을 결합하여 <strong>네 가지 페르소나를 개발</strong>하였습니다.' },
        { type: 'figure', src: 'assets/img/mid-personas.jpg', caption: '시각적 유사성(X축) × 정신적 유사성(Y축)에 따른 페르소나 A–D' },
      ],
      design: [
        { type: 'text', title: '실험 시나리오 도출 및 버추얼 휴먼 페르소나 전략 도출을 위한 실험 설계', body: '버추얼 휴먼 페르소나의 시각적 및 정신적 유사성이 외로움 완화에 미치는 영향을 검증하기 위해, 심층 인터뷰를 기반으로 공통된 상황과 네 가지 유형의 버추얼 휴먼 페르소나에 따른 시나리오를 개발하였습니다.' },
        { type: 'text', title: '상황', body: '귀하는 퇴직 후 가족과 함께 살고 있습니다. 퇴직 후 사회적 네트워크의 감소와 가족 구조의 변화로 인하여 우울감과 외로움을 느끼곤 합니다. 아침 식사를 마치고 모든 가족들이 출근을 하면 집안일을 마치고 거실에서 홀로 시간을 보내며 할일을 찾아보지만, 마음속에는 우울함과 외로움이 밀려옵니다. 소울(Soul)은 중년의 우울감과 외로움을 지원하기 위한 버추얼 휴먼으로, 당신이 집에 있는 시간임을 인지하고 말을 건넵니다.' },
        { type: 'tabs', title: '실험 시나리오', items: [
          { label: '친구형 | 페르소나 A, B', blocks: [{ type: 'figure', src: 'assets/img/mid-dialog-friend.jpg', width: '56%', caption: '친구형 | 페르소나 A, B' }] },
          { label: '전문가형 | 페르소나 C, D', blocks: [{ type: 'figure', src: 'assets/img/mid-dialog-expert.jpg', width: '56%', caption: '전문가형 | 페르소나 C, D' }] },
        ] },
        { type: 'cards', layout: 'stack', items: [
          { title: '실험 대상', body: '45~65세 대한민국 성인 남녀 252명(남성 128명, 여성 124명)<br>선정 기준: 우울감과 외로움을 자주 또는 깊게 경험한다고 보고한 사람<br>우울 척도(CES-D): 평균 20점(16점 이상 우울군)' },
          { title: '실험 방법: 온라인 설문조사', body: '버추얼 휴먼 개념과 실험 절차 설명 제공 ▶ 인구통계학적 정보 및 우울 척도 응답 ▶ 네 가지 페르소나 시나리오 확인 ▶ 인간 유사성, 매력성, 의사사회적 상호작용, 외로움 관련 문항 응답<br>* 모두 리커트 5점 척도(1=전혀 그렇지 않다, 5= 매우 그렇다)를 사용하여 측정' },
        ] },
        { type: 'figure', src: 'assets/img/mid-survey.jpg', caption: '온라인 설문조사' },
        { type: 'text', topic: true, title: '가설 검증 및 버추얼 휴먼 페르소나 설계의 핵심 요인 도출', body: '' },
        { type: 'cards', cols: 2, ratio: 'auto', fit: 'contain', items: [
          { img: 'assets/img/mid-results-1.jpg', title: 'RQ1 · RQ2 검증 결과', body: '페르소나 유형 → 의사사회적 상호작용 → 외로움' },
          { img: 'assets/img/mid-results-2.jpg', title: 'RQ3 ~ RQ6 검증 결과', body: '시각적·정신적 유사성 → 매력성(조절) → 의사사회적 상호작용(매개) → 외로움' },
        ] },
        { type: 'list', items: [
          '<strong>RQ1. 인간 유사성에 따른 버추얼 휴먼 페르소나가 중년의 외로움 완화에 미치는 영향에 차이가 있는가?</strong><br>버추얼 휴먼 페르소나에 따라 외로움에 미치는 영향은 차이가 있으며, 버추얼 휴먼의 정신적 유사성이 외로움 완화에 긍정적인 영향을 미쳤습니다.',
          '<strong>RQ2. 인간 유사성에 따른 버추얼 휴먼 페르소나가 중년과의 의사사회적 상호작용에 미치는 영향에 차이가 있는가?</strong><br>인간 유사성이 가장 높은 버추얼 휴먼이 중년과의 의사사회적 상호작용도 가장 높게 나타났습니다.',
          '<strong>RQ3. 버추얼 휴먼의 인간 유사성은 중년의 외로움 완화에 어떤 영향을 미칠 것인가?</strong><br>정신적 유사성이 높은 버추얼 휴먼은 중년의 외로움 완화에 긍정적인 영향을 미치지만, 시각적으로 지나치게 인간과 유사하면 불쾌감을 줄 수 있습니다.',
          '<strong>RQ4·5. 버추얼 휴먼의 인간 유사성은 의사사회적 상호작용에 어떤 영향을 미치며, 외로움과의 관계에서 매개 효과를 보일 것인가?</strong><br>높은 인간 유사성의 버추얼 휴먼은 중년과의 의사사회적 상호작용에 긍정적인 영향을 미칩니다. 또한, 이러한 상호작용은 외로움 완화의 핵심 요인으로, 인간 유사성과 외로움 완화 간의 매개 역할을 합니다.',
          '<strong>RQ6. 버추얼 휴먼의 인간 유사성과 중년의 의사사회적 상호작용 관계에서 사회적 매력성은 조절 효과를 보일 것인가?</strong><br>버추얼 휴먼에 대한 지각된 호감도는 영향을 미치지 않지만, 중년과 버추얼 휴먼의 지각된 유사성이 높을수록 두 관계의 의사사회적 상호작용이 증가하여 정서적 외로움 완화에 긍정적인 영향을 미칩니다.',
        ] },
        { type: 'cards', cols: 2, items: [
          { title: '페르소나 A | 3D 인간 캐릭터 · 친구형', body: '정서적 외로움, 의사사회적 상호작용에 가장 긍정적인 영향' },
          { title: '페르소나 C | 3D 인간 캐릭터 · 전문가형', body: '정서적 외로움, 의사사회적 상호작용에 가장 부정적인 영향' },
        ] },
        { type: 'text', body: '<strong>실험 결과 정신적 지원 버추얼 휴먼 페르소나 설계 시, 인간과의 정신적 유사성과 수용자와의 지각된 유사성이 중요합니다. 또한, 수용자의 외로움 원인에 따라 개인화할 수 있는 세밀하고 구체화된 페르소나 설계 시스템이 필요합니다.</strong>' },
      ],
      result: [
        { type: 'text', title: '정신적 지원 버추얼 휴먼 페르소나 설계 가이드', body: '' },
        { type: 'steps', items: ['외로움 원인 파악<br>정서적 외로움 또는 사회적 외로움을 선택하여, 외로움의 원인에 따라 버추얼 휴먼 설계의 중요 요소를 결정합니다.', '외형 설계<br>사용자 선호도를 반영해, 인간과 유사하거나 캐릭터적인 외형 등 적절한 시각적 유사성을 설계합니다.', '화법 설계<br>대화 방식, 감정 표현, 개인화를 고려해 인간과 유사한 언어적 특징을 설계합니다.', '가치관 설계<br>사용자의 성격, 라이프스타일, 신념 등을 반영해 유사한 가치관을 설정하고, 체크리스트를 통해 이를 체계적으로 설계합니다.'] },
        { type: 'cards', cols: 2, items: [
          { title: '정서적 외로움 지원', body: '[ Step 1 - 4 ] 사용자와의 유사한 가치관까지 고려' },
          { title: '사회적 외로움 지원', body: '[ Step 1 - 3 ] 외형과 화법 중심으로 설계' },
        ] },
        { type: 'figure', src: 'assets/img/mid-guide-steps.jpg', caption: '페르소나 설계 가이드 — Step 1 ~ 4' },
        { type: 'figure', src: 'assets/img/mid-guide-flow.jpg', caption: '페르소나 설계 플로우' },
        { type: 'text', title: '실무적, 학문적 시사점', body: '중년의 외로움 완화를 위해 버추얼 휴먼의 외형, 화법, 가치관 설계 요소를 제시하며, 정신적 지원 서비스의 실질적 활용 가능성을 높였습니다. 또한, 기존 MZ세대 중심 연구를 넘어 중년층을 대상으로 버추얼 휴먼의 영향력과 활용 가능성을 확장하였습니다.' },
      ],
    },
  },

  {
    id: 'smart-tourism',
    group: 'Research Paper',
    title: '이동적 관광약자 스마트관광',
    headline: '이동적 관광약자의 무장애관광 경험 개선을 위한<br>스마트관광 서비스디자인 전략',
    summary: 'Kano 모델과 Timko 고객만족계수를 중심으로',
    category: 'UX 리서치 · 논문',
    period: '2024.03',
    type: 'Paper · 한국디자인문화학회 (KCI)',
    role: '주저자',
    contribution: ['질적 및 양적 리서치 수행', '질적 데이터 분석을 통한 인사이트 도출', '이동적 관광약자의 관광 서비스 여정별 품질 속성 도출', '스마트 관광 서비스 전략 및 서비스 콘셉트 제안', '서비스 블루프린트 도출'],
    team: '4명 (기여도 60%, 주저자)',
    link: { label: '논문 보기', url: 'https://drive.google.com/file/d/1lIMz-WYZkOZafQ-X5MfMYdLF6Vb8yZv_/view?usp=drive_link' },
    thumb: 'assets/img/tour-hero.jpg',
    tags: ['심층 인터뷰', '비디오 에스노그라피', 'Kano 모델', '서비스 블루프린트'],
    sectionLabels: { research: { label: '사용자 조사', en: 'User Research' }, design: { label: '데이터 분석', en: 'Kano · Timko' }, result: { label: '전략 제안', en: 'Service Concept' } },
    sections: {
      background: [
        { type: 'text', title: 'Overview', body: '고령자, 장애인, 유아 동반자 등 다양한 이동약자들의 여행 참여가 늘어나고 있지만, 여전히 정보 부족과 이동 장벽으로 인해 자유로운 관광은 쉽지 않습니다. 또한, 기존 무장애 관광 서비스는 장애인 중심에 머물러 있어, 다양한 이동약자의 세분화된 니즈를 반영한 서비스 전략이 필요한 시점입니다.<br><br>이 프로젝트는 <strong>이동적 관광약자의 실제 여행 경험을 기반으로, 맞춤형 스마트 관광 서비스 전략을 제안</strong>한 연구입니다. 심층 인터뷰와 온라인 설문조사를 통해 여정별 페인포인트와 서비스 품질 속성을 도출하고, Kano 모델과 Timko 고객만족지수 분석을 통해 사용자 유형별 니즈와 개선 방향을 정리했습니다. 이를 바탕으로 총 4가지 스마트 관광 콘셉트와 서비스 블루프린트를 설계했습니다.' },
        { type: 'cards', cols: 2, items: [
          { title: '📚 문헌 조사', body: '무장애 관광, 스마트 관광 서비스 분석' },
          { title: '👥 사용자 조사', body: '질적 조사 | 심층 인터뷰, 비디오 에스노그라피<br>서비스 기회요소 도출<br>양적 조사 | 온라인 설문<br>경험요인별 효용성, 서비스 품질 만족도를 분석' },
          { title: '📊 데이터 분석', body: 'Kano 모델 + Timko 지수 분석<br>여정별 페인포인트 분석, 서비스 속성 정리' },
          { title: '🚀 전략 제안', body: '사용자 유형별 4가지 스마트 여행 서비스 콘셉트 제안<br>서비스 블루 프린트 도출' },
        ] },
      ],
      research: [
        { type: 'text', title: '심층 인터뷰 및 비디오 에스노그라피 주제 분석을 통한 5가지의 서비스 기회요소 도출', body: '' },
        { type: 'cards', cols: 2, items: [
          { title: '심층 인터뷰', body: '인터뷰 대상자 : 총 16명 | 휠체어 사용자 4명, 동반자 4명, 고령자 동반자 4명, 유모차 사용자 4명<br>심층 인터뷰를 통해 여행 시 경험하게 되는 페인포인트 및 니즈, 경험요인을 파악하였습니다.' },
          { title: '비디오 에스노그라피', body: '휠체어 사용자 8명의 유튜브 영상을 통해 니즈 및 페인포인트 파악하였습니다.' },
        ] },
        { type: 'text', topic: true, title: '사용자 조사 결과 분석', body: '앞선 자료에 대한 핵심 페인포인트를 파악하기 위해 데이터의 출처에 식별코드를 부여하고, <strong>주제분석 방법</strong>을 활용하여 핵심 내용과 <strong>카테고리</strong>를 분류해 <strong>서비스 기회요소</strong>를 도출하였습니다.' },
        { type: 'cards', cols: 3, group: '페인포인트 카테고리', items: [
          { title: '여행 정보' }, { title: '이동 시 불편사항' }, { title: '이동기기 접근성' }, { title: '관광지 애로사항' }, { title: '타인의 시선' },
        ] },
        { type: 'cards', cols: 3, group: '5가지 서비스 기회요소', items: [
          { title: '사용자 유형과 상황에 따른 맞춤화된 정보 제공' },
          { title: '관광약자를 위한 특화 여행 관광 서비스' },
          { title: '관광약자를 위한 스마트 로봇' },
          { title: '가상공간(VR)을 활용한 정보 안내 서비스' },
          { title: '시설 직원 안내서 (대응 메뉴얼)' },
        ] },
        { type: 'details', summary: '주제 분석(Thematic Analysis) 자료 보기', blocks: [
          { type: 'figure', src: 'assets/img/tour-thematic.jpg', caption: '식별코드 부여 및 주제 분석' },
        ] },
      ],
      design: [
        { type: 'text', title: '여정별 품질 속성 및 터치포인트, DX 기술 도출', body: '서비스 기회요소를 바탕으로 여정별 개선 아이디어 분석' },
        { type: 'steps', title: '여정별 개선 아이디어', items: ['정보 수집<br>사용자 유형에 따른 맞춤화된 정보 제공 서비스', '여행 계획<br>특화된 여행 관광 서비스, 가상공간을 활용한 온라인 사전답사 서비스', '이동<br>관광약자 전용 교통수단, 이동기기 배달 서비스, VR 길찾기 서비스', '숙박<br>관광약자를 위한 VR 숙소찾기 서비스', '관광<br>실시간 챗봇, 실시간 관광정보 분석 서비스, 스마트 로봇 휠체어 서비스', '식당<br>관광약자를 위한 VR 식당찾기 서비스'] },
        { type: 'text', body: 'Kano 모델과 Timko 고객만족계수 분석을 위해 <strong>50개의 여정별 품질 속성, 터치포인트</strong> 그리고 해당 서비스 구현을 위한 <strong>DX 기술</strong>을 도출하였습니다.' },
        { type: 'cards', layout: 'stack', imgWidth: '50%', items: [
          { img: 'assets/img/tour-ideas.jpg', title: '여정별 개선 아이디어' },
          { img: 'assets/img/tour-attributes.jpg', title: '여정별 품질 속성' },
        ] },
        { type: 'text', topic: true, title: 'Kano 모델 및 Timko 고객만족계수 분석 결과', body: '고객 만족 측정을 통한 품질 속성별 우선 순위 및 변별력 확보' },
        { type: 'stats', items: [{ value: '237명', label: '온라인 설문 참여자 (문항수 50개)' }, { value: '23개', label: '매력적 품질(A)' }, { value: '2개', label: '일원적 품질(O)' }] },
        { type: 'text', body: '참여자: 휠체어 사용자 11명, 동반자 90명, 고령자 동반자 49명, 유모차 사용자 87명<br>kano 모델 분석 결과 총 25개 품질 속성 항목 중 매력적 품질(A) 23개, 일원적 품질(O) 2개, 당연적 품질(M), 무관심 품질(I), 역 품질 (R)은 0개로 도출되었습니다. 이 결과는 <strong>신기술을 활용한 스마트 관광 서비스의 경우 대부분 매력적 품질로 인식되고 있음</strong>을 시사합니다.' },
        { type: 'cards', layout: 'stack', imgWidth: '50%', items: [
          { img: 'assets/img/tour-kano.jpg', title: '사용자 집단별 Kano · Timko 분석' },
          { img: 'assets/img/tour-journey.jpg', title: '여정별 서비스 매핑' },
        ] },
      ],
      result: [
        { type: 'text', title: '서비스 디자인 컨셉 및 서비스 블루프린트 제안', body: '<strong>이동적 관광약자가 쉽게 접근하고 즐겁게 여행할 수 있도록 도와주는 관광약자 특화 스마트 여행 서비스</strong><br>서비스 우선순위를 기초로 하여 같은성격의 품질 속성을 묶어 총 4가지 서비스 유형으로 분류하고, 이후 집단별 분석 결과에 따라 무장애관광 여정을 중심으로 4가지 서비스 콘셉트를 제안했습니다.' },
        { type: 'cards', cols: 2, group: '사용자 집단별 서비스 콘셉트', items: [
          { title: '휠체어 사용자(장애인)', body: '혼자서도 할 수 있는 여행' },
          { title: '휠체어 사용자(장애인) 동반자', body: '이동 반경을 넓혀주는 여행 도우미' },
          { title: '고령자 동반자', body: '부모님을 위한 맞춤형 여행 가이드' },
          { title: '유모차 사용자', body: '실시간 정보를 활용한 효율적인 여행' },
        ] },
        { type: 'figure', src: 'assets/img/tour-concept.jpg', caption: '스마트 무장애관광 서비스 컨셉 — 1) 초개인화된 여행 계획 추천 2) VR을 활용한 온라인 여행 및 사전 답사 3) GPS 기반 실시간 여행 가이드 4) 관광약자 이동 지원 서비스' },
        { type: 'text', topic: true, title: '서비스 블루프린트', body: '서비스 핵심 콘셉트 및 전달 체계의 증거화를 위해 ‘정보 수집‣여행 계획‣이동‣숙박‣관광‣식당’의 무장애관광 여정을 중심으로 스마트 관광 서비스와 터치포인트, 어플리케이션 내 후방 지원과 내부 시스템의 실시간 상호작용을 도식화하여 표현하였습니다.' },
        { type: 'figure', src: 'assets/img/tour-blueprint.jpg', caption: '서비스 블루프린트' },
      ],
    },
  },

  {
    id: 'postpartum',
    group: 'Research Paper',
    title: '산후우울 자가 진단 서비스',
    headline: '산모의 산후우울 관리를 위한<br>자가 진단과 유형 맞춤형 솔루션 서비스',
    summary: 'MZ 세대 및 자기인지 관련 요인을 중심으로',
    category: 'UX 리서치 · 논문',
    period: '2023.10',
    type: 'Paper · 커뮤니케이션 디자인 학회 (KCI)',
    role: '공동 연구',
    contribution: ['질적 및 양적 리서치 수행', '군집 유형 분석', '페르소나 정의 및 서비스 방향 설정', '자가진단 심리 솔루션 설계', '사용자 검증'],
    team: '5명 (기여도 30%)',
    link: { label: '논문 보기', url: 'https://drive.google.com/file/d/1BuTrvCUAd52-Sr1UtTvQI_uoneyBohnq/view?usp=drive_link' },
    thumb: 'assets/img/pp-hero.jpg',
    tags: ['심층 인터뷰', '어피니티 다이어그램', '군집 분석', '서비스 블루프린트'],
    sectionLabels: { research: { label: '사용자 조사', en: 'User Research' }, design: { label: '서비스 설계', en: 'Service Design' }, result: { label: '사용자 검증', en: 'Validation' } },
    sections: {
      background: [
        { type: 'text', title: 'Overview', body: '국내 산모의 <strong>50.3%가 산후우울감</strong>을 겪지만, 사회적 편견과 오해 때문에 대부분 말하지 못하고 침묵합니다. 관련 연구도 신체·생리적 요인에 집중되어 있어, <strong>심리 사회적 요인과 자기인지</strong>에 대한 연구가 부족했습니다.<br><br>이 연구는 산후우울에 영향을 주는 <strong>자기인지 요인을 분석해, 산모 유형에 맞춘 자가 진단 심리 솔루션 서비스</strong>를 제안했습니다. 인터뷰와 설문 군집 분석으로 산모를 3가지 유형으로 나누고, 유형별로 \'자아 주체성\', \'자아 보호성\', \'자아 회복성\'이라는 서비스 방향을 도출했습니다.' },
        { type: 'list', title: 'Performance', items: [
          '<strong>질적 및 양적 리서치 수행</strong><br>전문가 및 산모를 대상으로 심층 인터뷰와 온라인 설문조사 실시',
          '<strong>군집 유형 분석</strong><br>설문조사 결과를 바탕으로 한 군집 분석을 통해 세가지 군집 유형 도출',
          '<strong>페르소나 정의 및 서비스 방향 설정</strong>',
          '<strong>자가진단 심리 솔루션 설계</strong><br>서비스 구조 및 기능 설계를 통한 프로토타입 및 서비스 플로우 도출',
          '<strong>사용자 검증</strong><br>사용성 검증을 통해 피드백을 반영한 최종 서비스 블루 프린트 설계',
        ] },
      ],
      research: [
        { type: 'text', title: '사용자 및 이해관계자 심층인터뷰', body: '어피니티 다이어그램 및 사용자 여정 지도를 통한 요구 사항 파악' },
        { type: 'cards', layout: 'stack', items: [
          { title: '인터뷰 대상자 및 설계', body: '<strong>산부인과 전문의 1명, 배우자 1명, 산모 8명</strong><br>산모가 출산 후 어떤 어려움을 겪는지 심층적으로 파악하고, 산후 산모가 겪는 심리적 불안과 스트레스의 심층적인 원인 및 니즈를 파악하는 것을 목적으로 이해관계자와 산모의 심층 인터뷰를 진행하였습니다. 인터뷰의 질문은 산모의 심리적 불안 및 스트레스를 유발하는 원인들을 중심으로 자신의 경험을 편안하게 이야기 할 수 있도록 개방형 질문지를 제작하였습니다.' },
          { title: '인터뷰 분석 및 인사이트', body: '인터뷰 내용 분석을 위하여 <strong>어피니티 다이어그램</strong>을 활용한 키워드화를 통해 3가지 상위 요인을 분류한 후, 핵심 문제점과 니즈를 중심으로 총 12가지 키워드를 도출하였습니다. 이후, 사용자 경험의 흐름과 감정 변화에 따른 서비스 아이디어 방향성 검증 및 터치포인트 파악을 위해 <strong>고객 여정 맵</strong>을 활용하여 핵심 시사점을 도출하였습니다.' },
        ] },
        { type: 'tabs', items: [
          { label: '어피니티 다이어그램', blocks: [{ type: 'figure', src: 'assets/img/pp-affinity.jpg', caption: '어피니티 다이어그램' }] },
          { label: '요인 분류', blocks: [{ type: 'figure', src: 'assets/img/pp-insight.jpg', caption: '외적 요인 · 내적 요인 분류' }] },
          { label: '고객 여정 맵', blocks: [{ type: 'figure', src: 'assets/img/pp-journey.jpg', caption: '고객 여정 맵' }] },
        ] },
        { type: 'text', body: '<strong>이를 통해 산모의 산후 심리적 불안은 주로 자기 인지 요인에서 발생하며, \'진로 고민\', \'개인 활동 제약\', \'개인 시간 부족\', \'자아 주체성 상실 우려\' 등 공통적인 문제들이 확인되었고, 이를 위해 산모들의 심리적 불안과 스트레스를 관리할 수 있는 심리 상태 관리 솔루션 서비스의 필요성을 확인할 수 있었습니다.</strong>' },
        { type: 'text', topic: true, title: '사용자 행동유형에 따른 군집 분석', body: '온라인 설문조사 데이터 군집 분석을 통한 3가지 페르소나 도출' },
        { type: 'cards', layout: 'stack', items: [
          { title: '온라인 설문조사', body: '<strong>출산 및 육아 경험이 있는 20~40대 사용자 91명</strong><br>사용자 페르소나 도출을 목적으로 군집 분석을 진행하기 위한 설문조사를 진행하였습니다. 앞선 심층 인터뷰 결과로 도출된 외적 요인 중 \'신체적 요인\'은 정신적 건강 솔루션 서비스와 상이하다고 판단하여 해당 요인을 제외한 <strong>\'사회적 요인\'과 \'정신적 요인\'</strong>으로 질문지를 구성하여 온라인 설문을 진행했습니다.' },
          { title: '군집 분석', body: 'SPSS를 활용하여 설문조사 데이터를 기반으로 <strong>군집분석 실행 결과 총 3가지 유형</strong>으로 나누어졌습니다. 이후, 각 군집 별 행동 데이터에 대한 교차 분석 결과를 바탕으로 페르소나를 구체화하였습니다. 앞선 데이터를 기반으로 페르소나를 구체화하기 위해 \'User Segment\'와 \'Persona Matrix\'를 제작하였습니다.' },
        ] },
        { type: 'cards', cols: 3, group: '3가지 군집 유형', items: [
          { title: 'A 군집', body: '높은 자기애 기반 자기 계발 욕구형<br>자기에 대한 확신과 믿음이 강하며 자기 계발의 강한 니즈가 높음' },
          { title: 'B 군집', body: '경우에 따른 자기 비난형<br>일반적으로 자신에 대한 믿음은 높으나 부정적인 상황이 발생했을 때, 자기 비난의 정도가 높음' },
          { title: 'C 군집', body: '아이 중심 생활형<br>아이 중심 생활로 산모 자신과 일상을 돌아보지 못함' },
        ] },
        { type: 'tabs', items: [
          { label: '군집 분석 결과', blocks: [{ type: 'figure', src: 'assets/img/pp-anova.jpg', caption: '군집 분석 결과' }] },
          { label: 'User Segment', blocks: [{ type: 'figure', src: 'assets/img/pp-segment.jpg', caption: 'User Segment' }] },
          { label: 'Persona Matrix', blocks: [{ type: 'figure', src: 'assets/img/pp-matrix.jpg', caption: 'Persona Matrix' }] },
        ] },
      ],
      design: [
        { type: 'text', title: '서비스 기회 영역 도출 및 방향성 제안', body: '페르소나에 따른 서비스 시나리오 도출' },
        { type: 'cards', cols: 3, ratio: 'auto', fit: 'contain', items: [
          { img: 'assets/img/pp-persona-a.jpg', title: 'Persona A | 높은 자기애 기반 자기 계발 욕구형' },
          { img: 'assets/img/pp-persona-b.jpg', title: 'Persona B | 경우에 따른 자기 비난형' },
          { img: 'assets/img/pp-persona-c.jpg', title: 'Persona C | 아이 중심 생활형' },
        ] },
        { type: 'figure', src: 'assets/img/pp-scenario.jpg', caption: '페르소나별 사용자 행동 · 서비스 솔루션 시나리오' },
      ],
      result: [
        { type: 'text', title: '사용자 검증을 통한 최종 서비스 방향성 및 서비스 블루프린트 제안', body: '프로토 타입을 활용한 사용자 검증<br><strong>검증 대상자</strong> 출산 경험이 있는 20~40대 사용자 5명<br>디지털 프로토타이핑을 바탕으로 전화 인터뷰, 온라인 화상 인터뷰, 지면 인터뷰를 통해 사용자 검증을 진행하였습니다.' },
        { type: 'cards', cols: 3, group: '검증 내용', items: [
          { title: '기능 1', body: '짧은 시간도 계획적으로 쓰고 싶음', points: [['개선', '짧고 구체적인 계획 제공 필요']] },
          { title: '기능 2', body: '시기별·증상별 정보가 도움됨', points: [['개선', '더 명확한 시기·증상 안내 필요']] },
          { title: '기능 3', body: '나 자신을 위한 돌봄도 필요함', points: [['개선', '취향 맞춤 콘텐츠 제공 필요']] },
        ] },
        { type: 'text', topic: true, title: '사용자 검증을 반영한 최종 서비스 방향성', body: '<strong>대한민국의 산모들이 오직 자신에게 집중할 수 있도록, 산모의 모든 순간, 함께 곁을 지키는 심리 케어 서비스</strong>' },
        { type: 'cards', cols: 3, items: [
          { title: '자투리 시간 활용 플랜 및 습관 생성 서비스', body: '산모 자기 자신을 위한 미래 계획 플랜 서비스 제공', points: ['더 빠르고 명확한 솔루션 제공을 위한 목적 카테고리 선택', '산모의 여유시간에 맞춰 습관 및 루틴 알림 서비스 제공'] },
          { title: '시기, 증상별 위기 상황 예방 및 대처 서비스', body: '육아 시기 및 증상별 발생할 수 있는 사고 대응 가이드 제공', points: ['카테고리 기준 선택 데이터 제공 (시기/증상)'] },
          { title: '자아 되찾기 및 자기 돌봄 서비스', body: '잃어버린 나를 다시 되찾기 위한 질문 및 소비 콘텐츠 서비스 제공', points: ['음식, 취미, 사교, 건강 카테고리 중 질문 선택', '선택한 질문 관련 자투리 시간에 소비할 수 있는 콘텐츠 제공'] },
        ] },
        { type: 'figure', src: 'assets/img/pp-direction.jpg', caption: '사용자 검증을 반영한 최종 서비스 방향성' },
        { type: 'text', topic: true, title: '유형별 핵심 가치', body: '스트레스의 원인인 자기인지 요인에 긍정적인 영향을 주는 세 가지 가치로, <strong>산모의 자존감과 자신감 회복</strong>을 돕습니다.' },
        { type: 'cards', cols: 3, items: [
          { title: '자아 주체성', body: '<strong>A 유형 · 높은 자기애 기반 자기 계발 욕구형</strong><br>자투리 시간에 맞춘 알림으로 나를 위한 미래 계획 습관을 만들어, 스스로 삶의 주체가 되도록 돕습니다.' },
          { title: '자아 보호성', body: '<strong>B 유형 · 경우에 따른 자기 비난형</strong><br>육아 사건·사고 데이터 기반의 상황별 대응 매뉴얼로, 서툰 육아로 인한 자책감을 줄입니다.' },
          { title: '자아 회복성', body: '<strong>C 유형 · 아이 중심 생활형</strong><br>잊고 지낸 나에 대한 질문과 관련 콘텐츠로, 육아로 잃어버린 나를 다시 찾도록 돕습니다.' },
        ] },
        { type: 'text', title: '실무적, 학문적 시사점', body: '설문 분석 결과, 산모의 심리적 불안과 스트레스의 가장 큰 원인은 <strong>\'자아 존중감\'과 \'자아 효능감\'</strong>이었습니다. 또한 초기 진단에서 끝나는 기존 서비스의 한계를 확인하고, <strong>주기적인 심리 관리와 자존감 회복</strong>이 필요하다는 방향을 제시했습니다.<br><br>단순한 심리 치료나 육아 정보 제공을 넘어, <strong>산모가 잃어버린 자아를 되찾고 출산·육아 경험 전반을 개선</strong>하는 데 의의가 있습니다.' },
      ],
    },
  },

];

/* 메인 Projects 섹션 구성
 * featured: 대표 프로젝트 — lead는 크게, items는 아래 2열 카드 (모두 케이스스터디로 연결)
 *   mock: 카드 이미지를 기기 목업으로 표시 (type: phone | browser). 없으면 프로젝트 thumb 사용
 * more: 추가 프로젝트 — 한 줄 목록. link가 project.html이면 케이스스터디, 그 외는 외부 자료로 열림 */
const PROJECT_GROUPS = {
  featured: {
    no: '01',
    title: '신한 SOL페이 UX/UI 고도화 & 신규 서비스 기획',
    badge: '대표 프로젝트',
    sub: '2025.01 – 현재',
    lead: { id: 'cardmove', category: '신규 서비스 구축', mock: { type: 'phone', src: 'assets/img/mock-cardmove.png' }, desc: '복잡한 6개 정기결제 정책을 하나의 플로우로 통합한 B2C 서비스 기획', tags: ['IA설계', '프로세스통합', '상세화면정의', '예외케이스'] },
    items: [
      { id: 'loan', category: '신규 서비스 구축', mock: { type: 'phone', src: 'assets/img/mock-loan.png' }, desc: '대출 신청 전 과정의 상세 정책 수립 및 공통 프로세스 설계', tags: ['여신프로세스', '공통모듈설계', '인증절차개선'] },
      { id: 'databada', category: '어드민 개선', mock: { type: 'browser', src: 'assets/img/mock-databada.png' }, desc: 'B2B 계약·정산 프로세스 단일화 및 실시간 실적 대시보드 구축', tags: ['어드민설계', '동선단일화', '권한정책'] },
    ],
    // 카드 아래 텍스트 목록 (02와 같은 형식, 이미지 없음)
    extras: [
      { label: '가이드 구축', title: 'UX Writing 가이드 및 용어 체계 구축', desc: 'UX 라이팅 가이드북 제작 및 금융 용어 표준화 단어장 구축', tags: ['UX라이팅', '용어표준화', '리서치'], link: 'project.html?id=ux-writing' },
      { label: '서비스 개선', title: '신한 SOL페이 메인 화면 개선', desc: '카드 탐색 구조 재구성 및 소비 패턴 기반 카드 분류', tags: ['카드탐색구조', '구조테스트', '리서치'], link: 'project.html?id=solpay-main' },
    ],
  },
  more: {
    no: '02',
    title: '주요 프로젝트',
    items: [
      { label: '2023.06 – 2024.12', title: 'LG전자 WEB/오픈마켓 기획전', desc: '자사 이커머스 콘텐츠 및 주요 오픈마켓 기획전 제작·운영', tags: ['이커머스', '기획전운영', '오픈마켓'], link: 'project.html?id=lge' },
      { label: '2022.08 – 2023.05', title: '이마트24 APP/WEB', desc: '운영 데이터 정립 및 5단계 CS 대응 프로세스 체계화', tags: ['운영프로세스', '이슈대응', 'QA검수', '문서화'], link: 'project.html?id=emart24' },
      { label: '2022.05 – 2022.08', title: '벨리곰 NFT 프로젝트', desc: 'PFP NFT 상위 기획 및 브랜드 민팅 사이트 구조 설계', tags: ['상위기획', '유틸리티설계', '웹사이트구축'], link: 'project.html?id=bellygom' },
    ],
  },
};

const SECTION_ORDER = [
  { key: 'background', no: '01', label: '배경', en: 'Background' },
  { key: 'problem', no: '02', label: '문제정의', en: 'Problem' },
  { key: 'research', no: '03', label: '리서치', en: 'Research' },
  { key: 'design', no: '04', label: '화면설계', en: 'Design' },
  { key: 'result', no: '05', label: '결과', en: 'Result' },
];
