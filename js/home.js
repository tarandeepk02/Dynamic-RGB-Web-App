(
  () => {
    const setCopyRightYear = () => {
      const copy = document.querySelector('footer>kbd>span')
      copy.textContent = new Date().getFullYear()
    }
    window.onload = () => {
      setCopyRightYear()
    }
  }
)()