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
].sort((a, b) => a.order - b.order);