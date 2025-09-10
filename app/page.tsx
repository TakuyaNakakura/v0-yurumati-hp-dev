"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, Music, Utensils, Star, ArrowUp } from "lucide-react"

export default function FestivalWireframe() {
  return (
    <div className="min-h-screen flex">
      <aside className="fixed left-0 top-0 z-50 h-full w-64 border-r">
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center space-x-2 mb-8">
            <div className="h-8 w-8 rounded-full border"></div>
            <span className="text-xl font-bold">まちか</span>
          </div>

          <nav className="flex flex-col space-y-4 flex-1">
            <a
              href="#schedule"
              className="text-sm font-medium py-2 px-3 border rounded-md"
            >
              開催日程
            </a>
            <a
              href="#about"
              className="text-sm font-medium py-2 px-3 border rounded-md"
            >
              まちナかぶんかさいって?
            </a>
            <a
              href="#program"
              className="text-sm font-medium py-2 px-3 border rounded-md"
            >
              プログラム
            </a>
            <a
              href="#sponsors"
              className="text-sm font-medium py-2 px-3 border rounded-md"
            >
              協賛一覧
            </a>
            <a
              href="#contact"
              className="text-sm font-medium py-2 px-3 border rounded-md"
            >
              お問い合わせ
            </a>
          </nav>
        </div>
      </aside>

      <main className="flex-1 ml-64">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 border-b">
          <div className="container px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-1">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-black text-balance leading-tight">
                    ふらっと、はじめまして。
                    <br />
                    <span>ひょっこり、おかえり。</span>
                  </h1>
                  <p className="text-lg max-w-md">夜のマルシェと特別な同窓会</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <div className="flex-1 border p-4 rounded">
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <Calendar className="h-4 w-4" />
                      開催日程
                    </div>
                    <div className="text-2xl font-bold">2025.9.27</div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4" />
                      16:00 ~ 21:00
                    </div>
                  </div>

                  <div className="flex-1 border p-4 rounded">
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <MapPin className="h-4 w-4" />
                      会場
                    </div>
                    <div className="text-lg font-semibold">大光銀行駐車場</div>
                  </div>
                </div>

                <button className="border px-6 py-3 rounded text-lg">
                  イベント詳細を見る
                </button>
              </div>

              <div className="relative order-2">
                <div className="aspect-square border rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="h-32 w-32 border rounded-full mx-auto flex items-center justify-center">
                      <Users className="h-16 w-16" />
                    </div>
                    <p className="text-sm">[Festival Image Placeholder]</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 h-8 w-8 border rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 h-12 w-12 border rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 border-b">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">まちナかぶんかさいって?</h2>

              <div className="text-left border rounded p-8">
                <p className="text-lg leading-relaxed">
                  『まちナかぶんかさい』は、毎年夏に、長岡市の大学生が主体となって開催されるイベントです。
                </p>
                <div className="mt-6 p-4 border rounded">
                  <p className="text-sm italic">資料見てもうちょいいい感じに説明追加</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="border rounded p-6 text-center">
                  <div className="h-16 w-16 border rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Music className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold mb-2">ゲリラお笑いライブ</h3>
                  <p className="text-sm">楽しいパフォーマンス</p>
                </div>

                <div className="border rounded p-6 text-center">
                  <div className="h-16 w-16 border rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Star className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold mb-2">ディスコパーティー</h3>
                  <p className="text-sm">夜の特別イベント</p>
                </div>

                <div className="border rounded p-6 text-center">
                  <div className="h-16 w-16 border rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Utensils className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold mb-2">ハンドメイド出店</h3>
                  <p className="text-sm">地域の手作り品</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg font-medium mb-4">どなたでもお気軽に、ふらっとお立ち寄りください！</p>
                <button className="border px-6 py-3 rounded text-lg">
                  プログラム詳細
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Program Section */}
        <section id="program" className="py-20 border-b">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">プログラム</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border rounded">
                  <div className="p-6 border-b">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      16:00 - 18:00
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      <span className="border px-2 py-1 rounded text-sm">オープニング</span>
                      <p className="text-sm">会場オープン・マルシェ開始</p>
                    </div>
                  </div>
                </div>

                <div className="border rounded">
                  <div className="p-6 border-b">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      18:00 - 19:30
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      <span className="border px-2 py-1 rounded text-sm">メインイベント</span>
                      <p className="text-sm">ゲリラお笑いライブ・パフォーマンス</p>
                    </div>
                  </div>
                </div>

                <div className="border rounded">
                  <div className="p-6 border-b">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      19:30 - 21:00
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      <span className="border px-2 py-1 rounded text-sm">ナイトイベント</span>
                      <p className="text-sm">ディスコパーティー・同窓会</p>
                    </div>
                  </div>
                </div>

                <div className="border rounded">
                  <div className="p-6 border-b">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      会場図
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="aspect-video border rounded flex items-center justify-center">
                      <p className="text-sm">[Venue Map Placeholder]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="py-20 border-b">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">ご協賛いただいた企業様</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {["ソリマチ技研", "ソリマチ株式会社", "拍露酒造", "お福酒造"].map((sponsor, index) => (
                  <div key={index} className="border rounded p-6">
                    <div className="aspect-square border rounded flex items-center justify-center mb-4">
                      <div className="text-xs text-center">
                        [Logo
                        <br />
                        Placeholder]
                      </div>
                    </div>
                    <p className="text-sm font-medium">{sponsor}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 border-b">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">お問い合わせ</h2>

              <div className="border rounded p-8">
                <div className="space-y-6">
                  <p className="text-lg">イベントに関するご質問やお問い合わせは、こちらからお気軽にどうぞ。</p>

                  <button className="border px-6 py-3 rounded text-lg w-full">
                    お問い合わせページへ
                  </button>

                  <div className="pt-6 border-t">
                    <p className="text-sm mb-4">SNSでも情報を発信しています！</p>
                    <div className="flex justify-center gap-4">
                      <button className="border px-4 py-2 rounded">
                        Instagram
                      </button>
                      <button className="border px-4 py-2 rounded">
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
        <footer className="border-t py-12">
          <div className="container px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full border"></div>
                <span className="font-bold">まちナかぬんかさい 2025</span>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-40 rounded-full border h-12 w-12 flex items-center justify-center"
        aria-label="ページトップへ"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </div>
  )
}
