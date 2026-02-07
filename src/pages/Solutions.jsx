import React, { useState } from 'react';
import { Anchor, Factory, Sprout, Building2, Users, ArrowRight, Check, Sparkles, TrendingUp, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Solutions = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const solutions = [
        {
            title: "Cage Farms",
            icon: Anchor,
            gradient: "from-cyan-500 to-blue-600",
            description: "Offshore and near-shore cage monitoring systems. Track fish behavior and secure assets in open water environments.",
            features: [
                { text: "Biomass Estimation", icon: TrendingUp },
                { text: "Net Integrity Checks", icon: Shield },
                { text: "Storm Alerts", icon: Zap }
            ],
            stats: { deployment: "Ocean", monitoring: "24/7", range: "5km" },
            color: "cyan"
        },
        {
            title: "Recirculating Systems (RAS)",
            icon: Factory,
            gradient: "from-blue-500 to-violet-600",
            description: "Precision control for indoor farming. Maintain perfect water chemistry in high-density closed-loop environments.",
            features: [
                { text: "Ammonia/Nitrite Real-time Tracking", icon: TrendingUp },
                { text: "Automated Feeding", icon: Zap },
                { text: "Energy Optimization", icon: Sparkles }
            ],
            stats: { efficiency: "98%", sensors: "50+", uptime: "99.9%" },
            color: "blue"
        },
        {
            title: "Hatcheries",
            icon: Sprout,
            gradient: "from-emerald-500 to-cyan-600",
            description: "Ensure the highest survival rates for fry and fingerlings. Manage broodstock health and larval development stages.",
            features: [
                { text: "Larval Counting", icon: TrendingUp },
                { text: "Micro-feed Management", icon: Sparkles },
                { text: "Genetic Tracking Data", icon: Shield }
            ],
            stats: { survival: "95%", accuracy: "99%", capacity: "1M+" },
            color: "emerald"
        },
        {
            title: "Governments & Regulators",
            icon: Building2,
            gradient: "from-violet-500 to-purple-600",
            description: "Macro-level insights for national food security. Monitor regional production, disease outbreaks, and environmental compliance.",
            features: [
                { text: "Zonal Disease Mapping", icon: TrendingUp },
                { text: "License Compliance", icon: Shield },
                { text: "Yield Forecasting", icon: Sparkles }
            ],
            stats: { coverage: "National", farms: "1000+", reports: "Real-time" },
            color: "violet"
        },
        {
            title: "Small-Scale Farmers",
            icon: Users,
            gradient: "from-orange-500 to-pink-600",
            description: "Affordable, mobile-first tools effectively digitizing the unorganized sector. Bringing enterprise-grade tech to community ponds.",
            features: [
                { text: "Mobile App Control", icon: Zap },
                { text: "SMS Alerts", icon: Sparkles },
                { text: "Community Knowledge Sharing", icon: Users }
            ],
            stats: { cost: "Low", access: "Mobile", reach: "Global" },
            color: "orange"
        }
    ];

    const benefits = [
        { icon: Sparkles, label: "AI-Powered Insights", value: "Real-time analytics" },
        { icon: Shield, label: "Secure & Reliable", value: "99.9% uptime" },
        { icon: TrendingUp, label: "Proven Results", value: "30% yield increase" },
        { icon: Zap, label: "Fast Deployment", value: "< 24 hours" }
    ];

    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-brand-navy via-slate-900 to-brand-navy">
            {/* Animated Background */}
            <div className="fixed inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Tech Grid + Circuit Background */}
            <div className="fixed inset-0 opacity-10 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(6,182,212,0.25) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(6,182,212,0.25) 1px, transparent 1px)
                        `,
                        backgroundSize: "60px 60px",
                        maskImage:
                            "radial-gradient(ellipse at center, black, transparent 80%)",
                    }}
                />
            </div>

            {/* Hero Section */}
            <section className="relative py-20 px-6 text-center overflow-hidden">
                {/* Background Orbs */}
                <motion.div
                    className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none"
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

                <motion.div
                    className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />

                <div className="relative z-10 max-w-5xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center px-4 py-2 mb-8 border border-brand-cyan/30 rounded-full bg-brand-cyan/5 backdrop-blur-sm"
                    >
                        <Sparkles className="w-4 h-4 mr-2 text-brand-cyan animate-pulse" />
                        <span className="text-brand-cyan text-sm font-semibold tracking-wider uppercase">
                            Industry Solutions
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Tailored <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-blue-400 to-violet-400">Solutions</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed"
                    >
                        Whether you operate a high-tech RAS facility or a traditional earthen pond, AquaCORTEX adapts to your infrastructure.
                    </motion.p>

                    {/* Benefits Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
                    >
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-brand-cyan/30 transition-all cursor-pointer group"
                                whileHover={{ scale: 1.05, y: -2 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                            >
                                <benefit.icon className="w-6 h-6 text-brand-cyan mb-2 mx-auto group-hover:scale-110 transition-transform" />
                                <div className="text-sm font-semibold text-white mb-1">{benefit.label}</div>
                                <div className="text-xs text-gray-400">{benefit.value}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-16 px-6 max-w-7xl mx-auto relative">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((sol, idx) => {
                        const Icon = sol.icon;
                        const isHovered = hoveredIndex === idx;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="relative group"
                            >
                                {/* Card */}
                                <motion.div
                                    className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 rounded-2xl overflow-hidden backdrop-blur-sm"
                                    whileHover={{
                                        y: -8,
                                        borderColor: 'rgba(6, 182, 212, 0.4)'
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    {/* Gradient Background */}
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${sol.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                        animate={isHovered ? {
                                            scale: [1, 1.2, 1],
                                        } : {}}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                        }}
                                    />

                                    {/* Circuit Pattern Layer */}
                                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <pattern
                                                    id={`circuit-${idx}`}
                                                    x="0"
                                                    y="0"
                                                    width="40"
                                                    height="40"
                                                    patternUnits="userSpaceOnUse"
                                                >
                                                    <circle cx="1" cy="1" r="1" fill="currentColor" className="text-brand-cyan" />
                                                    <path
                                                        d="M1 1 L20 1 L20 20"
                                                        stroke="currentColor"
                                                        strokeWidth="0.5"
                                                        fill="none"
                                                        className="text-brand-cyan"
                                                    />
                                                </pattern>
                                            </defs>
                                            <rect width="100%" height="100%" fill={`url(#circuit-${idx})`} />
                                        </svg>
                                    </div>

                                    {/* Animated Particles */}
                                    {isHovered && (
                                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                            {[...Array(8)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="absolute w-1 h-1 bg-brand-cyan/50 rounded-full"
                                                    style={{
                                                        left: `${Math.random() * 100}%`,
                                                        top: `${Math.random() * 100}%`,
                                                    }}
                                                    animate={{
                                                        y: [0, -100],
                                                        opacity: [0, 1, 0],
                                                        scale: [0, 1.5, 0]
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        delay: i * 0.2
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    )}

                                    {/* Icon Container */}
                                    <motion.div
                                        className={`relative bg-gradient-to-br ${sol.gradient} p-4 rounded-xl inline-block mb-6 shadow-lg`}
                                        whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Icon className="w-8 h-8 text-white relative z-10" />

                                        {/* Icon Glow */}
                                        <motion.div
                                            className="absolute inset-0 bg-white/30 blur-xl rounded-xl"
                                            animate={isHovered ? {
                                                scale: [1, 1.5, 1],
                                                opacity: [0.3, 0.6, 0.3]
                                            } : {}}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity
                                            }}
                                        />
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-cyan transition-colors">
                                        {sol.title}
                                    </h3>

                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {sol.description}
                                    </p>

                                    {/* Features List */}
                                    <ul className="space-y-3 mb-6">
                                        {sol.features.map((feat, i) => {
                                            const FeatureIcon = feat.icon;
                                            return (
                                                <motion.li
                                                    key={i}
                                                    className="flex items-center text-sm text-gray-300 group/item"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.2 + i * 0.1 }}
                                                    whileHover={{ x: 5 }}
                                                >
                                                    <div className="flex-shrink-0 w-6 h-6 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mr-3 group-hover/item:bg-brand-cyan/20 group-hover/item:border-brand-cyan/40 transition-all">
                                                        <FeatureIcon className="w-3.5 h-3.5 text-brand-cyan" />
                                                    </div>
                                                    <span className="group-hover/item:text-white transition-colors">
                                                        {feat.text}
                                                    </span>
                                                </motion.li>
                                            );
                                        })}
                                    </ul>

                                    {/* Stats */}
                                    <div className="pt-4 border-t border-white/10">
                                        <div className="grid grid-cols-3 gap-3">
                                            {Object.entries(sol.stats).map(([key, value], i) => (
                                                <motion.div
                                                    key={key}
                                                    className="text-center"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.3 + i * 0.1 }}
                                                >
                                                    <div className="text-sm font-bold text-brand-cyan">{value}</div>
                                                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">
                                                        {key}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Learn More Button */}
                                    <motion.button
                                        className="mt-6 w-full py-3 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-gray-300 hover:bg-brand-cyan/10 hover:border-brand-cyan/30 hover:text-brand-cyan transition-all flex items-center justify-center group/btn"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </motion.button>

                                    {/* Hover Glow Effect */}
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                        style={{
                                            boxShadow: '0 0 40px rgba(6, 182, 212, 0.2)',
                                        }}
                                    />
                                </motion.div>

                                {/* Corner Accent */}
                                <motion.div
                                    className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-brand-cyan/0 group-hover:border-brand-cyan/30 rounded-tr-2xl transition-all pointer-events-none"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/5 via-violet-500/5 to-brand-cyan/5" />

                <motion.div
                    className="max-w-4xl mx-auto text-center relative z-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-block p-4 bg-brand-cyan/10 rounded-full mb-6"
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <Sparkles className="w-12 h-12 text-brand-cyan" />
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Find Your Perfect Solution
                    </h2>

                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                        Not sure which solution fits your needs? Let our experts guide you to the perfect AquaCORTEX configuration.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            className="px-8 py-4 bg-brand-cyan text-brand-navy font-bold text-lg rounded-full shadow-glow hover:shadow-glow-sm relative overflow-hidden group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-white/20"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '100%' }}
                                transition={{ duration: 0.5 }}
                            />
                            <span className="relative z-10 flex items-center">
                                Schedule Consultation
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </span>
                        </motion.button>

                        <motion.button
                            className="px-8 py-4 border border-white/20 text-white rounded-full hover:border-brand-cyan/50 hover:bg-brand-cyan/5 transition-all backdrop-blur-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Pricing
                        </motion.button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Solutions;