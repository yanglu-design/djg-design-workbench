const bannerTemplates = {
  normal: {
    label: "普通通知",
    defaultMessage: "【通知】淘宝买家 8.20 起自动升级工作台，工作台已更新的用户，请通过新授权入口重新添加店铺！",
    defaultButtonText: "点击查看详情",
    defaultIcon: "normal",
    defaultDecoration: "click-hand",
    metrics: { contentWidth: 1082, buttonWidth: 130, contentLeftCenter: 358, contentLeftLeft: 72 },
    theme: {
      name: "green",
      background: {
        center: "linear-gradient(90deg, #FFFFFF 0%, #C3FFEA 19.745%, #C5FBFF 80.363%, #FFFFFF 100%)",
        left: "linear-gradient(90deg, #C3FFEA 0%, #C3FFEA 60.186%, #FFFFFF 100%)",
      },
      contentFill: "linear-gradient(270deg, #29B5D1 0%, #50D6AB 95%)",
      contentStroke: "linear-gradient(180deg, #D4FFEF 0%, #5DA1A1 100%)",
      buttonFill: "linear-gradient(270deg, #29B5D1 0%, #50D6AB 95%)",
      textColor: "#FFFFFF",
      iconA: "#26B7D3",
      iconB: "#50D6AB",
      iconAccent: "#FF78A8",
    },
  },
  feature: {
    label: "功能上线",
    defaultMessage: "【新功能上线】支持抖店多店铺批量发布精车短视频啦！",
    defaultButtonText: "立即参与",
    defaultIcon: "feature",
    defaultDecoration: "click-hand",
    metrics: { contentWidth: 558, buttonWidth: 130, contentLeftCenter: 620, contentLeftLeft: 72 },
    theme: {
      name: "blue",
      background: {
        center: "linear-gradient(90deg, #FFFFFF 0%, #C3E4FF 19.834%, #C6D3FF 79.836%, #FFFFFF 100%)",
        left: "linear-gradient(90deg, #C3E4FF 0%, #C3E4FF 59.766%, #FFFFFF 100%)",
      },
      contentFill: "linear-gradient(270deg, #6190FF 0%, #4CAEFF 95%)",
      contentStroke: "linear-gradient(180deg, #D4EDFF 0%, #0065E0 100%)",
      buttonFill: "linear-gradient(270deg, #6190FF 0%, #4CAEFF 95%)",
      textColor: "#FFFFFF",
      iconA: "#5B8DFF",
      iconB: "#4CAEFF",
      iconAccent: "#7C6EFF",
    },
  },
  important: {
    label: "重要公告",
    defaultMessage: "拼多多官方通知：跨境托管业务将在 7 月 1 日暂时下线，系统将不再同步跨境托管订单，请您悉知！",
    defaultButtonText: "立即参与",
    defaultIcon: "important",
    defaultDecoration: "click-hand",
    metrics: { contentWidth: 925, buttonWidth: 130, contentLeftCenter: 436.5, contentLeftLeft: 72 },
    theme: {
      name: "pink",
      background: {
        center: "linear-gradient(90deg, #FFFFFF 0%, #FFC3C3 19.8%, #FFC5DB 80.17%, #FFFFFF 100%)",
        left: "linear-gradient(90deg, #FFC3C3 0%, #FFC3C3 59.53%, #FFFFFF 100%)",
      },
      contentFill: "linear-gradient(270deg, #FF6161 0%, #FF4CA2 95%)",
      contentStroke: "linear-gradient(180deg, #FFD4F9 0%, #F13D66 100%)",
      buttonFill: "linear-gradient(270deg, #FF6161 0%, #FF4CA2 95%)",
      textColor: "#FFFFFF",
      iconA: "#FF4E63",
      iconB: "#FF4CA2",
      iconAccent: "#FFB347",
    },
  },
  survey: {
    label: "问卷调研",
    defaultMessage: "多店管理大客户专属调研：1 分钟填问卷，赢新功能优先体验权，高效管理少走弯路！",
    defaultButtonText: "立即参与",
    defaultIcon: "survey",
    defaultDecoration: "click-hand",
    metrics: { contentWidth: 832, buttonWidth: 130, contentLeftCenter: 489, contentLeftLeft: 84 },
    theme: {
      name: "survey-blue",
      background: {
        center: "linear-gradient(90deg, #FFFFFF 0%, #C3E4FF 19.834%, #C6D3FF 79.836%, #FFFFFF 100%)",
        left: "linear-gradient(90deg, #C3E4FF 0%, #C3E4FF 59.766%, #FFFFFF 100%)",
      },
      contentFill: "linear-gradient(270deg, #6190FF 0%, #4CAEFF 95%)",
      contentStroke: "linear-gradient(180deg, #D4EDFF 0%, #0065E0 100%)",
      buttonFill: "linear-gradient(270deg, #6190FF 0%, #4CAEFF 95%)",
      textColor: "#FFFFFF",
      iconA: "#5D8DFF",
      iconB: "#42B4FF",
      iconAccent: "#8BE0FF",
    },
  },
  revisit: {
    label: "调研回访",
    defaultMessage: "多店管理大客户专属调研：1 分钟填问卷，赢新功能优先体验权，高效管理少走弯路！",
    defaultButtonText: "立即参与",
    defaultIcon: "revisit",
    defaultDecoration: "click-hand",
    metrics: { contentWidth: 832, buttonWidth: 130, contentLeftCenter: 483, contentLeftLeft: 72 },
    theme: {
      name: "purple",
      background: {
        center: "linear-gradient(90deg, #FFFFFF 0%, #F4C5FF 19.941%, #E5C3FF 79.831%, #FFFFFF 100%)",
        left: "linear-gradient(90deg, #E5C3FF 0%, #E5C3FF 40.307%, #FFFFFF 100%)",
      },
      contentFill: "linear-gradient(90deg, #9B6EE8 0%, #B076EB 100%)",
      contentStroke: "linear-gradient(180deg, #D8B2FF 0%, #794DC1 100%)",
      buttonFill: "linear-gradient(90deg, #9B6EE8 0%, #B076EB 100%)",
      textColor: "#FFFFFF",
      iconA: "#8D5FDA",
      iconB: "#C17AF3",
      iconAccent: "#76A8FF",
    },
  },
  tutorial: {
    label: "教程引导",
    defaultMessage: "店铺和电子面单服务到期、授权过期怎么办？",
    defaultButtonText: "点击查看视频教程",
    defaultIcon: "tutorial",
    defaultDecoration: "click-hand",
    metrics: { contentWidth: 456, buttonWidth: 211, contentLeftCenter: 630.5, contentLeftLeft: 72 },
    theme: {
      name: "tutorial-blue",
      background: {
        center: "linear-gradient(90deg, #FFFFFF 0%, #C3E4FF 19.834%, #C6D3FF 79.836%, #FFFFFF 100%)",
        left: "linear-gradient(90deg, #C3E4FF 0%, #C3E4FF 59.766%, #FFFFFF 100%)",
      },
      contentFill: "linear-gradient(270deg, #6190FF 0%, #4CAEFF 95%)",
      contentStroke: "linear-gradient(180deg, #D4EDFF 0%, #0065E0 100%)",
      buttonFill: "linear-gradient(270deg, #6190FF 0%, #4CAEFF 95%)",
      textColor: "#FFFFFF",
      iconA: "#4D8CFF",
      iconB: "#49B8FF",
      iconAccent: "#FFD36A",
    },
  },
};

const alignOptions = [
  { value: "center", label: "居中" },
  { value: "left", label: "左对齐" },
];

const iconAssetMap = {
  normal: "./icon/提示装饰-普通通知.svg?v=20260604-1132",
  feature: "./icon/提示装饰-功能上线.svg",
  important: "./icon/提示装饰-重要通知.svg?v=20260604-1132",
  survey: "./icon/提示装饰-问卷调研.svg",
  revisit: "./icon/提示装饰-调研回访.svg",
  tutorial: "./icon/提示装饰-教程引导.svg",
};

const decorationAssetMap = {
  "click-hand": "./icon/指引装饰-通用.svg",
};

const iconDataFileMap = {
  normal: "./src/icon-data/normal.js?v=20260610-lazy-icons-2",
  feature: "./src/icon-data/feature.js?v=20260610-lazy-icons-2",
  important: "./src/icon-data/important.js?v=20260610-lazy-icons-2",
  survey: "./src/icon-data/survey.js?v=20260610-lazy-icons-2",
  revisit: "./src/icon-data/revisit.js?v=20260610-lazy-icons-2",
  tutorial: "./src/icon-data/tutorial.js?v=20260610-lazy-icons-2",
  "click-hand": "./src/icon-data/click-hand.js?v=20260610-lazy-icons-2",
};

const iconDataLoaders = new Map();

function getIconSource(type) {
  return getInlineAssetSource(type) || iconAssetMap[type] || iconAssetMap.normal;
}

function getDecorationSource(type) {
  return getInlineAssetSource(type) || decorationAssetMap[type] || decorationAssetMap["click-hand"];
}

function getInlineAssetSource(type) {
  return window.bannerIconChunks?.[type] || "";
}

function ensureInlineAsset(type) {
  if (!type || getInlineAssetSource(type)) {
    return Promise.resolve(getInlineAssetSource(type));
  }

  if (iconDataLoaders.has(type)) {
    return iconDataLoaders.get(type);
  }

  const src = iconDataFileMap[type];
  if (!src) {
    return Promise.resolve("");
  }

  const loader = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.async = true;
    script.src = src;
    script.onload = () => resolve(getInlineAssetSource(type));
    script.onerror = () => reject(new Error(`图标素材加载失败：${type}`));
    document.head.append(script);
  });

  iconDataLoaders.set(type, loader);
  return loader;
}

function getConfigAssetTypes(config) {
  return [
    config.icon.enabled ? config.icon.type : "",
    config.decoration.enabled ? config.decoration.type : "",
  ].filter(Boolean);
}

async function ensureConfigAssets(config) {
  await Promise.all(getConfigAssetTypes(config).map((type) => ensureInlineAsset(type)));
}

function getAllTemplateAssetTypes() {
  const types = Object.values(bannerTemplates).flatMap((template) => [
    template.defaultIcon,
    template.defaultDecoration,
  ]);
  return Array.from(new Set(types.filter(Boolean)));
}

function scheduleTemplateAssetPreload() {
  const preload = () => {
    Promise.allSettled(getAllTemplateAssetTypes().map((type) => ensureInlineAsset(type)))
      .then((results) => {
        results
          .filter((result) => result.status === "rejected")
          .forEach((result) => console.warn(result.reason));
        renderAll();
      });
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(preload, { timeout: 1000 });
  } else {
    window.setTimeout(preload, 0);
  }
}

const fieldIds = {
  templateType: "templateType",
  align: "align",
  message: "message",
  buttonText: "buttonText",
  preview: "previewMount",
  download: "downloadBtn",
  reset: "resetBtn",
  messageCount: "messageCount",
};

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function getField(id) {
  return document.getElementById(id);
}

function getFieldValue(id) {
  const field = getField(id);
  if (!field) return "";
  if (field.type === "checkbox") return field.checked;
  return field.value || "";
}

function setFieldValue(id, value) {
  const field = getField(id);
  if (!field) return;
  if (field.type === "checkbox") {
    field.checked = Boolean(value);
  } else {
    field.value = value;
  }
}

function getTemplateType() {
  return getFieldValue(fieldIds.templateType) || "normal";
}

function getTemplate() {
  return bannerTemplates[getTemplateType()] || bannerTemplates.normal;
}

function measureTextWidth(text) {
  const value = String(text);
  if (typeof document !== "undefined") {
    const canvas = measureTextWidth.canvas || document.createElement("canvas");
    const context = canvas.getContext("2d");
    measureTextWidth.canvas = canvas;
    if (context) {
      context.font = '700 18px "Alimama ShuHeiTi", "PingFang SC", "Microsoft YaHei", sans-serif';
      return Math.ceil(context.measureText(value).width);
    }
  }

  let fallbackWidth = 0;
  for (const char of value) {
    fallbackWidth += /[\u4e00-\u9fa5]/.test(char) ? 18 : 9;
  }
  return fallbackWidth;
}

function buildConfig() {
  const templateType = getTemplateType();
  const template = bannerTemplates[templateType];
  const align = getFieldValue(fieldIds.align) || "center";
  const message = getFieldValue(fieldIds.message);
  const buttonText = getFieldValue(fieldIds.buttonText);

  return {
    type: "banner",
    templateType,
    templateName: template.label,
    layout: align,
    height: 60,
    radius: 22,
    metrics: {
      canvasWidth: 1920,
      contentHeight: 44,
      contentWidth: Math.max(176, measureTextWidth(message) + 64),
      buttonWidth: Math.max(template.metrics.buttonWidth, measureTextWidth(buttonText) + 56),
      gap: 16,
    },
    theme: template.theme,
    icon: {
      enabled: true,
      type: template.defaultIcon,
    },
    content: {
      message,
      nowrap: true,
    },
    button: {
      enabled: Boolean(buttonText),
      text: buttonText,
    },
    decoration: {
      enabled: Boolean(buttonText),
      type: template.defaultDecoration,
    },
  };
}

function initPage() {
  getField("root").innerHTML = `
    <main class="appShell">
      <aside class="sidebar">
        <div class="brandBlock">
          <div class="brandMark" aria-hidden="true">${WorkbenchIcon("spark")}</div>
          <div class="brandText">
            <strong>店管家设计工作台</strong>
            <span>高效设计·规范输出·团队协同</span>
          </div>
        </div>

        <nav class="sideNav" aria-label="设计工作台导航">
          <a class="navItem" href="#" aria-current="false">
            <span class="navIcon" aria-hidden="true">${WorkbenchIcon("home")}</span>
            <span>首页</span>
          </a>
          <div class="navGroup">
            <span class="navGroupTitle">设计工具</span>
            <a class="navItem isActive" href="#" aria-current="page">
              <span class="navIcon" aria-hidden="true">${WorkbenchIcon("send")}</span>
              <span>横幅广告配置器</span>
            </a>
            <a class="navItem" href="#" aria-current="false">
              <span class="navIcon" aria-hidden="true">${WorkbenchIcon("notice")}</span>
              <span>公告弹窗配置器</span>
            </a>
          </div>
          <div class="navGroup">
            <span class="navGroupTitle">我的资产</span>
            <a class="navItem" href="#" aria-current="false">
              <span class="navIcon" aria-hidden="true">${WorkbenchIcon("folder")}</span>
              <span>我的项目</span>
            </a>
            <a class="navItem" href="#" aria-current="false">
              <span class="navIcon" aria-hidden="true">${WorkbenchIcon("trash")}</span>
              <span>回收站</span>
            </a>
          </div>
        </nav>

        <div class="welcomeCard" aria-hidden="true">
          <div class="welcomeGlow"></div>
          <strong>设计素材中心</strong>
          <span>模板、项目与规范统一管理</span>
        </div>
      </aside>

      <section class="workbenchMain">
        <header class="pageHeader">
          <div>
            <h1>横幅广告配置器</h1>
            <p>配置系统横幅广告内容，实时预览效果并下载使用</p>
          </div>
          <div class="headerActions">
            <button class="secondaryButton" id="${fieldIds.reset}" type="button">
              <span class="buttonIcon" aria-hidden="true">${ResetIcon()}</span>
              <span>重置当前模板</span>
            </button>
            <button class="primaryButton downloadButton" id="${fieldIds.download}" type="button">
              <span class="buttonIcon" aria-hidden="true">${DownloadIcon()}</span>
              <span>下载 PNG</span>
            </button>
          </div>
        </header>

        <section class="workspace">
          <section class="previewPanel">
            <div class="previewHeader">
              <h2>实时预览</h2>
              <p>横幅尺寸固定为：1920*60</p>
            </div>
            <div class="previewViewport">
              <div id="${fieldIds.preview}"></div>
            </div>
          </section>

          <aside class="configPanel">
            <h2>内容配置</h2>
            <div class="configGrid">
              ${FormSelect(fieldIds.align, "布局", alignOptions)}
              ${FormSelect(fieldIds.templateType, "模版类型", Object.entries(bannerTemplates).map(([value, item]) => ({ value, label: item.label })))}
              <label class="formControl">
                <span>按钮文案</span>
                <input id="${fieldIds.buttonText}" type="text" autocomplete="off" />
              </label>
              <label class="formControl formControlFull">
                <span>广告内容</span>
                <textarea id="${fieldIds.message}" rows="4" autocomplete="off"></textarea>
                <span class="messageMeta">
                  <span>建议字数：10~100 字</span>
                  <span id="${fieldIds.messageCount}">0 / 100</span>
                </span>
              </label>
            </div>
          </aside>

          <div class="tipBar">
            <span class="tipIcon" aria-hidden="true">i</span>
            <span>提示：横幅将展示在工作台页面顶部，建议内容简洁明确，突出重点信息。</span>
          </div>
        </section>
      </section>
    </main>
  `;

  bindEvents();
  applyTemplateDefaults("normal");
  renderAll();
  scheduleTemplateAssetPreload();
}

function FormSelect(id, label, options) {
  return `
    <label class="formControl">
      <span>${label}</span>
      <select id="${id}">
        ${options.map((item) => `<option value="${item.value}">${item.label}</option>`).join("")}
      </select>
    </label>
  `;
}

function bindEvents() {
  getField(fieldIds.templateType).addEventListener("change", (event) => {
    applyTemplateDefaults(event.target.value);
    renderAll();
  });

  [
    fieldIds.align,
    fieldIds.message,
    fieldIds.buttonText,
  ].forEach((id) => {
    const field = getField(id);
    field.addEventListener("input", renderAll);
    field.addEventListener("change", renderAll);
    field.addEventListener("keyup", renderAll);
  });

  getField(fieldIds.reset).addEventListener("click", () => {
    applyTemplateDefaults(getTemplateType());
    renderAll();
  });

  getField(fieldIds.download).addEventListener("click", downloadPreviewPng);
}

function applyTemplateDefaults(templateType) {
  const template = bannerTemplates[templateType] || bannerTemplates.normal;
  setFieldValue(fieldIds.templateType, templateType);
  setFieldValue(fieldIds.message, template.defaultMessage);
  setFieldValue(fieldIds.buttonText, template.defaultButtonText);
}

function renderAll() {
  const config = buildConfig();
  BannerPreview(getField(fieldIds.preview), config);
  updateMessageMeta(config.content.message);
}

function updateMessageMeta(message) {
  const count = String(message).length;
  const countNode = getField(fieldIds.messageCount);
  if (countNode) {
    countNode.textContent = `${count} / 100`;
  }
}

function ResetIcon() {
  return `
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M4 12a8 8 0 1 0 2.34-5.66L4 8.68"/>
      <path d="M4 4v4.68h4.68"/>
    </svg>
  `;
}

function DownloadIcon() {
  return `
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      <path d="M12 3v12"/>
      <path d="m7 10 5 5 5-5"/>
      <path d="M5 19h14"/>
    </svg>
  `;
}

function WorkbenchIcon(type) {
  const icons = {
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/>',
    send: '<path d="M21 3 10 14"/><path d="m21 3-7 18-4-7-7-4 18-7Z"/>',
    notice: '<path d="M4 5h16v12H7l-3 3V5Z"/><path d="M8 9h8"/><path d="M8 13h5"/>',
    folder: '<path d="M3 6h7l2 2h9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z"/>',
    trash: '<path d="M4 7h16"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M6 7l1 14h10l1-14"/><path d="M9 7V4h6v3"/>',
    spark: '<path d="M12 2v6"/><path d="M12 16v6"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="M2 12h6"/><path d="M16 12h6"/><path d="m4.93 19.07 4.24-4.24"/><path d="m14.83 9.17 4.24-4.24"/>',
  };

  return `
    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
      ${icons[type] || icons.home}
    </svg>
  `;
}

function BannerPreview(mount, config) {
  mount.innerHTML = "";
  const canvas = BannerBackground(config);
  const track = createElement("div", "bannerTrack");
  const content = BannerContent(config);
  const button = BannerButton(config);

  track.append(content);
  if (button) track.append(button);
  if (config.decoration.enabled && config.button.enabled) {
    track.append(BannerDecoration(config.decoration.type));
  }

  canvas.append(track);
  mount.append(canvas);
}

function BannerBackground(config) {
  const canvas = createElement("div", `bannerCanvas bannerCanvas-${config.layout} theme-${config.theme.name}`);
  canvas.style.setProperty("--banner-bg", config.theme.background[config.layout]);
  return canvas;
}

function BannerContent(config) {
  const content = createElement("div", "bannerContentLayer");
  content.style.setProperty("--content-fill", config.theme.contentFill);
  content.style.setProperty("--content-stroke", config.theme.contentStroke);
  content.style.setProperty("--content-width", `${config.metrics.contentWidth}px`);
  content.style.setProperty("--text-color", config.theme.textColor);

  if (config.icon.enabled) {
    content.append(BannerIcon(config.icon.type));
  }

  const text = createElement("span", "bannerMessage", config.content.message);
  content.append(text);
  return content;
}

function BannerButton(config) {
  if (!config.button.enabled) return null;
  const buttonWrap = createElement("div", "bannerButtonLayer");
  buttonWrap.style.setProperty("--button-fill", config.theme.buttonFill);
  buttonWrap.style.setProperty("--button-stroke", config.theme.contentStroke);
  buttonWrap.style.setProperty("--button-width", `${config.metrics.buttonWidth}px`);
  buttonWrap.style.setProperty("--text-color", config.theme.textColor);

  const buttonText = createElement("span", "bannerButtonText", config.button.text);
  buttonWrap.append(buttonText);
  return buttonWrap;
}

function BannerIcon(type) {
  const icon = createElement("img", "bannerIcon");
  icon.src = getIconSource(type);
  icon.alt = "";
  icon.decoding = "async";
  icon.draggable = false;
  return icon;
}

function BannerDecoration(type) {
  const decor = createElement("img", "bannerDecoration");
  decor.src = getDecorationSource(type);
  decor.alt = "";
  decor.decoding = "async";
  decor.draggable = false;
  return decor;
}

async function downloadPreviewPng(event) {
  const button = event.currentTarget;
  const originalText = getButtonLabel(button);
  setButtonLabel(button, "生成中");

  try {
    const config = buildConfig();
    await ensureConfigAssets(config);
    const canvas = await renderPreviewSvgToCanvas(config);
    const blob = await canvasToPngBlob(canvas);
    await savePngBlob(blob, `${config.templateType}-banner.png`);
    setButtonLabel(button, "已下载");
  } catch (error) {
    console.error(error);
    setButtonLabel(button, "下载失败");
  }

  window.setTimeout(() => {
    setButtonLabel(button, originalText);
  }, 1200);
}

function getButtonLabel(button) {
  return button.querySelector("span:last-child")?.textContent || button.textContent;
}

function setButtonLabel(button, text) {
  const label = button.querySelector("span:last-child");
  if (label) {
    label.textContent = text;
  } else {
    button.textContent = text;
  }
}

async function renderPreviewSvgToCanvas(config) {
  const { host, source } = createExportPreviewSource(config);
  if (!source) {
    host.remove();
    throw new Error("未找到可下载的预览图");
  }

  try {
    const canvasRect = source.getBoundingClientRect();
    const width = Math.ceil(canvasRect.width);
    const height = Math.ceil(canvasRect.height);
    const content = source.querySelector(".bannerContentLayer");
    const button = source.querySelector(".bannerButtonLayer");
    const icon = source.querySelector(".bannerIcon");
    const decoration = source.querySelector(".bannerDecoration");
    const message = source.querySelector(".bannerMessage");
    const buttonText = source.querySelector(".bannerButtonText");

    if (!content || !message) {
      throw new Error("预览内容不完整，无法生成 PNG");
    }

    const contentRect = getRelativeRect(content, canvasRect);
    const buttonRect = button ? getRelativeRect(button, canvasRect) : null;
    const iconRect = icon ? getRelativeRect(icon, canvasRect) : null;
    const decorationRect = decoration ? getRelativeRect(decoration, canvasRect) : null;
    const messageRect = getRelativeRect(message, canvasRect);
    const buttonTextRect = buttonText ? getRelativeRect(buttonText, canvasRect) : null;
    const iconHref = icon ? await imageElementToHref(icon) : "";
    const decorationHref = decoration ? await imageElementToHref(decoration) : "";
    const defs = [
      svgLinearGradient("bannerBg", config.theme.background[config.layout]),
      svgLinearGradient("contentFill", config.theme.contentFill),
      svgLinearGradient("contentStroke", config.theme.contentStroke, "vertical"),
      svgLinearGradient("buttonFill", config.theme.buttonFill),
    ].join("");

    const parts = [
      `<rect x="0" y="0" width="${width}" height="${height}" fill="url(#bannerBg)"/>`,
      svgPill(contentRect, "contentStroke"),
      svgPill(insetRect(contentRect, 1), "contentFill"),
    ];

    if (iconHref && iconRect) {
      parts.push(svgImage(iconHref, iconRect));
    }

    parts.push(svgText(config.content.message, messageRect.x, height / 2 + 1, "start", config.theme.textColor));

    if (buttonRect && config.button.enabled) {
      parts.push(svgPill(buttonRect, "contentStroke"));
      parts.push(svgPill(insetRect(buttonRect, 1), "buttonFill"));
      if (buttonTextRect) {
        parts.push(svgText(config.button.text, buttonRect.x + buttonRect.width / 2, height / 2 + 1, "middle", config.theme.textColor));
      }
    }

    if (decorationHref && decorationRect) {
      parts.push(svgImage(decorationHref, decorationRect));
    }

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
        <defs>${defs}</defs>
        ${parts.join("")}
      </svg>
    `;
    const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    try {
      const image = await loadImage(url);
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0);
      return canvas;
    } finally {
      URL.revokeObjectURL(url);
    }
  } finally {
    host.remove();
  }
}

function createExportPreviewSource(config) {
  const host = document.createElement("div");
  host.style.cssText = [
    "height:60px",
    "left:-9999px",
    "opacity:0",
    "overflow:visible",
    "pointer-events:none",
    "position:fixed",
    "top:0",
    "width:1920px",
  ].join(";");

  BannerPreview(host, config);
  document.body.append(host);

  const source = host.querySelector(".bannerCanvas");
  if (source) {
    source.style.minWidth = "1920px";
    source.style.width = "1920px";
  }

  return { host, source };
}

function getRelativeRect(element, parentRect) {
  const rect = element.getBoundingClientRect();
  return {
    x: rect.left - parentRect.left,
    y: rect.top - parentRect.top,
    width: rect.width,
    height: rect.height,
  };
}

function insetRect(rect, inset) {
  return {
    x: rect.x + inset,
    y: rect.y + inset,
    width: rect.width - inset * 2,
    height: rect.height - inset * 2,
  };
}

async function imageElementToHref(image) {
  try {
    return await imageToDataUrl(image);
  } catch {
    return image.currentSrc || image.src;
  }
}

async function imageToDataUrl(image) {
  if (!image.complete && image.decode) {
    await image.decode();
  }

  const width = image.naturalWidth || image.width;
  const height = image.naturalHeight || image.height;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0, width, height);
  return canvas.toDataURL("image/png");
}

function svgPill(rect, fillId) {
  const radius = rect.height / 2;
  return `<rect x="${round(rect.x)}" y="${round(rect.y)}" width="${round(rect.width)}" height="${round(rect.height)}" rx="${round(radius)}" fill="url(#${fillId})"/>`;
}

function svgImage(href, rect) {
  return `<image href="${escapeAttribute(href)}" x="${round(rect.x)}" y="${round(rect.y)}" width="${round(rect.width)}" height="${round(rect.height)}" preserveAspectRatio="xMidYMid meet"/>`;
}

function svgText(text, x, y, anchor, color) {
  return `<text x="${round(x)}" y="${round(y)}" fill="${escapeAttribute(color)}" font-family="Alimama ShuHeiTi, PingFang SC, Microsoft YaHei, sans-serif" font-size="18" font-weight="700" dominant-baseline="middle" text-anchor="${anchor}">${escapeText(text)}</text>`;
}

function svgLinearGradient(id, value, fallbackDirection) {
  const colors = String(value).match(/#[0-9a-fA-F]{6}/g) || ["#FFFFFF"];
  const isVertical = fallbackDirection === "vertical" || String(value).includes("180deg");
  const reverse = String(value).includes("270deg");
  const vector = isVertical
    ? 'x1="0%" y1="0%" x2="0%" y2="100%"'
    : reverse
      ? 'x1="100%" y1="0%" x2="0%" y2="0%"'
      : 'x1="0%" y1="0%" x2="100%" y2="0%"';
  const stops = colors.map((color, index) => {
    const offset = colors.length === 1 ? 0 : index / (colors.length - 1);
    return `<stop offset="${round(offset * 100)}%" stop-color="${color}"/>`;
  }).join("");
  return `<linearGradient id="${id}" ${vector}>${stops}</linearGradient>`;
}

function escapeText(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttribute(value) {
  return escapeText(value).replace(/"/g, "&quot;");
}

function round(value) {
  return Math.round(value * 100) / 100;
}

function canvasToPngBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error("无法生成 PNG 图片"));
      }
    }, "image/png");
  });
}

async function savePngBlob(blob, filename) {
  if (window.showSaveFilePicker) {
    const handle = await window.showSaveFilePicker({
      suggestedName: filename,
      types: [
        {
          description: "PNG 图片",
          accept: { "image/png": [".png"] },
        },
      ],
    });
    const writable = await handle.createWritable();
    await writable.write(blob);
    await writable.close();
    return;
  }

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

initPage();
