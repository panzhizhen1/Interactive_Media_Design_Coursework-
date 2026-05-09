export const contentData = {
    'overview': {
        title: '色彩编码概述',
        subtitle: '从基础到进阶 - 全面掌握色彩编码知识体系',
        meta: {
            readingTime: '10分钟',
            difficulty: '初级',
            path: '#/learning/overview'
        },
        sections: [
            {
                heading: '什么是色彩编码？',
                content: `
            <p><strong>色彩编码（Colour Encoding）</strong>是指通过数学模型和数值系统来表示、存储和传输颜色信息的技术。它是数字图像处理、视频制作、印刷出版和显示技术的核心基础。</p>
            <p>在数字世界中，颜色不再是主观的感知，而是可以通过数值精确定义和复现的客观数据。色彩编码确保了颜色在整个工作流程（从采集、编辑到显示、印刷）中的一致性和准确性。</p>
            <h3>核心特征</h3>
            <ul>
              <li><strong>数字化表示：</strong>将颜色转换为计算机可处理的数字格式</li>
              <li><strong>跨设备一致性：</strong>确保不同设备上颜色表现一致</li>
              <li><strong>高效存储：</strong>优化数据存储和传输效率</li>
            </ul>
          `
            },
            {
                heading: '为什么色彩编码如此重要？',
                content: `
            <h3>1. 跨设备颜色一致性</h3>
            <p>确保同一张图片在不同显示器、打印机、移动设备上显示效果一致，解决"所见即所得"的核心技术难题。</p>
            
            <h3>2. 专业工作流保障</h3>
            <p>摄影师、设计师、视频制作人员依赖精确的色彩还原，避免因色差导致的返工和损失。</p>
            
            <h3>3. 数据传输与压缩效率</h3>
            <p>高效的色彩编码可以显著减少文件大小，支持4K/8K超高清视频的流畅传输和播放。</p>
            
            <h3>4. 视觉体验提升</h3>
            <p>HDR（高动态范围）技术带来更真实的亮度和对比度，广色域呈现更丰富鲜艳的色彩。</p>
          `
            },
            {
                heading: '四大核心模块概览',
                content: `
            <div class="module-cards">
              <div class="module-card">
                <h3>模块一：色彩基础</h3>
                <p class="module-duration">学习时长：约30分钟</p>
                <ul>
                  <li>色彩的物理原理：光的本质、人眼视觉、三要素</li>
                  <li>色彩模型：RGB、HSV/HSL、CMYK、Lab</li>
                  <li>色彩空间：sRGB、Adobe RGB、ProPhoto RGB、DCI-P3</li>
                </ul>
              </div>
              
              <div class="module-card">
                <h3>模块二：编码概念</h3>
                <p class="module-duration">学习时长：约45分钟</p>
                <ul>
                  <li>位深度：8-bit、10-bit、16-bit、32-bit</li>
                  <li>色域：NTSC、sRGB、Adobe RGB、DCI-P3、Rec.2020</li>
                  <li>伽马校正：γ=2.2、γ=2.4、γ=1.8</li>
                  <li>ICC配置文件：设备校准与色彩管理</li>
                </ul>
              </div>
              
              <div class="module-card">
                <h3>模块三：进阶主题</h3>
                <p class="module-duration">学习时长：约60分钟</p>
                <ul>
                  <li>HDR技术：HDR10、HDR10+、Dolby Vision</li>
                  <li>广色域：量子点、OLED、Mini-LED</li>
                  <li>色彩管理工作流：输入、显示、输出校准</li>
                  <li>行业标准：Rec.709、Rec.2020、DCI-P3</li>
                </ul>
              </div>
              
              <div class="module-card">
                <h3>模块四：交互实践</h3>
                <p class="module-duration">学习时长：自主探索</p>
                <ul>
                  <li>取色器工具：实时转换、WCAG检查</li>
                  <li>可视化示例：色域可视化、失真演示</li>
                  <li>互动工具：混色实验、和谐生成器、心理学测试</li>
                </ul>
              </div>
            </div>
          `
            },
            {
                heading: '学习目标与预期成果',
                content: `
            <p>完成本课程后，你将能够：</p>
            
            <h3>理解基础概念</h3>
            <ul>
              <li>解释色彩编码的基本原理</li>
              <li>区分不同的色彩模型和色彩空间</li>
              <li>理解位深度和色域的重要性</li>
            </ul>
            
            <h3>掌握核心技术</h3>
            <ul>
              <li>进行色彩模型之间的转换</li>
              <li>理解伽马校正的作用和原理</li>
              <li>使用和管理ICC色彩配置文件</li>
            </ul>
            
            <h3>应用高级技术</h3>
            <ul>
              <li>理解HDR和广色域技术</li>
              <li>建立专业的色彩管理工作流程</li>
              <li>遵循行业标准和最佳实践</li>
            </ul>
            
            <h3>实践操作能力</h3>
            <ul>
              <li>使用取色器和转换工具</li>
              <li>分析和解决色彩一致性问题</li>
              <li>优化图片和视频的色彩表现</li>
            </ul>
          `
            },
            {
                heading: '推荐学习路径',
                content: `
            <div class="learning-paths">
              <div class="path-card">
                <h3>初学者路径</h3>
                <div class="path-steps">
                  <span class="path-step">概述</span>
                  <span class="path-arrow">→</span>
                  <span class="path-step">基础</span>
                  <span class="path-arrow">→</span>
                  <span class="path-step"><a href="#interaction-color-picker">交互工具</a></span>
                  <span class="path-arrow">→</span>
                  <span class="path-step"><a href="game.html">游戏挑战</a></span>
                </div>
              </div>
              
              <div class="path-card">
                <h3>中级学习者路径</h3>
                <div class="path-steps">
                  <span class="path-step">概述</span>
                  <span class="path-arrow">→</span>
                  <span class="path-step">基础</span>
                  <span class="path-arrow">→</span>
                  <span class="path-step">编码概念</span>
                  <span class="path-arrow">→</span>
                  <span class="path-step"><a href="#interaction-visual-example">交互示例</a></span>
                  <span class="path-arrow">→</span>
                  <span class="path-step"><a href="test.html">测试评估</a></span>
                </div>
              </div>
              
              <div class="path-card">
                <h3>高级学习者路径</h3>
                <div class="path-steps">
                  <span class="path-step">概述</span>
                  <span class="path-arrow">→</span>
                  <span class="path-step">全部模块</span>
                  <span class="path-arrow">→</span>
                  <span class="path-step">进阶主题</span>
                  <span class="path-arrow">→</span>
                  <span class="path-step"><a href="community.html">社区项目</a></span>
                </div>
              </div>
            </div>
          `
            },
            {
                heading: '学习小贴士',
                content: `
            <ol>
              <li><strong>循序渐进：</strong>按照模块顺序学习，打好基础</li>
              <li><strong>动手实践：</strong>每个理论概念都有对应的交互工具</li>
              <li><strong>做好笔记：</strong>利用内置笔记功能记录重点</li>
              <li><strong>参与社区：</strong>与其他学习者交流心得</li>
              <li><strong>定期复习：</strong>通过游戏和测试巩固知识</li>
            </ol>
          `
            },
            {
                heading: '相关资源',
                content: `
            <ul>
              <li><strong>国际色彩联盟（ICC）：</strong>色彩管理标准组织</li>
              <li><strong>CIE（国际照明委员会）：</strong>色彩科学权威机构</li>
              <li><strong>Adobe色彩管理指南：</strong>行业最佳实践</li>
              <li><strong>专业校色工具：</strong>X-Rite、Datacolor等</li>
            </ul>
          `
            },
            {
                heading: '准备好了吗？开始学习吧！',
                content: `
            <p>现在你已经对色彩编码有了全面的了解！接下来让我们深入<strong>学习模块</strong>，从色彩基础开始，逐步掌握这门重要的技术。</p>
            
            <div class="next-steps">
              <h3>推荐下一步</h3>
              <div class="action-buttons">
                <a href="#basic-color-models" class="btn btn-primary">进入学习模块 - 色彩基础</a>
                <a href="#interaction-color-picker" class="btn btn-secondary">体验交互工具</a>
                <a href="learning.html" class="btn btn-outline">查看知识地图</a>
              </div>
            </div>
          `
            }
        ]
    },
    'basic-color-models': {
        title: '色彩模型',
        subtitle: '理解色彩表示的数学框架',
        meta: {
            readingTime: '25-30分钟',
            difficulty: '初级',
            type: '理论 + 交互'
        },
        sections: [
            {
                heading: '学习目标',
                content: `
            <p>完成本模块后，你将能够：</p>
            
            <h3>理解基础概念</h3>
            <ul>
              <li>解释什么是色彩模型以及为什么需要它们</li>
              <li>区分加色和减色色彩模型</li>
              <li>理解色彩模型与人类感知之间的关系</li>
            </ul>
            
            <h3>掌握核心模型</h3>
            <ul>
              <li>描述RGB色彩模型及其应用</li>
              <li>解释HSV/HSL模型及其优势</li>
              <li>理解CMYK模型及其在印刷中的应用</li>
              <li>掌握Lab色彩空间及其设备无关性</li>
            </ul>
            
            <h3>实际应用</h3>
            <ul>
              <li>在不同色彩模型之间进行转换</li>
              <li>为特定任务选择合适的色彩模型</li>
              <li>了解色彩模型的局限性和约束条件</li>
            </ul>
          `
            },
            {
                heading: '色彩模型简介',
                content: `
            <h3>什么是色彩模型？</h3>
            <p><strong>色彩模型</strong>是一种抽象的数学框架，用于以数值方式表示颜色。它提供了一种系统化的方法，通过多维空间中的坐标来描述颜色。</p>
            
            <h3>关键特征</h3>
            <ul>
              <li>定义具有特定维度的色彩空间</li>
              <li>使用数值来表示颜色</li>
              <li>提供颜色混合和转换的规则</li>
              <li>建立不同颜色之间的关系</li>
            </ul>
            
            <h3>为什么我们需要色彩模型？</h3>
            <ul>
              <li><strong>标准化：</strong>描述颜色的通用语言</li>
              <li><strong>精确性：</strong>精确的数值表示消除了歧义</li>
              <li><strong>可复现性：</strong>相同的数值在不同设备上产生相同的颜色</li>
              <li><strong>计算能力：</strong>支持对颜色进行数学运算</li>
              <li><strong>交流便利：</strong>促进系统间的颜色交换</li>
            </ul>
            
            <h3>色彩模型的类型</h3>
            <p>色彩模型大致分为两种主要类型：</p>
            
            <div class="info-box info-box--additive">
              <h4>加色色彩模型</h4>
              <ul>
                <li>基于光的发射</li>
                <li>通过添加不同颜色的光来创建颜色</li>
                <li>原色组合产生白色</li>
                <li>用于显示器、投影仪和其他发光设备</li>
              </ul>
            </div>
            
            <div class="info-box info-box--subtractive">
              <h4>减色色彩模型</h4>
              <ul>
                <li>基于光的反射/吸收</li>
                <li>通过减去（吸收）波长来创建颜色</li>
                <li>原色组合产生黑色（或深棕色）</li>
                <li>用于印刷、绘画和其他反射介质</li>
              </ul>
            </div>
          `
            },
            {
                heading: '加色色彩模型',
                content: `
            <figure class="content-figure content-figure--float-right">
              <img src="assets/images/learning/color_model/rgb-color-model.png" alt="RGB加色模型展示红、绿、蓝光混合产生黄、品红、青和白色" loading="lazy" />
              <figcaption class="content-figure__caption">图1：RGB加色模型</figcaption>
            </figure>
            
            <h3>RGB色彩模型</h3>
            <p><strong>全称：</strong>红（Red）、绿（Green）、蓝（Blue）</p>
            
            <p>RGB模型基于人眼的三色视觉理论。它使用三种原色（红、绿、蓝），通过不同比例的组合可以创建广泛的颜色范围。</p>
            
            <div class="code-block">
              <strong>数学表示：</strong><br>
              颜色 = (R, G, B)<br>
              其中：<br>
              - R = 红色分量（0-255或0-1）<br>
              - G = 绿色分量（0-255或0-1）<br>
              - B = 蓝色分量（0-255或0-1）
            </div>
            
            <h4>工作原理</h4>
            <ul>
              <li><strong>红 + 绿 = 黄</strong></li>
              <li><strong>红 + 蓝 = 品红</strong></li>
              <li><strong>绿 + 蓝 = 青</strong></li>
              <li><strong>红 + 绿 + 蓝 = 白</strong></li>
              <li><strong>无光 = 黑</strong></li>
            </ul>
            
            <h4>应用场景</h4>
            <ul>
              <li>计算机显示器和显示屏</li>
              <li>电视屏幕</li>
              <li>数码相机和扫描仪</li>
              <li>移动设备</li>
              <li>网页设计和数字图形</li>
            </ul>
            
            <div class="pros-cons">
              <div class="pros-cons__item pros-cons__item--pros">
                <h4>优点</h4>
                <ul>
                  <li>直接匹配显示硬件</li>
                  <li>简单直观</li>
                  <li>适合数字处理</li>
                  <li>广泛采用和支持</li>
                </ul>
              </div>
              <div class="pros-cons__item pros-cons__item--cons">
                <h4>局限性</h4>
                <ul>
                  <li>设备依赖（不同显示器显示不同的RGB值）</li>
                  <li>不适合颜色选择</li>
                  <li>与其他一些模型相比色域有限</li>
                </ul>
              </div>
            </div>
            
            <figure class="content-figure content-figure--float-right">
              <img src="assets/images/learning/color_model/hsl-color-model-3d.png" alt="HSL色彩模型的3D圆柱体可视化，展示色调、饱和度和亮度维度" loading="lazy" />
              <figcaption class="content-figure__caption">图2：HSL/HSV圆柱模型</figcaption>
            </figure>
            
            <h3>HSV/HSL色彩模型</h3>
            <p><strong>全称：</strong></p>
            <ul>
              <li><strong>HSV：</strong>色调（Hue）、饱和度（Saturation）、明度（Value）</li>
              <li><strong>HSL：</strong>色调（Hue）、饱和度（Saturation）、亮度（Lightness）</li>
            </ul>
            
            <p>这些模型旨在比RGB更直观且更具感知相关性。它们将颜色分离为三个不同的组件，更好地符合人类描述颜色的方式。</p>
            
            <h4>HSV组件</h4>
            <ol>
              <li><strong>色调（H）</strong>
                <ul>
                  <li>代表实际的颜色（红、绿、蓝等）</li>
                  <li>以色轮上的角度衡量（0°-360°）</li>
                  <li>0° = 红，120° = 绿，240° = 蓝</li>
                </ul>
              </li>
              <li><strong>饱和度（S）</strong>
                <ul>
                  <li>代表颜色的纯度或强度</li>
                  <li>0% = 灰度，100% = 完全饱和</li>
                  <li>控制颜色被白色稀释的程度</li>
                </ul>
              </li>
              <li><strong>明度/亮度（V）</strong>
                <ul>
                  <li>代表颜色的亮度</li>
                  <li>0% = 黑，100% = 最大亮度</li>
                  <li>控制颜色被黑色稀释的程度</li>
                </ul>
              </li>
            </ol>
            
            <h4>HSL组件</h4>
            <ol>
              <li><strong>色调（H）</strong> - 与HSV相同</li>
              <li><strong>饱和度（S）</strong> - 与HSV类似但计算方式不同</li>
              <li><strong>亮度（L）</strong>
                <ul>
                  <li>代表感知亮度</li>
                  <li>0% = 黑，50% = 纯色，100% = 白</li>
                  <li>比明度更符合感知均匀性</li>
                </ul>
              </li>
            </ol>
            
            <div class="code-block">
              <strong>RGB到HSV转换（简化版）：</strong><br>
              给定[0,1]范围内的RGB值：<br><br>
              V = max(R, G, B)<br>
              S = (V - min(R, G, B)) / V，如果V ≠ 0<br>
              H = 取决于哪个分量最大：<br>
              &nbsp;&nbsp;如果R最大：H = 60° × ((G - B) / (V - min))<br>
              &nbsp;&nbsp;如果G最大：H = 60° × (2 + (B - R) / (V - min))<br>
              &nbsp;&nbsp;如果B最大：H = 60° × (4 + (R - G) / (V - min))
            </div>
            
            <h4>应用场景</h4>
            <ul>
              <li>图形软件中的颜色选择工具</li>
              <li>图像编辑和颜色校正</li>
              <li>用户界面设计</li>
              <li>色彩理论教育</li>
              <li>艺术化颜色操作</li>
            </ul>
          `
            },
            {
                heading: '减色色彩模型',
                content: `
            <figure class="content-figure content-figure--float-right">
              <img src="assets/images/learning/color_model/cmyk-color-model.png" alt="CMYK减色模型展示青、品红、黄和黑墨层混合" loading="lazy" />
              <figcaption class="content-figure__caption">图3：CMYK减色模型</figcaption>
            </figure>
            
            <h3>CMYK色彩模型</h3>
            <p><strong>全称：</strong>青（Cyan）、品红（Magenta）、黄（Yellow）、黑（Key/Black）</p>
            
            <p>CMYK模型用于彩色印刷。它通过在较浅的背景（通常是白纸）上部分或完全遮蔽颜色来工作。墨水减少了原本会被反射的光线。</p>
            
            <h4>为什么需要四种颜色？</h4>
            <ul>
              <li><strong>青、品红、黄</strong>是减色三原色</li>
              <li>理论上，结合CMY应该产生黑色</li>
              <li>实际上，不纯的墨水会产生浑浊的棕色</li>
              <li><strong>黑（K）</strong>的加入是为了：
                <ul>
                  <li>更丰富、更深的黑色</li>
                  <li>更好的文本和细节表现</li>
                  <li>成本节约（黑墨水更便宜）</li>
                  <li>减少墨水用量</li>
                </ul>
              </li>
            </ul>
            
            <div class="code-block">
              <strong>数学表示：</strong><br>
              颜色 = (C, M, Y, K)<br>
              其中：<br>
              - C = 青色分量（0-100%）<br>
              - M = 品红分量（0-100%）<br>
              - Y = 黄色分量（0-100%）<br>
              - K = 黑色分量（0-100%）
            </div>
            
            <h4>工作原理</h4>
            <ul>
              <li><strong>青</strong>吸收红光，反射蓝光和绿光</li>
              <li><strong>品红</strong>吸收绿光，反射红光和蓝光</li>
              <li><strong>黄</strong>吸收蓝光，反射红光和绿光</li>
              <li><strong>黑</strong>吸收所有光线</li>
            </ul>
            
            <h4>颜色混合示例</h4>
            <ul>
              <li><strong>青 + 品红 = 蓝</strong></li>
              <li><strong>青 + 黄 = 绿</strong></li>
              <li><strong>品红 + 黄 = 红</strong></li>
              <li><strong>青 + 品红 + 黄 = 深棕</strong>（理论上的黑色）</li>
              <li><strong>四种颜色均为100% = 浓黑</strong></li>
            </ul>
            
            <h4>应用场景</h4>
            <ul>
              <li>商业印刷（杂志、宣传册）</li>
              <li>报纸印刷</li>
              <li>包装设计</li>
              <li>专业摄影印刷</li>
              <li>出版行业</li>
            </ul>
            
            <figure class="content-figure content-figure--float-right">
              <img src="assets/images/learning/color_model/lab-color-space.png" alt="CIELAB色彩空间3D坐标系，展示L、a和b轴" loading="lazy" />
              <figcaption class="content-figure__caption">图4：CIELAB色彩空间</figcaption>
            </figure>
            
            <h3>Lab色彩空间</h3>
            <p><strong>全称：</strong>CIELAB（国际照明委员会LAB）</p>
            
            <p>Lab是一种设备无关的色彩空间，旨在近似人类视觉。它将颜色分离为三个感知均匀的组件。</p>
            
            <h4>组件</h4>
            <ol>
              <li><strong>L*（亮度）</strong>
                <ul>
                  <li>代表感知亮度</li>
                  <li>范围：0（黑）到100（白）</li>
                  <li>感知均匀尺度</li>
                </ul>
              </li>
              <li><strong>a*（绿-红轴）</strong>
                <ul>
                  <li>代表在绿和红之间的位置</li>
                  <li>负值 = 绿</li>
                  <li>正值 = 红</li>
                  <li>零 = 中性（灰）</li>
                </ul>
              </li>
              <li><strong>b*（蓝-黄轴）</strong>
                <ul>
                  <li>代表在蓝和黄之间的位置</li>
                  <li>负值 = 蓝</li>
                  <li>正值 = 黄</li>
                  <li>零 = 中性（灰）</li>
                </ul>
              </li>
            </ol>
            
            <h4>关键特征</h4>
            <ul>
              <li><strong>感知均匀性：</strong>相等的数值差异对应相等的感知颜色差异</li>
              <li><strong>设备无关性：</strong>不依赖于任何特定设备或介质</li>
              <li><strong>宽色域：</strong>包含人眼可见的所有颜色</li>
            </ul>
            
            <h4>应用场景</h4>
            <ul>
              <li>色彩管理系统</li>
              <li>色差测量（ΔE计算）</li>
              <li>专业颜色校正</li>
              <li>跨设备颜色匹配</li>
              <li>色彩科学研究</li>
            </ul>
          `
            },
            {
                heading: '色彩模型比较',
                content: `
            <figure class="content-figure content-figure--wide">
              <img src="assets/images/learning/color_model/color-models-comparison.png" alt="RGB、HSV/HSL、CMYK和Lab色彩模型的比较概览" loading="lazy" />
              <figcaption class="content-figure__caption">图5：色彩模型比较概览</figcaption>
            </figure>
            
            <div class="comparison-table-wrapper">
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>特性</th>
                    <th>RGB</th>
                    <th>HSV/HSL</th>
                    <th>CMYK</th>
                    <th>Lab</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>类型</strong></td>
                    <td>加色</td>
                    <td>加色</td>
                    <td>减色</td>
                    <td>设备无关</td>
                  </tr>
                  <tr>
                    <td><strong>组件</strong></td>
                    <td>R, G, B</td>
                    <td>H, S, V/L</td>
                    <td>C, M, Y, K</td>
                    <td>L*, a*, b*</td>
                  </tr>
                  <tr>
                    <td><strong>主要用途</strong></td>
                    <td>显示器</td>
                    <td>颜色选择</td>
                    <td>印刷</td>
                    <td>色彩科学</td>
                  </tr>
                  <tr>
                    <td><strong>色域</strong></td>
                    <td>中等</td>
                    <td>与RGB相同</td>
                    <td>较小</td>
                    <td>最大</td>
                  </tr>
                  <tr>
                    <td><strong>设备依赖</strong></td>
                    <td>是</td>
                    <td>是</td>
                    <td>是</td>
                    <td>否</td>
                  </tr>
                  <tr>
                    <td><strong>感知均匀</strong></td>
                    <td>否</td>
                    <td>部分</td>
                    <td>否</td>
                    <td>是</td>
                  </tr>
                  <tr>
                    <td><strong>直观性</strong></td>
                    <td>低</td>
                    <td>高</td>
                    <td>中</td>
                    <td>低</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3>何时使用哪种模型？</h3>
            
            <div class="usage-guide">
              <div class="usage-item">
                <h4>RGB</h4>
                <ul class="usage-list">
                  <li class="usage-list__yes">处理数字显示</li>
                  <li class="usage-list__yes">网页设计和开发</li>
                  <li class="usage-list__yes">数码照片编辑</li>
                  <li class="usage-list__yes">视频制作</li>
                  <li class="usage-list__no">印刷项目</li>
                  <li class="usage-list__no">对颜色准确性要求高的工作</li>
                </ul>
              </div>
              
              <div class="usage-item">
                <h4>HSV/HSL</h4>
                <ul class="usage-list">
                  <li class="usage-list__yes">颜色选择和拾取</li>
                  <li class="usage-list__yes">创建配色方案</li>
                  <li class="usage-list__yes">单独调整颜色属性</li>
                  <li class="usage-list__yes">用户界面颜色控制</li>
                  <li class="usage-list__no">最终输出准备</li>
                  <li class="usage-list__no">设备特定的颜色匹配</li>
                </ul>
              </div>
              
              <div class="usage-item">
                <h4>CMYK</h4>
                <ul class="usage-list">
                  <li class="usage-list__yes">印刷设计和生产</li>
                  <li class="usage-list__yes>出版工作流程</li>
                  <li class="usage-list__yes">专业印刷</li>
                  <li class="usage-list__yes">色彩管理印刷</li>
                  <li class="usage-list__no">数字显示工作</li>
                  <li class="usage-list__no">网页设计</li>
                </ul>
              </div>
              
              <div class="usage-item">
                <h4>Lab</h4>
                <ul class="usage-list">
                  <li class="usage-list__yes">色彩管理系统</li>
                  <li class="usage-list__yes">色差测量</li>
                  <li class="usage-list__yes">跨设备颜色匹配</li>
                  <li class="usage-list__yes">专业颜色校正</li>
                  <li class="usage-list__no">直接颜色选择</li>
                  <li class="usage-list__no">简单项目</li>
                </ul>
              </div>
            </div>
          `
            },


            {
                heading: '总结与要点回顾',
                content: `
            <h3>需要记住的核心概念</h3>
            <ol>
              <li><strong>色彩模型是数学框架</strong>，用于以数值方式表示颜色</li>
              <li><strong>加色模型（RGB、HSV）</strong>适用于发光设备</li>
              <li><strong>减色模型（CMYK）</strong>适用于反射/印刷介质</li>
              <li><strong>Lab是设备无关的</strong>且具有感知均匀性</li>
              <li><strong>每种模型都有特定的优势</strong>和适用场景</li>
            </ol>
            
            <h3>获得的实践技能</h3>
            <ul>
              <li>了解何时使用每种色彩模型</li>
              <li>在不同色彩模型之间进行转换</li>
              <li>识别色彩模型的局限性</li>
              <li>在实际场景中应用色彩模型</li>
            </ul>
            
            <div class="next-steps">
              <h3>下一步</h3>
              <div class="action-buttons">
                <a href="#basic-color-spaces" class="btn btn-primary">继续学习色彩空间</a>
                <a href="#interaction-color-picker" class="btn btn-secondary">使用交互工具练习</a>
                <a href="#overview" class="btn btn-outline">返回概述</a>
              </div>
            </div>
          `
            }
        ]
    },
    'basic-color-spaces': {
        title: '色彩空间',
        subtitle: '理解色彩模型的具体实现',
        meta: {
            readingTime: '30-35分钟',
            difficulty: '初级到中级',
            type: '理论 + 实际应用'
        },
        sections: [
            {
                heading: '学习目标',
                content: `
            <p>完成本模块后，你将能够：</p>
            
            <h3>理解基础概念</h3>
            <ul>
              <li>定义什么是色彩空间以及它与色彩模型的区别</li>
              <li>解释色彩空间与色彩模型之间的关系</li>
              <li>理解色彩空间在数字工作流程中的重要性</li>
            </ul>
            
            <h3>识别常见色彩空间</h3>
            <ul>
              <li>认识并描述sRGB、Adobe RGB、ProPhoto RGB和DCI-P3</li>
              <li>了解每种色彩空间的特性和应用</li>
              <li>比较和对比不同的色彩空间</li>
            </ul>
            
            <h3>掌握技术规格</h3>
            <ul>
              <li>理解色彩空间中的色域、白点和伽马</li>
              <li>解读色彩空间图表和可视化</li>
              <li>认识色彩空间的局限性和能力</li>
            </ul>
            
            <h3>应用实践知识</h3>
            <ul>
              <li>为特定项目选择合适的色彩空间</li>
              <li>理解色彩空间转换及其影响</li>
              <li>在工作流程中实施色彩空间管理</li>
            </ul>
          `
            },
            {
                heading: '色彩空间简介',
                content: `
            <figure class="content-figure content-figure--float-right">
              <img src="assets/images/learning/color_space/color-space-vs-model.png" alt="展示色彩模型（RGB、CMYK、Lab）与色彩空间（sRGB、Adobe RGB、ProPhoto RGB、DCI-P3）之间关系的图表" loading="lazy" />
              <figcaption class="content-figure__caption">图1：色彩模型与色彩空间关系</figcaption>
            </figure>
            
            <h3>什么是色彩空间？</h3>
            <p>色彩空间是色彩模型内颜色的特定组织方式。虽然色彩模型定义了数学框架（如RGB或CMYK），但色彩空间精确指定了包含哪些颜色以及如何映射它们。</p>
            
            <div class="info-box info-box--highlight">
              <h4>关键区别</h4>
              <p><strong>色彩模型：</strong>抽象的数学系统（例如RGB、CMYK）</p>
              <p><strong>色彩空间：</strong>具有定义参数的具体实现（例如sRGB、Adobe RGB）</p>
            </div>
            
            <h3>色彩空间的组成部分</h3>
            <ul>
              <li><strong>色彩模型：</strong>底层的数学框架</li>
              <li><strong>色域：</strong>可以表示的颜色范围</li>
              <li><strong>白点：</strong>"纯白"的参考标准</li>
              <li><strong>伽马/传递函数：</strong>亮度值的编码方式</li>
              <li><strong>原色：</strong>原色的精确色度坐标</li>
            </ul>
            
            <h3>为什么色彩空间很重要</h3>
            <ul>
              <li><strong>一致性：</strong>确保颜色在不同设备上看起来相同</li>
              <li><strong>交流：</strong>提供颜色规范的通用语言</li>
              <li><strong>质量控制：</strong>定义可接受的颜色范围</li>
              <li><strong>工作流程管理：</strong>指导整个生产过程中的颜色处理</li>
            </ul>
            
            <h3>模型与空间的关系</h3>
            <p>可以将其类比为语言与方言：</p>
            <ul>
              <li><strong>色彩模型 = 语言</strong>（例如英语）</li>
              <li><strong>色彩空间 = 方言</strong>（例如美式英语、英式英语）</li>
            </ul>
            
            <div class="code-block">
              <strong>示例：RGB模型与不同空间</strong><br><br>
              RGB模型（框架）<br>
              ├── sRGB（标准网络空间）<br>
              ├── Adobe RGB（更宽的印刷色域）<br>
              ├── ProPhoto RGB（非常宽的编辑色域）<br>
              ├── DCI-P3（数字影院标准）<br>
              └── Display P3（苹果设备）
            </div>
            
            <h4>实际意义</h4>
            <ul>
              <li>相同的RGB值在不同空间中可能看起来不同</li>
              <li>色彩空间定义了数值的"含义"</li>
              <li>空间之间的转换通常是必要的</li>
            </ul>
          `
            },
            {
                heading: '理解色彩空间特性',
                content: `
            <figure class="content-figure content-figure--float-right">
              <img src="assets/images/learning/color_space/cie-1931-gamut-comparison.png" alt="CIE 1931色度图显示sRGB、Adobe RGB、DCI-P3和ProPhoto RGB色彩空间的色域三角形" loading="lazy" />
              <figcaption class="content-figure__caption">图2：带有色彩空间色域的CIE 1931色度图</figcaption>
            </figure>
            
            <h3>色域 - 颜色范围</h3>
            <p><strong>定义：</strong>色域是指色彩空间（或设备）可以表示或再现的完整颜色范围。</p>
            
            <h4>可视化表示</h4>
            <p>色域通常在CIE 1931色度图上可视化为三角形或不规则形状。</p>
            
            <h4>关键概念</h4>
            <ul>
              <li><strong>色域三角形：</strong>
                <ul>
                  <li>每个顶点代表一种原色</li>
                  <li>内部区域表示所有可再现的颜色</li>
                  <li>三角形越大 = 色域越宽</li>
                </ul>
              </li>
              <li><strong>色域比较：</strong>
                <div class="gamut-comparison">
                  <span class="gamut-item">sRGB</span>
                  <span class="gamut-arrow">&lt;</span>
                  <span class="gamut-item">Adobe RGB</span>
                  <span class="gamut-arrow">&lt;</span>
                  <span class="gamut-item">DCI-P3</span>
                  <span class="gamut-arrow">&lt;</span>
                  <span class="gamut-item">ProPhoto RGB</span>
                </div>
              </li>
            </ul>
            
            <h4>影响色域的因素</h4>
            <ul>
              <li><strong>原色：</strong>更饱和的原色 = 更宽的色域</li>
              <li><strong>技术：</strong>显示/打印技术的限制</li>
              <li><strong>标准：</strong>行业要求和规范</li>
            </ul>
            
            <h3>白点 - 定义"白色"</h3>
            <p>白点是定义色彩空间中"纯白"的色度坐标。</p>
            
            <div class="info-cards">
              <div class="info-card">
                <h4>D65 (6500K)</h4>
                <ul>
                  <li>标准日光光源</li>
                  <li>用于sRGB、大多数显示器</li>
                  <li>略带蓝白色的外观</li>
                </ul>
              </div>
              
              <div class="info-card">
                <h4>D50 (5000K)</h4>
                <ul>
                  <li>较暖的日光光源</li>
                  <li>用于印刷行业</li>
                  <li>颜色关键工作的首选</li>
                </ul>
              </div>
              
              <div class="info-card">
                <h4>D55 (5500K)</h4>
                <ul>
                  <li>中等日光</li>
                  <li>有时用于摄影</li>
                </ul>
              </div>
            </div>
            
            <h3>伽马和传递函数</h3>
            <p>伽马（或传递函数）描述了数值与感知亮度之间的关系。</p>
            
            <h4>伽马的目的</h4>
            <ul>
              <li><strong>感知均匀性：</strong>匹配人眼的非线性响应</li>
              <li><strong>数据效率：</strong>为人眼更敏感的暗色调分配更多位</li>
              <li><strong>历史兼容性：</strong>匹配CRT显示器特性</li>
            </ul>
            
            <h4>常见伽马值</h4>
            <ul>
              <li><strong>sRGB伽马：</strong>约γ=2.2 - 网络和显示器的标准</li>
              <li><strong>线性伽马：</strong>γ=1.0 - 用于3D渲染和科学应用</li>
              <li><strong>自定义伽马：</strong>因设备和应用而异</li>
            </ul>
          `
            },
            {
                heading: '色彩空间比较与选择',
                content: `
            <figure class="content-figure content-figure--wide">
              <img src="assets/images/learning/color_space/rgb-color-spaces-comparison.png" alt="sRGB、Adobe RGB、ProPhoto RGB和DCI-P3色彩空间的比较概览及关键规格" loading="lazy" />
              <figcaption class="content-figure__caption">图3：RGB色彩空间比较概览</figcaption>
            </figure>
            
            <h3>综合比较表</h3>
            <div class="comparison-table-wrapper">
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>特性</th>
                    <th>sRGB</th>
                    <th>Adobe RGB</th>
                    <th>ProPhoto RGB</th>
                    <th>DCI-P3</th>
                    <th>Display P3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>色域大小</strong></td>
                    <td>小</td>
                    <td>中</td>
                    <td>非常大</td>
                    <td>中大</td>
                    <td>中大</td>
                  </tr>
                  <tr>
                    <td><strong>相对于sRGB的色域</strong></td>
                    <td>100%</td>
                    <td>~135%</td>
                    <td>~250%</td>
                    <td>~125%</td>
                    <td>~125%</td>
                  </tr>
                  <tr>
                    <td><strong>最适合</strong></td>
                    <td>网络、屏幕</td>
                    <td>印刷、专业摄影</td>
                    <td>编辑母版</td>
                    <td>影院、HDR</td>
                    <td>苹果设备</td>
                  </tr>
                  <tr>
                    <td><strong>白点</strong></td>
                    <td>D65</td>
                    <td>D65</td>
                    <td>D50</td>
                    <td>DCI自定义</td>
                    <td>D65</td>
                  </tr>
                  <tr>
                    <td><strong>伽马</strong></td>
                    <td>~2.2</td>
                    <td>2.2</td>
                    <td>1.8</td>
                    <td>2.6</td>
                    <td>2.2</td>
                  </tr>
                  <tr>
                    <td><strong>位深度</strong></td>
                    <td>8-bit足够</td>
                    <td>推荐16-bit</td>
                    <td>需要16-bit+</td>
                    <td>推荐10-bit+</td>
                    <td>8-bit+足够</td>
                  </tr>
                  <tr>
                    <td><strong>兼容性</strong></td>
                    <td>通用</td>
                    <td>良好</td>
                    <td>有限</td>
                    <td>增长中</td>
                    <td>苹果生态系统</td>
                  </tr>
                  <tr>
                    <td><strong>文件大小</strong></td>
                    <td>最小</td>
                    <td>中等</td>
                    <td>最大</td>
                    <td>中等</td>
                    <td>中等</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3>色域可视化</h3>
            <div class="gamut-visualization">
              <div class="gamut-layer gamut-layer--largest">
                <span class="gamut-label">ProPhoto RGB</span>
                <div class="gamut-layer gamut-layer--large">
                  <span class="gamut-label">Adobe RGB</span>
                  <div class="gamut-layer gamut-layer--medium">
                    <span class="gamut-label">DCI-P3</span>
                    <div class="gamut-layer gamut-layer--small">
                      <span class="gamut-label">sRGB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h4>色域覆盖百分比</h4>
            <div class="gamut-percentages">
              <div class="percentage-bar">
                <span class="percentage-label">sRGB</span>
                <div class="percentage-track">
                  <div class="percentage-fill" style="width: 35%">35%</div>
                </div>
              </div>
              <div class="percentage-bar">
                <span class="percentage-label">Adobe RGB</span>
                <div class="percentage-track">
                  <div class="percentage-fill" style="width: 50%">50%</div>
                </div>
              </div>
              <div class="percentage-bar">
                <span class="percentage-label">DCI-P3</span>
                <div class="percentage-track">
                  <div class="percentage-fill" style="width: 45%">45%</div>
                </div>
              </div>
              <div class="percentage-bar">
                <span class="percentage-label">ProPhoto RGB</span>
                <div class="percentage-track">
                  <div class="percentage-fill" style="width: 90%">90%</div>
                </div>
              </div>
            </div>
            
            <h3>如何选择合适的色彩空间</h3>
            
            <div class="decision-framework">
              <div class="framework-step">
                <h4>步骤1：确定最终输出</h4>
                <ul>
                  <li><strong>仅网络/屏幕</strong> → sRGB</li>
                  <li><strong>印刷制作</strong> → Adobe RGB</li>
                  <li><strong>影院/HDR</strong> → DCI-P3</li>
                  <li><strong>苹果设备</strong> → Display P3</li>
                  <li><strong>最高质量</strong> → ProPhoto RGB（用于编辑）</li>
                </ul>
              </div>
              
              <div class="framework-step">
                <h4>步骤2：考虑工作流程</h4>
                <ul>
                  <li><strong>简单工作流程</strong> → 全程使用sRGB</li>
                  <li><strong>专业摄影</strong> → ProPhoto（编辑）→ Adobe RGB（母版）→ sRGB（网络）</li>
                  <li><strong>印刷制作</strong> → 全程使用Adobe RGB</li>
                  <li><strong>视频制作</strong> → DCI-P3或Rec.709/Rec.2020</li>
                </ul>
              </div>
              
              <div class="framework-step">
                <h4>步骤3：评估设备</h4>
                <ul>
                  <li><strong>标准显示器</strong> → sRGB或Adobe RGB</li>
                  <li><strong>广色域显示器</strong> → Adobe RGB、DCI-P3或ProPhoto</li>
                  <li><strong>专业打印机</strong> → Adobe RGB</li>
                  <li><strong>影院投影仪</strong> → DCI-P3</li>
                </ul>
              </div>
              
              <div class="framework-step">
                <h4>步骤4：评估受众</h4>
                <ul>
                  <li><strong>普通大众</strong> → sRGB（最大兼容性）</li>
                  <li><strong>专业客户</strong> → Adobe RGB或指定空间</li>
                  <li><strong>影院发行</strong> → DCI-P3</li>
                  <li><strong>苹果用户</strong> → Display P3</li>
                </ul>
              </div>
            </div>
            
            <h3>常见工作流程场景</h3>
            
            <div class="workflow-scenarios">
              <div class="scenario-card">
                <h4>场景1：以网络为主的摄影师</h4>
                <div class="workflow-steps">
                  <span class="workflow-step">相机RAW</span>
                  <span class="workflow-arrow">→</span>
                  <span class="workflow-step">ProPhoto RGB（16-bit编辑）</span>
                  <span class="workflow-arrow">→</span>
                  <span class="workflow-step">Adobe RGB（保存母版）</span>
                  <span class="workflow-arrow">→</span>
                  <span class="workflow-step">sRGB（导出用于网络）</span>
                </div>
              </div>
              
              <div class="scenario-card">
                <h4>场景2：专业印刷设计师</h4>
                <div class="workflow-steps">
                  <span class="workflow-step">在Adobe RGB中设计</span>
                  <span class="workflow-arrow">→</span>
                  <span class="workflow-step">在CMYK中软打样</span>
                  <span class="workflow-arrow">→</span>
                  <span class="workflow-step">在Adobe RGB中导出</span>
                  <span class="workflow-arrow">→</span>
                  <span class="workflow-step">打印机转换为CMYK</span>
                </div>
              </div>
              
              <div class="scenario-card">
                <h4>场景3：视频内容创作者</h4>
                <div class="workflow-steps">
                  <span class="workflow-step">以Log/RAW拍摄</span>
                  <span class="workflow-arrow">→</span>
                  <span class="workflow-step">在Rec.709或Rec.2020中编辑</span>
                  <span class="workflow-arrow">→</span>
                  <span class="workflow-step">在DCI-P3中调色</span>
                  <span class="workflow-arrow">→</span>
                  <span class="workflow-step">以所需格式交付</span>
                </div>
              </div>
              
              <div class="scenario-card">
                <h4>场景4：数字艺术家</h4>
                <div class="workflow-steps">
                  <span class="workflow-step">在ProPhoto RGB中创作（16-bit）</span>
                  <span class="workflow-arrow">→</span>
                  <span class="workflow-step">在ProPhoto RGB中保存母版</span>
                  <span class="workflow-arrow">→</span>
                  <span class="workflow-step">在sRGB中导出用于网络</span>
                  <span class="workflow-arrow">→</span>
                  <span class="workflow-step">在Adobe RGB中导出用于印刷</span>
                </div>
              </div>
            </div>
          `
            },
            {
                heading: '色彩空间管理与转换',
                content: `
            <figure class="content-figure content-figure--float-right">
              <img src="assets/images/learning/color_space/color-space-conversion-workflow.png" alt="从相机RAW到最终输出的色彩空间转换工作流程" loading="lazy" />
              <figcaption class="content-figure__caption">图4：色彩空间转换工作流程</figcaption>
            </figure>
            
            <h3>理解色彩空间转换</h3>
            <p>将颜色值从一个色彩空间转换到另一个空间的过程，同时尽可能保持视觉外观。</p>
            
            <h4>为什么需要转换</h4>
            <ul>
              <li>不同设备使用不同的色彩空间</li>
              <li>输出要求因介质而异</li>
              <li>在整个工作流程中保持一致性</li>
              <li>为特定受众准备内容</li>
            </ul>
            
            <h4>转换挑战</h4>
            <ul>
              <li><strong>色域不匹配：</strong>源空间可能包含目标空间之外的颜色</li>
              <li><strong>精度损失：</strong>计算过程中的舍入误差</li>
              <li><strong>外观偏移：</strong>不同的白点和伽马</li>
              <li><strong>元数据处理：</strong>保留或更新色彩配置文件</li>
            </ul>
            
            <figure class="content-figure content-figure--wide">
              <img src="assets/images/learning/color_space/rendering-intents-comparison.png" alt="四种渲染意图的比较：感知、相对色度、绝对色度和饱和度" loading="lazy" />
              <figcaption class="content-figure__caption">图5：渲染意图比较</figcaption>
            </figure>
            
            <h3>渲染意图</h3>
            <p>渲染意图是在转换过程中处理颜色的策略，特别是在处理色域不匹配时。</p>
            
            <div class="rendering-intents">
              <div class="intent-card">
                <h4>1. 感知</h4>
                <ul>
                  <li>保持整体颜色关系</li>
                  <li>压缩整个色域以适应目标</li>
                  <li>适合摄影图像</li>
                  <li>保持视觉和谐</li>
                </ul>
              </div>
              
              <div class="intent-card">
                <h4>2. 相对色度</h4>
                <ul>
                  <li>精确映射色域内的颜色</li>
                  <li>将色域外的颜色裁剪到最近的可再现颜色</li>
                  <li>在可能的情况下保持颜色准确性</li>
                  <li>适合图形和标志</li>
                </ul>
              </div>
              
              <div class="intent-card">
                <h4>3. 绝对色度</h4>
                <ul>
                  <li>与相对类似但保持白点</li>
                  <li>如果白点不同可能导致色偏</li>
                  <li>用于打样和模拟</li>
                  <li>一般使用中较少见</li>
                </ul>
              </div>
              
              <div class="intent-card">
                <h4>4. 饱和度</h4>
                <ul>
                  <li>优先鲜艳、饱和的颜色</li>
                  <li>忽略颜色准确性</li>
                  <li>适合图表和图解</li>
                  <li>不适合摄影</li>
                </ul>
              </div>
            </div>
            
            <h3>色彩管理最佳实践</h3>
            
            <div class="best-practices">
              <div class="practice-item">
                <h4>嵌入配置文件</h4>
                <p>始终在文件中嵌入色彩空间信息，以防止歧义并确保跨设备一致性。</p>
              </div>
              
              <div class="practice-item">
                <h4>软打样</h4>
                <p>预览颜色在目标空间中的外观，并在转换前识别潜在问题。</p>
              </div>
              
              <div class="practice-item">
                <h4>在更宽色域中工作</h4>
                <p>在比最终输出更宽的色域中编辑，以在操作过程中保留颜色信息。</p>
              </div>
              
              <div class="practice-item">
                <h4>保持一致性</h4>
                <p>在可能的情况下，在整个工作流程中使用相同的色彩空间，并记录色彩空间决策。</p>
              </div>
              
              <div class="practice-item">
                <h4>显示器校准</h4>
                <p>使用硬件校色仪定期校准显示器以确保准确性。</p>
              </div>
            </div>
          `
            },

            {
                heading: '总结与要点回顾',
                content: `
            <h3>需要记住的核心概念</h3>
            <ol>
              <li><strong>色彩空间 vs. 色彩模型：</strong>空间是模型的具体实现</li>
              <li><strong>色域定义范围：</strong>更大的色域 = 可以表示更多颜色</li>
              <li><strong>sRGB是通用的：</strong>网络和一般使用的默认选择</li>
              <li><strong>Adobe RGB用于印刷：</strong>更好地匹配印刷能力</li>
              <li><strong>ProPhoto用于编辑：</strong>后期制作中的最大灵活性</li>
              <li><strong>DCI-P3用于影院：</strong>数字影院和HDR的标准</li>
              <li><strong>转换是不可避免的：</strong>为色彩空间转换做好计划</li>
            </ol>
            
            <h3>获得的实践技能</h3>
            <ul>
              <li>为项目识别合适的色彩空间</li>
              <li>理解色域局限性和能力</li>
              <li>有效管理色彩空间转换</li>
              <li>实施色彩管理工作流程</li>
            </ul>
            
            <div class="next-steps">
              <h3>下一步</h3>
              <div class="action-buttons">
                <a href="#encoding-bit-depth" class="btn btn-primary">继续到位深度</a>
                <a href="#interaction-visual-example" class="btn btn-secondary">查看视觉示例</a>
                <a href="#overview" class="btn btn-outline">返回概述</a>
              </div>
            </div>
          `
            }
        ]
    },
    'basic-color-attributes': {
        title: '色彩属性与感知',
        subtitle: '理解色相、饱和度、亮度、对比度和色温',
        meta: {
            readingTime: '25-30分钟',
            difficulty: '初级',
            type: '理论 + 交互'
        },
        sections: [
            {
                heading: '学习目标',
                content: `
                <p>完成本模块后，你将能够：</p>
                
                <h3>理解核心色彩属性</h3>
                <ul>
                  <li>解释色彩的三个维度：色相、饱和度和亮度</li>
                  <li>区分亮度和明度</li>
                  <li>理解对比度如何影响可读性和视觉层次</li>
                </ul>
                
                <h3>掌握色温概念</h3>
                <ul>
                  <li>识别暖色和冷色及其心理效应</li>
                  <li>理解开尔文标度及其应用</li>
                  <li>在设计决策中应用色温知识</li>
                </ul>
                
                <h3>应用实践技能</h3>
                <ul>
                  <li>使用我们的交互式颜色选择器探索HSL值</li>
                  <li>检查颜色对比度以确保无障碍合规</li>
                  <li>在项目中做出关于色温的明智选择</li>
                </ul>
              `
            },
            {
                heading: '色相、饱和度和亮度（HSL）',
                content: `
                <h3>色彩的三个维度</h3>
                <p>每种颜色都可以用三个基本属性来描述，它们共同创造出可见光谱的全部颜色。理解这些维度可以让你精确控制颜色的选择和操作。</p>
                
                <img src="assets/images/learning/color_attribute/hsl-color-model-3d.png" alt="HSL色彩空间的3D圆柱体表示，展示色相作为圆柱体周围的角度，饱和度作为距中心轴的距离，亮度作为垂直高度" style="width: 100%; max-width: 800px; margin: var(--space-lg) 0; border-radius: var(--radius-md);" />
                
                <h3>色相 - 颜色身份</h3>
                <p><strong>色相</strong>是我们通常认为的"颜色"——红、蓝、绿、黄等。它代表色轮上的位置，以度数衡量（0°到360°）。</p>
                
                <div class="info-box info-box--highlight">
                  <h4>关键色相位置</h4>
                  <ul>
                    <li><strong>0° / 360°：</strong>红</li>
                    <li><strong>60°：</strong>黄</li>
                    <li><strong>120°：</strong>绿</li>
                    <li><strong>180°：</strong>青</li>
                    <li><strong>240°：</strong>蓝</li>
                    <li><strong>300°：</strong>品红</li>
                  </ul>
                </div>
                
                <h3>饱和度 - 颜色强度</h3>
                <p><strong>饱和度</strong>描述颜色的纯度或强度，范围从0%（完全灰色）到100%（完全鲜艳）。它决定颜色与相同明度的中性灰色的差异程度。</p>
                
                <img src="assets/images/learning/color_attribute/saturation-comparison.png" alt="水平渐变条显示相同色相的饱和度从0%（灰色）到100%（鲜艳）变化，标注低饱和度到高饱和度" style="width: 100%; max-width: 800px; margin: var(--space-lg) 0; border-radius: var(--radius-md);" />
                
                <h4>实际应用</h4>
                <ul>
                  <li><strong>高饱和度（80-100%）：</strong>创造活力，吸引注意力，适合行动号召和品牌标识</li>
                  <li><strong>中等饱和度（40-70%）：</strong>平衡且专业，适合大多数UI元素</li>
                  <li><strong>低饱和度（0-30%）：</strong>微妙而精致，完美用于背景和次要元素</li>
                </ul>
                
                <div class="info-box">
                  <h4>亲自尝试</h4>
                  <p>使用我们的<a href="#interaction-color-picker">交互式颜色选择器</a>调整饱和度滑块，观察颜色如何从柔和变为鲜艳。注意高饱和度的颜色在大面积使用时可能会令人感到压抑，而低饱和度的颜色则营造出平静、专业的氛围。</p>
                </div>
                
                <h3>亮度 - 明亮程度</h3>
                <p><strong>亮度</strong>（也称为明度）表示颜色的明暗程度，范围从0%（纯黑）经过50%（纯色）到100%（纯白）。</p>
                
                <img src="assets/images/learning/color_attribute/tints-shades-tones.png" alt="网格显示一种基色，顶行是 tint（添加白色），中行是 shade（添加黑色），底行是 tone（添加灰色）" style="width: 100%; max-width: 600px; margin: var(--space-lg) 0; border-radius: var(--radius-md);" />
                
                <h4>Tint、Shade 和 Tone</h4>
                <ul>
                  <li><strong>Tint（浅色）：</strong>通过在基色中添加白色创建（将亮度提高到50%以上）</li>
                  <li><strong>Shade（深色）：</strong>通过在基色中添加黑色创建（将亮度降低到50%以下）</li>
                  <li><strong>Tone（色调）：</strong>通过在基色中添加灰色创建（在保持亮度的同时降低饱和度）</li>
                </ul>
                
                <div class="pros-cons">
                  <div class="pros-cons__item pros-cons__item--pros">
                    <h4>何时使用高亮度</h4>
                    <ul>
                      <li>背景和表面</li>
                      <li>创造宽敞、通透的设计</li>
                      <li>白天或积极主题</li>
                      <li>提高深色文本的可读性</li>
                    </ul>
                  </div>
                  <div class="pros-cons__item pros-cons__item--cons">
                    <h4>何时使用低亮度</h4>
                    <ul>
                      <li>文本和重要元素</li>
                      <li>创造深度和戏剧性</li>
                      <li>夜间模式或奢华主题</li>
                      <li>在黑暗环境中减少眼睛疲劳</li>
                    </ul>
                  </div>
                </div>
              `
            },
            {
                heading: '亮度和对比度',
                content: `
                <h3>理解亮度 vs. 明度</h3>
                <p>虽然经常互换使用，但<strong>亮度</strong>和<strong>明度</strong>在色彩理论中有不同的含义：</p>
                
                <ul>
                  <li><strong>明度（HSL）：</strong>从黑（0%）经过纯色（50%）到白（100%）的感知度量</li>
                  <li><strong>亮度（HSB/HSV）：</strong>表示发射或反射的光量，从暗（0%）到最大强度（100%）</li>
                </ul>
                
                <p>实际上，亮度更 closely 与光的物理特性相关，而明度基于人类感知。</p>
                
                <h3>对比度 - 创造视觉区分</h3>
                <p><strong>对比度</strong>是两种颜色之间的差异，对于可读性、视觉层次和无障碍性至关重要。有几种类型的对比度：</p>
                
                <img src="assets/images/learning/color_attribute/contrast-types.png" alt="三对彩色方块演示：明度对比（黑 vs 白）、色相对比（红 vs 绿）、饱和度对比（鲜艳红 vs 柔和红）" style="width: 100%; max-width: 600px; margin: var(--space-lg) 0; border-radius: var(--radius-md);" />
                
                <h4>对比度类型</h4>
                <ol>
                  <li><strong>明度对比（亮度对比）</strong>
                    <ul>
                      <li>颜色之间明暗的差异</li>
                      <li>对文本可读性最重要</li>
                      <li>示例：白色背景上的黑色文本</li>
                    </ul>
                  </li>
                  <li><strong>色相对比</strong>
                    <ul>
                      <li>颜色身份的差异（色轮上的位置）</li>
                      <li>互补色（色轮上相对）创造最大色相对比</li>
                      <li>示例：红和绿、蓝和橙</li>
                    </ul>
                  </li>
                  <li><strong>饱和度对比</strong>
                    <ul>
                      <li>颜色强度的差异</li>
                      <li>鲜艳的颜色在柔和的背景下脱颖而出</li>
                      <li>示例：灰色背景上的亮红色按钮</li>
                    </ul>
                  </li>
                </ol>
                
                <h3>对比度与无障碍性</h3>
                <p>适当的对比度对于使内容对视障用户可访问至关重要。Web内容无障碍指南（WCAG）定义了特定的对比度比率要求：</p>
                
                <img src="assets/images/learning/color_attribute/wcag-contrast-standards.png" alt="信息图显示WCAG对比度比率要求：AA级别普通文本4.5:1，大文本3:1；AAA级别普通文本7:1，大文本4.5:1，带有勾选图标" style="width: 100%; max-width: 800px; margin: var(--space-lg) 0; border-radius: var(--radius-md);" />
                
                <div class="tech-specs">
                  <div class="spec-row">
                    <span class="spec-label">AA级别（普通文本）：</span>
                    <span class="spec-value">最低4.5:1对比度比率</span>
                  </div>
                  <div class="spec-row">
                    <span class="spec-label">AA级别（大文本）：</span>
                    <span class="spec-value">最低3:1对比度比率</span>
                  </div>
                  <div class="spec-row">
                    <span class="spec-label">AAA级别（普通文本）：</span>
                    <span class="spec-value">最低7:1对比度比率</span>
                  </div>
                  <div class="spec-row">
                    <span class="spec-label">AAA级别（大文本）：</span>
                    <span class="spec-value">最低4.5:1对比度比率</span>
                  </div>
                </div>
                
                <img src="assets/images/learning/color_attribute/contrast-readability-example.png" alt="两个文本样本并排：左侧显示高对比度白色背景上的黑色文本（标记为良好对比度），右侧显示低对比度白色背景上的浅灰色文本（标记为较差对比度）" style="width: 100%; max-width: 700px; margin: var(--space-lg) 0; border-radius: var(--radius-md);" />
                
                <div class="info-box info-box--highlight">
                  <h4>对比度最佳实践</h4>
                  <ul>
                    <li>发布前始终测试文本对比度比率</li>
                    <li>不要仅依赖颜色来传达信息</li>
                    <li>考虑色盲用户的需求</li>
                    <li>对重要内容和行动号召使用更高对比度</li>
                    <li>在整个设计中保持一致的对比度水平</li>
                  </ul>
                </div>
                
                <div class="info-box">
                  <h4>练习：检查你的颜色</h4>
                  <p>使用我们的<a href="#interaction-interactive-tools">无障碍检查器工具</a>测试颜色组合，确保它们符合WCAG标准。输入你的前景色和背景色，即时获取对比度比率和合规级别的反馈。</p>
                </div>
              `
            },
            {
                heading: '色温',
                content: `
                <h3>暖色和冷色</h3>
                <p><strong>色温</strong>指颜色的感知温暖或凉爽程度。这个概念源于加热物体发出的光的颜色，对情绪、感知和设计效果有深远影响。</p>
                
                <img src="assets/images/learning/color_attribute/color-temperature-kelvin-scale.png" alt="从2000K到10000K的水平开尔文标度，显示色温 progression：烛光（2000K，橙色）、日出（3000K，暖黄色）、日光（5500K，中性白）、阴天（7000K，冷蓝色）、晴朗天空（10000K，深蓝色）" style="width: 100%; max-width: 900px; margin: var(--space-lg) 0; border-radius: var(--radius-md);" />
                
                <h3>开尔文标度</h3>
                <p>色温以<strong>开尔文（K）</strong>为单位测量，这是一个科学单位，描述光源的颜色特征：</p>
                
                <div class="tech-specs">
                  <div class="spec-row">
                    <span class="spec-label">2000K - 3000K：</span>
                    <span class="spec-value">暖色（橙/黄）- 烛光、白炽灯泡</span>
                  </div>
                  <div class="spec-row">
                    <span class="spec-label">3500K - 4500K：</span>
                    <span class="spec-value">中性暖色 - 早晨/傍晚阳光</span>
                  </div>
                  <div class="spec-row">
                    <span class="spec-label">5000K - 6500K：</span>
                    <span class="spec-value">中性 - 日光、标准白点（D65）</span>
                  </div>
                  <div class="spec-row">
                    <span class="spec-label">7000K - 10000K：</span>
                    <span class="spec-value">冷色（蓝）- 阴天、阴影</span>
                  </div>
                </div>
                
                <h3>心理效应</h3>
                <img src="assets/images/learning/color_attribute/warm-cool-emotions.png" alt="分割图像：左侧显示暖色（红、橙、黄）配以能量、温暖、激情等词语；右侧显示冷色（蓝、绿、紫）配以平静、信任、专业等词语" style="width: 100%; max-width: 800px; margin: var(--space-lg) 0; border-radius: var(--radius-md);" />
                
                <div class="pros-cons">
                  <div class="pros-cons__item pros-cons__item--pros">
                    <h4>暖色（红、橙、黄）</h4>
                    <ul>
                      <li>唤起能量、兴奋和温暖的感觉</li>
                      <li>创造紧迫感和行动感</li>
                      <li>看起来向观察者靠近</li>
                      <li>刺激食欲和社交互动</li>
                      <li>常见于食品、娱乐和清仓销售</li>
                    </ul>
                  </div>
                  <div class="pros-cons__item pros-cons__item--cons">
                    <h4>冷色（蓝、绿、紫）</h4>
                    <ul>
                      <li>传达冷静、信任和专业</li>
                      <li>创造空间感和距离感</li>
                      <li>看起来远离观察者</li>
                      <li>促进专注和集中</li>
                      <li>流行于科技、医疗和金融领域</li>
                    </ul>
                  </div>
                </div>
                
                <h3>设计中的应用</h3>
                
                <h4>品牌标识</h4>
                <img src="assets/images/learning/color_attribute/brand-color-temperature.png" alt="标志示例：左侧快餐品牌使用暖色（麦当劳、汉堡王），右侧科技公司使用冷色（IBM、英特尔、Facebook）" style="width: 100%; max-width: 800px; margin: var(--space-lg) 0; border-radius: var(--radius-md);" />
                
                <ul>
                  <li><strong>快餐和零售：</strong>暖色刺激食欲并创造紧迫感（麦当劳、肯德基、塔吉特）</li>
                  <li><strong>科技和金融：</strong>冷色传达信任和可靠性（IBM、PayPal、英特尔）</li>
                  <li><strong>医疗保健：</strong>冷蓝色和绿色促进治愈和平静（医院品牌、健康应用）</li>
                  <li><strong>奢侈品牌：</strong>通常使用中性或冷色调以示精致（蒂芙尼蓝、奔驰银）</li>
                </ul>
                
                <h4>摄影和白平衡</h4>
                <img src="assets/images/learning/color_attribute/white-balance-comparison.png" alt="同一室内场景显示三次：左侧暖白平衡（橙色色调，3000K），中间中性白平衡（自然，5500K），右侧冷白平衡（蓝色色调，7000K）" style="width: 100%; max-width: 900px; margin: var(--space-lg) 0; border-radius: var(--radius-md);" />
                
                <p><strong>白平衡</strong>是调整摄影中颜色的过程，以确保白色物体呈现真正的白色，补偿光源的色温：</p>
                
                <ul>
                  <li><strong>自动白平衡（AWB）：</strong>相机尝试自动检测并校正色温</li>
                  <li><strong>预设模式：</strong>日光、阴天、钨丝灯、荧光灯、闪光灯</li>
                  <li><strong>自定义白平衡：</strong>使用灰卡手动校准以获得完美精度</li>
                  <li><strong>创意使用：</strong>有意 warming 或 cooling 图像以营造 mood 和 atmosphere</li>
                </ul>
                
                <div class="info-box info-box--additive">
                  <h4>室内设计提示</h4>
                  <p>在生活空间中使用暖光（2700K-3000K）以获得舒适和放松。在厨房、浴室和办公室中选择较冷的光线（4000K-5000K）以提高警觉性和任务表现。许多现代LED灯泡提供可调色温，以适应不同的活动和一天中的不同时间。</p>
                </div>
                
                <h3>文化考量</h3>
                <p>色温联想可能因文化而异：</p>
                
                <ul>
                  <li><strong>西方文化：</strong>白色 = 纯洁、清洁；黑色 = 哀悼、正式</li>
                  <li><strong>东方文化：</strong>白色 = 在某些情况下为哀悼；红色 = 幸运、繁荣</li>
                  <li><strong>中东：</strong>绿色 = 天堂、伊斯兰教；蓝色 = 保护</li>
                  <li><strong>全球设计：</strong>在为国际项目选择色温时考虑你的受众</li>
                </ul>
                
                <div class="info-box">
                  <h4>实验色温</h4>
                  <p>访问我们的<a href="#interaction-color-picker">颜色选择器</a>，尝试创建具有不同温度配置文件的配色方案。注意从暖橙色到冷蓝色的转变如何完全改变调色板的情绪。练习识别你每天使用的网站和应用程序中颜色的温度。</p>
                </div>
              `
            },
            {
                heading: '总结与要点回顾',
                content: `
                <h3>需要记住的核心概念</h3>
                <ol>
                  <li><strong>HSL模型：</strong>色相（颜色身份）、饱和度（强度）、亮度（明亮程度）是色彩的三个基本属性</li>
                  <li><strong>饱和度控制：</strong>高饱和度创造活力；低饱和度创造精致感</li>
                  <li><strong>对比度至关重要：</strong>适当的对比度确保可读性和无障碍性（普通文本最低4.5:1）</li>
                  <li><strong>色温很重要：</strong>暖色 energize；冷色 calm</li>
                  <li><strong>上下文是关键：</strong>根据目的、受众和文化考量选择色彩属性</li>
                </ol>
                
                <h3>获得的实践技能</h3>
                <ul>
                  <li>操作HSL值以实现精确的颜色控制</li>
                  <li>评估和改善颜色对比度以实现无障碍性</li>
                  <li>在设计决策中应用色温原则</li>
                  <li>使用交互工具测试和完善颜色选择</li>
                </ul>
                
                <div class="next-steps">
                  <h3>下一步</h3>
                  <div class="action-buttons">
                    <a href="#interaction-color-picker" class="btn btn-primary">使用颜色选择器练习</a>
                    <a href="#interaction-interactive-tools" class="btn btn-secondary">检查无障碍性</a>
                    <a href="#encoding-bit-depth" class="btn btn-outline">继续到位深度</a>
                  </div>
                </div>
              `
            }
        ]
    },
    'encoding-bit-depth': {
        title: '位深度与色彩精度',
        subtitle: '理解数字色彩表示和图像质量',
        meta: {
            readingTime: '35-40分钟',
            difficulty: '初级到中级',
            type: '理论 + 技术应用'
        },
        sections: [
            {
                heading: '学习目标',
                content: `
                    <p>完成本模块后，你将能够：</p>
                    
                    <h3>理解基础概念</h3>
                    <ul>
                        <li>定义位深度及其在数字色彩表示中的作用</li>
                        <li>解释位深度与色彩精度之间的关系</li>
                        <li>理解位深度如何影响图像质量和文件大小</li>
                    </ul>
                    
                    <h3>掌握技术规格</h3>
                    <ul>
                        <li>计算不同位深度的可能颜色数量</li>
                        <li>理解每通道位深度和总位深度的区别</li>
                        <li>认识位深度对色彩渐变和色带的影响</li>
                    </ul>
                    
                    <h3>应用实践知识</h3>
                    <ul>
                        <li>为不同应用选择合适的位深度</li>
                        <li>了解何时需要更高的位深度</li>
                        <li>在工作流程中实施位深度管理</li>
                    </ul>
                `
            },
            {
                heading: '位深度简介',
                content: `
                    <figure class="content-figure content-figure--float-right">
                      <img src="assets/images/learning/bitdepth/bit-depth-concept.png" alt="位深度概念展示1位、4位和8位灰度比较及二进制值" loading="lazy" />
                      <figcaption class="content-figure__caption">图1：位深度概念 - 可能值的数量呈指数增长</figcaption>
                    </figure>
                    
                    <h3>什么是位深度？</h3>
                    <p><strong>位深度</strong>（也称为色彩深度或像素深度）指用于表示数字图像中每个像素色彩信息的位数。它决定了可以存储和显示的颜色的精度和范围。</p>
                    
                    <h3>基本概念</h3>
                    <ul>
                        <li>每个位可以是0或1</li>
                        <li>更多位 = 更多可能值 = 更高色彩精度</li>
                        <li>位深度直接影响图像质量和文件大小</li>
                    </ul>
                    
                    <div class="code-block">
                        <strong>数学基础：</strong><br>
                        可能值的数量 = 2^n<br>
                        其中 n = 位数<br><br>
                        
                        例如：<br>
                        • 1位：2^1 = 2个值（黑和白）<br>
                        • 8位：2^8 = 每通道256个值<br>
                        • 16位：2^16 = 每通道65,536个值
                    </div>
                    
                    <h3>为什么位深度很重要</h3>
                    
                    <div class="info-box info-box--highlight">
                        <h4>图像质量</h4>
                        <ul>
                            <li>更高位深度 = 更平滑的色彩过渡</li>
                            <li>减少渐变中的可见色带</li>
                            <li>提供更多编辑灵活性</li>
                        </ul>
                    </div>
                    
                    <div class="info-box info-box--highlight">
                        <h4>色彩准确性</h4>
                        <ul>
                            <li>更精确的色彩表示</li>
                            <li>更好地保留微妙的色彩差异</li>
                            <li>对于专业色彩工作至关重要</li>
                        </ul>
                    </div>
                    
                    <div class="info-box info-box--highlight">
                        <h4>工作流程灵活性</h4>
                        <ul>
                            <li>为色彩校正提供更多余地</li>
                            <li>减少编辑过程中的色调分离风险</li>
                            <li>更适合HDR和高对比度场景</li>
                        </ul>
                    </div>
                `
            },
            {
                heading: '常见位深度详解',
                content: `
                    <h3>8位（标准色彩）</h3>
                    
                    <div class="tech-specs">
                        <div class="spec-row">
                            <span class="spec-label">每通道值：</span>
                            <span class="spec-value">2^8 = 256个值</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">总颜色数（RGB）：</span>
                            <span class="spec-value">256³ = 约1670万色</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">每像素位数：</span>
                            <span class="spec-value">24位（8 × 3通道）</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">常见格式：</span>
                            <span class="spec-value">JPEG、PNG-8、GIF</span>
                        </div>
                    </div>
                    
                    <h4>应用场景</h4>
                    <div class="usage-guide">
                        <div class="usage-item usage-item--full">
                            <ul class="usage-list">
                                <li class="usage-list__yes">网络图片和在线内容</li>
                                <li class="usage-list__yes">标准数码摄影</li>
                                <li class="usage-list__yes">社交媒体分享</li>
                                <li class="usage-list__yes">通用图形</li>
                                <li class="usage-list__no">专业色彩校正</li>
                                <li class="usage-list__no">HDR内容</li>
                                <li class="usage-list__no"> extensive 后期处理</li>
                            </ul>
                        </div>
                    </div>
                    
                    <figure class="content-figure content-figure--float-right">
                      <img src="assets/images/learning/bitdepth/8bit-vs-16bit-gradient.png" alt="8位渐变与可见色带对比16位平滑渐变的比较" loading="lazy" />
                      <figcaption class="content-figure__caption">图2：8位与16位渐变质量比较</figcaption>
                    </figure>
                    
                    <div class="pros-cons">
                        <div class="pros-cons__item pros-cons__item--pros">
                            <h4>优点</h4>
                            <ul>
                                <li>质量和文件大小的良好平衡</li>
                                <li>通用兼容性</li>
                                <li>对大多数应用高效</li>
                                <li>所有设备和软件都支持</li>
                            </ul>
                        </div>
                        <div class="pros-cons__item pros-cons__item--cons">
                            <h4>局限性</h4>
                            <ul>
                                <li>平滑渐变中可见色带</li>
                                <li>编辑余地有限</li>
                                <li>大幅调整时可能出现色调分离</li>
                                <li>不适合专业工作流程</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>10位（增强色彩）</h3>
                    
                    <div class="tech-specs">
                        <div class="spec-row">
                            <span class="spec-label">每通道值：</span>
                            <span class="spec-value">2^10 = 1,024个值</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">总颜色数（RGB）：</span>
                            <span class="spec-value">1,024³ = 约10.7亿色</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">每像素位数：</span>
                            <span class="spec-value">30位（10 × 3通道）</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">常见应用：</span>
                            <span class="spec-value">视频制作、HDR显示器</span>
                        </div>
                    </div>
                    
                    <h4>行业标准</h4>
                    <ul>
                        <li><strong>Rec.2020：</strong>超高清电视标准，使用10位或12位</li>
                        <li><strong>HDR10：</strong>HDR内容最低要求10位</li>
                        <li><strong>专业视频：</strong>广播和影院的标准</li>
                    </ul>
                    
                    <h3>16位（专业标准）</h3>
                    
                    <div class="tech-specs">
                        <div class="spec-row">
                            <span class="spec-label">每通道值：</span>
                            <span class="spec-value">2^16 = 65,536个值</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">总颜色数（RGB）：</span>
                            <span class="spec-value">约281万亿色</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">每像素位数：</span>
                            <span class="spec-value">48位（16 × 3通道）</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">常见格式：</span>
                            <span class="spec-value">TIFF、PNG-16、RAW文件</span>
                        </div>
                    </div>
                    
                    <h4>应用场景</h4>
                    <div class="usage-guide">
                        <div class="usage-item usage-item--full">
                            <ul class="usage-list">
                                <li class="usage-list__yes">专业摄影（RAW处理）</li>
                                <li class="usage-list__yes">高端图像编辑</li>
                                <li class="usage-list__yes">印刷制作</li>
                                <li class="usage-list__yes">数字艺术和插画</li>
                                <li class="usage-list__yes">存档母版</li>
                                <li class="usage-list__no">网络交付</li>
                                <li class="usage-list__no">快速分享</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="info-box info-box--highlight">
                        <h4>专业摄影工作流程示例</h4>
                        <ol>
                            <li>相机以12位或14位RAW捕获</li>
                            <li>作为16位导入编辑软件</li>
                            <li>执行 extensive 色彩校正</li>
                            <li>以16位TIFF保存母版文件</li>
                            <li>以8位JPEG导出最终版本用于交付</li>
                        </ol>
                    </div>
                    
                    <h3>32位（浮点）</h3>
                    
                    <div class="tech-specs">
                        <div class="spec-row">
                            <span class="spec-label">表示方式：</span>
                            <span class="spec-value">浮点</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">范围：</span>
                            <span class="spec-value">超出0-1范围（HDR）</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">常见应用：</span>
                            <span class="spec-value">HDR成像、3D渲染、视觉特效</span>
                        </div>
                    </div>
                    
                    <h4>32位类型</h4>
                    <ul>
                        <li><strong>32位整数：</strong>固定范围，高精度（很少使用）</li>
                        <li><strong>32位浮点：</strong>可变精度，对HDR至关重要</li>
                    </ul>
                    
                    <figure class="content-figure content-figure--wide">
                      <img src="assets/images/learning/bitdepth/bit-depth-levels-comparison.png" alt="8位、10位、12位和16位色彩深度级别的比较概览" loading="lazy" />
                      <figcaption class="content-figure__caption">图3：位深度级别比较概览</figcaption>
                    </figure>
                `
            },
            {
                heading: '理解色彩色带',
                content: `
                    <figure class="content-figure content-figure--float-right">
                      <img src="assets/images/learning/bitdepth/color-banding-example.png" alt="色彩色带伪影示例，显示渐变中的可见条纹" loading="lazy" />
                      <figcaption class="content-figure__caption">图4：色彩色带伪影与平滑渐变对比</figcaption>
                    </figure>
                    
                    <h3>什么是色彩色带？</h3>
                    <p>在应该是平滑渐变的地方出现可见的条纹或色带，由位深度不足引起。</p>
                    
                    <div class="info-box info-box--subtractive">
                        <h4>色带的成因</h4>
                        <ul>
                            <li>低位深度（通常是8位）</li>
                            <li>重度图像处理</li>
                            <li>压缩伪影</li>
                            <li>显示限制</li>
                        </ul>
                    </div>
                    
                    <h3>色带出现的位置</h3>
                    <ul>
                        <li>照片中的天空渐变</li>
                        <li>阴影过渡</li>
                        <li>平滑色彩背景</li>
                        <li>数字渐变和混合</li>
                    </ul>
                    
                    <h3>解决方案</h3>
                    <div class="best-practices">
                        <div class="practice-item">
                            <h4>使用更高位深度</h4>
                            <p>在16位中编辑以防止处理过程中的色带</p>
                        </div>
                        <div class="practice-item">
                            <h4>添加微妙噪点</h4>
                            <p>添加颗粒以掩盖色带伪影</p>
                        </div>
                        <div class="practice-item">
                            <h4>避免极端调整</h4>
                            <p>不要过度推动8位图像</p>
                        </div>
                        <div class="practice-item">
                            <h4>使用抖动</h4>
                            <p>应用抖动技术以平滑过渡</p>
                        </div>
                    </div>
                `
            },
            {
                heading: '位深度与文件大小',
                content: `
                    <h3>文件大小计算</h3>
                    
                    <div class="code-block">
                        <strong>公式：</strong><br>
                        文件大小 = 宽度 × 高度 × 每像素位数 ÷ 8（字节）
                    </div>
                    
                    <h4>示例 - 1200万像素图像（4000 × 3000像素）</h4>
                    
                    <div class="comparison-table-wrapper">
                        <table class="comparison-table">
                            <thead>
                                <tr>
                                    <th>位深度</th>
                                    <th>每像素位数</th>
                                    <th>未压缩大小</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>8位 RGB</strong></td>
                                    <td>24位</td>
                                    <td>~34.3 MB</td>
                                </tr>
                                <tr>
                                    <td><strong>16位 RGB</strong></td>
                                    <td>48位</td>
                                    <td>~68.7 MB</td>
                                </tr>
                                <tr>
                                    <td><strong>32位 RGB</strong></td>
                                    <td>96位</td>
                                    <td>~137.3 MB</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <figure class="content-figure content-figure--float-right">
                      <img src="assets/images/learning/bitdepth/bit-depth-file-size-chart.png" alt="显示不同位深度文件大小比较的柱状图" loading="lazy" />
                      <figcaption class="content-figure__caption">图5：文件大小与位深度关系</figcaption>
                    </figure>
                    
                    <h3>压缩影响</h3>
                    <ul>
                        <li><strong>无损压缩：</strong>减小大小，保留位深度</li>
                        <li><strong>有损压缩：</strong>减小大小，可能降低有效位深度</li>
                        <li><strong>高位深度从压缩中受益更多</strong></li>
                    </ul>
                `
            },
            {
                heading: '选择合适的位深度',
                content: `
                    <h3>决策框架</h3>
                    
                    <div class="decision-framework">
                        <div class="framework-step">
                            <h4>摄影</h4>
                            <ul>
                                <li><strong>随意拍摄</strong> → 8位JPEG</li>
                                <li><strong>严肃摄影</strong> → 12/14位RAW → 16位编辑 → 8位交付</li>
                                <li><strong>专业工作</strong> → 14/16位RAW → 16位编辑 → 适当交付</li>
                                <li><strong>HDR摄影</strong> → RAW → 32位HDR合并 → 16位编辑</li>
                            </ul>
                        </div>
                        
                        <div class="framework-step">
                            <h4>视频</h4>
                            <ul>
                                <li><strong>YouTube/流媒体</strong> → 8位H.264</li>
                                <li><strong>专业视频</strong> → 10位ProRes/DNxHD</li>
                                <li><strong>影院/HDR</strong> → 12位RAW或10/12位ProRes</li>
                                <li><strong>广播</strong> → 最低10位</li>
                            </ul>
                        </div>
                        
                        <div class="framework-step">
                            <h4>图形</h4>
                            <ul>
                                <li><strong>网络图形</strong> → 8位PNG/JPEG</li>
                                <li><strong>印刷设计</strong> → 16位TIFF用于编辑，8位用于交付</li>
                                <li><strong>数字艺术</strong> → 16位用于绘画，8位用于最终</li>
                                <li><strong>3D渲染</strong> → 32位浮点用于渲染</li>
                            </ul>
                        </div>
                    </div>
                    
                    <figure class="content-figure content-figure--wide">
                      <img src="assets/images/learning/bitdepth/bit-depth-workflow-guide.png" alt="从捕获到交付的专业摄影位深度工作流程" loading="lazy" />
                      <figcaption class="content-figure__caption">图6：推荐位深度工作流程指南</figcaption>
                    </figure>
                    
                    <h3>推荐工作流程</h3>
                    
                    <div class="workflow-scenarios">
                        <div class="scenario-card">
                            <h4>专业摄影工作流程</h4>
                            <div class="workflow-steps">
                                <span class="workflow-step">拍摄RAW（12/14位）</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">在16位中编辑</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">保存16位TIFF</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">导出8位JPEG</span>
                            </div>
                        </div>
                        
                        <div class="scenario-card">
                            <h4>视频制作工作流程</h4>
                            <div class="workflow-steps">
                                <span class="workflow-step">拍摄10位+</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">编辑10位时间线</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">在10位+中调色</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">适当导出</span>
                            </div>
                        </div>
                    </div>
                `
            },

            {
                heading: '总结与要点回顾',
                content: `
                    <h3>需要记住的核心概念</h3>
                    <ol>
                        <li><strong>位深度 = 精度：</strong>更多位 = 更高色彩精度</li>
                        <li><strong>8位是标准：</strong>适合大多数应用，通用兼容性</li>
                        <li><strong>16位是专业级：</strong>编辑和专业工作必不可少</li>
                        <li><strong>更高位深度 = 更大文件：</strong>质量和大小之间的权衡</li>
                        <li><strong>高位编辑，低位交付：</strong>在高位深度中工作，以适当位深度导出</li>
                        <li><strong>色带表明位深度低：</strong>位深度不足时在渐变中可见</li>
                    </ol>
                    
                    <h3>获得的实践技能</h3>
                    <ul>
                        <li>为不同应用选择合适的位深度</li>
                        <li>理解位深度对图像质量的影响</li>
                        <li>在工作流程中实施位深度管理</li>
                        <li>排除位深度相关问题</li>
                    </ul>
                    
                    <div class="next-steps">
                        <h3>下一步</h3>
                        <div class="action-buttons">
                            <a href="#encoding-color-profiles" class="btn btn-primary">继续到色彩配置文件</a>
                            <a href="#interaction-visual-example" class="btn btn-secondary">查看视觉示例</a>
                            <a href="#overview" class="btn btn-outline">返回概述</a>
                        </div>
                    </div>
                `
            }
        ]
    },
    'encoding-color-profiles': {
        title: 'ICC配置文件与色彩管理',
        subtitle: '理解设备特征化和跨平台色彩一致性',
        meta: {
            readingTime: '40-45分钟',
            difficulty: '中级',
            type: '理论 + 实际应用'
        },
        sections: [
            {
                heading: '学习目标',
                content: `
                    <p>完成本模块后，你将能够：</p>
                    
                    <h3>理解基础概念</h3>
                    <ul>
                        <li>定义ICC配置文件及其在色彩管理中的作用</li>
                        <li>解释ICC标准的历史和发展</li>
                        <li>理解ICC配置文件的结构和组成部分</li>
                    </ul>
                    
                    <h3>识别配置文件类型</h3>
                    <ul>
                        <li>认识不同类型的ICC配置文件（设备、抽象、设备链接）</li>
                        <li>了解何时使用每种配置文件类型</li>
                        <li>区分输入、显示和输出配置文件</li>
                    </ul>
                    
                    <h3>掌握技术规格</h3>
                    <ul>
                        <li>理解ICC配置文件版本（v2、v4、v5）及其差异</li>
                        <li>解读配置文件标签和数据结构</li>
                        <li>认识配置文件连接空间（PCS）及其重要性</li>
                    </ul>
                `
            },
            {
                heading: 'ICC配置文件简介',
                content: `
                    <h3>什么是ICC配置文件？</h3>
                    <p><strong>ICC配置文件</strong>（国际色彩联盟配置文件）是一组标准化数据，用于根据国际色彩联盟（ICC）颁布的标准来表征色彩输入或输出设备，或色彩空间。</p>
                    
                    <div class="info-box info-box--highlight">
                        <h4>核心目的</h4>
                        <p>ICC配置文件充当不同设备和色彩空间之间的"翻译字典"，确保从捕获到显示再到打印的整个工作流程中一致的色彩再现。</p>
                    </div>
                    
                    <h3>关键功能</h3>
                    <ul>
                        <li><strong>描述</strong>设备的色彩能力（色域）</li>
                        <li><strong>定义</strong>设备颜色如何映射到标准参考空间</li>
                        <li><strong>启用</strong>设备间准确的色彩转换</li>
                        <li><strong>保持</strong>不同介质间的色彩一致性</li>
                    </ul>
                    
                    <h3>色彩一致性问题</h3>
                    <p>如果没有ICC配置文件，由于以下原因，相同的RGB值在不同设备上可能显得截然不同：</p>
                    <ul>
                        <li>不同的显示技术（LCD、OLED、CRT）</li>
                        <li>不同的色彩色域</li>
                        <li>不同的白点和伽马曲线</li>
                        <li>制造公差</li>
                    </ul>
                    
                    <h3>ICC配置文件解决方案</h3>
                    <div class="workflow-scenarios">
                        <div class="scenario-card">
                            <h4>色彩转换流程</h4>
                            <div class="workflow-steps">
                                <span class="workflow-step">设备A（相机）</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">配置文件A</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">PCS（参考）</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">配置文件B</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">设备B（显示器）</span>
                            </div>
                        </div>
                    </div>
                    
                    <h3>历史与发展</h3>
                    <div class="tech-specs">
                        <div class="spec-row">
                            <span class="spec-label">成立：</span>
                            <span class="spec-value">1993年</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">创始成员：</span>
                            <span class="spec-value">Adobe、Apple、Kodak、Microsoft等</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">使命：</span>
                            <span class="spec-value">通用色彩管理系统</span>
                        </div>
                    </div>
                    
                    <h4>关键里程碑</h4>
                    <ul>
                        <li><strong>1993：</strong>ICC成立，制定初始规范</li>
                        <li><strong>1995：</strong>发布ICC配置文件格式规范v2.0</li>
                        <li><strong>2001：</strong>v4.0规范（当前广泛使用的标准）</li>
                        <li><strong>2010：</strong>v4.3规范更新</li>
                        <li><strong>2020年代：</strong>v5.0开发和新兴标准</li>
                    </ul>
                `
            },
            {
                heading: 'ICC配置文件结构和组成部分',
                content: `
                    <h3>配置文件头信息</h3>
                    <p>每个ICC配置文件都包含标识和描述配置文件的基本头数据：</p>
                    
                    <div class="code-block">
                        <strong>基本头数据：</strong><br>
                        • 配置文件大小：总文件大小（字节）<br>
                        • 配置文件版本：规范版本（例如2.0、4.0、4.3）<br>
                        • 配置文件/设备类别：配置文件类型（显示、输入、输出等）<br>
                        • 色彩空间：数据色彩空间（RGB、CMYK、Gray等）<br>
                        • PCS（配置文件连接空间）：XYZ或Lab<br>
                        • 创建日期/时间：配置文件创建时间<br>
                        • 设备制造商/型号：设备标识<br>
                        • 渲染意图：默认渲染意图<br>
                        • 配置文件ID：唯一标识符（MD5哈希）
                    </div>
                    
                    <h3>配置文件标签和数据</h3>
                    <p>ICC配置文件包含标记的数据元素，描述设备或色彩空间的各个方面。</p>
                    
                    <h4>基本标签</h4>
                    
                    <div class="info-box info-box--additive">
                        <h4>描述标签</h4>
                        <ul>
                            <li><strong>desc：</strong>配置文件描述（文本）</li>
                            <li><strong>cprt：</strong>版权字符串</li>
                            <li><strong>dmnd：</strong>配置文件版权信息</li>
                        </ul>
                    </div>
                    
                    <div class="info-box info-box--subtractive">
                        <h4>色彩空间标签</h4>
                        <ul>
                            <li><strong>rXYZ/gXYZ/bXYZ：</strong>XYZ值中的RGB原色</li>
                            <li><strong>wtpt：</strong>介质白点</li>
                            <li><strong>bkpt：</strong>介质黑点</li>
                            <li><strong>lumi：</strong>亮度值</li>
                        </ul>
                    </div>
                    
                    <div class="info-box info-box--highlight">
                        <h4>转换标签</h4>
                        <ul>
                            <li><strong>A2B0/A2B1/A2B2：</strong>设备到PCS转换（不同意图）</li>
                            <li><strong>B2A0/B2A1/B2A2：</strong>PCS到设备转换</li>
                            <li><strong>gamt：</strong>色域标签用于色域可视化</li>
                        </ul>
                    </div>
                    
                    <h3>配置文件连接空间（PCS）</h3>
                    <p>PCS是一种设备无关的参考色彩空间，用作不同设备之间色彩转换的中介。</p>
                    
                    <h4>两种PCS选项</h4>
                    
                    <div class="pros-cons">
                        <div class="pros-cons__item">
                            <h4>CIEXYZ (1931)</h4>
                            <ul>
                                <li>基于CIE 1931标准观察者</li>
                                <li>使用三刺激值X、Y、Z</li>
                                <li>Y代表亮度</li>
                                <li>绝对色彩空间</li>
                            </ul>
                        </div>
                        <div class="pros-cons__item">
                            <h4>CIELAB (L*a*b*)</h4>
                            <ul>
                                <li>感知均匀色彩空间</li>
                                <li>L* = 亮度（0-100）</li>
                                <li>a* = 绿-红轴</li>
                                <li>b* = 蓝-黄轴</li>
                                <li>对色彩差异更直观</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="info-box info-box--highlight">
                        <h4>白点标准化</h4>
                        <p>PCS始终使用<strong>D50光源（5000K）</strong>。这确保了所有配置文件之间的一致参考。设备白点适应于D50。</p>
                    </div>
                    
                    <h3>ICC配置文件版本</h3>
                    
                    <div class="comparison-table-wrapper">
                        <table class="comparison-table">
                            <thead>
                                <tr>
                                    <th>版本</th>
                                    <th>年份</th>
                                    <th>关键特性</th>
                                    <th>状态</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>v2.0</strong></td>
                                    <td>1995</td>
                                    <td>基本配置文件结构，XYZ/Lab PCS</td>
                                    <td>遗留，仍受支持</td>
                                </tr>
                                <tr>
                                    <td><strong>v3.0</strong></td>
                                    <td>1998</td>
                                    <td>增强标签，提高精度</td>
                                    <td>很少使用</td>
                                </tr>
                                <tr>
                                    <td><strong>v4.0</strong></td>
                                    <td>2001</td>
                                    <td>标准化算法，更好的互操作性</td>
                                    <td>广泛使用的标准</td>
                                </tr>
                                <tr>
                                    <td><strong>v4.3</strong></td>
                                    <td>2010</td>
                                    <td>澄清，错误修复</td>
                                    <td>当前推荐</td>
                                </tr>
                                <tr>
                                    <td><strong>v5.0</strong></td>
                                    <td>2020年代</td>
                                    <td>高级功能，HDR支持</td>
                                    <td>新兴，采用有限</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <h4>关键差异：v2 vs v4</h4>
                    <ul>
                        <li><strong>v2：</strong>允许更多灵活性但一致性较差</li>
                        <li><strong>v4：</strong>严格标准化，更好的跨平台兼容性</li>
                        <li><strong>v4优势：</strong>标准化PCS编码，定义的色度适应，更好的色域映射，提高精度</li>
                    </ul>
                `
            },
            {
                heading: 'ICC配置文件类型',
                content: `
                    <h3>设备配置文件</h3>
                    <p>设备配置文件表征特定的输入、显示或输出设备。主要有三类：</p>
                    
                    <div class="module-cards">
                        <div class="module-card">
                            <h3>1. 输入配置文件（源配置文件）</h3>
                            <p><strong>目的：</strong>描述捕获设备的色彩特征</p>
                            <p><strong>设备：</strong>相机、扫描仪、手机</p>
                            <ul>
                                <li>定义设备如何捕获颜色</li>
                                <li>将设备RGB映射到PCS</li>
                                <li>通常嵌入在图像文件中</li>
                            </ul>
                            <p><strong>创建方法：</strong></p>
                            <ul>
                                <li>制造商提供的配置文件</li>
                                <li>使用色彩目标自定义配置文件</li>
                                <li>软件生成的配置文件</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>2. 显示配置文件（显示器配置文件）</h3>
                            <p><strong>目的：</strong>表征显示设备</p>
                            <p><strong>设备：</strong>显示器、投影仪、平板电脑、手机</p>
                            <ul>
                                <li>描述显示器色域、白点、伽马</li>
                                <li>启用准确的屏幕色彩表示</li>
                                <li>对色彩关键工作至关重要</li>
                            </ul>
                            <p><strong>创建方法：</strong></p>
                            <ul>
                                <li>硬件校准（推荐）</li>
                                <li>软件校准（基本）</li>
                                <li>制造商配置文件（通用）</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>3. 输出配置文件（目标配置文件）</h3>
                            <p><strong>目的：</strong>描述打印设备和介质</p>
                            <p><strong>设备：</strong>具有特定纸张/墨水组合的打印机</p>
                            <ul>
                                <li>定义打印机+纸张+墨水的色彩能力</li>
                                <li>将PCS映射到设备CMYK值</li>
                                <li>对于准确的印刷再现必不可少</li>
                            </ul>
                            <p><strong>创建方法：</strong></p>
                            <ul>
                                <li>制造商配置文件（通用）</li>
                                <li>使用测试打印自定义配置文件</li>
                                <li>专业 profiling 服务</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>抽象配置文件</h3>
                    <p>抽象配置文件执行色彩转换而不绑定到特定设备。它们直接在PCS中操作。</p>
                    
                    <h4>目的</h4>
                    <ul>
                        <li>应用色彩调整和校正</li>
                        <li>创建色彩效果和风格</li>
                        <li>执行色域映射操作</li>
                        <li>实现色彩外观模型</li>
                    </ul>
                    
                    <h4>常见用途</h4>
                    <ul>
                        <li><strong>色彩校正：</strong>调整白平衡、对比度、饱和度</li>
                        <li><strong>创意效果：</strong>应用特定的色彩外观或风格</li>
                        <li><strong>色域压缩：</strong>为特定输出减少色域</li>
                        <li><strong>色调曲线：</strong>应用特定的色调转换</li>
                    </ul>
                    
                    <h3>设备链接配置文件</h3>
                    <p>设备链接配置文件将多个配置文件组合成单个转换，直接从一个设备空间转换到另一个设备空间，而无需经过PCS。</p>
                    
                    <div class="pros-cons">
                        <div class="pros-cons__item pros-cons__item--pros">
                            <h4>优点</h4>
                            <ul>
                                <li>更快的处理：单次转换 vs. 多步</li>
                                <li>更高的精度：避免中间舍入误差</li>
                                <li>意图保留：保持特定的渲染意图</li>
                                <li>工作流程效率：简化复杂工作流程</li>
                            </ul>
                        </div>
                        <div class="pros-cons__item pros-cons__item--cons">
                            <h4>缺点</h4>
                            <ul>
                                <li>灵活性较低：绑定到特定设备组合</li>
                                <li>不可重用：不能与其他设备一起使用</li>
                                <li>存储要求：需要多个配置文件</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h4>常见用途</h4>
                    <ul>
                        <li><strong>印刷工作流程：</strong>相机 → 打印机直接转换</li>
                        <li><strong>视频管道：</strong>特定相机到显示器的转换</li>
                        <li><strong>批处理：</strong>大容量色彩转换</li>
                        <li><strong>嵌入式系统：</strong>处理能力有限的设备</li>
                    </ul>
                `
            },
            {
                heading: '创建和使用ICC配置文件',
                content: `
                    <h3>配置文件创建方法</h3>
                    
                    <div class="decision-framework">
                        <div class="framework-step">
                            <h4>1. 制造商提供的配置文件</h4>
                            <div class="pros-cons">
                                <div class="pros-cons__item pros-cons__item--pros">
                                    <h5>优点</h5>
                                    <ul>
                                        <li>免费且易于获取</li>
                                        <li>经过测试和验证</li>
                                        <li>良好的起点</li>
                                    </ul>
                                </div>
                                <div class="pros-cons__item pros-cons__item--cons">
                                    <h5>缺点</h5>
                                    <ul>
                                        <li>通用，非设备特定</li>
                                        <li>可能与你的特定单元不匹配</li>
                                        <li>精度有限</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="framework-step">
                            <h4>2. 硬件校准（推荐）</h4>
                            <p><strong>流程：</strong></p>
                            <ol>
                                <li>使用专用色度计或分光光度计</li>
                                <li>测量显示器或打印输出</li>
                                <li>校准软件创建自定义配置文件</li>
                                <li>配置文件应用于系统</li>
                            </ol>
                            <p><strong>设备：</strong></p>
                            <ul>
                                <li>X-Rite i1Display Pro</li>
                                <li>Datacolor SpyderX</li>
                                <li>CalMAN系统</li>
                            </ul>
                            <div class="pros-cons">
                                <div class="pros-cons__item pros-cons__item--pros">
                                    <h5>优点</h5>
                                    <ul>
                                        <li>高精度</li>
                                        <li>设备特定</li>
                                        <li>专业质量</li>
                                        <li>可以定期重新校准</li>
                                    </ul>
                                </div>
                                <div class="pros-cons__item pros-cons__item--cons">
                                    <h5>缺点</h5>
                                    <ul>
                                        <li>昂贵的设备</li>
                                        <li>需要专业知识</li>
                                        <li>耗时</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div class="framework-step">
                            <h4>3. 自定义打印配置文件</h4>
                            <p><strong>流程：</strong></p>
                            <ol>
                                <li>打印标准化测试图表</li>
                                <li>用分光光度计测量色块</li>
                                <li>Profiling 软件创建配置文件</li>
                                <li>用验证图表验证</li>
                            </ol>
                            <p><strong>设备：</strong></p>
                            <ul>
                                <li>X-Rite i1Pro系列</li>
                                <li>Datacolor SpyderPRINT</li>
                                <li>专业 profiling 软件</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>配置文件安装和管理</h3>
                    
                    <div class="comparison-table-wrapper">
                        <table class="comparison-table">
                            <thead>
                                <tr>
                                    <th>操作系统</th>
                                    <th>配置文件位置</th>
                                    <th>管理工具</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Windows</strong></td>
                                    <td>C:\\Windows\\System32\\spool\\drivers\\color\\</td>
                                    <td>颜色管理 (colorcpl.exe)</td>
                                </tr>
                                <tr>
                                    <td><strong>macOS</strong></td>
                                    <td>/Library/ColorSync/Profiles/</td>
                                    <td>ColorSync实用工具</td>
                                </tr>
                                <tr>
                                    <td><strong>Linux</strong></td>
                                    <td>/usr/share/color/icc/</td>
                                    <td>GNOME颜色管理器</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <h3>在工作流程中使用配置文件</h3>
                    
                    <div class="workflow-scenarios">
                        <div class="scenario-card">
                            <h4>专业摄影工作流程</h4>
                            <div class="workflow-steps">
                                <span class="workflow-step">相机RAW</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">导入和转换</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">编辑16位ProPhoto</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">软打样</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">带配置文件导出</span>
                            </div>
                        </div>
                        
                        <div class="scenario-card">
                            <h4>印刷制作工作流程</h4>
                            <div class="workflow-steps">
                                <span class="workflow-step">设计Adobe RGB</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">软打样打印机</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">调整颜色</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">转换配置文件</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">管理打印</span>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                heading: '渲染意图和高级主题',
                content: `
                    <h3>渲染意图</h3>
                    <p>渲染意图是处理色彩转换的策略，特别是在处理色域不匹配时。</p>
                    
                    <div class="module-cards">
                        <div class="module-card">
                            <h3>1. 感知</h3>
                            <p><strong>目的：</strong>保持整体色彩关系</p>
                            <p><strong>方法：</strong>压缩整个色域以适应目标</p>
                            <p><strong>最适合：</strong>摄影图像、连续色调</p>
                            <ul>
                                <li>保持视觉和谐</li>
                                <li>平滑色彩过渡</li>
                                <li>可能会略微偏移所有颜色</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>2. 相对色度</h3>
                            <p><strong>目的：</strong>在可能的情况下精确匹配颜色</p>
                            <p><strong>方法：</strong>将色域外颜色裁剪到最近的可再现颜色</p>
                            <p><strong>最适合：</strong>图形、标志、专色</p>
                            <ul>
                                <li>精确保留色域内颜色</li>
                                <li>色域外映射到边界</li>
                                <li>白点适应于目标</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>3. 绝对色度</h3>
                            <p><strong>目的：</strong>模拟精确的色彩外观</p>
                            <p><strong>方法：</strong>与相对类似但保持白点</p>
                            <p><strong>最适合：</strong>打样、模拟</p>
                            <ul>
                                <li>保持精确白点</li>
                                <li>如果白点不同可能导致色偏</li>
                                <li>用于合同打样</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>4. 饱和度</h3>
                            <p><strong>目的：</strong>最大化色彩鲜艳度</p>
                            <p><strong>方法：</strong>优先饱和颜色</p>
                            <p><strong>最适合：</strong>图表、图解、演示文稿</p>
                            <ul>
                                <li>忽略色彩准确性</li>
                                <li>最大化饱和度</li>
                                <li>不适合摄影</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>黑点补偿（BPC）</h3>
                    <p>BPC是一种将源空间的黑点映射到目标空间的黑点的技术，保留阴影细节。</p>
                    
                    <div class="info-box info-box--highlight">
                        <h4>为什么BPC很重要</h4>
                        <ul>
                            <li>防止丢失阴影细节</li>
                            <li>保持色调关系</li>
                            <li>对于准确的印刷再现必不可少</li>
                            <li>对CMYK工作流程尤为重要</li>
                        </ul>
                    </div>
                    
                    <h4>何时使用BPC</h4>
                    <ul>
                        <li class="usage-list__yes">转换到较小色域空间</li>
                        <li class="usage-list__yes">印刷工作流程</li>
                        <li class="usage-list__yes">当保留阴影细节至关重要时</li>
                        <li class="usage-list__no">当需要精确黑点匹配时</li>
                    </ul>
                    
                    <h3>常见问题和解决方案</h3>
                    
                    <div class="best-practices">
                        <div class="practice-item">
                            <h4>问题：缺少配置文件</h4>
                            <p><strong>症状：</strong>颜色显示错误，缺少配置文件的警告</p>
                            <p><strong>解决方案：</strong>安装所需配置文件，在文件中嵌入配置文件，手动分配适当的配置文件</p>
                        </div>
                        
                        <div class="practice-item">
                            <h4>问题：配置文件不匹配</h4>
                            <p><strong>症状：</strong>打开文件时颜色偏移</p>
                            <p><strong>解决方案：</strong>标准化工作空间，使用一致的配置文件，配置色彩管理策略</p>
                        </div>
                        
                        <div class="practice-item">
                            <h4>问题：不准确的配置文件</h4>
                            <p><strong>症状：</strong>尽管使用了配置文件，颜色仍然错误</p>
                            <p><strong>解决方案：</strong>创建自定义配置文件，定期重新校准，使用专业 profiling 服务</p>
                        </div>
                    </div>
                `
            },
            {
                heading: '总结与要点回顾',
                content: `
                    <h3>需要记住的核心概念</h3>
                    <ol>
                        <li><strong>ICC配置文件是翻译工具：</strong>它们实现跨设备的一致色彩</li>
                        <li><strong>三种主要配置文件类型：</strong>输入、显示、输出配置文件用于不同设备</li>
                        <li><strong>v4是当前标准：</strong>使用v4.3配置文件以获得最佳兼容性和精度</li>
                        <li><strong>PCS是桥梁：</strong>XYZ或Lab作为通用参考空间</li>
                        <li><strong>渲染意图很重要：</strong>为你的内容选择合适的意图</li>
                        <li><strong>自定义配置文件最佳：</strong>硬件校准提供最高精度</li>
                    </ol>
                    
                    <h3>获得的实践技能</h3>
                    <ul>
                        <li>理解ICC配置文件结构和组成部分</li>
                        <li>为不同应用识别适当的配置文件类型</li>
                        <li>创建和安装ICC配置文件</li>
                        <li>实施色彩管理工作流程</li>
                        <li>排除配置文件相关问题</li>
                    </ul>
                    
                    <div class="next-steps">
                        <h3>下一步</h3>
                        <div class="action-buttons">
                            <a href="#encoding-gamma-correction" class="btn btn-primary">继续到伽马校正</a>
                            <a href="#interaction-visual-example" class="btn btn-secondary">查看视觉示例</a>
                            <a href="#overview" class="btn btn-outline">返回概述</a>
                        </div>
                    </div>
                `
            }
        ]
    },
    'encoding-gamma-correction': {
        title: '伽马校正与色调再现',
        subtitle: '理解非线性编码和人类视觉感知',
        meta: {
            readingTime: '35-40分钟',
            difficulty: '中级',
            type: '理论 + 技术应用'
        },
        sections: [
            {
                heading: '学习目标',
                content: `
                    <p>完成本模块后，你将能够：</p>
                    
                    <h3>理解基础概念</h3>
                    <ul>
                        <li>定义伽马校正及其在数字成像中的目的</li>
                        <li>解释伽马与人类感知之间的关系</li>
                        <li>理解编码伽马和显示伽马的区别</li>
                    </ul>
                    
                    <h3>掌握技术规格</h3>
                    <ul>
                        <li>计算伽马值及其对图像数据的影响</li>
                        <li>理解伽马曲线及其数学表示</li>
                        <li>认识不同的伽马标准（sRGB、Rec.709等）</li>
                    </ul>
                    
                    <h3>应用实践知识</h3>
                    <ul>
                        <li>在图像处理工作流程中实施伽马校正</li>
                        <li>为不同应用选择合适的伽马设置</li>
                        <li>排除图像和显示器中的伽马相关问题</li>
                    </ul>
                `
            },
            {
                heading: '伽马校正简介',
                content: `
                    <h3>什么是伽马校正？</h3>
                    <p><strong>伽马校正</strong>是一种非线性操作，用于在视频或静态图像系统中编码和解码亮度或三刺激值。它补偿像素值与感知亮度之间的非线性关系。</p>
                    
                    <div class="info-box info-box--highlight">
                        <h4>核心目的</h4>
                        <p>伽马校正有两个主要功能：</p>
                        <ul>
                            <li><strong>感知优化：</strong>匹配人类视觉的非线性响应</li>
                            <li><strong>技术补偿：</strong>校正显示设备特性</li>
                        </ul>
                    </div>
                    
                    <h3>为什么伽马校正很重要</h3>
                    
                    <div class="pros-cons">
                        <div class="pros-cons__item pros-cons__item--cons">
                            <h4>没有伽马校正</h4>
                            <ul>
                                <li>线性编码在高光区域浪费位</li>
                                <li>人眼对阴影更敏感</li>
                                <li>可用位深度利用率低</li>
                                <li>暗区出现可见色带</li>
                            </ul>
                        </div>
                        <div class="pros-cons__item pros-cons__item--pros">
                            <h4>有伽马校正</h4>
                            <ul>
                                <li>为阴影区域分配更多位</li>
                                <li>匹配人类感知响应</li>
                                <li>高效使用位深度</li>
                                <li>阴影中更平滑的渐变</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>历史背景</h3>
                    <p>伽马校正起源于电视和计算机图形早期阴极射线管（CRT）显示器的特性。</p>
                    
                    <div class="code-block">
                        <strong>CRT物理：</strong><br>
                        输入电压 → 电子束强度 → 荧光粉亮度<br>
                        线性          非线性（幂函数）      非线性<br><br>
                        
                        问题：<br>
                        • CRT显示器具有自然的幂律响应<br>
                        • 输入电压到亮度遵循：亮度 = 电压^γ<br>
                        • 典型CRT伽马约为2.2-2.5<br>
                        • 没有校正，图像显得太暗<br><br>
                        
                        解决方案：<br>
                        • 对图像数据应用逆伽马（伽马编码）<br>
                        • 显示器应用自然伽马（伽马解码）<br>
                        • 结果：亮度的线性感知
                    </div>
                    
                    <h3>现代相关性</h3>
                    <p>尽管CRT显示器已过时，但伽马校正仍然至关重要，因为：</p>
                    
                    <div class="module-cards">
                        <div class="module-card">
                            <h3>感知效率</h3>
                            <ul>
                                <li>人类视觉是对数的，不是线性的</li>
                                <li>我们将相等的亮度比率感知为相等的步长</li>
                                <li>伽马编码匹配这种感知特性</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>位深度优化</h3>
                            <ul>
                                <li>8位图像每通道只有256个级别</li>
                                <li>线性编码在高光区域浪费精度</li>
                                <li>伽马编码将精度分配给眼睛最敏感的区域</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>行业标准</h3>
                            <ul>
                                <li>sRGB、Rec.709和其他标准包括伽马</li>
                                <li>跨设备和平台的兼容性</li>
                                <li>既定的工作流程和期望</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            {
                heading: '伽马的科学',
                content: `
                    <h3>人类视觉感知</h3>
                    <p>人类对亮度的感知遵循对数关系而不是线性关系，称为韦伯-费希纳定律。</p>
                    
                    <div class="info-box info-box--additive">
                        <h4>关键见解</h4>
                        <ul>
                            <li><strong>物理光强度：</strong>0 → 100单位（线性）</li>
                            <li><strong>感知亮度：</strong>对数尺度</li>
                            <li>我们在暗区比亮区能区分更多的色调</li>
                            <li>相等的物理变化在阴影中显得更大</li>
                            <li>非线性编码匹配感知灵敏度</li>
                        </ul>
                    </div>
                    
                    <h3>视觉灵敏度分布</h3>
                    <ul>
                        <li><strong>阴影（0-25%亮度）：</strong>高灵敏度，需要更多精度</li>
                        <li><strong>中间调（25-75%）：</strong>中等灵敏度</li>
                        <li><strong>高光（75-100%）：</strong>低灵敏度，需要较少精度</li>
                    </ul>
                    
                    <h3>数学基础</h3>
                    <p>伽马校正函数是幂律关系：</p>
                    
                    <div class="code-block">
                        <strong>伽马编码（用于存储/传输）：</strong><br>
                        V_out = V_in^γ<br><br>
                        
                        其中：<br>
                        • V_in = 线性光值（0-1）<br>
                        • V_out = 伽马编码值（0-1）<br>
                        • γ = 伽马值（通常编码时&lt; 1）<br><br>
                        
                        <strong>完整伽马校正流程：</strong><br>
                        原始场景 → 伽马编码（γ）→ 存储/传输<br>
                        ↓<br>
                        伽马解码（1/γ）→ 显示<br>
                        ↓<br>
                        感知线性亮度
                    </div>
                    
                    <h4>示例计算（sRGB）</h4>
                    <ul>
                        <li><strong>线性值：</strong>0.5（50%亮度）</li>
                        <li><strong>伽马编码（γ=0.4545）：</strong>0.5^0.4545 ≈ 0.735</li>
                        <li><strong>存储值：</strong>0.735（最大值的73.5%）</li>
                        <li><strong>显示解码（γ=2.2）：</strong>0.735^2.2 ≈ 0.5</li>
                        <li><strong>感知亮度：</strong>0.5（50% - 与原始匹配）</li>
                    </ul>
                    
                    <h3>伽马值和标准</h3>
                    
                    <div class="comparison-table-wrapper">
                        <table class="comparison-table">
                            <thead>
                                <tr>
                                    <th>标准</th>
                                    <th>伽马值</th>
                                    <th>应用</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>sRGB</strong></td>
                                    <td>~2.2（带线性段）</td>
                                    <td>网络、计算机显示器</td>
                                </tr>
                                <tr>
                                    <td><strong>Rec.709</strong></td>
                                    <td>2.4（带线性段）</td>
                                    <td>HDTV、广播</td>
                                </tr>
                                <tr>
                                    <td><strong>Rec.2020</strong></td>
                                    <td>2.4（带线性段）</td>
                                    <td>UHDTV、4K/8K</td>
                                </tr>
                                <tr>
                                    <td><strong>伽马2.2</strong></td>
                                    <td>精确2.2</td>
                                    <td>通用</td>
                                </tr>
                                <tr>
                                    <td><strong>伽马1.8</strong></td>
                                    <td>精确1.8</td>
                                    <td>旧版Mac系统</td>
                                </tr>
                                <tr>
                                    <td><strong>线性</strong></td>
                                    <td>1.0</td>
                                    <td>3D渲染、科学</td>
                                </tr>
                                <tr>
                                    <td><strong>ProPhoto RGB</strong></td>
                                    <td>1.8</td>
                                    <td>专业摄影</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <h3>线性与非线性色彩空间</h3>
                    
                    <div class="pros-cons">
                        <div class="pros-cons__item">
                            <h4>线性色彩空间</h4>
                            <p><strong>特性：</strong></p>
                            <ul>
                                <li>直接比例关系：双倍值 = 双倍亮度</li>
                                <li>匹配物理光行为</li>
                                <li>准确的物理模拟所需</li>
                            </ul>
                            <p><strong>应用：</strong></p>
                            <ul>
                                <li>3D渲染和CGI</li>
                                <li>科学可视化</li>
                                <li>物理光计算</li>
                                <li>HDR图像处理</li>
                            </ul>
                            <p><strong>优点：</strong>光操作的数学正确性，准确的混合</p>
                            <p><strong>缺点：</strong>位使用效率低，阴影中可见色带</p>
                        </div>
                        <div class="pros-cons__item">
                            <h4>非线性（伽马）色彩空间</h4>
                            <p><strong>特性：</strong></p>
                            <ul>
                                <li>值与亮度之间的幂律关系</li>
                                <li>匹配人类感知</li>
                                <li>针对位深度优化</li>
                            </ul>
                            <p><strong>应用：</strong></p>
                            <ul>
                                <li>标准摄影</li>
                                <li>网络和屏幕显示</li>
                                <li>视频制作</li>
                                <li>印刷工作流程</li>
                            </ul>
                            <p><strong>优点：</strong>高效的位使用，减少色带，更小的文件大小</p>
                            <p><strong>缺点：</strong>对物理计算不正确，渲染时需要转换</p>
                        </div>
                    </div>
                `
            },
            {
                heading: '实践中的伽马',
                content: `
                    <h3>数字摄影中的伽马</h3>
                    
                    <div class="workflow-scenarios">
                        <div class="scenario-card">
                            <h4>相机处理管道</h4>
                            <div class="workflow-steps">
                                <span class="workflow-step">场景光</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">传感器（线性）</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">RAW文件</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">去马赛克</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">伽马编码</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">JPEG/TIFF</span>
                            </div>
                        </div>
                    </div>
                    
                    <h4>RAW vs. JPEG</h4>
                    
                    <div class="comparison-table-wrapper">
                        <table class="comparison-table">
                            <thead>
                                <tr>
                                    <th>特性</th>
                                    <th>RAW文件</th>
                                    <th>JPEG文件</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>数据类型</strong></td>
                                    <td>线性或对数传感器数据</td>
                                    <td>伽马编码（sRGB）</td>
                                </tr>
                                <tr>
                                    <td><strong>应用伽马</strong></td>
                                    <td>无或最小</td>
                                    <td>始终应用</td>
                                </tr>
                                <tr>
                                    <td><strong>编辑灵活性</strong></td>
                                    <td>最大</td>
                                    <td>有限</td>
                                </tr>
                                <tr>
                                    <td><strong>文件大小</strong></td>
                                    <td>较大</td>
                                    <td>较小</td>
                                </tr>
                                <tr>
                                    <td><strong>准备好显示</strong></td>
                                    <td>否（需要处理）</td>
                                    <td>是</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <h3>显示技术中的伽马</h3>
                    
                    <h4>显示器类型和伽马</h4>
                    
                    <div class="module-cards">
                        <div class="module-card">
                            <h3>LCD显示器</h3>
                            <ul>
                                <li>原生响应因面板类型而异</li>
                                <li><strong>IPS：</strong>通常接近2.2</li>
                                <li><strong>TN：</strong>通常需要校正</li>
                                <li><strong>VA：</strong>可能需要调整</li>
                                <li>使用硬件校准以获得准确性</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>OLED显示器</h3>
                            <ul>
                                <li>近乎完美的黑位</li>
                                <li>出色的对比度</li>
                                <li>通常出厂时已良好校准</li>
                                <li>仍然受益于专业校准</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>移动显示器</h3>
                            <ul>
                                <li>因制造商而异</li>
                                <li>通常针对户外可见性优化</li>
                                <li>可能使用自适应伽马</li>
                                <li>校准具有挑战性但可行</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>视频制作中的伽马</h3>
                    
                    <h4>视频标准和伽马</h4>
                    <ul>
                        <li><strong>标清视频（Rec.601）：</strong>伽马~2.2-2.4，标清电视</li>
                        <li><strong>高清视频（Rec.709）：</strong>伽马2.4带线性趾部，HDTV和广播</li>
                        <li><strong>超高清/4K/8K（Rec.2020）：</strong>传统伽马或PQ/HLG用于HDR</li>
                    </ul>
                    
                    <h4>影院中的Log伽马</h4>
                    <p><strong>目的：</strong>捕获最大动态范围</p>
                    
                    <div class="info-box info-box--highlight">
                        <h4>常见Log格式</h4>
                        <ul>
                            <li>ARRI LogC</li>
                            <li>Sony S-Log2/S-Log3</li>
                            <li>Canon C-Log</li>
                            <li>RED Log3G10</li>
                            <li>Panasonic V-Log</li>
                        </ul>
                    </div>
                    
                    <h3>伽马校正工作流程</h3>
                    
                    <div class="workflow-scenarios">
                        <div class="scenario-card">
                            <h4>标准图像处理工作流程</h4>
                            <div class="workflow-steps">
                                <span class="workflow-step">捕获（线性）</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">导入</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">转换到工作空间</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">编辑</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">转换输出伽马</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">导出</span>
                            </div>
                        </div>
                        
                        <div class="scenario-card">
                            <h4>VFX和3D渲染工作流程</h4>
                            <div class="workflow-steps">
                                <span class="workflow-step">在线性中工作</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">线性计算</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">最终输出</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">应用伽马</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">带标签导出</span>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                heading: '高级伽马主题',
                content: `
                    <h3>HDR和伽马</h3>
                    <p>标准伽马不足以处理HDR内容中的极端亮度范围。需要编码0.0001到10,000尼特（或更多）。</p>
                    
                    <h4>HDR传递函数</h4>
                    
                    <div class="pros-cons">
                        <div class="pros-cons__item">
                            <h4>1. PQ（感知量化器）- ST.2084</h4>
                            <p><strong>特性：</strong></p>
                            <ul>
                                <li>绝对亮度编码</li>
                                <li>基于人类视觉系统模型</li>
                                <li>支持高达10,000尼特</li>
                                <li>用于Dolby Vision、HDR10</li>
                            </ul>
                            <p><strong>优点：</strong>出色的高光细节，感知均匀，行业标准</p>
                            <p><strong>缺点：</strong>需要元数据，不向后兼容，实现复杂</p>
                        </div>
                        <div class="pros-cons__item">
                            <h4>2. HLG（混合对数伽马）</h4>
                            <p><strong>特性：</strong></p>
                            <ul>
                                <li>混合方法：伽马 + 对数</li>
                                <li>与SDR向后兼容</li>
                                <li>不需要元数据</li>
                                <li>用于广播HDR</li>
                            </ul>
                            <p><strong>优点：</strong>SDR/HDR兼容性，实现更简单，适合现场广播</p>
                            <p><strong>缺点：</strong>对于优质内容不如PQ优化，峰值亮度有限</p>
                        </div>
                    </div>
                    
                    <h3>伽马和色彩管理</h3>
                    
                    <h4>ICC配置文件中的伽马</h4>
                    <p>ICC配置文件在色调再现曲线（TRC）标签中包含伽马信息：</p>
                    <ul>
                        <li><strong>rTRC：</strong>红色通道色调再现曲线</li>
                        <li><strong>gTRC：</strong>绿色通道色调再现曲线</li>
                        <li><strong>bTRC：</strong>蓝色通道色调再现曲线</li>
                    </ul>
                    
                    <div class="info-box info-box--highlight">
                        <h4>伽马一致性的重要性</h4>
                        <ul>
                            <li>不匹配的伽马导致颜色偏移</li>
                            <li>影响白平衡和色彩准确性</li>
                            <li>对跨设备一致性至关重要</li>
                        </ul>
                    </div>
                    
                    <h3>常见伽马问题和解决方案</h3>
                    
                    <div class="best-practices">
                        <div class="practice-item">
                            <h4>问题1：发白的图像</h4>
                            <p><strong>症状：</strong>图像显得平淡，缺乏对比度</p>
                            <p><strong>原因：</strong>双重伽马编码，错误的显示伽马设置，配置文件不匹配</p>
                            <p><strong>解决方案：</strong>检查重复的伽马操作，校准显示器，验证色彩配置文件设置</p>
                        </div>
                        
                        <div class="practice-item">
                            <h4>问题2：太暗/太亮的图像</h4>
                            <p><strong>症状：</strong>图像始终太暗或太亮</p>
                            <p><strong>原因：</strong>伽马值不正确，显示器校准问题，错误的色彩空间假设</p>
                            <p><strong>解决方案：</strong>验证伽马设置符合标准，正确校准显示器，检查嵌入的配置文件</p>
                        </div>
                        
                        <div class="practice-item">
                            <h4>问题3：渐变中的色带</h4>
                            <p><strong>症状：</strong>平滑渐变中出现可见色带</p>
                            <p><strong>原因：</strong>伽马曲线的位深度不足，过度的伽马校正，压缩伪影</p>
                            <p><strong>解决方案：</strong>使用更高位深度（16位），应用微妙的噪点/抖动，减少压缩</p>
                        </div>
                        
                        <div class="practice-item">
                            <h4>问题4：跨平台不一致</h4>
                            <p><strong>症状：</strong>图像在不同设备上看起来不同</p>
                            <p><strong>原因：</strong>不同的默认伽马设置，缺少或不正确的配置文件，浏览器/操作系统差异</p>
                            <p><strong>解决方案：</strong>嵌入正确的配置文件，在多个平台上测试，使用标准化的工作流程</p>
                        </div>
                    </div>
                `
            },
            {
                heading: '最佳实践和建议',
                content: `
                    <h3>伽马工作流程最佳实践</h3>
                    
                    <div class="decision-framework">
                        <div class="framework-step">
                            <h4>摄影工作流程</h4>
                            <div class="workflow-steps">
                                <span class="workflow-step">捕获RAW</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">导入</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">编辑16位</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">软打样</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">导出sRGB（γ 2.2）</span>
                            </div>
                        </div>
                        
                        <div class="framework-step">
                            <h4>视频工作流程</h4>
                            <div class="workflow-steps">
                                <span class="workflow-step">拍摄Log</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">导入</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">在线性/HDR中调色</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">导出Rec.709或HDR</span>
                            </div>
                        </div>
                        
                        <div class="framework-step">
                            <h4>网页设计工作流程</h4>
                            <div class="workflow-steps">
                                <span class="workflow-step">在sRGB中设计</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">带配置文件导出</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">在多个设备上测试</span>
                            </div>
                        </div>
                        
                        <div class="framework-step">
                            <h4>印刷工作流程</h4>
                            <div class="workflow-steps">
                                <span class="workflow-step">在Adobe RGB中设计</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">软打样CMYK</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">带配置文件导出</span>
                            </div>
                        </div>
                    </div>
                    
                    <h3>伽马校准建议</h3>
                    
                    <div class="tech-specs">
                        <div class="spec-row">
                            <span class="spec-label">专业校准频率：</span>
                            <span class="spec-value">每月</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">严肃爱好者：</span>
                            <span class="spec-value">每季度</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">普通用户：</span>
                            <span class="spec-value>至少每年</span>
                        </div>
                    </div>
                    
                    <h4>推荐的硬件校色仪</h4>
                    <ul>
                        <li>X-Rite i1Display Pro</li>
                        <li>Datacolor SpyderX</li>
                        <li>CalMAN系统</li>
                        <li>Klein K-10（高端）</li>
                    </ul>
                    
                    <h4>目标伽马设置</h4>
                    <div class="usage-guide">
                        <div class="usage-item usage-item--full">
                            <ul class="usage-list">
                                <li><strong>通用：</strong>2.2</li>
                                <li><strong>摄影：</strong>2.2（sRGB）或根据工作流程</li>
                                <li><strong>视频制作：</strong>2.4（Rec.709）或根据标准</li>
                                <li><strong>印刷打样：</strong>1.8-2.2取决于印刷机</li>
                                <li><strong>3D渲染：</strong>线性（1.0）用于计算</li>
                                <li><strong>HDR：</strong>PQ或HLG根据交付格式</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>要避免的常见陷阱</h3>
                    
                    <div class="best-practices">
                        <div class="practice-item">
                            <h4>陷阱1：忽略伽马</h4>
                            <p><strong>问题：</strong>假设所有值都是线性的</p>
                            <p><strong>结果：</strong>计算不正确，质量差</p>
                            <p><strong>解决方案：</strong>在工作流程中始终考虑伽马</p>
                        </div>
                        
                        <div class="practice-item">
                            <h4>陷阱2：双重伽马</h4>
                            <p><strong>问题：</strong>应用两次伽马编码</p>
                            <p><strong>结果：</strong>发白、低对比度图像</p>
                            <p><strong>解决方案：</strong>仔细跟踪伽马操作</p>
                        </div>
                        
                        <div class="practice-item">
                            <h4>陷阱3：应用的伽马不适合</h4>
                            <p><strong>问题：</strong>对网络图像使用线性伽马</p>
                            <p><strong>结果：</strong>图像显得太暗</p>
                            <p><strong>解决方案：</strong>为交付介质使用适当的伽马</p>
                        </div>
                        
                        <div class="practice-item">
                            <h4>陷阱4：不一致的工作流程</h4>
                            <p><strong>问题：</strong>随机混合伽马空间</p>
                            <p><strong>结果：</strong>不可预测的结果</p>
                            <p><strong>解决方案：</strong>标准化并记录工作流程</p>
                        </div>
                    </div>
                `
            },
            {
                heading: '总结与要点回顾',
                content: `
                    <h3>需要记住的核心概念</h3>
                    <ol>
                        <li><strong>伽马匹配感知：</strong>非线性编码匹配人类视觉</li>
                        <li><strong>效率：</strong>伽马优化位深度使用</li>
                        <li><strong>sRGB标准：</strong>~2.2伽马是网络和显示标准</li>
                        <li><strong>计算用线性：</strong>3D/VFX工作使用线性空间</li>
                        <li><strong>校准必不可少：</strong>定期显示器校准至关重要</li>
                        <li><strong>一致性很重要：</strong>在整个工作流程中保持伽马一致性</li>
                    </ol>
                    
                    <h3>获得的实践技能</h3>
                    <ul>
                        <li>理解伽马校正原理和数学</li>
                        <li>为不同应用识别适当的伽马</li>
                        <li>实施伽马感知工作流程</li>
                        <li>排除伽马相关问题</li>
                        <li>校准显示器以获得准确的伽马</li>
                    </ul>
                    
                    <div class="next-steps">
                        <h3>下一步</h3>
                        <div class="action-buttons">
                            <a href="#advance-hdr-color" class="btn btn-primary">继续到HDR色彩</a>
                            <a href="#interaction-visual-example" class="btn btn-secondary">查看视觉示例</a>
                            <a href="#overview" class="btn btn-outline">返回概述</a>
                        </div>
                    </div>
                `
            }
        ]
    },
    'advance-hdr-color': {
        title: '高动态范围（HDR）色彩',
        subtitle: '扩展亮度和色彩以获得沉浸式视觉体验',
        meta: {
            readingTime: '45-50分钟',
            difficulty: '高级',
            type: '理论 + 技术应用'
        },
        sections: [
            {
                heading: '学习目标',
                content: `
                    <p>完成本模块后，你将能够：</p>
                    
                    <h3>理解基础概念</h3>
                    <ul>
                        <li>定义HDR及其相对于SDR（标准动态范围）的优势</li>
                        <li>解释HDR内容创作的技术要求</li>
                        <li>理解HDR与广色域之间的关系</li>
                    </ul>
                    
                    <h3>掌握HDR标准</h3>
                    <ul>
                        <li>识别和比较不同的HDR格式（HDR10、Dolby Vision、HLG、HDR10+）</li>
                        <li>理解元数据要求和实现</li>
                        <li>认识跨平台的兼容性考虑因素</li>
                    </ul>
                    
                    <h3>应用技术知识</h3>
                    <ul>
                        <li>为摄影、视频和图形实施HDR工作流程</li>
                        <li>配置支持HDR的硬件和软件</li>
                        <li>排除常见HDR问题</li>
                    </ul>
                `
            },
            {
                heading: 'HDR色彩简介',
                content: `
                    <h3>什么是HDR？</h3>
                    <p><strong>高动态范围（HDR）</strong>是一项扩展可显示或捕获的亮度（明亮度）和色彩范围的技术，与标准动态范围（SDR）相比，提供更真实和沉浸式的视觉体验。</p>
                    
                    <div class="pros-cons">
                        <div class="pros-cons__item pros-cons__item--cons">
                            <h4>SDR（标准动态范围）</h4>
                            <ul>
                                <li>有限的亮度范围：峰值约100尼特</li>
                                <li>标准色彩色域：sRGB/Rec.709</li>
                                <li>8位或10位色彩深度</li>
                                <li>伽马编码（Rec.709）</li>
                            </ul>
                        </div>
                        <div class="pros-cons__item pros-cons__item--pros">
                            <h4>HDR（高动态范围）</h4>
                            <ul>
                                <li>扩展的亮度范围：峰值1,000-10,000+尼特</li>
                                <li>广色域：DCI-P3、Rec.2020</li>
                                <li>至少10位或12位色彩深度</li>
                                <li>先进的传递函数（PQ、HLG）</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>为什么HDR很重要</h3>
                    
                    <div class="info-box info-box--highlight">
                        <h4>人类视觉系统背景</h4>
                        <p>人眼在单个场景中可以感知大约<strong>20档</strong>的动态范围，远远超过SDR的能力。HDR弥合了这一差距。</p>
                    </div>
                    
                    <h4>动态范围比较</h4>
                    <div class="comparison-table-wrapper">
                        <table class="comparison-table">
                            <thead>
                                <tr>
                                    <th>方面</th>
                                    <th>SDR</th>
                                    <th>HDR</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>峰值亮度</strong></td>
                                    <td>100尼特</td>
                                    <td>1,000-10,000+尼特</td>
                                </tr>
                                <tr>
                                    <td><strong>黑位</strong></td>
                                    <td>~0.1尼特（LCD）</td>
                                    <td>0.0005尼特（OLED）</td>
                                </tr>
                                <tr>
                                    <td><strong>对比度</strong></td>
                                    <td>~1,000:1</td>
                                    <td>1,000,000:1+</td>
                                </tr>
                                <tr>
                                    <td><strong>色彩深度</strong></td>
                                    <td>8位（标准）</td>
                                    <td>至少10位</td>
                                </tr>
                                <tr>
                                    <td><strong>色彩色域</strong></td>
                                    <td>Rec.709/sRGB（可见光谱的~35%）</td>
                                    <td>DCI-P3/Rec.2020（可见光谱的~45-75%）</td>
                                </tr>
                                <tr>
                                    <td><strong>传递函数</strong></td>
                                    <td>伽马（Rec.709）</td>
                                    <td>PQ/HLG</td>
                                </tr>
                                <tr>
                                    <td><strong>元数据</strong></td>
                                    <td>不需要</td>
                                    <td>必不可少</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <figure class="content-figure content-figure--wide">
                      <img src="assets/images/learning/hdr_color/sdr-vs-hdr-comparison.png" alt="SDR和HDR之间的视觉比较，显示亮度范围和色彩差异" loading="lazy" />
                      <figcaption class="content-figure__caption">图1：SDR vs HDR - 视觉和技术比较</figcaption>
                    </figure>
                    
                    <h3>视觉差异</h3>
                    
                    <div class="module-cards">
                        <div class="module-card">
                            <h3>SDR的局限性</h3>
                            <ul>
                                <li>暗场景中黑色被压碎</li>
                                <li>高光过曝</li>
                                <li>色彩饱和度有限</li>
                                <li>外观平淡</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>HDR的优势</h3>
                            <ul>
                                <li>深邃、真实的黑色</li>
                                <li>明亮的高光而不裁剪</li>
                                <li>丰富、鲜艳的色彩</li>
                                <li>三维外观</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            {
                heading: 'HDR标准和格式',
                content: `
                    <h3>HDR10（基础标准）</h3>
                    <p>HDR10是应用最广泛的HDR格式，作为HDR内容和显示器的基线要求。</p>
                    
                    <div class="tech-specs">
                        <div class="spec-row">
                            <span class="spec-label">峰值亮度：</span>
                            <span class="spec-value">高达10,000尼特（理论）</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">色彩深度：</span>
                            <span class="spec-value">至少10位</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">色彩色域：</span>
                            <span class="spec-value">Rec.2020（广色域）</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">传递函数：</span>
                            <span class="spec-value">PQ（感知量化器）</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">元数据：</span>
                            <span class="spec-value">仅静态元数据（SMPTE ST 2086）</span>
                        </div>
                    </div>
                    
                    <div class="pros-cons">
                        <div class="pros-cons__item pros-cons__item--pros">
                            <h4>优点</h4>
                            <ul>
                                <li>通用兼容性</li>
                                <li>免版税</li>
                                <li>所有HDR显示器支持</li>
                                <li>实现简单</li>
                            </ul>
                        </div>
                        <div class="pros-cons__item pros-cons__item--cons">
                            <h4>局限性</h4>
                            <ul>
                                <li>静态元数据（整个内容相同）</li>
                                <li>没有逐场景优化</li>
                                <li>对显示器能力的适应性有限</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>Dolby Vision（高级HDR）</h3>
                    <p>Dolby Vision是由杜比实验室开发的高级HDR格式，具有动态元数据和高级优化功能。</p>
                    
                    <div class="tech-specs">
                        <div class="spec-row">
                            <span class="spec-label">峰值亮度：</span>
                            <span class="spec-value">高达10,000尼特</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">色彩深度：</span>
                            <span class="spec-value">12位（理论），10位（实际）</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">元数据：</span>
                            <span class="spec-value">动态元数据（每场景/帧）</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">许可：</span>
                            <span class="spec-value">专有（需要许可）</span>
                        </div>
                    </div>
                    
                    <div class="info-box info-box--highlight">
                        <h4>动态元数据特性</h4>
                        <ul>
                            <li><strong>逐场景优化：</strong>亮度映射逐场景调整</li>
                            <li><strong>色彩体积适应：</strong>适应显示器能力</li>
                            <li><strong>优势：</strong>为每个显示器提供最佳图像，保持创意意图</li>
                        </ul>
                    </div>
                    
                    <h3>HLG（混合对数伽马）</h3>
                    <p>HLG是由BBC和NHK开发的广播友好型HDR格式，保持与SDR显示器的向后兼容性。</p>
                    
                    <div class="tech-specs">
                        <div class="spec-row">
                            <span class="spec-label">峰值亮度：</span>
                            <span class="spec-value">高达5,000尼特（实际）</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">传递函数：</span>
                            <span class="spec-value">HLG（混合对数伽马）</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">元数据：</span>
                            <span class="spec-value">不需要</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">向后兼容：</span>
                            <span class="spec-value">是（与SDR）</span>
                        </div>
                    </div>
                    
                    <div class="pros-cons">
                        <div class="pros-cons__item pros-cons__item--pros">
                            <h4>优点</h4>
                            <ul>
                                <li>不需要元数据</li>
                                <li>与SDR向后兼容</li>
                                <li>适合现场广播</li>
                                <li>免版税</li>
                            </ul>
                        </div>
                        <div class="pros-cons__item pros-cons__item--cons">
                            <h4>局限性</h4>
                            <ul>
                                <li>不如基于PQ的格式优化</li>
                                <li>峰值亮度优化有限</li>
                                <li>折中解决方案</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>HDR10+（动态元数据替代方案）</h3>
                    <p>HDR10+是一种开放、免版税的HDR格式，在HDR10基础上添加了动态元数据。</p>
                    
                    <div class="tech-specs">
                        <div class="spec-row">
                            <span class="spec-label">峰值亮度：</span>
                            <span class="spec-value">高达10,000尼特</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">元数据：</span>
                            <span class="spec-value">动态元数据（每场景）</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">许可：</span>
                            <span class="spec-value">免版税</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">标准：</span>
                            <span class="spec-value">SMPTE ST 2094</span>
                        </div>
                    </div>
                    
                    <h3>HDR标准比较</h3>
                    
                    <div class="comparison-table-wrapper">
                        <table class="comparison-table">
                            <thead>
                                <tr>
                                    <th>格式</th>
                                    <th>元数据</th>
                                    <th>许可</th>
                                    <th>最适合</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>HDR10</strong></td>
                                    <td>静态</td>
                                    <td>免费</td>
                                    <td>基线HDR，通用兼容性</td>
                                </tr>
                                <tr>
                                    <td><strong>Dolby Vision</strong></td>
                                    <td>动态</td>
                                    <td>付费</td>
                                    <td>高级流媒体、影院</td>
                                </tr>
                                <tr>
                                    <td><strong>HLG</strong></td>
                                    <td>无</td>
                                    <td>免费</td>
                                    <td>现场广播、新闻、体育</td>
                                </tr>
                                <tr>
                                    <td><strong>HDR10+</strong></td>
                                    <td>动态</td>
                                    <td>免费</td>
                                    <td>Amazon Prime、三星设备</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <figure class="content-figure content-figure--float-right">
                      <img src="assets/images/learning/hdr_color/hdr-formats-overview.png" alt="HDR10、Dolby Vision、HLG和HDR10+格式的概览比较" loading="lazy" />
                      <figcaption class="content-figure__caption">图2：HDR格式比较概览</figcaption>
                    </figure>
                `
            },
            {
                heading: 'HDR技术基础',
                content: `
                    <h3>传递函数</h3>
                    
                    <figure class="content-figure content-figure--float-right">
                      <img src="assets/images/learning/hdr_color/pq-hlg-transfer-functions.png" alt="PQ和HLG传递函数曲线的比较" loading="lazy" />
                      <figcaption class="content-figure__caption">图3：PQ vs HLG传递函数</figcaption>
                    </figure>
                    
                    <div class="pros-cons">
                        <div class="pros-cons__item">
                            <h4>感知量化器（PQ）- SMPTE ST 2084</h4>
                            <p><strong>目的：</strong>绝对亮度编码</p>
                            <p><strong>特性：</strong></p>
                            <ul>
                                <li>基于人类视觉系统模型</li>
                                <li>绝对亮度值（尼特）</li>
                                <li>支持0.0001到10,000尼特</li>
                                <li>不与SDR向后兼容</li>
                            </ul>
                            <p><strong>应用：</strong>HDR10、Dolby Vision、HDR10+、流媒体、超高清蓝光</p>
                        </div>
                        <div class="pros-cons__item">
                            <h4>混合对数伽马（HLG）</h4>
                            <p><strong>目的：</strong>广播兼容的HDR</p>
                            <p><strong>特性：</strong></p>
                            <ul>
                                <li>混合伽马 + 对数曲线</li>
                                <li>相对亮度编码</li>
                                <li>与SDR向后兼容</li>
                                <li>不需要元数据</li>
                            </ul>
                            <p><strong>应用：</strong>现场广播、BBC、NHK、卫星/有线分发</p>
                        </div>
                    </div>
                    
                    <h3>HDR元数据</h3>
                    
                    <div class="info-box info-box--additive">
                        <h4>静态元数据（SMPTE ST 2086）</h4>
                        <p><strong>目的：</strong>描述母带显示器特性</p>
                        <p><strong>所需数据：</strong></p>
                        <ul>
                            <li>显示器原色（色度坐标）</li>
                            <li>白点</li>
                            <li>最小/最大亮度</li>
                            <li>最大内容光级（MaxCLL）</li>
                            <li>最大帧平均光级（MaxFALL）</li>
                        </ul>
                        <p><strong>用途：</strong>HDR10基线要求，整个内容的单一设置</p>
                    </div>
                    
                    <div class="info-box info-box--subtractive">
                        <h4>动态元数据（SMPTE ST 2094）</h4>
                        <p><strong>目的：</strong>逐场景或逐帧优化</p>
                        <p><strong>每场景/帧数据：</strong></p>
                        <ul>
                            <li>亮度映射参数</li>
                            <li>色彩体积调整</li>
                            <li>显示器适应指令</li>
                        </ul>
                        <p><strong>类型：</strong>Dolby Vision（专有）、HDR10+（开放标准）</p>
                    </div>
                    
                    <figure class="content-figure content-figure--float-right">
                      <img src="assets/images/learning/hdr_color/hdr-color-gamut-coverage.png" alt="HDR色彩色域覆盖比较，显示sRGB、DCI-P3和Rec.2020" loading="lazy" />
                      <figcaption class="content-figure__caption">图4：HDR色彩色域覆盖比较</figcaption>
                    </figure>
                    
                    <h3>HDR色彩空间</h3>
                    
                    <div class="module-cards">
                        <div class="module-card">
                            <h3>Rec.2020（ITU-R BT.2020）</h3>
                            <p><strong>目的：</strong>超高清电视标准</p>
                            <p><strong>色域覆盖：</strong>可见光谱的~75%</p>
                            <ul>
                                <li>明显大于Rec.709</li>
                                <li>UHD的理论最大值</li>
                                <li>目前还没有显示器能完全再现Rec.2020</li>
                                <li>当前显示器覆盖~60-70%</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>DCI-P3</h3>
                            <p><strong>目的：</strong>数字影院标准</p>
                            <p><strong>色域覆盖：</strong>可见光谱的~45%</p>
                            <ul>
                                <li>比sRGB大~25%</li>
                                <li>适用于当前显示技术</li>
                                <li>用于Apple生态系统（Display P3）</li>
                                <li>专业显示器标准</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>HDR位深度要求</h3>
                    
                    <div class="comparison-table-wrapper">
                        <table class="comparison-table">
                            <thead>
                                <tr>
                                    <th>位深度</th>
                                    <th>每通道级别</th>
                                    <th>HDR适用性</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>8位</strong></td>
                                    <td>256级别</td>
                                    <td>不足以用于HDR，可见色带</td>
                                </tr>
                                <tr>
                                    <td><strong>10位</strong></td>
                                    <td>1,024级别</td>
                                    <td>HDR最低要求，平滑渐变</td>
                                </tr>
                                <tr>
                                    <td><strong>12位</strong></td>
                                    <td>4,096级别</td>
                                    <td>专业影院标准，几乎没有色带</td>
                                </tr>
                                <tr>
                                    <td><strong>16位</strong></td>
                                    <td>65,536级别</td>
                                    <td>母文件标准，最大编辑灵活性</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="info-box info-box--highlight">
                        <h4>为什么需要更高位深度？</h4>
                        <ul>
                            <li>防止扩展亮度范围内的色带</li>
                            <li>更宽亮度范围内的平滑渐变</li>
                            <li>满足PQ曲线精度要求</li>
                            <li>支持广色域</li>
                        </ul>
                    </div>
                `
            },
            {
                heading: 'HDR工作流程',
                content: `
                    <h3>HDR摄影工作流程</h3>
                    
                    <div class="workflow-scenarios">
                        <div class="scenario-card">
                            <h4>捕获方法</h4>
                            
                            <h5>单次RAW曝光</h5>
                            <ul>
                                <li>现代传感器具有足够的动态范围</li>
                                <li>以RAW格式捕获（12位或14位）</li>
                                <li>保留高光和阴影细节</li>
                                <li>后期处理提取HDR</li>
                            </ul>
                            
                            <h5>多曝光包围</h5>
                            <ul>
                                <li>在不同EV设置下捕获3-7次曝光</li>
                                <li>通常-2、0、+2 EV或更多</li>
                                <li>使用自动包围功能</li>
                                <li>后期处理中合并</li>
                            </ul>
                        </div>
                        
                        <div class="scenario-card">
                            <h4>处理工作流程</h4>
                            <div class="workflow-steps">
                                <span class="workflow-step">导入RAW</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">合并曝光</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">32位HDR空间</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">色调映射</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">调整</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">导出HDR</span>
                            </div>
                        </div>
                    </div>
                    
                    <h4>输出格式</h4>
                    <ul>
                        <li><strong>HDR10 JPEG：</strong>带HDR10元数据的10位JPEG（采用有限）</li>
                        <li><strong>HDR10 HEIF：</strong>高效图像格式，更好的压缩</li>
                        <li><strong>OpenEXR：</strong>专业HDR格式，16位或32位浮点</li>
                        <li><strong>Radiance HDR (.hdr)：</strong>32位浮点，开放标准</li>
                    </ul>
                    
                    <h3>HDR视频制作工作流程</h3>
                    
                    <div class="decision-framework">
                        <div class="framework-step">
                            <h4>前期制作规划</h4>
                            <ul>
                                <li>HDR交付要求</li>
                                <li>显示器校准需求</li>
                                <li>监控设置</li>
                                <li>调色工作流程</li>
                                <li>元数据要求</li>
                            </ul>
                        </div>
                        
                        <div class="framework-step">
                            <h4>制作</h4>
                            <ul>
                                <li>Log或RAW录制</li>
                                <li>适当的伽马曲线（S-Log3、LogC等）</li>
                                <li>10位或更高色彩深度</li>
                                <li>广色域（Rec.2020/DCI-P3）</li>
                                <li>适当曝光（保护高光）</li>
                            </ul>
                        </div>
                        
                        <figure class="content-figure content-figure--wide">
                          <img src="assets/images/learning/hdr_color/hdr-video-production-workflow.png" alt="从前期制作到交付的完整HDR视频制作工作流程" loading="lazy" />
                          <figcaption class="content-figure__caption">图5：HDR视频制作工作流程</figcaption>
                        </figure>
                        
                        <div class="framework-step">
                            <h4>后期制作</h4>
                            <div class="workflow-steps">
                                <span class="workflow-step">摄入和组织</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">组装编辑（SDR）</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">HDR调色</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">元数据生成</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">质量控制</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">母带制作和交付</span>
                            </div>
                        </div>
                    </div>
                    
                    <h4>交付格式</h4>
                    
                    <div class="comparison-table-wrapper">
                        <table class="comparison-table">
                            <thead>
                                <tr>
                                    <th>平台</th>
                                    <th>HDR格式</th>
                                    <th>编码</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>超高清蓝光</strong></td>
                                    <td>HDR10强制，Dolby Vision可选</td>
                                    <td>HEVC/H.265，10位4:2:0</td>
                                </tr>
                                <tr>
                                    <td><strong>Netflix</strong></td>
                                    <td>Dolby Vision + HDR10</td>
                                    <td>HEVC</td>
                                </tr>
                                <tr>
                                    <td><strong>Amazon Prime</strong></td>
                                    <td>HDR10 + HDR10+</td>
                                    <td>HEVC</td>
                                </tr>
                                <tr>
                                    <td><strong>Disney+</strong></td>
                                    <td>Dolby Vision + HDR10</td>
                                    <td>HEVC</td>
                                </tr>
                                <tr>
                                    <td><strong>广播</strong></td>
                                    <td>HLG（现场），HDR10（预录）</td>
                                    <td>HEVC</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <h3>HDR图形和设计工作流程</h3>
                    
                    <div class="best-practices">
                        <div class="practice-item">
                            <h4>设计考虑因素</h4>
                            <ul>
                                <li>在广色域色彩空间中工作（DCI-P3/Rec.2020）</li>
                                <li>每通道至少使用16位</li>
                                <li>校准HDR显示器</li>
                                <li>软打样SDR后备</li>
                            </ul>
                        </div>
                        
                        <div class="practice-item">
                            <h4>亮度规划</h4>
                            <ul>
                                <li>为扩展亮度范围做规划</li>
                                <li>战略性地使用高光</li>
                                <li>考虑观看环境</li>
                                <li>在目标显示器上测试</li>
                            </ul>
                        </div>
                        
                        <div class="practice-item">
                            <h4>工作流程步骤</h4>
                            <ol>
                                <li>在广色域空间中设计（DCI-P3或Rec.2020，16位）</li>
                                <li>创建HDR版本（扩展亮度，增强色彩）</li>
                                <li>生成SDR后备（为SDR显示器色调映射）</li>
                                <li>带元数据导出（包括HDR10元数据，嵌入配置文件）</li>
                                <li>在目标显示器上测试（HDR验证，SDR后备测试）</li>
                            </ol>
                        </div>
                    </div>
                `
            },
            {
                heading: '高级主题和最佳实践',
                content: `
                    <figure class="content-figure content-figure--float-right">
                      <img src="assets/images/learning/hdr_color/hdr-display-technologies.png" alt="HDR显示器技术比较：OLED、Mini-LED和MicroLED" loading="lazy" />
                      <figcaption class="content-figure__caption">图6：HDR显示器技术比较</figcaption>
                    </figure>
                    
                    <h3>HDR调色技巧</h3>
                    
                    <div class="module-cards">
                        <div class="module-card">
                            <h3>高光管理</h3>
                            <ul>
                                <li>战略性地使用镜面高光</li>
                                <li>避免裁剪重要细节</li>
                                <li>为观看环境平衡亮度</li>
                                <li>考虑眼睛适应</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>阴影细节</h3>
                            <ul>
                                <li>保留阴影信息</li>
                                <li>避免压碎黑色</li>
                                <li>使用微妙的阴影增强</li>
                                <li>保持对比度平衡</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>HDR中的色彩</h3>
                            <ul>
                                <li>色彩在更高亮度下显得更饱和</li>
                                <li>相应地调整饱和度</li>
                                <li>考虑色彩体积（饱和度vs亮度）</li>
                                <li>在多个显示器上测试</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>HDR和SDR共存</h3>
                    
                    <div class="info-box info-box--highlight">
                        <h4>双重工作流程策略</h4>
                        <ol>
                            <li><strong>首先调校HDR版本</strong>（主要创意意图）</li>
                            <li><strong>从HDR母版生成SDR版本</strong>（色调映射）</li>
                            <li><strong>根据需要调整SDR版本</strong>（保持意图）</li>
                            <li><strong>保持版本之间的一致性</strong></li>
                        </ol>
                    </div>
                    
                    <h4>色调映射方法</h4>
                    <ul>
                        <li><strong>全局色调映射：</strong>应用于整个图像</li>
                        <li><strong>局部色调映射：</strong>按区域调整</li>
                        <li><strong>艺术色调映射：</strong>创意诠释</li>
                    </ul>
                    
                    <h3>常见HDR问题和解决方案</h3>
                    
                    <div class="best-practices">
                        <div class="practice-item">
                            <h4>问题1：裁剪和光晕</h4>
                            <p><strong>症状：</strong>丢失高光细节，明亮物体周围的光晕</p>
                            <p><strong>解决方案：</strong>捕获期间保护高光，使用HDR示波器，应用高光滚降，选择具有更好局部调光的显示器</p>
                        </div>
                        
                        <div class="practice-item">
                            <h4>问题2：外观不一致</h4>
                            <p><strong>症状：</strong>HDR内容在不同显示器上看起来不同</p>
                            <p><strong>解决方案：</strong>校准所有显示器，使用准确的元数据，在多个显示器上测试，提供观看环境指南</p>
                        </div>
                        
                        <div class="practice-item">
                            <h4>问题3：色带和色调分离</h4>
                            <p><strong>症状：</strong>渐变中出现可见色带</p>
                            <p><strong>解决方案：</strong>在整个工作流程中使用10位或更高，必要时应用抖动，减少压缩，为母版使用更高位深度</p>
                        </div>
                        
                        <div class="practice-item">
                            <h4>问题4：元数据问题</h4>
                            <p><strong>症状：</strong>HDR内容无法正确显示</p>
                            <p><strong>解决方案：</strong>用工具验证元数据，包括后备选项，在目标显示器上测试，提供多个交付物</p>
                        </div>
                    </div>
                    
                    <h3>HDR的未来趋势</h3>
                    
                    <div class="module-cards">
                        <div class="module-card">
                            <h3>更高的峰值亮度</h3>
                            <ul>
                                <li>10,000+尼特显示器变得可用</li>
                                <li>更好的高光再现</li>
                                <li>更真实的镜面高光</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>改进的局部调光</h3>
                            <ul>
                                <li>数千个调光区域</li>
                                <li>逐像素控制（MicroLED）</li>
                                <li>减少光晕和光环效应</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>高级元数据</h3>
                            <ul>
                                <li>逐帧动态元数据</li>
                                <li>AI辅助优化</li>
                                <li>个性化观看体验</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>体积HDR</h3>
                            <ul>
                                <li>3D HDR内容</li>
                                <li>光场显示器</li>
                                <li>沉浸式体验</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            {
                heading: '总结与要点回顾',
                content: `
                    <h3>需要记住的核心概念</h3>
                    <ol>
                        <li><strong>HDR扩展动态范围：</strong>14-20+档对比SDR的6档</li>
                        <li><strong>多种HDR格式：</strong>HDR10（基线）、Dolby Vision（高级）、HLG（广播）、HDR10+（动态元数据）</li>
                        <li><strong>传递函数很重要：</strong>PQ用于高级HDR，HLG用于广播兼容性</li>
                        <li><strong>元数据必不可少：</strong>需要静态（HDR10）或动态（Dolby Vision/HDR10+）元数据</li>
                        <li><strong>需要广色域：</strong>DCI-P3或Rec.2020色彩空间</li>
                        <li><strong>至少10位：</strong>更高位深度防止扩展范围中的色带</li>
                        <li><strong>显示器技术至关重要：</strong>OLED、FALD LCD、Mini-LED用于HDR性能</li>
                    </ol>
                    
                    <h3>获得的实践技能</h3>
                    <ul>
                        <li>理解HDR标准及其差异</li>
                        <li>为摄影、视频和图形实施HDR工作流程</li>
                        <li>配置支持HDR的硬件和软件</li>
                        <li>排除常见HDR问题</li>
                        <li>规划全面的HDR生产管道</li>
                    </ul>
                    
                    <div class="next-steps">
                        <h3>下一步</h3>
                        <div class="action-buttons">
                            <a href="#advance-wide-gamut" class="btn btn-primary">继续到广色域</a>
                            <a href="#interaction-visual-example" class="btn btn-secondary">查看视觉示例</a>
                            <a href="#overview" class="btn btn-outline">返回概述</a>
                        </div>
                    </div>
                `
            }
        ]
    },

    'advance-wide-gamut': {
        title: '广色域（WCG）',
        subtitle: '扩展可再现色彩范围以获得更丰富的视觉体验',
        meta: {
            readingTime: '40-45分钟',
            difficulty: '高级',
            type: '理论 + 技术应用'
        },
        sections: [
            {
                heading: '学习目标',
                content: `
                    <p>完成本模块后，你将能够：</p>
                    
                    <h3>理解基础概念</h3>
                    <ul>
                        <li>定义广色域及其在现代成像中的重要性</li>
                        <li>解释色彩色域与人类视觉之间的关系</li>
                        <li>理解从标准色域到广色域的演变</li>
                    </ul>
                    
                    <h3>掌握色彩空间标准</h3>
                    <ul>
                        <li>识别和比较不同的广色域色彩空间（DCI-P3、Rec.2020、Adobe RGB、ProPhoto RGB）</li>
                        <li>理解色域映射和色彩体积概念</li>
                        <li>认识行业标准及其应用</li>
                    </ul>
                    
                    <h3>应用技术知识</h3>
                    <ul>
                        <li>为不同媒体实施广色域工作流程</li>
                        <li>配置硬件和软件以支持广色域</li>
                        <li>排除常见广色域问题</li>
                    </ul>
                `
            },
            {
                heading: '广色域简介',
                content: `
                    <h3>什么是广色域？</h3>
                    <p><strong>广色域（WCG）</strong>指与传统标准色域系统（如sRGB或Rec.709）相比，可以再现显著更大色彩范围的色彩空间和显示技术。</p>
                    
                    <div class="pros-cons">
                        <div class="pros-cons__item pros-cons__item--cons">
                            <h4>标准色域（sRGB/Rec.709）</h4>
                            <ul>
                                <li>覆盖可见光谱的约35%</li>
                                <li>1996年为CRT显示器开发</li>
                                <li>受当时技术限制</li>
                                <li>足以满足基本色彩再现</li>
                            </ul>
                        </div>
                        <div class="pros-cons__item pros-cons__item--pros">
                            <h4>广色域</h4>
                            <ul>
                                <li>覆盖可见光谱的45-75%+</li>
                                <li>由现代显示技术实现</li>
                                <li>更接近人类视觉能力</li>
                                <li>更丰富、更饱和的色彩</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>为什么广色域很重要</h3>
                    
                    <div class="info-box info-box--highlight">
                        <h4>人类视觉系统背景</h4>
                        <p>人眼可以区分大约<strong>1000万种颜色</strong>。标准色域系统仅捕获这一能力的一小部分，而广色域系统更接近我们的自然感知。</p>
                    </div>
                    
                    <h4>色域覆盖比较</h4>
                    <div class="comparison-table-wrapper">
                        <table class="comparison-table">
                            <thead>
                                <tr>
                                    <th>色彩空间</th>
                                    <th>可见光谱覆盖</th>
                                    <th>相对大小</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>sRGB/Rec.709</strong></td>
                                    <td>~35%</td>
                                    <td>基线（100%）</td>
                                </tr>
                                <tr>
                                    <td><strong>Adobe RGB</strong></td>
                                    <td>~50%</td>
                                    <td>sRGB的~143%</td>
                                </tr>
                                <tr>
                                    <td><strong>DCI-P3</strong></td>
                                    <td>~45%</td>
                                    <td>sRGB的~128%</td>
                                </tr>
                                <tr>
                                    <td><strong>Rec.2020</strong></td>
                                    <td>~75%</td>
                                    <td>sRGB的~214%</td>
                                </tr>
                                <tr>
                                    <td><strong>ProPhoto RGB</strong></td>
                                    <td>~90%</td>
                                    <td>sRGB的~257%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <h3>色彩色域标准的演变</h3>
                    
                    <div class="timeline">
                        <div class="timeline-item">
                            <h4>1931：CIE 1931色度图</h4>
                            <p>人类色彩感知的第一个数学模型，定义了可见光谱边界</p>
                        </div>
                        
                        <div class="timeline-item">
                            <h4>1996：sRGB标准</h4>
                            <p>由HP和Microsoft为CRT显示器开发，成为通用网络标准</p>
                        </div>
                        
                        <div class="timeline-item">
                            <h4>1998：Adobe RGB</h4>
                            <p>为专业摄影开发，比sRGB更宽的色域，更适合印刷工作流程</p>
                        </div>
                        
                        <div class="timeline-item">
                            <h4>2005：DCI-P3</h4>
                            <p>数字影院标准，被Apple和显示器制造商采用</p>
                        </div>
                        
                        <div class="timeline-item">
                            <h4>2012：Rec.2020</h4>
                            <p>超高清电视标准，极宽色域，面向未来的标准</p>
                        </div>
                        
                        <div class="timeline-item">
                            <h4>2015+：广色域显示器普及</h4>
                            <p>具有DCI-P3的消费级显示器、HDR显示器、具有广色域的移动设备</p>
                        </div>
                    </div>
                `
            },
            {
                heading: '广色域色彩空间',
                content: `
                    <h3>DCI-P3（数字影院倡议 - P3）</h3>
                    <p>DCI-P3是由数字影院倡议为数字影院投影开发的广色域标准。</p>
                    
                    <div class="tech-specs">
                        <div class="spec-row">
                            <span class="spec-label">色域覆盖：</span>
                            <span class="spec-value">可见光谱的~45%（比sRGB大~25%）</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">白点：</span>
                            <span class="spec-value">DCI白（~6300K，略带绿色）</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">传递函数：</span>
                            <span class="spec-value">伽马2.6（影院），PQ/HLG（HDR）</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">应用：</span>
                            <span class="spec-value">数字影院、高端消费级显示器、移动设备</span>
                        </div>
                    </div>
                    
                    <div class="pros-cons">
                        <div class="pros-cons__item pros-cons__item--pros">
                            <h4>优点</h4>
                            <ul>
                                <li>色域大小和实际可实现性的良好平衡</li>
                                <li>现代显示技术支持良好</li>
                                <li>适合影院和消费级应用</li>
                                <li>行业采用率不断增长</li>
                            </ul>
                        </div>
                        <div class="pros-cons__item pros-cons__item--cons">
                            <h4>局限性</h4>
                            <ul>
                                <li>仍然明显小于Rec.2020</li>
                                <li>白点与标准D65不同</li>
                                <li>不是通用标准（sRGB仍主导网络）</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>Rec.2020（ITU-R BT.2020）</h3>
                    <p>Rec.2020是ITU为超高清电视（UHDTV）定义的超宽色域标准。</p>
                    
                    <div class="tech-specs">
                        <div class="spec-row">
                            <span class="spec-label">色域覆盖：</span>
                            <span class="spec-value">可见光谱的~75%（比Rec.709大~70%）</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">白点：</span>
                            <span class="spec-value">D65（6500K）</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">传递函数：</span>
                            <span class="spec-value">PQ或HLG用于HDR</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">现实检查：</span>
                            <span class="spec-value">目前还没有消费级显示器能完全实现Rec.2020</span>
                        </div>
                    </div>
                    
                    <div class="info-box info-box--highlight">
                        <h4>当前显示器能力</h4>
                        <ul>
                            <li><strong>高端OLED：</strong>Rec.2020的~60-65%</li>
                            <li><strong>高端LCD/Mini-LED：</strong>Rec.2020的~65-70%</li>
                            <li><strong>专业参考级：</strong>Rec.2020的~70-75%</li>
                        </ul>
                    </div>
                    
                    <h3>Adobe RGB（1998）</h3>
                    <p>Adobe RGB是Adobe Systems于1998年为专业摄影和印刷工作流程开发的广色域色彩空间。</p>
                    
                    <div class="tech-specs">
                        <div class="spec-row">
                            <span class="spec-label">色域覆盖：</span>
                            <span class="spec-value">可见光谱的~50%（比sRGB大~35%）</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">白点：</span>
                            <span class="spec-value">D65（6500K）</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">传递函数：</span>
                            <span class="spec-value">伽马2.2（分段，类似于sRGB）</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">最适合：</span>
                            <span class="spec-value">专业摄影、印刷制作</span>
                        </div>
                    </div>
                    
                    <h3>ProPhoto RGB（ROMM RGB）</h3>
                    <p>ProPhoto RGB是Kodak为摄影应用程序开发的极宽色域色彩空间。</p>
                    
                    <div class="tech-specs">
                        <div class="spec-row">
                            <span class="spec-label">色域覆盖：</span>
                            <span class="spec-value">可见光谱的~90%</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">白点：</span>
                            <span class="spec-value">D50（5000K）</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">独特特性：</span>
                            <span class="spec-value">包括虚色（可见光谱外）</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">所需位深度：</span>
                            <span class="spec-value">强制16位</span>
                        </div>
                    </div>
                    
                    <div class="info-box info-box--additive">
                        <h4>虚色</h4>
                        <p>ProPhoto RGB扩展到可见光谱之外。蓝色原色是"虚色"（无法物理再现）。这为色彩操作提供了余量，并防止编辑期间的裁剪。</p>
                    </div>
                    
                    <h3>Display P3（Apple P3）</h3>
                    <p>Display P3是Apple对DCI-P3色彩空间的实现，具有D65白点，用于Apple设备。</p>
                    
                    <div class="tech-specs">
                        <div class="spec-row">
                            <span class="spec-label">色度：</span>
                            <span class="spec-value">与DCI-P3相同</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">白点：</span>
                            <span class="spec-value">D65（6500K）- 与DCI-P3不同</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">传递函数：</span>
                            <span class="spec-value">HDR用PQ，SDR用伽马2.2</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">生态系统：</span>
                            <span class="spec-value">iPhone、iPad、Mac、Apple TV</span>
                        </div>
                    </div>
                    
                    <h3>广色域色彩空间比较</h3>
                    
                    <div class="comparison-table-wrapper">
                        <table class="comparison-table">
                            <thead>
                                <tr>
                                    <th>色彩空间</th>
                                    <th>覆盖</th>
                                    <th>主要用途</th>
                                    <th>位深度</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>DCI-P3</strong></td>
                                    <td>~45%</td>
                                    <td>影院、消费级显示器</td>
                                    <td>10位</td>
                                </tr>
                                <tr>
                                    <td><strong>Rec.2020</strong></td>
                                    <td>~75%</td>
                                    <td>UHD电视、面向未来</td>
                                    <td>10-12位</td>
                                </tr>
                                <tr>
                                    <td><strong>Adobe RGB</strong></td>
                                    <td>~50%</td>
                                    <td>摄影、印刷</td>
                                    <td>8-16位</td>
                                </tr>
                                <tr>
                                    <td><strong>ProPhoto RGB</strong></td>
                                    <td>~90%</td>
                                    <td>编辑、归档</td>
                                    <td>需要16位</td>
                                </tr>
                                <tr>
                                    <td><strong>Display P3</strong></td>
                                    <td>~45%</td>
                                    <td>Apple生态系统</td>
                                    <td>10位</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            {
                heading: '广色域技术基础',
                content: `
                    <h3>理解色彩体积</h3>
                    <p><strong>色彩体积</strong>将色彩色域的概念扩展到三维，结合亮度（ luminance ）和色度。</p>
                    
                    <div class="pros-cons">
                        <div class="pros-cons__item pros-cons__item--cons">
                            <h4>传统色域（2D）</h4>
                            <ul>
                                <li>仅考虑色度（色调和饱和度）</li>
                                <li>忽略亮度变化</li>
                                <li>HDR的不完整表示</li>
                            </ul>
                        </div>
                        <div class="pros-cons__item pros-cons__item--pros">
                            <h4>色彩体积（3D）</h4>
                            <ul>
                                <li>色度 + 亮度</li>
                                <li>HDR工作流程必不可少</li>
                                <li>考虑依赖于亮度的色彩偏移</li>
                                <li>更准确地表示显示器能力</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="info-box info-box--highlight">
                        <h4>色彩体积可视化</h4>
                        <p>想象一个3D形状：</p>
                        <ul>
                            <li><strong>X轴：</strong>红-绿</li>
                            <li><strong>Y轴：</strong>蓝-黄</li>
                            <li><strong>Z轴：</strong>亮度（0-10,000尼特）</li>
                        </ul>
                        <p>特性：在更高亮度下更宽（对于自发光显示器），在阴影中更窄，不同显示技术的形状不同</p>
                    </div>
                    
                    <h3>色域映射策略</h3>
                    <p>色域映射是将色彩从源色彩空间转换到目标色彩空间的过程，当源包含超出目标色域的色彩时。</p>
                    
                    <div class="module-cards">
                        <div class="module-card">
                            <h3>1. 感知映射</h3>
                            <p><strong>目的：</strong>保持整体色彩关系</p>
                            <p><strong>方法：</strong>按比例压缩整个色域</p>
                            <p><strong>最适合：</strong>摄影图像、连续色调</p>
                            <ul>
                                <li>保持视觉和谐</li>
                                <li>平滑色彩过渡</li>
                                <li>所有色彩略微偏移</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>2. 相对色度</h3>
                            <p><strong>目的：</strong>在可能的情况下精确匹配色彩</p>
                            <p><strong>方法：</strong>将色域外色彩裁剪到最近的可再现色彩</p>
                            <p><strong>最适合：</strong>图形、标志、专色</p>
                            <ul>
                                <li>精确保留色域内色彩</li>
                                <li>色域外映射到边界</li>
                                <li>白点适应于目标</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>3. 绝对色度</h3>
                            <p><strong>目的：</strong>模拟精确的色彩外观</p>
                            <p><strong>方法：</strong>与相对类似但保持白点</p>
                            <p><strong>最适合：</strong>打样、模拟</p>
                            <ul>
                                <li>保持精确白点</li>
                                <li>如果白点不同可能导致色偏</li>
                                <li>用于合同打样</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>4. 饱和度映射</h3>
                            <p><strong>目的：</strong>最大化色彩鲜艳度</p>
                            <p><strong>方法：</strong>优先饱和色彩</p>
                            <p><strong>最适合：</strong>图表、图解、演示文稿</p>
                            <ul>
                                <li>忽略色彩准确性</li>
                                <li>最大化饱和度</li>
                                <li>不适合摄影</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>广色域和位深度</h3>
                    
                    <div class="info-box info-box--highlight">
                        <h4>色域和位深度之间的关系</h4>
                        <p><strong>更宽的色域 = 更多要表示的色彩 → 需要更高位深度</strong></p>
                        <p>原因：更宽的色域有更大的色彩空间，相同的位深度意味着色彩之间的步长更少，可见色带的风险增加</p>
                    </div>
                    
                    <div class="comparison-table-wrapper">
                        <table class="comparison-table">
                            <thead>
                                <tr>
                                    <th>色彩空间</th>
                                    <th>最低位深度</th>
                                    <th>推荐位深度</th>
                                    <th>备注</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>sRGB</strong></td>
                                    <td>8位</td>
                                    <td>8位</td>
                                    <td>色带很少可见</td>
                                </tr>
                                <tr>
                                    <td><strong>DCI-P3</strong></td>
                                    <td>8位 + FRC</td>
                                    <td>10位</td>
                                    <td>8位时色带比sRGB更可见</td>
                                </tr>
                                <tr>
                                    <td><strong>Rec.2020</strong></td>
                                    <td>10位</td>
                                    <td>12位</td>
                                    <td>8位不足（严重色带）</td>
                                </tr>
                                <tr>
                                    <td><strong>ProPhoto RGB</strong></td>
                                    <td>16位</td>
                                    <td>16位</td>
                                    <td>8位导致严重色带</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <h3>广色域元数据和色彩管理</h3>
                    
                    <div class="info-box info-box--additive">
                        <h4>ICC配置文件要求</h4>
                        <p>广色域配置文件必须包括：</p>
                        <ul>
                            <li>准确的色度坐标</li>
                            <li>白点规格</li>
                            <li>传递函数（伽马/PQ/HLG）</li>
                            <li>渲染意图信息</li>
                            <li>黑点补偿数据</li>
                        </ul>
                    </div>
                    
                    <div class="info-box info-box--subtractive">
                        <h4>广色域内容的基本元数据</h4>
                        <ul>
                            <li>色彩原色（色度坐标）</li>
                            <li>白点</li>
                            <li>传递函数</li>
                            <li>矩阵系数</li>
                            <li>色彩范围（全/有限）</li>
                            <li>母带显示器特性（用于HDR）</li>
                        </ul>
                    </div>
                `
            },
            {
                heading: '广色域工作流程',
                content: `
                    <h3>使用广色域的摄影工作流程</h3>
                    
                    <div class="workflow-scenarios">
                        <div class="scenario-card">
                            <h4>捕获设置</h4>
                            <ul>
                                <li>RAW格式（至少12位或14位）</li>
                                <li>Adobe RGB或ProPhoto RGB色彩空间</li>
                                <li>适当的白平衡</li>
                                <li>避免相机内处理</li>
                            </ul>
                        </div>
                        
                        <div class="scenario-card">
                            <h4>处理工作流程</h4>
                            <div class="workflow-steps">
                                <span class="workflow-step">导入RAW</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">初始调整</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">色彩编辑（16位）</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">输出准备</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">带配置文件导出</span>
                            </div>
                        </div>
                    </div>
                    
                    <h4>输出策略</h4>
                    <ul>
                        <li><strong>网络交付：</strong>转换为sRGB，8位JPEG/PNG，嵌入sRGB配置文件</li>
                        <li><strong>印刷交付：</strong>转换为Adobe RGB或打印机配置文件，16位TIFF，软打样</li>
                        <li><strong>HDR显示器：</strong>保持广色域（DCI-P3/Rec.2020），10位+，包括HDR元数据</li>
                    </ul>
                    
                    <h3>使用广色域的视频制作工作流程</h3>
                    
                    <div class="decision-framework">
                        <div class="framework-step">
                            <h4>前期制作规划</h4>
                            <ul>
                                <li>交付色彩空间要求</li>
                                <li>显示器校准需求</li>
                                <li>监控设置</li>
                                <li>色彩管理工作流程</li>
                                <li>元数据要求</li>
                            </ul>
                        </div>
                        
                        <div class="framework-step">
                            <h4>制作</h4>
                            <ul>
                                <li>Log或RAW录制</li>
                                <li>广色域色彩空间（Rec.2020/DCI-P3）</li>
                                <li>适当的伽马/对数曲线</li>
                                <li>10位或更高色彩深度</li>
                                <li>适当的白平衡和曝光</li>
                            </ul>
                        </div>
                        
                        <div class="framework-step">
                            <h4>后期制作</h4>
                            <div class="workflow-steps">
                                <span class="workflow-step">摄入和组织</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">组装编辑</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">调色</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">色域映射</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">质量控制</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">母带制作和交付</span>
                            </div>
                        </div>
                    </div>
                    
                    <h4>交付格式</h4>
                    
                    <div class="comparison-table-wrapper">
                        <table class="comparison-table">
                            <thead>
                                <tr>
                                    <th>平台</th>
                                    <th>色彩空间</th>
                                    <th>HDR格式</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>超高清蓝光</strong></td>
                                    <td>Rec.2020</td>
                                    <td>HDR10或Dolby Vision</td>
                                </tr>
                                <tr>
                                    <td><strong>Netflix</strong></td>
                                    <td>Rec.2020</td>
                                    <td>Dolby Vision + HDR10</td>
                                </tr>
                                <tr>
                                    <td><strong>Amazon Prime</strong></td>
                                    <td>Rec.2020</td>
                                    <td>HDR10 + HDR10+</td>
                                </tr>
                                <tr>
                                    <td><strong>Disney+</strong></td>
                                    <td>Rec.2020</td>
                                    <td>Dolby Vision + HDR10</td>
                                </tr>
                                <tr>
                                    <td><strong>Apple TV+</strong></td>
                                    <td>DCI-P3/Rec.2020</td>
                                    <td>Dolby Vision</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <h3>平面设计和数字艺术工作流程</h3>
                    
                    <div class="best-practices">
                        <div class="practice-item">
                            <h4>设置工作环境</h4>
                            <ul>
                                <li>校准广色域显示器</li>
                                <li>设置色彩管理软件</li>
                                <li>选择适当的工作空间</li>
                                <li>配置色彩设置</li>
                            </ul>
                        </div>
                        
                        <div class="practice-item">
                            <h4>在广色域空间中创建</h4>
                            <ul>
                                <li><strong>DCI-P3：</strong>用于基于屏幕的工作</li>
                                <li><strong>Adobe RGB：</strong>用于以印刷为主的工作</li>
                                <li><strong>ProPhoto RGB：</strong>用于最大灵活性</li>
                                <li>每通道至少16位</li>
                            </ul>
                        </div>
                        
                        <div class="practice-item">
                            <h4>交付策略</h4>
                            <ul>
                                <li><strong>网络：</strong>转换为sRGB以获得广泛的兼容性，考虑现代浏览器的广色域CSS</li>
                                <li><strong>印刷：</strong>转换为CMYK或特定于打印机的配置文件，最终输出前软打样</li>
                                <li><strong>屏幕显示：</strong>保持广色域（DCI-P3/Rec.2020），包括ICC配置文件，考虑HDR交付</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            {
                heading: '高级主题和最佳实践',
                content: `
                    <h3>广色域和HDR集成</h3>
                    
                    <div class="info-box info-box--highlight">
                        <h4>协同关系</h4>
                        <p><strong>HDR + 广色域 = 最大视觉冲击</strong></p>
                        <p>为什么它们一起工作：</p>
                        <ul>
                            <li>HDR扩展亮度范围</li>
                            <li>广色域扩展色彩范围</li>
                            <li>组合效果是倍增的</li>
                            <li>更真实和沉浸式的体验</li>
                        </ul>
                    </div>
                    
                    <h4>HDR中的色彩体积</h4>
                    <ul>
                        <li>色彩在更高亮度下显得更饱和</li>
                        <li>显示技术影响色彩体积形状</li>
                        <li>色域映射必须考虑亮度</li>
                        <li>创意调色考虑两个维度</li>
                    </ul>
                    
                    <h3>跨平台广色域交付</h3>
                    
                    <div class="best-practices">
                        <div class="practice-item">
                            <h4>挑战：平台碎片化</h4>
                            <p>不同设备支持不同的色域，网络浏览器支持程度不同，移动设备差异很大，遗留系统仍使用sRGB</p>
                        </div>
                        
                        <div class="practice-item">
                            <h4>解决方案：渐进增强</h4>
                            <ol>
                                <li><strong>sRGB基础版本</strong>（通用兼容性）</li>
                                <li><strong>DCI-P3增强版本</strong>（现代显示器）</li>
                                <li><strong>Rec.2020高级版本</strong>（HDR显示器）</li>
                                <li>使用CSS媒体查询或设备检测</li>
                            </ol>
                        </div>
                        
                        <div class="practice-item">
                            <h4>网络实现</h4>
                            <ul>
                                <li><strong>CSS color()函数：</strong>带有色彩空间规格</li>
                                <li><strong>@media (color-gamut: p3)：</strong>用于条件样式</li>
                                <li><strong>image-set()：</strong>用于多个图像版本</li>
                                <li>始终提供sRGB后备</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>常见广色域问题和解决方案</h3>
                    
                    <div class="best-practices">
                        <div class="practice-item">
                            <h4>问题1：过饱和外观</h4>
                            <p><strong>症状：</strong>色彩显得不自然地生动或卡通化</p>
                            <p><strong>解决方案：</strong>应用适当的色域映射，使用感知渲染意图，正确校准显示器，在多个显示器上查看</p>
                        </div>
                        
                        <div class="practice-item">
                            <h4>问题2：跨设备的色彩偏移</h4>
                            <p><strong>症状：</strong>色彩在不同显示器上看起来不同</p>
                            <p><strong>解决方案：</strong>嵌入正确的ICC配置文件，使用色彩管理工作流程，校准所有显示器，在目标显示器上软打样</p>
                        </div>
                        
                        <div class="practice-item">
                            <h4>问题3：裁剪和色域错误</h4>
                            <p><strong>症状：</strong>丢失色彩细节，色调分离</p>
                            <p><strong>解决方案：</strong>在比交付目标更宽的色域中工作，使用更高位深度（编辑用16位），应用适当的色域映射，监控色域警告</p>
                        </div>
                        
                        <div class="practice-item">
                            <h4>问题4：工作流程复杂性</h4>
                            <p><strong>症状：</strong>关于色彩空间的困惑，转换中的错误</p>
                            <p><strong>解决方案：</strong>标准化工作流程色彩空间，记录色彩空间决策，使用色彩管理软件，培训团队色彩管理</p>
                        </div>
                    </div>
                    
                    <h3>广色域的未来趋势</h3>
                    
                    <div class="module-cards">
                        <div class="module-card">
                            <h3>显示技术</h3>
                            <ul>
                                <li>MicroLED接近消费市场</li>
                                <li>量子点OLED（QD-OLED）混合技术</li>
                                <li>钙钛矿显示器（新兴）</li>
                                <li>提高量子点效率</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>色彩标准</h3>
                            <ul>
                                <li>Rec.2020变得更可实现</li>
                                <li>AR/VR的新色彩空间</li>
                                <li>光谱色彩再现</li>
                                <li>超越三刺激色彩模型</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>内容创作</h3>
                            <ul>
                                <li>AI辅助调色</li>
                                <li>自动色域映射</li>
                                <li>个性化色彩体验</li>
                                <li>实时广色域处理</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>行业发展</h3>
                            <ul>
                                <li>更好的跨平台兼容性</li>
                                <li>通用色彩管理</li>
                                <li>更低成本的广色域显示器</li>
                                <li>更多原生广色域内容</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            {
                heading: '总结与要点回顾',
                content: `
                    <h3>需要记住的核心概念</h3>
                    <ol>
                        <li><strong>广色域扩展色彩范围：</strong>可见光谱的45-75%+对比sRGB的35%</li>
                        <li><strong>多种广色域标准：</strong>DCI-P3（影院/消费级）、Rec.2020（UHD未来）、Adobe RGB（摄影/印刷）、ProPhoto RGB（编辑/归档）</li>
                        <li><strong>色彩体积是3D：</strong>结合色域 + 亮度，对HDR至关重要</li>
                        <li><strong>需要更高位深度：</strong>广色域至少10位，编辑用16位</li>
                        <li><strong>色域映射至关重要：</strong>色彩空间之间的转换需要仔细的策略</li>
                        <li><strong>显示技术很重要：</strong>量子点、OLED、Mini-LED实现广色域</li>
                        <li><strong>工作流程一致性必不可少：</strong>在整个管道中保持色彩管理</li>
                    </ol>
                    
                    <h3>获得的实践技能</h3>
                    <ul>
                        <li>理解广色域色彩空间及其差异</li>
                        <li>为摄影、视频和图形实施广色域工作流程</li>
                        <li>配置硬件和软件以支持广色域</li>
                        <li>排除常见广色域问题</li>
                        <li>规划全面的广色域生产管道</li>
                    </ul>
                    
                    <div class="next-steps">
                        <h3>下一步</h3>
                        <div class="action-buttons">
                            <a href="#advance-color-management" class="btn btn-primary">继续到色彩管理</a>
                            <a href="#interaction-visual-example" class="btn btn-secondary">查看视觉示例</a>
                            <a href="#overview" class="btn btn-outline">返回概述</a>
                        </div>
                    </div>
                `
            }
        ]
    },

    'advance-color-management': {
        title: '色彩管理系统与工作流程',
        subtitle: '确保跨设备和介质的一致且可预测的色彩再现',
        meta: {
            readingTime: '50-55分钟',
            difficulty: '高级',
            type: '理论 + 技术应用'
        },
        sections: [
            {
                heading: '学习目标',
                content: `
                    <p>完成本模块后，你将能够：</p>
                    
                    <h3>理解基础概念</h3>
                    <ul>
                        <li>定义色彩管理及其在数字工作流程中的重要性</li>
                        <li>解释色彩管理系统（CMS）的组成部分</li>
                        <li>理解校准和特征化之间的区别</li>
                    </ul>
                    
                    <h3>掌握ICC配置文件技术</h3>
                    <ul>
                        <li>识别和理解不同类型的ICC配置文件</li>
                        <li>解释配置文件连接空间（PCS）及其作用</li>
                        <li>理解渲染意图及其应用</li>
                    </ul>
                    
                    <h3>应用技术知识</h3>
                    <ul>
                        <li>跨不同媒体实施色彩管理工作流程</li>
                        <li>在专业软件中配置色彩管理设置</li>
                        <li>排除常见色彩管理问题</li>
                    </ul>
                `
            },
            {
                heading: '色彩管理简介',
                content: `
                    <h3>什么是色彩管理？</h3>
                    <p><strong>色彩管理</strong>是一种系统方法，用于在整个数字工作流程中确保跨不同设备、介质和观看条件的一致且可预测的色彩再现。</p>
                    
                    <div class="info-box info-box--highlight">
                        <h4>核心目的</h4>
                        <p>色彩管理解决了一个根本挑战：由于独特的物理特性和限制，不同设备"看到"和"再现"色彩的方式不同。</p>
                    </div>
                    
                    <h3>色彩管理问题</h3>
                    
                    <div class="pros-cons">
                        <div class="pros-cons__item pros-cons__item--cons">
                            <h4>没有色彩管理</h4>
                            <div class="workflow-steps">
                                <span class="workflow-step">相机</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">不同的RGB</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">显示器</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">打印机</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">不同的结果</span>
                            </div>
                            <p><strong>结果：</strong>不一致、不可预测的色彩</p>
                        </div>
                        <div class="pros-cons__item pros-cons__item--pros">
                            <h4>有色彩管理</h4>
                            <div class="workflow-steps">
                                <span class="workflow-step">相机</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">ICC配置文件</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">PCS</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">显示器/打印机</span>
                            </div>
                            <p><strong>结果：</strong>一致、可预测的色彩</p>
                        </div>
                    </div>
                    
                    <h3>为什么色彩管理很重要</h3>
                    
                    <div class="module-cards">
                        <div class="module-card">
                            <h3>业务影响</h3>
                            <ul>
                                <li><strong>品牌一致性：</strong>标志和品牌色彩在任何地方都显示相同</li>
                                <li><strong>降低成本：</strong>减少重印和修正</li>
                                <li><strong>客户满意度：</strong>交付物符合期望</li>
                                <li><strong>专业声誉：</strong>可靠、可预测的结果</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>技术优势</h3>
                            <ul>
                                <li>跨不同显示器和显示设备的一致性</li>
                                <li>各种输出设备（打印机、印刷机）</li>
                                <li>多种观看环境</li>
                                <li>跨平台工作流程</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>创意优势</h3>
                            <ul>
                                <li>对色彩决策的信心</li>
                                <li>能够使用广色域色彩空间</li>
                                <li>更好地利用设备能力</li>
                                <li>增强的创意控制</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>历史背景和演变</h3>
                    
                    <div class="timeline">
                        <div class="timeline-item">
                            <h4>1990年代之前：早期阶段</h4>
                            <p>没有标准化方法，设备依赖的工作流程，试错色彩匹配，昂贵且耗时</p>
                        </div>
                        
                        <div class="timeline-item">
                            <h4>1993：国际色彩联盟（ICC）成立</h4>
                            <p>Adobe、Agfa、Apple、Kodak、Microsoft、Silicon Graphics、Sun - 目标：创建开放、跨平台的色彩管理标准</p>
                        </div>
                        
                        <div class="timeline-item">
                            <h4>1995：ICC配置文件格式规范v3.0</h4>
                            <p>第一个广泛采用的标准，跨平台兼容性，行业广泛采用</p>
                        </div>
                        
                        <div class="timeline-item">
                            <h4>2001：ICC配置文件格式规范v4.0</h4>
                            <p>增强功能，更好地支持广色域，提高精度</p>
                        </div>
                        
                        <div class="timeline-item">
                            <h4>2010+：现代发展</h4>
                            <p>基于云的色彩管理，AI辅助色彩匹配，移动设备色彩管理，HDR和广色域支持</p>
                        </div>
                    </div>
                `
            },
            {
                heading: '色彩管理系统架构',
                content: `
                    <h3>色彩管理系统的组成部分</h3>
                    
                    <div class="module-cards">
                        <div class="module-card">
                            <h3>1. 校准</h3>
                            <p><strong>定义：</strong>将设备调整到已知的标准化状态</p>
                            <p><strong>目的：</strong></p>
                            <ul>
                                <li>建立基线性能</li>
                                <li>确保设备在规格范围内运行</li>
                                <li>为特征化创建稳定基础</li>
                            </ul>
                            <p><strong>示例：</strong></p>
                            <ul>
                                <li>显示器：设置白点、伽马、亮度</li>
                                <li>打印机：线性化墨水输出</li>
                                <li>扫描仪：调整光源和传感器</li>
                            </ul>
                            <div class="info-box info-box--additive">
                                <p><strong>关键点：</strong>校准使设备保持一致，不一定准确</p>
                            </div>
                        </div>
                        
                        <div class="module-card">
                            <h3>2. 特征化（Profiling）</h3>
                            <p><strong>定义：</strong>测量和记录设备的实际色彩行为</p>
                            <p><strong>目的：</strong></p>
                            <ul>
                                <li>创建设备特定的ICC配置文件</li>
                                <li>将设备色彩空间映射到配置文件连接空间（PCS）</li>
                                <li>记录设备能力和限制</li>
                            </ul>
                            <p><strong>流程：</strong></p>
                            <ol>
                                <li>用色度计/分光光度计测量设备输出</li>
                                <li>创建查找表（LUT）或参数曲线</li>
                                <li>生成ICC配置文件</li>
                            </ol>
                            <div class="info-box info-box--subtractive">
                                <p><strong>关键点：</strong>特征化描述设备实际做什么</p>
                            </div>
                        </div>
                        
                        <div class="module-card">
                            <h3>3. 配置文件连接空间（PCS）</h3>
                            <p><strong>定义：</strong>用于转换的设备无关参考色彩空间</p>
                            <p><strong>标准：</strong></p>
                            <ul>
                                <li><strong>CIE XYZ (1931)：</strong>原始PCS，基于人类视觉</li>
                                <li><strong>CIE LAB (1976)：</strong>感知均匀，最常见的PCS</li>
                            </ul>
                            <p><strong>目的：</strong></p>
                            <ul>
                                <li>所有设备配置文件的共同参考点</li>
                                <li>实现设备到设备的色彩转换</li>
                                <li>设备无关的色彩规格</li>
                            </ul>
                            <div class="info-box info-box--highlight">
                                <p><strong>关键点：</strong>PCS是色彩管理中的"通用翻译器"</p>
                            </div>
                        </div>
                        
                        <div class="module-card">
                            <h3>4. 色彩管理模块（CMM）</h3>
                            <p><strong>定义：</strong>使用配置文件执行色彩转换的软件引擎</p>
                            <p><strong>功能：</strong></p>
                            <ul>
                                <li>读取源和目标配置文件</li>
                                <li>通过PCS转换色彩</li>
                                <li>应用渲染意图</li>
                                <li>输出转换后的色彩</li>
                            </ul>
                            <p><strong>示例：</strong></p>
                            <ul>
                                <li>Apple ColorSync (macOS)</li>
                                <li>Microsoft ICM (Windows)</li>
                                <li>Adobe CMM (Adobe应用程序)</li>
                                <li>ArgyllCMS (开源)</li>
                            </ul>
                            <div class="info-box info-box--additive">
                                <p><strong>关键点：</strong>CMM是进行实际色彩数学运算的"大脑"</p>
                            </div>
                        </div>
                    </div>
                    
                    <h3>色彩管理工作流程</h3>
                    
                    <div class="decision-framework">
                        <div class="framework-step">
                            <h4>步骤1：校准</h4>
                            <p><strong>显示器校准：</strong></p>
                            <ul>
                                <li>设置白点（通常D65/6500K）</li>
                                <li>设置伽马（通常2.2）</li>
                                <li>设置亮度（通常100-120 cd/m²）</li>
                                <li>调整RGB平衡</li>
                                <li>用测量设备验证</li>
                            </ul>
                        </div>
                        
                        <div class="framework-step">
                            <h4>步骤2：特征化</h4>
                            <p><strong>显示器特征化：</strong></p>
                            <ol>
                                <li>显示测试色块</li>
                                <li>用色度计测量</li>
                                <li>创建测量数据</li>
                                <li>生成配置文件</li>
                            </ol>
                        </div>
                        
                        <div class="framework-step">
                            <h4>步骤3：配置文件创建</h4>
                            <p><strong>ICC配置文件包含：</strong></p>
                            <ul>
                                <li>头信息（设备类别、色彩空间等）</li>
                                <li>标记元素数据（表、曲线、元数据）</li>
                                <li>PCS转换数据</li>
                                <li>设备特定信息</li>
                                <li>元数据（创建日期、软件等）</li>
                            </ul>
                        </div>
                        
                        <div class="framework-step">
                            <h4>步骤4：配置文件安装</h4>
                            <p><strong>系统级别：</strong></p>
                            <ul>
                                <li>Windows：颜色管理控制面板</li>
                                <li>macOS：ColorSync实用工具</li>
                                <li>Linux：colord或手动安装</li>
                            </ul>
                        </div>
                        
                        <div class="framework-step">
                            <h4>步骤5：色彩转换</h4>
                            <div class="workflow-steps">
                                <span class="workflow-step">源色彩</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">源配置文件</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">PCS</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">目标配置文件</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">输出色彩</span>
                            </div>
                        </div>
                    </div>
                    
                    <h3>ICC配置文件类型</h3>
                    
                    <div class="comparison-table-wrapper">
                        <table class="comparison-table">
                            <thead>
                                <tr>
                                    <th>配置文件类型</th>
                                    <th>类别</th>
                                    <th>目的</th>
                                    <th>应用</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>输入配置文件</strong></td>
                                    <td>'scnr'</td>
                                    <td>表征输入设备（扫描仪、相机）</td>
                                    <td>扫描仪/相机特征化、RAW处理</td>
                                </tr>
                                <tr>
                                    <td><strong>显示配置文件</strong></td>
                                    <td>'mntr'</td>
                                    <td>表征显示设备（显示器、投影仪）</td>
                                    <td>显示器校准、投影仪特征化</td>
                                </tr>
                                <tr>
                                    <td><strong>输出配置文件</strong></td>
                                    <td>'prtr'</td>
                                    <td>表征输出设备（打印机、印刷机）</td>
                                    <td>桌面/商业打印机特征化</td>
                                </tr>
                                <tr>
                                    <td><strong>DeviceLink配置文件</strong></td>
                                    <td>'link'</td>
                                    <td>两个特定设备之间的直接转换</td>
                                    <td>高速工作流程、特殊转换</td>
                                </tr>
                                <tr>
                                    <td><strong>抽象配置文件</strong></td>
                                    <td>'abst'</td>
                                    <td>特效或色彩调整</td>
                                    <td>色彩校正、创意效果</td>
                                </tr>
                                <tr>
                                    <td><strong>色彩空间配置文件</strong></td>
                                    <td>'spac'</td>
                                    <td>在色彩编码之间转换</td>
                                    <td>sRGB、Adobe RGB、ProPhoto RGB定义</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            {
                heading: '渲染意图',
                content: `
                    <h3>什么是渲染意图？</h3>
                    <p><strong>渲染意图</strong>是处理无法在目标设备色域中再现的色彩（色域外色彩）的策略。</p>
                    
                    <div class="info-box info-box--highlight">
                        <h4>色域问题</h4>
                        <p><strong>源设备色域：</strong>大（例如ProPhoto RGB）<br>
                        <strong>目标设备色域：</strong>较小（例如sRGB显示器）<br>
                        <strong>结果：</strong>源中的一些色彩无法在目标中再现</p>
                        <p><strong>解决方案：</strong>渲染意图定义如何处理这种情况</p>
                    </div>
                    
                    <h3>感知渲染意图</h3>
                    <p><strong>目的：</strong>保持色彩之间的整体视觉关系，即使单个色彩发生偏移。</p>
                    
                    <div class="tech-specs">
                        <div class="spec-row">
                            <span class="spec-label">方法：</span>
                            <span class="spec-value">按比例压缩整个源色域</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">最适合：</span>
                            <span class="spec-value">摄影图像、连续色调、艺术内容</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">效果：</span>
                            <span class="spec-value">所有色彩略微去饱和，保持平滑过渡</span>
                        </div>
                    </div>
                    
                    <h3>相对色度渲染意图</h3>
                    <p><strong>目的：</strong>在可能的情况下精确匹配色彩，将色域外色彩裁剪到最近的可再现色彩。</p>
                    
                    <div class="tech-specs">
                        <div class="spec-row">
                            <span class="spec-label">方法：</span>
                            <span class="spec-value">色域内精确，色域外裁剪到边界</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">最适合：</span>
                            <span class="spec-value">图形、标志、品牌色彩、专色</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">效果：</span>
                            <span class="spec-value">色域内精确匹配，色域边界处锐利过渡</span>
                        </div>
                    </div>
                    
                    <h3>绝对色度渲染意图</h3>
                    <p><strong>目的：</strong>模拟精确的色彩外观，包括白点。</p>
                    
                    <div class="tech-specs">
                        <div class="spec-row">
                            <span class="spec-label">方法：</span>
                            <span class="spec-value">与相对类似但不适应白点</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">最适合：</span>
                            <span class="spec-value">合同打样、模拟特定纸张白色</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">效果：</span>
                            <span class="spec-value">保持精确白点，可能导致色偏</span>
                        </div>
                    </div>
                    
                    <h3>饱和度渲染意图</h3>
                    <p><strong>目的：</strong>最大化色彩饱和度和鲜艳度，不考虑准确性。</p>
                    
                    <div class="tech-specs">
                        <div class="spec-row">
                            <span class="spec-label">方法：</span>
                            <span class="spec-value">优先饱和色彩</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">最适合：</span>
                            <span class="spec-value">商业图形、图表、图解、演示文稿</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-label">效果：</span>
                            <span class="spec-value">高度饱和、"卡通般"的色彩</span>
                        </div>
                    </div>
                    
                    <h3>选择合适的渲染意图</h3>
                    
                    <div class="comparison-table-wrapper">
                        <table class="comparison-table">
                            <thead>
                                <tr>
                                    <th>内容类型</th>
                                    <th>色域关系</th>
                                    <th>推荐意图</th>
                                    <th>原因</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>照片</strong></td>
                                    <td>源 >> 目标</td>
                                    <td>感知</td>
                                    <td>保持整体外观</td>
                                </tr>
                                <tr>
                                    <td><strong>照片</strong></td>
                                    <td>源 ≈ 目标</td>
                                    <td>相对色度</td>
                                    <td>准确的色彩再现</td>
                                </tr>
                                <tr>
                                    <td><strong>标志/图形</strong></td>
                                    <td>任意</td>
                                    <td>相对色度</td>
                                    <td>保持特定色彩</td>
                                </tr>
                                <tr>
                                    <td><strong>图表/图解</strong></td>
                                    <td>任意</td>
                                    <td>饱和度</td>
                                    <td>最大冲击力</td>
                                </tr>
                                <tr>
                                    <td><strong>打样</strong></td>
                                    <td>任意</td>
                                    <td>绝对色度</td>
                                    <td>模拟精确条件</td>
                                </tr>
                                <tr>
                                    <td><strong>混合内容</strong></td>
                                    <td>源 >> 目标</td>
                                    <td>感知</td>
                                    <td>对各种内容最安全</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <h3>黑点补偿（BPC）</h3>
                    <div class="info-box info-box--highlight">
                        <h4>目的和用法</h4>
                        <p><strong>目的：</strong>将源黑点映射到目标黑点</p>
                        <p><strong>效果：</strong>防止丢失阴影细节</p>
                        <p><strong>何时使用：</strong></p>
                        <ul>
                            <li>通常对大多数应用程序开启</li>
                            <li>当色域显著不同时尤为重要</li>
                            <li>帮助保持色调范围</li>
                        </ul>
                    </div>
                `
            },
            {
                heading: '实践色彩管理工作流程',
                content: `
                    <h3>摄影工作流程</h3>
                    
                    <div class="decision-framework">
                        <div class="framework-step">
                            <h4>阶段1：捕获</h4>
                            <ul>
                                <li>RAW格式（保留最大色彩信息）</li>
                                <li>适当的白平衡</li>
                                <li>如果可能避免相机内色彩处理</li>
                                <li>校准灰卡用于白平衡</li>
                            </ul>
                        </div>
                        
                        <div class="framework-step">
                            <h4>阶段2：导入和组织</h4>
                            <ul>
                                <li>配置色彩管理首选项</li>
                                <li>设置工作空间（推荐ProPhoto RGB）</li>
                                <li>启用色彩管理</li>
                                <li>保留嵌入的配置文件</li>
                            </ul>
                        </div>
                        
                        <div class="framework-step">
                            <h4>阶段3：编辑和处理</h4>
                            <p><strong>工作空间选择：</strong></p>
                            <ul>
                                <li><strong>ProPhoto RGB：</strong>最大的实用色域，防止裁剪，需要16位</li>
                                <li><strong>Adobe RGB：</strong>良好的平衡，支持良好，适合大多数摄影</li>
                                <li><strong>sRGB：</strong>有限的色域，仅用于最终输出</li>
                            </ul>
                        </div>
                        
                        <div class="framework-step">
                            <h4>阶段4：输出准备</h4>
                            <p><strong>软打样：</strong>模拟最终输出设备，检查色域问题</p>
                            <p><strong>输出转换：</strong></p>
                            <ul>
                                <li><strong>网络（sRGB）：</strong>转换为sRGB，感知意图，8位，嵌入配置文件</li>
                                <li><strong>印刷：</strong>转换为打印机配置文件，相对色度，如果支持则16位</li>
                                <li><strong>广色域显示器：</strong>DCI-P3/Rec.2020，感知，10位+，嵌入配置文件</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>印刷制作工作流程</h3>
                    
                    <div class="workflow-scenarios">
                        <div class="scenario-card">
                            <h4>步骤1：文档设置</h4>
                            <ul>
                                <li>设置文档色彩模式（印刷用CMYK）</li>
                                <li>选择适当的CMYK配置文件（特定于印刷机）</li>
                                <li>设置黑版生成方法</li>
                                <li>配置色彩管理策略</li>
                            </ul>
                        </div>
                        
                        <div class="scenario-card">
                            <h4>步骤2：图像准备</h4>
                            <ul>
                                <li>将图像转换为文档CMYK配置文件</li>
                                <li>选择适当的渲染意图</li>
                                <li>应用黑点补偿</li>
                                <li>检查色域问题</li>
                            </ul>
                        </div>
                        
                        <div class="scenario-card">
                            <h4>步骤3：打样</h4>
                            <ul>
                                <li><strong>软打样：</strong>屏幕模拟，快速且经济</li>
                                <li><strong>桌面打样：</strong>使用办公室打印机，比软打样更好</li>
                                <li><strong>合同打样：</strong>专业打样设备，具有法律约束力</li>
                                <li><strong>印刷机打样：</strong>实际印刷机运行，最准确，最昂贵</li>
                            </ul>
                        </div>
                        
                        <div class="scenario-card">
                            <h4>步骤4：印刷机操作</h4>
                            <ul>
                                <li>线性化印刷机输出</li>
                                <li>设置油墨密度</li>
                                <li>平衡色彩</li>
                                <li>用测量验证</li>
                                <li>测量印刷张，与打样比较</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>平面设计和网络工作流程</h3>
                    
                    <div class="best-practices">
                        <div class="practice-item">
                            <h4>设计阶段</h4>
                            <ul>
                                <li>校准广色域显示器</li>
                                <li>现代网络/应用设计用DCI-P3</li>
                                <li>广泛兼容性用sRGB</li>
                                <li>在软件中启用色彩管理</li>
                            </ul>
                        </div>
                        
                        <div class="practice-item">
                            <h4>开发阶段</h4>
                            <ul>
                                <li><strong>CSS色彩函数：</strong>带有色彩空间规格</li>
                                <li><strong>@media (color-gamut: p3)：</strong>用于条件样式</li>
                                <li><strong>image-set()：</strong>用于多个图像版本</li>
                                <li>创建sRGB版本（通用兼容性）</li>
                                <li>创建DCI-P3版本（现代显示器）</li>
                            </ul>
                        </div>
                        
                        <div class="practice-item">
                            <h4>测试和部署</h4>
                            <ul>
                                <li>在多个设备和浏览器上测试</li>
                                <li>验证色彩外观</li>
                                <li>检查配置文件嵌入</li>
                                <li>渐进增强方法</li>
                                <li>为旧浏览器回退到sRGB</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>视频和动态图形工作流程</h3>
                    
                    <div class="decision-framework">
                        <div class="framework-step">
                            <h4>前期制作</h4>
                            <ul>
                                <li>定义交付色彩空间要求</li>
                                <li>规划监控设置</li>
                                <li>建立色彩管理工作流程</li>
                                <li>广色域参考显示器、校准工具</li>
                            </ul>
                        </div>
                        
                        <div class="framework-step">
                            <h4>制作</h4>
                            <ul>
                                <li>Log或RAW录制</li>
                                <li>适当的色彩空间（Rec.2020/DCI-P3）</li>
                                <li>10位或更高色彩深度</li>
                                <li>现场校准参考显示器</li>
                            </ul>
                        </div>
                        
                        <div class="framework-step">
                            <h4>后期制作</h4>
                            <div class="workflow-steps">
                                <span class="workflow-step">配置项目</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">编辑和调色</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">软打样</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">转换交付</span>
                                <span class="workflow-arrow">→</span>
                                <span class="workflow-step">质量控制</span>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                heading: '高级主题和最佳实践',
                content: `
                    <h3>跨平台色彩管理</h3>
                    
                    <div class="comparison-table-wrapper">
                        <table class="comparison-table">
                            <thead>
                                <tr>
                                    <th>平台</th>
                                    <th>优势</th>
                                    <th>考虑因素</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>macOS (ColorSync)</strong></td>
                                    <td>出色的内置色彩管理，系统级支持</td>
                                    <td>某些应用程序绕过系统，iOS有限制</td>
                                </tr>
                                <tr>
                                    <td><strong>Windows (ICM/WCS)</strong></td>
                                    <td>支持不断改进，良好的应用程序级支持</td>
                                    <td>系统级因版本而异，某些应用程序支持差</td>
                                </tr>
                                <tr>
                                    <td><strong>Linux</strong></td>
                                    <td>ArgyllCMS强大，配置灵活</td>
                                    <td>没有 universal 系统支持，需要手动配置</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <h3>色彩管理中的人工智能和机器学习</h3>
                    
                    <div class="module-cards">
                        <div class="module-card">
                            <h3>自动特征化</h3>
                            <ul>
                                <li>AI辅助设备特征化</li>
                                <li>从有限测量中预测性特征化</li>
                                <li>基于使用模式的自适应特征化</li>
                                <li>自校准显示器</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>智能色域映射</h3>
                            <ul>
                                <li>内容感知色域映射</li>
                                <li>逐场景优化</li>
                                <li>对图像内容的语义理解</li>
                                <li>自动保持重要色彩</li>
                            </ul>
                        </div>
                        
                        <div class="module-card">
                            <h3>预测性色彩匹配</h3>
                            <ul>
                                <li>从数字打样预测印刷机输出</li>
                                <li>跨不同介质匹配色彩</li>
                                <li>补偿观看条件</li>
                                <li>个性化色彩优化</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>常见色彩管理问题</h3>
                    
                    <div class="best-practices">
                        <div class="practice-item">
                            <h4>问题1：色彩在不同设备上看起来不同</h4>
                            <p><strong>症状：</strong>图像在一个显示器上正确，在另一个上错误；打印与屏幕不匹配</p>
                            <p><strong>解决方案：</strong>校准和特征化所有显示器，验证配置文件嵌入，检查应用程序色彩管理设置，使用一致的色彩空间</p>
                        </div>
                        
                        <div class="practice-item">
                            <h4>问题2：褪色或过饱和的色彩</h4>
                            <p><strong>症状：</strong>色彩显得太淡或太鲜艳，失去对比度</p>
                            <p><strong>解决方案：</strong>检查重复的配置文件应用，验证渲染意图设置，确认工作空间，重新校准显示器</p>
                        </div>
                        
                        <div class="practice-item">
                            <h4>问题3：色带或色调分离</h4>
                            <p><strong>症状：</strong>渐变中出现可见色带，失去平滑的色彩过渡</p>
                            <p><strong>解决方案：</strong>使用更高位深度（编辑用16位），最小化色彩空间转换，使用高质量配置文件，减少压缩</p>
                        </div>
                        
                        <div class="practice-item">
                            <h4>问题4：配置文件错误或丢失配置文件</h4>
                            <p><strong>症状：</strong>关于丢失配置文件的警告消息，色彩完全错误</p>
                            <p><strong>解决方案：</strong>始终在文件中嵌入配置文件，保持配置文件备份，使用标准配置文件格式，验证配置文件完整性</p>
                        </div>
                    </div>
                    
                    <h3>色彩管理最佳实践</h3>
                    
                    <div class="best-practices">
                        <div class="practice-item">
                            <h4>工作流程最佳实践</h4>
                            <ol>
                                <li><strong>定期校准：</strong>显示器每月（专业人士）或每季度（其他人）</li>
                                <li><strong>使用适当的工作空间：</strong>摄影用ProPhoto RGB，印刷用Adobe RGB，网络用sRGB/DCI-P3</li>
                                <li><strong>在所有文件中嵌入配置文件：</strong>永远不要假设默认色彩空间</li>
                                <li><strong>最终输出前软打样：</strong>模拟最终目标，检查色域问题</li>
                                <li><strong>记录你的工作流程：</strong>记录色彩空间决策，注意配置文件版本</li>
                            </ol>
                        </div>
                        
                        <div class="practice-item">
                            <h4>质量控制最佳实践</h4>
                            <ul>
                                <li>建立基线标准和可接受的色彩容差</li>
                                <li>定期在多个设备上测试</li>
                                <li>维护设备：保持校准工具更新，更换老化设备</li>
                                <li>培训团队成员色彩管理原则</li>
                            </ul>
                        </div>
                        
                        <div class="practice-item">
                            <h4>高级最佳实践</h4>
                            <ul>
                                <li>对配置文件使用版本控制</li>
                                <li>实施带批处理的自动化工作流程</li>
                                <li>跟上ICC发展和行业标准</li>
                                <li>规划色彩管理演变和未来技术需求</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>硬件和软件工具</h3>
                    
                    <div class="comparison-table-wrapper">
                        <table class="comparison-table">
                            <thead>
                                <tr>
                                    <th>类别</th>
                                    <th>工具</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>显示器校准</strong></td>
                                    <td>X-Rite i1Display Pro/Studio、Datacolor SpyderX、Klein K-10、CalMAN</td>
                                </tr>
                                <tr>
                                    <td><strong>打印/扫描</strong></td>
                                    <td>X-Rite i1Pro系列、Datacolor SpyderPRINT、SpectroEye</td>
                                </tr>
                                <tr>
                                    <td><strong>专业软件</strong></td>
                                    <td>X-Rite i1Profiler、Datacolor Spyder软件、CalMAN、ColorEyes</td>
                                </tr>
                                <tr>
                                    <td><strong>开源</strong></td>
                                    <td>ArgyllCMS、DisplayCAL、LCMS、OpenColorIO</td>
                                </tr>
                                <tr>
                                    <td><strong>应用程序内置</strong></td>
                                    <td>Adobe色彩设置、Apple ColorSync实用工具、Windows颜色管理</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            {
                heading: '总结与要点回顾',
                content: `
                    <h3>需要记住的核心概念</h3>
                    <ol>
                        <li><strong>色彩管理是系统性的：</strong>校准 + 特征化 + PCS + CMM</li>
                        <li><strong>ICC配置文件必不可少：</strong>设备特定描述实现色彩转换</li>
                        <li><strong>渲染意图很重要：</strong>感知、相对色度、绝对色度、饱和度</li>
                        <li><strong>工作流程一致性至关重要：</strong>在整个管道中保持色彩管理</li>
                        <li><strong>软打样很强大：</strong>在提交之前预览最终输出</li>
                        <li><strong>校准是持续的：</strong>需要定期维护以保持准确性</li>
                        <li><strong>文档很重要：</strong>记录决策和程序</li>
                    </ol>
                    
                    <h3>获得的实践技能</h3>
                    <ul>
                        <li>理解色彩管理系统架构</li>
                        <li>有效创建和使用ICC配置文件</li>
                        <li>为不同场景选择合适的渲染意图</li>
                        <li>为各种媒体实施色彩管理工作流程</li>
                        <li>排除常见色彩管理问题</li>
                        <li>为色彩管理配置专业软件</li>
                    </ul>
                    
                    <div class="next-steps">
                        <h3>下一步</h3>
                        <div class="action-buttons">
                            <a href="#interaction-color-picker" class="btn btn-primary">探索交互工具</a>
                            <a href="#relative-information" class="btn btn-secondary">查看其他资源</a>
                            <a href="#overview" class="btn btn-outline">返回概述</a>
                        </div>
                    </div>
                `
            }
        ]
    },

    'interaction-color-picker': {
        title: '交互式色彩选择器',
        subtitle: '通过交互式选择和分析探索色彩空间',
        meta: {
            readingTime: '交互工具',
            difficulty: '所有级别',
            type: '交互 + 教育'
        },
        sections: [
            {
                heading: '色彩选择器简介',
                content: `
                    <p>交互式色彩选择器允许你跨不同色彩模型探索色彩，可视化色域边界，并实时理解色彩关系。</p>
                    
                    <h3>你可以做什么</h3>
                    <ul>
                        <li>使用多种输入方法选择色彩（RGB、HSL、CMYK、Lab、Hex）</li>
                        <li>在CIE色度图上可视化色彩位置</li>
                        <li>检查色彩是否在特定色彩空间色域内</li>
                        <li>跨不同色彩空间比较色彩</li>
                        <li>保存和导出你的色彩选择</li>
                    </ul>
                    
                    <div class="info-box info-box--highlight">
                        <h4>学习提示</h4>
                        <p>尝试在不同色彩模型中选择相同的视觉色彩，看看数值如何变化而外观保持不变！</p>
                    </div>
                `
            },
            {
                heading: '色彩选择器工具',
                content: `
                    <div id="color-picker-container" class="color-picker-wrapper">
                        <div class="color-picker-main">
                            <div class="color-preview-section">
                                <div class="color-preview-swatch" id="color-preview"></div>
                                <div class="color-info-display">
                                    <div class="color-hex-display">
                                        <label>Hex：</label>
                                        <input type="text" id="hex-input" value="#FFFFFF" maxlength="7" />
                                        <button class="btn-copy" data-copy="hex" title="复制Hex">📋</button>
                                    </div>
                                    <div class="color-rgb-display">
                                        <span id="rgb-text">RGB(255, 255, 255)</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="color-wheel-container">
                                <canvas id="color-wheel" width="300" height="300"></canvas>
                                <div class="color-wheel-cursor" id="wheel-cursor"></div>
                            </div>
                            
                            <div class="color-sliders">
                                <div class="slider-group">
                                    <h4>RGB</h4>
                                    <div class="slider-item">
                                        <label>R：<span id="r-value">255</span></label>
                                        <input type="range" id="r-slider" min="0" max="255" value="255" />
                                    </div>
                                    <div class="slider-item">
                                        <label>G：<span id="g-value">255</span></label>
                                        <input type="range" id="g-slider" min="0" max="255" value="255" />
                                    </div>
                                    <div class="slider-item">
                                        <label>B：<span id="b-value">255</span></label>
                                        <input type="range" id="b-slider" min="0" max="255" value="255" />
                                    </div>
                                </div>
                                
                                <div class="slider-group">
                                    <h4>HSL</h4>
                                    <div class="slider-item">
                                        <label>H：<span id="h-value">0</span>°</label>
                                        <input type="range" id="h-slider" min="0" max="360" value="0" />
                                    </div>
                                    <div class="slider-item">
                                        <label>S：<span id="s-value">0</span>%</label>
                                        <input type="range" id="s-slider" min="0" max="100" value="0" />
                                    </div>
                                    <div class="slider-item">
                                        <label>L：<span id="l-value">100</span>%</label>
                                        <input type="range" id="l-slider" min="0" max="100" value="100" />
                                    </div>
                                </div>
                                
                                <div class="slider-group">
                                    <h4>CMYK</h4>
                                    <div class="slider-item">
                                        <label>C：<span id="c-value">0</span>%</label>
                                        <input type="range" id="c-slider" min="0" max="100" value="0" />
                                    </div>
                                    <div class="slider-item">
                                        <label>M：<span id="m-value">0</span>%</label>
                                        <input type="range" id="m-slider" min="0" max="100" value="0" />
                                    </div>
                                    <div class="slider-item">
                                        <label>Y：<span id="y-value">0</span>%</label>
                                        <input type="range" id="y-slider" min="0" max="100" value="0" />
                                    </div>
                                    <div class="slider-item">
                                        <label>K：<span id="k-value">0</span>%</label>
                                        <input type="range" id="k-slider" min="0" max="100" value="0" />
                                    </div>
                                </div>
                                
                                <div class="slider-group">
                                    <h4>Lab</h4>
                                    <div class="slider-item">
                                        <label>L*：<span id="lab-l-value">100</span></label>
                                        <input type="range" id="lab-l-slider" min="0" max="100" value="100" />
                                    </div>
                                    <div class="slider-item">
                                        <label>a*：<span id="lab-a-value">0</span></label>
                                        <input type="range" id="lab-a-slider" min="-128" max="127" value="0" />
                                    </div>
                                    <div class="slider-item">
                                        <label>b*：<span id="lab-b-value">0</span></label>
                                        <input type="range" id="lab-b-slider" min="-128" max="127" value="0" />
                                    </div>
                                </div>
                            </div>
                            
                            <div class="color-actions">
                                <button class="btn-action" id="eyedropper-btn">🎯 吸管工具</button>
                                <button class="btn-action" id="random-color-btn">🎲 随机</button>
                                <button class="btn-action" id="reset-color-btn">↺ 重置</button>
                            </div>
                        </div>
                        
                        <div class="gamut-visualization-section">
                            <h3>色域可视化</h3>
                            <div class="gamut-controls">
                                <select id="gamut-space-select">
                                    <option value="srgb">sRGB / Rec.709</option>
                                    <option value="adobe-rgb">Adobe RGB (1998)</option>
                                    <option value="dci-p3">DCI-P3</option>
                                    <option value="display-p3">Display P3</option>
                                    <option value="rec2020">Rec.2020</option>
                                    <option value="prophoto">ProPhoto RGB</option>
                                </select>
                                <label class="toggle-switch">
                                    <input type="checkbox" id="show-gamut-boundary" checked />
                                    <span class="toggle-slider"></span>
                                    显示色域边界
                                </label>
                            </div>
                            
                            <div class="cie-diagram-container">
                                <canvas id="cie-diagram" width="400" height="400"></canvas>
                                <div class="cie-cursor" id="cie-cursor"></div>
                            </div>
                            
                            <div class="gamut-status">
                                <div class="status-indicator" id="gamut-status">
                                    <span class="status-dot"></span>
                                    <span class="status-text">在色域内</span>
                                </div>
                                <div class="distance-info">
                                    到边界的距离：<span id="boundary-distance">0%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="color-history-section">
                        <h3>色彩历史</h3>
                        <div class="color-history-grid" id="color-history">
                            <p class="history-placeholder">选择的色彩将显示在这里</p>
                        </div>
                        <div class="history-actions">
                            <button class="btn-secondary" id="clear-history">清除历史</button>
                            <button class="btn-secondary" id="export-colors">导出色彩</button>
                        </div>
                    </div>
                `
            },
            {
                heading: '如何使用',
                content: `
                    <h3>基本用法</h3>
                    <ol>
                        <li><strong>选择色彩：</strong>使用任何输入方法（滑块、hex输入或色轮）</li>
                        <li><strong>观察变化：</strong>所有色彩模型值实时更新</li>
                        <li><strong>检查色域：</strong>查看你的色彩是否在选定的色彩空间内</li>
                        <li><strong>保存色彩：</strong>点击预览色块添加到历史</li>
                    </ol>
                    
                    <h3>高级功能</h3>
                    <ul>
                        <li><strong>吸管工具：</strong>从屏幕上的任何地方选取色彩（需要浏览器支持）</li>
                        <li><strong>色域比较：</strong>在不同色彩空间之间切换以查看色域差异</li>
                        <li><strong>导出：</strong>将你的调色板保存为JSON或CSV</li>
                    </ul>
                    
                    <div class="next-steps">
                        <h3>继续学习</h3>
                        <div class="action-buttons">
                            <a href="#interaction-visual-example" class="btn btn-primary">查看视觉示例</a>
                            <a href="#interaction-interactive-tools" class="btn btn-secondary">尝试交互工具</a>
                            <a href="#overview" class="btn btn-outline">返回概述</a>
                        </div>
                    </div>
                `
            }
        ]
    },

    'interaction-visual-example': {
        title: '视觉示例与案例研究',
        subtitle: '色彩管理概念的真实世界演示',
        meta: {
            readingTime: '交互画廊',
            difficulty: '所有级别',
            type: '视觉 + 教育'
        },
        sections: [
            {
                heading: '如何使用本画廊',
                content: `
                    <div class="usage-guide">
                        <div class="guide-card">
                            <div class="guide-icon">📸</div>
                            <h4>1. 选择类别</h4>
                            <p>使用"类别"下拉菜单浏览摄影、设计、视频或常见问题中的示例。</p>
                        </div>
                        
                        <div class="guide-card">
                            <div class="guide-icon">👁️</div>
                            <h4>2. 导航示例</h4>
                            <p>使用"上一个"和"下一个"按钮浏览所选类别中的所有示例。</p>
                        </div>
                        
                        <div class="guide-card">
                            <div class="guide-icon">🔄</div>
                            <h4>3. 切换视图模式</h4>
                            <p>在"并排"和"滑块比较"模式之间切换。滑块模式允许你拖动分隔线来比较前后效果。</p>
                        </div>
                        
                        <div class="guide-card">
                            <div class="guide-icon">📝</div>
                            <h4>4. 阅读详细信息</h4>
                            <p>每个示例都显示问题、解决方案、技术细节和最佳实践。学习这些以理解色彩管理工作流程。</p>
                        </div>
                    </div>
                `
            },
            {
                heading: '前后对比画廊',
                content: `
                    <div class="visual-gallery" id="visual-gallery">
                        <div class="gallery-controls">
                            <div class="control-group">
                                <label for="gallery-category">类别：</label>
                                <select id="gallery-category">
                                    <option value="photography">摄影</option>
                                    <option value="design">设计</option>
                                    <option value="video">视频</option>
                                    <option value="problems">常见问题</option>
                                </select>
                            </div>
                            
                            <div class="control-group">
                                <label for="view-mode">视图模式：</label>
                                <select id="view-mode">
                                    <option value="side-by-side">并排</option>
                                    <option value="slider">滑块比较</option>
                                </select>
                            </div>
                            
                            <div class="navigation-buttons">
                                <button class="btn-nav" id="prev-example" disabled>← 上一个</button>
                                <span class="example-counter">示例 1 / 3</span>
                                <button class="btn-nav" id="next-example">下一个 →</button>
                            </div>
                        </div>
                        
                        <div class="comparison-container view-side-by-side" id="comparison-container">
                            <div class="before">
                                <img src="" alt="之前" />
                                <span class="label">之前</span>
                            </div>
                            <div class="after">
                                <img src="" alt="之后" />
                                <span class="label">之后</span>
                            </div>
                            <div class="comparison-divider" id="comparison-divider" style="display: none;"></div>
                        </div>
                        
                        <div class="explanation-panel">
                            <div class="explanation-item">
                                <h4>🔴 问题</h4>
                                <p id="problem-desc"></p>
                            </div>
                            <div class="explanation-item">
                                <h4>✅ 解决方案</h4>
                                <p id="solution-desc"></p>
                            </div>
                            <div class="explanation-item">
                                <h4>⚙️ 技术细节</h4>
                                <ul id="technical-details"></ul>
                            </div>
                            <div class="explanation-item">
                                <h4>💡 最佳实践</h4>
                                <ul id="best-practices"></ul>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                heading: '色域可视化示例',
                content: `
                    <div class="gamut-examples" id="gamut-examples">
                        <div class="usage-tip">
                            <strong>💡 如何使用：</strong>选择不同的可视化类型和示例图像，查看色彩在不同色彩空间中的表现。使用复选框显示/隐藏特定色彩空间。
                        </div>
                        
                        <div class="visualization-controls">
                            <div class="control-group">
                                <label for="viz-type">可视化类型：</label>
                                <select id="viz-type">
                                    <option value="triangle">色彩空间三角形</option>
                                    <option value="volume">3D色彩体积</option>
                                    <option value="mapping">色域映射</option>
                                </select>
                            </div>
                            
                            <div class="control-group">
                                <label for="sample-image">示例图像：</label>
                                <select id="sample-image">
                                    <option value="gradient">RGB渐变</option>
                                    <option value="portrait">人像照片</option>
                                    <option value="landscape">风景照片</option>
                                </select>
                            </div>
                            
                            <div class="control-group">
                                <label for="rendering-intent">渲染意图：</label>
                                <select id="rendering-intent">
                                    <option value="perceptual">感知</option>
                                    <option value="relative">相对色度</option>
                                    <option value="absolute">绝对色度</option>
                                    <option value="saturation">饱和度</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="space-toggles">
                            <label class="space-toggle">
                                <input type="checkbox" checked data-space="srgb" />
                                <span class="toggle-indicator"></span>
                                sRGB
                            </label>
                            <label class="space-toggle">
                                <input type="checkbox" data-space="adobe-rgb" />
                                <span class="toggle-indicator"></span>
                                Adobe RGB
                            </label>
                            <label class="space-toggle">
                                <input type="checkbox" data-space="dci-p3" />
                                <span class="toggle-indicator"></span>
                                DCI-P3
                            </label>
                            <label class="space-toggle">
                                <input type="checkbox" data-space="prophoto" />
                                <span class="toggle-indicator"></span>
                                ProPhoto RGB
                            </label>
                        </div>
                        
                        <div class="gamut-canvas-container">
                            <canvas id="gamut-comparison-canvas" width="500" height="400"></canvas>
                        </div>
                        
                        <div class="action-buttons-row">
                            <button class="btn-action-small" id="show-hide-gamut">切换色域边界</button>
                            <button class="btn-action-small" id="highlight-oog">高亮色域外</button>
                        </div>
                    </div>
                `
            },
            {
                heading: '交互式案例研究',
                content: `
                    <div class="case-studies" id="case-studies">
                        <div class="usage-tip">
                            <strong>💡 如何使用：</strong>从下拉菜单中选择一个场景。阅读问题描述，然后完成调查清单。最后，查看推荐的解决步骤。
                        </div>
                        
                        <div class="case-selector">
                            <label for="case-study-select">选择场景：</label>
                            <select id="case-study-select">
                                <option value="photography">摄影师客户投诉</option>
                                <option value="brand">品牌标志不一致</option>
                                <option value="video">HDR视频交付问题</option>
                                <option value="ecommerce">电商产品色彩</option>
                            </select>
                        </div>
                        
                        <div class="case-content" id="case-content">
                            <div class="case-section">
                                <h4>📋 场景描述</h4>
                                <p id="scenario-text"></p>
                            </div>
                            
                            <div class="case-section">
                                <h4>🔍 调查清单</h4>
                                <p class="hint">验证每一项时请勾选：</p>
                                <ul class="checklist" id="investigation-checklist">
                                    <li><label><input type="checkbox" /> 检查显示器校准状态</label></li>
                                    <li><label><input type="checkbox" /> 验证色彩配置文件嵌入</label></li>
                                    <li><label><input type="checkbox" /> 审查色彩空间转换</label></li>
                                    <li><label><input type="checkbox" /> 在多个设备上测试</label></li>
                                    <li><label><input type="checkbox" /> 验证打印/数字输出</label></li>
                                </ul>
                            </div>
                            
                            <div class="case-section">
                                <h4>✅ 推荐解决方案</h4>
                                <ol id="solution-steps"></ol>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                heading: '你将学到什么',
                content: `
                    <h3>学习成果</h3>
                    <div class="outcomes-grid">
                        <div class="outcome-card">
                            <div class="outcome-icon">🎯</div>
                            <h4>识别色彩问题</h4>
                            <p>学习在实际场景中识别常见的色彩管理问题，如未校准的显示器、缺失的配置文件和色域不匹配。</p>
                        </div>
                        
                        <div class="outcome-card">
                            <div class="outcome-icon">🔧</div>
                            <h4>应用解决方案</h4>
                            <p>理解逐步工作流程来解决色彩问题，从校准到配置文件管理再到软打样。</p>
                        </div>
                        
                        <div class="outcome-card">
                            <div class="outcome-icon">📊</div>
                            <h4>理解色域</h4>
                            <p>可视化不同色彩空间的比较以及在它们之间转换时会发生什么。</p>
                        </div>
                        
                        <div class="outcome-card">
                            <div class="outcome-icon">✅</div>
                            <h4>遵循最佳实践</h4>
                            <p>建立防止色彩问题发生的习惯，确保专业品质的结果。</p>
                        </div>
                    </div>
                    
                    <div class="next-steps">
                        <h3>继续学习</h3>
                        <div class="action-buttons">
                            <a href="#interaction-interactive-tools" class="btn btn-primary">下一步：交互工具 →</a>
                            <a href="#interaction-color-picker" class="btn btn-secondary">← 返回色彩选择器</a>
                        </div>
                    </div>
                `
            }
        ]
    },

    'interaction-interactive-tools': {
        title: '交互式色彩管理工具',
        subtitle: '解决现实世界色彩问题的实用工具',
        meta: {
            readingTime: '交互工作坊',
            difficulty: '所有级别',
            type: '工具 + 应用'
        },
        sections: [
            {
                heading: '如何使用这些工具',
                content: `
                    <div class="usage-guide">
                        <div class="guide-card">
                            <div class="guide-icon"></div>
                            <h4>1. 色彩转换器</h4>
                            <p>在RGB、HSL、CMYK、Lab和Hex格式之间即时转换色彩。添加到批次以进行批量导出。</p>
                        </div>
                        
                        <div class="guide-card">
                            <div class="guide-icon">📐</div>
                            <h4>2. 色域映射模拟器</h4>
                            <p>查看在不同色彩空间之间转换时色彩如何变化。预览色域外警告。</p>
                        </div>
                        
                        <div class="guide-card">
                            <div class="guide-icon">📏</div>
                            <h4>3. Delta-E计算器</h4>
                            <p>测量两种色彩之间的感知差异。检查它们是否符合容差标准。</p>
                        </div>
                        
                        <div class="guide-card">
                            <div class="guide-icon">♿</div>
                            <h4>4. 无障碍检查器</h4>
                            <p>验证WCAG合规性并模拟色盲，确保你的设计具有无障碍性。</p>
                        </div>
                    </div>
                `
            },
            {
                heading: '色彩转换工具',
                content: `
                    <div class="tool-container" id="color-converter-tool">
                        <div class="tool-header">
                            <h3>🎨 色彩空间转换器</h3>
                            <p class="tool-description">以任何格式输入色彩，立即转换为所有其他格式。</p>
                        </div>
                        
                        <div class="converter-input-section">
                            <div class="input-group">
                                <label>输入格式：</label>
                                <select id="convert-from-space">
                                    <option value="rgb">RGB</option>
                                    <option value="hsl">HSL</option>
                                    <option value="cmyk">CMYK</option>
                                    <option value="lab">Lab</option>
                                    <option value="hex">Hex</option>
                                </select>
                            </div>
                            
                            <div class="input-values" id="input-values">
                                <div class="value-inputs rgb-inputs">
                                    <input type="number" id="input-r" placeholder="R" min="0" max="255" value="255" />
                                    <input type="number" id="input-g" placeholder="G" min="0" max="255" value="0" />
                                    <input type="number" id="input-b" placeholder="B" min="0" max="255" value="0" />
                                </div>
                            </div>
                            
                            <button class="btn-convert" id="convert-btn">转换 →</button>
                        </div>
                        
                        <div class="converter-results">
                            <h4>转换结果</h4>
                            <div class="results-grid" id="conversion-results">
                                <div class="result-item">
                                    <span class="result-label">RGB：</span>
                                    <span class="result-value" id="result-rgb">255, 0, 0</span>
                                    <button class="btn-copy-small" data-copy="result-rgb">📋</button>
                                </div>
                                <div class="result-item">
                                    <span class="result-label">HSL：</span>
                                    <span class="result-value" id="result-hsl">0°, 100%, 50%</span>
                                    <button class="btn-copy-small" data-copy="result-hsl">📋</button>
                                </div>
                                <div class="result-item">
                                    <span class="result-label">HSV：</span>
                                    <span class="result-value" id="result-hsv">0°, 100%, 100%</span>
                                    <button class="btn-copy-small" data-copy="result-hsv">📋</button>
                                </div>
                                <div class="result-item">
                                    <span class="result-label">CMYK：</span>
                                    <span class="result-value" id="result-cmyk">0%, 100%, 100%, 0%</span>
                                    <button class="btn-copy-small" data-copy="result-cmyk">📋</button>
                                </div>
                                <div class="result-item">
                                    <span class="result-label">Lab：</span>
                                    <span class="result-value" id="result-lab">53.2, 80.1, 67.2</span>
                                    <button class="btn-copy-small" data-copy="result-lab">📋</button>
                                </div>
                                <div class="result-item">
                                    <span class="result-label">XYZ：</span>
                                    <span class="result-value" id="result-xyz">41.24, 21.26, 1.93</span>
                                    <button class="btn-copy-small" data-copy="result-xyz">📋</button>
                                </div>
                                <div class="result-item">
                                    <span class="result-label">Hex：</span>
                                    <span class="result-value" id="result-hex">#FF0000</span>
                                    <button class="btn-copy-small" data-copy="result-hex">📋</button>
                                </div>
                            </div>
                            
                            <div class="result-actions">
                                <button class="btn-action-small" id="copy-all-btn">📋 复制全部</button>
                                <button class="btn-action-small" id="add-to-batch">➕ 添加到批次</button>
                            </div>
                        </div>
                        
                        <div class="batch-section" id="batch-section" style="display: none;">
                            <h4>批次转换</h4>
                            <div class="batch-list" id="batch-list"></div>
                            <div class="batch-actions">
                                <button class="btn-export" id="export-csv">📄 导出CSV</button>
                                <button class="btn-export" id="export-json">📄 导出JSON</button>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                heading: 'Delta-E计算器',
                content: `
                    <div class="tool-container" id="delta-e-calculator">
                        <div class="tool-header">
                            <h3>📏 色彩差异计算器（Delta-E）</h3>
                            <p class="tool-description">测量两种色彩在人眼中的差异程度。</p>
                        </div>
                        
                        <div class="delta-e-inputs">
                            <div class="color-input-pair">
                                <div class="color-input">
                                    <h4>色彩A</h4>
                                    <input type="color" id="color-a-picker" value="#FF0000" />
                                    <div class="color-values">
                                        <input type="number" id="color-a-r" placeholder="R" value="255" />
                                        <input type="number" id="color-a-g" placeholder="G" value="0" />
                                        <input type="number" id="color-a-b" placeholder="B" value="0" />
                                    </div>
                                </div>
                                
                                <div class="color-input">
                                    <h4>色彩B</h4>
                                    <input type="color" id="color-b-picker" value="#FA0A0A" />
                                    <div class="color-values">
                                        <input type="number" id="color-b-r" placeholder="R" value="250" />
                                        <input type="number" id="color-b-g" placeholder="G" value="10" />
                                        <input type="number" id="color-b-b" placeholder="B" value="10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="delta-e-settings">
                            <div class="setting-group">
                                <label>公式：</label>
                                <select id="delta-e-formula">
                                    <option value="de2000">Delta-E 2000 (CIEDE2000) - 最准确</option>
                                    <option value="de94">Delta-E 1994</option>
                                    <option value="de76">Delta-E 1976 (CIELAB) - 最简单</option>
                                    <option value="cmc">CMC l:c</option>
                                </select>
                            </div>
                            
                            <div class="setting-group">
                                <label>容差：</label>
                                <input type="number" id="tolerance-value" value="2.3" step="0.1" />
                                <span class="tolerance-note">（行业标准：2.3）</span>
                            </div>
                        </div>
                        
                        <button class="btn-calculate" id="calculate-delta-e">计算Delta-E</button>
                        
                        <div class="delta-e-results">
                            <div class="result-display">
                                <span class="result-label">Delta-E值：</span>
                                <span class="result-value-large" id="delta-e-value">1.8</span>
                            </div>
                            
                            <div class="pass-fail-indicator" id="pass-fail">
                                <span class="status-icon">✓</span>
                                <span class="status-text">通过（在容差范围内）</span>
                            </div>
                            
                            <div class="interpretation">
                                <h4>解释指南</h4>
                                <div class="delta-e-scale">
                                    <div class="scale-item">
                                        <span class="scale-value">&lt; 1.0</span>
                                        <span class="scale-desc">不可察觉</span>
                                    </div>
                                    <div class="scale-item">
                                        <span class="scale-value">1.0 - 2.0</span>
                                        <span class="scale-desc">需要仔细观察</span>
                                    </div>
                                    <div class="scale-item">
                                        <span class="scale-value">2.0 - 3.5</span>
                                        <span class="scale-desc">一眼可察觉</span>
                                    </div>
                                    <div class="scale-item">
                                        <span class="scale-value">3.5 - 5.0</span>
                                        <span class="scale-desc">明显可见</span>
                                    </div>
                                    <div class="scale-item">
                                        <span class="scale-value">&gt; 5.0</span>
                                        <span class="scale-desc">不同的色彩</span>
                                    </div>
                                </div>
                                <p id="delta-e-interpretation">色彩差异对人眼来说不可察觉。这是一个极好的匹配。</p>
                            </div>
                            
                            <div class="visualization">
                                <canvas id="delta-e-viz" width="400" height="200"></canvas>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                heading: '无障碍检查器',
                content: `
                    <div class="tool-container" id="accessibility-checker">
                        <div class="tool-header">
                            <h3>♿ WCAG无障碍检查器</h3>
                            <p class="tool-description">检查你的色彩组合是否符合网络无障碍标准。</p>
                        </div>
                        
                        <div class="accessibility-inputs">
                            <div class="color-pair-input">
                                <div class="color-input-with-preview">
                                    <label>背景色彩：</label>
                                    <input type="color" id="bg-color-picker" value="#FFFFFF" />
                                    <input type="text" id="bg-color-hex" value="#FFFFFF" maxlength="7" />
                                    <div class="color-preview-box" id="bg-preview" style="background: #FFFFFF;"></div>
                                </div>
                                
                                <div class="color-input-with-preview">
                                    <label>前景（文本）色彩：</label>
                                    <input type="color" id="fg-color-picker" value="#0000FF" />
                                    <input type="text" id="fg-color-hex" value="#0000FF" maxlength="7" />
                                    <div class="color-preview-box" id="fg-preview" style="background: #0000FF;"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="sample-text-preview">
                            <h4>示例文本预览</h4>
                            <div class="preview-box" id="access-preview-box" style="background: #FFFFFF; color: #0000FF;">
                                <p class="sample-large">大文本（18pt+）</p>
                                <p class="sample-normal">用于可读性测试的普通文本</p>
                                <p class="sample-small">小文本（14pt）</p>
                            </div>
                        </div>
                        
                        <button class="btn-check-accessibility" id="check-accessibility">检查无障碍性</button>
                        
                        <div class="accessibility-results">
                            <h4>WCAG 2.1合规性</h4>
                            <div class="compliance-grid">
                                <div class="compliance-item">
                                    <span class="compliance-level">AA大文本</span>
                                    <span class="compliance-status pass" id="aa-large">✓ 通过</span>
                                    <span class="compliance-ratio" id="ratio-aa-large">7.2:1</span>
                                </div>
                                <div class="compliance-item">
                                    <span class="compliance-level">AA普通文本</span>
                                    <span class="compliance-status pass" id="aa-normal">✓ 通过</span>
                                    <span class="compliance-ratio" id="ratio-aa-normal">7.2:1</span>
                                </div>
                                <div class="compliance-item">
                                    <span class="compliance-level">AAA大文本</span>
                                    <span class="compliance-status fail" id="aaa-large">✗ 失败</span>
                                    <span class="compliance-ratio" id="ratio-aaa-large">4.5:1</span>
                                </div>
                                <div class="compliance-item">
                                    <span class="compliance-level">AAA普通文本</span>
                                    <span class="compliance-status fail" id="aaa-normal">✗ 失败</span>
                                    <span class="compliance-ratio" id="ratio-aaa-normal">4.5:1</span>
                                </div>
                            </div>
                            
                            <div class="wcag-info">
                                <h4>WCAG要求</h4>
                                <ul>
                                    <li><strong>AA大文本（18pt+）：</strong>需要3:1对比度</li>
                                    <li><strong>AA普通文本：</strong>需要4.5:1对比度</li>
                                    <li><strong>AAA大文本：</strong>需要4.5:1对比度</li>
                                    <li><strong>AAA普通文本：</strong>需要7:1对比度</li>
                                </ul>
                            </div>
                            
                            <div class="color-blindness-simulation">
                                <h4>色盲模拟</h4>
                                <p class="hint">点击标签查看你的色彩在不同类型色觉缺陷人群眼中的外观。</p>
                                <div class="simulation-tabs">
                                    <button class="sim-tab active" data-type="normal">正常视觉</button>
                                    <button class="sim-tab" data-type="protanopia">红色盲</button>
                                    <button class="sim-tab" data-type="deuteranopia">绿色盲</button>
                                    <button class="sim-tab" data-type="tritanopia">蓝色盲</button>
                                </div>
                                <div class="simulation-preview" id="cb-simulation" style="background: #FFFFFF; color: #0000FF;">
                                    <p>模拟色觉的示例文本</p>
                                </div>
                            </div>
                            
                            <div class="suggestions-panel">
                                <h4>改进建议</h4>
                                <ul id="accessibility-suggestions">
                                    <li>点击"检查无障碍性"获取个性化建议。</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                heading: '色域映射模拟器',
                content: `
                    <div class="tool-container" id="gamut-simulator-tool">
                        <div class="tool-header">
                            <h3>📐 色域映射模拟器</h3>
                            <p class="tool-description">可视化在不同色彩空间之间转换时色彩的变化。</p>
                        </div>
                        
                        <div class="simulator-controls">
                            <div class="control-group">
                                <label>源色彩空间：</label>
                                <select id="source-space">
                                    <option value="prophoto">ProPhoto RGB</option>
                                    <option value="adobe-rgb">Adobe RGB</option>
                                    <option value="dci-p3">DCI-P3</option>
                                    <option value="srgb" selected>sRGB</option>
                                </select>
                            </div>
                            
                            <div class="control-group">
                                <label>目标色彩空间：</label>
                                <select id="dest-space">
                                    <option value="srgb" selected>sRGB</option>
                                    <option value="adobe-rgb">Adobe RGB</option>
                                    <option value="dci-p3">DCI-P3</option>
                                    <option value="rec2020">Rec.2020</option>
                                </select>
                            </div>
                            
                            <div class="control-group">
                                <label>渲染意图：</label>
                                <select id="sim-rendering-intent">
                                    <option value="perceptual">感知</option>
                                    <option value="relative">相对色度</option>
                                    <option value="absolute">绝对色度</option>
                                    <option value="saturation">饱和度</option>
                                </select>
                            </div>
                            
                            <div class="control-group">
                                <label>
                                    <input type="checkbox" id="black-point-comp" checked />
                                    黑点补偿
                                </label>
                            </div>
                        </div>
                        
                        <div class="simulator-preview">
                            <div class="preview-images">
                                <div class="preview-source">
                                    <h5>源图像</h5>
                                    <canvas id="source-canvas" width="300" height="200"></canvas>
                                </div>
                                <div class="preview-destination">
                                    <h5>目标（模拟）</h5>
                                    <canvas id="dest-canvas" width="300" height="200"></canvas>
                                </div>
                            </div>
                            
                            <div class="view-options">
                                <label>视图模式：</label>
                                <select id="sim-view-mode">
                                    <option value="side-by-side">并排</option>
                                    <option value="difference">差异视图</option>
                                    <option value="highlight-oog">高亮色域外</option>
                                </select>
                            </div>
                        </div>
                        
                        <button class="btn-run-simulation" id="run-simulation">▶ 运行模拟</button>
                        
                        <div class="simulator-analysis">
                            <h4>分析结果</h4>
                            <div class="analysis-metrics">
                                <div class="metric-card">
                                    <span class="metric-title">色域覆盖率</span>
                                    <span class="metric-number" id="gamut-coverage">--</span>
                                </div>
                                <div class="metric-card">
                                    <span class="metric-title">色域外像素</span>
                                    <span class="metric-number" id="oog-pixels">--</span>
                                </div>
                                <div class="metric-card">
                                    <span class="metric-title">平均Delta-E</span>
                                    <span class="metric-number" id="avg-delta-e">--</span>
                                </div>
                                <div class="metric-card">
                                    <span class="metric-title">最大Delta-E</span>
                                    <span class="metric-number" id="max-delta-e">--</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                heading: '提示与最佳实践',
                content: `
                    <h3>如何充分利用这些工具</h3>
                    
                    <div class="tips-grid">
                        <div class="tip-card">
                            <div class="tip-icon">🎯</div>
                            <h4>从色彩转换器开始</h4>
                            <p>使用它来理解色彩在不同格式中的表示方式。尝试转换你的品牌色彩以查看所有值。</p>
                        </div>
                        
                        <div class="tip-card">
                            <div class="tip-icon">⚖️</div>
                            <h4>检查色彩差异</h4>
                            <p>比较两种相似色彩时，使用Delta-E量化差异。对于色彩关键工作，保持ΔE &lt; 2.3。</p>
                        </div>
                        
                        <div class="tip-card">
                            <div class="tip-icon">♿</div>
                            <h4>始终检查无障碍性</h4>
                            <p>发布设计之前，验证对比度。至少达到AA合规性（4.5:1）。</p>
                        </div>
                        
                        <div class="tip-card">
                            <div class="tip-icon">🎨</div>
                            <h4>理解色域限制</h4>
                            <p>使用色域模拟器查看在不同色彩空间之间转换时会丢失哪些色彩。</p>
                        </div>
                    </div>
                    
                    <div class="quick-reference">
                        <h4>快速参考</h4>
                        <div class="reference-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>任务</th>
                                        <th>使用的工具</th>
                                        <th>可接受范围</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>品牌色彩匹配</td>
                                        <td>Delta-E计算器</td>
                                        <td>ΔE &lt; 2.0</td>
                                    </tr>
                                    <tr>
                                        <td>印刷打样</td>
                                        <td>色域模拟器</td>
                                        <td>ΔE &lt; 3.0</td>
                                    </tr>
                                    <tr>
                                        <td>网络无障碍</td>
                                        <td>无障碍检查器</td>
                                        <td>对比度 ≥ 4.5:1</td>
                                    </tr>
                                    <tr>
                                        <td>色彩格式转换</td>
                                        <td>色彩转换器</td>
                                        <td>不适用</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div class="next-steps">
                        <h3>继续学习</h3>
                        <div class="action-buttons">
                            <a href="#interaction-visual-example" class="btn btn-secondary">← 返回视觉示例</a>
                            <a href="#relative-information" class="btn btn-primary">下一步：其他资源 →</a>
                        </div>
                    </div>
                `
            }
        ]
    },

    'relative-information': {
        title: '其他资源与参考',
        subtitle: '进一步阅读和专业资源',
        meta: {
            readingTime: '5分钟',
            difficulty: '所有级别',
            type: '参考'
        },
        sections: [
            {
                heading: '标准组织',
                content: `
                    <h3>国际色彩联盟（ICC）</h3>
                    <p>ICC开发并推广跨平台和设备的色彩管理标准。</p>
                    <ul>
                        <li>网站：<a href="https://www.color.org" target="_blank">www.color.org</a></li>
                        <li>ICC配置文件规范</li>
                        <li>最佳实践文档</li>
                    </ul>
                    
                    <h3>CIE（国际照明委员会）</h3>
                    <p>光、照明、色彩和色彩空间的国际权威机构。</p>
                    <ul>
                        <li>网站：<a href="https://cie.co.at" target="_blank">cie.co.at</a></li>
                        <li>CIE 1931色彩空间定义</li>
                        <li>Delta-E计算标准</li>
                    </ul>
                `
            },
            {
                heading: '专业工具与软件',
                content: `
                    <h3>校准硬件</h3>
                    <ul>
                        <li><strong>X-Rite i1Display Pro：</strong>专业显示器校准仪</li>
                        <li><strong>Datacolor SpyderX：</strong>精确的显示器校准</li>
                        <li><strong>X-Rite i1Profiler：</strong>打印机特征化解决方案</li>
                    </ul>
                    
                    <h3>软件解决方案</h3>
                    <ul>
                        <li><strong>Adobe Creative Cloud：</strong>具有色彩管理的行业标准设计工具</li>
                        <li><strong>DaVinci Resolve：</strong>支持HDR的专业视频调色</li>
                        <li><strong>DisplayCAL：</strong>开源显示器校准</li>
                    </ul>
                `
            },
            {
                heading: '学习资源',
                content: `
                    <h3>书籍</h3>
                    <ul>
                        <li>"Real World Color Management" by Bruce Fraser</li>
                        <li>"Color Management for Photographers" by Andrew Rodney</li>
                        <li>"Digital Color Management" by Edward Giorgianni</li>
                    </ul>
                    
                    <h3>在线课程</h3>
                    <ul>
                        <li>LinkedIn Learning：色彩管理基础</li>
                        <li>CreativeLive：设计师的色彩理论</li>
                        <li>FXPHD：调色大师班</li>
                    </ul>
                    
                    <h3>社区</h3>
                    <ul>
                        <li>Reddit：r/colorists, r/graphic_design</li>
                        <li>Digital Photography Review论坛</li>
                        <li>专业调色师协会</li>
                    </ul>
                `
            },
            {
                heading: '行业标准',
                content: `
                    <h3>视频标准</h3>
                    <ul>
                        <li><strong>Rec.709：</strong>HDTV标准色彩空间</li>
                        <li><strong>Rec.2020：</strong>UHDTV广色域</li>
                        <li><strong>DCI-P3：</strong>数字影院标准</li>
                        <li><strong>HDR10/Dolby Vision：</strong>高动态范围格式</li>
                    </ul>
                    
                    <h3>印刷标准</h3>
                    <ul>
                        <li><strong>ISO 12647：</strong>印刷生产的过程控制</li>
                        <li><strong>GRACoL：</strong>商业平版印刷应用的一般要求</li>
                        <li><strong>Fogra：</strong>德国印刷研究组织标准</li>
                    </ul>
                    
                    <h3>网络标准</h3>
                    <ul>
                        <li><strong>WCAG 2.1：</strong>网页内容无障碍指南</li>
                        <li><strong>sRGB IEC 61966-2-1：</strong>标准默认色彩空间</li>
                    </ul>
                `
            }
        ]
    }
};
