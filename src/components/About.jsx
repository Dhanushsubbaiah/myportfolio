import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative z-10 px-4 py-16 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-extrabold mb-6 text-blue-400">About</h3>
        <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300 mb-8">
          I’m Dhanush — a software developer passionate about creating seamless user experiences and intelligent systems.
          My expertise spans full‑stack development, AI/ML experimentation, and blockchain DApp engineering.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur p-6">
            <h4 className="font-semibold mb-3">What I Do</h4>
            <ul className="list-disc list-inside text-sm text-neutral-700 dark:text-neutral-300 space-y-1">
              <li>Design performant React & Next.js interfaces with Framer Motion animations.</li>
              <li>Develop and deploy blockchain‑based DApps using Solidity, Hardhat, and Ethers.js.</li>
              <li>Build intelligent applications with AI models (PyTorch, GANs, OpenAI).</li>
              <li>Architect secure APIs with JWT‑based authentication and cloud integration (Azure, AWS).</li>
            </ul>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
              At ReplyQuick.AI, I collaborate on integrating OpenAI, Twilio, and Google APIs to automate lead workflows.
              Previously, I deployed cloud solutions on Azure during my Microsoft internship.
            </p>
          </div>

          <div className="rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur p-6">
            <h4 className="font-semibold mb-3">Skills</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold mb-1">Frontend</p>
                <div className="flex flex-wrap gap-2">
                  {['React.js','Next.js','Tailwind CSS','Framer Motion','TypeScript'].map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-100">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold mb-1">Backend</p>
                <div className="flex flex-wrap gap-2">
                  {['Node.js','Express.js','REST APIs','Prisma','PostgreSQL','MongoDB'].map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-100">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold mb-1">Blockchain</p>
                <div className="flex flex-wrap gap-2">
                  {['Solidity','Hardhat','Ethers.js','Chainlink','MetaMask'].map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-100">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold mb-1">AI/ML</p>
                <div className="flex flex-wrap gap-2">
                  {['Python','PyTorch','GANs (DCGAN & StyleGAN)'].map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-100">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold mb-1">Cloud & DevOps</p>
                <div className="flex flex-wrap gap-2">
                  {['Microsoft Azure','AWS','GCP','JWT','RBAC','Docker','Git'].map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-100">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
