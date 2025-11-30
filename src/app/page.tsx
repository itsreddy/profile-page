import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

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

      <main className="container mx-auto px-6 py-20 md:py-32 flex flex-col gap-24 relative z-10">

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="relative shrink-0 group">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-[2px] transition-transform duration-500 group-hover:scale-105">
              <div className="w-full h-full rounded-full bg-white dark:bg-[#111] flex items-center justify-center overflow-hidden relative">
                {/* Placeholder for actual photo if available, using initials for now */}
                <span className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">PD</span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm font-medium tracking-wider text-purple-400 uppercase">Senior Data Scientist</h2>
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-white dark:to-white/60">
                Prashanth Duggirala
              </h1>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              Senior Data Scientist with 5+ years of experience delivering scalable machine learning solutions.
              Proven track record of leading the development of cutting-edge AI systems, including large language models (LLMs) and computer vision applications.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a href="mailto:preddy21196@gmail.com" className="px-8 py-3 rounded-full bg-gray-900 text-white dark:bg-white dark:text-black font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors active:scale-95">
                Contact Me
              </a>
              <a href="https://prashanthduggirala.app" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors backdrop-blur-md active:scale-95">
                Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold border-l-4 border-purple-500 pl-4">Experience</h3>
          <div className="grid gap-8">
            {/* Leoforce */}
            <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-8 hover:bg-black/10 dark:hover:bg-white/[0.07] transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Leoforce Inc.</h4>
                  <p className="text-purple-400">Senior Data Scientist</p>
                </div>
                <span className="text-sm text-gray-500 font-mono mt-2 md:mt-0">Jun 2021 - Present</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 dark:text-gray-400">
                <li>Led initiatives within a global, cross-functional team of 9 engineers to deliver 3 scalable AI-based solutions over 12 months. Defined ML best practices and mentored 5 junior engineers.</li>
                <li>Architected and developed advanced AI agents for a chat-based application (IRA) using LLMs, RAG, and intelligent agent workflows, achieving 75% automation rate and reducing manual screening time by 50%.</li>
                <li>Engineered an end-to-end data pipeline processing 500K+ documents daily using modern NLP techniques. Designed custom parsing software with 90% accuracy and trained domain-adapted BERT architectures for NER achieving 92% F1-score.</li>
                <li>Built scalable ML inference pipelines using Docker and Kubernetes (EKS) for efficient model deployment and management.</li>
                <li>Established a comprehensive MLOps framework using MLflow for experiment tracking, OpenTelemetry for observability, and Grafana/Streamlit for real-time monitoring.</li>
              </ul>
            </div>

            {/* UC Davis */}
            <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-8 hover:bg-black/10 dark:hover:bg-white/[0.07] transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">University of California, Davis</h4>
                  <p className="text-purple-400">Graduate ML Researcher</p>
                </div>
                <span className="text-sm text-gray-500 font-mono mt-2 md:mt-0">Oct 2019 - Mar 2021</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-400">
                <li>Developed deep stacked autoencoder networks with progressive training techniques for unified representation learning from multimodal health data, achieving 82% classification accuracy.</li>
                <li>Implemented end-to-end framework using PyTorch to process heterogeneous health data modalities (clinical records, imaging, sensor data), creating unified embeddings for downstream diagnostic tasks.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold border-l-4 border-blue-500 pl-4">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-6">
              <h4 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-300">Machine Learning & AI</h4>
              <div className="flex flex-wrap gap-2">
                {["LangChain", "Agents SDK", "DSPy", "LLM", "VLM", "ViT", "MLFlow", "PyTorch", "HuggingFace", "Pandas", "Numpy", "Copilot", "OpenAI", "Bedrock"].map((skill) => (
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

        {/* Projects & Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Projects */}
          <section className="space-y-8">
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
          <section className="space-y-8">
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
