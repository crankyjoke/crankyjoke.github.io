import "./Project.css"
type ProjectProps = {
    projectName: string;
    projectLink: string;
    projectDescription: string;
}

function ProjectBox({projectName, projectLink, projectDescription}: ProjectProps) {
    return(
        <div className="project-box">
            <h3>{projectName}</h3>

            <a href={projectLink} className="project-link">
                project-link
            </a>

            <p className="project-description">{projectDescription}</p>

        </div>
    );
}

type ProjectSectionProp = {
    project_type: string;
    project_array: Array<ProjectProps>
}

function ProjectSectionBox({ project_type, project_array }: ProjectSectionProp) {
    return (
        <div className="section-box">
            <h3>{project_type}</h3>

            <div className="section-content">
                {project_array.map((project) => (
                    <ProjectBox
                        projectName={project.projectName}
                        projectLink={project.projectLink}
                        projectDescription={project.projectDescription}
                    />
                ))}
            </div>
        </div>
    );
}


export default function Project(){
    const webProject: ProjectProps[] = [
        {
            projectName : "Management system",
            projectDescription: '• Engineered a scalable user and organization management platform supporting dynamic registration, authentication, and access control.\n'+
            '• Built a responsive frontend using React (TypeScript) integrated with a robust Spring Boot backend via secure RESTful APIs.\n'+
            '• Designed and implemented granular role-based access control (RBAC) using JWT authentication with persistent data storage in MySQL.',

            projectLink:"https://github.com/crankyjoke/System_management"
        },
        {
            projectName : "Price Spotter",
            projectDescription:
                '• Built a community-driven platform where users can submit and search item prices.\n' +
                '• Frontend created using Javascript(React), HTML, CSS and Backend implemented with Django.\n' +
                '• Integrated real-time exchange rate data using public APIs.',
            projectLink:"https://github.com/crankyjoke/PriceSpotterBackEnd"
        },
        {
            projectName : "Nebula Edge",
            projectDescription:"• Developed a peer-to-peer WebAssembly function mesh enabling decentralized deployment and execution of Wasm\n" +
                "modules at the edge.\n" +
                "• Implemented service discovery using mDNS and message propagation with libp2p-gossipsub, eliminating the need\n" +
                "for central coordination.\n" +
                "• Built a lightweight agent binary to facilitate seamless edge computing operations.",
            projectLink:"https://github.com/crankyjoke/Nebula-Edge"
        },
    ]
    const toolProject: ProjectProps[] = [
        {
            projectName : "ParaFind",
            projectDescription: "Have you ever needed to look for content in a document or webpage that cannot be found using ctrl F. " +
                "ParaFind is a Chrome extension that uses Gemini AI api, with KMP algorithm to find content on Webpage. All you need is to enter a free tier Gemini AI api key",
            projectLink:""
        },
        {
            projectName: "Fruit Ripeness Detector",
            projectDescription:
                "Designed and implemented an STM32F401RE-based fruit ripeness detection system utilizing a color sensor and NRF wireless module to analyze fruit color and transmit ripeness notifications wirelessly.",
            projectLink: "",
        },

    ]


    return(
        <div className = "project-page">
            <h1>Projects</h1>
            <ProjectSectionBox project_type="Web Project" project_array={webProject}/>
            <ProjectSectionBox project_type="Tools" project_array={toolProject}/>

        </div>
    )
}