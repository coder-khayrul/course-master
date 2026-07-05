import { useState } from 'react';
import {
  FiMail as Mail,
  FiPhone as Phone,
  FiMapPin as MapPin,
  FiClock as Clock,
  FiSend as Send,
  FiMessageSquare as MessageSquare,
  FiHeadphones as HeadphonesIcon,
  FiChevronRight as ChevronRight,
} from 'react-icons/fi';
import { FaGraduationCap as GraduationCap } from 'react-icons/fa6';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import TextArea from '../components/ui/TextArea';
import Container from '../components/ui/Container';
import Breadcrumbs from '../components/ui/Breadcrumbs';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Our friendly team is here to help.',
    value: 'support@coursemaster.com',
    href: 'mailto:support@coursemaster.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri from 8am to 5pm.',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Come say hello at our HQ.',
    value: '123 Learning Lane, San Francisco, CA 94102',
    href: '#',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    description: 'We respond within 24 hours.',
    value: '24/7 Support Available',
    href: '#',
  },
];



export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Message sent! We will get back to you within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-primary/90 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        </div>

        <Container>
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <Breadcrumbs />
              {/* <div className="mb-5 mt-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                <MessageSquare className="h-4 w-4" />
                Get in Touch
              </div> */}

              <h1 className="text-4xl mt-5 font-bold tracking-tight text-white sm:text-5xl">
                Contact us for support
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">
                Have questions about our courses, pricing, or partnership opportunities? Our team is ready to help you every step of the way.
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl shadow-black/10 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/20 p-2 text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Need a quick answer?</p>
                  <p className="text-sm text-slate-300">Call us anytime for help</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <item.icon className="h-6 w-6 transition-colors" />
                </div>
                <h3 className="mb-1 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mb-2 text-sm text-slate-500">{item.description}</p>
                <p className="text-sm font-medium text-slate-700 transition-colors group-hover:text-primary">{item.value}</p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl shadow-primary/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <HeadphonesIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Send us a message</h2>
                  <p className="text-sm text-muted-foreground">We will respond within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-second">
                    </label>
                    <Input
                      id="name"
                      label="Full Name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-second">
                    </label>
                    <Input
                      id="email"
                      label="Email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-second">
                  </label>
                  <Select
                    id="subject"
                    label="Select a subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="courses">Course Questions</option>
                    <option value="billing">Billing & Payments</option>
                    <option value="partnership">Partnership</option>
                    <option value="technical">Technical Support</option>
                    <option value="instructor">Become an Instructor</option>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-second">
                  </label>
                  <TextArea
                    id="message"
                    label="Message"
                    placeholder=""
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-[140px]"
                  />
                </div>

                {submitMessage && (
                  <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                    {submitMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Support & Quick Info */}
            <div className="space-y-4 lg:pt-2">
              <div className="rounded-2xl border border-primary/10 bg-gradient-to-br from-primary to-primary/90 p-6 text-white shadow-lg shadow-primary/15">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-white/20 p-2">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Need urgent help?</h3>
                    <p className="text-sm text-white/80">We are here for you anytime</p>
                  </div>
                </div>
                <p className="mb-5 text-sm leading-6 text-white/90">
                  Reach out for course guidance, payment questions, or technical support. Our team responds quickly and clearly.
                </p>
                <a
                  href="tel:+15551234567"
                  className="flex w-full items-center justify-center gap-2 rounded-md border border-white/30 bg-white px-4 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
                >
                  <Phone className="h-4 w-4" />
                  Call Support Now
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Fast support options</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    Response within 24 hours for all inquiries.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    Help with billing, course access, and onboarding.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    Friendly guidance for new learners and partners.
                  </li>
                </ul>
                <a
                  href="mailto:support@coursemaster.com"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
                >
                  <Mail className="h-4 w-4" />
                  Email support team
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Visit Our Office */}
      <section className="py-16">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <MapPin className="h-4 w-4" />
              Visit Our Office
            </div>
            <h2 className="mb-4 text-3xl font-bold text-slate-900">Stop by our learning headquarters</h2>
            <p className="text-lg text-slate-600">
              We would love to welcome students, educators, and partners for a visit and a quick conversation.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl shadow-primary/10">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[320px] bg-gradient-to-br from-primary/15 via-white to-slate-100 p-8 lg:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_45%)]" />
                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-4 inline-flex rounded-full bg-white p-3 text-primary shadow-sm">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold text-slate-900">CourseMaster HQ</h3>
                    <p className="max-w-md text-base leading-7 text-slate-600">
                      123 Learning Lane, San Francisco, CA 94102
                    </p>
                  </div>

                  <div className="mt-8 space-y-3 rounded-2xl border border-slate-200 bg-white/80 p-4 backdrop-blur">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-2 text-primary">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Office hours</p>
                        <p className="text-sm text-slate-600">Mon – Fri · 8:00 AM to 5:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-2 text-primary">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Call ahead</p>
                        <p className="text-sm text-slate-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex min-h-[320px] flex-col justify-center bg-slate-50 p-8 lg:p-10">
                <div className="mb-6">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Plan your visit</p>
                  <h3 className="text-2xl font-semibold text-slate-900">A welcoming place to learn and connect</h3>
                </div>
                <p className="mb-6 text-base leading-7 text-slate-600">
                  Whether you are exploring our programs or meeting with our team, our office is designed to make your visit easy and comfortable.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
                  >
                    <MapPin className="h-4 w-4" />
                    Open in Maps
                  </a>
                  <a
                    href="mailto:support@coursemaster.com"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary"
                  >
                    <Mail className="h-4 w-4" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}