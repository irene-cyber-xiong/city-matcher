// 基于 Gmuli-Bazi-Calc 的精确八字计算
// 使用完整的节气数据（1900-2050）

const HEAVENLY_STEMS = ["", "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const EARTHLY_BRANCHES = ["", "子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

// 天干五行
const STEM_ELEMENTS = {
    "甲": "木", "乙": "木",
    "丙": "火", "丁": "火",
    "戊": "土", "己": "土",
    "庚": "金", "辛": "金",
    "壬": "水", "癸": "水"
};

// 地支五行
const BRANCH_ELEMENTS = {
    "子": "水", "丑": "土", "寅": "木", "卯": "木",
    "辰": "土", "巳": "火", "午": "火", "未": "土",
    "申": "金", "酉": "金", "戌": "土", "亥": "水"
};

// 地支藏干
const BRANCH_HIDDEN = {
    "子": ["癸"], "丑": ["己", "癸", "辛"], "寅": ["甲", "丙", "戊"], "卯": ["乙"],
    "辰": ["戊", "乙", "癸"], "巳": ["丙", "戊", "庚"], "午": ["丁", "己"], "未": ["己", "丁", "乙"],
    "申": ["庚", "壬", "戊"], "酉": ["辛"], "戌": ["戊", "辛", "丁"], "亥": ["壬", "甲"]
};

const solarTermLongitude = [0, 322.5, 337.5, 352.5, 7.5, 22.5, 37.5, 52.5, 67.5, 82.5, 97.5, 112.5, 127.5, 142.5, 157.5, 172.5, 187.5, 202.5, 217.5, 232.5, 247.5, 262.5, 277.5, 292.5, 307.5];

// 辅助函数：保持数字在范围内
function getInRange(number, range) {
    while (number > range) { number = number - range; }
    while (number <= 0.0) { number = number + range; }
    return number;
}

// 查找日期前后的节气
function findSurroundingDates(dateArray, targetDate) {
    const target = new Date(targetDate).getTime();
    let low = 0;
    let high = dateArray.length - 1;
    
    if (target < new Date(dateArray[0]).getTime()) {
        return { beforeIndex: null, afterIndex: 0 };
    }
    if (target > new Date(dateArray[high]).getTime()) {
        return { beforeIndex: high, afterIndex: null };
    }
    
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const midTime = new Date(dateArray[mid]).getTime();
        
        if (midTime === target) {
            return { beforeIndex: mid, afterIndex: mid };
        } else if (midTime < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return { beforeIndex: high, afterIndex: low };
}

// 计算日期差
function findDifference(startDate, endDate) {
    let endDateTemp = new Date(endDate);
    const oneDay = 24 * 60 * 60 * 1000;
    endDateTemp.setHours(0, 0, 0);
    startDate.setHours(0, 0, 0);
    const diffDays = Math.round(Math.abs((endDateTemp - startDate) / oneDay));
    return diffDays;
}

// 主计算函数
function calculateBazi(year, month, day, hour) {
    try {
        console.log('使用 Gmuli 算法计算八字:', { year, month, day, hour });
        
        // 检查节气数据是否加载
        if (typeof datelist === 'undefined') {
            console.error('节气数据未加载');
            alert('节气数据加载失败，请刷新页面重试');
            return null;
        }
        
        const dateEntered = new Date(year, month - 1, day, hour, 0, 0);
        
        // 计算年柱
        let yearStem = getInRange(year % 10 - 3, 10);
        let yearBranch = getInRange(year % 12 - 3, 12);
        
        // 计算日柱
        const compareDate = new Date();
        compareDate.setFullYear(1);
        compareDate.setDate(1);
        compareDate.setMonth(0);
        const dateDiff = findDifference(compareDate, dateEntered);
        
        const dayStem = getInRange((dateDiff % 10) + 6, 10);
        const dayBranch = getInRange((dateDiff % 12) + 4, 12);
        
        // 查找节气
        const firstSolarTermIndex = ((year - 1900) * 24) + 1;
        const surroundingIndex = findSurroundingDates(datelist, dateEntered.toISOString());
        const previousSolarTermIndex = surroundingIndex.beforeIndex;
        
        const solarTerm = (previousSolarTermIndex + 22) % 24;
        const solarMonth = Math.floor((solarTerm - 1) / 2) + 1;
        
        const longitude = solarTermLongitude[solarTerm];
        
        // 年柱修正（立春前算上一年）
        if ((longitude <= 315) && (month < 3)) {
            yearBranch = getInRange(yearBranch - 1, 12);
            yearStem = getInRange(yearStem - 1, 10);
        }
        
        // 计算月柱
        const monthBranch = getInRange(solarMonth + 2, 12);
        const monthStem = getInRange((((yearStem % 5) * 2) + solarMonth), 10);
        
        // 计算时柱
        let hourBranch = getInRange(hour, 23);
        
        if ((hourBranch % 2) == 0) {
            hourBranch = getInRange((hourBranch - 1), 23);
        }
        if (hourBranch == 0) {
            hourBranch = 1;
        } else {
            hourBranch = getInRange(((hourBranch + 3) / 2), 12);
        }
        
        let hourStem = getInRange(hourBranch + (((dayStem % 5) * 2) - 2), 10);
        
        if (hour >= 23) {
            hourStem = getInRange(13 + (((dayStem % 5) * 2) - 2), 10);
        }
        
        const result = {
            year: {
                stem: HEAVENLY_STEMS[yearStem],
                branch: EARTHLY_BRANCHES[yearBranch],
                pillar: HEAVENLY_STEMS[yearStem] + EARTHLY_BRANCHES[yearBranch]
            },
            month: {
                stem: HEAVENLY_STEMS[monthStem],
                branch: EARTHLY_BRANCHES[monthBranch],
                pillar: HEAVENLY_STEMS[monthStem] + EARTHLY_BRANCHES[monthBranch]
            },
            day: {
                stem: HEAVENLY_STEMS[dayStem],
                branch: EARTHLY_BRANCHES[dayBranch],
                pillar: HEAVENLY_STEMS[dayStem] + EARTHLY_BRANCHES[dayBranch]
            },
            hour: {
                stem: HEAVENLY_STEMS[hourStem],
                branch: EARTHLY_BRANCHES[hourBranch],
                pillar: HEAVENLY_STEMS[hourStem] + EARTHLY_BRANCHES[hourBranch]
            },
            dayMaster: HEAVENLY_STEMS[dayStem]
        };
        
        console.log('八字计算结果:', result);
        return result;
        
    } catch (error) {
        console.error('八字计算错误:', error);
        alert('八字计算错误: ' + error.message);
        return null;
    }
}

// 分析五行分布
function analyzeElements(bazi) {
    const elements = {
        "木": 0, "火": 0, "土": 0, "金": 0, "水": 0
    };
    
    [bazi.year, bazi.month, bazi.day, bazi.hour].forEach(pillar => {
        elements[STEM_ELEMENTS[pillar.stem]] += 1.0;
    });
    
    [bazi.year, bazi.month, bazi.day, bazi.hour].forEach(pillar => {
        elements[BRANCH_ELEMENTS[pillar.branch]] += 0.8;
    });
    
    [bazi.year, bazi.month, bazi.day, bazi.hour].forEach(pillar => {
        const hidden = BRANCH_HIDDEN[pillar.branch];
        if (hidden) {
            hidden.forEach(stem => {
                elements[STEM_ELEMENTS[stem]] += 0.3;
            });
        }
    });
    
    const sorted = Object.entries(elements).sort((a, b) => b[1] - a[1]);
    const strongElements = sorted.filter(e => e[1] >= 2.0).map(e => e[0]);
    const weakElements = sorted.filter(e => e[1] < 1.0).map(e => e[0]);
    
    const dayMasterElement = STEM_ELEMENTS[bazi.dayMaster];
    const dayMasterStrength = elements[dayMasterElement];
    const isDayMasterStrong = dayMasterStrength >= 2.5;
    
    return {
        distribution: elements,
        strongElements: strongElements.length > 0 ? strongElements : [sorted[0][0]],
        weakElements: weakElements,
        dominant: sorted[0][0],
        dayMaster: bazi.dayMaster,
        dayMasterElement: dayMasterElement,
        isDayMasterStrong: isDayMasterStrong,
        summary: generateElementsSummary(elements, sorted[0][0], bazi.dayMaster, dayMasterElement, isDayMasterStrong)
    };
}

// 生成五行分析文字
function generateElementsSummary(elements, dominant, dayMaster, dayMasterElement, isDayMasterStrong) {
    const parts = [];
    
    Object.entries(elements).forEach(([element, count]) => {
        if (count >= 0.5) {
            parts.push(`${element}${Math.round(count * 10) / 10}`);
        }
    });
    
    const elementDescriptions = {
        "木": "灵活、创新、成长",
        "火": "热情、冲劲、竞争",
        "土": "稳定、务实、包容",
        "金": "规则、理性、结构",
        "水": "流动、智慧、变化"
    };
    
    let summary = `五行分布：${parts.join("、")}。`;
    summary += `你的日主是${dayMaster}（${dayMasterElement}），`;
    summary += isDayMasterStrong ? '身强' : '身弱';
    summary += `。主导五行是${dominant}（${elementDescriptions[dominant]}）。`;
    
    return summary;
}
