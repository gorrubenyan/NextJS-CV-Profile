'use client';
import React, {useEffect, useState, useRef, useMemo} from 'react';
import { getTranslation } from '@/utils/translations';
import LanguageSelector from '../components/LanguageSelector';
import ThemeToggle from '../components/ThemeToggle';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDownload, FaCode, FaEye, FaArrowUp } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

export default function Home() {
    const [lang, setLang] = useState('en');
    const [dark, setDark] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [typedText, setTypedText] = useState('');
    const [currentRole, setCurrentRole] = useState(0);

    const heroRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const workRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const t = (key: string) => getTranslation(lang, key);

    const roles = useMemo(() => [
        t('position'),
        'Full Stack Developer',
        'UI/UX Designer',
        'Problem Solver'
    ], [lang, t]);

    // Typing animation effect
    useEffect(() => {
        const currentText = roles[currentRole];
        let index = 0;
        const timer = setInterval(() => {
            if (index <= currentText.length) {
                setTypedText(currentText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
                setTimeout(() => {
                    setCurrentRole((prev) => (prev + 1) % roles.length);
                }, 2000);
            }
        }, 100);

        return () => clearInterval(timer);
    }, [currentRole, roles]);

    // Dark mode effect
    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [dark]);

    // Scroll effects
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);

            const sections = [
                { id: 'hero', ref: heroRef },
                { id: 'about', ref: aboutRef },
                { id: 'skills', ref: skillsRef },
                { id: 'projects', ref: projectsRef },
                { id: 'work', ref: workRef },
                { id: 'contact', ref: contactRef }
            ];

            const current = sections.find(section => {
                if (section.ref.current) {
                    const rect = section.ref.current.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom > 100;
                }
                return false;
            });

            if (current) {
                setActiveSection(current.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const getRefBySection = (section: string) => {
        switch(section) {
            case 'hero': return heroRef;
            case 'about': return aboutRef;
            case 'skills': return skillsRef;
            case 'projects': return projectsRef;
            case 'work': return workRef;
            case 'contact': return contactRef;
            default: return heroRef;
        }
    };

    const skills = [
        { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'React', level: 92, color: 'from-cyan-400 to-cyan-600' },
        { name: 'Next.js', level: 88, color: 'from-gray-400 to-gray-600' },
        { name: 'Tailwind CSS', level: 94, color: 'from-teal-400 to-teal-600' },
        { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
        { name: 'Git', level: 90, color: 'from-orange-400 to-orange-600' },
        { name: 'REST API', level: 87, color: 'from-purple-400 to-purple-600' }
    ];

    const projects = [
        {
            title: 'Portfolio Website',
            description: t('projectsPortfolio'),
            image: '/project1.jpg',
            tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
            github: 'https://github.com/yourusername/portfolio',
            live: 'https://yourportfolio.com'
        },
        {
            title: 'Task Manager App',
            description: t('projectsTask'),
            image: '/project2.jpg',
            tech: ['React', 'Node.js', 'MongoDB'],
            github: 'https://github.com/yourusername/task-manager',
            live: 'https://yourtaskapp.com'
        },
        {
            title: 'E-commerce Platform',
            description: t('projectsEcommerce'),
            image: '/project3.jpg',
            tech: ['Next.js', 'Stripe', 'PostgresSQL'],
            github: 'https://github.com/yourusername/ecommerce',
            live: 'https://yourecommerce.com'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {t('name')}
                    </div>

                    <div className="hidden md:flex space-x-8">
                        {['hero', 'about', 'skills', 'projects', 'work', 'contact'].map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(getRefBySection(section))}
                                className={`capitalize transition-colors ${
                                    activeSection === section
                                        ? 'text-blue-600 dark:text-blue-400'
                                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                }`}
                            >
                                {t(`nav${section.charAt(0).toUpperCase() + section.slice(1)}`)}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <LanguageSelector lang={lang} setLang={setLang} />
                        <ThemeToggle dark={dark} setDark={setDark} />
                    </div>
                </div>
            </nav>

            <main className="pt-20">
                {/* Hero Section */}
                <section ref={heroRef} className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    </div>

                    <div className="text-center z-10 max-w-4xl mx-auto">
                        <div className="relative mb-8">
                            <img
                                src="/avatar.png"
                                className="w-40 h-40 rounded-full shadow-2xl mx-auto mb-8 border-4 border-white dark:border-gray-700 hover:scale-105 transition-transform duration-300"
                                alt="Avatar"
                            />
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-700 animate-pulse"></div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in-down">
                            {t('name')}
                        </h1>

                        <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-8">
                            <span className="typing-text">{typedText}</span>
                            <span className="animate-blink">|</span>
                        </div>

                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in-up-delay leading-relaxed">
                            {t('bio')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay-2">
                            <button
                                onClick={() => scrollToSection(contactRef)}
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
                            >
                                <HiOutlineMail className="text-xl" />
                                {t('contactMe')}
                            </button>

                            <a
                                href="/cv.pdf"
                                download
                                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2"
                            >
                                <FaDownload />
                                {t('downloadCV')}
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center gap-6 mt-12 animate-fade-in-up-delay-3">
                            {[
                                { icon: FaGithub, href: 'https://github.com/yourusername', color: 'hover:text-gray-700 dark:hover:text-white' },
                                { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', color: 'hover:text-blue-700 dark:hover:text-blue-400' },
                                { icon: FaTwitter, href: 'https://twitter.com/yourusername', color: 'hover:text-sky-500' },
                                { icon: FaInstagram, href: 'https://instagram.com/yourusername', color: 'hover:text-pink-500' }
                            ].map(({ icon: Icon, href, color }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-3xl text-gray-600 dark:text-gray-400 ${color} transition-all duration-300 hover:scale-110`}
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section ref={aboutRef} className="py-20 px-6 bg-white dark:bg-gray-800">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {t('aboutTitle')}
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {t('aboutText')}
                                </p>
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {t('aboutText2')}
                                </p>

                                <div className="grid grid-cols-2 gap-6 mt-8">
                                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">{t('projectsCompleted')}</div>
                                    </div>
                                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
                                        <div className="text-3xl font-bold text-green-600 dark:text-green-400">3+</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">{t('yearsExperience')}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg transform rotate-6"></div>
                                <img
                                    src="/about.png"
                                    alt="About"
                                    className="relative rounded-lg shadow-xl w-full h-80 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section ref={skillsRef} className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {t('skillsTitle')}
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {skills.map((skill) => (
                                <div key={skill.name} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-lg font-semibold text-gray-800 dark:text-white">{skill.name}</span>
                                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                                        <div
                                            className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section ref={projectsRef} className="py-20 px-6 bg-white dark:bg-gray-800">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {t('projectsTitle')}
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                                    <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                            <FaCode className="text-white text-4xl" />
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech, techIndex) => (
                                                <span key={techIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                          {tech}
                        </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-4">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                            >
                                                <FaGithub /> {t('code')}
                                            </a>
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                                            >
                                                <FaEye /> {t('live')}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Work Experience */}
                <section ref={workRef} className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {t('workTitle')}
                        </h2>

                        <div className="relative">
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>

                            <div className="space-y-12">
                                <div className="relative pl-20">
                                    <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Frontend Developer – ABC Company</h3>
                                        <p className="text-blue-600 dark:text-blue-400 mb-4">2022 - {t('present')}</p>
                                        <p className="text-gray-600 dark:text-gray-300">{t('workText')}</p>
                                    </div>
                                </div>

                                <div className="relative pl-20">
                                    <div className="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{t('educationDegree')}</h3>
                                        <p className="text-purple-600 dark:text-purple-400 mb-4">2018 - 2022</p>
                                        <p className="text-gray-600 dark:text-gray-300">Yerevan State University</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section ref={contactRef} className="py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {t('contactTitle')}
                        </h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">{t('contactText')}</p>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                <HiOutlineMail className="text-3xl text-blue-500 mx-auto mb-4" />
                                <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">{t('email')}</h3>
                                <a href="mailto:youremail@example.com" className="text-blue-600 hover:underline">
                                    youremail@example.com
                                </a>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                <HiOutlinePhone className="text-3xl text-green-500 mx-auto mb-4" />
                                <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">{t('phone')}</h3>
                                <a href="tel:+37400000000" className="text-green-600 hover:underline">
                                    +374 00 000 000
                                </a>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                <HiOutlineLocationMarker className="text-3xl text-red-500 mx-auto mb-4" />
                                <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">{t('location')}</h3>
                                <p className="text-gray-600 dark:text-gray-300">Yerevan, Armenia</p>
                            </div>
                        </div>

                        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
                            <HiOutlineMail className="text-xl" />
                            {t('getInTouch')}
                        </button>
                    </div>
                </section>
            </main>

            {/* Scroll to top button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
                >
                    <FaArrowUp className="mx-auto" />
                </button>
            )}
        </div>
    );
}