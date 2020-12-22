# vue3_todo

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# 组件-->commit-->mutation-->state-->试图变更-->响应式

# 1.组件->dispatch->action

# 2.dispatch->actiontype-对应的 action

# 3.action->commit 调用->mutation

# 4.mutation->change->state

# 5.render 方案：state->数据流->视图

# 1.actionTypeS action 类型

# 2.actions 调用 mutation 的方法

# 3.mutations 更改 state 的方法

# 4.state 中央数据管理池

# 5.store 出口 actions、mutations、state 统一到仓库里进行管理

# 组件划分

-TodoList

# 1 、TodoInput -> 输入组件

# 2、TodoList -> 列表组件

     # -TodoItem 列表项
     # 1、完成或者未完成的选择 CheckBox
     # 2、删除选项            button
     # 3、正在做的确认按钮     button
