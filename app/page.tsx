"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, Music, Utensils, Star, ArrowUp, Menu, X } from "lucide-react"

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
                      <div className="w-full h-20 sm:h-24 md:h-28 lg:h-32 bg-zinc-300 rounded border-2 border-white/30" />
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
        <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 border-b mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
          <div className="container px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold px-2">まちナかぶんかさいって?</h2>

              <div className="text-left border rounded p-3 sm:p-4 md:p-6 lg:p-8">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  『まちナかぶんかさい』は、毎年夏に、長岡市の大学生が主体となって開催されるイベントです。
                </p>
                <div className="mt-3 sm:mt-4 md:mt-6 p-2 sm:p-3 md:p-4 border rounded">
                  <p className="text-xs sm:text-sm md:text-base italic">資料見てもうちょいいい感じに説明追加</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                <div className="border rounded p-3 sm:p-4 md:p-6 text-center">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 border rounded-full mx-auto mb-2 sm:mb-3 md:mb-4 flex items-center justify-center">
                    <Music className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
                  </div>
                  <h3 className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm md:text-base lg:text-lg">ゲリラお笑いライブ</h3>
                  <p className="text-xs sm:text-sm md:text-base">楽しいパフォーマンス</p>
                </div>

                <div className="border rounded p-3 sm:p-4 md:p-6 text-center">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 border rounded-full mx-auto mb-2 sm:mb-3 md:mb-4 flex items-center justify-center">
                    <Star className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
                  </div>
                  <h3 className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm md:text-base lg:text-lg">ディスコパーティー</h3>
                  <p className="text-xs sm:text-sm md:text-base">夜の特別イベント</p>
                </div>

                <div className="border rounded p-3 sm:p-4 md:p-6 text-center sm:col-span-2 lg:col-span-1">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 border rounded-full mx-auto mb-2 sm:mb-3 md:mb-4 flex items-center justify-center">
                    <Utensils className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
                  </div>
                  <h3 className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm md:text-base lg:text-lg">ハンドメイド出店</h3>
                  <p className="text-xs sm:text-sm md:text-base">地域の手作り品</p>
                </div>
              </div>

              <div className="text-center px-2">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-3 sm:mb-4">どなたでもお気軽に、ふらっとお立ち寄りください！</p>
                <button className="border px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded text-sm sm:text-base md:text-lg lg:text-xl hover:bg-gray-100 transition-colors">
                  プログラム詳細
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Program Section */}
        <section id="program" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 border-b mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
          <div className="container px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2">プログラム</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <div className="border rounded">
                  <div className="p-3 sm:p-4 md:p-6 border-b">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg">16:00 - 18:00</span>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 md:p-6">
                    <div className="space-y-2 sm:space-y-3">
                      <span className="inline-block border px-2 py-1 rounded text-xs sm:text-sm md:text-base">オープニング</span>
                      <p className="text-xs sm:text-sm md:text-base">会場オープン・マルシェ開始</p>
                    </div>
                  </div>
                </div>

                <div className="border rounded">
                  <div className="p-3 sm:p-4 md:p-6 border-b">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg">18:00 - 19:30</span>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 md:p-6">
                    <div className="space-y-2 sm:space-y-3">
                      <span className="inline-block border px-2 py-1 rounded text-xs sm:text-sm md:text-base">メインイベント</span>
                      <p className="text-xs sm:text-sm md:text-base">ゲリラお笑いライブ・パフォーマンス</p>
                    </div>
                  </div>
                </div>

                <div className="border rounded">
                  <div className="p-3 sm:p-4 md:p-6 border-b">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg">19:30 - 21:00</span>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 md:p-6">
                    <div className="space-y-2 sm:space-y-3">
                      <span className="inline-block border px-2 py-1 rounded text-xs sm:text-sm md:text-base">ナイトイベント</span>
                      <p className="text-xs sm:text-sm md:text-base">ディスコパーティー・同窓会</p>
                    </div>
                  </div>
                </div>

                <div className="border rounded">
                  <div className="p-3 sm:p-4 md:p-6 border-b">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg">会場図</span>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 md:p-6">
                    <div className="aspect-video border rounded flex items-center justify-center">
                      <p className="text-xs sm:text-sm md:text-base">[Venue Map Placeholder]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 border-b mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
          <div className="container px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2">ご協賛いただいた企業様</h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8">
                {["ソリマチ技研", "ソリマチ株式会社", "拍露酒造", "お福酒造"].map((sponsor, index) => (
                  <div key={index} className="border rounded p-2 sm:p-3 md:p-4 lg:p-6">
                    <div className="aspect-square border rounded flex items-center justify-center mb-1 sm:mb-2 md:mb-3 lg:mb-4">
                      <div className="text-xs sm:text-sm text-center">
                        [Logo
                        <br />
                        Placeholder]
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base font-medium leading-tight">{sponsor}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 border-b mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
          <div className="container px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold px-2">お問い合わせ</h2>

              <div className="border rounded p-3 sm:p-4 md:p-6 lg:p-8">
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl">イベントに関するご質問やお問い合わせは、こちらからお気軽にどうぞ。</p>

                  <button className="border px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded text-sm sm:text-base md:text-lg lg:text-xl w-full hover:bg-gray-100 transition-colors">
                    お問い合わせページへ
                  </button>

                  <div className="pt-3 sm:pt-4 md:pt-6 border-t">
                    <p className="text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4">SNSでも情報を発信しています！</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-4">
                      <button className="border px-3 sm:px-4 py-2 rounded text-xs sm:text-sm md:text-base lg:text-lg hover:bg-gray-100 transition-colors">
                        Instagram
                      </button>
                      <button className="border px-3 sm:px-4 py-2 rounded text-xs sm:text-sm md:text-base lg:text-lg hover:bg-gray-100 transition-colors">
                        Twitter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32">
          <div className="container px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-4">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 rounded-full border"></div>
                <span className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">まちナかぬんかさい 2025</span>
              </div>
            </div>
          </div>
        </footer>
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
