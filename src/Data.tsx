import {FaBriefcase, FaCode, FaGraduationCap} from "react-icons/fa";
import {FiExternalLink, FiFileText, FiUser} from "react-icons/fi";

const Work1 = 'https://media.licdn.com/dms/image/C4D22AQHHPUsAP3xBQA/feedshare-shrink_800/0/1664493053918?e=1689206400&v=beta&t=CPfY75PSIcAnbAodu_P6wNlpUD7Nu7VnyFhrWryT_y4';
const Work2 = 'https://github.com/RafaelGoulartB/proffy/blob/master/.github/web-landing.png?raw=true';
const Work3 = 'https://camo.githubusercontent.com/0b1f46813c44f5e6f87be2b65ccfb72c4cc9952d92338139668d123815605189/68747470733a2f2f692e696d6775722e636f6d2f5338384b7352692e676966';
const Work4 = 'https://tavanoblog.com.br/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Ftavanoblog%2Fc9f2760f-5fc0-4b64-af29-b3ed8f5cad4b_Card%2B3D%2B%25282%2529.jpg%3Fauto%3Dcompress%2Cformat&w=1920&q=75';
export const personalInfo = [
    {
        id: 1,
        title: "First Name",
        description: "Igor",
    },
    {
        id: 2,
        title: "Last Name",
        description: "Guariroba",
    },
    {
        id: 3,
        title: "Age",
        description: "1996-06-05T00:00:00.000Z",
    },
    {
        id: 4,
        title: "Nationality",
        description: "Brazilian",
    },
    {
        id: 5,
        title: "Freelance",
        description: "Available",
    },
    {
        id: 6,
        title: "Address",
        description: "Mogi Das Cruzes, SP",
    },
    {
        id: 7,
        title: "Phone",
        description: "(11) 97214-4771",
    },
    {
        id: 8,
        title: "Email",
        description: "contact@igorguariroba.com.br",
    },
    {
        id: 9,
        title: "Github",
        description: "https://github.com/igorguariroba",
    },
    {
        id: 10,
        title: "Languages",
        description: "English, Portuguese",
    },
];

export const stats = [
    {
        id: 1,
        no: "4+",
        title: "Years of <br /> Experience",
    },
    {
        id: 2,
        no: "12+",
        title: "Completed <br /> Projects",
    },
    {
        id: 3,
        no: "21+",
        title: "Happy <br /> Customers",
    },
    {
        id: 4,
        no: "53+",
        title: "Awards <br /> Won",
    }
];

export const skills = [
    {
        id: 1,
        title: 'Html',
        percentage: 98,
    },
    {
        id: 2,
        title: 'Javascript',
        percentage: 89,
    },
    {
        id: 3,
        title: 'Css',
        percentage: 78,
    },
    {
        id: 4,
        title: 'React',
        percentage: 59,
    },
    {
        id: 5,
        title: 'PHP',
        percentage: 89,
    },
    {
        id: 6,
        title: 'Jquery',
        percentage: 85,
    },
    {
        id: 7,
        title: 'Docker',
        percentage: 78,
    },
    {
        id: 8,
        title: 'Git',
        percentage: 91,
    },
];

export const resulme = [
    {
        id: 1,
        category: 'experience',
        icon: <FaBriefcase/>,
        years: '2019 - Present',
        title: 'Developer <span> Movida Seminovos </span>',
        desc: 'Como Desenvolvedor Web na Movida Seminovos, sou responsável por projetar, construir e manter ' +
            'o nosso site e aplicações web, garantindo uma experiência de usuário intuitiva e responsiva. Trabalho ' +
            'ativamente tanto no front-end quanto no back-end dos nossos sistemas, usando linguagens como HTML, ' +
            'CSS e JavaScript no front-end, e PHP no back-end.',
    },
    {
        id: 2,
        category: 'education',
        icon: <FaGraduationCap/>,
        years: '2019 - 2020',
        title: 'Technologist in Systems Analysis and Development <span>UMC</span>',
        desc: 'Higher education',
    },

];

export const portfolio = [
    {
        id: 1,
        img: Work1,
        title: 'To-do List',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project : ',
                desc: 'To-do List',
                link: 'https://github.com/IgorGuariroba/toDoList',
            },
            {
                icon: <FiUser/>,
                title: 'author : ',
                desc: 'Igor Guariroba',
                link: 'https://github.com/IgorGuariroba',
            },
            {
                icon: <FaCode/>,
                title: 'Code : ',
                desc: 'React Typescript',
                link: 'https://www.typescriptlang.org/pt/docs/handbook/react.html',
            },
            {
                icon: <FiExternalLink/>,
                title: 'Link : ',
                desc: 'toDoList',
                link: 'https://igorguariroba.github.io/toDoList/',
            },
        ],
    }, {
        id: 2,
        img: Work2,
        title: 'Proffy',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project : ',
                desc: 'Proffy',
                link: 'https://github.com/IgorGuariroba/proffy',
            },
            {
                icon: <FiUser/>,
                title: 'Author : ',
                desc: 'Igor Guariroba',
                link: 'https://github.com/IgorGuariroba',
            },
            {
                icon: <FaCode/>,
                title: 'Code : ',
                desc: 'React Typescript',
                link: 'https://www.typescriptlang.org/pt/docs/handbook/react.html',
            },
            {
                icon: <FiExternalLink/>,
                title: 'Link : ',
                desc: 'Proffy',
                link: 'https://igorguariroba.github.io/proffy/',
            },
        ],
    }, {
        id: 3,
        img: Work3,
        title: 'Controle de Negociações',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project : ',
                desc: 'Controle de Negociações',
                link: 'https://github.com/IgorGuariroba/controle-de-negociacoes',
            },
            {
                icon: <FiUser/>,
                title: 'Author : ',
                desc: 'Igor Guariroba',
                link: 'https://github.com/IgorGuariroba',
            },
            {
                icon: <FaCode/>,
                title: 'Code : ',
                desc: 'JavaScript',
                link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
            },
            {
                icon: <FiExternalLink/>,
                title: 'Link : ',
                desc: 'Controle de Negociações',
                link: 'https://igorguariroba.github.io/controle-de-negociacoes/',
            },
        ],
    },
    {
        id: 4,
        img: Work4,
        title: 'TabNews',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project : ',
                desc: 'TabNews',
                link: 'https://github.com/IgorGuariroba/clone-tabnews',
            },
            {
                icon: <FiUser/>,
                title: 'Author : ',
                desc: 'Igor Guariroba',
                link: 'https://github.com/IgorGuariroba',
            },
            {
                icon: <FaCode/>,
                title: 'Code : ',
                desc: 'Next.js',
                link: 'https://nextjs.org/',
            },
            {
                icon: <FiExternalLink/>,
                title: 'Link : ',
                desc: 'TabNews',
                link: 'https://clone-tabnews-ten-sage.vercel.app/',
            },
        ],
    },

];