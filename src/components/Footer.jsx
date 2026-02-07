import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Mail,
    MapPin,
    Phone,
    Twitter,
    Linkedin,
    Github,
    Youtube,
    ArrowRight,
    CheckCircle2,
    Globe,
    Award,
    Shield,
    Sparkles
} from 'lucide-react';
import logo from '../assets/aquacortex-logo.svg';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setTimeout(() => {
                setEmail('');
                setSubscribed(false);
            }, 3000);
        }
    };

    const socialLinks = [
        { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
        { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' },
        { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-300' },
        { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' }
    ];

    const badges = [
        { icon: Award, text: 'ISO Certified' },
        { icon: Shield, text: 'SOC 2 Compliant' },
        { icon: Globe, text: 'Global Coverage' }
    ];

    return (
        <footer className="relative bg-gradient-to-b from-brand-navy via-slate-900 to-brand-navy border-t border-white/10 overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.4) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Gradient Orb */}
            <motion.div
                className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.1, 0.05]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Newsletter Section */}
                <motion.div
                    className="py-16 border-b border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center px-3 py-1 mb-4 border border-brand-cyan/30 rounded-full bg-brand-cyan/5 text-brand-cyan text-xs font-semibold tracking-wider uppercase">
                                <Sparkles className="w-3 h-3 mr-2" />
                                Stay Updated
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                                Join the Blue Revolution
                            </h3>
                            <p className="text-gray-400 text-lg">
                                Get insights on aquaculture tech, sustainability trends, and platform updates.
                            </p>
                        </div>

                        <motion.form
                            onSubmit={handleSubscribe}
                            className="relative"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full pl-12 pr-36 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:bg-white/10 transition-all"
                                    disabled={subscribed}
                                />
                                <motion.button
                                    type="submit"
                                    className={`absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 rounded-full font-semibold transition-all ${subscribed
                                        ? 'bg-green-500 text-white'
                                        : 'bg-brand-cyan text-brand-navy hover:bg-cyan-400'
                                        }`}
                                    whileHover={{ scale: subscribed ? 1 : 1.05 }}
                                    whileTap={{ scale: subscribed ? 1 : 0.95 }}
                                    disabled={subscribed}
                                >
                                    {subscribed ? (
                                        <span className="flex items-center">
                                            <CheckCircle2 className="w-4 h-4 mr-1" />
                                            Subscribed
                                        </span>
                                    ) : (
                                        <span className="flex items-center">
                                            Subscribe
                                            <ArrowRight className="w-4 h-4 ml-1" />
                                        </span>
                                    )}
                                </motion.button>
                            </div>
                            {subscribed && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-green-400 text-sm mt-2 ml-4"
                                >
                                    Thank you for subscribing! Check your email.
                                </motion.p>
                            )}
                        </motion.form>
                    </div>
                </motion.div>

                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
                    {/* Brand Column */}
                    <motion.div
                        className="col-span-1 lg:col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="inline-block mb-6"
                        >
                            <img src={logo} alt="AquaCORTEX" className="h-10" />
                        </motion.div>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                            The world's first Biological AI Operating System for Aquaculture, empowering farmers and transforming the blue economy.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            <a
                                href="mailto:support@aquacortex.ai"
                                className="flex items-center text-gray-400 hover:text-brand-cyan transition-colors text-sm group"
                            >
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mr-3 group-hover:bg-brand-cyan/10 transition-colors">
                                    <Mail className="w-4 h-4" />
                                </div>
                                support@aquacortex.ai
                            </a>
                            <a
                                href="tel:+1234567890"
                                className="flex items-center text-gray-400 hover:text-brand-cyan transition-colors text-sm group"
                            >
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mr-3 group-hover:bg-brand-cyan/10 transition-colors">
                                    <Phone className="w-4 h-4" />
                                </div>
                                +1 (234) 567-890
                            </a>
                            <div className="flex items-start text-gray-400 text-sm group">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mr-3 flex-shrink-0">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <span className="leading-relaxed">
                                    Singapore · Dubai · Bangkok<br />
                                    Global Operations
                                </span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} transition-all group`}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links Column 1: Platform */}
                    <motion.div
                        className="col-span-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Platform</h4>
                        <ul className="space-y-3">
                            {[
                                { to: '/technology', label: 'Technology' },
                                { to: '/solutions', label: 'Solutions' },
                                { to: '/impact', label: 'Impact' },
                                { to: '/expansion', label: 'Global Expansion' }
                            ].map((link, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                >
                                    <Link
                                        to={link.to}
                                        className="text-gray-400 hover:text-brand-cyan transition-colors text-sm flex items-center group"
                                    >
                                        <span className="w-0 h-0.5 bg-brand-cyan group-hover:w-3 transition-all mr-0 group-hover:mr-2" />
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Links Column 2: Company */}
                    <motion.div
                        className="col-span-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Company</h4>
                        <ul className="space-y-3">
                            {[
                                { to: '/about', label: 'About Us' },
                                { to: '/contact', label: 'Contact' },
                                { to: '#', label: 'Careers' },
                                { to: '#', label: 'Investors' }
                            ].map((link, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                >
                                    <Link
                                        to={link.to}
                                        className="text-gray-400 hover:text-brand-cyan transition-colors text-sm flex items-center group"
                                    >
                                        <span className="w-0 h-0.5 bg-brand-cyan group-hover:w-3 transition-all mr-0 group-hover:mr-2" />
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Links Column 3: Resources */}
                    <motion.div
                        className="col-span-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Resources</h4>
                        <ul className="space-y-3">
                            {[
                                { to: '#', label: 'Documentation' },
                                { to: '#', label: 'Case Studies' },
                                { to: '#', label: 'Privacy Policy' },
                                { to: '#', label: 'Terms of Service' }
                            ].map((link, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                >
                                    <a
                                        href={link.to}
                                        className="text-gray-400 hover:text-brand-cyan transition-colors text-sm flex items-center group"
                                    >
                                        <span className="w-0 h-0.5 bg-brand-cyan group-hover:w-3 transition-all mr-0 group-hover:mr-2" />
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Trust Badges */}
                <motion.div
                    className="border-t border-white/10 py-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="flex flex-wrap justify-center gap-8">
                        {badges.map((badge, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:border-brand-cyan/30 transition-all cursor-pointer"
                                whileHover={{ scale: 1.05, y: -2 }}
                            >
                                <badge.icon className="w-4 h-4 text-brand-cyan" />
                                <span className="text-gray-400 text-xs font-semibold">{badge.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    className="border-t border-white/10 py-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                        <div className="text-center md:text-left space-y-1">
                            <p>&copy; 2026 Aqua Bridge Holding Ltd. All rights reserved.</p>
                            <p>AquaCORTEX™ is a registered trademark.</p>
                        </div>

                        <div className="flex items-center space-x-6">
                            <a href="#" className="hover:text-brand-cyan transition-colors">Privacy</a>
                            <span className="text-white/20">•</span>
                            <a href="#" className="hover:text-brand-cyan transition-colors">Terms</a>
                            <span className="text-white/20">•</span>
                            <a href="#" className="hover:text-brand-cyan transition-colors">Cookies</a>
                        </div>
                    </div>
                </motion.div>

                {/* Scroll to Top Button */}
                <motion.button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 w-12 h-12 bg-brand-cyan text-brand-navy rounded-full shadow-glow flex items-center justify-center hover:scale-110 transition-transform z-50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ArrowRight className="w-5 h-5 -rotate-90" />
                </motion.button>
            </div>
        </footer>
    );
};

export default Footer;