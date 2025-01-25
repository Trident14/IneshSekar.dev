import { useXP } from "../XPContext";  // Import the XP context

const Achievements = () => {
  const { earnXP } = useXP();  // Get the earnXP function from the XP context

  const handleAchievementClick = (xpAmount) => {
    earnXP(xpAmount);  // Earn XP when achievement is clicked
   
  };

  return (
    <section id="achievements" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 animate__animated animate__fadeIn">
            Achievements
            <span className="inline-block ml-2 px-3 py-1 text-sm bg-yellow-100 text-yellow-600 rounded-full">Trophy Room</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Master Developer */}
          <div className="achievement-card h-[14rem]" onClick={() => handleAchievementClick(50, 'Master Developer')}>
            <div className="bg-white p-4 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <span className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full">+50 XP</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Master Developer</h3>
              <p className="text-sm text-neutral-600 mb-4">Completed 10 major projects</p>
              <div className="w-full bg-neutral-100 rounded-full h-2">
                <div className="bg-green-500 h-full rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>

          {/* Game Dev Wizard */}
          <div className="achievement-card h-[14rem]" onClick={() => handleAchievementClick(50, 'Game Dev Wizard')}>
            <div className="bg-white p-4 rounded-xl shadow-lg transform transition-all duration-300 filter grayscale h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎮</span>
                </div>
                <span className="px-3 py-1 text-sm bg-purple-100 text-purple-600 rounded-full">+50 XP</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Game Dev Wizard</h3>
              <p className="text-sm text-neutral-600 mb-4">Published first game</p>
              <div className="w-full bg-neutral-100 rounded-full h-2">
                <div className="bg-purple-500 h-full rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>

          {/* API Maestro */}
          <div className="achievement-card h-[14rem]" onClick={() => handleAchievementClick(20, 'API Maestro')}>
            <div className="bg-white p-4 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
                <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-600 rounded-full">+20 XP</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">API Maestro</h3>
              <p className="text-sm text-neutral-600 mb-4">Optimized API performance</p>
              <div className="w-full bg-neutral-100 rounded-full h-2">
                <div className="bg-yellow-500 h-full rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>

          {/* ICPC Regionalist */}
          <div className="achievement-card h-[14rem]" onClick={() => handleAchievementClick(100, 'ICPC Regionalist')}>
            <div className="bg-white p-4 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏅</span>
                </div>
                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">+100 XP</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">ICPC Regionalist</h3>
              <p className="text-sm text-neutral-600 mb-4">Competed in ACM ICPC Regional, Amritapuri 2020</p>
              <div className="w-full bg-neutral-100 rounded-full h-2">
                <div className="bg-blue-500 h-full rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
