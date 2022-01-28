import{n as o,o as s,b as r,e as n,t as a,j as p}from"./vendor.a58c09b2.js";const l={class:"prose children:text-start"},i=p(`<h2>Introduction</h2><p>In quite a few of my Vue 2 projects I\u2019m using the library <a href="https://github.com/fuxingloh/vue-masonry-wall" target="_blank" rel="noopener">vue-masonry-wall</a>. Its ease-of-use and SSR support were key factors in my decision to use this library in particular.</p><p>However, I\u2019m currently in the progress of preparing my projects for the release of Nuxt 3 and the accompanying migration to Vue 3. Since I couldn\u2019t find a comparable masonry layout for Vue 3, I chose to create a new library based on <a href="https://github.com/fuxingloh" target="_blank" rel="noopener">Fuxing Loh\u2019s</a> <code>vue-masonry-wall</code>.</p><p>The result is <a href="https://github.com/DerYeger/vue-masonry-wall" target="_blank" rel="noopener">@yeger/vue-masonry-wall</a>, a rewrite of the original library in TypeScript and Vue 3. It has no dependencies, resulting in a bundle size decrease of up to 54%.</p><p>I also created <a href="https://github.com/DerYeger/vue2-masonry-wall" target="_blank" rel="noopener">@yeger/vue2-masonry-wall</a> for use in Vue 2 projects. It, too, drops any dependencies, achieving a bundle size decrease of up to 40%</p><p>In addition, multiple issues have been fixed. Notably, spacing (<code>gap</code>) is now considered while calculating the column count, and the removal of elements is now supported.</p><h2>Installation</h2><h3>Vue 2</h3><pre class="language-bash"><code class="language-bash"><span class="token comment"># yarn</span>
$ <span class="token function">yarn</span> <span class="token function">add</span> @yeger/vue2-masonry-wall

<span class="token comment"># npm</span>
$ <span class="token function">npm</span> <span class="token function">install</span> @yeger/vue2-masonry-wall
</code></pre><p>First, you have to install the component like any other plugin. Consult the <a href="https://vuejs.org/v2/guide/plugins.html#Using-a-Plugin" target="_blank" rel="noopener">Vue 2 documentation</a> for detailed information on installing plugins.</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> MasonryWall <span class="token keyword">from</span> <span class="token string">&#39;@yeger/vue2-masonry-wall&#39;</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>MasonryWall<span class="token punctuation">)</span>
</code></pre><h3>Vue 3</h3><pre class="language-bash"><code class="language-bash"><span class="token comment"># yarn</span>
$ <span class="token function">yarn</span> <span class="token function">add</span> @yeger/vue-masonry-wall

<span class="token comment"># npm</span>
$ <span class="token function">npm</span> <span class="token function">install</span> @yeger/vue-masonry-wall
</code></pre><p>First, you have to install the component like any other plugin. Consult the <a href="https://v3.vuejs.org/guide/plugins.html#using-a-plugin" target="_blank" rel="noopener">Vue 3 documentation</a> for detailed information on installing plugins.</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> MasonryWall <span class="token keyword">from</span> <span class="token string">&#39;@yeger/vue-masonry-wall&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>MasonryWall<span class="token punctuation">)</span>
</code></pre><h2>Usage</h2><p>The component is available as <code>masonry-wall</code> or <code>MasonryWall</code>. The only required prop is <code>items</code>, an array of type <code>any</code>. Each element of <code>items</code> is passed to the default slot, alongside its index. The prop <code>column-width</code> takes in a <code>number</code>, specifying the targeted column width. It is used to calculate the column count but does not define the actual width of columns. Similarly, <code>gap</code> defines the gaps between items in pixels and is respected while calculating the column count. Lastly, the prop <code>ssr-columns</code> can be used to specify the column count in server-side-rendering contexts.</p><p>While every prop of the component is reactive, mutations to the <code>items</code> array will not update the layout. To force updates, assign a new array to the <code>items</code> prop.</p><h3>Example</h3><p>The following example demonstrates basic usage of the component. For interactive demonstrations, visit <a href="https://vue-masonry-wall.yeger.eu/" target="_blank" rel="noopener">vue-masonry-wall.yeger.eu</a> or <a href="https://vue2-masonry-wall.yeger.eu/" target="_blank" rel="noopener">vue2-masonry-wall.yeger.eu</a>.</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;MasonryWall :items=&quot;items&quot; :ssr-columns=&quot;1&quot; :column-width=&quot;300&quot; :gap=&quot;16&quot;&gt;
    &lt;template #default=&quot;{ item }&quot;&gt;
      &lt;div :style=&quot;{ height: \`\${item.height}px\` }&quot;&gt;
        {{ item.content }}
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/MasonryWall&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      items: [
        { content: &#39;First&#39;, height: 150 },
        { content: &#39;Second&#39;, height: 300 },
        { content: &#39;Third&#39;, height: 150 },
        { content: &#39;Fourth&#39;, height: 450 },
      ],
    }
  },
}
&lt;/script&gt;
</code></pre>`,21),h="Masonry layout for Vue 2 and Vue 3",m="Responsive masonry layout with SSR support and zero dependencies for Vue 2 and Vue 3.",f="2021-08-16T00:00:00.000Z",k=["Vue","Masonry","Layout"],w="english",v=[{property:"og:title",content:"Masonry layout for Vue 2 and Vue 3"},{property:"og:description",content:"Responsive masonry layout with SSR support and zero dependencies for Vue 2 and Vue 3."},{name:"description",content:"Responsive masonry layout with SSR support and zero dependencies for Vue 2 and Vue 3."}],V={setup(c,{expose:t}){const e={title:"Masonry layout for Vue 2 and Vue 3",description:"Responsive masonry layout with SSR support and zero dependencies for Vue 2 and Vue 3.",date:"2021-08-16T00:00:00.000Z",tags:["Vue","Masonry","Layout"],language:"english",meta:[{property:"og:title",content:"Masonry layout for Vue 2 and Vue 3"},{property:"og:description",content:"Responsive masonry layout with SSR support and zero dependencies for Vue 2 and Vue 3."},{name:"description",content:"Responsive masonry layout with SSR support and zero dependencies for Vue 2 and Vue 3."}]};return t({frontmatter:e}),o({title:"Masonry layout for Vue 2 and Vue 3",meta:[{property:"og:title",content:"Masonry layout for Vue 2 and Vue 3"},{property:"og:description",content:"Responsive masonry layout with SSR support and zero dependencies for Vue 2 and Vue 3."},{name:"description",content:"Responsive masonry layout with SSR support and zero dependencies for Vue 2 and Vue 3."}]}),(d,g)=>(s(),r("div",l,[n("h1",null,a(e.title),1),n("blockquote",null,[n("p",null,a(e.description),1)]),i]))}};export{f as date,V as default,m as description,w as language,v as meta,k as tags,h as title};
