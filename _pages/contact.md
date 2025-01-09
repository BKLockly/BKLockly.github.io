---
title: Road Map
author: Lockly
date: 2025-01-07
category: Jekyll
layout: post
---

> ##### TIP
>
> 此路线图记录后续开发和完善的进度
>
{: .block-tip }

Agent
---- 
* [ ] 基本命令
  * [X] cp
  * [X] mv
  * [X] cat
  * [X] rm
  * [X] ifconfig
  * [X] mkdir
  * [X] ls
  * [ ] cd
  * [X] pwd
* [X] execute-assembly(未装载)
* [ ] unmanaged powershell
* [X] 自定义module热加载，必须符合规范，将编译成dll反射执行(未装载)
    * [X] go
    * [X] c/c++
* [ ] memfd(仅linux)
* [X] inline-execute(测试)
  * [X] ipconfig
  * [X] env
  * [X] arp
  * [X] dir
  * [X] uptime
  * [X] routeprint
  * [X] list_firewall_rules
  * [X] listmods(乱码已解决)
  * [X] listdns
  * [X] netstat
  * [X] schtaskenum
  * [X] resources
  * [X] probe
  * [X] portscan
  * [X] get_clipboard(只获取一行)
  * [X] sc_enum(乱码)
  * [X] windowlist(乱码已修复)
  * [X] whoami(会超时以及乱码已修复)
* [X] 屏幕截图(screenshot)
* [X] Hashdump
* [ ] OPSEC
    * [ ] 堆栈混淆(StackSpoofer)
    * [ ] UDRL
    * [x] 静态文件字符串混淆
* [X] Sleep和jitter，睡眠期间使用异或(TODO)处理所处内存, 睡眠时间抖动
* [ ] 第三方兼容(third part)
  * [X] 派生回话至msf/cobaltstrike
  * [X] mimikatz, fscan, qscan等加载
  * [ ] 兼容sliver armory插件的dll加载
  * [X] 反射型dll(reflective DLL)
* 常规操作(调用系统api)
  * [X] 关机
  * [X] 重启
  * [X] 锁屏
  * [X] 自删除
* 进程操作
  * [ ] 进程迁移(migrate),参考[meetC2](https://github.com/iammaguire/MeetC2)
  * [X] 浏览，终止进程
  * [X] 进程镂空(process hollowing)
  * [ ] 侧加载(sideload)
  * [X] 父进程欺骗(spoof parent process)
  * [ ] 牺牲进程(sacrifice process)
  * [ ] BlockDll
  * [ ] Bypass AMSI
  * [ ] Bypass ETW
  * [X] 进程注入(process inject)
      * [X] poolparty(未装载)
      * [X] 基本注入(未装载)
