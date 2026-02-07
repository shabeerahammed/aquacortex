import React, { useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { MapPin, CheckCircle2, Globe, TrendingUp, Users, Sprout, BarChart3, ShieldCheck, Zap, Target, Award, Flag, ArrowRight, Sparkles } from 'lucide-react';

const CountUp = ({ value, suffix = "", duration = 2 }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
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
        if (value.includes('.')) return current.toFixed(1) + suffix;
        return Math.floor(current).toLocaleString() + suffix;
    });

    React.useEffect(() => {
        if (isInView) {
            spring.set(numberValue);
        }
    }, [isInView, numberValue, spring]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const PhaseCard = ({ phase, year, title, description, targets, markets, index, gradient, phaseIcon: PhaseIcon }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex flex-col lg:flex-row gap-8 py-16 border-b border-white/5 last:border-0 relative group"
        >
            {/* Enhanced Timeline Connector */}
            <motion.div
                className="hidden lg:block absolute left-[-49px] top-30 w-10 h-10 bg-brand-navy border-2 border-brand-cyan rounded-full z-10 shadow-lg"
                whileHover={{ scale: 1.2 }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3 }}
            >
                <div className="absolute inset-2 bg-brand-cyan rounded-full animate-pulse flex items-center justify-center">
                    <PhaseIcon className="w-5 h-5 text-brand-navy" />
                </div>

                {/* Glow Effect */}
                <motion.div
                    className="absolute inset-0 bg-brand-cyan blur-xl rounded-full"
                    animate={{
                        scale: isHovered ? [1, 1.5, 1] : 1,
                        opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity
                    }}
                />
            </motion.div>

            {/* Connecting Line Animation */}
            {index < 4 && (
                <motion.div
                    className="hidden lg:block absolute left-[-30px] top-36 w-0.5 h-full bg-gradient-to-b from-brand-cyan/50 to-transparent"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
                    style={{ transformOrigin: 'top' }}
                />
            )}

            {/* Left Content */}
            <div className="flex-1 space-y-6 relative">
                {/* Phase Badge */}
                <motion.div
                    className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${gradient} text-white text-sm font-bold tracking-widest uppercase shadow-lg`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <Flag className="w-4 h-4 mr-2" />
                    {phase} • {year}
                </motion.div>

                {/* Title */}
                <motion.h3
                    className="text-3xl md:text-2xl font-bold text-white"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                >
                    {title}
                </motion.h3>

                {/* Description */}
                <motion.p
                    className="text-gray-400 text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.4 }}
                >
                    {description}
                </motion.p>

                {/* Targets */}
                <div className="space-y-3 pt-4">
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Key Milestones
                    </div>
                    {targets.map((target, idx) => (
                        <motion.div
                            key={idx}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all group/item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + 0.5 + idx * 0.1 }}
                            whileHover={{ x: 5 }}
                        >
                            <div className="flex-shrink-0 w-6 h-6 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center group-hover/item:bg-brand-cyan/20 group-hover/item:border-brand-cyan/40 transition-all mt-0.5">
                                <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                            </div>
                            <span className="text-gray-300 text-sm leading-relaxed group-hover/item:text-white transition-colors flex-1">
                                {target}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Right Card (Markets) */}
            <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.4 }}
            >
                <motion.div
                    className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden h-full"
                    whileHover={{
                        borderColor: 'rgba(6, 182, 212, 0.4)',
                        y: -5
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    {/* Background Gradient */}
                    <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                        animate={isHovered ? {
                            scale: [1, 1.2, 1],
                        } : {}}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                        }}
                    />

                    {/* World Map Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id={`map-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <circle cx="2" cy="2" r="1" fill="currentColor" className="text-brand-cyan" />
                                    <path d="M2 2 L20 2 L20 20 M25 5 L35 15" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-brand-cyan" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill={`url(#map-${index})`} />
                        </svg>
                    </div>

                    {/* Header */}
                    <div className="flex items-center space-x-3 mb-6 relative z-10">
                        <motion.div
                            className={`p-3 bg-gradient-to-br ${gradient} rounded-xl shadow-lg`}
                            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Globe className="w-6 h-6 text-white" />
                        </motion.div>
                        <h4 className="text-xl font-bold text-white">Target Regions</h4>
                        <motion.div
                            className="ml-auto text-brand-cyan text-sm font-semibold"
                            animate={{
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity
                            }}
                        >
                            {markets.length} Markets
                        </motion.div>
                    </div>

                    {/* Markets Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                        {markets.map((market, idx) => (
                            <motion.div
                                key={idx}
                                className="relative flex flex-col p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-cyan/30 transition-all cursor-pointer group/market overflow-hidden"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 + 0.6 + idx * 0.1 }}
                                whileHover={{ scale: 1.02, y: -2 }}
                            >
                                {/* Hover Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover/market:opacity-10 transition-opacity`} />

                                {/* Pin Icon */}
                                <div className="flex items-start justify-between mb-2 relative z-10">
                                    <span className="font-bold text-white group-hover/market:text-brand-cyan transition-colors">
                                        {market.country}
                                    </span>
                                    <MapPin className="w-4 h-4 text-brand-cyan/50 group-hover/market:text-brand-cyan group-hover/market:scale-110 transition-all" />
                                </div>

                                <span className="text-xs text-gray-400 uppercase tracking-wide relative z-10 group-hover/market:text-gray-300 transition-colors">
                                    {market.focus}
                                </span>

                                {/* Animated Dot */}
                                <motion.div
                                    className="absolute top-2 right-2 w-2 h-2 bg-brand-cyan rounded-full opacity-0 group-hover/market:opacity-100"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Explore Button */}
                    <motion.button
                        className="mt-6 w-full py-3 bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-gray-300 hover:bg-brand-cyan/10 hover:border-brand-cyan/30 hover:text-brand-cyan transition-all flex items-center justify-center group/btn relative z-10"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View Regional Strategy
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const GlobalExpansion = () => {
    const phases = [
        {
            phase: "PHASE 1",
            year: "YEAR 1-2",
            title: "Southeast Asia 🇻🇳 🇹🇭 🇮🇩",
            description: "The heartland of global aquaculture. This region produces over 40% of the world's farmed seafood. Our focus is on digitizing high-density shrimp and pangasius farms.",
            targets: [
                "Deploy Precision Vision in Mekong Delta",
                "Establish core datasets for tropical species",
                "Partner with feed mills for distribution"
            ],
            markets: [
                { country: "Vietnam", focus: "Shrimp & Pangasius" },
                { country: "Thailand", focus: "Marine Shrimp" },
                { country: "Indonesia", focus: "Tilapia & Shrimp" },
                { country: "Philippines", focus: "Coastal Species" }
            ],
            gradient: "from-cyan-500 to-blue-600",
            phaseIcon: Zap
        },
        {
            phase: "PHASE 2",
            year: "YEAR 2-3",
            title: "South Asia 🇮🇳 🇧🇩 🇱🇰",
            description: "Focusing on massive scale. India is the world's 2nd largest producer. We are deploying 'Lite' mobile-first tools to modernize millions of smallholder carp and shrimp farmers.",
            targets: [
                "Launch AquaCORTEX Lite App",
                "Vernacular language support (Hindi, Bengali)",
                "SMS-based advisory services"
            ],
            markets: [
                { country: "India", focus: "Carp & Shrimp" },
                { country: "Bangladesh", focus: "Rapid Growth" },
                { country: "Sri Lanka", focus: "Export Focus" }
            ],
            gradient: "from-emerald-500 to-teal-600",
            phaseIcon: Users
        },
        {
            phase: "PHASE 3",
            year: "YEAR 3-4",
            title: "Middle East & North Africa 🇸🇦 🇦🇪 🇪🇬",
            description: "High-value markets with strong food security mandates. Governments are investing heavily in desert aquaculture and RAS technologies to secure protein independence.",
            targets: [
                "Integrate with RAS facility SCADA systems",
                "Desert aquaculture optimization",
                "Government food security partnerships"
            ],
            markets: [
                { country: "Saudi Arabia", focus: "Vision 2030" },
                { country: "UAE", focus: "Tech Innovation" },
                { country: "Egypt", focus: "Africa's #1 Producer" },
                { country: "Morocco", focus: "Premium Markets" }
            ],
            gradient: "from-orange-500 to-red-600",
            phaseIcon: Target
        },
        {
            phase: "PHASE 4",
            year: "YEAR 4-5",
            title: "Latin America 🇪🇨 🇨🇱 🇧🇷",
            description: "Sophisticated, export-oriented operations. Farms here require enterprise-grade compliance, traceability, and environmental monitoring features.",
            targets: [
                "Sustainability certification automation",
                "Supply chain traceability integration",
                "Large-scale disease monitoring networks"
            ],
            markets: [
                { country: "Ecuador", focus: "#1 Shrimp Exporter" },
                { country: "Chile", focus: "Salmon Leader" },
                { country: "Brazil", focus: "Inland Tilapia" },
                { country: "Mexico", focus: "Growth Market" }
            ],
            gradient: "from-violet-500 to-purple-600",
            phaseIcon: ShieldCheck
        },
        {
            phase: "PHASE 5",
            year: "YEAR 5+",
            title: "Global Scale 🌍",
            description: "Establishing AquaCORTEX as the universal operating system for the blue economy. Expanding into cold-water marine species and offshore systems.",
            targets: [
                "Salmonid algorithmic models",
                "Offshore rig remote monitoring",
                "Global carbon credit marketplace"
            ],
            markets: [
                { country: "Sub-Saharan Africa", focus: "Food Security" },
                { country: "Oceania", focus: "Premium Seafood" },
                { country: "Europe", focus: "High-Tech Standards" },
                { country: "North America", focus: "Sustainable Systems" }
            ],
            gradient: "from-pink-500 to-rose-600",
            phaseIcon: Globe
        }
    ];

    const impacts = [
        { label: "Farms Connected", value: "11400", suffix: "+", icon: BarChart3, color: "from-cyan-500 to-blue-500" },
        { label: "Metric Tons Produced", value: "1.5", suffix: "M+", icon: TrendingUp, color: "from-emerald-500 to-teal-500" },
        { label: "Farmers Empowered", value: "45600", suffix: "", icon: Users, color: "from-violet-500 to-purple-500" },
        { label: "Countries Deployed", value: "22", suffix: "", icon: Globe, color: "from-orange-500 to-pink-500" }
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
            <section className="relative py-20 px-6 max-w-7xl mx-auto overflow-hidden">
                {/* Background Orbs */}
                <motion.div
                    className="absolute top-0 left-1/3 w-[700px] h-[700px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none"
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

                <div className="text-center mb-20 relative z-10">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center px-4 py-2 mb-8 border border-brand-cyan/30 rounded-full bg-brand-cyan/5 backdrop-blur-sm"
                    >
                        <Globe className="w-4 h-4 mr-2 text-brand-cyan animate-pulse" />
                        <span className="text-brand-cyan text-sm font-semibold tracking-wider uppercase">
                            Global Expansion Strategy
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-blue-400 to-violet-400">Roadmap</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        From the Mekong Delta to the Fjords of Norway, we are executing a phased strategy to digitize the world's most vital protein source.
                    </motion.p>

                    {/* Timeline Overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-4 mt-12"
                    >
                        {phases.map((phase, i) => (
                            <motion.div
                                key={i}
                                className={`px-4 py-2 bg-gradient-to-r ${phase.gradient} bg-opacity-10 border border-white/20 rounded-full text-sm font-semibold text-white hover:scale-105 transition-transform cursor-pointer`}
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                            >
                                {phase.phase}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Timeline */}
                <div className="relative pl-0 lg:pl-12 border-l-0 border-brand-cyan/20 space-y-8">
                    {phases.map((phase, idx) => (
                        <PhaseCard key={idx} index={idx} {...phase} />
                    ))}
                </div>
            </section>

            {/* Impact Projections */}
            <section className="relative py-24 bg-brand-navy/50 border-t border-white/5 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="impact-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-brand-cyan" />
                                <path d="M2 2 L30 2 L30 30 M35 5 L50 20" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-brand-cyan" opacity="0.3" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#impact-pattern)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            {/* Badge */}
                            <motion.div
                                className="inline-flex items-center px-4 py-2 mb-6 border border-brand-cyan/30 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-semibold tracking-wider uppercase"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Award className="w-4 h-4 mr-2 animate-pulse" />
                                5-Year Vision
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Projected Global Impact
                            </h2>

                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                By scaling our technology across these key regions, we aim to generate over <span className="text-white font-bold">$1.5 Billion</span> in additional income for farmers and prevent <span className="text-white font-bold">500,000</span> metric tons of feed waste.
                            </p>

                            {/* Highlight Cards */}
                            <div className="space-y-4">
                                {[
                                    { icon: TrendingUp, color: "green", label: "$1.5B+", desc: "Additional Farmer Income" },
                                    { icon: Users, color: "blue", label: "50,000+", desc: "Jobs Created" },
                                    { icon: Sprout, color: "emerald", label: "500k MT", desc: "Feed Waste Prevented" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className={`flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-${item.color}-500/30 hover:bg-white/10 transition-all group`}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className={`bg-${item.color}-500/20 p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                                            <item.icon className={`text-${item.color}-400 w-6 h-6`} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-white text-xl">{item.label}</div>
                                            <div className="text-sm text-gray-400">{item.desc}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Impact Metrics Grid */}
                        <motion.div
                            className="grid grid-cols-2 gap-6"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            {impacts.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        className="relative bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/10 text-center overflow-hidden group cursor-pointer"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + idx * 0.1 }}
                                        whileHover={{ y: -8, borderColor: 'rgba(6, 182, 212, 0.4)' }}
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

                                        {/* Icon */}
                                        <motion.div
                                            className="mb-4"
                                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Icon className="w-10 h-10 text-brand-cyan mx-auto" />
                                        </motion.div>

                                        {/* Value */}
                                        <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-blue-400 to-cyan-300 mb-2 relative z-10">
                                            <CountUp value={item.value} suffix={item.suffix} />
                                        </div>

                                        {/* Label */}
                                        <div className="text-gray-400 font-medium text-sm relative z-10 group-hover:text-gray-300 transition-colors">
                                            {item.label}
                                        </div>

                                        {/* Glow Effect */}
                                        <motion.div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                            style={{
                                                boxShadow: '0 0 40px rgba(6, 182, 212, 0.3)',
                                            }}
                                        />

                                        {/* Sparkle */}
                                        <motion.div
                                            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                                            animate={{
                                                rotate: [0, 180, 360],
                                                scale: [0, 1, 0]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity
                                            }}
                                        >
                                            <Sparkles className="w-4 h-4 text-brand-cyan" />
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 relative">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Ready to Scale Globally?
                    </motion.h2>

                    <motion.p
                        className="text-gray-400 text-lg mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Partner with us to bring intelligent aquaculture to your region.
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
                        <span className="relative z-10 flex items-center">
                            Become a Partner
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </span>
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default GlobalExpansion;