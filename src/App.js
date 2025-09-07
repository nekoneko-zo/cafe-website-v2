import { useState } from 'react';
import heroImage from './images/hero.jpg';
import coffeeImage from './images/coffee.jpeg';
import dessertImage from './images/dessert.jpeg';
import lightMealImage from './images/light_meal.jpeg';
import takeoutImage from './images/takeout.jpeg';
import coffeeBeansImage from './images/coffee-beans.jpg';
import cafeInteriorImage from './images/cafe-interior.jpg';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 md:p-8">
      {/* Header */}
      <header className="flex justify-between items-center py-4 border-b border-gray-300">
        <div className="text-xl md:text-2xl font-bold">Iguo Coffee</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
          <a href="#menu" className="text-gray-700 hover:text-gray-900 transition-colors">Menu</a>
          <a href="#story" className="text-gray-700 hover:text-gray-900 transition-colors">Story</a>
          <a href="#info" className="text-gray-700 hover:text-gray-900 transition-colors">Info</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開く"
        >
          <div className="w-6 h-6 flex flex-col justify-center">
            <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
          </div>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-white border-b border-gray-300 md:hidden shadow-lg z-10">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#menu" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>Menu</a>
              <a href="#story" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>Story</a>
              <a href="#info" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>Info</a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="h-64 md:h-96 flex items-center justify-center mt-6 rounded-2xl px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="text-2xl md:text-4xl font-bold text-white text-center leading-tight relative z-10">
          自家焙煎コーヒーの香りを<br className="md:hidden" />あなたに
        </h1>
      </section>

      {/* About */}
      <section id="about" className="mt-8 md:mt-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Iguoさんが丹精込めて焙煎するこだわりの豆。地域に愛されるカフェを目指しています。
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={coffeeBeansImage}
              alt="自家焙煎コーヒー豆"
              className="w-full max-w-sm h-48 md:h-64 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="mt-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={coffeeImage}
              alt="自家焙煎コーヒー"
              className="w-full h-32 md:h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">自家焙煎コーヒー</h3>
              <p className="text-sm text-gray-600 mb-2">¥450</p>
              <p className="text-xs text-gray-500">シングルオリジン豆を使用したこだわりの一杯</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={dessertImage}
              alt="季節のデザート"
              className="w-full h-32 md:h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">季節のデザート</h3>
              <p className="text-sm text-gray-600 mb-2">¥550</p>
              <p className="text-xs text-gray-500">旬の素材を使用した自家製スイーツ</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={lightMealImage}
              alt="軽食メニュー"
              className="w-full h-32 md:h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">軽食</h3>
              <p className="text-sm text-gray-600 mb-2">¥650〜</p>
              <p className="text-xs text-gray-500">サンドイッチやサラダなどの軽食メニュー</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={takeoutImage}
              alt="テイクアウトメニュー"
              className="w-full h-32 md:h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">テイクアウト</h3>
              <p className="text-sm text-gray-600 mb-2">ドリップバッグ ¥200</p>
              <p className="text-xs text-gray-500">お家で楽しめるドリップバッグもご用意</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="mt-8 md:mt-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Our Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="p-4 bg-white rounded-xl shadow">
            <h3 className="text-lg md:text-xl font-semibold mb-2">お店の雰囲気</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              木の温もりを感じる店内は、落ち着いた音楽と共にゆったりと過ごせる空間です。
              地域の人々の交流の場としても親しまれています。
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow">
            <h3 className="text-lg md:text-xl font-semibold mb-2">カフェオレへのこだわり</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              厳選したミルクと自家焙煎コーヒーの絶妙なブレンド。
              滑らかさと深みを追求した一杯は、多くのお客様に愛されています。
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow md:col-span-2">
            <h3 className="text-lg md:text-xl font-semibold mb-2">ストーリー</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Iguoさんが旅先で出会った一杯のコーヒー。
              その感動を多くの人に伝えたいと、自家焙煎を始めました。
              豆の選定から焙煎、抽出に至るまでの物語が、カフェの一杯一杯に込められています。
            </p>
          </div>
        </div>

        {/* カフェの写真 */}
        <div className="mt-8">
          <img
            src={cafeInteriorImage}
            alt="カフェ店内"
            className="w-full h-48 md:h-64 object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="mt-8 md:mt-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">営業時間 & アクセス</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="p-4 bg-white rounded-xl shadow">
            <h3 className="text-lg md:text-xl font-semibold mb-2">営業時間</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              平日: 9:00 - 19:00<br />土日祝: 10:00 - 20:00<br />定休日: 火曜日
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow h-48 md:h-64">
            <h3 className="text-lg md:text-xl font-semibold mb-2">アクセス</h3>
            <div className="bg-gray-100 h-32 md:h-40 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">東京都渋谷区</p>
                <p className="text-xs text-gray-500">JR渋谷駅から徒歩5分</p>
                <p className="text-xs text-gray-500">駐車場: 近隣コインパーキング</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Buttons */}
      <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
        <button className="w-full sm:w-auto px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors">Twitter</button>
        <button className="w-full sm:w-auto px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg text-sm font-medium transition-colors">Instagram</button>
        <button className="w-full sm:w-auto px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-sm font-medium transition-colors">Facebook</button>
      </div>

      {/* Footer */}
      <footer className="mt-8 md:mt-12 py-6 border-t border-gray-300 text-center text-gray-600">
        <p className="text-sm md:text-base">© 2025 Iguo Coffee. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
