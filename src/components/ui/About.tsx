import { color } from "framer-motion";

function About() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 ">
            <div className="text-4xl sm:text-5xl font-bold mb-10 ">About</div>
            <div className="text-base sm:text-lg text-center mt-4 sm:mt-8 max-w-3xl leading-relaxed text-white">
                I am a <span className="font-bold text-blue-400">BTech student</span> specializing in <span className="font-bold text-blue-400">Computer Science and Engineering</span> at <span className="font-bold text-blue-400"><i>MAKAUT University</i></span>. My journey began with a deep dive into <span className="font-bold text-yellow-400">programming fundamentals</span> and <span className="font-bold text-yellow-400">data structures</span>, sparking my passion for <span className="font-bold text-red-400"><i>technology and problem-solving</i></span>.
                <br /><br />
                In my second year, I embraced <span className="font-bold text-green-400">web development</span>, mastering tools like <span className="font-bold text-green-400">HTML, CSS, JavaScript,</span> and modern frameworks such as <span className="font-bold text-green-400">React</span> and <span className="font-bold text-green-400">Node.js</span>. This has empowered me to create <span className="font-bold text-purple-400">dynamic web applications</span>.
                <br /><br />
                My studies also cover <span className="font-bold text-yellow-400">cloud computing</span>, <span className="font-bold text-yellow-400">DBMS</span>, and <span className="font-bold text-yellow-400">networking</span>, giving me a <span className="font-bold text-red-400">well-rounded technical foundation</span>.
                <br /><br />
                Currently, I’m focused on <span className="font-bold text-blue-400">C++</span> for enhancing my <span className="font-bold text-red-400">problem-solving skills</span> and preparing for future challenges.
                <br /><br />
                My curiosity and passion for hands-on learning drive me to create <span className="font-bold text-blue-400">impactful solutions</span>. Let's connect to discuss technology, collaborate, or share insights!
            </div>
        </div>
    )
}
export default About;
