export const projects = [
    {
        order: 1,
        title: "Remote Monitoring System (RMS)",
        description:
            "Real-time telecom tower monitoring system using AWS IoT Core and GoLang",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        tech: ["Go", "AWS IoT", "React", "MQTT"],
        links: {
            live: "#",
            github: "#",
        },
    },
    {
        order: 2,
        title: "Grid Controller (GC)",
        description: "Solar-powered grid optimization with MQTT dashboard",
        image:
            "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
        tech: ["Laravel", "MQTT", "Vue.js"],
        links: {
            live: "#",
            github: "#",
        },
    },
    {
        order: 3,
        title: "Visually Impaired People's Society",
        description: "Accessible website with screen reader optimization",
        image:
            "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop",
        tech: ["PHP", "Laravel", "Accessibility"],
        links: {
            live: "https://vipsbd.org",
            github: "#",
        },
    },
    {
        order: 4,
        title: "Steady Formation",
        description: "Custom software solutions platform",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        tech: ["PHP", "Laravel", "React"],
        links: {
            live: "https://steadyformation.com",
            github: "#",
        },
    },
    {
        order: 5,
        title: "Acute Engineering & Solutions Ltd.",
        description:
            "Corporate website for Acute Engineering & Solutions Ltd. — EPC, solar, civil, IoT, and telecom R&D",
        image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        tech: ["Laravel", "Vue.js", "Inertia.js", "Tailwind"],
        links: {
            live: "https://acutebd.com",
            github: "https://github.com/idbmannaf/acutebd",
        },
    },
    {
        order: 6,
        title: "PCB Engineering & Manufacturing",
        description:
            "PCB manufacturing, PCBA assembly, component sourcing, and custom enclosure platform from prototype to production",
        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
        tech: ["HTML", "CSS", "JavaScript"],
        links: {
            live: "#",
            github: "#",
        },
    },
    {
        order: 7,
        title: "Enterprise Requisition Management System (ERMS)",
        description:
            "Enterprise requisition management system with OTP login, role-based approvals, accounts, and Excel reporting",
        image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        tech: ["Laravel", "PHP", "Excel", "SMS OTP"],
        links: {
            live: "#",
            github: "#",
        },
    },
    {
        order: 8,
        title: "Civil Engineering Management System (CEMS)",
        description:
            "Civil project management system with budgets, advance requests, multi-level approvals, KPI, and site costing",
        image:
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
        tech: ["Laravel", "Vue.js", "Inertia.js", "Excel"],
        links: {
            live: "#",
            github: "#",
        },
    },
    {
        order: 9,
        title: "Warehouse Management System (WMS)",
        description:
            "Warehouse inventory with stock in/out, transfers, project sites, and resource requisition tracking",
        image:
            "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop",
        tech: ["Laravel", "PHP", "Excel", "PDF"],
        links: {
            live: "#",
            github: "#",
        },
    },
    
    {
        order: 11,
        title: "Product Lifecycle & Traceability System (PLTS)",
        description:
            "Product lifecycle & traceability — production, QC, QR serials, delivery, installation, warranty, and RMA",
        image:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        tech: ["Laravel", "Vue.js", "Inertia.js", "QR"],
        links: {
            live: "#",
            github: "#",
        },
    },
    {
        order: 12,
        title: "Smart Attendance Management System",
        description:
            "Employee attendance, leave, holidays, task tracking, notices, and company HR management",
        image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
        tech: ["Laravel", "PHP", "Excel", "PDF"],
        links: {
            live: "#",
            github: "#",
        },
    },
    {
        order: 13,
        title: "FTFX — Farm To Fly",
        description:
            "Product catalog and enquiry platform with specifications, media, and customer inquiries",
        image:
            "https://images.unsplash.com/photo-1436491865331-4ffd7ba14e70?w=800&h=600&fit=crop",
        tech: ["Laravel", "Vue.js", "Inertia.js", "Tailwind"],
        links: {
            live: "#",
            github: "#",
        },
    },
    {
        order: 14,
        title: "Water ATM Management System",
        description:
            "IoT water ATM and remote monitoring system — NestJS API, React admin, Go time-series ingestor, and field zone app",
        image:
            "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&h=600&fit=crop",
        tech: ["NestJS", "React", "Go", "MQTT"],
        links: {
            live: "#",
            github: "#",
        },
    },
].sort((a, b) => a.order - b.order);