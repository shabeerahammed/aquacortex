import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/aquacortex-logo.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Technology', path: '/technology' },
        { name: 'Solutions', path: '/solutions' },
        { name: 'Impact', path: '/impact' },
        { name: 'Global Expansion', path: '/expansion' },
        { name: 'About', path: '/about' },
    ];

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-brand-navy/95 backdrop-blur-xl border-b border-brand-cyan/20 shadow-lg shadow-brand-cyan/5'
                    : 'bg-brand-navy/80 backdrop-blur-md border-b border-white/10'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Logo with Animation */}
                    <Link to="/" className="flex items-center group relative">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative"
                        >
                            <img
                                src={logo}
                                alt="AquaCORTEX"
                                className={`h-14 relative z-10 transition-all duration-300 ${theme === 'light' ? 'invert hue-rotate-180' : ''
                                    }`}
                            />

                            {/* Glow effect on hover */}
                            <motion.div
                                className="absolute inset-0 bg-brand-cyan/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                animate={{
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link, index) => {
                            const isActive = location.pathname === link.path;

                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="relative px-4 py-2 group"
                                >
                                    <motion.span
                                        className={`text-sm uppercase tracking-wide font-medium transition-colors relative z-10 ${isActive
                                            ? 'text-brand-cyan'
                                            : 'text-gray-300 group-hover:text-white'
                                            }`}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {link.name}
                                    </motion.span>

                                    {/* Active Indicator */}
                                    {isActive && (
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-cyan to-transparent"
                                            layoutId="activeTab"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}

                                    {/* Hover Background */}
                                    <motion.div
                                        className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        whileHover={{ scale: 1.05 }}
                                    />

                                    {/* Hover Underline */}
                                    {!isActive && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-cyan/50 group-hover:w-3/4 transition-all duration-300" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Theme Toggle & CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Theme Toggle */}
                        <motion.button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-cyan/30 text-gray-300 hover:text-brand-cyan transition-all"
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </motion.button>

                        <Link to="/contact">
                            <motion.button
                                className="relative px-6 py-2.5 rounded-full 
                                bg-white/5 backdrop-blur-lg 
                                border border-brand-cyan/30 
                                text-brand-cyan font-semibold 
                                overflow-hidden group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10">Contact Us</span>

                                <motion.div
                                    className="absolute inset-0 bg-brand-cyan/10 opacity-0 group-hover:opacity-100"
                                    transition={{ duration: 0.3 }}
                                />

                                <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.2)] group-hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-300" />
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-brand-cyan p-2 relative"
                            whileTap={{ scale: 0.9 }}
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={28} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={28} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Enhanced Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Mobile Menu Panel */}
                        <motion.div
                            className="fixed top-20 left-0 right-0 z-40 md:hidden bg-brand-navy/98 backdrop-blur-xl border-b border-brand-cyan/20 shadow-2xl shadow-brand-cyan/10"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="max-h-[calc(100vh-5rem)] overflow-y-auto">
                                <div className="px-6 py-6 flex flex-col space-y-2">
                                    {/* Mobile Theme Toggle */}
                                    <div className="flex justify-between items-center mb-4 px-4">
                                        <span className="text-gray-300 font-medium">Appearance</span>
                                        <motion.button
                                            onClick={toggleTheme}
                                            className="p-2 rounded-full bg-white/5 border border-white/10 text-brand-cyan"
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            {theme === 'dark' ? (
                                                <Sun className="w-5 h-5" />
                                            ) : (
                                                <Moon className="w-5 h-5" />
                                            )}
                                        </motion.button>
                                    </div>
                                    {navLinks.map((link, index) => {
                                        const isActive = location.pathname === link.path;

                                        return (
                                            <motion.div
                                                key={link.name}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                            >
                                                <Link
                                                    to={link.path}
                                                    className={`block py-3 px-4 rounded-lg transition-all duration-300 ${isActive
                                                        ? 'bg-brand-cyan/10 text-brand-cyan border-l-4 border-brand-cyan'
                                                        : 'text-gray-300 hover:text-white hover:bg-white/5 border-l-4 border-transparent'
                                                        }`}
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-medium">{link.name}</span>
                                                        {isActive && (
                                                            <motion.div
                                                                className="w-2 h-2 bg-brand-cyan rounded-full"
                                                                animate={{
                                                                    scale: [1, 1.2, 1],
                                                                    opacity: [0.5, 1, 0.5]
                                                                }}
                                                                transition={{
                                                                    duration: 2,
                                                                    repeat: Infinity
                                                                }}
                                                            />
                                                        )}
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        );
                                    })}

                                    {/* Mobile CTA Button */}
                                    <Link to="/contact" className="w-full">
                                        <motion.button
                                            className="w-full bg-brand-cyan text-brand-navy font-bold px-6 py-4 rounded-lg mt-4 shadow-glow relative overflow-hidden group"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: navLinks.length * 0.05 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <motion.div
                                                className="absolute inset-0 bg-white/20"
                                                initial={{ x: '-100%' }}
                                                whileHover={{ x: '100%' }}
                                                transition={{ duration: 0.6 }}
                                            />
                                            <span className="relative z-10 flex items-center justify-center">
                                                Contact Us
                                                <motion.span
                                                    className="ml-2"
                                                    animate={{ x: [0, 4, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                >
                                                    →
                                                </motion.span>
                                            </span>
                                        </motion.button>
                                    </Link>
                                </div>

                                {/* Decorative Elements */}
                                <div className="relative h-1 bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent" />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;