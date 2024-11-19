import React, { useState, useEffect } from "react";

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
  ];

  // 자동 슬라이드 함수
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 10000); // 10초 간격으로 슬라이드 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, [slides.length]);

  // 수동 슬라이드 변경 함수
  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4 fixed w-full top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Planaz</h1>
          <nav className="space-x-4">
            <a href="#carousel" className="hover:underline">
              Home
            </a>
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#schedule" className="hover:underline">
              Schedule
            </a>
            <a href="#reviews" className="hover:underline">
              Reviews
            </a>
          </nav>
        </div>
      </header>

      {/* Carousel Section */}
      <section id="carousel" className="pt-20 bg-gray-200">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-1000"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh]"
              >
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Planaz</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Planaz는 디지털 캘린더 다이어리 꾸미기 기능을 통해 사용자가 자신의
            시간을 효율적으로 관리하면서 창의적인 기록을 남길 수 있도록 돕는
            서비스입니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* 항목 1 */}
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                다양한 속지와 맞춤형 시트지
              </h3>
              <p className="text-gray-600">
                Planaz는 사용자들이 다양한 속지와 맞춤형 시트지를 선택해
                자신만의 스타일로 일정을 꾸밀 수 있도록 지원합니다.
              </p>
            </div>

            {/* 항목 2 */}
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">효과적인 업무 관리</h3>
              <p className="text-gray-600">
                체계적인 업무 관리와 목표 달성을 위한 강력한 도구들을
                제공합니다.
              </p>
            </div>

            {/* 항목 3 */}
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">하루 기록</h3>
              <p className="text-gray-600">
                매일의 감정과 생각을 자유롭게 기록하며, 하루를 돌아보고 성찰할
                수 있는 공간을 제공합니다.
              </p>
            </div>

            {/* 항목 4 */}
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">그룹 스페이스</h3>
              <p className="text-gray-600">
                그룹 일정 관리 및 하루 기록을 공유하며, 팀워크를 강화하고 협업을
                촉진할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Schedule Management</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            Easily organize and manage your time with our intuitive scheduling
            tools.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Plan</h3>
              <p className="text-gray-600">
                Define clear goals and milestones to stay on track.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Execute</h3>
              <p className="text-gray-600">
                Seamlessly collaborate and execute tasks efficiently.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Review</h3>
              <p className="text-gray-600">
                Reflect on your progress and make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 리뷰 */}
      <section id="reviews" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            사용자의 의견
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* 이미지 영역 */}
            <div className="flex-shrink-0">
              <img
                src="/images/reviewer.jpg"
                alt="Reviewer"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-md"
              />
            </div>

            {/* 평가 영역 */}
            <div className="text-gray-800 max-w-2xl">
              <p className="text-xl font-semibold">
                "Planaz를 사용하면서 하루를 기록하는 습관을 갖게 되었어요.
                꾸미는 재미도 있지만, 매일의 감정과 목표를 기록하면서 스스로를
                돌아볼 수 있는 시간이 생겼답니다. 그룹 일정 관리 기능도 있어
                스터디 모임에서도 정말 유용하게 사용하고 있어요."
              </p>
              <p className="mt-4 text-sm text-gray-500">
                - 26세 취업 준비생, 이수진
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 서비스 정보 추가 기획이 필요한 파트 */}
            {/* <div>
              <h2 className="text-xl font-bold mb-2">Muricture</h2>
              <ul>
                <li>
                  <a href="/terms" className="hover:underline">
                    이용약관
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:underline">
                    개인정보처리방침
                  </a>
                </li>
                <li>
                  <a href="/support" className="hover:underline">
                    고객센터
                  </a>
                </li>
              </ul>
            </div> */}

            {/* 회사 정보 */}
            <div>
              <h2 className="text-xl font-bold mb-2">회사 정보</h2>
              <p>대표자명: 서성조</p>
              <p>주소: 서울특별시 종로구 새문안로 41, (신문로2가 170, 2층)</p>
              <p>문의 전화번호: 050-6694-9372</p>
              <p>
                문의 이메일:{" "}
                <a
                  href="mailto:muricture@muricture.com"
                  className="hover:underline"
                >
                  muricture@muricture.com
                </a>
              </p>
              <p>사업자등록번호: 576-81-03240</p>
              <p>통신판매업신고번호: 2024-서울종로-0826</p>
              <p>개인정보보호책임자: 서성조</p>
            </div>
          </div>

          {/* 저작권 */}
          <div className="text-center mt-6">
            <p>Copyright Muricture 2024. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
