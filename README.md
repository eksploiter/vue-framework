<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
</head>
<body>
  <h1>Vue 3 프로젝트 - 기본 구조 및 설정</h1>

  <h2>📌 개요</h2>
  <p>
    이 프로젝트는 <strong>Vue 3</strong>와 <strong>Vite</strong>를 기반으로 한 웹 애플리케이션입니다.<br />
    핵심 목표는 컴포넌트 기반 프론트엔드 개발 방식과 상태 관리, 라우팅 등의 
    <strong>SPA(Single Page Application)</strong> 구조를 학습하는 데 있습니다.
  </p>

  <h2>🔍 주요 학습 내용</h2>
  <ul>
    <li>Vue 3 Composition API 및 컴포넌트 기반 개발</li>
    <li><strong>Pinia</strong>를 활용한 상태 관리</li>
    <li><strong>Vue Router</strong>를 통한 페이지 라우팅</li>
    <li><strong>Vite</strong> 개발 서버 및 빌드 도구 사용법</li>
    <li>컴포넌트 단위 파일 구조 관리</li>
    <li>기본적인 UI 구현 및 Vue 기능 익히기</li>
  </ul>

  <h2>🛠️ 프로젝트 기능</h2>
  <ol>
    <li>라우팅 처리: HomeView, AboutView 등 페이지 전환 구현</li>
    <li>컴포넌트 관리: HelloWorld.vue, WelcomeItem.vue 등</li>
    <li>Pinia 상태관리: 전역 상태 저장소 구성</li>
    <li>라우터 설정: router/index.js를 통한 SPA 구성</li>
    <li>main.js에서 앱 구성 및 mount</li>
  </ol>

  <h2>💻 개발 환경</h2>
  <ul>
    <li><strong>프레임워크</strong>: Vue 3</li>
    <li><strong>상태관리</strong>: Pinia</li>
    <li><strong>라우터</strong>: Vue Router</li>
    <li><strong>개발 도구</strong>: Vite</li>
    <li><strong>패키지 매니저</strong>: npm</li>
    <li><strong>IDE</strong>: Visual Studio Code</li>
  </ul>

  <h2>📁 프로젝트 구조</h2>
  <pre><code>
src/
  ├── assets/              # 정적 파일
  ├── components/          # 재사용 가능한 컴포넌트
  │   └── icons/
  ├── views/               # 라우팅 페이지 컴포넌트
  ├── router/              # Vue Router 설정
  ├── stores/              # Pinia 상태 저장소
  ├── App.vue              # 최상위 컴포넌트
  └── main.js              # 앱 진입점
  </code></pre>

  <h2>⚙️ 설치 및 실행 방법</h2>
  <h4>1. 프로젝트 클론</h4>
  <pre><code>git clone &lt;repository-url&gt;
cd &lt;project-folder&gt;</code></pre>

  <h4>2. 의존성 설치</h4>
  <pre><code>npm install</code></pre>

  <h4>3. 개발 서버 실행</h4>
  <pre><code>npm run dev</code></pre>

  <h4>4. 빌드 (배포용)</h4>
  <pre><code>npm run build</code></pre>

  <h4>5. 프리뷰 (빌드 결과 확인용)</h4>
  <pre><code>npm run preview</code></pre>

  <h2>🔗 참고 자료</h2>
  <ul>
    <li><a href="https://vuejs.org" target="_blank">Vue 공식 문서</a></li>
    <li><a href="https://vitejs.dev" target="_blank">Vite 공식 문서</a></li>
    <li><a href="https://pinia.vuejs.org" target="_blank">Pinia 공식 문서</a></li>
    <li><a href="https://router.vuejs.org" target="_blank">Vue Router 공식 문서</a></li>
  </ul>
</body>
</html>
