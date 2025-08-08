import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-16 bg-slate-950 border-t border-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Image
              alt="blueace-logo"
              width={286}
              height={96}
              className=""
              src="/images/blueace-logo.png"
            />

            <p className="text-slate-400">
              Your trusted Training Service Provider for Cybersecurity, IT, Environment, and HR domains.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Training Domains</h4>
            <div className="text-slate-400 space-y-1">
              <div>• Cybersecurity</div>
              <div>• Information Technology</div>
              <div>• Environment</div>
              <div>• Human Resources</div>
              <div>• Operational Excellence</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Global Partners</h4>
            <div className="text-slate-400 space-y-1">
              <div>• CompTIA</div>
              <div>• EC-Council</div>
              <div>• SHINGO</div>
              <div>• UN Climate Change</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contact Information</h4>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-sky-400" />
                <span>info@blueace.co</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-sky-400" />
                <span>(555) 123-TECH</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} BlueAce Technologies. All rights reserved.
            <span className="text-sky-400 ml-2">Training Service Provider (TSP)</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
