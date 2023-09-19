
/**
 * 获取选中文本
 */
function getRange(){
  var range = new Range(window.document);

  var sel = window.getSelection();
  if (sel && sel.rangeCount) {
    var firstRange = sel.getRangeAt(0);
    var lastRange = sel.getRangeAt(sel.rangeCount - 1);
    range.setStart(firstRange.startContainer, firstRange.startOffset)
      .setEnd(lastRange.endContainer, lastRange.endOffset);
  }
  return range
}

/**
   * 用元素替换被选中的文本
   */
function replaceSelectedStrByEle(className){
  var range = getRange();
  console.log(range)
  range.applyInlineStyle('i', {
    class: className
  });
  range.select();
}

/**
   * 添加下划线
   */
function addUnderline(){
  replaceSelectedStrByEle('custom-underline')
}
/**
   * 启用荧光笔
   */
function enableNiteWriterPen(){
  replaceSelectedStrByEle('nite-writer-pen')
}
