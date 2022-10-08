export const changeCssVariables = theme => {
  const root = document.querySelector(':root')

  const cssVariables = ['title', 'bg']

  cssVariables.forEach(item => {
    root.style.setProperty(`--theme-default-${item}`, `var(--theme-${theme}-${item})`)
  })
}