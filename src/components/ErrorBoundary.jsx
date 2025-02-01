import React from "react";

class ErrorBoundary extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { hasError: false }; // Xato bo'lgan yoki bo'lmagan holat
  }

  static getDerivedStateFromError(error) {
    // Xato bo'lganligini bildiradi
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Konsolga xatolikni chiqaradi
    console.error("Xatolik yuz berdi:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Agar xato bo'lsa, foydalanuvchiga quyidagi xabarni ko'rsatadi
      return (
        <div className="text-center mt-20">
          <h1 className="text-4xl font-bold text-red-600">500</h1>
          <p className="text-lg text-gray-700">
            Serverda Xatolik yuz berdi. Iltimos, sahifani qaytadan yangilan yoki
            o'zingizga kerakli bolgan malumotlarni{" "}
            <a
              className="text-blue-600 border-b-[1px]"
              target="_blank" 
              href="https://t.me/staguz"
            >
              telegram
            </a>{" "}
            kanalimizdan olishingiz ham mumkin!
          </p>
          <button
      onClick={() => window.location.reload()}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-2"
    >
      Sahifani yangilash
    </button>
        </div>
      );
    }

    // Agar xato bo'lmasa, bolalarni (child components) qaytaradi
    return this.props.children;
  }
}

export default ErrorBoundary;
