import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Target,
    Briefcase,
    Building2,
    Rocket,
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle2,
    AlertCircle,
    Sparkles,
    Globe,
    Users,
    Award,
    ArrowRight,
    Linkedin,
    Twitter,
    Github
} from 'lucide-react';

const Contact = () => {
    const [activeForm, setActiveForm] = useState('demo');
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    const formTypes = [
        {
            id: 'demo',
            icon: Target,
            emoji: '🎯',
            title: 'Request a Demo',
            subtitle: 'For farm operators, hatchery managers, operations directors',
            gradient: 'from-cyan-500 to-blue-600'
        },
        {
            id: 'investor',
            icon: Briefcase,
            emoji: '💼',
            title: 'Investor Relations',
            subtitle: 'For impact investors, venture capital, institutional investors',
            gradient: 'from-violet-500 to-purple-600'
        },
        {
            id: 'government',
            icon: Building2,
            emoji: '🏛️',
            title: 'Government & Institutional',
            subtitle: 'For governments, development agencies, NGOs, international organizations',
            gradient: 'from-emerald-500 to-teal-600'
        },
        {
            id: 'careers',
            icon: Rocket,
            emoji: '🚀',
            title: 'Careers',
            subtitle: 'Join our team in transforming global aquaculture',
            gradient: 'from-orange-500 to-pink-600'
        }
    ];

    const handleSubmit = (e, formType) => {
        e.preventDefault();
        // Validation logic here
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error for this field
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: null }));
        }
    };

    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'support@aquacortex.ai', href: 'mailto:support@aquacortex.ai' },
        { icon: Phone, label: 'Phone', value: '+1 (234) 567-890', href: 'tel:+1234567890' },
        { icon: MapPin, label: 'Headquarters', value: 'Dubai, UAE' }
    ];

    const socialLinks = [
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Github, href: '#', label: 'GitHub' }
    ];

    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-brand-navy via-slate-900 to-brand-navy">
            {/* Background Grid */}
            <div className="fixed inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Hero Section */}
            <section className="relative py-20 px-6 overflow-hidden">
                <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center px-4 py-2 mb-8 border border-brand-cyan/30 rounded-full bg-brand-cyan/5 backdrop-blur-sm"
                    >
                        <Sparkles className="w-4 h-4 mr-2 text-brand-cyan animate-pulse" />
                        <span className="text-brand-cyan text-sm font-semibold tracking-wider uppercase">
                            Get in Touch
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-blue-400 to-violet-400">Connect</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Choose your engagement path below. We're here to help farmers, investors, governments, and partners transform aquaculture.
                    </motion.p>
                </div>
            </section>

            {/* Form Type Tabs */}
            <section className="px-6 pb-12">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {formTypes.map((type, index) => {
                            const Icon = type.icon;
                            const isActive = activeForm === type.id;

                            return (
                                <motion.button
                                    key={type.id}
                                    onClick={() => setActiveForm(type.id)}
                                    className={`relative p-6 rounded-2xl border-2 transition-all ${isActive
                                            ? 'border-brand-cyan bg-brand-cyan/10'
                                            : 'border-white/10 bg-white/5 hover:border-white/20'
                                        }`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -4, scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isActive && (
                                        <motion.div
                                            className="absolute inset-0 bg-brand-cyan/20 rounded-2xl blur-xl"
                                            layoutId="activeFormGlow"
                                        />
                                    )}

                                    <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${type.gradient} p-0.5`}>
                                        <div className="w-full h-full bg-brand-navy rounded-xl flex items-center justify-center">
                                            <div className="text-2xl">{type.emoji}</div>
                                        </div>
                                    </div>

                                    <div className="text-sm font-semibold text-white">{type.title}</div>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="px-6 pb-20">
                <div className="max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        {formTypes.map((type) => {
                            if (activeForm !== type.id) return null;
                            const Icon = type.icon;

                            return (
                                <motion.div
                                    key={type.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden"
                                >
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-5">
                                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <pattern id={`form-pattern-${type.id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                                    <circle cx="2" cy="2" r="1" fill="currentColor" className="text-brand-cyan" />
                                                </pattern>
                                            </defs>
                                            <rect width="100%" height="100%" fill={`url(#form-pattern-${type.id})`} />
                                        </svg>
                                    </div>

                                    {/* Header */}
                                    <div className="flex items-center gap-4 mb-8 relative z-10">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.gradient} p-0.5`}>
                                            <div className="w-full h-full bg-brand-navy rounded-2xl flex items-center justify-center">
                                                <div className="text-3xl">{type.emoji}</div>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-white">{type.title}</h2>
                                            <p className="text-gray-400">{type.subtitle}</p>
                                        </div>
                                    </div>

                                    {/* Success Message */}
                                    <AnimatePresence>
                                        {submitted && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0 }}
                                                className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3 relative z-10"
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                                <p className="text-green-400 text-sm">
                                                    Thank you! We've received your message and will get back to you shortly.
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Form */}
                                    <form onSubmit={(e) => handleSubmit(e, type.id)} className="space-y-6 relative z-10">
                                        {type.id === 'demo' && (
                                            <>
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-semibold text-white mb-2">
                                                            Full Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            required
                                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                                                            placeholder="John Doe"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-white mb-2">
                                                            Organization Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            required
                                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                                                            placeholder="Company Name"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-semibold text-white mb-2">
                                                            Production System Type *
                                                        </label>
                                                        <select
                                                            required
                                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                                                        >
                                                            <option value="" className="bg-brand-navy">Select system</option>
                                                            <option value="cage" className="bg-brand-navy">Cage</option>
                                                            <option value="pond" className="bg-brand-navy">Pond</option>
                                                            <option value="ras" className="bg-brand-navy">RAS</option>
                                                            <option value="hatchery" className="bg-brand-navy">Hatchery</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-white mb-2">
                                                            Primary Species
                                                        </label>
                                                        <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all">
                                                            <option value="" className="bg-brand-navy">Select species</option>
                                                            <option value="shrimp" className="bg-brand-navy">Shrimp</option>
                                                            <option value="salmon" className="bg-brand-navy">Salmon</option>
                                                            <option value="tilapia" className="bg-brand-navy">Tilapia</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-semibold text-white mb-2">
                                                            Email Address *
                                                        </label>
                                                        <input
                                                            type="email"
                                                            required
                                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                                                            placeholder="john@example.com"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-white mb-2">
                                                            Phone Number
                                                        </label>
                                                        <input
                                                            type="tel"
                                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                                                            placeholder="+1 234 567 8900"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-white mb-2">
                                                        Current Challenges or Goals (Optional)
                                                    </label>
                                                    <textarea
                                                        rows="4"
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all resize-none"
                                                        placeholder="Tell us about your current challenges..."
                                                    />
                                                </div>
                                            </>
                                        )}

                                        {type.id === 'investor' && (
                                            <>
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-semibold text-white mb-2">
                                                            Full Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            required
                                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-white mb-2">
                                                            Organization Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            required
                                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-semibold text-white mb-2">
                                                            Investor Type *
                                                        </label>
                                                        <select
                                                            required
                                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                                                        >
                                                            <option value="" className="bg-brand-navy">Select type</option>
                                                            <option value="individual" className="bg-brand-navy">Individual</option>
                                                            <option value="fund" className="bg-brand-navy">Fund</option>
                                                            <option value="institution" className="bg-brand-navy">Institution</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-white mb-2">
                                                            Email Address *
                                                        </label>
                                                        <input
                                                            type="email"
                                                            required
                                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-white mb-2">
                                                        Investment Focus Areas
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                                                        placeholder="e.g., ESG, Blue Economy"
                                                    />
                                                </div>
                                            </>
                                        )}

                                        {type.id === 'government' && (
                                            <>
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-semibold text-white mb-2">
                                                            Full Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            required
                                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-white mb-2">
                                                            Title/Position *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            required
                                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-semibold text-white mb-2">
                                                            Organization/Agency *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            required
                                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-white mb-2">
                                                            Country/Region *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            required
                                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-white mb-2">
                                                        Email Address *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        required
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-white mb-2">
                                                        Project or Initiative Description
                                                    </label>
                                                    <textarea
                                                        rows="4"
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all resize-none"
                                                    />
                                                </div>
                                            </>
                                        )}

                                        {type.id === 'careers' && (
                                            <>
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-semibold text-white mb-2">
                                                            Full Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            required
                                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-white mb-2">
                                                            Current Location *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            required
                                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-semibold text-white mb-2">
                                                            Areas of Expertise *
                                                        </label>
                                                        <select
                                                            required
                                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                                                        >
                                                            <option value="" className="bg-brand-navy">Select expertise</option>
                                                            <option value="ai-ml" className="bg-brand-navy">AI/ML</option>
                                                            <option value="aquaculture" className="bg-brand-navy">Aquaculture</option>
                                                            <option value="software" className="bg-brand-navy">Software Engineering</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-white mb-2">
                                                            Email Address *
                                                        </label>
                                                        <input
                                                            type="email"
                                                            required
                                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-white mb-2">
                                                        LinkedIn Profile
                                                    </label>
                                                    <input
                                                        type="url"
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                                                        placeholder="https://linkedin.com/in/yourprofile"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-white mb-2">
                                                        Why AquaCORTEX?
                                                    </label>
                                                    <textarea
                                                        rows="4"
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:ring-2 focus:ring-brand-cyan/20 transition-all resize-none"
                                                        placeholder="Tell us why you want to join our team..."
                                                    />
                                                </div>
                                            </>
                                        )}

                                        {/* Submit Button */}
                                        <motion.button
                                            type="submit"
                                            className={`w-full py-4 bg-gradient-to-r ${type.gradient} text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden group`}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <motion.div
                                                className="absolute inset-0 bg-white/20"
                                                initial={{ x: '-100%' }}
                                                whileHover={{ x: '100%' }}
                                                transition={{ duration: 0.5 }}
                                            />
                                            <span className="relative z-10 flex items-center justify-center">
                                                Submit {type.title}
                                                <Send className="ml-2 w-5 h-5" />
                                            </span>
                                        </motion.button>
                                    </form>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Other Ways to Reach Us</h3>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
                                        whileHover={{ y: -2 }}
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-5 h-5 text-brand-cyan" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                                            {info.href ? (
                                                <a href={info.href} className="text-white hover:text-brand-cyan transition-colors">
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <div className="text-white">{info.value}</div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center justify-center gap-4 pt-6 border-t border-white/10">
                            <span className="text-gray-400 text-sm">Follow us:</span>
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/30 transition-all"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                );
                            })}
                        </div>

                        <p className="text-sm text-gray-400 text-center mt-6 pt-6 border-t border-white/10">
                            All information submitted is handled according to our Privacy Policy. We respect your data and will only use it to respond to your inquiry.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;