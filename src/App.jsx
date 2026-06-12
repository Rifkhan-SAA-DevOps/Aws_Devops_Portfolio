import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Server,
  GitBranch,
  ShieldCheck,
  Award,
  ExternalLink,
  Mail,
  CheckCircle2,
  Terminal,
  Database,
  Layers,
  Rocket,
  Globe2,
  Sparkles,
  Code2,
  Cpu,
  Network,
  ArrowRight,
} from "lucide-react";

const skills = [
  "AWS EC2",
  "S3",
  "RDS MySQL",
  "Lambda",
  "API Gateway",
  "Route 53",
  "ACM",
  "IAM",
  "ALB",
  "SSM",
  "Auto Scaling",
  "Docker",
  "Amazon ECR",
  "GitHub Actions",
  "CI/CD",
  "Terraform",
  "Linux",
  "Nginx",
  "React.js",
  "Node.js",
  "Express.js",
  "MySQL",
  "DynamoDB",
];

const projects = [
  {
    title: "Production-Style AWS 3-Tier Full-Stack Application",
    category: "AWS Cloud Architecture",
    icon: <Layers className="h-6 w-6" />,
    gradient: "from-sky-500 via-cyan-400 to-emerald-400",
    description:
      "Designed and deployed a production-style 3-tier full-stack application using Route 53, ACM, public ALB, frontend Auto Scaling Group, internal ALB, backend Auto Scaling Group, private subnets, and Amazon RDS MySQL.",
    highlights: [
      "HTTPS domain routing with Route 53 and ACM",
      "Public ALB for frontend traffic distribution",
      "Internal ALB for secure backend routing",
      "Frontend and backend Auto Scaling Groups",
      "RDS MySQL database in secured network layer",
    ],

    stack: [
      "EC2",
      "ALB",
      "ASG",
      "RDS",
      "Route 53",
      "ACM",
      "GitHub Actions",
      "CI/CD",
    ],
    github: "https://github.com/Rifkhan-SAA-DevOps/Blog_3Tier_Arch_AWS",
  },
  {
    title: "Dockerized Full-Stack App with ECR and GitHub Actions CI/CD",
    category: "DevOps Automation",
    icon: <GitBranch className="h-6 w-6" />,
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    description:
      "Containerized a React + Node.js + MySQL application and automated build, push, and deployment workflows using Docker, Amazon ECR, EC2, and GitHub Actions.",
    highlights: [
      "Dockerized frontend and backend services",
      "Used Docker Compose for local development",
      "Built and pushed images to Amazon ECR",
      "Automated deployment with GitHub Actions",
      "Connected backend containers with Amazon RDS",
    ],

    stack: [
      "EC2",
      "ALB",
      "ASG",
      "Docker",
      "ECR",
      "GitHub Actions",

      "RDS",
      "CI/CD",
    ],
    github:
      "https://github.com/Rifkhan-SAA-DevOps/dockerized-ecommerce-aws-devops/tree/main",
  },
  {
    title: "Serverless Full-Stack Deployment on AWS & With Docker",
    category: "Serverless Architecture",
    icon: <Cloud className="h-6 w-6" />,
    gradient: "from-orange-400 via-amber-400 to-yellow-300",
    description:
      "Built  serverless deployment models using S3 static hosting, API Gateway, Lambda backend functions & Lambda Docker Container backend functions , IAM least-privilege roles, Parameter Store, and DynamoDB.",
    highlights: [
      "React frontend hosted on Amazon S3",
      "Backend APIs served through API Gateway and Lambda",
      "Used IAM roles instead of IAM users where possible",
      "Stored configuration using Parameter Store",
      "Connected Lambda functions with DynamoDB",
    ],

    stack: [
      "S3",
      "Cloudfront",
      "Lambda",
      "API Gateway",
      "IAM",
      "Parameter Store",
      "DynamoDB",
      "GitHub Actions",
      "CI/CD",
    ],
    github:
      "https://github.com/Rifkhan-SAA-DevOps/serverless-AWS-3-tier-architecture",
  },
  {
    title: "Terraform AWS Infrastructure Automation",
    category: "Infrastructure as Code",
    icon: <Terminal className="h-6 w-6" />,
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    description:
      "Practiced infrastructure automation using Terraform to provision AWS resources and move from manual console setup to repeatable Infrastructure as Code workflows.",
    highlights: [
      "Configured AWS provider and variables",
      "Worked with Terraform plan and apply workflow",
      "Practiced EC2, VPC, security group, and IAM setup",
      "Built foundation for automated cloud infrastructure",
    ],

    stack: [
      "AWS",
      "Terraform",
      "VPC",
      "EC2",
      "ALB",
      "ASG",
      "Security Groups",
      "IAM",
      "GitHub Actions",
      "CI/CD",
      "S3",
    ],
    github:
      "https://github.com/Rifkhan-SAA-DevOps/aws-3tier-docker-devops-terraform-cicd",
  },
];

const stats = [
  {
    label: "AWS Certification",
    value: "SAA",
    icon: <Award className="h-5 w-5" />,
  },
  {
    label: "Cloud Projects",
    value: "10+",
    icon: <Cloud className="h-5 w-5" />,
  },
  {
    label: "Deployment Models",
    value: "10+",
    icon: <Rocket className="h-5 w-5" />,
  },
  {
    label: "Focus",
    value: "Cloud + DevOps",
    icon: <Cpu className="h-5 w-5" />,
  },
];

const certificates = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "May 06, 2026",
    description:
      "Validated knowledge of designing secure, scalable, highly available, and cost-optimized architectures on AWS.",
    skills: [
      "AWS Architecture",
      "VPC",
      "High Availability",
      "AWS EC2",
      "S3",
      "RDS MySQL",
      "Lambda",
      "API Gateway",
      "Route 53",
      "ACM",
      "IAM",
      "ALB",
      "SSM",
      "Auto Scaling",
      "Amazon ECR",
      "MySQL",
      "DynamoDB",
      "...",
    ],
    images: [],
    link: "https://www.credly.com/badges/57dc8219-e439-40b8-a28a-eb9d12b74808",
  },
];

const experience = [
  {
    role: "MERN Stack Developer",
    company: "SCITGlobal, Qatar",
    type: "Part-Time Remote",
    period: "Dec 2023 - Present",
    points: [
      "Developing and maintaining full-stack application features using React.js, Node.js, Express.js, and MongoDB.",
      "Building reusable UI components, backend APIs, and database-driven application features.",
      "Applying Git and GitHub for version control and remote collaboration.",
    ],
  },
  {
    role: "MERN Stack Developer",
    company: "Prodigit, India",
    type: "Full-Time Remote",
    period: "Dec 2022 - Dec 2023",
    points: [
      "Built responsive frontend pages and connected them with backend REST APIs.",
      "Implemented authentication features, and application logic.",
      "Debugged full-stack issues and improved application stability.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200 shadow-lg shadow-cyan-500/10 backdrop-blur">
        <Sparkles className="h-4 w-4 text-amber-300" /> {eyebrow}
      </p>
      <h2 className="bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-3xl font-black tracking-tight text-transparent md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

function Badge({ children }) {
  return (
    <motion.span
      whileHover={{ y: -3, scale: 1.04 }}
      className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-100 shadow-sm backdrop-blur transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
    >
      {children}
    </motion.span>
  );
}

export default function PortfolioWebsite() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070b18] text-slate-100">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.24),transparent_32%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.22),transparent_30%),radial-gradient(circle_at_bottom,rgba(245,158,11,0.16),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-10 top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -70, 0], y: [0, 60, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl"
        />
      </div>

      <header className="fixed left-0 right-0 top-0 z-[999] border-b border-white/10 bg-[#070b18]/85 shadow-lg shadow-black/20 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="h-12 w-12 overflow-hidden rounded-2xl border border-cyan-300/40 bg-white/10 shadow-lg shadow-cyan-500/20">
              <img
                src="/profile.jpeg"
                alt="Mohammed Rifkhan"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-black leading-none text-white">
                Mohammed Rifkhan
              </p>
              <p className="text-xs text-slate-400">AWS Cloud & DevOps</p>
            </div>
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#projects" className="transition hover:text-cyan-300">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-cyan-300">
              Skills
            </a>
            <a href="#certificates" className="transition hover:text-cyan-300">
              Certificates
            </a>
            <a href="#experience" className="transition hover:text-cyan-300">
              Experience
            </a>
            <a
              href="#contact"
              className="rounded-full bg-white/10 px-4 py-2 transition hover:bg-cyan-300 hover:text-slate-950"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-32 md:grid-cols-[1.15fr_0.85fr] md:pb-28 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 shadow-lg shadow-cyan-500/10 backdrop-blur"
          >
            <Award className="h-4 w-4 text-amber-300" /> AWS Certified Solutions
            Architect Associate
          </motion.div>

          <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            Building secure, scalable, and automated
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent">
              AWS cloud deployments.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Junior Cloud & DevOps Engineer with hands-on projects in AWS 3-tier
            architecture, Dockerized deployments, GitHub Actions CI/CD,
            serverless architecture, and Terraform infrastructure automation.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 px-6 py-4 font-black text-white shadow-xl shadow-blue-500/25 transition hover:shadow-cyan-400/30"
            >
              View Cloud Projects <ArrowRight className="h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:rifkhanmuhammed17@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur transition hover:border-amber-300/60 hover:bg-amber-300/10 hover:text-amber-100"
            >
              Contact Me <Mail className="h-5 w-5" />
            </motion.a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Badge>AWS</Badge>
            <Badge>Docker</Badge>
            <Badge>CI/CD</Badge>
            <Badge>Terraform</Badge>
            <Badge>Linux</Badge>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-300 opacity-60 blur-xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/75 p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Architecture Focus</p>
                  <h3 className="text-2xl font-black text-white">
                    AWS Production Deployment
                  </h3>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-emerald-300 to-cyan-400 p-3 text-slate-950">
                  <Server className="h-8 w-8" />
                </div>
              </div>

              <div className="space-y-4">
                {[
                  ["Route 53 + ACM + HTTPS", "from-cyan-400 to-blue-500"],
                  [
                    "Public ALB + Frontend ASG",
                    "from-violet-400 to-fuchsia-500",
                  ],
                  ["Nginx Reverse Proxy", "from-emerald-400 to-teal-500"],
                  [
                    "Internal ALB + Backend ASG",
                    "from-orange-400 to-amber-400",
                  ],
                  ["Private RDS MySQL Database", "from-blue-400 to-indigo-500"],
                  [
                    "Docker + ECR + GitHub Actions CI/CD",
                    "from-pink-400 to-rose-500",
                  ],
                ].map(([item, color]) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <span
                      className={`h-3 w-3 rounded-full bg-gradient-to-r ${color} shadow-lg`}
                    />
                    <span className="text-slate-200">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-2 px-3 pb-10 sm:grid-cols-2 lg:grid-cols-4 ">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-white/10 bg-white/10 p-6 text-center shadow-xl shadow-black/20 backdrop-blur transition hover:border-cyan-300/40"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-500 text-white">
              {stat.icon}
            </div>
            <p className="text-3xl font-black text-white">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Projects"
          title="Production-Ready AWS & DevOps Projects"
          subtitle="Hands-on cloud deployments demonstrating AWS architecture, containerization, CI/CD automation, serverless implementation, and infrastructure as code."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-xl shadow-black/20 backdrop-blur transition hover:border-white/25"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.gradient}`}
              />
              <div
                className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${project.gradient} opacity-20 blur-2xl transition group-hover:opacity-35`}
              />

              <div className="relative mb-5 flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}
                >
                  {project.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-cyan-200">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-black text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="relative leading-7 text-slate-300">
                {project.description}
              </p>

              <ul className="relative mt-5 space-y-3">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="relative mt-6 flex flex-wrap gap-3">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-black text-white transition hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-cyan-100"
                >
                  GitHub Repo <ExternalLink className="h-4 w-4" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="border-y border-white/10 bg-white/[0.04] px-6 py-20 backdrop-blur"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Technical Skills"
            title="AWS, DevOps, and Full-Stack toolset"
            subtitle="A practical skill set focused on deploying, securing, scaling, and automating web applications in the cloud."
          />

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.02 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="rounded-2xl border border-white/10 bg-slate-950/50 px-5 py-3 text-sm font-semibold text-slate-200 shadow-sm transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="mx-auto max-w-5xl px-6 py-20">
        <SectionTitle
          eyebrow="Certifications"
          title="Verified cloud knowledge backed by hands-on AWS projects"
          subtitle="My certification validates cloud architecture knowledge, and my projects show how I apply that knowledge in real deployment scenarios."
        />

        <div className="grid gap-6 md:grid-cols-1">
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-xl shadow-black/20 backdrop-blur transition hover:border-amber-300/40"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-300 via-orange-400 to-pink-500" />
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-400/20 blur-3xl" />

              <div className="relative mb-5 flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/20">
                  <Award className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-amber-200">
                    {certificate.issuer}
                  </p>
                  <h3 className="mt-1 text-2xl font-black text-white">
                    {certificate.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    {certificate.date}
                  </p>
                </div>
              </div>

              <p className="relative leading-7 text-slate-300">
                {certificate.description}
              </p>

              <div className="relative mt-5 flex flex-wrap gap-2">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
                className="relative mt-6 inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-300 to-orange-500 px-5 py-3 text-sm font-black text-slate-950 shadow-lg shadow-amber-500/20 transition hover:shadow-amber-400/30"
              >
                View Certificate <ExternalLink className="h-4 w-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Experience"
          title="Full-stack foundation with cloud deployment focus"
          subtitle="My development background helps me understand application architecture deeply before deploying it into AWS."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {experience.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-xl shadow-black/20 backdrop-blur transition hover:border-violet-300/40"
            >
              <p className="text-sm font-semibold text-violet-200">
                {item.period}
              </p>
              <h3 className="mt-2 text-2xl font-black text-white">
                {item.role}
              </h3>
              <p className="mt-1 text-slate-400">
                {item.company} · {item.type}
              </p>
              <ul className="mt-5 space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-slate-300">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-violet-300" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <ShieldCheck className="h-8 w-8" />,
              title: "Secure Architecture",
              text: "Experience with IAM, security groups, private subnets, HTTPS, and least-privilege access patterns.",
              color: "from-emerald-300 to-cyan-400",
            },
            {
              icon: <Database className="h-8 w-8" />,
              title: "Database Deployment",
              text: "Hands-on connection of backend services with Amazon RDS MySQL and application environment configuration.",
              color: "from-blue-300 to-violet-500",
            },
            {
              icon: <Globe2 className="h-8 w-8" />,
              title: "Production Mindset",
              text: "Focused on high availability, scalability, domain routing, SSL, CI/CD automation, and real-world deployment workflows.",
              color: "from-orange-300 to-pink-500",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-xl shadow-black/20 backdrop-blur transition hover:border-white/25"
            >
              <div
                className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${item.color} p-3 text-slate-950`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-8 text-center shadow-2xl shadow-black/30 backdrop-blur-xl md:p-12"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-violet-400 to-amber-300" />
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Open to Opportunities
            </p>
            <h2 className="bg-gradient-to-r from-white via-cyan-100 to-amber-100 bg-clip-text text-3xl font-black text-transparent md:text-5xl">
              Looking for Cloud, DevOps, or AWS roles
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              I am actively seeking opportunities where I can design, deploy,
              automate, and support cloud infrastructure using AWS and DevOps
              tools.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <motion.a
                whileHover={{ y: -3, scale: 1.03 }}
                href="mailto:smartrifkhan@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 px-6 py-4 font-black text-white shadow-lg shadow-blue-500/20 hover:shadow-cyan-400/30"
              >
                <Mail className="h-5 w-5" /> Email Me
              </motion.a>
              <motion.a
                whileHover={{ y: -3, scale: 1.03 }}
                href="https://github.com/Rifkhan-SAA-DevOps"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-6 py-4 font-bold text-white transition hover:border-violet-300/50 hover:bg-violet-300/10"
              >
                <ExternalLink className="h-5 w-5" /> GitHub
              </motion.a>
              <motion.a
                whileHover={{ y: -3, scale: 1.03 }}
                href="https://www.linkedin.com/in/mohrifkhan"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-6 py-4 font-bold text-white transition hover:border-amber-300/50 hover:bg-amber-300/10"
              >
                <ExternalLink className="h-5 w-5" /> LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ y: -3, scale: 1.03 }}
                href="https://www.fiverr.com/s/WE5DppX"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-6 py-4 font-bold text-white transition hover:border-amber-300/50 hover:bg-amber-300/10"
              >
                <ExternalLink className="h-5 w-5" /> Fiverr
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} Mohammed Rifkhan. Built and deployed on
          AWS.
        </p>
      </footer>
    </main>
  );
}
