// 主应用逻辑

// 全局变量存储当前结果
let currentResult = null;

function calculateMatch() {
    // 获取输入
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value);
    const day = parseInt(document.getElementById('day').value);
    const hour = parseInt(document.getElementById('hour').value);
    const minute = parseInt(document.getElementById('minute').value);
    const birthplace = document.getElementById('birthplace').value;
    
    // 获取选中的洲
    const selectedContinents = getSelectedContinents();
    
    // 验证输入
    if (!year || !month || !day || hour === '' || minute === '') {
        alert('请填写完整的出生日期和时间');
        return;
    }
    
    if (selectedContinents.length === 0) {
        alert('请至少选择一个地区');
        return;
    }
    
    if (year < 1900 || year > 2100) {
        alert('年份请输入1900-2100之间');
        return;
    }
    
    if (month < 1 || month > 12) {
        alert('月份请输入1-12');
        return;
    }
    
    if (day < 1 || day > 31) {
        alert('日期请输入1-31');
        return;
    }
    
    if (hour < 0 || hour > 23) {
        alert('小时请输入0-23');
        return;
    }
    
    if (minute < 0 || minute > 59) {
        alert('分钟请输入0-59');
        return;
    }
    
    // 计算八字
    const bazi = calculateBazi(year, month, day, hour);
    
    if (!bazi) {
        alert('八字计算失败，请检查输入');
        return;
    }
    
    const elements = analyzeElements(bazi);
    
    // 显示八字
    displayBazi(bazi, elements);
    
    // 匹配城市（带洲筛选）
    const matches = matchCities(elements, selectedContinents);
    
    // 保存当前结果
    currentResult = {
        birthInfo: { year, month, day, hour, minute, birthplace },
        bazi: bazi,
        elements: elements,
        matches: matches,
        timestamp: new Date().toISOString()
    };
    
    displayCities(matches, elements);
    
    // 显示结果区域
    document.getElementById('input-section').style.display = 'none';
    document.getElementById('result').classList.add('show');
}

// 获取选中的洲
function getSelectedContinents() {
    const checkboxes = document.querySelectorAll('.continent-checkbox:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

// 切换全选
function toggleAllContinents() {
    const allCheckbox = document.getElementById('continent-all');
    const continentCheckboxes = document.querySelectorAll('.continent-checkbox');
    
    continentCheckboxes.forEach(cb => {
        cb.checked = allCheckbox.checked;
    });
}

// 监听单个洲的选择，更新全选状态
document.addEventListener('DOMContentLoaded', function() {
    const continentCheckboxes = document.querySelectorAll('.continent-checkbox');
    continentCheckboxes.forEach(cb => {
        cb.addEventListener('change', function() {
            const allCheckbox = document.getElementById('continent-all');
            const allChecked = Array.from(continentCheckboxes).every(c => c.checked);
            allCheckbox.checked = allChecked;
        });
    });
});

function displayBazi(bazi, elements) {
    // 显示四柱
    const pillarsHtml = `
        <div class="pillar">
            <div class="pillar-label">年柱</div>
            <div class="pillar-chars">${bazi.year.pillar}</div>
        </div>
        <div class="pillar">
            <div class="pillar-label">月柱</div>
            <div class="pillar-chars">${bazi.month.pillar}</div>
        </div>
        <div class="pillar">
            <div class="pillar-label">日柱</div>
            <div class="pillar-chars">${bazi.day.pillar}</div>
        </div>
        <div class="pillar">
            <div class="pillar-label">时柱</div>
            <div class="pillar-chars">${bazi.hour.pillar}</div>
        </div>
    `;
    document.getElementById('bazi-pillars').innerHTML = pillarsHtml;
    
    // 显示五行分析
    document.getElementById('elements-summary').innerHTML = elements.summary;
}

function displayCities(matches, elements) {
    const citiesHtml = matches.map((city, index) => {
        const rank = index + 1;
        const emoji = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `${rank}.`;
        
        // 生成匹配原因
        const reason = generateMatchReason(city, elements);
        
        return `
            <div class="city-card">
                <div class="city-name">${emoji} ${city.name} ${city.nameEn}</div>
                <div class="city-elements">
                    五行属性：${city.elements.primary} > ${city.elements.secondary} > ${city.elements.tertiary}
                </div>
                <div class="city-reason">${reason}</div>
                <div style="color: #666; margin-bottom: 10px;">
                    <strong>特点：</strong>${city.characteristics.climate} | ${city.characteristics.pace} | ${city.characteristics.industry}
                </div>
                <div class="city-pros-cons">
                    <div class="pros">
                        <h4>✓ 优势</h4>
                        <ul>
                            ${city.pros.map(pro => `<li>${pro}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="cons">
                        <h4>× 挑战</h4>
                        <ul>
                            ${city.cons.map(con => `<li>${con}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    document.getElementById('cities').innerHTML = citiesHtml;
}

function generateMatchReason(city, elements) {
    const reasons = [];
    
    // 基于五行匹配生成原因
    if (elements.strongElements.includes(city.elements.primary)) {
        reasons.push(`你的${city.elements.primary}气旺，与${city.name}的${city.elements.primary}属性共振`);
    }
    
    if (elements.strongElements.includes(city.elements.secondary)) {
        reasons.push(`${city.elements.secondary}气也能滋养你`);
    }
    
    // 基于弱项生成建议
    if (elements.weakElements.length > 0) {
        const weak = elements.weakElements[0];
        if (city.elements.primary === weak || city.elements.secondary === weak) {
            reasons.push(`能补足你缺少的${weak}气`);
        }
    }
    
    // 如果没有特别原因，给个通用的
    if (reasons.length === 0) {
        reasons.push(`${city.description}`);
    }
    
    return reasons.join('，') + '。';
}

function reset() {
    document.getElementById('input-section').style.display = 'block';
    document.getElementById('result').classList.remove('show');
    
    // 清空输入
    document.getElementById('year').value = '';
    document.getElementById('month').value = '';
    document.getElementById('day').value = '';
    document.getElementById('hour').value = '';
    document.getElementById('minute').value = '';
    document.getElementById('birthplace').value = '';
}

// 页面加载时的初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('城市匹配系统已加载');
});

// ========== 历史记录功能 ==========

function saveToHistory(result) {
    let history = JSON.parse(localStorage.getItem('cityMatchHistory') || '[]');
    
    // 添加新记录到开头
    history.unshift({
        ...result,
        id: Date.now()
    });
    
    // 只保留最近20条
    if (history.length > 20) {
        history = history.slice(0, 20);
    }
    
    localStorage.setItem('cityMatchHistory', JSON.stringify(history));
}

function loadHistory() {
    const history = JSON.parse(localStorage.getItem('cityMatchHistory') || '[]');
    return history;
}

function toggleHistory() {
    const historySection = document.getElementById('history-section');
    const resultSection = document.getElementById('result');
    
    if (historySection.classList.contains('show')) {
        historySection.classList.remove('show');
        resultSection.classList.add('show');
    } else {
        displayHistory();
        historySection.classList.add('show');
        resultSection.classList.remove('show');
    }
}

function displayHistory() {
    const history = loadHistory();
    const historyList = document.getElementById('history-list');
    
    if (history.length === 0) {
        historyList.innerHTML = '<p style="text-align: center; color: #999;">暂无历史记录</p>';
        return;
    }
    
    const clearAllBtn = '<button onclick="clearAllHistory()" style="width: 100%; padding: 12px; background: #dc3545; color: white; border: none; border-radius: 8px; cursor: pointer; margin-bottom: 15px;">🗑️ 清空所有历史</button>';
    
    const historyHtml = history.map(item => {
        const date = new Date(item.timestamp);
        const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
        const birthInfo = item.birthInfo;
        const topCity = item.matches[0];
        
        return `
            <div class="history-item" onclick="loadHistoryItem(${item.id})">
                <span class="delete-history" onclick="event.stopPropagation(); deleteHistoryItem(${item.id})">🗑️</span>
                <div class="history-date">${dateStr}</div>
                <div class="history-info">
                    ${birthInfo.year}年${birthInfo.month}月${birthInfo.day}日 ${birthInfo.hour}:${String(birthInfo.minute).padStart(2, '0')}
                    ${birthInfo.birthplace ? ' · ' + birthInfo.birthplace : ''}
                </div>
                <div class="history-top-city">推荐：${topCity.name}</div>
            </div>
        `;
    }).join('');
    
    historyList.innerHTML = clearAllBtn + historyHtml;
}

function clearAllHistory() {
    if (!confirm('确定要清空所有历史记录吗？此操作不可恢复。')) return;
    
    localStorage.removeItem('cityMatchHistory');
    displayHistory();
    alert('所有历史记录已清空');
}

function loadHistoryItem(id) {
    const history = loadHistory();
    const item = history.find(h => h.id === id);
    
    if (!item) return;
    
    currentResult = item;
    
    // 显示结果
    displayBazi(item.bazi, item.elements);
    displayCities(item.matches, item.elements);
    
    // 切换显示
    document.getElementById('history-section').classList.remove('show');
    document.getElementById('result').classList.add('show');
}

function deleteHistoryItem(id) {
    if (!confirm('确定要删除这条记录吗？')) return;
    
    let history = loadHistory();
    history = history.filter(h => h.id !== id);
    localStorage.setItem('cityMatchHistory', JSON.stringify(history));
    
    displayHistory();
}

// ========== 分享功能 ==========

function showShareModal() {
    document.getElementById('share-modal').classList.add('show');
}

function closeShareModal() {
    document.getElementById('share-modal').classList.remove('show');
}

function copyLink() {
    const url = window.location.href;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            alert('链接已复制到剪贴板！');
            closeShareModal();
        });
    } else {
        // 降级方案
        const input = document.createElement('input');
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        alert('链接已复制到剪贴板！');
        closeShareModal();
    }
}

function shareText() {
    if (!currentResult) return;
    
    const { birthInfo, bazi, elements, matches } = currentResult;
    
    let text = `🌍 城市匹配结果\n\n`;
    text += `📅 出生信息：${birthInfo.year}年${birthInfo.month}月${birthInfo.day}日 ${birthInfo.hour}:${String(birthInfo.minute).padStart(2, '0')}\n`;
    if (birthInfo.birthplace) {
        text += `📍 出生地：${birthInfo.birthplace}\n`;
    }
    text += `\n🎴 八字：${bazi.year.pillar} ${bazi.month.pillar} ${bazi.day.pillar} ${bazi.hour.pillar}\n`;
    text += `${elements.summary}\n\n`;
    text += `🏆 推荐城市（前5名）：\n\n`;
    
    matches.slice(0, 5).forEach((city, index) => {
        const emoji = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`;
        text += `${emoji} ${city.name} (${city.nameEn})\n`;
        text += `   五行：${city.elements.primary} > ${city.elements.secondary} > ${city.elements.tertiary}\n`;
        text += `   ${city.description}\n\n`;
    });
    
    text += `\n来测测你适合哪个城市：${window.location.href}`;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            alert('结果已复制到剪贴板！');
            closeShareModal();
        });
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('结果已复制到剪贴板！');
        closeShareModal();
    }
}

function downloadImage() {
    alert('图片下载功能开发中，敬请期待！\n\n目前可以使用截图工具保存结果。');
    closeShareModal();
}

// 点击模态框外部关闭
document.addEventListener('click', function(e) {
    const modal = document.getElementById('share-modal');
    if (e.target === modal) {
        closeShareModal();
    }
});
