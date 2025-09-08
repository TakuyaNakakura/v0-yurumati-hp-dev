"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, Music, Utensils, Star, ArrowUp } from "lucide-react"

export default function FestivalWireframe() {
  return (
    <div className="min-h-screen bg-background flex">
      <aside className="fixed left-0 top-0 z-50 h-full w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center space-x-2 mb-8">
            <div className="h-8 w-8 rounded-full bg-primary"></div>
            <span className="text-xl font-bold text-primary">まちか</span>
          </div>

          <nav className="flex flex-col space-y-4 flex-1">
            <a
              href="#schedule"
              className="text-sm font-medium hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-muted"
            >
              開催日程
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-muted"
            >
              まちナかぶんかさいって?
            </a>
            <a
              href="#program"
              className="text-sm font-medium hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-muted"
            >
              プログラム
            </a>
            <a
              href="#sponsors"
              className="text-sm font-medium hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-muted"
            >
              協賛一覧
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-muted"
            >
              お問い合わせ
            </a>
          </nav>
        </div>
      </aside>

      <main className="flex-1 ml-64">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-card to-muted py-20">
          <div className="container px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-1">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-black text-balance leading-tight">
                    ふらっと、はじめまして。
                    <br />
                    <span className="text-secondary">ひょっこり、おかえり。</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-md">夜のマルシェと特別な同窓会</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <Card className="flex-1">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        開催日程
                      </div>
                      <div className="text-2xl font-bold text-primary">2025.9.27</div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4" />
                        16:00 ~ 21:00
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="flex-1">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4" />
                        会場
                      </div>
                      <div className="text-lg font-semibold">大光銀行駐車場</div>
                    </CardContent>
                  </Card>
                </div>

                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  イベント詳細を見る
                </Button>
              </div>

              <div className="relative order-2">
                <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="h-32 w-32 bg-secondary/20 rounded-full mx-auto flex items-center justify-center">
                      <Users className="h-16 w-16 text-secondary" />
                    </div>
                    <p className="text-sm text-muted-foreground">[Festival Image Placeholder]</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 h-8 w-8 bg-accent rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 h-12 w-12 bg-primary/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">まちナかぶんかさいって?</h2>

              <Card className="text-left">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed">
                    『まちナかぶんかさい』は、毎年夏に、長岡市の大学生が主体となって開催されるイベントです。
                  </p>
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground italic">資料見てもうちょいいい感じに説明追加</p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="h-16 w-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Music className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">ゲリラお笑いライブ</h3>
                    <p className="text-sm text-muted-foreground">楽しいパフォーマンス</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="h-16 w-16 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Star className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="font-semibold mb-2">ディスコパーティー</h3>
                    <p className="text-sm text-muted-foreground">夜の特別イベント</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="h-16 w-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Utensils className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-semibold mb-2">ハンドメイド出店</h3>
                    <p className="text-sm text-muted-foreground">地域の手作り品</p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <p className="text-lg font-medium mb-4">どなたでもお気軽に、ふらっとお立ち寄りください！</p>
                <Button variant="outline" size="lg">
                  プログラム詳細
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Program Section */}
        <section id="program" className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">プログラム</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      16:00 - 18:00
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Badge variant="secondary">オープニング</Badge>
                      <p className="text-sm">会場オープン・マルシェ開始</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      18:00 - 19:30
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Badge variant="secondary">メインイベント</Badge>
                      <p className="text-sm">ゲリラお笑いライブ・パフォーマンス</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      19:30 - 21:00
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Badge variant="secondary">ナイトイベント</Badge>
                      <p className="text-sm">ディスコパーティー・同窓会</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      会場図
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-sm text-muted-foreground">[Venue Map Placeholder]</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">ご協賛いただいた企業様</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {["ソリマチ技研", "ソリマチ株式会社", "拍露酒造", "お福酒造"].map((sponsor, index) => (
                  <Card key={index} className="p-6">
                    <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-4">
                      <div className="text-xs text-muted-foreground text-center">
                        [Logo
                        <br />
                        Placeholder]
                      </div>
                    </div>
                    <p className="text-sm font-medium">{sponsor}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-card">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">お問い合わせ</h2>

              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <p className="text-lg">イベントに関するご質問やお問い合わせは、こちらからお気軽にどうぞ。</p>

                    <Button size="lg" className="w-full">
                      お問い合わせページへ
                    </Button>

                    <div className="pt-6 border-t">
                      <p className="text-sm text-muted-foreground mb-4">SNSでも情報を発信しています！</p>
                      <div className="flex justify-center gap-4">
                        <Button variant="outline" size="sm">
                          Instagram
                        </Button>
                        <Button variant="outline" size="sm">
                          Twitter
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-muted/30 py-12">
          <div className="container px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full bg-primary"></div>
                <span className="font-bold text-primary">まちナかぬんかさい 2025</span>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        size="icon"
        className="fixed bottom-6 right-6 z-40 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
        aria-label="ページトップへ"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  )
}
