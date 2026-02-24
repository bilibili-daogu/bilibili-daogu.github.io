// 禁用所有 JSON 文件的渲染
hexo.extend.renderer.register('json', 'json', function(data, options){
  return data.text;
}, true);

// 跳过 games 目录下的所有文件处理
hexo.extend.filter.register('before_post_render', function(data){
  if (data.source && data.source.includes('games/')) {
    data.skip_render = true;
  }
  return data;
});

console.log('✅ 已禁用 JSON 文件渲染');