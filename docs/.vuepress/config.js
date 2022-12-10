import { info } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

module.exports = {
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Java 成神之路',
            description: '这是我的第一个 VuePress 站点',
        }
    },
    base: "/",
    title: "教程",
    theme: hopeTheme({
        /**
         * 主题配置
         * "switch": 在深色模式，浅色模式和自动之间切换 (默认)
         * "toggle": 在深色模式和浅色模式之间切换
         * "auto": 自动根据用户设备主题或当前时间决定是否应用深色模式
         * "enable": 强制深色模式
         * "disable": 禁用深色模式
         */
        darkmode: "toggle",

        // 配置上边的导航栏
        navbar: [
            {
                text: 'Java 笔记',
                children: [
                    {
                        text: 'Java 基础',
                        children: [
                            {
                                text: 'Java 基础知识',
                                link: '/java/java-base/java-base.html'
                            }
                        ]
                    },
                    {
                        text: 'Java IO',
                        children: [
                            {
                                text: 'Java IO 基础知识',
                                link: '/java/java-io/java-io-base.html'
                            }
                        ]
                    },
                    {
                        text: 'Java 集合',
                        children: [
                            {
                                text: "Java 集合概览",
                                link: "/java/java-collection/java-collection-overview.html"
                            },
                            {
                                text: 'Java List集合',
                                link: '/java/java-collection/java-collection-list.html'
                            }
                        ]
                    },
                    {
                        text: 'Java 并发',
                        children: [
                            {
                                text: 'Java 并发基础',
                                link: '/java/java-concurrent/java-concurrent-base.html'
                            }
                        ]
                    },
                    {
                        text: 'JVM 详解',
                        children: [
                            {
                                text: 'JVM概览',
                                link: '/java/java-jvm/JVM概览.html'
                            },
                            {
                                text: 'JVM内存结构',
                                link: '/java/java-jvm/JVM内存结构.html'
                            },
                            {
                                text: 'JVM垃圾回收',
                                link: '/java/java-jvm/JVM垃圾回收.html'
                            },
                            {
                                text: 'JVM类文件结构',
                                link: '/java/java-jvm/JVM类文件结构.html'
                            },
                            {
                                text: 'JVM类加载器',
                                link: '/java/java-jvm/JVM类加载器.html'
                            },
                            {
                                text: 'Java内存模型',
                                link: '/java/java-jvm/JVM内存模型.html'
                            }
                        ]
                    }


                ]
            },
            {
                text: 'Spring 笔记',
                children: [
                    {
                        text: 'Spring IOC',
                        children: [
                            {
                                text: "Spring IOC详解",
                                link: "/spring/test02.html"
                            }
                        ]
                    },
                    {
                        text: 'Spring 后置处理器解析',
                        children: [
                            {
                                text: 'Spring 后置处理器总览',
                                link: '/spring/spring-bean-post-processor/BeanPostProcessor-base.html'
                            }
                        ]
                    }

                ]
            },
            {
                text: 'Spring Cloud',
                prefix: '/spring-cloud/',
                children: [
                    {
                        text: 'Spring Cloud Overview',
                        link: 'spring-cloud-overview.md'
                    },
                    {
                        text: 'Spring Cloud Nacos',
                        link: 'spring-cloud-alibaba-nacos.md'
                    },
                    {
                        text: 'Spring Cloud Sentinel',
                        link: 'spring-cloud-alibaba-sentinel.md'
                    },
                    {
                        text: 'Spring Cloud Seate',
                        link: 'spring-cloud-alibaba-seate.md'
                    },
                    {
                        text: 'Spring Cloud Ribbon',
                        link: 'spring-cloud-ribbon/spring-cloud-ribbon.md'
                    }
                ]
            },
            {
                text: "数据库",
                prefix: '/database/mysql/',
                children: [
                    {
                        text: "MySQL",
                        children: [
                            {
                                text: "MySQL 基础篇",
                                link: "mysql-base.html"
                            },
                            {
                                text: "MySQL 进阶篇",
                                link: "mysql-advance.html"
                            },
                            {
                                text: "MySQL 运维篇",
                                link: "mysql-devops.html"
                            },
                            {
                                text: "MySQL 应用篇",
                                link: "mysql-apply.html"
                            }
                        ]
                    }
                ]
            },
            {
                text: '自我修养',
                children: [
                    {
                        text: '设计模式',
                        link: '/quality/design-mode/design-overview.html'
                    },
                    {
                        text: '数据结构',
                        link: '/quality/data-structure/data-structure-overview.html'
                    },
                    {
                        text: 'Linux 总结',
                        link: '/quality/linux/linux-overview.html'
                    }
                ]
            },
            {
                text: '中间件',
                children: [
                    {
                        text: 'Tomcat 专题',
                        link: '/middleware/tomcat/tomcat.md'
                    },
                    {
                        text: 'Kafka 专题',
                        link: '/middleware/kafka/kafka-overview.md'
                    },
                    {
                        text: 'Redis 专题',
                        link: '/middleware/redis/redis-overview.md'
                    }
                ]
            },
            {
                text: '工具包',
                children: [
                    {
                        text: 'Junit 测试框架',
                        children: [
                            {
                                text: 'Junit 5 使用总结',
                                link: '/tools/junit/junit5.md'
                            }
                        ]
                    },
                    {
                        text: 'Java 日志框架',
                        link: '/tools/log/log-framework.md'
                    },
                    {
                        text: 'Maven 使用入门',
                        link: '/tools/maven/maven.md'
                    }
                ]
            }
        ],
        // 配置左侧边栏
        sidebar: {
            '/java/': [
                {
                    text: 'Java 集合',
                    collapsible: false,
                    children: [
                        '/java/java-collection/java-collection-overview.html',
                        '/java/java-collection/java-collection-list.html',
                        '/java/java-collection/java-collection-map.html'
                    ]
                },
                {
                    text: 'Java IO 模型',
                    collapsible: false,
                    children: [
                        '/java/java-io/java-io-base.html',
                        '/java/java-io/java-bio.md',
                        '/java/java-io/java-nio.md'
                    ]
                },
                {
                    text: 'Java 并发编程',
                    collapsible: false,
                    children: [
                        '/java/java-concurrent/java-concurrent-base.html',
                        '/java/java-concurrent/java-concurrent-container.html',
                        '/java/java-concurrent/java-concurrent-lock.html',
                        '/java/java-concurrent/java-concurrent-pool.html',
                        '/java/java-concurrent/java-concurrent-tools.html',
                    ]
                },
                {
                    text: 'JVM概览',
                    collapsible: false,
                    children: [
                        '/java/java-jvm/JVM概览.html',
                        '/java/java-jvm/JVM内存结构.html',
                        '/java/java-jvm/JVM垃圾回收.html',
                        '/java/java-jvm/JVM类文件结构.html',
                        '/java/java-jvm/JVM类加载器.html',
                        '/java/java-jvm/Java内存模型.html'
                    ]
                }
            ],
            '/spring/': [
                {
                    text: 'Spring Framework',
                    collapsible: false,
                    children: [
                        'test01',
                        'test02'
                    ]
                },
                {
                    text: 'Spring 后置处理器',
                    children: [
                        '/spring/spring-bean-post-processor/BeanPostProcessor-base.html',
                        '/spring/spring-bean-post-processor/BeanPostProcessor-ConfigurationClassPostProcessor.html'
                    ]
                }
            ],
            '/spring-cloud/': [
                {
                    text: '微服务架构',
                    children: [
                        '/spring-cloud/spring-cloud-overview.html',
                        '/spring-cloud/spring-cloud-nacos/nacos-client-discovery.html',
                        '/spring-cloud/spring-cloud-nacos/nacos-overview.html',
                        '/spring-cloud/spring-cloud-sentinel/sentinel-source.html',
                        '/spring-cloud/spring-cloud-alibaba-seate.html',
                        '/spring-cloud/spring-cloud-gateway/spring-cloud-gateway.html'
                    ]
                },
                {
                    text: '常用组件',
                    children: [
                        '/spring-cloud/spring-cloud-openfeign/spring-cloud-openfeign.html',
                        '/spring-cloud/spring-cloud-ribbon/spring-cloud-ribbon.html'
                    ]
                }
            ],
            '/database/': [
                {
                    text: 'MySQL',
                    children: [
                        '/database/mysql/mysql-base.html',
                        "/database/mysql/mysql-advance.html",
                        "/database/mysql/mysql-devops.html",
                        "/database/mysql/mysql-apply.html"
                    ]
                }
            ],
            '/quality/': [
                {
                    text: '设计模式',
                    children: [
                        '/quality/design-mode/design-overview.html',
                        '/quality/design-mode/design-proxy.html',
                        '/quality/design-mode/design-decorator.html',
                        '/quality/design-mode/design-adapter.html',
                        '/quality/design-mode/design-chain.html',
                        '/quality/design-mode/design-composite.html',
                        '/quality/design-mode/design-strategy.html'
                    ]
                },
                {
                    text: '数据结构',
                    children: [
                        '/quality/data-structure/data-structure-overview.html',
                        '/quality/data-structure/data-structure-list.html',
                        '/quality/data-structure/data-structure-tree.html'
                    ]
                }
            ],
            '/middleware/': [
                {
                    text: 'Tomcat 专题',
                    collapsible: false,
                    children: [
                        '/middleware/tomcat/tomcat.md'
                    ]
                },
                {
                    text: 'Kafka 专题',
                    collapsible: false,
                    children: [
                        '/middleware/kafka/kafka-overview.md',
                        '/middleware/kafka/kafka-consumer.md',
                        '/middleware/kafka/kafka-producer.md',
                        '/middleware/kafka/kafka-broker.md',
                        '/middleware/kafka/spring-kafka.md',
                    ]
                },
                {
                    text: 'Redis 专题',
                    collapsible: false,
                    children: [
                        '/middleware/redis/redis-overview.md',
                        '/middleware/redis/redis-cluster.md'
                    ]
                }

            ],
            '/tools': [
                {
                    text: '常用开发工具',
                    collapsible: false,
                    children: [
                        '/tools/junit/junit5.md',
                        '/tools/log/log-framework.md',
                        '/tools/maven/maven.md'
                    ]
                }
            ]

        },
        sidebarDepth: 2,
        blog: {
            avatar: "/logo.png",
            name: "Mr.Phoenix",
            roundAvatar: true,
            description: "我们的征途是星辰大海！",
            // 自动生成摘要
            autoExcerpt: true,
            // 热部署， 开启会影响性能，调试样式的时候开启，其他时间关闭就好
            hotReload: true
        },
        plugins: {
            // 关闭图片预览
            photoSwipe: false,
            // 开启博客
            blog: true,
            mdEnhance: {
                /**
                 * 用来支持流程图
                 */
                mermaid: true,
                /**
                 * 用来支持任务列表
                 */
                tasklist: true,
                // 启用幻灯片支持
                presentation: true,
            }
        }
    })
}