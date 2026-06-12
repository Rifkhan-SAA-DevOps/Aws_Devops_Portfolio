import { Layers } from "lucide-react";
const icons = {
  layers: <Layers className="h-6 w-6" />,
  gitbranch: <GitBranch className="h-6 w-6" />,
  cloud: <Cloud className="h-6 w-6" />,
  terminal: <Terminal className="h-6 w-6" />,
};
export const projects = [
  {
    title: "Production-Style AWS 3-Tier Full-Stack Blog Application",
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
    thumbnail: [],
    images: [],
    stack: ["AWS", "EC2", "ALB", "ASG", "RDS", "Route 53", "ACM", "Nginx"],
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
    thumbnail: [],
    images: [],
    stack: ["Docker", "ECR", "GitHub Actions", "EC2", "RDS", "Linux"],
    github:
      "https://github.com/Rifkhan-SAA-DevOps/dockerized-ecommerce-aws-devops",
  },
  {
    title: "Serverless Full-Stack Deployment on AWS",
    category: "Serverless Architecture",
    icon: <Cloud className="h-6 w-6" />,
    gradient: "from-orange-400 via-amber-400 to-yellow-300",
    description:
      "Built a serverless deployment model using S3 static hosting, API Gateway, Lambda backend functions, IAM least-privilege roles, Parameter Store, and RDS MySQL.",
    highlights: [
      "React frontend hosted on Amazon S3",
      "Backend APIs served through API Gateway and Lambda",
      "Used IAM roles instead of IAM users where possible",
      "Stored configuration using Parameter Store",
      "Connected Lambda functions with RDS MySQL",
    ],
    thumbnail: [],
    images: [],
    stack: ["S3", "Lambda", "API Gateway", "IAM", "Parameter Store", "RDS"],
    github: "https://github.com/Rifkhan-SAA-DevOps/serverless-3tier-artch",
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
    thumbnail: [],
    images: [],
    stack: ["Terraform", "AWS", "VPC", "EC2", "Security Groups", "IAM"],
    github: "https://github.com/Rifkhan-SAA-DevOps/terraform-for-blog-app",
  },
];
