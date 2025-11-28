
        const config = {
            personalInfo: {
                name: "Talha",
                role: "Final Year CS Student",
                tagline: "Building scalable solutions.",
                about: "I am a Computer Science graduate with a passion for full-stack development and data science. I love solving complex problems and have a strong foundation in Machine Learning, Full Stack Web Development,Data Analysis and data structures and algorithms. Always eager to learn new technologies and contribute to open-source projects.",
                email: "khalidtalha00@gmail.com",
                github: "https://github.com/khalidtalha00",
                linkedin: "https://www.linkedin.com/in/khalidtalha00/"
            },
            education: [
                {
                    degree: "B.tech Computer Science",
                    school: "Greater Noida Institute of Technology",
                    year: "2022 - 2026",
                    details: "GPA: 7.2 | Artificial Intelligence and Data Science"
                }
            ],
            skills: [
                { 
                    category: "Languages", 
                    items: ["Python", "JavaScript", "C","Java", "SQL"],
                    icon: "terminal" 
                },
                { 
                    category: "Frontend", 
                    items: ["React.js", "HTML", "CSS", "JavaScript"],
                    icon: "layout" 
                },
                { 
                    category: "Backend", 
                    items: ["Node.js", "Django", "PostgreSQL"],
                    icon: "database" 
                },
                { 
                    category: "Tools", 
                    items: ["Git/GitHub", "Docker", "VS Code", "Jupyter Notebook"],
                    icon: "cpu" 
                }
            ],
            projects: [
                {
                    title: "Go-Ticket",
                    description: "Full-stack web application for booking travel tickets (Bus, Cab, Bike).",
                    tech: ["React", "Typescript", "Express","Mongodb"],
                    github: "https://github.com/khalidtalha00/Go-Ticket",
                    live: "#",
                    color: "from-purple-500 to-pink-500"
                },
                {
                    title: "Full Stack Ecommerce Website",
                    description: "Ecommerce Site designed for scalability. Features JWT authentication, payment gateway integration, and order management.",
                    tech: ["Django", "Python", "Javascript",],
                    github: "https://github.com/khalidtalha00/Django_Ecommerce-Website",
                    live: null,
                    color: "from-emerald-500 to-teal-500"
                },

                
                 {
                    title: "Object Detection Flask Web App",
                    description: "Object Detection Web App based on Computer Vision.",
                    tech: ["Python", "YOLO", "opencv"],
                    github: "https://github.com/khalidtalha00/ObjectDetectionFlask-WebApp",
                    live: "#",
                    color: "from-blue-500 to-cyan-500"
                }


               
                
            ]
        };


        document.addEventListener('DOMContentLoaded', () => {
            // 1. Render Personal Info
            document.getElementById('nav-name').innerHTML = `Talha Khalid<span class="text-blue-400">.</span>`;
            document.getElementById('hero-name').textContent = config.personalInfo.name;
            document.getElementById('hero-tagline').textContent = config.personalInfo.tagline;
            document.getElementById('about-text').textContent = config.personalInfo.about;
            document.getElementById('code-name').textContent = `"${config.personalInfo.name}"`;
            document.getElementById('hero-github').href = config.personalInfo.github;
            document.getElementById('contact-email').href = `mailto:${config.personalInfo.email}`;
            document.getElementById('contact-linkedin').href = config.personalInfo.linkedin;
            document.getElementById('footer-name').textContent = config.personalInfo.name;
            document.getElementById('year').textContent = new Date().getFullYear();

            // 2. Render Education
            const eduContainer = document.getElementById('education-container');
            config.education.forEach(edu => {
                const eduHTML = `
                    <div class="p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500/30 transition-colors">
                        <div class="flex justify-between items-start mb-1">
                            <h3 class="font-semibold text-white">${edu.degree}</h3>
                            <span class="text-xs font-mono text-blue-400 bg-blue-900/20 px-2 py-1 rounded">${edu.year}</span>
                        </div>
                        <p class="text-slate-300 mb-2">${edu.school}</p>
                        <p class="text-sm text-slate-500">${edu.details}</p>
                    </div>
                `;
                eduContainer.innerHTML += eduHTML;
            });

            // 3. Render Skills
            const skillsGrid = document.getElementById('skills-grid');
            config.skills.forEach(skill => {
                const itemsHTML = skill.items.map(item => 
                    `<span class="px-3 py-1 bg-slate-900 text-slate-300 text-sm rounded-full border border-slate-700 hover:border-blue-500/50 transition-colors">${item}</span>`
                ).join('');

                const skillHTML = `
                    <div class="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all hover:-translate-y-1 group">
                        <div class="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                            <i data-lucide="${skill.icon}"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-white mb-4">${skill.category}</h3>
                        <div class="flex flex-wrap gap-2">
                            ${itemsHTML}
                        </div>
                    </div>
                `;
                skillsGrid.innerHTML += skillHTML;
            });

            // 4. Render Projects
            const projectsGrid = document.getElementById('projects-grid');
            config.projects.forEach(project => {
                const techHTML = project.tech.map(t => 
                    `<span class="text-xs font-medium text-blue-300 bg-blue-900/20 px-2 py-1 rounded">#${t}</span>`
                ).join('');

                const liveLinkHTML = project.live ? 
                    `<a href="${project.live}" target="_blank" class="text-slate-400 hover:text-white transition-colors" title="Live Demo"><i data-lucide="external-link" class="w-5 h-5"></i></a>` : '';

                const projectHTML = `
                    <div class="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all hover:-translate-y-1 flex flex-col h-full">
                        <div class="h-2 bg-gradient-to-r ${project.color}"></div>
                        <div class="p-6 flex-1 flex flex-col">
                            <div class="flex justify-between items-start mb-4">
                                <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">${project.title}</h3>
                                <div class="flex gap-3">
                                    <a href="${project.github}" target="_blank" class="text-slate-400 hover:text-white transition-colors" title="View Code">
                                        <i data-lucide="github" class="w-5 h-5"></i>
                                    </a>
                                    ${liveLinkHTML}
                                </div>
                            </div>
                            <p class="text-slate-400 mb-6 flex-1 text-sm leading-relaxed">${project.description}</p>
                            <div class="flex flex-wrap gap-2 mt-auto">
                                ${techHTML}
                            </div>
                        </div>
                    </div>
                `;
                projectsGrid.innerHTML += projectHTML;
            });


            lucide.createIcons();

  
            const menuBtn = document.getElementById('menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                const iconName = mobileMenu.classList.contains('hidden') ? 'menu' : 'x';
                menuBtn.innerHTML = `<i data-lucide="${iconName}"></i>`;
                lucide.createIcons();
            });

  
            document.querySelectorAll('#mobile-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    menuBtn.innerHTML = `<i data-lucide="menu"></i>`;
                    lucide.createIcons();
                });
            });


            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-slate-900/90', 'backdrop-blur-md', 'shadow-lg', 'py-4');
                    navbar.classList.remove('py-6');
                } else {
                    navbar.classList.remove('bg-slate-900/90', 'backdrop-blur-md', 'shadow-lg', 'py-4');
                    navbar.classList.add('py-6');
                }
            });
        });
   