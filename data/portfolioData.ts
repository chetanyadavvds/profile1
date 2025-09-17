
import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Chetan Yadav",
    title: "Senior Oracle & Cloud DBA | Remote DBA Specialist | LinkedIn Top Voice",
    email: "chetanyadavvds@gmail.com",
    phone: "+91-7024418775",
    linkedin: "https://linkedin.com/in/chetanyadavvds",
  },
  professionalSummary: "Results-driven and certified Senior Database Administrator with over 14 years of experience architecting, optimizing, and ensuring high availability for mission-critical applications. Proven expertise in Oracle, PostgreSQL, MySQL, and NoSQL databases, with extensive hands-on experience in on-prem to cloud migrations (AWS, Azure, OCI). Demonstrated excellence in performance tuning, DR planning, and automation. Adept at leading complex projects and collaborating with cross-functional teams (SRE, QA, SDK, Product) to deliver scalable, reliable, and cost-effective solutions in fast-paced enterprise environments.",
  skills: [
    {
      name: "Databases",
      skills: ["Oracle (11g-19c)", "PostgreSQL", "MySQL", "SQL Server", "NoSQL", "Cosmos DB", "MongoDB", "Aurora", "Cassandra"],
    },
    {
      name: "Cloud Platforms (AWS)",
      skills: ["RDS", "Aurora", "EC2", "S3", "CloudWatch", "Route53", "IAM", "GuardDuty", "DMS", "VPC", "Transit Gateway", "Direct Connect"],
    },
    {
      name: "Cloud Platforms (Azure)",
      skills: ["Azure SQL", "PostgreSQL Flexible Server", "Blob Storage", "Data Factory", "ADF", "Azure Monitor", "Key Vault", "Azure DevOps", "ExpressRoute"],
    },
    {
      name: "High Availability & DR",
      skills: ["Oracle RAC", "Data Guard", "GoldenGate", "MAA", "Patroni", "repmgr", "Multi-AZ Clustering", "Azure Site Recovery", "RTO/RPO Planning"],
    },
    {
      name: "DevOps & IaC",
      skills: ["Terraform", "Ansible", "Git", "GitLab", "Jenkins", "CloudFormation", "ARM Templates", "Docker"],
    },
    {
      name: "Automation & Scripting",
      skills: ["Python", "Bash", "PowerShell", "SQL"],
    },
    {
      name: "Monitoring & Observability",
      skills: ["Splunk", "SignalFx", "Grafana", "VividCortex", "CloudWatch", "OEM", "Azure Monitor", "ELK", "Prometheus"],
    },
    {
        name: "Security",
        skills: ["WAF", "Guardrails", "Vulnerability Mgmt", "CIS Benchmarks", "IAM", "RBAC", "Backup Encryption", "ISO27001"],
    }
  ],
  experience: [
    {
      title: "Sr. Consultant | Shutterfly (via Manuh Technology)",
      company: "Remote",
      period: "May 2024 – Present",
      description: [
        "Led administration of PostgreSQL, MySQL, and Oracle databases, ensuring HA and scalability.",
        "Engineered scalable AWS Aurora & RDS solutions with HA/DR, improving reliability to 99.99%.",
        "Migrated 10TB+ PostgreSQL/Oracle DBs to AWS RDS/Aurora with zero downtime via automated pipelines.",
        "Improved query performance by 20% and optimized storage, achieving a 15% cost reduction.",
        "Enhanced observability with Splunk, SignalFx, and CloudWatch, reducing MTTR by 25%.",
        "Mentored junior DBAs, providing technical guidance and contributing to their professional development.",
      ],
    },
    {
      title: "Manager | Capgemini",
      company: "Remote",
      period: "Jul 2023 – Oct 2023",
      description: [
        "Directed 20+ database engineering projects, upgrading Oracle 11g/12c → 19c across VLDBs (500GB-10TB).",
        "Coordinated with engineering, product, and QA stakeholders to align database strategy with business goals.",
        "Conducted performance tuning and resource planning for projected 20% user growth.",
        "Oversaw migration of legacy Oracle DBs to Azure PostgreSQL with DMS.",
      ],
    },
    {
      title: "Senior DBA | Wipro (via Nityo InfoTech)",
      company: "Remote",
      period: "Nov 2022 – Jul 2023",
      description: [
        "Migrated production PostgreSQL clusters from on-prem to AWS RDS with encryption and failover policies.",
        "Supported critical workloads in a HIPAA-aligned pharmaceutical environment.",
        "Implemented audit logging, IAM policies, and guardrails for cloud data compliance.",
        "Designed performance tuning strategy that reduced incident volume by 35%.",
      ],
    },
    {
      title: "Senior Oracle DBA | HCL (via Lensoft Pvt. Ltd.)",
      company: "Remote",
      period: "Oct 2021 – Nov 2022",
      description: [
        "Implemented Oracle RAC and Data Guard clusters for high availability across hybrid deployments.",
        "Led 5+ database migrations (cross-platform, non-PDB to PDB) using Data Pump, GoldenGate, and Data Guard.",
        "Managed Oracle Maximum Availability Architecture (MAA) ensuring 99.99% uptime.",
        "Assisted in AWS Direct Connect and Azure ExpressRoute provisioning for secure interconnectivity.",
      ],
    },
    {
      title: "Team Lead | Clover Infotech",
      company: "Remote",
      period: "Sep 2021 – Oct 2021",
      description: [
          "Designed backup, archiving, and HA for critical SQL Server and Oracle DB workloads.",
          "Created runbooks and operational guides aligned with ITIL-based change management."
      ]
    },
    {
      title: "Sr. Consultant | Tenet Technologies Pvt Ltd",
      company: "Bhopal",
      period: "Apr 2015 – Aug 2021",
      description: [
          "Designed and led multi-year platform modernization from on-prem to cloud (Azure/AWS).",
          "Delivered cloud POCs using Azure ARM Templates and Terraform modules.",
          "Led DR drills simulating regional outages, achieving <10 min RTO.",
          "Upgraded 50+ DB environments including patching, clustering, and security hardening.",
      ]
    },
    {
      title: "Technical Analyst | Oracle India Pvt. Ltd.",
      company: "Bangalore/Noida",
      period: "Jul 2012 – Mar 2015",
      description: [
          "Resolved performance and failover issues for enterprise cloud clients across EMEA.",
          "Implemented PowerShell and shell automation for Oracle patching and rollback.",
          "Participated in migration of on-prem systems to Oracle Cloud Infrastructure."
      ]
    },
    {
      title: "Oracle DBA/PeopleSoft | SOAIT Solutions",
      company: "Bangalore",
      period: "May 2010 – Jun 2012",
      description: [
          "Delivered secure, scalable DB infrastructure supporting enterprise business apps.",
          "Created SOPs and system recovery documentation during initial cloud transitions."
      ]
    }
  ],
  certifications: [
    { name: "Oracle Certified Professional (OCP)", issuer: "Oracle" },
    { name: "Oracle Certified Associate (OCA)", issuer: "Oracle" },
    { name: "Oracle Certified Expert - SQL", issuer: "Oracle" },
    { name: "OCI Architect Associate", issuer: "Oracle Cloud" },
    { name: "OCI Cloud DB Migration Specialist", issuer: "Oracle Cloud" },
    { name: "OCI AI & Foundations Certified Associate", issuer: "Oracle Cloud" },
    { name: "Oracle Autonomous Database Cloud Specialist", issuer: "Oracle Cloud" },
    { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services" },
    { name: "Microsoft Certified Azure Administrator Associate", issuer: "Microsoft" },
  ],
  education: {
      degree: "Bachelor of Engineering, Computer Science",
      institution: "RGPV University, Bhopal",
      year: "2007"
  }
};
