<template>
  <!-- 右側固定於畫面中間 -->
  <div class="fixed right-0 z-50 transform -translate-y-1/2 top-1/2 group">
    <!-- 預設寬度 w-12，hover 時展開到 w-40 -->
    <div
      class="flex flex-col w-12 overflow-hidden transition-all duration-300 rounded-l-lg bg-navBg group-hover:w-40">
      <!-- GitHub -->
      <a
        href="https://github.com/d-ben-b"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center h-12 px-2">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub"
          class="w-6 h-6" />
        <!-- 預設 opacity-0，hover 時才顯示 -->
        <span
          class="ml-3 transition-opacity duration-300 opacity-0 text-text group-hover:opacity-100 whitespace-nowrap">
          GitHub
        </span>
      </a>

      <!-- LinkedIn -->
      <a
        href="https://www.linkedin.com/in/d-ben-b-a85b00290"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center h-12 px-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="LinkedIn"
          class="w-6 h-6" />
        <span
          class="ml-3 transition-opacity duration-300 opacity-0 text-text group-hover:opacity-100 whitespace-nowrap">
          LinkedIn
        </span>
      </a>
    </div>
  </div>
</template>
