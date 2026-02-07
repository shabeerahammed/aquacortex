import React, { useState } from 'react';
import { Eye, Droplets, Server, WifiOff, Cpu, Activity, Zap, Brain, Database, Shield, LineChart, Wifi } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Technology = () => {
    const [hoveredModule, setHoveredModule] = useState(null);

    const modules = [
        {
            id: "01",
            name: "Precision Vision",
            icon: Eye,
            color: "cyan",
            description: "Advanced computer vision algorithms that track biomass, detect disease symptoms, and monitor feeding behavior in real-time.",
            details: [
                { label: "98% Accuracy in Biomass Estimation", icon: LineChart },
                { label: "Early Disease Detection", icon: Activity },
                { label: "Behavioral Analysis", icon: Brain }
            ],
            techStack: ["TensorFlow", "OpenCV", "PyTorch"],
            stats: { accuracy: "98%", latency: "<50ms", coverage: "24/7" }
        },
        {
            id: "02",
            name: "Water Intelligence",
            icon: Droplets,
            color: "blue",
            description: "Predictive analytics for water chemistry. Our system forecasts drops in dissolved oxygen or pH swings before they become lethal.",
            details: [
                { label: "24/7 Water Quality Monitoring", icon: Activity },
                { label: "Algal Bloom Prediction", icon: Zap },
                { label: "Automated Aeration Control", icon: Cpu }
            ],
            techStack: ["Machine Learning", "IoT Sensors", "Cloud Analytics"],
            stats: { sensors: "50+", prediction: "6hrs", uptime: "99.9%" }
        },
        {
            id: "03",
            name: "EdgeAI Nodes",
            icon: Server,
            color: "violet",
            description: "Localized intelligence for remote farms. Our Edge nodes process data on-site, ensuring functionality even without internet connectivity.",
            details: [
                { label: "Low-Latency Processing", icon: Zap },
                { label: "Works Offline", icon: WifiOff },
                { label: "Solar Powered Options", icon: Activity }
            ],
            techStack: ["Edge Computing", "ARM Architecture", "Kubernetes"],
            stats: { power: "12W", storage: "256GB", nodes: "Unlimited" }
        }
    ];

    const features = [
        { icon: Brain, label: "AI-Powered", desc: "Deep Learning Models" },
        { icon: Shield, label: "Secure", desc: "End-to-End Encryption" },
        { icon: Database, label: "Scalable", desc: "Cloud Infrastructure" },
        { icon: Wifi, label: "Real-Time", desc: "Live Data Streaming" }
    ];

    return (
        <div className="pt-24 min-h-screen bg-gradient-to-b from-brand-navy via-slate-900 to-brand-navy">
            {/* Animated Background Grid */}
            <div className="fixed inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                    maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
                }} />
            </div>

            {/* Header Section */}
            <section className="relative py-20 px-6 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />
                <motion.div
                    className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none"
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
                        <Cpu className="w-4 h-4 mr-2 text-brand-cyan" />
                        <span className="text-brand-cyan text-sm font-semibold tracking-wider uppercase">
                            Technology Overview
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-blue-400 to-violet-400">Biological AI</span> Stack
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        A modular operating system designed to digitize biology and automate certainty in aquaculture.
                    </motion.p>

                    {/* Feature Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-4 mt-12"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:border-brand-cyan/30 hover:bg-white/10 transition-all cursor-pointer group"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <feature.icon className="w-5 h-5 mr-2 text-brand-cyan group-hover:scale-110 transition-transform" />
                                <div className="text-left">
                                    <div className="text-sm font-semibold text-white">{feature.label}</div>
                                    <div className="text-xs text-gray-400">{feature.desc}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Modules Section */}
            <section className="py-20 px-6 relative">
                <div className="max-w-7xl mx-auto space-y-32">
                    {modules.map((module, index) => {
                        const Icon = module.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={module.id}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                onMouseEnter={() => setHoveredModule(module.id)}
                                onMouseLeave={() => setHoveredModule(null)}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}
                            >
                                {/* Visual Card */}
                                <motion.div
                                    className="flex-1 w-full"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <div className="relative aspect-video bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-white/10 overflow-hidden group">
                                        {/* Animated Background */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 via-transparent to-violet-500/10"
                                            animate={{
                                                opacity: hoveredModule === module.id ? [0.1, 0.3, 0.1] : 0.1
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />

                                        {/* Circuit Pattern */}
                                        <div className="absolute inset-0 opacity-10">
                                            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                                <defs>
                                                    <pattern id={`circuit-${module.id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                                        <circle cx="1" cy="1" r="1" fill="currentColor" className="text-brand-cyan" />
                                                        <path d="M1 1 L20 1 L20 20" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-brand-cyan" />
                                                    </pattern>
                                                </defs>
                                                <rect width="100%" height="100%" fill={`url(#circuit-${module.id})`} />
                                            </svg>
                                        </div>

                                        {/* Main Icon */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.div
                                                className="relative"
                                                animate={{
                                                    y: hoveredModule === module.id ? [-5, 5, -5] : 0,
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            >
                                                <Icon className="w-24 h-24 text-brand-cyan relative z-10" />

                                                {/* Icon Glow */}
                                                <motion.div
                                                    className="absolute inset-0 bg-brand-cyan/30 blur-2xl rounded-full"
                                                    animate={{
                                                        scale: hoveredModule === module.id ? [1, 1.5, 1] : 1,
                                                        opacity: hoveredModule === module.id ? [0.3, 0.6, 0.3] : 0.3
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity
                                                    }}
                                                />
                                            </motion.div>
                                        </div>

                                        {/* Orbiting Particles */}
                                        {hoveredModule === module.id && (
                                            <>
                                                {[...Array(6)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="absolute w-2 h-2 bg-brand-cyan rounded-full"
                                                        style={{
                                                            top: '50%',
                                                            left: '50%',
                                                        }}
                                                        animate={{
                                                            x: [0, Math.cos(i * 60 * Math.PI / 180) * 100],
                                                            y: [0, Math.sin(i * 60 * Math.PI / 180) * 100],
                                                            opacity: [0, 1, 0],
                                                            scale: [0, 1, 0]
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            delay: i * 0.2
                                                        }}
                                                    />
                                                ))}
                                            </>
                                        )}

                                        {/* Module Number */}
                                        <div className="absolute bottom-6 right-6 text-9xl font-bold text-white/5 select-none leading-none">
                                            {module.id}
                                        </div>

                                        {/* Stats Overlay */}
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brand-navy/90 to-transparent backdrop-blur-sm"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileHover={{ opacity: 1, y: 0 }}
                                        >
                                            <div className="grid grid-cols-3 gap-4">
                                                {Object.entries(module.stats).map(([key, value]) => (
                                                    <div key={key} className="text-center">
                                                        <div className="text-xl font-bold text-brand-cyan">{value}</div>
                                                        <div className="text-xs text-gray-400 uppercase tracking-wider">{key}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>

                                        {/* Hover Border Glow */}
                                        <motion.div
                                            className="absolute inset-0 rounded-2xl border-2 border-brand-cyan/0 group-hover:border-brand-cyan/30 transition-colors pointer-events-none"
                                            animate={{
                                                boxShadow: hoveredModule === module.id
                                                    ? '0 0 30px rgba(6, 182, 212, 0.3)'
                                                    : '0 0 0px rgba(6, 182, 212, 0)'
                                            }}
                                        />
                                    </div>
                                </motion.div>

                                {/* Content Side */}
                                <div className="flex-1 space-y-6">
                                    {/* Module Badge */}
                                    <motion.div
                                        className="inline-flex items-center px-4 py-2 bg-brand-cyan/10 text-brand-cyan rounded-full text-sm font-semibold border border-brand-cyan/20"
                                        whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.4)' }}
                                    >
                                        <div className="w-2 h-2 bg-brand-cyan rounded-full mr-2 animate-pulse" />
                                        Module {module.id}
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h2
                                        className="text-4xl lg:text-5xl font-bold"
                                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {module.name}
                                    </motion.h2>

                                    {/* Description */}
                                    <motion.p
                                        className="text-gray-400 text-lg leading-relaxed"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        {module.description}
                                    </motion.p>

                                    {/* Features List */}
                                    <ul className="space-y-4 pt-4">
                                        {module.details.map((item, i) => {
                                            const DetailIcon = item.icon;
                                            return (
                                                <motion.li
                                                    key={i}
                                                    className="flex items-start space-x-4 group"
                                                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.4 + i * 0.1 }}
                                                    whileHover={{ x: 5 }}
                                                >
                                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan/40 transition-all">
                                                        <DetailIcon className="w-5 h-5 text-brand-cyan" />
                                                    </div>
                                                    <span className="text-gray-300 text-base pt-2 group-hover:text-white transition-colors">
                                                        {item.label}
                                                    </span>
                                                </motion.li>
                                            );
                                        })}
                                    </ul>

                                    {/* Tech Stack */}
                                    <motion.div
                                        className="pt-6"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7 }}
                                    >
                                        <div className="text-sm text-gray-500 uppercase tracking-wider mb-3">Tech Stack</div>
                                        <div className="flex flex-wrap gap-2">
                                            {module.techStack.map((tech, i) => (
                                                <motion.span
                                                    key={i}
                                                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:border-brand-cyan/30 hover:bg-white/10 transition-all cursor-default"
                                                    whileHover={{ scale: 1.05, y: -2 }}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.8 + i * 0.1 }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Bottom CTA Section */}
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
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Ready to Transform Your Operations?
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 text-lg mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        See how our Biological AI stack can revolutionize your aquaculture farm.
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
                        <span className="relative z-10">Schedule a Demo</span>
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default Technology;