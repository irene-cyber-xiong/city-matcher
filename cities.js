// 城市数据库 - 精简版
const cities = [
    {
        name: "北京",
        nameEn: "Beijing",
        country: "中国",
        continent: "asia",
        elements: { primary: "土", secondary: "水", tertiary: "金" },
        description: "政治文化中心，稳重厚重的北方气质",
        characteristics: { climate: "干燥，四季分明", pace: "稳定但压抑", culture: "传统、规则、等级", industry: "政府、金融、科技、文化" },
        pros: ["资源集中", "机会多", "文化底蕴深厚", "基础设施完善"],
        cons: ["空气质量差", "生活成本高", "节奏压抑", "土气太重"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "上海",
        nameEn: "Shanghai",
        country: "中国",
        continent: "asia",
        elements: { primary: "水", secondary: "金", tertiary: "木" },
        description: "东方巴黎，精致务实的商业都会",
        characteristics: { climate: "湿润，四季分明", pace: "快但有序", culture: "精致、务实、国际化", industry: "金融、贸易、时尚、科技" },
        pros: ["国际化程度高", "金融行业发达", "文化多元", "基础设施好"],
        cons: ["生活成本高", "竞争激烈", "节奏快", "排外感"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "深圳",
        nameEn: "Shenzhen",
        country: "中国",
        continent: "asia",
        elements: { primary: "木", secondary: "水", tertiary: "火" },
        description: "年轻的创业之城，快速生长的科技森林",
        characteristics: { climate: "亚热带，温暖湿润", pace: "快，年轻化", culture: "创新、务实、包容", industry: "科技、制造、金融、创业" },
        pros: ["年轻有活力", "创业氛围好", "气候宜人", "包容性强"],
        cons: ["生活成本高", "竞争激烈", "文化底蕴浅", "节奏快"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "成都",
        nameEn: "Chengdu",
        country: "中国",
        continent: "asia",
        elements: { primary: "水", secondary: "土", tertiary: "金" },
        description: "天府之国，慢节奏享乐主义的盆地文化",
        characteristics: { climate: "湿润多雾，少日照", pace: "慢，悠闲", culture: "包容、享乐、人情味", industry: "科技、文创、餐饮、旅游" },
        pros: ["生活舒适", "美食天堂", "生活成本适中", "文化包容"],
        cons: ["日照少", "节奏太慢", "职业天花板低", "湿气重"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "杭州",
        nameEn: "Hangzhou",
        country: "中国",
        continent: "asia",
        elements: { primary: "水", secondary: "木", tertiary: "土" },
        description: "人间天堂，温润雅致的江南水乡",
        characteristics: { climate: "温润，四季分明", pace: "适中，不急不慢", culture: "雅致、文艺、商业", industry: "互联网、电商、文创、旅游" },
        pros: ["环境优美", "互联网产业发达", "生活品质高", "文化氛围好"],
        cons: ["生活成本上升快", "夏天湿热", "竞争加剧", "交通拥堵"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "旧金山",
        nameEn: "San Francisco",
        country: "美国",
        continent: "north-america",
        elements: { primary: "金", secondary: "水", tertiary: "木" },
        description: "科技与金融的完美结合，自由开放的湾区文化",
        characteristics: { climate: "温和湿润，海湾气候", pace: "快但不压抑", culture: "多元、创新、包容", industry: "科技、金融、创业" },
        pros: ["金融科技行业发达", "文化多元包容", "气候宜人", "创新氛围浓厚"],
        cons: ["生活成本极高", "竞争激烈", "交通拥堵", "地震风险"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "纽约",
        nameEn: "New York",
        country: "美国",
        continent: "north-america",
        elements: { primary: "金", secondary: "水", tertiary: "火" },
        description: "全球金融中心，快节奏高压力的大都会",
        characteristics: { climate: "四季分明，冬冷夏热", pace: "极快，24小时不停歇", culture: "多元、竞争、精英", industry: "金融、媒体、艺术、时尚" },
        pros: ["金融行业天花板最高", "机会多样化", "文化艺术丰富", "国际化程度高"],
        cons: ["生活成本高", "压力极大", "节奏太快", "冬天寒冷"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "东京",
        nameEn: "Tokyo",
        country: "日本",
        continent: "asia",
        elements: { primary: "金", secondary: "木", tertiary: "水" },
        description: "精致有序的超级都市，传统与现代的完美融合",
        characteristics: { climate: "温带，四季分明", pace: "快但有序", culture: "精致、礼貌、压抑", industry: "科技、金融、文化、制造" },
        pros: ["城市管理一流", "文化丰富", "安全干净", "科技发达"],
        cons: ["生活成本高", "工作压力大", "社会压抑", "地震风险"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "新加坡",
        nameEn: "Singapore",
        country: "新加坡",
        continent: "asia",
        elements: { primary: "金", secondary: "水", tertiary: "火" },
        description: "花园城市，规则清晰的国际金融中心",
        characteristics: { climate: "热带，全年炎热", pace: "快但有序", culture: "多元、规则、效率", industry: "金融、贸易、科技" },
        pros: ["金融行业发达", "安全有序", "税收优惠", "国际化"],
        cons: ["生活成本高", "规则严格", "文化单调", "天气炎热"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "伦敦",
        nameEn: "London",
        country: "英国",
        continent: "europe",
        elements: { primary: "水", secondary: "金", tertiary: "土" },
        description: "雾都金融城，传统与创新并存的国际都会",
        characteristics: { climate: "温带海洋性，多雨阴冷", pace: "快但优雅", culture: "传统、多元、绅士", industry: "金融、文化、创意、教育" },
        pros: ["金融中心地位", "文化艺术丰富", "教育资源顶级", "国际化程度高"],
        cons: ["生活成本极高", "天气阴冷多雨", "脱欧后不确定性", "房价高昂"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "台北",
        nameEn: "Taipei",
        country: "中国台湾",
        continent: "asia",
        elements: { primary: "水", secondary: "木", tertiary: "金" },
        description: "宝岛之都，温润包容的华人文化",
        characteristics: { climate: "亚热带，温暖湿润", pace: "适中，宜居", culture: "包容、文艺、人情味", industry: "科技、文创、服务业" },
        pros: ["生活便利", "医疗发达", "文化多元", "美食丰富"],
        cons: ["薪资偏低", "房价高", "台风多", "政治争议"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "香港",
        nameEn: "Hong Kong",
        country: "中国",
        continent: "asia",
        elements: { primary: "金", secondary: "水", tertiary: "火" },
        description: "东方之珠，快节奏的国际金融中心",
        characteristics: { climate: "亚热带，湿热", pace: "极快，高效", culture: "务实、拼搏、国际化", industry: "金融、贸易、物流、旅游" },
        pros: ["金融中心", "税率低", "国际化", "美食天堂"],
        cons: ["房价全球最高", "空间狭小", "工作压力大", "政治不确定性"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "广州",
        nameEn: "Guangzhou",
        country: "中国",
        continent: "asia",
        elements: { primary: "水", secondary: "火", tertiary: "木" },
        description: "千年商都，务实包容的岭南文化",
        characteristics: { climate: "亚热带，湿热", pace: "快但务实", culture: "务实、包容、商业", industry: "贸易、制造、物流、科技" },
        pros: ["商业氛围浓", "美食丰富", "包容性强", "生活成本适中"],
        cons: ["天气湿热", "空气质量一般", "文化底蕴感弱", "竞争激烈"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "重庆",
        nameEn: "Chongqing",
        country: "中国",
        continent: "asia",
        elements: { primary: "火", secondary: "水", tertiary: "金" },
        description: "山城火锅，热辣直爽的江湖气质",
        characteristics: { climate: "湿热，夏天闷热", pace: "快，有冲劲", culture: "直爽、火辣、江湖", industry: "制造业、物流、科技" },
        pros: ["性格直爽", "美食丰富", "发展快", "生活成本适中"],
        cons: ["夏天太热", "地形复杂", "空气质量一般", "火气太旺"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "西安",
        nameEn: "Xi'an",
        country: "中国",
        continent: "asia",
        elements: { primary: "土", secondary: "金", tertiary: "火" },
        description: "十三朝古都，厚重沉稳的西北文化",
        characteristics: { climate: "温带大陆性，干燥", pace: "慢，稳定", culture: "历史、传统、厚重", industry: "旅游、教育、航空、科技" },
        pros: ["历史文化深厚", "生活成本低", "美食丰富", "教育资源好"],
        cons: ["空气质量差", "职业机会少", "节奏慢", "创新氛围弱"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "巴黎",
        nameEn: "Paris",
        country: "法国",
        continent: "europe",
        elements: { primary: "火", secondary: "土", tertiary: "金" },
        description: "浪漫之都，艺术与时尚的世界中心",
        characteristics: { climate: "温带，四季分明", pace: "慢而优雅", culture: "浪漫、艺术、享乐", industry: "时尚、奢侈品、旅游、文化" },
        pros: ["文化艺术氛围", "生活品质高", "美食天堂", "历史底蕴深"],
        cons: ["生活成本高", "罢工频繁", "语言障碍", "治安问题"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "洛杉矶",
        nameEn: "Los Angeles",
        country: "美国",
        continent: "north-america",
        elements: { primary: "火", secondary: "金", tertiary: "木" },
        description: "天使之城，阳光、海滩与娱乐产业的天堂",
        characteristics: { climate: "地中海气候，阳光充足", pace: "悠闲但竞争", culture: "多元、创意、娱乐", industry: "娱乐、科技、航空、时尚" },
        pros: ["气候宜人", "创意产业发达", "生活方式多样", "华人社区大"],
        cons: ["交通拥堵严重", "生活成本高", "地震风险", "贫富差距大"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "西雅图",
        nameEn: "Seattle",
        country: "美国",
        continent: "north-america",
        elements: { primary: "水", secondary: "木", tertiary: "金" },
        description: "翡翠之城，科技与自然的完美平衡",
        characteristics: { climate: "温带海洋性，多雨", pace: "适中，宜居", culture: "环保、创新、文艺", industry: "科技、航空、咖啡、音乐" },
        pros: ["科技产业发达", "自然环境优美", "无州所得税", "文化氛围好"],
        cons: ["多雨阴冷", "生活成本上升", "交通拥堵", "冬天抑郁"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "温哥华",
        nameEn: "Vancouver",
        country: "加拿大",
        continent: "north-america",
        elements: { primary: "水", secondary: "木", tertiary: "土" },
        description: "最宜居城市，山海之间的温润之地",
        characteristics: { climate: "温带海洋性，温和多雨", pace: "慢，宜居", culture: "多元、环保、悠闲", industry: "影视、科技、旅游、贸易" },
        pros: ["环境优美", "气候温和", "华人社区大", "生活质量高"],
        cons: ["房价极高", "工作机会少", "多雨", "节奏太慢"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "悉尼",
        nameEn: "Sydney",
        country: "澳大利亚",
        continent: "oceania",
        elements: { primary: "水", secondary: "火", tertiary: "金" },
        description: "南半球明珠，阳光海滩与悠闲生活",
        characteristics: { climate: "亚热带，温暖宜人", pace: "慢，悠闲", culture: "休闲、户外、多元", industry: "金融、旅游、教育、矿业" },
        pros: ["气候宜人", "环境优美", "生活质量高", "安全稳定"],
        cons: ["距离其他地方远", "生活成本高", "职业天花板低", "文化相对单调"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "布里斯班",
        nameEn: "Brisbane",
        country: "澳大利亚",
        continent: "oceania",
        elements: { primary: "火", secondary: "水", tertiary: "木" },
        description: "阳光之城，悠闲宜居的昆士兰首府",
        characteristics: { climate: "亚热带，阳光充足", pace: "慢，悠闲", culture: "休闲、户外、友好", industry: "教育、旅游、矿业、农业" },
        pros: ["气候宜人", "生活成本适中", "户外活动丰富", "安全友好"],
        cons: ["距离远", "职业机会少", "文化单调", "夏天炎热"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "墨尔本",
        nameEn: "Melbourne",
        country: "澳大利亚",
        continent: "oceania",
        elements: { primary: "木", secondary: "水", tertiary: "土" },
        description: "文化之都，咖啡与艺术的温润之城",
        characteristics: { climate: "温带海洋性，多变", pace: "慢，文艺", culture: "艺术、咖啡、体育", industry: "教育、文化、金融、科技" },
        pros: ["文化氛围浓厚", "咖啡文化", "宜居", "教育资源好"],
        cons: ["天气多变", "生活成本高", "距离远", "工作机会少于悉尼"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "吉隆坡",
        nameEn: "Kuala Lumpur",
        country: "马来西亚",
        continent: "asia",
        elements: { primary: "水", secondary: "木", tertiary: "火" },
        description: "花园城市，多元文化的东南亚枢纽",
        characteristics: { climate: "热带雨林，全年炎热", pace: "适中，悠闲", culture: "多元、包容、伊斯兰", industry: "金融、旅游、制造" },
        pros: ["生活成本低", "华人社区大", "英语普及", "美食多样"],
        cons: ["天气炎热", "交通拥堵", "空气质量一般", "职业天花板"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "曼谷",
        nameEn: "Bangkok",
        country: "泰国",
        continent: "asia",
        elements: { primary: "火", secondary: "水", tertiary: "木" },
        description: "天使之城，热带的慢生活与佛系文化",
        characteristics: { climate: "热带，全年炎热", pace: "慢，悠闲", culture: "佛系、享乐、包容", industry: "旅游、服务、制造、科技" },
        pros: ["生活成本低", "美食天堂", "气候温暖", "文化包容"],
        cons: ["天气炎热", "交通拥堵", "空气质量差", "职业天花板低"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "迪拜",
        nameEn: "Dubai",
        country: "阿联酋",
        continent: "asia",
        elements: { primary: "金", secondary: "火", tertiary: "土" },
        description: "沙漠奇迹，奢华与商业的完美结合",
        characteristics: { climate: "沙漠气候，炎热干燥", pace: "快，国际化", culture: "奢华、商业、多元", industry: "金融、贸易、旅游、房地产" },
        pros: ["免税天堂", "商业机会多", "基础设施一流", "安全稳定"],
        cons: ["天气极热", "文化限制", "生活成本高", "缺乏归属感"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "波士顿",
        nameEn: "Boston",
        country: "美国",
        continent: "north-america",
        elements: { primary: "水", secondary: "金", tertiary: "木" },
        description: "教育之城，历史与创新的完美融合",
        characteristics: { climate: "温带大陆性，四季分明", pace: "快但有序", culture: "学术、历史、精英", industry: "教育、医疗、科技、金融" },
        pros: ["教育资源顶级", "医疗发达", "文化底蕴", "创新氛围"],
        cons: ["生活成本高", "冬天寒冷", "交通拥堵", "房价高"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "芝加哥",
        nameEn: "Chicago",
        country: "美国",
        continent: "north-america",
        elements: { primary: "金", secondary: "水", tertiary: "火" },
        description: "风城，美国中部的金融与文化中心",
        characteristics: { climate: "大陆性，冬冷夏热", pace: "快，务实", culture: "务实、多元、艺术", industry: "金融、制造、物流、科技" },
        pros: ["金融行业强", "生活成本适中", "文化丰富", "交通枢纽"],
        cons: ["冬天严寒", "治安问题", "风大", "衰退风险"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "多伦多",
        nameEn: "Toronto",
        country: "加拿大",
        continent: "north-america",
        elements: { primary: "金", secondary: "水", tertiary: "土" },
        description: "加拿大金融中心，多元文化的移民之都",
        characteristics: { climate: "大陆性，冬冷夏热", pace: "快但有序", culture: "多元、包容、务实", industry: "金融、科技、媒体、教育" },
        pros: ["金融行业发达", "多元文化", "教育资源好", "移民友好"],
        cons: ["冬天严寒", "生活成本高", "交通拥堵", "房价高"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "柏林",
        nameEn: "Berlin",
        country: "德国",
        continent: "europe",
        elements: { primary: "木", secondary: "水", tertiary: "金" },
        description: "自由之城，创意与反叛的欧洲文化中心",
        characteristics: { climate: "温带大陆性，冬冷夏温", pace: "适中，自由", culture: "自由、创意、多元", industry: "科技、创意、文化、制造" },
        pros: ["生活成本相对低", "文化艺术丰富", "自由开放", "创业氛围好"],
        cons: ["冬天寒冷", "语言障碍", "收入相对低", "官僚主义"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "阿姆斯特丹",
        nameEn: "Amsterdam",
        country: "荷兰",
        continent: "europe",
        elements: { primary: "水", secondary: "木", tertiary: "金" },
        description: "运河之城，自由包容的北欧文化",
        characteristics: { climate: "温带海洋性，多雨", pace: "慢，悠闲", culture: "自由、包容、环保", industry: "金融、科技、创意、贸易" },
        pros: ["自由开放", "环境优美", "英语普及", "生活质量高"],
        cons: ["生活成本高", "多雨阴冷", "房源紧张", "税率高"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "苏黎世",
        nameEn: "Zurich",
        country: "瑞士",
        continent: "europe",
        elements: { primary: "金", secondary: "土", tertiary: "水" },
        description: "金融之都，精确稳定的阿尔卑斯明珠",
        characteristics: { climate: "温带，四季分明", pace: "适中，精确", culture: "精确、稳定、高效", industry: "金融、制药、科技、钟表" },
        pros: ["金融中心", "生活质量极高", "安全稳定", "环境优美"],
        cons: ["生活成本全球最高", "社交圈封闭", "文化相对保守", "语言障碍"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "罗马",
        nameEn: "Rome",
        country: "意大利",
        continent: "europe",
        elements: { primary: "土", secondary: "火", tertiary: "金" },
        description: "永恒之城，历史与艺术的宝库",
        characteristics: { climate: "地中海，温和宜人", pace: "慢，悠闲", culture: "历史、艺术、享乐", industry: "旅游、文化、时尚" },
        pros: ["历史底蕴深", "美食天堂", "艺术氛围", "生活悠闲"],
        cons: ["经济停滞", "官僚主义", "基础设施老化", "职业机会少"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "马德里",
        nameEn: "Madrid",
        country: "西班牙",
        continent: "europe",
        elements: { primary: "火", secondary: "土", tertiary: "金" },
        description: "热情之都，艺术与足球的激情之城",
        characteristics: { climate: "地中海，干燥炎热", pace: "慢，享乐", culture: "热情、艺术、夜生活", industry: "旅游、文化、金融" },
        pros: ["生活成本适中", "文化丰富", "美食多样", "气候宜人"],
        cons: ["经济不稳", "失业率高", "语言障碍", "夏天炎热"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "斯德哥尔摩",
        nameEn: "Stockholm",
        country: "瑞典",
        continent: "europe",
        elements: { primary: "水", secondary: "木", tertiary: "金" },
        description: "北欧威尼斯，创新与福利的典范",
        characteristics: { climate: "温带大陆性，冬长夏短", pace: "适中，平衡", culture: "平等、创新、环保", industry: "科技、设计、金融" },
        pros: ["福利制度好", "创新氛围", "环境优美", "社会平等"],
        cons: ["生活成本高", "税率高", "冬天漫长", "社交冷淡"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "奥克兰",
        nameEn: "Auckland",
        country: "新西兰",
        continent: "oceania",
        elements: { primary: "水", secondary: "木", tertiary: "土" },
        description: "帆船之都，纯净自然的南太平洋明珠",
        characteristics: { climate: "温带海洋性，温和湿润", pace: "慢，宜居", culture: "悠闲、环保、多元", industry: "旅游、农业、教育" },
        pros: ["环境优美", "空气质量好", "生活质量高", "安全稳定"],
        cons: ["距离远", "职业机会少", "生活成本高", "文化单调"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "雅加达",
        nameEn: "Jakarta",
        country: "印度尼西亚",
        continent: "asia",
        elements: { primary: "水", secondary: "火", tertiary: "木" },
        description: "千岛之国首都，活力四射的东南亚巨城",
        characteristics: { climate: "热带，全年炎热多雨", pace: "快但混乱", culture: "多元、伊斯兰、热情", industry: "制造、服务、金融" },
        pros: ["市场潜力大", "生活成本低", "年轻人口多", "创业机会"],
        cons: ["交通极度拥堵", "基础设施差", "空气污染", "洪水风险"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "胡志明市",
        nameEn: "Ho Chi Minh City",
        country: "越南",
        continent: "asia",
        elements: { primary: "水", secondary: "木", tertiary: "火" },
        description: "西贡往事，充满活力的新兴市场",
        characteristics: { climate: "热带，炎热多雨", pace: "快，充满活力", culture: "务实、勤奋、开放", industry: "制造、科技、服务" },
        pros: ["成本低", "发展快", "年轻市场", "创业友好"],
        cons: ["基础设施弱", "语言障碍", "交通混乱", "医疗条件一般"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "南京",
        nameEn: "Nanjing",
        country: "中国",
        continent: "asia",
        elements: { primary: "土", secondary: "水", tertiary: "木" },
        description: "六朝古都，厚重温润的江南文化",
        characteristics: { climate: "亚热带，四季分明", pace: "适中，稳定", culture: "历史、文化、教育", industry: "教育、科技、制造、文化" },
        pros: ["历史底蕴深", "教育资源好", "生活成本适中", "交通便利"],
        cons: ["夏天炎热", "职业机会少于一线", "节奏相对慢", "创新氛围弱"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "武汉",
        nameEn: "Wuhan",
        country: "中国",
        continent: "asia",
        elements: { primary: "水", secondary: "火", tertiary: "土" },
        description: "九省通衢，江湖气与火辣并存",
        characteristics: { climate: "亚热带，夏热冬冷", pace: "快，有冲劲", culture: "直爽、江湖、务实", industry: "教育、科技、制造、物流" },
        pros: ["交通枢纽", "教育资源好", "生活成本低", "发展潜力大"],
        cons: ["夏天极热", "冬天湿冷", "空气质量一般", "文化氛围一般"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "首尔",
        nameEn: "Seoul",
        country: "韩国",
        continent: "asia",
        elements: { primary: "火", secondary: "金", tertiary: "木" },
        description: "韩流之都，快节奏的东亚时尚中心",
        characteristics: { climate: "温带，四季分明", pace: "极快，竞争激烈", culture: "时尚、竞争、集体", industry: "科技、娱乐、时尚、制造" },
        pros: ["科技发达", "娱乐产业强", "交通便利", "美食丰富"],
        cons: ["工作压力极大", "竞争激烈", "社会压抑", "空气质量差"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "迈阿密",
        nameEn: "Miami",
        country: "美国",
        continent: "north-america",
        elements: { primary: "火", secondary: "水", tertiary: "木" },
        description: "阳光之城，拉丁风情的度假天堂",
        characteristics: { climate: "热带，全年温暖", pace: "悠闲，享乐", culture: "拉丁、海滩、派对", industry: "旅游、金融、贸易、房地产" },
        pros: ["气候宜人", "无州税", "拉丁文化", "海滩生活"],
        cons: ["飓风风险", "生活成本高", "交通拥堵", "教育资源一般"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "奥斯汀",
        nameEn: "Austin",
        country: "美国",
        continent: "north-america",
        elements: { primary: "木", secondary: "火", tertiary: "水" },
        description: "音乐之都，德州的创新绿洲",
        characteristics: { climate: "亚热带，炎热", pace: "快但轻松", culture: "音乐、创意、自由", industry: "科技、音乐、创业、教育" },
        pros: ["科技产业发达", "无州税", "音乐文化", "创业氛围"],
        cons: ["夏天极热", "交通拥堵", "房价上涨快", "政治分歧"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "墨西哥城",
        nameEn: "Mexico City",
        country: "墨西哥",
        continent: "south-america",
        elements: { primary: "火", secondary: "土", tertiary: "木" },
        description: "拉美巨城，古老与现代交织的文化熔炉",
        characteristics: { climate: "高原气候，四季如春", pace: "快但混乱", culture: "热情、历史、艺术", industry: "制造、金融、文化、旅游" },
        pros: ["生活成本低", "文化丰富", "美食天堂", "气候宜人"],
        cons: ["治安问题", "空气污染", "交通拥堵", "地震风险"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "圣保罗",
        nameEn: "São Paulo",
        country: "巴西",
        continent: "south-america",
        elements: { primary: "火", secondary: "木", tertiary: "水" },
        description: "南美经济引擎，充满活力的巨型都市",
        characteristics: { climate: "亚热带，温暖湿润", pace: "极快，混乱", culture: "多元、热情、拼搏", industry: "金融、制造、文化、科技" },
        pros: ["经济机会多", "文化多元", "美食丰富", "夜生活丰富"],
        cons: ["治安问题严重", "贫富差距大", "交通极度拥堵", "空气污染"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "开普敦",
        nameEn: "Cape Town",
        country: "南非",
        continent: "africa",
        elements: { primary: "水", secondary: "木", tertiary: "火" },
        description: "非洲明珠，山海之间的彩虹之城",
        characteristics: { climate: "地中海气候，温和宜人", pace: "慢，悠闲", culture: "多元、自然、艺术", industry: "旅游、农业、创意、科技" },
        pros: ["自然风光绝美", "气候宜人", "生活成本低", "文化多元"],
        cons: ["治安问题", "基础设施一般", "经济机会少", "水资源短缺"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "孟买",
        nameEn: "Mumbai",
        country: "印度",
        continent: "asia",
        elements: { primary: "火", secondary: "水", tertiary: "土" },
        description: "宝莱坞之都，印度的金融与娱乐中心",
        characteristics: { climate: "热带季风，炎热多雨", pace: "极快，混乱", culture: "多元、拼搏、宝莱坞", industry: "金融、娱乐、制造、科技" },
        pros: ["经济机会多", "娱乐产业发达", "创业氛围", "文化丰富"],
        cons: ["贫富差距极大", "基础设施差", "交通混乱", "空气污染"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "班加罗尔",
        nameEn: "Bangalore",
        country: "印度",
        continent: "asia",
        elements: { primary: "木", secondary: "水", tertiary: "火" },
        description: "印度硅谷，科技创新的新兴中心",
        characteristics: { climate: "热带高原，温和宜人", pace: "快，充满活力", culture: "科技、创新、国际化", industry: "科技、IT、创业、教育" },
        pros: ["科技产业发达", "气候宜人", "成本低", "年轻人才多"],
        cons: ["交通拥堵", "基础设施跟不上", "空气质量差", "水资源紧张"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "特拉维夫",
        nameEn: "Tel Aviv",
        country: "以色列",
        continent: "asia",
        elements: { primary: "火", secondary: "金", tertiary: "水" },
        description: "创业之国，地中海畔的科技绿洲",
        characteristics: { climate: "地中海气候，温暖干燥", pace: "快，充满活力", culture: "创新、自由、多元", industry: "科技、创业、金融、国防" },
        pros: ["创业生态系统强", "科技产业发达", "海滩生活", "文化活跃"],
        cons: ["生活成本高", "地缘政治风险", "兵役要求", "宗教冲突"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "伊斯坦布尔",
        nameEn: "Istanbul",
        country: "土耳其",
        continent: "asia",
        elements: { primary: "水", secondary: "火", tertiary: "土" },
        description: "横跨欧亚，千年古城的现代复兴",
        characteristics: { climate: "地中海气候，温和", pace: "适中，混乱", culture: "东西交融、历史、商业", industry: "旅游、贸易、制造、金融" },
        pros: ["历史文化丰富", "地理位置独特", "美食天堂", "生活成本适中"],
        cons: ["政治不稳定", "交通拥堵", "地震风险", "经济波动"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "里斯本",
        nameEn: "Lisbon",
        country: "葡萄牙",
        continent: "europe",
        elements: { primary: "水", secondary: "火", tertiary: "木" },
        description: "大西洋明珠，温暖悠闲的欧洲后花园",
        characteristics: { climate: "地中海气候，温暖宜人", pace: "慢，悠闲", culture: "历史、艺术、享乐", industry: "旅游、科技、文化、创业" },
        pros: ["气候宜人", "生活成本相对低", "安全友好", "创业签证友好"],
        cons: ["薪资水平低", "语言障碍", "经济机会少", "基础设施老化"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "哥本哈根",
        nameEn: "Copenhagen",
        country: "丹麦",
        continent: "europe",
        elements: { primary: "水", secondary: "木", tertiary: "金" },
        description: "童话王国，幸福指数最高的北欧之城",
        characteristics: { climate: "温带海洋性，温和多雨", pace: "慢，平衡", culture: "环保、设计、平等", industry: "设计、科技、制药、航运" },
        pros: ["幸福指数高", "设计氛围浓", "自行车文化", "社会福利好"],
        cons: ["生活成本极高", "税率高", "天气阴冷", "社交冷淡"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "维也纳",
        nameEn: "Vienna",
        country: "奥地利",
        continent: "europe",
        elements: { primary: "土", secondary: "金", tertiary: "水" },
        description: "音乐之都，优雅古典的欧洲心脏",
        characteristics: { climate: "温带大陆性，四季分明", pace: "慢，优雅", culture: "古典、艺术、咖啡", industry: "旅游、文化、金融、国际组织" },
        pros: ["生活质量高", "文化艺术丰富", "安全稳定", "咖啡文化"],
        cons: ["生活成本高", "语言障碍", "节奏慢", "职业机会少"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "布拉格",
        nameEn: "Prague",
        country: "捷克",
        continent: "europe",
        elements: { primary: "土", secondary: "水", tertiary: "木" },
        description: "百塔之城，中欧的建筑瑰宝",
        characteristics: { climate: "温带大陆性，四季分明", pace: "慢，悠闲", culture: "历史、艺术、啤酒", industry: "旅游、文化、科技、制造" },
        pros: ["生活成本低", "建筑优美", "啤酒文化", "安全友好"],
        cons: ["薪资水平低", "语言障碍", "冬天寒冷", "旅游过度"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "华沙",
        nameEn: "Warsaw",
        country: "波兰",
        continent: "europe",
        elements: { primary: "木", secondary: "土", tertiary: "金" },
        description: "凤凰之城，从废墟中重生的东欧新星",
        characteristics: { climate: "温带大陆性，冬冷夏热", pace: "快，发展中", culture: "历史、坚韧、创业", industry: "科技、金融、制造、创业" },
        pros: ["发展快", "创业成本低", "科技人才多", "生活成本低"],
        cons: ["冬天严寒", "空气质量差", "语言障碍", "基础设施一般"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "赫尔辛基",
        nameEn: "Helsinki",
        country: "芬兰",
        continent: "europe",
        elements: { primary: "水", secondary: "木", tertiary: "金" },
        description: "波罗的海女儿，设计与科技的北欧明珠",
        characteristics: { climate: "温带大陆性，冬长夏短", pace: "慢，平衡", culture: "设计、科技、桑拿", industry: "科技、设计、游戏、教育" },
        pros: ["教育世界顶级", "科技产业强", "设计氛围", "社会福利好"],
        cons: ["生活成本高", "冬天漫长黑暗", "语言障碍", "社交冷淡"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "爱丁堡",
        nameEn: "Edinburgh",
        country: "英国",
        continent: "europe",
        elements: { primary: "水", secondary: "土", tertiary: "金" },
        description: "苏格兰之心，古堡与威士忌的浪漫之城",
        characteristics: { climate: "温带海洋性，多雨阴冷", pace: "慢，优雅", culture: "历史、文学、威士忌", industry: "金融、教育、旅游、文化" },
        pros: ["文化底蕴深", "教育资源好", "生活质量高", "安全友好"],
        cons: ["天气阴冷多雨", "生活成本高", "职业机会少", "冬天黑暗"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "都柏林",
        nameEn: "Dublin",
        country: "爱尔兰",
        continent: "europe",
        elements: { primary: "水", secondary: "木", tertiary: "金" },
        description: "翡翠岛之都，科技与文学的绿色之城",
        characteristics: { climate: "温带海洋性，多雨温和", pace: "适中，友好", culture: "文学、音乐、酒吧", industry: "科技、金融、制药、教育" },
        pros: ["科技产业发达", "税收优惠", "英语环境", "友好热情"],
        cons: ["生活成本高", "多雨", "房源紧张", "公共交通差"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "巴塞罗那",
        nameEn: "Barcelona",
        country: "西班牙",
        continent: "europe",
        elements: { primary: "火", secondary: "水", tertiary: "木" },
        description: "高迪之城，地中海畔的艺术天堂",
        characteristics: { climate: "地中海气候，温暖宜人", pace: "慢，享乐", culture: "艺术、建筑、海滩", industry: "旅游、设计、科技、文化" },
        pros: ["气候宜人", "建筑艺术", "海滩生活", "美食丰富"],
        cons: ["经济不稳", "扒手问题", "语言障碍", "独立运动"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "米兰",
        nameEn: "Milan",
        country: "意大利",
        continent: "europe",
        elements: { primary: "金", secondary: "火", tertiary: "土" },
        description: "时尚之都，意大利的商业与设计中心",
        characteristics: { climate: "温带大陆性，四季分明", pace: "快，务实", culture: "时尚、设计、商业", industry: "时尚、设计、金融、制造" },
        pros: ["时尚产业发达", "设计氛围", "美食天堂", "商业机会"],
        cons: ["生活成本高", "空气质量差", "官僚主义", "夏天炎热"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "釜山",
        nameEn: "Busan",
        country: "韩国",
        continent: "asia",
        elements: { primary: "水", secondary: "火", tertiary: "金" },
        description: "海云台之城，韩国的海滨度假胜地",
        characteristics: { climate: "温带季风，四季分明", pace: "适中，悠闲", culture: "海滨、电影、海鲜", industry: "港口、旅游、制造、影视" },
        pros: ["海滨风光", "生活成本低于首尔", "海鲜美食", "气候宜人"],
        cons: ["职业机会少", "语言障碍", "台风风险", "文化单调"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "蒙特利尔",
        nameEn: "Montreal",
        country: "加拿大",
        continent: "north-america",
        elements: { primary: "水", secondary: "木", tertiary: "火" },
        description: "北美小巴黎，双语文化的艺术之城",
        characteristics: { climate: "大陆性，冬冷夏热", pace: "适中，文艺", culture: "双语、艺术、节庆", industry: "航空、科技、文化、游戏" },
        pros: ["文化艺术丰富", "生活成本适中", "双语环境", "节庆活动多"],
        cons: ["冬天严寒", "语言要求高", "经济机会少于多伦多", "基础设施老化"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "大阪",
        nameEn: "Osaka",
        country: "日本",
        continent: "asia",
        elements: { primary: "水", secondary: "火", tertiary: "木" },
        description: "天下厨房，热情直爽的关西文化",
        characteristics: { climate: "温带，四季分明", pace: "快但轻松", culture: "美食、幽默、商业", industry: "制造、贸易、旅游、美食" },
        pros: ["美食天堂", "生活成本低于东京", "人情味浓", "交通便利"],
        cons: ["职业机会少于东京", "地震风险", "夏天湿热", "空气质量一般"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "京都",
        nameEn: "Kyoto",
        country: "日本",
        continent: "asia",
        elements: { primary: "土", secondary: "木", tertiary: "水" },
        description: "千年古都，传统与禅意的完美保存",
        characteristics: { climate: "温带，四季分明", pace: "慢，优雅", culture: "传统、禅宗、艺术", industry: "旅游、文化、教育、传统工艺" },
        pros: ["文化底蕴深", "环境优美", "传统保存好", "生活质量高"],
        cons: ["职业机会少", "生活成本高", "旅游过度", "节奏慢"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "清迈",
        nameEn: "Chiang Mai",
        country: "泰国",
        continent: "asia",
        elements: { primary: "木", secondary: "水", tertiary: "土" },
        description: "泰北玫瑰，数字游民的天堂",
        characteristics: { climate: "热带季风，温暖", pace: "极慢，悠闲", culture: "佛系、手工艺、慢生活", industry: "旅游、手工艺、数字游民、教育" },
        pros: ["生活成本极低", "环境优美", "数字游民社区", "文化包容"],
        cons: ["职业机会少", "烧山季空气差", "医疗条件一般", "基础设施弱"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "巴厘岛",
        nameEn: "Bali",
        country: "印度尼西亚",
        continent: "asia",
        elements: { primary: "水", secondary: "木", tertiary: "火" },
        description: "众神之岛，灵性与度假的热带天堂",
        characteristics: { climate: "热带，全年温暖", pace: "极慢，度假", culture: "灵性、冲浪、瑜伽", industry: "旅游、度假、数字游民、艺术" },
        pros: ["环境优美", "生活成本低", "灵性文化", "数字游民友好"],
        cons: ["职业机会少", "基础设施差", "旅游过度", "火山风险"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "奥斯陆",
        nameEn: "Oslo",
        country: "挪威",
        continent: "europe",
        elements: { primary: "水", secondary: "木", tertiary: "金" },
        description: "峡湾之都，自然与现代的北欧典范",
        characteristics: { climate: "温带海洋性，冬长夏短", pace: "慢，平衡", culture: "环保、户外、平等", industry: "能源、航运、科技、金融" },
        pros: ["福利制度好", "自然环境美", "社会平等", "安全稳定"],
        cons: ["生活成本极高", "税率高", "冬天漫长", "社交冷淡"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "雷克雅未克",
        nameEn: "Reykjavik",
        country: "冰岛",
        continent: "europe",
        elements: { primary: "水", secondary: "火", tertiary: "金" },
        description: "冰与火之歌，世界尽头的极光之城",
        characteristics: { climate: "亚寒带海洋性，寒冷多风", pace: "极慢，宁静", culture: "自然、音乐、独立", industry: "旅游、渔业、能源、科技" },
        pros: ["自然风光绝美", "安全指数高", "空气质量好", "独特体验"],
        cons: ["生活成本极高", "极端天气", "人口稀少", "职业机会少"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "布宜诺斯艾利斯",
        nameEn: "Buenos Aires",
        country: "阿根廷",
        continent: "south-america",
        elements: { primary: "火", secondary: "水", tertiary: "土" },
        description: "南美巴黎，探戈与牛排的激情之城",
        characteristics: { climate: "温带，四季分明", pace: "慢，享乐", culture: "探戈、足球、文学", industry: "农业、文化、旅游、金融" },
        pros: ["文化丰富", "美食天堂", "生活成本低", "建筑优美"],
        cons: ["经济不稳", "通货膨胀", "治安问题", "基础设施老化"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "圣地亚哥",
        nameEn: "Santiago",
        country: "智利",
        continent: "south-america",
        elements: { primary: "土", secondary: "金", tertiary: "火" },
        description: "安第斯山下，南美最稳定的现代都市",
        characteristics: { climate: "地中海气候，温和干燥", pace: "适中，稳定", culture: "稳定、务实、葡萄酒", industry: "矿业、金融、葡萄酒、科技" },
        pros: ["经济稳定", "气候宜人", "安全性高", "葡萄酒文化"],
        cons: ["空气污染", "地震风险", "贫富差距", "语言障碍"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "利马",
        nameEn: "Lima",
        country: "秘鲁",
        continent: "south-america",
        elements: { primary: "土", secondary: "水", tertiary: "火" },
        description: "美食之都，印加文明的现代传承",
        characteristics: { climate: "沙漠气候，干燥多雾", pace: "适中，混乱", culture: "历史、美食、多元", industry: "矿业、旅游、美食、制造" },
        pros: ["美食世界级", "历史文化丰富", "生活成本低", "发展潜力"],
        cons: ["交通混乱", "贫富差距大", "地震风险", "基础设施差"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "内罗毕",
        nameEn: "Nairobi",
        country: "肯尼亚",
        continent: "africa",
        elements: { primary: "木", secondary: "火", tertiary: "土" },
        description: "东非之星，野生动物与科技创新的交汇",
        characteristics: { climate: "热带高原，温和宜人", pace: "快，充满活力", culture: "多元、创业、自然", industry: "科技、旅游、农业、金融" },
        pros: ["科技创新中心", "气候宜人", "自然资源丰富", "创业氛围"],
        cons: ["治安问题", "基础设施差", "贫富差距大", "交通混乱"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "卡萨布兰卡",
        nameEn: "Casablanca",
        country: "摩洛哥",
        continent: "africa",
        elements: { primary: "水", secondary: "土", tertiary: "金" },
        description: "白色之城，北非的商业与文化门户",
        characteristics: { climate: "地中海气候，温和", pace: "适中，商业", culture: "阿拉伯、法式、商业", industry: "贸易、金融、制造、旅游" },
        pros: ["地理位置优越", "文化多元", "商业机会", "气候宜人"],
        cons: ["贫富差距", "语言障碍", "基础设施一般", "社会保守"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "拉各斯",
        nameEn: "Lagos",
        country: "尼日利亚",
        continent: "africa",
        elements: { primary: "火", secondary: "水", tertiary: "木" },
        description: "非洲巨城，充满活力的西非经济中心",
        characteristics: { climate: "热带，炎热多雨", pace: "极快，混乱", culture: "活力、音乐、创业", industry: "金融、科技、娱乐、贸易" },
        pros: ["市场潜力巨大", "年轻人口多", "音乐文化", "创业机会"],
        cons: ["交通极度拥堵", "基础设施差", "治安问题", "电力不稳"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "河内",
        nameEn: "Hanoi",
        country: "越南",
        continent: "asia",
        elements: { primary: "水", secondary: "土", tertiary: "木" },
        description: "千年古都，传统与现代交织的越南心脏",
        characteristics: { climate: "亚热带季风，四季分明", pace: "适中，传统", culture: "历史、传统、咖啡", industry: "制造、科技、旅游、教育" },
        pros: ["生活成本低", "历史文化丰富", "美食多样", "发展快"],
        cons: ["交通混乱", "空气污染", "基础设施弱", "语言障碍"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "马尼拉",
        nameEn: "Manila",
        country: "菲律宾",
        continent: "asia",
        elements: { primary: "火", secondary: "水", tertiary: "木" },
        description: "东方明珠，热情活力的群岛之都",
        characteristics: { climate: "热带季风，炎热多雨", pace: "快但混乱", culture: "热情、天主教、家庭", industry: "服务、BPO、制造、旅游" },
        pros: ["英语普及", "人力成本低", "热情友好", "海滩资源"],
        cons: ["交通极度拥堵", "台风频繁", "贫富差距大", "基础设施差"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "科伦坡",
        nameEn: "Colombo",
        country: "斯里兰卡",
        continent: "asia",
        elements: { primary: "水", secondary: "木", tertiary: "火" },
        description: "印度洋明珠，茶香与佛教的热带岛国",
        characteristics: { climate: "热带季风，全年温暖", pace: "慢，悠闲", culture: "佛教、茶文化、多元", industry: "旅游、茶叶、纺织、港口" },
        pros: ["自然风光美", "生活成本低", "文化丰富", "气候温暖"],
        cons: ["经济不稳", "基础设施弱", "政治风险", "职业机会少"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "达卡",
        nameEn: "Dhaka",
        country: "孟加拉国",
        continent: "asia",
        elements: { primary: "水", secondary: "木", tertiary: "土" },
        description: "恒河三角洲之城，人口密集的新兴市场",
        characteristics: { climate: "热带季风，炎热多雨", pace: "快，拥挤", culture: "传统、纺织、人口密集", industry: "纺织、制造、服务、科技" },
        pros: ["人力成本极低", "市场潜力大", "纺织业发达", "年轻人口"],
        cons: ["极度拥挤", "洪水风险", "空气污染严重", "基础设施差"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "德里",
        nameEn: "Delhi",
        country: "印度",
        continent: "asia",
        elements: { primary: "土", secondary: "火", tertiary: "金" },
        description: "印度首都，古老与现代的激烈碰撞",
        characteristics: { climate: "亚热带季风，极端天气", pace: "快，混乱", culture: "历史、政治、多元", industry: "政府、科技、制造、旅游" },
        pros: ["政治中心", "历史文化丰富", "市场巨大", "创业机会"],
        cons: ["空气污染全球最严重", "交通混乱", "极端天气", "贫富差距"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "加德满都",
        nameEn: "Kathmandu",
        country: "尼泊尔",
        continent: "asia",
        elements: { primary: "土", secondary: "木", tertiary: "水" },
        description: "喜马拉雅山下，灵性与冒险的圣地",
        characteristics: { climate: "高原气候，温和", pace: "极慢，宁静", culture: "佛教、登山、灵性", industry: "旅游、登山、手工艺、农业" },
        pros: ["灵性文化", "登山天堂", "生活成本极低", "自然风光"],
        cons: ["基础设施极差", "地震风险", "空气污染", "职业机会少"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "开罗",
        nameEn: "Lhasa",
        country: "中国",
        continent: "africa",
        elements: { primary: "土", secondary: "金", tertiary: "水" },
        description: "日光之城，世界屋脊的灵性圣地",
        characteristics: { climate: "高原气候，干燥寒冷", pace: "极慢，宁静", culture: "藏传佛教、朝圣、传统", industry: "旅游、宗教、农牧业" },
        pros: ["灵性文化深厚", "自然风光壮丽", "空气纯净", "独特体验"],
        cons: ["高原反应", "基础设施弱", "职业机会少", "气候严酷"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },

    {
        name: "雅典",
        nameEn: "Athens",
        country: "希腊",
        continent: "europe",
        elements: { primary: "土", secondary: "火", tertiary: "水" },
        description: "西方文明摇篮，古典与现代的碰撞",
        characteristics: { climate: "地中海气候，温暖干燥", pace: "慢，悠闲", culture: "古典、哲学、享乐", industry: "旅游、航运、文化、教育" },
        pros: ["历史底蕴深厚", "气候宜人", "生活成本适中", "文化丰富"],
        cons: ["经济危机", "失业率高", "基础设施老化", "政治不稳"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "布达佩斯",
        nameEn: "Budapest",
        country: "匈牙利",
        continent: "europe",
        elements: { primary: "水", secondary: "土", tertiary: "金" },
        description: "多瑙河明珠，东欧的温泉之都",
        characteristics: { climate: "温带大陆性，四季分明", pace: "适中，悠闲", culture: "温泉、建筑、音乐", industry: "旅游、科技、制造、金融" },
        pros: ["建筑优美", "温泉文化", "生活成本低", "文化丰富"],
        cons: ["语言障碍", "冬天寒冷", "薪资偏低", "政治争议"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "布加勒斯特",
        nameEn: "Bucharest",
        country: "罗马尼亚",
        continent: "europe",
        elements: { primary: "木", secondary: "土", tertiary: "水" },
        description: "小巴黎，快速发展的东欧科技中心",
        characteristics: { climate: "温带大陆性，四季分明", pace: "快，发展中", culture: "拉丁、东正教、创业", industry: "科技、制造、金融、旅游" },
        pros: ["科技产业发展快", "生活成本低", "创业氛围", "文化多元"],
        cons: ["基础设施差", "官僚主义", "冬天寒冷", "语言障碍"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "塔林",
        nameEn: "Tallinn",
        country: "爱沙尼亚",
        continent: "europe",
        elements: { primary: "金", secondary: "水", tertiary: "木" },
        description: "数字之国，波罗的海的科技明珠",
        characteristics: { climate: "温带大陆性，冬长夏短", pace: "适中，高效", culture: "数字、中世纪、创新", industry: "科技、数字、旅游、金融" },
        pros: ["数字化程度高", "创业友好", "中世纪古城", "安全稳定"],
        cons: ["冬天漫长", "生活成本上升", "人口少", "语言障碍"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "里加",
        nameEn: "Riga",
        country: "拉脱维亚",
        continent: "europe",
        elements: { primary: "水", secondary: "木", tertiary: "金" },
        description: "新艺术之都，波罗的海的建筑瑰宝",
        characteristics: { climate: "温带海洋性，冬长夏短", pace: "慢，宁静", culture: "新艺术、建筑、音乐", industry: "旅游、物流、科技、制造" },
        pros: ["建筑优美", "生活成本低", "安全友好", "文化丰富"],
        cons: ["冬天漫长", "经济机会少", "人口流失", "语言障碍"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "基辅",
        nameEn: "Kyiv",
        country: "乌克兰",
        continent: "europe",
        elements: { primary: "木", secondary: "水", tertiary: "土" },
        description: "第聂伯河畔，东欧的文化古都",
        characteristics: { climate: "温带大陆性，冬冷夏热", pace: "适中，发展中", culture: "东正教、历史、艺术", industry: "科技、农业、制造、旅游" },
        pros: ["历史文化丰富", "生活成本低", "科技人才多", "美食丰富"],
        cons: ["政治不稳", "战争风险", "基础设施差", "经济困难"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "第比利斯",
        nameEn: "Tbilisi",
        country: "格鲁吉亚",
        continent: "europe",
        elements: { primary: "火", secondary: "土", tertiary: "水" },
        description: "高加索明珠，葡萄酒的古老故乡",
        characteristics: { climate: "亚热带，温和", pace: "慢，悠闲", culture: "葡萄酒、东正教、热情", industry: "旅游、葡萄酒、农业、科技" },
        pros: ["葡萄酒文化", "生活成本极低", "热情友好", "自然风光"],
        cons: ["政治不稳", "基础设施差", "语言障碍", "经济落后"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "耶路撒冷",
        nameEn: "Jerusalem",
        country: "以色列",
        continent: "asia",
        elements: { primary: "土", secondary: "金", tertiary: "火" },
        description: "圣城，三大宗教的精神中心",
        characteristics: { climate: "地中海气候，温和干燥", pace: "慢，庄重", culture: "宗教、历史、神圣", industry: "旅游、宗教、教育、科技" },
        pros: ["历史文化深厚", "宗教圣地", "教育资源好", "独特体验"],
        cons: ["政治冲突", "宗教限制", "生活成本高", "安全风险"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "安曼",
        nameEn: "Amman",
        country: "约旦",
        continent: "asia",
        elements: { primary: "土", secondary: "金", tertiary: "火" },
        description: "七山之城，中东的稳定绿洲",
        characteristics: { climate: "地中海气候，干燥", pace: "适中，稳定", culture: "阿拉伯、历史、包容", industry: "旅游、服务、金融、贸易" },
        pros: ["相对稳定", "历史文化", "包容性强", "地理位置"],
        cons: ["水资源短缺", "生活成本高", "经济机会少", "难民问题"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "贝鲁特",
        nameEn: "Beirut",
        country: "黎巴嫩",
        continent: "asia",
        elements: { primary: "水", secondary: "火", tertiary: "木" },
        description: "中东巴黎，地中海的文化熔炉",
        characteristics: { climate: "地中海气候，温和", pace: "快，混乱", culture: "多元、艺术、夜生活", industry: "金融、旅游、文化、贸易" },
        pros: ["文化多元", "夜生活丰富", "美食天堂", "历史底蕴"],
        cons: ["政治不稳", "经济危机", "电力短缺", "安全风险"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "多哈",
        nameEn: "Doha",
        country: "卡塔尔",
        continent: "asia",
        elements: { primary: "金", secondary: "火", tertiary: "土" },
        description: "海湾明珠，现代化的沙漠奇迹",
        characteristics: { climate: "沙漠气候，极热", pace: "快，现代化", culture: "伊斯兰、现代、奢华", industry: "能源、金融、航空、体育" },
        pros: ["免税天堂", "基础设施一流", "安全稳定", "国际化"],
        cons: ["天气极热", "文化限制", "生活成本高", "缺乏归属感"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "阿布扎比",
        nameEn: "Abu Dhabi",
        country: "阿联酋",
        continent: "asia",
        elements: { primary: "金", secondary: "土", tertiary: "火" },
        description: "沙漠之都，阿联酋的政治与文化中心",
        characteristics: { climate: "沙漠气候，炎热干燥", pace: "适中，稳定", culture: "伊斯兰、传统、奢华", industry: "能源、金融、文化、旅游" },
        pros: ["免税天堂", "文化投资大", "安全稳定", "基础设施好"],
        cons: ["天气极热", "文化限制", "生活成本高", "节奏慢于迪拜"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "德黑兰",
        nameEn: "Tehran",
        country: "伊朗",
        continent: "asia",
        elements: { primary: "土", secondary: "火", tertiary: "金" },
        description: "波斯古都，厚重历史的现代都市",
        characteristics: { climate: "半干旱，四季分明", pace: "快，混乱", culture: "波斯、伊斯兰、历史", industry: "能源、制造、教育、文化" },
        pros: ["历史文化深厚", "教育资源好", "生活成本低", "美食丰富"],
        cons: ["政治制裁", "空气污染严重", "社会限制", "国际孤立"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    }
,
    {
        name: "墨斯科",
        nameEn: "Moscow",
        country: "俄罗斯",
        continent: "europe",
        elements: { primary: "金", secondary: "土", tertiary: "水" },
        description: "红场之都，俄罗斯的政治与文化心脏",
        characteristics: { climate: "温带大陆性，冬长夏短", pace: "快，稳定", culture: "东正教、历史、艺术", industry: "能源、金融、科技、文化" },
        pros: ["历史文化深厚", "艺术氛围浓", "地铁世界最美", "教育资源好"],
        cons: ["冬天严寒漫长", "政治风险", "语言障碍", "国际孤立"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    }
,
    {
        name: "圣彼得堡",
        nameEn: "Saint Petersburg",
        country: "俄罗斯",
        continent: "europe",
        elements: { primary: "水", secondary: "金", tertiary: "木" },
        description: "北方威尼斯，俄罗斯的文化之都",
        characteristics: { climate: "温带大陆性，冬长夏短", pace: "适中，优雅", culture: "艺术、芭蕾、文学", industry: "文化、旅游、科技、港口" },
        pros: ["文化艺术氛围浓", "建筑优美", "白夜奇观", "历史底蕴深"],
        cons: ["冬天严寒漫长", "经济机会少于莫斯科", "语言障碍", "政治风险"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "慕尼黑",
        nameEn: "Munich",
        country: "德国",
        continent: "europe",
        elements: { primary: "土", secondary: "金", tertiary: "水" },
        description: "啤酒之都，巴伐利亚的富裕之城",
        characteristics: { climate: "温带大陆性，四季分明", pace: "适中，稳定", culture: "啤酒、传统、富裕", industry: "汽车、科技、金融、旅游" },
        pros: ["生活质量高", "经济发达", "啤酒文化", "阿尔卑斯山近"],
        cons: ["生活成本高", "冬天寒冷", "相对保守", "房价高"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "法兰克福",
        nameEn: "Frankfurt",
        country: "德国",
        continent: "europe",
        elements: { primary: "金", secondary: "土", tertiary: "水" },
        description: "欧洲金融中心，摩天大楼之城",
        characteristics: { climate: "温带海洋性，四季分明", pace: "快，商业", culture: "金融、国际化、务实", industry: "金融、航空、会展、科技" },
        pros: ["金融中心", "国际化程度高", "交通枢纽", "薪资水平高"],
        cons: ["生活成本高", "文化氛围弱", "天气阴冷", "缺乏归属感"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "曼彻斯特",
        nameEn: "Manchester",
        country: "英国",
        continent: "europe",
        elements: { primary: "水", secondary: "木", tertiary: "火" },
        description: "工业革命发源地，足球与音乐之城",
        characteristics: { climate: "温带海洋性，多雨", pace: "适中，活力", culture: "足球、音乐、工业", industry: "科技、教育、媒体、体育" },
        pros: ["生活成本低于伦敦", "音乐文化丰富", "足球氛围", "创意产业"],
        cons: ["多雨阴冷", "经济机会少于伦敦", "治安问题", "天气压抑"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "里约热内卢",
        nameEn: "Rio de Janeiro",
        country: "巴西",
        continent: "south-america",
        elements: { primary: "火", secondary: "水", tertiary: "木" },
        description: "狂欢之城，海滩与桑巴的热情之都",
        characteristics: { climate: "热带，全年温暖", pace: "慢，享乐", culture: "狂欢节、桑巴、海滩", industry: "旅游、石油、文化、体育" },
        pros: ["海滩文化", "狂欢节", "自然风光绝美", "热情友好"],
        cons: ["治安问题严重", "贫富差距大", "基础设施差", "经济不稳"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    },
    {
        name: "波哥大",
        nameEn: "Bogotá",
        country: "哥伦比亚",
        continent: "south-america",
        elements: { primary: "土", secondary: "木", tertiary: "水" },
        description: "安第斯高原之城，拉美的文化中心",
        characteristics: { climate: "高原气候，四季如春", pace: "适中，发展中", culture: "咖啡、文学、艺术", industry: "咖啡、科技、金融、旅游" },
        pros: ["气候宜人", "咖啡文化", "生活成本低", "发展潜力"],
        cons: ["治安问题", "交通拥堵", "空气污染", "政治不稳"],
        matchScore: function(bazi) {
            let score = 0;
            
            // 1. 强项共振：你的旺气与城市五行共振（主要加分）
            if (bazi.strongElements.includes(this.elements.primary)) {
                score += 30;
            }
            if (bazi.strongElements.includes(this.elements.secondary)) {
                score += 20;
            }
            if (bazi.strongElements.includes(this.elements.tertiary)) {
                score += 10;
            }
            
            // 2. 补足弱项：城市能补你缺的五行（重要加分）
            if (bazi.weakElements && bazi.weakElements.length > 0) {
                if (bazi.weakElements.includes(this.elements.primary)) {
                    score += 25;  // 主属性能补弱项，大加分
                }
                if (bazi.weakElements.includes(this.elements.secondary)) {
                    score += 15;  // 次属性能补弱项，中加分
                }
                if (bazi.weakElements.includes(this.elements.tertiary)) {
                    score += 8;   // 第三属性能补弱项，小加分
                }
            }
            
            // 3. 五行相克：避免kezhiRelation（减分）
            // 木克土、土克水、水克火、火克金、金克木
            const kezhiRelation = {
                "木": "土", "土": "水", "水": "火", "火": "金", "金": "木"
            };
            
            bazi.strongElements.forEach(strong => {
                if (kezhiRelation[strong] === this.elements.primary) {
                    score -= 15;  // 你的旺气克城市主属性
                }
                if (kezhiRelation[this.elements.primary] === strong) {
                    score -= 10;  // 城市主属性克你的旺气
                }
            });
            
            return score;
        }
    }
];

// 匹配算法
function matchCities(bazi, selectedContinents = []) {
    // 如果没有选择洲，默认全选
    if (!selectedContinents || selectedContinents.length === 0) {
        selectedContinents = ['asia', 'europe', 'north-america', 'south-america', 'africa', 'oceania'];
    }
    
    // 先筛选洲
    const filteredCities = cities.filter(city => 
        selectedContinents.includes(city.continent)
    );
    
    // 计算分数
    const scored = filteredCities.map(city => ({
        ...city,
        score: city.matchScore(bazi)
    }));
    
    // 按分数排序
    scored.sort((a, b) => b.score - a.score);
    
    // 返回前5个
    return scored.slice(0, 5);
}
