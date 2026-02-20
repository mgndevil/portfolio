import React, { useRef, useState, useEffect  } from "react";
import javaLogo from "./assets/logos/java.png";
import springLogo from "./assets/logos/springLogo.png";
import sapLogo from "./assets/logos/sapLogo.png";
import hanaLogo from "./assets/logos/hana.png";
import cLogo from "./assets/logos/cLogo.png";
import mongoLogo from "./assets/logos/mongoLogo.png";
import thank from "./assets/logos/thank.png";

import { ChevronLeft, ChevronRight } from "lucide-react";
import SmokeBackground from "./WaveBackground.jsx";
import { motion } from "framer-motion";
import {
    Github,
    Linkedin,
    Mail,
    Database,
    Server,
    Code2,
    Layers,
    ExternalLink
} from "lucide-react";

import profile from "./assets/rishi.png";
import WaveBackground from "./WaveBackground.jsx";


export default function Portfolio() {

    const projectRef = useRef(null);

    const skills = [
        { title: "Java", logo: javaLogo },
        { title: "Spring Boot", logo: springLogo },
        { title: "SAP ABAP", logo: sapLogo },
        { title: "SAP HANA", logo: hanaLogo },
        { title: "C Programming", logo: cLogo },
        { title: "MongoDB", logo: mongoLogo }
    ];

    const scrollRef = useRef(null);

    const scroll = (direction) => {

        if (scrollRef.current) {

            scrollRef.current.scrollBy({
                left: direction === "left" ? -300 : 300,
                behavior: "smooth"
            });

        }
    };

    const welcomeWords = [
        "Welcome",
        "स्वागत है",
        "Bienvenue",
        "ようこそ"
    ];

    const [welcomeIndex, setWelcomeIndex] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setWelcomeIndex(prev =>
                (prev + 1) % welcomeWords.length
            );

        }, 2000);

        return () => clearInterval(interval);

    }, []);

    const projects = [
        {
            title: "Kisan Seva Platform",
            desc: "Enterprise agriculture backend system",
            tech: ["Java", "Spring Boot", "MySQL", "REST API"],
            link: "https://github.com/Sadow-Vortex/Kisan__Seva",
            logo: javaLogo
        },
        {
            title: "SAP ABAP RAP Module",
            desc: "Cloud ABAP RAP implementation",
            tech: ["SAP ABAP", "SAP HANA"],
            link: "...",
            logo: sapLogo
        },
        {
            title: "Enterprise Category API",
            desc: "Secure layered backend system",
            tech: ["Java", "Spring Boot", "JPA"],
            link: "https://github.com/Sadow-Vortex/SubCategory",
            logo: hanaLogo
        }
    ];

    return (

        <div className="cosmic-bg text-white min-h-screen overflow-hidden relative z-10">
            <WaveBackground />

            {/* NAVBAR */}
            <nav className="fixed w-full backdrop-blur-lg bg-black/30 border-b border-blue-500/20 z-50">

                <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xl font-bold text-blue-400 flex items-center"
                    >

                        {/* Fixed-width welcome box */}
                        <span
                            className="inline-flex items-center overflow-hidden relative"
                            style={{
                                width: "260px",   // increased width to fit Hindi & French
                                height: "60px"
                            }}
                        >
                            <motion.span
                                key={welcomeIndex}
                                initial={{ rotateX: 90, opacity: 0 }}
                                animate={{ rotateX: 0, opacity: 1 }}
                                exit={{ rotateX: -90, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute left-0 top-0 italic text-cyan-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.8)] whitespace-nowrap"
                            >
                                {welcomeWords[welcomeIndex]}
                            </motion.span>
                        </span>

                        {/* Static text — now safely positioned */}
                        <span className="ml-3 whitespace-nowrap">
                            to my portfolio
                        </span>

                    </motion.h1>

                    <div className="flex gap-6">

                        <a href="#projects" className="hover:text-blue-400">Projects</a>

                        <a href="#contact" className="hover:text-blue-400">Contact</a>

                    </div>

                </div>

            </nav>


            {/* HERO SECTION */}
            <section className="max-w-7xl mx-auto px-6 pt-40 pb-20 grid md:grid-cols-2 items-center gap-10 relative z-10">

                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">


                        <span className="text-white">
                            HELLO !
                            <br/>
                            I am Rushi Prasad Manna
                        </span>

                        <br />

                        {/* Role */}
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                            Enterprise Java & SAP Developer
                        </span>

                    </h1>


                    <p className="mt-6 text-gray-400 text-lg max-w-xl leading-relaxed">

                        I build scalable enterprise backend systems using
                        <span className="text-blue-400"> Java</span>,
                        <span className="text-blue-400"> Spring Boot</span>, and
                        <span className="text-blue-400"> SAP HANA</span>.

                        Focused on performance, security, and production-ready architecture.

                    </p>

                    <div className="flex gap-4 mt-6">

                        <button
                            onClick={() =>
                                projectRef.current.scrollIntoView({ behavior: "smooth" })
                            }
                            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                        >
                            View Projects
                        </button>

                        <a
                            href="/RP_Manna_Resume.pdf"
                            download
                            className="px-6 py-3 border border-blue-500 rounded-lg hover:bg-blue-500/20"
                        >
                            Resume
                        </a>

                    </div>

                    <div className="flex gap-4 mt-6">

                        <a href="https://github.com/Sadow-Vortex" target="_blank">
                            <Github className="hover:text-blue-400 cursor-pointer" />
                        </a>

                        <a href="https://linkedin.com/in/rushi-prasad-manna" target="_blank">
                            <Linkedin className="hover:text-blue-400 cursor-pointer" />
                        </a>

                        <a href="mailto:mannarp5553@gmail.com">
                            <Mail className="hover:text-blue-400 cursor-pointer" />
                        </a>

                    </div>

                </motion.div>


                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex justify-end"
                >

                    <img
                        src={profile}
                        className="w-[450px] md:w-[500px] ml-auto drop-shadow-[0_0_60px_rgba(59,130,246,0.8)]"
                    />

                </motion.div>

            </section>

            {/* MY BACKGROUND */}
            <section className="max-w-7xl mx-auto px-6 py-20">

                <h2 className="text-3xl font-bold mb-12 text-center">
                    My Background
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                    {/* MCA */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="p-6 backdrop-blur-lg bg-white/5 border border-blue-500/20 rounded-xl"
                    >
                        <h3 className="text-xl font-semibold text-blue-400">
                            MCA
                        </h3>

                        <p className="text-gray-300">
                            Kalinga Institute Of Industrial Technology
                        </p>

                        <p className="text-gray-400 text-sm">
                            2024 – Continue
                        </p>

                        <p className="text-cyan-400 font-semibold mt-2">
                            CGPA: 8.03
                        </p>
                    </motion.div>


                    {/* BSc */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="p-6 backdrop-blur-lg bg-white/5 border border-blue-500/20 rounded-xl"
                    >
                        <h3 className="text-xl font-semibold text-blue-400">
                            B.Sc Computer Science
                        </h3>

                        <p className="text-gray-300">
                            M.P.C Autonomous College
                        </p>

                        <p className="text-gray-400 text-sm">
                            2021 – 2024
                        </p>

                        <p className="text-cyan-400 font-semibold mt-2">
                            CGPA: 7.66
                        </p>
                    </motion.div>


                    {/* CHSE */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="p-6 backdrop-blur-lg bg-white/5 border border-blue-500/20 rounded-xl"
                    >
                        <h3 className="text-xl font-semibold text-blue-400">
                            CHSE Science
                        </h3>

                        <p className="text-gray-300">
                            Balasore Higher Secondary School
                        </p>

                        <p className="text-gray-400 text-sm">
                            2019 – 2021
                        </p>

                        <p className="text-cyan-400 font-semibold mt-2">
                            80%
                        </p>
                    </motion.div>


                    {/* BSE */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="p-6 backdrop-blur-lg bg-white/5 border border-blue-500/20 rounded-xl"
                    >
                        <h3 className="text-xl font-semibold text-blue-400">
                            BSE
                        </h3>

                        <p className="text-gray-300">
                            Jaleswar Nodal High School
                        </p>

                        <p className="text-gray-400 text-sm">
                            2009 – 2019
                        </p>

                        <p className="text-cyan-400 font-semibold mt-2">
                            79%
                        </p>
                    </motion.div>

                </div>

            </section>

            {/* SKILLS */}
            <motion.section
                className="max-w-7xl mx-auto px-6 py-20 relative"

                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}

                viewport={{ once: true, amount: 0.2 }}
            >

                {/* Animated Heading */}
                <motion.h2
                    className="text-3xl font-bold mb-10 text-center"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false}}
                >
                    Technical Expertise
                </motion.h2>


                {/* LEFT ARROW */}
                <motion.button
                    onClick={() => scroll("left")}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-500/20 p-2 rounded-full hover:bg-blue-500/40"
                >
                    <ChevronLeft size={28}/>
                </motion.button>


                {/* RIGHT ARROW */}
                <motion.button
                    onClick={() => scroll("right")}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-500/20 p-2 rounded-full hover:bg-blue-500/40"
                >
                    <ChevronRight size={28}/>
                </motion.button>


                {/* SLIDER */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-10"
                >

                    {skills.map((skill, index) => (

                        <motion.div
                            key={index}

                            initial={{
                                opacity: 0,
                                y: 60,
                                scale: 0.8
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1
                            }}

                            transition={{
                                duration: 0.5,
                                delay: index * 0.15
                            }}

                            viewport={{
                                once: false,
                                amount: 0.3
                            }}

                            whileHover={{
                                scale: 1.15,
                                y: -10
                            }}

                            className="min-w-[200px] p-6 backdrop-blur-lg bg-white/5 border border-blue-500/20 rounded-xl flex flex-col items-center cursor-pointer"
                        >

                            <motion.img
                                src={skill.logo}
                                alt={skill.title}
                                className="w-24 h-24 object-contain drop-shadow-[0_0_20px_rgba(59,130,246,1)]"

                                whileHover={{
                                    scale: 1.3,
                                    rotate: 5
                                }}

                                transition={{
                                    type: "spring",
                                    stiffness: 300
                                }}
                            />

                            <h3 className="mt-4 text-lg font-semibold">
                                {skill.title}
                            </h3>

                        </motion.div>

                    ))}

                </div>

            </motion.section>


            {/* PROJECTS */}
            <section
                ref={projectRef}
                id="projects"
                className="max-w-7xl mx-auto px-6 py-20"
            >

                <h2 className="text-3xl font-bold mb-10 text-center">
                    Enterprise Projects
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    {projects.map((project, index) => (

                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="p-6 backdrop-blur-lg bg-white/5 border border-blue-500/20 rounded-xl relative overflow-hidden"
                        >

                            {/* Project Logo Right Side */}
                            <img
                                src={project.logo}
                                alt="logo"
                                className="absolute top-6 right-6 w-28 h-28 object-contain opacity-90 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                            />

                            <h3 className="font-semibold mb-3 text-lg">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 text-sm mb-4">
                                {project.desc}
                            </p>

                            <div className="flex gap-2 flex-wrap mb-4">
                                {project.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="text-xs bg-blue-500/20 px-2 py-1 rounded"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <a href={project.link} target="_blank">
                                <ExternalLink className="text-blue-400"/>
                            </a>

                        </motion.div>

                    ))}

                </div>

            </section>

            <section id="contact" className="max-w-7xl mx-auto px-6 py-20">

                <h2 className="text-3xl font-bold mb-12 text-center">
                    Contact
                </h2>

                <div className="grid md:grid-cols-3 gap-10 items-center">

                    {/* LEFT — QUOTE */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false }}
                    >

                        <h3 className="text-4xl md:text-5xl font-bold leading-tight">

                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    Plan meticulously,
                </span>

                            <br/>

                            <span className="text-white">
                    Execute fearlessly.
                </span>

                        </h3>

                        <p className="mt-6 text-gray-400 text-lg max-w-md">
                            Precision in planning and confidence in execution define my approach
                            to building reliable enterprise systems.
                        </p>

                    </motion.div>



                    {/* CENTER — CHARACTER IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false }}
                        className="flex justify-center"
                    >

                        <img
                            src={thank}   // put your image here
                            alt="Rushi character"
                            className="w-[260px] md:w-[320px] drop-shadow-[0_0_40px_rgba(59,130,246,0.6)]"
                        />

                    </motion.div>



                    {/* RIGHT — CONTACT CARD */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false }}
                        className="flex justify-center md:justify-end"
                    >

                        <div className="p-6 backdrop-blur-lg bg-white/5 border border-blue-500/20 rounded-xl w-full max-w-sm">

                            <p className="mb-4 text-lg">
                                📧 mannarp5553@gmail.com
                            </p>

                            <p className="mb-4 text-lg">
                                📱 +91 8249261015
                            </p>

                            <p className="mb-6 text-lg">
                                🌍 India
                            </p>

                            <div className="flex gap-6 text-blue-400">

                                <a href="https://github.com/Sadow-Vortex" target="_blank">
                                    <Github size={28} className="hover:scale-110 transition"/>
                                </a>

                                <a href="https://linkedin.com/in/rushi-prasad-manna" target="_blank">
                                    <Linkedin size={28} className="hover:scale-110 transition"/>
                                </a>

                                <a href="mailto:mannarp5553@gmail.com">
                                    <Mail size={28} className="hover:scale-110 transition"/>
                                </a>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </section>


            {/* FOOTER */}
            <footer className="text-center py-10 text-gray-500">

                © {new Date().getFullYear()} Rishi Prasad Manna

            </footer>

        </div>
    );
}