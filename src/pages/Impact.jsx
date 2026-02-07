import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform, useInView, useAnimationControls } from 'framer-motion';
import { Globe, Leaf, TrendingUp, Users, Droplets, BookOpen, Anchor, Award, Target, Zap, Shield, Heart, Sparkles } from 'lucide-react';

const CountUp = ({ value, suffix = "", duration = 2 }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    // Extract numerical value if mixed with string (e.g. "30%")
    const numberValue = parseFloat(value.replace(/,/g, ''));

    const spring = useSpring(0, {
        mass: 1,
        stiffness: 50,
        damping: 20,
        duration: duration * 1000
    });

    const displayValue = useTransform(spring, (current) => {
        if (value.includes('M')) return Math.floor(current) + 'M' + suffix;
        if (value.includes('k')) return Math.floor(current) + 'k' + suffix;
        return Math.floor(current).toLocaleString() + suffix;
    });

    React.useEffect(() => {
        if (isInView) {
            spring.set(numberValue);
        }
    }, [isInView, numberValue, spring]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const ImpactCard = ({ title, description, metrics, icon: Icon, align = 'left', gradient, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`flex flex-col ${align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center py-20 border-b border-white/5 last:border-0 relative`}
        >
            {/* Decorative Line */}
            <motion.div
                className={`absolute top-0 ${align === 'right' ? 'right-0' : 'left-0'} w-1 h-full bg-gradient-to-b ${gradient} opacity-20`}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
            />

            <div className="flex-1 space-y-6 relative z-10">
                {/* Icon Badge */}
                <motion.div
                    className="relative inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-cyan/20 backdrop-blur-sm overflow-hidden"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-10`} />
                    <div className="relative z-10">
                        <Icon className="w-6 h-6 text-brand-cyan" />
                        <motion.div
                            className="absolute inset-0 bg-brand-cyan/30 blur-lg"
                            animate={{
                                scale: isHovered ? [1, 1.5, 1] : 1,
                                opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity
                            }}
                        />
                    </div>
                    <span className="relative z-10 uppercase tracking-widest text-sm font-bold text-brand-cyan">Key Pillar</span>
                </motion.div>

                {/* Title */}
                <motion.h2
                    className="text-3xl md:text-5xl font-bold text-white"
                    initial={{ opacity: 0, x: align === 'right' ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                >
                    {title}
                </motion.h2>

                {/* Description */}
                <motion.p
                    className="text-lg text-gray-400 leading-relaxed max-w-xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                >
                    {description}
                </motion.p>

                {/* Decorative Quote Mark */}
                <motion.div
                    className="text-8xl font-serif text-brand-cyan/10 leading-none"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                >
                    "
                </motion.div>
            </div>

            {/* Metrics Grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {metrics.map((metric, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.5 + idx * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 rounded-2xl overflow-hidden group hover:border-brand-cyan/40 transition-all duration-300 cursor-pointer"
                    >
                        {/* Animated Background */}
                        <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                            animate={isHovered ? {
                                scale: [1, 1.2, 1],
                            } : {}}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                            }}
                        />

                        {/* Glow Effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-3xl group-hover:bg-brand-cyan/20 transition-colors" />

                        {/* Sparkle on Hover */}
                        {isHovered && (
                            <motion.div
                                className="absolute top-4 right-4"
                                initial={{ scale: 0, rotate: 0 }}
                                animate={{ scale: [0, 1, 0], rotate: [0, 180, 360] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <Sparkles className="w-4 h-4 text-brand-cyan" />
                            </motion.div>
                        )}

                        {/* Value */}
                        <h3 className="relative text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-blue-400 to-cyan-300 mb-3">
                            <CountUp value={metric.value} suffix={metric.suffix} />
                        </h3>

                        {/* Label */}
                        <p className="relative text-gray-300 font-semibold text-base group-hover:text-white transition-colors">
                            {metric.label}
                        </p>

                        {/* Progress Bar */}
                        <motion.div
                            className="relative mt-4 h-1 bg-white/10 rounded-full overflow-hidden"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.7 + idx * 0.1 }}
                        >
                            <motion.div
                                className={`h-full bg-gradient-to-r ${gradient}`}
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: index * 0.1 + 0.8 + idx * 0.1 }}
                            />
                        </motion.div>

                        {/* Corner Decoration */}
                        <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-brand-cyan/20 group-hover:border-brand-cyan/40 rounded-bl-2xl transition-colors" />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const Impact = () => {
    const [activeTab, setActiveTab] = useState(0);

    const impactPillars = [
        {
            title: "Global Food Security",
            description: "By 2050, the world will need 70% more food. Wild catch has plateaued. Aquaculture must fill the gap. Our AI ensures that every harvest is maximized, reducing the volatility of global protein supply.",
            icon: Globe,
            gradient: "from-blue-500 to-cyan-500",
            metrics: [
                { value: "30", suffix: "%", label: "Productivity Boost" },
                { value: "15", suffix: "%", label: "Mortality Reduction" },
                { value: "10000", suffix: "+", label: "Smallholders Supported" }
            ]
        },
        {
            title: "Environmental Sustainability",
            description: "Transforming aquaculture from an extractive industry into a regenerative one. We minimize chemical usage and optimize resource consumption to protect our oceans.",
            icon: Leaf,
            gradient: "from-emerald-500 to-teal-500",
            metrics: [
                { value: "45", suffix: "%", label: "Chemical Reduction" },
                { value: "40", suffix: "%", label: "Lower Carbon Footprint" },
                { value: "500", suffix: " km²", label: "Ecosystem Monitored" }
            ]
        },
        {
            title: "Economic Development",
            description: "Empowering farmers with data-driven assets. We turn accurate biological data into bankable collateral, unlocking financial inclusion for thousands.",
            icon: TrendingUp,
            gradient: "from-violet-500 to-purple-500",
            metrics: [
                { value: "50", suffix: "%", label: "Income Improvement" },
                { value: "20", suffix: "%", label: "Feed Waste Reduction" },
                { value: "25", suffix: "M+", label: "Economic Value Generated" }
            ]
        },
        {
            title: "Knowledge Equity",
            description: "Democratizing access to expert agronomy. Our platform bridges the gap between industrial science and small-scale application.",
            icon: BookOpen,
            gradient: "from-orange-500 to-pink-500",
            metrics: [
                { value: "5000", suffix: "+", label: "Advisory Interventions" },
                { value: "1000", suffix: "+", label: "Peer Connections" }
            ]
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-brand-navy via-brand-dark to-brand-navy">
            {/* Animated Background Grid */}
            <div className="fixed inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Hero Section */}
            <section className="relative py-20 px-6 max-w-7xl mx-auto overflow-hidden">
                {/* Glow Blobs Background */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">

                    {/* Cyan Glow */}
                    <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 
                                    w-[700px] h-[700px] 
                                    bg-brand-cyan/10 
                                    rounded-full blur-[120px]" />

                    {/* Violet Glow */}
                    <div className="absolute bottom-[-200px] right-[-150px] 
                                    w-[600px] h-[600px] 
                                    bg-violet-500/10 
                                    rounded-full blur-[100px]" />

                </div>

                <div className="text-center mb-24 relative z-10">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center px-4 py-2 mb-8 border border-brand-cyan/30 rounded-full bg-brand-cyan/5 backdrop-blur-sm"
                    >
                        <Award className="w-4 h-4 mr-2 text-brand-cyan animate-pulse" />
                        <span className="text-brand-cyan text-sm font-semibold tracking-wider uppercase">
                            Impact & Vision
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-12"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-blue-400 to-violet-400">Impact & Vision</span>
                    </motion.h1>

                    {/* Mission Statement */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="relative text-left bg-gradient-to-br from-brand-cyan/20 via-brand-navy/90 to-brand-navy p-10 rounded-3xl border border-brand-cyan/30 overflow-hidden group"
                        >
                            {/* Animated Background */}
                            <motion.div
                                className="absolute inset-0 bg-brand-cyan/5"
                                animate={{
                                    backgroundPosition: ['0% 0%', '100% 100%'],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                                style={{
                                    backgroundImage: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
                                    backgroundSize: '30px 30px'
                                }}
                            />

                            {/* Floating Icons */}
                            <motion.div
                                className="absolute top-4 right-4"
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity
                                }}
                            >
                                <Target className="w-8 h-8 text-brand-cyan/30" />
                            </motion.div>

                            <h3 className="text-brand-cyan font-bold text-xl uppercase tracking-wider mb-6 relative z-10 flex items-center">
                                <Heart className="w-5 h-5 mr-2" />
                                Core Mission
                            </h3>
                            <p className="text-2xl md:text-3xl font-light leading-relaxed text-white relative z-10">
                                "To make intelligent aquaculture <span className="text-brand-cyan font-semibold">accessible to everyone</span> — scaling farmers sustainably, rewarding purpose-driven investors, and connecting the world's blue economy through AquaCORTEX intelligence."
                            </p>

                            {/* Glow Effect */}
                            <motion.div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                style={{
                                    boxShadow: '0 0 60px rgba(6, 182, 212, 0.3)',
                                }}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-left space-y-6 relative"
                        >
                            {/* Quote Decorations */}
                            <div className="absolute -top-6 -left-4 text-6xl font-serif text-brand-cyan/20">"</div>

                            <p className="text-xl text-gray-300 leading-relaxed relative z-10">
                                We believe the future of food is blue. But ensuring that future requires a fundamental shift from intuition to intelligence.
                            </p>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                By digitizing biological assets, we aren't just improving farm yields; we are validating the entire value chain, reducing risk for insurers, and proving sustainability claims for retailers.
                            </p>

                            {/* Animated Divider */}
                            <motion.div
                                className="h-1 bg-gradient-to-r from-brand-cyan via-blue-400 to-transparent rounded-full mt-8"
                                initial={{ width: 0 }}
                                whileInView={{ width: '30%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.6 }}
                            />

                            {/* Stats Mini Cards */}
                            <div className="grid grid-cols-3 gap-4 pt-4">
                                {[
                                    { icon: Users, value: '10k+', label: 'Farmers' },
                                    { icon: Globe, value: '50+', label: 'Countries' },
                                    { icon: Zap, value: '24/7', label: 'Support' }
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        className="text-center p-3 bg-white/5 rounded-lg border border-white/10 hover:border-brand-cyan/30 transition-all"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7 + i * 0.1 }}
                                        whileHover={{ y: -3, scale: 1.05 }}
                                    >
                                        <stat.icon className="w-5 h-5 text-brand-cyan mx-auto mb-1" />
                                        <div className="text-lg font-bold text-white">{stat.value}</div>
                                        <div className="text-xs text-gray-400">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Pillars of Impact */}
                <div className="space-y-12 relative z-10">
                    {impactPillars.map((pillar, index) => (
                        <ImpactCard
                            key={index}
                            {...pillar}
                            align={index % 2 === 1 ? 'right' : 'left'}
                            index={index}
                        />
                    ))}
                </div>
            </section>

            {/* Enhanced Icon Grid */}
            <section className="relative bg-brand-navy/50 py-24 border-y border-white/5 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="impact-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1" fill="currentColor" className="text-brand-cyan" />
                                <path d="M2 2 L30 2 L30 30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-brand-cyan" opacity="0.3" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#impact-grid)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        The AquaCORTEX <span className="text-brand-cyan">Promise</span>
                    </motion.h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                emoji: "🌊",
                                title: "Aquaculture 2.0",
                                desc: "Data-driven precision operations.",
                                icon: Droplets,
                                color: "from-cyan-500 to-blue-500"
                            },
                            {
                                emoji: "👨‍🌾",
                                title: "Farmer Empowerment",
                                desc: "Leveling the playing field.",
                                icon: Users,
                                color: "from-emerald-500 to-teal-500"
                            },
                            {
                                emoji: "🌍",
                                title: "Food Security",
                                desc: "Feeding 10 billion people.",
                                icon: Globe,
                                color: "from-violet-500 to-purple-500"
                            },
                            {
                                emoji: "♻️",
                                title: "Eco Stewardship",
                                desc: "Preserving marine life.",
                                icon: Leaf,
                                color: "from-green-500 to-emerald-500"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="relative bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 hover:border-brand-cyan/30 transition-all group cursor-pointer overflow-hidden"
                            >
                                {/* Background Gradient */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                                    animate={{
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                    }}
                                />

                                {/* Icon Badge */}
                                <motion.div
                                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} p-0.5 mb-6 mx-auto`}
                                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="w-full h-full bg-brand-navy rounded-xl flex items-center justify-center">
                                        <div className="text-3xl">{item.emoji}</div>
                                    </div>
                                </motion.div>

                                <h4 className="font-bold text-lg text-white mb-2 text-center group-hover:text-brand-cyan transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-gray-400 text-center leading-relaxed">
                                    {item.desc}
                                </p>

                                {/* Bottom Icon */}
                                <motion.div
                                    className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity"
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                >
                                    <item.icon className="w-12 h-12 text-brand-cyan" />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 relative overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-brand-cyan/10 via-violet-500/10 to-brand-cyan/10"
                    animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        backgroundSize: '200% 200%'
                    }}
                />

                <div className="max-w-4xl mx-auto text-center relative z-10">
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
                        <Shield className="w-12 h-12 text-brand-cyan" />
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Join the Blue Revolution
                    </motion.h2>

                    <motion.p
                        className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Be part of the movement transforming aquaculture into a sustainable, intelligent, and profitable industry.
                    </motion.p>

                    <motion.button
                        className="px-8 py-4 bg-brand-cyan text-brand-navy font-bold text-lg rounded-full shadow-glow hover:shadow-glow-sm transition-all relative overflow-hidden group"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-white/20"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.5 }}
                        />
                        <span className="relative z-10">Partner With Us</span>
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default Impact;