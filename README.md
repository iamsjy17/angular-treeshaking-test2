## Tree Shaking Test

> ng serve --aot=true --optimization=true 기준

### 테스트 1

lazy-loading 되는 모듈에서 어떤 컴포넌트를 export하고 있고, 어떤 모듈에서 명시적으로 import해서 lazy-loading되는 모듈에서 export하는 어떤 컴포넌트를 사용할 때.

사용하지 않는 컴포넌트들은 tree-shaking 되는가?

> TreeShaking 되고 import 되고 있는 컴포넌트만 현재 모듈 번들에 포함된다.
> 그러나 Lazy-Module이 로드되고, 그 모듈의 라우터에서 import 하는 모든 컴포넌트가 로드된다. (모듈에서 declarations에 추가된 컴포넌트가 아닌 routing module에서 import 하고 있는 컴포넌트)

```ts
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, LazyAppRoutingModule, LazyModule],
})
```

```html
<p>{{ title }}</p>
<app-test1></app-test1>
```

### 테스트 2

위젯 모듈에서 export하고 있는 여러 컴포넌트 중 어떤 컴포넌트를 사용할 때.

사용하지 않는 컴포넌트들은 tree-shaking 되는가?

> TreeShaking 되고 import 되고 있는 컴포넌트만 현재 모듈 번들에 포함된다.

```ts
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, LazyAppRoutingModule, WidgetModule],
})
```
