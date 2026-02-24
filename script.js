let currentLanguage = "en"; // Idioma inicial en inglés

function toggleLanguage() {
    const summaryText = document.getElementById('summaryText');
    const objectivesText = document.getElementById('objectivesText');
    const aboutHeader = document.querySelector('#about h2');
    const objectivesHeader = document.querySelector('#objectives h2');
    const experienceHeader = document.querySelector('#experience h2');
    const skillsHeader = document.querySelector('#skills h2');
    const contactHeader = document.querySelector('#contact h2');

    if (currentLanguage === "en") {
        // Cambiar a español
        objectivesHeader.innerText = 'Objetivos Profesionales';
        objectivesText.innerHTML = `
            Buscar crecer como profesional en el desarrollo de software, centrándose en crear soluciones escalables y eficientes. Las metas clave incluyen:
            <ul>
                <li><strong>Desarrollo Backend:</strong> Aprovechar la experiencia en Java y Python para diseñar y optimizar sistemas backend, mejorando el rendimiento y la seguridad.</li>
                <li><strong>Desarrollo de Aplicaciones Interactivas:</strong> Diseñar y desarrollar sistemas de gestión, plataformas de e-commerce y landing pages que cumplan con las necesidades del cliente y mejoren la experiencia del usuario.</li>
                <li><strong>Aprendizaje Continuo:</strong> Mantenerse actualizado con las últimas tecnologías y tendencias participando en cursos, talleres y eventos tecnológicos.</li>
                <li><strong>Trabajo en Equipo:</strong> Colaborar en entornos ágiles, aportando habilidades tanto técnicas como blandas para alcanzar objetivos comunes y fomentar un ambiente de trabajo positivo.</li>
                <li><strong>Resolución de Problemas:</strong> Enfrentar desafíos técnicos con un enfoque analítico y creativo, buscando soluciones innovadoras que agreguen valor a los proyectos.</li>
            </ul>`;
        
        aboutHeader.innerText = 'Resumen Profesional';
        experienceHeader.innerText = 'Experiencia Profesional';
        skillsHeader.innerText = 'Habilidades';
        contactHeader.innerText = 'Contacto';
        document.querySelector("#experience h3:nth-of-type(1)").innerText = "Desarrollador Freelance";
        document.querySelector("#experience h3:nth-of-type(2)").innerText = "Desarrollador Web Freelance";
        document.querySelector("#skills h3:nth-of-type(1)").innerText = "Habilidades Técnicas";
        document.querySelector("#skills h3:nth-of-type(2)").innerText = "Habilidades Blandas";
        
        document.querySelector("#experience ul:nth-of-type(1) li").innerText = "Implementó un sistema de autenticación robusto con Python y Django, mejorando la seguridad en plataformas web.";
        document.querySelector("#experience ul:nth-of-type(2) li:nth-of-type(1)").innerText = "Desarrolló un sistema de gestión para una pequeña empresa utilizando Java con Spring Boot y microservicios.";
        document.querySelector("#experience ul:nth-of-type(2) li:nth-of-type(2)").innerText = "Optimizó bases de datos SQL, reduciendo los tiempos de respuesta en un 20%.";

        const skillsList = document.querySelectorAll("#skills ul:nth-of-type(1) li");
        skillsList[0].innerText = "Lenguajes de Programación: Java, Python";
        skillsList[1].innerText = "Frameworks: Spring Boot, Django";
        skillsList[2].innerText = "Tecnologías Web: HTML, CSS, JavaScript";
        skillsList[3].innerText = "Bases de Datos: SQL";
        skillsList[4].innerText = "Herramientas: Git, GitHub";
        skillsList[5].innerText = "Metodologías: Microservicios, desarrollo ágil, SCRUM";
        
        const softSkillsList = document.querySelectorAll("#skills ul:nth-of-type(2) li");
        softSkillsList[0].innerText = "Trabajo en equipo";
        softSkillsList[1].innerText = "Resolución de problemas bajo presión";
        softSkillsList[2].innerText = "Comunicación efectiva";

        currentLanguage = "es"; // Cambiar estado de idioma a español

    } else {
        // Cambiar a inglés
        objectivesHeader.innerText = 'Career Objectives';
        objectivesText.innerHTML = `
            Seeking to grow as a professional in software development, focusing on creating scalable and efficient solutions. Key goals include:
            <ul>
                <li><strong>Backend Development:</strong> Leverage experience in Java and Python to design and optimize backend systems, improving performance and security.</li>
                <li><strong>Interactive Application Development:</strong> Design and develop management systems, e-commerce platforms, and landing pages that meet client needs and enhance user experience.</li>
                <li><strong>Continuous Learning:</strong> Stay updated with the latest technologies and trends by participating in courses, workshops, and tech events.</li>
                <li><strong>Teamwork:</strong> Collaborate in agile environments, contributing with both technical and soft skills to achieve common goals and foster a positive work environment.</li>
                <li><strong>Problem-Solving:</strong> Tackle technical challenges with an analytical and creative approach, seeking innovative solutions that add value to projects.</li>
            </ul>`;
        
        aboutHeader.innerText = 'Professional Summary';
        experienceHeader.innerText = 'Professional Experience';
        skillsHeader.innerText = 'Skills';
        contactHeader.innerText = 'Contact';
        document.querySelector("#experience h3:nth-of-type(1)").innerText = "Freelance Developer";
        document.querySelector("#experience h3:nth-of-type(2)").innerText = "Freelance Web Developer";
        document.querySelector("#skills h3:nth-of-type(1)").innerText = "Technical Skills";
        document.querySelector("#skills h3:nth-of-type(2)").innerText = "Soft Skills";
        
        document.querySelector("#experience ul:nth-of-type(1) li").innerText = "Implemented a robust authentication system using Python and Django, enhancing the security of web platforms.";
        document.querySelector("#experience ul:nth-of-type(2) li:nth-of-type(1)").innerText = "Developed a management system for a small business using Java with Spring Boot and microservices.";
        document.querySelector("#experience ul:nth-of-type(2) li:nth-of-type(2)").innerText = "Optimized SQL databases, reducing response times by 20%.";

        skillsList[0].innerText = "Programming Languages: Java, Python";
        skillsList[1].innerText = "Frameworks: Spring Boot, Django";
        skillsList[2].innerText = "Web Technologies: HTML, CSS, JavaScript";
        skillsList[3].innerText = "Databases: SQL";
        skillsList[4].innerText = "Tools: Git, GitHub";
        skillsList[5].innerText = "Methodologies: Microservices, Agile development, SCRUM";
        
        softSkillsList[0].innerText = "Teamwork";
        softSkillsList[1].innerText = "Problem-solving under pressure";
        softSkillsList[2].innerText = "Effective communication";

        currentLanguage = "en"; // Cambiar estado de idioma a inglés
    }
}

function toggleMode() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
}
