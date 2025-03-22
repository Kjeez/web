import React, { useRef, useState, useCallback, useEffect } from 'react';

const VideoScroll = () => {
  const scrollRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isCentered, setIsCentered] = useState(false);

  const videos = [
    { id: 1, src: '/testimg.jpg' },
    { id: 2, src: '/testimg.jpg' },
    { id: 3, src: '/testimg.jpg' },
    { id: 4, src: '/testimg.jpg' },
    { id: 5, src: '/testimg.jpg' },
    { id: 6, src: '/testimg.jpg' },
    { id: 7, src: '/testimg.jpg' },
    { id: 8, src: '/testimg.jpg' },
    { id: 9, src: '/testimg.jpg' },
    { id: 10, src: '/testimg.jpg' },
  ];

  useEffect(() => {
    const handleWheel = (e) => {
      if (!isCentered || !scrollRef.current) return;
      e.preventDefault();
      
      const startTime = performance.now();
      const element = scrollRef.current;
      const scrollSpeed = 5; // Mouse wheel
      const touchpadBaseSpeed = 500; // Touchpad
      const maxScrollLeft = element.scrollWidth - element.clientWidth;
      const currentScrollLeft = element.scrollLeft;
      const isTouchpad = Math.abs(e.deltaY) < 40;

      console.log(`${isTouchpad ? 'Touchpad' : 'Mouse'} deltaY:`, e.deltaY, 'Start time:', startTime);

      const delta = isTouchpad ? Math.sign(e.deltaY) * touchpadBaseSpeed : e.deltaY * scrollSpeed;
      const newScrollLeft = Math.max(0, Math.min(maxScrollLeft, currentScrollLeft + delta));
      
      if (isTouchpad) {
        element.scrollLeft = newScrollLeft; // Instant for touchpad
      } else {
        element.scrollTo({ left: newScrollLeft, behavior: "smooth" }); // Smooth for mouse
      }

      const updateTime = performance.now();
      console.log(`${isTouchpad ? 'Touchpad' : 'Mouse'} update time (ms):`, updateTime - startTime);

      requestAnimationFrame(() => {
        const renderTime = performance.now();
        console.log(`${isTouchpad ? 'Touchpad' : 'Mouse'} render time (ms):`, renderTime - updateTime);
        console.log(`${isTouchpad ? 'Touchpad' : 'Mouse'} total time (ms):`, renderTime - startTime);

        const atStart = newScrollLeft <= 0;
        const atEnd = newScrollLeft >= maxScrollLeft - 1;

        if (e.deltaY > 0 && atEnd) {
          setIsCentered(false);
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
        } else if (e.deltaY < 0 && atStart) {
          setIsCentered(false);
          window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
        }
      });
    };

    const handleMouseDown = (e) => {
      if (!isCentered) return;
      setIsMouseDown(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
      if (!isMouseDown || !isCentered) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isCentered, isMouseDown, startX, scrollLeft]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const { top, bottom } = entry.boundingClientRect;
        const viewportHeight = window.innerHeight;
        const elementHeight = bottom - top;
        const viewportCenter = viewportHeight / 2;
        const elementCenter = top + elementHeight / 2;

        const threshold = 200;
        const centered = Math.abs(elementCenter - viewportCenter) < threshold;

        setIsCentered(centered);
      },
      {
        root: null,
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="chooseBrand overflow-x-auto whitespace-nowrap py-10 flex gap-6 px-6 cursor-grab"
    >
      {videos.map((video) => (
        <div key={video.id} className="brandVideo w-[400px] h-[240px] rounded-lg overflow-hidden shadow-lg flex-shrink-0">
          <img src={video.src} className="w-full h-full object-cover" alt="placeholder" />
        </div>
      ))}
    </div>
  );
};

export default VideoScroll;