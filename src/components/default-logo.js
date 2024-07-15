/*
default-logo 컴포넌트
기능 
- 메인 로고 클릭 시 : 메인페이지 이동
- 마켓컬리 클릭 시 : 메인 페이지 이동
사용 페이지 : 헤더
이슈번호 : #20

cf. 
- 컴포넌트 사용법
html에 <default-logo></default-logo> 붙이기 
*/

class DefaultLogo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
    <style>
      .logo-and-switch{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: 12px;
        position: relative;
        white-space: nowrap;
      }
      .switch-bar {
        width: 173px;
        height: 32px;
        display: flex;
        flex-flow: row nowrap;
        gap: 12px;
        align-items: center;
        font-weight: 600;
        font-size: 21.33px;
        line-height: 31.99px;
      }
      span {
      font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
      color: #5F0080;
      }
      .market-karly a {
        text-decoration: none;
      }
      .beauty-karly{
        color: #898989;
        cursor: pointer;
      }
      .beauty-karly:hover {
        color: #5F0080;
      }
      .beauty-karly-bar {
        top: 0px;
        position: absolute;
      }
      .beauty-karly-new {
        position: absolute;
        top: 0;
        left: 273px;
      }
      </style>
    
    <div class="logo-and-switch">
      <a href="/src/index.html"><svg width="82" height="42" viewBox="0 0 82 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_6404_350)">    
      <path d="M62.5 0.965008C63.526 0.408008 64.966 0.247008 65.856 1.07201C66.746 1.89701 66.532 3.12001 65.856 5.04501C65.856 5.04501 64.351 9.11101 62.801 13.307L62.403 14.387C60.989 18.217 59.641 21.874 59.476 22.35C57.978 26.595 61.443 26.472 63.5 22.198C64.659 19.804 66.144 15.841 66.144 15.841C66.668 14.278 66.826 13.337 66.503 13.013C66.396 12.9 66.548 12.761 66.683 12.69C68.952 11.541 71.313 12.618 70.019 16L69.965 16.138C69.578 17.116 67.285 22.871 67.285 22.871C66.609 24.531 66.69 26.107 67.703 26.107C68.389 26.103 69.163 25.722 70.007 25.019C71.825 23.515 73.229 20.707 73.734 19.565C73.964 19.057 74.821 17.145 75.5 15.204C75.736 14.539 75.869 13.844 75.895 13.139C75.8776 13.0519 75.8867 12.9615 75.9213 12.8796C75.9559 12.7978 76.0143 12.7282 76.089 12.68C76.6032 12.4061 77.1764 12.262 77.759 12.26C78.0413 12.2547 78.3209 12.3158 78.5754 12.4382C78.8298 12.5607 79.052 12.7411 79.224 12.965C79.667 13.563 79.79 14.544 79.327 15.773C79.207 16.093 75.552 25.731 75.552 25.731V25.757C77.593 24.534 79.422 24.444 80.505 24.903L80.502 24.89C81.997 25.537 82.492 27.33 81.44 28.449C81.337 28.559 81.078 28.533 81.078 28.359C80.984 27.106 78.561 24.864 74.969 27.284L74.824 27.669L73.756 30.477C71.136 37.495 68.353 42.613 64.341 41.477C61.653 40.717 61.964 36.87 64.856 33.687C66.8586 31.5511 69.0288 29.5788 71.346 27.789C71.414 27.601 71.476 27.439 71.534 27.278C71.812 26.498 72.025 25.844 72.326 25.013L72.485 24.495C72.307 24.695 71.987 25.068 71.773 25.307C71.061 26.107 69.279 28.064 66.444 27.514L66.21 27.462C64.16 26.954 63.602 25.476 63.555 24.185C61.413 26.841 59.204 27.611 57.748 27.575C55.8 27.527 54.37 26.061 55.321 23.285C56.379 20.179 60.821 7.95301 62.116 4.28501C62.601 2.70501 62.782 1.70501 62.3 1.31101C62.177 1.20801 62.352 1.04601 62.5 0.965008ZM70.864 29.743C69.761 30.623 65.338 34.273 64.112 37.184C63.607 38.381 63.736 39.333 64.6 39.417C66.56 39.611 68.612 35.599 70.828 29.905L70.864 29.743ZM16.028 5.35201C15.941 5.68401 14.709 9.21201 13.327 13.101L13.118 13.687L12.908 14.276L12.693 14.88C17.384 13.757 25.757 8.31001 26.728 4.79501C26.848 4.63401 27.018 4.57501 27.294 4.76001C27.789 5.09001 27.98 5.91501 27.789 6.67801C27.025 9.71601 21.373 14.019 16.41 16.232C17.022 17.869 19.092 22.499 20.616 25.343C22.279 28.462 24.036 29.918 26.763 30.08C28.223 30.165 29.777 29.633 30.656 28.86L30.804 28.72L30.791 28.75C30.985 28.546 31.302 28.827 31.157 29.073C30.601 29.9022 29.8614 30.5921 28.9957 31.0893C28.13 31.5865 27.1614 31.8776 26.165 31.94C19.82 32.367 17.391 28.07 12.861 17.446C12.495 17.572 12.052 17.734 11.606 17.896C11.531 18.083 9.53599 23.538 9.47599 23.719C8.53199 26.589 8.47099 28.161 9.11799 28.614C9.26299 28.704 9.19199 28.947 8.93999 29.028C6.41299 29.824 4.08699 28.332 5.38099 24.586C6.542 21.27 11.071 8.40601 12.295 4.96001C12.722 3.66601 12.492 2.83501 11.803 2.65401C8.50599 1.78001 0.876995 8.74901 1.97099 15.184C2.16099 16.304 2.95099 16.931 3.34899 16.847C3.37068 16.8427 3.3931 16.8438 3.41424 16.8503C3.43537 16.8568 3.45455 16.8685 3.47004 16.8843C3.48553 16.9001 3.49683 16.9195 3.50294 16.9407C3.50904 16.962 3.50975 16.9844 3.50499 17.006C3.39417 17.3856 3.1387 17.7064 2.79361 17.8994C2.44852 18.0925 2.04142 18.1422 1.65999 18.038C0.489995 17.782 0.106995 16.527 0.0429947 15.88C-0.601005 9.22001 6.14799 1.23001 12.389 0.580008C14.767 0.330008 16.998 1.54001 16.028 5.35201ZM40.068 15.265L40.008 15.472L37.178 23.632C36.874 24.482 37.078 25.369 37.679 25.534C39.436 26.016 41.707 23.389 42.81 20.801C43.3403 19.5445 43.8325 18.2722 44.286 16.986C44.868 15.343 45.392 13.803 45.069 13.078C44.994 12.91 45.114 12.822 45.292 12.728C45.797 12.473 47.518 11.903 48.433 12.796C49.128 13.47 49.042 14.567 48.403 16.233L48.307 16.475L48.527 16.202C51.23 12.902 53.319 11.91 55.09 12.605L55.237 12.667C57.618 13.741 56.383 17.882 53.121 18.147C52.921 18.164 52.765 18.021 52.963 17.74C53.358 17.135 53.319 15.831 52.167 15.718C51.015 15.605 49.337 16.925 48.129 18.562C47.045 20.012 45.929 22.473 44.807 25.835C44.535 26.653 44.664 26.847 44.697 26.902C44.7047 26.9165 44.7087 26.9326 44.7087 26.949C44.7087 26.9654 44.7047 26.9815 44.697 26.996C44.554 27.268 43.732 27.592 42.937 27.592C41.312 27.585 40.646 26.647 40.97 25.155C39.122 26.919 37.259 27.769 35.615 27.621C35.2533 27.5896 34.9026 27.4805 34.5869 27.3012C34.2712 27.1219 33.998 26.8766 33.7857 26.5821C33.5735 26.2875 33.4272 25.9506 33.3571 25.5944C33.2869 25.2382 33.2943 24.8711 33.379 24.518C31.953 26.327 29.837 27.786 27.682 27.585C25.527 27.385 24.182 25.919 24.88 22.797C25.47 20.199 28.2195 13.687 31.5 11.5C33 10.5 34.6656 10.678 35 10.5C36.5 11 36.7231 11.4523 36.207 12.9468C34 13 32.5 14.5 31.157 16.202C29.2556 18.1878 28.1559 21.5192 28 22C27.263 24.287 28.365 25.709 29.41 25.766C30.455 25.826 31.84 24.806 32.83 23.263C34.59 20.739 35.411 17.578 36.207 15.381C36.411 14.821 37 13.5 36.207 12.9468C35.99 13.0425 34.792 10.614 35 10.5C37 10 40.951 12.017 40.068 15.265Z" fill="#5F0080"/>
      </g>
      <defs>
      <clipPath id="clip0_6404_350">
      <rect width="82" height="42" fill="white"/>
      </clipPath>
      </defs>
      </svg></a>

      <div class="switch-bar">
        <span class="market-karly"><a href="/src/index.html">마켓칼리</a></span>
        <span aria-hidden="true"><img src="/default-switch-bar.png" alt="스위치 바" /></span>
        <span class="beauty-karly">뷰티칼리</span>
      </div>

      <img class="beauty-karly-new" src="/beauty-karly-new.png" alt="뷰티칼리 new 아이콘">
    </div>
    `;
  }
}

customElements.define('default-logo', DefaultLogo);
