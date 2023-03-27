# 按钮 Button
按钮是一种命令组件，可发起一个即时操作。

## 基本用法
按钮分为：基本按钮、线形按钮和文本按钮 三种。你可以使用 `type` 属性配置他们。

:::code button/button1.vue
:::


## 状态配置
按钮分为： `default`，`secondary`，`success`，`warning`，`danger` 五种状态，你可以使用 `status` 属性配置他们。你也可以通过 class 自己配置你需要的色彩样式。

::: warning 💡 说明
默认的状态主题包含正常状态、hover 状态和 disabled 状态的样式
:::

:::code button/button2.vue
:::

## 尺寸配置
按钮分为：小、正常、大四种尺寸。高度分别为：28px/32px/36px。你可以使用 `size` 属性配置他们。你也可以通过 class 自己配置你需要的尺寸样式。


:::code button/button3.vue
:::

## 自适应长度
设置 `long` 属性可以让按钮宽度随着容器宽度进行适配。

:::code button/button4.vue
:::

## 圆角
设置 `round` 属性可以让按钮呈现全圆角样式，你也可以通过 class 自己配置你需要的圆角样式。

:::code button/button5.vue
:::

## 禁用
设置 `disabled` 属性可以禁用按钮。

:::code button/button6.vue
:::

## API

###  `<button>` Props
| 参数名                 | 描述                                               | 类型                                                | 默认值     |
| :-------------------- | :------------------------------------------------- | :-------------------------------------------------- | :--------- |
| type                  | 按钮的类型                                          | 'primary' \| 'outline'\| 'text'                          | primary |
| status                | 按钮的状态                                          | 'default' \| 'warning' \| 'danger' \| 'success' \| 'secondary' | default |
| size                  | 按钮的尺寸                                          | 'large' \| 'small' \| 'default'                            | default |
| round                 | 是否圆角                                            | boolean                                           | false    |
| disabled | 是否禁用                                   | boolean                                    | false   |
| long       | 是否自适应宽度                          | boolean                         | false |

### `<button>` Slots

| 插槽名  | 描述                   | 参数 |
| :------ | :--------------------- | :--- |
| default | 放置按钮里展示的内容             | -    |