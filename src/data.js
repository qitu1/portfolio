export const content = {
    zh: {
      name: "冯瑞琦",
      firstName: "瑞琦",
      lastName: "冯",
      title: "SOFTWARE ENGINEER / AI RESEARCH",
      tagline: "AI算法&工程 智能系统构建",
      bio: "致力于算法模型与工程落地的深度融合，热衷于用技术解决真实场景中的复杂问题。追求严谨的架构设计与极致的工程实现，打造高效、智能且极具价值的数字化产品。",
      nav: [
        { name: "教育背景", id: "education" },
        { name: "实习经历", id: "experience" },
        { name: "核心项目", id: "projects" },
        { name: "技术栈", id: "stack" }
      ],
      contact: "联系我",
      resume: "获取简历",
      resumeUrl: "/files/冯瑞琦.pdf",
      sections: {
        edu: "教育背景",
        exp: "实习经历",
        pro: "核心项目",
        skill: "技术栈"
      },
      education: [
        {
          school: "新加坡国立大学 (NUS)",
          sub: "School of Computing | NGNE 项目",
          date: "2025.08 - 2026.05",
          details: ["修读课程：计算机视觉、数据挖掘与DL/ML、软件工程、图形学、网络安全"]
        },
        {
          school: "华中科技大学 (HUST)",
          sub: "计算机科学与技术 | 本科 | 工学学士",
          date: "2022.09 - 2026.06",
          details: ["GPA: 86.04/100 (4.08/5.0)", "核心课程：数据结构、算法、操作系统、计算机网络、数据库原理、编译原理"]
        }
      ],
      experience: [
        {
          company: "HGTECH (华工科技)",
          role: "AI 算法实习生",
          date: "2025.06 - 2025.08",
          image: "/images/rag.jpeg",
          desc: "基于 RAG 技术的智能问诊系统。利用 LangChain + ChromaDB 处理医学教材，引入 CrossEncoder 重排序，提升检索准确率。",
          fullDesc: [
            "负责构建基于医疗垂直领域的 RAG (Retrieval-Augmented Generation) 问答系统，旨在辅助医生快速检索复杂病例。",
            "设计并实现了从 PDF 能够解析到结构化向量数据库的完整 ETL 流程，提取1000+条结构化数据。",
            "引入 BGE-M3 模型作为 Embedding 层，并使用 Cross-Encoder 进行搜索结果的重排序 (Re-ranking)，将检索 Top-5 准确率从 65% 提升至 86%。",
          ]
        }
      ],
      projects: [
        {
          title: "PeerPrep 协同编程平台",
          tags: ["Next.js", "TypeScript", "Redis", "RabbitMQ", "Microservices"],
          image: "/images/peerprep.png",
          desc: "高性能分布式双人协同编程平台。基于 CRDT 解决冲突，开发多语言代码执行服务，支撑高并发场景。",
          github: "https://github.com/CS3219-AY2526Sem1/cs3219-ay2526s1-project-g26",
          fullDesc: [
            "这是一个专为程序员面试准备的实时协作编程平台，支持多人同时编辑同一份代码，类似 Google Docs，并提供代码编译测评功能。",
            "核心挑战在于分布式的状态同步。我采用了 Y.js (CRDT 算法) 来解决并发冲突，确保了最终一致性，无需中心化锁。",
            "后端分为匹配服务 (Matching Service) 和协作服务 (Collaboration Service) 微服务，通过 RabbitMQ 进行解耦。",
            "利用 Redis Pub/Sub 实现了轻量级的房间状态管理，支持超过 1000+ 并发连接。"
          ]
        },
        {
          title: "验证码 (CAPTCHA) 识别系统",
          tags: ["PyTorch", "OpenCV", "CNN", "Autoencoder"],
          image: "/images/captcha.png",
          desc: "CNN 模型与数据增强方案，在 36 类字符集上实现 88.33% 识别准确率。",
          github: "https://github.com/qitu1/Captcha-Recognition-System",
          fullDesc: [
            "这是一个基于 CNN 的验证码识别系统，采用先分割后分类 (Segmentation-based Classification) 的策略。",
            "在数据处理阶段，利用连通分量分析 (Connected Component Analysis) 与形态学操作实现字符的自动分割与标准化 (32x32 RGB)。",
            "模型优化采用了两阶段训练策略：首先使用 Autoencoder 进行无监督预训练以学习鲁棒的特征表示，随后进行监督微调 (Fine-tuning)。",
            "引入了余弦退火学习率 (Cosine Annealing) 和数据增强技术，将单字符识别准确率从 84% 提升至 88.33%。"
          ]
        },
        {
          title: "SmartChef 智能菜谱推荐",
          tags: ["Vue.js", "Python", "LLM", "Scikit-learn"],
          image: "/images/smartchef.jpg",
          desc: "数据驱动的智能烹饪推荐模型。利用聚类算法并集成大语言模型生成创意菜谱。",
          fullDesc: [
            "构建了一个基于数据挖掘与生成式 AI 的个性化菜谱推荐系统，旨在解决“冰箱剩余食材如何处理”的难题。",
            "后端使用 TF-IDF 算法提取食材文本特征，并结合 DBSCAN 密度聚类算法分析用户的历史饮食偏好。",
            "集成大语言模型 (LLM) 能力，能够根据聚类推荐的关键词生成从未见过的创意食谱（包含详细步骤与营养分析）。",
            "前端采用 Vue.js 构建，设计了直观的卡片式交互界面与用户口味可视化图表。"
          ]
        }
      ],
      techStack: [
        { name: "Python", icon: "https://cdn.simpleicons.org/python" },
        { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch" },
        { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow" },
        { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus" },
        { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain" },
        { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
        { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes" },
        { name: "Redis", icon: "https://cdn.simpleicons.org/redis" },
        { name: "RabbitMQ", icon: "https://cdn.simpleicons.org/rabbitmq" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" }
      ]
    },
    en: {
      name: "Ruiqi Feng",
      firstName: "Ruiqi",
      lastName: "Feng",
      title: "SOFTWARE ENGINEER / AI RESEARCH",
      tagline: "AI Algorithm & Engineering",
      bio: "Dedicated to the integration of AI models and engineering implementation. Passionate about solving real-world problems with technology to build efficient and intelligent digital products.",
      nav: [
        { name: "Education", id: "education" },
        { name: "Experience", id: "experience" },
        { name: "Projects", id: "projects" },
        { name: "Stack", id: "stack" }
      ],
      contact: "Contact",
      resume: "Download CV",
      resumeUrl: "/files/CV.pdf",
      sections: {
        edu: "Education",
        exp: "Experience",
        pro: "Projects",
        skill: "Stack"
      },
      education: [
        {
          school: "National University of Singapore",
          sub: "School of Computing | NGNE",
          date: "AUG 2025 - PRESENT",
          details: ["Courses: Computer Vision, Data Mining & DL/ML, Software Engineering, Graphics, Network Security"]
        },
        {
          school: "Huazhong Univ. of Science & Tech",
          sub: "B.Eng. in Computer Science",
          date: "SEP 2022 - JUN 2026",
          details: ["GPA: 86.04/100 (4.08/5.0)", "Core Courses: Data Structures, Algorithms, Operating Systems, Computer Networks, Database Principles, Compiler Principles"]
        }
      ],
      experience: [
        {
          company: "HGTECH",
          role: "AI Algorithm Intern",
          date: "JUN 2025 - AUG 2025",
          image: "/images/rag.jpeg",
          desc: "Built a RAG-based clinical system using LangChain and CrossEncoder re-ranking.",
          fullDesc: [
            "Responsible for building a RAG (Retrieval-Augmented Generation) QA system for the medical vertical domain.",
            "Designed and implemented full ETL pipelines from unstructured PDFs to structured vector databases, processing over 500 medical textbooks.",
            "Introduced BGE-M3 model for embedding and Cross-Encoder for re-ranking, improving Top-5 retrieval accuracy from 65% to 88%.",
            "Developed a Streamlit-based visualization system for internal team testing and evaluation."
          ]
        }
      ],
      projects: [
        {
          title: "PeerPrep Platform",
          tags: ["Next.js", "TypeScript", "Redis", "RabbitMQ", "Microservices"],
          image: "/images/peerprep.png",
          desc: "Distributed collaborative editor using CRDT with <200ms latency.",
          github: "https://github.com/CS3219-AY2526Sem1/cs3219-ay2526s1-project-g26",
          fullDesc: [
            "A real-time collaborative coding platform for technical interview preparation, similar to Google Docs.",
            "Solved concurrency conflicts using Y.js (CRDT algorithm) to ensure eventual consistency without centralized locking.",
            "Backend architecture split into Matching Service and Collaboration Service, decoupled via RabbitMQ.",
            "Utilized Redis Pub/Sub for lightweight room state management, supporting 1000+ concurrent connections."
          ]
        },
        {
          title: "CAPTCHA Recognition",
          tags: ["PyTorch", "OpenCV", "CNN", "Autoencoder"],
          image: "/images/captcha.png",
          desc: "Two-stage recognition model achieving 88.33% accuracy.",
          github: "https://github.com/qitu1/Captcha-Recognition-System",
          fullDesc: [
            "Developed a Convolutional Neural Network (CNN) based CAPTCHA recognition system using a segmentation-first approach.",
            "Implemented connected component analysis and morphological operations to automatically segment and normalize characters to 32x32 RGB images.",
            "Adopted a two-stage training strategy: Unsupervised pre-training with an Autoencoder for robust feature extraction, followed by supervised fine-tuning.",
            "Achieved 88.33% character accuracy by integrating Cosine Annealing learning rate scheduling and extensive data augmentation."
          ]
        },
        {
          title: "SmartChef Engine",
          tags: ["Vue.js", "Python", "LLM", "Scikit-learn"],
          image: "/images/smartchef.jpg",
          desc: "Recipe engine via clustering and LLM integration.",
          fullDesc: [
            "Built a personalized recipe recommendation system combining data mining techniques with Generative AI to solve the 'leftover ingredients' problem.",
            "Utilized TF-IDF for text feature extraction and DBSCAN density clustering to analyze user dietary history and preferences.",
            "Integrated Large Language Models (LLM) to generate creative, never-before-seen recipes (including steps and nutrition info) based on clustered keywords.",
            "Developed a responsive frontend using Vue.js, featuring interactive cards and visualized taste profile charts."
          ]
        }
      ],
      techStack: [
        { name: "Python", icon: "https://cdn.simpleicons.org/python" },
        { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch" },
        { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow" },
        { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus" },
        { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain" },
        { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
        { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes" },
        { name: "Redis", icon: "https://cdn.simpleicons.org/redis" },
        { name: "RabbitMQ", icon: "https://cdn.simpleicons.org/rabbitmq" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" }
      ]
    }
  };
