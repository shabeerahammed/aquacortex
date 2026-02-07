import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Target,
    Eye,
    Award,
    Users,
    Lightbulb,
    Sprout,
    BarChart3,
    Shield,
    Globe,
    FlaskConical,
    TrendingUp,
    Heart,
    Sparkles,
    CheckCircle2,
    Calendar,
    MapPin,
    Mail,
    Linkedin,
    Twitter,
    Github,
    ArrowRight,
    Zap,
    BookOpen
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

const About = () => {
    const [activeTimeline, setActiveTimeline] = useState(null);

    const stats = [
        { value: 2020, label: 'Founded', icon: Calendar },
        { value: 12, label: 'Countries', icon: Globe },
        { value: 2500, label: 'Farmers Served', icon: Users }
    ];

    const values = [
        {
            emoji: '💡',
            icon: Lightbulb,
            title: 'Innovation Excellence',
            description: 'We pioneer biological AI solutions that didn\'t exist before. Our technology must be genuinely transformative, not incrementally better. We pursue breakthroughs, not buzzwords.',
            gradient: 'from-yellow-500 to-orange-500'
        },
        {
            emoji: '🌱',
            icon: Sprout,
            title: 'Sustainability First',
            description: 'Environmental stewardship drives every design decision. We measure success not just in productivity gains but in feed waste reduced, chemicals avoided, and ecosystems protected.',
            gradient: 'from-green-500 to-emerald-500'
        },
        {
            emoji: '👨‍🌾',
            icon: Users,
            title: 'Farmer Empowerment',
            description: 'Technology must serve producers, not replace them. We build tools that amplify farmer intelligence, preserve traditional knowledge, and create dignified livelihoods at every scale.',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            emoji: '📊',
            icon: BarChart3,
            title: 'Data Integrity',
            description: 'Farmers trust us with their most valuable asset — their data. We honor that trust through transparency, accuracy, security, and giving farmers full ownership and control.',
            gradient: 'from-violet-500 to-purple-500'
        },
        {
            emoji: '🤝',
            icon: Heart,
            title: 'Collaborative Growth',
            description: 'We build ecosystems, not empires. Success means strengthening local partners, supporting cooperatives, and ensuring that value is shared equitably across stakeholders.',
            gradient: 'from-pink-500 to-rose-500'
        },
        {
            emoji: '🔬',
            icon: FlaskConical,
            title: 'Scientific Rigor',
            description: 'Every recommendation, every prediction, and every automation must be grounded in evidence. We partner with research institutions and validate performance through controlled studies.',
            gradient: 'from-cyan-500 to-blue-500'
        },
        {
            emoji: '🌍',
            icon: Globe,
            title: 'Global Impact',
            description: 'We develop local solutions that scale worldwide. Technology adapts to regional contexts, languages, and species while maintaining world-class intelligence standards everywhere.',
            gradient: 'from-indigo-500 to-violet-500'
        }
    ];

    const timeline = [
        {
            year: '2020',
            title: 'Company Founded',
            description: 'AquaCORTEX established with vision to create the world\'s first Biological AI OS for aquaculture',
            icon: Zap,
            gradient: 'from-cyan-500 to-blue-500'
        },
        {
            year: '2021',
            title: 'First Commercial Deployments',
            description: 'Pilot programs launched in Vietnam, Thailand, and UAE with 50+ farms',
            icon: MapPin,
            gradient: 'from-emerald-500 to-teal-500'
        },
        {
            year: '2022',
            title: 'Platform Expansion & Validation',
            description: '500+ farms onboarded, achieving 40% feed cost reduction and 25% growth rate improvement',
            icon: TrendingUp,
            gradient: 'from-violet-500 to-purple-500'
        },
        {
            year: '2023',
            title: 'Regional Scale Achieved',
            description: 'Expanded to 12 countries, partnered with national governments and major feed mills',
            icon: Globe,
            gradient: 'from-orange-500 to-red-500'
        },
        {
            year: '2024',
            title: 'Global Growth Phase',
            description: '2,500+ farmers using platform, preparing South Asia and MENA expansion',
            icon: Award,
            gradient: 'from-pink-500 to-rose-500'
        }
    ];

    const team = [
        {
            name: 'Dr. Sarah Chen',
            role: 'CEO & Co-Founder',
            bio: 'Former AI researcher at MIT. Ph.D. in Machine Learning. 15+ years building intelligent systems for complex biological environments.',
            gradient: 'from-cyan-500 to-blue-500'
        },
        {
            name: 'Dr. Rajesh Kumar',
            role: 'CTO & Chief Scientist',
            bio: 'Marine biologist and aquaculture expert. Ph.D. in Aquatic Ecosystems. Published 40+ papers on sustainable aquaculture systems.',
            gradient: 'from-emerald-500 to-teal-500'
        },
        {
            name: 'Maria Gonzales',
            role: 'Chief Operating Officer',
            bio: '20+ years in aquaculture operations management. Former COO at major shrimp producer. Deep expertise in farm optimization.',
            gradient: 'from-violet-500 to-purple-500'
        },
        {
            name: 'James Thompson',
            role: 'Chief Commercial Officer',
            bio: 'Global AgTech sales leader. Built and scaled distribution networks across 25+ countries. Expert in emerging market entry.',
            gradient: 'from-orange-500 to-pink-500'
        },
        {
            name: 'Dr. Nguyen Thi Mai',
            role: 'Head of Research & Development',
            bio: 'AI/ML specialist focused on aquaculture applications. Ph.D. in Computer Vision. Led development of AquaSense module.',
            gradient: 'from-blue-500 to-indigo-500'
        },
        {
            name: 'Ahmed Al-Rashid',
            role: 'VP of Strategic Partnerships',
            bio: 'Former government advisor on food security. Extensive network across MENA and South Asian aquaculture sectors.',
            gradient: 'from-rose-500 to-pink-500'
        }
    ];

    const achievements = [
        { icon: '🏆', title: 'AgTech Innovation Award', year: '2023' },
        { icon: '🌟', title: 'Best AI Application', year: 'Aquaculture Asia 2023' },
        { icon: '🌱', title: 'Sustainability Leader', year: 'Blue Economy Forum 2022' },
        { icon: '💼', title: 'Impact Investor Award', year: 'ESG Asia Summit 2024' }
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
                        <Users className="w-4 h-4 mr-2 text-brand-cyan animate-pulse" />
                        <span className="text-brand-cyan text-sm font-semibold tracking-wider uppercase">
                            About AquaCORTEX
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-blue-400 to-violet-400">Future of Aquaculture</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12"
                    >
                        Founded in 2020, AquaCORTEX is a pioneering AgTech company on a mission to transform aquaculture through biological AI intelligence. We're building the world's first operating system for the blue economy.
                    </motion.p>

                    {/* Stats */}
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 rounded-2xl overflow-hidden group hover:border-brand-cyan/30 transition-all"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                                    />
                                    <Icon className="w-8 h-8 text-brand-cyan mx-auto mb-3" />
                                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400 mb-2 relative z-10">
                                        {stat.value}
                                    </div>
                                    <p className="text-gray-400 font-medium relative z-10">{stat.label}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="relative py-20 px-6 bg-brand-navy/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {[
                            {
                                emoji: '🎯',
                                icon: Target,
                                title: 'Our Mission',
                                text: 'To make intelligent aquaculture accessible to everyone — scaling farmers sustainably, rewarding purpose-driven investors, and connecting the world\'s blue economy through AquaCORTEX intelligence.',
                                gradient: 'from-cyan-500 to-blue-600'
                            },
                            {
                                emoji: '🔮',
                                icon: Eye,
                                title: 'Our Vision',
                                text: 'To become the global standard operating system for intelligent aquaculture — where every farm operation, regardless of size or location, benefits from world-class AI intelligence and data-driven optimization.',
                                gradient: 'from-violet-500 to-purple-600'
                            }
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-10 rounded-3xl overflow-hidden group"
                                    initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                                    />
                                    <div className="flex items-center mb-6 relative z-10">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5 mr-4`}>
                                            <div className="w-full h-full bg-brand-navy rounded-2xl flex items-center justify-center">
                                                <div className="text-3xl">{item.emoji}</div>
                                            </div>
                                        </div>
                                        <h2 className="text-3xl font-bold">{item.title}</h2>
                                    </div>
                                    <p className="text-lg text-gray-300 leading-relaxed relative z-10">
                                        {item.text}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Journey
                    </motion.h2>

                    {/* Story Paragraph */}
                    <motion.div
                        className="max-w-4xl mx-auto mb-16 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 rounded-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            AquaCORTEX was born from a simple observation: while agriculture was experiencing a digital revolution, aquaculture — the world's fastest-growing food production sector — remained largely trapped in analog management practices.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Our founders, with backgrounds spanning AI research, marine biology, and aquaculture operations, recognized that the industry didn't need another point solution or standalone sensor. What was missing was a <span className="text-brand-cyan font-semibold">unified operating system</span> — a biological AI brain that could orchestrate every aspect of farm operations while remaining accessible to farmers of all scales.
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative max-w-4xl mx-auto">
                        {/* Connecting Line */}
                        <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-cyan via-violet-500 to-transparent hidden md:block" />

                        <div className="space-y-8">
                            {timeline.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="relative pl-0 md:pl-20"
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        onMouseEnter={() => setActiveTimeline(index)}
                                        onMouseLeave={() => setActiveTimeline(null)}
                                    >
                                        {/* Timeline Dot */}
                                        <motion.div
                                            className="absolute left-[26px] top-6 w-8 h-8 rounded-full border-2 border-brand-cyan bg-brand-navy hidden md:flex items-center justify-center"
                                            whileHover={{ scale: 1.2 }}
                                        >
                                            <Icon className="w-4 h-4 text-brand-cyan" />
                                            <motion.div
                                                className="absolute inset-0 bg-brand-cyan rounded-full blur-lg"
                                                animate={{
                                                    opacity: activeTimeline === index ? [0.3, 0.6, 0.3] : 0.3,
                                                    scale: activeTimeline === index ? [1, 1.5, 1] : 1
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity
                                                }}
                                            />
                                        </motion.div>

                                        {/* Content */}
                                        <motion.div
                                            className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-6 rounded-xl hover:border-brand-cyan/30 transition-all"
                                            whileHover={{ scale: 1.02, x: 5 }}
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className={`px-3 py-1 bg-gradient-to-r ${item.gradient} rounded-full text-white text-sm font-bold`}>
                                                    {item.year}
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                                    <p className="text-gray-400">{item.description}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 px-6 bg-brand-navy/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-center mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Core Values
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        These principles guide every decision we make, every partnership we form, and every line of code we write.
                    </motion.p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((value, index) => {
                            const Icon = value.icon;
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
                                        className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                                    />

                                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} p-0.5 mb-6`}>
                                        <div className="w-full h-full bg-brand-navy rounded-xl flex items-center justify-center">
                                            <div className="text-3xl">{value.emoji}</div>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 relative z-10">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed relative z-10">
                                        {value.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-center mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Leadership Team
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Our team combines deep expertise in artificial intelligence, marine biology, aquaculture operations, and sustainable development.
                    </motion.p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 rounded-2xl text-center overflow-hidden group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                            >
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                                />

                                {/* Avatar */}
                                <motion.div
                                    className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br ${member.gradient} p-1 relative z-10`}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <div className="w-full h-full bg-brand-navy rounded-full flex items-center justify-center">
                                        <Users className="w-12 h-12 text-white" />
                                    </div>
                                </motion.div>

                                <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                                    {member.name}
                                </h3>
                                <p className="text-brand-cyan mb-4 font-semibold relative z-10">
                                    {member.role}
                                </p>
                                <p className="text-sm text-gray-400 leading-relaxed relative z-10">
                                    {member.bio}
                                </p>

                                {/* Social Links */}
                                <div className="flex justify-center gap-3 mt-6 relative z-10">
                                    {[Linkedin, Twitter, Mail].map((Icon, i) => (
                                        <motion.a
                                            key={i}
                                            href="#"
                                            className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/30 transition-all"
                                            whileHover={{ scale: 1.2, y: -2 }}
                                        >
                                            <Icon className="w-4 h-4" />
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="py-20 px-6 bg-brand-navy/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Achievements & Recognition
                    </motion.h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 rounded-2xl text-center hover:border-brand-cyan/30 transition-all"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                            >
                                <div className="text-5xl mb-4">{achievement.icon}</div>
                                <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                                <p className="text-sm text-gray-400">{achievement.year}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Research & Certifications */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: BookOpen, title: 'Published Research', desc: '15+ peer-reviewed papers on AI applications in aquaculture' },
                            { icon: Shield, title: 'Technology Certifications', desc: 'ISO 27001, SOC 2 Type II compliance' },
                            { icon: Globe, title: 'Strategic Partnerships', desc: 'Collaborating with FAO, WorldFish, and research institutes' }
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 rounded-2xl hover:border-brand-cyan/30 transition-all"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <Icon className="w-10 h-10 text-brand-cyan mb-4" />
                                    <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                                    <p className="text-gray-400">{item.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Join Us in Transforming Aquaculture
                        </h2>
                        <p className="text-xl text-gray-400 mb-8">
                            Whether you're interested in career opportunities, partnerships, or learning more about our technology, we'd love to connect.
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
                                    Explore Careers
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </span>
                            </motion.button>

                            <motion.button
                                className="px-8 py-4 border border-white/20 text-white rounded-full hover:border-brand-cyan/50 hover:bg-brand-cyan/5 transition-all backdrop-blur-sm"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get in Touch
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;