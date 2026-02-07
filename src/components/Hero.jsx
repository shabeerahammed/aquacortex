import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Database,
    Brain,
    Zap,
    Users,
    Building2,
    Briefcase,
    Fish,
    Factory,
    Sprout,
    Globe,
    TrendingUp,
    Target,
    Sparkles,
    Award,
    BarChart3,
    RefreshCw,
    Scale,
    Eye
} from 'lucide-react';

const CountUp = ({ value, suffix = "", duration = 2 }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    const spring = useSpring(0, {
        mass: 1,
        stiffness: 50,
        damping: 20,
        duration: duration * 1000
    });

    const displayValue = useTransform(spring, (current) => {
        return Math.floor(current).toLocaleString() + suffix;
    });

    React.useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = Array.from({ length: 50 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1
        }));

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'rgba(6, 182, 212, 0.6)';

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Draw connections
                particles.forEach(p2 => {
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.strokeStyle = `rgba(6, 182, 212, ${0.2 * (1 - distance / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

const Home = () => {
    const howItWorks = [
        {
            emoji: '📊',
            icon: Database,
            title: '1. Data Collection',
            description: 'IoT sensors, manual inputs, and environmental data continuously flow into the system, creating a comprehensive real-time picture of your aquaculture operation.',
            gradient: 'from-cyan-500 to-blue-600'
        },
        {
            emoji: '🧠',
            icon: Brain,
            title: '2. AI Intelligence Processing',
            description: 'Advanced pattern recognition, predictive modeling, and anomaly detection transform raw data into actionable insights and autonomous decisions.',
            gradient: 'from-violet-500 to-purple-600'
        },
        {
            emoji: '⚡',
            icon: Zap,
            title: '3. Autonomous Action',
            description: 'Automated feeding, intelligent alerts, and expert recommendations execute continuously, optimizing operations 24/7 without human intervention.',
            gradient: 'from-orange-500 to-pink-600'
        }
    ];

    const aiEngine = [
        { emoji: '📥', title: 'Data Ingestion', desc: 'Multi-source aggregation across farms, hatcheries, environmental sensors, and operational systems.' },
        { emoji: '💡', title: 'Insight Generation', desc: 'Real-time analysis, pattern learning, and predictive forecasting powered by advanced machine learning.' },
        { emoji: '🎯', title: 'Action Execution', desc: 'Automated responses, human-augmented decisions, and continuous optimization for maximum efficiency.' }
    ];

    const stakeholders = [
        {
            emoji: '👨‍🌾',
            icon: Users,
            title: 'Farmers',
            subtitle: 'Autonomous farm optimization',
            benefits: [
                'Reduced mortality through early intervention',
                'Optimized feed efficiency',
                'Labor automation for 24/7 monitoring'
            ],
            gradient: 'from-emerald-500 to-teal-600'
        },
        {
            emoji: '🏛️',
            icon: Building2,
            title: 'Governments',
            subtitle: 'Food security intelligence',
            benefits: [
                'Policy insights and data-driven decisions',
                'Sustainability tracking and reporting',
                'Economic development monitoring'
            ],
            gradient: 'from-blue-500 to-cyan-600'
        },
        {
            emoji: '💼',
            icon: Briefcase,
            title: 'Investors',
            subtitle: 'Transparent impact metrics',
            benefits: [
                'Real-time portfolio performance visibility',
                'ESG alignment and impact measurement',
                'Predictive ROI modeling'
            ],
            gradient: 'from-violet-500 to-purple-600'
        },
        {
            emoji: '🐟',
            icon: Fish,
            title: 'Hatcheries',
            subtitle: 'Growth prediction accuracy',
            benefits: [
                'Demand forecasting from connected farms',
                'Quality optimization and consistency',
                'Supply chain coordination'
            ],
            gradient: 'from-cyan-500 to-blue-600'
        },
        {
            emoji: '🏭',
            icon: Factory,
            title: 'Feed Mills',
            subtitle: 'Demand-driven production',
            benefits: [
                'Waste reduction through accurate forecasting',
                'Formulation optimization based on performance',
                'Distribution intelligence'
            ],
            gradient: 'from-orange-500 to-red-600'
        },
        {
            emoji: '🌾',
            icon: Sprout,
            title: 'Small-Scale Farmers',
            subtitle: 'Democratized access to AI',
            benefits: [
                'Expert-level recommendations for all',
                'Income stability and reduced risk',
                'Pathway to commercial viability'
            ],
            gradient: 'from-green-500 to-emerald-600'
        }
    ];

    const impacts = [
        { emoji: '🌍', icon: Globe, value: 50000, label: 'Metric Tons Protein Enhanced' },
        { emoji: '👥', icon: Users, value: 2500, label: 'Farmers Empowered' },
        { emoji: '🌱', icon: Sprout, value: 35, suffix: '%', label: 'Feed Waste Reduction' },
        { emoji: '🎯', icon: Target, value: 12, label: 'Countries Deployed' }
    ];

    const caseStudies = [
        {
            emoji: '🔄',
            icon: RefreshCw,
            title: 'Smart Operations',
            description: 'A modern digital platform designed to streamline workflows, enhance visibility, and support stronger operational control across day-to-day activities.',
            gradient: 'from-cyan-500 to-blue-600'
        },
        {
            emoji: '📈',
            icon: Scale,
            title: 'Built to Scale',
            description: 'A flexible and adaptable system designed to support both growing and large-scale deployments without compromising performance or usability.',
            gradient: 'from-violet-500 to-purple-600'
        },
        {
            emoji: '📊',
            icon: BarChart3,
            title: 'Data-Driven Insights',
            description: 'Transforms complex operational data into clear, actionable insights that support planning, decision-making, and long-term strategy.',
            gradient: 'from-emerald-500 to-teal-600'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-brand-navy via-slate-900 to-brand-navy">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
                {/* Particle Background */}
                <ParticleBackground />

                {/* Gradient Orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none"
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
                    className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none"
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

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
                    >
                        AquaCortex
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                        AI-Driven Aquaculture Intelligence
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link to="/contact">
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
                                <span className="relative z-10">Request Demo</span>
                            </motion.button>
                        </Link>

                        <Link to="/contact?type=investor">
                            <motion.button
                                className="px-8 py-4 border border-white/20 text-white rounded-full hover:border-brand-cyan/50 hover:bg-brand-cyan/5 transition-all backdrop-blur-sm"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                For Investors
                            </motion.button>
                        </Link>

                        <Link to="/technology">
                            <motion.button
                                className="px-8 py-4 border border-white/20 text-white rounded-full hover:border-brand-cyan/50 hover:bg-brand-cyan/5 transition-all backdrop-blur-sm flex items-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore Technology
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        How AquaCortex Works
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {howItWorks.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 rounded-2xl overflow-hidden group"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                >
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                                    />

                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5 mb-6`}>
                                        <div className="w-full h-full bg-brand-navy rounded-2xl flex items-center justify-center">
                                            <div className="text-4xl">{item.emoji}</div>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed relative z-10">
                                        {item.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* AI Engine */}
            <section className="py-20 px-6 bg-brand-navy/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Unified AI Engine
                    </motion.h2>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-bold mb-8">The Digital Brain Powering Your Operation</h3>

                            <div className="space-y-6">
                                {aiEngine.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <h4 className="text-brand-cyan font-bold mb-2 flex items-center">
                                            <span className="text-2xl mr-3">{item.emoji}</span>
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative w-80 h-80 mx-auto flex items-center justify-center">
                                {/* Soft Glow Behind Brain */}
                                <motion.div
                                    className="absolute w-64 h-64 rounded-full blur-3xl 
                                    bg-gradient-to-br from-brand-cyan/20 via-blue-500/10 to-violet-500/20"
                                    animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                />

                                {/* Optimized SVG Brain */}
                                <svg viewBox="0 0 200 200" className="relative z-10 w-full h-full">
                                    {/* Brain Outline */}
                                    <motion.path
                                        d="M100 30 C70 30 45 50 40 75 C35 75 30 80 30 90 
                                           C30 95 32 100 35 103 C30 110 28 118 30 125 
                                           C35 145 50 160 70 165 C75 175 85 180 95 180 
                                           C95 185 98 190 105 190 C112 190 115 185 115 180 
                                           C125 180 135 175 140 165 C160 160 175 145 180 125 
                                           C182 118 180 110 175 103 C178 100 180 95 180 90 
                                           C180 80 175 75 170 75 C165 50 140 30 100 30 Z"
                                        fill="none"
                                        stroke="url(#brainGradient)"
                                        strokeWidth="3"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2 }}
                                    />

                                    {/* Neural Lines (Reduced to 2 for performance) */}
                                    {[
                                        "M60 80 Q100 60 140 80",
                                        "M50 120 Q100 100 150 120"
                                    ].map((d, i) => (
                                        <motion.path
                                            key={i}
                                            d={d}
                                            fill="none"
                                            stroke="url(#brainGradient)"
                                            strokeWidth="2"
                                            opacity="0.6"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 1.5, delay: 0.4 + i * 0.3 }}
                                        />
                                    ))}

                                    {/* Pulsing Nodes (Reduced count) */}
                                    {[{ cx: 70, cy: 80 }, { cx: 100, cy: 100 }, { cx: 130, cy: 120 }].map(
                                        (node, i) => (
                                            <motion.circle
                                                key={i}
                                                cx={node.cx}
                                                cy={node.cy}
                                                r="4"
                                                fill="url(#brainGradient)"
                                                animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                                            />
                                        )
                                    )}

                                    {/* Core Pulse */}
                                    <motion.circle
                                        cx="100"
                                        cy="100"
                                        r="6"
                                        fill="url(#brainGradient)"
                                        animate={{ scale: [1, 1.6, 1], opacity: [0.7, 1, 0.7] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />

                                    {/* Gradient */}
                                    <defs>
                                        <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#06B6D4" />
                                            <stop offset="50%" stopColor="#3B82F6" />
                                            <stop offset="100%" stopColor="#8B5CF6" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <p className="text-sm text-gray-500 mt-6">
                                Central neural network with connecting pathways to all modules
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stakeholder Benefits */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Built for Everyone in Aquaculture
                    </motion.h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {stakeholders.map((stakeholder, index) => {
                            const Icon = stakeholder.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 rounded-2xl overflow-hidden group"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                >
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${stakeholder.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                                    />

                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="text-3xl">{stakeholder.emoji}</div>
                                        <h3 className="text-xl font-bold text-white relative z-10">
                                            {stakeholder.title}
                                        </h3>
                                    </div>

                                    <p className="font-semibold text-brand-cyan mb-4 relative z-10">
                                        {stakeholder.subtitle}
                                    </p>

                                    <ul className="space-y-2 relative z-10">
                                        {stakeholder.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start text-sm text-gray-400">
                                                <span className="text-brand-cyan mr-2 flex-shrink-0">✓</span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Global Impact */}
            <section className="py-20 px-6 bg-brand-navy/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-center mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Global Impact
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Transforming aquaculture worldwide through intelligence, sustainability, and equitable access to technology.
                    </motion.p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {impacts.map((impact, index) => {
                            const Icon = impact.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="text-center bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 rounded-2xl hover:border-brand-cyan/30 transition-all"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                >
                                    <div className="text-5xl mb-4">{impact.emoji}</div>
                                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400 mb-2">
                                        <CountUp value={impact.value} suffix={impact.suffix || ''} />
                                    </div>
                                    <p className="text-gray-400">{impact.label}</p>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link to="/impact">
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
                                <span className="relative z-10">Explore Our Impact</span>
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Where Strategy Meets Execution
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => {
                            const Icon = study.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 rounded-2xl overflow-hidden group"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                >
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                                    />

                                    <div className="flex items-center gap-3 mb-6">
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${study.gradient} p-0.5`}>
                                            <div className="w-full h-full bg-brand-navy rounded-xl flex items-center justify-center">
                                                <div className="text-2xl">{study.emoji}</div>
                                            </div>
                                        </div>
                                        <h4 className="text-xl font-bold text-white">{study.title}</h4>
                                    </div>

                                    <p className="text-gray-400 leading-relaxed relative z-10">
                                        {study.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-gradient-to-br from-brand-cyan/10 via-transparent to-violet-500/10 border-y border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Ready to Transform Your Aquaculture Operation?
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-400 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Join the world's leading aquaculture operations using AquaCORTEX to optimize performance, reduce waste, and build sustainable futures.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link to="/contact">
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
                                <span className="relative z-10">Request a Demo</span>
                            </motion.button>
                        </Link>

                        <Link to="/technology">
                            <motion.button
                                className="px-8 py-4 border border-white/20 text-white rounded-full hover:border-brand-cyan/50 hover:bg-brand-cyan/5 transition-all backdrop-blur-sm"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore Technology
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;