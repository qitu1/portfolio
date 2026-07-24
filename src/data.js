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
          sub: "计算机学院 | 计算机科学硕士",
          date: "2026.08 - 2027.06",
          details: []
        },
        {
          school: "新加坡国立大学 (NUS)",
          sub: "计算机学院 | 一年交流项目（NGNE）",
          date: "2025.08 - 2026.05",
          details: ["GPA: 4.67/5.0", "修读课程：计算机视觉、数据挖掘与DL/ML、软件工程、图形学、网络安全"]
        },
        {
          school: "华中科技大学 (HUST)",
          sub: "计算机科学与技术 | 本科 | 工学学士",
          date: "2022.09 - 2026.06",
          details: [
            "GPA: 4.08/5.0（86/100）",
            "荣誉奖项：全国大学生英语竞赛一等奖、校级奖学金、获选 2026 年“双一流”建设本科拔尖创新人才培养专项经费资助",
            "核心课程：数据结构、算法、操作系统、计算机网络、数据库原理、编译原理"
          ]
        }
      ],
      experience: [
        {
          company: "长江设计集团信达公司",
          role: "AI Agent 研发实习生",
          date: "2026.06 - 2026.08",
          image: "/images/agent.png",
          desc: "基于 LangGraph 驱动的 DeerFlow 框架构建防汛智能体平台，覆盖监测查询、汛情研判、洪水预警、水库调度与方案决策。",
          fullDesc: [
            "参与构建融合大模型、多 Skill 编排与水雨工情数据服务的防汛智能体平台，支持监测查询、汛情研判、洪水预报预警、水库调度及方案决策。",
            "搭建智能体测评系统，批量执行 10 类业务任务集并回溯 Trace，构建任务达成度、格式合规、规划效率与 Skill 精准度等结果及过程指标；支持 Excel 用例导入、任务筛选、并发运行、断点恢复、评分重算及报告生成。",
            "基于 SkillOpt 开发 DeerFlow 适配层，通过隔离 Gateway 注入候选 SKILL.md，复用测评链路完成任务执行、Trace 与指标回传、Reflection 更新及 Validation Gate，将技能测评通过率提升 10%。",
            "参与主动式防汛预警助手开发，实现自然语言创建预警、定时及周期任务，打通接口取数、规则/LLM 预警识别、记录级幂等、值班人员匹配、未读升级与飞书富媒体推送链路。"
          ]
        },
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
          title: "基于深度学习的产品美学评估",
          tags: ["PyTorch", "ResNet18", "SqueezeNet", "Multimodal"],
          image: "/images/aesthetic.png",
          desc: "融合图像特征与用户属性的个性化产品美学预测系统，在腕表数据集上完成回归建模与多模型对比。",
          github: "https://github.com/qitu1/CP3106",
          fullDesc: [
            "面向电商产品设计场景，将图像美学评价建模为连续值回归任务；构建腕表图像数据集并设计网页标注工具，完成 1–5 分审美评分与六类风格标签标注。",
            "基于 PyTorch 设计 ResNet18（迁移学习）、轻量 CNN 和 SqueezeNet2 三个模型，对比不同复杂度与结构的网络在小样本场景下的表现，在全量数据上实现 MSE 0.745，并通过子集分析验证迁移学习的有效性。",
            "融合图像特征与 18 维用户属性构建多流神经网络，实现个性化审美预测；通过消融实验分析用户特征作用，验证用户建模对偏好预测的关键影响。"
          ]
        },
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
          github: "https://github.com/Ch1ldKing/food",
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
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
        { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch" },
        { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow" },
        { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus" },
        { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain" },
        { name: "LangGraph", icon: "https://cdn.simpleicons.org/langgraph" },
        { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
        { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes" },
        { name: "Apache Kafka", icon: "https://cdn.simpleicons.org/apachekafka" },
        { name: "Redis", icon: "https://cdn.simpleicons.org/redis" },
        { name: "RabbitMQ", icon: "https://cdn.simpleicons.org/rabbitmq" },
        { name: "Git", icon: "https://cdn.simpleicons.org/git" },
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
      resumeUrl: "/files/CV_FengRuiqi.pdf",
      sections: {
        edu: "Education",
        exp: "Experience",
        pro: "Projects",
        skill: "Stack"
      },
      education: [
        {
          school: "National University of Singapore",
          sub: "School of Computing | Master's in Computer Science",
          date: "AUG 2026 - JUN 2027",
          details: []
        },
        {
          school: "National University of Singapore",
          sub: "School of Computing | One-Year Exchange Programme",
          date: "AUG 2025 - MAY 2026",
          details: ["GPA: 4.67/5.0", "Courses: Computer Vision, Data Mining & DL/ML, Software Engineering, Graphics, Network Security"]
        },
        {
          school: "Huazhong Univ. of Science & Tech",
          sub: "B.Eng. in Computer Science",
          date: "SEP 2022 - JUN 2026",
          details: [
            "GPA: 4.08/5.0 (86/100)",
            "Honours: First Prize, National English Competition for College Students; University Scholarship; Selected for the 2026 Double First-Class Undergraduate Innovation Talent Development Fund",
            "Core Courses: Data Structures, Algorithms, Operating Systems, Computer Networks, Database Principles, Compiler Principles"
          ]
        }
      ],
      experience: [
        {
          company: "Changjiang Design Group Xinda",
          role: "AI Agent R&D Intern",
          date: "JUN 2026 - AUG 2026",
          image: "/images/agent.png",
          desc: "Built a flood-control agent platform on the LangGraph-powered DeerFlow framework for monitoring, forecasting, reservoir operations, and decision support.",
          fullDesc: [
            "Contributed to a flood-control agent platform integrating large language models, multi-Skill orchestration, and hydrological data services for monitoring queries, flood situation assessment, forecasting and early warning, reservoir operations, and response planning.",
            "Built an agent evaluation system that batch-executed 10 categories of operational tasks and replayed traces. Designed outcome and process metrics for task completion, format compliance, planning efficiency, and Skill precision, with Excel case import, task filtering, concurrent execution, checkpoint recovery, rescoring, and report generation.",
            "Developed a DeerFlow adapter for SkillOpt, using an isolated Gateway to inject candidate SKILL.md files and reusing the evaluation pipeline for execution, trace and metric reporting, Reflection updates, and a Validation Gate, improving the Skill evaluation pass rate by 10%.",
            "Helped develop a proactive flood-warning assistant that creates alerts and scheduled or recurring tasks from natural language, connecting data retrieval, rule/LLM-based warning detection, record-level idempotency, duty-staff matching, unread escalation, and rich-media notifications through Lark."
          ]
        },
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
          title: "Deep Learning for Product Aesthetics",
          tags: ["PyTorch", "ResNet18", "SqueezeNet", "Multimodal"],
          image: "/images/aesthetic.png",
          desc: "Personalised product-aesthetics prediction by combining visual features with user attributes on a custom watch dataset.",
          github: "https://github.com/qitu1/CP3106",
          fullDesc: [
            "Formulated image aesthetics for e-commerce product design as a continuous regression task. Built a watch-image dataset and a web annotation tool to collect 1–5 aesthetic scores and six style labels.",
            "Implemented ResNet18 with transfer learning, a lightweight CNN, and SqueezeNet2 in PyTorch to compare architectures of different complexity under limited data. Achieved an MSE of 0.745 on the full dataset and validated the effectiveness of transfer learning through subset analysis.",
            "Built a multi-stream neural network that fused image features with 18-dimensional user attributes for personalised aesthetic prediction. Ablation studies demonstrated the importance of user modelling for preference prediction."
          ]
        },
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
          github: "https://github.com/Ch1ldKing/food",
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
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
        { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch" },
        { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow" },
        { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus" },
        { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain" },
        { name: "LangGraph", icon: "https://cdn.simpleicons.org/langgraph" },
        { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
        { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes" },
        { name: "Apache Kafka", icon: "https://cdn.simpleicons.org/apachekafka" },
        { name: "Redis", icon: "https://cdn.simpleicons.org/redis" },
        { name: "RabbitMQ", icon: "https://cdn.simpleicons.org/rabbitmq" },
        { name: "Git", icon: "https://cdn.simpleicons.org/git" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" }
      ]
    }
  };
