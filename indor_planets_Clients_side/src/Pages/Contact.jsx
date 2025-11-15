import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { toast } from "react-toastify";
import GradientText from "../Components/GradientText/GradientText";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    console.log("Contact form payload:", payload);
    toast.success("Thanks! We received your message. ");
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-emerald-50/60">
      {/* Hero */}
      <section className="relative overflow-hidden">
              <div className="absolute inset-0  pointer-events-none" />
              {/* mx-auto max-w-6xl */}
        <div className=" px-4 sm:px-6 pt-16 pb-10">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            
            <GradientText
              colors={["#4ade80", "#bef264", "#4ade80"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class text-4xl"
            >
              Let’s Grow Something Beautiful
            </GradientText>
            <p className="mt-3 max-w-2xl mx-auto text-slate-600">
              Write to us for any questions regarding indoor plants, care tips,
              or orders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: <FiPhone className="w-6 h-6" />,
              title: "Phone",
              value: "+880 123456789",
              sub: "Sat–Thu, 10:00–19:00",
            },
            {
              icon: <FiMail className="w-6 h-6" />,
              title: "Email",
              value: "greenghor@gmaill.com",
              sub: "We reply within 24h",
            },
            {
              icon: <FiMapPin className="w-6 h-6" />,
              title: "Address",
              value: "Dhaka, Bangladesh",
              sub: "Visit by appointment",
            },
            {
              icon: <FiClock className="w-6 h-6" />,
              title: "Hours",
              value: "10:00 AM – 7:00 PM",
              sub: "Friday closed",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="cursor-target cursor-pointer group rounded-2xl   bg-white/80 backdrop-blur-sm p-5 shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * idx }}
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 group-hover:bg-emerald-200">
                {item.icon}
              </div>
              <h3 className="mt-3 text-slate-800 font-semibold">
                {item.title}
              </h3>
              <p className="mt-1 text-slate-700">{item.value}</p>
              <p className="text-slate-500 text-sm">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            className="rounded-2xl bg-white/90 backdrop-blur-sm  p-6 sm:p-8 shadow"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-800">
              Send us a message
            </h2>
            <p className="mt-1 text-slate-600">
              Write to us for any custom plant setup or care plan.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="e.g., Utso Roy"
                    className="mt-1 w-full input border cursor-target border-emerald-200 bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-sm  font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-1 w-full input cursor-target border border-emerald-200 bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+880123456789"
                    className="mt-1 w-full input cursor-target border border-emerald-200 bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    required
                    placeholder="Plant consultation / Order"
                    className="mt-1 w-full input border cursor-target border-emerald-200 bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell us about your space, light, and budget…"
                  className="mt-1 w-full input cursor-target border border-emerald-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 resize-y"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded cursor-target border-emerald-300 text-emerald-600 focus:ring-emerald-400"
                  required
                />
                <label htmlFor="consent" className="text-sm text-slate-600">
                  I agree to be contacted about my inquiry and plant
                  suggestions.
                </label>
              </div>

              <button
                type="submit"
                className="cursor-target dark:border-none cursor-pointer inline-flex items-center justify-center btn px-5 py-3 bg-emerald-600 text-white font-medium shadow hover:bg-emerald-700 active:scale-[.98] transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Map / Image */}
          <motion.div
            className="rounded-2xl overflow-hidden  shadow bg-white"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <iframe
              title="GreenHome Location"
              className="w-full h-[420px] sm:h-[500px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919.999999!2d88.0!3d25.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3AGreenHome!2sGreenHome!5e0!3m2!1sen!2sbd!4v1690000000000"
            />
            <div className="p-5">
              <h3 className="text-slate-800 font-semibold text-lg">
                Visit our Studio
              </h3>
              <p className="text-slate-600">
                Dhaka, Bangladesh— Please make an appointment before visiting
                our indoor plant studio.
              </p>
              <a
                href="tel:+8801XXXXXXXXX"
                className="cursor-target cursor-pointer inline-flex items-center gap-2 mt-3 text-emerald-700 hover:underline"
              >
                <FiPhone className="w-5 h-5" /> Call now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
