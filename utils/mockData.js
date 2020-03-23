const Mock = require('WxMock.js');
const HOST = 'http://www.test.api/';
// Mock.setup({timeout: '200-1000'});
//首页数据模拟
Mock.mock(HOST + 'home/multidata', {
  "data":
    {
      "banner": {
        "context": {"currentTime": 1538014774},
        "isEnd": true,
        "list": [{
          "acm": "3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
          "height": 390,
          "height923": 390,
          "image": "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
          "image923": "https://s10.mogucdn.com/mlcdn/c45406/180926_7d5c521e0aa3h38786lkakebkjlh8_750x390.jpg",
          "link": "https://act.mogujie.com/huanxin0001?acm=3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
          "title": "\u7115\u65b0\u5973\u88c5\u8282",
          "width": 750,
          "width923": 750
        }, {
          "acm": "3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119",
          "height": 390,
          "height923": 390,
          "image": "https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg",
          "image923": "https://s10.mogucdn.com/mlcdn/c45406/180926_14l41d2ekghbeh771g3ghgll54224_750x390.jpg",
          "link": "https://act.mogujie.com/ruqiu00001?acm=3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119",
          "title": "\u5165\u79cb\u7a7f\u642d\u6307\u5357",
          "width": 750,
          "width923": 750
        }, {
          "acm": "3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119",
          "height": 390,
          "height923": 390,
          "image": "https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg",
          "image923": "https://s10.mogucdn.com/mlcdn/c45406/180919_47iclhel8f4ld06hid21he98i93fc_750x390.jpg",
          "link": "https://act.mogujie.com/huanji001?acm=3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119",
          "title": "\u79cb\u5b63\u62a4\u80a4\u5927\u4f5c\u6218",
          "width": 750,
          "width923": 750
        }, {
          "acm": "3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119",
          "height": 390,
          "height923": 390,
          "image": "https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg",
          "image923": "https://s10.mogucdn.com/mlcdn/c45406/180917_0hgle1e2c350a57ekhbj4f10a6b03_750x390.jpg",
          "link": "https://act.mogujie.com/liuxing00001?acm=3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119",
          "title": "\u6d41\u884c\u62a2\u5148\u4e00\u6b65",
          "width": 750,
          "width923": 750
        }],
        "nextPage": 1
      },
      "dKeyword": {
        "context": {"currentTime": 1538014774},
        "isEnd": true,
        "list": [{
          "acm": "3.mce.2_10_1ag5u.6348.0.ccy5br4OlfK0P.pos_0-m_243725-sd_119",
          "defaultKeyWord": "\u5957\u88c5"
        }],
        "nextPage": 1
      },
      "keywords": {
        "context": {"currentTime": 1538014774},
        "isEnd": true,
        "list": [{
          "acm": "3.mce.2_10_185r2.5868.0.ccy5br4OlfK1Y.pos_0-m_190323-sd_119",
          "is_red": "1",
          "words": "\u8fde\u8863\u88d9"
        }, {
          "acm": "3.mce.2_10_185r4.5868.0.ccy5br4OlfK1Z.pos_1-m_190324-sd_119",
          "is_red": "0",
          "words": "\u5c0f\u767d\u978b"
        }, {
          "acm": "3.mce.2_10_185r6.5868.0.ccy5br4OlfK10.pos_2-m_190325-sd_119",
          "is_red": "1",
          "words": "\u7701\u5fc3\u5957\u88c5"
        }, {
          "acm": "3.mce.2_10_185r8.5868.0.ccy5br4OlfK11.pos_3-m_190326-sd_119",
          "is_red": "0",
          "words": "\u788e\u82b1\u8fde\u8863\u88d9"
        }, {
          "acm": "3.mce.2_10_185ra.5868.0.ccy5br4OlfK12.pos_4-m_190327-sd_119",
          "is_red": "1",
          "words": "\u660e\u661f\u540c\u6b3e"
        }, {
          "acm": "3.mce.2_10_185rc.5868.0.ccy5br4OlfK13.pos_5-m_190328-sd_119",
          "is_red": "1",
          "words": "\u9ad8\u8ddf\u978b"
        }, {
          "acm": "3.mce.2_10_185re.5868.0.ccy5br4OlfK14.pos_6-m_190329-sd_119",
          "is_red": "0",
          "words": "\u7f8e\u5986"
        }, {
          "acm": "3.mce.2_10_185rg.5868.0.ccy5br4OlfK15.pos_7-m_190330-sd_119",
          "is_red": "1",
          "words": "\u58a8\u955c"
        }],
        "nextPage": 1
      },
      "recommend": {
        "context": {"currentTime": 1538014774},
        "isEnd": true,
        "list": [{
          "acm": "3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119",
          "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png",
          "link": "http://act.meilishuo.com/10dianlingquan?acm=3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119",
          "sort": 1,
          "title": "\u5341\u70b9\u62a2\u5238"
        }, {
          "acm": "3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
          "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",
          "link": "https://act.mogujie.com/tejiazhuanmai09?acm=3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
          "sort": 2,
          "title": "\u597d\u7269\u7279\u5356"
        }, {
          "acm": "3.mce.2_10_1b610.13730.0.ccy5br4OlfK0W.pos_2-m_260486-sd_119",
          "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_387kgl3j21ff29lh04181iek48a6h_225x225.png",
          "link": "http://act.meilishuo.com/neigouful001?acm=3.mce.2_10_1b610.13730.0.ccy5br4OlfK0W.pos_2-m_260486-sd_119",
          "sort": 3,
          "title": "\u5185\u8d2d\u798f\u5229"
        }, {
          "acm": "3.mce.2_10_1dggg.13730.0.ccy5br4OlfK0X.pos_3-m_313900-sd_119",
          "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_8d4e5adi8llg7c47lgh2291akiec7_225x225.png",
          "link": "http://act.meilishuo.com/wap/yxzc1?acm=3.mce.2_10_1dggg.13730.0.ccy5br4OlfK0X.pos_3-m_313900-sd_119",
          "sort": 4,
          "title": "\u521d\u79cb\u4e0a\u65b0"
        }],
        "nextPage": 1
      }
    }, "returnCode": "SUCCESS", "success": true
});
Mock.mock(HOST + 'home/featuredata', {
  "data":
    {
      "list": [{
        "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",
        "link": "https://act.mogujie.com/tejiazhuanmai09?acm=3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
        "title": "\u597d\u7269\u7279\u5356"
      }, {
        "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png",
        "link": "http://act.meilishuo.com/10dianlingquan?acm=3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119",
        "title": "\u5341\u70b9\u62a2\u5238"
      }, {
        "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_8d4e5adi8llg7c47lgh2291akiec7_225x225.png",
        "link": "http://act.meilishuo.com/wap/yxzc1?acm=3.mce.2_10_1dggg.13730.0.ccy5br4OlfK0X.pos_3-m_313900-sd_119",
        "title": "\u521d\u79cb\u4e0a\u65b0"
      }, {
        "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_387kgl3j21ff29lh04181iek48a6h_225x225.png",
        "link": "http://act.meilishuo.com/neigouful001?acm=3.mce.2_10_1b610.13730.0.ccy5br4OlfK0W.pos_2-m_260486-sd_119",
        "title": "\u5185\u8d2d\u798f\u5229"
      }, {
        "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_8d4e5adi8llg7c47lgh2291akiec7_225x225.png",
        "link": "http://act.meilishuo.com/wap/yxzc1?acm=3.mce.2_10_1dggg.13730.0.ccy5br4OlfK0X.pos_3-m_313900-sd_119",
        "title": "\u521d\u79cb\u4e0a\u65b0"
      }, {
        "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png",
        "link": "http://act.meilishuo.com/10dianlingquan?acm=3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119",
        "title": "\u5341\u70b9\u62a2\u5238"
      }, {
        "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_387kgl3j21ff29lh04181iek48a6h_225x225.png",
        "link": "http://act.meilishuo.com/neigouful001?acm=3.mce.2_10_1b610.13730.0.ccy5br4OlfK0W.pos_2-m_260486-sd_119",
        "title": "\u5185\u8d2d\u798f\u5229"
      }, {
        "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",
        "link": "https://act.mogujie.com/tejiazhuanmai09?acm=3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119",
        "title": "\u597d\u7269\u7279\u5356"
      }]
    }
});

function setGoodsList() {
  const goodsImg = [
    'https://s5.mogucdn.com/mlcdn/c45406/191225_772i66gk50h8a2e96i691ld5dhg9h_460x769.jpg',
    'https://s5.mogucdn.com/mlcdn/c45406/191225_6lblfb79256da19abj5592jkefg21_446x745.jpg',
    'https://s11.mogucdn.com/mlcdn/c45406/191224_7b7ec3187h66b03iabhec23h71727_526x877.jpg',
    'https://s5.mogucdn.com/mlcdn/c45406/200105_85b99609k9be36b1b7kf2fahdbe8i_464x774.jpg',
    'https://s11.mogucdn.com/mlcdn/c45406/200210_2h04h4b0g4fi5fg0ehl6f2h2c12be_862x1438.jpg',
    'https://s5.mogucdn.com/mlcdn/c45406/200106_01l4ajh43abhejlg9e0k31hlh93kc_1080x1620.jpg',
    'https://s11.mogucdn.com/mlcdn/c45406/191207_51ah2825kk50ia87jljd4a6h3ah73_494x824.jpg',
    'https://s11.mogucdn.com/mlcdn/c45406/191230_6g6kbkf7ibfflhf2he0i9f0d9a05h_486x810.jpg',
    'https://s11.mogucdn.com/mlcdn/c45406/200210_0gk11dil4gfd9e1fd0kak36ae7k6k_1080x1620.jpg',
    'https://s11.mogucdn.com/mlcdn/c45406/191216_36202lg65556374g4ch6017424lcl_490x819.jpg'
  ];
  const goodsTitle = [
    '气质女生必备款式！哪一套是你的菜～喜欢的宝宝收藏哦#家中一日游穿搭#',
    '适合已婚女性婚后套装，得体成熟有气质#圣诞节这样穿一定有人约！##直男杀手必备：网红针织套装#',
    '最后一套太美了#最好看的暖冬出游穿搭！##微胖女孩看过来，显瘦穿它#',
    '#我的新年第一天穿搭！#蹦迪年会这样穿你就是全场最靓的仔#一击秒杀的年会穿搭来了#',
    '#过年啦，过年啦。入手#新年时节应该有喜庆的气氛。红色最合适#我的年货清单#',
    '还在犹豫年会聚餐穿什么？姐妹，低调优雅的小黑裙了解一下💃悄悄说，小黑裙超显瘦！#我最爱的冬日穿搭cp##今日份对镜自拍#',
    '冻死也要入手的毛衣，最后套也太好看了^_^#小个子亲妈级显高搭配攻略##年末毛衣总结：划重点了！#',
    '160以下这样穿，胸部以下全是腿#小个子亲妈级显高搭配攻略##年末毛衣总结：划重点了！#',
    '是不是跟我一样不好穿套装怕个子矮又胖，有了这套显瘦又酷酷我就有自信#开箱挑战#',
    '微胖女生 ，只要裤子选的对，胯宽腿粗就追不上我！#双十二自用家居好物分享##双12爆款套装榜单，买它！#',
  ];
  let list = [];
  for (let i = 0; i < 10; i++) {
    const n = parseInt(Math.random() * 10);
    list.push({img: goodsImg[n], title: goodsTitle[n]})
  }
  return list;
}

(function () {
  for (let i = 0; i < 5; i++) {
    Mock.mock(HOST + 'home/goodsdata?type=pop&page=' + (i + 1), {"data": {"page": (i + 1), "list": setGoodsList()}});
  }
  Mock.mock(HOST + 'home/goodsdata?type=pop&page=6', {"data": null});
})();
(function () {
  for (let i = 0; i < 2; i++) {
    Mock.mock(HOST + 'home/goodsdata?type=new&page=' + (i + 1), {"data": {"page": (i + 1), "list": setGoodsList()}});
  }
  Mock.mock(HOST + 'home/goodsdata?type=new&page=3', {"data": null});
})();
(function () {
  for (let i = 0; i < 4; i++) {
    Mock.mock(HOST + 'home/goodsdata?type=sell&page=' + (i + 1), {"data": {"page": (i + 1), "list": setGoodsList()}});
  }
  Mock.mock(HOST + 'home/goodsdata?type=sell&page=5', {"data": null});
})();
//分类页数据模拟
(function () {
  const list = ["流行", "上衣", "裤子", "裙子", "内衣", "女鞋", "男友", "包包", "运动", "配饰", "美妆", "个护", "家居", "百货", "母婴", "食品"];
  Mock.mock(HOST + 'category/categorytype', {"data": {"list": list}});
})();

(function () {
  const data =
    [
      {
      "img": "https://s2.mogucdn.com/mlcdn/c45406/190221_0e9dcfj2ecb224ae8h221762gdi5h_130x130.jpg_200x9999.v1c7E.81.webp",
      "tit": "棉衣棉服"
    }, {
      "img": "https://s2.mogucdn.com/p2/161013/upload_6843g6jfdg0gk1f9edaaj0j48a538_130x130.jpg_200x9999.v1c7E.81.webp",
      "tit": "毛呢外套"
    }, {
      "img": "https://s2.mogucdn.com/mlcdn/c45406/181120_3k39326385kik3011l36b4hgkc5hi_120x120.jpg_200x9999.v1c7E.81.webp",
      "tit": "羽绒服"
    }, {
      "img": "https://s11.mogucdn.com/mlcdn/c45406/181017_22clfjk46k211c96e7ke9jkg16ceb_120x120.jpg_200x9999.v1c7E.81.webp",
      "tit": "卫衣"
    }, {
      "img": "https://s17.mogucdn.com/mlcdn/c45406/170906_736616a8k65c11k7fk3fk88797ek8_120x120.jpg_200x9999.v1c7E.81.webp",
      "tit": "毛衣"
    }, {
      "img": "https://s18.mogucdn.com/mlcdn/c45406/191027_3ec448kjhhhgkf260gg2da25a83aa_180x180.jpg_200x9999.v1c7E.81.webp",
      "tit": "保暖套装"
    }, {
      "img": "https://s2.mogucdn.com/mlcdn/c45406/191121_83c6klje9f3fdc3d888c8g6fcfekk_180x180.jpg_200x9999.v1c7E.81.webp",
      "tit": "连衣裙"
    }, {
      "img": "https://s2.mogucdn.com/mlcdn/c45406/191121_2b6edlki2l6b43ib6a0gab45313ke_180x180.jpg_200x9999.v1c7E.81.webp",
      "tit": "半身裙"
    }, {
      "img": "https://s2.mogucdn.com/mlcdn/c45406/180712_6a4a266857ad703f0014kcj3k2gf2_130x130.jpg_200x9999.v1c7E.81.webp",
      "tit": "牛仔裤"
    }, {
      "img": "https://s2.mogucdn.com/mlcdn/c45406/181209_42e27823g33lhjkgg2lj7lfd2kca6_120x120.jpg_200x9999.v1c7E.81.webp",
      "tit": "男士棉服"
    }, {
      "img": "https://s2.mogucdn.com/mlcdn/c45406/190109_30620a2if4li1lakb4250dhi56229_120x120.jpg_200x9999.v1c7E.81.webp",
      "tit": "百搭卫衣"
    }, {
      "img": "https://s2.mogucdn.com/mlcdn/c45406/181016_5bkb5l31a7e68a5b7adlh08fa6i1d_120x120.jpg_200x9999.v1c7E.81.webp",
      "tit": "潮男夹克"
    }, {
      "img": "https://s2.mogucdn.com/mlcdn/c45406/181122_49jhlaikbf36il2ga4b1ff37i46kd_120x120.jpg_200x9999.v1c7E.81.webp",
      "tit": "男士休闲裤"
    }, {
      "img": "https://s2.mogucdn.com/mlcdn/c45406/190218_31jfhk5ei14275f9e9ei75k34d4f4_120x120.png_200x9999.v1c7E.81.webp",
      "tit": "暖男毛衣"
    }, {
      "img": "https://s11.mogucdn.com/mlcdn/c45406/180523_8f53b86fafljll11hjh4b8i0h9i10_120x120.png_200x9999.v1c7E.81.webp",
      "tit": "男士休闲鞋"
    }, {
      "img": "https://s17.mogucdn.com/mlcdn/c45406/171007_2ifji5d8fd6f06c0bh711la1ffie8_120x120.jpg_200x9999.v1c7E.81.webp",
      "tit": "靴子"
    }, {
      "img": "https://s18.mogucdn.com/mlcdn/c45406/181107_2d9k13a25f4ada6ahigh0k30l80ai_120x120.jpg_200x9999.v1c7E.81.webp",
      "tit": "活力运动"
    }, {
      "img": "https://s2.mogucdn.com/mlcdn/c45406/180227_069ci8he1419k16did4c1lk9l5j3g_120x120.jpg_200x9999.v1c7E.81.webp",
      "tit": "小白鞋"
    }
    ];
  const allData = [];
  for (let i = 0; i < 16; i++) {
    const arr = [];
    for (let j = 0; j < 30; j++) {
      const num = parseInt(Math.random() * 18);
      arr.push(data[num])
    }
    allData.push(arr)
  }
  Mock.mock(HOST + 'category/categorydata', {"data": {"list": allData}});
})();

//商品详情数据
(function () {
  const img = [
    ["https://s11.mogucdn.com/mlcdn/c45406/191101_6aik58g7cg0g8jk8ibd23gj75egkc_5120x7680.jpg_640x960.v1cAC.70.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191101_2371f46f548506lehaceejlclf1a6_5120x7680.jpg_640x960.v1cAC.70.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191101_81g3053b988ia002kd857g101f3kc_5120x7680.jpg_640x960.v1cAC.70.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191101_7b1a4elgilej78g3fh1cljgf2ahb8_5120x7680.jpg_640x960.v1cAC.70.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191101_40k53g9e1lbhki923k59k353791bh_5120x7680.jpg_640x960.v1cAC.70.webp"],
    ["https://s5.mogucdn.com/mlcdn/c45406/191210_66kga6hl45i15g92542jk12bek6l6_4318x6477.jpg_640x960.v1cAC.70.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_0diafhilc2afjcffifj554ha2ej9f_4318x6477.jpg_640x960.v1cAC.70.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_846ich9j69kce38gbkbi8779klfeh_4318x6477.jpg_640x960.v1cAC.70.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_6632h0f5b98ljggg6877b8e5jd1e1_4318x6477.jpg_640x960.v1cAC.70.webp"],
    ["https://s11.mogucdn.com/mlcdn/c45406/180920_4hc3ah66h240jjc7cb8k3g7412986_640x960.jpg_640x960.v1cAC.70.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/180920_6l5b6ah4e5l798gigkk302jc4f7lb_640x960.jpg_640x960.v1cAC.70.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/180920_00k2l29d4b5k32hak8e660153577g_640x960.jpg_640x960.v1cAC.70.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/180920_55b67aad0efbh46id069g19c81l67_640x960.jpg_640x960.v1cAC.70.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/180920_2g9846c5bfkjf0g4k1l386l5ej679_640x960.jpg_640x960.v1cAC.70.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/180920_610gblc1ag5375ge8jfei9e7ggg09_640x960.jpg_640x960.v1cAC.70.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/180920_6lebd06k94d0186ii2ll82j6hc08c_640x960.jpg_640x960.v1cAC.70.webp"]];
  const originalPrice = [99.86, 99.9, 152];
  const discountPrice = [69.9, 79.9, 65];
  const discount = ['7折', '女神价', '优惠价'];
  const title = ['秋冬短款加绒加厚卫衣女春秋薄新款宽松韩版套头上衣潮', '秋冬新款韩版加绒加厚连帽立领纯色卫衣女宽松显瘦外套慵懒风上衣', '小白鞋女秋季新款韩版学生百搭街拍板鞋低帮平底休闲女鞋'];
  const postage = ['免邮费', '免邮费', '免邮费'];
  const address = ['广东广州', '', '安徽芜湖'];
  const color = [
    [{
      col: '黄色',
      sto: '981',
      img: 'https://s11.mogucdn.com/mlcdn/c45406/191101_6aik58g7cg0g8jk8ibd23gj75egkc_5120x7680.jpg_128x999.jpg'
    }, {
      col: '蓝色',
      sto: '985',
      img: 'https://s5.mogucdn.com/mlcdn/c45406/191101_1llhe1gcd63el5c6abhd5j3d9h652_5120x7680.jpg_128x999.jpg'
    }, {
      col: '孔雀蓝',
      sto: '971',
      img: 'https://s5.mogucdn.com/mlcdn/c45406/191101_5a43h4j8bh8h6b3jdfd2h0ljb5e59_5120x7680.jpg_128x999.jpg'
    }, {
      col: '米色',
      sto: '992',
      img: 'https://s11.mogucdn.com/mlcdn/c45406/191101_21lchcee507a5kijgcjg45afb6adj_5120x7680.jpg_128x999.jpg'
    }, {
      col: '玫粉',
      sto: '980',
      img: 'https://s5.mogucdn.com/mlcdn/c45406/191101_482fdb333chg792f96j3akekhd7d9_5120x7680.jpg_128x999.jpg'
    }],
    [{
      col: '绿色连帽卫衣',
      sto: '999',
      img: 'https://s5.mogucdn.com/mlcdn/c45406/191210_115fb4eiii77iae4bfb5b28k3i1l3_4318x6477.jpg_128x999.jpg'
    }, {
      col: '粉色连帽卫衣',
      sto: '945',
      img: 'https://s11.mogucdn.com/mlcdn/c45406/191210_6a4kld6bbef6ge4k16abbak84d294_4318x6477.jpg_128x999.jpg'
    }, {
      col: '灰色连帽卫衣',
      sto: '911',
      img: 'https://s5.mogucdn.com/mlcdn/c45406/191210_007d9j114gdb66b257a521dilkf48_4318x6477.jpg_128x999.jpg'
    }, {
      col: '杏色连帽卫衣',
      sto: '992',
      img: 'https://s11.mogucdn.com/mlcdn/c45406/191210_7je424blb92b58c1d00fijjbk7kfd_4318x6477.jpg_128x999.jpg'
    }],
    [{
      col: '白粉',
      sto: '673',
      img: 'https://s5.mogucdn.com/mlcdn/c45406/180101_4cg047ea4923240ai3all5ed3k6el_640x960.jpg_128x999.jpg'
    }, {
      col: '白黑',
      sto: '168',
      img: 'https://s5.mogucdn.com/mlcdn/c45406/180101_6k8jdhi251j21c19d68k82fi1d5ii_640x960.jpg_128x999.jpg'
    }, {
      col: '白绿',
      sto: '98',
      img: 'https://s5.mogucdn.com/mlcdn/c45406/180101_8ek87a9c028hgl5j90lbgd8cll6da_640x960.jpg_128x999.jpg'
    }, {
      col: '全白',
      sto: '685',
      img: 'https://s11.mogucdn.com/mlcdn/c45406/180101_332gjl4i7k8eeh291bj7880hf24k0_640x960.jpg_128x999.jpg'
    }, {
      col: '白兰',
      sto: '643',
      img: 'https://s5.mogucdn.com/mlcdn/c45406/180101_193f661l395511fcbj6c1c5jhcdk2_640x960.jpg_128x999.jpg'
    }]
  ];
  const size = [
    ['均码'],
    ['S', 'M', 'L', 'XL'],
    [35, 36, 37, 38, 39, 40]
  ];
  const comment = [198, 245, 152];
  const sales = [88, 123, 104];
  const shop = [
    {
      img: 'https://s11.mogucdn.com/mlcdn/c45406/180911_58c8gklj32b5b521059kjf558idkd_200x200.jpg_120x120.webp',
      tit: '女神de衣橱',
      star: '3',
      products: '495',
    }, {
      img: 'https://s11.mogucdn.com/pic/141211/1agxqe_ieygmodbmiztmzrqmuytambqmmyde_120x120.jpg_120x120.webp',
      tit: '红柚美衣',
      star: '2',
      products: '149',
    }, {
      img: 'https://s5.mogucdn.com/p1/160225/q9lck_ifrggyztgmywkzlfgyzdambqmeyde_200x200.jpg_120x120.webp',
      tit: '米苏诺',
      star: '4',
      products: '419',
    },
  ];
  const des = ['2019年秋冬短款加绒加厚卫衣女春秋薄新款宽松韩版套头上衣潮', '码数推荐：S码（80-100斤）；M码（100-110斤）；L码（110-120斤）；XL码（120-130斤）', '收藏加购 优先发货'];
  const detail = [
    ["https://s11.mogucdn.com/mlcdn/c45406/191101_55je87dc1kbg2k85eciek207bj47i_790x334.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191101_57398dg35g39akc01fh8lf0887if7_750x900.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191101_1lk5cb89c3lf6ldc6b9725367j1ji_750x900.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/191101_1cgf24c6d96flfb0bi9fc9719ebgi_750x900.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191101_6hf8a4ch1a86cjj7k3g7dblf5bl46_750x900.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191101_231l3447ce251dba03085j2l9b525_750x900.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191101_29hbd71af874e7j4624jjj3f1l339_750x900.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191101_72g3j43027d3hga0bgf8199jiaf28_750x900.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/191101_5l29fkkk7ca48020819bhc2k1clbd_750x900.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191101_51il1786fh650610g5ehdj1a48i2b_750x900.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191101_4e71230bd5i1ledae3fgfc4aa69f7_750x900.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/191101_2cgajcca9a1lfk1je8h8h722h75i5_750x900.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191101_0dfb40a35c5db0c8idh49d4kf0hd2_750x900.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191101_30afd2dafdg22kgifhega0ak26k25_750x900.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191101_1k54c6i0ld02kchig22cafe8c900e_750x900.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/191101_2bi8e3ec01fjh6kdlg5h1i5fg7iha_750x900.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191101_8c04bjehh63hh7lg998ig44h9g8jj_750x900.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191101_3edcel7bf8j5kk9ljgjk1gejald78_750x900.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191101_2ledbhgld8d70ij70ikd6c54fc2be_750x900.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/191101_598ih113jf55h7aej7hj8f813160f_750x900.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191101_8dheab4c3c97dlgbaa4ek9c97k32l_750x900.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191101_37ia7d9ladlhk6a23hb1c3l6abka0_750x900.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191101_8cdjh77i4j2615ad1l8l2eihe11f6_750x900.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/191101_7hgh6id3g6haciffl025akefdj2bd_750x900.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191101_27je79bdd4laig36ebj88d850503d_750x900.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c024f5/190417_2d51ljj2a42lddkg49ibag494g3ca_1125x540.png_468x468.webp"],
    ["https://s11.mogucdn.com/mlcdn/c45406/191210_6l45h8c39dhf9e9l41cab567lhidd_1768x2086.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_2g0fg86ke1ag48e47lii1gljiheek_1768x2678.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/191210_5cb140454d2lkid03jkj6f3fa9gbf_1768x2437.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_3e95l7560e8ge5025g571hik2l9j0_1768x2996.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/191210_15ded9h9643djlla26113h9ahh78b_1768x2529.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/191210_2a82ck624lkk13i726abc8c2i0hd4_1768x1379.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/191210_1ci63lhg2a12295alhjg3iab3932h_1768x1301.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_44136968l00i01254ac8g1fcdih0i_1768x735.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_22j39057e1g33aldhd2e2h5fh1371_1768x2810.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_4l1la4d8lcjik3ljahclgeikhjbj3_1768x2515.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_66j6i8h9dgi41d761ek7ehhgh0i21_1768x2515.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/191210_442d6d2f0e427i0a38fl2a1f79i7h_1768x2661.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/191210_5g8i5e86hggaf839d7i9ij3keh6jf_1768x2515.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_3chkjddd3a3i71d3h1i9c2a78d1a3_1768x2515.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_40bi8hah5chhj9l642e08eli3k32e_1768x2520.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_16gbd4983hel21k14253l33jkcie2_1768x2211.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/191210_88il0k163f9jece81k5d76i1k8e7a_1768x2511.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/191210_7990j92idc061aie32d0792eg2hba_1768x2515.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/191210_14348d7fcf1lh42gh6gd6kib3lfa0_1768x2560.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_4680c38hg7g96b2lf7g5i87blki1k_1768x2515.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_18lj6c1hb71jcihikib5lla05eflk_1768x2515.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_871h6f73956j6chib0hg5ig1jb427_1768x2661.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_0db6b2813fad26gfffd6aed60jke9_1768x2515.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_60cj11839k719lij9khjl521186l0_1768x2515.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_8315ki5b15jfiie9k7eg5hj32f9gk_1768x2520.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/191210_757hbc303g76k7gbdkjlabebg7kag_1768x2211.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/191210_212c2lbi88e847802b53g4j22l3ca_1768x1921.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/191210_15cgjc3ec6921id0eaha68a87j3j5_1768x2515.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_8ciili04l98hf0e1ca7j13kfggike_1768x2485.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_8bb1342jd1je93i0h1lflg9455gj7_1768x1926.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_3430bk6l66478802hje722fidi4bg_1768x2515.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_36fk43i0aa6efkdga47debafeib05_1768x2661.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/191210_34fia431idl995ajl9kdcibbkfk0a_1768x2515.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_63a70dbell2ib55dj19c5bll4l49a_1768x2515.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/191210_463i05fkea6eh447bbffaa1hfkg4b_1768x2520.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_65da7ajf50g6dfclek8j26ijdgal7_1768x2211.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_8848acj64fa9i5jc7b97ih9e04jaj_1768x2511.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/191210_78cd522lfjd0i70a4e8fb789kii4i_1768x1926.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/191210_799gl7jgc1h4a2k7gb2e7jgb6bfli_1768x2560.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/191210_51e4ggc309i3e658c2ea0jj9k66f5_1768x2515.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c024f5/190417_2d51ljj2a42lddkg49ibag494g3ca_1125x540.png_468x468.webp"],
    ["https://s11.mogucdn.com/mlcdn/c45406/180920_86aabj401g0g350aa1h88gg9gd8h1_800x1086.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/180920_46e1gh0lc9ge8aa641d80ec8dc6e0_800x625.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/180920_7ih0elea6kdb5kl68i4a2ggfjll8e_800x1177.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/180920_33225i9923l4fhi616gg39291fd14_800x1301.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/180920_4c8hf88c47gb98c6dabecc28dh8a9_800x1335.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/180920_82lbjb897k08d7e7ag8i67ac8g7d2_800x1463.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/180920_166bg8f0l19g7ci9ajf5l1j96fd15_800x1380.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/180920_4ae4l533i5hahe7kcag72aeigahg2_800x1477.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/180920_01iedi2b6ab674g0ckc6dg4b6j405_800x1323.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/180920_2bd0jlldgfe5b8a96f1jfe86kglel_800x1498.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/180920_7kk10cbf3ciceia7378cb6k8h6e13_800x1356.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/180920_4c15aecck9dkd1jla5d31l9j7aihe_800x1487.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/180920_1k6ifec9lge0i8l1614c63jkjc304_800x1343.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/180920_10cagl5lihjl7l1lb7bd7jh0733id_800x1483.jpg_468x468.webp",
      "https://s5.mogucdn.com/mlcdn/c45406/180920_31ghdkkkeka5545df5lj22kdfb59a_800x853.jpg_468x468.webp",
      "https://s11.mogucdn.com/mlcdn/c024f5/190417_2d51ljj2a42lddkg49ibag494g3ca_1125x540.png_468x468.webp"]
  ];
  for (let i = 0; i < 3; i++) {
    Mock.mock(HOST + 'detail/detaildata?id='+i, {
      "data": {
        "info": {
          id: '3386742'+i,
          img: img[i],
          originalPrice: originalPrice[i],
          discountPrice: discountPrice[i],
          discount: discount[i],
          title: title[i],
          postage: postage[i],
          address: address[i],
          color: color[i],
          size: size[i],
          comment: comment[i],
          sales: sales[i],
          shop: shop[i],
          des: des[i],
          detail: detail[i],
        }
      }
    });
  }
})();
