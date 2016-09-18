<style lang="stylus" scope>

$main_font-color = rgb(101, 101, 101)
$entry_icon-size = 18px
$accent-color = rgb(0, 121, 192)
$secondary_font-color = rgb(51, 51, 51)

.entries
  display flex
  flex-wrap wrap
  align-content space-between
  .entries_lists, .entries_controls
    width 100%
  .entries_lists
    .lists_list
      padding 15px 0px
      font-size 12px
      &:first-child
        padding-top 5px
        border-bottom 1px solid rgb(228, 232, 235)
      .list-header, .list_entry
        height 30px
        display flex
        align-items center
        padding 0 15px
      .list-header
        padding-left $entry_icon-size + 15px
      .list_entry
        &, & .entry_label
          cursor pointer
        &.active, &:hover
          .entry_icon
            color $secondary_font-color
        &.active
          background rgb(228, 232, 235)
        &:hover
          background rgb(228, 232, 235)
      .header_label
        font-weight 700
        color $main_font-color
        font-size .8em
        text-transform uppercase
      .entry_label
        margin-left 15px
        color $secondary_font-color
      .entry_icon
        width $entry_icon-size
        font-size $entry_icon-size
        color $main_font-color
        display flex
        align-content center
      .entry_count
        margin-left: auto
        width 22px
        text-align center
        border-radius 20px
        color #333333
        font-weight 600
        height 17px
        display flex
        align-items: center
        justify-content: center
        font-size: 9px
  .entries_controls
    padding 20px 10px
    border-top 1px solid rgb(228, 232, 235)
    .controls_add-entry
      display flex
      align-items center
      &:hover
        &, .add-entry_button, .add-entry_label
          border-color #000
          color #000
          cursor pointer
      .add-entry_button, .add-entry_label
        color #666
      .add-entry_button
      .add-entry_label
        font-weight 500
        font-size 0.9em
        text-transform uppercase
        margin-left 10px

.entries_view
  width 100%
  height 100%
  .view_header
    padding 20px 30px
    border-bottom 1px solid rgb(228, 232, 235)
    display none
  .view_content
    .content_entries
      .entries_entry
        height 50px
        display flex
        align-items center
        justify-content space-between
        border-bottom 1px solid rgb(228, 232, 235)
        padding 0 20px
        &:hover
          color #000
          background rgb(228, 232, 235)
          cursor pointer
        &:last-child
          border-bottom none
        .entry_feed
          display flex
          align-items center
          padding 2px 8px
          border-radius 3px
          border 1px solid rgb(228, 232, 235)
          .feed_favicon
            margin-right 4px
            .favicon_image
              width 14px
              height 14px
              margin-top 2px
          .feed_title
            text-transform uppercase
            font-size 9px
            font-weight 600
        .entry_details
          width 100%
          display flex
          justify-content space-between
          align-items center
          margin 0 20px
          .details_title
            font-weight 600
          /*.details_summary*/
          .details_published
            font-weight 300
            font-size 0.9em
            text-transform uppercase
        .entry_controls
          display flex
          justify-content flex-end
          .controls_controller
            padding 0px 5px
            &:hover
              color #fff
            .controller_icon
              width 14px
              height 14px
              font-size 14px

</style>

<template>

  <section id="component__feeds">
    <nav class="entries sidebar">
      <div class="entries_lists">
        <ol class="lists_list entries_list_static">
          <li class="list-header">
            <label class="entry_label header_label">General</label>
          </li>
          <li class="list_entry list_entry_all active">
            <i class="entry_icon material-icons">inbox</i>
            <label class="entry_label">All entries</label>
            <span class="entry_count badge">14</span>
          </li>
          <li class="list_entry list_entry_unread">
            <i class="entry_icon material-icons">remove_red_eye</i>
            <label class="entry_label">Unread entries</label>
            <span class="entry_count badge">7</span>
          </li>
          <li class="list_entry list_entry_starred">
            <i class="entry_icon material-icons">star</i>
            <label class="entry_label">Starred entries</label>
            <span class="entry_count badge">3</span>
          </li>
          <li class="list_entry list_entry_history">
            <i class="entry_icon material-icons">history</i>
            <label class="entry_label">Recently read</label>
            <span class="entry_count badge">2</span>
          </li>
        </ol>
        <ol class="lists_list entries_list_added">
          <li class="list-header">
            <label class="entry_label header_label">Feeds</label>
          </li>
          <li class="list_entry list_entry_added">
            <img src="http://vuejs.org/images/logo.png"
            class="entry_icon entry_icon_favicon"></img>
            <label class="entry_label">Vue.js</label>
            <span class="entry_count badge">8</span>
          </li>
          <li class="list_entry list_entry_added">
            <img src="https://s.blogsmithmedia.com/www.engadget.com/assets-ha7678419953659731d109d9d35129679/images/apple-touch-icon-57x57.png"
            class="entry_icon entry_icon_favicon"></img>
            <label class="entry_label">Engadget</label>
            <span class="entry_count badge">1</span>
          </li>
          <li class="list_entry list_entry_added">
            <img src="http://www.vg.no/favicon.ico"
            class="entry_icon entry_icon_favicon"></img>
            <label class="entry_label">VG</label>
            <span class="entry_count badge">3</span>
          </li>
          <li class="list_entry list_entry_added">
            <img src="http://www.redditstatic.com/favicon.ico"
            class="entry_icon entry_icon_favicon"></img>
            <label class="entry_label">Reddit</label>
            <span class="entry_count badge">5</span>
          </li>
        </ol>
      </div>
      <div class="entries_controls">
        <div class="controls_add-entry">
          <button class="add-entry_button button-ghost" type="button">
            <i class="button_icon material-icons">add</i>
          </button>
          <label class="add-entry_label">Add feed</label>
        </div>
      </div>
    </nav>
    <div class="entries_view">
      <div class="view_header">
        <h2 class="header_title">All entries</h2>
      </div>
      <div class="view_content">
        <div class="content_entries">

          <div class="entries_entry">
            <span class="entry_feed">
              <span class="feed_favicon">
                <img class="favicon_image" src="http://vuejs.org/images/logo.png">
              </span>
              <span class="feed_title">Vue.js</span>
            </span>
            <span class="entry_details">
              <span class="details_title">Announcing Vue.js 2.0</span>
              <!-- <span class="details_summary">Today I am thrilled to announce the first public preview of Vue.js 2.0, which brings along many exciting improvements and new features. Let’s take a peek at what’s in store!</span> -->
              <!-- <span class="details_content">
                <p>Today I am thrilled to announce the first public preview of Vue.js 2.0, which brings along many exciting improvements and new features. Let’s take a peek at what’s in store!</p> <a id="more"></a> <h2 id="Even-Leaner-Even-Faster"><a href="#Even-Leaner-Even-Faster" class="headerlink" title="Eve">n Leaner, Even Faster"></a>Even Leaner, Even Faster</h2><p>Vue.js has always focused on staying light and fast, but 2.0 pushes it even further. The rendering layer is now based on a lightweight virtual-DOM implementation (based on <a href="https://github.com/paldepind/snabbdom" target="_blank" rel="external">Snabbdom</a>) that improves initial rendering speed and memory consumption by up to 2~4x in most scenarios (check out <a href="https://github.com/vuejs/vue/tree/next/benchmarks" target="_blank" rel="external">these benchmarks</a>). The template-to-virtual-DOM compiler and the runtime can be separated, so you can pre-compile templates and ship your app with only the runtime, which is less than 12kb min+gzip (as a reference, React 15 is 44kb min+gzip). The compiler also works in the browser, which means you can still drop in one script tag and start hacking, just like before. Even with the compiler included, the build is sitting at 17kb min+gzip, still lighter than the current 1.0 build.</p> <h2 id="Not-Your-Average-Virtual-DOM"><a href="#Not-Your-Average-Virtual-DOM" class="headerlink" title="Not Your Average Virtual-DOM"></a>Not Your Average Virtual-DOM</h2><p>Now, just virtual-DOM sounds boring because there are so many implementations out there - but this one is different. Combined with Vue’s reactivity system, it provides optimized re-rendering out of the box without you having to do anything. Each component keeps track of its reactive dependencies during its render, so the system knows precisely when to re-render, and which components to re-render. No need for <code>shouldComponentUpdate</code> or immutable data structures - <strong>it just works</strong>.</p> <p>In addition, Vue 2.0 applies some advanced optimizations during the template-to-virtual-DOM compilation phase:</p> <ol> <li><p>It detects static class names and attributes so that they are never diffed after the initial render.</p> </li> <li><p>It detects the maximum static sub trees (sub trees with no dynamic bindings) and hoist them out of the render function. So on each re-render, it directly reuses the exact same virtual nodes and skips the diffing.</p> </li> </ol> <p>These advanced optimizations can usually only be achieved via Babel plugins when using JSX, but with Vue 2.0 you can get them even using the in-browser compiler.</p> <p>The new rendering system also allows you to disable reactive conversions by simply freezing your data and manually force updates, essentially giving you full control over the re-rendering process.</p> <p>With these techniques combined, Vue 2.0 ensures blazing fast performance in every possible scenario while requiring minimal optimization efforts from the developer.</p> <h2 id="Templates-JSX-or-Hyperscript"><a href="#Templates-JSX-or-Hyperscript" class="headerlink" title="Templates, JSX, or Hyperscript?"></a>Templates, JSX, or Hyperscript?</h2><p>Developers tend to have strong opinions on templates vs. JSX. On the one hand, templates are closer to HTML - they map better to the semantic structure of your app and make it much easier to think visually about the design, layout and styling. On the other hand, templates are limited to the DSL while the programmatic nature of JSX/hyperscript provides the full expressive power of a turing-complete language.</p> <p>Being a designer/developer hybrid, I prefer writing most of my interfaces in templates, but in certain cases I do miss the flexibility of JSX/hyperscript. An example would be writing a component that programmatically handles its children, something not feasible with just the template-based slot mechanism.</p> <p>Well, why not have both? In Vue 2.0, you can keep using the familiar template syntax, or drop down to the virtual-DOM layer whenever you feel constrained by the template DSL. Instead of the <code>template</code> option, just replace it with a <code>render</code> function. You can even embed render functions in your templates using the special <code>&lt;render&gt;</code> tag! The best of both worlds, in the same framework.</p> <h2 id="Streaming-Server-side-Rendering"><a href="#Streaming-Server-side-Rendering" class="headerlink" title="Streaming Server-side Rendering"></a>Streaming Server-side Rendering</h2><p>With the migration to virtual-DOM, Vue 2.0 naturally supports server-side rendering with client-side hydration. One pain point of current mainstream server rendering implementations, such as React’s, is that the rendering is synchronous so it can block the server’s event loop if the app is complex. Synchronous server-side rendering may even adversely affect time-to-content on the client. Vue 2.0 provides built-in streaming server-side rendering, so that you can render your component, get a readable stream back and directly pipe it to the HTTP response. This ensures your server is responsive, and gets the rendered content to your users faster.</p> <h2 id="Unlocking-More-Possibilities"><a href="#Unlocking-More-Possibilities" class="headerlink" title="Unlocking More Possibilities"></a>Unlocking More Possibilities</h2><p>With the new architecture, there are even more possibilities to explore - for example, rendering to native interfaces on mobile. Currently, we are exploring a port of Vue.js 2.0 that uses <a href="http://alibaba.github.io/weex/" target="_blank" rel="external">weex</a> as a native rendering backend, a project maintained by engineers at Alibaba Group, the biggest tech enterprise of China. It is also technically feasible to adapt Vue 2.0’s virtual-DOM to run inside ReactNative. We are excited to see how it goes!</p> <h2 id="Compatibility-and-What-to-Expect-Next"><a href="#Compatibility-and-What-to-Expect-Next" class="headerlink" title="Compatibility and What to Expect Next"></a>Compatibility and What to Expect Next</h2><p>Vue.js 2.0 is still in pre-alpha, but you can checkout the source code <a href="https://github.com/vuejs/vue/tree/next/" target="_blank" rel="external">here</a>. Despite being a full rewrite, the API is largely compatible with 1.0 with the exception of some intentional deprecations. Check out <a href="https://github.com/vuejs/vue/tree/next/examples" target="_blank" rel="external">the same official examples written in 2.0</a> - you will see that not much has changed!</p> <p>The feature deprecations are part of our continued effort to provide the simplest API possible for maximum developer productivity. You can check out a 1.0 vs. 2.0 feature comparison <a href="https://github.com/vuejs/vue/wiki/2.0-features" target="_blank" rel="external">here</a>. This does mean that it will take some effort to migrate an existing app if you happen to use some of these deprecated features heavily, but we will provide detailed upgrade guides in the future.</p> <p>There is still much work left to be done. We will be releasing the first alpha once we reach satisfactory test coverage, and we are aiming for beta by end of May / early June. In addition to more tests, we also need to update the supporting libraries (vue-router, Vuex, vue-loader, vueify…). Currently only Vuex works with 2.0 out of the box, but we will make sure that everything works smoothly together when 2.0 ships.</p> <p>We are also not forgetting about 1.x! 1.1 will be released alongside 2.0 beta, with an LTS period of 6-month critical bug fixes and 9-month security updates. It will also ship with optional deprecation warnings to get you prepared for upgrading to 2.0. Stay tuned!</p>
              </span> -->
              <span class="details_published">Apr 27, 2016</span>
            </span>
            <span class="entry_controls">
              <span class="controls_controller controller_star-entry">
                <i class="controller_icon star-entry_icon material-icons">star</i>
              </span>
              <span class="controls_controller controller-remove-entry">
                <i class="controller_icon remove-entry_icon material-icons">delete</i>
              </span>
            </span>
          </div>

          <div class="entries_entry">
            <span class="entry_feed">
              <span class="feed_favicon">
                <img class="favicon_image" src="http://vuejs.org/images/logo.png">
              </span>
              <span class="feed_title">Vue.js</span>
            </span>

            <span class="entry_details">
              <span class="details_title">Announcing Vue.js 2.0</span>
              <!-- <span class="details_summary">Today I am thrilled to announce the first public preview of Vue.js 2.0, which brings along many exciting improvements and new features. Let’s take a peek at what’s in store!</span> -->
              <!-- <span class="details_content">
                <p>Today I am thrilled to announce the first public preview of Vue.js 2.0, which brings along many exciting improvements and new features. Let’s take a peek at what’s in store!</p> <a id="more"></a> <h2 id="Even-Leaner-Even-Faster"><a href="#Even-Leaner-Even-Faster" class="headerlink" title="Eve">n Leaner, Even Faster"></a>Even Leaner, Even Faster</h2><p>Vue.js has always focused on staying light and fast, but 2.0 pushes it even further. The rendering layer is now based on a lightweight virtual-DOM implementation (based on <a href="https://github.com/paldepind/snabbdom" target="_blank" rel="external">Snabbdom</a>) that improves initial rendering speed and memory consumption by up to 2~4x in most scenarios (check out <a href="https://github.com/vuejs/vue/tree/next/benchmarks" target="_blank" rel="external">these benchmarks</a>). The template-to-virtual-DOM compiler and the runtime can be separated, so you can pre-compile templates and ship your app with only the runtime, which is less than 12kb min+gzip (as a reference, React 15 is 44kb min+gzip). The compiler also works in the browser, which means you can still drop in one script tag and start hacking, just like before. Even with the compiler included, the build is sitting at 17kb min+gzip, still lighter than the current 1.0 build.</p> <h2 id="Not-Your-Average-Virtual-DOM"><a href="#Not-Your-Average-Virtual-DOM" class="headerlink" title="Not Your Average Virtual-DOM"></a>Not Your Average Virtual-DOM</h2><p>Now, just virtual-DOM sounds boring because there are so many implementations out there - but this one is different. Combined with Vue’s reactivity system, it provides optimized re-rendering out of the box without you having to do anything. Each component keeps track of its reactive dependencies during its render, so the system knows precisely when to re-render, and which components to re-render. No need for <code>shouldComponentUpdate</code> or immutable data structures - <strong>it just works</strong>.</p> <p>In addition, Vue 2.0 applies some advanced optimizations during the template-to-virtual-DOM compilation phase:</p> <ol> <li><p>It detects static class names and attributes so that they are never diffed after the initial render.</p> </li> <li><p>It detects the maximum static sub trees (sub trees with no dynamic bindings) and hoist them out of the render function. So on each re-render, it directly reuses the exact same virtual nodes and skips the diffing.</p> </li> </ol> <p>These advanced optimizations can usually only be achieved via Babel plugins when using JSX, but with Vue 2.0 you can get them even using the in-browser compiler.</p> <p>The new rendering system also allows you to disable reactive conversions by simply freezing your data and manually force updates, essentially giving you full control over the re-rendering process.</p> <p>With these techniques combined, Vue 2.0 ensures blazing fast performance in every possible scenario while requiring minimal optimization efforts from the developer.</p> <h2 id="Templates-JSX-or-Hyperscript"><a href="#Templates-JSX-or-Hyperscript" class="headerlink" title="Templates, JSX, or Hyperscript?"></a>Templates, JSX, or Hyperscript?</h2><p>Developers tend to have strong opinions on templates vs. JSX. On the one hand, templates are closer to HTML - they map better to the semantic structure of your app and make it much easier to think visually about the design, layout and styling. On the other hand, templates are limited to the DSL while the programmatic nature of JSX/hyperscript provides the full expressive power of a turing-complete language.</p> <p>Being a designer/developer hybrid, I prefer writing most of my interfaces in templates, but in certain cases I do miss the flexibility of JSX/hyperscript. An example would be writing a component that programmatically handles its children, something not feasible with just the template-based slot mechanism.</p> <p>Well, why not have both? In Vue 2.0, you can keep using the familiar template syntax, or drop down to the virtual-DOM layer whenever you feel constrained by the template DSL. Instead of the <code>template</code> option, just replace it with a <code>render</code> function. You can even embed render functions in your templates using the special <code>&lt;render&gt;</code> tag! The best of both worlds, in the same framework.</p> <h2 id="Streaming-Server-side-Rendering"><a href="#Streaming-Server-side-Rendering" class="headerlink" title="Streaming Server-side Rendering"></a>Streaming Server-side Rendering</h2><p>With the migration to virtual-DOM, Vue 2.0 naturally supports server-side rendering with client-side hydration. One pain point of current mainstream server rendering implementations, such as React’s, is that the rendering is synchronous so it can block the server’s event loop if the app is complex. Synchronous server-side rendering may even adversely affect time-to-content on the client. Vue 2.0 provides built-in streaming server-side rendering, so that you can render your component, get a readable stream back and directly pipe it to the HTTP response. This ensures your server is responsive, and gets the rendered content to your users faster.</p> <h2 id="Unlocking-More-Possibilities"><a href="#Unlocking-More-Possibilities" class="headerlink" title="Unlocking More Possibilities"></a>Unlocking More Possibilities</h2><p>With the new architecture, there are even more possibilities to explore - for example, rendering to native interfaces on mobile. Currently, we are exploring a port of Vue.js 2.0 that uses <a href="http://alibaba.github.io/weex/" target="_blank" rel="external">weex</a> as a native rendering backend, a project maintained by engineers at Alibaba Group, the biggest tech enterprise of China. It is also technically feasible to adapt Vue 2.0’s virtual-DOM to run inside ReactNative. We are excited to see how it goes!</p> <h2 id="Compatibility-and-What-to-Expect-Next"><a href="#Compatibility-and-What-to-Expect-Next" class="headerlink" title="Compatibility and What to Expect Next"></a>Compatibility and What to Expect Next</h2><p>Vue.js 2.0 is still in pre-alpha, but you can checkout the source code <a href="https://github.com/vuejs/vue/tree/next/" target="_blank" rel="external">here</a>. Despite being a full rewrite, the API is largely compatible with 1.0 with the exception of some intentional deprecations. Check out <a href="https://github.com/vuejs/vue/tree/next/examples" target="_blank" rel="external">the same official examples written in 2.0</a> - you will see that not much has changed!</p> <p>The feature deprecations are part of our continued effort to provide the simplest API possible for maximum developer productivity. You can check out a 1.0 vs. 2.0 feature comparison <a href="https://github.com/vuejs/vue/wiki/2.0-features" target="_blank" rel="external">here</a>. This does mean that it will take some effort to migrate an existing app if you happen to use some of these deprecated features heavily, but we will provide detailed upgrade guides in the future.</p> <p>There is still much work left to be done. We will be releasing the first alpha once we reach satisfactory test coverage, and we are aiming for beta by end of May / early June. In addition to more tests, we also need to update the supporting libraries (vue-router, Vuex, vue-loader, vueify…). Currently only Vuex works with 2.0 out of the box, but we will make sure that everything works smoothly together when 2.0 ships.</p> <p>We are also not forgetting about 1.x! 1.1 will be released alongside 2.0 beta, with an LTS period of 6-month critical bug fixes and 9-month security updates. It will also ship with optional deprecation warnings to get you prepared for upgrading to 2.0. Stay tuned!</p>
              </span> -->
              <span class="details_published">Apr 27, 2016</span>
            </span>

            <span class="entry_controls">
              <span class="controls_controller controller_star-entry">
                <i class="controller_icon star-entry_icon material-icons">star</i>
              </span>
              <span class="controls_controller controller-remove-entry">
                <i class="controller_icon remove-entry_icon material-icons">delete</i>
              </span>
            </span>
          </div>

          <div class="entries_entry">
            <span class="entry_feed">
              <span class="feed_favicon">
                <img class="favicon_image" src="http://vuejs.org/images/logo.png">
              </span>
              <span class="feed_title">Vue.js</span>
            </span>

            <span class="entry_details">
              <span class="details_title">Announcing Vue.js 2.0</span>
              <!-- <span class="details_summary">Today I am thrilled to announce the first public preview of Vue.js 2.0, which brings along many exciting improvements and new features. Let’s take a peek at what’s in store!</span> -->
              <!-- <span class="details_content">
                <p>Today I am thrilled to announce the first public preview of Vue.js 2.0, which brings along many exciting improvements and new features. Let’s take a peek at what’s in store!</p> <a id="more"></a> <h2 id="Even-Leaner-Even-Faster"><a href="#Even-Leaner-Even-Faster" class="headerlink" title="Eve">n Leaner, Even Faster"></a>Even Leaner, Even Faster</h2><p>Vue.js has always focused on staying light and fast, but 2.0 pushes it even further. The rendering layer is now based on a lightweight virtual-DOM implementation (based on <a href="https://github.com/paldepind/snabbdom" target="_blank" rel="external">Snabbdom</a>) that improves initial rendering speed and memory consumption by up to 2~4x in most scenarios (check out <a href="https://github.com/vuejs/vue/tree/next/benchmarks" target="_blank" rel="external">these benchmarks</a>). The template-to-virtual-DOM compiler and the runtime can be separated, so you can pre-compile templates and ship your app with only the runtime, which is less than 12kb min+gzip (as a reference, React 15 is 44kb min+gzip). The compiler also works in the browser, which means you can still drop in one script tag and start hacking, just like before. Even with the compiler included, the build is sitting at 17kb min+gzip, still lighter than the current 1.0 build.</p> <h2 id="Not-Your-Average-Virtual-DOM"><a href="#Not-Your-Average-Virtual-DOM" class="headerlink" title="Not Your Average Virtual-DOM"></a>Not Your Average Virtual-DOM</h2><p>Now, just virtual-DOM sounds boring because there are so many implementations out there - but this one is different. Combined with Vue’s reactivity system, it provides optimized re-rendering out of the box without you having to do anything. Each component keeps track of its reactive dependencies during its render, so the system knows precisely when to re-render, and which components to re-render. No need for <code>shouldComponentUpdate</code> or immutable data structures - <strong>it just works</strong>.</p> <p>In addition, Vue 2.0 applies some advanced optimizations during the template-to-virtual-DOM compilation phase:</p> <ol> <li><p>It detects static class names and attributes so that they are never diffed after the initial render.</p> </li> <li><p>It detects the maximum static sub trees (sub trees with no dynamic bindings) and hoist them out of the render function. So on each re-render, it directly reuses the exact same virtual nodes and skips the diffing.</p> </li> </ol> <p>These advanced optimizations can usually only be achieved via Babel plugins when using JSX, but with Vue 2.0 you can get them even using the in-browser compiler.</p> <p>The new rendering system also allows you to disable reactive conversions by simply freezing your data and manually force updates, essentially giving you full control over the re-rendering process.</p> <p>With these techniques combined, Vue 2.0 ensures blazing fast performance in every possible scenario while requiring minimal optimization efforts from the developer.</p> <h2 id="Templates-JSX-or-Hyperscript"><a href="#Templates-JSX-or-Hyperscript" class="headerlink" title="Templates, JSX, or Hyperscript?"></a>Templates, JSX, or Hyperscript?</h2><p>Developers tend to have strong opinions on templates vs. JSX. On the one hand, templates are closer to HTML - they map better to the semantic structure of your app and make it much easier to think visually about the design, layout and styling. On the other hand, templates are limited to the DSL while the programmatic nature of JSX/hyperscript provides the full expressive power of a turing-complete language.</p> <p>Being a designer/developer hybrid, I prefer writing most of my interfaces in templates, but in certain cases I do miss the flexibility of JSX/hyperscript. An example would be writing a component that programmatically handles its children, something not feasible with just the template-based slot mechanism.</p> <p>Well, why not have both? In Vue 2.0, you can keep using the familiar template syntax, or drop down to the virtual-DOM layer whenever you feel constrained by the template DSL. Instead of the <code>template</code> option, just replace it with a <code>render</code> function. You can even embed render functions in your templates using the special <code>&lt;render&gt;</code> tag! The best of both worlds, in the same framework.</p> <h2 id="Streaming-Server-side-Rendering"><a href="#Streaming-Server-side-Rendering" class="headerlink" title="Streaming Server-side Rendering"></a>Streaming Server-side Rendering</h2><p>With the migration to virtual-DOM, Vue 2.0 naturally supports server-side rendering with client-side hydration. One pain point of current mainstream server rendering implementations, such as React’s, is that the rendering is synchronous so it can block the server’s event loop if the app is complex. Synchronous server-side rendering may even adversely affect time-to-content on the client. Vue 2.0 provides built-in streaming server-side rendering, so that you can render your component, get a readable stream back and directly pipe it to the HTTP response. This ensures your server is responsive, and gets the rendered content to your users faster.</p> <h2 id="Unlocking-More-Possibilities"><a href="#Unlocking-More-Possibilities" class="headerlink" title="Unlocking More Possibilities"></a>Unlocking More Possibilities</h2><p>With the new architecture, there are even more possibilities to explore - for example, rendering to native interfaces on mobile. Currently, we are exploring a port of Vue.js 2.0 that uses <a href="http://alibaba.github.io/weex/" target="_blank" rel="external">weex</a> as a native rendering backend, a project maintained by engineers at Alibaba Group, the biggest tech enterprise of China. It is also technically feasible to adapt Vue 2.0’s virtual-DOM to run inside ReactNative. We are excited to see how it goes!</p> <h2 id="Compatibility-and-What-to-Expect-Next"><a href="#Compatibility-and-What-to-Expect-Next" class="headerlink" title="Compatibility and What to Expect Next"></a>Compatibility and What to Expect Next</h2><p>Vue.js 2.0 is still in pre-alpha, but you can checkout the source code <a href="https://github.com/vuejs/vue/tree/next/" target="_blank" rel="external">here</a>. Despite being a full rewrite, the API is largely compatible with 1.0 with the exception of some intentional deprecations. Check out <a href="https://github.com/vuejs/vue/tree/next/examples" target="_blank" rel="external">the same official examples written in 2.0</a> - you will see that not much has changed!</p> <p>The feature deprecations are part of our continued effort to provide the simplest API possible for maximum developer productivity. You can check out a 1.0 vs. 2.0 feature comparison <a href="https://github.com/vuejs/vue/wiki/2.0-features" target="_blank" rel="external">here</a>. This does mean that it will take some effort to migrate an existing app if you happen to use some of these deprecated features heavily, but we will provide detailed upgrade guides in the future.</p> <p>There is still much work left to be done. We will be releasing the first alpha once we reach satisfactory test coverage, and we are aiming for beta by end of May / early June. In addition to more tests, we also need to update the supporting libraries (vue-router, Vuex, vue-loader, vueify…). Currently only Vuex works with 2.0 out of the box, but we will make sure that everything works smoothly together when 2.0 ships.</p> <p>We are also not forgetting about 1.x! 1.1 will be released alongside 2.0 beta, with an LTS period of 6-month critical bug fixes and 9-month security updates. It will also ship with optional deprecation warnings to get you prepared for upgrading to 2.0. Stay tuned!</p>
              </span> -->
              <span class="details_published">Apr 27, 2016</span>
            </span>

            <span class="entry_controls">
              <span class="controls_controller controller_star-entry">
                <i class="controller_icon star-entry_icon material-icons">star</i>
              </span>
              <span class="controls_controller controller-remove-entry">
                <i class="controller_icon remove-entry_icon material-icons">delete</i>
              </span>
            </span>
          </div>

        </div>
      </div>

    </div>
  </section>

</template>

<script>
import * as actions from "../actions"
import * as getters from "../getters"
import * as stubs from "../stubs"

export default {

  name: "feeds",

  vuex: {
    getters,
    actions
  },

  created() {
    this.setFeeds()
  },

  data() {
    return {
      newFeed: stubs.feed
    }
  },

  methods: {
    createFeed() {
      this.addFeed(this.newFeed)
      // this.$router.go("/feeds/" + this.getFeed._id)
    }
  }

}
</script>
