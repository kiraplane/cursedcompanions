基于当前这个项目的代码框架背后的模版，做一个新项目，是关于
feed the pit这个个游戏的攻略站。所以我希望满足用户的攻略相关的需求。网站的名称就叫
feed the pit
本项目网站的网址域名为：www.feedthepit.wiki
网站的关键词要有feed the pit、feed the pit wiki、feed the pit paly online等
将原文件夹内容做改造，没用的内容剔除，只服务feedthepit

1.请搜索下这个游戏，基于这个游戏的长尾搜索词，看下我们应该如何做网站内容，请用skill中的api去尝试获取长尾词，api的key，可以参考 [$wiki-site-growth-iteration](/Users/he/.codex/skills/wiki-site-growth-iteration/SKILL.md) skill

2.之前有个成熟的攻略站项目，也可以学习其优秀的点，主要是其guide文章和youtube的结合方式。
/Users/he/Documents/AI/vibe coding/kingshot/kingshotguide

3.官方商店是：https://store.steampowered.com/app/3278290/Feed_The_Pit/
基于这个游戏的风格，给网站确定个配色和风格。

4.如果需要数据和icon，可以自行去一些攻略站搜索
如果某些需求搜索词，没有数据支持，可以搜索youtube视频，将视频翻译成中文，并写成文章即可

5.本网站一定要有个在线游戏的页面，同当前项目中的在线游戏页面，但是更偏向于自托管的方式，游戏的数据从https://mooncrustgames.itch.io/feed-the-pit  这个网址拿，我已经获得了授权，具体的实现方法，可以参考/Users/he/Documents/AI/vibe coding/klifur-org/apostateverity这个项目
在线游戏页面，希望下方有这个在线游戏的玩法和一些截图，这个都能在这个 itch 网址拿到。

6.开发完成后在github上创建仓库feedthepit，将本项目上传
7.在cloudflare上面的worker创建项目feedthepit部署并关联域名，域名我已经加好
8.去ga上创建媒体资源
