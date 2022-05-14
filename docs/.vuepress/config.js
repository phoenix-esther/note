const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
    lang: 'zh-CN',
    title: 'Java 成神之路',
    description: '这是我的第一个 VuePress 站点',
    base: "/",

    theme: defaultTheme({
        // 配置上边的导航栏
        navbar: [
            {
                text: 'Java 笔记',
                children: [
                    {
                        text: 'Java IO',
                        children:[
                            {
                                text: 'Java IO 基础知识',
                                link: '/java/java-io/Java IO 前置知识.md'
                            }
                        ]
                    },

                    {
                       text: 'Java 集合',
                       children:[
                           {
                               text:"Java Map详解",
                               link:"/Java/测试.md"
                           }
                       ]
                    },
                    {
                        text: 'Java 并发',
                        children:[
                            {
                                text:'Java 并发基础',
                                link:'/java/java-concurrent/Java并发基础.md'
                            }
                        ]
                    },
                    {
                        text:'JVM 详解',
                        children:[
                            {
                                text:'JVM概览',
                                link:'/java/java-jvm/JVM概览.md'
                            },
                            {
                                text:'JVM内存结构',
                                link:'/java/java-jvm/JVM内存结构.md'
                            },
                            {
                                text:'JVM垃圾回收',
                                link:'/java/java-jvm/JVM垃圾回收.md'
                            },
                            {
                                text:'JVM类文件结构',
                                link:'/java/java-jvm/JVM类文件结构.md'
                            },
                            {
                                text:'JVM类加载器',
                                link:'/java/java-jvm/JVM类加载器.md'
                            },
                            {
                                text:'Java内存模型',
                                link:'/java/java-jvm/JVM内存模型.md'
                            }
                        ]
                    }


                ]
            },
            {
                text: 'Spring 笔记',
                children:[
                    {
                        text: 'Spring IOC',
                        children:[
                            {
                                text:"Spring IOC详解",
                                link:"/spring/test02.md"
                            }
                        ]
                    }
                ]
            },
            {
                text:'自我修养',
                children:[
                    {
                        text:'设计模式',
                        children:[
                            {
                                text:'代理模式',
                                link:'/middleware/tomcat.md'
                            }
                            
                        ]
                    }
                ]
            },
            {
                text:'中间件',
                children:[
                    {
                        text:'Tomcat 专题',
                        children:[
                            {
                                text:'Tomcat专题',
                                link:'/middleware/tomcat.md'
                            }
                            
                        ]
                    }
                ]
            }
        ],
        // 配置左侧边栏
        sidebar: {
            '/java/': [
                {
                    text: 'Java IO 模型',
                    collapsible: true,
                    children:[
                        '/java/java-io/Java IO 前置知识.md',
                        '/java/java-io/Java BIO.md'
                    ]
                },
                {
                    text: 'Java 并发编程',
                    collapsible: true,
                    children:[
                        '/java/java-concurrent/Java并发基础.md'
                    ]
                },
                {
                    text: 'JVM概览',
                    collapsible: true,
                    children:[
                        '/java/java-jvm/JVM概览.md',
                        '/java/java-jvm/JVM类加载器.md'
                    ]
                }
            ],
            '/spring/':[
                {
                    text: 'Spring Framework',
                    collapsible: true,
                    children:[
                        'test01',
                        'test02'
                    ]
                }
            ],
            '/middleware/':[
                {
                    text: 'Tomcat 专题',
                    collapsible: true,
                    children:[
                        '/middleware/tomcat.md'
                    ]
                }

            ]
        },
        sidebarDepth: 2
    }),


}