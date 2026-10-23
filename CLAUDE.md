# 안수진 포트폴리오 사이트

빌드 과정 없는 정적 사이트(HTML/CSS/JS)이고, GitHub Pages로 배포해요.
- 저장소: https://github.com/puddingsoo/puddingsoo.github.io (main 브랜치, 루트 폴더)
- 사이트: https://puddingsoo.github.io

## 작업 규칙 (사용자가 정한 것)

- **문구는 원문에 있는 내용만 써요.** 논문·Figma 슬라이드에 없는 내용을 지어내지 않아요. 원문을 다듬어 읽기 쉽게 만드는 건 괜찮지만 새 주장은 넣지 않아요. 논문과 슬라이드가 다르면 논문을 따르고 사용자에게 알려요.
- **배포는 사용자가 "끝났다"고 할 때 한 번에 해요.** 수정할 때마다 커밋은 하되 `git push`는 하지 않아요. 사용자가 올려 달라고 하면 그때 push해요.
- **공개 전에 이미지 속 개인정보를 확인해요.** 실명, 계정 ID, 내부 문서 URL, 실적 수치가 보이면 블러 처리해요. 사용자 본인 이름(안수진)은 남겨도 돼요.
- 사용자는 비개발자예요. 설명은 한국어로 쉽게 하고, 변경한 내용은 화면 기준으로 설명해요.

## 구조

```
index.html        메인 (Hero / About / Projects / Research / Contact)
project.html      상세 페이지 (project.html?id=cardmove 등)
css/style.css     전체 스타일
js/data.js        모든 텍스트·프로젝트 데이터 ← 내용 수정은 대부분 여기
js/main.js        메인 렌더링
js/project.js     상세 페이지 렌더링 (블록 타입별 HTML)
assets/img/       이미지
assets/og-image.png  링크 공유 미리보기 이미지 (프로필 사진이 뜨지 않도록 지정)
```

프로젝트 id: cardmove, loan, databada, solpay-main, ux-writing (신한 SOL페이 그룹), emart24, lge, bellygom, ai-persona, midlife-persona, smart-tourism, postpartum (Research Paper).

## 로컬 미리보기

```bash
python3 -m http.server 8000   # 이 폴더에서 실행 → http://localhost:8000
```

PC 확인은 1440px, 모바일 확인은 375px 기준이에요. 모바일 분기점은 760px이에요.

## js/data.js 블록 옵션 (자주 쓰는 것)

- `cards`
  - `layout: 'stack'`: 한 줄에 하나씩 세로로 쌓아요. 줄글이 긴 박스에 써요.
  - `layout: 'row'`: 왼쪽 이미지 + 오른쪽 글이에요.
  - `cols: 2 | 3`: 나란히 배치해요.
  - 이미지 카드 옵션: `ratio`(예: `'4 / 3'`, `'auto'`), `fit: 'contain'`, `bg`(이미지 틀 배경색)
  - `imgWidth: '50%'`: stack 카드 이미지의 PC 크기예요. 기본은 70%예요.
- `figure`: `width: '90%'`로 PC에서 이미지 크기를 지정해요. 기본은 70%예요. 탭(`tabs`) 안의 figure에도 적용돼요.
- `compare`: AS IS / TO BE 표예요. 모바일에서는 자동으로 세로로 쌓이고 TO BE가 파란 박스로 강조돼요.
- 프로젝트의 `thumb`: 상세 페이지 대표 이미지예요.
  - `coverBg`: 이미지 옆 남는 공간의 배경색이에요.
  - 신한 SOL페이 그룹만 PC에서 대표 이미지를 70%로 줄여 보여줘요(`is-inset`). 다른 프로젝트는 틀을 꽉 채워요.

## PC 이미지 규칙 (사용자 선호)

- PC에서 이미지가 크면 부담스러워해요. 배경 틀은 그대로 두고 **안의 이미지만 줄여서** 여백을 늘리는 방식을 좋아해요.
- 이미지 높이가 서로 안 맞는 카드는 세로 배치나 "왼쪽 이미지 + 오른쪽 글"로 바꿔요.
- 모바일은 화면 폭에 꽉 차게 유지해요.
