import "./Contact.css"

export default function Contact() {
    return (
        <div className="contact-page">
            <h1>Contact Me</h1>

            <p>You can reach me at:</p>

            <a href="https://www.linkedin.com/in/derek-feng-0b1912301/" className="contact-link">
                LinkedIn
            </a>

            <p style={{ marginTop: "1rem" }}>
                Or visit my GitHub:
            </p>

            <a href="https://github.com/crankyjoke" className="contact-link">
                GitHub
            </a>
            <p>
                LeetCode account:
            </p>
            <a href="https://leetcode.com/u/114514_1919810/" className="" >
                LeetCode
            </a>
        </div>
    );
}
