import Image from 'next/image';
import Link from 'next/link';

function HeroSection() {
    return (
        <div className="h-auto md:h-[70rem] w-full flex items-center justify-center flex-col relative overflow-hidden mx-auto py-20">
            <div className="p-8 relative z-10 w-full max-w-4xl mx-auto text-center">
                
                <div className="mb-10"> {/* Margin bottom for spacing */}
                    <img 
                        src="/image-mine.jpg" 
                        alt="Profile Picture" 
                        className="w-full max-w-sm h-auto rounded-full border-4 border-gray-300 shadow-lg mx-auto" 
                    /> {/* Centered image with rounded styling */}
                </div>

                <div className="text-4xl font-bold mb-4 md:mb-10"> {/* Margin bottom for spacing */}
                    Hello, I am <span className="text-yellow-400">Shubham</span> <br />
                    <span className="text-3xl">
                        A <span className="text-red-500">MERN</span> Stack Developer and a <span className="text-green-500">C++ Programmer</span>
                    </span>
                </div>
                
                <div className="text-2xl mb-8"> {/* Margin bottom for spacing */}
                    Learning and Agile
                </div>

                {/* Logos */}
                <div className="flex justify-center gap-4">
                    <Link href="https://leetcode.com/u/sibbu_69/" className="p-2">
                        <Image
                            src="/LeetCode_Logo_1.png"
                            alt="LeetCode Logo"
                            width={50}
                            height={70}
                            className="cursor-pointer"
                        />
                    </Link>

                    <Link href="https://github.com/shubham-1020" className="p-2">
                        <Image
                            src="/github-white2.png"
                            alt="GitHub Logo"
                            width={50}
                            height={70}
                            className="cursor-pointer"
                        />
                    </Link>

                    <Link href="https://www.linkedin.com/in/shubham-a6086720b/" className="p-2">
                        <Image
                            src="/linkedin.png"
                            alt="LinkedIn Logo"
                            width={50}
                            height={70}
                            className="cursor-pointer"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
