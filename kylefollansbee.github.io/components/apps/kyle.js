import React, { Component } from 'react';
import ReactGA from 'react-ga';

export class AboutKyle extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.pageview(`/${screen}`);

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about kyle" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="kyle's education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="kyle's skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="kyle's projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="kyle's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutKyle;

export const displayAboutKyle = () => {
    return <AboutKyle />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/kyle.gif" alt="Kyle Follansbee gif" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Kyle Follansbee</span> ,</div>
                <div className="font-normal ml-1">I'm a recent <span className="text-cyan-600 font-bold">M. Sci. Cybersecurity</span> grad</div>
            </div>
            <div className=" my-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className="">Currently, I'm a <span className=" font-medium">Network Administrator</span> transitioning into Cyber Intelligence, Threat Intelligence, or Threat Analyst</li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        University of South Florida
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">August 2021 - December 2022</div>
                    <div className=" text-sm md:text-base">Cybersecurity; Cyber Intelligence</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">GPA &nbsp; 4.0/4.0</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Relevant Coursework: Cryptography, Digital Forensics, Professional/Technical Communication, Information Security and Risk Management, Business Continuity and Disaster Recovery, and Intrusion Detection.</div>
                </li>
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        University of Florida
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2011 - 2015</div>
                    <div className=" text-sm md:text-base">Journalism; Investigative</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Highlight: Most published staff writer during Summer 2014 for the largest student-run newspaper in the US</div>
                </li>
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        CompTIA
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">Valid 2021 - 2024</div>
                    <div className=" text-sm md:text-base">Cybersecurity Analyst (CySA+) CSO-002</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Career ID: COMP001021943083; Code: SZWH91VF0KBQQ8G6</div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Tools and Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                <span className=" font-medium">Offensive Security:</span> Kali Linux, Metasploit, nikto, Nmap, Snort, Splunk, Volatility Framework, Wireshark 
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                <span className=" font-medium">Cloud/Virtualization: </span> Microsoft Azure Sentinel, SolarWinds Virtualization Manager, VirtualBox, VMware 
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                <span className=" font-medium">Operating Systems: </span> Linux, macOS / X, TailsOS, and Windows 11 / 10 / 7 
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                <span className=" font-medium">Technical: </span> Active Directory, Firewalls, LAN/WAN setup, SSL/TLS management, TCP/UDP, Cryptographic Schemes 
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                <span className=" font-medium">Languages: </span> English (native), Spanish (beginner) 
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                <span className=" font-medium">Programming:</span> Bootstrap, Docker, ES6 (JavaScript), Git, Haml (HTML5), jQuery, Node.js, Python, React, Sass (CSS3)
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="kyle javascript" />
                        <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="kyle python" />
                        <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="kyle HTML" /></a>
                        <img src="https://img.shields.io/badge/-Sass-%23CC6699?style=flat&logo=sass&logoColor=ffffff" alt="kyle SASS" className="m-1" />
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="kyle git" className="m-1" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="kyle react" />
                        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="kyle tailwind css" />
                        <img src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff" alt="kyle node.js" className="m-1" />
                        <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white" alt="kyle jquery" className="m-1" />   
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="kyle linux" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "Microsoft Azure Sentinel (SIEM)",
            date: "February 2022",
            link: "",
            description: [
                "Assembled an Azure Sentinel and connected it to a live virtual computer that served as a honeypot. Observed Event Viewer Logs in VM via Security Center (Microsoft Defender for Cloud). Reviewed real-time international attacks (RDP Brute Force). Extracted custom fields from log data. Utilized a custom PowerShell script to compile attacker's geolocation and plot on a map.",
            ],
            domains: ["azure", "microsoft"]
        },
        {
            name: "Ubuntu VirtualBox Cryptography Lab",
            date: "October 2021",
            link: "",
            description: [
                "Deployed virtual environments using an Ubuntu v20.04 image to explore; secret-key cryptography concepts, writing programs that encrypted/decrypted different messages in length and content, padding, initialization vectors (IV), keyed hashes using HMAC-MD5/HMAC-SHA256/HMAC-SHA1, obtaining an X.509 certificate, generating a certificate signing request (CSR), signing and verifying a file using the Elliptic Curve Cryptography (ECC) scheme, Public Key Infrastructure (PKI), and Management of Certificate Authority with Blockchain.",
            ],
            domains: ["ubuntu", "crypography", "ECC", "SHA"]
        },
        {
            name: "Issue Analysis Research on Cyberbiosecurity: A Priority for US Healthcare Security",
            date: "July 2021",
            link: "",
            description: [
                "Led a group of colleagues to research, source, and publish a 17-page paper utilizing techniques, i.e., Chronologies and Timelines, Structured Self-Critique, Key Assumptions Check, Starbursting, Mind Maps, and Reversing Assumptions to analyze how cyberattacks on the healthcare industry can directly endanger the wellbeing of American patients.",
            ],
            domains: ["cyberbioseccurity", "healthcare"]
        },
        {
            name: "Issue Analysis Research on the National Security Threat Presented by Deepfakes",
            date: "November 2020",
            link: "",
            description: [
                "Researched, sourced, and published a six-page report indicating that deepfake creation technologies, e.g., reactive neural network training and generative adversarial networks (GANs) are outpacing detection technologies and will threaten US national security by impacting democracy, weakening citizen trust, and influencing socioeconomical institutions.",
            ],
            domains: ["deepfakes", "GANs"]
        },
        {
            name: "Front-end Development",
            date: "June 2019 - December 2019",
            link: "",
            description: [
                "As a freelance developer, I minimized coding time by utilizing JavaScript libraries (React), Bootstrap, and preprocessors (Haml/Sass). Maintained budget-friendly solutions by taking free online courses to learn new languages, e.g., Python. Earned friendly, personable reputation leading to 20% increase of clients in five months.",
            ],
            domains: ["javascript", "front end development", "sass", "python"]
        },
    ];

    const tag_colors = {
        "javascript": "yellow-300",
     
      
        "chrome-extension": "yellow-400",
     

        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "python": "green-200",
     
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {
                project_list.map((project, index) => {
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className=" text-base md:text-lg">{project.name.toLowerCase()}</div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                let tag_color = tag_colors[domain];
                                                return <span key={index} style={{ borderWidth: "1pt" }} className={`px-1.5 py-0.5 w-max border-${tag_color} text-${tag_color} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Kyle Follansbee_Resume_Ubuntu.pdf" title="kyle follansbee resume" frameBorder="0"></iframe>
    )
}