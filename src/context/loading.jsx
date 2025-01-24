import React, { createContext, useState } from 'react';

// 1. Context yaratamiz
export const LoadingContext = createContext();

// 2. Provider yaratiladi (u ma'lumotlarni uzatadi)
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false); // Loading holatini boshqaramiz

  // Yuklanish indikatorini yoqish uchun funksiya
  const showLoading = () => setIsLoading(true);

  // Yuklanish indikatorini o'chirish uchun funksiya
  const hideLoading = () => setIsLoading(false);

  return (
    <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
      {children} {/* Bu yerda ichki komponentlar ko'rsatiladi */}
    </LoadingContext.Provider>
  );
};
