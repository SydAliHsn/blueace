import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export default function Testimonials() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl font-bold sm:text-5xl">
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-slate-300">Transforming careers across multiple domains</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="bg-slate-900/50 backdrop-blur-xl border-sky-400/20 hover:border-sky-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/10">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-sky-400 text-sky-400"
                  />
                ))}
              </div>
              <p className="text-slate-300">
                "BlueAce's practical approach to cybersecurity training was exceptional. The hands-on labs and expert
                instructors prepared me perfectly for both certification and real-world challenges."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  AK
                </div>
                <div>
                  <div className="font-semibold text-white">Ahmed Khan</div>
                  <div className="text-sm text-sky-400">Cybersecurity Analyst</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 backdrop-blur-xl border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-emerald-400 text-emerald-400"
                  />
                ))}
              </div>
              <p className="text-slate-300">
                "The on-demand content and cloud-based lab access made learning flexible and effective. I successfully
                transitioned from banking to IT with BlueAce's comprehensive training."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                  SF
                </div>
                <div>
                  <div className="font-semibold text-white">Sara Fatima</div>
                  <div className="text-sm text-emerald-400">IT Professional</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 backdrop-blur-xl border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-purple-400 text-purple-400"
                  />
                ))}
              </div>
              <p className="text-slate-300">
                "BlueAce's multi-domain expertise helped me understand both technical and operational excellence. The
                SHINGO training transformed our organization's efficiency."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                  MR
                </div>
                <div>
                  <div className="font-semibold text-white">Muhammad Raza</div>
                  <div className="text-sm text-purple-400">Operations Manager</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
