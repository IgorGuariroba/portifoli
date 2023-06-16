import {FaBriefcase, FaCode, FaGraduationCap} from "react-icons/fa";
import {FiExternalLink, FiFileText, FiUser} from "react-icons/fi";
import {differenceInYears, parseISO} from "date-fns";
import Theme1 from '/assets/purple.png';
import Theme2 from '/assets/red.png';
import Theme3 from '/assets/blueviolet.png';
import Theme4 from '/assets/blue.png';
import Theme5 from '/assets/goldenrod.png';
import Theme6 from '/assets/magenta.png';
import Theme7 from '/assets/yellowgreen.png';
import Theme8 from '/assets/orange.png';
import Theme9 from '/assets/green.png';
import Theme10 from '/assets/yellow.png';

const Work0 = 'https://user-images.githubusercontent.com/32397288/183467598-38f16b0e-e6af-431a-86b1-aaf6c9712ce5.PNG';
const date = parseISO('1996-06-05T00:00:00.000Z');
const years = differenceInYears(new Date(), date);
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
        description: years,
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
        id: 0,
        img: Work0,
        title: 'Time',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project : ',
                desc: 'To-do List',
                link: 'https://github.com/IgorGuariroba/time',
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
                desc: 'Next.js',
                link: 'https://nextjs.org/',
            },
            {
                icon: <FiExternalLink/>,
                title: 'Link : ',
                desc: 'Time',
                link: 'https://igorguariroba.github.io/time/',
            },
        ],
    },
    {
        id: 1,
        img: 'https://user-images.githubusercontent.com/104109951/209418651-0189c6d3-fa67-421e-b5c0-7fbf64d29151.png',
        title: 'Bateria',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project : ',
                desc: 'Bateria',
                link: 'https://github.com/IgorGuariroba/alura-midi',
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
                desc: 'JavaScript',
                link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
            },
            {
                icon: <FiExternalLink/>,
                title: 'Link : ',
                desc: 'Bateria',
                link: 'https://igorguariroba.github.io/alura-midi/',
            },
        ],
    },
    {
        id: 2,
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
    },
    {
        id: 3,
        img: 'https://s3-alpha.figma.com/hub/file/3581505649/5a839d3a-a09d-40e2-95bc-20abb4128045-cover.png',
        title: 'Agenda',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project : ',
                desc: 'To-do List',
                link: 'https://github.com/IgorGuariroba/coffe-delivery',
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
                desc: 'Next.js',
                link: 'https://nextjs.org/',
            },
            {
                icon: <FiExternalLink/>,
                title: 'Link : ',
                desc: 'toDoList',
                link: 'https://coffe-delivery-blue.vercel.app/',
            },
        ],
    },
    {
        id: 4,
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
                link: 'https://igorguariroba.github.io/site-viagem/index.html',
            },
        ],
    },
    {
        id: 5,
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
        id: 6,
        img: Work3,
        title: 'Negociações',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project : ',
                desc: 'Negociações',
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
                desc: 'Negociações',
                link: 'https://igorguariroba.github.io/controle-de-negociacoes/',
            },
        ],
    },
    {
        id: 7,
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

export const themes = [
    {
        id: 1,
        img: Theme1,
        color: 'hsl(252, 35%, 51%)',
    },

    {
        id: 2,
        img: Theme2,
        color: 'hsl(4, 93%, 54%)',
    },

    {
        id: 3,
        img: Theme3,
        color: 'hsl(271, 76%, 53%)',
    },

    {
        id: 4,
        img: Theme4,
        color: 'hsl(225, 73%, 57%)',
    },

    {
        id: 5,
        img: Theme5,
        color: 'hsl(43, 74%, 49%)',
    },

    {
        id: 6,
        img: Theme6,
        color: 'hsl(339, 81%, 66%)',
    },

    {
        id: 7,
        img: Theme7,
        color: 'hsl(80, 61%, 50%)',
    },

    {
        id: 8,
        img: Theme8,
        color: 'hsl(19, 96%, 52%)',
    },

    {
        id: 9,
        img: Theme9,
        color: 'hsl(88, 65%, 43%)',
    },

    {
        id: 10,
        img: Theme10,
        color: 'hsl(42, 100%, 50%)',
    },
];