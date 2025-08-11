'use client';

import { Mail, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm('xdkdyroo');

  return (
    <section
      id="contact"
      className="py-20 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold sm:text-5xl">
                <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Ready to ACE Your Career?
                </span>
              </h2>
              <p className="text-xl text-slate-300">
                Connect with our expert trainers and start your journey to professional excellence across multiple
                domains.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/50 border border-sky-400/20">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email Us</div>
                  <div className="text-sky-400">info@blueace.co</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/50 border border-emerald-400/20">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Call Us</div>
                  <div className="text-emerald-400">+92 348-5901203</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-900/50 border border-purple-400/20">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Visit Us</div>
                  <div className="text-purple-400">Bahria Enclave, Islamabad</div>
                </div>
              </div>
            </div>
          </div>

          {state.succeeded ? (
            <ContactSuccess />
          ) : (
            <Card className="bg-slate-900/50 backdrop-blur-xl border-sky-400/20 hover:border-sky-400/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Start Your Training Journey</CardTitle>
                <CardDescription className="text-slate-300">
                  Get personalized guidance from our training experts within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium text-slate-300"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        required
                        type="text"
                        disabled={state.submitting}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="lastName"
                        className="text-sm font-medium text-slate-300"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        required
                        type="text"
                        disabled={state.submitting}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-slate-300"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      required
                      type="email"
                      disabled={state.submitting}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="trainingDomain"
                      className="text-sm font-medium text-slate-300"
                    >
                      Training Domain
                    </label>
                    <select
                      required
                      id="trainingDomain"
                      name="trainingDomain"
                      disabled={state.submitting}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Select your area of interest</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="it">Information Technology</option>
                      <option value="environment">Environment</option>
                      <option value="hr">Human Resources</option>
                      <option value="operational">Operational Excellence</option>
                      <option value="all">All Domains</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-slate-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      disabled={state.submitting}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      rows={4}
                      placeholder="Tell us about your training goals and current experience..."
                    />
                  </div>

                  {/* Error Display */}
                  {state.errors && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <ValidationError
                        className="text-red-400"
                        errors={state.errors}
                      />
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white border-0 shadow-xl hover:shadow-sky-500/25 transition-all duration-300 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      'ACE My Career Journey'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}

function ContactSuccess() {
  return (
    <div className="container mx-auto sm:px-4 md:px-6 relative z-10">
      <div className="max-w-2xl mx-auto text-center">
        <Card className="bg-slate-900/50 backdrop-blur-xl border-emerald-400/20">
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-lg sm:text-xl text-slate-300">
              Your message has been sent successfully. Our training experts will get back to you within 24 hours to help
              you ACE your career!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
