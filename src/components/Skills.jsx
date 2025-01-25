import React from "react";
import gitImg from "../assets/gitImg.png";
import cpp from "../assets/cpp.svg";
import java from "../assets/java.svg";
import api from "../assets/icons8-api-128.png";
import backend from "../assets/icons8-backend-50.png";
import jwt from "../assets/jwt.png";
import fullstack from "../assets/fullstack.png";

const SkillSection = () => {
  return (
    <section id="skills" className="py-20 bg-white" style={{paddingBottom: "1rem" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 animate__animated animate__fadeIn">
            Skill Tree
            <span className="inline-block ml-2 px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full">Level 3 Master</span>
          </h2>
        </div>
        <div className="bg-gray-50 sm:py-32" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-center text-base font-semibold text-indigo-600">
              Techie, Developer
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              Transforming Ideas into Reality through Backend Development and Powerful APIs
            </p>
            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
              

             {/* Software Development Section */}
              <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Software Developer
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  I’m passionate about mastering technologies to build scalable, efficient systems, applications, and games. Currently, I’m focused on expanding my skill set to create high-performance solutions while leveraging Git for seamless collaboration, ensuring continuous growth and effective teamwork. With a strong adaptability and a quick learning ability, I’m always eager to explore new tech stacks and master emerging technologies.
                  </p>
                </div>
                <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl" style={{borderTopLeftRadius: "4cqw", borderTopRightRadius: "4cqw", borderRightWidth: "0.5cqw", borderLeftWidth: "0.5cqw",borderTopWidth: "0.5cqw"}}>
                    <img className="size-full object-cover object-top" src={gitImg} alt="Git collaboration" />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>


              {/* powerfull api Section */}
              <div className="relative max-lg:row-start-1">
                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg max-lg:rounded-t-[2rem]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium text-gray-950 max-lg:text-center">Powerful APIs</p>
                    <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                    Learning to design and build fast, optimized RESTful APIs using Node.js, Express, Java, and C++ to enable seamless communication between frontend and backend systems.
                    </p>
                  </div>
                  <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 sm:px-10">
                    <img
                      className="w-full max-lg:max-w-xs"
                      src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                      alt="Performance"
                    />
                  </div>
                </div>
              </div>

              {/* Fullstack Development Section */}
              <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                <div className="absolute inset-px rounded-lg bg-white"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium text-gray-950 max-lg:text-center">
                     Fullstack Development
                    </p>
                    <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                    Building full-stack web applications using the MERN stack. While I enjoy the full-stack development process, my primary focus is backend development. I am currently learning to design and implement scalable, fast, and reliable backend systems, as well as integrating cloud solutions to ensure seamless communication between frontend and backend systems.
                    </p>
                  </div>
                  <div className="flex flex-1 items-center max-lg:py-6 lg:pb-2">
                    <img
                      className="h-[152px] object-cover"
                      src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                      alt="Backend"
                    />
                  </div>
                </div>
              </div>

              {/* Powerful APIs Section */}
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium text-gray-950 max-lg:text-center">
                    Backend Development
                    </p>
                    <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                    Working with Node.js, Express, Java, and C++ to build secure, efficient, and scalable backend systems. I’m continuously improving my skills to design and develop systems capable of handling growing user demands.
            
                    </p>
                  </div>
                  <div className="relative min-h-[30rem] w-full grow">
                    <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm font-medium text-gray-400">
                          <div className="border-r border-b border-white/20 bg-white/5 px-4 py-2 text-white">
                            server.js
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">Auth.js</div>
                          <div className="border-r border-gray-600/10 px-4 py-2">UserService.js</div>
                        </div>
                      </div>
                      <div className="px-6 pt-6 pb-14 text-green-400 font-mono text-sm whitespace-pre-line leading-relaxed">
                        {`//Express js
                          const express = require('express');
                              const app = express();
                              app.get('/api/data', (req, res) => {
                                res.json({
                                  success: true,
                                  message: "API is working!",
                                  data: { key: "value" } });
                              });
                              app.listen(3000, () => console.log('Server running on port 3000'));

                            //Java
                            @GetMapping("/api/status")
                            public String checkServerStatus() {
                                return "Server is running!";}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Logo Section */}
              <div className="relative lg:col-span-3 w-full">
                <div className="absolute inset-px rounded-lg bg-white"></div>
                <div className="relative p-8 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {[
                      { name: "C++", logo: cpp },
                      { name: "Java", logo: java },
                      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
                      { name: "RESTful APIs", logo: api },
                      { name: "Backend Development", logo: backend },
                      { name: "Fullstack Development", logo: fullstack },
                      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                      { name: "JSON Web Tokens", logo: jwt },
                      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition-all"
                      >
                        <img src={skill.logo} alt={skill.name} className="w-16 h-16 object-contain" />
                        <p className="mt-2 text-sm font-medium text-gray-900">{skill.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
