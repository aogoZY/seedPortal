# SeedPortal

## Jenkins 辅助项目自动发布

### 服务器安装Jenkins 和github 等相关插件
已完成

### github 配置webhook 地址
进入要自动部署的github 项目下，点击Settings => Webhooks => add webhook

![webhook](./src/assets/img/readme/webhook.jpg)

输入Payload URL，点击Add webhook，其中Payload URL的形式为 http://IP:PORT/github-webhook/
![webhook](./src/assets/img/readme/hookurl.jpg)

## Other Question?

### Why is vendor so large?
![webhook](./src/assets/img/readme/vendor.jpg)
