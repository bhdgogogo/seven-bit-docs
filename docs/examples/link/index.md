# 链接 Link
链接是你设置的引导用户进行跳转的组件

## 基本用法
链接的基本用法

:::code link/link1.vue
:::


## 类型配置
链接分为： `default`，`secondary`，`success`，`warning`，`error` 五种类型，你可以使用 `type` 属性配置他们。你也可以通过 class 自己配置你需要的色彩样式。

::: warning 💡 说明
默认的状态主题包含正常状态、hover 状态和 disabled 状态的样式
:::

:::code link/link2.vue
:::

## 下划线
设置 `underline` 属性可以让链接在鼠标悬停的时候显示下划线，下划线色彩和文字色彩统一。

:::code link/link3.vue
:::

## 禁用
设置 `disabled` 属性可以禁用链接。

:::code link/link4.vue
:::

## API

###  `<link>` Props
| 参数名                 | 描述                                               | 类型                                                | 默认值     |
| :-------------------- | :------------------------------------------------- | :-------------------------------------------------- | :--------- |
| type                  | 链接的类型                                          | 'default' \| 'warning' \| 'error' \| 'success' \| 'secondary' | default |
| round                 | 是否hover时显示下划线                                | boolean                                           | false    |
| disabled | 是否禁用                                   | boolean                                    | false   |

### `<link>` Slots

| 插槽名  | 描述                   | 参数 |
| :------ | :--------------------- | :--- |
| default | 放置链接里展示的内容             | -    |
