/**
 * v-scroll-toが完了したときのコールバック
 * 遷移後のURLにハッシュをつける
 */
export const onDoneScroll = (element: Element) => {
  const elementHasId = typeof element.id !== 'undefined'
  if (elementHasId) {
    history.pushState(null, '', `#${element.id}`)
  }
}
