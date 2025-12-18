import "./index.css";

export default function App() {
    return (
        <div className="no-scroll-page">
            <div className="terminal">
                <div className="terminal-header">
                    <span className="terminal-dot" />
                    <span className="terminal-dot" />
                    <span className="terminal-dot" />
                    <span className="terminal-title">
            user@crankyjoke: ~/portfolio
          </span>
                </div>

                <p className="line">
                    <span className="prompt">➜</span> whoami
                </p>
                <p className="line output">Student developer / web enjoyer</p>

                <p className="line" style={{ marginTop: "1rem" }}>
                    <span className="prompt">➜</span> cat about.txt
                </p>
                <p className="line output">
                    Hi, I&apos;m Derek, Computer Engineering student at University of Waterloo.
                </p>

                <p className="line" style={{ marginTop: "1rem" }}>
                    <span className="prompt">➜</span> ls projects
                </p>
                <p className="line output">portfolio/ game/ tools/ experiments/</p>

                <p className="line" style={{ marginTop: "1rem" }}>
                    <span className="prompt">➜</span> _<span className="cursor" />
                </p>
            </div>
        </div>
    );
}
