/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TNode, ClassName, Styles, AttachNode } from '../common';
import { MouseEvent, KeyboardEvent, FocusEvent, WheelEvent } from 'react';

export interface TdPopupProps {
  /**
   * 制定挂载节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   * @default 'body'
   */
  attach?: AttachNode;
  /**
   * 触发元素，同 triggerElement
   */
  children?: TNode;
  /**
   * 浮层里面的内容
   */
  content?: TNode;
  /**
   * 延时显示或隐藏浮层，[延迟显示的时间，延迟隐藏的时间]，单位：毫秒。如果只有一个时间，则表示显示和隐藏的延迟时间相同。示例 `'300'` 或者 `[200, 200]`。默认为：[250, 150]
   */
  delay?: number | Array<number>;
  /**
   * 是否在关闭浮层时销毁浮层
   * @default false
   */
  destroyOnClose?: boolean;
  /**
   * 是否禁用组件
   * @default false
   */
  disabled?: boolean;
  /**
   * 浮层是否隐藏空内容，默认不隐藏
   * @default false
   */
  hideEmptyPopup?: boolean;
  /**
   * 浮层类名，示例：'name1 name2 name3' 或 `['name1', 'name2']` 或 `[{ 'name1': true }]`
   */
  overlayClassName?: ClassName;
  /**
   * 浮层内容部分类名，示例：'name1 name2 name3' 或 `['name1', 'name2']` 或 `[{ 'name1': true }]`
   */
  overlayInnerClassName?: ClassName;
  /**
   * 浮层内容部分样式，第一个参数 `triggerElement` 表示触发元素 DOM 节点，第二个参数 `popupElement` 表示浮层元素 DOM 节点
   */
  overlayInnerStyle?: Styles | ((triggerElement: HTMLElement, popupElement: HTMLElement) => Styles);
  /**
   * 浮层样式，第一个参数 `triggerElement` 表示触发元素 DOM 节点，第二个参数 `popupElement` 表示浮层元素 DOM 节点
   */
  overlayStyle?: Styles | ((triggerElement: HTMLElement, popupElement: HTMLElement) => Styles);
  /**
   * 浮层出现位置
   * @default top
   */
  placement?: PopupPlacement;
  /**
   * popper 初始化配置，详情参考 https://popper.js.org/docs/
   */
  popperOptions?: object;
  /**
   * 点击触发元素后，浮层将显示在 `reference` 附近，通过 `placement` 定义方向。浮层显示的位置不一定是触发浮层显示的元素。一般应用在列表中，大量单元格都需要使用到浮层能力，此时可以通过动态调整 `reference` 来实现只需渲染一个浮层元素
   */
  reference?: TNode;
  /**
   * 是否显示浮层箭头
   * @default false
   */
  showArrow?: boolean;
  /**
   * 触发浮层出现的方式
   * @default hover
   */
  trigger?: 'hover' | 'click' | 'focus' | 'context-menu';
  /**
   * 触发元素，点击这个元素会触发显示浮层。值类型为字符串表示元素选择器。示例一：`'#trigger-element'`，示例二：`() => document.body`
   */
  triggerElement?: TNode;
  /**
   * 是否显示浮层
   * @default false
   */
  visible?: boolean;
  /**
   * 是否显示浮层，非受控属性
   * @default false
   */
  defaultVisible?: boolean;
  /**
   * 组件层级，Web 侧样式默认为 5500，移动端和小程序样式默认为 1500
   */
  zIndex?: number;
  /**
   * 下拉选项滚动事件
   */
  onScroll?: (context: { e: WheelEvent<HTMLDivElement> }) => void;
  /**
   * 当浮层隐藏或显示时触发，`trigger=document` 表示点击非浮层元素触发；`trigger=context-menu` 表示右击触发
   */
  onVisibleChange?: (visible: boolean, context: PopupVisibleChangeContext) => void;
}

export type PopupPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'left-top'
  | 'left-bottom'
  | 'right-top'
  | 'right-bottom';

export interface PopupVisibleChangeContext {
  e?: PopupTriggerEvent;
  trigger?: PopupTriggerSource;
}

export type PopupTriggerEvent = MouseEvent<HTMLDivElement> | FocusEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>;

export type PopupTriggerSource =
  | 'document'
  | 'trigger-element-click'
  | 'trigger-element-hover'
  | 'trigger-element-blur'
  | 'trigger-element-focus'
  | 'context-menu'
  | 'keydown-esc';