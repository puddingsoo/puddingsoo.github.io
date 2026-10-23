# Soojin An — Portfolio

HTML/CSS/JS만으로 만든 정적 포트폴리오 사이트입니다. 빌드 과정 없이 GitHub Pages에 바로 올릴 수 있습니다.

## 구조

```
index.html        Hero / About / Projects / Research / Contact
project.html      케이스스터디 상세 (project.html?id=cardmove)
css/style.css     전체 스타일
js/data.js        모든 텍스트·프로젝트 데이터 ← 내용 수정은 여기서
js/common.js      공통 (네비, 모션, [작성 필요] 표시)
js/main.js        메인 페이지 렌더링
js/project.js     케이스스터디 렌더링
assets/img/       PDF에서 추출한 이미지
```

## 내용 수정

- 텍스트는 모두 `js/data.js`에 있습니다.
- 사이트에 주황색 점선으로 보이는 **[작성 필요]** 는 원본 PDF에 없던 내용입니다.
  `{ type: 'todo', ... }` 블록이나 `'[작성 필요]'` 문자열을 실제 내용으로 바꾸면 사라집니다.
- 케이스스터디는 `background → problem → research → design → result` 순서로 렌더링됩니다.

## 로컬에서 보기

```bash
cd portfolio-site
python3 -m http.server 8000
# http://localhost:8000
```

## GitHub Pages 배포

1. 이 폴더 내용을 GitHub 저장소 루트에 올립니다 (예: `<아이디>.github.io` 저장소).
2. Settings → Pages → Source: `Deploy from a branch`, Branch: `main` / `(root)`.
3. 몇 분 후 `https://<아이디>.github.io` 에서 확인할 수 있습니다.
