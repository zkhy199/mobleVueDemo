<template>
    <div style="width:100%;">
        <mu-appbar style="width: 100%;" title=列表>
            <mu-button flat slot="left" @click="goback">返回</mu-button>
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
        <div style="margin-top:20px;">
            <p>正常使用的列表</p>
            <mu-paper :z-depth="1" class="demo-list-wrap">
                <mu-appbar color="teal">
                    <mu-button icon slot="left">
                    <mu-icon value="menu"></mu-icon>
                    </mu-button>
                    Menus
                </mu-appbar>
                <mu-list>
                    <mu-list-item button :ripple="true">
                    <mu-list-item-action>
                        <mu-icon value="inbox"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>Inbox</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="true">
                    <mu-list-item-action>
                        <mu-icon value="grade"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>Stared</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="true">
                    <mu-list-item-action>
                        <mu-icon value="send"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>Sent mail</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="true">
                    <mu-list-item-action>
                        <mu-icon value="drafts"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>Drafts</mu-list-item-title>
                    </mu-list-item>
                </mu-list>
                <mu-divider></mu-divider>
                <mu-list>
                    <mu-list-item button :ripple="true">
                    <mu-list-item-title>All mail</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon value="info"></mu-icon>
                    </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item button :ripple="true">
                    <mu-list-item-title>Trash</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon value="info"></mu-icon>
                    </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item button :ripple="true">
                    <mu-list-item-title>Spam</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon value="info"></mu-icon>
                    </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item button :ripple="true">
                    <mu-list-item-title>Follow up</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon value="info"></mu-icon>
                    </mu-list-item-action>
                    </mu-list-item>
                </mu-list>
                </mu-paper>
        </div>
        <div style="margin-top:20px;">
            <p>带头像的列表</p>
            <mu-paper :z-depth="2" class="demo-list-wrap">
                <mu-appbar color="lightBlue400">
                    <mu-button icon slot="left">
                    <mu-icon value="menu"></mu-icon>
                    </mu-button>
                    Contacts
                    <mu-button icon slot="right">
                    <mu-icon value="search"></mu-icon>
                    </mu-button>
                </mu-appbar>
                <mu-list>
                    <mu-sub-header>Today</mu-sub-header>
                    <mu-list-item avatar button :ripple="true">
                    <mu-list-item-action>
                        <mu-avatar>
                        <img src="../assets/images/avatar1.jpg">
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-title>Mike Li</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon value="chat_bubble"></mu-icon>
                    </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item avatar button :ripple="true">
                    <mu-list-item-action>
                        <mu-avatar>
                        <img src="../assets/images/avatar2.jpg">
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-title>Maco Mai</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon value="chat_bubble"></mu-icon>
                    </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item avatar button :ripple="true">
                    <mu-list-item-action>
                        <mu-avatar>
                        <img src="../assets/images/avatar3.jpg">
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-title>Alex Qin</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon value="chat_bubble"></mu-icon>
                    </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item avatar button :ripple="true">
                    <mu-list-item-action>
                        <mu-avatar>
                        <img src="../assets/images/avatar4.jpg">
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-title>Allen Qun</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon value="chat_bubble"></mu-icon>
                    </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item avatar button :ripple="true">
                    <mu-list-item-action>
                        <mu-avatar>
                        <img src="../assets/images/uicon.jpg">
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-title>Myron Liu</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon value="chat_bubble"></mu-icon>
                    </mu-list-item-action>
                    </mu-list-item>
                </mu-list>
                <mu-divider></mu-divider>
                <mu-list>
                    <mu-sub-header>History</mu-sub-header>
                    <mu-list-item avatar button :ripple="true">
                    <mu-list-item-action>
                        <mu-avatar>
                        <img src="../assets/images/avatar5.jpg">
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-title>Gaia Zhou</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon value="chat_bubble"></mu-icon>
                    </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item avatar button :ripple="true">
                    <mu-list-item-action>
                        <mu-avatar>
                        <img src="../assets/images/avatar6.jpg">
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-title>Miller Wang</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon value="chat_bubble"></mu-icon>
                    </mu-list-item-action>
                    </mu-list-item>
                </mu-list>
            </mu-paper>
        </div>
        <div style="margin-top:20px;">
            <p>联系人列表</p>
            <mu-paper :z-depth="1" class="demo-list-wrap">
                <mu-appbar color="secondary">
                    <mu-button icon slot="left">
                    <mu-icon value="menu"></mu-icon>
                    </mu-button>
                    Contacts
                    <mu-button icon slot="right">
                    <mu-icon value="search"></mu-icon>
                    </mu-button>
                </mu-appbar>
                <mu-list>
                    <mu-list-item avatar button :ripple="true">
                    <mu-list-item-action>
                        <mu-icon value="star" color="pink"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>Mike Li</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-avatar>
                        <img src="../assets/images/avatar1.jpg">
                        </mu-avatar>
                    </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item avatar button :ripple="true">
                    <mu-list-item-action></mu-list-item-action>
                    <mu-list-item-title>Maco Mai</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-avatar>
                        <img src="../assets/images/avatar2.jpg">
                        </mu-avatar>
                    </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item avatar button :ripple="true">
                    <mu-list-item-action></mu-list-item-action>
                    <mu-list-item-title>Alex Qin</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-avatar>
                        <img src="../assets/images/avatar3.jpg">
                        </mu-avatar>
                    </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item avatar button :ripple="true">
                    <mu-list-item-action></mu-list-item-action>
                    <mu-list-item-title>Allen Qun</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-avatar>
                        <img src="../assets/images/avatar4.jpg">
                        </mu-avatar>
                    </mu-list-item-action>
                    </mu-list-item>
                </mu-list>
                </mu-paper>
        </div>
        <div style="margin-top:20px;">
            <p>两行内容和副标题</p>
            <mu-paper :z-depth="1" class="demo-list-wrap">
                <mu-appbar color="lightBlue">
                    <mu-button icon slot="left">
                    <mu-icon value="menu"></mu-icon>
                    </mu-button>
                    Files
                    <mu-button icon slot="right">
                    <mu-icon value="view_quilt"></mu-icon>
                    </mu-button>
                </mu-appbar>
                <mu-list textline="two-line">
                    <mu-sub-header inset>Folders</mu-sub-header>
                    <mu-list-item avatar button :ripple="true">
                    <mu-list-item-action>
                        <mu-avatar>
                        <mu-icon value="folder"></mu-icon>
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-content>
                        <mu-list-item-title>Photos</mu-list-item-title>
                        <mu-list-item-sub-title>Jan 9, 2014</mu-list-item-sub-title>
                    </mu-list-item-content>
                    <mu-list-item-action>
                        <mu-button icon>
                        <mu-icon value="info"></mu-icon>
                        </mu-button>
                    </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item avatar button :ripple="true">
                    <mu-list-item-action>
                        <mu-avatar>
                        <mu-icon value="folder"></mu-icon>
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-content>
                        <mu-list-item-title>Recipes</mu-list-item-title>
                        <mu-list-item-sub-title>Jan 17, 2014</mu-list-item-sub-title>
                    </mu-list-item-content>
                    <mu-list-item-action>
                        <mu-button icon>
                        <mu-icon value="info"></mu-icon>
                        </mu-button>
                    </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item avatar button :ripple="true">
                    <mu-list-item-action>
                        <mu-avatar>
                        <mu-icon value="folder"></mu-icon>
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-content>
                        <mu-list-item-title>Work</mu-list-item-title>
                        <mu-list-item-sub-title>Jan 28, 2014</mu-list-item-sub-title>
                    </mu-list-item-content>
                    <mu-list-item-action>
                        <mu-button icon>
                        <mu-icon value="info"></mu-icon>
                        </mu-button>
                    </mu-list-item-action>
                    </mu-list-item>
                </mu-list>
                <mu-divider inset></mu-divider>
                <mu-list textline="two-line">
                    <mu-sub-header inset>Files</mu-sub-header>
                    <mu-list-item avatar button :ripple="true">
                    <mu-list-item-action>
                        <mu-avatar color="blue">
                        <mu-icon value="assignment"></mu-icon>
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-content>
                        <mu-list-item-title>Vacation itinerary</mu-list-item-title>
                        <mu-list-item-sub-title>Jan 20, 2014</mu-list-item-sub-title>
                    </mu-list-item-content>
                    <mu-list-item-action>
                        <mu-button icon>
                        <mu-icon value="info"></mu-icon>
                        </mu-button>
                    </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item avatar button :ripple="true">
                    <mu-list-item-action>
                        <mu-avatar color="yellow600">
                        <mu-icon value="insert_chart"></mu-icon>
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-content>
                        <mu-list-item-title>Kitchen remodel</mu-list-item-title>
                        <mu-list-item-sub-title>Jan 10, 2014</mu-list-item-sub-title>
                    </mu-list-item-content>
                    <mu-list-item-action>
                        <mu-button icon>
                        <mu-icon value="info"></mu-icon>
                        </mu-button>
                    </mu-list-item-action>
                    </mu-list-item>
                </mu-list>
                </mu-paper>
        </div>
        <div style="margin-top:20px;">
            <p>三行内容</p>
            <mu-paper :z-depth="1" class="demo-list-wrap">
                <mu-appbar color="cyan">
                    <mu-button icon slot="left">
                    <mu-icon value="menu"></mu-icon>
                    </mu-button>
                    Inbox
                    <mu-button icon slot="right">
                    <mu-icon value="search"></mu-icon>
                    </mu-button>
                </mu-appbar>
                <mu-list textline="three-line">
                    <mu-sub-header>今天</mu-sub-header>
                    <mu-list-item avatar :ripple="true" button>
                    <mu-list-item-action>
                        <mu-avatar>
                        <img src="../assets/images/avatar1.jpg">
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-content>
                        <mu-list-item-title>这个周末一起吃饭么?</mu-list-item-title>
                        <mu-list-item-sub-title>
                        <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
                        </mu-list-item-sub-title>
                    </mu-list-item-content>
                    </mu-list-item>
                    <mu-divider></mu-divider>
                    <mu-list-item avatar :ripple="true" button>
                    <mu-list-item-action>
                        <mu-avatar>
                        <img src="../assets/images/avatar2.jpg">
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-content>
                        <mu-list-item-title>Alex Qin</mu-list-item-title>
                        <mu-list-item-sub-title>
                        <span style="color: rgba(0, 0, 0, .87)">看电影啊</span><br/>
                        我们去看电影，最近有部烂片上映，又有吐槽的了
                        </mu-list-item-sub-title>
                    </mu-list-item-content>
                    </mu-list-item>
                    <mu-divider></mu-divider>
                    <mu-list-item avatar :ripple="true" button>
                    <mu-list-item-action>
                        <mu-avatar>
                        <img src="../assets/images/avatar3.jpg">
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-content>
                        <mu-list-item-title>LOL</mu-list-item-title>
                        <mu-list-item-sub-title>
                        <span style="color: rgba(0, 0, 0, .87)">去打游戏啊</span><br/>
                        周末一起 LOL
                        </mu-list-item-sub-title>
                    </mu-list-item-content>
                    </mu-list-item>
                    <mu-divider></mu-divider>
                    <mu-list-item avatar :ripple="true" button>
                    <mu-list-item-action>
                        <mu-avatar>
                        <img src="../assets/images/uicon.jpg">
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-content>
                        <mu-list-item-title>LOL</mu-list-item-title>
                        <mu-list-item-sub-title>
                        <span style="color: rgba(0, 0, 0, .87)">哇去</span><br/>
                        实在编不下去，这就是个demo
                        </mu-list-item-sub-title>
                    </mu-list-item-content>
                    </mu-list-item>
                </mu-list>
                </mu-paper>
        </div>
        <div style="margin-top:20px;">
            <p>后置文字与图表</p>
            <mu-paper :z-depth="1" class="demo-list-wrap">
                <mu-appbar color="pink">
                    <mu-button icon slot="left">
                    <mu-icon value="menu"></mu-icon>
                    </mu-button>
                    Inbox
                    <mu-button icon slot="right">
                    <mu-icon value="search"></mu-icon>
                    </mu-button>
                </mu-appbar>
                <mu-list textline="two-line">
                    <mu-list-item avatar :ripple="true" button>
                    <mu-list-item-content>
                        <mu-list-item-title>Ali Connors</mu-list-item-title>
                        <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">Brunch this weekend?</mu-list-item-sub-title>
                        <mu-list-item-sub-title>
                        I'll be in your neighborhood doing errands this weekend. Do you want to hang out?
                        </mu-list-item-sub-title>
                    </mu-list-item-content>
                    <mu-list-item-action >
                        <mu-list-item-after-text>15 min</mu-list-item-after-text>
                        <mu-checkbox color="yellow700" v-model="selects" value="value1" uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
                    </mu-list-item-action>
                    </mu-list-item>
                    <mu-divider></mu-divider>
                    <mu-list-item avatar :ripple="true" button>
                    <mu-list-item-content>
                        <mu-list-item-title>me, Scrott, Jennifer</mu-list-item-title>
                        <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">Summer BBQ</mu-list-item-sub-title>
                        <mu-list-item-sub-title>
                        Wish I could come, but I'm out of town this weekend.
                        </mu-list-item-sub-title>
                    </mu-list-item-content>
                    <mu-list-item-action >
                        <mu-list-item-after-text>2 hr</mu-list-item-after-text>
                        <mu-checkbox color="yellow700" v-model="selects" value="value2"  uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
                    </mu-list-item-action>
                    </mu-list-item>
                    <mu-divider></mu-divider>
                    <mu-list-item avatar :ripple="true" button>
                    <mu-list-item-content>
                        <mu-list-item-title>Sandra Adams</mu-list-item-title>
                        <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">Oui oui</mu-list-item-sub-title>
                        <mu-list-item-sub-title>
                        Do you have Paris recommendations? Have you ever been?
                        </mu-list-item-sub-title>
                    </mu-list-item-content>
                    <mu-list-item-action >
                        <mu-list-item-after-text>6 hr</mu-list-item-after-text>
                        <mu-checkbox color="yellow700" v-model="selects" value="value3"  uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
                    </mu-list-item-action>
                    </mu-list-item>
                    <mu-divider></mu-divider>
                    <mu-list-item avatar :ripple="true" button>
                    <mu-list-item-content>
                        <mu-list-item-title>Trevor Hansen</mu-list-item-title>
                        <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">Birthday gift</mu-list-item-sub-title>
                        <mu-list-item-sub-title>
                        Have any ideas about what we should get Heidi for her
                        </mu-list-item-sub-title>
                    </mu-list-item-content>
                    <mu-list-item-action>
                        <mu-list-item-after-text>12 hr</mu-list-item-after-text>
                        <mu-checkbox color="yellow700" v-model="selects" value="value4"  uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
                    </mu-list-item-action>
                    </mu-list-item>
                    <mu-divider></mu-divider>
                    <mu-list-item avatar :ripple="true" button>
                    <mu-list-item-content>
                        <mu-list-item-title>Britta Holt</mu-list-item-title>
                        <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">Recipe to try</mu-list-item-sub-title>
                        <mu-list-item-sub-title>
                        We should eat this: Grate, Squash, Corn, and tomatillo Tacos.
                        </mu-list-item-sub-title>
                    </mu-list-item-content>
                    <mu-list-item-action >
                        <mu-list-item-after-text>18hr</mu-list-item-after-text>
                        <mu-checkbox color="yellow700" v-model="selects" value="value5"  uncheck-icon="star_border" checked-icon="star"></mu-checkbox>
                    </mu-list-item-action>
                    </mu-list-item>
                </mu-list>
                </mu-paper>
        </div>
        <div style="margin-top:20px;">
            <p>配合表单组件使用</p>
            <mu-paper :z-depth="1" class="demo-list-wrap">
                <mu-appbar color="purple">
                    <mu-button icon slot="left">
                    <mu-icon value="menu"></mu-icon>
                    </mu-button>
                    Setting
                </mu-appbar>
                <mu-list textline="two-line">
                    <mu-list-item>
                    <mu-list-item-content>
                        <mu-list-item-title>通知与信息设置</mu-list-item-title>
                        <mu-list-item-sub-title>总是中断</mu-list-item-sub-title>
                    </mu-list-item-content>
                    </mu-list-item>
                </mu-list>
                <mu-divider></mu-divider>
                <mu-list>
                    <mu-sub-header>声音开启设置</mu-sub-header>
                    <mu-list-item button :ripple="true" @click="events = !events">
                        <mu-list-item-title>
                        事件和提醒
                        </mu-list-item-title>
                        <mu-list-item-action>
                        <mu-switch v-model="events" readonly></mu-switch>
                        </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item button :ripple="true" @click="calls = !calls">
                        <mu-list-item-title>
                        电话
                        </mu-list-item-title>
                        <mu-list-item-action>
                        <mu-switch v-model="calls" readonly></mu-switch>
                        </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item button :ripple="true" @click="messages = !messages">
                        <mu-list-item-title>
                        信息
                        </mu-list-item-title>
                        <mu-list-item-action>
                        <mu-switch v-model="messages" readonly></mu-switch>
                        </mu-list-item-action>
                    </mu-list-item>
                    </mu-list>
                <mu-list>
                    <mu-sub-header>通知设置</mu-sub-header>
                    <mu-list-item button :ripple="true" @click="notifications = !notifications">
                    <mu-list-item-action>
                        <mu-checkbox v-model="notifications" readonly></mu-checkbox>
                    </mu-list-item-action>
                    <mu-list-item-title>
                        通知
                    </mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="true" @click="sounds = !sounds">
                    <mu-list-item-action>
                        <mu-checkbox v-model="sounds" readonly></mu-checkbox>
                    </mu-list-item-action>
                    <mu-list-item-title>
                        声音
                    </mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="true" @click="videoSounds = !videoSounds">
                    <mu-list-item-action>
                        <mu-checkbox v-model="videoSounds" readonly></mu-checkbox>
                    </mu-list-item-action>
                    <mu-list-item-title>
                        视频的声音
                    </mu-list-item-title>
                    </mu-list-item>
                </mu-list>
                </mu-paper>
        </div>
        <div style="margin-top:20px;">
            <p>嵌套列表</p>
            <mu-paper :z-depth="1" class="demo-list-wrap">
                <mu-appbar color="primary">
                    <mu-button icon slot="left">
                    <mu-icon value="menu"></mu-icon>
                    </mu-button>
                    Inbox
                </mu-appbar>
                <mu-list toggle-nested>
                    <mu-list-item button :ripple="true" nested :open="open === 'send'" @toggle-nested="open = arguments[0] ? 'send' : ''">
                    <mu-list-item-action>
                        <mu-icon value="send"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>Sent mail</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item button :ripple="true" slot="nested">
                        <mu-list-item-title>List Item 1</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="true" slot="nested">
                        <mu-list-item-title>List Item 2</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="true" slot="nested">
                        <mu-list-item-title>List Item 3</mu-list-item-title>
                    </mu-list-item>
                    </mu-list-item>
                    <mu-list-item button :ripple="true" nested :open="open === 'drafts'" @toggle-nested="open = arguments[0] ? 'drafts' : ''">
                    <mu-list-item-action>
                        <mu-icon value="drafts"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>Drafts</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item button :ripple="true" slot="nested">
                        <mu-list-item-title>List Item 1</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="true" slot="nested">
                        <mu-list-item-title>List Item 2</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="true" slot="nested">
                        <mu-list-item-title>List Item 3</mu-list-item-title>
                    </mu-list-item>
                    </mu-list-item>
                    <mu-list-item button :ripple="true" nested :open="open === 'inbox'" @toggle-nested="open = arguments[0] ? 'inbox' : ''">
                    <mu-list-item-action>
                        <mu-icon value="inbox"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>Inbox</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item button :ripple="true" slot="nested">
                        <mu-list-item-title>List Item 1</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="true" slot="nested">
                        <mu-list-item-title>List Item 2</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="true" slot="nested">
                        <mu-list-item-title>List Item 3</mu-list-item-title>
                    </mu-list-item>
                    </mu-list-item>
                    <mu-list-item button :ripple="true" nested :open="open === 'stared'" @toggle-nested="open = arguments[0] ? 'stared' : ''">
                    <mu-list-item-action>
                        <mu-icon value="grade"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>Stared</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item button :ripple="true" slot="nested">
                        <mu-list-item-title>List Item 1</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="true" slot="nested">
                        <mu-list-item-title>List Item 2</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="true" slot="nested">
                        <mu-list-item-title>List Item 3</mu-list-item-title>
                    </mu-list-item>
                    </mu-list-item>
                </mu-list>
                </mu-paper>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return{
            selects: [],
            events: false,
            calls: false,
            messages: false,
            notifications: false,
            sounds: false,
            videoSounds: false
        }
    },
    methods: {
        goback () {
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
.demo-list-wrap {
  width: 100%;
  max-width: 360px;
  overflow: hidden;
}
p{
    background: #ccc;
    color:#000;
    padding:10px;
}
</style>


