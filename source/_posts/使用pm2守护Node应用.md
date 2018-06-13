---
title: 使用pm2部署Node应用
date: 2018-03-1 14:21:04
categories: [技术向]
tags: [Node.js,JavaScript]
---

# 启用 pm2

> pm2 是一个带有负载均衡功能的Node应用的进程管理器~

1. 使用 npm install pm2 -g 来安装就好了

2. 在 Koa2 目录下使用 pm2 start ./bin/www 启动进程 （其他同理 pm2 start xxx）

3. 启动后可以使用 pm2 status 或者 pm2 list 查看进程列表

4. 对应的停止、重启、杀死进程操作为 pm2 stop/restart/delete xxx （ xxx 为进程名或进程id）


# pm2 的特性

- 简单又高效的流程管理
- 保持 Node 应用长时间稳定运行
- 无需更改代码即可对n ode.js 应用程序进行集群化以提高性能和可靠性
- 无需额外配置的热重载
- ...

> 参考：[P(rocess) M(anager) 2 Runtime Edition -Github@wallet77](https://github.com/Unitech/pm2)


------------

> 用了 pm2 之后脾气都变好了~ (手动狗头)






------


# 附上一些常用的命令


```

# General
$ npm install pm2 -g            # Install PM2
$ pm2 start app.js              # Start, Daemonize and auto-restart application (Node)
$ pm2 start app.py              # Start, Daemonize and auto-restart application (Python)
$ pm2 start npm -- start        # Start, Daemonize and auto-restart Node application

# Cluster Mode (Node.js only)
$ pm2 start app.js -i 4         # Start 4 instances of application in cluster mode
                                # it will load balance network queries to each app
$ pm2 reload all                # Zero Second Downtime Reload
$ pm2 scale [app-name] 10       # Scale Cluster app to 10 process

# Process Monitoring
$ pm2 list                      # List all processes started with PM2
$ pm2 list --sort=<field>       # Sort all processes started with PM2
$ pm2 monit                     # Display memory and cpu usage of each app
$ pm2 show [app-name]           # Show all information about application

# Log management
$ pm2 logs                      # Display logs of all apps
$ pm2 logs [app-name]           # Display logs for a specific app
$ pm2 logs --json               # Logs in JSON format
$ pm2 flush
$ pm2 reloadLogs

# Process State Management
$ pm2 start app.js --name="api" # Start application and name it "api"
$ pm2 start app.js -- -a 34     # Start app and pass option "-a 34" as argument
$ pm2 start app.js --watch      # Restart application on file change
$ pm2 start script.sh           # Start bash script
$ pm2 start app.json            # Start all applications declared in app.json
$ pm2 reset [app-name]          # Reset all counters
$ pm2 stop all                  # Stop all apps
$ pm2 stop 0                    # Stop process with id 0
$ pm2 restart all               # Restart all apps
$ pm2 gracefulReload all        # Gracefully reload all apps in cluster mode
$ pm2 delete all                # Kill and delete all apps
$ pm2 delete 0                  # Delete app with id 0

# Startup/Boot management
$ pm2 startup                   # Detect init system, generate and configure pm2 boot on startup
$ pm2 save                      # Save current process list
$ pm2 resurrect                 # Restore previously saved processes
$ pm2 unstartup                 # Disable and remove startup system

$ pm2 update                    # Save processes, kill PM2 and restore processes
$ pm2 init                      # Generate a sample js configuration file

# Deployment
$ pm2 deploy app.json prod setup    # Setup "prod" remote server
$ pm2 deploy app.json prod          # Update "prod" remote server
$ pm2 deploy app.json prod revert 2 # Revert "prod" remote server by 2

# Module system
$ pm2 module:generate [name]    # Generate sample module with name [name]
$ pm2 install pm2-logrotate     # Install module (here a log rotation system)
$ pm2 uninstall pm2-logrotate   # Uninstall module
$ pm2 publish                   # Increment version, git push and npm publish

```





  [1]: https://github.com/Unitech/pm2