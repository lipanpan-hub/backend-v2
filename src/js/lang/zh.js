import zhLocale from "element-ui/lib/locale/lang/zh-CN"; //引入element语言包

const zh = {
  title: {
    "mp-wechat-menu": "公众号菜单",
    login: "登录",
    dashboard: "主页",
    decoration: "装修",
    decoration_pc: "电脑端",
    decoration_h5: "移动端",
    role: "VIP会员",
    order: "全部订单",
    "order-detail": "订单详情",
    promocode: "优惠码",
    promocodecreate: "添加优惠码",
    promocode_import: "优惠码批量导入",
    promocode_export: "优惠码批量生成",
    withdrawOrders: "余额提现",
    system: "系统",
    qa: "问答",
    operate: "运营",
    "system-config": "系统配置",
    "mp-wechat": "微信公众号",
    "system-administrator": "管理人员",
    "system-adminroles": "管理员角色",
    createadmin: "添加管理员",
    updateadmin: "编辑管理员",
    createadminroles: "添加管理员角色",
    updateadminroles: "编辑管理员角色",
    administrator: {
      "change-password": "修改密码",
    },
    "system-application": "功能模块",
    member: {
      name: "用户",
      index: "用户列表",
      create: "添加用户",
      profile: "实名信息",
      import: "用户批量导入",
      detail: "用户详情",
      edit: "用户编辑",
      tags: "用户标签",
      remark: "用户备注",
      credit1: "用户积分",
      tag: {
        index: "用户标签列表",
        create: "添加用户标签",
        edit: "编辑用户标签",
      },
    },
    miaosha: {
      name: "秒杀",
      orders: {
        index: "秒杀订单",
      },
      goods: {
        index: "秒杀课程",
        create: "添加秒杀课程",
        update: "编辑秒杀课程",
      },
    },
    creditMall: {
      name: "积分商城",
      index: "商品列表",
      create: "添加商品",
      update: "编辑商品",
      orders: {
        index: "积分订单",
        update: "编辑积分订单",
        send: "积分订单发货",
      },
    },
    tuangou: {
      name: "团购",
      orders: "团购订单",
      goods: {
        index: "团购课程",
        create: "添加团购课程",
        update: "编辑团购课程",
        order: "团购订单",
        refund: "团购退款订单",
        tuanorder: "团列表",
        detail: "团列表详情",
      },
    },
    learningpath: {
      name: "学习路径",
      path: {
        name: "学习路径",
        index: "学习路径",
        create: "添加学习路径",
        update: "编辑学习路径",
        category: {
          index: "学习路径分类",
          create: "添加学习路径分类",
          update: "编辑学习路径分类",
        },
      },
      step: {
        name: "步骤",
        index: "学习步骤",
        create: "添加学习步骤",
        update: "编辑学习步骤",
        relation: {
          index: "学习步骤关联",
          create: "添加步骤关联",
          update: "编辑步骤关联",
        },
      },
    },
    multi_level_share: {
      name: "三级分销",
      poster: {
        index: "分销海报",
        create: "添加分销海报",
        update: "编辑分销海报",
      },
      goods: {
        index: "分销课程",
        create: "添加分销课程",
        update: "编辑分销课程",
      },
    },
    live: {
      name: "直播",
      course: {
        name: "直播课",
        index: "直播课程",
        create: "添加直播课程",
        update: "编辑直播课程",
        comment: "直播课程评论",
        category: {
          index: "直播课程分类",
          create: "添加直播课程分类",
          update: "编辑直播课程分类",
        },
        chapter: {
          index: "直播课程章节",
          create: "添加直播课程章节",
          update: "编辑直播课程章节",
        },
        users: {
          index: "直播课程学员",
        },
        video: {
          index: "直播排课",
          create: "添加直播排课",
          update: "编辑直播排课",
          play: "开播",
          watch: "观看用户",
          chat: "聊天室内容",
        },
      },
      teacher: {
        name: "讲师",
        index: "直播讲师",
        create: "添加直播讲师",
        update: "编辑直播讲师",
      },
    },
    wechat: {
      messagereply: {
        index: "公众号消息",
        create: "公众号添加规则",
        update: "公众号编辑规则",
      },
    },
    codeExchanger: {
      name: "兑换码",
      index: "兑换码",
      create: "添加兑换码",
      update: "编辑兑换码",
      codes: "兑换码",
    },
    snapshot: {
      name: "随机拍照",
      index: "学习照片",
      images: "学习照片",
    },
    topic: {
      name: "图文",
      index: "图文列表",
      create: "添加图文",
      update: "编辑图文",
      order: "图文学员",
      comment: "图文文章评论",
      category: {
        index: "图文分类管理",
        create: "添加图文分类",
        update: "编辑图文分类",
      },
    },
    wenda: {
      question: {
        index: "站内问答",
        answer: "问题回答",
        comment: "问题评论",
        category: {
          index: "问题分类",
          create: "添加分类",
          update: "编辑分类",
        },
      },
    },
    course: {
      vod: {
        index: "录播",
        create: "添加录播课程",
        update: "编辑录播课程",
        detail: "录播学员",
        "video-import": "视频批量导入",
        comment: "课程评论",
        category: {
          index: "课程分类管理",
          create: "添加课程分类",
          update: "编辑课程分类",
        },
        chapter: {
          index: "课程章节管理",
          create: "添加课程章节",
          update: "编辑课程章节",
        },
        attach: {
          index: "课程附件管理",
          create: "添加课程附件",
        },
        record: {
          index: "观看记录",
        },
        video: {
          index: "视频管理",
          create: "添加视频",
          update: "编辑视频",
          subscribe: "视频销售记录",
          "watch-records": "视频观看记录",
          comments: "视频评论",
          hls: {
            aliyun: "阿里云视频加密",
            tencent: "腾讯云视频加密",
          },
        },
      },
      xiaobanke: {
        name: "大小班",
        course: {
          index: "大小班",
          create: "添加大小班",
          update: "编辑大小班",
        },
        teacher: {
          index: "讲师管理",
          create: "添加讲师",
          update: "编辑讲师",
        },
        categories: {
          index: "大小班分类",
          create: "添加大小班分类",
          update: "编辑大小班分类",
        },
        order: {
          index: "大小班订单列表",
          teacher: "添加大小班订单讲师",
        },
      },
    },
    singlepage: {
      index: "单页面",
      create: "添加单页面",
      update: "编辑单页面",
    },
    meedubook: {
      book: {
        index: "电子书",
        create: "添加电子书",
        update: "编辑电子书",
        comment: "电子书评论",
        users: "学员",
        category: {
          index: "电子书分类管理",
          create: "添加电子书分类",
          update: "编辑电子书分类",
        },
        chapter: {
          index: "电子书章节管理",
          create: "添加电子书章节",
          update: "编辑电子书章节",
        },
        article: {
          index: "电子书文章管理",
          create: "添加电子书文章",
          update: "编辑电子书文章",
          comment: "电子书文章评论",
        },
      },
    },
    exam: {
      name: "考试",
      paper: {
        name: "试卷",
        index: "试卷",
        create: "新建试卷",
        update: "编辑试卷",
        userpaper: "考试记录",
        user: "订阅学员",
        stat: "分数统计",
        question: "组卷",
        questionadd: "添加试题",
        marking: "阅卷",
        category: {
          index: "试卷分类",
          create: "添加试卷分类",
          update: "编辑试卷分类",
        },
      },
      mockpaper: {
        name: "模拟",
        index: "模拟试卷",
        create: "新建模拟试卷",
        update: "编辑模拟试卷",
        userpaper: "考试记录",
        user: "订阅学员",
        stat: "分数统计",
        category: {
          index: "模拟试卷分类",
          create: "添加模拟试卷分类",
          update: "编辑模拟试卷分类",
        },
      },
      question: {
        name: "题库",
        index: "题库",
        create: "添加试题",
        update: "编辑试题",
        userpaper: "考试记录",
        import: "试题批量导入",
        category: {
          index: "试题分类",
          create: "添加试题分类",
          update: "编辑试题分类",
        },
      },
      practice: {
        name: "练习",
        index: "练习",
        create: "新建练习",
        update: "编辑练习",
        user: "参与学员",
        progress: "练习进度",
        category: {
          index: "练习分类",
          create: "添加练习分类",
          update: "编辑练习分类",
        },
        chapter: {
          index: "练习章节",
          create: "添加练习章节",
          update: "编辑练习章节",
          question: {
            index: "章节组卷",
            create: "添加章节组卷",
          },
        },
      },
    },
    coursename: "课程",
    finance: "财务",
  },
  commen: {
    Locale: "zhLocale",
    logintitle: "首页",
    indextitle: "主面板",
    operation_management: "运营管理",
    decoration_pc: "电脑端",
    decoration_h5: "移动端",
    micro_page: "微页面",
    comment_management: "评论管理",
    system_configuration: "系统配置",
    course_management: "课程管理",
    exam_practice: "考试练习",
    marketing_center: "营销中心",
    user_management: "用户管理",
    vip: "VIP会员",
    transaction_management: "交易管理",
  },
  login: {
    login: "立即登录",
    tipmes1: "请输入管理员账号",
    tipmes2: "请输入账户密码",
    title: "登录后台",
    langtext: "简体中文",
    username_required: "请您输入管理员账号",
    password_required: "请您输入密码",
  },
  rightmenu: {
    dropdown_editpassword: "修改密码",
    dropdown_logout: "退出",
    oldpassword: "旧密码",
    newpassword: "新密码",
    confirm_password: "确认密码",
    submit: "提交",
  },
  index: {
    day_income: "今日收入",
    yes_income: "昨天收入",
    day_paid: "今日付费用户",
    yes_paid: "昨天付费用户",
    compared_yesterday: "较昨日",
    allnum: "总用户",
    month_income: "本月总收益",
    day_increase: "今日新增",
    month_increase: "较上月",
    quick_acsess: "快速访问",
    demand_course: "录播课程",
    live_course: "直播课程",
    graphic_course: "图文课程",
    ebook: "电子书",
    curriculum_path: "课程路径",
    testpaper: "试卷",
    statistical_analysis: "统计分析",
    query: "查询",
    new_registered_users: "新注册用户",
    daily_order_creation: "每日新增订单量",
    daily_order_payment: "每日支付订单量",
    total_dailypayment_orders: "每日支付订单总额",
    start_time: "开始",
    end_time: "结束时间",
  },
  decoration_pc: {
    tab1: "首页展示",
    tab2: "幻灯片",
    tab3: "公告",
  },
  common: {
    success: "成功",
    fail: "失败",
    image: {
      select: "选择图片",
      upload: "上传图片",
      format_alert: "只能上传jpg,png,jpeg,git图文文件",
    },
    cancel: "取消",
    confirm: "确定",
    group: "分组",
    none: "暂无数据",
  },
  member: {
    btn_add: "添加",
    btn_edit: "编辑",
    btn_del: "删除",
    day: "天",
    currency: "￥",
    addpage: {
      display: "显示",
      rolename: "角色名",
      days: "天数",
      charge: "价格",
      placeholder: "如年度会员",
      textplaceholder: "一行一个描述",
      des: "描述",
      btn_back: "返回",
      name_notice: "角色名不能为空",
      day_notice: "天数不能为空",
      charge_notice: "价格不能为空",
      des_notice: "描述不能为空",
      btn_save: "保存",
    },
  },
  ...zhLocale,
};
export default zh;
