
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { ProfileImageSection } from "@/components/profile-image-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white overflow-hidden relative selection:bg-purple-500/30 transition-colors duration-300">
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-300/30 dark:bg-purple-900/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-300/30 dark:bg-blue-900/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <main className="container mx-auto px-6 py-12 md:py-20 flex flex-col gap-12 relative z-10">

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left space-y-4 order-2 md:order-1">
            <div className="space-y-2">
              <h2 className="text-sm font-medium tracking-wider text-purple-400 uppercase">Senior ML Engineer</h2>
              <h1 className="text-4xl md:text-6xl font-bold tracking-normal pb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-white dark:to-white/60">Prashanth Duggirala</h1>
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mx-auto md:mx-0">
              AI Engineer with 5+ years of experience building production AI systems across media intelligence and recruiting automation domains. Specialized in designing multi-agent architectures with LLM-powered orchestration, tool development, and evaluation frameworks. Deep expertise also spans core ML; data curation, model training, and deploying scalable inference pipelines in cross-functional environments.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              {/* Email Button */}
              <a href="mailto:preddy21196@gmail.com" className="px-4 py-3 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors backdrop-blur-md active:scale-95 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              
              {/* LinkedIn Button */}
              <a href="https://www.linkedin.com/in/prashred/" target="_blank" rel="noopener noreferrer" className="px-4 py-3 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors backdrop-blur-md active:scale-95 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              {/* GitHub Button */}
              <a href="https://github.com/itsreddy" target="_blank" rel="noopener noreferrer" className="px-4 py-3 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors backdrop-blur-md active:scale-95 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* Divider */}
              <div className="w-px h-8 bg-black/10 dark:bg-white/10 hidden md:block" />

              {/* View Projects Button */}
              <Link href="/projects" className="px-6 py-3 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors backdrop-blur-md active:scale-95 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                View Projects
              </Link>

              {/* Download Resume Button */}
              <a href="/prashanth-resume.pdf" download className="px-6 py-3 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors backdrop-blur-md active:scale-95 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>
            </div>
          </div>

          {/* Image Section */}
          {/* Image Section */}
          <ProfileImageSection />
        </div>

        {/* Skills Section */}
        <section className="space-y-5">
          <h3 className="text-2xl font-bold border-l-4 border-blue-500 pl-4">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-5">
              <h4 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-300">Machine Learning & AI</h4>
              <div className="flex flex-wrap gap-2">
                {["LangChain", "Langgraph", "Deepagents", "DSPy", "LLM", "VLM", "ViT", "MLFlow", "PyTorch", "HuggingFace", "Pandas", "Numpy", "Copilot", "OpenAI", "Bedrock"].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-200 text-sm border border-blue-200 dark:border-blue-500/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-6">
              <h4 className="text-lg font-semibold mb-4 text-green-600 dark:text-green-300">Web & DevOps</h4>
              <div className="flex flex-wrap gap-2">
                {["React", "JavaScript", "CSS", "OAuth", "Streamlit", "Appsmith", "Git", "Docker", "Kubernetes", "AWS", "GitLab CICD", "EC2", "OpenSearch", "EKS"].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-200 text-sm border border-green-200 dark:border-green-500/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-5">
          <h3 className="text-2xl font-bold border-l-4 border-purple-500 pl-4">Experience</h3>
          <div className="grid gap-4">
            {/* Meltwater */}
            <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-6 hover:bg-black/10 dark:hover:bg-white/[0.07] transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <a href="https://www.meltwater.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group/company">
                    <img src="https://www.google.com/s2/favicons?domain=meltwater.com&sz=64" alt="Meltwater" className="w-9 h-9 rounded-lg object-contain bg-white p-0.5" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover/company:underline">Meltwater</h4>
                      <p className="text-purple-600 dark:text-purple-400">AI Engineer III</p>
                    </div>
                  </a>
                </div>
                <span className="text-sm text-gray-500 font-mono mt-2 md:mt-0">Dec 2025 - Present</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 dark:text-gray-400">
                <li><strong>Architected and implemented a multi-agent routing system</strong> for Meltwater&apos;s AI-powered media intelligence chatbot, designing an LLM-driven agent router on LangGraph that dynamically dispatches queries across specialized sub-agents (content tracking, brand analytics, news summarization) — enabling multi-turn conversational workflows with phase-gated execution, async tool calling, and stateful conversation management, achieving 97% routing accuracy.</li>
                <li><strong>Developed domain-specific AI agent tools</strong> (media monitoring, journalist discovery, press release impact analysis, coverage reporting) exposed via Model Context Protocol (MCP) on a LangChain ReAct architecture — reducing average query resolution time by 50% across Meltwater&apos;s media intelligence platform.</li>
                <li><strong>Extended a custom LLM evaluation framework</strong> (DeepEval, DSPy, LangSmith) with unit and end-to-end evals covering citation accuracy, routing correctness, and adversarial test cases — achieving &gt;90% eval coverage. Delivered platform-wide backend improvements to the FastAPI chatapi including intent classification and robust error handling with Prometheus and Grafana monitoring, cutting targeted error-type rates by 80%.</li>
              </ul>
            </div>

            {/* Leoforce */}
            <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-6 hover:bg-black/10 dark:hover:bg-white/[0.07] transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <a href="https://www.leoforce.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group/company">
                    <img src="https://www.google.com/s2/favicons?domain=leoforce.com&sz=64" alt="Leoforce" className="w-9 h-9 rounded-lg object-contain bg-white p-0.5" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover/company:underline">Leoforce Inc.</h4>
                      <p className="text-purple-600 dark:text-purple-400">Senior Data Scientist</p>
                    </div>
                  </a>
                </div>
                <span className="text-sm text-gray-500 font-mono mt-2 md:mt-0">Jun 2021 - Dec 2025</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 dark:text-gray-400">
                <li><strong>Architected IRA, a chat-based AI recruiting agent</strong> powered by LLMs, hybrid search (dense + sparse retrieval), and intelligent agent workflows with RAG-based dynamic few-shot selection — automating job matching, resume screening, and real-time candidate engagement at scale, achieving a 75% automation rate and reducing manual screening time by 50%.</li>
                <li><strong>Engineered an end-to-end NLP pipeline</strong> combining custom parsers, domain-adapted BERT for NER, and LLM-based data augmentation to extract structured insights from 500K+ daily unstructured documents — achieving 90% parsing accuracy and 92% F1-score. Built scalable inference pipelines on Docker/Kubernetes (EKS) with MLflow tracking and real-time Grafana dashboards for proactive model monitoring.</li>
              </ul>
            </div>

            {/* UC Davis */}
            <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-8 hover:bg-black/10 dark:hover:bg-white/[0.07] transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <a href="https://www.ucdavis.edu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group/company">
                    <img src="https://www.google.com/s2/favicons?domain=ucdavis.edu&sz=64" alt="UC Davis" className="w-9 h-9 rounded-lg object-contain bg-white p-0.5" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover/company:underline">University of California, Davis</h4>
                      <p className="text-purple-600 dark:text-purple-400">Graduate ML Researcher</p>
                    </div>
                  </a>
                </div>
                <span className="text-sm text-gray-500 font-mono mt-2 md:mt-0">Oct 2019 - Mar 2021</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 dark:text-gray-400">
                <li>Developed deep stacked autoencoder networks with progressive training techniques for unified representation learning from multimodal health data, achieving 82% classification accuracy.</li>
                <li>Implemented end-to-end framework using PyTorch to process heterogeneous health data modalities (clinical records, imaging, sensor data), creating unified embeddings for downstream diagnostic tasks.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects & Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Projects */}
          <section className="space-y-5">
            <h3 className="text-2xl font-bold border-l-4 border-pink-500 pl-4">Key Projects</h3>
            <div className="space-y-6">
              <div className="group">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">Text-Prompted Image Segmentation</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  Developed a lightweight, text-conditioned segmentation model (CLIPSeg) for drywall quality assurance. Achieved 0.55 mIoU and 0.94 Pixel Accuracy for zero-shot defect detection.
                </p>
              </div>
              <div className="group">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">Eye Image Synthesis & Gaze Estimation</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  Built DCGANs for synthetic eye image generation, improving gaze estimation accuracy by 35%. Created a generative pipeline supporting multiple gaze directions.
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="space-y-5">
            <h3 className="text-2xl font-bold border-l-4 border-yellow-500 pl-4">Education</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">M.S. Computer Science</h4>
                <p className="text-yellow-600 dark:text-yellow-500/80">University of California, Davis</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">Sep 2021 • GPA 3.96</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">B.Tech Computer Engineering</h4>
                <p className="text-yellow-600 dark:text-yellow-500/80">IIITDM Kancheepuram</p>
                <p className="text-gray-500 text-sm">Jul 2019 • GPA 8.92</p>
              </div>
            </div>
          </section>

        </div>

        {/* Publications */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold border-l-4 border-teal-500 pl-4">Publications</h3>
          <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-6 hover:bg-black/10 dark:hover:bg-white/[0.07] transition-colors">
            <p className="text-gray-700 dark:text-gray-300 italic">"Predicting ASD diagnosis in children with synthetic and image-based eye gaze data"</p>
            <p className="text-gray-500 text-sm mt-2">Signal Processing: Image Communication, Volume 94, 2021</p>
            <a href="https://doi.org/10.1016/j.image.2021.116198" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 text-sm mt-2 inline-block hover:underline">View Publication</a>
          </div>
        </section>

      </main>
    </div>
  );
}
