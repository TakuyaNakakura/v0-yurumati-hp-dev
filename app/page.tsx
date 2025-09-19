"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, Music, Utensils, Star, ArrowUp, Menu, X } from "lucide-react"

// AboutCarousel コンポーネント
const AboutCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselImages = [
    "/about/carousel-1.png",
    "/about/carousel-2.png",
    "/about/carousel-3.png",
    "/about/carousel-4.png"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 3000) // 3秒ごとに切り替え

    return () => clearInterval(interval)
  }, [carouselImages.length])

  return (
    <div className="relative w-full mx-auto">
      {/* テキスト部分 - フォントサイズを小さく調整 */}
      <div className="text-center mb-16 mt-24 mx-4">
        <div className="text-white text-lg sm:text-xl md:text-2xl font-normal font-['Source_Serif_Pro'] leading-relaxed">
          『まちナかぶんかさい』は、<br/>
          毎年夏に、長岡市の大学生が主体となって開催されるイベントです。<br/>
        </div>
      </div>
      
      {/* カルーセルサイズを小さく調整 */}
      <div className="relative w-full max-w-3xl mx-auto aspect-[16/10] overflow-hidden rounded-xl shadow-2xl">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`カルーセル画像 ${index + 1}`}
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-xl"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      
      {/* インジケーター - サイズを小さく調整 */}
      <div className="flex justify-center mt-4 space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`スライド ${index + 1} を表示`}
          />
        ))}
      </div>
    </div>
  )
}

export default function FestivalWireframe() {
  const [scrollY, setScrollY] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  
  // レスポンシブな値を計算
  const getSidebarFontSize = () => {
    if (windowWidth < 640) return '18px'
    if (windowWidth < 768) return '20px'
    return '24px'
  }
  
  const getLogoHeight = () => {
    if (windowWidth < 640) return '100px'
    if (windowWidth < 768) return '120px'
    return '131px'
  }
  
  const getLogoBottomMargin = () => {
    if (windowWidth < 640) return '32px'
    if (windowWidth < 768) return '48px'
    return '64px'
  }

  // セクション高さを背景画像に合わせて計算
  const getHeroHeight = () => {
    if (windowWidth < 640) return '300px'
    if (windowWidth < 768) return '400px'
    if (windowWidth < 1024) return '500px'
    if (windowWidth < 1280) return '600px'
    return '700px'
  }

  const getEventScheduleHeight = () => {
    if (windowWidth < 640) return '700px' // モバイル版を縦長に調整
    if (windowWidth < 768) return '600px'
    if (windowWidth < 1024) return '700px'
    if (windowWidth < 1280) return '800px'
    return '900px'
  }

  const getAboutHeight = () => {
    if (windowWidth < 640) return '550px'
    if (windowWidth < 768) return '600px'
    if (windowWidth < 1024) return '700px'
    if (windowWidth < 1280) return '800px'
    return '900px'
  }
  
  const sidebarWidth = '389px'
  const navItemSpacing = '4px'
  const characterHeight = '430px'
  const characterTopMargin = '32px'

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // 初期値を設定
    setWindowWidth(window.innerWidth)

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // モバイル表示の際にサイドバーを閉じる
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && sidebarOpen) {
        setSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [sidebarOpen])

  return (
    <div className="min-h-screen flex relative overflow-x-hidden">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 z-[60] lg:hidden bg-black/50 text-white p-1.5 sm:p-2 rounded-md backdrop-blur-sm hover:bg-black/70 transition-colors"
        aria-label="メニューを開く"
      >
        {sidebarOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />}
      </button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside 
        className={`fixed left-0 top-0 z-50 h-full border-r bg-[url('/sideber/sidebar-bg.png')] bg-no-repeat transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
        style={{
          width: sidebarWidth,
          backgroundPosition: `center ${Math.max(0, Math.min(100, 0 + scrollY * 0.05))}%`,
          backgroundSize: '100% auto'
        }}
      >
        <div className="flex flex-col h-full p-3 sm:p-6">
          <div 
            className="flex justify-center items-center" 
            style={{ marginBottom: getLogoBottomMargin() }}
          >
            <div className="relative max-w-[200px] sm:max-w-none" style={{ height: getLogoHeight() }}>
              <Image 
                src="/sideber/sidebar-logo.png" 
                alt="まちナかぶんかさい ロゴ" 
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>

          <nav className="flex flex-col flex-1">
            <a
              href="#schedule"
              className="py-2 px-3 rounded-md hover:bg-white/10 transition-colors"
              style={{
                color: '#FFF',
                fontFamily: '"Noto Sans JP"',
                fontSize: getSidebarFontSize(),
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                marginBottom: navItemSpacing
              }}
              onClick={() => setSidebarOpen(false)}
            >
              開催日程
            </a>
            <a
              href="#about"
              className="py-2 px-3 rounded-md hover:bg-white/10 transition-colors"
              style={{
                color: '#FFF',
                fontFamily: '"Noto Sans JP"',
                fontSize: getSidebarFontSize(),
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                marginBottom: navItemSpacing
              }}
              onClick={() => setSidebarOpen(false)}
            >
              まちナかぶんかさいって?
            </a>
            <a
              href="#program"
              className="py-2 px-3 rounded-md hover:bg-white/10 transition-colors"
              style={{
                color: '#FFF',
                fontFamily: '"Noto Sans JP"',
                fontSize: getSidebarFontSize(),
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                marginBottom: navItemSpacing
              }}
              onClick={() => setSidebarOpen(false)}
            >
              プログラム
            </a>
            <a
              href="#sponsors"
              className="py-2 px-3 rounded-md hover:bg-white/10 transition-colors"
              style={{
                color: '#FFF',
                fontFamily: '"Noto Sans JP"',
                fontSize: getSidebarFontSize(),
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                marginBottom: navItemSpacing
              }}
              onClick={() => setSidebarOpen(false)}
            >
              協賛一覧
            </a>
            <a
              href="#contact"
              className="py-2 px-3 rounded-md hover:bg-white/10 transition-colors"
              style={{
                color: '#FFF',
                fontFamily: '"Noto Sans JP"',
                fontSize: getSidebarFontSize(),
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                marginBottom: '0' // 最後の要素はマージン不要
              }}
              onClick={() => setSidebarOpen(false)}
            >
              お問い合わせ
            </a>
          </nav>
          
          {/* キャラクター画像 */}
          <div 
            className="hidden sm:block relative"
            style={{ 
              marginTop: characterTopMargin,
              marginLeft: '-80px', // 左に80px移動してサイドバーから大きくはみ出す
              height: characterHeight,
              width: 'auto',
              overflow: 'visible' // はみ出しを許可
            }}
          >
            <Image 
              src="/sideber/sidebar-charactor.png" 
              alt="まちナかぶんかさい キャラクター" 
              fill
              style={{ 
                objectFit: 'contain',
                objectPosition: 'left'
              }}
            />
          </div>
        </div>
      </aside>

      <main 
        className="flex-1 bg-[url('/top-bg/top-bg.png')] bg-cover bg-no-repeat min-h-screen lg:ml-[389px]" 
        style={{ 
          backgroundPosition: `center ${Math.max(0, Math.min(100, 0 - scrollY * 0.03))}%`
        }}
      >
        {/* Hero Section */}
        <section className="relative w-full mb-24 sm:mb-32 md:mb-40 lg:mb-48">
          <div 
            className="relative w-full"
            style={{ 
              minHeight: getHeroHeight(),
              aspectRatio: 'auto'
            }}
          >
            <Image 
              src="/hero-section/hero-image.png" 
              alt="Hero" 
              width={1920}
              height={1080}
              className="w-full h-auto"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </section>

        {/* Event Schedule Section */}
        <section 
          id="schedule" 
          className="relative mb-16 sm:mb-20 md:mb-24 lg:mb-32 xl:mb-40 mt-16 sm:mt-20 md:mt-24 lg:mt-32 xl:mt-40"
        >
          <div 
            className="w-full relative"
            style={{ 
              minHeight: getEventScheduleHeight()
            }}
          >
            {/* キャラクターを頂点とした四角形フレーム - レスポンシブ対応 */}
            <div 
              className="absolute rounded-[12px] sm:rounded-[16px] md:rounded-[20px] outline outline-[3px] sm:outline-[4px] md:outline-[5px] outline-offset-[-3px] sm:outline-offset-[-4px] md:outline-offset-[-5px] outline-black/20"
              style={{
                left: '5%',
                top: '6%',
                right: '5%',
                bottom: '6%',
                zIndex: 1
              }}
            />

            {/* 左上 - shape01 - レスポンシブ対応 */}
            <div 
              className="absolute"
              style={{
                left: '-5%',
                top: '-5%',
                width: '25%',
                height: '25%',
                zIndex: 3
              }}
            >
              <Image
                src="/event-schedule/shape01.png"
                alt="Shape 1"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* 右上 - charactor01 - レスポンシブ対応 */}
            <div 
              className="absolute"
              style={{
                right: '1%',
                top: '-18%',
                width: '40%',
                height: '58%',
                zIndex: 3
              }}
            >
              <Image
                src="/event-schedule/charactor02.png"
                alt="Character 1"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* 左下 - charactor02 - レスポンシブ対応 */}
            <div 
              className="absolute"
              style={{
                left: '-10%',
                bottom: '-15%',
                width: '32%',
                height: '50%',
                zIndex: 3
              }}
            >
              <Image
                src="/event-schedule/charactor01.png"
                alt="Character 2"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* 右下 - shape02 - レスポンシブ対応 */}
            <div 
              className="absolute"
              style={{
                right: '-10%',
                bottom: '-5%',
                width: '25%',
                height: '25%',
                zIndex: 3
              }}
            >
              <Image
                src="/event-schedule/shape02.png"
                alt="Shape 2"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* 枠内コンテンツ管理用div */}
            <div className="absolute"
              style={{
                left: '8%',
                right: '8%',
                top: '10%',
                bottom: '10%',
                zIndex: 3
              }}
            >
              {/* コンテンツコンテナ */}
              <div className="relative w-full h-full">
                
                {/* 2025年の表示 - モバイル */}
                <div className="absolute text-white text-lg font-semibold font-['Source_Serif_Pro'] sm:hidden"
                  style={{
                    left: '40%',
                    top: '3%',
                    transform: 'translateX(-50%)'
                  }}
                >
                  2025
                </div>
                
                {/* 2025年の表示 - タブレット・デスクトップ */}
                <div className="absolute text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-['Source_Serif_Pro'] hidden sm:block"
                  style={{
                    left: '40%',
                    top: '8%',
                    transform: 'translateX(-50%)'
                  }}
                >
                  2025
                </div>
                
                {/* 日付の表示 - モバイル */}
                <div className="absolute flex justify-center items-baseline gap-1 sm:hidden"
                  style={{
                    left: '50%',
                    top: '10%',
                    transform: 'translateX(-50%)'
                  }}
                >
                  <div className="text-white text-3xl font-semibold font-['Source_Serif_Pro']">9.27</div>
                  <div className="w-6 h-6 ml-2 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="text-white text-xs font-black font-['Zen_Old_Mincho']">土</div>
                  </div>
                </div>
                
                {/* 日付の表示 - タブレット・デスクトップ */}
                <div className="absolute hidden sm:flex justify-center items-baseline gap-2 md:gap-3"
                  style={{
                    left: '50%',
                    top: '25%',
                    transform: 'translateX(-50%)'
                  }}
                >
                  <div className="text-white text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold font-['Source_Serif_Pro']">9.27</div>
                  <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 ml-3 md:ml-4 lg:ml-5 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="text-white text-base md:text-xl lg:text-2xl xl:text-3xl font-black font-['Zen_Old_Mincho']">土</div>
                  </div>
                </div>
                
                {/* 時間の表示 - モバイル */}
                <div className="absolute flex justify-center items-center gap-2 sm:hidden"
                  style={{
                    left: '50%',
                    top: '20%',
                    transform: 'translateX(-50%)'
                  }}
                >
                  <div className="text-white text-base font-semibold font-['Source_Serif_Pro']">16:00</div>
                  <div className="text-white text-base font-semibold font-['Source_Serif_Pro']">~</div>
                  <div className="text-white text-base font-semibold font-['Source_Serif_Pro']">21:00</div>
                </div>
                
                {/* 時間の表示 - タブレット・デスクトップ */}
                <div className="absolute hidden sm:flex justify-center items-center gap-3 md:gap-4 lg:gap-5"
                  style={{
                    left: '50%',
                    top: '48%',
                    transform: 'translateX(-50%)'
                  }}
                >
                  <div className="text-white text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold font-['Source_Serif_Pro']">16:00</div>
                  <div className="text-white text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold font-['Source_Serif_Pro']">~</div>
                  <div className="text-white text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold font-['Source_Serif_Pro']">21:00</div>
                </div>
                
                {/* 会場図と説明の2段組 - モバイル */}
                <div className="absolute w-full sm:hidden"
                  style={{
                    top: '32%',
                    left: '0%'
                  }}
                >
                  <div className="grid grid-cols-1 gap-3 text-white px-2 max-w-6xl mx-auto justify-center">
                    {/* 左列 - 会場図 */}
                    <div className="rounded-lg p-1">
                      <div className="w-5/6 mx-auto mb-1">
                        <div className="flex items-center gap-1 text-xs font-semibold font-['Noto_Sans_JP']">
                          <div className="relative w-3 h-3">
                            <Image 
                              src="/event-schedule/map-icon.png" 
                              alt="Map Icon" 
                              fill
                              style={{ objectFit: 'contain' }}
                            />
                          </div>
                          大光銀行駐車場
                        </div>
                      </div>
                      <div className="w-5/6 mx-auto rounded border-2 border-white/30 overflow-hidden" style={{ aspectRatio: '4/3' }}>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d791.8856372488855!2d138.85023816506157!3d37.44791003439853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff5a9fd5bbd7f6f%3A0xb4df88b4991737b9!2z5b6T5qWt5ZOh5bCC55So6aeQ6LuK5aC077yI5aSn5YWJ6YqA6KGMIOacrOW6l--8iQ!5e0!3m2!1sja!2sjp!4v1757573290175!5m2!1sja!2sjp"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="大光銀行駐車場の地図"
                        />
                      </div>
                    </div>
                    
                    {/* 右列 - イベント説明 */}
                    <div className="rounded-lg p-1">
                      <div className="text-white text-xs font-normal font-['Noto_Sans_JP'] leading-relaxed text-center">
                        <div className="space-y-1">
                          <div>・ゲリラお笑いライブ</div>
                          <div>・ディスコパーティー</div>
                          <div>・ハンドメイド出店</div>
                        </div>
                        <div className="mt-2">
                          <div>など楽しいイベントが盛りだくさん！</div>
                          <div className="mt-1">
                            <div>どなたでもお気軽に、</div>
                            <div>ふらっとお立ち寄りください！</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 会場図と説明の2段組 - タブレット・デスクトップ */}
                <div className="absolute w-full hidden sm:block"
                  style={{
                    top: '58%',
                    left: '0%'
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 lg:gap-9 text-white px-5 max-w-6xl mx-auto justify-center">
                    {/* 左列 - 会場図 */}
                    <div className="rounded-lg p-4 md:p-3">
                      <div className="w-3/5 mx-auto mb-4 md:mb-5">
                        <div className="flex items-center gap-3 text-base md:text-lg lg:text-xl font-semibold font-['Noto_Sans_JP']">
                          <div className="relative w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7">
                            <Image 
                              src="/event-schedule/map-icon.png" 
                              alt="Map Icon" 
                              fill
                              style={{ objectFit: 'contain' }}
                            />
                          </div>
                          大光銀行駐車場
                        </div>
                      </div>
                      <div className="w-3/5 mx-auto rounded border-2 border-white/30 overflow-hidden" style={{ aspectRatio: '4/3' }}>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d791.8856372488855!2d138.85023816506157!3d37.44791003439853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff5a9fd5bbd7f6f%3A0xb4df88b4991737b9!2z5b6T5qWt5ZOh5bCC55So6aeQ6LuK5aC077yI5aSn5YWJ6YqA6KGMIOacrOW6l--8iQ!5e0!3m2!1sja!2sjp!4v1757573290175!5m2!1sja!2sjp"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="大光銀行駐車場の地図"
                        />
                      </div>
                    </div>
                    
                    {/* 右列 - イベント説明 */}
                    <div className="rounded-lg p-1 sm:p-4 md:p-3">
                      <div className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-normal font-['Noto_Sans_JP'] leading-relaxed text-center">
                        <div className="space-y-1 sm:space-y-3">
                          <div>・ゲリラお笑いライブ</div>
                          <div>・ディスコパーティー</div>
                          <div>・ハンドメイド出店</div>
                        </div>
                        <div className="mt-2 sm:mt-4 md:mt-5">
                          <div>など楽しいイベントが盛りだくさん！</div>
                          <div className="mt-1 sm:mt-3 md:mt-4">
                            <div>どなたでもお気軽に、</div>
                            <div>ふらっとお立ち寄りください！</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative">
          <div 
            className="w-full relative"
            style={{ 
              minHeight: getAboutHeight()
            }}
          >
            {/* キャラクターを頂点とした四角形フレーム - レスポンシブ対応 */}
            <div 
              className="absolute rounded-[12px] sm:rounded-[16px] md:rounded-[20px] outline outline-[3px] sm:outline-[4px] md:outline-[5px] outline-offset-[-3px] sm:outline-offset-[-4px] md:outline-offset-[-5px] outline-black/20"
              style={{
                left: '5%',
                top: '6%',
                right: '5%',
                bottom: '2%',
                zIndex: 1
              }}
            />

            {/* 上部中央 - about-character - モバイル・デスクトップ分離対応 */}
            <div 
              className="absolute"
              style={{
                left: '50%',
                top: '-25%', // モバイル用位置
                width: '40%', // モバイル用サイズ
                height: '50%', // モバイル用サイズ
                transform: 'translateX(-50%)',
                zIndex: 3
              }}
            >
              <Image
                src="/about/about-character.png"
                alt="About Character"
                fill
                style={{ objectFit: 'contain' }}
                className="sm:hidden" // モバイル版のみ表示
              />
            </div>

            {/* デスクトップ版 about-character */}
            <div 
              className="absolute hidden sm:block"
              style={{
                left: '50%',
                top: '-30%', // デスクトップ用位置
                width: '40%', // デスクトップ用サイズ
                height: '50%', // デスクトップ用サイズ
                transform: 'translateX(-50%)',
                zIndex: 3
              }}
            >
              <Image
                src="/about/about-character.png"
                alt="About Character"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* 枠内コンテンツ管理用div */}
            <div className="absolute"
              style={{
                left: '8%',
                right: '8%',
                top: '-6%',
                bottom: '6%',
                zIndex: 3
              }}
            >
              {/* コンテンツコンテナ */}
              <div className="relative w-full h-full">
                
                {/* モバイル用コンテンツ */}
                <div className="absolute w-full sm:hidden"
                  style={{
                    top: '3%',
                    left: '0%'
                  }}
                >
                  <div className="px-4 max-w-6xl mx-auto">
                    <AboutCarousel />
                  </div>
                </div>
                
                {/* タブレット・デスクトップ用コンテンツ */}
                <div className="absolute w-full hidden sm:block"
                  style={{
                    top: '10%',
                    left: '0%'
                  }}
                >
                  <div className="px-8 max-w-6xl mx-auto">
                    <AboutCarousel />
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* This Year Theme Section */}
        <section id="this-year-theme" className="relative">
          <div 
            className="w-full bg-cover bg-center bg-no-repeat relative"
            style={{ 
              backgroundImage: "url('/this-year-theme/theme-bg.png')",
              backgroundSize: '90%',
              minHeight: '600px'
            }}
          >
            <img 
              src="/this-year-theme/theme-bg.png" 
              alt="This Year Theme Background" 
              className="w-full h-auto opacity-0 pointer-events-none" 
              style={{ display: 'block', transform: 'scale(0.8)' }}
            />
            <div className="absolute inset-0 flex items-center justify-center py-20">
              <div className="w-[80%] max-w-none mx-auto px-4">
                {/* コンテンツをここに追加 */}
                <div className="text-center">
                  {/* <h2 className="text-white text-4xl md:text-6xl font-bold mb-8">今年のテーマ</h2> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Section */}
        <section id="program" className="relative">
          <div 
            className="w-full bg-cover bg-center bg-no-repeat relative"
            style={{ 
              backgroundImage: "url('/program/program-bg.png')",
              backgroundSize: '80%',
              minHeight: '600px'
            }}
          >
            <img 
              src="/program/program-bg.png" 
              alt="Program Background" 
              className="w-full h-auto opacity-0 pointer-events-none" 
              style={{ display: 'block', transform: 'scale(0.8)' }}
            />
            <div className="absolute inset-0 flex items-center justify-center py-20">
              <div className="w-[80%] max-w-none mx-auto px-4">
                {/* コンテンツをここに追加 */}
                <div className="text-center">
                  {/* プログラム内容をここに追加する予定 */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="relative">
          <div 
            className="w-full bg-cover bg-center bg-no-repeat relative"
            style={{ 
              backgroundImage: "url('/sponsors/sponsors-bg.png')",
              backgroundSize: '80%',
              minHeight: '600px'
            }}
          >
            <img 
              src="/sponsors/sponsors-bg.png" 
              alt="Sponsors Background" 
              className="w-full h-auto opacity-0 pointer-events-none" 
              style={{ display: 'block', transform: 'scale(0.8)' }}
            />
            <div className="absolute inset-0 flex items-center justify-center py-20">
              <div className="w-[80%] max-w-none mx-auto px-4">
                {/* コンテンツをここに追加 */}
                <div className="text-center">
                  {/* スポンサー内容をここに追加する予定 */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 border-b mb-40 sm:mb-32 md:mb-40 lg:mb-48">
          <div className="container px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-full max-w-lg h-20 relative mx-auto mb-6 sm:mb-10 md:mb-14">
                <div className="w-full h-20 left-0 top-0 absolute flex justify-center items-center text-white text-3xl md:text-4xl lg:text-5xl font-semibold font-['Source_Serif_Pro'] whitespace-nowrap">お問い合わせ</div>
              </div>

              <a 
                href="https://www.instagram.com/yurumachi_nagaoka?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block hover:scale-105 transition-transform duration-200"
              >
                <Image
                  src="/contact/contact-button.png"
                  alt="お問い合わせボタン"
                  width={400}
                  height={100}
                  className="mx-auto w-64 h-16 sm:w-80 sm:h-20 md:w-96 md:h-24 lg:w-[400px] lg:h-[100px]"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 z-40 hover:scale-105 transition-transform duration-200 left-1/2 lg:left-[calc(50%+194.5px)] transform -translate-x-1/2"
        aria-label="ページトップへ"
      >
        <Image
          src="/page-top-button/page-top-button.png"
          alt="ページトップへ"
          width={128}
          height={128}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
        />
      </button>
    </div>
  )
}
