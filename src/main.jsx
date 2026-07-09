import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Button,
  Card,
  ConfigProvider,
  Flex,
  Form,
  Input,
  Layout,
  Menu,
  message as antdMessage,
  Radio,
  Select,
  Space,
  Switch,
  Typography,
  theme as antdTheme,
} from "antd";
import {
  ArrowRightOutlined,
  BellOutlined,
  DownloadOutlined,
  HomeOutlined,
  ReloadOutlined,
  SendOutlined,
  StopOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";
import "./styles.css";

const { Sider, Content } = Layout;
const { Text, Title } = Typography;
const DOWNLOAD_SCALE = 2;
const logoUrl = new URL("../icon/logo.png", import.meta.url).href;
const welcomeUrl = new URL("../icon/欢迎图.webp", import.meta.url).href;
const homeToolImageMap = {
  banner: new URL("../icon/功能配图/横幅广告配置器.webp", import.meta.url).href,
  modal: new URL("../icon/功能配图/公告弹窗配置器.webp", import.meta.url).href,
  poster: new URL("../icon/功能配图/活动海报生成器.webp", import.meta.url).href,
  detail: new URL("../icon/功能配图/详情页模块编辑器.webp", import.meta.url).href,
};
const modalBackgroundMap = {
  paragraph: new URL("../icon/段落式模版背景.svg", import.meta.url).href,
  points: new URL("../icon/分点式模版背景.svg", import.meta.url).href,
};
const modalSubtitleIconUrl = new URL("../icon/提升icon.svg", import.meta.url).href;
const modalPlatformLogos = {
  douyin: {
    label: "抖音",
    src: new URL("../icon/平台logo/抖音.svg", import.meta.url).href,
  },
  aikucun: {
    label: "爱库存",
    src: new URL("../icon/平台logo/爱库存16.svg", import.meta.url).href,
  },
  beibei: {
    label: "贝贝",
    src: new URL("../icon/平台logo/贝贝16.svg", import.meta.url).href,
  },
  bilibili: {
    label: "B站",
    src: new URL("../icon/平台logo/B站16.svg", import.meta.url).href,
  },
  huoshan: {
    label: "火山",
    src: new URL("../icon/平台logo/火山16.svg", import.meta.url).href,
  },
  instantRetail: {
    label: "即时零售",
    src: new URL("../icon/平台logo/即时零售16.svg", import.meta.url).href,
  },
  instantRetailGreen: {
    label: "即时零售绿",
    src: new URL("../icon/平台logo/即时零售-绿16.svg", import.meta.url).href,
  },
  instantRetailSource: {
    label: "即时零售货源",
    src: new URL("../icon/平台logo/即时零售货源16.svg", import.meta.url).href,
  },
  mengtui: {
    label: "萌推",
    src: new URL("../icon/平台logo/萌推16.svg", import.meta.url).href,
  },
  tmall: {
    label: "天猫",
    src: new URL("../icon/平台logo/天猫16.svg", import.meta.url).href,
  },
  taote: {
    label: "淘特",
    src: new URL("../icon/平台logo/淘特16.svg", import.meta.url).href,
  },
  xianyu: {
    label: "闲鱼",
    src: new URL("../icon/平台logo/闲鱼16.svg", import.meta.url).href,
  },
  meituan: {
    label: "美团",
    src: new URL("../icon/平台logo/美团16.svg", import.meta.url).href,
  },
  dewu: {
    label: "得物",
    src: new URL("../icon/平台logo/得物16.svg", import.meta.url).href,
  },
  shopeeCn: {
    label: "虾皮",
    src: new URL("../icon/平台logo/虾皮-16.svg", import.meta.url).href,
  },
  tiktok: {
    label: "TikTok",
    src: new URL("../icon/平台logo/TikTok16.svg", import.meta.url).href,
  },
  wechatSupplier: {
    label: "微信小店供货商",
    src: new URL("../icon/平台logo/微信小店供货商16.svg", import.meta.url).href,
  },
  yunji: {
    label: "云集",
    src: new URL("../icon/平台logo/云集16.svg", import.meta.url).href,
  },
};

const modalPlatformLogoOptions = [
  {
    value: "none",
    title: "无 logo",
    label: <StopOutlined className="platformOptionIcon platformOptionEmptyIcon" />,
  },
  ...Object.entries(modalPlatformLogos).map(([value, item]) => ({
    value,
    title: item.label,
    label: <img className="platformOptionIcon" src={item.src} alt={item.label} />,
  })),
];

function getModalPlatformLogoSource(value) {
  if (value === "none") return "";
  return (modalPlatformLogos[value] || modalPlatformLogos.douyin).src;
}

const bannerTemplates = {
  normal: {
    label: "普通通知",
    defaultMessage: "【通知】淘宝买家 8.20 起自动升级工作台，工作台已更新的用户，请通过新授权入口重新添加店铺！",
    defaultButtonText: "点击查看详情",
    defaultIcon: "normal",
    defaultDecoration: "click-hand",
    metrics: { buttonWidth: 130 },
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
    },
  },
  feature: {
    label: "功能上线",
    defaultMessage: "【新功能上线】支持抖店多店铺批量发布精车短视频啦！",
    defaultButtonText: "立即参与",
    defaultIcon: "feature",
    defaultDecoration: "click-hand",
    metrics: { buttonWidth: 130 },
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
    },
  },
  important: {
    label: "重要公告",
    defaultMessage: "拼多多官方通知：跨境托管业务将在 7 月 1 日暂时下线，系统将不再同步跨境托管订单，请您悉知！",
    defaultButtonText: "立即参与",
    defaultIcon: "important",
    defaultDecoration: "click-hand",
    metrics: { buttonWidth: 130 },
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
    },
  },
  survey: {
    label: "问卷调研",
    defaultMessage: "多店管理大客户专属调研：1 分钟填问卷，赢新功能优先体验权，高效管理少走弯路！",
    defaultButtonText: "立即参与",
    defaultIcon: "survey",
    defaultDecoration: "click-hand",
    metrics: { buttonWidth: 130 },
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
    },
  },
  revisit: {
    label: "调研回访",
    defaultMessage: "多店管理大客户专属调研：1 分钟填问卷，赢新功能优先体验权，高效管理少走弯路！",
    defaultButtonText: "立即参与",
    defaultIcon: "revisit",
    defaultDecoration: "click-hand",
    metrics: { buttonWidth: 130 },
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
    },
  },
  tutorial: {
    label: "教程引导",
    defaultMessage: "店铺和电子面单服务到期、授权过期怎么办？",
    defaultButtonText: "点击查看视频教程",
    defaultIcon: "tutorial",
    defaultDecoration: "click-hand",
    metrics: { buttonWidth: 211 },
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
    },
  },
};

const alignOptions = [
  { value: "left", label: "左对齐" },
  { value: "center", label: "居中" },
];

const modalTemplates = {
  paragraph: {
    label: "段落式介绍模版",
    title: "抖店预发货功能上线",
    subtitle: "提升订单处理效率",
    tipType: "正文下方",
    tipText: "获取单号后，请尽快完成面单打印和快递揽收，避免产生时效违规",
    body: "商家可提前获取单号并同步平台发货，后续再集中打印面单、安排快递揽收。该功能可帮助订单更快进入发货状态，有效减少买家冲动退款，提升订单留存。",
    buttonText: "查看详情",
  },
  points: {
    label: "分点式介绍模版",
    title: "1688商家请注意！",
    subtitle: "抖音8月即将升级【发货规则】",
    platformLogo: "douyin",
    tipType: "公告尾部",
    tipText: "已按揽收时间考核商家，提高发货速度及物流质量，可促进分销商品获取更多下游流量！",
    body: "·发货揽收标准将变化\n·商家发货超时定义变化\n·商家发货时间认定变化",
    buttonText: "查看详情",
  },
};

const tipPlacementOptions = [
  { value: "正文下方", label: "正文下方" },
  { value: "公告尾部", label: "公告尾部" },
];

const iconAssetMap = {
  normal: new URL("../icon/提示装饰-普通通知.webp", import.meta.url).href,
  feature: new URL("../icon/提示装饰-功能上线.webp", import.meta.url).href,
  important: new URL("../icon/提示装饰-重要通知.webp", import.meta.url).href,
  survey: new URL("../icon/提示装饰-问卷调研.webp", import.meta.url).href,
  revisit: new URL("../icon/提示装饰-调研回访.webp", import.meta.url).href,
  tutorial: new URL("../icon/提示装饰-教程引导.webp", import.meta.url).href,
};

const decorationAssetMap = {
  "click-hand": new URL("../icon/指引装饰-通用.webp", import.meta.url).href,
};

const iconDataImportMap = {
  normal: () => import("./icon-data/normal.js"),
  feature: () => import("./icon-data/feature.js"),
  important: () => import("./icon-data/important.js"),
  survey: () => import("./icon-data/survey.js"),
  revisit: () => import("./icon-data/revisit.js"),
  tutorial: () => import("./icon-data/tutorial.js"),
  "click-hand": () => import("./icon-data/click-hand.js"),
};

const iconDataLoaders = new Map();

function getInlineAssetSource(type) {
  return window.bannerIconChunks?.[type] || "";
}

function getIconSource(type) {
  return getInlineAssetSource(type) || iconAssetMap[type] || iconAssetMap.normal;
}

function getDecorationSource(type) {
  return getInlineAssetSource(type) || decorationAssetMap[type] || decorationAssetMap["click-hand"];
}

function ensureInlineAsset(type) {
  if (!type || getInlineAssetSource(type)) return Promise.resolve(getInlineAssetSource(type));
  if (iconDataLoaders.has(type)) return iconDataLoaders.get(type);

  const importer = iconDataImportMap[type];
  if (!importer) return Promise.resolve("");

  const loader = importer()
    .then(() => getInlineAssetSource(type))
    .catch((error) => {
      iconDataLoaders.delete(type);
      throw error;
    });

  iconDataLoaders.set(type, loader);
  return loader;
}

function measureTextWidth(text) {
  const value = String(text);
  const canvas = measureTextWidth.canvas || document.createElement("canvas");
  const context = canvas.getContext("2d");
  measureTextWidth.canvas = canvas;
  if (context) {
    context.font = '700 20px "Alimama ShuHeiTi", "PingFang SC", "Microsoft YaHei", sans-serif';
    return Math.ceil(context.measureText(value).width);
  }

  return Array.from(value).reduce((sum, char) => sum + (/[\u4e00-\u9fa5]/.test(char) ? 20 : 10), 0);
}

function buildConfig(state) {
  const template = bannerTemplates[state.templateType] || bannerTemplates.normal;
  const contentWidth = Math.max(176, measureTextWidth(state.message) + 64);
  const buttonWidth = Math.max(template.metrics.buttonWidth, measureTextWidth(state.buttonText) + 56);
  const trackWidth = contentWidth + (state.buttonText ? buttonWidth + 16 + 24 : 0);

  return {
    type: "banner",
    templateType: state.templateType,
    templateName: template.label,
    layout: state.align,
    height: 60,
    radius: 22,
    metrics: {
      canvasWidth: 1920,
      contentHeight: 44,
      contentWidth,
      buttonWidth,
      gap: 16,
      previewWidth: Math.min(1920, Math.max(1200, trackWidth + 120)),
    },
    theme: template.theme,
    icon: {
      enabled: true,
      type: template.defaultIcon,
    },
    content: {
      message: state.message,
      highlightRanges: state.highlightRanges || [],
      nowrap: true,
    },
    button: {
      enabled: Boolean(state.buttonText),
      text: state.buttonText,
    },
    decoration: {
      enabled: Boolean(state.buttonText),
      type: template.defaultDecoration,
    },
  };
}

function getTemplateState(templateType, align = "left") {
  const template = bannerTemplates[templateType] || bannerTemplates.normal;
  return {
    templateType,
    align,
    message: template.defaultMessage,
    buttonText: template.defaultButtonText,
    highlightRanges: [],
  };
}

function getModalTemplateState(templateType = "paragraph") {
  const template = modalTemplates[templateType] || modalTemplates.paragraph;
  return {
    templateType,
    title: template.title,
    titleHighlightRanges: [],
    subtitleEnabled: true,
    subtitle: template.subtitle,
    platformLogo: template.platformLogo || "douyin",
    tipEnabled: true,
    tipType: template.tipType,
    tipText: template.tipText,
    body: template.body,
    bodyHighlightRanges: [],
    buttonText: template.buttonText,
  };
}

function normalizeRanges(ranges, textLength) {
  const sortedRanges = ranges
    .map((range) => ({
      start: Math.max(0, Math.min(textLength, range.start)),
      end: Math.max(0, Math.min(textLength, range.end)),
    }))
    .filter((range) => range.end > range.start)
    .sort((a, b) => a.start - b.start);

  return sortedRanges.reduce((result, range) => {
    const previous = result[result.length - 1];
    if (!previous || range.start > previous.end) {
      result.push(range);
    } else {
      previous.end = Math.max(previous.end, range.end);
    }
    return result;
  }, []);
}

function splitMessageSegments(message, ranges) {
  const normalizedRanges = normalizeRanges(ranges, message.length);
  const segments = [];
  let cursor = 0;

  normalizedRanges.forEach((range) => {
    if (range.start > cursor) {
      segments.push({ text: message.slice(cursor, range.start), highlighted: false });
    }
    segments.push({ text: message.slice(range.start, range.end), highlighted: true });
    cursor = range.end;
  });

  if (cursor < message.length) {
    segments.push({ text: message.slice(cursor), highlighted: false });
  }

  return segments.length ? segments : [{ text: message, highlighted: false }];
}

function createSelectionGetter(ref) {
  const textarea = ref.current?.resizableTextArea?.textArea;
  if (!textarea) return null;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  if (typeof start !== "number" || typeof end !== "number" || start === end) return null;
  return { start: Math.min(start, end), end: Math.max(start, end) };
}

function collapseTextareaSelection(ref, position) {
  const textarea = ref.current?.resizableTextArea?.textArea;
  if (!textarea) return;

  window.requestAnimationFrame(() => {
    textarea.focus();
    textarea.setSelectionRange(position, position);
  });
}

function subtractRanges(ranges, selection, textLength) {
  const normalizedRanges = normalizeRanges(ranges, textLength);
  const normalizedSelection = normalizeRanges([selection], textLength)[0];
  if (!normalizedSelection) return normalizedRanges;

  return normalizeRanges(
    normalizedRanges.flatMap((range) => {
      if (range.end <= normalizedSelection.start || range.start >= normalizedSelection.end) {
        return [range];
      }

      return [
        { start: range.start, end: Math.min(range.end, normalizedSelection.start) },
        { start: Math.max(range.start, normalizedSelection.end), end: range.end },
      ];
    }),
    textLength,
  );
}

function remapRangesAfterTextChange(ranges, previousText, nextText) {
  const previous = String(previousText || "");
  const next = String(nextText || "");
  if (previous === next) return normalizeRanges(ranges || [], next.length);

  let prefixLength = 0;
  while (
    prefixLength < previous.length
    && prefixLength < next.length
    && previous[prefixLength] === next[prefixLength]
  ) {
    prefixLength += 1;
  }

  let suffixLength = 0;
  while (
    suffixLength < previous.length - prefixLength
    && suffixLength < next.length - prefixLength
    && previous[previous.length - 1 - suffixLength] === next[next.length - 1 - suffixLength]
  ) {
    suffixLength += 1;
  }

  const previousEditStart = prefixLength;
  const previousEditEnd = previous.length - suffixLength;
  const nextEditEnd = next.length - suffixLength;
  const delta = next.length - previous.length;

  return normalizeRanges((ranges || []).map((range) => {
    if (range.end <= previousEditStart) return range;
    if (range.start >= previousEditEnd) {
      return { start: range.start + delta, end: range.end + delta };
    }

    const start = range.start < previousEditStart ? range.start : previousEditStart;
    const end = range.end > previousEditEnd ? range.end + delta : nextEditEnd;
    return { start, end };
  }), next.length);
}

const pageMetaMap = {
  home: {
    title: "店管家设计工作台",
    subtitle: "集中管理运营设计工具，快速完成配置、预览与下载",
  },
  banner: {
    title: "横幅广告配置器",
    subtitle: "配置系统横幅广告内容，实时预览效果并下载使用",
  },
  modal: {
    title: "公告弹窗配置器",
    subtitle: "配置系统公告弹窗内容，实时预览效果并下载使用",
  },
  projects: {
    title: "我的项目",
    subtitle: "管理已保存的设计项目",
  },
  trash: {
    title: "回收站",
    subtitle: "查看已删除的设计资产",
  },
  poster: {
    title: "活动海报生成器",
    subtitle: "丰富的模版与素材，快速生成活动视觉",
  },
  detail: {
    title: "详情页模块编辑器",
    subtitle: "可视化编辑模块，灵活组合复用",
  },
};

function HomePage({ onNavigate }) {
  const quickTools = [
    {
      key: "banner",
      image: homeToolImageMap.banner,
      title: "横幅广告配置器",
      description: "多种风格模板一键套用",
      tone: "blue",
      action: "立即使用",
      enabled: true,
    },
    {
      key: "modal",
      image: homeToolImageMap.modal,
      title: "公告弹窗配置器",
      description: "快速配置公告弹窗通知",
      tone: "purple",
      action: "立即使用",
      enabled: true,
    },
    {
      key: "poster",
      image: homeToolImageMap.poster,
      title: "活动海报生成器",
      description: "丰富的模版与素材",
      tone: "green",
      status: "即将上线，敬请期待",
      enabled: false,
    },
    {
      key: "detail",
      image: homeToolImageMap.detail,
      title: "详情页模块编辑器",
      description: "可视化编辑，灵活组合复用",
      tone: "orange",
      status: "即将上线，敬请期待",
      enabled: false,
    },
  ];

  return (
    <div className="homePage">
      <Card className="homeSectionCard" title="快速入口" bordered={false}>
        <div className="homeToolGrid">
          {quickTools.map((tool) => (
            <Card
              key={tool.key}
              className={`homeToolCard homeToolCard-${tool.tone}${tool.enabled ? "" : " isDisabled"}`}
              bordered={false}
              hoverable={tool.enabled}
              onClick={() => {
                if (tool.enabled) {
                  onNavigate(tool.key);
                }
              }}
            >
              <Flex align="stretch" gap={16}>
                <div className="homeToolThumb" aria-hidden="true">
                  <img className="homeToolImage" src={tool.image} alt="" width="120" height="120" decoding="async" />
                </div>
                <Flex className="homeToolContent" vertical justify="space-between" gap={16}>
                  <Flex vertical gap={4}>
                    <Text className="homeToolTitle">{tool.title}</Text>
                    <Text className="homeToolDescription">{tool.description}</Text>
                  </Flex>
                  {tool.enabled ? (
                  <Button
                    type="link"
                    className="homeToolAction"
                    icon={<ArrowRightOutlined />}
                    iconPosition="end"
                  onClick={(event) => {
                    event.stopPropagation();
                    onNavigate(tool.key);
                  }}
                >
                  {tool.action}
                </Button>
                  ) : (
                    <Text className="homeToolStatus">{tool.status}</Text>
                  )}
                </Flex>
              </Flex>
            </Card>
          ))}
        </div>
      </Card>

    </div>
  );
}

function PlaceholderPage({ title, description }) {
  return (
    <Card className="placeholderPage" bordered={false}>
      <Flex vertical align="center" justify="center" gap={12}>
        <Text className="placeholderTitle">{title}</Text>
        <Text className="placeholderDescription">{description}</Text>
      </Flex>
    </Card>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [state, setState] = useState(() => getTemplateState("normal"));
  const [modalState, setModalState] = useState(() => getModalTemplateState());
  const [downloadLabel, setDownloadLabel] = useState("生成并下载");
  const [downloading, setDownloading] = useState(false);
  const [messageScroll, setMessageScroll] = useState({ left: 0, top: 0 });
  const [modalTitleScroll, setModalTitleScroll] = useState({ left: 0, top: 0 });
  const [modalBodyScroll, setModalBodyScroll] = useState({ left: 0, top: 0 });
  const [messageApi, contextHolder] = antdMessage.useMessage();
  const messageInputRef = useRef(null);
  const modalTitleInputRef = useRef(null);
  const modalBodyInputRef = useRef(null);
  const config = useMemo(() => buildConfig(state), [state]);
  const currentPageMeta = pageMetaMap[currentPage] || pageMetaMap.banner;
  const currentPageCanDownload = currentPage === "banner" || currentPage === "modal";

  useEffect(() => {
    if (currentPage !== "banner") return;

    Promise.allSettled(
      [
        config.icon.enabled && config.icon.type,
        config.decoration.enabled && config.button.enabled && config.decoration.type,
      ].filter(Boolean).map((type) => ensureInlineAsset(type)),
    ).then(() => {
      setState((current) => ({ ...current }));
    });
  }, [
    currentPage,
    config.icon.enabled,
    config.icon.type,
    config.button.enabled,
    config.decoration.enabled,
    config.decoration.type,
  ]);

  function updateField(key, value) {
    setState((current) => ({
      ...current,
      [key]: value,
      ...(key === "message" ? { highlightRanges: remapRangesAfterTextChange(current.highlightRanges, current.message, value) } : null),
    }));
  }

  function handleTemplateChange(templateType) {
    setState((current) => getTemplateState(templateType, current.align));
  }

  function handleReset() {
    if (currentPage === "modal") {
      setModalState((current) => getModalTemplateState(current.templateType));
      return;
    }

    setState((current) => getTemplateState(current.templateType, current.align));
  }

  function getMessageSelection() {
    return createSelectionGetter(messageInputRef);
  }

  function collapseMessageSelection(position) {
    collapseTextareaSelection(messageInputRef, position);
  }

  function handleSetHighlight() {
    const selection = getMessageSelection();
    if (!selection) {
      messageApi.warning("请先选择需高亮的广告内容");
      return;
    }
    setState((current) => ({
      ...current,
      highlightRanges: normalizeRanges([...(current.highlightRanges || []), selection], current.message.length),
    }));
    collapseMessageSelection(selection.end);
  }

  function handleClearHighlight() {
    const selection = getMessageSelection();
    setState((current) => ({
      ...current,
      highlightRanges: selection ? subtractRanges(current.highlightRanges || [], selection, current.message.length) : [],
    }));
    if (selection) {
      collapseMessageSelection(selection.end);
    }
  }

  async function handleDownload() {
    setDownloading(true);
    setDownloadLabel("生成中");

    try {
      const canvas = currentPage === "modal" ? await renderModalPreviewToCanvas(modalState) : await renderBannerDownloadCanvas(config);
      if (currentPage === "modal") {
        const blob = await canvasToPngBlob(canvas);
        await savePngBlob(blob, `${modalState.templateType}-notice-modal.png`);
      } else {
        const blob = await canvasToJpgBlob(canvas);
        await saveJpgBlob(blob, `${config.templateType}-banner.jpg`);
      }
      setDownloadLabel("下载成功");
    } catch (error) {
      console.error(error);
      setDownloadLabel("下载失败");
    }

    window.setTimeout(() => {
      setDownloading(false);
      setDownloadLabel("生成并下载");
    }, 1200);
  }

  function updateModalField(key, value) {
    setModalState((current) => ({
      ...current,
      [key]: value,
      ...(key === "title" ? { titleHighlightRanges: remapRangesAfterTextChange(current.titleHighlightRanges, current.title, value) } : null),
      ...(key === "body" ? { bodyHighlightRanges: remapRangesAfterTextChange(current.bodyHighlightRanges, current.body, value) } : null),
    }));
  }

  function handleModalTemplateChange(templateType) {
    setModalState(getModalTemplateState(templateType));
  }

  function handleModalSetHighlight(field) {
    const ref = field === "title" ? modalTitleInputRef : modalBodyInputRef;
    const textKey = field === "title" ? "title" : "body";
    const rangeKey = field === "title" ? "titleHighlightRanges" : "bodyHighlightRanges";
    const selection = createSelectionGetter(ref);
    if (!selection) {
      messageApi.warning(`请先选择需高亮的${field === "title" ? "主标题" : "正文内容"}`);
      return;
    }

    setModalState((current) => ({
      ...current,
      [rangeKey]: normalizeRanges([...(current[rangeKey] || []), selection], current[textKey].length),
    }));
    collapseTextareaSelection(ref, selection.end);
  }

  function handleModalClearHighlight(field) {
    const ref = field === "title" ? modalTitleInputRef : modalBodyInputRef;
    const textKey = field === "title" ? "title" : "body";
    const rangeKey = field === "title" ? "titleHighlightRanges" : "bodyHighlightRanges";
    const selection = createSelectionGetter(ref);

    setModalState((current) => ({
      ...current,
      [rangeKey]: selection ? subtractRanges(current[rangeKey] || [], selection, current[textKey].length) : [],
    }));
    if (selection) {
      collapseTextareaSelection(ref, selection.end);
    }
  }

  const menuItems = [
    { key: "home", icon: <HomeOutlined />, label: "首页" },
    {
      key: "tools",
      label: "设计工具",
      type: "group",
      children: [
        { key: "banner", icon: <SendOutlined />, label: "横幅广告配置器" },
        { key: "modal", icon: <BellOutlined />, label: "公告弹窗配置器" },
      ],
    },
  ];

  return (
    <ConfigProvider
      theme={{
        algorithm: antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: "#0888ff",
          borderRadius: 8,
          fontFamily: '"Source Han Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", sans-serif',
        },
        components: {
          Button: {
            borderRadius: 999,
            controlHeight: 36,
            fontWeight: 400,
          },
          Card: {
            borderRadiusLG: 16,
          },
          Input: {
            controlHeight: 36,
          },
          Select: {
            controlHeight: 36,
          },
        },
      }}
    >
      {contextHolder}
      <Layout className="appShell">
        <Sider className="sidebar" theme="light" width={240}>
          <Flex className="brandBlock" align="center" gap={8}>
            <img className="brandLogo" src={logoUrl} alt="" width="32" height="32" decoding="async" />
            <Flex vertical className="brandText">
              <Text strong>店管家设计工作台</Text>
              <Text>高效设计·规范输出·团队协同</Text>
            </Flex>
          </Flex>
          <Menu
            className="sideNav"
            mode="inline"
            selectedKeys={[currentPage]}
            items={menuItems}
            onClick={({ key }) => setCurrentPage(key)}
          />
          <Card className="welcomeCard" bordered={false}>
            <img src={welcomeUrl} alt="" />
          </Card>
        </Sider>

        <Layout className={`workbenchMain${currentPageCanDownload ? " workbenchMain-configurator" : ""}`}>
          {currentPage === "home" ? null : (
            <Flex className="pageHeader" align="center" justify="space-between">
              <Flex vertical gap={4}>
                <Title level={1}>{currentPageMeta.title}</Title>
                <Text>{currentPageMeta.subtitle}</Text>
              </Flex>
              {currentPageCanDownload ? (
                <Space size={8}>
                  <Button icon={<ReloadOutlined />} onClick={handleReset}>
                    重置当前模版
                  </Button>
                  <Button type="primary" icon={<DownloadOutlined />} loading={downloading} onClick={handleDownload}>
                    {downloadLabel}
                  </Button>
                </Space>
              ) : null}
            </Flex>
          )}

          <Content className={`workspace${currentPage === "home" ? " workspace-home" : ""}`}>
            {currentPage === "home" ? (
              <HomePage onNavigate={setCurrentPage} />
            ) : currentPage === "projects" ? (
              <PlaceholderPage title="我的项目" description="项目管理能力正在建设中，当前可先使用配置器完成素材生成。" />
            ) : currentPage === "trash" ? (
              <PlaceholderPage title="回收站" description="回收站能力正在建设中，后续会支持恢复与清理已删除项目。" />
            ) : currentPage === "poster" ? (
              <PlaceholderPage title="活动海报生成器" description="该工具模块已预留入口，后续可继续接入海报配置能力。" />
            ) : currentPage === "detail" ? (
              <PlaceholderPage title="详情页模块编辑器" description="该工具模块已预留入口，后续可继续接入详情页模块编辑能力。" />
            ) : currentPage === "modal" ? (
              <>
                <Card
                  className="previewPanel modalPreviewPanel"
                  title={
                    <Space size={16}>
                      <Text strong>实时预览</Text>
                      <Text type="secondary">横幅尺寸固定为：600*400</Text>
                    </Space>
                  }
                  bordered={false}
                >
                  <div className="modalPreviewViewport">
                    <NoticeModalPreview config={modalState} />
                  </div>
                </Card>
                <ModalConfiguratorForm
                  state={modalState}
                  titleInputRef={modalTitleInputRef}
                  bodyInputRef={modalBodyInputRef}
                  titleScroll={modalTitleScroll}
                  bodyScroll={modalBodyScroll}
                  onTitleScroll={setModalTitleScroll}
                  onBodyScroll={setModalBodyScroll}
                  onUpdate={updateModalField}
                  onTemplateChange={handleModalTemplateChange}
                  onSetHighlight={handleModalSetHighlight}
                  onClearHighlight={handleModalClearHighlight}
                />
              </>
            ) : (
              <>
                <Card
                  className="previewPanel"
                  title={
                    <Space size={16}>
                      <Text strong>实时预览</Text>
                      <Text type="secondary">横幅尺寸固定为：1920*60</Text>
                    </Space>
                  }
                  bordered={false}
                >
                  <div className="previewViewport">
                    <BannerCanvas config={config} />
                  </div>
                </Card>

                <Card className="configPanel" title="内容配置" bordered={false}>
                  <Form layout="vertical" requiredMark={false} className="configForm">
                    <Flex gap={16} className="configRow">
                      <Form.Item label="布局">
                        <Radio.Group
                          className="layoutRadioGroup"
                          optionType="button"
                          buttonStyle="solid"
                          value={state.align}
                          onChange={(event) => updateField("align", event.target.value)}
                        >
                          {alignOptions.map((option) => (
                            <Radio.Button key={option.value} value={option.value}>
                              {option.label}
                            </Radio.Button>
                          ))}
                        </Radio.Group>
                      </Form.Item>
                      <Form.Item label="模版类型">
                        <Select
                          value={state.templateType}
                          options={Object.entries(bannerTemplates).map(([value, item]) => ({ value, label: item.label }))}
                          onChange={handleTemplateChange}
                        />
                      </Form.Item>
                      <Form.Item label="按钮文案">
                        <Input value={state.buttonText} onChange={(event) => updateField("buttonText", event.target.value)} />
                      </Form.Item>
                    </Flex>
                    <Form.Item
                      className="messageItem"
                      label="广告内容"
                    >
                      <HighlightTextArea
                        inputRef={messageInputRef}
                        value={state.message}
                        ranges={state.highlightRanges}
                        scroll={messageScroll}
                        rows={4}
                        onScroll={setMessageScroll}
                        onChange={(value) => updateField("message", value)}
                      />
                      <Flex className="messageToolbar" align="center" gap={8}>
                        <Button size="small" onMouseDown={(event) => event.preventDefault()} onClick={handleSetHighlight}>
                          设为高亮
                        </Button>
                        <Button size="small" onMouseDown={(event) => event.preventDefault()} onClick={handleClearHighlight}>
                          清除高亮
                        </Button>
                        <Text className="messageToolbarHint">请先在「广告内容」中选中文字，再点击设为高亮</Text>
                      </Flex>
                    </Form.Item>
                  </Form>
                </Card>
              </>
            )}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

function HighlightTextArea({ inputRef, value, ranges, scroll, rows, onScroll, onChange }) {
  return (
    <div className="messageEditor">
      <div className="messageEditorMirror" aria-hidden="true">
        <div
          className="messageEditorMirrorInner"
          style={{
            transform: `translate(${-scroll.left}px, ${-scroll.top}px)`,
          }}
        >
          {splitMessageSegments(value, ranges).map((segment, index) => (
            <span key={`${segment.text}-${index}`} className={segment.highlighted ? "messageEditorHighlight" : undefined}>
              {segment.text}
            </span>
          ))}
        </div>
      </div>
      <Input.TextArea
        ref={inputRef}
        className="messageEditorTextarea"
        value={value}
        rows={rows}
        autoSize={false}
        onChange={(event) => onChange(event.target.value)}
        onScroll={(event) => {
          onScroll({
            left: event.currentTarget.scrollLeft,
            top: event.currentTarget.scrollTop,
          });
        }}
      />
    </div>
  );
}

function ModalConfiguratorForm({
  state,
  titleInputRef,
  bodyInputRef,
  titleScroll,
  bodyScroll,
  onTitleScroll,
  onBodyScroll,
  onUpdate,
  onTemplateChange,
  onSetHighlight,
  onClearHighlight,
}) {
  const isParagraphTemplate = state.templateType === "paragraph";
  const isPointsTemplate = state.templateType === "points";

  return (
    <Card className="configPanel" title="内容配置" bordered={false}>
      <Form layout="vertical" requiredMark={false} className="configForm modalConfigForm">
        <Flex gap={16} className="modalConfigRow">
          <Form.Item label="模版类型">
            <Select
              value={state.templateType}
              options={Object.entries(modalTemplates).map(([value, item]) => ({ value, label: item.label }))}
              onChange={onTemplateChange}
            />
          </Form.Item>
          <Form.Item
            label={
              <Flex align="center" gap={16}>
                <span>副标题</span>
                <Switch size="small" checked={state.subtitleEnabled} onChange={(checked) => onUpdate("subtitleEnabled", checked)} />
              </Flex>
            }
          >
            {isPointsTemplate ? (
              <Input.Group compact className="platformSubtitleGroup">
                <Select
                  value={state.platformLogo || "douyin"}
                  disabled={!state.subtitleEnabled}
                  options={modalPlatformLogoOptions}
                  popupClassName="platformLogoDropdown"
                  popupMatchSelectWidth={false}
                  listHeight={220}
                  onChange={(value) => onUpdate("platformLogo", value)}
                />
                <Input value={state.subtitle} disabled={!state.subtitleEnabled} onChange={(event) => onUpdate("subtitle", event.target.value)} />
              </Input.Group>
            ) : (
              <Input value={state.subtitle} disabled={!state.subtitleEnabled} onChange={(event) => onUpdate("subtitle", event.target.value)} />
            )}
          </Form.Item>
          <Form.Item
            label={
              <Flex align="center" gap={16}>
                <span>提示文案</span>
                <Switch size="small" checked={state.tipEnabled} onChange={(checked) => onUpdate("tipEnabled", checked)} />
              </Flex>
            }
          >
            {isParagraphTemplate || isPointsTemplate ? (
              <Input value={state.tipText} disabled={!state.tipEnabled} onChange={(event) => onUpdate("tipText", event.target.value)} />
            ) : (
              <Input.Group compact className="tipInputGroup">
                <Select
                  value={state.tipType}
                  disabled={!state.tipEnabled}
                  options={tipPlacementOptions}
                  onChange={(value) => onUpdate("tipType", value)}
                />
                <Input value={state.tipText} disabled={!state.tipEnabled} onChange={(event) => onUpdate("tipText", event.target.value)} />
              </Input.Group>
            )}
          </Form.Item>
          <Form.Item label="按钮文案">
            <Input value={state.buttonText} onChange={(event) => onUpdate("buttonText", event.target.value)} />
          </Form.Item>
        </Flex>

        <Flex gap={16} className="modalTextRow">
          <Form.Item className="messageItem" label="主标题">
            <HighlightTextArea
              inputRef={titleInputRef}
              value={state.title}
              ranges={state.titleHighlightRanges}
              scroll={titleScroll}
              rows={4}
              onScroll={onTitleScroll}
              onChange={(value) => onUpdate("title", value)}
            />
            <HighlightToolbar
              targetName="内容"
              onSet={() => onSetHighlight("title")}
              onClear={() => onClearHighlight("title")}
            />
          </Form.Item>
          <Form.Item className="messageItem" label="正文内容">
            <HighlightTextArea
              inputRef={bodyInputRef}
              value={state.body}
              ranges={state.bodyHighlightRanges}
              scroll={bodyScroll}
              rows={4}
              onScroll={onBodyScroll}
              onChange={(value) => onUpdate("body", value)}
            />
            <HighlightToolbar
              targetName="正文内容"
              onSet={() => onSetHighlight("body")}
              onClear={() => onClearHighlight("body")}
            />
          </Form.Item>
        </Flex>
      </Form>
    </Card>
  );
}

function HighlightToolbar({ targetName, onSet, onClear }) {
  return (
    <Flex className="messageToolbar" align="center" gap={8}>
      <Button size="small" onMouseDown={(event) => event.preventDefault()} onClick={onSet}>
        设为高亮
      </Button>
      <Button size="small" onMouseDown={(event) => event.preventDefault()} onClick={onClear}>
        清除高亮
      </Button>
      <Text className="messageToolbarHint">请先在「{targetName}」中选中文字，再点击设为高亮</Text>
    </Flex>
  );
}

function NoticeModalPreview({ config }) {
  const tip = config.tipEnabled && config.tipText ? <div className="noticeTip">{config.tipText}</div> : null;
  const isPointsTemplate = config.templateType === "points";
  const effectiveTipType = config.templateType === "paragraph" ? "正文下方" : isPointsTemplate ? "公告尾部" : config.tipType;
  const bodySegments = splitMessageSegments(config.body, config.bodyHighlightRanges);
  const hasSubtitle = Boolean(config.subtitleEnabled && config.subtitle);

  return (
    <div className={`noticeModalCanvas noticeModalCanvas-${config.templateType}`}>
      <img className="noticeModalBackground" src={modalBackgroundMap[config.templateType] || modalBackgroundMap.paragraph} alt="" draggable={false} />
      <div className={`noticeModalShell ${hasSubtitle ? "noticeModalShell-hasSubtitle" : "noticeModalShell-noSubtitle"}`}>
        <div className="noticeModalHeader">
          {isPointsTemplate ? (
            <div className="noticePointTitleLine">
              <h2>
                {splitMessageSegments(config.title, config.titleHighlightRanges).map((segment, index) => (
                  <span key={`${segment.text}-${index}`} className={segment.highlighted ? "noticeTextHighlight" : undefined}>
                    {segment.text}
                  </span>
                ))}
              </h2>
            </div>
          ) : (
            <h2>
              {splitMessageSegments(config.title, config.titleHighlightRanges).map((segment, index) => (
                <span key={`${segment.text}-${index}`} className={segment.highlighted ? "noticeTextHighlight" : undefined}>
                  {segment.text}
                </span>
              ))}
            </h2>
          )}
          {config.subtitleEnabled && config.subtitle && (
            <div className="noticeSubtitle">
              {isPointsTemplate && getModalPlatformLogoSource(config.platformLogo) && <img className="noticePlatformLogo" src={getModalPlatformLogoSource(config.platformLogo)} alt="" draggable={false} />}
              <span>{config.subtitle}</span>
              {!isPointsTemplate && <img src={modalSubtitleIconUrl} alt="" draggable={false} />}
            </div>
          )}
        </div>
        <div className={`noticeModalCard ${isPointsTemplate ? "noticeModalPointCard" : ""}`}>
          {isPointsTemplate ? (
            <div className="noticePointList">
              {getPointLines(config.body).map((line, index) => (
                <div className="noticePointItem" key={`${line.text}-${index}`}>
                  <p>
                    {splitMessageSegments(line.text, remapRangesToPointLine(config.bodyHighlightRanges, line)).map((segment, segmentIndex) => (
                      <span key={`${segment.text}-${segmentIndex}`} className={segment.highlighted ? "noticeBodyHighlight" : undefined}>
                        {segment.text}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p>
              {bodySegments.map((segment, index) => (
                <span key={`${segment.text}-${index}`} className={segment.highlighted ? "noticeBodyHighlight" : undefined}>
                  {segment.text}
                </span>
              ))}
            </p>
          )}
          {effectiveTipType === "正文下方" && tip}
          {config.buttonText && <button type="button">{config.buttonText}</button>}
          {effectiveTipType === "公告尾部" && tip}
        </div>
      </div>
    </div>
  );
}

function getPointLines(text) {
  const explicitLines = String(text)
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  const lines = explicitLines.length > 1
    ? explicitLines
    : String(text)
      .split(/[。；;]+/)
      .map((line) => line.trim())
      .filter(Boolean);

  let cursor = 0;
  return lines.map((line) => {
    const start = String(text).indexOf(line, cursor);
    const safeStart = start >= 0 ? start : cursor;
    const end = safeStart + line.length;
    const normalized = normalizePointLine(line);
    cursor = end;
    if (!normalized.content) return null;
    return {
      text: normalized.text,
      start: safeStart,
      contentStart: safeStart + normalized.contentOffset,
      end,
      prefixLength: normalized.prefixLength,
    };
  }).filter(Boolean).slice(0, 4);
}

function normalizePointLine(line) {
  const text = String(line || "").replace(/^[\u200B-\u200D\uFEFF]+/g, "").trim();
  const match = text.match(/^([•·]\s*)?(.*)$/u);
  const marker = match?.[1] || "";
  const content = (match?.[2] || text).trimStart();
  const shouldShowMarker = Boolean(marker);
  return {
    text: shouldShowMarker ? `• ${content}` : content,
    content,
    contentOffset: marker.length + ((match?.[2] || "").length - content.length),
    prefixLength: shouldShowMarker ? 2 : 0,
  };
}

function remapRangesToPointLine(ranges, line) {
  return normalizeRanges(
    normalizeRanges(ranges, line.end).flatMap((range) => {
      const mappedRanges = [];
      if (line.prefixLength > 0 && range.start < line.contentStart && range.end > line.start) {
        mappedRanges.push({ start: 0, end: line.prefixLength });
      }

      const start = Math.max(range.start, line.contentStart);
      const end = Math.min(range.end, line.end);
      if (end > start) {
        mappedRanges.push({
          start: start - line.contentStart + line.prefixLength,
          end: end - line.contentStart + line.prefixLength,
        });
      }

      return mappedRanges;
    }),
    line.text.length,
  );
}

function remapRangesToLine(ranges, lineStart, lineEnd) {
  return normalizeRanges(
    ranges
      .map((range) => ({
        start: Math.max(range.start, lineStart) - lineStart,
        end: Math.min(range.end, lineEnd) - lineStart,
      }))
      .filter((range) => range.end > range.start),
    lineEnd - lineStart,
  );
}

function BannerCanvas({ config, exportWidth }) {
  return (
    <div
      className={`bannerCanvas bannerCanvas-${config.layout} theme-${config.theme.name}`}
      style={{
        "--banner-bg": config.theme.background[config.layout],
        "--banner-fit-width": `${config.metrics.previewWidth}px`,
        minWidth: exportWidth ? `${exportWidth}px` : undefined,
        width: exportWidth ? `${exportWidth}px` : undefined,
      }}
    >
      <div className="bannerTrack">
        <div
          className="bannerContentLayer"
          style={{
            "--content-fill": config.theme.contentFill,
            "--content-stroke": config.theme.contentStroke,
            "--content-width": `${config.metrics.contentWidth}px`,
            "--text-color": config.theme.textColor,
          }}
        >
          {config.icon.enabled && <img className="bannerIcon" src={getIconSource(config.icon.type)} alt="" draggable={false} />}
          <span className="bannerMessage">
            {splitMessageSegments(config.content.message, config.content.highlightRanges).map((segment, index) => (
              <span key={`${segment.text}-${index}`} className={segment.highlighted ? "bannerMessageHighlight" : undefined}>
                {segment.text}
              </span>
            ))}
          </span>
        </div>
        {config.button.enabled && (
          <div
            className="bannerButtonLayer"
            style={{
              "--button-fill": config.theme.buttonFill,
              "--button-stroke": config.theme.contentStroke,
              "--button-width": `${config.metrics.buttonWidth}px`,
              "--text-color": config.theme.textColor,
            }}
          >
            <span className="bannerButtonText">{config.button.text}</span>
          </div>
        )}
        {config.decoration.enabled && config.button.enabled && (
          <img className="bannerDecoration" src={getDecorationSource(config.decoration.type)} alt="" draggable={false} />
        )}
      </div>
    </div>
  );
}

async function renderPreviewSvgToCanvas(config) {
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
  document.body.append(host);
  const root = createRoot(host);
  root.render(<BannerCanvas config={config} exportWidth={1920} />);
  if (document.fonts?.ready) await document.fonts.ready;
  await nextFrame();

  const source = host.querySelector(".bannerCanvas");
  if (!source) {
    root.unmount();
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

    if (!content || !message) throw new Error("预览内容不完整，无法生成 PNG");

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

    if (iconHref && iconRect) parts.push(svgImage(iconHref, iconRect));
    parts.push(svgMessageText(config.content.message, config.content.highlightRanges, messageRect.x, contentRect.y + contentRect.height / 2, config.theme.textColor, {
      target: "banner-message",
    }));

    if (buttonRect && config.button.enabled) {
      parts.push(svgPill(buttonRect, "contentStroke"));
      parts.push(svgPill(insetRect(buttonRect, 1), "buttonFill"));
      if (buttonTextRect) {
        parts.push(svgText(config.button.text, buttonRect.x + buttonRect.width / 2, buttonRect.y + buttonRect.height / 2, "middle", config.theme.textColor, {
          target: "banner-button",
        }));
      }
    }

    if (decorationHref && decorationRect) parts.push(svgImage(decorationHref, decorationRect));

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><defs>${defs}</defs>${parts.join("")}</svg>`;
    const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    return await renderSvgUrlToCanvas(url, width, height);
  } finally {
    root.unmount();
    host.remove();
  }
}

function nextFrame() {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
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
  const src = image.currentSrc || image.src;
  if (src && (src.startsWith("data:image/svg+xml") || /\.svg(?:$|\?)/.test(src))) return src;
  try {
    return await imageToDataUrl(image);
  } catch {
    return src;
  }
}

async function imageToDataUrl(image) {
  if (!image.complete && image.decode) await image.decode();
  const width = image.naturalWidth || image.width;
  const height = image.naturalHeight || image.height;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.getContext("2d").drawImage(image, 0, 0, width, height);
  return canvas.toDataURL("image/png");
}

function svgPill(rect, fillId) {
  const radius = rect.height / 2;
  return `<rect x="${round(rect.x)}" y="${round(rect.y)}" width="${round(rect.width)}" height="${round(rect.height)}" rx="${round(radius)}" fill="url(#${fillId})"/>`;
}

function svgImage(href, rect) {
  return `<image href="${escapeAttribute(href)}" x="${round(rect.x)}" y="${round(rect.y)}" width="${round(rect.width)}" height="${round(rect.height)}" preserveAspectRatio="xMidYMid meet"/>`;
}

function svgText(text, x, y, anchor, color, exportMeta) {
  const dy = exportMeta?.target ? "0.12em" : "";
  const dyAttribute = dy ? ` dy="${dy}"` : "";
  return `<text x="${round(x)}" y="${round(y)}"${dyAttribute} fill="${escapeAttribute(color)}" font-family="Alimama ShuHeiTi, PingFang SC, Microsoft YaHei, sans-serif" font-size="20" font-weight="700" dominant-baseline="middle" text-anchor="${anchor}">${escapeText(text)}</text>`;
}

function svgMessageText(text, ranges, x, y, color, exportMeta) {
  const segments = splitMessageSegments(text, ranges);
  let cursorX = x;
  const tspans = segments.map((segment) => {
    const tspan = `<tspan x="${round(cursorX)}" fill="${escapeAttribute(segment.highlighted ? "#FFF36D" : color)}">${escapeText(segment.text)}</tspan>`;
    cursorX += measureTextWidth(segment.text);
    return tspan;
  });
  const dy = exportMeta?.target ? "0.12em" : "";
  const dyAttribute = dy ? ` dy="${dy}"` : "";
  return `<text y="${round(y)}"${dyAttribute} font-family="Alimama ShuHeiTi, PingFang SC, Microsoft YaHei, sans-serif" font-size="20" font-weight="700" dominant-baseline="middle" text-anchor="start">${tspans.join("")}</text>`;
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
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeAttribute(value) {
  return escapeText(value).replace(/"/g, "&quot;");
}

function round(value) {
  return Math.round(value * 100) / 100;
}

async function renderBannerDownloadCanvas(config) {
  await Promise.all([
    config.icon.enabled && config.icon.type,
    config.decoration.enabled && config.button.enabled && config.decoration.type,
  ].filter(Boolean).map((type) => ensureInlineAsset(type)));
  return renderPreviewSvgToCanvas(config);
}

async function renderModalPreviewToCanvas(config) {
  try {
    return await renderModalPreviewSvgToCanvas(config);
  } catch (error) {
    console.warn("公告弹窗 SVG 导出失败，已切换到备用导出逻辑", error);
    return await renderModalPreviewToCanvasLegacy(config);
  }
}

async function renderModalPreviewSvgToCanvas(config) {
  const width = 600;
  const height = 400;
  const host = document.createElement("div");
  host.style.cssText = [
    "height:400px",
    "left:-10000px",
    "opacity:0",
    "overflow:visible",
    "pointer-events:none",
    "position:fixed",
    "top:0",
    "width:600px",
    "z-index:-1",
  ].join(";");
  document.body.appendChild(host);

  const root = createRoot(host);
  root.render(<NoticeModalPreview config={config} />);

  try {
    if (document.fonts?.ready) await document.fonts.ready;
    await nextFrame();
    await nextFrame();
    const preview = host.querySelector(".noticeModalCanvas");
    if (!preview) throw new Error("未找到公告弹窗预览内容");
    await waitForImages(preview);
    return await renderMeasuredModalSvgToCanvas(preview, width, height);
  } finally {
    root.unmount();
    host.remove();
  }
}

async function renderModalPreviewSvgToCanvasFromConfig(config) {
  const width = 600;
  const height = 400;
  const isPointsTemplate = config.templateType === "points";
  const effectiveTipType = config.templateType === "paragraph" ? "正文下方" : isPointsTemplate ? "公告尾部" : config.tipType;
  const hasSubtitle = Boolean(config.subtitleEnabled && config.subtitle);
  const backgroundHref = await imageSourceToDataUrl(modalBackgroundMap[config.templateType] || modalBackgroundMap.paragraph);
  const subtitleIconHref = !isPointsTemplate && hasSubtitle ? await imageSourceToDataUrl(modalSubtitleIconUrl) : "";
  const platformLogoSource = getModalPlatformLogoSource(config.platformLogo);
  const platformLogoHref = isPointsTemplate && platformLogoSource ? await imageSourceToDataUrl(platformLogoSource) : "";
  const parts = [
    `<image href="${escapeAttribute(backgroundHref)}" x="0" y="0" width="${width}" height="${height}" preserveAspectRatio="xMidYMid slice"/>`,
  ];

  if (isPointsTemplate) {
    if (platformLogoHref) {
      parts.push(`<image href="${escapeAttribute(platformLogoHref)}" x="36" y="137" width="28" height="28" preserveAspectRatio="xMidYMid meet"/>`);
    }
    parts.push(svgRichLine(config.title, config.titleHighlightRanges, 36, 74, "start", modalFont(36, 700), "rgba(0, 0, 0, 0.9)", "#EA572E"));
    if (hasSubtitle) {
      const subtitleFont = modalFont(22, 700);
      parts.push(svgPlainText(config.subtitle, platformLogoHref ? 72 : 36, 160, "start", subtitleFont, "rgba(0, 0, 0, 0.9)"));
    }

    parts.push(svgPointList(config.body, config.bodyHighlightRanges, 48, 251, 504));
    if (config.buttonText) {
      const buttonFont = modalFont(16, 400);
      const buttonWidth = Math.max(160, measureModalTextWidth(config.buttonText, buttonFont) + 48);
      const buttonX = 564 - buttonWidth;
      parts.push(svgRoundedRect(buttonX, 324, buttonWidth, 40, 6, "#EA572E"));
      parts.push(svgPlainText(config.buttonText, buttonX + buttonWidth / 2, 349, "middle", buttonFont, "#FFFFFF"));
    }
    if (config.tipEnabled && config.tipText) {
      parts.push(svgWrappedPlainText(config.tipText, 36, 386, 528, 16, modalFont(12, 400), "rgba(0, 0, 0, 0.7)"));
    }
  } else {
    parts.push(svgRichLine(config.title, config.titleHighlightRanges, width / 2, 74, "middle", modalFont(38, 700), "rgba(0, 0, 0, 0.9)", "#EA572E"));
    if (hasSubtitle) {
      const subtitleFont = modalFont(24, 700);
      const subtitleWidth = Math.max(0, measureModalTextWidth(config.subtitle, subtitleFont) + 88);
      const subtitleX = (width - subtitleWidth) / 2;
      parts.push(svgRoundedRect(subtitleX, 91, subtitleWidth, 34, 16, "rgba(237, 109, 75, 0.2)"));
      parts.push(svgPlainText(config.subtitle, subtitleX + 32, 116, "start", subtitleFont, "#EA572E"));
      if (subtitleIconHref) {
        parts.push(`<image href="${escapeAttribute(subtitleIconHref)}" x="${round(subtitleX + subtitleWidth - 72)}" y="82" width="52" height="52" preserveAspectRatio="xMidYMid meet"/>`);
      }
    }

    const cardY = hasSubtitle ? 145 : 111;
    const card = { x: 36, y: cardY, width: 528, height: height - cardY };
    parts.push(svgRoundedRect(card.x, card.y, card.width, card.height, 12, "#FFFFFF"));
    parts.push(svgWrappedRichText(config.body, config.bodyHighlightRanges, card.x + 24, card.y + 43, card.width - 48, 28, modalFont(18, 400), "rgba(0, 0, 0, 0.9)", "#EA572E"));
    if (config.tipEnabled && config.tipText) {
      const tipY = effectiveTipType === "公告尾部" ? 388 : 278;
      parts.push(svgWrappedPlainText(config.tipText, card.x + 24, tipY, card.width - 48, 14, modalFont(14, 400), "#707070"));
    }
    if (config.buttonText) {
      const buttonFont = modalFont(16, 400);
      const buttonWidth = Math.max(132, measureModalTextWidth(config.buttonText, buttonFont) + 48);
      const buttonX = (width - buttonWidth) / 2;
      parts.push(svgRoundedRect(buttonX, 335, buttonWidth, 40, 6, "#EA572E"));
      parts.push(svgPlainText(config.buttonText, width / 2, 359, "middle", buttonFont, "#FFFFFF"));
    }
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${parts.join("")}</svg>`;
  const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);

  return await renderSvgUrlToCanvas(url, width, height);
}

async function renderMeasuredModalSvgToCanvas(element, width, height) {
  const rootRect = element.getBoundingClientRect();
  const parts = [];
  const background = element.querySelector(".noticeModalBackground");
  if (background) {
    const backgroundHref = await imageSourceToDataUrl(background.currentSrc || background.src);
    parts.push(`<image href="${escapeAttribute(backgroundHref)}" x="0" y="0" width="${width}" height="${height}" preserveAspectRatio="xMidYMid slice"/>`);
  }

  const subtitle = element.querySelector(".noticeSubtitle");
  if (subtitle) {
    const subtitleRect = getRelativeRect(subtitle, rootRect);
    parts.push(svgMeasuredBox(subtitle, subtitleRect));
  }

  const card = element.querySelector(".noticeModalCard");
  if (card) {
    parts.push(svgMeasuredBox(card, getRelativeRect(card, rootRect)));
  }

  const pointItems = Array.from(element.querySelectorAll(".noticePointItem"));
  pointItems.forEach((item) => {
    parts.push(svgMeasuredBox(item, getRelativeRect(item, rootRect)));
  });

  const badges = Array.from(element.querySelectorAll(".noticePointBadge"));
  badges.forEach((badge) => {
    if (badge.textContent?.trim() === "·") return;
    const rect = getRelativeRect(badge, rootRect);
    const style = window.getComputedStyle(badge);
    parts.push(`<circle cx="${round(rect.x + rect.width / 2)}" cy="${round(rect.y + rect.height / 2)}" r="${round(Math.min(rect.width, rect.height) / 2)}" fill="${escapeAttribute(style.backgroundColor || "#F04F2F")}"/>`);
  });

  const buttons = Array.from(element.querySelectorAll(".noticeModalCard button"));
  buttons.forEach((button) => {
    parts.push(svgMeasuredBox(button, getRelativeRect(button, rootRect)));
  });

  const images = Array.from(element.querySelectorAll("img:not(.noticeModalBackground)"));
  for (const image of images) {
    const rect = getRelativeRect(image, rootRect);
    const href = await imageSourceToDataUrl(image.currentSrc || image.src);
    parts.push(`<image href="${escapeAttribute(href)}" x="${round(rect.x)}" y="${round(rect.y)}" width="${round(rect.width)}" height="${round(rect.height)}" preserveAspectRatio="xMidYMid meet"/>`);
  }

  collectMeasuredTextRuns(element, rootRect).forEach((run) => {
    parts.push(svgMeasuredTextRun(run));
  });

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${parts.join("")}</svg>`;
  const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);

  return await renderSvgUrlToCanvas(url, width, height);
}

async function renderSvgUrlToCanvas(url, width, height) {
  try {
    const image = await loadImage(url);
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(width * DOWNLOAD_SCALE);
    canvas.height = Math.round(height * DOWNLOAD_SCALE);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const context = canvas.getContext("2d");
    if (!context) throw new Error("当前浏览器不支持 Canvas 导出");
    context.scale(DOWNLOAD_SCALE, DOWNLOAD_SCALE);
    context.drawImage(image, 0, 0, width, height);
    assertCanvasExportable(canvas);
    return canvas;
  } finally {
    URL.revokeObjectURL(url);
  }
}

function svgMeasuredBox(element, rect) {
  const style = window.getComputedStyle(element);
  const fill = style.backgroundColor;
  if (!fill || fill === "rgba(0, 0, 0, 0)" || fill === "transparent") return "";
  const radius = parseFloat(style.borderTopLeftRadius) || 0;
  return `<rect x="${round(rect.x)}" y="${round(rect.y)}" width="${round(rect.width)}" height="${round(rect.height)}" rx="${round(radius)}" fill="${escapeAttribute(fill)}"/>`;
}

function collectMeasuredTextRuns(root, rootRect) {
  const runs = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    const value = node.nodeValue || "";
    const parent = node.parentElement;
    if (parent && value.trim()) {
      const style = window.getComputedStyle(parent);
      if (style.display !== "none" && style.visibility !== "hidden") {
        collectNodeCharacterRuns(node, value, style, rootRect).forEach((run) => runs.push(run));
      }
    }
    node = walker.nextNode();
  }
  return runs;
}

function collectNodeCharacterRuns(node, value, style, rootRect) {
  const runs = [];
  let current = null;
  const parentElement = node.parentElement;
  const isButtonText = Boolean(parentElement?.closest(".noticeModalCard button"));
  const centerAlignedTextContainer = parentElement?.closest(".noticeModalHeader h2, .noticeSubtitle, .noticeModalCard button");
  const centerAlignedTextRect = centerAlignedTextContainer?.getBoundingClientRect();
  const centerAlignedTextY = centerAlignedTextRect
    ? centerAlignedTextRect.top - rootRect.top + centerAlignedTextRect.height / 2
    : null;
  const exportTextTarget = centerAlignedTextContainer?.matches(".noticeModalHeader h2")
    ? "title"
    : centerAlignedTextContainer?.matches(".noticeSubtitle")
      ? "subtitle"
      : centerAlignedTextContainer?.matches(".noticeModalCard button")
        ? "button"
        : parentElement?.closest(".noticeModalCanvas-points .noticePointItem p")
          ? "point-body"
          : "";
  Array.from(value).forEach((char, index) => {
    const range = document.createRange();
    range.setStart(node, index);
    range.setEnd(node, index + char.length);
    const rect = range.getBoundingClientRect();
    range.detach();
    if (!rect.width || !rect.height) return;
    const rangeCenterY = rect.top - rootRect.top + rect.height / 2;
    const finalSvgY = centerAlignedTextY ?? rangeCenterY;

    const run = {
      text: char,
      x: rect.left - rootRect.left,
      y: finalSvgY,
      width: rect.width,
      color: style.color,
      fontFamily: style.fontFamily,
      fontSize: parseFloat(style.fontSize) || 14,
      fontWeight: normalizeFontWeight(style.fontWeight),
      isButtonText,
      exportTextTarget,
    };

    if (current && canMergeTextRun(current, run)) {
      current.text += char;
      current.width = run.x + run.width - current.x;
    } else {
      current = run;
      runs.push(current);
    }
  });
  return runs;
}

function canMergeTextRun(current, next) {
  return current.color === next.color
    && current.fontFamily === next.fontFamily
    && current.fontSize === next.fontSize
    && current.fontWeight === next.fontWeight
    && current.isButtonText === next.isButtonText
    && Math.abs(current.y - next.y) < 0.5
    && Math.abs(current.x + current.width - next.x) < 1.5;
}

function normalizeFontWeight(weight) {
  if (weight === "bold") return 700;
  if (weight === "normal") return 400;
  return Number(weight) || 400;
}

function svgMeasuredTextRun(run) {
  const dy = run.exportTextTarget ? "0.12em" : "";
  const dyAttribute = dy ? ` dy="${dy}"` : "";
  return `<text x="${round(run.x)}" y="${round(run.y)}"${dyAttribute} fill="${escapeAttribute(run.color)}" font-family="${escapeAttribute(run.fontFamily)}" font-size="${round(run.fontSize)}" font-weight="${run.fontWeight}" dominant-baseline="middle" text-anchor="start">${escapeText(run.text)}</text>`;
}

async function renderElementSnapshotToCanvas(element, width, height) {
  const clone = element.cloneNode(true);
  clone.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
  await inlineImageSources(element, clone);
  inlineComputedStyles(element, clone);
  clone.style.width = `${width}px`;
  clone.style.height = `${height}px`;
  clone.style.margin = "0";

  const serialized = new XMLSerializer().serializeToString(clone);
  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`,
    `<foreignObject width="${width}" height="${height}">`,
    serialized,
    "</foreignObject>",
    "</svg>",
  ].join("");
  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  try {
    const image = await loadImage(url);
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const context = canvas.getContext("2d");
    if (!context) throw new Error("当前浏览器不支持 Canvas 导出");
    context.drawImage(image, 0, 0, width, height);
    assertCanvasExportable(canvas);
    return canvas;
  } finally {
    URL.revokeObjectURL(url);
  }
}

function modalFont(size, weight) {
  return `${weight} ${size}px "Source Han Sans", "PingFang SC", "Microsoft YaHei", sans-serif`;
}

function measureModalTextWidth(text, font) {
  const value = String(text || "");
  const canvas = measureModalTextWidth.canvas || document.createElement("canvas");
  const context = canvas.getContext("2d");
  measureModalTextWidth.canvas = canvas;
  if (!context) return Array.from(value).reduce((sum, char) => sum + (/[\u4e00-\u9fa5]/.test(char) ? 18 : 9), 0);
  context.font = font;
  return Math.ceil(context.measureText(value).width);
}

function svgRoundedRect(x, y, width, height, radius, fill) {
  return `<rect x="${round(x)}" y="${round(y)}" width="${round(width)}" height="${round(height)}" rx="${round(radius)}" fill="${escapeAttribute(fill)}"/>`;
}

function svgPlainText(text, x, y, anchor, font, color) {
  return `<text x="${round(x)}" y="${round(y)}" fill="${escapeAttribute(color)}" font-family="${escapeAttribute(fontFamilyFromFont(font))}" font-size="${fontSizeFromFont(font)}" font-weight="${fontWeightFromFont(font)}" text-anchor="${anchor}" dominant-baseline="middle">${escapeText(text)}</text>`;
}

function svgRichLine(text, ranges, x, y, anchor, font, defaultColor, highlightColor) {
  const segments = splitMessageSegments(text || "", ranges);
  const totalWidth = measureModalTextWidth(text || "", font);
  let cursorX = anchor === "middle" ? x - totalWidth / 2 : x;
  const tspans = segments.map((segment) => {
    const currentX = cursorX;
    cursorX += measureModalTextWidth(segment.text, font);
    return `<tspan x="${round(currentX)}" fill="${escapeAttribute(segment.highlighted ? highlightColor : defaultColor)}">${escapeText(segment.text)}</tspan>`;
  });
  return `<text y="${round(y)}" font-family="${escapeAttribute(fontFamilyFromFont(font))}" font-size="${fontSizeFromFont(font)}" font-weight="${fontWeightFromFont(font)}" dominant-baseline="middle" text-anchor="start">${tspans.join("")}</text>`;
}

function svgWrappedRichText(text, ranges, x, y, maxWidth, lineHeight, font, defaultColor, highlightColor) {
  const lines = wrapTextLines(text || "", maxWidth, font);
  const normalizedRanges = normalizeRanges(ranges, String(text || "").length);
  let offset = 0;
  return lines.map((line, lineIndex) => {
    let cursorX = x;
    const tspans = Array.from(line).map((char, charIndex) => {
      const absoluteIndex = offset + charIndex;
      const highlighted = normalizedRanges.some((range) => absoluteIndex >= range.start && absoluteIndex < range.end);
      const currentX = cursorX;
      cursorX += measureModalTextWidth(char, font);
      return `<tspan x="${round(currentX)}" fill="${escapeAttribute(highlighted ? highlightColor : defaultColor)}">${escapeText(char)}</tspan>`;
    }).join("");
    offset += line.length;
    return `<text y="${round(y + lineIndex * lineHeight)}" font-family="${escapeAttribute(fontFamilyFromFont(font))}" font-size="${fontSizeFromFont(font)}" font-weight="${fontWeightFromFont(font)}" dominant-baseline="middle" text-anchor="start">${tspans}</text>`;
  }).join("");
}

function svgWrappedPlainText(text, x, y, maxWidth, lineHeight, font, color) {
  return wrapTextLines(text || "", maxWidth, font).map((line, index) => (
    svgPlainText(line, x, y + index * lineHeight, "start", font, color)
  )).join("");
}

function svgPointList(text, ranges, x, y, maxWidth) {
  const font = modalFont(18, 500);
  let cursorY = y;
  return getPointLines(text).map((line) => {
    const lineY = cursorY;
    const lineCount = wrapTextLines(line.text, maxWidth, font).length || 1;
    cursorY += Math.max(56, lineCount * 28 + 18);
    return svgWrappedRichText(line.text, remapRangesToPointLine(ranges, line), x, lineY, maxWidth, 28, font, "rgba(0, 0, 0, 0.9)", "#EA572E");
  }).join("");
}

function wrapTextLines(text, maxWidth, font) {
  const lines = [];
  let line = "";
  Array.from(String(text || "")).forEach((char) => {
    const nextLine = line + char;
    if (measureModalTextWidth(nextLine, font) > maxWidth && line) {
      lines.push(line);
      line = char;
    } else {
      line = nextLine;
    }
  });
  if (line) lines.push(line);
  return lines;
}

function fontFamilyFromFont() {
  return "Source Han Sans, PingFang SC, Microsoft YaHei, sans-serif";
}

function fontSizeFromFont(font) {
  return Number(String(font).match(/(\d+)px/)?.[1] || 14);
}

function fontWeightFromFont(font) {
  return Number(String(font).match(/^(\d+)/)?.[1] || 400);
}

function inlineComputedStyles(sourceNode, cloneNode) {
  if (sourceNode.nodeType === Node.ELEMENT_NODE && cloneNode.nodeType === Node.ELEMENT_NODE) {
    const computed = window.getComputedStyle(sourceNode);
    cloneNode.setAttribute(
      "style",
      Array.from(computed)
        .map((property) => `${property}:${computed.getPropertyValue(property)};`)
        .join(""),
    );
  }

  Array.from(sourceNode.childNodes).forEach((sourceChild, index) => {
    const cloneChild = cloneNode.childNodes[index];
    if (cloneChild) inlineComputedStyles(sourceChild, cloneChild);
  });
}

async function inlineImageSources(sourceRoot, cloneRoot) {
  const sourceImages = Array.from(sourceRoot.querySelectorAll("img"));
  const cloneImages = Array.from(cloneRoot.querySelectorAll("img"));
  await Promise.all(
    cloneImages.map(async (cloneImage, index) => {
      const sourceImage = sourceImages[index];
      if (!sourceImage) return;
      const src = sourceImage.currentSrc || sourceImage.src;
      if (!src) return;
      cloneImage.setAttribute("src", await imageSourceToDataUrl(src));
    }),
  );
}

const imageDataUrlCache = new Map();

async function imageSourceToDataUrl(src) {
  if (src.startsWith("data:")) return src;
  if (imageDataUrlCache.has(src)) return imageDataUrlCache.get(src);
  const response = await fetch(src);
  if (!response.ok) throw new Error("图片素材加载失败");
  const dataUrl = await blobToDataUrl(await response.blob());
  imageDataUrlCache.set(src, dataUrl);
  return dataUrl;
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

function assertCanvasExportable(canvas) {
  try {
    canvas.toDataURL("image/png");
  } catch (error) {
    throw new Error(`当前预览内容无法直接导出 PNG：${error.message}`);
  }
}

async function waitForImages(root) {
  const images = Array.from(root.querySelectorAll("img"));
  await Promise.all(
    images.map((image) => {
      if (image.complete && image.naturalWidth > 0) return Promise.resolve();
      if (typeof image.decode === "function") return image.decode().catch(() => undefined);
      return new Promise((resolve) => {
        image.onload = resolve;
        image.onerror = resolve;
      });
    }),
  );
}

async function renderModalPreviewToCanvasLegacy(config) {
  const canvas = document.createElement("canvas");
  const width = 600;
  const height = 400;
  canvas.width = Math.round(width * DOWNLOAD_SCALE);
  canvas.height = Math.round(height * DOWNLOAD_SCALE);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  const context = canvas.getContext("2d");
  if (!context) throw new Error("当前浏览器不支持 Canvas 导出");
  context.scale(DOWNLOAD_SCALE, DOWNLOAD_SCALE);
  context.textBaseline = "middle";

  const background = await loadImage(modalBackgroundMap[config.templateType] || modalBackgroundMap.paragraph);
  context.drawImage(background, 0, 0, width, height);

  const isPointsTemplate = config.templateType === "points";
  const effectiveTipType = config.templateType === "paragraph" ? "正文下方" : isPointsTemplate ? "公告尾部" : config.tipType;

  context.font = isPointsTemplate
    ? '700 28px "Source Han Sans", "PingFang SC", sans-serif'
    : '700 38px "Source Han Sans", "PingFang SC", sans-serif';
  context.textAlign = "center";
  drawRichTextLine(
    context,
    config.title,
    config.titleHighlightRanges,
    width / 2,
    isPointsTemplate ? 93 : 73,
    isPointsTemplate ? "#EA572E" : "rgba(0, 0, 0, 0.9)",
    "#EA572E",
  );

  if (config.subtitleEnabled && config.subtitle) {
    context.font = isPointsTemplate
      ? '700 16px "Source Han Sans", "PingFang SC", sans-serif'
      : '700 24px "Source Han Sans", "PingFang SC", sans-serif';
    const subtitleWidth = Math.max(isPointsTemplate ? 132 : 0, measureCanvasText(context, config.subtitle) + (isPointsTemplate ? 40 : 88));
    const subtitleX = (width - subtitleWidth) / 2;
    if (isPointsTemplate) {
      const subtitleGradient = context.createLinearGradient(subtitleX, 116, subtitleX + subtitleWidth, 116);
      subtitleGradient.addColorStop(0, "#FF8E69");
      subtitleGradient.addColorStop(1, "#F04F2F");
      context.fillStyle = subtitleGradient;
    } else {
      context.fillStyle = "rgba(237, 109, 75, 0.2)";
    }
    roundRect(context, subtitleX, isPointsTemplate ? 108 : 91, subtitleWidth, isPointsTemplate ? 32 : 34, 16);
    context.fill();
    context.fillStyle = isPointsTemplate ? "#FFFFFF" : "#EA572E";
    context.fillText(config.subtitle, isPointsTemplate ? width / 2 : subtitleX + 32 + measureCanvasText(context, config.subtitle) / 2, isPointsTemplate ? 108 + 32 / 2 : 91 + 34 / 2);
    if (!isPointsTemplate) {
      try {
        const subtitleIcon = await loadImage(modalSubtitleIconUrl);
        context.drawImage(subtitleIcon, subtitleX + subtitleWidth - 72, 82, 52, 52);
      } catch {
        // Decorative only. Text rendering should still succeed if the icon cannot load.
      }
    }
  }

  const paragraphCardY = config.subtitleEnabled && config.subtitle ? 145 : 111;

  const card = isPointsTemplate
    ? { x: 36, y: 168, width: 528, height: 46 }
    : { x: 36, y: paragraphCardY, width: 528, height: 400 - paragraphCardY };

  if (!isPointsTemplate) {
    context.fillStyle = "#FFFFFF";
    roundRect(context, card.x, card.y, card.width, card.height, 12);
    context.fill();
  }

  context.font = isPointsTemplate
    ? '400 14px "Source Han Sans", "PingFang SC", sans-serif'
    : '400 18px "Source Han Sans", "PingFang SC", sans-serif';
  context.textAlign = "left";
  let textY = isPointsTemplate ? 182 : card.y + 43;
  if (isPointsTemplate) {
    let rowY = 168;
    getPointLines(config.body).forEach((line) => {
      const lineCount = measureCanvasWrappedLineCount(context, line.text, 504);
      const rowHeight = Math.max(46, lineCount * 28 + 18);
      context.fillStyle = "#FFFFFF";
      roundRect(context, 36, rowY, 528, rowHeight, 12);
      context.fill();
      drawPointCanvasText(
        context,
        line.text,
        remapRangesToPointLine(config.bodyHighlightRanges, line),
        48,
        rowY + rowHeight / 2,
        504,
      );
      rowY += rowHeight + 10;
    });
  } else {
    drawRichWrappedText(context, config.body, config.bodyHighlightRanges, card.x + 24, textY, card.width - 48, 28, "rgba(0, 0, 0, 0.9)", "#EA572E");
  }

  if (config.tipEnabled && ["正文下方", "公告尾部"].includes(effectiveTipType) && config.tipText) {
    context.font = isPointsTemplate
      ? '400 11px "Source Han Sans", "PingFang SC", sans-serif'
      : '400 14px "Source Han Sans", "PingFang SC", sans-serif';
    context.fillStyle = isPointsTemplate ? "rgba(0, 0, 0, 0.35)" : "#707070";
    const tipY = effectiveTipType === "公告尾部"
      ? (isPointsTemplate ? 386 : 388)
      : (isPointsTemplate ? 260 : 278);
    wrapCanvasText(context, config.tipText, isPointsTemplate ? 36 : card.x + 24, tipY, isPointsTemplate ? 528 : card.width - 48, isPointsTemplate ? 16 : 14);
  }

  if (config.buttonText) {
    context.font = '400 16px "Source Han Sans", "PingFang SC", sans-serif';
    const buttonWidth = Math.max(isPointsTemplate ? 160 : 132, measureCanvasText(context, config.buttonText) + (isPointsTemplate ? 48 : 48));
    const buttonX = isPointsTemplate ? 564 - buttonWidth : (width - buttonWidth) / 2;
    context.fillStyle = "#EA572E";
    roundRect(context, buttonX, isPointsTemplate ? 292 : 335, buttonWidth, isPointsTemplate ? 32 : 40, 6);
    context.fill();
    context.fillStyle = "#FFFFFF";
    context.textAlign = "center";
    context.fillText(config.buttonText, isPointsTemplate ? buttonX + buttonWidth / 2 : width / 2, (isPointsTemplate ? 292 : 335) + (isPointsTemplate ? 32 : 40) / 2);
  }

  return canvas;
}

function roundRect(context, x, y, width, height, radius) {
  const safeRadius = Math.min(radius, width / 2, height / 2);
  context.beginPath();
  context.moveTo(x + safeRadius, y);
  context.lineTo(x + width - safeRadius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
  context.lineTo(x + width, y + height - safeRadius);
  context.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
  context.lineTo(x + safeRadius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
  context.lineTo(x, y + safeRadius);
  context.quadraticCurveTo(x, y, x + safeRadius, y);
  context.closePath();
}

function measureCanvasText(context, text) {
  return Math.ceil(context.measureText(String(text)).width);
}

function measureCanvasWrappedLineCount(context, text, maxWidth) {
  let line = "";
  let count = 1;
  Array.from(String(text || "")).forEach((char) => {
    const nextLine = line + char;
    if (measureCanvasText(context, nextLine) > maxWidth && line) {
      count += 1;
      line = char;
    } else {
      line = nextLine;
    }
  });
  return count;
}

function drawRichTextLine(context, text, ranges, x, y, defaultColor, highlightColor) {
  const segments = splitMessageSegments(text, ranges);
  const totalWidth = segments.reduce((sum, segment) => sum + measureCanvasText(context, segment.text), 0);
  let cursorX = x - totalWidth / 2;
  segments.forEach((segment) => {
    context.fillStyle = segment.highlighted ? highlightColor : defaultColor;
    context.fillText(segment.text, cursorX, y);
    cursorX += measureCanvasText(context, segment.text);
  });
}

function drawRichWrappedText(context, text, ranges, x, y, maxWidth, lineHeight, defaultColor, highlightColor) {
  const highlighted = normalizeRanges(ranges, text.length);
  let cursor = 0;
  let line = "";
  let lineY = y;

  Array.from(text).forEach((char) => {
    const nextLine = line + char;
    if (measureCanvasText(context, nextLine) > maxWidth && line) {
      drawRichTextRun(context, line, highlighted, cursor - line.length, x, lineY, defaultColor, highlightColor);
      line = char;
      lineY += lineHeight;
    } else {
      line = nextLine;
    }
    cursor += char.length;
  });

  if (line) {
    drawRichTextRun(context, line, highlighted, cursor - line.length, x, lineY, defaultColor, highlightColor);
  }
}

function drawRichTextRun(context, line, ranges, offset, x, y, defaultColor, highlightColor) {
  let cursorX = x;
  Array.from(line).forEach((char, index) => {
    const absoluteIndex = offset + index;
    const highlighted = ranges.some((range) => absoluteIndex >= range.start && absoluteIndex < range.end);
    context.fillStyle = highlighted ? highlightColor : defaultColor;
    context.fillText(char, cursorX, y);
    cursorX += measureCanvasText(context, char);
  });
}

function drawPointCanvasText(context, text, ranges, x, y, maxWidth) {
  context.font = '500 18px "Source Han Sans", "PingFang SC", sans-serif';
  getPointLines(text).forEach((line, index) => {
    const lineY = y + index * 56;
    context.font = '500 18px "Source Han Sans", "PingFang SC", sans-serif';
    context.textAlign = "left";
    drawRichWrappedText(context, line.text, remapRangesToPointLine(ranges, line), x, lineY, maxWidth, 28, "rgba(0, 0, 0, 0.9)", "#EA572E");
  });
}

function wrapCanvasText(context, text, x, y, maxWidth, lineHeight) {
  let line = "";
  let lineY = y;
  Array.from(text).forEach((char) => {
    const nextLine = line + char;
    if (measureCanvasText(context, nextLine) > maxWidth && line) {
      context.fillText(line, x, lineY);
      line = char;
      lineY += lineHeight;
    } else {
      line = nextLine;
    }
  });
  if (line) context.fillText(line, x, lineY);
}

function canvasToJpgBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("无法生成 JPG 图片"));
    }, "image/jpeg", 1);
  });
}

function canvasToPngBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("无法生成 PNG 图片"));
    }, "image/png");
  });
}

async function saveJpgBlob(blob, filename) {
  if (window.showSaveFilePicker) {
    const handle = await window.showSaveFilePicker({
      suggestedName: filename,
      types: [{ description: "JPG 图片", accept: { "image/jpeg": [".jpg", ".jpeg"] } }],
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

async function savePngBlob(blob, filename) {
  if (window.showSaveFilePicker) {
    const handle = await window.showSaveFilePicker({
      suggestedName: filename,
      types: [{ description: "PNG 图片", accept: { "image/png": [".png"] } }],
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

createRoot(document.getElementById("root")).render(<App />);
