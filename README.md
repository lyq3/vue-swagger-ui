# vue-swagger-ui

> VUE重写的Swagger-ui，使其更方便，更美观

#### 效果图

![vue-swagger-ui](http://opl3lmj0o.bkt.clouddn.com/2017-12-30_212108.png)

![vue-swagger-ui](http://opl3lmj0o.bkt.clouddn.com/2017-12-30_212054.png)


### 使用教程

#### 引入swagger
首先需要引入swagger的配置包信息,过程自行百度

#### vue-swagger-ui引入

#### 1、第一种方式：jar包引入法

将项目jar目录下的jar包引入到项目中（加入 Build Path），如果项目使用的是maven则加入本地依赖，(本项目暂时未加入中央仓库，只能从本地依赖,后续有时间会申请提交到中央仓库)

```xml
<dependency>
    <groupId>com.github.yq3</groupId>
    <artifactId>vue-swager-ui</artifactId>
    <version>1.0-SNAPSHOT</version>
    <scope>system</scope>
    <systemPath>${project.basedir}/../ds-config/src/main/resources/lib/vue-swager-ui-1.0-SNAPSHOT.jar</systemPath>
</dependency>
```
上面路径为本地jar包所在目录 

#### 2、第二种方式：html静态页面引入

用npm 将项目打包后，将打包后的build目录放入到你项目静态页面的目录中，vue-doc.html必须为第一层目录，列如：localhost:8080/vue-doc.html,这样就可以了，如果需要改变路径，则修改本项目源代码store.js中的v2/api-docs路径即可

#### 注意事项

swagger封装给出的请求地址默认是/v2/api-docs,所以vue-swagger-ui调用后台也是/v2/api-docs,不能带后缀,且需返回json格式数据,**框架如果是spring boot的可以不用修改,直接使用**,如果是Spring MVC在web.xml中配置了DispatcherServlet,则需要追加一个url匹配规则,如下：
```xml
<servlet>

 <servlet-name>demo</servlet-name>

 <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>

 <init-param>

 <param-name>contextConfigLocation</param-name>

 <param-value>classpath:config/spring.xml</param-value>

 </init-param>

 <load-on-startup>1</load-on-startup>

</servlet>


<!--默认配置,.htm|.do|.json等等配置-->

<servlet-mapping>

 <servlet-name>demo</servlet-name>

 <url-pattern>*.htm</url-pattern>

</servlet-mapping>

<!-- 配置vue-swagger-ui的url请求路径-->

<servlet-mapping>

 <servlet-name>demo</servlet-name>

 <url-pattern>/v2/api-docs</url-pattern>

</servlet-mapping>
```

#### 访问地址
> localhost:8080/vue-doc.html

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
