import Image from 'next/image';

function Skills() {
    return (
        <div className="flex flex-col items-center">
            <div className="text-4xl mb-8 font-semibold">
                My Skills
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 size-lg">
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <Image src="/react.png" alt="React Logo" width={70} height={90} />
                    <span className="mt-2 text-lg font-medium text-gray-700">React</span>
                </div>
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <Image src="/node.png" alt="Node.js Logo" width={50} height={50} />
                    <span className="mt-2 text-lg font-medium text-gray-700">Node.js</span>
                </div>
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <Image src="/Express.png" alt="Express.js Logo" width={50} height={20} />
                    <span className="mt-2 text-lg font-medium text-gray-700">Express.js</span>
                </div>
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <Image src="/MongoDB.png" alt="MongoDB Logo" width={50} height={50} />
                    <span className="mt-2 text-lg font-medium text-gray-700">MongoDB</span>
                </div>
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <Image src="/Nextjs.png" alt="Next.js Logo" width={50} height={50} />
                    <span className="mt-2 text-lg font-medium text-gray-700">Next.js</span>
                </div>
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <Image src="/Tailwind.png" alt="Tailwind CSS Logo" width={40} height={30} />
                    <span className="mt-2 text-lg font-medium text-gray-700">Tailwind CSS</span>
                </div>
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <Image src="/github-white2.png" alt="GitHub Logo" width={50} height={50} />
                    <span className="mt-2 text-lg font-medium text-gray-700">GitHub</span>
                </div>
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <Image src="/mysql-logo.png" alt="MySQL Logo" width={50} height={50} />
                    <span className="mt-2 text-lg font-medium text-gray-700">MySQL</span>
                </div>
                <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <Image src="/c.png" alt="C Logo" width={50} height={50} />
                    <span className="mt-2 text-lg font-medium text-gray-700">C</span>
                </div>
            </div>
        </div>
    );
}

export default Skills;
