'use client';

import { ArrowRight, Award, Shield, Zap, Target, TrendingUp, BookOpen, Users, Globe, Cloud } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Contact from '@/components/contact';
import Testimonials from '@/components/testimonials';
import Link from 'next/link';
import Partners from '@/components/partners';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
        {/* End of Background Effects */}

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-sky-300 rounded-full animate-pulse delay-500" />
        {/* End of Floating Elements */}

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                  <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400 bg-clip-text text-transparent">
                    ACE
                  </span>
                  <span className="bg-gradient-to-r from-white via-sky-200 to-white bg-clip-text text-transparent">
                    {' '}
                    your Career!
                  </span>
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                  BlueAce is your trusted Training Service Provider, delivering hands-on understanding of diverse Cyber
                  Security, Information Technology, Environment, and HR domains through innovative learning experiences.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white text-base border-0 shadow-xl hover:shadow-sky-500/25 transition-all duration-300 group"
                >
                  <Link href={'/#contact'}>
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="text-sky-500 text-base shadow-xl shadow-sky-500/25 transition-all duration-300 border border-sky-400"
                >
                  <Link href={'/#about'}>About BlueAce</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                    500+
                  </div>
                  <div className="text-sm text-slate-400">Professionals Trained</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                    5+
                  </div>
                  <div className="text-sm text-slate-400">Global Partners</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                    24/7
                  </div>
                  <div className="text-sm text-slate-400">Lab Access</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/growth.jpg"
                  width={525}
                  height={305}
                  alt="Professional Training Environment"
                  className="rounded-2xl w-full 2xl:scale-85 sm:rounded-3xl mx-auto"
                />

                {/* Floating Cards */}
                <div className="absolute -top-6 -left-6 bg-slate-900/90 backdrop-blur-xl p-2 sm:p-4 rounded-2xl shadow-xl border border-sky-400/20">
                  <div className="flex items-center space-x-3">
                    <div className="size-10 sm:size-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Multi-Domain TSP</div>
                      <div className="text-sm text-sky-400">Cyber • IT • HR</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-slate-900/90 backdrop-blur-xl p-2 sm:p-4 rounded-2xl shadow-xl border border-emerald-400/20">
                  <div className="flex items-center space-x-3">
                    <div className="size-10 sm:size-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Career Growth</div>
                      <div className="text-sm text-emerald-400">Guaranteed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-blue-500/20 rounded-3xl blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <Card className="bg-slate-900/50 backdrop-blur-xl border-sky-400/20 hover:border-sky-400/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <span>Our Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed">
                  Our mission is to empower individuals and organizations through high-quality, practical, and impactful
                  training solutions. We are committed to nurturing talent, enhancing skills, and unlocking potential by
                  delivering innovative learning experiences that inspire growth, adaptability, and long-term success.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 backdrop-blur-xl border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <span>Our Vision</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed">
                  To be a leading training service provider recognized for transforming lives and shaping future-ready
                  professionals. We envision a world where every learner has the tools, confidence, and competence to
                  thrive in a constantly evolving global landscape.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold sm:text-5xl">
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Our Training Approach
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              BlueAce works on a model which helps our learners to improve and enhance their practical approaches. From
              Instructor-led learnings to Cloud-based Labs Access, we strive to improve the learning experiences for
              delegates and participants.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border-sky-400/20 hover:border-sky-400/40 transition-all duration-300 group hover:shadow-2xl hover:shadow-sky-500/20">
              <CardHeader>
                <div className="flex items-center space-x-4 sm:mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">01. Practical Learning Environments</CardTitle>
                    <CardDescription className="text-sky-400">Hands-on skill building</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed">
                  Our practical oriented learnings will help you to build your skills and techniques. We have the best
                  instructors who are subject matter experts with extensive industry experience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300 group hover:shadow-2xl hover:shadow-emerald-500/20">
              <CardHeader>
                <div className="flex items-center space-x-4 sm:mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">02. Access to On Demand Content</CardTitle>
                    <CardDescription className="text-emerald-400">Learn anywhere, anytime</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed">
                  Learning at Your Ease From Anywhere, Anytime. Access the in-demand module wise videos and eBooks from
                  our Global Education Partners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trusted Partners (Scroller) */}
      <Partners />

      {/* About & Global Learning Partners */}
      <section
        className="py-20 relative"
        id="about"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* About Us */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  About BlueAce
                </span>
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-slate-300 leading-relaxed">
                  BlueAce is an all-around Training Service Provider (TSP) that delivers hands-on understanding of
                  diverse Cyber and Information Technology domain, Environment, and HR.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Partnered with EC-Council, CompTIA and SHINGO, we are a team of dedicated professionals assisting
                  young students and industry professionals to gain success in their career. We enable aspiring IT and
                  Security experts to attain the highest efficacies in a fully-equipped lab environment.
                </p>
              </div>

              {/* Partnership Badges */}
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-sky-400/20 text-sky-400 border-sky-400/30 px-4 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  CompTIA Partner
                </Badge>
                <Badge className="bg-emerald-400/20 text-emerald-400 border-emerald-400/30 px-4 py-2">
                  <Shield className="w-4 h-4 mr-2" />
                  EC-Council Partner
                </Badge>
                <Badge className="bg-purple-400/20 text-purple-400 border-purple-400/30 px-4 py-2">
                  <Target className="w-4 h-4 mr-2" />
                  SHINGO Partner
                </Badge>
              </div>
            </div>

            {/* Global Learning Partners */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                  Global Learning Partners
                </span>
              </h2>
              <div className="space-y-4">
                <Card className="bg-slate-900/50 backdrop-blur-xl border-sky-400/20 hover:border-sky-400/40 transition-all duration-300">
                  <CardContent>
                    <Link
                      href="https://www.comptia.org/en-us/certifications/"
                      target="_blank"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-sky-400 rounded-full" />
                        <span className="text-slate-200 font-medium">CompTIA Certifications</span>
                      </div>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/50 backdrop-blur-xl border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300">
                  <CardContent>
                    <Link
                      href="https://iclass.eccouncil.org/"
                      target="_blank"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                        <span className="text-slate-200 font-medium">EC-Council</span>
                      </div>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/50 backdrop-blur-xl border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
                  <CardContent>
                    <Link
                      href="https://www.eccu.edu/"
                      target="_blank"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                        <span className="text-slate-200 font-medium">EC-Council University</span>
                      </div>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/50 backdrop-blur-xl border-orange-400/20 hover:border-orange-400/40 transition-all duration-300">
                  <CardContent>
                    <Link
                      href="https://manufacturinginstitute.co.uk/shingo"
                      target="_blank"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full" />
                        <span className="text-slate-200 font-medium">SHINGO – Operational Excellence</span>
                      </div>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/50 backdrop-blur-xl border-green-400/20 hover:border-green-400/40 transition-all duration-300">
                  <CardContent>
                    <Link
                      href="https://unccelearn.org/"
                      target="_blank"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        <span className="text-slate-200 font-medium">UN Climate Change Learning</span>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <Contact />

      <Footer />
    </div>
  );
}
