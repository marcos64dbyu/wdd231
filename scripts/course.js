document.addEventListener('DOMContentLoaded', () => {
    const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
    ]

    const allCoursesSection = document.querySelector('#all-courses .cards');
    const wddCoursesSection = document.querySelector('#wdd-courses .cards');
    const cseCoursesSection = document.querySelector('#cse-courses .cards');

    // totals
    const totalAllSpan = document.getElementById("total-completed");
    const totalWddSpan = document.getElementById("wdd-completed");
    const totalCseSpan = document.getElementById("cse-completed");

    // Buttons
    const allCoursesButton = document.querySelector('.all-courses-button');
    const wddCoursesButton = document.querySelector('.wdd-courses-button');
    const cseCoursesButton = document.querySelector('.cse-courses-button');

    function createCourseCard(course) {
        const card = document.createElement('div');
        card.classList.add('course-card');
        card.innerHTML = `
            <button class="${course.completed ? 'course-title-check' : 'course-title-b'}">${course.completed ? '&#10004;' : ''} ${course.subject} ${course.number}</button>
        `;
        return card;
    }

    // hide all course sections
    function hideAllCourseSections() {
        document.getElementById('all-courses').style.display = 'none';
        document.getElementById('wdd-courses').style.display = 'none';
        document.getElementById('cse-courses').style.display = 'none';
    }

    hideAllCourseSections();

    // Show selected course section
    if (allCoursesButton) {
        allCoursesButton.addEventListener('click', () => {
            hideAllCourseSections();
            document.getElementById('all-courses').style.display = 'block';

            // Limpiar antes de insertar
            allCoursesSection.innerHTML = "";

            // Display all courses
            courses.forEach(course => {
                allCoursesSection.appendChild(createCourseCard(course));
            });
            totalAllSpan.textContent = courses.length;
        });
    }

    if (wddCoursesButton) {
        wddCoursesButton.addEventListener('click', () => {
            hideAllCourseSections();
            document.getElementById('wdd-courses').style.display = 'block';

            // Limpiar antes de insertar
            wddCoursesSection.innerHTML = "";

            // Display WDD courses
            const wddCourses = courses.filter(course => course.subject === 'WDD');
            wddCourses.forEach(course => {
                wddCoursesSection.appendChild(createCourseCard(course));
            });
            totalWddSpan.textContent = wddCourses.length;
        });
    }

    if (cseCoursesButton) {
        cseCoursesButton.addEventListener('click', () => {
            hideAllCourseSections();
            document.getElementById('cse-courses').style.display = 'block';

            // Limpiar antes de insertar
            cseCoursesSection.innerHTML = "";

            // Display CSE courses
            const cseCourses = courses.filter(course => course.subject === 'CSE');
            cseCourses.forEach(course => {
                cseCoursesSection.appendChild(createCourseCard(course));
            });
            totalCseSpan.textContent = cseCourses.length;
        });
    }

});
