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
      {/* テキスト部分 */}
      <div className="text-center mb-32 mt-48 mx-4">
        <div className="text-white text-3xl font-normal font-['Source_Serif_Pro'] leading-relaxed">
          『まちナかぶんかさい』は、<br/>
          毎年夏に、長岡市の大学生が主体となって開催されるイベントです。<br/>
        </div>
      </div>
      
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl shadow-2xl">
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
      
      {/* インジケーター */}
      <div className="flex justify-center mt-8 space-x-4">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-6 h-6 rounded-full transition-all duration-300 ${
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
    if (windowWidth < 640) return '500px'
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
    <div className="min-h-screen flex relative">
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
            className="w-full bg-[url('/event-schedule/event-schedule-bg.png')] bg-contain bg-center bg-no-repeat relative"
            style={{ 
              minHeight: getEventScheduleHeight()
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-4xl mx-auto text-center px-4"
                style={{
                  transform: 'translateY(-5%)'
                }}
              >
                {/* 2025年の表示 */}
                <div className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold font-['Source_Serif_Pro'] mb-4 sm:mb-6 md:mb-4 text-left ml-4 sm:ml-6 md:ml-8 lg:ml-16">
                  2025
                </div>
                
                {/* 日付の表示 */}
                <div className="flex justify-center items-baseline gap-1 sm:gap-2 md:gap-3 mb-4 sm:mb-6 md:mb-4">
                  <div className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-semibold font-['Source_Serif_Pro']">9</div>
                  <div className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-semibold font-['Source_Serif_Pro']">.</div>
                  <div className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-semibold font-['Source_Serif_Pro']">27</div>
                  <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 ml-2 sm:ml-3 md:ml-4 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="text-white text-sm sm:text-lg md:text-2xl font-black font-['Zen_Old_Mincho']">土</div>
                  </div>
                </div>
                
                {/* 時間の表示 */}
                <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-6 md:mb-6">
                  <div className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-['Source_Serif_Pro']">16:00</div>
                  <div className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-['Source_Serif_Pro']">~</div>
                  <div className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-['Source_Serif_Pro']">21:00</div>
                </div>
                
                {/* 会場図と説明の2段組 */}
                <div className="max-w-3xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 text-white">
                    {/* 左列 - 会場図 */}
                    <div className="rounded-lg p-3 sm:p-0 md:p-2">
                      <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg font-semibold font-['Noto_Sans_JP'] mb-3 sm:mb-4">
                        <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                          <Image 
                            src="/event-schedule/map-icon.png" 
                            alt="Map Icon" 
                            fill
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                        大光銀行駐車場
                      </div>
                      <div className="w-full h-20 sm:h-24 md:h-28 lg:h-32 rounded border-2 border-white/30 overflow-hidden">
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
                    <div className=" rounded-lg p-3 sm:p-0 md:p-2">
                      <div className="text-white text-sm sm:text-base md:text-lg font-normal font-['Noto_Sans_JP'] leading-relaxed text-left">
                        <div className="space-y-1 sm:space-y-2">
                          <div>・ゲリラお笑いライブ</div>
                          <div>・ディスコパーティー</div>
                          <div>・ハンドメイド出店</div>
                        </div>
                        <div className="mt-3 sm:mt-4">
                          <div>など楽しいイベントが盛りだくさん！</div>
                          <div className="mt-2 sm:mt-3">
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
        <section id="about" className="relative mb-16 sm:mb-20 md:mb-24 lg:mb-32 xl:mb-40">
          <div 
            className="w-full bg-cover bg-center bg-no-repeat relative"
            style={{ 
              backgroundImage: "url('/about/about-bg.png')",
              backgroundSize: '80%',
              minHeight: '600px'
            }}
          >
            <img 
              src="/about/about-bg.png" 
              alt="About Background" 
              className="w-full h-auto opacity-0 pointer-events-none" 
              style={{ display: 'block', transform: 'scale(0.8)' }}
            />
            <div className="absolute inset-0 flex items-center justify-center py-20">
              <div className="w-[80%] max-w-none mx-auto px-4">
                <AboutCarousel />
              </div>
            </div>
          </div>
        </section>

        {/* This Year Theme Section */}
        <section id="this-year-theme" className="relative mb-16 sm:mb-20 md:mb-24 lg:mb-32 xl:mb-40">
          <div 
            className="w-full bg-cover bg-center bg-no-repeat relative"
            style={{ 
              backgroundImage: "url('/this-year-theme/theme-bg.png')",
              backgroundSize: '80%',
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
        <section id="program" className="relative mb-16 sm:mb-20 md:mb-24 lg:mb-32 xl:mb-40">
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
        <section id="sponsors" className="relative mb-16 sm:mb-20 md:mb-24 lg:mb-32 xl:mb-40">
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
        <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 border-b mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
          <div className="container px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-full max-w-lg h-20 relative mx-auto mb-8 sm:mb-12 md:mb-16">
                <div className="w-full h-20 left-0 top-0 absolute flex justify-center items-center text-white text-4xl md:text-5xl lg:text-6xl font-semibold font-['Source_Serif_Pro'] whitespace-nowrap">お問い合わせ</div>
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
                  className="mx-auto"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-5 md:right-5 lg:bottom-6 lg:right-6 z-40 rounded-full border h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 flex items-center justify-center bg-white/90 backdrop-blur-sm hover:bg-white transition-colors shadow-lg"
        aria-label="ページトップへ"
      >
        <ArrowUp className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
      </button>
    </div>
  )
}
