// 네비게이션 토글
document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.getElementById('navbar-toggle');
  const navbarMenu = document.getElementById('navbar-menu');
  
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', function() {
      navbarMenu.classList.toggle('active');
    });
  }
  
  // 드롭다운 메뉴 모바일 지원
  const dropdowns = document.querySelectorAll('.dropdown > a');
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropdownMenu = this.nextElementSibling;
        if (dropdownMenu) {
          dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        }
      }
    });
  });
  
  // 스크롤 시 헤더 스타일 변경
  const header = document.querySelector('.site-header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
  
  // 부드러운 스크롤
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}); 