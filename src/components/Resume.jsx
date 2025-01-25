import { useXP } from "../XPContext";  // Import the XP context

export default function ResumeSection() {
  const { earnXP } = useXP();  // Get the earnXP function from the XP context

  const handleDownload = () => {
    earnXP(100);  // Earn 50 XP when the download button is clicked
    window.open("https://drive.google.com/uc?export=download&id=12SRVrhX85TxNWqrSXovMA2KBquIygb0c", "_blank");
  };

  const handleView = () => {
    earnXP(50);  // Earn 25 XP when the view button is clicked
    window.open("https://drive.google.com/file/d/12SRVrhX85TxNWqrSXovMA2KBquIygb0c/view?usp=sharing", "_blank");
  };

  return (
    <section id="resume" className="py-20 bg-white" style={{ paddingTop: "1rem" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 animate__animated animate__fadeIn">
            Resume
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden" style={{paddingTop: "0rem"}}>
            {/* Resume Preview */}
            <div className="bg-neutral-50 rounded-lg p-6 mb-8">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-neutral-900">Professional Resume</h3>
                  <p className="text-sm text-neutral-600 mt-1">Updated Recently</p>
                </div>
              </div>
            </div>

            {/* View and Download Section */}
            <div id="resume-download" className="text-center">
              <div className="mb-6">
                <button
                  onClick={handleView}
                  className="group relative inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative">
                    View Resume
                    <span className="ml-2 inline-block group-hover:animate-bounce">📄</span>
                  </span>
                </button>
              </div>

              <div className="mb-6">
                <button
                  onClick={handleDownload}
                  className="group relative inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative">
                    Download Resume
                    <span className="ml-2 inline-block group-hover:animate-bounce">📥</span>
                  </span>
                </button>
              </div>

              <div className="mt-4 flex justify-center space-x-4">
                <span className="text-sm px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full">PDF Format</span>
                <span className="text-sm px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full">1 Pages</span>
                <span className="text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-full">+100 XP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
