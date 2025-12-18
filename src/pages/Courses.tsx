import "./Course.css"
import {useState} from "react";


type CourseProps = {
    course_name: string;
    course_code: string;
    description: string;
};

function CoursesBox({ course_name, course_code, description }: CourseProps) {
    return (
        <div className="course-box">
            <h3>{course_name}</h3>
            <p>{course_code}</p>
            <p>{description}</p>
        </div>
    );
}

type TermProps = {
    term: string;
    course_array: Array<CourseProps>;
};

function TermBox({ term, course_array }: TermProps) {
    const [open, setOpen] = useState(true); // start opened

    return (
        <div className="term-box">
            <button
                className="term-title-bar"
                onClick={() => setOpen((prev) => !prev)}
            >
                <span>{term}</span>
                <span className={`term-arrow ${open ? "open" : ""}`}>▾</span>
            </button>

            {open && (
                <div className="term-content">
                    {course_array.map((course) => (
                        <CoursesBox
                            key={course.course_code}
                            course_name={course.course_name}
                            course_code={course.course_code}
                            description={course.description}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Course() {
    const fall2024Courses: CourseProps[] = [
        {
            course_name: "Classical Mechanics",
            course_code: "ECE105",
            description: "Classical Mechanics",
        },
        {
            course_name: "Fundamentals of Programming",
            course_code: "ECE150",
            description: "Fundamentals of Programming",
        },
        {
            course_name: "Engineering Profession and Practice",
            course_code: "ECE190",
            description: "Engineering Profession and Practice",
        },
        {
            course_name: "Project Studio",
            course_code: "ECE198",
            description: "Project Studio",
        },
        {
            course_name: "Communication in the Engineering Profession",
            course_code: "ENGL192",
            description: "Communication in the Engineering Profession",
        },
        {
            course_name: "Linear Algebra for Engineering",
            course_code: "MATH115",
            description: "Linear Algebra for Engineering",
        },
        {
            course_name: "Calculus 1 for Engineering",
            course_code: "MATH117",
            description: "Calculus 1 for Engineering",
        },
    ];
    const winter2025Courses: CourseProps[] = [
        {
            course_name: "Introduction to Optimization",
            course_code: "CO250",
            description: "Introduction to Optimization",
        },
    ];
    const spring2025Courses: CourseProps[] = [
        {
            course_name: "Electricity and Magnetism",
            course_code: "ECE106",
            description: "Electricity and Magnetism",
        },
        {
            course_name: "Discrete Mathematics and Logic 1",
            course_code: "ECE108",
            description: "Discrete Mathematics and Logic 1",
        },
        {
            course_name: "Digital Circuits and Systems",
            course_code: "ECE124",
            description: "Digital Circuits and Systems",
        },
        {
            course_name: "Linear Circuits",
            course_code: "ECE140",
            description: "Linear Circuits",
        },
        {
            course_name: "Engineering Economics and Impact on Society",
            course_code: "ECE192",
            description: "Engineering Economics and Impact on Society",
        },
        {
            course_name: "Calculus 2 for Engineering",
            course_code: "MATH119",
            description: "Calculus 2 for Engineering",
        },
        {
            course_name: "Linear Algebra 2 for Honours Mathematics",
            course_code: "MATH235",
            description: "Linear Algebra 2 for Honours Mathematics",
        },
    ];
    const fall2025Courses: CourseProps[] = [

        {
            course_name: "Introduction to Combinatorics (Advanced Level)",
            course_code: "MATH249",
            description: "Introduction to Combinatorics (Advanced Level)",
        },
        {
            course_name: "Groups and Rings",
            course_code: "PMATH347",
            description: "Groups and Rings",
        },

    ];
    const winter2026Courses: CourseProps[] = [
        {
            course_name: "Coding Theory",
            course_code: "CO331",
            description: "Coding Theory",
        },
        {
            course_name: "Materials Chemistry for Engineers",
            course_code: "ECE109",
            description: "Materials Chemistry for Engineers",
        },
        {
            course_name: "Numerical Methods",
            course_code: "ECE204",
            description: "Numerical Methods",
        },
        {
            course_name: "Advanced Calculus 1 for Electrical and Computer Engineers",
            course_code: "ECE205",
            description: "Advanced Calculus 1 for Electrical and Computer Engineers",
        },
        {
            course_name: "Digital Computers",
            course_code: "ECE222",
            description: "Digital Computers",
        },
        {
            course_name: "Electronic Circuits 1",
            course_code: "ECE240",
            description: "Electronic Circuits 1",
        },
        {
            course_name: "Algorithms and Data Structures",
            course_code: "ECE250",
            description: "Algorithms and Data Structures",
        },
    ];
    return (
        <div className="course-page">
            <h1>Courses</h1>

            <TermBox term="Fall 2024" course_array={fall2024Courses} />
            <TermBox term="Winter 2025" course_array={winter2025Courses} />
            <TermBox term="Spring 2025" course_array={spring2025Courses} />
            <TermBox term="Fall 2025" course_array={fall2025Courses} />
            <TermBox term="Winter 2026" course_array={winter2026Courses}/>

        </div>
    );
}

